import{d as e,j as a,n as t,h as r,g as l,i as s,A as n,o,D as i,p as u,m as d,y as c,a as m,O as g,B as p,c as f,q as v,w as h,b,e as y,f as w,s as x,t as k,M as V}from"./index.5befa41d.js";import{b as S,p as B,f as C,s as M,r as A,h as T,u as I}from"./useLoading.e2b30ee2.js";import{c as P,n as j,t as E,w as L,x as $,o as _,k as F,m as z,d as W,e as q,u as O,a as D,i as H,y as U,I as K,j as G,_ as J}from"./plugin-vueexport-helper.d94c3bb6.js";import{c as N,C as Q}from"./index.332f8768.js";import{u as R,F as X,b as Y,C as Z}from"./constant.756902f2.js";import{B as ee}from"./index.66c605da.js";import"./use-route.2fdc255c.js";const[ae,te]=P("form");const re=L(e({name:ae,props:{colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:j,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:E,showErrorMessage:E,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},emits:["submit","failed"],setup(e,{emit:t,slots:r}){const{children:l,linkChildren:s}=R(X),n=e=>e?l.filter((a=>e.includes(a.name))):l,o=a=>{return"string"==typeof a?(e=>{const a=l.find((a=>a.name===e));return a?new Promise(((e,t)=>{a.validate().then((a=>{a?t(a):e()}))})):Promise.reject()})(a):e.validateFirst?(t=a,new Promise(((e,a)=>{const r=[];n(t).reduce(((e,a)=>e.then((()=>{if(!r.length)return a.validate().then((e=>{e&&r.push(e)}))}))),Promise.resolve()).then((()=>{r.length?a(r):e()}))}))):(e=>new Promise(((a,t)=>{const r=n(e);Promise.all(r.map((e=>e.validate()))).then((e=>{(e=e.filter(Boolean)).length?t(e):a()}))})))(a);var t},i=(e,a)=>{l.some((t=>t.name===e&&(t.$el.scrollIntoView(a),!0)))},u=()=>l.reduce(((e,a)=>(e[a.name]=a.formValue.value,e)),{}),d=()=>{const a=u();o().then((()=>t("submit",a))).catch((r=>{t("failed",{values:a,errors:r}),e.scrollToError&&r[0].name&&i(r[0].name)}))},c=e=>{B(e),d()};return s({props:e}),S({submit:d,validate:o,getValues:u,scrollToField:i,resetValidation:e=>{"string"==typeof e&&(e=[e]);n(e).forEach((e=>{e.resetValidation()}))},getValidationStatus:()=>l.reduce(((e,a)=>(e[a.name]=a.getValidationStatus(),e)),{})}),()=>{var e;return a("form",{class:te(),onSubmit:c},[null==(e=r.default)?void 0:e.call(r)])}}}));function le(e,a){return(!a.required||!function(e){return Array.isArray(e)?!e.length:0!==e&&!e}(e))&&!(a.pattern&&!a.pattern.test(String(e)))}function se(e,a){const{message:t}=a;return F(t)?t(e,a):t||""}function ne({target:e}){e.composing=!0}function oe({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ie(e){return[...e].length}let ue=0;const[de,ce]=P("field");const me=L(e({name:de,props:q({},N,{id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:j,formatter:Function,clearIcon:z("clear"),modelValue:W(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:z("focus"),formatTrigger:z("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},{rows:j,type:z("text"),rules:Array,autosize:[Boolean,Object],labelWidth:j,labelClass:O,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:m,slots:g}){const p=function(){const e=t(),{name:a="unknown"}=(null==e?void 0:e.type)||{};return`${a}-${++ue}`}(),f=r({status:"unvalidated",focused:!1,validateMessage:""}),v=l(),h=l(),{parent:b}=Y(X),y=()=>{var a;return String(null!=(a=e.modelValue)?a:"")},w=a=>H(e[a])?e[a]:b&&H(b.props[a])?b.props[a]:void 0,x=s((()=>{const a=w("readonly");if(e.clearable&&!a){const a=""!==y(),t="always"===e.clearTrigger||"focus"===e.clearTrigger&&f.focused;return a&&t}return!1})),k=s((()=>h.value&&g.input?h.value():e.modelValue)),V=e=>e.reduce(((e,a)=>e.then((()=>{if("failed"===f.status)return;let{value:e}=k;return a.formatter&&(e=a.formatter(e,a)),le(e,a)?a.validator?function(e,a){return new Promise((t=>{const r=a.validator(e,a);_(r)?r.then(t):t(r)}))}(e,a).then((t=>{t&&"string"==typeof t?(f.status="failed",f.validateMessage=t):!1===t&&(f.status="failed",f.validateMessage=se(e,a))})):void 0:(f.status="failed",void(f.validateMessage=se(e,a)))}))),Promise.resolve()),T=()=>{f.status="unvalidated",f.validateMessage=""},I=()=>m("end-validate",{status:f.status}),P=(a=e.rules)=>new Promise((t=>{T(),a?(m("start-validate"),V(a).then((()=>{"failed"===f.status?(t({name:e.name,message:f.validateMessage}),I()):(f.status="passed",t(),I())}))):t()})),j=a=>{if(b&&e.rules){const{validateTrigger:t}=b.props,r=G(t).includes(a),l=e.rules.filter((e=>e.trigger?G(e.trigger).includes(a):r));l.length&&P(l)}},E=(a,t="onChange")=>{if(a=(a=>{const{maxlength:t}=e;if(H(t)&&ie(a)>t){const e=y();return e&&ie(e)===+t?e:function(e,a){return[...e].slice(0,a).join("")}(a,+t)}return a})(a),"number"===e.type||"digit"===e.type){const t="number"===e.type;a=U(a,t,t)}e.formatter&&t===e.formatTrigger&&(a=e.formatter(a)),v.value&&v.value.value!==a&&(v.value.value=a),a!==e.modelValue&&m("update:modelValue",a)},L=e=>{e.target.composing||E(e.target.value)},F=()=>{var e;return null==(e=v.value)?void 0:e.blur()},z=()=>{const a=v.value;"textarea"===e.type&&e.autosize&&a&&function(e,a){const t=C();e.style.height="auto";let r=e.scrollHeight;if($(a)){const{maxHeight:e,minHeight:t}=a;void 0!==e&&(r=Math.min(r,e)),void 0!==t&&(r=Math.max(r,t))}r&&(e.style.height=`${r}px`,M(t))}(a,e.autosize)},W=e=>{f.focused=!0,m("focus",e),i(z),w("readonly")&&F()},q=e=>{w("readonly")||(f.focused=!1,E(y(),"onBlur"),m("blur",e),j("onBlur"),i(z),A())},O=e=>m("click-input",e),J=e=>m("click-left-icon",e),N=e=>m("click-right-icon",e),R=e=>{B(e),m("update:modelValue",""),m("clear",e)},ee=s((()=>"boolean"==typeof e.error?e.error:!(!b||!b.props.showError||"failed"!==f.status)||void 0)),ae=s((()=>{const e=w("labelWidth");if(e)return{width:D(e)}})),te=a=>{if(13===a.keyCode){b&&b.props.submitOnEnter||"textarea"===e.type||B(a),"search"===e.type&&F()}m("keypress",a)},re=()=>e.id||`${p}-input`,de=()=>{const t=ce("control",[w("inputAlign"),{error:ee.value,custom:!!g.input,"min-height":"textarea"===e.type&&!e.autosize}]);if(g.input)return a("div",{class:t,onClick:O},[g.input()]);const r={id:re(),ref:v,name:e.name,rows:void 0!==e.rows?+e.rows:void 0,class:t,disabled:w("disabled"),readonly:w("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${p}-label`:void 0,onBlur:q,onFocus:W,onInput:L,onClick:O,onChange:oe,onKeypress:te,onCompositionend:oe,onCompositionstart:ne};return"textarea"===e.type?a("textarea",r,null):a("input",d("number"===(l=e.type)?{type:"text",inputmode:"decimal"}:"digit"===l?{type:"tel",inputmode:"numeric"}:{type:l},r),null);var l},me=()=>{const t=g["right-icon"];if(e.rightIcon||t)return a("div",{class:ce("right-icon"),onClick:N},[t?t():a(K,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ge=()=>{if(e.showWordLimit&&e.maxlength){const t=ie(y());return a("div",{class:ce("word-limit")},[a("span",{class:ce("word-num")},[t]),c("/"),e.maxlength])}},pe=()=>{if(b&&!1===b.props.showErrorMessage)return;const t=e.errorMessage||f.validateMessage;if(t){const e=g["error-message"],r=w("errorMessageAlign");return a("div",{class:ce("error-message",r)},[e?e({message:t}):t])}},fe=()=>[a("div",{class:ce("body")},[de(),x.value&&a(K,{name:e.clearIcon,class:ce("clear"),onTouchstart:R},null),me(),g.button&&a("div",{class:ce("button")},[g.button()])]),ge(),pe()];return S({blur:F,focus:()=>{var e;return null==(e=v.value)?void 0:e.focus()},validate:P,formValue:k,resetValidation:T,getValidationStatus:()=>f.status}),u(Z,{customValue:h,resetValidation:T,validateWithTrigger:j}),n((()=>e.modelValue),(()=>{E(y()),T(),j("onChange"),i(z)})),o((()=>{E(y(),e.formatTrigger),i(z)})),()=>{const t=w("disabled"),r=w("labelAlign"),l=(()=>{const t=w("colon")?":":"";return g.label?[g.label(),t]:e.label?a("label",{id:`${p}-label`,for:re()},[e.label+t]):void 0})(),s=(()=>{const t=g["left-icon"];if(e.leftIcon||t)return a("div",{class:ce("left-icon"),onClick:J},[t?t():a(K,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])})();return a(Q,{size:e.size,icon:e.leftIcon,class:ce({error:ee.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ae.value,valueClass:ce("value"),titleClass:[ce("label",[r,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:s?()=>s:null,title:l?()=>l:null,value:fe,extra:g.extra})}}})),ge={login:async e=>await T.post("/user/login",e)},pe={class:"login"},fe={class:"content"},ve=(e=>(x("data-v-9b118154"),e=e(),k(),e))((()=>v("div",{class:"logo"},[v("img",{src:"/vantMobile/assets/vue.5532db34.svg",alt:"logo"})],-1))),he=c("Login "),be=J(e({__name:"index",setup(e){const t=V(),s=b(),{startLoading:n,stopLoading:i}=I(),u=l("password"),d=l(!1),c=r({username:"",password:""});o((()=>{m.config(s.query.debug),g.enable()})),p((()=>{g.disable()}));const x=()=>{d.value=!d.value,u.value=d.value?"text":"password"},k=async()=>{setTimeout((()=>{t.push("/index")}),3e3),n(),await ge.login(c),i(),t.push("/index")},S=(e={})=>{};return(e,t)=>{const r=me,l=K,s=ee,n=re;return y(),f("div",pe,[v("div",fe,[ve,a(n,{onSubmit:k,onFailed:S},{default:h((()=>[a(r,{modelValue:c.username,"onUpdate:modelValue":t[0]||(t[0]=e=>c.username=e),modelModifiers:{trim:!0},name:"username",clearable:"",placeholder:"input username"},null,8,["modelValue"]),a(r,{modelValue:c.password,"onUpdate:modelValue":t[1]||(t[1]=e=>c.password=e),type:u.value,name:"password",clearable:"",placeholder:"input password"},{button:h((()=>[v("div",{onClick:x},[d.value?(y(),w(l,{key:0,name:"eye-o"})):(y(),w(l,{key:1,name:"closed-eye"}))])])),_:1},8,["modelValue","type"]),a(s,{block:"",type:"primary","native-type":"submit",class:"submit-btn"},{default:h((()=>[he])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-9b118154"]]);export{be as default};
