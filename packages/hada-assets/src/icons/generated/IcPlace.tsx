import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPlace(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 28 28" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14 2c5.524 0 10 4.507 10 10.063 0 5.08-3 9.617-8.877 13.586-.554.374-1.253.444-1.91.174l-.164-.075-.179-.108-.38-.263C6.931 21.474 4.064 17.032 4 12.063 4 6.108 8.273 2 14 2Zm0 2c-4.64 0-8 3.23-8 8.05.054 4.135 2.444 7.937 7.267 11.425l.366.261.313.22.056.036.371-.254c4.876-3.388 7.38-7.07 7.61-11.066l.013-.308.004-.301C22 7.608 18.417 4 14 4Zm0 4.286c2.22 0 4 1.865 4 4.143 0 2.278-1.78 4.143-4 4.143-2.22 0-4-1.865-4-4.143 0-2.278 1.78-4.143 4-4.143Zm0 2c-1.094 0-2 .95-2 2.143 0 1.194.906 2.143 2 2.143 1.094 0 2-.95 2-2.143 0-1.194-.906-2.143-2-2.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcPlace);
