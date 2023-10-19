import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcHistory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M5.75 5.765V8.25h1.5V3.5H2.5V5h1.91A7.502 7.502 0 0 0 8.965 17.43a5.997 5.997 0 0 1-1.082-1.813A6.002 6.002 0 0 1 5.75 5.765ZM10 2.5a7.502 7.502 0 0 1 7.43 6.465 5.997 5.997 0 0 0-1.814-1.081A6.002 6.002 0 0 0 9.5 4.02V2.516A7.61 7.61 0 0 1 10 2.5Zm8.5 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-4.5-3v2.793l1.854 1.853-.708.708L13 13.707V10.5h1Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcHistory);
