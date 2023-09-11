import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcStatistics(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#333'
        d='M17 12a1 1 0 1 1 2 0v7.8a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V12ZM9 15a1 1 0 1 1 2 0v4.8a.2.2 0 0 1-.2.2H9.2a.2.2 0 0 1-.2-.2V15ZM5 17a1 1 0 1 1 2 0v2.8a.2.2 0 0 1-.2.2H5.2a.2.2 0 0 1-.2-.2V17ZM13 16a1 1 0 1 1 2 0v3.8a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V16Z'
      />
      <path
        fill='#333'
        fillRule='evenodd'
        d='M20.493 4.154a1 1 0 0 0-.992-1.14l-2.96.005a1 1 0 0 0-.752 1.656l.507.583-4.063 3.531-1.98-2.277a1.089 1.089 0 0 0-1.535-.107l-4.67 4.058a1 1 0 0 0-.098 1.411l.117.134a1 1 0 0 0 1.41.099l3.848-3.344 1.98 2.277a1.089 1.089 0 0 0 1.536.108l4.883-4.246.607.698a1 1 0 0 0 1.745-.515l.417-2.93Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcStatistics);
