(this["webpackJsonpvu-ji.github.io"]=this["webpackJsonpvu-ji.github.io"]||[]).push([[0],{103:function(e,n){e.exports='# This is Markdown\n\n#### You can edit me!\n\n[Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way.\n\n  * You can have lists, like this one\n  * Make things **bold** or *italic*\n  * Embed snippets of `code`\n  * Create [links](/)\n  * ...\n\n<small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) \u2764\ufe0f</small>\n\nYou can even include custom React components if you declare them in the "overrides" option.\n\n```\n123\n```'},104:function(e,n){e.exports="# Debug\n\n\n## \u4f7f\u7528 whistle \u8fdb\u884c debug\n\n\n## \u53c2\u8003\u6587\u6863\n[whistle--\u524d\u7aef\u8c03\u8bd5\u5229\u5668](https://segmentfault.com/a/1190000016058875)"},114:function(e,n,t){},120:function(e,n,t){},123:function(e,n,t){},126:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(21),o=t.n(a),r=(t(114),t(65)),i=t(60),u=t(52),s=t(29),l=t(55),h=t(91),d=function(e){return Object(l.b)({router:Object(i.b)(e)})},j=Object(s.b)();var b,p=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,133)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))},m=t(89),O=(t(120),t(81)),f=t(129),v=t(90),x=t(15),g=t(130),k=t(12),y=g.a.SubMenu,w=f.a.Sider,C=function(e){return e.hidden?null:Object(k.jsx)(g.a.Item,{children:e.name},e.path)},S=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=[];for(var a in n){var o=n[a];if(t.startsWith(o.path)&&o.routes){c.push(o.path),c.concat(e(o.routes,t));break}}return c},T=function(){var e=Object(x.f)(),n=Object(x.g)(),t=Object(c.useState)(["/"]),a=Object(v.a)(t,2),o=a[0],r=a[1],i=Object(c.useState)([""]),u=Object(v.a)(i,2),s=u[0],l=u[1],h=X[0].routes;return Object(c.useEffect)((function(){r([n.pathname]),l(S(h,n.pathname))}),[n,h]),Object(k.jsx)(w,{className:"site-layout-background",children:Object(k.jsx)(g.a,{onClick:function(n){e.push(n.key)},onOpenChange:function(e){l([e.pop()])},openKeys:s,selectedKeys:o,mode:"inline",children:h.map((function(e){return e.routes?(n=e).hidden?null:Object(k.jsx)(y,{title:n.name,children:n.routes.map((function(e){return C(e)}))},n.path):C(e);var n}))})})},F=(t(123),O.a.Title),M=f.a.Header,N=f.a.Content,P=function(e){return Object(k.jsxs)(f.a,{className:"site-layout",children:[Object(k.jsx)(M,{className:"site-layout_header site-layout-background",children:Object(k.jsx)(F,{level:3,children:"vu-ji"})}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(T,{}),Object(k.jsx)(N,{className:"site-layout_content",children:e.children})]})]})},L=function(e){var n=e.route;return Object(k.jsx)(P,{children:Object(u.a)(n.routes)})},R=function(e){var n=e.route;return Object(u.a)(n.routes)},D=t(57),E=t(100),I=t(101),Y=t(108),B=t(105),J=function(e){return function(n){Object(Y.a)(c,n);var t=Object(B.a)(c);function c(e){var n;return Object(E.a)(this,c),(n=t.call(this,e)).state={component:null},n}return Object(I.a)(c,[{key:"componentDidMount",value:function(){var n=this;e().then((function(e){n.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(k.jsx)(e,Object(D.a)({},this.props)):null}}]),c}(c.Component)},K=[{path:"/react",name:"React",component:R,routes:[{path:"/react/redux",exact:!0,name:"Redux",component:J((function(){return t.e(3).then(t.bind(null,134))}))},{path:"/react/router",name:"Router",exact:!0,component:J((function(){return t.e(4).then(t.bind(null,135))}))}]}],_=t(59),H=function(){return Object(k.jsxs)("div",{children:["\u9875\u9762\u627e\u4e0d\u5230\u5566\u3002",Object(k.jsx)(_.a,{to:"/",children:"\u8fd4\u56de\u9996\u9875"})]})},W=t(68),q=t(103),z=t.n(q),A=function(){return Object(k.jsx)(W.a,{children:z.a})},G=t(104),Q=t.n(G),U=[{path:"/others",name:"\u5176\u4ed6",component:R,routes:[{path:"/others/packings",name:"\u6253\u5305\u5bf9\u6bd4",component:A},{path:"/others/debug",name:"\u524d\u7aef\u8c03\u8bd5",component:function(){return Object(k.jsx)(W.a,{children:Q.a})}}]},{path:"*",name:"\u5176\u4ed6",hidden:!0,component:H}],V=O.a.Title,X=[{component:L,routes:[{path:"/",name:"\u9996\u9875",exact:!0,component:function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(V,{level:2,children:"\u9996\u9875\u5185\u5bb9"})})}}].concat(Object(m.a)(K),Object(m.a)(U))}],Z=Object(l.d)(d(j),b,Object(l.c)(Object(l.a)(Object(h.a)(j))));o.a.render(Object(k.jsx)(r.a,{store:Z,children:Object(k.jsxs)(i.a,{history:j,children:[" ",Object(u.a)(X)]})}),document.getElementById("root")),p(console.log)},68:function(e,n,t){"use strict";var c=t(78),a=t(57),o=(t(0),t(102)),r=t(109),i=t(81),u=t(59),s=(t(126),t(12)),l=r.a.Panel,h=i.a.Title,d=i.a.Paragraph,j=i.a.Text,b={options:{overrides:Object(a.a)(Object(a.a)(Object(a.a)({Collapse:r.a,Panel:l,Link:u.a},[1,2,3,4,5,6].reduce((function(e,n){return e["h".concat(n)]={component:h,props:{level:n}},e}),{})),["disabled","mark","code","keyboard","underline","delete","strong"].reduce((function(e,n){return e[n]={component:j,props:Object(c.a)({},n,!0)},e}),{})),{},{p:d,span:j,a:i.a.Link})},children:""};n.a=function(e){var n=Object.assign({},b,e);return Object(s.jsx)("div",{className:"my-markdown-container",children:Object(s.jsx)(o.a,{options:n.options,children:n.children})})}}},[[127,1,2]]]);
//# sourceMappingURL=main.85d35389.chunk.js.map