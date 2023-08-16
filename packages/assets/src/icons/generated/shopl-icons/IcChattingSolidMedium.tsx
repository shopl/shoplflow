import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcChattingSolidMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#3299FE"
        fillRule="evenodd"
        d="M12.5 7a5.5 5.5 0 1 0 0 11H15s1.106 2 3.175 2c.908 0 .793-.096.463-.373-.38-.318-1.045-.875-.77-1.798A5.5 5.5 0 0 0 16.5 7h-4Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <rect width={16} height={12} x={2} y={4} fill="#3299FE" rx={6} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcChattingSolidMedium);
