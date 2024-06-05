(()=>{"use strict";var n={564:(n,t,e)=>{e.d(t,{A:()=>d});var r=e(64),o=e.n(r),i=e(696),a=e.n(i),c=e(787),A=e.n(c),s=new URL(e(674),e.b),l=a()(o()),u=A()(s);l.push([n.id,`@font-face {\n  font-family: 'MergeOne';\n  src: url(${u}) format('truetype');\n}\n\n:root {\n  --background-gradient-1: #235571;\n  --background-gradient-2: #5e95b4;\n  --panel-color: #274c62;\n\n  --button-color: #3a7393;\n  --button-color-hover: #538eb1;\n  --button-cover-press: #2f6483;\n  --button-color-toggled: #6fbaff;\n\n  --text-color: white;\n  --text-color-light: #a9b7c0;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  font-family: inherit;\n  color: inherit;\n  font-size: 1rem;\n}\n\nbody {\n  background: linear-gradient(0, var(--background-gradient-1) 0%, var(--background-gradient-2) 100%);\n  color: var(--text-color);\n\n  min-height: 100vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  font-family: 'MergeOne', sans-serif;\n}\n\nbutton {\n  background-color: var(--button-color);\n  border: none;\n  padding: 5px 15px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background-color: var(--button-color-hover);\n}\n\nbutton:active {\n  background-color: var(--button-cover-press);\n}\n\nbutton.active {\n  background-color: var(--button-color-toggled);\n  cursor: default;\n}\n`,"",{version:3,sources:["webpack://./src/global.css"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,+DAA2D;AAC7D;;AAEA;EACE,gCAAgC;EAChC,gCAAgC;EAChC,sBAAsB;;EAEtB,uBAAuB;EACvB,6BAA6B;EAC7B,6BAA6B;EAC7B,+BAA+B;;EAE/B,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;;;;EAIE,oBAAoB;EACpB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kGAAkG;EAClG,wBAAwB;;EAExB,iBAAiB;EACjB,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,mCAAmC;AACrC;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;EAC7C,eAAe;AACjB",sourcesContent:["@font-face {\r\n  font-family: 'MergeOne';\r\n  src: url('./fonts/MergeOne-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n  --background-gradient-1: #235571;\r\n  --background-gradient-2: #5e95b4;\r\n  --panel-color: #274c62;\r\n\r\n  --button-color: #3a7393;\r\n  --button-color-hover: #538eb1;\r\n  --button-cover-press: #2f6483;\r\n  --button-color-toggled: #6fbaff;\r\n\r\n  --text-color: white;\r\n  --text-color-light: #a9b7c0;\r\n}\r\n\r\ninput,\r\nselect,\r\ntextarea,\r\nbutton {\r\n  font-family: inherit;\r\n  color: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(0, var(--background-gradient-1) 0%, var(--background-gradient-2) 100%);\r\n  color: var(--text-color);\r\n\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  font-family: 'MergeOne', sans-serif;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--button-color);\r\n  border: none;\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--button-color-hover);\r\n}\r\n\r\nbutton:active {\r\n  background-color: var(--button-cover-press);\r\n}\r\n\r\nbutton.active {\r\n  background-color: var(--button-color-toggled);\r\n  cursor: default;\r\n}\r\n"],sourceRoot:""}]);const d=l},28:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(64),o=e.n(r),i=e(696),a=e.n(i)()(o());a.push([n.id,".content-container {\n  width: min(700px, 90%);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n\n.content-container > div {\n  background-color: var(--panel-color);\n  padding: 15px;\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\n  border-radius: 5px;\n}\n\n.content-container .basic-location-info {\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 1fr 100px 100px;\n\n  .city-value {\n    font-size: 2rem;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  .region-value {\n    grid-area: 2 / 1 / 2 / 3;\n  }\n\n  .temperature-value {\n    font-size: 2rem;\n    grid-area: 1 / 2 / 2 / 3;\n    text-align: right;\n  }\n\n  .weather-value {\n    grid-area: 2 / 2/ 3 / 3;\n    text-align: right;\n  }\n\n  .weather-icon-container {\n    grid-area: 1 / 3 / 3 / 4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.content-container .bottom-section {\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.data-title {\n  color: var(--text-color-light);\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.data-title:first-child {\n  margin-top: 0;\n}\n","",{version:3,sources:["webpack://./src/style/content.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,uDAAuD;EACvD,+CAA+C;EAC/C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;;EAEtC;IACE,eAAe;IACf,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,eAAe;IACf,wBAAwB;IACxB,iBAAiB;EACnB;;EAEA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;AACF;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf",sourcesContent:[".content-container {\r\n  width: min(700px, 90%);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 15px;\r\n}\r\n\r\n.content-container > div {\r\n  background-color: var(--panel-color);\r\n  padding: 15px;\r\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\r\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\r\n  border-radius: 5px;\r\n}\r\n\r\n.content-container .basic-location-info {\r\n  grid-column: 1 / 3;\r\n  display: grid;\r\n  grid-template-columns: 1fr 100px 100px;\r\n\r\n  .city-value {\r\n    font-size: 2rem;\r\n    grid-area: 1 / 1 / 2 / 2;\r\n  }\r\n\r\n  .region-value {\r\n    grid-area: 2 / 1 / 2 / 3;\r\n  }\r\n\r\n  .temperature-value {\r\n    font-size: 2rem;\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    text-align: right;\r\n  }\r\n\r\n  .weather-value {\r\n    grid-area: 2 / 2/ 3 / 3;\r\n    text-align: right;\r\n  }\r\n\r\n  .weather-icon-container {\r\n    grid-area: 1 / 3 / 3 / 4;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.content-container .bottom-section {\r\n  grid-column: 1 / 3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 40px;\r\n}\r\n\r\n.data-title {\r\n  color: var(--text-color-light);\r\n  margin-top: 16px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.data-title:first-child {\r\n  margin-top: 0;\r\n}\r\n"],sourceRoot:""}]);const c=a},76:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(64),o=e.n(r),i=e(696),a=e.n(i)()(o());a.push([n.id,"header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--panel-color);\n\n  height: 3rem;\n  min-width: fit-content;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  gap: 10px;\n\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\n}\n\nheader div:first-child {\n  flex: 1;\n  height: fit-content;\n}\n\n.title {\n  font-size: 1.5rem;\n  display: flex;\n  align-items: end;\n  gap: 5px;\n  text-wrap: nowrap;\n}\n\n.title .author {\n  font-size: 1.1rem;\n}\n\nheader button {\n  text-wrap: nowrap;\n}\n\n.unit-switch-container {\n  white-space: nowrap;\n}\n\n.unit-switch-container button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.unit-switch-container button:nth-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n","",{version:3,sources:["webpack://./src/style/header.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oCAAoC;;EAEpC,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;;EAET,uDAAuD;EACvD,+CAA+C;AACjD;;AAEA;EACE,OAAO;EACP,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;AAC9B",sourcesContent:["header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--panel-color);\r\n\r\n  height: 3rem;\r\n  min-width: fit-content;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 5px 10px;\r\n  gap: 10px;\r\n\r\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\r\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.31);\r\n}\r\n\r\nheader div:first-child {\r\n  flex: 1;\r\n  height: fit-content;\r\n}\r\n\r\n.title {\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: end;\r\n  gap: 5px;\r\n  text-wrap: nowrap;\r\n}\r\n\r\n.title .author {\r\n  font-size: 1.1rem;\r\n}\r\n\r\nheader button {\r\n  text-wrap: nowrap;\r\n}\r\n\r\n.unit-switch-container {\r\n  white-space: nowrap;\r\n}\r\n\r\n.unit-switch-container button:first-child {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.unit-switch-container button:nth-child(2) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n"],sourceRoot:""}]);const c=a},447:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(64),o=e.n(r),i=e(696),a=e.n(i)()(o());a.push([n.id,".search-container {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  position: relative;\n  width: min(300px, 90%);\n}\n\n.search-container input {\n  height: 2.4rem;\n  font-size: 1.1rem;\n  background-color: var(--panel-color);\n  border: none;\n  outline: none;\n  padding: 2px 7px;\n  border-radius: 5px;\n  width: 100%;\n  box-sizing: border-box;\n\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\n}\n\n.search-container input:focus {\n  outline: 1px var(--text-color) solid;\n}\n\n.search-container button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 2.4rem;\n  padding: 0;\n  width: 45px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  background-color: transparent;\n  color: var(--text-color);\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n}\n\n.search-container button:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.search-container button:active {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.search-message {\n  min-height: 1.2rem;\n  margin-top: 6px;\n  text-align: center;\n}\n","",{version:3,sources:["webpack://./src/style/search.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;;EAEtB,sDAAsD;EACtD,8CAA8C;AAChD;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,cAAc;EACd,UAAU;EACV,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,eAAe;EACf,6BAA6B;EAC7B,wBAAwB;;EAExB;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".search-container {\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n  width: min(300px, 90%);\r\n}\r\n\r\n.search-container input {\r\n  height: 2.4rem;\r\n  font-size: 1.1rem;\r\n  background-color: var(--panel-color);\r\n  border: none;\r\n  outline: none;\r\n  padding: 2px 7px;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n\r\n  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.search-container input:focus {\r\n  outline: 1px var(--text-color) solid;\r\n}\r\n\r\n.search-container button {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 2.4rem;\r\n  padding: 0;\r\n  width: 45px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: var(--text-color);\r\n\r\n  svg {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n}\r\n\r\n.search-container button:hover {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.search-container button:active {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.search-message {\r\n  min-height: 1.2rem;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n}\r\n"],sourceRoot:""}]);const c=a},696:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},787:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},64:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},316:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var d=e(u),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var A=r(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=A}}},231:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},584:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},260:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},525:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},117:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},674:(n,t,e)=>{n.exports=e.p+"e6196c6cb51f6af976d5.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(316),t=e.n(n),r=e(525),o=e.n(r),i=e(231),a=e.n(i),c=e(260),A=e.n(c),s=e(584),l=e.n(s),u=e(117),d=e.n(u),p=e(564),h={};h.styleTagTransform=d(),h.setAttributes=A(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.A,h),p.A&&p.A.locals&&p.A.locals;var g=e(76),m={};m.styleTagTransform=d(),m.setAttributes=A(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals;var C=e(447),f={};f.styleTagTransform=d(),f.setAttributes=A(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(C.A,f),C.A&&C.A.locals&&C.A.locals;var E=e(28),b={};b.styleTagTransform=d(),b.setAttributes=A(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),t()(E.A,b),E.A&&E.A.locals&&E.A.locals;const x="API_KEY",B="IS_METRIC",v="LAST_QUERY_RESULT",w=n=>{localStorage.setItem(x,n)},y=n=>{localStorage.setItem(B,n)};class k{constructor(n,t){this.metric=n,this.imperial=t}}class S{constructor(n){this.locationName=n?.location?.name,this.locationRegion=n?.location?.region,this.locationCountry=n?.location?.country,this.latitude=n?.location?.lat,this.longitude=n?.location?.lon,this.timeZone=n?.location?.tz_id,this.localTime=n?.location?.localtime,this.lastUpdated=n?.current?.last_updated,this.weather=n?.current?.condition?.text,this.weatherIcon=n?.current?.condition?.icon,this.temperature=new k(n?.current?.temp_c,n?.current?.temp_f),this.feelsLike=new k(n?.current?.feelslike_c,n?.current?.feelslike_f),this.windSpeed=new k(n?.current?.wind_kph,n?.current?.wind_mph),this.windDirection=n?.current?.wind_dir,this.windDirectionDegrees=n?.current?.wind_degree,this.pressure=new k(n?.current?.pressure_mb,n?.current?.pressure_in),this.precipitation=new k(n?.current?.precip_mm,n?.current?.precip_in),this.humidity=`${n?.current?.humidity}%`,this.windChill=new k(n?.current?.windchill_c,n?.current?.windchill_f),this.heatIndex=new k(n?.current?.heatindex_c,n?.current?.heatindex_f),this.visibility=new k(n?.current?.vis_km,n?.current?.vis_miles),this.uv=n?.current?.uv,this.gustSpeed=new k(n?.current?.gust_kph,n?.current?.gust_mph)}}const I=async(n,t)=>{const e=`https://api.weatherapi.com/v1/current.json?key=${n}&q=${t}`,r=await fetch(e,{mode:"cors"});if(!r.ok)return null;const o=await r.json();return new S(o)},T=async(n="")=>{for(;;){const t=prompt("Please enter your WeatherAPI API key:",n);if(null===t)return null;if(""!==t){if(!0===await _(t))return t;alert("Failed to verify API key.")}else alert("A WeatherAPI API key is required to use this site.")}},_=async n=>""===n?"Empty":null!==await I(n,"Ottawa");class j{constructor(n,t,e,r,o){this.temperature=n,this.windSpeed=t,this.pressure=e,this.precipitation=r,this.distance=o}formatTemperature(n){return`${Math.round(n)}°${this.temperature}`}formatWindSpeed(n){return`${Math.round(n)}${this.windSpeed}`}formatPressure(n){return`${Math.round(n)}${this.pressure}`}formatPrecipitation(n){return`${n}${this.precipitation}`}formatDistance(n){return`${n}${this.distance}`}}const $=n=>{const t=new Date(n),e=t.getHours(),r=t.getMinutes();return`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`},D=document.querySelector(".content-container");let M={};Object.entries({city:"city-value",region:"region-value",temperature:"temperature-value",weather:"weather-value",weatherIcon:"weather-icon",feelsLike:"feels-like-value",wind:"wind-value",gusts:"gusts-value",windChill:"wind-chill-value",pressure:"pressure-value",uv:"uv-value",heatIndex:"heat-index-value",precipitation:"precipitation-value",humidity:"humidity-value",visibility:"visibility-value",geo:"geo-value",timezone:"timezone-value",localTime:"local-time-value",lastUpdated:"last-updated-value"}).forEach((([n,t])=>{const e=D.querySelector(`.${t}`);M[n]=e}));const L=new j("C","km/h","mb","mm","km"),z=new j("F","mph","inHg","in"," miles"),P=(n,t)=>{const e=t?L:z,r=n=>t?n.metric:n.imperial;M.city.textContent=n.locationName,M.region.textContent=`${n.locationRegion}, ${n.locationCountry}`,M.temperature.textContent=e.formatTemperature(r(n.temperature)),M.weather.textContent=n.weather,M.weatherIcon.src=n.weatherIcon,M.feelsLike.textContent=e.formatTemperature(r(n.feelsLike)),M.wind.textContent=e.formatWindSpeed(r(n.windSpeed)),M.wind.textContent+=` @ ${n.windDirectionDegrees}° (${n.windDirection})`,M.gusts.textContent=e.formatWindSpeed(r(n.gustSpeed)),M.windChill.textContent=e.formatTemperature(r(n.windChill)),M.pressure.textContent=e.formatPressure(r(n.pressure)),M.uv.textContent=n.uv,M.heatIndex.textContent=e.formatTemperature(r(n.heatIndex)),M.precipitation.textContent=e.formatPrecipitation(r(n.precipitation)),M.humidity.textContent=n.humidity,M.visibility.textContent=e.formatDistance(r(n.visibility)),M.geo.textContent=`${n.latitude} / ${n.longitude}`,M.timezone.textContent=n.timeZone,M.localTime.textContent=$(n.localTime),M.lastUpdated.textContent=$(n.lastUpdated)};let R=null,O=null,U=!0,q=!0;const W=document.querySelector(".search-message"),N=async n=>{if(U||""===n)return;W.textContent="Searching...";const t=await I(R,n);null!==t?(W.textContent="",O=t,P(O,q),(n=>{const t=JSON.stringify(n);localStorage.setItem(v,t)})(O)):W.textContent="Search failed :("};document.querySelector("#edit-api-key-button").addEventListener("click",(()=>{U||(async()=>{U=!0;let n=await T(null!==R?R:"");U=!1,null!==n&&(R=n,w(R))})()}));const Y=document.querySelectorAll(".metric-unit-button"),F=document.querySelectorAll(".imperial-unit-button"),Q=()=>{q=!1,F.forEach((n=>n.classList.add("active"))),Y.forEach((n=>n.classList.remove("active"))),y(q),null!==O&&P(O,q)};Y.forEach((n=>{n.addEventListener("click",(()=>{q||(q=!0,Y.forEach((n=>n.classList.add("active"))),F.forEach((n=>n.classList.remove("active"))),y(q),null!==O&&P(O,q))}))})),F.forEach((n=>{n.addEventListener("click",(()=>{q&&Q()}))}));const X=document.querySelectorAll(".search-button"),Z=document.querySelector("#location-input");X.forEach((n=>{n.addEventListener("click",(()=>{N(Z.value)}))})),Z.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),N(Z.value))})),!1===(()=>{const n=localStorage.getItem(B);return"true"===n||"false"!==n&&null})()&&Q();const H=(()=>{const n=localStorage.getItem(v);return null===n?null:JSON.parse(n)})();null!=H&&(O=H,P(O,q)),window.addEventListener("DOMContentLoaded",(()=>{setTimeout((()=>(async()=>{if(await(async()=>{R=localStorage.getItem(x),null!==R&&_(R)||(U=!0,R=await T()),U=!1,null!==R&&w(R)})(),null===R)return;if(null!==O)return;const n=await I(R,"Victoria BC");null!==n&&(O=n,P(O,q))})()),20)}))})()})();
//# sourceMappingURL=bundle.js.map