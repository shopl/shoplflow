import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAlbum(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#999'
        fillRule='evenodd'
        d='M2.222 3.222a1 1 0 0 1 1-1h13.556a1 1 0 0 1 1 1v13.556a1 1 0 0 1-1 1H3.222a1 1 0 0 1-1-1V3.222Zm5.185 5.482a1.296 1.296 0 1 0 0-2.593 1.296 1.296 0 0 0 0 2.593Zm7.926 7.13H4.167l3.16-3.689a1 1 0 0 1 1.491-.031L10 13.38l3.092-3.704a1 1 0 0 1 1.57.044l.974 1.31a1 1 0 0 1 .197.596v3.706a.5.5 0 0 1-.5.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcAlbum);
