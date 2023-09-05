import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoProperties(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M12 3a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h4Zm0 1.5H8a2.5 2.5 0 0 0-2.495 2.336L5.5 7v6a2.5 2.5 0 0 0 2.336 2.495L8 15.5h4a2.5 2.5 0 0 0 2.495-2.336L14.5 13V7a2.5 2.5 0 0 0-2.336-2.495L12 4.5ZM11 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.5 6v1h3v-1H11V9.5a.5.5 0 0 0-.5-.5h-2v1H9v3h-.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoProperties);
