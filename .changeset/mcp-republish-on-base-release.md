---
"@shoplflow/mcp": patch
---

fix(mcp): base·assets 릴리즈 시 mcp가 함께 재배포되도록 수정

- 원인: mcp는 base·assets를 `devDependencies`로만 참조하는데, changesets는 devDependency로만 엮인 dependent를 범프하지 않습니다(`updateInternalDependents: "always"`여도 `none`). 그래서 #861·#863에서 base는 배포됐지만 mcp는 배포되지 않아, npm의 mcp(0.1.3)가 낡은 메타데이터를 제공하고 있었습니다.
- `ensure:changeset` 추가: 루트 `version` 스크립트가 `changeset version` 직전에 실행해, 대기 중인 changeset이 base·shopl-assets·hada-assets를 릴리즈하면 `@shoplflow/mcp: patch` changeset을 자동으로 추가합니다. 단방향이라 mcp만 바뀐 릴리즈는 base를 재배포하지 않습니다. 건너뛰려면 changeset에 `"@shoplflow/mcp": none`을 적습니다.
- `check:wiring`에 `version` 스크립트 연결 검사를 추가하고, 잘못된 전제를 적은 주석·문서(package.json, turbo.json, README, 아키텍쳐.md)를 바로잡았습니다.
- 이번 릴리즈로 그동안 누락된 base·아이콘 변경분 메타데이터가 함께 배포됩니다.
