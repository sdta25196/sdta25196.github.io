(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[2],{46:function(t,e,a){t.exports={articleItem:"sass_articleItem__3nMwX",title:"sass_title__1zmJx"}},70:function(t,e,a){"use strict";a.r(e);var c=a(32),s=a(0),n=a(31),i=a(46),l=a.n(i),r=a(34),o=a.n(r),b=a(3);e.default=function(t){var e=t.history,a=t.location.pathname,i=Object(s.useState)([]),r=Object(c.a)(i,2),u=r[0],h=r[1],j=Object(s.useState)(n.b.article),d=Object(c.a)(j,2),p=d[0],f=d[1];return Object(s.useEffect)((function(){switch(a){case"/know":h(n.d),f(n.b.know);break;case"/translate":h(n.e),f(n.b.translate);break;default:h(n.a),f(n.b.article)}}),[a]),Object(b.jsx)("section",{children:u.map((function(t){return Object(b.jsxs)("article",{className:l.a.articleItem,onClick:function(){e.push("/detail/".concat(p,"/").concat(t.hash))},children:[Object(b.jsx)("div",{className:l.a.title,children:t.title}),Object(b.jsx)("div",{className:l.a.descript,dangerouslySetInnerHTML:{__html:o()(t.description.replaceAll("@@@","\r\n"))}})]},t.hash)}))})}}}]);
//# sourceMappingURL=2.eae8b696.chunk.js.map