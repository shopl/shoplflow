import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSortingEarly(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M10.318 2.735c0-.276.224-.502.5-.484a7.75 7.75 0 1 1-7.576 4.572l-1.084-.577a.487.487 0 0 1-.002-.858l3.194-1.72a.487.487 0 0 1 .715.38l.36 3.61a.487.487 0 0 1-.713.478l-1.097-.583a6.2 6.2 0 1 0 6.203-3.748.533.533 0 0 1-.5-.52v-.55Zm-.42 6.982a.5.5 0 0 1-.146.354l-2.28 2.28a.5.5 0 0 0 0 .707l.353.354a.5.5 0 0 0 .707 0l2.72-2.72a.5.5 0 0 0 .147-.354V6.735a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v2.982Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcSortingEarly);
