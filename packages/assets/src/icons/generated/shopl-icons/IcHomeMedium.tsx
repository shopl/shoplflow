import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcHomeMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <mask id="ic-home-medium_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          d="m4.616 8.234 6.378-4.891a1.685 1.685 0 0 1 2.04.002l6.352 4.89c.388.298.614.75.614 1.228v9.964c0 .869-.732 1.573-1.635 1.573H5.635C4.732 21 4 20.296 4 19.427V9.465c0-.48.227-.932.616-1.23Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#333"
        d="M4.616 8.234 3.4 6.647l1.217 1.587Zm6.378-4.891 1.217 1.587-1.217-1.587Zm2.04.002-1.22 1.585 1.22-1.585Zm6.352 4.89-1.22 1.584 1.22-1.585ZM4 19.426H2h2ZM5.833 9.82l6.378-4.891-2.434-3.174-6.378 4.891 2.434 3.174Zm6.378-4.891a.327.327 0 0 1-.198.07.328.328 0 0 1-.199-.07l2.44-3.17a3.685 3.685 0 0 0-4.477-.004l2.434 3.174Zm-.397 0 6.352 4.89 2.44-3.17-6.352-4.89-2.44 3.17Zm6.352 4.89A.449.449 0 0 1 18 9.462h4a3.552 3.552 0 0 0-1.394-2.814l-2.44 3.17ZM18 9.462v9.964h4V9.463h-4Zm0 9.964c0-.308.236-.427.365-.427v4C20.3 23 22 21.472 22 19.427h-4Zm.365-.427H5.635v4h12.73v-4Zm-12.73 0c.129 0 .365.12.365.427H2C2 21.471 3.7 23 5.635 23v-4Zm.365.427V9.465H2v9.962h4Zm0-9.962c0 .16-.077.287-.167.356L3.4 6.647A3.552 3.552 0 0 0 2 9.465h4Z"
        mask="url(#ic-home-medium_svg__a)"
      />
    </svg>
  );
}
export default createIcon(SvgIcHomeMedium);
