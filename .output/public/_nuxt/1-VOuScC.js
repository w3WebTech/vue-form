import{d as U,r as _,o as w,c as L,w as l,a as e,u as a,b as o,V as b,e as C,f as m,g as E,i as A,h as M,j as x,F as I,t as v,k as O}from"./B0PQ7Bwp.js";import{a as $}from"./CAlKhLBm.js";import{V as h,a as V}from"./D3_aArDr.js";import{V as j}from"./iUuLLzUb.js";import{V as F}from"./BUPEpCJJ.js";import{V as S}from"./DhCIAwJA.js";import{V as g}from"./B0R7ih0d.js";import{V as r}from"./nLydeJh9.js";import{V as y}from"./Dh9YAtYA.js";import{V as T,a as B}from"./Gv6Scb6v.js";import{V as k}from"./hyzcIlgb.js";import{V as Y}from"./YMkfb8FX.js";import{V as W}from"./BvuUTMC6.js";import{V as H,a as K}from"./qqi4I8p6.js";import{V as z,a as q}from"./DJczJGql.js";import"./DFz1FAL0.js";import"./C-GTDzx5.js";/* empty css        */import"./BZ6IO_U0.js";import"./CLlzoV2m.js";import"./BmYUiRIS.js";import"./wUh4z-we.js";import"./DY7PVvcf.js";import"./CmdrP4ss.js";import"./blbum4Ig.js";import"./B30L3FuV.js";import"./CABM_Ymi.js";import"./Ba0tvBjL.js";import"./DjS7tRw0.js";const J={class:"d-flex flex-column justify-center gap-5"},Z={class:"d-flex flex-wrap gap-2"},Q=o("span",{class:"d-none d-sm-block"},"Upload new photo",-1),X=o("span",{class:"d-none d-sm-block"},"Reset",-1),ee=o("p",{class:"text-body-1 mb-0"},"Allowed JPG, GIF or PNG. Max size of 800K",-1),le=U({__name:"AccountSettingsAccount",setup(N){const p={avatarImg:$,firstName:"john",lastName:"Doe",email:"johnDoe@example.com",org:"ThemeSelection",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},c=_(),n=_(structuredClone(p)),f=_(!1),d=()=>{n.value=structuredClone(p)},u=G=>{const s=new FileReader,{files:t}=G.target;t&&t.length&&(s.readAsDataURL(t[0]),s.onload=()=>{typeof s.result=="string"&&(n.value.avatarImg=s.result)})},P=()=>{n.value.avatarImg=p.avatarImg},D=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],R=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(G,s)=>(w(),L(g,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Account Details"},{default:l(()=>[e(V,{class:"d-flex"},{default:l(()=>[e(j,{rounded:"lg",size:"100",class:"me-6",image:a(n).avatarImg},null,8,["image"]),o("form",J,[o("div",Z,[e(b,{color:"primary",onClick:s[0]||(s[0]=t=>{var i;return(i=a(c))==null?void 0:i.click()})},{default:l(()=>[e(C,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),Q]),_:1}),o("input",{ref_key:"refInputEl",ref:c,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:u},null,544),e(b,{type:"reset",color:"error",variant:"outlined",onClick:P},{default:l(()=>[X,e(C,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),ee])]),_:1}),e(F),e(V,null,{default:l(()=>[e(S,{class:"mt-6"},{default:l(()=>[e(g,null,{default:l(()=>[e(r,{md:"6",cols:"12"},{default:l(()=>[e(y,{modelValue:a(n).firstName,"onUpdate:modelValue":s[1]||(s[1]=t=>a(n).firstName=t),placeholder:"John",label:"First Name"},null,8,["modelValue"])]),_:1}),e(r,{md:"6",cols:"12"},{default:l(()=>[e(y,{modelValue:a(n).lastName,"onUpdate:modelValue":s[2]||(s[2]=t=>a(n).lastName=t),placeholder:"Doe",label:"Last Name"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).email,"onUpdate:modelValue":s[3]||(s[3]=t=>a(n).email=t),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).org,"onUpdate:modelValue":s[4]||(s[4]=t=>a(n).org=t),label:"Organization",placeholder:"ThemeSelection"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).phone,"onUpdate:modelValue":s[5]||(s[5]=t=>a(n).phone=t),label:"Phone Number",placeholder:"+1 (917) 543-9876"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).address,"onUpdate:modelValue":s[6]||(s[6]=t=>a(n).address=t),label:"Address",placeholder:"123 Main St, New York, NY 10001"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).state,"onUpdate:modelValue":s[7]||(s[7]=t=>a(n).state=t),label:"State",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(n).zip,"onUpdate:modelValue":s[8]||(s[8]=t=>a(n).zip=t),label:"Zip Code",placeholder:"10001"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(T,{modelValue:a(n).country,"onUpdate:modelValue":s[9]||(s[9]=t=>a(n).country=t),label:"Country",items:["USA","Canada","UK","India","Australia"],placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(T,{modelValue:a(n).language,"onUpdate:modelValue":s[10]||(s[10]=t=>a(n).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(T,{modelValue:a(n).timezone,"onUpdate:modelValue":s[11]||(s[11]=t=>a(n).timezone=t),label:"Timezone",placeholder:"Select Timezone",items:D,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(T,{modelValue:a(n).currency,"onUpdate:modelValue":s[12]||(s[12]=t=>a(n).currency=t),label:"Currency",placeholder:"Select Currency",items:R,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(b,null,{default:l(()=>[m("Save changes")]),_:1}),e(b,{color:"secondary",variant:"outlined",type:"reset",onClick:E(d,["prevent"])},{default:l(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Deactivate Account"},{default:l(()=>[e(V,null,{default:l(()=>[o("div",null,[e(k,{modelValue:a(f),"onUpdate:modelValue":s[13]||(s[13]=t=>A(f)?f.value=t:null),label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(b,{disabled:!a(f),color:"error",class:"mt-3"},{default:l(()=>[m(" Deactivate Account ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ae=o("a",{href:"javascript:void(0)"},"Request Permission",-1),te=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," Type "),o("th",{scope:"col"}," EMAIL "),o("th",{scope:"col"}," BROWSER "),o("th",{scope:"col"}," App ")])],-1),oe=o("p",{class:"text-base font-weight-medium"}," When should we send you notifications? ",-1),ne={class:"d-flex flex-wrap gap-4 mt-4"},se=U({__name:"AccountSettingsNotification",setup(N){const p=_([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),c=_("Only when I'm online");return(n,f)=>(w(),L(h,{title:"Recent Devices"},{default:l(()=>[e(V,null,{default:l(()=>[m(" We need permission from your browser to show notifications. "),ae]),_:1}),e(Y,{class:"text-no-wrap"},{default:l(()=>[te,o("tbody",null,[(w(!0),M(I,null,x(a(p),d=>(w(),M("tr",{key:d.type},[o("td",null,v(d.type),1),o("td",null,[e(k,{modelValue:d.email,"onUpdate:modelValue":u=>d.email=u},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(k,{modelValue:d.browser,"onUpdate:modelValue":u=>d.browser=u},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(k,{modelValue:d.app,"onUpdate:modelValue":u=>d.app=u},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(F),e(V,null,{default:l(()=>[e(S,{onSubmit:E(()=>{},["prevent"])},{default:l(()=>[oe,e(g,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(T,{modelValue:a(c),"onUpdate:modelValue":f[0]||(f[0]=d=>A(c)?c.value=d:null),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),o("div",ne,[e(b,{type:"submit"},{default:l(()=>[m(" Save Changes ")]),_:1}),e(b,{color:"secondary",variant:"outlined",type:"reset"},{default:l(()=>[m(" Reset ")]),_:1})])]),_:1})]),_:1})]),_:1}))}}),re=o("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),ie={class:"d-flex flex-column gap-y-3"},de={class:"font-weight-medium"},ue=o("p",{class:"font-weight-semibold"}," Two factor authentication is not enabled yet. ",-1),ce=o("p",null,[m(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),o("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1),me={class:"d-flex align-center flex-wrap mb-3"},pe={class:"text-h6 mb-0 me-3"},fe={class:"text-base font-weight-medium"},ye={class:"me-3"},Ve={class:"d-flex"},_e=U({__name:"AccountSettingsSecurity",setup(N){const p=_(!1),c=_(!1),n=_(!1),f=_("12345678"),d=_("87654321"),u=_("87654321"),P=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],D=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],R=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"recentActivity"}],G=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"ri-macbook-line",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"ri-android-line",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"ri-smartphone-line",color:"success"}},{browser:"Chrome on macOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"ri-mac-line",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"ri-macbook-line",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"ri-android-line",color:"success"}}];return(s,t)=>(w(),L(g,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Change Password"},{default:l(()=>[e(S,null,{default:l(()=>[e(V,null,{default:l(()=>[e(g,{class:"mb-3"},{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(f),"onUpdate:modelValue":t[0]||(t[0]=i=>A(f)?f.value=i:null),type:a(p)?"text":"password","append-inner-icon":a(p)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Current Password",placeholder:"············","onClick:appendInner":t[1]||(t[1]=i=>p.value=!a(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(d),"onUpdate:modelValue":t[2]||(t[2]=i=>A(d)?d.value=i:null),type:a(c)?"text":"password","append-inner-icon":a(c)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":t[3]||(t[3]=i=>c.value=!a(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:a(u),"onUpdate:modelValue":t[4]||(t[4]=i=>A(u)?u.value=i:null),type:a(n)?"text":"password","append-inner-icon":a(n)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"············","onClick:appendInner":t[5]||(t[5]=i=>n.value=!a(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:l(()=>[re,o("ul",ie,[(w(),M(I,null,x(P,i=>o("li",{key:i,class:"d-flex"},[o("div",null,[e(C,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),o("span",de,v(i),1)])),64))])]),_:1}),e(V,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(b,null,{default:l(()=>[m("Save changes")]),_:1}),e(b,{type:"reset",color:"secondary",variant:"outlined"},{default:l(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Two-steps verification"},{default:l(()=>[e(V,null,{default:l(()=>[ue,ce,e(b,null,{default:l(()=>[m(" Enable two-factor authentication ")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Create an API key"},{default:l(()=>[e(g,null,{default:l(()=>[e(r,{cols:"12",md:"5","order-md":"0",order:"1"},{default:l(()=>[e(V,null,{default:l(()=>[e(S,{onSubmit:E(()=>{},["prevent"])},{default:l(()=>[e(g,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(T,{label:"Choose the API key type you want to create",placeholder:"Select API key type",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(y,{label:"Name the API key",placeholder:"Name the API key"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(b,{type:"submit",block:""},{default:l(()=>[m(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(h,{title:"API Key List & Access"},{default:l(()=>[e(V,null,{default:l(()=>[m(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(V,{class:"d-flex flex-column gap-y-4"},{default:l(()=>[(w(),M(I,null,x(D,i=>o("div",{key:i.key,class:"bg-var-theme-background pa-4"},[o("div",me,[o("h6",pe,v(i.name),1),e(B,{color:"primary",size:"small"},{default:l(()=>[m(v(i.permission),1)]),_:2},1024)]),o("p",fe,[o("span",ye,v(i.key),1),e(C,{size:18,icon:"ri-file-copy-line",class:"cursor-pointer"})]),o("span",null,"Created on "+v(i.createdOn),1)])),64))]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(h,{title:"Recent Devices"},{default:l(()=>[e(W,{headers:R,items:G,"hide-default-footer":"",class:"text-no-wrap"},{"item.browser":l(({item:i})=>[o("div",Ve,[e(C,{start:"",icon:i.deviceIcon.icon,color:i.deviceIcon.color},null,8,["icon","color"]),o("span",null,v(i.browser),1)])]),bottom:l(()=>[]),_:1})]),_:1})]),_:1})]),_:1}))}}),He=U({__name:"account-settings",setup(N){const p=O(),c=_(p.params.tab),n=[{title:"Account",icon:"ri-group-line",tab:"account"},{title:"Security",icon:"ri-lock-line",tab:"security"},{title:"Notifications",icon:"ri-notification-3-line",tab:"notification"}];return(f,d)=>(w(),M("div",null,[e(H,{modelValue:a(c),"onUpdate:modelValue":d[0]||(d[0]=u=>A(c)?c.value=u:null),"show-arrows":""},{default:l(()=>[(w(),M(I,null,x(n,u=>e(K,{key:u.icon,value:u.tab},{default:l(()=>[e(C,{size:"20",start:"",icon:u.icon},null,8,["icon"]),m(" "+v(u.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(q,{modelValue:a(c),"onUpdate:modelValue":d[1]||(d[1]=u=>A(c)?c.value=u:null),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[e(z,{value:"account"},{default:l(()=>[e(le)]),_:1}),e(z,{value:"security"},{default:l(()=>[e(_e)]),_:1}),e(z,{value:"notification"},{default:l(()=>[e(se)]),_:1})]),_:1},8,["modelValue"])]))}});export{He as default};
