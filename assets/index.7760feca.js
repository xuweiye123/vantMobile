import{r as l,u as e}from"./use-route.a4f3150d.js";import{c as i,n as t,t as a,u as r,e as s,i as n,I as o,w as c}from"./_plugin-vue_export-helper.2c7609b8.js";import{d as u,j as d}from"./index.917ac6ce.js";const[b,v]=i("cell"),f={icon:String,size:String,title:t,value:t,label:t,center:Boolean,isLink:Boolean,border:a,required:Boolean,iconPrefix:String,valueClass:r,labelClass:r,titleClass:r,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}};const p=c(u({name:b,props:s({},f,l),setup(l,{slots:i}){const t=e(),a=()=>{if(i.label||n(l.label))return d("div",{class:[v("label"),l.labelClass]},[i.label?i.label():l.label])},r=()=>{if(i.title||n(l.title))return d("div",{class:[v("title"),l.titleClass],style:l.titleStyle},[i.title?i.title():d("span",null,[l.title]),a()])},s=()=>{const e=i.value||i.default;if(e||n(l.value)){const t=i.title||n(l.title);return d("div",{class:[v("value",{alone:!t}),l.valueClass]},[e?e():d("span",null,[l.value])])}},c=()=>{if(i["right-icon"])return i["right-icon"]();if(l.isLink){const e=l.arrowDirection?`arrow-${l.arrowDirection}`:"arrow";return d(o,{name:e,class:v("right-icon")},null)}};return()=>{var e,a;const{size:n,center:u,border:b,isLink:f,required:p}=l,m=null!=(e=l.clickable)?e:f,g={center:u,required:p,clickable:m,borderless:!b};return n&&(g[n]=!!n),d("div",{class:v(g),role:m?"button":void 0,tabindex:m?0:void 0,onClick:t},[i.icon?i.icon():l.icon?d(o,{name:l.icon,class:v("left-icon"),classPrefix:l.iconPrefix},null):void 0,r(),s(),c(),null==(a=i.extra)?void 0:a.call(i)])}}}));export{p as C,f as c};
