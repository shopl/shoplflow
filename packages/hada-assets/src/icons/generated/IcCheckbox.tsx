import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCheckbox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M5 2h9.75a3 3 0 0 1 3 3v9.75a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3ZM1 5a4 4 0 0 1 4-4h9.75a4 4 0 0 1 4 4v9.75a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5Zm13.653 2.104a.5.5 0 0 0-.707-.708L8.3 12.043 5.653 9.396a.5.5 0 1 0-.707.708l3 3a.5.5 0 0 0 .707 0l6-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCheckbox);
