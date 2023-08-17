import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDrag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m11.91 4.76-1.613-1.614a.5.5 0 0 0-.707 0L7.977 4.76a.5.5 0 0 0 .353.854h.672v3.381h-3.39V8.33a.5.5 0 0 0-.853-.353L3.146 9.589a.5.5 0 0 0 0 .708l1.613 1.612a.5.5 0 0 0 .854-.353v-.563h3.389v3.394H8.33a.5.5 0 0 0-.353.854l1.613 1.612a.5.5 0 0 0 .707 0l1.613-1.613a.5.5 0 0 0-.354-.853h-.558v-3.394h3.388v.563a.5.5 0 0 0 .854.354l1.613-1.613a.5.5 0 0 0 0-.708L15.24 7.977a.5.5 0 0 0-.854.353v.664h-3.388V5.613h.558a.5.5 0 0 0 .354-.854Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDrag);
