import * as React from "react";
import type { SVGProps } from "react";
import { createIcon } from "../../utils";
function SvgIcSetting(props: SVGProps<SVGSVGElement>) {
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
        d="M8.399 15.556c.07.138.106.35.177.775.04.238.06.357.119.446a.5.5 0 0 0 .211.18c.098.043.218.043.46.043h1.269c.24 0 .361 0 .459-.044a.5.5 0 0 0 .211-.18c.06-.088.08-.207.119-.445.07-.424.106-.636.177-.774a1 1 0 0 1 1.196-.496c.148.048.323.173.673.423.196.14.294.21.399.231a.5.5 0 0 0 .276-.023c.1-.038.186-.123.356-.293l.898-.898c.17-.17.255-.255.293-.355a.5.5 0 0 0 .023-.277c-.021-.105-.091-.203-.231-.399-.25-.35-.375-.525-.423-.673a1 1 0 0 1 .495-1.196c.139-.071.351-.106.775-.177.238-.04.357-.06.446-.119a.5.5 0 0 0 .18-.211c.043-.098.043-.218.043-.46V9.366c0-.24 0-.361-.044-.459a.5.5 0 0 0-.18-.211c-.088-.06-.207-.08-.445-.119-.424-.07-.637-.106-.775-.177a1 1 0 0 1-.495-1.196c.047-.148.172-.323.422-.673.14-.196.21-.294.231-.4a.5.5 0 0 0-.022-.276c-.039-.1-.124-.185-.294-.355L14.5 4.6c-.17-.17-.255-.255-.355-.293a.5.5 0 0 0-.277-.023c-.104.02-.202.09-.398.23-.35.25-.525.376-.673.423a1 1 0 0 1-1.196-.495c-.071-.139-.106-.35-.177-.775-.04-.237-.06-.356-.119-.445a.5.5 0 0 0-.211-.18C10.996 3 10.876 3 10.634 3H9.366c-.24 0-.361 0-.459.044a.5.5 0 0 0-.211.18c-.06.088-.08.207-.119.444-.07.425-.106.637-.177.776a1 1 0 0 1-1.196.495c-.148-.048-.323-.173-.673-.423-.196-.14-.294-.21-.4-.231a.5.5 0 0 0-.276.023c-.1.038-.185.123-.355.293L4.6 5.5c-.17.17-.255.255-.293.355a.5.5 0 0 0-.023.277c.02.105.09.203.23.399.25.35.376.525.424.673A1 1 0 0 1 4.443 8.4c-.138.071-.35.106-.775.177-.237.04-.356.06-.445.119a.5.5 0 0 0-.18.211C3 9.004 3 9.124 3 9.366v1.269c0 .24 0 .361.044.459a.5.5 0 0 0 .18.211c.088.06.207.08.444.119.424.07.636.106.775.177a1 1 0 0 1 .495 1.196c-.048.148-.173.323-.423.673-.14.196-.21.294-.23.399a.5.5 0 0 0 .022.276c.038.1.124.186.294.356l.897.898c.17.17.256.255.356.293a.5.5 0 0 0 .276.023c.105-.021.203-.091.4-.231.35-.25.525-.376.673-.423a1 1 0 0 1 1.196.495ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSetting);
