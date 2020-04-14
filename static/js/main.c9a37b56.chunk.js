(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{74:function(e,t,a){e.exports=a(90)},79:function(e,t,a){},81:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(79),a(43)),i=a.n(o),u=a(55),m=a(21),s=a(58),p=a(30),d=a(24),E=(a(81),a(125)),f=a(127),b=a(122),h=Object(b.a)({root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"60px",padding:"0 60px"}}),g=function(e){var t=h();return l.a.createElement(E.a,{position:"static",classes:{root:t.root}},l.a.createElement(f.a,{variant:"h6",className:"title>"},"Where in the world?"),l.a.createElement("div",{className:"mode"},l.a.createElement(f.a,{onClick:e.handleMode},"Dark Mode")))},v=a(133),N=a(132),k=function(e){return l.a.createElement("div",{className:"search"},l.a.createElement("div",null,l.a.createElement(N.a,null)),l.a.createElement(v.a,{className:"inputBase",placeholder:"Search for a country...",onChange:e.handleInput}))},O=a(131),j=a(130),x=Object(b.a)({root:{width:"300px",border:"0"}}),y=function(e){var t=x();return l.a.createElement(O.a,{id:"filter-field",options:["Africa","Americas","Asia","Europe","Oceania"],getOptionLabel:function(e){return e},classes:{root:t.root},onInputChange:e.handleFilter,renderInput:function(e){return l.a.createElement(j.a,Object.assign({},e,{label:"Filter by Region",variant:"outlined"}))}})},C=function(e){return l.a.createElement("div",{className:"cards"},l.a.createElement(p.b,{to:"".concat(e.alpha3Code)},l.a.createElement("img",{src:e.img,alt:"Country Flag"}),l.a.createElement("div",{className:"cards-info"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,l.a.createElement("b",null,"Population:")," ",e.population),l.a.createElement("p",null,l.a.createElement("b",null,"Region:")," ",e.region),l.a.createElement("p",null,l.a.createElement("b",null,"Capital:")," ",e.capital))))},w=a(129),L=function(e){var t=e.name,a=e.flag,n=e.nativeName,r=e.population,c=e.region,o=e.subregion,i=e.capital,u=e.topLevelDomain,m=e.currencies,s=e.languages,d=e.borders;return l.a.createElement("div",{className:"cardList"},l.a.createElement(p.b,{to:"/"},l.a.createElement("button",{className:"backBtn"},"Back")),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"flag"},l.a.createElement("img",{src:a,alt:"flag",style:{maxWidth:"500px"}})),l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,t),l.a.createElement("div",{className:"stats"},l.a.createElement("p",null,l.a.createElement("b",null,"Native Name:")," ",n),l.a.createElement("p",null,l.a.createElement("b",null,"Population:")," ",r),l.a.createElement("p",null,l.a.createElement("b",null,"Region:")," ",c),l.a.createElement("p",null,l.a.createElement("b",null,"Sub Region:")," ",o),l.a.createElement("p",null,l.a.createElement("b",null,"Capital:")," ",i),l.a.createElement("p",null,l.a.createElement("b",null,"Top Level Domain:")," ",u),l.a.createElement("div",{className:"currencies"},l.a.createElement("b",null,"Currencies:")," ",m&&l.a.createElement(l.a.Fragment,null,m.map((function(e,t){return l.a.createElement("p",{key:t},e.name)})))," "),l.a.createElement("div",{className:"languages"},l.a.createElement("b",null,"Languages:")," ",s&&l.a.createElement(l.a.Fragment,null,s.map((function(e,t){return l.a.createElement("p",{key:t},e.name)}))))),l.a.createElement("div",{className:"btn-section"},l.a.createElement("p",null,l.a.createElement("b",null,"Border Countries:")),d&&l.a.createElement(l.a.Fragment,null,d.map((function(e,t){return l.a.createElement(p.b,{to:e},l.a.createElement("button",{key:t},e))})))))))},I=a(47),F=a(46),S=a.n(F),M=a(37),A=a.n(M);function B(){var e=Object(s.a)(["\nbody {\n  background-color: ",";\n  color: ",";\n}\n\n.cards, .makeStyles-root-2, .MuiAutocomplete-inputRoot {\n  background-color: ",";\n  color: ",";\n}\n\na, .MuiInputLabel-outlined, .MuiFormLabel-root.Mui-focused, .MuiInputLabel-outlined {\n  color: ",";\n}\n\n.cardList button {\n  background: ",";\n  color: ",";\n  box-shadow: 0 0 10px 0 ",";\n}\n\n.inputBase {\n  color: ",";\n}\n\n.search {\n  background-color: ",";\n  box-shadow: 0 0 10px 0 ",";\n}\n"]);return B=function(){return e},e}var D=Object(b.a)({root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"15px",padding:"0 60px"}}),R=A()("mode",{light:"hsl(0, 0%, 98%)",dark:"hsl(207, 26%, 17%)"}),J=A()("mode",{light:"hsl(0, 0%, 100%)",dark:"hsl(209, 23%, 22%)"}),T=A()("mode",{light:"hsl(200, 15%, 8%)",dark:"hsl(0, 0%, 100%)"}),P=A()("mode",{light:"hsl(0, 0%, 52%)",dark:"hsl(209, 23%, 22%)"}),W=Object(I.b)(B(),R,T,J,T,T,J,T,P,T,J,P);function q(){var e=S.a.getItem("theme");return e?JSON.parse(e):{mode:"light"}}var z=function(){var e=D(),t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),E=s[0],f=s[1],b=Object(n.useState)(""),h=Object(m.a)(b,2),v=h[0],N=h[1],O=Object(n.useState)(q),j=Object(m.a)(O,2),x=j[0],F=j[1],M="https://restcountries.eu/rest/v2/all";function A(){return(A=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(M);case 2:e.sent.json().then((function(e){return c(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){A.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){S.a.setItem("theme",JSON.stringify(x))}),[x]),l.a.createElement(I.a,{theme:x},l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null),l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(g,{handleMode:function(){F("dark"===x.mode?{mode:"light"}:{mode:"dark"})}}),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(w.a,{classes:{root:e.root}},l.a.createElement(k,{handleInput:function(e){f(e.target.value.toLowerCase())}}),l.a.createElement(y,{handleFilter:function(e){N(e.target.innerText)}})),l.a.createElement("div",{className:"cardsApp"},(v&&E?r.filter((function(e){return e.region===v})).filter((function(e){return e.name.toLowerCase().includes(E)})):v?r.filter((function(e){return e.region===v})):E?r.filter((function(e){return e.name.toLowerCase().includes(E)})):r).map((function(e){return l.a.createElement(C,{key:e.name,name:e.name,img:e.flag,population:e.population,region:e.region,capital:e.capital,alpha3Code:e.alpha3Code})})))),r&&l.a.createElement(d.a,{path:"/:infoName",render:function(e){var t=e.match;return l.a.createElement(L,r.find((function(e){return e.alpha3Code===t.params.infoName})))}}))))))};c.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c9a37b56.chunk.js.map