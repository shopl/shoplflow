var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var F=(e,t)=>{for(var c in t)o(e,c,{get:t[c],enumerable:!0})},x=(e,t,c,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of u(t))!p.call(e,n)&&n!==c&&o(e,n,{get:()=>t[n],enumerable:!(r=s(t,n))||r.enumerable});return e};var T=e=>x(o({},"__esModule",{value:!0}),e);var i={};F(i,{testFunc:()=>d});module.exports=T(i);var d=()=>1;0&&(module.exports={testFunc});