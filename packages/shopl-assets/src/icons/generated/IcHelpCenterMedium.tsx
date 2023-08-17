import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcHelpCenterMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#3299FE"
        fillRule="evenodd"
        d="M11.973 4c3.517 0 6.416 2.72 6.958 6.265h.584a3.133 3.133 0 0 1 0 6.265h-.819c-.601 1.152-1.983 2.02-3.702 2.4a1.5 1.5 0 0 1-1.388.93h-2.22a1.5 1.5 0 0 1-1.5-1.5v-.132a1.5 1.5 0 0 1 1.5-1.5h2.22c.505 0 .952.25 1.223.632 1.417-.352 2.418-1.091 2.597-1.881v-4.624c-.284-2.98-2.627-5.289-5.452-5.289-2.826 0-5.169 2.309-5.453 5.289v5.623a.052.052 0 0 1-.052.052H4.432a3.133 3.133 0 0 1 0-6.265h.584C5.558 6.72 8.457 4 11.973 4Z"
        clipRule="evenodd"
      />
      <circle cx={14} cy={11.875} r={1} fill="#3299FE" />
      <circle cx={10} cy={11.875} r={1} fill="#3299FE" />
    </svg>
  );
}
export default createIcon(SvgIcHelpCenterMedium);
