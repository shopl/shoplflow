import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoEmployee(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M11.91 8.313a3 3 0 1 0-3.821 0A6.048 6.048 0 0 0 4 14.05v1.885C4 16.523 4.478 17 5.067 17h9.867c.589 0 1.066-.477 1.066-1.066v-1.885a6.048 6.048 0 0 0-4.09-5.736ZM13 11h-2v1h2v-1Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoEmployee);
