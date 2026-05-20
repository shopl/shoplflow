# @shoplflow/base

## 0.46.33

### Patch Changes

- [#805](https://github.com/shopl/shoplflow/pull/805) [`ffe8ebb1198fdec737f481b4761a6af2521978bf`](https://github.com/shopl/shoplflow/commit/ffe8ebb1198fdec737f481b4761a6af2521978bf) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - Checkbox·Radio·Switch 등 컨트롤 컴포넌트에 ARIA role 및 상태 속성 추가했어요

## 0.46.32

### Patch Changes

- [`fd1b488f4330368758693611a89a44e2252ec773`](https://github.com/shopl/shoplflow/commit/fd1b488f4330368758693611a89a44e2252ec773) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Text 컴포넌트의 `overflowWrap` 기본값 변경 영향으로 `SelectInputButton`의 다중 선택 카운터(`+N`)에서 두 자리 이상 숫자가 글자 단위로 줄바꿈되어 깨져 보이는 문제를 수정했습니다. 카운터 텍스트에 `overflowWrap='normal'`을 명시해 회귀를 방지합니다.

## 0.46.31

### Patch Changes

- [`f110b1825aa6c55975e2a4d9bc33ff262cb9d568`](https://github.com/shopl/shoplflow/commit/f110b1825aa6c55975e2a4d9bc33ff262cb9d568) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Text 컴포넌트의 `overflowWrap` 기본값 변경 영향으로 Input의 글자수 카운터(`TextCounter`)에서 두 자리 이상 숫자가 글자 단위로 줄바꿈되어 깨져 보이는 문제를 수정했습니다. `TextCounter` 내부 숫자 텍스트에 `overflowWrap='normal'`을 명시해 회귀를 방지합니다.

## 0.46.30

### Patch Changes

- [`91469e2120c509ef0fb0c666f575b3890686cd70`](https://github.com/shopl/shoplflow/commit/91469e2120c509ef0fb0c666f575b3890686cd70) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Text 컴포넌트에 `overflowWrap` prop을 추가했습니다. 기본값은 `anywhere`이며, 긴 단어/URL 등이 컨테이너를 넘어가는 상황에서 줄바꿈 동작을 제어할 수 있습니다.

## 0.46.29

### Patch Changes

- [#800](https://github.com/shopl/shoplflow/pull/800) [`b010853ed990eb658d0aa77f199bf2423616b071`](https://github.com/shopl/shoplflow/commit/b010853ed990eb658d0aa77f199bf2423616b071) Thanks [@velo-kim](https://github.com/velo-kim)! - Update SelectInputButton error status를 추가했어요

## 0.46.28

### Patch Changes

- [#798](https://github.com/shopl/shoplflow/pull/798) [`03b2a886c0cd5ca640d70be629cad07049466c7d`](https://github.com/shopl/shoplflow/commit/03b2a886c0cd5ca640d70be629cad07049466c7d) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - Modal height 100% 추가 및 ux 개선

## 0.46.27

### Patch Changes

- [`4965016e1398fc4b69ea5202f0b026a1fce9169c`](https://github.com/shopl/shoplflow/commit/4965016e1398fc4b69ea5202f0b026a1fce9169c) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Pagination에서 좌우 소스 영역의 아이템 개수와 폭이 달라져도 가운데 네비게이션 위치가 흔들리거나 겹치지 않도록 레이아웃을 개선했습니다.

## 0.46.26

### Patch Changes

- Updated dependencies [[`312275acc37fef7382930aebe85be56392cf65ad`](https://github.com/shopl/shoplflow/commit/312275acc37fef7382930aebe85be56392cf65ad)]:
  - @shoplflow/shopl-assets@0.12.43

## 0.46.25

### Patch Changes

- Updated dependencies [[`4af9d5e4110371fdb0f8b27af87db99991d9ec0c`](https://github.com/shopl/shoplflow/commit/4af9d5e4110371fdb0f8b27af87db99991d9ec0c)]:
  - @shoplflow/shopl-assets@0.12.42

## 0.46.24

### Patch Changes

- Updated dependencies [[`73aa61073f613bd880a7ebed76c6eaaa1cbbf858`](https://github.com/shopl/shoplflow/commit/73aa61073f613bd880a7ebed76c6eaaa1cbbf858)]:
  - @shoplflow/shopl-assets@0.12.41

## 0.46.23

### Patch Changes

- [`dee652f36f8296947975923fb3853aea835ee0b9`](https://github.com/shopl/shoplflow/commit/dee652f36f8296947975923fb3853aea835ee0b9) Thanks [@ayaan0209](https://github.com/ayaan0209)! - ChipButton: `radius` prop으로 모서리 둥글기(BorderRadius 토큰)를 지정할 수 있게 하고, Storybook Playground에 해당 컨트롤을 추가합니다.

## 0.46.22

### Patch Changes

- Updated dependencies [[`2bb89364defcfe60d2924c2bf46a539968dec125`](https://github.com/shopl/shoplflow/commit/2bb89364defcfe60d2924c2bf46a539968dec125)]:
  - @shoplflow/shopl-assets@0.12.40

## 0.46.21

### Patch Changes

- [`c63291fe0220be3f9a73cc0c9aaf89d75aa9a809`](https://github.com/shopl/shoplflow/commit/c63291fe0220be3f9a73cc0c9aaf89d75aa9a809) Thanks [@ayaan0209](https://github.com/ayaan0209)! - PaginationSizeSelector: 선택된 페이지 크기 텍스트 색상을 neutral400에서 neutral700으로 조정해 가독성을 개선합니다.

## 0.46.20

### Patch Changes

- [#778](https://github.com/shopl/shoplflow/pull/778) [`a6933b431264288460976e6b3185d1df3d795dba`](https://github.com/shopl/shoplflow/commit/a6933b431264288460976e6b3185d1df3d795dba) Thanks [@github-actions](https://github.com/apps/github-actions)! - Pagination: Shopl 중앙 정렬 레이아웃에서 leftSource/rightSource 클릭 불가 수정 (pointer-events)

## 0.46.19

### Patch Changes

- [`e27d4811bfc42229721a59503a4efc5600c676f4`](https://github.com/shopl/shoplflow/commit/e27d4811bfc42229721a59503a4efc5600c676f4) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Pagination: Shopl 중앙 정렬 레이아웃에서 leftSource/rightSource 클릭 불가 수정 (pointer-events)

## 0.46.18

### Patch Changes

- [#773](https://github.com/shopl/shoplflow/pull/773) [`47d7c544c9e38ac3020c12e4029a5d01c2651b39`](https://github.com/shopl/shoplflow/commit/47d7c544c9e38ac3020c12e4029a5d01c2651b39) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - dayDatePicker 하단 마진 추가 및 WeekDatePicker sizeVar 추가

## 0.46.17

### Patch Changes

- [#771](https://github.com/shopl/shoplflow/pull/771) [`45175f6d4598e535addd517e1224dc8614d5b4cb`](https://github.com/shopl/shoplflow/commit/45175f6d4598e535addd517e1224dc8614d5b4cb) Thanks [@ayaan0209](https://github.com/ayaan0209)! - ChipButton: `children`가 있으면 `count`를 렌더하지 않음. 스토리 Playground에서 `count`·`showLeftSource`·`showRightSource` 조작 가능.

  Dropdown: Figma Code Connect(`Dropdown.figma.tsx`) 추가.

  DropdownTriggerButton: GHOST/비활성 시 화살표·비활성 아이콘 색 토큰 정리, `getTextColor`/`getChevronColor` 형태로 가독성 개선. 비활성 시 SVG fill을 `neutral350`으로 텍스트와 맞춤.

  Dropdown 스토리 소폭 조정.

  Pagination: Shopl에서 좌·우 `leftSource`/`rightSource`와 무관하게 페이지 네비를 바 기준 가운데 배치(Figma absolute 중앙). `nth-child`로 자식 매칭 수정.

  Pagination 스토리: `LayoutVerification`, `sizeVar`·`leftSource`/`rightSource` 프리셋 컨트롤.

## 0.46.16

### Patch Changes

- Updated dependencies [[`5ffcf3943ca26fa92ade65cc04e04824c6d48d72`](https://github.com/shopl/shoplflow/commit/5ffcf3943ca26fa92ade65cc04e04824c6d48d72)]:
  - @shoplflow/shopl-assets@0.12.39

## 0.46.15

### Patch Changes

- [#766](https://github.com/shopl/shoplflow/pull/766) [`285a80165238935ee537c4fc0052b602955490d7`](https://github.com/shopl/shoplflow/commit/285a80165238935ee537c4fc0052b602955490d7) Thanks [@velo-kim](https://github.com/velo-kim)! - HelperText export 추가

## 0.46.14

### Patch Changes

- [#764](https://github.com/shopl/shoplflow/pull/764) [`59727c565fccec84f818aa036123103456124c62`](https://github.com/shopl/shoplflow/commit/59727c565fccec84f818aa036123103456124c62) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(checkbox): hada 선택 색상 변경

## 0.46.13

### Patch Changes

- [#762](https://github.com/shopl/shoplflow/pull/762) [`b5ff1d5cf011753c392cef90717120435a03f0ff`](https://github.com/shopl/shoplflow/commit/b5ff1d5cf011753c392cef90717120435a03f0ff) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(radio): hada 선택 색상 변경

## 0.46.12

### Patch Changes

- Updated dependencies [[`84cec035bf17408cec4d4f385f05d703d1fd44af`](https://github.com/shopl/shoplflow/commit/84cec035bf17408cec4d4f385f05d703d1fd44af)]:
  - @shoplflow/shopl-assets@0.12.38

## 0.46.11

### Patch Changes

- [#754](https://github.com/shopl/shoplflow/pull/754) [`afd67b823e17c3862f2b144b4abaa258432628d2`](https://github.com/shopl/shoplflow/commit/afd67b823e17c3862f2b144b4abaa258432628d2) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - avatar ML 사이즈 추가, button small padding 변경, toggleButton 전체 disabled 추가

## 0.46.10

### Patch Changes

- [#718](https://github.com/shopl/shoplflow/pull/718) [`8328272a8d2abb57b2bc2aeaa7729207bbbbd16c`](https://github.com/shopl/shoplflow/commit/8328272a8d2abb57b2bc2aeaa7729207bbbbd16c) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(dropdown): Dropdown.Button rightSource, onClear props 추가

## 0.46.9

### Patch Changes

- [#750](https://github.com/shopl/shoplflow/pull/750) [`5510aac8f609fdf6335eda6dcb58261a3e3d6cb9`](https://github.com/shopl/shoplflow/commit/5510aac8f609fdf6335eda6dcb58261a3e3d6cb9) Thanks [@velo-kim](https://github.com/velo-kim)! - HelperText typograhpy [paragraph2] 적용

## 0.46.8

### Patch Changes

- [#748](https://github.com/shopl/shoplflow/pull/748) [`07b06fcd7b4af285afb199bcb929136048147c7f`](https://github.com/shopl/shoplflow/commit/07b06fcd7b4af285afb199bcb929136048147c7f) Thanks [@velo-kim](https://github.com/velo-kim)! - HelperText component 생성

## 0.46.7

### Patch Changes

- [#746](https://github.com/shopl/shoplflow/pull/746) [`7a717a7c9799e10f1624c54e0ab6f1bf733f35ae`](https://github.com/shopl/shoplflow/commit/7a717a7c9799e10f1624c54e0ab6f1bf733f35ae) Thanks [@velo-kim](https://github.com/velo-kim)! - update(base): WeekDatepicker의 year 초기값 로직 변경

## 0.46.6

### Patch Changes

- [#721](https://github.com/shopl/shoplflow/pull/721) [`3dceea73d6a947b58def9b0e507904814c5a76bf`](https://github.com/shopl/shoplflow/commit/3dceea73d6a947b58def9b0e507904814c5a76bf) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(MonthDatepicker): sizeVar props 추

## 0.46.5

### Patch Changes

- [#741](https://github.com/shopl/shoplflow/pull/741) [`e720eaa922777952e402ef777c3dde0a22a91bd3`](https://github.com/shopl/shoplflow/commit/e720eaa922777952e402ef777c3dde0a22a91bd3) Thanks [@velo-kim](https://github.com/velo-kim)! - update(base): Callout gap 변경 4 -> 6px

## 0.46.4

### Patch Changes

- [#739](https://github.com/shopl/shoplflow/pull/739) [`4770d75125407e9db2540c21304c3d2d5cfc2f2f`](https://github.com/shopl/shoplflow/commit/4770d75125407e9db2540c21304c3d2d5cfc2f2f) Thanks [@velo-kim](https://github.com/velo-kim)! - update(base): List 컴포넌트 leftSource에 style prop 제거

## 0.46.3

### Patch Changes

- [#737](https://github.com/shopl/shoplflow/pull/737) [`c3fbd1bc48a5ffb02fa656ef0717bd4a989b1120`](https://github.com/shopl/shoplflow/commit/c3fbd1bc48a5ffb02fa656ef0717bd4a989b1120) Thanks [@velo-kim](https://github.com/velo-kim)! - update(dashboard): Callout 2.1.1

## 0.46.2

### Patch Changes

- [#732](https://github.com/shopl/shoplflow/pull/732) [`5758ccf895e18ebd421dd12c1b9e04a6734d1be3`](https://github.com/shopl/shoplflow/commit/5758ccf895e18ebd421dd12c1b9e04a6734d1be3) Thanks [@velo-kim](https://github.com/velo-kim)! - Changesets Workflow 배포 액션 확인

- [#733](https://github.com/shopl/shoplflow/pull/733) [`7dd65c897154e18598d558f13ffeab858d93f409`](https://github.com/shopl/shoplflow/commit/7dd65c897154e18598d558f13ffeab858d93f409) Thanks [@velo-kim](https://github.com/velo-kim)! - changesets-workflow action 확인

- [#730](https://github.com/shopl/shoplflow/pull/730) [`8bfbde05e5e6ed8b38cfe4cc768e6011c0958961`](https://github.com/shopl/shoplflow/commit/8bfbde05e5e6ed8b38cfe4cc768e6011c0958961) Thanks [@velo-kim](https://github.com/velo-kim)! - update: turbo version update (v1 -> v2)

## 0.46.1

### Patch Changes

- Updated dependencies [[`5d4066e3f396c470f9c133b61027ec347f7f28d7`](https://github.com/shopl/shoplflow/commit/5d4066e3f396c470f9c133b61027ec347f7f28d7), [`137bc680096f56d2fb682d744fcde1d45eae3f4b`](https://github.com/shopl/shoplflow/commit/137bc680096f56d2fb682d744fcde1d45eae3f4b)]:
  - @shoplflow/shopl-assets@0.12.37

## 0.46.0

### Minor Changes

- [#725](https://github.com/shopl/shoplflow/pull/725) [`853b2d7d62ea683351db4571b04b79e096084858`](https://github.com/shopl/shoplflow/commit/853b2d7d62ea683351db4571b04b79e096084858) Thanks [@velo-kim](https://github.com/velo-kim)! - storybook version up(10)에 업데이트

### Patch Changes

- Updated dependencies [[`853b2d7d62ea683351db4571b04b79e096084858`](https://github.com/shopl/shoplflow/commit/853b2d7d62ea683351db4571b04b79e096084858)]:
  - @shoplflow/utils@0.8.0

## 0.45.17

### Patch Changes

- Updated dependencies [[`d121c7ae2df2b79aaf069229603c35ed5e8af8fe`](https://github.com/shopl/shoplflow/commit/d121c7ae2df2b79aaf069229603c35ed5e8af8fe)]:
  - @shoplflow/shopl-assets@0.12.36

## 0.45.16

### Patch Changes

- [#716](https://github.com/shopl/shoplflow/pull/716) [`47371a78b23a3969e256918c4fecd0740c84f524`](https://github.com/shopl/shoplflow/commit/47371a78b23a3969e256918c4fecd0740c84f524) Thanks [@velo-kim](https://github.com/velo-kim)! - update(base): Modal Top, Bottom의 높이 변경 ResizeObserver 추가

- Updated dependencies [[`47371a78b23a3969e256918c4fecd0740c84f524`](https://github.com/shopl/shoplflow/commit/47371a78b23a3969e256918c4fecd0740c84f524)]:
  - @shoplflow/shopl-assets@0.12.35

## 0.45.15

### Patch Changes

- [#715](https://github.com/shopl/shoplflow/pull/715) [`1e16cf193adff5ef44b5a64c9cf787a194f3f2f3`](https://github.com/shopl/shoplflow/commit/1e16cf193adff5ef44b5a64c9cf787a194f3f2f3) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - input leftsource 추가

- [#713](https://github.com/shopl/shoplflow/pull/713) [`18c026569b3fb9c17968595abe85d0929c434f05`](https://github.com/shopl/shoplflow/commit/18c026569b3fb9c17968595abe85d0929c434f05) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - modal container hasChangeAnimation 시 height 애니메이션도 적용

- Updated dependencies [[`774c1ebe97137327c6f934c7f5cda02b165e147f`](https://github.com/shopl/shoplflow/commit/774c1ebe97137327c6f934c7f5cda02b165e147f)]:
  - @shoplflow/shopl-assets@0.12.34

## 0.45.14

### Patch Changes

- [#708](https://github.com/shopl/shoplflow/pull/708) [`70028232b658a80cad261e5d8c32ca6a95ae6330`](https://github.com/shopl/shoplflow/commit/70028232b658a80cad261e5d8c32ca6a95ae6330) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - Dropdown placement, offset prop 추가

- [#710](https://github.com/shopl/shoplflow/pull/710) [`dc9abe14c1a1fd51c95b69eb8526c64972170c30`](https://github.com/shopl/shoplflow/commit/dc9abe14c1a1fd51c95b69eb8526c64972170c30) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - numbercombox type 및 right source 변경
  - number -> text type 변경
  - rightsource 표시 및 style prop 추가

## 0.45.13

### Patch Changes

- [#705](https://github.com/shopl/shoplflow/pull/705) [`cc9d003e326add400273395a960b6bf25fc5e9e7`](https://github.com/shopl/shoplflow/commit/cc9d003e326add400273395a960b6bf25fc5e9e7) Thanks [@ayaan0209](https://github.com/ayaan0209)! - input 레이아웃 수정

## 0.45.12

### Patch Changes

- Updated dependencies [[`1ba93093adce83805ac6e9f2e5ef6f4f3eda17bf`](https://github.com/shopl/shoplflow/commit/1ba93093adce83805ac6e9f2e5ef6f4f3eda17bf)]:
  - @shoplflow/shopl-assets@0.12.33

## 0.45.11

### Patch Changes

- [#701](https://github.com/shopl/shoplflow/pull/701) [`55327cb88defcece188895b7b5142582eefde7ae`](https://github.com/shopl/shoplflow/commit/55327cb88defcece188895b7b5142582eefde7ae) Thanks [@ayaan0209](https://github.com/ayaan0209)! - SelectInputButton x버튼 호버 시 노출로 동작 수정

## 0.45.10

### Patch Changes

- [#699](https://github.com/shopl/shoplflow/pull/699) [`84156fdbdecb41aef4fd6283ae73567052e39b5e`](https://github.com/shopl/shoplflow/commit/84156fdbdecb41aef4fd6283ae73567052e39b5e) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - modal body heightToDeduct 적용

## 0.45.9

### Patch Changes

- [#697](https://github.com/shopl/shoplflow/pull/697) [`97d2126df3038b7539ced0397adc81449e1743ae`](https://github.com/shopl/shoplflow/commit/97d2126df3038b7539ced0397adc81449e1743ae) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - attachmentlist multi item padding 추가, input clear icon 표시 조건 추가

## 0.45.8

### Patch Changes

- [#695](https://github.com/shopl/shoplflow/pull/695) [`a7c9fe6cf2d6c5a95fb3548034853f6752fd7c32`](https://github.com/shopl/shoplflow/commit/a7c9fe6cf2d6c5a95fb3548034853f6752fd7c32) Thanks [@velo-kim](https://github.com/velo-kim)! - Modal.Top 사용 시, Modal.Body 최소 높이 계산 로직 변경

## 0.45.7

### Patch Changes

- Updated dependencies [[`a33589892d1e9f8c93a3abcdb4ab4b0a76f72171`](https://github.com/shopl/shoplflow/commit/a33589892d1e9f8c93a3abcdb4ab4b0a76f72171)]:
  - @shoplflow/shopl-assets@0.12.32

## 0.45.6

### Patch Changes

- [#691](https://github.com/shopl/shoplflow/pull/691) [`d7b6d3cabf5d4c3e2982fa3c81594ee71716f256`](https://github.com/shopl/shoplflow/commit/d7b6d3cabf5d4c3e2982fa3c81594ee71716f256) Thanks [@velo-kim](https://github.com/velo-kim)! - update(all packages): package.json

- Updated dependencies [[`d7b6d3cabf5d4c3e2982fa3c81594ee71716f256`](https://github.com/shopl/shoplflow/commit/d7b6d3cabf5d4c3e2982fa3c81594ee71716f256)]:
  - @shoplflow/shopl-assets@0.12.31
  - @shoplflow/hada-assets@0.1.10
  - @shoplflow/utils@0.7.2

## 0.45.5

### Patch Changes

- [#689](https://github.com/shopl/shoplflow/pull/689) [`674de810bb9cf0e6a053d56f802d087928e74c02`](https://github.com/shopl/shoplflow/commit/674de810bb9cf0e6a053d56f802d087928e74c02) Thanks [@velo-kim](https://github.com/velo-kim)! - update(action): changeset-workflow.yml

- Updated dependencies [[`674de810bb9cf0e6a053d56f802d087928e74c02`](https://github.com/shopl/shoplflow/commit/674de810bb9cf0e6a053d56f802d087928e74c02)]:
  - @shoplflow/hada-assets@0.1.9
  - @shoplflow/shopl-assets@0.12.30
  - @shoplflow/utils@0.7.1

## 0.45.4

### Patch Changes

- Updated dependencies [[`650dbc57a16bfc5077d7c25ee492d884f3729d80`](https://github.com/shopl/shoplflow/commit/650dbc57a16bfc5077d7c25ee492d884f3729d80)]:
  - @shoplflow/shopl-assets@0.12.29

## 0.45.3

### Patch Changes

- Updated dependencies [[`a31e2fd6ca9e34d038588b5c3c562e0b0a635c06`](https://github.com/shopl/shoplflow/commit/a31e2fd6ca9e34d038588b5c3c562e0b0a635c06)]:
  - @shoplflow/shopl-assets@0.12.28

## 0.45.2

### Patch Changes

- [#676](https://github.com/shopl/shoplflow/pull/676) [`b99c6cca78fe6411e745060d89797556f13d055a`](https://github.com/shopl/shoplflow/commit/b99c6cca78fe6411e745060d89797556f13d055a) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - Attachlist Single extension, size props optional 처리

## 0.45.1

### Patch Changes

- Updated dependencies [[`e264c8bb8691f688a2b60af2ebd7a9d1d3771903`](https://github.com/shopl/shoplflow/commit/e264c8bb8691f688a2b60af2ebd7a9d1d3771903)]:
  - @shoplflow/shopl-assets@0.12.27

## 0.45.0

### Minor Changes

- [#672](https://github.com/shopl/shoplflow/pull/672) [`9ac9c6de626d6548544c038040e0f5b3746e95ae`](https://github.com/shopl/shoplflow/commit/9ac9c6de626d6548544c038040e0f5b3746e95ae) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - SelectInputButton이 disabled 상태일 때 background가 변경되지 않는 문제를 수정했어요

## 0.44.0

### Minor Changes

- [#670](https://github.com/shopl/shoplflow/pull/670) [`f172b53f421af9b0a1107ac7e281a509a5487d5d`](https://github.com/shopl/shoplflow/commit/f172b53f421af9b0a1107ac7e281a509a5487d5d) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - SelectInputButton이 disabled 상태일 때 background가 변경되지 않는 문제를 수정했어요

## 0.43.2

### Patch Changes

- [#668](https://github.com/shopl/shoplflow/pull/668) [`2a8ce3566995d8ce40be368188cba42d3f069e27`](https://github.com/shopl/shoplflow/commit/2a8ce3566995d8ce40be368188cba42d3f069e27) Thanks [@ayaan0209](https://github.com/ayaan0209)! - StyledInput 우측 패딩 12px로 수정

## 0.43.1

### Patch Changes

- [#666](https://github.com/shopl/shoplflow/pull/666) [`dda54bcfeeb30afe2ab0b85e54e9ad7a0e79428c`](https://github.com/shopl/shoplflow/commit/dda54bcfeeb30afe2ab0b85e54e9ad7a0e79428c) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: ModalBody 높이 계산로직을 변경했어요

## 0.43.0

### Minor Changes

- [#664](https://github.com/shopl/shoplflow/pull/664) [`537d504b63655043739982d8a73244b63d7e18d1`](https://github.com/shopl/shoplflow/commit/537d504b63655043739982d8a73244b63d7e18d1) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Input S size의 padding, gap을 수정했어요

## 0.42.23

### Patch Changes

- [#663](https://github.com/shopl/shoplflow/pull/663) [`134bcc9fe726ac54164b05a5ce033e7b7233aeda`](https://github.com/shopl/shoplflow/commit/134bcc9fe726ac54164b05a5ce033e7b7233aeda) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Switch sizeVar defatul 색 변경, Pagination SizeSelector ...표시 수정

- Updated dependencies [[`22a75fc18f88ccd0780944652ce88619e24d30b0`](https://github.com/shopl/shoplflow/commit/22a75fc18f88ccd0780944652ce88619e24d30b0)]:
  - @shoplflow/shopl-assets@0.12.26

## 0.42.22

### Patch Changes

- [#659](https://github.com/shopl/shoplflow/pull/659) [`47720b2755d314b4a771df3468045b093cf283a0`](https://github.com/shopl/shoplflow/commit/47720b2755d314b4a771df3468045b093cf283a0) Thanks [@velo-kim](https://github.com/velo-kim)! - update: Modal 사이즈 애니메이션 flag prop 추가

## 0.42.21

### Patch Changes

- Updated dependencies [[`3555b51e493172dea2f2bfac0b53e1ce1b3b9dad`](https://github.com/shopl/shoplflow/commit/3555b51e493172dea2f2bfac0b53e1ce1b3b9dad)]:
  - @shoplflow/shopl-assets@0.12.25

## 0.42.20

### Patch Changes

- [#654](https://github.com/shopl/shoplflow/pull/654) [`821be7180ec1b1a27928a742ee72a283518e9a9f`](https://github.com/shopl/shoplflow/commit/821be7180ec1b1a27928a742ee72a283518e9a9f) Thanks [@velo-kim](https://github.com/velo-kim)! - update(component): 모달 style 조정(Body padding 가능, 사이즈 변경 시 애니메이션)

## 0.42.19

### Patch Changes

- Updated dependencies [[`46dae84c64136c437417684f8123943a7f9a3c38`](https://github.com/shopl/shoplflow/commit/46dae84c64136c437417684f8123943a7f9a3c38)]:
  - @shoplflow/shopl-assets@0.12.24

## 0.42.18

### Patch Changes

- [#649](https://github.com/shopl/shoplflow/pull/649) [`05225aaf38999b141582b8e43417b976ff5a1300`](https://github.com/shopl/shoplflow/commit/05225aaf38999b141582b8e43417b976ff5a1300) Thanks [@velo-kim](https://github.com/velo-kim)! - update(component): Tag XS size의 패딩값 변경

## 0.42.17

### Patch Changes

- [#647](https://github.com/shopl/shoplflow/pull/647) [`80dd637c60b8ade560657af8f6e02898de95d478`](https://github.com/shopl/shoplflow/commit/80dd637c60b8ade560657af8f6e02898de95d478) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - Attachment List shoplflow template 추가, Tab 에 clickable 옵션 추가

## 0.42.16

### Patch Changes

- [#645](https://github.com/shopl/shoplflow/pull/645) [`7c6f779b08a3e0d6d010e7b73c6261e2959d7822`](https://github.com/shopl/shoplflow/commit/7c6f779b08a3e0d6d010e7b73c6261e2959d7822) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - Checkbox ReadOnly 스타일 변경

## 0.42.15

### Patch Changes

- [#643](https://github.com/shopl/shoplflow/pull/643) [`a0b52e76a5aaed54e12bf66f92f08d13e826c192`](https://github.com/shopl/shoplflow/commit/a0b52e76a5aaed54e12bf66f92f08d13e826c192) Thanks [@velo-kim](https://github.com/velo-kim)! - Daydatepicker onMonthChange, onYearChange 핸들러를 추가했어요

## 0.42.14

### Patch Changes

- [#641](https://github.com/shopl/shoplflow/pull/641) [`74eaea55d9efad4b84c654a90520aa35af4cb979`](https://github.com/shopl/shoplflow/commit/74eaea55d9efad4b84c654a90520aa35af4cb979) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - Radio 컴포넌트 selected 호버 색상 변경

## 0.42.13

### Patch Changes

- [#639](https://github.com/shopl/shoplflow/pull/639) [`b1d1a462277ede0efe158623c30aa22ac660b0ca`](https://github.com/shopl/shoplflow/commit/b1d1a462277ede0efe158623c30aa22ac660b0ca) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Tag 컴포넌트 문서 sizeVar 및 styleVar select할 수 있도록 수정

## 0.42.12

### Patch Changes

- [#637](https://github.com/shopl/shoplflow/pull/637) [`b750289540e080a69e20996c7266c53ca08bbd6f`](https://github.com/shopl/shoplflow/commit/b750289540e080a69e20996c7266c53ca08bbd6f) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(component): Radio 컴포넌트의 선택 상태 색상을 HADA에서 neutral700으로 변경했습니다

## 0.42.11

### Patch Changes

- Updated dependencies [[`bfc9b6c2310be6964c034ba3c549719531bc7970`](https://github.com/shopl/shoplflow/commit/bfc9b6c2310be6964c034ba3c549719531bc7970)]:
  - @shoplflow/shopl-assets@0.12.23
  - @shoplflow/hada-assets@0.1.8

## 0.42.10

### Patch Changes

- [#633](https://github.com/shopl/shoplflow/pull/633) [`68ae64580692ea14f4e5b387fde86af7d9dd34ca`](https://github.com/shopl/shoplflow/commit/68ae64580692ea14f4e5b387fde86af7d9dd34ca) Thanks [@ayaan0209](https://github.com/ayaan0209)! - update: Avatar에 onError props 추가

- [#635](https://github.com/shopl/shoplflow/pull/635) [`59c2b591fb044156ce138579d9d7565ea8f91d87`](https://github.com/shopl/shoplflow/commit/59c2b591fb044156ce138579d9d7565ea8f91d87) Thanks [@ayaan0209](https://github.com/ayaan0209)! - update: onError대신 fallbackUrl 사용

## 0.42.9

### Patch Changes

- [#631](https://github.com/shopl/shoplflow/pull/631) [`c49053c13a42eb84db31a401318c639959556593`](https://github.com/shopl/shoplflow/commit/c49053c13a42eb84db31a401318c639959556593) Thanks [@ayaan0209](https://github.com/ayaan0209)! - SearchBar maxLength + onChange 제대로 안되는 현상 수정

## 0.42.8

### Patch Changes

- [#629](https://github.com/shopl/shoplflow/pull/629) [`a6beacc57618fbd92478c4fbf52b4a5e57c3bf99`](https://github.com/shopl/shoplflow/commit/a6beacc57618fbd92478c4fbf52b4a5e57c3bf99) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - update(component): selectInputButton 컴포넌트 Clear 버튼 조건부 렌더링 추가했습니다

## 0.42.7

### Patch Changes

- [#627](https://github.com/shopl/shoplflow/pull/627) [`c05f19391adebdc67a179ba8ffb9fb6f828a5c26`](https://github.com/shopl/shoplflow/commit/c05f19391adebdc67a179ba8ffb9fb6f828a5c26) Thanks [@velo-kim](https://github.com/velo-kim)! - Update(component): NumberCombobox Dropdown 영역 height 동적 변경

## 0.42.6

### Patch Changes

- [#624](https://github.com/shopl/shoplflow/pull/624) [`f99f75f4e20da69b4e14d573946cc601ed59c7ce`](https://github.com/shopl/shoplflow/commit/f99f75f4e20da69b4e14d573946cc601ed59c7ce) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Pagination SizeVar='XS'일 때 아이콘 사이즈 제대로 반영안되는 현상 수정

## 0.42.5

### Patch Changes

- [#622](https://github.com/shopl/shoplflow/pull/622) [`888643aded0eafa00199c39aa30e878543eb834e`](https://github.com/shopl/shoplflow/commit/888643aded0eafa00199c39aa30e878543eb834e) Thanks [@velo-kim](https://github.com/velo-kim)! - DropdownButton SECONDARY 스타일 변경

## 0.42.4

### Patch Changes

- [#618](https://github.com/shopl/shoplflow/pull/618) [`9567b60fa674dd55acae8d722cba693c93f85e3a`](https://github.com/shopl/shoplflow/commit/9567b60fa674dd55acae8d722cba693c93f85e3a) Thanks [@velo-kim](https://github.com/velo-kim)! - Update(component): Switch sizeVar 추가(S, default M)

## 0.42.3

### Patch Changes

- Updated dependencies [[`d2709e7dcc3639a7ebd4221a1dcf35f386d645a0`](https://github.com/shopl/shoplflow/commit/d2709e7dcc3639a7ebd4221a1dcf35f386d645a0)]:
  - @shoplflow/shopl-assets@0.12.22

## 0.42.2

### Patch Changes

- Updated dependencies [[`db16621db4cbcdeff6d8bf15b617787a5e17be2c`](https://github.com/shopl/shoplflow/commit/db16621db4cbcdeff6d8bf15b617787a5e17be2c)]:
  - @shoplflow/shopl-assets@0.12.21

## 0.42.1

### Patch Changes

- [#613](https://github.com/shopl/shoplflow/pull/613) [`015b1972aaaea51748bc5fc69a18f4786756f6d6`](https://github.com/shopl/shoplflow/commit/015b1972aaaea51748bc5fc69a18f4786756f6d6) Thanks [@ayaan0209](https://github.com/ayaan0209)! - style: 버튼 sizeVar XS 추가

## 0.42.0

### Minor Changes

- [#528](https://github.com/shopl/shoplflow/pull/528) [`4943c5b34d691014408b74934f5c9d6798a1815c`](https://github.com/shopl/shoplflow/commit/4943c5b34d691014408b74934f5c9d6798a1815c) Thanks [@ayaan0209](https://github.com/ayaan0209)! - SearchBar 컴포넌트 추가했습니다.

## 0.41.11

### Patch Changes

- Updated dependencies [[`71e09637e6b2e3278c128bdb318bfe74f169ff2c`](https://github.com/shopl/shoplflow/commit/71e09637e6b2e3278c128bdb318bfe74f169ff2c)]:
  - @shoplflow/utils@0.7.0

## 0.41.10

### Patch Changes

- Updated dependencies [[`77e26749e739c118b7ab884e8b87f1d5f4ab6aa5`](https://github.com/shopl/shoplflow/commit/77e26749e739c118b7ab884e8b87f1d5f4ab6aa5)]:
  - @shoplflow/hada-assets@0.1.7

## 0.41.9

### Patch Changes

- [#600](https://github.com/shopl/shoplflow/pull/600) [`6e529c1fd4e0bd6e0fc01ffd1e2c87d9155113e6`](https://github.com/shopl/shoplflow/commit/6e529c1fd4e0bd6e0fc01ffd1e2c87d9155113e6) Thanks [@Eunseo-jo](https://github.com/Eunseo-jo)! - HADA에서 사용하는 button, checkbox 컴포넌트 스타일을 디자인 가이드에 맞게 수정했어요

## 0.41.8

### Patch Changes

- [#598](https://github.com/shopl/shoplflow/pull/598) [`421a2233732eb52dc6eb53f20920b91e47313256`](https://github.com/shopl/shoplflow/commit/421a2233732eb52dc6eb53f20920b91e47313256) Thanks [@velo-kim](https://github.com/velo-kim)! - update(Callout): props interface

## 0.41.7

### Patch Changes

- Updated dependencies [[`366c5b20bdfa0de3a032fae33ead3b0a0edfb323`](https://github.com/shopl/shoplflow/commit/366c5b20bdfa0de3a032fae33ead3b0a0edfb323)]:
  - @shoplflow/shopl-assets@0.12.20

## 0.41.6

### Patch Changes

- [#592](https://github.com/shopl/shoplflow/pull/592) [`dc0006073d637701e9f18ff3bcbfc59371db41c7`](https://github.com/shopl/shoplflow/commit/dc0006073d637701e9f18ff3bcbfc59371db41c7) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Pagination sizeVar 추가

## 0.41.5

### Patch Changes

- Updated dependencies [[`dbd5832487fd014820458c89a61daa07868fea2b`](https://github.com/shopl/shoplflow/commit/dbd5832487fd014820458c89a61daa07868fea2b)]:
  - @shoplflow/shopl-assets@0.12.19

## 0.41.4

### Patch Changes

- Updated dependencies [[`01f6ccd569a27d88bd08000028e6e54d380e4822`](https://github.com/shopl/shoplflow/commit/01f6ccd569a27d88bd08000028e6e54d380e4822)]:
  - @shoplflow/hada-assets@0.1.6

## 0.41.3

### Patch Changes

- Updated dependencies [[`c228c8c23f7c5ca889be41f18177f0e5cd911964`](https://github.com/shopl/shoplflow/commit/c228c8c23f7c5ca889be41f18177f0e5cd911964), [`05b0514435a129a7356b40d578f5f45af9ce3f86`](https://github.com/shopl/shoplflow/commit/05b0514435a129a7356b40d578f5f45af9ce3f86)]:
  - @shoplflow/hada-assets@0.1.5
  - @shoplflow/shopl-assets@0.12.18

## 0.41.2

### Patch Changes

- Updated dependencies [[`0256b7b833bf5149133e493b9e8acb41d46d590e`](https://github.com/shopl/shoplflow/commit/0256b7b833bf5149133e493b9e8acb41d46d590e), [`fbd4da852f60d14ffba00db591f2515dcb103151`](https://github.com/shopl/shoplflow/commit/fbd4da852f60d14ffba00db591f2515dcb103151), [`51bcf855696fd14776ecde8eebc1ca5c98ba5ef5`](https://github.com/shopl/shoplflow/commit/51bcf855696fd14776ecde8eebc1ca5c98ba5ef5)]:
  - @shoplflow/shopl-assets@0.12.17
  - @shoplflow/hada-assets@0.1.4

## 0.41.1

### Patch Changes

- Updated dependencies [[`7adc20c3550d8c0329824f22e62aaf825c213fb7`](https://github.com/shopl/shoplflow/commit/7adc20c3550d8c0329824f22e62aaf825c213fb7), [`522735a83c355079b9bfd5008ddebbd66ff59c4f`](https://github.com/shopl/shoplflow/commit/522735a83c355079b9bfd5008ddebbd66ff59c4f), [`f1bd991f0a6eb63dce8771a2ead4b87b23275c52`](https://github.com/shopl/shoplflow/commit/f1bd991f0a6eb63dce8771a2ead4b87b23275c52), [`073ca79ec1da562ed95ce1b3c210e8a1e0f2b6c3`](https://github.com/shopl/shoplflow/commit/073ca79ec1da562ed95ce1b3c210e8a1e0f2b6c3), [`4c4139a8f9ae576cebdb282fc981c2c1a11ddde3`](https://github.com/shopl/shoplflow/commit/4c4139a8f9ae576cebdb282fc981c2c1a11ddde3), [`d892d954675e4e4bbd675dee0becb37dbe9fa0d9`](https://github.com/shopl/shoplflow/commit/d892d954675e4e4bbd675dee0becb37dbe9fa0d9)]:
  - @shoplflow/shopl-assets@0.12.16

## 0.41.0

### Minor Changes

- [#578](https://github.com/shopl/shoplflow/pull/578) [`e469df75963f369e4c8abe192168205969e6191a`](https://github.com/shopl/shoplflow/commit/e469df75963f369e4c8abe192168205969e6191a) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - SelectInputButton의 sizeVar에 따라 padding이 변경되도록 했어요

- [#578](https://github.com/shopl/shoplflow/pull/578) [`6ea468b03927253d49cb7c9af0ed9fc0188feb10`](https://github.com/shopl/shoplflow/commit/6ea468b03927253d49cb7c9af0ed9fc0188feb10) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - SelectInputButton에 sizeVar 속성을 추가했어요

## 0.40.7

### Patch Changes

- Updated dependencies [[`cde570ad974fde56e68f51d1b47fabfce7630c7e`](https://github.com/shopl/shoplflow/commit/cde570ad974fde56e68f51d1b47fabfce7630c7e)]:
  - @shoplflow/shopl-assets@0.12.15

## 0.40.6

### Patch Changes

- Updated dependencies [[`3e1a3b6069cceeed68e4e51b9a3d523a709d7318`](https://github.com/shopl/shoplflow/commit/3e1a3b6069cceeed68e4e51b9a3d523a709d7318), [`181dbe10abfa0613e2708310e9a7a9d7bed7dde0`](https://github.com/shopl/shoplflow/commit/181dbe10abfa0613e2708310e9a7a9d7bed7dde0)]:
  - @shoplflow/shopl-assets@0.12.14

## 0.40.5

### Patch Changes

- Updated dependencies [[`f0a5c021dd7304de119387a1076daab3f879f6e8`](https://github.com/shopl/shoplflow/commit/f0a5c021dd7304de119387a1076daab3f879f6e8), [`63a032b47b1d0cd6d34e2557e2f2cef214df5484`](https://github.com/shopl/shoplflow/commit/63a032b47b1d0cd6d34e2557e2f2cef214df5484), [`1a19b496dd67e9561753c161e31663406224283f`](https://github.com/shopl/shoplflow/commit/1a19b496dd67e9561753c161e31663406224283f), [`57313b12065a96b50fd838682846be5ea609a5f6`](https://github.com/shopl/shoplflow/commit/57313b12065a96b50fd838682846be5ea609a5f6)]:
  - @shoplflow/shopl-assets@0.12.13

## 0.40.4

### Patch Changes

- Updated dependencies [[`6056613e326a2d30c17b29b381aa9b859c3ac6d4`](https://github.com/shopl/shoplflow/commit/6056613e326a2d30c17b29b381aa9b859c3ac6d4), [`9ceeeffc667e2594ef6f4bf750fc0ac1a4d32ba8`](https://github.com/shopl/shoplflow/commit/9ceeeffc667e2594ef6f4bf750fc0ac1a4d32ba8)]:
  - @shoplflow/shopl-assets@0.12.12

## 0.40.3

### Patch Changes

- Updated dependencies [[`53dc6e08d4cd400542fbb0e01490f5ae9407e021`](https://github.com/shopl/shoplflow/commit/53dc6e08d4cd400542fbb0e01490f5ae9407e021), [`7af6f959647af1e33358258055fef0d751f13889`](https://github.com/shopl/shoplflow/commit/7af6f959647af1e33358258055fef0d751f13889)]:
  - @shoplflow/shopl-assets@0.12.11

## 0.40.2

### Patch Changes

- [#563](https://github.com/shopl/shoplflow/pull/563) [`a1db6843070805948631ab835395eeeb94132c72`](https://github.com/shopl/shoplflow/commit/a1db6843070805948631ab835395eeeb94132c72) Thanks [@velo-kim](https://github.com/velo-kim)! - ToggleButton.Radio의 스타일 변경(lineClamp 제거)

## 0.40.1

### Patch Changes

- [#559](https://github.com/shopl/shoplflow/pull/559) [`e83a2f8ed5d38cf979a7b5ce24b604a87ec5ef86`](https://github.com/shopl/shoplflow/commit/e83a2f8ed5d38cf979a7b5ce24b604a87ec5ef86) Thanks [@velo-kim](https://github.com/velo-kim)! - update: DropdownTriggerButton L 사이즈 border 조정

## 0.40.0

### Minor Changes

- [#552](https://github.com/shopl/shoplflow/pull/552) [`f71329480089c54d657ad700e47b9da08781b633`](https://github.com/shopl/shoplflow/commit/f71329480089c54d657ad700e47b9da08781b633) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - 주별/월별 DatePicker에 maxDate가 있을 경우 선택 가능 범위를 수정했어요

## 0.39.2

### Patch Changes

- [#550](https://github.com/shopl/shoplflow/pull/550) [`31c7f73ee1deb69eb72b5a09f744e52d21b9d5af`](https://github.com/shopl/shoplflow/commit/31c7f73ee1deb69eb72b5a09f744e52d21b9d5af) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: MonthDatepicker 단일 월 선택 버그 수정

## 0.39.1

### Patch Changes

- [#548](https://github.com/shopl/shoplflow/pull/548) [`9b94b8e81ed973b57b91b1d742c64e880f752173`](https://github.com/shopl/shoplflow/commit/9b94b8e81ed973b57b91b1d742c64e880f752173) Thanks [@velo-kim](https://github.com/velo-kim)! - update: Datepikckers/stepper/YearSelect 선택년도 focus 기능 추가

- Updated dependencies [[`9b94b8e81ed973b57b91b1d742c64e880f752173`](https://github.com/shopl/shoplflow/commit/9b94b8e81ed973b57b91b1d742c64e880f752173)]:
  - @shoplflow/shopl-assets@0.12.10

## 0.39.0

### Minor Changes

- [#545](https://github.com/shopl/shoplflow/pull/545) [`b582c686ec92d9d8add0d445ec446251041ed368`](https://github.com/shopl/shoplflow/commit/b582c686ec92d9d8add0d445ec446251041ed368) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Button 컴포넌트의 disabled opacity를 수정했어요

## 0.38.1

### Patch Changes

- Updated dependencies [[`7d247a8f85738ddd7d264dbac1d9a31816d73317`](https://github.com/shopl/shoplflow/commit/7d247a8f85738ddd7d264dbac1d9a31816d73317)]:
  - @shoplflow/shopl-assets@0.12.9

## 0.38.0

### Minor Changes

- [#541](https://github.com/shopl/shoplflow/pull/541) [`2ae21897fe334cb97253ccbbcc7000ec5cbd9549`](https://github.com/shopl/shoplflow/commit/2ae21897fe334cb97253ccbbcc7000ec5cbd9549) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - TextArea 컴포넌트에 leftSource, rightSource, focusedBorderColor 속성을 추가했어요

## 0.37.6

### Patch Changes

- [#539](https://github.com/shopl/shoplflow/pull/539) [`e47f53e24c163e45cb71cf3588ff25ab06252740`](https://github.com/shopl/shoplflow/commit/e47f53e24c163e45cb71cf3588ff25ab06252740) Thanks [@velo-kim](https://github.com/velo-kim)! - update: DropdownTriggerButton L size 스타일 조정

## 0.37.5

### Patch Changes

- Updated dependencies [[`f7ad9e2bbf72cb51caf955289dc4b608bc6235c3`](https://github.com/shopl/shoplflow/commit/f7ad9e2bbf72cb51caf955289dc4b608bc6235c3), [`8177164de42a09240eee6efc7806892051df0a3f`](https://github.com/shopl/shoplflow/commit/8177164de42a09240eee6efc7806892051df0a3f), [`a1c74fd2926e4ed869509616a5e81a7601c1bb90`](https://github.com/shopl/shoplflow/commit/a1c74fd2926e4ed869509616a5e81a7601c1bb90)]:
  - @shoplflow/shopl-assets@0.12.8

## 0.37.4

### Patch Changes

- Updated dependencies [[`618d42c77a712346213ce81e3db95aae1e7d024b`](https://github.com/shopl/shoplflow/commit/618d42c77a712346213ce81e3db95aae1e7d024b)]:
  - @shoplflow/shopl-assets@0.12.7

## 0.37.3

### Patch Changes

- Updated dependencies [[`bc6a09688ba1b84caf0dd4ae5f1a54c45484eafa`](https://github.com/shopl/shoplflow/commit/bc6a09688ba1b84caf0dd4ae5f1a54c45484eafa), [`11132fbd7997c2e2f316015a524b1a90b372e96a`](https://github.com/shopl/shoplflow/commit/11132fbd7997c2e2f316015a524b1a90b372e96a)]:
  - @shoplflow/shopl-assets@0.12.6

## 0.37.2

### Patch Changes

- Updated dependencies [[`5ff3b3254f753b5aef4d377dc835d96acf5ba142`](https://github.com/shopl/shoplflow/commit/5ff3b3254f753b5aef4d377dc835d96acf5ba142)]:
  - @shoplflow/shopl-assets@0.12.5

## 0.37.1

### Patch Changes

- Updated dependencies [[`4377d8665d8d98c474a58a18870d98bd45f02095`](https://github.com/shopl/shoplflow/commit/4377d8665d8d98c474a58a18870d98bd45f02095)]:
  - @shoplflow/shopl-assets@0.12.4

## 0.37.0

### Minor Changes

- [#526](https://github.com/shopl/shoplflow/pull/526) [`a0ed7137e8ac9d6910ae1279bf609f53d9bd47fa`](https://github.com/shopl/shoplflow/commit/a0ed7137e8ac9d6910ae1279bf609f53d9bd47fa) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Slider의 선택 범위를 외부에서 주입해 사용하도록 수정했어요

## 0.36.1

### Patch Changes

- [#520](https://github.com/shopl/shoplflow/pull/520) [`54e7d777357e6a7a57be0f05374b594c995d31f1`](https://github.com/shopl/shoplflow/commit/54e7d777357e6a7a57be0f05374b594c995d31f1) Thanks [@velo-kim](https://github.com/velo-kim)! - List, TooltipContent 컴포넌트 스타일 조정

## 0.36.0

### Minor Changes

- [#523](https://github.com/shopl/shoplflow/pull/523) [`114dbd53399c979f5abccebe6546d3048f06938d`](https://github.com/shopl/shoplflow/commit/114dbd53399c979f5abccebe6546d3048f06938d) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Slider의 thumb button 속성 및 트랙 클릭 이벤트를 수정했어요

## 0.35.1

### Patch Changes

- [#521](https://github.com/shopl/shoplflow/pull/521) [`b7d8f1fd2b0cc91bee9a7e13349c09663ec9581e`](https://github.com/shopl/shoplflow/commit/b7d8f1fd2b0cc91bee9a7e13349c09663ec9581e) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - funnel icon 추가 및 icon button iconSize 추가

- Updated dependencies [[`b7d8f1fd2b0cc91bee9a7e13349c09663ec9581e`](https://github.com/shopl/shoplflow/commit/b7d8f1fd2b0cc91bee9a7e13349c09663ec9581e)]:
  - @shoplflow/shopl-assets@0.12.3

## 0.35.0

### Minor Changes

- [#517](https://github.com/shopl/shoplflow/pull/517) [`8bd0844fdc93c9d451e83884f574d9bbf6c934a0`](https://github.com/shopl/shoplflow/commit/8bd0844fdc93c9d451e83884f574d9bbf6c934a0) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Slider의 export 방식을 변경했어요

## 0.34.0

### Minor Changes

- [#515](https://github.com/shopl/shoplflow/pull/515) [`bb53ece55aa5d49be6bfc5a0cd2f9dd63ba4993b`](https://github.com/shopl/shoplflow/commit/bb53ece55aa5d49be6bfc5a0cd2f9dd63ba4993b) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Slider component를 추가했어요

## 0.33.4

### Patch Changes

- [#509](https://github.com/shopl/shoplflow/pull/509) [`3497f930d7f4cfe9e7ca458ea34895747dfc6dfb`](https://github.com/shopl/shoplflow/commit/3497f930d7f4cfe9e7ca458ea34895747dfc6dfb) Thanks [@velo-kim](https://github.com/velo-kim)! - update: Tree Component

- [#509](https://github.com/shopl/shoplflow/pull/509) [`3497f930d7f4cfe9e7ca458ea34895747dfc6dfb`](https://github.com/shopl/shoplflow/commit/3497f930d7f4cfe9e7ca458ea34895747dfc6dfb) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: TreeItem의 isOpen 상태 스타일 변경

- Updated dependencies [[`3497f930d7f4cfe9e7ca458ea34895747dfc6dfb`](https://github.com/shopl/shoplflow/commit/3497f930d7f4cfe9e7ca458ea34895747dfc6dfb)]:
  - @shoplflow/shopl-assets@0.12.2

## 0.33.3

### Patch Changes

- [#506](https://github.com/shopl/shoplflow/pull/506) [`68922977c34111576455ac383a59d0898c33a28d`](https://github.com/shopl/shoplflow/commit/68922977c34111576455ac383a59d0898c33a28d) Thanks [@ayaan0209](https://github.com/ayaan0209)! - TextArea gap 삭제 했습니다.

## 0.33.2

### Patch Changes

- [#502](https://github.com/shopl/shoplflow/pull/502) [`26c6bf3efb62f538746a7fe616ba31b4f3b05027`](https://github.com/shopl/shoplflow/commit/26c6bf3efb62f538746a7fe616ba31b4f3b05027) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Skeleton 컴포넌트 생성

## 0.33.1

### Patch Changes

- [#503](https://github.com/shopl/shoplflow/pull/503) [`9abe954307d136d61a34607626e318a76012bbd8`](https://github.com/shopl/shoplflow/commit/9abe954307d136d61a34607626e318a76012bbd8) Thanks [@velo-kim](https://github.com/velo-kim)! - update: Tree Component

- Updated dependencies [[`9abe954307d136d61a34607626e318a76012bbd8`](https://github.com/shopl/shoplflow/commit/9abe954307d136d61a34607626e318a76012bbd8)]:
  - @shoplflow/shopl-assets@0.12.1

## 0.33.0

### Minor Changes

- [#500](https://github.com/shopl/shoplflow/pull/500) [`6df07280d75cbbc104b1ee7bedb677f850aacefe`](https://github.com/shopl/shoplflow/commit/6df07280d75cbbc104b1ee7bedb677f850aacefe) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - ToggleButton, Dropdown, InputButton의 disabled 스타일링을 수정했어요

## 0.32.47

### Patch Changes

- Updated dependencies [[`f30b09fc1b8747e23efcdb376f11ef6888b8ed15`](https://github.com/shopl/shoplflow/commit/f30b09fc1b8747e23efcdb376f11ef6888b8ed15)]:
  - @shoplflow/shopl-assets@0.12.0

## 0.32.46

### Patch Changes

- [#495](https://github.com/shopl/shoplflow/pull/495) [`cac47bfa0aec5f4d5783f938f0b2375ab043adaa`](https://github.com/shopl/shoplflow/commit/cac47bfa0aec5f4d5783f938f0b2375ab043adaa) Thanks [@velo-kim](https://github.com/velo-kim)! - ModalBody Content MaxHeight 로직 변경

## 0.32.45

### Patch Changes

- [#494](https://github.com/shopl/shoplflow/pull/494) [`13852ced7f4a81669bd4104bc185c635cbe85784`](https://github.com/shopl/shoplflow/commit/13852ced7f4a81669bd4104bc185c635cbe85784) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: ModalBody maxheigth

## 0.32.44

### Patch Changes

- [#489](https://github.com/shopl/shoplflow/pull/489) [`d292a08bae3a51be37823bf34c29725e1603dfb6`](https://github.com/shopl/shoplflow/commit/d292a08bae3a51be37823bf34c29725e1603dfb6) Thanks [@velo-kim](https://github.com/velo-kim)! - update: Tab styleVar='Info' 스타일 조정

## 0.32.43

### Patch Changes

- [#487](https://github.com/shopl/shoplflow/pull/487) [`ced49d309bf703cdd6d6b0105f572961547eb77d`](https://github.com/shopl/shoplflow/commit/ced49d309bf703cdd6d6b0105f572961547eb77d) Thanks [@velo-kim](https://github.com/velo-kim)! - update: DropdownButton L size 추가

## 0.32.42

### Patch Changes

- [#483](https://github.com/shopl/shoplflow/pull/483) [`091c9228bc9eb029ebe2060895680c597c72467c`](https://github.com/shopl/shoplflow/commit/091c9228bc9eb029ebe2060895680c597c72467c) Thanks [@velo-kim](https://github.com/velo-kim)! - Modal Top, Bottom 컴포넌트를 만들었어요

## 0.32.41

### Patch Changes

- Updated dependencies [[`82b7c5dbd421bace2eb5b6ae096d145e3f18bd17`](https://github.com/shopl/shoplflow/commit/82b7c5dbd421bace2eb5b6ae096d145e3f18bd17)]:
  - @shoplflow/shopl-assets@0.11.5

## 0.32.40

### Patch Changes

- [#481](https://github.com/shopl/shoplflow/pull/481) [`3a6c3d1c932797fd225822b8b7a17cc3080a9da3`](https://github.com/shopl/shoplflow/commit/3a6c3d1c932797fd225822b8b7a17cc3080a9da3) Thanks [@velo-kim](https://github.com/velo-kim)! - ToggleButton의 selected를 수정했어요

## 0.32.39

### Patch Changes

- Updated dependencies [[`f4d14ea21aa6733737ab1f7c573768b4d3281d2f`](https://github.com/shopl/shoplflow/commit/f4d14ea21aa6733737ab1f7c573768b4d3281d2f)]:
  - @shoplflow/shopl-assets@0.11.4

## 0.32.38

### Patch Changes

- [#472](https://github.com/shopl/shoplflow/pull/472) [`2c55fee54e4475864d3d7531beb4297ebbdff55b`](https://github.com/shopl/shoplflow/commit/2c55fee54e4475864d3d7531beb4297ebbdff55b) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - input button isError props 추가

## 0.32.37

### Patch Changes

- Updated dependencies [[`b566e65ef06aa879371577e24c0c2519c6009851`](https://github.com/shopl/shoplflow/commit/b566e65ef06aa879371577e24c0c2519c6009851)]:
  - @shoplflow/shopl-assets@0.11.3

## 0.32.36

### Patch Changes

- Updated dependencies [[`75c4f2557f5f867b6e1732e6145c82226966a200`](https://github.com/shopl/shoplflow/commit/75c4f2557f5f867b6e1732e6145c82226966a200)]:
  - @shoplflow/shopl-assets@0.11.2

## 0.32.35

### Patch Changes

- [#464](https://github.com/shopl/shoplflow/pull/464) [`a2ef812a490a5ad1f39524192aa383d275133392`](https://github.com/shopl/shoplflow/commit/a2ef812a490a5ad1f39524192aa383d275133392) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - Icon 추

- Updated dependencies [[`a2ef812a490a5ad1f39524192aa383d275133392`](https://github.com/shopl/shoplflow/commit/a2ef812a490a5ad1f39524192aa383d275133392)]:
  - @shoplflow/shopl-assets@0.11.1

## 0.32.34

### Patch Changes

- [#453](https://github.com/shopl/shoplflow/pull/453) [`90cb89f94e06ed0f9b6676195f659ff047e92ab4`](https://github.com/shopl/shoplflow/commit/90cb89f94e06ed0f9b6676195f659ff047e92ab4) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - docs: Checkbox, MinusButton, Radio 문서 정리

## 0.32.33

### Patch Changes

- [#456](https://github.com/shopl/shoplflow/pull/456) [`eea935abe5a067b05f75c003a9fc806585155625`](https://github.com/shopl/shoplflow/commit/eea935abe5a067b05f75c003a9fc806585155625) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Info 탭 스타일 수정했습니다.(애니메이션 삭제 및 선 너비 수정)

## 0.32.32

### Patch Changes

- [#450](https://github.com/shopl/shoplflow/pull/450) [`7a1578a07673c8d33d858db80af45464b1c37700`](https://github.com/shopl/shoplflow/commit/7a1578a07673c8d33d858db80af45464b1c37700) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - docs: Buttons storybook 문서 업데이트

## 0.32.31

### Patch Changes

- [#449](https://github.com/shopl/shoplflow/pull/449) [`1bd0afd4a2b656072e55f8c7b34fa9593b02b8b8`](https://github.com/shopl/shoplflow/commit/1bd0afd4a2b656072e55f8c7b34fa9593b02b8b8) Thanks [@velo-kim](https://github.com/velo-kim)! - docs: Combobox, Inputs 문서 정리

## 0.32.30

### Patch Changes

- [#440](https://github.com/shopl/shoplflow/pull/440) [`e1709cb8bb98049850df969444a3049b5d555cc4`](https://github.com/shopl/shoplflow/commit/e1709cb8bb98049850df969444a3049b5d555cc4) Thanks [@ayaan0209](https://github.com/ayaan0209)! - ChipButton, ChipToggle 문서 정리 했습니다.

## 0.32.29

### Patch Changes

- [#439](https://github.com/shopl/shoplflow/pull/439) [`fa0730bbe521a5f1a66796c4738b7ff13617f401`](https://github.com/shopl/shoplflow/commit/fa0730bbe521a5f1a66796c4738b7ff13617f401) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Input, InputButton, SelectInputButton, TextArea 문서를 정리했습니다.

## 0.32.28

### Patch Changes

- [#451](https://github.com/shopl/shoplflow/pull/451) [`355c0dfabe0564efb82e6449a31a32cfaa3784fa`](https://github.com/shopl/shoplflow/commit/355c0dfabe0564efb82e6449a31a32cfaa3784fa) Thanks [@velo-kim](https://github.com/velo-kim)! - S사이즈 Button gap 변경

## 0.32.27

### Patch Changes

- [#447](https://github.com/shopl/shoplflow/pull/447) [`3f88f884d5b09ac5c583f8bddf86cfa363c046c2`](https://github.com/shopl/shoplflow/commit/3f88f884d5b09ac5c583f8bddf86cfa363c046c2) Thanks [@velo-kim](https://github.com/velo-kim)! - NumberCombobox onKeyDown 핸들러를 업데이트 했어요

## 0.32.26

### Patch Changes

- [#445](https://github.com/shopl/shoplflow/pull/445) [`63fe6496c3e989c93fca81f1ab7b75417a57707c`](https://github.com/shopl/shoplflow/commit/63fe6496c3e989c93fca81f1ab7b75417a57707c) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Callout Info background neutral100 -> neutral400_5로 수정했습니다.

## 0.32.25

### Patch Changes

- [#443](https://github.com/shopl/shoplflow/pull/443) [`f7a01a0e611c0f4864ffa84e4a7bdcdfeb86b7a8`](https://github.com/shopl/shoplflow/commit/f7a01a0e611c0f4864ffa84e4a7bdcdfeb86b7a8) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Callout Info 아이콘 색이 잘못되어있어서 수정했습니다.

## 0.32.24

### Patch Changes

- Updated dependencies [[`40c82c94942591e9572edd9cc78d9a2018b3d3d8`](https://github.com/shopl/shoplflow/commit/40c82c94942591e9572edd9cc78d9a2018b3d3d8)]:
  - @shoplflow/shopl-assets@0.11.0

## 0.32.23

### Patch Changes

- [#437](https://github.com/shopl/shoplflow/pull/437) [`496f1b9ca238b031b43ed43d56873deffcc0e6a4`](https://github.com/shopl/shoplflow/commit/496f1b9ca238b031b43ed43d56873deffcc0e6a4) Thanks [@velo-kim](https://github.com/velo-kim)! - templates: Title 컴포넌트를 만들었어요

## 0.32.22

### Patch Changes

- [#435](https://github.com/shopl/shoplflow/pull/435) [`64918e9b32ded778207ce8312b99bf97eb7d7cde`](https://github.com/shopl/shoplflow/commit/64918e9b32ded778207ce8312b99bf97eb7d7cde) Thanks [@velo-kim](https://github.com/velo-kim)! - shopl-templates package를 세팅했어요

## 0.32.21

### Patch Changes

- [#433](https://github.com/shopl/shoplflow/pull/433) [`db277d134b5ba6e6c50a073c34506c6026f26646`](https://github.com/shopl/shoplflow/commit/db277d134b5ba6e6c50a073c34506c6026f26646) Thanks [@velo-kim](https://github.com/velo-kim)! - Storybook 버전을 8로 업데이트 했어요

- Updated dependencies [[`db277d134b5ba6e6c50a073c34506c6026f26646`](https://github.com/shopl/shoplflow/commit/db277d134b5ba6e6c50a073c34506c6026f26646)]:
  - @shoplflow/shopl-assets@0.10.4
  - @shoplflow/hada-assets@0.1.3
  - @shoplflow/utils@0.6.5

## 0.32.20

### Patch Changes

- [#431](https://github.com/shopl/shoplflow/pull/431) [`0bfd4c2`](https://github.com/shopl/shoplflow/commit/0bfd4c2c80b2cbeb70e613645c80eb3ea6301270) Thanks [@velo-kim](https://github.com/velo-kim)! - SplitButton을 만들었어요

## 0.32.19

### Patch Changes

- [#427](https://github.com/shopl/shoplflow/pull/427) [`57f6a6f`](https://github.com/shopl/shoplflow/commit/57f6a6ff529fab6089e01d0ee7deeb3c54e42583) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: DropdownButton 컴포넌트를 만들었어요

## 0.32.18

### Patch Changes

- [#428](https://github.com/shopl/shoplflow/pull/428) [`dd57107`](https://github.com/shopl/shoplflow/commit/dd571073c5b21e29ed70eb1eebb901fc8f7362b1) Thanks [@velo-kim](https://github.com/velo-kim)! - NumberCombobox Popover의 zIndex 커스텀 기능을 추가했어요

## 0.32.17

### Patch Changes

- Updated dependencies [[`63dcd6d`](https://github.com/shopl/shoplflow/commit/63dcd6db9d3a83e78252977a04ea0577e3a7ad35)]:
  - @shoplflow/shopl-assets@0.10.3

## 0.32.16

### Patch Changes

- [#422](https://github.com/shopl/shoplflow/pull/422) [`2df7eda`](https://github.com/shopl/shoplflow/commit/2df7eda72b065feb5f8bb33722648b4560e63479) Thanks [@velo-kim](https://github.com/velo-kim)! - Update: NumberCombobox 키보드 이벤트를 업데이트 했어요

## 0.32.15

### Patch Changes

- [#420](https://github.com/shopl/shoplflow/pull/420) [`837efc4`](https://github.com/shopl/shoplflow/commit/837efc4b3e51b9fdf409c11b76e4a514faa2e77c) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: IconButton > svg 크기 고정

## 0.32.14

### Patch Changes

- [#418](https://github.com/shopl/shoplflow/pull/418) [`1f41a6d`](https://github.com/shopl/shoplflow/commit/1f41a6d254968db28e17eabc78f7a789418c323b) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: NumberCombobox의 아이콘 방향을 변경했어요

## 0.32.13

### Patch Changes

- [#413](https://github.com/shopl/shoplflow/pull/413) [`45f1396`](https://github.com/shopl/shoplflow/commit/45f139679b5f9674147c9ecb44cf52db2c772e8c) Thanks [@velo-kim](https://github.com/velo-kim)! - Feat: NumberCombobox를 만들었어요

## 0.32.12

### Patch Changes

- Updated dependencies [[`78efcd5`](https://github.com/shopl/shoplflow/commit/78efcd537ff1b0b5cd3864f33955e6d824b05626)]:
  - @shoplflow/shopl-assets@0.10.2

## 0.32.11

### Patch Changes

- [#410](https://github.com/shopl/shoplflow/pull/410) [`6fbdfca`](https://github.com/shopl/shoplflow/commit/6fbdfca1e4b43972ef94fccdbc3b009c151df1aa) Thanks [@ayaan0209](https://github.com/ayaan0209)! - Title 컴포넌트 제거 및 Text 컴포넌트에 textOverflow 적용

## 0.32.10

### Patch Changes

- [#411](https://github.com/shopl/shoplflow/pull/411) [`7320893`](https://github.com/shopl/shoplflow/commit/73208937e2bbb2144149b32e0bf500dd0f5f63b1) Thanks [@Kim-777](https://github.com/Kim-777)! - Datepicker Props를 업데이트 했어요

## 0.32.9

### Patch Changes

- [#407](https://github.com/shopl/shoplflow/pull/407) [`4cc0bcd`](https://github.com/shopl/shoplflow/commit/4cc0bcdc8de3d0eb12eb67ee7d889b77886645eb) Thanks [@velo-kim](https://github.com/velo-kim)! - CalloutText의 typography를 paragraph2로 변경했어요

## 0.32.8

### Patch Changes

- [#404](https://github.com/shopl/shoplflow/pull/404) [`148f556`](https://github.com/shopl/shoplflow/commit/148f55604d0742b5b3fd49f1fc7aafc7ba5509e0) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - add icon button xs size

## 0.32.6

### Patch Changes

- [#402](https://github.com/shopl/shoplflow/pull/402) [`13b54ee`](https://github.com/shopl/shoplflow/commit/13b54eeb5d726ae4a8785051ac9a0f763e4b0c72) Thanks [@velo-kim](https://github.com/velo-kim)! - Fix: Button Solid color400 일 경우, borderColor 600으로 되는 버그 수정

## 0.32.5

### Patch Changes

- [#400](https://github.com/shopl/shoplflow/pull/400) [`486729d`](https://github.com/shopl/shoplflow/commit/486729d364fbed345ca8633ea9068ef1eafb8a90) Thanks [@shopl-kevin](https://github.com/shopl-kevin)! - Tooltip 고정 노출을 위한 open state props를 추가했어요

## 0.32.4

### Patch Changes

- Updated dependencies [[`d75ac04`](https://github.com/shopl/shoplflow/commit/d75ac049833be602d6ab0e1b3b12b625ed5ef946)]:
  - @shoplflow/shopl-assets@0.10.1

## 0.32.3

### Patch Changes

- Updated dependencies [[`ebd2b4d`](https://github.com/shopl/shoplflow/commit/ebd2b4dd4ae0899476a22c28d1742c65e6a0715b)]:
  - @shoplflow/shopl-assets@0.10.0

## 0.32.2

### Patch Changes

- Updated dependencies [[`fe09df3`](https://github.com/shopl/shoplflow/commit/fe09df3497cc0cece49cfe68a2d23ec3674072b5)]:
  - @shoplflow/shopl-assets@0.9.1

## 0.32.1

### Patch Changes

- [#389](https://github.com/shopl/shoplflow/pull/389) [`f9cd5c6`](https://github.com/shopl/shoplflow/commit/f9cd5c68f66d145308306904aebe4010e0c203c1) Thanks [@velo-kim](https://github.com/velo-kim)! - Fix: Input의 Blur 이벤트 핸들링 함수를 수정했어요

## 0.32.0

### Minor Changes

- [#387](https://github.com/shopl/shoplflow/pull/387) [`506ad81`](https://github.com/shopl/shoplflow/commit/506ad81fef2b3d11d845d6491c0d0661417af9f6) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Pagination, Tag 스타일 수정 및 Icon 추가

### Patch Changes

- Updated dependencies [[`506ad81`](https://github.com/shopl/shoplflow/commit/506ad81fef2b3d11d845d6491c0d0661417af9f6)]:
  - @shoplflow/shopl-assets@0.9.0

## 0.31.21

### Patch Changes

- [#385](https://github.com/shopl/shoplflow/pull/385) [`bc39b6b`](https://github.com/shopl/shoplflow/commit/bc39b6b76a54e5b0eb2fb7d953cda32707ef6af1) Thanks [@velo-kim](https://github.com/velo-kim)! - IconButton type의 기본값을 설정했어요

## 0.31.20

### Patch Changes

- [#382](https://github.com/shopl/shoplflow/pull/382) [`76ffa86`](https://github.com/shopl/shoplflow/commit/76ffa869f62217eb58f0006aa797c8ecde0cc450) Thanks [@ayaan0209](https://github.com/ayaan0209)! - 타이틀 컴포넌트 생성

- [#384](https://github.com/shopl/shoplflow/pull/384) [`79cfc11`](https://github.com/shopl/shoplflow/commit/79cfc11353ee63a3ac1506cd782c7e66884c7546) Thanks [@velo-kim](https://github.com/velo-kim)! - Update: Input의 isFocused 값이 변경되는 이벤트를 Blur > Keydown으로 변경했어요

## 0.31.19

### Patch Changes

- [#380](https://github.com/shopl/shoplflow/pull/380) [`b04c3cd`](https://github.com/shopl/shoplflow/commit/b04c3cd6df22b48d1c05365eb6b7c09e10cbb37c) Thanks [@velo-kim](https://github.com/velo-kim)! - Datepicker Style을 업데이트 했어요

## 0.31.18

### Patch Changes

- [#378](https://github.com/shopl/shoplflow/pull/378) [`156cf4f`](https://github.com/shopl/shoplflow/commit/156cf4fd85c39cfbf046377f9b3e970eb49743ea) Thanks [@velo-kim](https://github.com/velo-kim)! - MonthDatepicker 선택된 달의 영역을 표시했어요

## 0.31.17

### Patch Changes

- [#376](https://github.com/shopl/shoplflow/pull/376) [`661a17f`](https://github.com/shopl/shoplflow/commit/661a17f53ea55d660be1b6691e97f7a63120243d) Thanks [@velo-kim](https://github.com/velo-kim)! - AnnualDatepicker에 선택 불가능한 년도를 받을 수 있게 했어요

## 0.31.16

### Patch Changes

- [#374](https://github.com/shopl/shoplflow/pull/374) [`56b76b3`](https://github.com/shopl/shoplflow/commit/56b76b3f91b51de3c1a09eec1cb9acffea0eead5) Thanks [@velo-kim](https://github.com/velo-kim)! - DayDatepicker에 fixedHeight 프롭을 추가했어요

## 0.31.15

### Patch Changes

- [#372](https://github.com/shopl/shoplflow/pull/372) [`0874b52`](https://github.com/shopl/shoplflow/commit/0874b5211ffd6f14ddc7a400a8f831fecca868db) Thanks [@velo-kim](https://github.com/velo-kim)! - DayDatepicker MonthStepper의 locale 값을 Datepicker와 매핑해주었어요

## 0.31.14

### Patch Changes

- [#370](https://github.com/shopl/shoplflow/pull/370) [`1eff60b`](https://github.com/shopl/shoplflow/commit/1eff60bf1f2b291635d0ce8a9d6ed7fb74d8d8bb) Thanks [@velo-kim](https://github.com/velo-kim)! - YearSelect의 height를 동적으로 지정하게 변경했어요

## 0.31.13

### Patch Changes

- [#368](https://github.com/shopl/shoplflow/pull/368) [`a1c4979`](https://github.com/shopl/shoplflow/commit/a1c497958dd20e9f74f3c703cf58bc5343aefbca) Thanks [@velo-kim](https://github.com/velo-kim)! - YearSelect의 스타일을 변경했어요

## 0.31.12

### Patch Changes

- [#366](https://github.com/shopl/shoplflow/pull/366) [`2795daf`](https://github.com/shopl/shoplflow/commit/2795daf456f92d86373a80e6a31ce94ac20e281c) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: IconButton, Button Props 추론 안되던 이슈를 수정했어요

## 0.31.11

### Patch Changes

- [#364](https://github.com/shopl/shoplflow/pull/364) [`a74b49a`](https://github.com/shopl/shoplflow/commit/a74b49aa94064caab86952e222b248467a6d01a8) Thanks [@velo-kim](https://github.com/velo-kim)! - DayDatepicker minDate, minDate 버그를 수정했어요

## 0.31.10

### Patch Changes

- [#362](https://github.com/shopl/shoplflow/pull/362) [`010ee0e`](https://github.com/shopl/shoplflow/commit/010ee0efc148a4d7f43a9b5a636b2f129081662b) Thanks [@velo-kim](https://github.com/velo-kim)! - DayDatepicker의 type을 변경했어요

## 0.31.9

### Patch Changes

- [#358](https://github.com/shopl/shoplflow/pull/358) [`cda60b1`](https://github.com/shopl/shoplflow/commit/cda60b1d773c7152a2aacb6b9db02f83ce56a3fa) Thanks [@velo-kim](https://github.com/velo-kim)! - ToggleButton을 업데이트 했어요

- [#358](https://github.com/shopl/shoplflow/pull/358) [`cda60b1`](https://github.com/shopl/shoplflow/commit/cda60b1d773c7152a2aacb6b9db02f83ce56a3fa) Thanks [@velo-kim](https://github.com/velo-kim)! - DayDatepicker 컴포넌트를 만들었어요

- Updated dependencies [[`cda60b1`](https://github.com/shopl/shoplflow/commit/cda60b1d773c7152a2aacb6b9db02f83ce56a3fa)]:
  - @shoplflow/utils@0.6.4

## 0.31.8

### Patch Changes

- [#359](https://github.com/shopl/shoplflow/pull/359) [`0bc40e9`](https://github.com/shopl/shoplflow/commit/0bc40e9e6ad7769097a49ea2a8c08405495449f0) Thanks [@velo-kim](https://github.com/velo-kim)! - Input 업데이트 blur event 핸들링을 변경했어요

## 0.31.7

### Patch Changes

- [#356](https://github.com/shopl/shoplflow/pull/356) [`79005c6`](https://github.com/shopl/shoplflow/commit/79005c6eeb8245322837087f3e413e929e3d1f07) Thanks [@velo-kim](https://github.com/velo-kim)! - Input border-radius를 변경할 수 있어요

## 0.31.6

### Patch Changes

- [#354](https://github.com/shopl/shoplflow/pull/354) [`7a5da9d`](https://github.com/shopl/shoplflow/commit/7a5da9d069e5fb53238db2e6f1c25c2398db55af) Thanks [@velo-kim](https://github.com/velo-kim)! - Input의 커스텀 스타일의 범위를 넓혔어요

## 0.31.5

### Patch Changes

- Updated dependencies [[`d08f959`](https://github.com/shopl/shoplflow/commit/d08f959cefda105b3e3b7fd78d74d38062334282)]:
  - @shoplflow/shopl-assets@0.8.1

## 0.31.4

### Patch Changes

- Updated dependencies [[`4a688cc`](https://github.com/shopl/shoplflow/commit/4a688cc180d261c87110158a0c2e2dbaca0c7135)]:
  - @shoplflow/shopl-assets@0.8.0

## 0.31.3

### Patch Changes

- [#348](https://github.com/shopl/shoplflow/pull/348) [`cf1fc57`](https://github.com/shopl/shoplflow/commit/cf1fc57affac0b4a82a74458cf210ec5694fcead) Thanks [@velo-kim](https://github.com/velo-kim)! - ToggleButton을 업데이트 했어요

- [#347](https://github.com/shopl/shoplflow/pull/347) [`9118266`](https://github.com/shopl/shoplflow/commit/91182660214920b39c7ca6bfd52a2e9a455cb353) Thanks [@velo-kim](https://github.com/velo-kim)! - update .npmrc

## 0.31.2

### Patch Changes

- [#345](https://github.com/shopl/shoplflow/pull/345) [`45f1724`](https://github.com/shopl/shoplflow/commit/45f1724f839eb21e2f4bd9996bfdc0adac3ef44d) Thanks [@shopl-dev](https://github.com/shopl-dev)! - Update: .npmrc

- Updated dependencies [[`45f1724`](https://github.com/shopl/shoplflow/commit/45f1724f839eb21e2f4bd9996bfdc0adac3ef44d)]:
  - @shoplflow/hada-assets@0.1.2
  - @shoplflow/shopl-assets@0.7.3
  - @shoplflow/utils@0.6.3

## 0.31.1

### Patch Changes

- [#343](https://github.com/shopl/shoplflow/pull/343) [`0b2a854`](https://github.com/shopl/shoplflow/commit/0b2a854d7d5fb5fae1c65d045ca48cea2a2d71c9) Thanks [@velo-kim](https://github.com/velo-kim)! - InputButton에 useClear Prop을 추가했어요

## 0.31.0

### Minor Changes

- [#341](https://github.com/shopl/shoplflow/pull/341) [`afa6685`](https://github.com/shopl/shoplflow/commit/afa6685bb7ee990b137d8e1615b7fb56062018fc) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Dropdown Button disabled 스타일링 수정 및 storybook docs 수정

## 0.30.8

### Patch Changes

- [#339](https://github.com/shopl/shoplflow/pull/339) [`0912514`](https://github.com/shopl/shoplflow/commit/0912514c4ad5a3bfb8b91ca029a5cf11a5049fee) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: Checkbox id 값을 수정했어요

## 0.30.7

### Patch Changes

- [#337](https://github.com/shopl/shoplflow/pull/337) [`b17e563`](https://github.com/shopl/shoplflow/commit/b17e56356d0ea99bbd38d99cb9a86827e8e2eb49) Thanks [@velo-kim](https://github.com/velo-kim)! - ModalCotext를 업데이트 했어요

- [#337](https://github.com/shopl/shoplflow/pull/337) [`b17e563`](https://github.com/shopl/shoplflow/commit/b17e56356d0ea99bbd38d99cb9a86827e8e2eb49) Thanks [@velo-kim](https://github.com/velo-kim)! - addModal의 파라미터를 변경했어요

- [#337](https://github.com/shopl/shoplflow/pull/337) [`b17e563`](https://github.com/shopl/shoplflow/commit/b17e56356d0ea99bbd38d99cb9a86827e8e2eb49) Thanks [@velo-kim](https://github.com/velo-kim)! - Modal의 BackDrop zIndex를 커스텀할 수 있게 변경했어요

## 0.30.6

### Patch Changes

- [#335](https://github.com/shopl/shoplflow/pull/335) [`8fae0ee`](https://github.com/shopl/shoplflow/commit/8fae0eedaa282e5d4f6960fe3b50e7c04331211a) Thanks [@velo-kim](https://github.com/velo-kim)! - addModal의 파라미터를 변경했어요

- [#335](https://github.com/shopl/shoplflow/pull/335) [`8fae0ee`](https://github.com/shopl/shoplflow/commit/8fae0eedaa282e5d4f6960fe3b50e7c04331211a) Thanks [@velo-kim](https://github.com/velo-kim)! - Modal의 BackDrop zIndex를 커스텀할 수 있게 변경했어요

## 0.30.5

### Patch Changes

- [#332](https://github.com/shopl/shoplflow/pull/332) [`47ae12a`](https://github.com/shopl/shoplflow/commit/47ae12a732cba24ddc70239b4b41657399ecaa11) Thanks [@velo-kim](https://github.com/velo-kim)! - Checkbox를 업데이트 했어요

## 0.30.4

### Patch Changes

- [#330](https://github.com/shopl/shoplflow/pull/330) [`80084bd`](https://github.com/shopl/shoplflow/commit/80084bd406068056306f7bb497376d77bf220252) Thanks [@velo-kim](https://github.com/velo-kim)! - Checkbox를 업데이트 했어요

## 0.30.3

### Patch Changes

- [#328](https://github.com/shopl/shoplflow/pull/328) [`d6709da`](https://github.com/shopl/shoplflow/commit/d6709dabccaaf8be57956b74c8de0b21dc972123) Thanks [@velo-kim](https://github.com/velo-kim)! - DropdownButtonProps를 수정했어요

- [#328](https://github.com/shopl/shoplflow/pull/328) [`d6709da`](https://github.com/shopl/shoplflow/commit/d6709dabccaaf8be57956b74c8de0b21dc972123) Thanks [@velo-kim](https://github.com/velo-kim)! - 버튼 기반의 컴포넌트 타입을 변경했어요

## 0.30.2

### Patch Changes

- [#325](https://github.com/shopl/shoplflow/pull/325) [`f23700f`](https://github.com/shopl/shoplflow/commit/f23700f5131eb7af07eeebe16196265396419963) Thanks [@velo-kim](https://github.com/velo-kim)! - update: ToggleButton의 타입을 button으로 지정했어요

- [#325](https://github.com/shopl/shoplflow/pull/325) [`f23700f`](https://github.com/shopl/shoplflow/commit/f23700f5131eb7af07eeebe16196265396419963) Thanks [@velo-kim](https://github.com/velo-kim)! - 깃헙액션을 업데이트 했어요

- [#325](https://github.com/shopl/shoplflow/pull/325) [`f23700f`](https://github.com/shopl/shoplflow/commit/f23700f5131eb7af07eeebe16196265396419963) Thanks [@velo-kim](https://github.com/velo-kim)! - update: github action

## 0.30.1

### Patch Changes

- [#321](https://github.com/shopl/shoplflow/pull/321) [`ab05d8b`](https://github.com/shopl/shoplflow/commit/ab05d8b017ef08f85452847fca99f9619666187e) Thanks [@velo-kim](https://github.com/velo-kim)! - feature: ToggleButton 컴포넌트를 만들었어요!

## 0.30.0

### Minor Changes

- [#319](https://github.com/shopl/shoplflow/pull/319) [`023e2ab`](https://github.com/shopl/shoplflow/commit/023e2ab6d90b2a8cdf9ddb2b23252c5ba5868bb2) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Tree component disabled 처리에 따른 leftSource, onClick event 처리

## 0.29.0

### Minor Changes

- [#317](https://github.com/shopl/shoplflow/pull/317) [`df4cbcc`](https://github.com/shopl/shoplflow/commit/df4cbcc32a0620adb2f969a55c4b3eb22f0692d7) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Tree component에 disabled 속성 추가 및 사소한 style 수정

## 0.28.5

### Patch Changes

- Updated dependencies [[`41020e7`](https://github.com/shopl/shoplflow/commit/41020e7452892ec6aa68fb685cfd4b179595db3f)]:
  - @shoplflow/shopl-assets@0.7.2

## 0.28.4

### Patch Changes

- [#313](https://github.com/shopl/shoplflow/pull/313) [`34e2258`](https://github.com/shopl/shoplflow/commit/34e2258739e17313ab4f0f9f0cc733af0230de06) Thanks [@velo-kim](https://github.com/velo-kim)! - DropdownButton value 감싸던 Text Component 제거

## 0.28.3

### Patch Changes

- [#310](https://github.com/shopl/shoplflow/pull/310) [`7b93a12`](https://github.com/shopl/shoplflow/commit/7b93a12abdf1d858ea1d894968dccf335cb0696b) Thanks [@velo-kim](https://github.com/velo-kim)! - Tooltip Trigger 스타일 조정

## 0.28.2

### Patch Changes

- [#308](https://github.com/shopl/shoplflow/pull/308) [`dc2b83f`](https://github.com/shopl/shoplflow/commit/dc2b83f37967d45bac5dbc5003ec1e1d933a7a86) Thanks [@velo-kim](https://github.com/velo-kim)! - Pagination에 totalCount Props 추가

## 0.28.1

### Patch Changes

- [#306](https://github.com/shopl/shoplflow/pull/306) [`fc95c1a`](https://github.com/shopl/shoplflow/commit/fc95c1a2e55e230f29e109fec4207497a223bae6) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - [SH-814] Fix/dropdown button

## 0.28.0

### Minor Changes

- DropdownButton value에 Text component 적용

## 0.27.6

### Patch Changes

- Updated dependencies [[`9c9f67d`](https://github.com/shopl/shoplflow/commit/9c9f67ddfca78340d16178f768dc7260e1be9645)]:
  - @shoplflow/utils@0.6.2

## 0.27.5

### Patch Changes

- [#302](https://github.com/shopl/shoplflow/pull/302) [`c2e5fde`](https://github.com/shopl/shoplflow/commit/c2e5fdea94d998e23430495e4e9a75ae6c6e5c54) Thanks [@velo-kim](https://github.com/velo-kim)! - Update: useParentElementClick hook

- Updated dependencies [[`c2e5fde`](https://github.com/shopl/shoplflow/commit/c2e5fdea94d998e23430495e4e9a75ae6c6e5c54)]:
  - @shoplflow/utils@0.6.1

## 0.27.4

### Patch Changes

- [#300](https://github.com/shopl/shoplflow/pull/300) [`a07b002`](https://github.com/shopl/shoplflow/commit/a07b002446c1ce39f1c152059cfbcca3b3aa17fb) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - FullSize Modal minHeight이 작게 설정되는 이슈 수정

## 0.27.3

### Patch Changes

- [#298](https://github.com/shopl/shoplflow/pull/298) [`9fedd43`](https://github.com/shopl/shoplflow/commit/9fedd4315bfeda826aa96edb4789d2e25c49d562) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - update InputButton Attribute

- [#298](https://github.com/shopl/shoplflow/pull/298) [`9fedd43`](https://github.com/shopl/shoplflow/commit/9fedd4315bfeda826aa96edb4789d2e25c49d562) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Tree Item HTMLAttribute 추가

## 0.27.2

### Patch Changes

- [#296](https://github.com/shopl/shoplflow/pull/296) [`b889804`](https://github.com/shopl/shoplflow/commit/b889804806afd50dcd81aeb96946efe551fd0a07) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Tree Item HTMLAttribute 추가

## 0.27.1

### Patch Changes

- [#294](https://github.com/shopl/shoplflow/pull/294) [`1f333f8`](https://github.com/shopl/shoplflow/commit/1f333f871e0eba3eeb058cc0305f8b58790c52a2) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 모달 내 Tree 애니메이션 미동작 이슈 수정

## 0.27.0

### Minor Changes

- [#252](https://github.com/shopl/shoplflow/pull/252) [`ce1886a`](https://github.com/shopl/shoplflow/commit/ce1886ad07d7b22598134dd64d7822b369c11900) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Tree 컴포넌트 추가

### Patch Changes

- [#252](https://github.com/shopl/shoplflow/pull/252) [`ce1886a`](https://github.com/shopl/shoplflow/commit/ce1886ad07d7b22598134dd64d7822b369c11900) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Button Loading 상태 추가

- Updated dependencies [[`ce1886a`](https://github.com/shopl/shoplflow/commit/ce1886ad07d7b22598134dd64d7822b369c11900)]:
  - @shoplflow/utils@0.6.0

## 0.26.10

### Patch Changes

- Updated dependencies [[`0f76e0a`](https://github.com/shopl/shoplflow/commit/0f76e0a748fabe6347ff783762c2f100d0491e7d)]:
  - @shoplflow/shopl-assets@0.7.1

## 0.26.9

### Patch Changes

- [#289](https://github.com/shopl/shoplflow/pull/289) [`b17b38c`](https://github.com/shopl/shoplflow/commit/b17b38c5bacb768f3650818a1659f33d7819406f) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ModalFooter가 잘리는 이슈 수정

## 0.26.8

### Patch Changes

- [#287](https://github.com/shopl/shoplflow/pull/287) [`1ec67c7`](https://github.com/shopl/shoplflow/commit/1ec67c70ee18249a793ee67d45007bd040abbcc8) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Tabs 컴포넌트 추가

- [#287](https://github.com/shopl/shoplflow/pull/287) [`1ec67c7`](https://github.com/shopl/shoplflow/commit/1ec67c70ee18249a793ee67d45007bd040abbcc8) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Tab 컴포넌트 로직 변경(props, style)

## 0.26.7

### Patch Changes

- [#285](https://github.com/shopl/shoplflow/pull/285) [`92af54c`](https://github.com/shopl/shoplflow/commit/92af54cd48a2e786084e21789eb4a5eda3c4ed02) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal Body height 버그 수정

## 0.26.6

### Patch Changes

- [#283](https://github.com/shopl/shoplflow/pull/283) [`487177c`](https://github.com/shopl/shoplflow/commit/487177ccb06018b17ca7be3f7e43e98173c647c2) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: export Pagination (component/index.ts)

- [#283](https://github.com/shopl/shoplflow/pull/283) [`487177c`](https://github.com/shopl/shoplflow/commit/487177ccb06018b17ca7be3f7e43e98173c647c2) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Add Pagination Component

## 0.26.5

### Patch Changes

- [#281](https://github.com/shopl/shoplflow/pull/281) [`529b413`](https://github.com/shopl/shoplflow/commit/529b413e232a3218728d52381f424002f37674bd) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Add Pagination Component

## 0.26.4

### Patch Changes

- [#279](https://github.com/shopl/shoplflow/pull/279) [`9a12682`](https://github.com/shopl/shoplflow/commit/9a126820dd8dc013cb0e048e740fd62893097500) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal padding top bottom 미적용 이슈 수정

## 0.26.3

### Patch Changes

- [#273](https://github.com/shopl/shoplflow/pull/273) [`816909a`](https://github.com/shopl/shoplflow/commit/816909ac8abe8b7107621ff2bd6cb9936dcdd8fe) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: Stack(Container)ComponentType 수정

## 0.26.2

### Patch Changes

- [#276](https://github.com/shopl/shoplflow/pull/276) [`c38a9d7`](https://github.com/shopl/shoplflow/commit/c38a9d771df1b52f03fb32649d5aadfeebe8bae3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Full Modal 상태의 ModalBody padding 제거

- [#276](https://github.com/shopl/shoplflow/pull/276) [`c38a9d7`](https://github.com/shopl/shoplflow/commit/c38a9d771df1b52f03fb32649d5aadfeebe8bae3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal FULL size body height 버그 수정

## 0.26.1

### Patch Changes

- [#274](https://github.com/shopl/shoplflow/pull/274) [`15244d2`](https://github.com/shopl/shoplflow/commit/15244d23971a3527b762752d8853d02c0c801a42) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal FULL size body height 버그 수정

## 0.26.0

### Minor Changes

- [#271](https://github.com/shopl/shoplflow/pull/271) [`371d108`](https://github.com/shopl/shoplflow/commit/371d10876f3050beb89594c5e0fa3915df591185) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - StackContainer 추가

- [#271](https://github.com/shopl/shoplflow/pull/271) [`371d108`](https://github.com/shopl/shoplflow/commit/371d10876f3050beb89594c5e0fa3915df591185) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal Full size 추가

## 0.25.4

### Patch Changes

- Updated dependencies [[`47f17fa`](https://github.com/shopl/shoplflow/commit/47f17faab88d915fc9a8d38e6b346b7dc80f169c)]:
  - @shoplflow/shopl-assets@0.7.0

## 0.25.3

### Patch Changes

- [#267](https://github.com/shopl/shoplflow/pull/267) [`d2b09c7`](https://github.com/shopl/shoplflow/commit/d2b09c723a85b26540cc60b7e232ed0692f52542) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ScrollArea가 Iframe 내부에서 동작하지 않는 버그 수정

## 0.25.2

### Patch Changes

- [#265](https://github.com/shopl/shoplflow/pull/265) [`e3ad05a`](https://github.com/shopl/shoplflow/commit/e3ad05aa7a7d24d98881c2de1eadb4d2a03227ae) Thanks [@bong9boy](https://github.com/bong9boy)! - spacing02, paragraph1, paragraph2 추가

## 0.25.1

### Patch Changes

- [#262](https://github.com/shopl/shoplflow/pull/262) [`3c8d9d7`](https://github.com/shopl/shoplflow/commit/3c8d9d767ceeb09668d9b35ac2acc6db6d91222d) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - [Feature/add modal size] Modal sizeVar에 XXXL 추가

## 0.25.0

### Minor Changes

- Modal 컴포넌트에 XXXL size 추가

## 0.24.36

### Patch Changes

- [#260](https://github.com/shopl/shoplflow/pull/260) [`4eac4eb`](https://github.com/shopl/shoplflow/commit/4eac4eb72e10cc3605961e4e36dd04672147d558) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: ModalBody > setContentHeightMax 함수 생성하여 BodyContainer와 ScrollArea의 maxHeight 구하는 로직을 분리하였습니다.

## 0.24.35

### Patch Changes

- [#258](https://github.com/shopl/shoplflow/pull/258) [`2625242`](https://github.com/shopl/shoplflow/commit/2625242f7cafda72f4e9633bd824fe06f7c2b1e4) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Text word-break 속성 미적용 버그 수정

## 0.24.34

### Patch Changes

- [#256](https://github.com/shopl/shoplflow/pull/256) [`9623f96`](https://github.com/shopl/shoplflow/commit/9623f9641a46edef28004a58369450d6b6906ce1) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: PopperContext에 useFloating 모든 리턴 타입 추가

## 0.24.33

### Patch Changes

- [#253](https://github.com/shopl/shoplflow/pull/253) [`e902631`](https://github.com/shopl/shoplflow/commit/e9026316c2877e21e5ebf4bc4985a1088cb4d57f) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Button workBreak 옵션 수정

- [#253](https://github.com/shopl/shoplflow/pull/253) [`e902631`](https://github.com/shopl/shoplflow/commit/e9026316c2877e21e5ebf4bc4985a1088cb4d57f) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - InputButton value 초기 상태를 감지하지 못하는 이슈 수정

## 0.24.32

### Patch Changes

- [#250](https://github.com/shopl/shoplflow/pull/250) [`b55f3b2`](https://github.com/shopl/shoplflow/commit/b55f3b2780182260cc766d6c0a48184e7f64d115) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: Popper > FloatingPortal Dom 여러개 생성되는 이슈 수정

## 0.24.31

### Patch Changes

- [#248](https://github.com/shopl/shoplflow/pull/248) [`6425754`](https://github.com/shopl/shoplflow/commit/6425754af0a90e1d6a3352902a829bd16aaad90a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Input Number 레이아웃 변경 버그 수정

## 0.24.30

### Patch Changes

- [#246](https://github.com/shopl/shoplflow/pull/246) [`3ae6a28`](https://github.com/shopl/shoplflow/commit/3ae6a28389b731ef4bfe4a0ba17f42db4ea7f09c) Thanks [@velo-kim](https://github.com/velo-kim)! - Fix: getStyleByType(input.styyled.ts) 불필요한 조건문 제거

## 0.24.29

### Patch Changes

- [#244](https://github.com/shopl/shoplflow/pull/244) [`21e0ebf`](https://github.com/shopl/shoplflow/commit/21e0ebf706922ba7af6e9d91930a5f87cebc3fe3) Thanks [@velo-kim](https://github.com/velo-kim)! - Tooltip 컴포넌트 추가 및 각 컴포넌트 index 파일 styled import 제거

## 0.24.28

### Patch Changes

- [#242](https://github.com/shopl/shoplflow/pull/242) [`d7e3cc8`](https://github.com/shopl/shoplflow/commit/d7e3cc899980a603ca76fccdcaa7a5784f855536) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Input Number 토글 시 width가 일시적으로 가변되는 현상 수정

## 0.24.27

### Patch Changes

- [#240](https://github.com/shopl/shoplflow/pull/240) [`8c6dcdd`](https://github.com/shopl/shoplflow/commit/8c6dcdd84c33427e35cc35299ddeb35cf52a47f8) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Input label 스타일 수정

## 0.24.26

### Patch Changes

- [#238](https://github.com/shopl/shoplflow/pull/238) [`fb1cb89`](https://github.com/shopl/shoplflow/commit/fb1cb89b5af8952b86ec4a4d6f6e1bf43a2457ef) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Input type number disable 상태일 경우 스타일 버그 수정

## 0.24.25

### Patch Changes

- [#236](https://github.com/shopl/shoplflow/pull/236) [`d7d35d6`](https://github.com/shopl/shoplflow/commit/d7d35d6c83f92539530c596401fa6f99f204cf7a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input minHeight 추가

## 0.24.24

### Patch Changes

- [#234](https://github.com/shopl/shoplflow/pull/234) [`179ca27`](https://github.com/shopl/shoplflow/commit/179ca27ed132ea7cc1ef6b36ca5440edb8bc1972) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Input number 타입 height 수정

- [#234](https://github.com/shopl/shoplflow/pull/234) [`179ca27`](https://github.com/shopl/shoplflow/commit/179ca27ed132ea7cc1ef6b36ca5440edb8bc1972) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - DropdownButton isError 상태 추가

## 0.24.23

### Patch Changes

- [#232](https://github.com/shopl/shoplflow/pull/232) [`8b57d71`](https://github.com/shopl/shoplflow/commit/8b57d719aa686d5e24717a7a10caa55e9e4e14da) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - changeset fix

## 0.24.22

### Patch Changes

- [#230](https://github.com/shopl/shoplflow/pull/230) [`9ac6257`](https://github.com/shopl/shoplflow/commit/9ac6257c4b39cc1375ebfb32eda794578bfbfc04) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - TextArea Height 조정 불가능 버그 수정

- [#230](https://github.com/shopl/shoplflow/pull/230) [`9ac6257`](https://github.com/shopl/shoplflow/commit/9ac6257c4b39cc1375ebfb32eda794578bfbfc04) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Button lineClamp 옵션 추가

## 0.24.21

### Patch Changes

- [#228](https://github.com/shopl/shoplflow/pull/228) [`21043ed`](https://github.com/shopl/shoplflow/commit/21043ed343d9d4ca273c5f8fd8a0c78917925b23) Thanks [@bong9boy](https://github.com/bong9boy)! - body3_400 weight 수정

## 0.24.20

### Patch Changes

- Updated dependencies [[`3c1b8fc`](https://github.com/shopl/shoplflow/commit/3c1b8fcbddb74fe4c1485579097ed7f6f868c7ee)]:
  - @shoplflow/shopl-assets@0.6.0

## 0.24.19

### Patch Changes

- [#224](https://github.com/shopl/shoplflow/pull/224) [`3819e16`](https://github.com/shopl/shoplflow/commit/3819e16d1ffc11867d01f90d24a41c5d2b93ccb7) Thanks [@velo-kim](https://github.com/velo-kim)! - style: Input DeleteIcon 컬러 변경 (netural600 -> neutarl350)

## 0.24.18

### Patch Changes

- [#222](https://github.com/shopl/shoplflow/pull/222) [`f98a8e5`](https://github.com/shopl/shoplflow/commit/f98a8e5e456357a844f7d3945aad91976a85a911) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: ModalProvider 배경 스크롤 방지 로직 수정

- [#222](https://github.com/shopl/shoplflow/pull/222) [`f98a8e5`](https://github.com/shopl/shoplflow/commit/f98a8e5e456357a844f7d3945aad91976a85a911) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: 모달 뒤로가기 로직 추가

## 0.24.17

### Patch Changes

- [#220](https://github.com/shopl/shoplflow/pull/220) [`cf14c3d`](https://github.com/shopl/shoplflow/commit/cf14c3d3fde92a004f6bd4aab067a82a486d2191) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - inputButton 빈 string에도 변경될 수 있게 수정

## 0.24.16

### Patch Changes

- [#218](https://github.com/shopl/shoplflow/pull/218) [`5d299f8`](https://github.com/shopl/shoplflow/commit/5d299f84f3ba13fb897fd2ae6792ce1de0bac12d) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 아이콘 변경 대응

- [#218](https://github.com/shopl/shoplflow/pull/218) [`5d299f8`](https://github.com/shopl/shoplflow/commit/5d299f84f3ba13fb897fd2ae6792ce1de0bac12d) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 뷰포트에 따라 modal 높이가 변경되지 않던 문제 수정

- [#218](https://github.com/shopl/shoplflow/pull/218) [`5d299f8`](https://github.com/shopl/shoplflow/commit/5d299f84f3ba13fb897fd2ae6792ce1de0bac12d) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 컬러 단계 로직 수정

## 0.24.15

### Patch Changes

- [#216](https://github.com/shopl/shoplflow/pull/216) [`38dd211`](https://github.com/shopl/shoplflow/commit/38dd2114de42e6c89f1adc9526347ad3a10c85da) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: ModalProvider 배경 스크롤 방지 로직 수정

## 0.24.14

### Patch Changes

- [#214](https://github.com/shopl/shoplflow/pull/214) [`a43f254`](https://github.com/shopl/shoplflow/commit/a43f254138929bb1d56f526aa96105688c1e7649) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: DropdownButton > Icon sizeVar "S" 명시

## 0.24.13

### Patch Changes

- Updated dependencies [[`424e76a`](https://github.com/shopl/shoplflow/commit/424e76a67dbced84eb3aabf22fca21a764ada203)]:
  - @shoplflow/shopl-assets@0.5.1
  - @shoplflow/hada-assets@0.1.1

## 0.24.12

### Patch Changes

- [#210](https://github.com/shopl/shoplflow/pull/210) [`d15a6aa`](https://github.com/shopl/shoplflow/commit/d15a6aa48ebb5e6842e85347a14ea410b049c5f5) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - List.Text2Rows 말줄임 처리 추가

## 0.24.11

### Patch Changes

- Updated dependencies [[`a26e49e`](https://github.com/shopl/shoplflow/commit/a26e49ee2c0d06de40f6e5ad9d13819799a69d4d)]:
  - @shoplflow/shopl-assets@0.5.0
  - @shoplflow/hada-assets@0.1.0

## 0.24.10

### Patch Changes

- [#206](https://github.com/shopl/shoplflow/pull/206) [`9317ead`](https://github.com/shopl/shoplflow/commit/9317ead4a0bc177e93ce68454d3ea0f37c52c2fb) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Dropdown Button S size style 수정

- [#206](https://github.com/shopl/shoplflow/pull/206) [`9317ead`](https://github.com/shopl/shoplflow/commit/9317ead4a0bc177e93ce68454d3ea0f37c52c2fb) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Popper z-index 수정

## 0.24.9

### Patch Changes

- [#204](https://github.com/shopl/shoplflow/pull/204) [`da8b5c0`](https://github.com/shopl/shoplflow/commit/da8b5c087cc03629a9e314ff4e5aa1b9f0fbb4d2) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - MinusButton size 수정

## 0.24.8

### Patch Changes

- [#202](https://github.com/shopl/shoplflow/pull/202) [`34fead1`](https://github.com/shopl/shoplflow/commit/34fead18443bc472ec6ce1efacc572c4a31c2a89) Thanks [@velo-kim](https://github.com/velo-kim)! - feature: DropdownButton value ReactNode로 변경

## 0.24.7

### Patch Changes

- [#200](https://github.com/shopl/shoplflow/pull/200) [`0d91fb0`](https://github.com/shopl/shoplflow/commit/0d91fb0abf3067a1e912359d4528b3c36fa29f31) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Modal 관련 type export 추가

## 0.24.6

### Patch Changes

- [#198](https://github.com/shopl/shoplflow/pull/198) [`db2c5b5`](https://github.com/shopl/shoplflow/commit/db2c5b5f8c4273a594977514f2d6df664dab915b) Thanks [@velo-kim](https://github.com/velo-kim)! - style: Checkbox Container background-color transparent로 변경

- [#198](https://github.com/shopl/shoplflow/pull/198) [`db2c5b5`](https://github.com/shopl/shoplflow/commit/db2c5b5f8c4273a594977514f2d6df664dab915b) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Menu leftSource checkbox, radio 컴포넌트일 경우에만 isSelected 미처리

## 0.24.5

### Patch Changes

- [#196](https://github.com/shopl/shoplflow/pull/196) [`fb6428f`](https://github.com/shopl/shoplflow/commit/fb6428f6a5f32e502f821e3900109a08ece2fe10) Thanks [@velo-kim](https://github.com/velo-kim)! - feat: Menu leftSource checkbox, radio 컴포넌트일 경우에만 isSelected 미처리

## 0.24.4

### Patch Changes

- [#194](https://github.com/shopl/shoplflow/pull/194) [`79bf8e6`](https://github.com/shopl/shoplflow/commit/79bf8e628b605c69fa2fbd107c97d648da794871) Thanks [@velo-kim](https://github.com/velo-kim)! - style: Popper

- [#194](https://github.com/shopl/shoplflow/pull/194) [`79bf8e6`](https://github.com/shopl/shoplflow/commit/79bf8e628b605c69fa2fbd107c97d648da794871) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: PopperPortal > div style에 position: relative 추가

## 0.24.3

### Patch Changes

- [#192](https://github.com/shopl/shoplflow/pull/192) [`80137b7`](https://github.com/shopl/shoplflow/commit/80137b796b48339d38696480db38cd238b538767) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: PopperPortal > div style에 position: relative 추가

## 0.24.2

### Patch Changes

- [#190](https://github.com/shopl/shoplflow/pull/190) [`f2e4801`](https://github.com/shopl/shoplflow/commit/f2e4801ca215114c27cb12d5012c9493739efd56) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - SelectInputButton value 타입 변경

## 0.24.1

### Patch Changes

- [#188](https://github.com/shopl/shoplflow/pull/188) [`2fd5851`](https://github.com/shopl/shoplflow/commit/2fd58515e42c324c1b9e66465dfd904f4abe00cf) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Icon HTMLAttributes 추가

## 0.24.0

### Minor Changes

- [#186](https://github.com/shopl/shoplflow/pull/186) [`b45d27d`](https://github.com/shopl/shoplflow/commit/b45d27d5db8326fbd905dea1aa48e1654b08830b) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Icon `dangerouslySetInnerHTML` prop 추가

## 0.23.2

### Patch Changes

- [#184](https://github.com/shopl/shoplflow/pull/184) [`3a4c61a`](https://github.com/shopl/shoplflow/commit/3a4c61a50879ab1f68016b15967fe4b1f2a85201) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - StackContainer 컴포넌트 min/max width/height 추가

## 0.23.1

### Patch Changes

- [#182](https://github.com/shopl/shoplflow/pull/182) [`4d98b5b`](https://github.com/shopl/shoplflow/commit/4d98b5b1fd86da7b5562f505b404a060bf63af8e) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - SelectInputButton export 추가

## 0.23.0

### Minor Changes

- [#180](https://github.com/shopl/shoplflow/pull/180) [`ddd53e3`](https://github.com/shopl/shoplflow/commit/ddd53e35a0ade5384808adf0fe7521edffbca187) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - SelectInputButton 추가

### Patch Changes

- [#180](https://github.com/shopl/shoplflow/pull/180) [`ddd53e3`](https://github.com/shopl/shoplflow/commit/ddd53e35a0ade5384808adf0fe7521edffbca187) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - InputButton 이벤트 버블링 이슈 수정

## 0.22.5

### Patch Changes

- Updated dependencies [[`afaef60`](https://github.com/shopl/shoplflow/commit/afaef602ffc6bdec0a5dc2c353923f60047f454a)]:
  - @shoplflow/shopl-assets@0.4.0

## 0.22.4

### Patch Changes

- Updated dependencies [[`e9ea0d8`](https://github.com/shopl/shoplflow/commit/e9ea0d8b019117f9cd7f414c5a6dd62fd3d4d3a5)]:
  - @shoplflow/utils@0.5.4

## 0.22.3

### Patch Changes

- [#174](https://github.com/shopl/shoplflow/pull/174) [`d44c864`](https://github.com/shopl/shoplflow/commit/d44c864604b165ca9715902d2e98078838ae8f94) Thanks [@velo-kim](https://github.com/velo-kim)! - update: InputButton 삭제 버튼 컬러 변경, ModalProvider 바디 스크롤 방지 로직 추가

## 0.22.2

### Patch Changes

- [#172](https://github.com/shopl/shoplflow/pull/172) [`1856d30`](https://github.com/shopl/shoplflow/commit/1856d30849d0b02b5a4f9e87250ab2b043e7ae79) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - InputButton onClear 동작 이후에도 X 버튼 노출 문제 수정

## 0.22.1

### Patch Changes

- [#170](https://github.com/shopl/shoplflow/pull/170) [`5baf528`](https://github.com/shopl/shoplflow/commit/5baf528315a0d14e9d9fb786da275dd767e61450) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ChipToggle `Received 'true' for a non-boolean attribute.` 경고 해결

- [#170](https://github.com/shopl/shoplflow/pull/170) [`5baf528`](https://github.com/shopl/shoplflow/commit/5baf528315a0d14e9d9fb786da275dd767e61450) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Avatar 문서 수정

## 0.22.0

### Minor Changes

- [#168](https://github.com/shopl/shoplflow/pull/168) [`ed4f99a`](https://github.com/shopl/shoplflow/commit/ed4f99a18063e21e51b334dd9d4b3e08666cac49) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Avatar 추가

### Patch Changes

- [#168](https://github.com/shopl/shoplflow/pull/168) [`ed4f99a`](https://github.com/shopl/shoplflow/commit/ed4f99a18063e21e51b334dd9d4b3e08666cac49) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - variant 변수 네이밍 통일

## 0.21.0

### Minor Changes

- [#166](https://github.com/shopl/shoplflow/pull/166) [`1829836`](https://github.com/shopl/shoplflow/commit/182983678891c66028fd7c4fd31aeae99695e1ae) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Menu sizeVar 추가

## 0.20.1

### Patch Changes

- [#164](https://github.com/shopl/shoplflow/pull/164) [`0eec1f6`](https://github.com/shopl/shoplflow/commit/0eec1f6c6d64bd9ebbcbe892ee049e223ea0ad0d) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - useOnToggle select 조건 수정

## 0.20.0

### Minor Changes

- [#162](https://github.com/shopl/shoplflow/pull/162) [`39be0d5`](https://github.com/shopl/shoplflow/commit/39be0d53f3e8d1b498d5cddc3e7f9e778c5ab96b) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Tag 컴포넌트 추가

## 0.19.0

### Minor Changes

- [#159](https://github.com/shopl/shoplflow/pull/159) [`1c0b537`](https://github.com/shopl/shoplflow/commit/1c0b537162a923cc2e1637a8872f3aa4d7abd061) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input number 타입 추가

## 0.18.0

### Minor Changes

- [#157](https://github.com/shopl/shoplflow/pull/157) [`c524b74`](https://github.com/shopl/shoplflow/commit/c524b7490cb02d684078cea5be9f2a8ec31a6276) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Radio 추가

- [#157](https://github.com/shopl/shoplflow/pull/157) [`c524b74`](https://github.com/shopl/shoplflow/commit/c524b7490cb02d684078cea5be9f2a8ec31a6276) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Checkbox 컴포넌트 추가

## 0.17.0

### Minor Changes

- [#155](https://github.com/shopl/shoplflow/pull/155) [`fcf41a1`](https://github.com/shopl/shoplflow/commit/fcf41a115413940ddc28eabde8c50b0c6c384b5d) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Menu 컴포넌트 추가

### Patch Changes

- Updated dependencies [[`fcf41a1`](https://github.com/shopl/shoplflow/commit/fcf41a115413940ddc28eabde8c50b0c6c384b5d)]:
  - @shoplflow/utils@0.5.3

## 0.16.0

### Minor Changes

- [#153](https://github.com/shopl/shoplflow/pull/153) [`cbb79bf`](https://github.com/shopl/shoplflow/commit/cbb79bfd487e66c2b3b80352e26167666207354c) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - List 컴포넌트 추가

### Patch Changes

- [#153](https://github.com/shopl/shoplflow/pull/153) [`cbb79bf`](https://github.com/shopl/shoplflow/commit/cbb79bfd487e66c2b3b80352e26167666207354c) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - inputButton 이벤트 버블링 방지

- Updated dependencies [[`cbb79bf`](https://github.com/shopl/shoplflow/commit/cbb79bfd487e66c2b3b80352e26167666207354c)]:
  - @shoplflow/utils@0.5.2

## 0.15.3

### Patch Changes

- Updated dependencies [[`e438e97`](https://github.com/shopl/shoplflow/commit/e438e9728ba6916a31233f2250d5f6f1384a73cc)]:
  - @shoplflow/utils@0.5.1

## 0.15.2

### Patch Changes

- Updated dependencies [[`4832c98`](https://github.com/shopl/shoplflow/commit/4832c985b740b19ec055db67aa3e27414bdf6887)]:
  - @shoplflow/shopl-assets@0.3.3

## 0.15.1

### Patch Changes

- [#147](https://github.com/shopl/shoplflow/pull/147) [`3920767`](https://github.com/shopl/shoplflow/commit/392076796e422f689c10aff67d80ac6d2ca599d4) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input Button 태그 input으로 변경

- [#147](https://github.com/shopl/shoplflow/pull/147) [`3920767`](https://github.com/shopl/shoplflow/commit/392076796e422f689c10aff67d80ac6d2ca599d4) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - inputButton disable background 컬러 변경

## 0.15.0

### Minor Changes

- [#145](https://github.com/shopl/shoplflow/pull/145) [`a243dd5`](https://github.com/shopl/shoplflow/commit/a243dd5bb2c0fe8997022131c25bbaac59e9b761) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - floating UI middleware function 추가

- [#145](https://github.com/shopl/shoplflow/pull/145) [`a243dd5`](https://github.com/shopl/shoplflow/commit/a243dd5bb2c0fe8997022131c25bbaac59e9b761) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Dropdown 구조 변경

### Patch Changes

- Updated dependencies [[`a243dd5`](https://github.com/shopl/shoplflow/commit/a243dd5bb2c0fe8997022131c25bbaac59e9b761)]:
  - @shoplflow/utils@0.5.0

## 0.14.0

### Minor Changes

- [#143](https://github.com/shopl/shoplflow/pull/143) [`765399e`](https://github.com/shopl/shoplflow/commit/765399e007f3938511e07c2b497355560b30b426) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - scrollArea 추가

### Patch Changes

- [#143](https://github.com/shopl/shoplflow/pull/143) [`765399e`](https://github.com/shopl/shoplflow/commit/765399e007f3938511e07c2b497355560b30b426) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - modal body align 미적용 이슈 수정

## 0.13.9

### Patch Changes

- [#141](https://github.com/shopl/shoplflow/pull/141) [`ff15740`](https://github.com/shopl/shoplflow/commit/ff15740029d00a21391ecf16058876d3fcae92af) Thanks [@velo-kim](https://github.com/velo-kim)! - fix: ChipButton > background 속성 최하단으로 이동

- [#141](https://github.com/shopl/shoplflow/pull/141) [`ff15740`](https://github.com/shopl/shoplflow/commit/ff15740029d00a21391ecf16058876d3fcae92af) Thanks [@velo-kim](https://github.com/velo-kim)! - update assets, fix ChipButton style

- Updated dependencies [[`ff15740`](https://github.com/shopl/shoplflow/commit/ff15740029d00a21391ecf16058876d3fcae92af)]:
  - @shoplflow/shopl-assets@0.3.2
  - @shoplflow/hada-assets@0.0.4

## 0.13.8

### Patch Changes

- [#138](https://github.com/shopl/shoplflow/pull/138) [`19ce15f`](https://github.com/shopl/shoplflow/commit/19ce15f4567da4ce091e1a87ed3ce589deab06d3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Button Solid type color 커스텀 추가

- [#138](https://github.com/shopl/shoplflow/pull/138) [`19ce15f`](https://github.com/shopl/shoplflow/commit/19ce15f4567da4ce091e1a87ed3ce589deab06d3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - InputButton Primary, Secondary styleVar 추가

- [#138](https://github.com/shopl/shoplflow/pull/138) [`19ce15f`](https://github.com/shopl/shoplflow/commit/19ce15f4567da4ce091e1a87ed3ce589deab06d3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - InputButton Background 컬러 지정

## 0.13.7

### Patch Changes

- [#136](https://github.com/shopl/shoplflow/pull/136) [`2841b1c`](https://github.com/shopl/shoplflow/commit/2841b1c4a334c1e12509325c4afc5f87d7a73340) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - export path 수정

## 0.13.6

### Patch Changes

- [#132](https://github.com/shopl/shoplflow/pull/132) [`b5ca933`](https://github.com/shopl/shoplflow/commit/b5ca933f4f93fedf5c72a5ee690c7c1439f3d453) Thanks [@velo-kim](https://github.com/velo-kim)! - update global css

## 0.13.5

### Patch Changes

- [#130](https://github.com/shopl/shoplflow/pull/130) [`2d4368b`](https://github.com/shopl/shoplflow/commit/2d4368b73673cc335f0a03181338369695713197) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 모달 내부에 popper 위치시 modal 뒤에 content가 나타나는 문제 수정

## 0.13.4

### Patch Changes

- [#128](https://github.com/shopl/shoplflow/pull/128) [`627001a`](https://github.com/shopl/shoplflow/commit/627001a83e31747317c683e4c9eb76f33e8d017b) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input 컴포넌트 export 경로 수정

## 0.13.3

### Patch Changes

- [#126](https://github.com/shopl/shoplflow/pull/126) [`2eba1d6`](https://github.com/shopl/shoplflow/commit/2eba1d69585a1be04bf89ad3d75d53ee3a3e7131) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - tsconfig, package.json 수정

## 0.13.2

### Patch Changes

- [#124](https://github.com/shopl/shoplflow/pull/124) [`01811f7`](https://github.com/shopl/shoplflow/commit/01811f77d00d152429db198d1d8673023d486938) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - update base package.json type

## 0.13.1

### Patch Changes

- [#122](https://github.com/shopl/shoplflow/pull/122) [`ff4a114`](https://github.com/shopl/shoplflow/commit/ff4a11445a4d3a9d929f1e2ef317ec98ab8f0365) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - popper option 수정

- [#122](https://github.com/shopl/shoplflow/pull/122) [`ff4a114`](https://github.com/shopl/shoplflow/commit/ff4a11445a4d3a9d929f1e2ef317ec98ab8f0365) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - package.json module 추가

- Updated dependencies [[`ff4a114`](https://github.com/shopl/shoplflow/commit/ff4a11445a4d3a9d929f1e2ef317ec98ab8f0365), [`ff4a114`](https://github.com/shopl/shoplflow/commit/ff4a11445a4d3a9d929f1e2ef317ec98ab8f0365)]:
  - @shoplflow/utils@0.4.0

## 0.13.0

### Minor Changes

- [#120](https://github.com/shopl/shoplflow/pull/120) [`758d5a5`](https://github.com/shopl/shoplflow/commit/758d5a5709488bfdaf1130e7be8c5aeabffaf7bc) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - popper 컴포넌트 추가

## 0.12.6

### Patch Changes

- [#118](https://github.com/shopl/shoplflow/pull/118) [`ef1972a`](https://github.com/shopl/shoplflow/commit/ef1972adab13c6e88c662c91a48349b6a32675a0) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - token update

## 0.12.5

### Patch Changes

- [#115](https://github.com/shopl/shoplflow/pull/115) [`74715d9`](https://github.com/shopl/shoplflow/commit/74715d964e6b34f900deecb827a3ec25b118b0b1) Thanks [@bong9boy](https://github.com/bong9boy)! - font-weight regular 400->500, medium 500->600으로 변경

## 0.12.4

### Patch Changes

- [#113](https://github.com/shopl/shoplflow/pull/113) [`8ed72c2`](https://github.com/shopl/shoplflow/commit/8ed72c245fabc1ad4ad9cfe0872e67943c692d68) Thanks [@bong9boy](https://github.com/bong9boy)! - 400->font weight medium으로 일괄 변경

## 0.12.3

### Patch Changes

- Updated dependencies [[`668681a`](https://github.com/shopl/shoplflow/commit/668681afdc78faf45e9654df9f382b779726c964)]:
  - @shoplflow/hada-assets@0.0.3
  - @shoplflow/shopl-assets@0.3.1

## 0.12.2

### Patch Changes

- [#109](https://github.com/shopl/shoplflow/pull/109) [`ee6ea4b`](https://github.com/shopl/shoplflow/commit/ee6ea4b7dc1870fd88e764ca9e6cfe298cb76f46) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - iconButton sizeVar, styleVar 타입 추론이 안되는 이슈 수정

- [#109](https://github.com/shopl/shoplflow/pull/109) [`ee6ea4b`](https://github.com/shopl/shoplflow/commit/ee6ea4b7dc1870fd88e764ca9e6cfe298cb76f46) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input 좌측 padding이 올바르게 적용되지 않는 문제 수정

## 0.12.1

### Patch Changes

- [#107](https://github.com/shopl/shoplflow/pull/107) [`61228e5`](https://github.com/shopl/shoplflow/commit/61228e53d42a1077b46995edf9bc3f1b6036b518) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - package.json type 변경

- Updated dependencies [[`61228e5`](https://github.com/shopl/shoplflow/commit/61228e53d42a1077b46995edf9bc3f1b6036b518)]:
  - @shoplflow/utils@0.3.1

## 0.12.0

### Minor Changes

- [#103](https://github.com/shopl/shoplflow/pull/103) [`2c8286e`](https://github.com/shopl/shoplflow/commit/2c8286eef69dec291d088c783072cc80d4d9ddee) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - 스토리 북의 페이지를 이동해도 도메인이 유지됩니다.

- [#103](https://github.com/shopl/shoplflow/pull/103) [`2c8286e`](https://github.com/shopl/shoplflow/commit/2c8286eef69dec291d088c783072cc80d4d9ddee) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - input 컴포넌트 추가

- [#103](https://github.com/shopl/shoplflow/pull/103) [`2c8286e`](https://github.com/shopl/shoplflow/commit/2c8286eef69dec291d088c783072cc80d4d9ddee) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - modal 아키텍쳐 변경 zustand -> react context

## 0.11.4

### Patch Changes

- Updated dependencies [[`bf54dae`](https://github.com/shopl/shoplflow/commit/bf54dae166f7cb58f974fe58e3edf4d71eb08f11)]:
  - @shoplflow/shopl-assets@0.3.0

## 0.11.3

### Patch Changes

- [#101](https://github.com/shopl/shoplflow/pull/101) [`6be63d6`](https://github.com/shopl/shoplflow/commit/6be63d6d708e70b11ccd5ac1bca8aa22aba28034) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - package.json의 export 수정
  - base 패키지의 export가 잘못 지정 되어 있는 부분을 수정했습니다.
  - package.json 의 빌드 스크립트를 정리했습니다.
  - 스토리 수정
    - minusButton story가 잘못 설정되어있는 부분을 수정했습니다.
    - iconButton에 radius가 누락된 부분을 수정했습니다.
  - 개발 환경 수정
    - turbo.json의 빌드 순서를 재지정했습니다.
    - 생성된 에셋 파일과 문서 파일을 gitignore로 지정했습니다.
    - turbo.json 의 docs script를 수정했습니다.

## 0.11.2

### Patch Changes

- [#98](https://github.com/shopl/shoplflow/pull/98) [`7d2e1c0`](https://github.com/shopl/shoplflow/commit/7d2e1c0282180a3698660d6c9d56c724aa53269f) Thanks [@bong9boy](https://github.com/bong9boy)! - caption_700 추가

## 0.11.1

### Patch Changes

- [#95](https://github.com/shopl/shoplflow/pull/95) [`610d25c`](https://github.com/shopl/shoplflow/commit/610d25c6dc89de6076f7d4b95b0d4e2c4a648394) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - - modal removeModal 함수의 인자에 id가 들어올 경우 정상적으로 동작하지 않는 버그 수정
  - framer-motion과 emotion 사이의 타입이 맞지 않는 버그 수정
  - 번들러 tsup으로 변경
  - 폴더 정리
- Updated dependencies [[`610d25c`](https://github.com/shopl/shoplflow/commit/610d25c6dc89de6076f7d4b95b0d4e2c4a648394)]:
  - @shoplflow/utils@0.3.0

## 0.11.0

### Minor Changes

- [#82](https://github.com/shopl/shoplflow/pull/82) [`426d2b0`](https://github.com/shopl/shoplflow/commit/426d2b04ee4c7a42c688ac0cd9b04d0a45b2facc) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - Callout 컴포넌트 추가

## 0.10.0

### Minor Changes

- [#81](https://github.com/shopl/shoplflow/pull/81) [`cec25c3`](https://github.com/shopl/shoplflow/commit/cec25c32cacc926415aea7f3bb3adc96afdb01ec) Thanks [@velo-kim](https://github.com/velo-kim)! - button component

### Patch Changes

- Updated dependencies [[`cec25c3`](https://github.com/shopl/shoplflow/commit/cec25c32cacc926415aea7f3bb3adc96afdb01ec)]:
  - @shoplflow/utils@0.2.0

## 0.9.0

### Minor Changes

- [#92](https://github.com/shopl/shoplflow/pull/92) [`4c2d1ce`](https://github.com/shopl/shoplflow/commit/4c2d1ceb90b5cb248a954ef6be4f895cf34e86f8) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Modal,Backdrop,Text 수정 및 Switch 컴포넌트명 변경

## 0.7.0

### Minor Changes

- [#69](https://github.com/shopl/shoplflow/pull/69) [`577adc9`](https://github.com/shopl/shoplflow/commit/577adc98a316bede622cdc6135c81ac0974056d5) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - add Minus button and Toggle

- [#90](https://github.com/shopl/shoplflow/pull/90) [`961952b`](https://github.com/shopl/shoplflow/commit/961952b76f90d9112d246307a7502af92ead53ff) Thanks [@dev-bomdong](https://github.com/dev-bomdong)! - Modal, Backdrop style 수정 및 Switch 컴포넌트명 변경

## 0.6.0

### Minor Changes

- [#79](https://github.com/shopl/shoplflow/pull/79) [`54598a3`](https://github.com/shopl/shoplflow/commit/54598a371a2fe6916dcbfb9841301259cdeaface) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ChipButton 추가&문서화

  disabled 스타일 유틸함수 추가

- [#79](https://github.com/shopl/shoplflow/pull/79) [`54598a3`](https://github.com/shopl/shoplflow/commit/54598a371a2fe6916dcbfb9841301259cdeaface) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ChipToggle 컴포넌트 추가

## 0.5.0

### Minor Changes

- [#71](https://github.com/shopl/shoplflow/pull/71) [`c6dbc67`](https://github.com/shopl/shoplflow/commit/c6dbc67e5699b00ff1f7265083f4b8be710627bb) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - modal compoent 추가

### Patch Changes

- [#71](https://github.com/shopl/shoplflow/pull/71) [`c6dbc67`](https://github.com/shopl/shoplflow/commit/c6dbc67e5699b00ff1f7265083f4b8be710627bb) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - bundler 변경

## 0.4.0

### Minor Changes

- [#67](https://github.com/shopl/shoplflow/pull/67) [`1b71edb`](https://github.com/shopl/shoplflow/commit/1b71edb92de264ae6150fbb189f55787cb44cc84) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - add Text Component

## 0.3.0

### Minor Changes

- [#65](https://github.com/shopl/shoplflow/pull/65) [`4fb80fd`](https://github.com/shopl/shoplflow/commit/4fb80fd8513dcac5db2a2ed66580bd120a3edd3f) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - add box-shadow generate code

## 0.2.1

### Patch Changes

- [#57](https://github.com/shopl/shoplflow/pull/57) [`9250c9d`](https://github.com/shopl/shoplflow/commit/9250c9d897bc113711e7b88b537d53b4c2101b22) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - color palette 추가

## 0.2.0

### Minor Changes

- [#50](https://github.com/shopl/shoplflow/pull/50) [`791da63`](https://github.com/shopl/shoplflow/commit/791da631a19479bfab11bbe716fe429458886c9a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - TypographyToken object 추가

- [#50](https://github.com/shopl/shoplflow/pull/50) [`791da63`](https://github.com/shopl/shoplflow/commit/791da631a19479bfab11bbe716fe429458886c9a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - StackContainer 컴포넌트 추가

- [#50](https://github.com/shopl/shoplflow/pull/50) [`791da63`](https://github.com/shopl/shoplflow/commit/791da631a19479bfab11bbe716fe429458886c9a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ㄴstorybook 세팅

### Patch Changes

- [#50](https://github.com/shopl/shoplflow/pull/50) [`791da63`](https://github.com/shopl/shoplflow/commit/791da631a19479bfab11bbe716fe429458886c9a) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - typescript 버전 4.9로 변경

## 0.1.1

### Patch Changes

- [#46](https://github.com/shopl/shoplflow/pull/46) [`e457800`](https://github.com/shopl/shoplflow/commit/e4578000408a8c5f825d82e3fc4c2b70244f8a08) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - ShoplflowProvider 기본 도메인 변경

## 0.1.0

### Minor Changes

- [#44](https://github.com/shopl/shoplflow/pull/44) [`4bb24cc`](https://github.com/shopl/shoplflow/commit/4bb24cc34266075c5cd4a0fa2b59b886cc864ef6) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - emotion theme 삭제, css 변수 추가

## 0.0.5

### Patch Changes

- [#27](https://github.com/shopl/shoplflow/pull/27) [`a9168eb`](https://github.com/shopl/shoplflow/commit/a9168eb25b1b897e2c258b8e1c5d281c87ab25c3) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - jest 삭제

## 0.0.4

### Patch Changes

- [#23](https://github.com/shopl/shoplflow/pull/23) [`030d733`](https://github.com/shopl/shoplflow/commit/030d7336dcae2b560e08784efcaf665027dd4f2f) Thanks [@velo-kim](https://github.com/velo-kim)! - - base -> tsup.config.js 업데이트
  - eslint -> typescript rule 추가

## 0.0.4

### Patch Changes

- [#18](https://github.com/shopl/shoplflow/pull/18) [`d213f5e`](https://github.com/shopl/shoplflow/commit/d213f5e86e6265e25be9099e58db0f60abaa177a) Thanks [@bong9boy](https://github.com/bong9boy)! - 토큰 업데이트
  borderRadius02 추가됨

- [#18](https://github.com/shopl/shoplflow/pull/18) [`d213f5e`](https://github.com/shopl/shoplflow/commit/d213f5e86e6265e25be9099e58db0f60abaa177a) Thanks [@bong9boy](https://github.com/bong9boy)! - body3-500 추가됨

- [#11](https://github.com/shopl/shoplflow/pull/11) [`28d59bb`](https://github.com/shopl/shoplflow/commit/28d59bb3cce2230d285d0ab1da3e25c24c61d2f2) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - - 토큰 생성 로직 추가
  - jest 환경 세팅
  - CI 환경 세팅

## 0.0.1

### Patch Changes

- [#9](https://github.com/shopl/shoplflow/pull/9) [`92540fd`](https://github.com/shopl/shoplflow/commit/92540fd2141eff181e63ed81d6e13462a7bae0c6) Thanks [@Jason-Jeong-Dev](https://github.com/Jason-Jeong-Dev)! - base publish test
