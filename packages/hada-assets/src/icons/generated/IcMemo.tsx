import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcMemo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#C1E7DD"
        fillRule="evenodd"
        d="M7.333.667H16a2 2 0 0 1 2 2v14.666a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6L7.333.667Z"
        clipRule="evenodd"
      />
      <path
        fill="#02B585"
        fillRule="evenodd"
        d="M6 7.833a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.334a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.333ZM6 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.334a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V10.5Zm.5 2.167a.5.5 0 0 0-.5.5v.333a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.333a.5.5 0 0 0-.5-.5h-7ZM2 6h5.333V.667"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMemo);
