import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGraph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5 3.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h1.5A.5.5 0 0 0 7 14V4a.5.5 0 0 0-.5-.5H5Zm4.25 6.2a.5.5 0 0 0-.5.5V14a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.8a.5.5 0 0 0-.5-.5h-1.5ZM13 7.8a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V7.8Zm-9.8 7.7a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h13.6a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcGraph);
