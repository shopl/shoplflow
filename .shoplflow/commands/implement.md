---
name: implement
description: "Design system component implementation with multi-persona + MCP"
category: workflow
complexity: standard
mcp-servers: [context7, sequential, figma, playwright, serena]
personas: [architect]
---

# /implement - 디자인 시스템 구현 커맨드

## 참조된 에이전트

## 활성화된 에이전트
- **디자인 시스템 아키텍트**: [design-system-architect](../agents/design-system-architect.md)


### 활성화된 페르소나
- **Architect**: 아키텍처 설계 및 디자인 시스템 일관성 보장

### MCP 서버
- **Context7 MCP**: 프레임워크별 공식 문서 및 패턴 참조
- **Figma MCP**: Figma 디자인 시스템과의 컴포넌트 연동
- **Sequential MCP**: 복잡한 다단계 분석 및 구현 계획 수립
- **Playwright MCP**: 테스트 검증 및 품질 보증 통합
- **Serena MCP**: 코드 생성 및 수정을 위한 MCP 서버


## Triggers
- 컴포넌트 기능 개발 요청
- 테스트 및 검증 통합이 필요한 구현 프로젝트


## Context Trigger Pattern
```
/implement [feature-description] [--type component|template] [--scope base|templates|utils|extension|assets|all] [--pkg <workspace-pkg>] [--with-tests] [--safe] [--dry-run] [--refactor] [--playwright] [--figma <figma-link>]
```

## Behavioral Flow
1. **Analyze**: 구현 요구사항 분석 및 기술 컨텍스트 감지
2. **Agent Activation**: **필수** 디자인 시스템 아키텍트 에이전트 활성화 및 지침 확인
3. **Plan**: 접근 방식 선택 및 도메인 전문가 페르소나 활성화
4. **Generate**: 프레임워크별 모범 사례 적용한 구현 코드 생성
5. **Validate**: 보안 및 품질 검증 적용
6. **Integrate**: 문서 업데이트 및 테스트 권장사항 제공

## MCP Integration
- **Context7 MCP**: React, Vue, Angular 프레임워크 패턴 및 공식 문서
- **Figma MCP**: Figma 디자인 시스템과의 컴포넌트 구현 연동
- **Sequential MCP**: 복잡한 다단계 분석 및 구현 계획 수립
- **Playwright MCP**: 테스트 검증 및 품질 보증 통합

## Tool Coordination
- **Write/Edit/MultiEdit**: 구현을 위한 코드 생성 및 수정
- **Read/Grep/Glob**: 일관성을 위한 프로젝트 분석 및 패턴 감지
- **TodoWrite**: 복잡한 다중 파일 구현을 위한 진행 상황 추적
- **Task**: 체계적인 조정이 필요한 대규모 기능 개발을 위한 위임

## Key Patterns
- **컨텍스트 감지**: 프레임워크/기술 스택 → 적절한 페르소나 및 MCP 활성화
- **에이전트 강제 활성화**: **필수** 디자인 시스템 아키텍트 에이전트 지침 준수
- **구현 흐름**: 요구사항 → 에이전트 활성화 → 코드 생성 → 검증 → 통합
- **다중 페르소나 조정**: Frontend + Architect + QA → 포괄적인 솔루션
- **품질 통합**: 구현 → 테스트 → 문서화 → 검증

## Examples

### 디자인 시스템 컴포넌트
```
/implement button component --type component --scope base --with-tests
# Frontend 페르소나가 컴포넌트 설계 및 구현 처리
# Architect 페르소나가 디자인 시스템 일관성 보장
```

### Template 기능
```
/implement attachment list --type template --scope templates --with-tests
# 1. 디자인 시스템 아키텍트 에이전트 활성화 (필수)
# 2. 기존 컴포넌트 재사용 가능성 검토 (필수)
# 3. 구현 계획 사용자 승인 (필수)
# 4. 다중 페르소나 조정: architect, frontend, qa
# 5. Sequential MCP가 복잡한 구현 단계를 분해
```

## Boundaries

**Will:**
- 지능적인 페르소나 활성화와 MCP 조정으로 디자인 시스템 컴포넌트 구현

**Will Not:**
- **에이전트 활성화 없이 구현 시작 (절대 금지)**
- **기존 컴포넌트 검토 없이 새 컴포넌트 작성 (절대 금지)**
- **사용자 승인 없이 구현 진행 (절대 금지)**
- 적절한 페르소나 상담 없이 아키텍처 결정
- 디자인 시스템 정책이나 아키텍처 제약과 충돌하는 기능 구현