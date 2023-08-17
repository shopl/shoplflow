import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoVisit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.736 6.353 9.333 3l-3.59 3.539-.797.785L3.5 8.748l1.446 1.425 3.658 3.605.226.222H3.5v1h6.345l1.014 1H5.5v1h11v-1.646a2.01 2.01 0 0 0 0-.278V15h-.007a1.992 1.992 0 0 0-.584-1.21l-4.722-4.653 1.55-2.784ZM4.5 12h-1v1h1v-1Zm-1 4h1v1h-1v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoVisit);
