---
"@shoplflow/skills": minor
---

feat(skills): Cursor 네이티브 Agent Skills 전환 + 자동 마이그레이션 + 버전 체크 스킬

- **Cursor 네이티브 설치**: `.cursor/rules/*.mdc` 변환 대신 SKILL.md를 그대로 `.cursor/skills/<name>/SKILL.md`에 설치(글로벌 `~/.cursor/skills/` 포함). 구버전 호환용 `--legacy-cursor-rules` 플래그 추가.
- **레거시 자동 정리**: 네이티브 재설치 시 이전 버전이 만든 `.cursor/rules/shoplflow-*.mdc`(우리 슬러그만)를 자동 제거해 중복 방지.
- **버전 스탬프**: 설치 위치에 `shoplflow-skills.lock.json`(Codex는 AGENTS.md 블록)으로 설치 버전 기록.
- **신규 스킬 `shoplflow-skills-update`**: 기록된 버전을 `npm view @shoplflow/skills version`과 비교해 최신 여부 확인·업데이트 안내.
