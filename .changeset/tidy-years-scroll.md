---
"@shoplflow/base": patch
---

fix: Datepickers/stepper/YearSelect 선택 년도 자동 스크롤(focus) 미동작 수정

연도 목록의 노출 높이를 내부 `ul` 대신 실제 스크롤 컨테이너(SimpleBar viewport) 기준으로 측정하도록 변경했습니다. 이전에는 `closest('ul')`이 스크롤 영역이 아닌 전체 콘텐츠 높이를 가진 내부 `ul`을 참조해, 마지막 항목을 제외하면 스크롤 조건이 성립하지 않았습니다.
