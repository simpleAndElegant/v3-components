!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.V3Components=n(require("vue")):t.V3Components=n(t.Vue)}(this,(function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=61)}([function(n,e){n.exports=t},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(31))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4),o=e(8),u=e(12);t.exports=r?function(t,n,e){return o.f(t,n,u(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(13),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(17),u=e(18),i=e(16),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(u(t),n=i(n,!0),u(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){"use strict";var r=e(30),o=e(26);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(4),o=e(32),u=e(12),i=e(7),c=e(16),f=e(3),a=e(17),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2),o=e(14),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(2),u=e(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(20),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(1),o=e(9),u=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,e){var r=e(38),o=e(20);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(50).forEach,o=e(58),u=e(59),i=o("forEach"),c=u("forEach");t.exports=i&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(60),u=e(26),i=e(6);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==u)try{i(a,"forEach",u)}catch(t){a.forEach=u}}},function(t,n,e){var r=e(4),o=e(8).f,u=Function.prototype,i=u.toString,c=/^\s*function ([^ (]*)/;r&&!("name"in u)&&o(u,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,e){var r=e(1),o=e(11).f,u=e(6),i=e(34),c=e(9),f=e(39),a=e(49);t.exports=function(t,n){var e,s,p,l,v,y=t.target,b=t.global,d=t.stat;if(e=b?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(b?s:y+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(e,s,l,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(5),u=r.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(6),u=e(3),i=e(9),c=e(19),f=e(35),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:i(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r,o,u,i=e(36),c=e(1),f=e(5),a=e(6),s=e(3),p=e(37),l=e(23),v=c.WeakMap;if(i){var y=new v,b=y.get,d=y.has,h=y.set;r=function(t,n){return h.call(y,t,n),n},o=function(t){return b.call(y,t)||{}},u=function(t){return d.call(y,t)}}else{var g=p("state");l[g]=!0,r=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},u=function(t){return s(t,g)}}t.exports={set:r,get:o,has:u,enforce:function(t){return u(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(1),o=e(19),u=r.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n,e){var r=e(21),o=e(22),u=r("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(3),o=e(40),u=e(11),i=e(8);t.exports=function(t,n){for(var e=o(n),c=i.f,f=u.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(41),o=e(43),u=e(48),i=e(18);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=u.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(42),o=e(1),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(r[t])||u(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(1);t.exports=r},function(t,n,e){var r=e(44),o=e(47).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(7),u=e(45).indexOf,i=e(23);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(i,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){var r=e(7),o=e(24),u=e(46),i=function(t){return function(n,e,i){var c,f=r(n),a=o(f.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):u(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=/#|\.prototype\./,u=function(t,n){var e=c[i(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,n,e){var r=e(51),o=e(13),u=e(53),i=e(24),c=e(54),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,y,b,d){for(var h,g,m=u(v),x=o(m),O=r(y,b,3),S=i(x.length),j=0,w=d||c,P=n?w(v,S):e?w(v,0):void 0;S>j;j++)if((l||j in x)&&(g=O(h=x[j],j,m),t))if(n)P[j]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:f.call(P,h)}else if(s)return!1;return p?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(52);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5),o=e(55),u=e(56)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[u])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(1),o=e(21),u=e(3),i=e(22),c=e(27),f=e(57),a=o("wks"),s=r.Symbol,p=f?s:s&&s.withoutSetter||i;t.exports=function(t){return u(a,t)||(c&&u(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},function(t,n,e){var r=e(27);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(4),o=e(2),u=e(3),i=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(u(c,t))return c[t];n||(n={});var e=[][t],a=!!u(n,"ACCESSORS")&&n.ACCESSORS,s=u(n,0)?n[0]:f,p=u(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?i(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,p)}))}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";e.r(n),e.d(n,"Input",(function(){return s})),e.d(n,"install",(function(){return l}));e(10),e(28);var r=e(0);e(29);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c=function(t){var n=t.setup,e=t.provideRefer,o=t.props,u=t.name;return i(i({},Object(r.defineComponent)({props:o,name:u,setup:function(t,o){var i=Object(r.getCurrentInstance)();if(!n)return console.error("designComponent: setup is required!"),function(){return null};var c=n(t,o),f=c.refer,a=c.render;return i._refer=f,e&&(u?Object(r.provide)("@@".concat(u),f):console.error("designComponent: name is required when provideRefer is true!")),a}})),{},{use:{ref:function(t){var n=Object(r.getCurrentInstance)().ctx;return{get value(){return n.$refs[t].$._refer}}},inject:function(t){return Object(r.inject)("@@".concat(u),t)}}})}({name:"pl-input",props:{status:{type:String,default:"primary"}},setup:function(t){var n=Object(r.ref)(""),e=Object(r.ref)(null),o=Object(r.computed)((function(){return["pl-input","pl-input-status-".concat(t.status)]})),u={focus:function(t){e.value.focus(),t&&(n.value="")},clear:function(){n.value=""}};return{refer:{methods:u,modelValue:n},render:function(){return Object(r.createVNode)("div",{class:o.value},[Object(r.withDirectives)(Object(r.createVNode)("input",{class:"pl-input-inner",type:"text","onUpdate:modelValue":function(t){return n.value=t},ref:e},null),[[r.vModelText,n.value]]),Object(r.createVNode)("button",{onClick:u.clear},[Object(r.createTextVNode)("clear")]),Object(r.createVNode)("button",{onClick:function(){return u.focus(!0)}},[Object(r.createTextVNode)("focus")])])}}}});var f,a,s=i(i({},f=c),{},{install:function(t){t.component(f.name,f),a&&a.forEach(t.use)}}),p=[s];function l(t){p.forEach(t.use)}n.default={install:l}}])}));