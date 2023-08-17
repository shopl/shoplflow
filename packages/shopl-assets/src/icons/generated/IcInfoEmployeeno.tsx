import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoEmployeeno(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.154 4c.297 0 .538.244.538.545v.546h3.231c.595 0 1.077.488 1.077 1.09v8.728c0 .603-.482 1.091-1.077 1.091H4.077A1.084 1.084 0 0 1 3 14.91V6.181c0-.603.482-1.091 1.077-1.091h3.23v-.546c0-.3.242-.545.54-.545h4.307ZM7.5 8a1.5 1.5 0 1 0 0 3c-1.38 0-2.5.74-2.5 1.652V13h5v-.348C10 11.74 8.88 11 7.5 11a1.5 1.5 0 0 0 0-3Zm3.5 2h3v1h-3v-1Zm3 2h-3v1h3v-1Zm-3-4h3v1h-3V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoEmployeeno);
