import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoRegion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M12.27 13.71a.482.482 0 0 1 .48-.136c1.356.382 2.25 1.04 2.25 1.787 0 1.181-2.239 2.139-5 2.139s-5-.958-5-2.14c0-.745.893-1.402 2.246-1.785a.49.49 0 0 1 .485.139c.643.67 1.4 1.362 2.269 2.075.816-.67 1.533-1.32 2.15-1.951l.12-.128ZM10.002 2.5C12.84 2.5 15 4.95 15 7.651c0 1.801-1.666 4.084-4.998 6.849C6.667 11.735 5 9.452 5 7.651 5 4.95 7.163 2.5 10.002 2.5Zm.003 2.553c-1.262 0-2.285 1-2.285 2.236 0 1.235 1.023 2.236 2.285 2.236 1.262 0 2.284-1 2.284-2.236 0-1.235-1.022-2.236-2.284-2.236Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoRegion);
