import{d as s,h as e,o as t,c as a,q as n,j as o,w as i,F as l,r,n as d,s as c,t as u,e as f,v as p,x as m,f as _,y as w,z as g}from"./index.a2cd37f0.js";import{U as x,R as L,C as v,A as b}from"./index.655ea342.js";import{u as y,T as h}from"./useLoading.45bc7674.js";import{_ as j}from"./plugin-vueexport-helper.fc4dd177.js";import"./constant.5aba24a5.js";const k={class:"businessLicense"},z={class:"fontS"},I=(s=>(c("data-v-99f38437"),s=s(),u(),s))((()=>n("span",null,"请上传您的企业执照",-1))),$={src:"https://img1.baidu.com/it/u=4603732,1550247081&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",alt:"",style:{width:"300px",height:"200px","border-radius":"10px"}},O={class:"fontS"},A=j(s({__name:"index",setup(s){const c=e({name:"businessLicense",fileListzm:[],url:"",dataObj:{words_result_num:0,words_result:{}},infoList:[]});t((()=>{}));const{startLoading:u,stopLoading:j}=y(),A=e({access_token:"",image:""}),{proxy:C}=d(),V=e({grant_type:C.$dataInfo.grant_type,client_id:C.$dataInfo.client_id,client_secret:C.$dataInfo.client_secret}),P=s=>{(async s=>{if(u(),A.image=s,!A.access_token){const s=await b.getAccessTokenInfo(V);A.access_token=s.access_token}const e=await b.businessLicense(A);let t={verifynum:e.words_result["社会信用代码"].words,access_token:A.access_token};if(await b.getCompanyInfo(t),await b.getCompanyInfoAdvanced(t),c.dataObj=e,j(),e&&(!e.words_result_num||0===e.words_result_num))return void h({message:"识别失败，请重新上传",duration:3e3,position:"top"});let a=[];for(const n in e.words_result)if(Object.prototype.hasOwnProperty.call(e.words_result,n)){const s=e.words_result[n];a.push({label:n,value:s.words})}c.infoList=a})(s.content)};return(s,e)=>{const t=x,d=L,u=v;return f(),a("div",k,[n("div",z,[I,o(d,{justify:"center",class:"mt"},{default:i((()=>[o(t,{modelValue:c.fileListzm,"onUpdate:modelValue":e[0]||(e[0]=s=>c.fileListzm=s),"after-read":P,"preview-size":["300px","200px"],multiple:"","max-count":1,"upload-text":"企业执照正面"},{default:i((()=>[p(n("img",$,null,512),[[m,!(c.fileListzm&&c.fileListzm.length)]])])),_:1},8,["modelValue"])])),_:1})]),n("div",O,[(f(!0),a(l,null,r(c.infoList,(s=>(f(),_(d,null,{default:i((()=>[o(u,{span:"24"},{default:i((()=>[w(g(`${s.label} : ${s.value}`),1)])),_:2},1024)])),_:2},1024)))),256))])])}}}),[["__scopeId","data-v-99f38437"]]);export{A as default};
