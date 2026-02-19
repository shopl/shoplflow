# 컴포넌트 버전

`@shoplflow/base` 패키지 내 컴포넌트별 **샤플플로우 버전**(구현/코드)과 **디자인 버전**(Figma 등 디자인 스펙)을 관리·비교하는 표입니다.  
두 버전이 맞을수록 구현과 디자인이 동기화된 상태이며, 현황 컬럼(🟢/🔴)으로 한눈에 확인할 수 있습니다.  
**샤플플로우 버전**은 **메이저.마이너.패치**(예: 2.0.0), **디자인 버전**은 **메이저.마이너**(예: 2.0)까지만 표기합니다. 컴포넌트별 버전이 없던 시점부터 **2.0.0** / **2.0**으로 시작합니다.

## 버전 테이블

| 카테고리 | 컴포넌트 | 샤플플로우 버전 | 디자인 버전 | 현황 |
|----------|----------|-----------------|-------------|------|
| Avatar | Avatar | 2.0.1 | 2.0 | 🟢 |
| BackDrop | BackDrop | 2.0.1 | 2.0 | 🟢 |
| Buttons | Button | 2.0.1 | 2.0 | 🟢 |
| Buttons | DropdownButton | 2.0.1 | 2.0 | 🟢 |
| Buttons | IconButton | 2.0.1 | 2.0 | 🟢 |
| Buttons | SplitButton | 2.0.1 | 2.0 | 🟢 |
| Callout | Callout | 2.0.1 | 2.0 | 🟢 |
| Chips | ChipButton | 2.0.1 | 2.0 | 🟢 |
| Chips | ChipToggle | 2.0.1 | 2.0 | 🟢 |
| Comboboxs | NumberCombobox | 2.0.1 | 2.0 | 🟢 |
| ControlButtons | Checkbox | 2.0.1 | 2.0 | 🟢 |
| ControlButtons | MinusButton | 2.0.1 | 2.0 | 🟢 |
| ControlButtons | Radio | 2.0.1 | 2.0 | 🟢 |
| Datepickers | AnnualDatepicker | 2.0.1 | 2.0 | 🟢 |
| Datepickers | DayDatepicker | 2.0.1 | 2.0 | 🟢 |
| Datepickers | MonthDatepicker | 2.0.1 | 2.0 | 🟢 |
| Datepickers | WeekDatepicker | 2.0.1 | 2.0 | 🟢 |
| Dropdown | Dropdown | 2.0.1 | 2.0 | 🟢 |
| Icon | Icon | 2.0.1 | 2.0 | 🟢 |
| Inputs | Input | 2.0.1 | 2.0 | 🟢 |
| Inputs | InputButton | 2.0.1 | 2.0 | 🟢 |
| Inputs | SelectInputButton | 2.0.1 | 2.0 | 🟢 |
| Inputs | TextArea | 2.0.1 | 2.0 | 🟢 |
| List | List | 2.0.1 | 2.0 | 🟢 |
| Menu | Menu | 2.0.1 | 2.0 | 🟢 |
| Modal | Modal | 2.0.1 | 2.0 | 🟢 |
| Pagination | Pagination | 2.0.1 | 2.0 | 🟢 |
| Popper | Popper | 2.0.1 | 2.0 | 🟢 |
| ScrollArea | ScrollArea | 2.0.1 | 2.0 | 🟢 |
| SearchBar | SearchBar | 2.0.1 | 2.0 | 🟢 |
| Skeleton | Skeleton | 2.0.1 | 2.0 | 🟢 |
| Slider | Slider | 2.0.1 | 2.0 | 🟢 |
| Stack | Stack | 2.0.1 | 2.0 | 🟢 |
| StackContainer | StackContainer | 2.0.1 | 2.0 | 🟢 |
| Switch | Switch | 2.0.1 | 2.0 | 🟢 |
| Tabs | Tabs | 2.0.1 | 2.0 | 🟢 |
| Tag | Tag | 2.0.1 | 2.0 | 🟢 |
| Text | Text | 2.0.1 | 2.0 | 🟢 |
| ToggleButton | ToggleButton | 2.0.1 | 2.0 | 🟢 |
| Tooltip | Tooltip | 2.0.1 | 2.0 | 🟢 |
| Tree | Tree | 2.0.1 | 2.0 | 🟢 |

**현황** (메이저·마이너 버전 기준)  
- 🟢 샤플플로우 버전과 디자인 버전의 **메이저·마이너가 동일**함 (예: 2.0.0 vs 2.0 → 🟢)  
- 🔴 메이저·마이너가 **다름** (예: 2.0.0 vs 2.1 → 🔴)  

## 업데이트 방법

- **샤플플로우 버전**은 `메이저.마이너.패치`(예: 2.0.0), **디자인 버전**은 `메이저.마이너`(예: 2.0)까지만 적습니다.
- 버전 수정 후 **현황**은 두 버전의 메이저·마이너가 같으면 🟢, 다르면 🔴로 바꿔주세요.
- 메이저 변경(breaking change) 시 메이저, 마이너/패치 변경 시 해당 자리를 올리는 semver 규칙을 권장합니다.

### 자동 버전 관리 (version.ts 단일 소스)

- **샤플플로우 버전**의 단일 소스는 각 컴포넌트의 `src/components/*/version.ts`입니다.
- **version.ts → VERSIONING.md 동기화**: `pnpm --filter @shoplflow/base version:sync` — 각 `version.ts`를 읽어 이 테이블의 샤플플로우 버전 컬럼을 갱신합니다.
- **pre-commit**:
  - 컴포넌트 **코드** 변경 시: 해당 카테고리 `version.ts` 패치를 자동으로 올리고, VERSIONING.md를 동기화한 뒤 스테이징합니다.
  - **version.ts만** 변경 시: VERSIONING.md를 `version.ts` 기준으로 동기화한 뒤 스테이징합니다.
- 메이저/마이너는 `version.ts`를 직접 수정한 뒤 커밋하면 pre-commit에서 테이블이 자동으로 맞춰집니다.
