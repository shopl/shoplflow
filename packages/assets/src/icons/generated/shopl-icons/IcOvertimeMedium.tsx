import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcOvertimeMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.416 8.124a.5.5 0 0 0-.832 0l-2.066 3.099a.5.5 0 0 0 .416.777h4.132a.5.5 0 0 0 .416-.777l-2.066-3.099Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.882 3.043A9 9 0 1 0 21 12h-2a7 7 0 1 1-2.05-4.95l1.414-1.414a9 9 0 0 0-5.482-2.593Zm-2.005 8.284a.5.5 0 0 1-.147.354L8.19 14.223a.5.5 0 0 0 0 .707l.881.882a.5.5 0 0 0 .708 0l3.2-3.2a.5.5 0 0 0 .146-.354V8.006a.5.5 0 0 0-.5-.5h-1.247a.5.5 0 0 0-.5.5v3.321Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcOvertimeMedium);
