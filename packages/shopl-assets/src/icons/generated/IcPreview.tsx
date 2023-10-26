import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPreview(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M7.5 2.5h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9l4-4Zm2.5 5c-2.045 0-3.792 1.244-4.5 3 .708 1.756 2.455 3 4.5 3 2.046 0 3.792-1.244 4.5-3-.708-1.756-2.454-3-4.5-3Zm0 5c-1.13 0-2.045-.896-2.045-2s.916-2 2.045-2c1.13 0 2.046.896 2.046 2s-.917 2-2.046 2Zm-1.227-2c0-.664.548-1.2 1.227-1.2.68 0 1.227.536 1.227 1.2 0 .664-.548 1.2-1.227 1.2-.68 0-1.227-.536-1.227-1.2Z'
        clipRule='evenodd'
      />
      <path fill='#fff' fillRule='evenodd' d='M3.5 6.5h4v-4' clipRule='evenodd' opacity={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcPreview);
