declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
// TypeScript 6 마이그레이션: TS 6부터 side-effect import(`import '...css'`)에 대해
// 모듈 선언을 찾지 못하면 에러(TS2882)가 발생한다. react-datepicker 등의 CSS를
// 부수효과로 import 하므로 아래 선언이 필요하다. (제거 시 DayDatepicker 등에서 타입체크 실패)
declare module '*.css';
