import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCheckXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
      <path
        fill="#4DC9AA"
        fillRule="evenodd"
        d="M18 33c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15Zm7.006-18.57a.2.2 0 0 1 0 .283l-8.808 8.808a.2.2 0 0 1-.283 0l-.622-.622a.2.2 0 0 1-.05-.036l-4.92-4.92a.2.2 0 0 1 0-.283l1.535-1.536a.2.2 0 0 1 .283 0l3.909 3.909 7.138-7.139a.2.2 0 0 1 .283 0l1.535 1.536Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCheckXlarge);
