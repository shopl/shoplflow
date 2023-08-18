import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSlider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <rect width={15.556} height={1.667} x={2.222} y={3.611} fill="#555" rx={0.5} />
      <rect width={15.556} height={1.667} x={2.222} y={9.166} fill="#555" rx={0.5} />
      <rect width={15.556} height={1.667} x={2.222} y={14.722} fill="#555" rx={0.5} />
      <path fill="#fff" d="M8.333 4.444a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Z" />
      <path
        fill="#555"
        fillRule="evenodd"
        d="M6.667 3.611a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Zm-2.5.833a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M15 10a1.667 1.667 0 1 1-3.333 0A1.667 1.667 0 0 1 15 10Z" />
      <path
        fill="#555"
        fillRule="evenodd"
        d="M13.333 9.167a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666Zm-2.5.833a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M9.444 15.555a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Z" />
      <path
        fill="#555"
        fillRule="evenodd"
        d="M7.778 14.722a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Zm-2.5.834a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSlider);
