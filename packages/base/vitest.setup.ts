import '@testing-library/jest-dom/vitest';

/**
 * jsdom에서 getDomain()이 동작하도록 document.documentElement.dataset.shoplflow 설정
 */
if (typeof document !== 'undefined' && document.documentElement) {
  document.documentElement.dataset.shoplflow = 'shopl';
}
