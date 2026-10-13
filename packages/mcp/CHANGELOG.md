# @shoplflow/mcp

## 0.1.4

### Patch Changes

- [#865](https://github.com/shopl/shoplflow/pull/865) [`af7ba1a25c0a66fa5ac067bba59f44afddfa926c`](https://github.com/shopl/shoplflow/commit/af7ba1a25c0a66fa5ac067bba59f44afddfa926c) Thanks [@velo-kim](https://github.com/velo-kim)! - fix(mcp): base·assets 릴리즈 시 mcp가 함께 재배포되도록 수정
  - 원인: mcp는 base·assets를 `devDependencies`로만 참조하는데, changesets는 devDependency로만 엮인 dependent를 범프하지 않습니다(`updateInternalDependents: "always"`여도 `none`). 그래서 #861·#863에서 base는 배포됐지만 mcp는 배포되지 않아, npm의 mcp(0.1.3)가 낡은 메타데이터를 제공하고 있었습니다.
  - `ensure:changeset` 추가: 루트 `version` 스크립트가 `changeset version` 직전에 실행해, 대기 중인 changeset이 base·shopl-assets·hada-assets를 릴리즈하면 `@shoplflow/mcp: patch` changeset을 자동으로 추가합니다. 단방향이라 mcp만 바뀐 릴리즈는 base를 재배포하지 않습니다. 건너뛰려면 changeset에 `"@shoplflow/mcp": none`을 적습니다.
  - `check:wiring`에 `version` 스크립트 연결 검사를 추가하고, 잘못된 전제를 적은 주석·문서(package.json, turbo.json, README, 아키텍쳐.md)를 바로잡았습니다.
  - 이번 릴리즈로 그동안 누락된 base·아이콘 변경분 메타데이터가 함께 배포됩니다.

## 0.1.3

### Patch Changes

- [#847](https://github.com/shopl/shoplflow/pull/847) [`893c54fae36f6cdb39a06543804a54788b95ff68`](https://github.com/shopl/shoplflow/commit/893c54fae36f6cdb39a06543804a54788b95ff68) Thanks [@velo-kim](https://github.com/velo-kim)! - docs(mcp, skills): 아키텍쳐 문서 추가 + README 사용법 보강, MCP 릴리즈 배선 검증 CI 추가
  - `packages/{mcp,skills}/아키텍쳐.md` 신규: 레이어 구조, 추출 파이프라인, 설계 결정과 트레이드오프, 깨지기 쉬운 지점, 확장 가이드.
  - 두 패키지 README 보강: 클라이언트별 연결 설정, 툴 8종 전체 레퍼런스(파라미터 + 실제 응답), 인스톨러 플래그 레퍼런스, 트러블슈팅, 유지보수 가이드.
  - `@shoplflow/mcp`의 커밋된 메타데이터를 base 최신 소스로 재생성 (tokens 113→114, icons 451→473, components 63→65, story examples 142→149). 배포물은 빌드 시 재생성되므로 이전에도 최신이었고, 이번 변경은 리뷰 가능한 커밋본을 다시 맞춘 것입니다.
  - `pnpm --filter @shoplflow/mcp check:wiring` 추가: "base 릴리즈 → mcp 자동 재배포"를 성립시키는 세 가지 불변식(워크스페이스 devDeps · `build:package`의 `generate:metadata` 체인 · turbo의 `mcp#build:package` 스케줄링)을 검증합니다. 이 중 하나가 빠져도 빌드는 통과하고 재배포만 조용히 멈추므로 실행 가능한 검사로 고정했습니다.
  - PR CI(`build-test.yml`)에 배선 검증 + 커밋된 메타데이터 신선도 검사 추가.
  - `package.json`(`//` 노트) · `turbo.json` · `generate-metadata.cjs`에 위 결합 관계를 주석으로 명시.

## 0.1.2

### Patch Changes

- [#836](https://github.com/shopl/shoplflow/pull/836) [`d59da41fa0da8f77a2a31effcd6d88806160147e`](https://github.com/shopl/shoplflow/commit/d59da41fa0da8f77a2a31effcd6d88806160147e) Thanks [@velo-kim](https://github.com/velo-kim)! - chore: TypeScript 6 (6.0.3) 마이그레이션 및 단일 버전 고정
  - 워크스페이스 전 패키지의 TypeScript 를 `6.0.3` 으로 통일 (pnpm-workspace.yaml `catalog:` 로 단일 소스 관리, `pnpm.overrides` 로 transitive 의존성까지 강제)
  - TS 7 제거 예정 옵션 정리: `baseUrl` 제거, `moduleResolution: node → bundler` (utils·shopl-assets 는 `module` 도 `esnext` 로 조정). 배포 번들 포맷(CJS/ESM)은 tsup 이 결정하므로 변화 없음
  - `target: es5` 는 배포물의 ES5 다운레벨(구형 브라우저 지원) 유지를 위해 존치하고, 이 옵션만 `ignoreDeprecations: "6.0"` 로 억제
  - CSS side-effect import 대응 `*.css` 모듈 선언 추가 (base·templates)
  - 소스/공개 API 변경 없음 (빌드 툴체인 변경)

## 0.1.1

### Patch Changes

- [#819](https://github.com/shopl/shoplflow/pull/819) [`b50d0d9db283c5c2da97f23f818ffaf109c7ebc9`](https://github.com/shopl/shoplflow/commit/b50d0d9db283c5c2da97f23f818ffaf109c7ebc9) Thanks [@velo-kim](https://github.com/velo-kim)! - ToggleButton: fullWidth, buttonLineClamp prop 추가.
  - fullWidth: true이면 Wrapper가 부모 가용 너비를 100% 채우고 각 InnerRadio를 동일 비율(flex:1)로 분배합니다. fullWidth가 true일 때 fixedWidth는 생략 가능하고, fullWidth가 없으면 기존처럼 fixedWidth가 필수입니다(타입 레벨에서 강제).
  - buttonLineClamp: 값이 있으면 각 InnerRadio 라벨 텍스트를 지정한 줄 수로 제한(line-clamp)하고 말줄임(…) 처리합니다.

## 0.1.0

### Minor Changes

- [#813](https://github.com/shopl/shoplflow/pull/813) [`ef0c15fdb681fa966fca6579744ec076f61765ef`](https://github.com/shopl/shoplflow/commit/ef0c15fdb681fa966fca6579744ec076f61765ef) Thanks [@velo-kim](https://github.com/velo-kim)! - First release of `@shoplflow/mcp` — a Model Context Protocol (stdio) server that exposes the shoplflow design system to AI coding agents so they build UI against real tokens, components, and icons instead of hallucinating them.

  Surfaces:
  - **Tokens** — `list_tokens`, `get_token`, resource `shoplflow://tokens`
  - **Icons** — `search_icon` (shopl + hada sets)
  - **Components** — `search_component`, `get_component_api`, resource `shoplflow://components`
  - **Usage examples** — `get_usage_example` (from stories, test code stripped)
  - **Setup & environment** — `get_setup_guide`, `check_environment`, plus an always-on `instructions` preflight (mandatory `ShoplflowProvider` + global CSS; client-only / Next.js constraints)

  All metadata is generated at build time from the same sources that build `@shoplflow/base`, so it can't drift from what ships.

  Connect from any MCP client:

  ```json
  {
    "mcpServers": {
      "shoplflow": { "command": "npx", "args": ["-y", "@shoplflow/mcp"] }
    }
  }
  ```

### Patch Changes

- [#813](https://github.com/shopl/shoplflow/pull/813) [`ef0c15fdb681fa966fca6579744ec076f61765ef`](https://github.com/shopl/shoplflow/commit/ef0c15fdb681fa966fca6579744ec076f61765ef) Thanks [@velo-kim](https://github.com/velo-kim)! - shoplflow/mcp 생성 및 테스트
