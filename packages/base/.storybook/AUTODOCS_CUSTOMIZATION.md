# Storybook Autodocs 커스터마이징

Storybook 10 + `@storybook/addon-docs` 기준 autodocs 동작을 바꾸는 방법입니다.

---

## 1. 전역 Autodocs 템플릿 (Doc Blocks 순서/구성)

`.storybook/preview.tsx`에서 **자동 생성되는 Docs 페이지**의 레이아웃을 한 번에 바꿀 수 있습니다.

```tsx
// .storybook/preview.tsx
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  decorators: [/* ... */],
};

export default preview;
```

- **Doc Blocks**: `Title`, `Subtitle`, `Description`, `Primary`, `Controls`, `Stories` 등 순서/조합을 바꾸면 모든 autodocs 페이지에 적용됩니다.
- 특정 스토리 파일만 다르게 보이게 하려면 해당 스토리의 `meta.parameters.docs.page`로 오버라이드할 수 있습니다.

---

## 2. main.ts에서 Autodocs 동작 설정

`.storybook/main.ts`의 `docs` 옵션으로 autodocs 켜기/끄기와 기본 이름 등을 설정합니다.

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  // ...
  docs: {
    autodocs: 'tag',  // 'true' | 'false' | 'tag' (tag일 때 meta에 tags: ['autodocs'] 있는 것만)
    defaultName: 'Docs',  // 자동 생성된 문서 탭 이름
    docsMode: false,      // 사이드바에서 문서 전용 모드
  },
};
```

- **autodocs**
  - `true`: 모든 스토리 파일에 자동으로 Docs 페이지 생성
  - `false`: 자동 생성 없음 (MDX/수동만)
  - `'tag'`: `tags: ['autodocs']`가 있는 meta만 자동 생성 (현재 프로젝트는 preview에 전역 `tags: ['autodocs']` 사용 중)

---

## 3. Docs 컨테이너 커스텀 (전체 문서 레이아웃/스타일)

문서 페이지 전체를 감싸는 컨테이너를 바꾸려면 `parameters.docs.container`를 사용합니다.

```tsx
// .storybook/preview.tsx
import { DocsContainer } from '@storybook/addon-docs';

const CustomDocsContainer = (props: any) => {
  return (
    <DocsContainer {...props}>
      {props.children}
    </DocsContainer>
  );
};

const preview: Preview = {
  parameters: {
    docs: {
      container: CustomDocsContainer,
    },
  },
};
```

여기서 레이아웃, 폰트, 여백 등 문서 전체 스타일을 적용할 수 있습니다.

---

## 4. 컴포넌트별 Autodocs 커스터마이징 (meta)

각 스토리 파일의 `meta`에서 **해당 컴포넌트 Docs**만 다르게 만들 수 있습니다.

```tsx
// Button.stories.tsx
const meta = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `
컴포넌트 설명 (마크다운 지원).

## Usage
\`\`\`tsx
<Button styleVar="PRIMARY">클릭</Button>
\`\`\`

## Accessibility
- 버튼은 포커스 가능해야 합니다.
        `,
      },
      toc: {
        title: '목차',
        headingSelector: 'h2, h3',
      },
      page: () => (<>  {/* 이 컴포넌트만 다른 Docs 레이아웃 */}  </>),
    },
  },

  argTypes: {
    styleVar: {
      description: '버튼 스타일 변형을 설정합니다.',
      table: {
        type: { summary: 'PRIMARY | SECONDARY | ...' },
        defaultValue: { summary: 'PRIMARY' },
      },
    },
  },
} satisfies Meta<typeof Button>;
```

- **description.component**: Docs 상단 컴포넌트 설명(마크다운).
- **toc**: 목차 제목/헤딩 선택자.
- **page**: 이 컴포넌트만 다른 Doc Blocks 레이아웃 사용.
- **argTypes**: Props 테이블 설명/타입/기본값 등.

---

## 5. 사용 가능한 Doc Blocks (`@storybook/addon-docs/blocks`)

| Block | 역할 |
|-------|------|
| `Meta` | 스토리 메타 연결 (MDX에서 사용) |
| `Title` | 문서 제목 |
| `Subtitle` | 부제목 |
| `Description` | 컴포넌트 설명 |
| `Primary` | Primary 스토리 캔버스 |
| `Canvas` | 지정 스토리 캔버스 (of={...}) |
| `Controls` | 인자 컨트롤 (of={...}) |
| `Stories` | 나머지 스토리 목록 |
| `ArgsTable` | 인자 테이블 (of={...} 또는 argTypes 직접) |
| `Story` | 단일 스토리 렌더 (of={...}) |
| `Source` / `CodeOrSourceMdx` | 소스 코드 표시 |

MDX에서는 이미 `Meta`, `Canvas`, `Controls` 등을 사용 중이므로, autodocs 전역 템플릿을 바꿀 때는 **preview의 `parameters.docs.page`**에서 위 블록들을 조합하면 됩니다.

---

## 요약

| 목적 | 설정 위치 |
|------|------------|
| 모든 autodocs 페이지 레이아웃/순서 | `preview.tsx` → `parameters.docs.page` |
| autodocs 켜기/끄기, 문서 탭 이름 | `main.ts` → `docs.autodocs`, `docs.defaultName` |
| 문서 전체 감싸는 레이아웃/스타일 | `preview.tsx` → `parameters.docs.container` |
| 컴포넌트별 설명/목차/레이아웃/argTypes | 각 스토리 `meta.parameters.docs` |

현재 프로젝트는 `preview.tsx`에 `tags: ['autodocs']`만 있고 `docs.page`는 없으므로, 기본 autodocs 템플릿이 사용됩니다.  
공통 순서를 바꾸려면 `parameters.docs.page`에 원하는 Doc Blocks를 넣어주면 됩니다.
