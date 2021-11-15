"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6241],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6257:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"from-cats-efect",title:"How to Migrate from Cats Effect to ZIO?"},p=void 0,c={unversionedId:"howto/migrate/from-cats-efect",id:"version-1.x/howto/migrate/from-cats-efect",isDocsHomePage:!1,title:"How to Migrate from Cats Effect to ZIO?",description:"Cats IO[A] can be easily replaced with ZIO's Task[A] (an alias for ZIO[Any, Throwable, A]).",source:"@site/versioned_docs/version-1.x/howto/migrate/from-cats-efect.md",sourceDirName:"howto/migrate",slug:"/howto/migrate/from-cats-efect",permalink:"/version-1.x/howto/migrate/from-cats-efect",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/howto/migrate/from-cats-efect.md",tags:[],version:"1.x",frontMatter:{id:"from-cats-efect",title:"How to Migrate from Cats Effect to ZIO?"}},d=[{value:"Methods on cats.FlatMap.Ops",id:"methods-on-catsflatmapops",children:[],level:3},{value:"TODO",id:"todo",children:[],level:3}],m={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cats ",(0,o.kt)("inlineCode",{parentName:"p"},"IO[A]")," can be easily replaced with ZIO's ",(0,o.kt)("inlineCode",{parentName:"p"},"Task[A]")," (an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Throwable, A]"),").\nTranslation should be relatively straightfoward. Below, you'll find tables showing the ZIO equivalents of\nvarious ",(0,o.kt)("inlineCode",{parentName:"p"},"cats.*"),"'s methods."),(0,o.kt)("h3",{id:"methods-on-catsflatmapops"},"Methods on cats.FlatMap.Ops"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"cats"),(0,o.kt)("th",{parentName:"tr",align:null},"ZIO"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"flatMap")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"flatMap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"flatten")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"flatten"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"productREval")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"zipRight"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"productLEval")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"zipLeft"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mproduct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"zipPar"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"flatTap")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tap"))))),(0,o.kt)("h3",{id:"todo"},"TODO"),(0,o.kt)("p",null,"TODO"))}s.isMDXComponent=!0}}]);