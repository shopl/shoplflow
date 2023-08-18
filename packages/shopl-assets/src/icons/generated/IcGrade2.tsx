import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGrade2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
      <path
        fill="#FC0"
        fillRule="evenodd"
        d="m3.6 6.001 5.218 4.667 3.837-6.222 3.815 6.222L21.6 6l-2 12.445h-14L3.6 6Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFD933"
        fillRule="evenodd"
        d="m12.6 4.536-3.782 6.132L3.6 6.001l2 12.445h7V4.536Z"
        clipRule="evenodd"
      />
      <path fill="#FC0" d="M5.6 18.446h14v3h-14z" />
      <path fill="#FF5757" d="M5.6 21.446h14v1h-14z" />
      <circle cx={3.6} cy={5.446} r={1} fill="#FC0" />
      <circle cx={12.6} cy={3.6} r={1} fill="#FC0" />
      <circle cx={21.399} cy={5.446} r={1} fill="#FC0" />
      <path
        fill="#F64C4C"
        stroke="#FFBA00"
        d="m9.242 14.64 1.322 1.356-.313 1.924-.165 1.015.9-.497 1.614-.891 1.613.89.9.498-.165-1.015-.313-1.924 1.323-1.357.678-.695-.96-.148-1.811-.278-.813-1.73-.452-.964-.453.963-.814 1.731-1.81.278-.96.148.679.695Z"
      />
      <path
        fill="#fff"
        fillOpacity={0.3}
        fillRule="evenodd"
        d="M11.672 13.972 12.6 12v3l-1.508.861.006-.034L9.6 14.29l2.072-.318Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcGrade2);
