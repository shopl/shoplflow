# @shoplflow/skills

## 0.2.0

### Minor Changes

- [#823](https://github.com/shopl/shoplflow/pull/823) [`c553b9278aa3f132497c45b8ac791e85394bb9a5`](https://github.com/shopl/shoplflow/commit/c553b9278aa3f132497c45b8ac791e85394bb9a5) Thanks [@velo-kim](https://github.com/velo-kim)! - feat(skills): Cursor 네이티브 Agent Skills 전환 + 자동 마이그레이션 + 버전 체크 스킬
  - **Cursor 네이티브 설치**: `.cursor/rules/*.mdc` 변환 대신 SKILL.md를 그대로 `.cursor/skills/<name>/SKILL.md`에 설치(글로벌 `~/.cursor/skills/` 포함). 구버전 호환용 `--legacy-cursor-rules` 플래그 추가.
  - **레거시 자동 정리**: 네이티브 재설치 시 이전 버전이 만든 `.cursor/rules/shoplflow-*.mdc`(우리 슬러그만)를 자동 제거해 중복 방지.
  - **버전 스탬프**: 설치 위치에 `shoplflow-skills.lock.json`(Codex는 AGENTS.md 블록)으로 설치 버전 기록.
  - **신규 스킬 `shoplflow-skills-update`**: 기록된 버전을 `npm view @shoplflow/skills version`과 비교해 최신 여부 확인·업데이트 안내.

## 0.1.0

### Minor Changes

- [#821](https://github.com/shopl/shoplflow/pull/821) [`b702ab59f54ccde09c9d79aff85323b71ba1dcb7`](https://github.com/shopl/shoplflow/commit/b702ab59f54ccde09c9d79aff85323b71ba1dcb7) Thanks [@velo-kim](https://github.com/velo-kim)! - feat(skills): @shoplflow 패키지 소비자를 위한 AI 에이전트 스킬 패키지 추가

  `@shoplflow/*` 패키지를 가져다 쓰는 외부 개발자가 `npx @shoplflow/skills`로 설치할 수 있는 스킬 번들. setup·components·theming·icons-utils 4개 스킬을 Claude Code / Codex / Cursor 각각의 네이티브 형식으로 설치한다.

- [#821](https://github.com/shopl/shoplflow/pull/821) [`b702ab59f54ccde09c9d79aff85323b71ba1dcb7`](https://github.com/shopl/shoplflow/commit/b702ab59f54ccde09c9d79aff85323b71ba1dcb7) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: skills packages 생성
