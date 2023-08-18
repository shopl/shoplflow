import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 6.2c0-.11.09-.2.2-.2h1.6c.11 0 .2.09.2.2v4.6a.2.2 0 0 1-.2.2H9.2a.2.2 0 0 1-.2-.2V6.2Zm2 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAlert);
