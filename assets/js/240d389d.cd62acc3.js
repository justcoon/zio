"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3177],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"console",title:"Console"},p=void 0,s={unversionedId:"datatypes/contextual/services/console",id:"datatypes/contextual/services/console",isDocsHomePage:!1,title:"Console",description:"The Console service contains simple I/O operations for reading/writing strings from/to the standard input, output, and error console.",source:"@site/docs/datatypes/contextual/services/console.md",sourceDirName:"datatypes/contextual/services",slug:"/datatypes/contextual/services/console",permalink:"/next/datatypes/contextual/services/console",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/services/console.md",tags:[],version:"current",frontMatter:{id:"console",title:"Console"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/contextual/services/index"},next:{title:"Clock",permalink:"/next/datatypes/contextual/services/clock"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Console service contains simple I/O operations for reading/writing strings from/to the standard input, output, and error console."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"print")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"printError")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"printLine")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"printLineError")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"readLine")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ZIO[Console, IOException, String]"))))),(0,o.kt)("p",null,"All functions of the Console service are effectful, this means they are just descriptions of reading/writing from/to the console. "),(0,o.kt)("p",null,"As ZIO data type support monadic operations, we can compose these functions with for-comprehension which helps us to write our program pretty much like an imperative program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\n\nimport zio._\nimport zio.Console._\n\nobject MyHelloApp extends ZIOAppDefault {\n  val program: ZIO[Has[Console], IOException, Unit] = for {\n    _ <- printLine("Hello, what is you name?")\n    name <- readLine\n    _ <- printLine(s"Hello $name, welcome to ZIO!")\n  } yield ()\n\n  def run = program\n}\n')),(0,o.kt)("p",null,"Note again, every line of our ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," are descriptions, not statements. As we can see the type of our ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Has[Console], IOException, Unit]"),", it means to run ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," we need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," service as an environment, it may fail due to failure of ",(0,o.kt)("inlineCode",{parentName:"p"},"readLine")," and it will produce ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," value."))}d.isMDXComponent=!0}}]);