declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
// TypeScript 6 마이그레이션: templates 는 base 의 소스(../base/src)를 함께 타입체크하므로
// base 의 side-effect CSS import(TS2882)를 여기서도 해소해야 한다. base/images.d.ts 와 동일하게 유지.
declare module '*.css';
