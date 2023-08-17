import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 28 28" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m14.555 4.189 7.554 5.66c.557.416.891 1.118.891 1.87v10.034c0 1.24-.895 2.247-2 2.247h-4a1 1 0 0 1-1-1v-4.619c0-1.24-.895-2.247-2-2.247-1.054 0-1.918.917-1.995 2.08L12 18.38V23a1 1 0 0 1-1 1H7c-1.105 0-2-1.006-2-2.247V11.718c0-.751.334-1.453.89-1.87l7.555-5.66a.91.91 0 0 1 1.11 0ZM14 6.272l-6.91 5.177c-.033.024-.07.095-.085.192L7 11.718v10.035c0 .052.005.095.01.13l.013.078c.003.018.002.03-.006.035L7 22h3l.001-3.684.009-.233c.143-2.175 1.835-3.949 3.99-3.949 2.196 0 3.894 1.834 3.995 4.04l.005.207V22h3c-.019 0-.025-.007-.025-.024l.022-.151.003-.072V11.718a.436.436 0 0 0-.065-.242l-.025-.027L14 6.272Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcHome);
