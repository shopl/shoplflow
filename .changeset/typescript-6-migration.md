---
"@shoplflow/base": patch
"@shoplflow/templates": patch
"@shoplflow/utils": patch
"@shoplflow/shopl-assets": patch
"@shoplflow/hada-assets": patch
"@shoplflow/mcp": patch
---

chore: TypeScript 6 (6.0.3) 마이그레이션 및 단일 버전 고정

- 워크스페이스 전 패키지의 TypeScript 를 `6.0.3` 으로 통일 (pnpm-workspace.yaml `catalog:` 로 단일 소스 관리, `pnpm.overrides` 로 transitive 의존성까지 강제)
- TS 7 제거 예정 옵션 정리: `baseUrl` 제거, `moduleResolution: node → bundler` (utils·shopl-assets 는 `module` 도 `esnext` 로 조정). 배포 번들 포맷(CJS/ESM)은 tsup 이 결정하므로 변화 없음
- `target: es5` 는 배포물의 ES5 다운레벨(구형 브라우저 지원) 유지를 위해 존치하고, 이 옵션만 `ignoreDeprecations: "6.0"` 로 억제
- CSS side-effect import 대응 `*.css` 모듈 선언 추가 (base·templates)
- 소스/공개 API 변경 없음 (빌드 툴체인 변경)
