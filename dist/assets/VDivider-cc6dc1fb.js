import{a1 as c,a8 as v,ac as d,aA as h,ai as m,af as u,H as g,bh as i,a5 as C,n as f}from"./index-d66bea31.js";const b=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:l,textColorStyles:n}=m(u(e,"color")),o=g(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),a});return C(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,l.value,e.class],style:[o.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{b as V};
