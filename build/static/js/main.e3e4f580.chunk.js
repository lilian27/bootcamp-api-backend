(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(17),i=n.n(r),a=(n(22),n(8)),o=n(2),u=(n(23),n(0)),s=function(t){return Object(u.jsx)("div",{children:t.counter})},j=function(t){return Object(u.jsx)("button",{onClick:t.handleClick,children:t.text})},l=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"hacer no importante":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsxs)("button",{onClick:n,children:[" ",c]})]})},d=function(t){var e=t.persona,n=t.handleDelete;return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:e.name}),Object(u.jsxs)("span",{children:[" ",e.number]}),Object(u.jsx)("button",{type:"button",onClick:n,children:" Eliminar"})]})})},b=n(4),h=n.n(b),f="https://tranquil-garden-51248.herokuapp.com/api/persons",O=function(){return h.a.get(f).then((function(t){return t.data}))},x=function(t){return h.a.post(f,t).then((function(t){return t.data}))},p=function(t,e){return h.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},m=function(t){return h.a.delete("".concat(f,"/").concat(t)).then((function(t){return t.data}))},v=function(t){var e=t.messaje,n=t.tipo,r=Object(c.useState)(null),i=Object(o.a)(r,2),a=i[0],s=i[1],j=Object(c.useState)(null),l=Object(o.a)(j,2),d=l[0],b=l[1];Object(c.useEffect)((function(){console.log("Mostrando error"),h(e,n)}),[e,n]);var h=function(t,e){s(t),b(e),setTimeout((function(){s(null)}),3e3)};if(null===e)return null;var f=1===d?"error":"process";return Object(u.jsx)("div",{className:f,children:a})},g=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(""),a=Object(o.a)(i,2),s=a[0],j=a[1],l=Object(c.useState)(""),b=Object(o.a)(l,2),h=b[0],f=b[1],g=Object(c.useState)(""),S=Object(o.a)(g,2),C=S[0],k=S[1],w=Object(c.useState)(null),N=Object(o.a)(w,2),E=N[0],y=N[1],D=Object(c.useState)(null),P=Object(o.a)(D,2),L=P[0],T=P[1];Object(c.useEffect)((function(){O().then((function(t){r(t)}))}),[]);var I,F=C.length>0?(I=C,n.filter((function(t){return t.name.toLowerCase().indexOf(I.toLowerCase())>-1}))):n,R=function(t,e){y(t),T(e),setTimeout((function(){y(null)}),3e3)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Gu\xeda telefonica"}),Object(u.jsx)(v,{messaje:E,tipo:L}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=n.filter((function(t){return t.name.toLowerCase()===s.toLowerCase()})),c={name:s,id:s,number:h};if(0===e.length)x(c).then((function(t){r(n.concat(c)),j(""),f(""),R("Persona ha sido agregada",0)})).catch((function(t){console.log("error ".concat(t)),R("Persona no puso ser agregada",1)}));else{var i=e[0].id;window.confirm("".concat(s," ya se encuentra registrado, \xbfDesea reemplazar el n\xfamero?"))&&p(i,c).then((function(t){r(n.map((function(e){return e.id!==i?e:t}))),R("N\xfamero telefonico fue actualizado!!!",0)}))}},children:[Object(u.jsxs)("div",{children:["Name: ",Object(u.jsx)("input",{value:s,onChange:function(t){j(t.target.value)}})]}),Object(u.jsxs)("div",{children:["Number: ",Object(u.jsx)("input",{value:h,onChange:function(t){f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"guardar"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsxs)("div",{children:["filter shown whith ",Object(u.jsx)("input",{value:C,onChange:function(t){k(t.target.value)}})]}),Object(u.jsx)("ul",{children:F.map((function(t){return Object(u.jsx)(d,{persona:t,handleDelete:function(){return e=t.id,void m(e).then((function(t){r(n.filter((function(t){return t.id!==e}))),R("Registro eliminado correctamente",0)})).catch((function(t){R("Un problema ha ocurrido",1)}));var e}},t.id)}))})]})]})]})},S=function(t){var e=t.pais,n=[];for(var c in console.log("detalle",e),e.languages)n.push(e.languages[c]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name.official}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Capital:"})," ",Object(u.jsx)("span",{children:e.capital})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Population:"})," ",Object(u.jsx)("span",{children:e.population})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Lenguajes"}),Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{children:t},t)}))}),e.flag,Object(u.jsx)("image",{src:e.flag,alt:"bandera",width:"8%"})]})]})},C=function(t){var e=t.pais;return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[" ",e.name.official," "]},e.name.official)})},k=function(t){var e=t.paises;return e.length>1?Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(C,{pais:t})}))})}):Object(u.jsx)(S,{pais:e[0]})},w=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),s=a[0],j=a[1];return Object(c.useEffect)((function(){if(""!==n){var t="https://restcountries.com/v3.1/name/".concat(n);h.a.get(t).then((function(t){j(t.data)})).catch((function(t){j([]),console.log("um error ha ocurrido",t)}))}}),[n]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["Find countries ",Object(u.jsx)("input",{value:n,onChange:function(t){r(t.target.value)}})," "]}),Object(u.jsxs)("p",{children:[" Se han encontrado ",s.length," resultado(s)",s.length>10?", favor ser m\xe1s especifico.":""]}),s.length>0&&s.length<10?Object(u.jsx)(k,{paises:s}):null]})},N=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Paises:"}),Object(u.jsx)(w,{})]})},E="https://tranquil-garden-51248.herokuapp.com/api/notes",y=function(){var t=h.a.get(E),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},D=function(t){return h.a.post(E,t).then((function(t){return t.data}))},P=function(t,e){return h.a.put("".concat(E,"/").concat(t),e).then((function(t){return t.data}))},L=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("em",{children:["Practice ",Object(u.jsx)("a",{href:"https://fullstackopen.com/",children:" bootcamp"})]})]})};var T=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)([]),d=Object(o.a)(i,2),b=d[0],h=d[1],f=Object(c.useState)("a new note"),O=Object(o.a)(f,2),x=O[0],p=O[1],m=Object(c.useState)(!0),S=Object(o.a)(m,2),C=S[0],k=S[1],w=Object(c.useState)(null),E=Object(o.a)(w,2),T=E[0],I=E[1],F=Object(c.useState)(null),R=Object(o.a)(F,2),z=R[0],q=R[1];Object(c.useEffect)((function(){y().then((function(t){h(t)}))}),[]),console.log("render",b.length,"notes");var B=C?b:b.filter((function(t){return!0===t.important})),J=function(t,e){I(t),q(e),setTimeout((function(){I(null)}),3e3)};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"contador",children:[Object(u.jsx)(s,{counter:n}),Object(u.jsx)(j,{handleClick:function(){return r(n+1)},text:"plus"}),Object(u.jsx)(j,{handleClick:function(){return r(0)},text:"zero"}),Object(u.jsx)(j,{handleClick:function(){return r(n-1)},text:"minus"})]}),Object(u.jsxs)("div",{id:"notas",children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(v,{messaje:T,tipo:z}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return k(!C)},children:["show ",C?"important":"all"]})}),Object(u.jsx)("ul",{children:B.map((function(t){return Object(u.jsx)(l,{note:t,toggleImportance:function(){return function(t){var e=b.find((function(e){return e.id===t})),n=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});console.log("ID::",t),console.log("changedNote::",n),P(t,n).then((function(n){console.log("RESPONSE",n),h(b.map((function(e){return e.id!==t?e:n}))),J("Note '".concat(e.content,"' ha cambiado importancia!!!"),0)})).catch((function(n){console.log("ERROR",n),h(b.filter((function(e){return e.id!==t}))),J("Nota '".concat(e.content,"' ya existe"),1)}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("button clicked",t.target);var e={content:x,date:(new Date).toISOString(),important:Math.random()<.5,id:x};D(e).then((function(t){h(b.concat(t)),p("")}))},children:[Object(u.jsx)("input",{value:x,onChange:function(t){console.log(t.target.value),p(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:" Save"})]})]}),Object(u.jsxs)("div",{id:"guia-telefonica",children:[Object(u.jsx)("hr",{}),Object(u.jsx)(g,{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(N,{})]}),Object(u.jsx)(L,{children:" "})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};i.a.render(Object(u.jsx)(T,{}),document.getElementById("root")),I()}},[[43,1,2]]]);
//# sourceMappingURL=main.e3e4f580.chunk.js.map