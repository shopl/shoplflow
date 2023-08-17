import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoPosition(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7 6a3 3 0 0 1 6 0v3.563a.438.438 0 0 1-.438.437H7.439A.438.438 0 0 1 7 9.562V6Zm-1.874 5.177a.995.995 0 0 0-.126.487v.5a1 1 0 0 0 1 1h3.25v.991H6.5l-.128.007a1.251 1.251 0 0 0-1.072.893.734.734 0 0 0-.3.592v.53c0 .406.33.735.735.735h.53c.406 0 .735-.33.735-.736v-.521h6v.521c0 .407.33.736.735.736h.53c.406 0 .735-.33.735-.736v-.529a.734.734 0 0 0-.3-.592 1.25 1.25 0 0 0-1.2-.9h-2.75v-.991H14a1 1 0 0 0 1-1v-.5a.998.998 0 0 0-.071-.37V9.401h.642v-.018a.737.737 0 0 0 .164.019h.53c.406 0 .735-.33.735-.735V8.64a.735.735 0 0 0-.735-.736h-.53a.738.738 0 0 0-.164.019v-.021h-.892a1.25 1.25 0 0 0-1.244 1.122l-.006.128v1.511H6.627V9.153l-.007-.128a1.25 1.25 0 0 0-1.243-1.122H4.373v.01a.741.741 0 0 0-.108-.008h-.53A.735.735 0 0 0 3 8.641v.027c0 .406.33.735.735.735h.53a.741.741 0 0 0 .108-.008v.008l.753-.001v1.775Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoPosition);
