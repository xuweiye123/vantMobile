import{g as e,o as t,D as a,j as s,d as l,e as r,c as i,u as o,M as n,b as c,q as f,N as d}from"./index.bf5caa1b.js";import{c as p,n as u,t as x,I as v,h,w as g,_ as m}from"./plugin-vueexport-helper.a4f4c37e.js";import{f as T,H as w,i as _}from"./constant.ffa4f438.js";function k(l,r){const i=((s,l)=>{const r=e(),i=()=>{r.value=T(s).height};return t((()=>{if(a(i),l)for(let e=1;e<=3;e++)setTimeout(i,100*e)})),r})(l,!0);return e=>s("div",{class:r("placeholder"),style:{height:i.value?`${i.value}px`:void 0}},[e()])}const[b,I]=p("nav-bar");const A=g(l({name:b,props:{title:String,fixed:Boolean,zIndex:u,border:x,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},emits:["click-left","click-right"],setup(t,{emit:a,slots:l}){const r=e(),i=k(r,I),o=e=>a("click-left",e),n=e=>a("click-right",e),c=()=>{const{title:e,fixed:a,border:i,zIndex:c}=t,f=h(c),d=t.leftArrow||t.leftText||l.left,p=t.rightText||l.right;return s("div",{ref:r,style:f,class:[I({fixed:a}),{[_]:i,"van-safe-area-top":t.safeAreaInsetTop}]},[s("div",{class:I("content")},[d&&s("div",{class:[I("left"),w],onClick:o},[l.left?l.left():[t.leftArrow&&s(v,{class:I("arrow"),name:"arrow-left"},null),t.leftText&&s("span",{class:I("text")},[t.leftText])]]),s("div",{class:[I("title"),"van-ellipsis"]},[l.title?l.title():e]),p&&s("div",{class:[I("right"),w],onClick:n},[l.right?l.right():s("span",{class:I("text")},[t.rightText])])])])};return()=>t.fixed&&t.placeholder?i(c):c()}})),j={class:"header"},B=m(l({__name:"index",setup(e){const t=n(),a=c();return(e,l)=>{const n=A;return r(),i("div",j,[s(n,{title:o(a).meta.title,"left-arrow":"index"!==o(a).name,onClickLeft:l[0]||(l[0]=e=>o(t).back()),"safe-area-inset-top":""},null,8,["title","left-arrow"])])}}}),[["__scopeId","data-v-0ec7c0ce"]]),y={class:"layout"},C={class:"content"},S=m(l({__name:"index",setup:e=>(e,t)=>{const a=d("router-view");return r(),i("div",y,[s(B),f("div",C,[s(a)])])}}),[["__scopeId","data-v-aeae496e"]]);export{S as default};
