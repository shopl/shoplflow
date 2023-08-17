import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcHelp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.913-5.665v-.663c0-.468.026-.494.481-.897.845-.741 1.443-1.287 1.443-2.431 0-1.443-1.209-2.6-2.769-2.6-2.236 0-2.86 2.119-2.86 2.119l1.326.611s.416-1.248 1.534-1.248c.65 0 1.209.507 1.209 1.118 0 .611-.26.858-.741 1.274l-.238.203c-.669.568-.932.792-.932 1.552v.962h1.547Zm-.767 2.821a1.02 1.02 0 0 0 1.027-1.027 1.02 1.02 0 0 0-1.027-1.027 1.02 1.02 0 0 0-1.027 1.027 1.02 1.02 0 0 0 1.027 1.027Z"
        clipRule="evenodd"
        opacity={0.8}
      />
    </svg>
  );
}
export default createIcon(SvgIcHelp);
