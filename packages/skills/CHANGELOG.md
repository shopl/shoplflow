# @shoplflow/skills

## 0.2.2

### Patch Changes

- [#847](https://github.com/shopl/shoplflow/pull/847) [`893c54fae36f6cdb39a06543804a54788b95ff68`](https://github.com/shopl/shoplflow/commit/893c54fae36f6cdb39a06543804a54788b95ff68) Thanks [@velo-kim](https://github.com/velo-kim)! - docs(mcp, skills): 아키텍쳐 문서 추가 + README 사용법 보강, MCP 릴리즈 배선 검증 CI 추가
  - `packages/{mcp,skills}/아키텍쳐.md` 신규: 레이어 구조, 추출 파이프라인, 설계 결정과 트레이드오프, 깨지기 쉬운 지점, 확장 가이드.
  - 두 패키지 README 보강: 클라이언트별 연결 설정, 툴 8종 전체 레퍼런스(파라미터 + 실제 응답), 인스톨러 플래그 레퍼런스, 트러블슈팅, 유지보수 가이드.
  - `@shoplflow/mcp`의 커밋된 메타데이터를 base 최신 소스로 재생성 (tokens 113→114, icons 451→473, components 63→65, story examples 142→149). 배포물은 빌드 시 재생성되므로 이전에도 최신이었고, 이번 변경은 리뷰 가능한 커밋본을 다시 맞춘 것입니다.
  - `pnpm --filter @shoplflow/mcp check:wiring` 추가: "base 릴리즈 → mcp 자동 재배포"를 성립시키는 세 가지 불변식(워크스페이스 devDeps · `build:package`의 `generate:metadata` 체인 · turbo의 `mcp#build:package` 스케줄링)을 검증합니다. 이 중 하나가 빠져도 빌드는 통과하고 재배포만 조용히 멈추므로 실행 가능한 검사로 고정했습니다.
  - PR CI(`build-test.yml`)에 배선 검증 + 커밋된 메타데이터 신선도 검사 추가.
  - `package.json`(`//` 노트) · `turbo.json` · `generate-metadata.cjs`에 위 결합 관계를 주석으로 명시.

## 0.2.1

### Patch Changes

- [#825](https://github.com/shopl/shoplflow/pull/825) [`7be087839bafada0c33e8ec092b16d337f1926eb`](https://github.com/shopl/shoplflow/commit/7be087839bafada0c33e8ec092b16d337f1926eb) Thanks [@velo-kim](https://github.com/velo-kim)! - Add plugin distribution alongside the npx installer. Consumers on Claude Code, Cursor, or Codex can now install the Shoplflow skills **and** the `@shoplflow/mcp` server in one step via a plugin (host marketplaces under `.claude-plugin/`, `.cursor-plugin/`, `.agents/plugins/`, all pointing at `packages/skills`). The `npx @shoplflow/skills` installer is unchanged and remains the skills-only fallback. README documents both paths.

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
