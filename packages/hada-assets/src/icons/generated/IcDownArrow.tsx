import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDownArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#555'
        fillRule='evenodd'
        d='M3.267 6.27a.906.906 0 0 1 1.19-.089l.102.09L10 11.77l5.441-5.5a.906.906 0 0 1 1.19-.09l.102.09a.93.93 0 0 1 .088 1.201l-.088.104-6.087 6.154a.906.906 0 0 1-1.19.089l-.102-.09-6.087-6.153a.93.93 0 0 1 0-1.306Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcDownArrow);
