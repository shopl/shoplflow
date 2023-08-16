import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcRatioMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3.291 15.82a.503.503 0 0 0 0 .711l.712.712a.503.503 0 0 0 .712 0l5.338-5.338 2.49 2.491a.503.503 0 0 0 .713 0l1.067-1.067 3.559-3.559 1.481 1.482a.539.539 0 0 0 .919-.343l.325-4.532a.539.539 0 0 0-.576-.575l-4.532.325a.539.539 0 0 0-.342.918l1.301 1.302-3.558 3.558-2.491-2.49a.503.503 0 0 0-.712 0l-1.068 1.067-5.338 5.338Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcRatioMedium);
