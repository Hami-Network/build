(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{1407:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var i,o=n(12),c=n(15),r=n(0),l=n(6),u=n(2),d=n(83),b=n(30),s=n(21),a=n(346),j=n(89),O=n(119),x=n(45),f=n(202),h=n(176),p=n(223),m=n(1),k=Object(l.e)(u.r)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.dropdownDeep}));function v(){var t=Object(s.a)().account,e=Object(b.b)().t,n=Object(x.k)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(x.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),l=Object(j.f)(null!==t&&void 0!==t?t:void 0,c),v=Object(o.a)(l,2),y=v[0],g=v[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(t){return t.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),T=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:e("Your Liquidity"),subtitle:e("Remove liquidity to receive tokens back")}),Object(m.jsxs)(k,{children:[t?A?Object(m.jsx)(u.rb,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:e("Loading")})}):(null===T||void 0===T?void 0:T.length)>0?T.map((function(t,e){return Object(m.jsx)(a.b,{pair:t,mb:e<T.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(u.rb,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(u.rb,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!A&&Object(m.jsxs)(u.I,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.rb,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(u.m,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.b,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(u.s,{style:{textAlign:"center"},children:Object(m.jsx)(u.m,{id:"join-pool-button",as:d.b,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"black"}),children:e("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=15.74c9ba1a.chunk.js.map