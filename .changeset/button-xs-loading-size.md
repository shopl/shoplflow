---
'@shoplflow/base': patch
---

Button: XS 사이즈에서 로딩(isLoading) 노출 시 스피너가 텍스트보다 커서 버튼 높이가 늘어나던 문제 수정. 스피너 크기를 사이즈별 텍스트 줄높이에 맞춰(XS는 16px) 로딩 상태에서도 버튼 높이가 유지됩니다. (LoadingSpinner에 size prop 추가)
