(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),s=t.n(a),i=(t(10),t(11),t(3)),d=t(2),j=(t(12),t(0)),u=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,r=c.disabled;return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:n?"flipped":"",children:[Object(j.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(j.jsx)("img",{className:"back",src:"/img/cover.jpg",onClick:function(){r||t(e)},alt:"card back"})]})})},o=[{src:"/img/card1.jpg",matched:!1},{src:"/img/card2.jpg",matched:!1},{src:"/img/card3.jpg",matched:!1},{src:"/img/card4.jpg",matched:!1},{src:"/img/card5.jpg",matched:!1},{src:"/img/card6.jpg",matched:!1}],l=function(){var c=Object(n.useState)([]),e=Object(d.a)(c,2),t=e[0],r=e[1],a=Object(n.useState)(0),s=Object(d.a)(a,2),l=s[0],m=s[1],b=Object(n.useState)(null),O=Object(d.a)(b,2),f=O[0],h=O[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),x=g[0],v=g[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),S=k[0],C=k[1],M=function(){var c=[].concat(o,o).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));h(null),v(null),r(c),m(0)},w=function(c){f?v(c):h(c)};Object(n.useEffect)((function(){f&&x&&(C(!0),f.src===x.src?(r((function(c){return c.map((function(c){return c.src===f.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[f,x]);var y=function(){h(null),v(null),m((function(c){return c+1})),C(!1)};return Object(n.useEffect)((function(){M()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:M,children:"New Game"}),Object(j.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(j.jsx)(u,{card:c,handleChoice:w,flipped:c===f||c===x||c.matched,disabled:S},c.id)}))}),Object(j.jsxs)("p",{children:["Turns: ",l]})]})};var m=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Memo Dogs"}),Object(j.jsx)(l,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.057c3d3c.chunk.js.map