import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgKorean(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 32 32' {...props}>
      <path
        fill='#02B585'
        d='M27.613 25.51h-2.151V7.395h2.15v8.194h1.721v2.157h-1.72v7.763ZM6.537 12.14h-.43a.861.861 0 0 0-.858.798l-.002.064v9.273c0 .455.351.827.796.86l.064.002h.43a.861.861 0 0 0 .858-.798l.003-.064v-9.273a.862.862 0 0 0-.796-.86l-.065-.002Zm17.205-4.097v2.156H20.3a.646.646 0 0 0-.642.585l-.003.062v11.213c0 .336.256.613.583.644l.062.003h3.44v2.157h-3.44a2.8 2.8 0 0 1-2.794-2.703l-.002-.1V10.845a2.8 2.8 0 0 1 2.696-2.802l.1-.001h3.44ZM7.398 6.533v1.725h2.58v2.157H8.09a3.02 3.02 0 0 1 1.46 2.587v9.273a3.015 3.015 0 0 1-3.011 3.019h-.43a3.015 3.015 0 0 1-3.011-3.02v-9.272c0-1.098.585-2.059 1.459-2.587h-1.89V8.258h2.581V6.533h2.151Zm6.451.863v8.194h1.72v2.157h-1.72v7.763H11.7V7.396h2.15Z'
      />
    </svg>
  );
}
export default createIcon(SvgKorean);
