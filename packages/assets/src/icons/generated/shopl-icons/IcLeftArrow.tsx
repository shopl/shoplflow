import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcLeftArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13.73 3.267a.906.906 0 0 1 .089 1.19l-.09.102L8.23 10l5.5 5.441a.906.906 0 0 1 .09 1.19l-.09.102a.93.93 0 0 1-1.201.088l-.104-.088-6.154-6.087a.906.906 0 0 1-.089-1.19l.09-.102 6.153-6.087a.93.93 0 0 1 1.306 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcLeftArrow);