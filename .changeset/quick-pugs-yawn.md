---
"@shoplflow/mcp": patch
"@shoplflow/skills": patch
---

docs(mcp, skills): 아키텍쳐 문서 추가 + README 사용법 보강, MCP 릴리즈 배선 검증 CI 추가

- `packages/{mcp,skills}/아키텍쳐.md` 신규: 레이어 구조, 추출 파이프라인, 설계 결정과 트레이드오프, 깨지기 쉬운 지점, 확장 가이드.
- 두 패키지 README 보강: 클라이언트별 연결 설정, 툴 8종 전체 레퍼런스(파라미터 + 실제 응답), 인스톨러 플래그 레퍼런스, 트러블슈팅, 유지보수 가이드.
- `@shoplflow/mcp`의 커밋된 메타데이터를 base 최신 소스로 재생성 (tokens 113→114, icons 451→473, components 63→65, story examples 142→149). 배포물은 빌드 시 재생성되므로 이전에도 최신이었고, 이번 변경은 리뷰 가능한 커밋본을 다시 맞춘 것입니다.
- `pnpm --filter @shoplflow/mcp check:wiring` 추가: "base 릴리즈 → mcp 자동 재배포"를 성립시키는 세 가지 불변식(워크스페이스 devDeps · `build:package`의 `generate:metadata` 체인 · turbo의 `mcp#build:package` 스케줄링)을 검증합니다. 이 중 하나가 빠져도 빌드는 통과하고 재배포만 조용히 멈추므로 실행 가능한 검사로 고정했습니다.
- PR CI(`build-test.yml`)에 배선 검증 + 커밋된 메타데이터 신선도 검사 추가.
- `package.json`(`//` 노트) · `turbo.json` · `generate-metadata.cjs`에 위 결합 관계를 주석으로 명시.
