import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoDate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7.083 3c.443 0 .81.287.867.66l.008.104v1.018h4.084V3.764c0-.422.392-.764.875-.764.443 0 .809.287.867.66l.008.104v1.018h2.258a.95.95 0 0 1 .95.95v10.301c0 .534-.496.967-1.108.967H4.108C3.496 17 3 16.567 3 16.033V5.732a.95.95 0 0 1 .95-.95h2.258V3.764c0-.422.392-.764.875-.764Zm8.167 5.855H4.75v6.618h10.5V8.855ZM7.867 10.89a.2.2 0 0 0-.2.2v1.636c0 .11.09.2.2.2h4.266a.2.2 0 0 0 .2-.2v-1.636a.2.2 0 0 0-.2-.2H7.867Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoDate);
