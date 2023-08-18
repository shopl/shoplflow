import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcTutorialCompleted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={10} cy={10} r={9} fill="#02B585" />
      <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 9.5 3.75 3.75L15 7" />
    </svg>
  );
}
export default createIcon(SvgIcTutorialCompleted);
