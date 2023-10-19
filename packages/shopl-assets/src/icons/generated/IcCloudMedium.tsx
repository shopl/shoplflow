import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCloudMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='m6.578 11.122 1.281-.348.177-1.315a4.001 4.001 0 0 1 7.68-.945l.356.89.918.28A4.25 4.25 0 0 1 15.75 18H7.5a3.5 3.5 0 0 1-.922-6.879ZM12 4a6.002 6.002 0 0 1 5.572 3.77A6.25 6.25 0 0 1 15.75 20H7.5A5.5 5.5 0 0 1 6.054 9.192 6.001 6.001 0 0 1 12 4Zm.45 4.5a.3.3 0 0 1 .3.3v4.92l1.366-1.366a.5.5 0 0 1 .707 0l.354.353a.5.5 0 0 1 0 .707l-2.427 2.427v.034h-.034l-.362.362a.5.5 0 0 1-.707 0l-.363-.362h-.034v-.034l-2.427-2.427a.5.5 0 0 1 0-.707l.354-.353a.5.5 0 0 1 .707 0l1.366 1.366V8.8a.3.3 0 0 1 .3-.3h.9Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcCloudMedium);
