import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoPhoneCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11.158 11.798 9.204 9.863a.692.692 0 0 1 0-.982.7.7 0 0 1 .988 0l1.5 1.484 4.162-4.168a.67.67 0 1 1 .95.95l-4.65 4.657a.668.668 0 0 1-.436.196h-.107a.697.697 0 0 1-.453-.202Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.5 2.5A1.5 1.5 0 0 0 5 4v12a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 15 16v-4.924l-1.5 1.502V14a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V4.5A.5.5 0 0 1 7 4h6a.5.5 0 0 1 .5.5v1.931l1.293-1.294c.066-.066.135-.127.207-.183V4a1.5 1.5 0 0 0-1.5-1.5h-7Zm2.2 13a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H8.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoPhoneCheck);
