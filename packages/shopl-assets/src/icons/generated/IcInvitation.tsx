import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInvitation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M3.5 4A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 4h-13Zm-.507 2.73 6.373 4.249c.384.256.884.256 1.268 0l6.374-4.25a.2.2 0 0 0 .056-.277l-.413-.618a.2.2 0 0 0-.277-.055l-6.263 4.175a.2.2 0 0 1-.222 0L3.627 5.78a.2.2 0 0 0-.278.055l-.412.618a.2.2 0 0 0 .056.278Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInvitation);
