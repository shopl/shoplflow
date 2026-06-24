---
"@shoplflow/skills": minor
---

feat(skills): Cursor 설치를 네이티브 Agent Skills(`.cursor/skills/<name>/SKILL.md`)로 전환

Cursor가 SKILL.md 표준을 네이티브 지원함에 따라, 기존 `.cursor/rules/*.mdc` 변환 대신 SKILL.md를 그대로 `.cursor/skills/`에 설치한다(글로벌 `~/.cursor/skills/` 포함). 구버전 Cursor 호환을 위해 `--legacy-cursor-rules` 플래그를 추가해 기존 `.cursor/rules/*.mdc` 방식도 선택 가능.
