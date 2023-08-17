import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m4 8.56 5.802 3.238.1.047a.75.75 0 0 0 .531 0l.1-.047L16 8.747V14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.56ZM15 5a1 1 0 0 1 1 1v1.029l-5.832 3.255L4 6.842V6a1 1 0 0 1 1-1h10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoEmail);
