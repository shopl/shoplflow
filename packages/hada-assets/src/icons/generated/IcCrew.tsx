import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCrew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <rect width={18} height={18} x={1} y={1} fill="#F1F4F6" rx={4} />
      <path
        fill="#8092AA"
        fillRule="evenodd"
        d="M10 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-.833 1A3.667 3.667 0 0 0 5.5 13.167C5.5 14.179 6.32 15 7.333 15h5.334c1.012 0 1.833-.82 1.833-1.833A3.667 3.667 0 0 0 10.833 9.5H9.167Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCrew);
