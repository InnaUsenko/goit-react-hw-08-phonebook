"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{3917:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(2791),a=t(9439),i="ContactForm_form__dhl+T",s="ContactForm_btn__wll+u",o=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},u=t(9434),c=t(6052),l=t(184),m=function(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.contacts.items})),t=(0,r.useState)(""),m=(0,a.Z)(t,2),d=m[0],f=m[1],h=(0,r.useState)(""),x=(0,a.Z)(h,2),b=x[0],j=x[1],v=function(e){var n=e.target.name,t=e.target.value;"name"===n&&f(t),"number"===n&&j(t)},p=function(){f(""),j("")},_=function(t){if(n.map((function(e){return e.name.toLowerCase()})).includes(t.name.toLowerCase()))window.alert("The name "+t.name+" already exists");else{var r={id:o(),name:t.name,number:t.number};e((0,c.uK)(r))}};return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),_({name:d,number:b}),p()},children:[(0,l.jsx)("label",{htmlFor:"name",children:"Name"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{id:"name",type:"text",name:"name",value:d,onChange:v,required:!0}),(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:"number",children:"Number"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{id:"number",type:"tel",name:"number",value:b,onChange:v,required:!0}),(0,l.jsx)("br",{}),(0,l.jsx)("button",{className:s,type:"submit",children:"Add contact"})]})})},d="ContactFilter_form__RBCmO",f="ContactFilter_inp__IHR1Z",h=t(3165),x=function(){var e=(0,u.I0)();return(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{id:"filter",className:f,type:"text",name:"filter",onChange:function(n){e((0,h.T)(n.target.value.toLowerCase()))},required:!0})]})},b="ContactList_btn__6Piat",j=function(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.contacts.items})),t=(0,u.v9)((function(e){return e.filters}));return(0,l.jsx)("ul",{children:n.filter((function(e){var n=e.name.substr(0,t.length);return t.toLowerCase()===n.toLowerCase()})).map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("span",{style:{display:"line-block",marginRight:16},children:[n.name,": ",n.number]}),(0,l.jsx)("button",{id:n.id,onClick:function(){return e((0,c._f)(n.id))},className:b,children:"Delete"})]},n.id)}))})},v=t(4270);function p(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.contacts})),t=n.isLoading,a=n.error;return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,l.jsxs)("div",{style:{width:400,marginLeft:"8px"},children:[(0,l.jsx)(v.q,{children:(0,l.jsx)("title",{children:"Your contacts"})}),(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(m,{}),(0,l.jsx)("h2",{children:"Contacts"}),t&&(0,l.jsx)("b",{children:"Loading tasks..."}),a&&(0,l.jsx)("b",{children:a}),(0,l.jsx)(x,{}),(0,l.jsx)(j,{})]})}}}]);
//# sourceMappingURL=917.18210be1.chunk.js.map