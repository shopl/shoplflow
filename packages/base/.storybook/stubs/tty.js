/**
 * 브라우저/Storybook iframe에서 Node의 tty 모듈을 참조할 때 발생하는
 * "(0, jt.isatty) is not a function" 에러 방지를 위한 스텁.
 * Storybook 10 + Vite 환경에서 일부 의존성이 tty.isatty를 호출할 때 사용됩니다.
 */
function isatty() {
  return false;
}
export { isatty };
export default { isatty };
