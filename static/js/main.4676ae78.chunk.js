(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),i=(n(11),n(2)),o=n.n(i),l=n(4),u=n(3),j=(n(13),"https://pokeapi.co/api/v2"),m="pokemon",d=function(e){return fetch("".concat(j,"/").concat(m,"/?limit=").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},p=function(e){return fetch("".concat(j,"/").concat(m,"/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},b=n(0),f=function(){return Object(b.jsx)(b.Fragment,{})},h=(n(15),function(e){var t=e.details,n=e.setClose;return console.log(t),Object(b.jsx)(b.Fragment,{children:t&&Object(b.jsxs)("button",{className:"Details",onClick:function(){return n(null)},type:"button",children:[Object(b.jsx)("div",{className:"Details_container",children:Object(b.jsx)("img",{src:t.sprites.other["official-artwork"].front_default,alt:t.name})}),Object(b.jsxs)("div",{className:"Details_bottom",children:[Object(b.jsx)("h2",{className:"Details_title",children:"".concat(t.name," #").concat(t.id.toString().padStart(3,"0"))}),Object(b.jsxs)("ul",{className:"Details_list",children:[t.types.map((function(e){return Object(b.jsxs)("li",{className:"Details_item",children:["Type",Object(b.jsx)("span",{className:"Details_value",children:e.type.name})]},e.type.name)})),t.stats.map((function(e){return Object(b.jsxs)("li",{className:"Details_item",children:[e.stat.name,Object(b.jsx)("span",{className:"Details_value",children:e.base_stat})]},e.stat.name)})),Object(b.jsxs)("li",{className:"Details_item",children:["weight",Object(b.jsx)("span",{className:"Details_value",children:t.weight})]},"weight"),Object(b.jsxs)("li",{className:"Details_item",children:["Total moves",Object(b.jsx)("span",{className:"Details_value",children:t.moves.length})]},"moves")]})]})]},null===t||void 0===t?void 0:t.id)})}),O=(n(16),function(e){var t=e.pokemon,n=Object(c.useState)(null),s=Object(u.a)(n,2),a=s[0],r=s[1],i=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.name);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(b.jsx)(b.Fragment,{children:a&&Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"Card",children:[Object(b.jsx)("div",{className:"Card_div",children:Object(b.jsx)("img",{src:a.sprites.other["official-artwork"].front_default,alt:a.name,className:"Card_img"})}),Object(b.jsxs)("div",{className:"Card_bottom",children:[Object(b.jsx)("h2",{className:"Card_title",children:a.name}),Object(b.jsx)("div",{className:"Card_buttons",children:a.types.map((function(e){return Object(b.jsx)("div",{className:"Card_types",children:e.type.name},e.type.name)}))})]})]})},a.id)})}),x=(n(17),function(e){var t=e.onSelectName,n=e.pokemons;return Object(b.jsx)("ul",{className:"App_list",children:n.map((function(e){return Object(b.jsx)("button",{className:"btn",type:"button",onClick:function(){return t(e.name)},children:Object(b.jsx)(O,{pokemon:e},e.name)},e.name)}))})}),v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(12),r=Object(u.a)(a,2),i=r[0],j=r[1],m=Object(c.useState)(null),O=Object(u.a)(m,2),v=O[0],N=O[1],_=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(i);case 2:t=e.sent,s(t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,N(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){_()}),[i]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"App_header",children:[Object(b.jsx)("h1",{className:"App_title",children:"Pokedex"}),Object(b.jsx)(f,{})]}),Object(b.jsxs)("div",{className:"App_main",children:[Object(b.jsx)(x,{onSelectName:function(e){k(e)},pokemons:n}),Object(b.jsx)("button",{type:"button",className:"App_more",onClick:function(){return j((function(e){return e+12}))},children:"Load More"})]}),Object(b.jsx)("div",{className:"App_sidebar",children:v&&Object(b.jsx)(h,{setClose:N,details:v})})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4676ae78.chunk.js.map