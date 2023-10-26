import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSortingLate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M9.65 2.735a.476.476 0 0 0-.5-.484 7.75 7.75 0 1 0 7.576 4.572l1.084-.577a.487.487 0 0 0 .003-.858l-3.194-1.72a.487.487 0 0 0-.716.38l-.36 3.61c-.038.386.37.66.714.478l1.096-.583A6.2 6.2 0 1 1 9.15 3.805a.533.533 0 0 0 .5-.52v-.55Zm-.085 6.982a.5.5 0 0 1-.147.354l-2.28 2.28a.5.5 0 0 0 0 .707l.353.354a.5.5 0 0 0 .708 0l2.72-2.72a.5.5 0 0 0 .146-.354V6.735a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v2.982Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcSortingLate);
