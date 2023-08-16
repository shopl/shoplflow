import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcHelpMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm.54 12.225a.5.5 0 0 0 .5-.5v-.282c0-.553.031-.584.568-1.06.998-.874 1.704-1.519 1.704-2.87 0-1.703-1.427-3.069-3.269-3.069-1.971 0-2.881 1.395-3.216 2.102-.106.224.007.477.232.58l.666.308c.27.124.595-.014.753-.267.265-.427.761-.973 1.565-.973.767 0 1.427.598 1.427 1.32 0 .721-.307 1.013-.875 1.504l-.28.24c-.79.67-1.1.934-1.1 1.832v.635a.5.5 0 0 0 .5.5h.825Zm-.405 3.33c.675 0 1.213-.536 1.213-1.212 0-.675-.538-1.212-1.213-1.212s-1.212.537-1.212 1.212c0 .676.537 1.213 1.212 1.213Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcHelpMedium);
