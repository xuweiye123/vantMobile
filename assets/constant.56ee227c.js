import{k as n,J as e,i,g as t,h as o,A as r,n as a,p as s,G as d,K as u,o as c,D as l,E as f,u as h,L as v}from"./index.543ce61a.js";var p="undefined"!=typeof window;function w(n){return p?requestAnimationFrame(n):-1}function g(n){w((()=>w(n)))}var m,b,x=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),y=n=>{const e=h(n);if(e===window){const n=e.innerWidth,i=e.innerHeight;return x(n,i)}return(null==e?void 0:e.getBoundingClientRect)?e.getBoundingClientRect():x(0,0)};function C(o){const r=n(o,null);if(r){const n=a(),{link:t,unlink:o,internalChildren:s}=r;t(n),e((()=>o(n)));return{parent:r,index:i((()=>s.indexOf(n)))}}return{parent:null,index:t(-1)}}function O(n,e,i){const t=function(n){const e=[],i=n=>{Array.isArray(n)&&n.forEach((n=>{var t;v(n)&&(e.push(n),(null==(t=n.component)?void 0:t.subTree)&&(e.push(n.component.subTree),i(n.component.subTree.children)),n.children&&i(n.children))}))};return i(n),e}(n.subTree.children);i.sort(((n,e)=>t.indexOf(n.vnode)-t.indexOf(e.vnode)));const o=i.map((n=>n.proxy));e.sort(((n,e)=>o.indexOf(n)-o.indexOf(e)))}function k(n){const e=o([]),i=o([]),t=a();return{children:e,linkChildren:o=>{s(n,Object.assign({link:n=>{n.proxy&&(i.push(n),e.push(n.proxy),O(t,e,i))},unlink:n=>{const t=i.indexOf(n);e.splice(t,1),i.splice(t,1)},children:e,internalChildren:i},o))}}}function E(n){let e;c((()=>{n(),l((()=>{e=!0}))})),f((()=>{e&&n()}))}function L(n,i,t={}){if(!p)return;const{target:o=window,passive:a=!1,capture:s=!1}=t;let c;const l=e=>{const t=h(e);t&&!c&&(t.addEventListener(n,i,{capture:s,passive:a}),c=!0)},f=e=>{const t=h(e);t&&c&&(t.removeEventListener(n,i,s),c=!1)};e((()=>f(o))),d((()=>f(o))),E((()=>l(o))),u(o)&&r(o,((n,e)=>{f(e),l(n)}))}function T(){if(!m&&(m=t(0),b=t(0),p)){const n=()=>{m.value=window.innerWidth,b.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:m,height:b}}var A,B=/scroll|auto/i,H=p?window:void 0;function N(n){return"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType}function S(n,e=H){let i=n;for(;i&&i!==e&&N(i);){const{overflowY:n}=window.getComputedStyle(i);if(B.test(n))return i;i=i.parentNode}return e}function V(){if(!A&&(A=t("visible"),p)){const n=()=>{A.value=document.hidden?"hidden":"visible"};n(),window.addEventListener("visibilitychange",n)}return A}var W=Symbol("van-field");function j(e){const i=n(W,null);i&&!i.customValue.value&&(i.customValue.value=e,r(e,(()=>{i.resetValidation(),i.validateWithTrigger("onChange")})))}const D="van-hairline--bottom",F="van-hairline--surround",R="van-haptics-feedback",Y=Symbol("van-form");export{F as B,W as C,Y as F,R as H,V as a,C as b,y as c,g as d,j as e,T as f,S as g,L as h,D as i,E as o,k as u};
