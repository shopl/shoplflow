import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcText(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M1.125 5A3.875 3.875 0 0 1 5 1.125h10A3.875 3.875 0 0 1 18.875 5v10a3.875 3.875 0 0 1-3.876 3.875H5A3.875 3.875 0 0 1 1.126 15V5ZM5 2.208A2.792 2.792 0 0 0 2.208 5v10A2.792 2.792 0 0 0 5 17.792h10A2.792 2.792 0 0 0 17.79 15V5A2.792 2.792 0 0 0 15 2.208H5Z"
        clipRule="evenodd"
      />
      <path fill="#555" d="M11.666 5h.833v10h-.833V5ZM4.166 5.833V7.5h2.5v6.667h1.667V7.5h2.5V5.833H4.166Z" />
    </svg>
  );
}
export default createIcon(SvgIcText);
