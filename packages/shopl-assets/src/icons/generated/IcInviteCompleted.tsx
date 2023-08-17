import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInviteCompleted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.766-9.634a.8.8 0 0 0-1.132-1.132L9.2 10.67 7.366 8.834a.8.8 0 0 0-1.132 1.132l2.4 2.4a.8.8 0 0 0 1.132 0l4-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInviteCompleted);
