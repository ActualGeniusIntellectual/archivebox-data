(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function ka(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)oa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.A=!1;this.v=null;this.i=void 0;this.h=1;this.m=this.l=0;this.K=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.m}
xa.prototype.return=function(a){this.j={return:a};this.h=this.m};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.v;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.v,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.v=null,za(a.h,g),Ga(a)}a.h.v=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.v?b=Fa(a,a.h.v.next,b,a.h.D):(a.h.D(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.v?b=Fa(a,a.h.v["throw"],b,a.h.D):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.v)}};
b.prototype.Z=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.U(g):this.m(g)}};
b.prototype.U=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(w){try{l(t(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){t[w]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Wb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!oa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!oa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&oa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&oa(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||wa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.h=a===Ab&&b||""}
zb.prototype.toString=function(){return this.h};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Kb=Ma(610401301,!1),Lb=Ma(572417392,!0);function Mb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=C.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Kb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Kb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:F("Opera")}
function Sb(){return Qb()?!1:F("Trident")||F("MSIE")}
function Tb(){return F("Firefox")||F("FxiOS")}
function Ub(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Wb={};function Xb(){}
Xb.prototype.toString=function(){return this.vd.toString()};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function hc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a,b){for(var c=a.search(jc),d=0,e,f=[];0<=(e=ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(kc,"$1")}
;function mc(a){this.h=a}
;function nc(a,b,c){this.j=a;this.v=b;this.i=c||[];this.h=new Map}
m=nc.prototype;m.Pd=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new mc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new mc(a)])};
m.xc=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.he=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function oc(a,b){nc.call(this,a,3,b)}
x(oc,nc);oc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.Cd(c+a,b)};function pc(a,b){nc.call(this,a,2,b)}
x(pc,nc);pc.prototype.record=function(a){this.Pd(a,B.apply(1,arguments))};function qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?rc.apply(null,d):qc(d)}}
;function J(){this.ob=this.ob;this.v=this.v}
m=J.prototype;m.ob=!1;m.aa=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function sc(a,b){a.addOnDisposeCallback(Wa(qc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Va(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function tc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
tc.prototype.stopPropagation=function(){this.j=!0};
tc.prototype.preventDefault=function(){this.defaultPrevented=!0};function uc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=vc(a,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};var yc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function zc(){return Kb?!!Nb&&!!Nb.platform:!1}
function Ac(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Bc(a){Bc[" "](a);return a}
Bc[" "]=function(){};var Cc=Rb(),Dc=Sb(),Ec=F("Edge"),Fc=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Gc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");Gc&&F("Mobile");zc()||F("Macintosh");zc()||F("Windows");(zc()?"Linux"===Nb.platform:F("Linux"))||zc()||F("CrOS");var Hc=zc()?"Android"===Nb.platform:F("Android");Ac();F("iPad");F("iPod");Ac()||F("iPad")||F("iPod");Mb().toLowerCase().indexOf("kaios");
function Ic(){var a=C.document;return a?a.documentMode:void 0}
var Jc;a:{var Kc="",Lc=function(){var a=Mb();if(Fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ec)return/Edge\/([\d\.]+)/.exec(a);if(Dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Gc)return/WebKit\/(\S+)/.exec(a);if(Cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Lc&&(Kc=Lc?Lc[1]:"");if(Dc){var Oc=Ic();if(null!=Oc&&Oc>parseFloat(Kc)){Jc=String(Oc);break a}}Jc=Kc}var Pc=Jc,Qc;if(C.document&&Dc){var Rc=Ic();Qc=Rc?Rc:parseInt(Pc,10)||void 0}else Qc=void 0;var Sc=Qc;function Tc(a,b){tc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Tc,tc);var Uc={2:"touch",3:"pen",4:"mouse"};
Tc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Fc){a:{try{Bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Uc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Tc.Ba.preventDefault.call(this)};
Tc.prototype.stopPropagation=function(){Tc.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Tc.prototype.preventDefault=function(){Tc.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vc="closure_listenable_"+(1E6*Math.random()|0);var Wc=0;function Xc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++Wc;this.Lb=this.Vb=!1}
function Yc(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function Zc(a){this.src=a;this.listeners={};this.h=0}
Zc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=$c(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new Xc(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Zc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$c(e,b,c,d);return-1<b?(Yc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ad(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Yc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function $c(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var bd="closure_lm_"+(1E6*Math.random()|0),cd={},dd=0;function ed(a,b,c,d,e){if(d&&d.once)fd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=gd(c),a&&a[Vc]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):hd(a,b,c,!1,d,e)}
function hd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=id(a);h||(a[bd]=h=new Zc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=jd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)yc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(kd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");dd++}}
function jd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ld;return a}
function fd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else c=gd(c),a&&a[Vc]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):hd(a,b,c,!0,d,e)}
function md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=gd(c),a&&a[Vc])?a.h.remove(String(b),c,d,e):a&&(a=id(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=$c(b,c,d,e)),(c=-1<a?b[a]:null)&&nd(c))}
function nd(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[Vc])ad(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(kd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);dd--;(c=id(b))?(ad(c,a),0==c.h&&(c.src=null,b[bd]=null)):Yc(a)}}}
function kd(a){return a in cd?cd[a]:cd[a]="on"+a}
function ld(a,b){if(a.Lb)a=!0;else{b=new Tc(b,this);var c=a.listener,d=a.ac||a.src;a.Vb&&nd(a);a=c.call(d,b)}return a}
function id(a){a=a[bd];return a instanceof Zc?a:null}
var od="__closure_events_fn_"+(1E9*Math.random()>>>0);function gd(a){if("function"===typeof a)return a;a[od]||(a[od]=function(b){return a.handleEvent(b)});
return a[od]}
;function pd(){J.call(this);this.h=new Zc(this);this.Za=this;this.fa=null}
Ya(pd,J);pd.prototype[Vc]=!0;m=pd.prototype;m.addEventListener=function(a,b,c,d){ed(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){md(this,a,b,c,d)};
function qd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new tc(b,a):b instanceof tc?b.target=b.target||a:(e=b,b=new tc(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=rd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=rd(g,c,!0,b)&&e,b.j||(e=rd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=rd(g,c,!1,b)&&e}
m.S=function(){pd.Ba.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Yc(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function rd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Vb&&ad(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function sd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
sd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function td(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function ud(a,b){return a+Math.random()*(b-a)}
;function vd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=vd.prototype;m.clone=function(){return new vd(this.x,this.y)};
m.equals=function(a){return a instanceof vd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function wd(a,b){this.width=a;this.height=b}
m=wd.prototype;m.clone=function(){return new wd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function xd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function yd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function zd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ad;function Bd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=yd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Cd(a){C.setTimeout(function(){throw a;},0)}
;function Dd(){this.i=this.h=null}
Dd.prototype.add=function(a,b){var c=Ed.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Dd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ed=new sd(function(){return new Fd},function(a){return a.reset()});
function Fd(){this.next=this.scope=this.h=null}
Fd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Fd.prototype.reset=function(){this.next=this.scope=this.h=null};var Gd,Hd=!1,Id=new Dd;function Jd(a,b){Gd||Kd();Hd||(Gd(),Hd=!0);Id.add(a,b)}
function Kd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Gd=function(){a.then(Ld)}}else Gd=function(){var b=Ld;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Qb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Ad||(Ad=Bd()),Ad(b)):C.setImmediate(b)}}
function Ld(){for(var a;a=Id.remove();){try{a.h.call(a.scope)}catch(b){Cd(b)}td(Ed,a)}Hd=!1}
;function Md(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Nd(b,2,c)},function(c){Nd(b,3,c)})}catch(c){Nd(this,3,c)}}
function Od(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Od.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Pd=new sd(function(){return new Od},function(a){a.reset()});
function Qd(a,b,c){var d=Pd.get();d.i=a;d.h=b;d.context=c;return d}
function Rd(a){return new Md(function(b,c){c(a)})}
Md.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Md.prototype.$goog_Thenable=!0;m=Md.prototype;m.oc=function(a,b){return Sd(this,null,a,b)};
m.catch=Md.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new Td(a);Jd(function(){Ud(this,b)},this)}};
function Ud(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ud(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Vd(c),Wd(c,e,3,b)))}a.j=null}else Nd(a,3,b)}
function Xd(a,b){a.i||2!=a.h&&3!=a.h||Yd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Sd(a,b,c,d){var e=Qd(null,null,null);e.child=new Md(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Td?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Xd(a,e);return e.child}
m.ff=function(a){this.h=0;Nd(this,2,a)};
m.gf=function(a){this.h=0;Nd(this,3,a)};
function Nd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ff,f=a.gf;if(d instanceof Md){Xd(d,Qd(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){Zd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Yd(a),3!=b||c instanceof Td||$d(a,c))}}
function Zd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Yd(a){a.m||(a.m=!0,Jd(a.be,a))}
function Vd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=Vd(this);)Wd(this,a,this.h,this.A);this.m=!1};
function Wd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ae(b,c,d);else try{b.j?b.i.call(b.context):ae(b,c,d)}catch(e){be.call(null,e)}td(Pd,b)}
function ae(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function $d(a,b){a.v=!0;Jd(function(){a.v&&be.call(null,b)})}
var be=Cd;function Td(a){$a.call(this,a)}
Ya(Td,$a);Td.prototype.name="cancel";function de(a,b){pd.call(this);this.j=a||1;this.i=b||C;this.l=Va(this.df,this);this.m=Xa()}
Ya(de,pd);m=de.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.df=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),qd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){de.Ba.S.call(this);this.stop();delete this.i};
function ee(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function fe(a){J.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new de(this.flushInterval);this.h.listen("tick",this.Pa,!1,this);sc(this,this.h)}
x(fe,J);m=fe.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ge(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Pa()}
m.Pa=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);he(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new oc(a,b))};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new pc(a,b))};
function ie(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Pb=function(a){this.Od.apply(this,[a,1].concat(la(B.apply(1,arguments))))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=ie(this,a);d&&d instanceof oc&&(d.l(b,c),ge(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ie(this,a);d&&d instanceof pc&&(d.record(b,c),ge(this))};
function he(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function je(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{pa:3,oa:"ke"})}
function ke(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{pa:3,oa:"rk"},{pa:3,oa:"ke"},{pa:2,oa:"ec"},{pa:3,oa:"em"})}
function le(a){this.h=a;this.h.sc("/client_streamz/bg/fil",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
le.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function me(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
function ne(a){this.h=a;this.h.sc("/client_streamz/bg/fcd",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
ne.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function oe(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
function pe(a){this.h=a;this.h.sc("/client_streamz/bg/fsl",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
pe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var qe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function re(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=se(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=te(a,h),d+=te(a,h+4),e+=te(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return qe.toString(e)}
function se(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function te(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Tb();var ue=Ac()||F("iPod"),ve=F("iPad");!F("Android")||Ub()||Tb()||Rb()||F("Silk");Ub();var we=F("Safari")&&!(Ub()||(Qb()?0:F("Coast"))||Rb()||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||Tb()||F("Silk")||F("Android"))&&!(Ac()||F("iPad")||F("iPod"));var xe={},ye=null;function ze(a,b){Oa(a);void 0===b&&(b=0);Ae();b=xe[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Be(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ce(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ce(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=ye[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ae();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ae(){if(!ye){ye={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));xe[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ye[f]&&(ye[f]=e)}}}}
;var De="undefined"!==typeof Uint8Array,Ee=!Dc&&"function"===typeof btoa;function Fe(a){if(!Ee)return ze(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ge=/[-_.]/g,He={"-":"+",_:"/",".":"="};function Ie(a){return He[a]||""}
function Je(a){return De&&null!=a&&a instanceof Uint8Array}
var Ke={};var Le;function Me(a){if(a!==Ke)throw Error("illegal external caller");}
function Ne(a,b){Me(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ne.prototype.sizeBytes=function(){Me(Ke);var a=this.h;if(null!=a&&!Je(a))if("string"===typeof a)if(Ee){Ge.test(a)&&(a=a.replace(Ge,Ie));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Be(a);else Na(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Oe(){return"function"===typeof BigInt}
var Pe=!Lb,Qe=!Lb;function Re(a){return Array.prototype.slice.call(a)}
;var Se;Se="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,la(Object.values({Jf:1,Hf:2,Gf:4,Mf:8,Lf:16,Kf:32,xf:64,Of:128,Ff:256,Ef:512,If:1024,Cf:2048,Nf:4096,Df:8192})));var Te=Se?function(a,b){a[Se]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ue(a){var b=Ve(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Re(a)),We(a,b|1))}
function Xe(a,b,c){return c?a|b:a&~b}
var Ve=Se?function(a){return a[Se]|0}:function(a){return a.Sa|0},Ye=Se?function(a){return a[Se]}:function(a){return a.Sa},We=Se?function(a,b){a[Se]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function Ze(){var a=[];Te(a,1);return a}
function $e(a,b){We(b,(a|0)&-14591)}
function af(a,b){We(b,(a|34)&-14557)}
function bf(a){a=a>>14&1023;return 0===a?536870912:a}
;var cf={},df={};function ef(a){return!(!a||"object"!==typeof a||a.h!==df)}
function ff(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var gf,hf=!Lb;function jf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Ne(a,Ke):Le||(Le=new Ne(null,Ke));else if(a.constructor!==Ne)if(Je(a))a=a.length?new Ne(new Uint8Array(a),Ke):Le||(Le=new Ne(null,Ke));else throw Error();return a}
function kf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Ve(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;We(a,d|1);return!0}
var lf,mf=[];We(mf,55);lf=Object.freeze(mf);function nf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var of=0,pf=0;function qf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(rf(c,a)),b=c.next().value,a=c.next().value,c=b);of=c>>>0;pf=a>>>0}
function sf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Oe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+tf(c)+tf(a));return c}
function tf(a){a=String(a);return"0000000".slice(a.length)+a}
function uf(){var a=of,b=pf;b&2147483648?Oe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(rf(a,b)),a=b.next().value,b=b.next().value,a="-"+sf(a,b)):a=sf(a,b);return a}
function rf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function vf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function wf(a){return a.displayName||a.name||"unknown type name"}
function xf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var yf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function zf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:yf.test(a)}
function Af(a){if(null!=a){if("number"!==typeof a)throw vf("int32");if(!Number.isFinite(a))throw vf("int32");a|=0}return a}
function Bf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Cf(a){if(null!=a){var b=!!b;if(!zf(a))throw vf("int64");a="string"===typeof a?Df(a):b?Ef(a):Ff(a)}return a}
function Gf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Ff(a){zf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){qf(a);var b=of,c=pf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Ef(a){zf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Gf(b)?a=b:(qf(a),a=uf())}return a}
function Df(a){zf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Gf(a)){if(16>a.length)qf(Number(a));else if(Oe())a=BigInt(a),of=Number(a&BigInt(4294967295))>>>0,pf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);pf=of=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),pf*=1E6,of=1E6*of+d,4294967296<=of&&(pf+=Math.trunc(of/4294967296),pf>>>=0,of>>>=0);b&&(b=v(rf(of,pf)),
a=b.next().value,b=b.next().value,of=a,pf=b)}a=uf()}return a}
function Hf(a){if("string"!==typeof a)throw Error();return a}
function If(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Jf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+wf(b)+" but got "+(a&&wf(a.constructor)));}
function Kf(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===cf)return a;if(Array.isArray(a)){var d=Ve(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&We(a,e);return new b(a)}}
;var Lf;function Mf(a,b){Ve(b);Lf=b;a=new a(b);Lf=void 0;return a}
function Nf(a,b,c){null==a&&(a=Lf);Lf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Ve(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(ff(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}We(a,d);return a}
;function Of(a,b){return Pf(b)}
function Pf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return hf||!kf(a,void 0,9999)?a:void 0;if(Je(a))return Fe(a);if(a instanceof Ne){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Fe(b)}}}return a}
;function Qf(a,b,c){a=Re(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Rf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ve(a)&1?void 0:f&&Ve(a)&2?a:Sf(a,b,c,void 0!==d,e,f);else if(ff(a)){var g={},h;for(h in a)g[h]=Rf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Sf(a,b,c,d,e,f){var g=d||c?Ve(a):0;d=d?!!(g&32):void 0;a=Re(a);for(var h=0;h<a.length;h++)a[h]=Rf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Tf(a){return a.Jc===cf?a.toJSON():Pf(a)}
;function Uf(a,b,c){c=void 0===c?af:c;if(null!=a){if(De&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ve(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?We(a,(d|34)&-12293):Sf(a,Uf,d&4?af:c,!0,!1,!0)}a.Jc===cf&&(c=a.F,d=Ye(c),a=d&2?a:Mf(a.constructor,Vf(c,d,!0)));return a}}
function Vf(a,b,c){var d=c||b&2?af:$e,e=!!(b&32);a=Qf(a,b,function(f){return Uf(f,e,d)});
Te(a,32|(c?2:0));return a}
function Wf(a){var b=a.F,c=Ye(b);return c&2?Mf(a.constructor,Vf(b,c,!1)):a}
;function Xf(a,b){a=a.F;return Yf(a,Ye(a),b)}
function Yf(a,b,c,d){if(-1===c)return null;if(c>=bf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Zf(a,b,c){var d=a.F,e=Ye(d);nf(e);$f(d,e,b,c);return a}
function $f(a,b,c,d,e){ff(d);var f=bf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&We(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ag(a){return void 0!==bg(a,cg,11,!1)}
function dg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function eg(a,b,c,d){var e=a.F,f=Ye(e);nf(f);if(null==c)return $f(e,f,b),a;if(!Array.isArray(c))throw vf();var g=Ve(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Re(c),h=0,g=fg(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Re(c),h=0,g=fg(g,f,!0));g!==h&&We(c,g);$f(e,f,b,c);return a}
function gg(a,b,c,d){a=a.F;var e=Ye(a);nf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Yf(a,f,k)&&(0!==g&&(f=$f(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=$f(a,e,c));$f(a,e,b,d)}
function bg(a,b,c,d){a=a.F;var e=Ye(a),f=Yf(a,e,c,d);b=Kf(f,b,e);b!==f&&null!=b&&$f(a,e,c,b,d);return b}
function hg(a,b,c,d){d=void 0===d?!1:d;b=bg(a,b,c,d);if(null==b)return b;a=a.F;var e=Ye(a);if(!(e&2)){var f=Wf(b);f!==b&&(b=f,$f(a,e,c,b,d))}return b}
function ig(a,b,c,d){null!=d?Jf(d,b):d=void 0;return Zf(a,c,d)}
function jg(a,b,c,d){var e=a.F,f=Ye(e);nf(f);if(null==d)return $f(e,f,c),a;if(!Array.isArray(d))throw vf();for(var g=Ve(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var w=d[r];Jf(w,b);k||(w=!!(Ve(w.F)&2),p&&(p=!w),t&&(t=w))}k||(g=Xe(g,5,!0),g=Xe(g,8,p),g=Xe(g,16,t));if(n||l&&g!==h)d=Re(d),h=0,g=fg(g,f,!0);g!==h&&We(d,g);$f(e,f,c,d);return a}
function fg(a,b,c){a=Xe(a,2,!!(2&b));a=Xe(a,32,!!(32&b)&&c);return a=Xe(a,2048,!1)}
function kg(a,b){a=Xf(a,b);var c;null==a?c=a:zf(a)?"number"===typeof a?c=Ff(a):c=Df(a):c=void 0;return c}
function lg(a){a=Xf(a,1);var b=void 0===b?!1:b;b=null==a?a:zf(a)?"string"===typeof a?Df(a):b?Ef(a):Ff(a):void 0;return b}
function mg(a){a=Xf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function ng(a){return jf(a,!1)}
function og(a,b,c){return Zf(a,b,If(c))}
function pg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw vf("enum");c|=0}return Zf(a,b,c)}
;function qg(a,b,c){this.F=Nf(a,b,c)}
m=qg.prototype;m.toJSON=function(){if(gf)var a=rg(this,this.F,!1);else a=Sf(this.F,Tf,void 0,void 0,!1,!1),a=rg(this,a,!0);return a};
m.serialize=function(){gf=!0;try{return JSON.stringify(this.toJSON(),Of)}finally{gf=!1}};
function sg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Te(b,32);return Mf(a,b)}
m.clone=function(){var a=this.F,b=Ye(a);return Mf(this.constructor,Vf(a,b,!1))};
m.Jc=cf;m.toString=function(){return rg(this,this.F,!1).toString()};
function rg(a,b,c){var d=a.constructor.Ua,e=Ye(c?a.F:b),f=bf(e),g=!1;if(d&&hf){if(!c){b=Re(b);var h;if(b.length&&ff(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Ye(a.F);a=bf(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?lf:Ze():c&&p!==lf&&Ue(p)}else k||(p=void 0,f.length&&ff(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?lf:Ze():c&&p!==lf&&Ue(p)}k=b.length;if(!k)return b;var t;
if(ff(f=b[k-1])){a:{var r=f;c={};a=!1;for(var w in r){h=r[w];if(Array.isArray(h)){n=h;if(!Qe&&kf(h,d,+w)||!Pe&&ef(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[w]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){w=k-1;f=b[w];if(!(null==f||!Qe&&kf(f,d,w-e)||!Pe&&ef(f)&&0===f.size))break;var z=!0}if(!t&&!z)return b;var G;g?G=b:G=Array.prototype.slice.call(b,0,k);b=G;g&&(b.length=k);r&&b.push(r);return b}
;function tg(a){this.F=Nf(a)}
x(tg,qg);var ug=[1,2,3];function vg(a){this.F=Nf(a)}
x(vg,qg);var wg=[1,2,3];function xg(a){this.F=Nf(a)}
x(xg,qg);xg.Ua=[1];function yg(a){this.F=Nf(a)}
x(yg,qg);yg.Ua=[3,6,4];function zg(a){this.F=Nf(a)}
x(zg,qg);zg.Ua=[1];function Ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],z=e[3],G=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var K=z^w&(y^z);var I=1518500249}else K=w^y^z,I=1859775393;else 60>r?(K=w&y|z&(w|y),I=2400959708):(K=w^y^z,I=3395469782);K=((p<<5|p>>>27)&4294967295)+K+G+I+t[r]&4294967295;G=z;z=y;y=(w<<30|w>>>2)&4294967295;w=p;p=K}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var w=24;0<=w;w-=8)p[t++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Cg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Dg(Ag(d),a,c||null)].join(" "):null}
function Dg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),Eg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=Eg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Eg(a){var b=Bg();b.update(a);return b.Xd().toLowerCase()}
;var Fg={};function Gg(a){this.h=a||{cookie:""}}
m=Gg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Ac=function(){return Hg(this).keys};
m.clear=function(){for(var a=Hg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Hg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ig=new Gg("undefined"==typeof document?null:document);function Jg(a){return!!Fg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Kg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Jg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Gg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Jg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Lg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Gg(document)).get(b));return a?Cg(a,c,d):null}
function Mg(a,b){b=void 0===b?!1:b;var c=Ag(String(C.location.href)),d=[];if(Kg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Gg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Cg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Jg(b)&&((b=Lg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Lg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Ng(a){this.F=Nf(a)}
x(Ng,qg);Ng.Ua=[2];function Og(a){pd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
x(Og,pd);Og.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Og.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Og.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Og.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),qd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Pg(a){this.F=Nf(a)}
x(Pg,qg);function Qg(a){this.F=Nf(a)}
x(Qg,qg);function Rg(a){this.h=this.i=this.j=a}
Rg.prototype.reset=function(){this.h=this.i=this.j};
Rg.prototype.getValue=function(){return this.i};function Sg(a){this.F=Nf(a)}
x(Sg,qg);Sg.prototype.Bc=function(){return mg(this)};function Tg(a){this.F=Nf(a)}
x(Tg,qg);function Ug(a){this.F=Nf(a)}
x(Ug,qg);function Vg(a,b){jg(a,Tg,1,b)}
Ug.Ua=[1];function cg(a){this.F=Nf(a)}
x(cg,qg);var Wg=["platform","platformVersion","architecture","model","uaFullVersion"],Xg=new Ug,Yg=null;function Zg(a,b){b=void 0===b?Wg:b;if(!Yg){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Tg;e=og(e,1,d.brand);return og(e,2,d.version)});
Vg(Zf(Xg,2,xf(a.mobile)),c);Yg=a.getHighEntropyValues(b)}return Yg.then(function(d){var e=Xg.clone();b.includes("platform")&&og(e,3,d.platform);b.includes("platformVersion")&&og(e,4,d.platformVersion);b.includes("architecture")&&og(e,5,d.architecture);b.includes("model")&&og(e,6,d.model);b.includes("uaFullVersion")&&og(e,7,d.uaFullVersion);return e}).catch(function(){return Xg.clone()})}
;function $g(a){this.F=Nf(a)}
x($g,qg);function ah(a){this.F=Nf(a,4)}
x(ah,qg);function bh(a){this.F=Nf(a,35)}
x(bh,qg);bh.Ua=[3,20,27];function ch(a){this.F=Nf(a,19)}
x(ch,qg);ch.prototype.Mb=function(a){return pg(this,2,a)};
ch.Ua=[3,5];function dh(a){this.F=Nf(a,7)}
x(dh,qg);var eh=function(a){return function(b){return sg(a,b)}}(dh);
dh.Ua=[5,6];function fh(a){this.F=Nf(a)}
x(fh,qg);var gh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=hg;this.defaultValue=void 0}(175237375,fh);function hh(a){J.call(this);var b=this;this.componentId="";this.j=[];this.fa="";this.ha=this.Z=-1;this.ea=!1;this.A=this.experimentIds=null;this.U=this.m=0;this.va=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new ih(a.logSource,a.eb);this.network=a.network;this.Kb=a.Kb||null;this.bufferSize=1E3;this.Fa=Wa(ud,0,1);this.K=a.hf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.T="undefined"!==typeof URLSearchParams&&null!=(new URL(jh(this))).searchParams;var c=pg(new $g,1,1);kh(this.i,c);this.l=new Rg(1E4);this.h=new Og(this.l.getValue());a=lh(this,a.Xc);ed(this.h,"tick",a,!1,this);this.D=new Og(6E5);
ed(this.D,"tick",a,!1,this);this.Db||this.D.start();this.eb||(ed(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.vc()}),ed(document,"pagehide",this.vc,!1,this))}
x(hh,J);function lh(a,b){return a.T?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=hh.prototype;m.S=function(){this.vc();this.h.stop();this.D.stop();J.prototype.S.call(this)};
function mh(a,b){a.l=new Rg(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){if(this.T){a=a.clone();var b=this.va++;a=Zf(a,21,Cf(b));this.componentId&&og(a,26,this.componentId);if(!lg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Zf(b,1,Cf(c))}null==kg(a,15)&&Zf(a,15,Cf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),ig(b,Ng,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ha>d&&this.Z<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Bc?nh(this.i,this.network.Bc()):nh(this.i,0));var e=oh(this.i,this.j,this.m,this.U,this.Kb);d={};d=(d["Content-Type"]="application/json+protobuf",d);var f=this.Fb();f&&(d.Authorization=f);this.K||(this.K=jh(this));var g=new URL(this.K);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g.searchParams.set("authuser",
this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g.searchParams.set("pageId",this.pageId));if(f&&this.fa===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g.toString(),body:h,Td:1,Pc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());if(r){var w=null;try{var y=
JSON.stringify(JSON.parse(r.replace(")]}'\n","")));w=eh(y)}catch(G){}if(w){r=Number;y="-1";y=void 0===y?"0":y;var z=lg(w);r=r(null!=z?z:y);0<r&&(c.Z=Date.now(),c.ha=c.Z+r);w=gh.ctor?gh.i(w,gh.ctor,gh.h,!0):gh.i(w,gh.h,null,!0);if(r=null===w?void 0:w)w=-1,w=void 0===w?0:w,r=Bf(Xf(r,1)),w=null!=r?r:w,-1!==w&&(c.ea||mh(c,w))}}a&&a();c.U=0},p=function(r,w){var y=e.F;
var z=Ye(y),G=z,K=!(2&z),I=!!(2&G),S=I?1:2;z=1===S;S=2===S;K&&(K=!I);I=Yf(y,G,3);I=Array.isArray(I)?I:lf;var H=Ve(I),fa=!!(4&H);if(!fa){var L=H;0===L&&(L=fg(L,G,!1));L=Xe(L,1,!0);H=I;var X=G,da=!!(2&L);da&&(X=Xe(X,2,!0));for(var ma=!da,na=!0,sb=0,Mc=0;sb<H.length;sb++){var Nc=Kf(H[sb],bh,X);if(Nc instanceof bh){if(!da){var ce=!!(Ve(Nc.F)&2);ma&&(ma=!ce);na&&(na=ce)}H[Mc++]=Nc}}Mc<sb&&(H.length=Mc);L=Xe(L,4,!0);L=Xe(L,16,na);L=Xe(L,8,ma);We(H,L);da&&Object.freeze(H);H=L}L=!!(8&H)||z&&!I.length;if(K&&
!L){dg(H)&&(I=Re(I),H=fg(H,G,!1),G=$f(y,G,3,I));K=I;for(L=0;L<K.length;L++)X=K[L],da=Wf(X),X!==da&&(K[L]=da);H=Xe(H,8,!0);H=Xe(H,16,!K.length);We(K,H)}dg(H)||(K=H,z?H=Xe(H,!I.length||16&H&&(!fa||32&H)?2:2048,!0):H=Xe(H,32,!1),H!==K&&We(I,H),z&&Object.freeze(I));S&&dg(H)&&(I=Re(I),H=fg(H,G,!1),We(I,H),$f(y,G,3,I));y=I;G=kg(e,14);z=c.l;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.fa=f);G&&(c.m+=G);void 0===w&&(w=c.isRetryable(r));
w&&(c.j=y.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.U},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Pc["Content-Encoding"]="gzip";l.Pc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.vc=function(){ph(this.i,!0);this.flush();ph(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function jh(a){return.01>a.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true"}
function ih(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new ch;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));kh(this,new $g)}
ih.prototype.Mb=function(a){this.h.Mb(a);return this};
function kh(a,b){ig(a.h,$g,1,b);mg(b)||pg(b,1,1);if(!a.eb){b=qh(a);var c=Xf(b,5);(null==c||"string"===typeof c)&&c||og(b,5,a.locale)}a.uach&&(b=qh(a),hg(b,Ug,9)||ig(b,Ug,9,a.uach))}
function nh(a,b){ag(rh(a))&&(a=sh(a),pg(a,1,b))}
function ph(a,b){ag(rh(a))&&(a=sh(a),Zf(a,2,xf(b)))}
function rh(a){return hg(a.h,$g,1)}
function th(a,b){var c=void 0===c?Wg:c;var d=a.eb?void 0:window;d?b(d,c).then(function(e){a.uach=e;e=qh(a);ig(e,Ug,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function qh(a){a=rh(a);var b=hg(a,cg,11);b||(b=new cg,ig(a,cg,11,b));return b}
function sh(a){a=qh(a);var b=hg(a,Sg,10);b||(b=new Sg,Zf(b,2,xf(!1)),ig(a,Sg,10,b));return b}
function oh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(ag(rh(a))){var h=sh(a);Zf(h,3,Af(d))}ag(rh(a))&&(d=sh(a),Zf(d,4,Af(f)));ag(rh(a))&&(f=sh(a),Zf(f,5,Af(g)));a=a.h.clone();g=Date.now().toString();a=Zf(a,4,Cf(g));b=jg(a,bh,3,b);e&&(a=new Pg,e=Zf(a,13,Af(e)),a=new Qg,e=ig(a,Pg,2,e),a=new ah,e=ig(a,Qg,1,e),e=pg(e,2,9),ig(b,ah,18,e));c&&Zf(b,14,Cf(c));return b}
;function uh(){}
uh.prototype.serialize=function(a){var b=[];vh(this,a,b);return b.join("")};
function vh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),wh(d,c),c.push(":"),vh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":wh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},yh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function wh(a,b){b.push('"',a.replace(yh,function(c){var d=xh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),xh[c]=d);return d}),'"')}
;function zh(){}
zh.prototype.h=null;zh.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ah(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Bh;function Ch(){}
Ya(Ch,zh);function Dh(a){return(a=Ah(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ah(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Bh=new Ch;function Eh(a){pd.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.K=this.J=null;this.l=this.ea="";this.j=this.Z=this.A=this.U=!1;this.m=0;this.D=null;this.Fa="";this.ha=this.va=!1}
Ya(Eh,pd);var Fh=/^https?$/i,Gh=["POST","PUT"],Hh=[];function Ih(a,b,c,d,e,f,g){var h=new Eh;Hh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.va=g);h.send(a,c,d,e)}
m=Eh.prototype;m.Vd=function(){this.dispose();jb(Hh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.U=!1;this.i=!0;this.J=this.T?Dh(this.T):Dh(Bh);this.K=this.T?this.T.getOptions():Bh.getOptions();this.J.onreadystatechange=Va(this.sd,this);try{this.getStatus(),this.Z=!0,this.J.open(b,String(a),!0),this.Z=!1}catch(g){this.getStatus();Jh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=db(Gh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Fa&&(this.J.responseType=this.Fa);"withCredentials"in this.J&&this.J.withCredentials!==this.va&&(this.J.withCredentials=this.va);try{Kh(this),0<this.m&&(this.ha=Lh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Va(this.Hd,
this)):this.D=ee(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Jh(this,g)}};
function Lh(a){return Dc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof La&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),qd(this,"timeout"),this.abort(8))};
function Jh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Mh(a);Nh(a)}
function Mh(a){a.U||(a.U=!0,qd(a,"complete"),qd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,qd(this,"complete"),qd(this,"abort"),Nh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Nh(this,!0));Eh.Ba.S.call(this)};
m.sd=function(){this.aa()||(this.Z||this.A||this.j?Oh(this):this.Ce())};
m.Ce=function(){Oh(this)};
function Oh(a){if(a.i&&"undefined"!=typeof La)if(a.K[1]&&4==Ph(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Ph(a))ee(a.sd,0,a);else if(qd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Qh(a))qd(a,"complete"),qd(a,"success");else{try{var b=2<Ph(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Mh(a)}}finally{Nh(a)}}}
function Nh(a,b){if(a.J){Kh(a);var c=a.J,d=a.K[0]?function(){}:null;
a.J=null;a.K=null;b||qd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Kh(a){a.J&&a.ha&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Ph(this)};
function Qh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Fh.test(a?a.toLowerCase():"");c=b}return c}
function Ph(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Ph(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Rh(){}
Rh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Ih(a.url,function(d){d=d.target;if(Qh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Pc,a.timeoutMillis,a.withCredentials)};
Rh.prototype.Bc=function(){return 1};function Sh(a,b){J.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Rh}
x(Sh,J);Sh.prototype.ed=function(){this.U=!0;return this};function Th(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;J.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Sh(a,"0"),a.componentId=b,sc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new hh({logSource:a.logSource,Fb:a.Fb?a.Fb:Mg,sessionIndex:a.sessionIndex,hf:a.i,eb:a.j,Db:!1,ed:a.U,pageId:a.pageId,Xc:a.Xc,network:a.network?a.network:void 0}),sc(a,b),a.A&&kh(b.i,a.A),a.h&&(c=a.h,d=qh(b.i),og(d,7,c)),a.m&&(b.A=
a.m),a.componentId&&(b.componentId=a.componentId),a.Kb&&(b.Kb=a.Kb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Ng),c=b.experimentIds,d=d.serialize(),og(c,4,d)):b.experimentIds&&Zf(b.experimentIds,4)),a.K&&(c=a.K,b.experimentIds||(b.experimentIds=new Ng),eg(b.experimentIds,2,c,ng)),a.D&&(c=a.D,b.ea=!0,mh(b,c)),th(b.i,Zg),a.T&&th(b.i,a.T),a.network.Mb&&a.network.Mb(a.logSource),a.network.We&&a.network.We(b),a=b);this.h=a}
x(Th,J);
Th.prototype.flush=function(a){var b=a||[];if(b.length){a=new zg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new yg;f=og(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].oa);f=eg(f,3,g,Hf);g=[];h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.v;for(var p=e.xc(l)||[],t=[],r=0;r<p.length;r++){var w=p[r],y=w&&w.h;w=new vg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&gg(w,1,wg,Cf(y));break;case 2:y=Number(y);if(null!=
y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);gg(w,2,wg,y)}t.push(w)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new xg;t=ig(r,vg,2,t);r=l;w=[];y=[];for(var z=0;z<e.i.length;z++)y.push(e.i[z].pa);for(z=0;z<y.length;z++){var G=y[z],K=r[z],I=new tg;switch(G){case 3:gg(I,1,ug,If(String(K)));break;case 2:G=Number(K);Number.isFinite(G)&&gg(I,2,ug,Af(G));break;case 1:gg(I,3,ug,xf("true"===K))}w.push(I)}jg(t,tg,1,w);g.push(t)}}jg(f,xg,4,g);c.push(f);
e.clear()}jg(a,yg,1,c);b=this.h;b.T&&(a instanceof bh?b.log(a):(c=new bh,a=a.serialize(),a=og(c,8,a),b.log(a)));this.h.flush()}};function Uh(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=Vh()}
Uh.prototype.start=function(){this.h=Vh()};
Uh.prototype.done=function(){null!=this.h&&this.logger.pd(this.event,Vh()-this.h)};
function Wh(){}
m=Wh.prototype;m.Gc=function(){};
m.pd=function(){};
m.ec=function(){};
m.od=function(){};
m.Pa=function(){};
function Xh(a,b){this.i=b;this.l=new Map;this.v=new Th(1828,"","",!1,"",void 0,new Rh);this.h=new fe(this.v);this.K=new le(this.h);this.T=new oe(this.h);this.U=new pe(this.h);this.D=new ke(this.h);this.m=new me(this.h);this.A=new ne(this.h);this.j=re(a);(new je(this.h)).h.Pb("/client_streamz/bg/fic",this.i)}
m=Xh.prototype;m.Gc=function(){this.T.h.Pb("/client_streamz/bg/fsc",this.j,this.i)};
m.pd=function(a,b){0===a?this.K.record(b,this.j,this.i):1===a&&this.U.record(b,this.j,this.i)};
m.ec=function(a,b){this.D.h.Pb("/client_streamz/bg/fiec",this.j,this.i,a,b)};
function Yh(a,b,c){var d,e=null!=(d=a.l.get(c))?d:0;++e;a.l.set(c,e);a.m.h.Pb("/client_streamz/bg/fcc",c,a.i);150>=e&&a.A.record(b,c,a.i)}
m.od=function(a,b,c){b?Yh(this,a,1):c?Yh(this,a,2):Yh(this,a,3)};
m.Pa=function(){this.h.Pa()};
function Vh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Zh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function $h(a){function b(p,t,r){Promise.resolve().then(function(){l.done();k.resolve({Rd:p,Ze:t,eg:r})})}
function c(p,t,r){d.na.od(p,t,r)}
var d=this;this.h=!1;var e=a.program;var f=a.ke;if(!1!==a.Ie){var g,h;this.na=null!=(h=a.na)?h:new Xh(f,null!=(g=a.dg)?g:"_")}else this.na=new Wh;var k=new Zh;this.i=k.promise;var l=new Uh(this.na,0,!1);C[f]?C[f].a||(this.na.ec(2,""),this.na.Pa()):(this.na.ec(1,""),this.na.Pa());try{var n=C[f].a;l.start();this.j=v(n(e,b,!0,a.og,c)).next().value;this.Ye=k.promise.then(function(){})}catch(p){throw this.na.ec(4,p.message),this.na.Pa(),p;
}}
$h.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.na.Gc();return this.i.then(function(c){var d=c.Rd;return new Promise(function(e){var f=new Uh(b.na,1);d(function(g){f.done();e(g)},[a.dd,
a.af,a.kf])})})};
$h.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.na.Gc();var b=new Uh(this.na,1);a=this.j([a.dd,a.af,a.kf]);b.done();return a};
$h.prototype.dispose=function(){this.na.Pa();this.h=!0;this.i.then(function(a){(a=a.Ze)&&a()})};
$h.prototype.aa=function(){return this.h};var ai=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");var bi=ia([""]),ci=ka(["\x00"],["\\0"]),di=ka(["\n"],["\\n"]),ei=ka(["\x00"],["\\u0000"]);function fi(a){return-1===a.toString().indexOf("`")}
fi(function(a){return a(bi)})||fi(function(a){return a(ci)})||fi(function(a){return a(di)})||fi(function(a){return a(ei)});function gi(a){this.te=a}
function hi(a){return new gi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ii=[hi("data"),hi("http"),hi("https"),hi("mailto"),hi("ftp"),new gi(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ji="function"===typeof URL;
function ki(a){if(a instanceof Gb)a instanceof Gb&&a.constructor===Gb?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if(ji){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function li(a,b){b=ki(b);void 0!==b&&(a.href=b)}
;function mi(){}
function ni(a){this.h=a}
x(ni,mi);ni.prototype.toString=function(){return this.h};function oi(a){var b="true".toString(),c=[new ni(pi[0].toLowerCase(),Wb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ni)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function qi(){throw Error("unknown trace type");}
;var ri="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function si(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===ri.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ki(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function ti(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ui(a){var b=ti(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function vi(a,b){if(b instanceof Xb)b=b.vd;else throw Error("");a.textContent=b;ui(a)}
function wi(a,b){a.src=Db(b);ui(a)}
;function xi(a){var b=yi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function zi(){var a=[];xi(function(b){a.push(b)});
return a}
var yi={lf:"allow-forms",mf:"allow-modals",nf:"allow-orientation-lock",pf:"allow-pointer-lock",qf:"allow-popups",rf:"allow-popups-to-escape-sandbox",sf:"allow-presentation",tf:"allow-same-origin",uf:"allow-scripts",vf:"allow-top-navigation",wf:"allow-top-navigation-by-user-activation"},Ai=cb(function(){return zi()});
function Bi(){var a=Ci(),b={};eb(Ai(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ci(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Di(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Ei=(new Date).getTime();function Fi(a){pd.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ra:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Gi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||Hi(this)}
x(Fi,pd);function Ii(){var a=Ji;Fi.h||(Fi.h=new Fi(a));return Fi.h}
Fi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.ra(this.A);delete Fi.h};
Fi.prototype.xa=function(){return this.i};
function Hi(a){a.A=a.Da.qa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Gi(a),3):c.yield(Gi(a),3);Hi(a);c.h=0})},3E4)}
function Gi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.qa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Da.ra(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?qd(a,"networkstatus-online"):qd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ki(){this.data=[];this.h=-1}
Ki.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ki.prototype.get=function(a){return!!this.data[a]};
function Li(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Mi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Mi.prototype[Symbol.iterator]=function(){return this};
Mi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ni(a,b){return new Mi(a,b)}
;function Oi(){this.blockSize=-1}
;function Pi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(Pi,Oi);Pi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Qi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Pi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Qi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Qi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Qi(this,e);f=0;break}}this.i=f;this.l+=b}};
Pi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Qi(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ri(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Si(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ti(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ri(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Ui(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ti(a,"inverted-hdpi")&&Si(a,Array.prototype.filter.call(a.classList?a.classList:Ri(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Vi(){}
Vi.prototype.next=function(){return Wi};
var Wi={done:!0,value:void 0};function Xi(a){return{value:a,done:!1}}
Vi.prototype.Ga=function(){return this};function Yi(a){if(a instanceof Zi||a instanceof $i||a instanceof aj)return a;if("function"==typeof a.next)return new Zi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Zi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Zi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Zi(a){this.i=a}
Zi.prototype.Ga=function(){return new $i(this.i())};
Zi.prototype[Symbol.iterator]=function(){return new aj(this.i())};
Zi.prototype.h=function(){return new aj(this.i())};
function $i(a){this.i=a}
x($i,Vi);$i.prototype.next=function(){return this.i.next()};
$i.prototype[Symbol.iterator]=function(){return new aj(this.i)};
$i.prototype.h=function(){return new aj(this.i)};
function aj(a){Zi.call(this,function(){return a});
this.j=a}
x(aj,Zi);aj.prototype.next=function(){return this.j.next()};function bj(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof bj)for(c=a.Ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=bj.prototype;m.Ac=function(){cj(this);return this.h.concat()};
m.has=function(a){return dj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ej;cj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ej(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return dj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&cj(this),!0):!1};
function cj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];dj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],dj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return dj(this.i,a)?this.i[a]:b};
m.set=function(a,b){dj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new bj(this)};
m.keys=function(){return Yi(this.Ga(!0)).h()};
m.values=function(){return Yi(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Ni(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){cj(this);var b=0,c=this.Wa,d=this,e=new Vi;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Wi;var f=d.h[b++];return Xi(a?f:d.i[f])};
return e};
function dj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function M(a){J.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Ya(M,J);m=M.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.zb(a)}return!1};
m.zb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&jb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];fj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.aa();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.zb(c)}}return 0!=e}return!1};
function fj(a,b,c){Jd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.zb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){M.Ba.S.call(this);this.clear();this.j.length=0};function gj(a){this.h=a}
gj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new uh).serialize(b))};
gj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gj.prototype.remove=function(a){this.h.remove(a)};function hj(a){this.h=a}
Ya(hj,gj);function ij(a){this.data=a}
function jj(a){return void 0===a||a instanceof ij?a:new ij(a)}
hj.prototype.set=function(a,b){hj.Ba.set.call(this,a,jj(b))};
hj.prototype.i=function(a){a=hj.Ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kj(a){this.h=a}
Ya(kj,hj);kj.prototype.set=function(a,b,c){if(b=jj(b)){if(c){if(c<Xa()){kj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}kj.Ba.set.call(this,a,b)};
kj.prototype.i=function(a){var b=kj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())kj.prototype.remove.call(this,a);else return b}};function lj(){}
;function mj(){}
Ya(mj,lj);mj.prototype[Symbol.iterator]=function(){return Yi(this.Ga(!0)).h()};
mj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function nj(a){this.h=a;this.i=null}
Ya(nj,mj);m=nj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){oj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){oj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){oj(this);this.h.removeItem(a)};
m.Ga=function(a){oj(this);var b=0,c=this.h,d=new Vi;d.next=function(){if(b>=c.length)return Wi;var e=c.key(b++);if(a)return Xi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Xi(e)};
return d};
m.clear=function(){oj(this);this.h.clear()};
m.key=function(a){oj(this);return this.h.key(a)};
function oj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Cd(Error("Storage mechanism: Storage unavailable"))}
;function pj(){var a=null;try{a=C.localStorage||null}catch(b){}nj.call(this,a)}
Ya(pj,nj);function qj(a,b){this.i=a;this.h=null;var c;if(c=Dc)c=!(9<=Number(Sc));if(c){rj||(rj=new bj);this.h=rj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),rj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(qj,mj);var sj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},rj=null;function tj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return sj[b]})}
m=qj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(tj(a),b);uj(this)};
m.get=function(a){a=this.h.getAttribute(tj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(tj(a));uj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Vi;d.next=function(){if(b>=c.length)return Wi;var e=c[b++];if(a)return Xi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Xi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);uj(this)};
function uj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function vj(a,b){this.i=a;this.h=b+"::"}
Ya(vj,mj);vj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
vj.prototype.get=function(a){return this.i.get(this.h+a)};
vj.prototype.remove=function(a){this.i.remove(this.h+a)};
vj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Vi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Xi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},wj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var xj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},yj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
N.Xe=function(){wj?(N.lb=Uint8Array,N.Ia=Uint16Array,N.Nd=Int32Array,N.assign(N,xj)):(N.lb=Array,N.Ia=Array,N.Nd=Array,N.assign(N,yj))};
N.Xe();var zj=!0;try{new Uint8Array(1)}catch(a){zj=!1}
function Aj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Bj={};Bj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Cj={},Dj,Ej=[],Fj=0;256>Fj;Fj++){Dj=Fj;for(var Gj=0;8>Gj;Gj++)Dj=Dj&1?3988292384^Dj>>>1:Dj>>>1;Ej[Fj]=Dj}Cj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ej[(a^b[d])&255];return a^-1};var Hj={};Hj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ij(a){for(var b=a.length;0<=--b;)a[b]=0}
var Jj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Kj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Lj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Mj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Nj=Array(576);Ij(Nj);var Oj=Array(60);Ij(Oj);var Pj=Array(512);Ij(Pj);var Qj=Array(256);Ij(Qj);var Rj=Array(29);Ij(Rj);var Sj=Array(30);Ij(Sj);function Tj(a,b,c,d,e){this.Fd=a;this.de=b;this.ce=c;this.Yd=d;this.ze=e;this.ld=a&&a.length}
var Uj,Vj,Wj;function Xj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Yj(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Zj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Yj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function ak(a,b,c){Zj(a,c[2*b],c[2*b+1])}
function bk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function ck(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=bk(d[e]++,e))}
function dk(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.sa[512]=1;a.Oa=a.yb=0;a.za=a.matches=0}
function ek(a){8<a.ga?Yj(a,a.ma):0<a.ga&&(a.X[a.pending++]=a.ma);a.ma=0;a.ga=0}
function fk(a,b,c){ek(a);Yj(a,c);Yj(a,~c);N.mb(a.X,a.window,b,c,a.pending);a.pending+=c}
function gk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function hk(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Ma;){e<a.Ma&&gk(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(gk(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function ik(a,b,c){var d=0;if(0!==a.za){do{var e=a.X[a.Cb+2*d]<<8|a.X[a.Cb+2*d+1];var f=a.X[a.Fc+d];d++;if(0===e)ak(a,f,b);else{var g=Qj[f];ak(a,g+256+1,b);var h=Jj[g];0!==h&&(f-=Rj[g],Zj(a,f,h));e--;g=256>e?Pj[e]:Pj[256+(e>>>7)];ak(a,g,c);h=Kj[g];0!==h&&(e-=Sj[g],Zj(a,e,h))}}while(d<a.za)}ak(a,256,b)}
function jk(a,b){var c=b.gd,d=b.Va.Fd,e=b.Va.ld,f=b.Va.Yd,g,h=-1;a.Ma=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Y[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.yb-=d[2*k+1])}b.vb=h;for(g=a.Ma>>1;1<=g;g--)hk(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Ma--],hk(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,hk(a,c,1);while(2<=a.Ma);a.Y[--a.qb]=
a.Y[1];g=b.gd;k=b.vb;d=b.Va.Fd;e=b.Va.ld;f=b.Va.de;var l=b.Va.ce,n=b.Va.ze,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var w=0;r>=l&&(w=f[r-l]);var y=g[2*r];a.Oa+=y*(p+w);e&&(a.yb+=y*(d[2*r+1]+w))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}ck(c,h,a.Ja)}
function kk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function lk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do ak(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(ak(a,l,a.ia),g--),ak(a,16,a.ia),Zj(a,g-3,2)):10>=g?(ak(a,17,a.ia),Zj(a,g-3,3)):(ak(a,18,a.ia),Zj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function mk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var nk=!1;function ok(a,b,c){a.X[a.Cb+2*a.za]=b>>>8&255;a.X[a.Cb+2*a.za+1]=b&255;a.X[a.Fc+a.za]=c&255;a.za++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Qj[c]+256+1)]++,a.bb[2*(256>b?Pj[b]:Pj[256+(b>>>7)])]++);return a.za===a.Hb-1}
;function pk(a,b){a.msg=Hj[b];return b}
function qk(a){for(var b=a.length;0<=--b;)a[b]=0}
function rk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(N.mb(a.output,b.X,b.Jb,c,a.wb),a.wb+=c,b.Jb+=c,a.Tc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Jb=0))}
function sk(a,b){var c=0<=a.wa?a.wa:-1,d=a.o-a.wa,e=0;if(0<a.level){2===a.I.uc&&(a.I.uc=mk(a));jk(a,a.dc);jk(a,a.Yb);kk(a,a.sa,a.dc.vb);kk(a,a.bb,a.Yb.vb);jk(a,a.Yc);for(e=18;3<=e&&0===a.ia[2*Mj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Zj(a,b?1:0,3),fk(a,c,d);else if(4===a.strategy||g===f)Zj(a,2+(b?1:0),3),ik(a,Nj,Oj);else{Zj(a,4+(b?1:0),3);c=a.dc.vb+1;d=a.Yb.vb+1;e+=1;Zj(a,c-257,5);Zj(a,d-1,5);Zj(a,e-4,4);for(f=0;f<e;f++)Zj(a,a.ia[2*
Mj[f]+1],3);lk(a,a.sa,c-1);lk(a,a.bb,d-1);ik(a,a.sa,a.bb)}dk(a);b&&ek(a);a.wa=a.o;rk(a.I)}
function O(a,b){a.X[a.pending++]=b}
function tk(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function uk(a,b){var c=a.qd,d=a.o,e=a.ya,f=a.rd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.ya>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.ub=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function vk(a){var b=a.ka,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){N.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.wa-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,N.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=Bj(e.H,c,g,f):2===e.state.wrap&&(e.H=Cj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ta)for(d=a.o-a.ta,a.M=a.window[d],
a.M=(a.M<<a.La^a.window[d+1])&a.Ka;a.ta&&!(a.M=(a.M<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.ta--,3>a.u+a.ta););}while(262>a.u&&0!==a.I.la)}
function wk(a,b){for(var c;;){if(262>a.u){vk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=uk(a,c));if(3<=a.R)if(c=ok(a,a.o-a.ub,a.R-3),a.u-=a.R,a.R<=a.Hc&&3<=a.u){a.R--;do a.o++,a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.La^a.window[a.o+1])&a.Ka;else c=ok(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(sk(a,!1),0===a.I.P))return 1}a.ta=2>a.o?a.o:2;return 4===b?(sk(a,!0),0===a.I.P?3:4):a.za&&(sk(a,!1),0===a.I.P)?1:2}
function xk(a,b){for(var c,d;;){if(262>a.u){vk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.ya=a.R;a.ud=a.ub;a.R=2;0!==c&&a.ya<a.Hc&&a.o-c<=a.ka-262&&(a.R=uk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.ub)&&(a.R=2));if(3<=a.ya&&a.R<=a.ya){d=a.o+a.u-3;c=ok(a,a.o-1-a.ud,a.ya-3);a.u-=a.ya-1;a.ya-=2;do++a.o<=d&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.ya);a.fb=0;a.R=2;a.o++;if(c&&(sk(a,!1),0===a.I.P))return 1}else if(a.fb){if((c=ok(a,0,a.window[a.o-1]))&&sk(a,!1),a.o++,a.u--,0===a.I.P)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(ok(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(sk(a,!0),0===a.I.P?3:4):a.za&&(sk(a,!1),0===a.I.P)?1:2}
function yk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){vk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.R=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.u&&(a.R=a.u)}3<=a.R?(c=ok(a,1,a.R-3),a.u-=a.R,a.o+=a.R,a.R=0):(c=ok(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(sk(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(sk(a,!0),0===a.I.P?3:4):
a.za&&(sk(a,!1),0===a.I.P)?1:2}
function zk(a,b){for(var c;;){if(0===a.u&&(vk(a),0===a.u)){if(0===b)return 1;break}a.R=0;c=ok(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(sk(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(sk(a,!0),0===a.I.P?3:4):a.za&&(sk(a,!1),0===a.I.P)?1:2}
function Ak(a,b,c,d,e){this.le=a;this.ye=b;this.Be=c;this.xe=d;this.ge=e}
var Bk;Bk=[new Ak(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(1>=a.u){vk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.wa+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,sk(a,!1),0===a.I.P)return 1;if(a.o-a.wa>=a.ka-262&&(sk(a,!1),0===a.I.P))return 1}a.ta=0;if(4===b)return sk(a,!0),0===a.I.P?3:4;a.o>a.wa&&sk(a,!1);return 1}),
new Ak(4,4,8,4,wk),new Ak(4,5,16,8,wk),new Ak(4,6,32,32,wk),new Ak(4,4,16,16,xk),new Ak(8,16,32,32,xk),new Ak(8,16,128,128,xk),new Ak(8,32,128,256,xk),new Ak(32,128,258,1024,xk),new Ak(32,258,258,4096,xk)];
function Ck(){this.I=null;this.status=0;this.X=null;this.wrap=this.pending=this.Jb=this.Aa=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Vc=this.ka=0;this.window=null;this.Ld=0;this.head=this.Ha=null;this.rd=this.kd=this.strategy=this.level=this.Hc=this.qd=this.ya=this.u=this.ub=this.o=this.fb=this.ud=this.R=this.wa=this.La=this.Ka=this.Cc=this.cc=this.M=0;this.sa=new N.Ia(1146);this.bb=new N.Ia(122);this.ia=new N.Ia(78);qk(this.sa);qk(this.bb);qk(this.ia);this.Yc=this.Yb=this.dc=
null;this.Ja=new N.Ia(16);this.Y=new N.Ia(573);qk(this.Y);this.qb=this.Ma=0;this.depth=new N.Ia(573);qk(this.depth);this.ga=this.ma=this.ta=this.matches=this.yb=this.Oa=this.Cb=this.za=this.Hb=this.Fc=0}
function Dk(a,b){if(!a||!a.state||5<b||0>b)return a?pk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return pk(a,0===a.P?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,O(c,31),O(c,139),O(c,8),c.G?(O(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),O(c,c.G.time&255),O(c,c.G.time>>8&255),O(c,c.G.time>>16&255),O(c,c.G.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(O(c,c.G.extra.length&255),O(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=Cj(a.H,c.X,c.pending,0)),c.Ca=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;tk(c,e+(31-e%31));0!==c.o&&(tk(c,a.H>>>16),tk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.Aa||
(c.G.Ra&&c.pending>e&&(a.H=Cj(a.H,c.X,c.pending-e,e)),rk(a),e=c.pending,c.pending!==c.Aa));)O(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=Cj(a.H,c.X,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.Aa&&(c.G.Ra&&c.pending>e&&(a.H=Cj(a.H,c.X,c.pending-e,e)),rk(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=Cj(a.H,c.X,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.G.Ra&&c.pending>e&&(a.H=Cj(a.H,c.X,c.pending-e,e)),rk(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=Cj(a.H,c.X,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.Aa&&rk(a),c.pending+2<=c.Aa&&(O(c,a.H&
255),O(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(rk(a),0===a.P)return c.sb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return pk(a,-5);if(666===c.status&&0!==a.la)return pk(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?zk(c,b):3===c.strategy?yk(c,b):Bk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.sb=-1),0;if(2===d&&(1===b?(Zj(c,2,3),ak(c,256,Nj),16===c.ga?(Yj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.X[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Zj(c,0,3),fk(c,0,0),3===b&&(qk(c.head),0===c.u&&(c.o=0,c.wa=0,c.ta=0))),rk(a),0===a.P))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.H&255),O(c,a.H>>8&255),O(c,a.H>>16&255),O(c,a.H>>24&255),O(c,a.kb&255),O(c,a.kb>>8&255),O(c,a.kb>>16&255),O(c,a.kb>>24&255)):(tk(c,a.H>>>16),tk(c,a.H&65535));rk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ek={};Ek=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Tc=this.P=this.wb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var Fk=Object.prototype.toString;
function Gk(a){if(!(this instanceof Gk))return new Gk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new Ek;this.I.P=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=pk(b,-2);else{8===e&&(e=9);var k=new Ck;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Vc=e;k.ka=1<<k.Vc;k.Xa=k.ka-1;k.Cc=f+7;k.cc=1<<k.Cc;k.Ka=k.cc-1;k.La=~~((k.Cc+3-1)/3);k.window=new N.lb(2*k.ka);k.head=new N.Ia(k.cc);k.Ha=new N.Ia(k.ka);k.Hb=1<<f+6;k.Aa=4*k.Hb;k.X=new N.lb(k.Aa);k.Cb=1*k.Hb;k.Fc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Tc=0;b.uc=2;c=b.state;c.pending=0;c.Jb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!nk){d=Array(16);for(f=g=0;28>f;f++)for(Rj[f]=g,e=0;e<1<<Jj[f];e++)Qj[g++]=f;Qj[g-1]=f;for(f=g=0;16>f;f++)for(Sj[f]=g,e=0;e<1<<Kj[f];e++)Pj[g++]=f;for(g>>=7;30>f;f++)for(Sj[f]=g<<7,e=0;e<1<<Kj[f]-7;e++)Pj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Nj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Nj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Nj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Nj[2*e+1]=8,e++,d[8]++;ck(Nj,287,d);for(e=0;30>e;e++)Oj[2*e+1]=5,Oj[2*e]=bk(e,5);Uj=new Tj(Nj,Jj,257,286,15);Vj=new Tj(Oj,
Kj,0,30,15);Wj=new Tj([],Lj,0,19,7);nk=!0}c.dc=new Xj(c.sa,Uj);c.Yb=new Xj(c.bb,Vj);c.Yc=new Xj(c.ia,Wj);c.ma=0;c.ga=0;dk(c);c=0}else c=pk(b,-2);0===c&&(b=b.state,b.Ld=2*b.ka,qk(b.head),b.Hc=Bk[b.level].ye,b.kd=Bk[b.level].le,b.rd=Bk[b.level].Be,b.qd=Bk[b.level].xe,b.o=0,b.wa=0,b.u=0,b.ta=0,b.R=b.ya=2,b.fb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(Hj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Aj(a.dictionary):
"[object ArrayBuffer]"===Fk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=Bj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(qk(l.head),l.o=0,l.wa=0,l.ta=0),c=new N.lb(l.ka),N.mb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(vk(l);3<=l.u;){f=l.o;g=l.u-2;do l.M=(l.M<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.u=2;vk(l)}l.o+=l.u;l.wa=l.o;l.ta=l.u;l.u=0;l.R=l.ya=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Hj[b]);this.Pf=!0}}
Gk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Aj(a):"[object ArrayBuffer]"===Fk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.P&&(c.output=new N.lb(d),c.wb=0,c.P=d);a=Dk(c,e);if(1!==a&&0!==a)return Hk(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=N.Sc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&zj||!b.subarray))b=
String.fromCharCode.apply(null,N.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Sc(c.output,c.wb),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=pk(c,-2):(c.state=null,a=113===d?pk(c,-3):0)):a=-2,Hk(this,a),this.ended=!0,0===a;2===e&&(Hk(this,0),c.P=0);return!0};
function Hk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Ik(a,b){b=b||{};b.gzip=!0;b=new Gk(b);b.push(a,!0);if(b.err)throw b.msg||Hj[b.err];return b.result}
;function Jk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Fb(a):b=null;return b}
;function Kk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function Lk(a){this.name=a}
;var Mk=new Lk("rawColdConfigGroup");var Nk=new Lk("rawHotConfigGroup");function Ok(a){this.F=Nf(a)}
x(Ok,qg);var Pk=new Lk("continuationCommand");var Qk=new Lk("webCommandMetadata");var Rk=new Lk("signalServiceEndpoint");var Sk={Bf:"EMBEDDED_PLAYER_MODE_UNKNOWN",yf:"EMBEDDED_PLAYER_MODE_DEFAULT",Af:"EMBEDDED_PLAYER_MODE_PFP",zf:"EMBEDDED_PLAYER_MODE_PFL"};var Tk=new Lk("feedbackEndpoint");function Uk(a){this.F=Nf(a)}
x(Uk,qg);Uk.prototype.setTrackingParams=function(a){return Zf(this,1,jf(a,!0))};var Vk=new Lk("webPlayerShareEntityServiceEndpoint");var Wk=new Lk("playlistEditEndpoint");var Xk=new Lk("modifyChannelNotificationPreferenceEndpoint");var Yk=new Lk("unsubscribeEndpoint");var Zk=new Lk("subscribeEndpoint");function $k(){var a=al;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function bl(a){D("yt.ads.biscotti.lastId_",a)}
;function cl(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var dl=C.window,el,fl,gl=(null==dl?void 0:null==(el=dl.yt)?void 0:el.config_)||(null==dl?void 0:null==(fl=dl.ytcfg)?void 0:fl.data_)||{};D("yt.config_",gl);function hl(){cl(gl,arguments)}
function P(a,b){return a in gl?gl[a]:b}
function il(a){var b=gl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var jl=[];function kl(a){jl.forEach(function(b){return b(a)})}
function ll(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ml(b)}}:a}
function ml(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),hl("ERRORS",b));kl(a)}
function nl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),hl("ERRORS",f))}
;var ol=/^[\w.]*$/,pl={q:!0,search_query:!0};function ql(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=rl(f[0]||""),h=rl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?kb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,n=f[0],p=String(ql);l.args=[{key:n,value:f[1],query:a,method:sl===p?"unchanged":p}];pl.hasOwnProperty(n)||nl(l)}}return c}
var sl=String(ql);function tl(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];eb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ul(a){"?"===a.charAt(0)&&(a=a.substring(1));return ql(a,"&")}
function vl(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ul(1<a.length?a[1]:a[0])):{}}
function wl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ul(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function xl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(ac(4,b))||null)===(Number(ac(4,a))||null):!0;return a}
function rl(a){return a&&a.match(ol)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function yl(a){var b=zl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ei;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ai:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;var k;e.u_h=null==(k=ai.screen)?void 0:k.height;var l;e.u_w=null==(l=ai.screen)?void 0:l.width;var n;e.u_ah=null==(n=ai.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=ai.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=ai.screen)?void 0:t.colorDepth}catch(na){}h=b.h;try{var r=h.screenX;var w=h.screenY}catch(na){}try{var y=h.outerWidth;var z=h.outerHeight}catch(na){}try{var G=h.innerWidth;var K=h.innerHeight}catch(na){}try{var I=h.screenLeft;var S=h.screenTop}catch(na){}try{G=h.innerWidth,K=h.innerHeight}catch(na){}try{var H=h.screen.availWidth;var fa=h.screen.availTop}catch(na){}r=[I,S,r,w,H,fa,y,z,G,K];try{var L=(b.h.top||window).document,X="CSS1Compat"==
L.compatMode?L.documentElement:L.body;var da=(new wd(X.clientWidth,X.clientHeight)).round()}catch(na){da=new wd(-12245933,-12245933)}L=da;da={};var ma=void 0===ma?C:ma;X=new Ki;"SVGElement"in ma&&"createElementNS"in ma.document&&X.set(0);w=Bi();w["allow-top-navigation-by-user-activation"]&&X.set(1);w["allow-popups-to-escape-sandbox"]&&X.set(2);ma.crypto&&ma.crypto.subtle&&X.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&X.set(4);ma=Li(X);da.bc=ma;da.bih=L.height;da.biw=L.width;da.brdim=r.join();b=
b.i;b=(da.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!ai.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var zl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return tl(yl(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=Al(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Al(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Al(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Bl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Cl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Dl(){if(!Cl)return null;var a=Cl();return"open"in a?a:null}
function El(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Fl(a,b){"function"===typeof a&&(a=ll(a));return window.setTimeout(a,b)}
;var Gl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(Gl),["client_dev_set_cookie"]);var Hl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Il="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(Gl)),Jl=!1;
function Kl(a,b){b=void 0===b?{}:b;var c=xl(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Hl){var f=P(Hl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=tl(yl()));return b}
function Ll(a){var b=window.location.search,c=bc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&xl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ul(b),f={};eb(Il,function(g){e[g]&&(f[g]=e[g])});
return wl(a,f||{},!1)}
function Ml(a,b){var c=b.format||"JSON";a=Nl(a,b);var d=Ol(a,b),e=!1,f=Pl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=El(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Ql(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Fl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Nl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=wl(a,b||{},!0);return a}
function Ol(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ul(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):fc(e));f=e||f&&!ob(f);!Jl&&f&&"POST"!=b.method&&(Jl=!0,ml(Error("AJAX request with postData should use POST")));return e}
function Ql(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,nl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Rl(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Sl(g)})}d&&Tl(e);
return e}
function Tl(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Tl(a[b])}}
function Rl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Sl(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ul(a,b){b.method="POST";b.postParams||(b.postParams={});return Ml(a,b)}
function Pl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ll(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Dl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Ll(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Kl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Vl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Xl={Ta:[],Qa:[{callback:Wl,weight:500}]};function Wl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Yl(){this.Qa=[];this.Ta=[]}
var Zl;function $l(){if(!Zl){var a=Zl=new Yl;a.Ta.length=0;a.Qa.length=0;Xl.Ta&&a.Ta.push.apply(a.Ta,Xl.Ta);Xl.Qa&&a.Qa.push.apply(a.Qa,Xl.Qa)}return Zl}
;var am=new M;function bm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=cm(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=cm(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=cm(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function cm(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function dm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=em(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=bm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?em(f+".ve",g,h,k):0;d+=f;d+=em(e,a[e],b,c);if(500<d)break}}else c[b]=fm(a),d+=c[b].length;else c[b]=fm(a),d+=c[b].length;return d}
function em(a,b,c,d){c+="."+a;a=fm(b);d[c]=a;return c.length+a.length}
function fm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function gm(){this.bf=!0}
function hm(){gm.h||(gm.h=new gm);return gm.h}
function im(a,b){a={};var c=Mg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in gl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in gl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var jm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function km(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function lm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function mm(a,b,c,d,e){Ig.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function nm(a){return Ig.get(""+a,void 0)}
function om(a,b,c){Ig.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function pm(){if(!Ig.isEnabled())return!1;if(Ig.h.cookie)return!0;Ig.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==Ig.get("TESTCOOKIESENABLED"))return!1;Ig.remove("TESTCOOKIESENABLED");return!0}
;var qm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",qm);function rm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=nm(this.h);a&&this.parse(a)}
var sm;function tm(){sm||(sm=new rm);return sm}
m=rm.prototype;m.get=function(a,b){um(a);wm(a);a=void 0!==qm[a]?qm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){um(a);wm(a);if(null==b)throw Error("ExpectedNotNull");qm[a]=b.toString()};
function xm(a){return!!((ym("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){um(a);wm(a);delete qm[a]};
m.clear=function(){for(var a in qm)delete qm[a]};
function wm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function um(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ym(a){a=void 0!==qm[a]?qm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(qm[d]=c.toString())}};var zm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Am={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Bm(){var a=C.navigator;return a?a.connection:void 0}
function Cm(){var a=Bm();if(a){var b=zm[a.type||"unknown"]||"CONN_UNKNOWN";a=zm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Dm(){var a=Bm();if(null!=a&&a.effectiveType)return Am.hasOwnProperty(a.effectiveType)?Am[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
x(U,Error);function Em(){try{return Fm(),!0}catch(a){return!1}}
function Fm(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new U("Datasync ID not set",void 0===a?"unknown":a);}
;function Gm(){}
function Hm(a,b){return Ji.ab(a,0,b)}
Gm.prototype.qa=function(a,b){return this.ab(a,1,b)};
Gm.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Im=T("web_emulated_idle_callback_delay",300),Jm=1E3/60-3,Km=[8,5,4,3,2,1,0];
function Lm(a){a=void 0===a?{}:a;J.call(this);this.i=[];this.j={};this.Z=this.h=0;this.U=this.m=!1;this.K=[];this.T=this.ea=!1;for(var b=v(Km),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=Jm;this.A=0;this.ha=this.De.bind(this);this.pc=this.ef.bind(this);this.Fa=this.Qd.bind(this);this.Za=this.me.bind(this);this.Qb=this.Ge.bind(this);this.va=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
x(Lm,J);m=Lm.prototype;m.Ab=function(a){var b=Xa();Mm(this,a);a=Xa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.Z;if(10===b)return this.Ab(a),this.Z;var d=this.Z;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.U||this.m||(0!==this.h&&Nm(this)!==this.A&&this.stop(),this.start()));return d};
m.ra=function(a){delete this.j[a]};
function Om(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Pm(a){return!a.isHidden()&&a.fa}
function Nm(a){if(a.i[8].length){if(a.T)return 4;if(Pm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Pm(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Mm(a,b){try{b()}catch(c){a.Ib(c)}}
function Qm(a){for(var b=v(Km),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Rm(this,b);this.ea=!1};
m.ef=function(){Rm(this)};
m.Qd=function(){Sm(this)};
m.Ge=function(a){this.T=!0;var b=Nm(this);4===b&&b!==this.A&&(this.stop(),this.start());Rm(this,void 0,a);this.T=!1};
m.De=function(){this.isHidden()||Sm(this);this.h&&(this.stop(),this.start())};
function Sm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Mm(a,e)}Tm(a);a.m=!1;Qm(a)&&a.start();b=Xa()-b;a.D-=b}
function Tm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Rm(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Mm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Mm(a,c)}while(c&&Xa()<b)}a.m=!1;Tm(a);a.D=Jm;Qm(a)&&a.start()}
m.start=function(){this.U=!1;if(0===this.h)switch(this.A=Nm(this),this.A){case 1:var a=this.Za;this.h=this.va?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Im);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.U=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.va?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Om(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);J.prototype.S.call(this)};var Um=E("yt.scheduler.instance.timerIdMap_")||{},Vm=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),Wm=0,Xm=0;function Ym(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.aa())a=new Lm(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Zm(){$m();var a=E("ytglobal.schedulerInstanceInstance_");a&&(qc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function $m(){Om(Ym());for(var a in Um)Um.hasOwnProperty(a)&&delete Um[Number(a)]}
function an(a,b,c){if(!c)return c=void 0===c,-Ym().ab(a,b,c);var d=window.setTimeout(function(){var e=Ym().ab(a,b);Um[d]=e},c);
return d}
function bn(a){Ym().Ab(a)}
function cn(a){var b=Ym();if(0>a)b.ra(-a);else{var c=Um[a];c?(b.ra(c),delete Um[a]):window.clearTimeout(a)}}
function dn(){en()}
function en(){window.clearTimeout(Wm);Ym().start()}
function fn(){Ym().pause();window.clearTimeout(Wm);Wm=window.setTimeout(dn,Vm)}
function gn(){window.clearTimeout(Xm);Xm=window.setTimeout(function(){hn(0)},Vm)}
function hn(a){gn();var b=Ym();b.l=a;b.start()}
function jn(a){gn();var b=Ym();b.l>a&&(b.l=a,b.start())}
function kn(){window.clearTimeout(Xm);var a=Ym();a.l=0;a.start()}
function ln(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Zm),D("yt.scheduler.instance.addJob",an),D("yt.scheduler.instance.addImmediateJob",bn),D("yt.scheduler.instance.cancelJob",cn),D("yt.scheduler.instance.cancelAllJobs",$m),D("yt.scheduler.instance.start",en),D("yt.scheduler.instance.pause",fn),D("yt.scheduler.instance.setPriorityThreshold",hn),D("yt.scheduler.instance.enablePriorityThreshold",jn),D("yt.scheduler.instance.clearPriorityThreshold",kn),D("yt.scheduler.initialized",
!0))}
;function mn(){Gm.apply(this,arguments)}
x(mn,Gm);function nn(){mn.h||(mn.h=new mn);return mn.h}
mn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Fl(a,c||0)};
mn.prototype.ra=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
mn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
mn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Ji=nn();R("web_scheduler_auto_init")&&ln();function on(a){var b=new pj;(b=b.isAvailable()?a?new vj(b,a):b:null)||(a=new qj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new kj(a):null;this.i=document.domain||window.location.hostname}
on.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new uh).serialize(b))}catch(f){return}else e=escape(b);mm(a,e,c,this.i)};
on.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=nm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
on.prototype.remove=function(a){this.h&&this.h.remove(a);om(a,"/",this.i)};var pn=function(){var a;return function(){a||(a=new on("ytidb"));return a}}();
function qn(){var a;return null==(a=pn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var rn=[],sn,tn=!1;function un(){var a={};for(sn=new vn(void 0===a.handleError?wn:a.handleError,void 0===a.logEvent?xn:a.logEvent);0<rn.length;)switch(a=rn.shift(),a.type){case "ERROR":sn.Ib(a.payload);break;case "EVENT":sn.logEvent(a.eventType,a.payload)}}
function yn(a){tn||(sn?sn.Ib(a):(rn.push({type:"ERROR",payload:a}),10<rn.length&&rn.shift()))}
function zn(a,b){tn||(sn?sn.logEvent(a,b):(rn.push({type:"EVENT",eventType:a,payload:b}),10<rn.length&&rn.shift()))}
;function An(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Bn(a){return a.substr(0,a.indexOf(":"))||a}
;var Cn=ue||ve;function Dn(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var En={},Fn=(En.AUTH_INVALID="No user identifier specified.",En.EXPLICIT_ABORT="Transaction was explicitly aborted.",En.IDB_NOT_SUPPORTED="IndexedDB is not supported.",En.MISSING_INDEX="Index not created.",En.MISSING_OBJECT_STORES="Object stores not created.",En.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",En.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",En.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
En.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",En.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",En.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",En.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",En),Gn={},Hn=(Gn.AUTH_INVALID="ERROR",Gn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Gn.EXPLICIT_ABORT="IGNORED",Gn.IDB_NOT_SUPPORTED="ERROR",Gn.MISSING_INDEX=
"WARNING",Gn.MISSING_OBJECT_STORES="ERROR",Gn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Gn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Gn.QUOTA_EXCEEDED="WARNING",Gn.QUOTA_MAYBE_EXCEEDED="WARNING",Gn.UNKNOWN_ABORT="WARNING",Gn.INCOMPATIBLE_DB_VERSION="WARNING",Gn),In={},Jn=(In.AUTH_INVALID=!1,In.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,In.EXPLICIT_ABORT=!1,In.IDB_NOT_SUPPORTED=!1,In.MISSING_INDEX=!1,In.MISSING_OBJECT_STORES=!1,In.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,In.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,In.QUOTA_EXCEEDED=!1,In.QUOTA_MAYBE_EXCEEDED=!0,In.UNKNOWN_ABORT=!0,In.INCOMPATIBLE_DB_VERSION=!1,In);function Kn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Fn[a]:c;d=void 0===d?Hn[a]:d;e=void 0===e?Jn[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Kn.prototype)}
x(Kn,U);function Ln(a,b){Kn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Fn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ln.prototype)}
x(Ln,Kn);function Mn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Mn.prototype)}
x(Mn,Error);var Nn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function On(a,b,c,d){b=Bn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Kn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Kn("QUOTA_EXCEEDED",a);if(we&&"UnknownError"===e.name)return new Kn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Mn)return new Kn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Nn.some(function(f){return e.message.includes(f)}))return new Kn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Kn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Pn(a,b,c){var d=qn();return new Kn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Qn(a){if(!a)throw Error();throw a;}
function Rn(a){return a}
function Sn(a){this.h=a}
function Tn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Tn.all=function(a){return new Tn(new Sn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Tn.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Tn.resolve=function(a){return new Tn(new Sn(function(b,c){a instanceof Tn?a.then(b,c):b(a)}))};
Tn.reject=function(a){return new Tn(new Sn(function(b,c){c(a)}))};
Tn.prototype.then=function(a,b){var c=this,d=null!=a?a:Rn,e=null!=b?b:Qn;return new Tn(new Sn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Un(c,c,d,f,g)}),c.i.push(function(){Vn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Un(c,c,d,f,g):"REJECTED"===c.state.status&&Vn(c,c,e,f,g)}))};
Tn.prototype.catch=function(a){return this.then(void 0,a)};
function Un(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Tn?Wn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Tn?Wn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Tn?Wn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Xn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Yn(a){return new Promise(function(b,c){Xn(a,b,c)})}
function Zn(a){return new Tn(new Sn(function(b,c){Xn(a,b,c)}))}
;function $n(a,b){return new Tn(new Sn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var ao=window,V=ao.ytcsi&&ao.ytcsi.now?ao.ytcsi.now:ao.performance&&ao.performance.timing&&ao.performance.now&&ao.performance.timing.navigationStart?function(){return ao.performance.timing.navigationStart+ao.performance.now()}:function(){return(new Date).getTime()};function bo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=bo.prototype;m.add=function(a,b,c){return co(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return co(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return co(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function eo(a,b,c){a=a.h.createObjectStore(b,c);return new fo(a)}
m.delete=function(a,b){return co(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return co(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function go(a,b,c){return co(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Zn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function co(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,w,y;return A(function(z){switch(z.h){case 1:var G={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());Aa(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var K=new ho(l);K=io(K,d);return G.call(z,K,7);case 7:return n=z.i,p=Math.round(V()),jo(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(V());w=On(t,
a.h.name,b.join(),a.h.version);if((y=w instanceof Kn&&!w.h)||g>=f)jo(a,k,r,g,w,b.join(),e),h=w;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function jo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Kn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&zn("QUOTA_EXCEEDED",{dbName:Bn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Kn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),zn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ko(a,!1,d,f,b,g.tag),yn(e)):ko(a,!0,d,f,b,g.tag)}
function ko(a,b,c,d,e,f){zn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function fo(a){this.h=a}
m=fo.prototype;m.add=function(a,b){return Zn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Zn(this.h.clear()).then(function(){})};
function lo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Zn(this.h.count(a))};
function mo(a,b){return no(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?mo(this,a):Zn(this.h.delete(a))};
m.get=function(a){return Zn(this.h.get(a))};
m.index=function(a){try{return new oo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Mn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function no(a,b,c){a=a.h.openCursor(b.query,b.direction);return po(a).then(function(d){return $n(d,c)})}
function ho(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Kn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function io(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
ho.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Kn("EXPLICIT_ABORT");};
ho.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new fo(a),this.i.set(a,b));return b};
function oo(a){this.h=a}
m=oo.prototype;m.count=function(a){return Zn(this.h.count(a))};
m.delete=function(a){return qo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Zn(this.h.get(a))};
m.getKey=function(a){return Zn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function qo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return po(a).then(function(d){return $n(d,c)})}
function ro(a,b){this.request=a;this.cursor=b}
function po(a){return Zn(a).then(function(b){return b?new ro(a,b):null})}
m=ro.prototype;m.advance=function(a){this.cursor.advance(a);return po(this.request)};
m.continue=function(a){this.cursor.continue(a);return po(this.request)};
m.delete=function(){return Zn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Zn(this.cursor.update(a))};function so(a,b,c){return new Promise(function(d,e){function f(){t||(t=new bo(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.cf,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&zn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:Bn(a)});var w=f(),y=new ho(g.transaction);
n&&n(w,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){zn("IDB_UNEXPECTEDLY_CLOSED",{dbName:Bn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function to(a,b,c){c=void 0===c?{}:c;return so(a,b,c)}
function uo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Yn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),On(f,a,"",-1);})}
;function vo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
vo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return to(a,b,c)};
vo.prototype.delete=function(a){a=void 0===a?{}:a;return uo(this.name,a)};
function wo(a,b){return new Kn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function xo(a,b){if(!b)throw Pn("openWithToken",Bn(a.name));return a.open()}
vo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,w;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,G=c.options,K=[],I=v(Object.keys(G.xb)),S=I.next();!S.done;S=I.next()){S=S.value;var H=G.xb[S],fa=void 0===H.Je?Number.MAX_VALUE:H.Je;!(z.h.version>=H.Bb)||z.h.version>=fa||z.h.objectStoreNames.contains(S)||K.push(S)}k=K;if(0===k.length){y.B(5);break}l=Object.keys(c.options.xb);n=h.objectStoreNames();
if(c.v<T("ytidb_reopen_db_retries",0))return c.v++,h.close(),yn(new Kn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<T("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return yn(new Kn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Ln(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,wo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),On(p,c.name,"",null!=(w=c.options.version)?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw wo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,cf:b,upgrade:this.options.upgrade};return this.h=d=a()};var yo=new vo("YtIdbMeta",{xb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&eo(a,"databases",{keyPath:"actualName"})}});
function zo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(xo(yo,b),2);c=d.i;return d.return(co(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Zn(f.h.put(a,void 0)).then(function(){})})}))})}
function Ao(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(xo(yo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Bo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(xo(yo,b),2)):3!=e.h?(d=e.i,e.yield(co(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return no(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Co(a){return Bo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Do(a,b,c){return Bo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Eo(a){var b,c;return A(function(d){if(1==d.h)return b=Fm("YtIdbMeta hasAnyMeta other"),d.yield(Bo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Fo,Go=new function(){}(new function(){});
function Ho(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=qn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Cn)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(zo(d,Go),4);case 4:return e.yield(Ao("yt-idb-test-do-not-use",Go),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Io(){if(void 0!==Fo)return Fo;tn=!0;return Fo=Ho().then(function(a){tn=!1;var b;if(null!=(b=pn())&&b.h){var c;b={hasSucceededOnce:(null==(c=qn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=pn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Jo(){return E("ytglobal.idbToken_")||void 0}
function Ko(){var a=Jo();return a?Promise.resolve(a):Io().then(function(b){(b=b?Go:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Lo=0;function Mo(a,b){Lo||(Lo=Ji.qa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Ko(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Do(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(uo(f.actualName),7);case 7:return h.yield(Ao(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),yn(g),d=!1;case 4:Ji.ra(Lo),Lo=0,d&&Mo(a,b),h.h=0}})}))}
function No(){var a;return A(function(b){return 1==b.h?b.yield(Ko(),2):(a=b.i)?b.return(Eo(a)):b.return(!1)})}
new Zh;function Oo(a){if(!Em())throw a=new Kn("AUTH_INVALID",{dbName:a}),yn(a),a;var b=Fm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Po(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Ko(),2);case 2:g=n.i;if(!g)throw h=Pn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),yn(h),h;An(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Oo(a);Aa(n,3);return n.yield(zo(k,g),5);case 5:return n.yield(to(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(Ao(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Qo(a,b,c){c=void 0===c?{}:c;return Po(a,b,!1,c)}
function Ro(a,b,c){c=void 0===c?{}:c;return Po(a,b,!0,c)}
function So(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Ko(),2);if(3!=e.h){c=e.i;if(!c)return e.return();An(a);d=Oo(a);return e.yield(uo(d.actualName,b),3)}return e.yield(Ao(d.actualName,c),0)})}
function To(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(uo(d.actualName,b),2):e.yield(Ao(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Uo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Ko(),2);if(3!=d.h){b=d.i;if(!b)return d.return();An("LogsDatabaseV2");return d.yield(Co(b),3)}c=d.i;return d.yield(To(c,a,b),0)})}
function Vo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Ko(),2);if(3!=d.h){c=d.i;if(!c)return d.return();An(a);return d.yield(uo(a,b),3)}return d.yield(Ao(a,c),0)})}
;function Wo(a,b){vo.call(this,a,b);this.options=b;An(a)}
x(Wo,vo);function Xo(a,b){var c;return function(){c||(c=new Wo(a,b));return c}}
Wo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Ro:Qo)(a,b,Object.assign({},c))};
Wo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Vo:So)(this.name,a)};
function Yo(a,b){return Xo(a,b)}
;var Zo={},$o=Yo("ytGcfConfig",{xb:(Zo.coldConfigStore={Bb:1},Zo.hotConfigStore={Bb:1},Zo),nc:!1,upgrade:function(a,b){b(1)&&(lo(eo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),lo(eo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function ap(a){return xo($o(),a)}
function bp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(ap(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(go(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function cp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(ap(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(go(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function dp(a){var b,c;return A(function(d){return 1==d.h?d.yield(ap(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(co(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return qo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function ep(a){var b,c;return A(function(d){return 1==d.h?d.yield(ap(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(co(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return qo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function fp(){J.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(fp,J);fp.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;J.prototype.S.call(this)};function gp(){this.h=0;this.i=new fp}
function hp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function ip(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Jo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(ep(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(bp(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function jp(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Jo())?c?h.B(4):h.yield(dp(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(cp(c,b,g,d),0)})}
function kp(){if(!gp.h){var a=new gp;gp.h=a}a=gp.h;var b=V()-a.h;if(!(0!==a.h&&b<T("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
gp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function lp(){return"INNERTUBE_API_KEY"in gl&&"INNERTUBE_API_VERSION"in gl}
function mp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ne:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:P("INNERTUBE_CONTEXT_HL"),oe:P("INNERTUBE_CONTEXT_GL"),qe:P("INNERTUBE_HOST_OVERRIDE")||"",se:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function np(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Bl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=lm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Cm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Dm())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=kp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(ul(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function op(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Qf:(a=im(hm()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var pp="undefined"!==typeof TextEncoder?new TextEncoder:null,qp=pp?function(a){return pp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function rp(a,b){this.version=a;this.args=b}
rp.prototype.serialize=function(){return{version:this.version,args:this.args}};function sp(a,b){this.topic=a;this.h=b}
sp.prototype.toString=function(){return this.topic};var tp=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.zb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",tp);var up=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",up);var vp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",vp);var wp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",wp);
D("ytPubsub2Pubsub2SkipSubKey",null);function xp(a,b){var c=yp();c&&c.publish.call(c,a.toString(),a,b)}
function zp(a){var b=Ap,c=yp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(up[d])try{if(f&&b instanceof sp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var w=Array(r);for(k=0;k<r;k++)w[k]=t[k];var y=w}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){ml(z)}},wp[b.toString()]?E("yt.scheduler.instance")?Ji.qa(g):Fl(g,0):g())});
up[d]=!0;vp[b.toString()]||(vp[b.toString()]=[]);vp[b.toString()].push(d);return d}
function Bp(){var a=Cp,b=zp(function(c){a.apply(void 0,arguments);Dp(b)});
return b}
function Dp(a){var b=yp();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete up[c]}))}
function yp(){return E("ytPubsub2Pubsub2Instance")}
;function Ep(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&xp("meta_logging_csi_event",{timerName:a,ng:b})}
;var Fp=void 0,Gp=void 0;function Hp(){Gp||(Gp=Jk(P("WORKER_SERIALIZATION_URL")));return Gp||void 0}
function Ip(){var a=Hp();Fp||void 0===a||(Fp=new Worker(Db(a),void 0));return Fp}
;var Jp=T("max_body_size_to_compress",5E5),Kp=T("min_body_size_to_compress",500),Lp=!0,Mp=0,Np=0,Op=T("compression_performance_threshold_lr",250),Pp=T("slow_compressions_before_abandon_count",4),Qp=!1,Rp=new Map,Sp=1,Tp=!0;function Up(){if("function"===typeof Worker&&Hp()&&!Qp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Rp.get(c.key);d&&(Vp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Rp.delete(c.key))}},b=Ip();
b&&(b.addEventListener("message",a),b.onerror=function(){Rp.clear()},Qp=!0)}}
function Wp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Lp)try{var g=Xp(b);if(null!=g&&(g>Jp||g<Kp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Tp||!R("initial_gzip_use_main_thread"))){Qp||Up();var h=Ip();if(h&&!e){Rp.set(Sp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Sp});Sp++;return}}var k=Ik(qp(b));Vp(k,f,a,c,d)}}catch(l){nl(l),d(a,c)}else d(a,c)}
function Vp(a,b,c,d,e){Tp=!1;var f=V();b.ticks.gelc=f;Np++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Op&&(Mp++,R("abandon_compression_after_N_slow_zips")?Np===T("compression_disable_point")&&Mp>Pp&&(Lp=!1):Lp=!1);Yp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Zp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Lp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Xp(g);if(null!=h&&(h>Jp||h<Kp))return a;c=b?{level:1}:void 0;f=Ik(qp(g),c);var k=V();e.ticks.gelc=k;if(b){Np++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Op)if(Mp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Mp/Np;var l=Pp/T("compression_disable_point");0<Np&&0===Np%T("compression_disable_point")&&b>=l&&(Lp=!1)}else Lp=!1;Yp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return nl(n),a}}else return a}
function Xp(a){try{return(new Blob(a.split(""))).size}catch(b){return nl(b),null}}
function Yp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Ep("gel_compression",a,{sampleRate:.1})}
;function $p(a){a=Object.assign({},a);delete a.Authorization;var b=Mg();if(b){var c=new Pi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=ze(c.digest(),3)}return a}
;var aq;function bq(){aq||(aq=new on("yt.innertube"));return aq}
function cq(a,b,c,d){if(d)return null;d=bq().get("nextId",!0)||1;var e=bq().get("requests",!0)||{};e[d]={method:a,request:b,authState:$p(c),requestTime:Math.round(V())};bq().set("nextId",d+1,86400,!0);bq().set("requests",e,86400,!0);return d}
function dq(a){var b=bq().get("requests",!0)||{};delete b[a];bq().set("requests",b,86400,!0)}
function eq(a){var b=bq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=$p(op(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),fq(a,d.method,e,{}));delete b[c]}}bq().set("requests",b,86400,!0)}}
;function gq(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.yd=null!=(d=a.yd)?d:2592E6;var e;this.wd=null!=(e=a.wd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.V=null!=(g=a.V)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Da=a.Da;this.da=a.da;this.ba=a.ba;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;hq(this)&&(!this.W||this.W("networkless_logging"))&&iq(this)}
function iq(a){hq(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Ud(a.V),jq(a),a.ba.xa()&&a.Ob(),a.ba.listen(a.Oc,a.Ob.bind(a)),a.ba.listen(a.Lc,a.Zc.bind(a)))}
m=gq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.V).then(function(e){d.id=e;c.ba.xa()&&kq(c,d)}).catch(function(e){kq(c,d);
lq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ba.xa()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.V).catch(function(l){lq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
lq(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.V):e=!0;c.ba.gb&&c.W&&c.W("vss_network_hint")&&c.ba.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.V).then(function(g){d.id=g;e&&c.da.nb(d.id,c.V)}).catch(function(g){lq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!hq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.qa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.V),2);if(3!=c.h)return b=c.i,b?c.yield(kq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Gd))};
m.Zc=function(){this.Da.ra(this.i);this.i=0};
function kq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!hq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.we(b.id,a.V),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(mq(a,b,a.yd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=nq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function nq(a,b){if(!hq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=oq(f);(h=pq(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.ba.mc){n.B(3);break}return n.yield(a.ba.mc(),3);case 3:if(a.ba.xa()){n.B(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Qc(b.id,a.V,!1),6);case 6:return n.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Qc(b.id,a.V,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.V),8);case 12:a.Da.qa(function(){a.ba.xa()&&a.Ob()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.V),2);a.ba.gb&&a.W&&a.W("vss_network_hint")&&a.ba.gb(!0);d(e,f);h.h=0})};
return b}
function mq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function jq(a){if(!hq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.V).then(function(b){b&&!mq(a,b,a.wd)?a.Da.qa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Qc(b.id,a.V),2);jq(a);c.h=0})}):a.ba.xa()&&a.Ob()})}
function lq(a,b){a.Md&&!a.ba.xa()?a.Md(b):a.handleError(b)}
function hq(a){return!!a.V||a.Ub}
function oq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function pq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var qq;
function rq(){if(qq)return qq();var a={};qq=Yo("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Bb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&eo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),lo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return qq()}
;function sq(a){return xo(rq(),a)}
function tq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(sq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(go(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();uq(c);return g.return(f)})}
function vq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(sq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(co(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return qo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();uq(c);return l.return(k)})}
function wq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sq(b),2);c=d.i;return d.return(co(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Zn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function xq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(sq(b),2);e=f.i;return f.return(co(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Zn(h.h.put(k,void 0)).then(function(){return k})):Tn.resolve(void 0)})}))})}
function yq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(sq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function zq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(sq(a),2);b=d.i;c=V()-2592E6;return d.yield(co(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return no(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Aq(){A(function(a){return a.yield(Uo(),0)})}
function uq(a){R("nwl_csi_killswitch")||Ep("networkless_performance",a,{sampleRate:1})}
;var Bq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var Cq={},Dq=Yo("ServiceWorkerLogsDatabase",{xb:(Cq.SWHealthLog={Bb:1},Cq),nc:!0,upgrade:function(a,b){b(1)&&lo(eo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Eq(a){return xo(Dq(),a)}
function Fq(a){var b,c;A(function(d){if(1==d.h)return d.yield(Eq(a),2);b=d.i;c=V()-2592E6;return d.yield(co(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return no(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gq(a){var b;return A(function(c){if(1==c.h)return c.yield(Eq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Hq={},Iq=0;function Jq(a){var b=new Image,c=""+Iq++;Hq[c]=b;b.onload=b.onerror=function(){delete Hq[c]};
b.src=a}
;function Kq(){this.h=new Map;this.i=!1}
function Lq(){if(!Kq.h){var a=E("yt.networkRequestMonitor.instance")||new Kq;D("yt.networkRequestMonitor.instance",a);Kq.h=a}return Kq.h}
Kq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Kq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Kq.prototype.removeParams=function(a){return a.split("?")[0]};
Kq.prototype.removeParams=Kq.prototype.removeParams;Kq.prototype.isEndpointCFR=Kq.prototype.isEndpointCFR;Kq.prototype.requestComplete=Kq.prototype.requestComplete;Kq.getInstance=Lq;var Mq;function Nq(){Mq||(Mq=new on("yt.offline"));return Mq}
function Oq(a){if(R("offline_error_handling")){var b=Nq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Nq().set("errors",b,2592E3,!0)}}
;function Pq(){pd.call(this);var a=this;this.j=!1;this.i=Ii();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Nq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ml(d)}Nq().set("errors",{},2592E3,!0)}}})}
x(Pq,pd);function Qq(){if(!Pq.h){var a=E("yt.networkStatusManager.instance")||new Pq;D("yt.networkStatusManager.instance",a);Pq.h=a}return Pq.h}
m=Pq.prototype;m.xa=function(){return this.i.xa()};
m.gb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=Gi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Lq().requestComplete("generate_204",b)});
return a};
Pq.prototype.sendNetworkCheckRequest=Pq.prototype.mc;Pq.prototype.listen=Pq.prototype.listen;Pq.prototype.enableErrorFlushing=Pq.prototype.Zd;Pq.prototype.getWindowStatus=Pq.prototype.je;Pq.prototype.networkStatusHint=Pq.prototype.gb;Pq.prototype.isNetworkAvailable=Pq.prototype.xa;Pq.getInstance=Qq;function Rq(a){a=void 0===a?{}:a;pd.call(this);var b=this;this.i=this.m=0;this.j=Qq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Sq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Sq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){qd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qd(b,"publicytnetworkstatus-offline")})))}
x(Rq,pd);Rq.prototype.xa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Rq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Rq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Lq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.xa())})):c?d.return(c(a)):d.return(!0)})};
function Sq(a,b){a.rateLimit?a.i?(Ji.ra(a.m),a.m=Ji.qa(function(){a.l!==b&&(qd(a,b),a.l=b,a.i=V())},a.rateLimit-(V()-a.i))):(qd(a,b),a.l=b,a.i=V()):qd(a,b)}
;var Tq;function Uq(){var a=gq.call;Tq||(Tq=new Rq({ag:!0,Uf:!0}));a.call(gq,this,{da:{Ud:zq,nb:yq,jd:vq,we:wq,Qc:xq,set:tq},ba:Tq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;nl(new U(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else ml(b)},
pb:nl,sendFn:Vq,now:V,Md:Oq,Da:nn(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:T("potential_esf_error_limit",10),W:R,Eb:!(Em()&&Wq())});this.j=new Zh;R("networkless_immediately_drop_all_requests")&&Aq();Vo("LogsDatabaseV2")}
x(Uq,gq);function Xq(){var a=E("yt.networklessRequestController.instance");a||(a=new Uq,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Ko().then(function(b){a.V=b;iq(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&Fq(a.V);R("networkless_immediately_drop_sw_health_store")&&Yq(a)}));
return a}
Uq.prototype.writeThenSend=function(a,b){b||(b={});b=Zq(a,b);Em()||(this.h=!1);gq.prototype.writeThenSend.call(this,a,b)};
Uq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Zq(a,b);Em()||(this.h=!1);gq.prototype.sendThenWrite.call(this,a,b,c)};
Uq.prototype.sendAndWrite=function(a,b){b||(b={});b=Zq(a,b);Em()||(this.h=!1);gq.prototype.sendAndWrite.call(this,a,b)};
Uq.prototype.awaitInitialization=function(){return this.j.promise};
function Yq(a){var b;A(function(c){if(!a.V)throw b=Pn("clearSWHealthLogsDb"),b;return c.return(Gq(a.V).catch(function(d){a.handleError(d)}))})}
function Vq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&$q(a,b);if(R("use_request_time_ms_header"))b.headers&&xl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Pl(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Pl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(jc),t=ic(a,0,"ri",p);if(0>t)var r=null;else{var w=a.indexOf("&",t);if(0>w||w>p)w=p;r=decodeURIComponent(a.slice(t+3,-1!==w?w:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=
!1;c||Jq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Wp(a,b.postBody,b,Ml,d)):Wp(a,JSON.stringify(b.postParams),b,Ul,d):Ml(a,b)}
function Zq(a,b){R("use_event_time_ms_header")&&xl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function $q(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Lq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Lq().requestComplete(a,!0);d(e,f)}}
function Wq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var ar=!1,br=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ar};D("ytNetworklessLoggingInitializationOptions",br);function cr(){var a;A(function(b){if(1==b.h)return b.yield(Ko(),2);a=b.i;if(!a||!Em()&&!R("nwl_init_require_datasync_id_killswitch")||!Wq())return b.B(0);ar=!0;br.isNwlInitialized=ar;return b.yield(Xq().awaitInitialization(),0)})}
;function dr(a){var b=this;this.config_=null;a?this.config_=a:lp()&&(this.config_=mp());Hm(function(){eq(b)},5E3)}
dr.prototype.isReady=function(){!this.config_&&lp()&&(this.config_=mp());return!!this.config_};
function fq(a,b,c,d){function e(w){w=void 0===w?!1:w;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=cq(b,c,l,k)),y)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(S,H){dq(y);z(S,H)};
c.onFetchSuccess=function(S,H){dq(y);G(S,H)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Xq().writeThenSend(r,g):Xq().sendAndWrite(r,g);
else if(d.compress){var K=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Wp(r,I,g,Ml,K)}else Wp(r,JSON.stringify(g.postParams),g,Ul,K)}else R("web_all_payloads_via_jspb")?Ml(r,g):Ul(r,g)}catch(S){if("InvalidAccessError"==S.name)y&&(dq(y),y=0),nl(Error("An extension is blocking network request."));else throw S;}y&&Hm(function(){eq(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&nl(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);ml(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,y){if(d.onError)d.onError(y)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=op(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.re&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=wl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
br.isNwlInitialized:ar)?Io().then(function(w){e(w)}):e(!1)}
;var er=0,fr=Gc?"webkit":Fc?"moz":Dc?"ms":Cc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++er});var gr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ir(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
hr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",nb);var jr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",jr);
function kr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var lr=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function mr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=kr(a,b,c,d);if(e)return e;e=++jr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hr(h);if(!zd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hr(h);
h.currentTarget=a;return c.call(a,h)};
g=ll(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function nr(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?lr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function or(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=mr(window,"mousemove",Va(this.U,this));a=Va(this.K,this);"function"===typeof a&&(a=ll(a));this.Z=window.setInterval(a,25)}
Ya(or,J);or.prototype.U=function(a){void 0===a.h&&ir(a);var b=a.h;void 0===a.i&&ir(a);this.h=new vd(b,a.i)};
or.prototype.K=function(){if(this.h){var a=V();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
or.prototype.S=function(){window.clearInterval(this.Z);nr(this.T)};var pr={};
function qr(a){var b=void 0===a?{}:a;a=void 0===b.Fe?!1:b.Fe;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&rr();mr(document,"keydown",rr);mr(document,"keyup",rr);mr(document,"mousedown",rr);mr(document,"mouseup",rr);a?mr(window,"touchmove",function(){sr("touchmove",200)},{passive:!0}):(mr(window,"resize",function(){sr("resize",200)}),b&&mr(window,"scroll",function(){sr("scroll",200)}));
new or(function(){sr("mouse",100)});
mr(document,"touchstart",rr,{passive:!0});mr(document,"touchend",rr,{passive:!0})}}
function sr(a,b){pr[a]||(pr[a]=!0,Ji.qa(function(){rr();pr[a]=!1},b))}
function rr(){null==E("_lact",window)&&qr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function tr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ur=C.ytPubsubPubsubInstance||new M,vr=C.ytPubsubPubsubSubscribedKeys||{},wr=C.ytPubsubPubsubTopicToKeys||{},xr=C.ytPubsubPubsubIsSynchronous||{};function yr(a,b){var c=zr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xr[a]?f():Fl(f,0)}catch(g){ml(g)}},void 0);
vr[d]=!0;wr[a]||(wr[a]=[]);wr[a].push(d);return d}return 0}
function Ar(a){var b=zr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete vr[c]}))}
function Br(a,b){var c=zr();c&&c.publish.apply(c,arguments)}
function Cr(a){var b=zr();if(b)if(b.clear(a),a)Dr(a);else for(var c in wr)Dr(c)}
function zr(){return C.ytPubsubPubsubInstance}
function Dr(a){wr[a]&&(a=wr[a],eb(a,function(b){vr[b]&&delete vr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.zb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ur);D("ytPubsubPubsubTopicToKeys",wr);D("ytPubsubPubsubIsSynchronous",xr);D("ytPubsubPubsubSubscribedKeys",vr);var Er=Symbol("injectionDeps");function Fr(a){this.name=a}
Fr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Gr(a){this.key=a}
function Hr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ir(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.ig(a.resolve(b.lc))}
Hr.prototype.resolve=function(a){return a instanceof Gr?Jr(this,a.key,[],!0):Jr(this,a,[])};
function Jr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.jf)e=d[Er]?Kr(a,d[Er],c):[],e=d.jf.apply(d,la(e));else if(d.Id){e=d.Id;var f=e[Er]?Kr(a,e[Er],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.mg||a.h.set(b,e);return e}
function Kr(a,b,c){return b?b.map(function(d){return d instanceof Gr?Jr(a,d.key,c,!0):Jr(a,d,c)}):[]}
;var Lr;function Mr(){Lr||(Lr=new Hr);return Lr}
;var Nr=window;function Or(){var a,b;return"h5vcc"in Nr&&(null==(a=Nr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Nr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Nr&&Nr.performance.mark&&Nr.performance.measure?2:0}
function Pr(a){switch(Or()){case 1:Nr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Nr.performance.mark(a+"-start");break;case 0:break;default:qi()}}
function Qr(a){switch(Or()){case 1:Nr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Nr.performance.mark(c);Nr.performance.measure(a,b,c);break;case 0:break;default:qi()}}
;var Rr=R("web_enable_lifecycle_monitoring")&&0!==Or(),Sr=R("web_enable_lifecycle_monitoring");function Tr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?nn():d;this.j=c;this.scheduler=d;this.i=new Zh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Ur(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.ra(c.jobId),a.scheduler.ab(c.Ec,10))}
Tr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.ra(b.jobId),b.kc=!0;this.i.resolve()};
Tr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Vr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Rr&&Pr(this.state)}
m=Vr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Rr&&Qr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ur(this.j),this.j=void 0);Wr(this,a,b);this.state=a;Rr&&Pr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Xr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Xr(a,b){var c=b.filter(function(e){return 10===Yr(a,e)}),d=b.filter(function(e){return 10!==Yr(a,e)});
return a.A.lg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Me.apply(a,[c].concat(la(e))),2);a.Dd.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ne.apply(a,[c].concat(la(e)));a.Dd.apply(a,[d].concat(la(e)))}}
m.Ne=function(a){for(var b=B.apply(1,arguments),c=nn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){Zr(g.Gb.name);g.Gb.callback.apply(g.Gb,la(b));$r(g.Gb.name)}}(f))};
m.Me=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=nn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Zr(k.tb.name);var l=k.tb.callback.apply(k.tb,la(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){$r(k.tb.name)}):$r(k.tb.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Zr(e.name);e.callback.apply(e,la(b));$r(e.name)},
priority:Yr(c,e)}});
d.length&&(this.j=new Tr(d))};
function Yr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Zr(a){Rr&&a&&Pr(a)}
function $r(a){Rr&&a&&Qr(a)}
function Wr(a,b,c){Sr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Vr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function as(a){Vr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var bs;x(as,Vr);as.prototype.i=function(a,b){var c=this;this.h=Hm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
as.prototype.v=function(a,b){this.h&&(Ji.ra(this.h),this.h=null);a(null==b?void 0:b.event)};
function cs(){bs||(bs=new as);return bs}
;var ds=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return ds});function es(){this.store={};this.h={}}
es.prototype.storePayload=function(a,b){a=gs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
es.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=hs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
es.prototype.extractMatchingEntries=function(a){a=hs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
es.prototype.getSequenceCount=function(a){a=hs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function hs(a,b){var c=gs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&gs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(is(b.auth,g[0])){var h=b.isJspb;is(void 0===h?"undefined":h?"true":"false",g[1])&&is(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),is(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function is(a,b){return void 0===a||"undefined"===a?!0:a===b}
es.prototype.getSequenceCount=es.prototype.getSequenceCount;es.prototype.extractMatchingEntries=es.prototype.extractMatchingEntries;es.prototype.smartExtractMatchingEntries=es.prototype.smartExtractMatchingEntries;es.prototype.storePayload=es.prototype.storePayload;function gs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function js(a,b){if(a)return a[b.name]}
;var ks=T("initial_gel_batch_timeout",2E3),ls=T("gel_queue_timeout_max_ms",6E4),ms=Math.pow(2,16)-1,ns=T("gel_min_batch_size",5),ps=void 0;function qs(){this.l=this.h=this.i=0;this.j=!1}
var rs=new qs,ss=new qs,ts=new qs,us=new qs,vs,ws=!0,xs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",xs);var ys={};function zs(){var a=E("yt.logging.ims");a||(a=new es,D("yt.logging.ims",a));return a}
function As(a,b){if("log_event"===a.endpoint){Bs();var c=Cs(a),d=Ds(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Bq[d||""];var f,g,h,k=null==Mr().resolve(new Gr(gp))?void 0:null==(f=hp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=Es(e.tier);if(400===k){Fs(a,b);return}}ys[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};zs().storePayload(e,a.payload);Gs(b,c,e,"gelDebuggingEvent"===d)}}
function Gs(a,b,c,d){function e(){Hs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ps=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=V(),h=Is(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=zs().getSequenceCount(c));1E3<=d?e():d>=a?vs||(vs=Js(function(){e();vs=void 0},0)):10<=g-k&&(Ks(f,c.tier),h.l=g)}
function Fs(a,b){if("log_event"===a.endpoint){Bs();var c=Cs(a),d=new Map;d.set(c,[a.payload]);var e=Ds(a.payload)||"";b&&(ps=new b);return new Md(function(f,g){ps&&ps.isReady()?Ls(d,ps,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Cs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);xs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Hs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Md(function(e,f){var g=Is(c,d),h=g.j;g.j=!1;Ms(g.i);Ms(g.h);g.h=0;ps&&ps.isReady()?void 0===d&&R("enable_web_tiered_gel")?Ns(e,f,a,b,c,300,h):Ns(e,f,a,b,c,d,h):(Ks(c,d),e())})}
function Ns(a,b,c,d,e,f,g){var h=ps;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?zs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):zs().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(ys)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?zs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):zs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete ys[l];Ls(k,h,a,b,c,!1,g)}
function Ks(a,b){function c(){Hs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Is(a,b),e=d===us||d===ts?5E3:ls;R("web_gel_timeout_cap")&&!d.h&&(e=Js(function(){c()},e),d.h=e);
Ms(d.i);e=P("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ws&&(e=ks);e=Js(function(){0<T("gel_min_batch_size")?zs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ns&&c():c()},e);
d.i=e}
function Ls(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=ub({context:np(b.config_||mp())});if(!Oa(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=xs[n])&&
Os(g.batchRequest,n,p);delete xs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ps(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(t){R("start_client_gcf")&&Ji.qa(function(){return A(function(r){return r.yield(Qs(t),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(t){return function(){t.Kc++;if(e.bypassNetworkless&&1===t.Kc)try{fq(b,l,t.batchRequest,Rs({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Nc,t.Mc,f)),ws=!1}catch(r){ml(r),d()}k--;k||c()}}(g);
try{fq(b,l,g.batchRequest,Rs(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),ws=!1}catch(t){ml(t),d()}}}
function Rs(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Rf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Ss()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Ps(a,b,c){Ss()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ms/2)),c++,c>ms&&(c=1),hl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Os(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Al("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(ds=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",ds),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ss(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Js(a,b){return!1===R("embeds_transport_use_scheduler")?Fl(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Hm(function(){if("none"===cs().currentState)a();else{var c={};cs().install((c.none={callback:a},c))}},b):Hm(a,b)}
function Ms(a){R("transport_use_scheduler")?Ji.ra(a):window.clearTimeout(a)}
function Qs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=js(d,Nk),g=null==(f=d)?void 0:f.hotHashData,h=js(d,Mk),l=null==(k=d)?void 0:k.coldHashData,(n=Mr().resolve(new Gr(gp)))?g?e?p.yield(ip(n,g,e),2):p.yield(ip(n,g),2):p.B(2):p.return()):l?h?p.yield(jp(n,l,h),0):p.yield(jp(n,l),0):p.B(0)})}
function Is(a,b){b=void 0===b?200:b;return a?300===b?us:ss:300===b?ts:rs}
function Ds(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Bq[b])return b}
function Es(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ts=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ts);
function Us(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=tr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ts[b]=b in Ts?Ts[b]+1:0,a.sequence={index:Ts[b],groupKey:b},d.endOfSequence&&delete Ts[d.sequenceGroup]);(d.sendIsolatedPayload?Fs:As)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function xn(a,b,c){c=void 0===c?{}:c;var d=dr;P("ytLoggingEventsDefaultDisabled",!1)&&dr===dr&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=tr(),c.timestamp=V());Us(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Vs=new Set,Ws=0,Xs=0,Ys=0,Zs=[],$s=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wn(a){at(a)}
function bt(a){at(a,"WARNING")}
function ct(a){a instanceof Error?at(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",bt(a))}
function at(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ws))){d=Zs;var k=uc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=dm(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var w="params."+t,y=fm(r[t]);c[w]=y;p+=w.length+y.length;if(500<p)break}}else c.params=fm(r)}if(d.length)for(t=0;t<d.length&&!(p=dm(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=$l();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.cg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Vl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=v(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Ic(f);break}t.params||(t.params={});a=$l();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Vs.has(t.message)){if(g&&R("web_enable_error_204"))dt(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(am.Ya("handleError",t),R("record_app_crashed_web")&&0===Ys&&1===t.sampleWeight&&(Ys++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),xn("appCrashed",g)),Xs++):"WARNING"===b&&am.Ya("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v($s);for(c=a.next();!c.done;c=a.next())if(Dn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!il("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(xn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Hs(void 0,void 0,!1))}R("suppress_error_204_logging")||dt(b,t)}try{Vs.add(t.message)}catch(z){}Ws++}}}
function dt(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Ml(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function et(){this.register=new Map}
function ft(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.gg("ABORTED")}
et.prototype.clear=function(){ft(this);this.register.clear()};
var gt=new et;var ht=Date.now().toString();function jt(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(ht)for(b=1,c=0;c<ht.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^ht.charCodeAt(c),b++;return a}
function kt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=jt()}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));return a.join("")}
;var lt,mt=C.ytLoggingDocDocumentNonce_;mt||(mt=kt(),D("ytLoggingDocDocumentNonce_",mt));lt=mt;function nt(a){this.h=a}
m=nt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Uk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&Zf(a,2,Af(this.h.veType)),void 0!==this.h.veCounter&&Zf(a,6,Af(this.h.veCounter)),void 0!==this.h.elementIndex&&Zf(a,3,Af(this.h.elementIndex)),this.h.isCounterfactual&&Zf(a,5,xf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();ig(a,Uk,7,b)}void 0!==this.h.youtubeData&&ig(a,Ok,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ot(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function pt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},hl("client-screen-nonce-store",c));c[b]=a}
function qt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function rt(a){return P(qt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",rt);function st(){var a=P("csn-to-ctt-auth-info");a||(a={},hl("csn-to-ctt-auth-info",a));return a}
function tt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function ut(a){a=ot(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",ut);function vt(a,b,c){var d=st();(c=ut(c))&&delete d[c];b&&(d[a]=b)}
function wt(a){return st()[a]}
D("yt_logging_screen.getCttAuthInfo",wt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ot(c)||b!==P(qt(c)))if(vt(a,d,c),pt(a,c),hl(qt(c),b),b=function(){setTimeout(function(){a&&xn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:lt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var xt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",xt);function zt(a){cl(xt,arguments)}
;function At(){var a=tb(Bt),b;return(new Md(function(c,d){a.onSuccess=function(e){El(e)?c(new Ct(e)):d(new Dt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Dt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Dt("Request timed out","net.timeout",e))};
b=Ml("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){c instanceof Td&&b.abort();
return Rd(c)})}
function Dt(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(Dt,$a);function Ct(a){this.xhr=a}
;function Et(){this.h=0;this.i=null}
Et.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Ft(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Gt(a):this};
Et.prototype.getValue=function(){return this.i};
Et.prototype.isRejected=function(){return 2==this.h};
Et.prototype.$goog_Thenable=!0;function Gt(a){var b=new Et;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Ft(a){var b=new Et;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Ht(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:xl(a)?"same-origin":"cors",credentials:xl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function It(){return Kg()||(ue||ve)&&Dn("applewebkit")&&!Dn("version")&&(!Dn("safari")||Dn("gsa/"))||Hc&&Dn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Jt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Sk)if(Sk[d]==c.embeddedPlayerMode){b=Sk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Kt(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Lt;this.isTimeout=a instanceof Dt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Td}
x(Kt,$a);Kt.prototype.name="BiscottiError";function Lt(){$a.call(this,"Biscotti ID is missing from server")}
x(Lt,$a);Lt.prototype.name="BiscottiMissingError";var Bt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Mt=null;function Nt(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!It())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(Jt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function al(){var a=Nt();if(void 0!==a)return Rd(a);Mt||(Mt=At().then(Ot).oc(function(b){return Pt(2,b)}));
return Mt}
function Ot(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Lt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Lt;a=a.id;bl(a);Mt=Ft(a);Qt(18E5,2);return a}
function Pt(a,b){b=new Kt(b);bl("");Mt=Gt(b);0<a&&Qt(12E4,a-1);throw b;}
function Qt(a,b){Fl(function(){At().then(Ot,function(c){return Pt(b,c)}).oc(bb)},a)}
function Rt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():al()}catch(b){return Rd(b)}}
;function St(a){if("1"!=qb(P("PLAYER_VARS",{}))){a&&$k();try{Rt().then(function(){},function(){}),Fl(St,18E5)}catch(b){ml(b)}}}
;var Tt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ut(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=vl(a).theme;return Tt.get(b)||null}catch(c){}return null}
;function Vt(){this.h={};if(this.i=pm()){var a=nm("CONSISTENCY");a&&Wt(this,{encryptedTokenJarContents:a})}}
Vt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Wt(this,a)}};
function Wt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&mm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Xt=window.location.hostname.split(".").slice(-2).join(".");function Yt(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Zt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var $t;function au(){$t=E("yt.clientLocationService.instance");$t||($t=new Yt,D("yt.clientLocationService.instance",$t));return $t}
m=Yt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Zt(this))&&this.h.set("yt-location-playability-token",a,15552E3):mm("YT_CL",JSON.stringify({loctok:a}),15552E3,Xt,!0))};
function Zt(a){return void 0===a.h?new on("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Zt(this))&&this.h.remove("yt-location-playability-token"):om("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function bu(a,b){var c,d=null==(c=js(a,Rk))?void 0:c.signal;if(d&&b.Nb&&(c=b.Nb[d]))return c();var e;if((c=null==(e=js(a,Pk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
;function cu(a){return function(){return new a}}
;var du={},eu=(du.WEB_UNPLUGGED="^unplugged/",du.WEB_UNPLUGGED_ONBOARDING="^unplugged/",du.WEB_UNPLUGGED_OPS="^unplugged/",du.WEB_UNPLUGGED_PUBLIC="^unplugged/",du.WEB_CREATOR="^creator/",du.WEB_KIDS="^kids/",du.WEB_EXPERIMENTS="^experiments/",du.WEB_MUSIC="^music/",du.WEB_REMIX="^music/",du.WEB_MUSIC_EMBEDDED_PLAYER="^music/",du.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",du);
function fu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=eu[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(eu).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function gu(){}
gu.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?jm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=ub(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;tm();var l="USER_INTERFACE_THEME_LIGHT";xm(165)?l="USER_INTERFACE_THEME_DARK":xm(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Ut()||l;h.userInterfaceTheme=k;if(!f){if(k=Cm())h.connectionType=k;R("web_log_effective_connection_type")&&(k=Dm())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=kp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=vl(C.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&km.h&&(p=km.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=lm(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(X){}t=void 0}t&&(h.timeZone=t)}(t=P("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=t:delete h.experimentsToken;t=Bl();Vt.h||(Vt.h=new Vt);h=Vt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!R("web_prequest_context_killswitch")&&(r=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=tm();r=xm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=ut())&&
(g.clientScreenNonce=f):!f&&(f=ut())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;au().setLocationOnInnerTubeContext(g);try{var w=yl(),y=w.bid;delete w.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(w));for(var G=z.next();!G.done;G=z.next()){var K=v(G.value),I=K.next().value,S=K.next().value;w=I;y=S;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:w,value:""+y})}var H;if(R("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(H=g.client)?void 0:H.clientName)){var fa=P("INNERTUBE_CONTEXT");fa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=fa.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=fa.adSignalsInfo.limitAdTracking)}}catch(X){at(X)}z=g}else at(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(G=this.i(a)){this.h(z,G,b);var L;b="/youtubei/v1/"+fu(this.j());(G=null==(L=js(a.commandMetadata,Qk))?void 0:L.apiUrl)&&(b=G);L=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&
(L=String(b)+String(cc(L)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");L=wl(L,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:L,ib:Ht(L),Na:z,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}at(new U("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(gu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function hu(){}
x(hu,gu);function iu(){}
x(iu,hu);iu.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Ht("/getDatasyncIdsEndpoint","GET"),Na:{}}};
iu.prototype.j=function(){return[]};
iu.prototype.i=function(){};
iu.prototype.h=function(){};var ju={},ku=(ju.GET_DATASYNC_IDS=cu(iu),ju);var lu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function mu(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),li(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ut()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&nu(a,b,f)}else nu(a,b)}
function nu(a,b,c){a=ou(a);b=b?fc(b):"";c=c||5;It()&&mm(a,b,c)}
function ou(a){for(var b=v(lu),c=b.next();!c.done;c=b.next())a=lc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function pu(a){rp.call(this,1,arguments);this.csn=a}
x(pu,rp);var Ap=new sp("screen-created",pu),qu=[],ru=0,su=new Map,tu=new Map,uu=new Map;
function vu(a,b,c,d,e){e=void 0===e?!1:e;for(var f=wu({cttAuthInfo:wt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ob(k)||!k.trackingParams&&!k.veType)&&bt(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=xu(h,b);if(k.veType&&!tu.has(l)&&!uu.has(l)&&!e){su.set(l,[a,b,c,h]);return}h=xu(c,b);su.has(h)?yu(c,b):uu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:gb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?zu("visualElementAttached",f,c):a?Us("visualElementAttached",c,a,f):xn("visualElementAttached",c,f)}
function zu(a,b,c){qu.push({Ee:a,payload:c,Xf:void 0,options:b});ru||(ru=Bp())}
function Cp(a){if(qu){for(var b=v(qu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,xn(c.Ee,c.payload,c.options));qu.length=0}ru=0}
function xu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function yu(a,b){a=xu(a,b);su.has(a)&&(b=su.get(a)||[],vu(b[0],b[1],b[2],[b[3]],!0),su.delete(a))}
function wu(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Au(){try{return!!self.localStorage}catch(a){return!1}}
;function Bu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Cu(a){if(Au()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Bu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Du(){if(!Au())return!1;var a=Fm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Bu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Eu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function Fu(a){if(P("LOGGED_IN",!0)&&Eu()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=ou(b),b=(b=nm(b)||null)?ul(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Eu()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&mu(a,b)}}
;function Gu(a){var b=B.apply(1,arguments);if(!Hu(a)||b.some(function(d){return!Hu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Iu(a,c.value)}
function Iu(a,b){for(var c in b)if(Hu(b[c])){if(c in a&&!Hu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Iu(a[c],b[c])}else if(Ju(b[c])){if(c in a&&!Ju(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ku(a[c],b[c])}else a[c]=b[c];return a}
function Ku(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hu(c)?a.push(Iu({},c)):Ju(c)?a.push(Ku([],c)):a.push(c);return a}
function Hu(a){return"object"===typeof a&&!Array.isArray(a)}
function Ju(a){return"object"===typeof a&&Array.isArray(a)}
;function Lu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Mu(){var a=Lu();a.info||(a.info={});return a.info}
function Nu(a){a=Lu(a);a.metadata||(a.metadata={});return a.metadata}
function Ou(a){a=Lu(a);a.tick||(a.tick={});return a.tick}
function Pu(a){a=Lu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qu(a){a=Pu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ru(a){var b=Lu(a).nonce;if(!b){if(R("enable_lr_96_bit_can_no_crypto")){b=jt();for(var c=[],d=0;d<b.length;d++)c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d]&63));b=c.join("")}else b=kt();Lu(a).nonce=b}return b}
;function Su(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Tu(a){a=a||"";var b=E("ytcsi.reference");b||(Su(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Su(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Uu=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",
W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W);function Vu(a,b){rp.call(this,1,arguments);this.timer=b}
x(Vu,rp);var Wu=new sp("aft-recorded",Vu);var Xu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Xu);function Yu(){this.h=0}
function Zu(){Yu.h||(Yu.h=new Yu);return Yu.h}
Yu.prototype.tick=function(a,b,c,d){$u(this,"tick_"+a+"_"+b)||xn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Yu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");$u(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,xn("latencyActionInfo",a,{cttAuthInfo:c}))};
Yu.prototype.jspbInfo=function(){};
Yu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");$u(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,xn("latencyActionSpan",a,{cttAuthInfo:c}))};
function $u(a,b){Xu[b]=Xu[b]||{count:0};var c=Xu[b];c.count++;c.time=V();a.h||(a.h=Hm(function(){var d=V(),e;for(e in Xu)Xu[e]&&6E4<d-Xu[e].time&&delete Xu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||bt(c)),!0):!1}
;var av=window;function bv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function cv(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=dv(e.requestStart),e.responseEnd=dv(e.responseEnd),e.redirectStart=dv(e.redirectStart),e.redirectEnd=dv(e.redirectEnd),e.domainLookupEnd=dv(e.domainLookupEnd),e.connectStart=dv(e.connectStart),e.connectEnd=
dv(e.connectEnd),e.responseStart=dv(e.responseStart),e.secureConnectionStart=dv(e.secureConnectionStart),e.domainLookupStart=dv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function dv(a){return Math.round(ev()+a)}
function ev(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=av.performance||av.mozPerformance||av.msPerformance||av.webkitPerformance||new bv;var fv=!1,gv=!1,hv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||bb,Y);function iv(a,b){if(!R("web_csi_action_sampling_enabled")||!Lu(b).actionDisabled){var c=Tu(b||"");Gu(c.info,a);a.loadType&&(c=a.loadType,Nu(b).loadType=c);Gu(Qu(b),a);c=Ru(b);b=Lu(b).cttAuthInfo;Zu().info(a,c,b)}}
function jv(){var a,b,c,d;return(null!=(d=null==Mr().resolve(new Gr(gp))?void 0:null==(a=hp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Lu(c).actionDisabled){var d=Ru(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Mr().resolve(new Gr(gp))?0:hp())&&!gv&&(gv=!0,Z("gcfl",V(),c));var f,g,h;e=(null==Mr().resolve(new Gr(gp))?void 0:null==(f=hp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=jv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Lu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,iv(f,c));Lu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Tu(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Pu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ou(c);e=b||V();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=Lu(c).cttAuthInfo;"_start"===a?(a=Zu(),$u(a,"baseline_"+d)||xn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Zu().tick(a,d,b,f);kv(c);return e}}}
function lv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=fr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function mv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function nv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ti(window)&&a.setAttribute("nonce",ti(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=ev(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ov(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",dv(b.startTime)),Z("wffe",dv(b.responseEnd)))}
function pv(a){var b=qv("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=qv(b[d],a);if(e)return e}return NaN}
function qv(a,b){if(a=Ou(b)[a])return"number"===typeof a?a:a[a.length-1]}
function kv(a){var b=qv("_start",a),c=pv(a);b&&c&&!fv&&(xp(Wu,new Vu(Math.round(c-b),a)),fv=!0)}
function rv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return dv(a.startTime)}a=Y.timing;
return a.Ae?Math.max(0,a.Ae):0}
;function sv(a,b){ll(function(){Tu("").info.actionType=a;b&&hl("TIMING_AFT_KEYS",b);hl("TIMING_ACTION",a);var c=mv();0<Object.keys(c).length&&iv(c);c={isNavigation:!0,actionType:Uu[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Uu[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=ut())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=lv();if(1===d||-1===d)c.isVisible=!0;Nu();Mu();
c.loadType="cold";d=Mu();var e=cv(),f=ev(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=rv();0<d&&Z("fpt",d);d=cv();d.isPerformanceNavigationTiming&&iv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ev()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&ov();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in hv)hv.hasOwnProperty(h)&&(e=hv[h],
nv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});iv(c);c=Pu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Qu();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Nu().loadType&&("cold"===c.loadType||"cold"===d)){d=Ou();e=Pu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,qv(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Gu(c,d),Gu(k,d),d=!0;d&&iv(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&tv()&&pv()&&kv()})()}
function uv(a,b,c){ll(iv)(a,b,void 0===c?!1:c)}
function vv(a,b,c){return ll(Z)(a,b,c)}
function tv(){return ll(function(){return"_start"in Ou()})()}
function wv(){ll(function(){var a=Ru();requestAnimationFrame(function(){setTimeout(function(){a===Ru()&&vv("ol",void 0,void 0)},0)})})()}
var xv=window;xv.ytcsi&&(xv.ytcsi.infoGel=uv,xv.ytcsi.tick=vv);var yv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),zv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Av(a,b,c,d){this.v=a;this.ba=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},ku,a.Nb)}
function Bv(a,b,c,d){if(void 0!==Av.h){if(d=Av.h,a=[a!==d.v,b!==d.ba,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else Av.h=new Av(a,b,c,d)}
function Cv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?jm:c;var d=bu(b,a.v);if(!d)return Rd(new U("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(Fu(e.input),new Md(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.bf){var n=e.config,p;n=null==n?void 0:null==(p=n.Tb)?void 0:p.sessionIndex;p=im(0,{sessionIndex:n});k=Object.assign({},Dv(h),p);return l.B(2)}return l.yield(Ev(e.config,
h),3)}2!=l.h&&(k=l.i);f(Fv(a,e,k));l.h=0})})):Rd(new U("Error: Failed to build request for command.",b))}
function Gv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(yv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Fv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,w,y,z,G,K,I,S,H,fa,L,X,da,ma,na,sb,Mc,Nc,ce;return A(function(ja){switch(ja.h){case 1:ja.B(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ja.B(4);break}g=b.Na.context;ja.B(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.B(4);break}l=k.value;return ja.yield(l.fg(g),8);case 8:k=h.next();ja.B(7);break;case 4:if(null==(n=a.i)||!n.kg(b.input,b.Na)){ja.B(11);
break}return ja.yield(a.i.Zf(b.input,b.Na),12);case 12:return p=ja.i,R("kevlar_process_local_innertube_responses_killswitch")||Gv(a,p,b),ja.return(p);case 11:return(w=null==(r=b.config)?void 0:r.hg)&&a.h.has(w)?t=a.h.get(w):(y=JSON.stringify(b.Na),K=null!=(G=null==(z=b.ib)?void 0:z.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},K,c)}),I=Object.assign({},b.ib),"POST"===b.ib.method&&(I=Object.assign({},I,{body:y})),(null==(S=b.config)?0:S.Ke)&&vv(b.config.Ke),H=function(){return a.ba.fetch(b.input,
I,b.config)},t=H(),w&&a.h.set(w,t)),ja.yield(t,13);
case 13:if((fa=ja.i)&&"error"in fa&&(null==(L=fa)?0:null==(X=L.error)?0:X.details))for(da=fa.error.details,ma=v(da),na=ma.next();!na.done;na=ma.next())sb=na.value,(Mc=sb["@type"])&&-1<zv.indexOf(Mc)&&(delete sb["@type"],fa=sb);w&&a.h.has(w)&&a.h.delete(w);(null==(Nc=b.config)?0:Nc.Le)&&vv(b.config.Le);if(fa||null==(ce=a.i)||!ce.Sf(b.input,b.Na)){ja.B(14);break}return ja.yield(a.i.Yf(b.input,b.Na),15);case 15:fa=ja.i;case 14:return Gv(a,fa,b),ja.return(fa||void 0)}})}
function Ev(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=im(0,{sessionIndex:e});if(!(k instanceof Md)){var l=new Md(bb);Nd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Dv(b),f)))})}
function Dv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Hv=new Fr("INNERTUBE_TRANSPORT_TOKEN");var Iv=["share/get_web_player_share_panel"],Jv=["feedback"],Kv=["notification/modify_channel_preference"],Lv=["browse/edit_playlist"],Mv=["subscription/subscribe"],Nv=["subscription/unsubscribe"];function Ov(){}
x(Ov,hu);Ov.prototype.j=function(){return Mv};
Ov.prototype.i=function(a){return js(a,Zk)||void 0};
Ov.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Ov.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Pv(){}
x(Pv,hu);Pv.prototype.j=function(){return Nv};
Pv.prototype.i=function(a){return js(a,Yk)||void 0};
Pv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Pv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Qv(){}
x(Qv,hu);Qv.prototype.j=function(){return Jv};
Qv.prototype.i=function(a){return js(a,Tk)||void 0};
Qv.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Qv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Rv(){}
x(Rv,hu);Rv.prototype.j=function(){return Kv};
Rv.prototype.i=function(a){return js(a,Xk)||void 0};
Rv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Sv(){}
x(Sv,hu);Sv.prototype.j=function(){return Lv};
Sv.prototype.i=function(a){return js(a,Wk)||void 0};
Sv.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Tv(){}
x(Tv,hu);Tv.prototype.j=function(){return Iv};
Tv.prototype.i=function(a){return js(a,Vk)};
Tv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Uv=new Fr("NETWORK_SLI_TOKEN");function Vv(a){this.h=a}
Vv.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=Wv(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){bt(g)}))})};
function Wv(a,b,c){if(a.h){var d=$b(ac(5,lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Zp(c));return new window.Request(b,a)}
Vv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.ue)&&a.ok?sg(b.ue,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Vf(),c=c.then(function(d){bt(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Vv[Er]=[new Gr(Uv)];var Xv=new Fr("NETWORK_MANAGER_TOKEN");var Yv;function Zv(){var a,b,c;return A(function(d){if(1==d.h)return a=Mr().resolve(Hv),a?d.yield(Cv(a),2):(bt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return bt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Tf;return d.return(c)}bt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var $v=C.caches,aw;function bw(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function cw(){return A(function(a){if(void 0!==aw)return a.return(aw);aw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield($v.open("test-only"),4);case 4:return d.yield($v.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(aw)})}
function dw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(cw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield($v.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=bw(f),h=g.datasyncId,!h||a.includes(h)||b.push($v.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function ew(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(cw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Fm("cache contains other");return h.yield($v.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=bw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function fw(){Zv().then(function(a){a&&(Mo(a),dw(a),Cu(a))})}
function gw(){var a=new Rq;Ji.qa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=Fm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Mo(g);dw(g);Cu(g);return f.return()}c=Du();return f.yield(ew(),3);case 3:return d=f.i,f.yield(No(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.xa()?fw():a.h.add("publicytnetworkstatus-online",fw,!0,void 0,void 0),f.h=0}})})}
;var pi=ia(["data-"]);function hw(a){a&&(a.dataset?a.dataset[iw()]="true":oi(a))}
function jw(a){return a?a.dataset?a.dataset[iw()]:a.getAttribute("data-loaded"):null}
var kw={};function iw(){return kw.loaded||(kw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var lw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lw,""),c=c.replace(mw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ow(a,b,c)}
function ow(a,b,c){c=void 0===c?null:c;var d=pw(a),e=document.getElementById(d),f=e&&jw(e),g=e&&!f;f?b&&b():(b&&(f=yr(d,b),b=""+Qa(b),qw[b]=f),g||(e=rw(a,d,function(){if(!jw(e)){hw(e);Br(d);var h=Wa(Cr,d);Fl(h,0)}},c)))}
function rw(a,b,c,d){d=void 0===d?null:d;var e=yd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);wi(e,Kk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sw(a){a=pw(a);var b=document.getElementById(a);b&&(Cr(a),b.parentNode.removeChild(b))}
function tw(a,b){a&&b&&(a=""+Qa(b),(a=qw[a])&&Ar(a))}
function pw(a){var b=document.createElement("a");li(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var qw={};var uw=[],vw=!1;function ww(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&It()){var a=P("PLAYER_VARS",{});if("1"!=qb(a)&&!Jt(a)){var b=function(){vw=!0;"google_ad_status"in window?hl("DCLKSTAT",1):hl("DCLKSTAT",2)};
try{nw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}uw.push(Ji.qa(function(){if(!(vw||"google_ad_status"in window)){try{tw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}vw=!0;hl("DCLKSTAT",3)}},5E3))}}}
function xw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function yw(a){Vr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(yw,Vr);yw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
yw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
yw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
yw.prototype.i=function(){this.h=new Map};function zw(a){Vr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(zw,Vr);zw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
zw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
zw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
zw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Aw(){this.l=new yw;this.v=new zw}
Aw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function Bw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Bw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ut(void 0===c?0:c)){a=this.client;d=new nt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=xu(d,c);tu.set(f,!0);yu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=wu({cttAuthInfo:wt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?zu("visualElementGestured",f,d):a?Us("visualElementGestured",d,a,f):xn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Bw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new nt({trackingParams:a}),b,void 0===c?0:c)};
Bw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=ut(d);a||(a=(a=rt(void 0===d?0:d))?new nt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=wu({cttAuthInfo:wt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?zu("visualElementStateChanged",d,b):a?Us("visualElementStateChanged",b,a,d):xn("visualElementStateChanged",b,d))}};
function Cw(a,b){if(void 0===b)for(var c=tt(),d=0;d<c.length;d++)void 0!==c[d]&&Cw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&vu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Dw(){Aw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Dw,Aw);Dw.prototype.j=function(){xn("finalPayload",{csn:ut()})};
Dw.prototype.h=function(){ft(gt)};
Dw.prototype.i=function(){var a=Cw;Bw.h||(Bw.h=new Bw);a(Bw.h)};function Ew(){}
function Fw(){var a=E("ytglobal.storage_");a||(a=new Ew,D("ytglobal.storage_",a));return a}
Ew.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Gw()):d.return()})};
function Gw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ew);function vn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=T("ytidb_transaction_ended_event_rate_limit_session",.2)}
vn.prototype.Ib=function(a){this.handleError(a)};
vn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Hw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=T("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Hw(a,b){Fw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Iw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Iw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Iw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Jw(a,b,c){J.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=db(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
x(Jw,J);Jw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){nl(d)}}};
Jw.prototype.S=function(){window.removeEventListener("message",this.A);J.prototype.S.call(this)};function Kw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Jw(!!P("WIDGET_ID_ENFORCE")),b=this.He.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Kw.prototype;m.He=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");eb(this.i,this.Bd,this);this.i=[]};
m.zc=function(){return null};
function Lw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Mw={},Nw=(Mw["api.invalidparam"]=2,Mw.auth=150,Mw["drm.auth"]=150,Mw["heartbeat.net"]=150,Mw["heartbeat.servererror"]=150,Mw["heartbeat.stop"]=150,Mw["html5.unsupportedads"]=5,Mw["fmt.noneavailable"]=5,Mw["fmt.decode"]=5,Mw["fmt.unplayable"]=5,Mw["html5.missingapi"]=5,Mw["html5.unsupportedlive"]=5,Mw["drm.unavailable"]=5,Mw["mrm.blocked"]=151,Mw);var Ow=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Pw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Ow);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Rw(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Sw(a){Kw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Te.bind(this));this.addEventListener("onVolumeChange",this.Ue.bind(this));this.addEventListener("onApiChange",this.Oe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Qe.bind(this));this.addEventListener("onPlaybackRateChange",this.Re.bind(this));this.addEventListener("onStateChange",this.Se.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ve.bind(this))}
x(Sw,Kw);m=Sw.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Pw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Qw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Qw(e);break;case "loadPlaylist":case "cuePlaylist":e=Rw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Pw(a)&&Lw(this,this.zc())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Kw.prototype.Dc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Kw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ee.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Nw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Se=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Lw(this,a)};
m.Qe=function(a){Lw(this,{playbackQuality:a})};
m.Re=function(a){Lw(this,{playbackRate:a})};
m.Oe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ue=function(){Lw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Te=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Lw(this,a)};
m.Ve=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Lw(this,a)};
m.dispose=function(){Kw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Tw(a){J.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.xd,this)}
x(Tw,J);m=Tw.prototype;m.start=function(){this.started||this.aa()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,b)};
m.xd=function(a,b,c){if(this.started&&!this.aa()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Uw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Vw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Pe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Pe=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.xd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);J.prototype.S.call(this)};function Ww(a,b){Tw.call(this,b);this.api=a;this.start()}
x(Ww,Tw);Ww.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Ww.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Uw(a,b){switch(a){case "loadVideoById":return a=Qw(b),[a];case "cueVideoById":return a=Qw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Rw(b),[a];case "cuePlaylist":return a=Rw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Vw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ww.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Tw.prototype.yc.call(this,a,b)};
Ww.prototype.S=function(){Tw.prototype.S.call(this);delete this.api};function Xw(a){a=void 0===a?!1:a;J.call(this);this.h=new M(a);sc(this,this.h)}
Ya(Xw,J);Xw.prototype.subscribe=function(a,b,c){return this.aa()?0:this.h.subscribe(a,b,c)};
Xw.prototype.unsubscribe=function(a,b,c){return this.aa()?!1:this.h.unsubscribe(a,b,c)};
Xw.prototype.l=function(a,b){this.aa()||this.h.Ya.apply(this.h,arguments)};function Yw(a,b,c){Xw.call(this);this.j=a;this.i=b;this.id=c}
x(Yw,Xw);Yw.prototype.jb=function(a,b){this.aa()||this.j.jb(this.i,this.id,a,b)};
Yw.prototype.S=function(){this.i=this.j=null;Xw.prototype.S.call(this)};function Zw(a,b,c){J.call(this);this.h=a;this.origin=c;this.i=mr(window,"message",this.j.bind(this));this.connection=new Yw(this,a,b);sc(this,this.connection)}
x(Zw,J);Zw.prototype.jb=function(a,b,c,d){this.aa()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Zw.prototype.j=function(a){if(!this.aa()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.aa()||c.l("command",b.command,b.data,a.origin)}}}};
Zw.prototype.S=function(){nr(this.i);this.h=null;J.prototype.S.call(this)};function $w(){this.state=1;this.h=null}
m=$w.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,d=new Xb,d.vd=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Jk(a.interpreterSafeUrl).toString());ax(this,d,e,a.program,b,c)}else bt(Error("Cannot initialize botguard without program"))};
function ax(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,nw(c,function(){window[g]?bx(a,d,g,e):(a.state=3,sw(c),bt(new U("Unable to load Botguard","from "+c)))},f)):b?(f=yd("SCRIPT"),b instanceof Xb?vi(f,b):f.textContent=b,f.nonce=ti(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?bx(a,d,g,e):(a.state=4,bt(new U("Unable to load Botguard from JS")))):bt(new U("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function bx(a,b,c,d){a.state=5;try{var e=new $h({program:b,ke:c,Ie:R("att_web_record_metrics")});e.Ye.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&bt(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Uc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Rc(null);this.state=8};
m.Uc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Rc=function(a){qc(this.h);this.h=a};function cx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function dx(){$w.apply(this,arguments)}
x(dx,$w);dx.prototype.Rc=function(a){var b;null==(b=cx())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
dx.prototype.Uc=function(){return!!cx()};
dx.prototype.Kd=function(a){return cx().bgvmc(a)};var ex=new dx;function fx(){return ex.Uc()}
function gx(a){a=void 0===a?{}:a;return ex.invoke(a)}
;function hx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
hx.prototype.clone=function(){var a=new hx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=tb(c):a[b]=c}return a};var ix=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function jx(a){a=a||"";if(window.spf){var b=a.match(ix);spf.style.load(a,b?b[1]:"",void 0)}else kx(a)}
function kx(a){var b=lx(a),c=document.getElementById(b),d=c&&jw(c);d||c&&!d||(c=mx(a,b,function(){if(!jw(c)){hw(c);Br(b);var e=Wa(Cr,b);Fl(e,0)}}))}
function mx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Kk(a);si(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function lx(a){var b=yd("A");li(b,new Gb(a,Hb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function nx(a,b,c,d,e){J.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.pc=e;this.Fa=!1;this.api={};this.fa=this.m=null;this.T=new M;this.h={};this.Z=this.ha=this.elementId=this.Za=this.config=null;this.U=!1;this.j=this.D=null;this.va={};this.qc=["onReady"];this.lastError=null;this.Qb=NaN;this.K={};this.ea=0;this.i=this.l=a;sc(this,this.T);ox(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(px(this),qx(this))}
x(nx,J);m=nx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.aa()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof hx||(b=new hx(b));this.config=b;this.setConfig(a);qx(this);this.isReady()&&rx(this)}};
function px(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=sx(a);px(this);if(!this.ha){var b;this.ha=tx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Di(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Di(Number(a)||a))};
function rx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ux(a){var b=!0,c=vx(a);c&&a.config&&(b=c.dataset.version===wx(a));return b&&!!E("yt.player.Application.create")}
function qx(a){if(!a.aa()&&!a.U){var b=ux(a);if(b&&"html5"===(vx(a)?"html5":null))a.Z="html5",a.isReady()||xx(a);else if(yx(a),a.Z="html5",b&&a.j&&a.l)a.l.appendChild(a.j),xx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=zx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?sx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.pc);xx(a)};
a.U=!0;b?a.D():(nw(wx(a),a.D),(b=Ax(a))&&jx(b),Bx(a)&&!c&&D("yt.player.Application.create",null))}}}
function vx(a){var b=xd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function xx(a){if(!a.aa()){var b=vx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.U=!1;if(!zx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Cx(a)}else a.Qb=setTimeout(function(){xx(a)},50)}}
function Cx(a){ox(a);a.Fa=!0;var b=vx(a);if(b){a.m=Dx(a,b,"addEventListener");a.fa=Dx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Dx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);rx(a);a.ha&&a.ha(a.api);a.T.Ya("onReady",a.api)}
function Dx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function ox(a){a.Fa=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.m=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
m.addEventListener=function(a,b){var c=this,d=tx(this,b);d&&(0<=db(this.qc,a)||this.h[a]||(b=Ex(this,a),this.m&&this.m(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.aa()||(b=tx(this,b))&&this.T.unsubscribe(a,b)};
function tx(a,b){var c=b;if("string"===typeof b){if(a.va[b])return a.va[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.va[b]=c}return c?c:null}
function Ex(a,b){function c(d){var e=setTimeout(function(){if(!a.aa()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new U("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
pb(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.Z||(vx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function yx(a){a.cancel();ox(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=vx(a);b&&(ux(a)||!Bx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&tw(wx(this),this.D);clearTimeout(this.Qb);this.U=!1};
m.S=function(){yx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.va=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;J.prototype.S.call(this)};
function Bx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function wx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ax(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function zx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function sx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Fx={},Gx="player_uid_"+(1E9*Math.random()>>>0);function Hx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?xd(c):c;var e=Gx+"_"+Qa(c),f=Fx[e];if(f&&d)return Ix(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new nx(c,e,a,b,void 0);Fx[e]=f;f.addOnDisposeCallback(function(){delete Fx[f.getId()]});
return f.api}
function Ix(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Jx=null,Kx=null,Lx=null;
function Mx(){wv();var a=tm(),b=xm(119),c=1<window.devicePixelRatio;if(document.body&&Ti(document.body,"exp-invert-logo"))if(c&&!Ti(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ti(d,"inverted-hdpi")){var e=Ri(d);Si(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ti(document.body,"inverted-hdpi")&&Ui();if(b!=c){b="f"+(Math.floor(119/31)+1);d=ym(b)||0;d=c?d|67108864:d&-67108865;0===d?delete qm[b]:(c=d.toString(16),qm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in qm)qm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(qm[f])));var f=d.join("&");mm(b,f,63072E3,a.i,c)}}
function Nx(){Ox()}
function Px(){vv("ep_init_pr");Ox()}
function Ox(){var a=Jx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Qx(){Jx&&Jx.sendAbandonmentPing&&Jx.sendAbandonmentPing();P("PL_ATT")&&ex.dispose();for(var a=Ji,b=0,c=uw.length;b<c;b++)a.ra(uw[b]);uw.length=0;sw("//static.doubleclick.net/instream/ad_status.js");vw=!1;hl("DCLKSTAT",0);rc(Lx,Kx);Jx&&(Jx.removeEventListener("onVideoDataChange",Nx),Jx.destroy())}
;function Rx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&mu(a,b);if(c)return!1;Fu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=hc(a,e);Fu(a);f=a+f;var h=void 0===h?ii:h;a:if(h=void 0===h?ii:h,f instanceof Gb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof gi&&b.te(f)){h=new Gb(f,Hb);break a}h=void 0}g=g.location;h=ki(h||Ib);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",hl);D("yt.config.set",hl);D("yt.setMsg",zt);D("yt.msgs.set",zt);D("yt.logging.errors.log",at);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}St(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);sv("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=vl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&sv("watch",["pbs","pbu","pbp"]);Jx=Hx(a,c);Jx.addEventListener("onVideoDataChange",Nx);Jx.addEventListener("onReady",Px);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Lx=new Sw(Jx):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Kx=new Zw(window.parent,a,b),Lx=new Ww(Jx,Kx.connection));ww();R("ytidb_create_logger_embed_killswitch")||un();a={};Dw.h||(Dw.h=new Dw);
Dw.h.install((a.flush_logs={callback:function(){Hs()}},a));
cr();R("ytidb_clear_embedded_player")&&Ji.qa(function(){var f,g;if(!Yv){var h=Mr();Ir(h,{lc:Xv,Id:Vv});var k={cd:{feedbackEndpoint:cu(Qv),modifyChannelNotificationPreferenceEndpoint:cu(Rv),playlistEditEndpoint:cu(Sv),subscribeEndpoint:cu(Ov),unsubscribeEndpoint:cu(Pv),webPlayerShareEntityServiceEndpoint:cu(Tv)}},l=au(),n={};l&&(n.client_location=l);void 0===f&&(f=hm());void 0===g&&(g=h.resolve(Xv));Bv(k,g,f,n);Ir(h,{lc:Hv,Jd:Av.h});Yv=h.resolve(Hv)}gw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||fx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||gx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||xw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Rx);D("yt.util.activity.init",E("yt.util.activity.init")||qr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||tr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||rr);window.addEventListener("load",ll(function(){Mx()}));
window.addEventListener("pageshow",ll(function(a){a.persisted||Mx()}));
window.addEventListener("pagehide",ll(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Qx():a.persisted||Qx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=il("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new U(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?at(e):bt(e))};
be=ct;window.addEventListener("unhandledrejection",function(a){ct(a.reason)});
eb(P("ERRORS")||[],function(a){at.apply(null,a)});
hl("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&ln();}).call(this);
