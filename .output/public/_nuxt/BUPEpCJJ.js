import{q as c,s as v,z as d,A as h,C as m,W as u,a7 as g,E as C,H as k,a as x,a9 as r}from"./B0PQ7Bwp.js";const y=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),f=h()({name:"VDivider",props:y(),setup(e,i){let{attrs:t}=i;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),a});return k(()=>x("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
