"use strict";var $=Object.create;var h=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var k=(i,n)=>{for(var r in n)h(i,r,{get:n[r],enumerable:!0})},x=(i,n,r,u)=>{if(n&&typeof n=="object"||typeof n=="function")for(let f of z(n))!R.call(i,f)&&f!==r&&h(i,f,{get:()=>n[f],enumerable:!(u=_(n,f))||u.enumerable});return i};var v=(i,n,r)=>(r=i!=null?$(T(i)):{},x(n||!i||!i.__esModule?h(r,"default",{value:i,enumerable:!0}):r,i)),S=i=>x(h({},"__esModule",{value:!0}),i);var ue={};k(ue,{ShoplflowProvider:()=>c,hadaTheme:()=>d,shoplTheme:()=>g,test111:()=>ce});module.exports=S(ue);var y=v(require("react"),1),w=require("@emotion/react");var a={borderRadius04:"4px",borderRadius06:"6px",borderRadius08:"8px",borderRadius12:"12px",borderRadius16:"16px"};var e={regular:"400",medium:"500",bold:"700"};var p={spacing04:"4px",spacing06:"6px",spacing08:"8px",spacing12:"12px",spacing16:"16px",spacing20:"20px",spacing24:"24px",spacing30:"30px",spacing32:"32px",spacing40:"40px"};var o=require("@emotion/react");var W=o.css`
  font-weight: ${e.bold};
  line-height: 38;
  font-size: 32px;
`,P=o.css`
  font-weight: ${e.regular};
  line-height: 38;
  font-size: 32px;
`,C=o.css`
  font-weight: ${e.bold};
  line-height: 28;
  font-size: 24px;
`,A=o.css`
  font-weight: ${e.regular};
  line-height: 28;
  font-size: 24px;
`,V=o.css`
  font-weight: ${e.bold};
  line-height: 26;
  font-size: 22px;
`,H=o.css`
  font-weight: ${e.regular};
  line-height: 26;
  font-size: 22px;
`,D=o.css`
  font-weight: ${e.bold};
  line-height: 24;
  font-size: 20px;
`,B=o.css`
  font-weight: ${e.regular};
  line-height: 24;
  font-size: 20px;
`,F=o.css`
  font-weight: ${e.bold};
  line-height: 22;
  font-size: 18px;
`,L=o.css`
  font-weight: ${e.medium};
  line-height: 22;
  font-size: 18px;
`,N=o.css`
  font-weight: ${e.regular};
  line-height: 22;
  font-size: 18px;
`,O=o.css`
  font-weight: ${e.bold};
  line-height: 22;
  font-size: 16px;
`,j=o.css`
  font-weight: ${e.medium};
  line-height: 22;
  font-size: 16px;
`,q=o.css`
  font-weight: ${e.regular};
  line-height: 22;
  font-size: 16px;
`,E=o.css`
  font-weight: ${e.bold};
  line-height: 18;
  font-size: 14px;
`,G=o.css`
  font-weight: ${e.medium};
  line-height: 18;
  font-size: 14px;
`,I=o.css`
  font-weight: ${e.regular};
  line-height: 18;
  font-size: 14px;
`,J=o.css`
  font-weight: ${e.regular};
  line-height: 18;
  font-size: 13px;
`,K=o.css`
  font-weight: ${e.regular};
  line-height: 16;
  font-size: 12px;
`,s={heading1_700:W,heading1_400:P,heading2_700:C,heading2_400:A,heading3_700:V,heading3_400:H,title1_700:D,title1_400:B,title2_700:F,title2_500:L,title2_400:N,body1_700:O,body1_500:j,body1_400:q,body2_700:E,body2_500:G,body2_400:I,body3_400:J,caption_400:K};var l={hada400:"#05a77b",hada300:"#02b585",hada200:"#61cbb5",hada150:"#c1e7dd",hada100:"#d9f4ed",shopl400:"#2d89e4",shopl300:"#3299fe",shopl200:"#84c2fc",shopl150:"#d6e9fb",shopl100:"#eaf5ff",coolgray300:"#8092aa",coolgray200:"#cdd6e4",coolgray100:"#dce3ee",coolgray50:"#f1f4f6",navy400:"#35485b",navy300:"#406588",neutral0:"#ffffff",neutral100:"#f9f9f9",neutral150:"#f4f4f4",neutral200:"#eaeaea",neutral300:"#dddddd",neutral350:"#cccccc",neutral400:"#999999",neutral500:"#777777",neutral600:"#555555",neutral700:"#333333",neutral400_5:"#9999990d",red300:"#ff6666",red200:"#ff7979",red100:"#f9ebeb",ocean300:"#2f839f",ocean200:"#3eb0b8",ocean100:"#95d6d3",purple400:"#5c68c9",purple300:"#6979f8",purple100:"#eff1ff",yellow300:"#ffbb00",yellow200:"#ffda75",yellow100:"#fff7dd",green300:"#4dc9aa",green200:"#77d5bb",green100:"#d8f2eb",background:"#f7f9fd"};var m={hada400:"#05a77b",hada300:"#02b585",hada200:"#61cbb5",hada150:"#c1e7dd",hada100:"#d9f4ed",shopl400:"#2d89e4",shopl300:"#3299fe",shopl200:"#84c2fc",shopl150:"#d6e9fb",shopl100:"#eaf5ff",coolgray300:"#8092aa",coolgray200:"#cdd6e4",coolgray100:"#dce3ee",coolgray50:"#f1f4f6",navy400:"#35485b",navy300:"#406588",neutral0:"#ffffff",neutral100:"#f9f9f9",neutral150:"#f4f4f4",neutral200:"#eaeaea",neutral300:"#dddddd",neutral350:"#cccccc",neutral400:"#999999",neutral500:"#777777",neutral600:"#555555",neutral700:"#333333",neutral400_5:"#9999990d",red300:"#ff6666",red200:"#ff7979",red100:"#f9ebeb",ocean300:"#2f839f",ocean200:"#3eb0b8",ocean100:"#95d6d3",purple400:"#5c68c9",purple300:"#6979f8",purple100:"#eff1ff",yellow300:"#ffbb00",yellow200:"#ffda75",yellow100:"#fff7dd",green300:"#4dc9aa",green200:"#77d5bb",green100:"#d8f2eb",background:"#f6f6f6"};var t=require("@emotion/react");var M=t.css`
  font-weight: ${e.bold};
  line-height: 34;
  font-size: 28px;
`,Q=t.css`
  font-weight: ${e.regular};
  line-height: 34;
  font-size: 28px;
`,U=t.css`
  font-weight: ${e.bold};
  line-height: 28;
  font-size: 24px;
`,X=t.css`
  font-weight: ${e.regular};
  line-height: 28;
  font-size: 24px;
`,Y=t.css`
  font-weight: ${e.bold};
  line-height: 24;
  font-size: 20px;
`,Z=t.css`
  font-weight: ${e.regular};
  line-height: 24;
  font-size: 20px;
`,ee=t.css`
  font-weight: ${e.bold};
  line-height: 22;
  font-size: 18px;
`,oe=t.css`
  font-weight: ${e.regular};
  line-height: 22;
  font-size: 18px;
`,te=t.css`
  font-weight: ${e.bold};
  line-height: 20;
  font-size: 16px;
`,ie=t.css`
  font-weight: ${e.medium};
  line-height: 20;
  font-size: 16px;
`,ne=t.css`
  font-weight: ${e.regular};
  line-height: 20;
  font-size: 16px;
`,re=t.css`
  font-weight: ${e.bold};
  line-height: 18;
  font-size: 14px;
`,fe=t.css`
  font-weight: ${e.medium};
  line-height: 18;
  font-size: 14px;
`,he=t.css`
  font-weight: ${e.regular};
  line-height: 18;
  font-size: 14px;
`,ae=t.css`
  font-weight: ${e.bold};
  line-height: 16;
  font-size: 13px;
`,pe=t.css`
  font-weight: ${e.medium};
  line-height: 16;
  font-size: 13px;
`,se=t.css`
  font-weight: ${e.regular};
  line-height: 16;
  font-size: 13px;
`,le=t.css`
  font-weight: ${e.regular};
  line-height: 16;
  font-size: 12px;
`,de=t.css`
  font-weight: ${e.regular};
  line-height: 16;
  font-size: 12px;
`,b={heading1_700:M,heading1_400:Q,heading2_700:U,heading2_400:X,heading3_700:Y,heading3_400:Z,title1_700:ee,title1_400:oe,title2_700:te,title2_500:ie,title2_400:ne,body1_700:re,body1_500:fe,body1_400:he,body2_700:ae,body2_500:pe,body2_400:se,body3_400:le,caption_400:de};var d={borderRadius:a,fontWeights:e,colors:l,typographies:s,spacings:p},g={borderRadius:a,fontWeights:e,colors:m,typographies:b,spacings:p};var ge=({children:i,domain:n="HADA"})=>y.default.createElement(w.ThemeProvider,{theme:n==="HADA"?d:g},i),c=ge;var ce="test111";0&&(module.exports={ShoplflowProvider,hadaTheme,shoplTheme,test111});
