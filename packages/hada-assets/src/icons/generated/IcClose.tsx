import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M3.264 3.736a.5.5 0 0 0 0 .707l5.551 5.55-5.526 5.528a.5.5 0 0 0 0 .707l.471.471a.5.5 0 0 0 .707 0l5.527-5.527L15.52 16.7a.5.5 0 0 0 .707 0l.471-.471a.5.5 0 0 0 0-.707l-5.527-5.527 5.552-5.551a.5.5 0 0 0 0-.707l-.472-.472a.5.5 0 0 0-.707 0L9.994 8.815l-5.551-5.55a.5.5 0 0 0-.707 0l-.472.47Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcClose);
