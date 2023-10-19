import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M14 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8Zm-2 2.536a1 1 0 0 0-1.302.268l-.064.098-.22.379A2.771 2.771 0 0 0 10 7.25l-.21.008-.205.023-.219-.38a1 1 0 0 0-1.785.897l.053.104.219.38a2.75 2.75 0 0 0-.332.526L7.437 9H7a1 1 0 0 0-.117 1.993L7 11h.438c.076.196.174.38.291.552l.123.166-.218.38-.053.104a1 1 0 0 0 1.72.994l.065-.098.22-.379c.135.02.273.031.414.031l.209-.008.205-.023.22.38a1 1 0 0 0 1.784-.897l-.052-.104-.218-.38c.129-.162.24-.338.33-.525l.084-.192L13 11a1 1 0 0 0 .117-1.993L13 9h-.438a2.74 2.74 0 0 0-.291-.552l-.124-.166.219-.38.053-.104A1 1 0 0 0 12 6.536ZM10 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoApp);
