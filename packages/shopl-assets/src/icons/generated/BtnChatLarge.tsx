import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgBtnChatLarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
      <circle cx={15} cy={15} r={15} fill="#3299FE" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16 8a6 6 0 0 1 6 6v1a6 6 0 0 1-6 6h-2c-.499 0-.984-.06-1.447-.176-.664.636-1.55 1.176-2.644 1.176-1.17 0-1.022-.154-.596-.597.336-.35.846-.88 1.017-1.656A5.99 5.99 0 0 1 8 15v-1a6 6 0 0 1 6-6h2Z"
        clipRule="evenodd"
      />
      <path fill="#3299FE" d="M18 12.5h-7V14h7zM16 15h-5v1.5h5z" />
    </svg>
  );
}
export default createIcon(SvgBtnChatLarge);
