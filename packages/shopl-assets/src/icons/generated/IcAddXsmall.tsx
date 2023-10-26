import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAddXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 12 12' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M6.861 1.6c0-.331-.336-.6-.75-.6s-.75.269-.75.6v3.539H1.6c-.331 0-.6.336-.6.75s.269.75.6.75h3.761V10.4c0 .331.336.6.75.6s.75-.269.75-.6V6.639H10.4c.331 0 .6-.336.6-.75s-.269-.75-.6-.75H6.861V1.6Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcAddXsmall);
