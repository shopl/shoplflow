#!/usr/bin/env bash
# 컴포넌트 공개 API(사용법)가 main과 비교해 어떻게 바뀌었는지 검사한다.
#
# 근거 데이터: packages/mcp/src/data/components.generated.json
#   (generate:metadata가 *.types.ts에서 뽑은 컴포넌트별 prop 이름·필수 여부·타입·variant 값)
#   ④ verify에서 generate:metadata를 먼저 돌린 뒤 실행한다.
#
# 분류
#   깨짐(breaking)  : 컴포넌트 삭제, prop 삭제, 선택 → 필수, prop 타입 변경, variant 값 삭제, nativeAttrs 변경
#   추가(additive)  : 컴포넌트 추가, prop 추가(선택), variant 값 추가
#   주의            : 필수 prop 추가 (기존 코드가 타입 에러)
# 그리고 바뀐 컴포넌트를 모노레포 안에서 쓰는 곳을 찾는다 (templates, 다른 base 컴포넌트).
#
# 사용 (작업 브랜치 / worktree 루트에서):
#   bash <skill>/scripts/check-api-changes.sh            # origin/main 기준
#   bash <skill>/scripts/check-api-changes.sh <git-ref>  # 다른 기준
# exit: 0 = 깨짐 없음, 1 = 깨짐 있음, 2 = 실행 오류
set -uo pipefail

BASE_REF="${1:-origin/main}"
FILE="packages/mcp/src/data/components.generated.json"

ROOT=$(git rev-parse --show-toplevel) || { echo "git 저장소 안에서 실행하세요."; exit 2; }
cd "$ROOT"
[ -f "$FILE" ] || { echo "$FILE 이 없어요. pnpm --filter @shoplflow/mcp generate:metadata 를 먼저 실행하세요."; exit 2; }

OLD_JSON=$(git show "$BASE_REF:$FILE" 2>/dev/null) || { echo "$BASE_REF 에 $FILE 이 없어요."; exit 2; }

REPORT=$(jq -n --argjson old "$OLD_JSON" --slurpfile new "$FILE" '
  def bymap(a): reduce a[] as $c ({}; .[$c.name] = $c);
  def propmap(c): reduce (c.props // [])[] as $p ({}; .[$p.name] = $p);
  def varmap(c): reduce (c.variants // [])[] as $v ({}; .[$v.prop] = ($v.values // []));
  (bymap($old.components)) as $o | (bymap($new[0].components)) as $n
  | [
      ($o | keys[] | select($n[.] == null) | {level:"breaking", comp:., what:"컴포넌트 삭제"}),
      ($n | keys[] | select($o[.] == null) | {level:"additive", comp:., what:"컴포넌트 추가"}),
      ($o | keys[] | select($n[.] != null) as $k
        | ($o[$k]) as $oc | ($n[$k]) as $nc
        | (propmap($oc)) as $op | (propmap($nc)) as $np
        | (varmap($oc)) as $ov | (varmap($nc)) as $nv
        | (
            ($op | keys[] | select($np[.] == null) | {level:"breaking", comp:$k, what:"prop 삭제: \(.)"}),
            ($np | keys[] | select($op[.] == null) as $p
              | if ($np[$p].optional == false) then {level:"warning", comp:$k, what:"필수 prop 추가: \($p) (기존 코드 타입 에러)"}
                else {level:"additive", comp:$k, what:"prop 추가: \($p)"} end),
            ($op | keys[] | select($np[.] != null) as $p
              # jq의 // 는 false도 "없음"으로 보므로 optional은 == 로 비교한다
              | ( if (($op[$p].optional != false) and ($np[$p].optional == false))
                    then {level:"breaking", comp:$k, what:"선택 → 필수: \($p)"} else empty end ),
                ( if ($op[$p].type != $np[$p].type)
                    then {level:"breaking", comp:$k, what:"타입 변경: \($p) (\($op[$p].type) → \($np[$p].type))"} else empty end )),
            ($ov | keys[] as $vp
              | (($ov[$vp]) - ($nv[$vp] // [])) as $gone
              | (($nv[$vp] // []) - ($ov[$vp])) as $added
              | ( if ($gone | length) > 0 then {level:"breaking", comp:$k, what:"\($vp) 값 삭제: \($gone | join(", "))"} else empty end ),
                ( if ($added | length) > 0 then {level:"additive", comp:$k, what:"\($vp) 값 추가: \($added | join(", "))"} else empty end )),
            ($nv | keys[] | select($ov[.] == null) | {level:"additive", comp:$k, what:"새 variant prop: \(.)"}),
            ( if ($oc.nativeAttrs != $nc.nativeAttrs)
                then {level:"breaking", comp:$k, what:"기본 HTML 속성 변경: \($oc.nativeAttrs) → \($nc.nativeAttrs)"} else empty end )
          ))
    ]')

COUNT() { echo "$REPORT" | jq "[.[] | select(.level == \"$1\")] | length"; }
B=$(COUNT breaking); W=$(COUNT warning); A=$(COUNT additive)

echo "기준: $BASE_REF  ($FILE)"
echo
if [ "$((B + W + A))" -eq 0 ]; then
  echo "공개 API 변경 없음 (prop·variant·컴포넌트 목록 동일)"
else
  echo "$REPORT" | jq -r '
    (map(select(.level=="breaking")) | if length>0 then "✘ 기존 사용법이 깨질 수 있음", (.[] | "    \(.comp): \(.what)") else empty end),
    (map(select(.level=="warning"))  | if length>0 then "! 주의", (.[] | "    \(.comp): \(.what)") else empty end),
    (map(select(.level=="additive")) | if length>0 then "✔ 추가만 (기존 사용법 유지)", (.[] | "    \(.comp): \(.what)") else empty end)'
fi

# 바뀐 컴포넌트를 모노레포 안에서 쓰는 곳 (자기 폴더·스토리·figma 제외)
# 새로 추가된 컴포넌트는 쓰는 곳이 있을 수 없으니 제외. 삭제된 컴포넌트는 main 데이터에서 그룹을 찾는다.
CHANGED=$(echo "$REPORT" | jq -r '[.[] | select((.what | startswith("컴포넌트 추가")) | not) | .comp] | unique[]')
COMP_GROUPS=$(for c in $CHANGED; do
  { jq -r --arg c "$c" '.components[] | select(.name==$c) | (.group // .name)' "$FILE"
    echo "$OLD_JSON" | jq -r --arg c "$c" '.components[] | select(.name==$c) | (.group // .name)'; } | head -1
done | sort -u)
if [ -n "$COMP_GROUPS" ]; then
  echo
  echo "모노레포 안에서 쓰는 곳 (변경된 컴포넌트):"
  for g in $COMP_GROUPS; do
    HITS=$(grep -rlE "<$g[ .>/]|\b$g\.[A-Z]" packages/base/src packages/templates/src 2>/dev/null \
      | grep -v -E "/$g/|\.stories\.tsx$|\.figma\.tsx$|\.test\.tsx?$" || true)
    if [ -n "$HITS" ]; then
      echo "  $g:"; echo "$HITS" | sed 's/^/    /'
    else
      echo "  $g: 없음"
    fi
  done
fi

echo
echo "이 스크립트가 못 잡는 것 (직접 확인): 기본값 변경, 스타일·레이아웃 변화, 동작(이벤트·포커스) 변화, 잘못된 HTML 중첩"
[ "$B" -gt 0 ] && exit 1
exit 0
