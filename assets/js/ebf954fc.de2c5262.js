"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3600],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"zio-saga",title:"ZIO Saga"},c=void 0,l={unversionedId:"resources/ecosystem/community/zio-saga",id:"resources/ecosystem/community/zio-saga",isDocsHomePage:!1,title:"ZIO Saga",description:"ZIO Saga is a distributed transaction manager using Saga Pattern.",source:"@site/docs/resources/ecosystem/community/zio-saga.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-saga",permalink:"/resources/ecosystem/community/zio-saga",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-saga.md",tags:[],version:"current",frontMatter:{id:"zio-saga",title:"ZIO Saga"},sidebar:"resources-sidebar",previous:{title:"ZIO Pulsar",permalink:"/resources/ecosystem/community/zio-pulsar"},next:{title:"ZIO Slick Interop",permalink:"/resources/ecosystem/community/zio-slick-interop"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/VladKopanev/zio-saga"},"ZIO Saga")," is a distributed transaction manager using Saga Pattern."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Sometimes when we are architecting the business logic using microservice architecture we need distributed transactions that are across services."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Saga Pattern")," lets us manage distributed transactions by sequencing local transactions with their corresponding compensating actions. A ",(0,o.kt)("em",{parentName:"p"},"Saga Pattern")," runs all operations. In the case of failure, it guarantees us to undo all previous works by running the compensating actions."),(0,o.kt)("p",null,"ZIO Saga allows us to compose our requests and compensating actions from the Saga pattern in one transaction with no boilerplate."),(0,o.kt)("p",null,"ZIO Saga adds a simple abstraction called ",(0,o.kt)("inlineCode",{parentName:"p"},"Saga")," that takes the responsibility of proper composition of effects and associated compensating actions."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.vladkopanev" %% "zio-saga-core" % "0.4.0"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the following example, all API requests have a compensating action. We compose all them together and then run the whole as one transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{IO, UIO, URIO, ZIO}\ndef bookHotel: UIO[Unit] = IO.unit\ndef cancelHotel: UIO[Unit] = IO.unit\n\ndef bookTaxi: IO[String, Unit] = IO.unit\ndef cancelTaxi: IO[String, Unit] = IO.unit\n\ndef bookFlight: IO[String, Unit] = IO.unit\ndef cancelFlight: IO[String, Unit] = IO.unit\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.vladkopanev.zio.saga.Saga\nimport zio.{IO, UIO, URIO, ZIO}\n\nimport com.vladkopanev.zio.saga.Saga._\n\nval transaction: Saga[Any, String, Unit] =\n  for {\n    _ <- bookHotel compensate cancelHotel\n    _ <- bookTaxi compensate cancelTaxi\n    _ <- bookFlight compensate cancelFlight\n  } yield ()\n\nval myApp: ZIO[Any, String, Unit] = transaction.transact\n")))}m.isMDXComponent=!0}}]);