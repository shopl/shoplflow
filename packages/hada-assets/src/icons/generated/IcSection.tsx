import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSection(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M15.833 1.875H4.167a2.292 2.292 0 0 0-2.292 2.292v2.5a2.292 2.292 0 0 0 2.292 2.291h11.666a2.292 2.292 0 0 0 2.292-2.291v-2.5a2.292 2.292 0 0 0-2.292-2.292ZM4.167 3.125h11.666c.576 0 1.042.466 1.042 1.042v2.5c0 .575-.466 1.041-1.042 1.041H4.167a1.042 1.042 0 0 1-1.042-1.041v-2.5c0-.576.466-1.042 1.042-1.042Zm11.666 7.917H4.167a2.292 2.292 0 0 0-2.292 2.291v2.5a2.292 2.292 0 0 0 2.292 2.292h11.666a2.292 2.292 0 0 0 2.292-2.292v-2.5a2.292 2.292 0 0 0-2.292-2.291Zm-11.666 1.25h11.666c.576 0 1.042.466 1.042 1.041v2.5c0 .576-.466 1.042-1.042 1.042H4.167a1.042 1.042 0 0 1-1.042-1.042v-2.5c0-.575.466-1.041 1.042-1.041Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSection);
