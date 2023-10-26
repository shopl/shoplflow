import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcChecklist(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <rect width={11.667} height={11.667} x={3.75} y={4.167} fill='#555' opacity={0.2} rx={5.833} />
      <path
        fill='#555'
        fillRule='evenodd'
        d='M9.583 1.125a8.875 8.875 0 1 0 7.35 3.899l2.905-2.905a.542.542 0 0 0-.766-.766l-2.807 2.806a8.854 8.854 0 0 0-6.682-3.034Zm5.914 3.802a7.792 7.792 0 1 0 .653.879l-6.312 6.313a.542.542 0 0 1-.777-.012L5.855 8.705a.542.542 0 0 1 .789-.743l2.823 2.996 6.03-6.03Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcChecklist);
