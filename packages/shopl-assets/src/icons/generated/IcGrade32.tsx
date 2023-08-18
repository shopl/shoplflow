import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGrade32(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
      <path fill="#3299FE" fillRule="evenodd" d="M18 1H7v5l5.5 3L18 6V1Z" clipRule="evenodd" />
      <path fill="#fff" fillRule="evenodd" d="M14 1v6.455L12.5 8 11 7.455V1h3Z" clipRule="evenodd" opacity={0.4} />
      <circle cx={12.5} cy={15.5} r={8.5} fill="#FFD45F" />
      <circle cx={12.5} cy={15.5} r={5.5} fill="#FFE458" stroke="#FFC321" />
      <path
        fill="#fff"
        fillOpacity={0.3}
        fillRule="evenodd"
        d="m9.3 18.664 6.364-6.364A4.5 4.5 0 0 0 9.3 18.664Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcGrade32);
