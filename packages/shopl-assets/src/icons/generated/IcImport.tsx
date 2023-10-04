import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcImport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14.806 3.75c1.31 0 2.356 1.084 2.438 2.427l.005.17v8.307c0 1.363-.994 2.502-2.28 2.59l-.163.006H7.191c-1.31 0-2.356-1.084-2.437-2.427l-.005-.17V12.5h1.5v2.154c0 .578.38 1.032.842 1.09l.1.006h7.615c.472 0 .884-.415.937-.974l.006-.122V6.346c0-.578-.381-1.032-.843-1.09l-.1-.006v-1.5ZM9.683 2.5 14.5 7.507 9.683 12.5V9.504l-.18-.035-.18-.024-.149-.015-.172-.012-.193-.007h-.213l-.23.01-.249.02c-.127.013-.261.031-.4.055l-.283.055c-1.449.318-3.34 1.284-4.867 3.949l-.031-.231-.02-.228-.015-.293-.001-.354.01-.264.02-.286.033-.305c.167-1.306.721-3.047 2.324-4.527l.31-.276.11-.086.147-.105.185-.12.107-.063.243-.132c.744-.38 1.96-.788 3.694-.733V2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcImport);
