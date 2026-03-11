# Storybook 컴포넌트별 버저닝 가이드

컴포넌트마다 버전을 표시·관리하는 방법과 추천안입니다.

---

## 방법 비교

| 방법 | 장점 | 단점 |
|------|------|------|
| **1. meta.parameters.version** | 설정 간단, 스토리별로 다르게 가능 | 패키지 버전과 수동 동기화 필요 |
| **2. versions.json + MDX** | 한 곳에서 관리, Docs에 배지 표시 용이 | 파일/구조 추가 필요 |
| **3. CHANGELOG + "Last updated"** | 변경 이력 추적에 적합 | 버전 숫자보다는 날짜/이력 위주 |

---

## 추천: parameters.version + (선택) MDX 배지

- **단일 패키지 버전**은 그대로 두고, **문서/스토리에서만** 컴포넌트별 버전을 표시할 때 적합합니다.
- npm 버전과 **완전히 동기화할 필요는 없고**, “이 컴포넌트가 언제 안정화됐는지” 정도만 표시해도 됩니다.

### 1) 스토리 meta에 버전 넣기

```ts
// Button.stories.tsx
const meta = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  parameters: {
    version: '1.0.0',  // 컴포넌트 안정화/공개 버전
    // 또는 docs 페이지에만 표시: docs: { version: '1.0.0' }
  },
  // ...
} satisfies Meta<typeof Button>;
```

### 2) MDX에서 버전 표시 (선택)

parameters에서 버전을 읽어오려면 Storybook 7+ 기준으로는 **커스텀 Doc Block** 또는 **MDX에서 context/globals**를 사용해야 합니다.  
가장 단순한 방법은 **MDX 상단에 수동으로 버전 문구**를 두는 것입니다.

```mdx
# Button

**Version:** 1.0.0 (또는 패키지 버전과 동일 시 `@shoplflow/base` 최신 버전)
```

나중에 자동화하려면 `versions.json`을 두고, MDX 또는 decorator에서 컴포넌트 id별로 버전을 읽어와 표시하는 방식을 추가하면 됩니다.

---

## 대안: versions.json으로 일괄 관리

여러 컴포넌트 버전을 한 파일에서 관리하고 싶을 때 사용합니다.

1. **`.storybook/versions.json`** (또는 `src/docs/versions.json`)

```json
{
  "Button": "1.0.0",
  "Checkbox": "1.0.0",
  "Input": "0.9.0"
}
```

2. **스토리에서 참조**  
   `title` 또는 컴포넌트 이름으로 키를 맞춰서 `versions[componentName]`을 `parameters.version`에 넣거나,  
   preview decorator에서 `context.componentId` 등으로 조회해 `parameters.version`을 주입할 수 있습니다.

3. **MDX**  
   MDX는 정적이므로, 버전 표시가 필요하면 위처럼 수동 문구를 두거나,  
   Storybook addon으로 “현재 스토리의 parameters.version”을 읽어 Docs 상단에 배지를 그리는 방식으로 확장할 수 있습니다.

---

## 정리

- **간단히 쓸 때**: 각 스토리 `meta.parameters.version`에 컴포넌트 버전(또는 안정화 버전)을 넣고, 필요 시 MDX 상단에 `**Version:** x.y.z` 문구 추가.
- **한곳에서 관리할 때**: `versions.json` + decorator/addon으로 `parameters.version` 주입 후, Docs에서 동일하게 표시.
- **변경 이력 중심**: CHANGELOG를 컴포넌트/영역별로 나누어 관리하고, MDX에 “Last updated” 또는 “Since x.y.z”만 표시.

패키지 자체는 하나의 버전(`@shoplflow/base`)을 유지하고, **문서/스토리 레벨에서만** 컴포넌트별 버전을 쓰는 구성을 추천합니다.
