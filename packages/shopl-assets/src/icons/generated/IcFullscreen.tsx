import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcFullscreen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M3.958 3H3v5.194h1.355V5.313L7.47 8.429l.958-.958-3.116-3.116h2.88V3H3.959Zm7.848 1.355h3.84v3.839H17V3h-5.194v1.355Zm-3.612 11.29h-3.84v-3.838H3V17h5.194v-1.355ZM16.042 17h-4.236v-1.355h2.88l-3.115-3.116.958-.958 3.116 3.116v-2.88H17V17h-.958Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcFullscreen);
