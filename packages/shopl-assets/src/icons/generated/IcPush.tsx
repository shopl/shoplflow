import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPush(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.9 9.662c0 1.286.607 2.5 1.665 3.331.279.222.435.537.435.87C17 14.49 16.45 15 15.775 15H4.225C3.549 15 3 14.49 3 13.862c0-.332.156-.647.428-.863 1.065-.836 1.672-2.05 1.672-3.337V7.85c0-2.287 1.829-4.18 4.2-4.498V2.65c0-.36.314-.65.7-.65.386 0 .7.29.7.65v.702c2.37.317 4.2 2.21 4.2 4.498v1.812ZM13 16c-.284 1.14-1.521 2-3 2s-2.716-.86-3-2h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcPush);
