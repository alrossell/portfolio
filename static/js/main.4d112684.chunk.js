(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},454:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),r=n(21),s=n.n(r),a=(n(145),n(140)),o=n(31),l=(n(146),n(2));function d(e){return Object(l.jsx)("div",{id:"nav-bar",children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",className:"header-trans header-left-bar",onClick:function(){return e.setStarColor([1,1,1])},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"header-bar-wrapper",children:"|"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/about",className:"header-trans header-left-bar",onClick:function(){return e.setStarColor([1,5,1])},children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"header-bar-wrapper",children:"|"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/projects",className:"header-trans",onClick:function(){return e.setStarColor([1,1,5])},children:"Projects"})})]})})})}n(155);function j(){return Object(l.jsxs)("div",{id:"About",children:[Object(l.jsx)("h1",{children:"About Me"}),Object(l.jsx)("p",{children:"test test test test test"})]})}n(156);function h(){return Object(l.jsxs)("div",{id:"Home",children:[Object(l.jsx)("h1",{children:"Weclome to my Website"}),Object(l.jsx)("p",{children:"Please explore around. The website is built using React."})]})}n(157),n(158);function b(e){return Object(l.jsxs)("a",{className:"project-card",children:[Object(l.jsx)("h4",{className:"project-card-title",children:e.title}),Object(l.jsx)("p",{className:"project-card-description",children:e.description}),Object(l.jsx)("h6",{className:"project-card-tags",children:e.tags})]})}function u(){var e=[{title:"things1",description:"lfj dlskldj fkjash fdkjhfklja hldk hfaij hdklj hdklj hfk",tags:"kl;jkl;"},{title:"things2",description:"lfj dlskldj hdklj hdklj hfk",tags:"kl;a d as da s  djkl;"},{title:"things3",description:"lfj dlskldj fkjash dsa ds aedasd a dasdasd as s  da s hldk hfaij hdklj hdklj hfk",tags:"kl;jasd kl;"}].map((function(e){return Object(l.jsx)(b,{title:e.title,description:e.description,tags:e.tags})}));return console.log(e),Object(l.jsxs)("div",{id:"Projects",children:[Object(l.jsx)("h1",{children:"Projects"}),e]})}n(159),n(454);var f=n.p+"static/media/selfie.b55b673b.jpg",O=n(139),x=n(89);function p(e){return Object(l.jsx)("div",{id:"left-panel",children:Object(l.jsxs)("div",{id:"left-panel-wrapper",children:[Object(l.jsx)("img",{id:"portrait",src:f}),Object(l.jsx)("h3",{children:"Hello,"}),Object(l.jsx)("h2",{children:"My Name is:"}),Object(l.jsx)("h1",{children:"Andrew Rossell"}),Object(l.jsx)("p",{children:"I'm a senior at Loyola Marymount University, majoring in Computer science and minoring in applied math."}),Object(l.jsx)(O.a,{className:"icon",onClick:function(){return window.open("mailto:alrossell@gmail.com","_blank")}}),Object(l.jsx)(x.b,{className:"icon",onClick:function(){return window.open("https://www.linkedin.com/in/andrew-rossell-18094a193","_blank")}}),Object(l.jsx)(x.a,{className:"icon",onClick:function(){return window.open("https://github.com/alrossell","_blank")}})]})})}var m=n(5);n(457);function g(){return Object(l.jsx)("div",{id:"right-panel",children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/about",children:Object(l.jsx)(j,{})}),Object(l.jsx)(m.a,{path:"/projects",children:Object(l.jsx)(u,{})}),Object(l.jsx)(m.a,{path:"/",children:Object(l.jsx)(h,{})})]})})}var k=n(141),v=function(e){var t;function n(){t.width=window.innerWidth,t.height=window.innerHeight}var i=Object(c.useRef)(null),r=e.stars,s=e.starColor,a=function(e,t,n,c,i,r){var s=255*c,a="rgb("+s/i[0]+","+s/i[1]+","+s/i[2]+")";e.beginPath(),e.arc(t,n,r,0,2*Math.PI,!1),e.fillStyle=a,e.fill()},o=function(e,t,n){!function(e,t){for(var n=r.length,c=0;c<n;c++){var i=r[c].cord;for(i.z-=t;i.z<=1;)i.z+=1e3,r[c].color=[5*Math.random()+1,5*Math.random()+1,5*Math.random()+1],r[c].color=s}}(0,1.5),function(e,t){e.clearRect(0,0,t.width,t.height)}(e,t);for(var c=document.getElementById("portrait"),i=c.getBoundingClientRect().right-c.getBoundingClientRect().width/2,o=c.getBoundingClientRect().bottom-c.getBoundingClientRect().height/2,l=r.length,d=0;d<l;d++){var j=r[d].cord,h=i+j.x/(.001*j.z),b=o+j.y/(.001*j.z);if(!(h<0||h>=t.width||b<0||b>=t.height)){var u=j.z/1e3;a(e,h,b,1-u*u,r[d].color,r[d].size)}}};return window.onresize=function(){n()},Object(c.useEffect)((function(){var e=(t=i.current).getContext("2d");n();var c;return function n(){o(e,t),c=window.requestAnimationFrame(n)}(),function(){window.cancelAnimationFrame(c)}}),[o]),Object(l.jsx)("canvas",Object(k.a)({ref:i},e))};n(458);function w(e){var t=Object(c.useState)([1,1,1]),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"main-display-1",children:[Object(l.jsx)(v,{id:"canvas-display",stars:e.stars,starColor:i}),Object(l.jsxs)("div",{id:"main-display-2",children:[Object(l.jsx)(d,{setStarColor:r}),Object(l.jsx)(p,{}),Object(l.jsx)(g,{})]})]})})}console.log("hello");s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(w,{stars:function(e){for(var t=[],n=0;n<e;n++)t[n]={size:1.5*Math.random(),color:[1,1,1],cord:{x:2600*Math.random()-800,y:1900*Math.random()-450,z:1e3*Math.random()}};return t}(15e3)})}),document.getElementById("root"))}},[[459,1,2]]]);
//# sourceMappingURL=main.4d112684.chunk.js.map