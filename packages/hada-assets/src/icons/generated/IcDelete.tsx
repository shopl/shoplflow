import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDelete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#555'
        fillRule='evenodd'
        d='M7.6 4a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1h3.19a.91.91 0 0 1 .91.91v.18a.91.91 0 0 1-.91.91H4.41a.91.91 0 0 1-.91-.91v-.18A.91.91 0 0 1 4.41 4H7.6ZM5.082 7a.96.96 0 0 0-.953 1.074l.906 7.552A1.56 1.56 0 0 0 6.584 17h6.832c.79 0 1.455-.59 1.549-1.374l.906-7.552A.96.96 0 0 0 14.918 7H5.082ZM8.1 9a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6h.3a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6h-.3Zm2.9.6a.6.6 0 0 1 .6-.6h.3a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-.3a.6.6 0 0 1-.6-.6V9.6Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcDelete);
