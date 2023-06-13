import{d as e,h as t,o as a,c as s,q as o,j as i,w as n,F as r,r as l,n as d,s as c,t as u,e as f,v as m,x as p,f as _,y as w,z as v}from"./index.7a690764.js";import{U as g,R as x,C as y,A as k}from"./index.dc0324c6.js";import{u as b,T as h}from"./useLoading.2fbda5c5.js";import{B as j}from"./index.fea9a6fe.js";import{_ as L}from"./_plugin-vue_export-helper.7f3ad9c9.js";import"./constant.154c22e4.js";import"./use-route.4743114d.js";const I=e=>(c("data-v-64eeab88"),e=e(),u(),e),z={class:"identityCard"},$={class:"fontS"},C=I((()=>o("span",null,"请上传您的身份证人像面",-1))),O={src:"https://img1.baidu.com/it/u=4603732,1550247081&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",alt:"",style:{width:"300px",height:"200px","border-radius":"10px"}},U={class:"fontS"},V=I((()=>o("span",null,"请上传您的身份证国徽面",-1))),A={src:"https://img1.baidu.com/it/u=4214905558,1464297231&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",alt:"",style:{width:"300px",height:"200px","border-radius":"10px"}},P=w("人脸认证"),R=L(e({__name:"index",setup(e){const c=t({name:"identityCard",fileListzm:[],fileListfm:[],url:"",dataObj:{words_result_num:0,words_result:{"姓名":{words:""},"公民身份号码":{words:""}}},infoList:[]});a((()=>{c.url=window.location.origin}));const{startLoading:u,stopLoading:L}=b(),I=t({access_token:"",id_card_side:"",image:"",detect_risk:!0,detect_quality:!0}),{proxy:R}=d(),T=t({grant_type:R.$dataInfo.grant_type,client_id:R.$dataInfo.client_id,client_secret:R.$dataInfo.client_secret}),q=async(e,t)=>{if(u(),I.id_card_side=e,I.image=t,!I.access_token){const e=await k.getAccessTokenInfo(T);I.access_token=e.access_token}const a=await k.getIdcard(I);if(c.dataObj=a,L(),a&&0===a.words_result_num&&"normal"!=a.image_status){return void h({message:{reversed_side:"身份证正反面颠倒",non_idcard:"上传的图片中不包含身份证",blurred:"身份证模糊",other_type_card:"其他类型证照",over_exposure:"身份证关键字段反光或过曝",over_dark:"身份证欠曝（亮度过低）",unknown:"识别失败，请重新上传"}[a.image_status]||"识别失败，请重新上传",duration:3e3,position:"top"})}if(a&&!a.words_result_num)return void h({message:"识别失败，请重新上传",duration:3e3,position:"top"});let s=[];for(const o in a.words_result)if(Object.prototype.hasOwnProperty.call(a.words_result,o)){const e=a.words_result[o];s.push({label:o,value:e.words})}c.infoList=s},E=e=>{let t=e.content;q("front",t)},G=e=>{let t=e.content;q("back",t)},J=async()=>{var e,t,a,s,o,i;if(0==c.dataObj.words_result_num)return void h("身份证验证失败");if(!I.access_token){const e=await k.getAccessTokenInfo(T);I.access_token=e.access_token}let n={plan_id:"17266",access_token:I.access_token};let r=(await k.generate(n)).result.verify_token,l={verify_token:r,id_name:null==(a=null==(t=null==(e=c.dataObj)?void 0:e.words_result)?void 0:t.姓名)?void 0:a.words,id_no:null==(i=null==(o=null==(s=c.dataObj)?void 0:s.words_result)?void 0:o.公民身份号码)?void 0:i.words};I.access_token;(await k.faceprint(l)).success?window.location.href=`https://brain.baidu.com/face/print/?token=${r}&successUrl=${encodeURIComponent(c.url)}&failedUrl=${encodeURIComponent(c.url+"/#/identityCard")}`:h("验证失败")};return(e,t)=>{const a=g,d=x,u=y,k=j;return f(),s("div",z,[o("div",$,[C,i(d,{justify:"center",class:"mt"},{default:n((()=>[i(a,{modelValue:c.fileListzm,"onUpdate:modelValue":t[0]||(t[0]=e=>c.fileListzm=e),"after-read":E,"preview-size":["300px","200px"],multiple:"","max-count":1,"upload-text":"身份证正面"},{default:n((()=>[m(o("img",O,null,512),[[p,!(c.fileListzm&&c.fileListzm.length)]])])),_:1},8,["modelValue"])])),_:1})]),o("div",U,[V,i(d,{justify:"center",class:"mt"},{default:n((()=>[i(a,{modelValue:c.fileListfm,"onUpdate:modelValue":t[1]||(t[1]=e=>c.fileListfm=e),"after-read":G,"preview-size":["300px","200px"],capture:"camera",multiple:"","max-count":1,"upload-text":"身份证反面"},{default:n((()=>[m(o("img",A,null,512),[[p,!(c.fileListfm&&c.fileListfm.length)]])])),_:1},8,["modelValue"])])),_:1}),(f(!0),s(r,null,l(c.infoList,(e=>(f(),_(d,null,{default:n((()=>[i(u,{span:"24"},{default:n((()=>[w(v(`${e.label} : ${e.value}`),1)])),_:2},1024)])),_:2},1024)))),256))]),i(k,{type:"primary",onClick:J},{default:n((()=>[P])),_:1})])}}}),[["__scopeId","data-v-64eeab88"]]);export{R as default};
