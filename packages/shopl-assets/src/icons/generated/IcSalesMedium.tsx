import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcSalesMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width={2} height={9} x={17} y={11} fill="#333" rx={0.5} />
      <rect width={2} height={6} x={9} y={14} fill="#333" rx={0.5} />
      <rect width={2} height={4} x={5} y={16} fill="#333" rx={0.5} />
      <rect width={2} height={5} x={13} y={15} fill="#333" rx={0.5} />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.57 3.623a.535.535 0 0 0-.532-.61l-4.514.008a.535.535 0 0 0-.403.886l1.175 1.351-4.062 3.531-1.98-2.277a1.089 1.089 0 0 0-1.536-.107L3.67 10.79a.5.5 0 0 0-.049.706l.773.889a.5.5 0 0 0 .705.049l4.225-3.672 1.98 2.277a1.089 1.089 0 0 0 1.536.107l4.884-4.245 1.274 1.466c.3.346.869.178.934-.276l.636-4.469Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSalesMedium);
