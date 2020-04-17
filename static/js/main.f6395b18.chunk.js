(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{76:function(e,t,a){e.exports=a(92)},81:function(e,t,a){},83:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(81),a(45)),i=a.n(o),u=a(57),m=a(20),s=a(60),p=a(31),d=a(25),E=(a(83),a(127)),f=a(129),b=a(135),h=a(124),g=Object(h.a)({root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"60px",padding:"0 60px"}}),v=function(e){var t=g();return r.a.createElement(E.a,{position:"static",classes:{root:t.root}},r.a.createElement(f.a,{variant:"h6",className:"title>"},"Where in the world?"),r.a.createElement("div",{className:"mode"},r.a.createElement(b.a,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"},onClick:e.handleMode}),r.a.createElement(f.a,null,"dark"===e.text?"Light":"Dark"," Mode")))},k=a(137),N=a(136),x=function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("div",null,r.a.createElement(N.a,null)),r.a.createElement(k.a,{className:"inputBase",placeholder:"Search for a country...",onChange:e.handleInput}))},C=a(134),O=a(133),j=Object(h.a)({root:{width:"300px",border:"0"}}),y=function(e){var t=j();return r.a.createElement(C.a,{id:"filter-field",options:["Africa","Americas","Asia","Europe","Oceania"],getOptionLabel:function(e){return e},classes:{root:t.root},onInputChange:e.handleFilter,renderInput:function(e){return r.a.createElement(O.a,Object.assign({},e,{label:"Filter by Region",variant:"outlined"}))}})},w=function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement(p.b,{to:"/Rest-Countries/".concat(e.alpha3Code)},r.a.createElement("img",{src:e.img,alt:"Country Flag"}),r.a.createElement("div",{className:"cards-info"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,r.a.createElement("b",null,"Population:")," ",e.population),r.a.createElement("p",null,r.a.createElement("b",null,"Region:")," ",e.region),r.a.createElement("p",null,r.a.createElement("b",null,"Capital:")," ",e.capital))))},I=a(132),L=function(e){var t=e.name,a=e.flag,n=e.nativeName,l=e.population,c=e.region,o=e.subregion,i=e.capital,u=e.topLevelDomain,m=e.currencies,s=e.languages,d=e.borders;return r.a.createElement("div",{className:"cardList"},r.a.createElement(p.b,{to:"/Rest-Countries"},r.a.createElement("button",{className:"backBtn"},"Back")),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"flag"},r.a.createElement("img",{src:a,alt:"flag",style:{maxWidth:"500px"}})),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"stats"},r.a.createElement("p",null,r.a.createElement("b",null,"Native Name:")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"Population:")," ",l),r.a.createElement("p",null,r.a.createElement("b",null,"Region:")," ",c),r.a.createElement("p",null,r.a.createElement("b",null,"Sub Region:")," ",o),r.a.createElement("p",null,r.a.createElement("b",null,"Capital:")," ",i),r.a.createElement("p",null,r.a.createElement("b",null,"Top Level Domain:")," ",u),r.a.createElement("div",{className:"currencies"},r.a.createElement("b",null,"Currencies:")," ",m&&r.a.createElement(r.a.Fragment,null,m.map((function(e,t){return r.a.createElement("p",{key:t},e.name)})))," "),r.a.createElement("div",{className:"languages"},r.a.createElement("b",null,"Languages:")," ",s&&r.a.createElement(r.a.Fragment,null,s.map((function(e,t){return r.a.createElement("p",{key:t},e.name)}))))),r.a.createElement("div",{className:"btn-section"},r.a.createElement("p",null,r.a.createElement("b",null,"Border Countries:")),d&&r.a.createElement(r.a.Fragment,null,d.map((function(e,t){return r.a.createElement(p.b,{to:e},r.a.createElement("button",{key:t},e))})))))))},M=a(49),F=a(48),B=a.n(F),R=a(38),S=a.n(R);function A(){var e=Object(s.a)(["\nbody {\n  background-color: ",";\n  color: ",";\n}\n\n.cards, .MuiAppBar-colorPrimary{\n  background-color: ",";\n  color: ",";\n}\n\na, .MuiInputLabel-outlined, .MuiFormLabel-root.Mui-focused, .MuiInputLabel-outlined {\n  color: ",";\n}\n\n.cardList button {\n  background: ",";\n  color: ",";\n  box-shadow: 0 0 10px 0 ",";\n}\n\n.MuiIconButton-label, .MuiInputBase-input {\n  color: ",";\n}\n\n\n.search {\n  background-color: ",";\n  box-shadow: 0 0 10px 0 ",";\n}\n"]);return A=function(){return e},e}var D=Object(h.a)({root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"15px",padding:"0 60px"}}),J=S()("mode",{light:"hsl(0, 0%, 98%)",dark:"hsl(207, 26%, 17%)"}),P=S()("mode",{light:"hsl(0, 0%, 100%)",dark:"hsl(209, 23%, 22%)"}),T=S()("mode",{light:"hsl(200, 15%, 8%)",dark:"hsl(0, 0%, 100%)"}),W=S()("mode",{light:"hsl(0, 0%, 52%)",dark:"hsl(209, 23%, 22%)"}),q=Object(M.b)(A(),J,T,P,T,T,P,T,W,T,P,W);function z(){var e=B.a.getItem("theme");return e?JSON.parse(e):{mode:"light"}}var G=function(){var e=D(),t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),E=s[0],f=s[1],b=Object(n.useState)(""),h=Object(m.a)(b,2),g=h[0],k=h[1],N=Object(n.useState)(z),C=Object(m.a)(N,2),O=C[0],j=C[1],F="https://restcountries.eu/rest/v2/all";function R(){return(R=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:e.sent.json().then((function(e){return c(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){B.a.setItem("theme",JSON.stringify(O))}),[O]),r.a.createElement(M.a,{theme:O},r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,{handleMode:function(){j("dark"===O.mode?{mode:"light"}:{mode:"dark"})},text:O.mode}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/Rest-Countries/"},r.a.createElement(I.a,{classes:{root:e.root}},r.a.createElement(x,{handleInput:function(e){f(e.target.value.toLowerCase())}}),r.a.createElement(y,{handleFilter:function(e){k(e.target.innerText)}})),r.a.createElement("div",{className:"cardsApp"},(g&&E?l.filter((function(e){return e.region===g})).filter((function(e){return e.name.toLowerCase().includes(E)})):g?l.filter((function(e){return e.region===g})):E?l.filter((function(e){return e.name.toLowerCase().includes(E)})):l).map((function(e){return r.a.createElement(w,{key:e.name,name:e.name,img:e.flag,population:e.population,region:e.region,capital:e.capital,alpha3Code:e.alpha3Code})})))),l&&r.a.createElement(d.a,{path:"/Rest-Countries/:infoName",render:function(e){var t=e.match;return r.a.createElement(L,l.find((function(e){return e.alpha3Code===t.params.infoName})))}}))))))};c.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f6395b18.chunk.js.map