import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGrade4(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
      <path fill="#3299FE" fillRule="evenodd" d="M18 0H7v5l5.5 3L18 5V0Z" clipRule="evenodd" />
      <path fill="#fff" fillRule="evenodd" d="M14 0v6.455L12.5 7 11 6.455V0h3Z" clipRule="evenodd" />
      <path
        fill="#DDD"
        d="m13.75 4.449 1.708 1.408c.302.25.672.402 1.061.44l2.205.212c.936.09 1.677.83 1.767 1.767l.212 2.204c.038.39.19.76.44 1.062l1.408 1.709a1.964 1.964 0 0 1 0 2.498l-1.408 1.71a1.964 1.964 0 0 0-.44 1.06l-.212 2.205a1.964 1.964 0 0 1-1.767 1.767l-2.205.212c-.39.038-.759.19-1.06.44l-1.71 1.409a1.964 1.964 0 0 1-2.498 0l-1.71-1.41a1.967 1.967 0 0 0-1.06-.439l-2.205-.212a1.964 1.964 0 0 1-1.767-1.767l-.212-2.205c-.038-.39-.19-.759-.44-1.06l-1.408-1.71a1.964 1.964 0 0 1 0-2.498l1.408-1.71c.25-.301.402-.67.44-1.06l.212-2.205c.09-.936.83-1.677 1.767-1.767l2.204-.212c.39-.038.76-.19 1.061-.44l1.71-1.408a1.964 1.964 0 0 1 2.498 0Z"
      />
      <circle cx={12.5} cy={14.5} r={8.5} fill="#E5E5E5" />
      <circle cx={12.5} cy={14.5} r={5.5} fill="#F0EFEF" stroke="#C4C4C4" />
      <path
        fill="#C4C4C4"
        d="M13.426 13.472 12.5 11.5l-.927 1.972-2.073.319 1.498 1.536-.353 2.173 1.855-1.025 1.855 1.025-.353-2.173L15.5 13.79l-2.074-.318Z"
      />
      <path
        fill="#fff"
        fillOpacity={0.4}
        fillRule="evenodd"
        d="m9.3 17.664 6.364-6.364A4.5 4.5 0 0 0 9.3 17.664Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcGrade4);
