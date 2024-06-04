(()=>{"use strict";var n={655:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(64),t=e.n(o),a=e(696),c=e.n(a)()(t());c.push([n.id,".carousel {\n  width: fit-content;\n}\n\n.carousel__frame {\n  position: relative;\n}\n\n.carousel img,\n.carousel__inner-container {\n  width: 400px;\n  height: 250px;\n}\n\n.carousel__inner-container {\n  overflow: hidden;\n  display: flex;\n}\n\n.carousel__inner-container img {\n  flex-shrink: 0;\n}\n\n.carousel__left-nav,\n.carousel__right-nav {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 6%;\n  background-color: rgba(255, 255, 255, 0.8);\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.carousel__left-nav:hover,\n.carousel__right-nav:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.carousel__left-nav:active,\n.carousel__right-nav:active {\n  background-color: rgba(189, 189, 189, 0.9);\n}\n\n.carousel__left-nav {\n  left: 0;\n}\n\n.carousel__right-nav {\n  right: 0;\n}\n\n.carousel__slide-nav {\n  display: flex;\n  justify-content: center;\n  gap: 2px;\n  padding: 4px;\n}\n\n.carousel__slide-nav button {\n  width: 20px;\n  height: 20px;\n  background-color: rgb(238, 238, 238);\n  border: 2px black solid;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.carousel__slide-nav button:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n.carousel__slide-nav button:active {\n  background-color: rgb(196, 196, 196);\n}\n\n.carousel__slide-nav button.current {\n  background-color: black;\n  cursor: default;\n}\n","",{version:3,sources:["webpack://./src/carousel.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,SAAS;EACT,0CAA0C;EAC1C,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB",sourcesContent:[".carousel {\r\n  width: fit-content;\r\n}\r\n\r\n.carousel__frame {\r\n  position: relative;\r\n}\r\n\r\n.carousel img,\r\n.carousel__inner-container {\r\n  width: 400px;\r\n  height: 250px;\r\n}\r\n\r\n.carousel__inner-container {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.carousel__inner-container img {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.carousel__left-nav,\r\n.carousel__right-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 6%;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: none;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.carousel__left-nav:hover,\r\n.carousel__right-nav:hover {\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.carousel__left-nav:active,\r\n.carousel__right-nav:active {\r\n  background-color: rgba(189, 189, 189, 0.9);\r\n}\r\n\r\n.carousel__left-nav {\r\n  left: 0;\r\n}\r\n\r\n.carousel__right-nav {\r\n  right: 0;\r\n}\r\n\r\n.carousel__slide-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2px;\r\n  padding: 4px;\r\n}\r\n\r\n.carousel__slide-nav button {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: rgb(238, 238, 238);\r\n  border: 2px black solid;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.carousel__slide-nav button:hover {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.carousel__slide-nav button:active {\r\n  background-color: rgb(196, 196, 196);\r\n}\r\n\r\n.carousel__slide-nav button.current {\r\n  background-color: black;\r\n  cursor: default;\r\n}\r\n"],sourceRoot:""}]);const i=c},726:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(64),t=e.n(o),a=e(696),c=e.n(a)()(t());c.push([n.id,".dropdown button {\n  border: none;\n  background-color: rgb(196, 151, 238);\n  padding: 10px 20px;\n}\n\n.dropdownbutton:hover {\n  background-color: rgb(208, 172, 241);\n}\n\n.dropdown button:active {\n  background-color: rgb(177, 131, 219);\n}\n\n.dropdown__content button {\n  background-color: rgb(161, 122, 197);\n}\n\n.dropdown__content button:hover {\n  background-color: rgb(177, 137, 214);\n}\n\n.dropdown__content button:active {\n  background-color: rgb(133, 93, 170);\n}\n\n.hidden {\n  display: none !important;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown__content {\n  position: absolute;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  z-index: 1;\n}\n","",{version:3,sources:["webpack://./src/dropdown.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ",sourcesContent:[".dropdown button {\r\n  border: none;\r\n  background-color: rgb(196, 151, 238);\r\n  padding: 10px 20px;\r\n}\r\n\r\n.dropdownbutton:hover {\r\n  background-color: rgb(208, 172, 241);\r\n}\r\n\r\n.dropdown button:active {\r\n  background-color: rgb(177, 131, 219);\r\n}\r\n\r\n.dropdown__content button {\r\n  background-color: rgb(161, 122, 197);\r\n}\r\n\r\n.dropdown__content button:hover {\r\n  background-color: rgb(177, 137, 214);\r\n}\r\n\r\n.dropdown__content button:active {\r\n  background-color: rgb(133, 93, 170);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n}\r\n\r\n.dropdown__content {\r\n  position: absolute;\r\n  left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n  z-index: 1;\r\n}\r\n"],sourceRoot:""}]);const i=c},696:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(c[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},64:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},316:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var A=n[i],s=o.base?A[0]+o.base:A[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var u=e(d),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var f=t(p,o);o.byIndex=i,r.splice(i,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);r[i].references--}for(var A=o(n,t),s=0;s<a.length;s++){var l=e(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=A}}},231:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},584:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},260:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},525:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},117:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var o=r.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=o[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(316),r=e.n(n),o=e(525),t=e.n(o),a=e(231),c=e.n(a),i=e(260),A=e.n(i),s=e(584),l=e.n(s),d=e(117),u=e.n(d),p=e(726),f={};f.styleTagTransform=u(),f.setAttributes=A(),f.insert=c().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),r()(p.A,f),p.A&&p.A.locals&&p.A.locals;var b=e(655),v={};v.styleTagTransform=u(),v.setAttributes=A(),v.insert=c().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=l(),r()(b.A,v),b.A&&b.A.locals&&b.A.locals;const g=[e.p+"68848bdb4ef74713f807.jpg",e.p+"eacee6d8c48bd6be8f49.jpg",e.p+"6983519f3723dad6a847.jpg",e.p+"7d6cdfd2e5bd457f6cba.jpg",e.p+"1af38cea948db8121106.jpg"];document.querySelectorAll(".dropdown").forEach((n=>(n=>{const r=n.querySelector(".dropdown__trigger"),e=n.querySelector(".dropdown__content");let o=!1;const t=()=>{o?e.classList.remove("hidden"):e.classList.add("hidden")};r.addEventListener("click",(()=>{o=!o,t()})),document.addEventListener("click",(r=>{o&&(n===r.target||n.contains(r.target)||(o=!1,t()))})),t()})(n))),document.querySelectorAll(".carousel").forEach((n=>(n=>{const r=n.querySelector(".carousel__inner-container"),e=n.querySelector(".carousel__slide-nav");let o=null,t=null,a=0;const c=n=>{if(n!==a){const n=e.children[a];n.classList.remove("current"),n.disabled=!1}const o=n-a;a=n;const t=e.children[a];t.classList.add("current"),t.disabled=!1,(n=>{const e=Math.abs(n);for(let o=0;o<e;++o)n>0?r.appendChild(r.firstChild):r.insertBefore(r.lastChild,r.firstChild)})(o)},i=()=>{window.clearTimeout(o),window.clearInterval(t),o=window.setTimeout((()=>{A(),s()}),1e4)},A=()=>{t=window.setInterval((()=>{s()}),5e3)},s=()=>{c((a+1)%e.children.length)};g.forEach(((n,o)=>{const t=new Image;t.src=n,r.appendChild(t);const a=document.createElement("button");a.addEventListener("click",(()=>{c(o),i()})),e.appendChild(a)})),n.querySelector(".carousel__left-nav").addEventListener("click",(()=>{c((a-1+e.children.length)%e.children.length),i()})),n.querySelector(".carousel__right-nav").addEventListener("click",(()=>{s(),i()})),c(0),A()})(n)))})()})();
//# sourceMappingURL=bundle.js.map