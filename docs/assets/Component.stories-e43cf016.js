import{a as d}from"./jsx-runtime-670450c2.js";import{r as C}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function e({initialCount:n=0}){const[p,m]=C.useState(n);return d("button",{onClick:()=>m(l=>l+1),children:["Count: ",p]})}try{e.displayName="Component",e.__docgenInfo={description:"",displayName:"Component",props:{initialCount:{defaultValue:{value:"0"},description:"",name:"initialCount",required:!1,type:{name:"number"}}}}}catch{}const y={title:"Demo/Component",component:e,tags:["autodocs"],argTypes:{initialCount:{control:"number"}}},t={args:{initialCount:0}},o={args:{initialCount:42}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    initialCount: 0
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    initialCount: 42
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const h=["Default","WithInitialCount"];export{t as Default,o as WithInitialCount,h as __namedExportsOrder,y as default};
//# sourceMappingURL=Component.stories-e43cf016.js.map
