import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcIssues(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 28 28" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13.766 7.643a1 1 0 0 0-1.532-1.286l-3.491 4.156-2.029-2.07a1 1 0 1 0-1.428 1.4l2.607 2.66a1.25 1.25 0 0 0 1.85-.07l4.023-4.79ZM16.5 9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-11 6a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcIssues);
