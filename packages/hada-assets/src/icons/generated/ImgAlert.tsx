import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgImgAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 60 60" {...props}>
      <path
        fill="#FEF4C2"
        d="M23.11 7.96c3.078-5.28 10.702-5.28 13.78 0l21.011 36.037C61.003 49.318 57.168 56 51.011 56H8.989c-6.157 0-9.992-6.682-6.89-12.003L23.109 7.96Z"
      />
      <path
        fill="#FB0"
        fillRule="evenodd"
        d="M29 26a1 1 0 0 0-1 1v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2Zm1 18.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgImgAlert);
