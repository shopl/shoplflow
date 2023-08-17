import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGps(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        d="M14.47 4.557a.746.746 0 0 1 .973.973l-4.28 10.505c-.272.667-1.236.6-1.414-.097l-1.046-4.102a.746.746 0 0 0-.539-.54l-4.102-1.045c-.697-.178-.764-1.142-.097-1.414l10.505-4.28Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcGps);
