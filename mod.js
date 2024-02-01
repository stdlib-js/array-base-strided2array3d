// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function e(e){var t=r[e];return"function"==typeof t?t:r.default}var t={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function n(r){var e=t[r];return"function"==typeof e?e:t.default}var i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var l=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):l.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(r){return"string"==typeof r}var h=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,m=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,E=/\.0$/,A=/\.0*e/,_=/(\..*[^0])0*e/;function T(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":h(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=m.call(t,_,"$1e"),t=m.call(t,A,"e"),t=m.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=m.call(t,w,"e+0$1"),t=m.call(t,b,"e-0$1"),r.alternate&&(t=m.call(t,v,"$1."),t=m.call(t,d,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+x(n):x(n)+r}var k=String.fromCharCode,V=isNaN,L=Array.isArray;function R(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,o,a,u,l,c;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,l=0;l<r.length;l++)if(y(n=r[l]))a+=n;else{if(e=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,V(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!V(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,t,n,i;for(t=[],i=0,n=B.exec(r);n;)(e=r.slice(i,B.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=B.lastIndex,n=B.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=C(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var M,U=Object.prototype,N=U.toString,P=U.__defineGetter__,Y=U.__defineSetter__,W=U.__lookupGetter__,$=U.__lookupSetter__;M=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};var G=M;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&q.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";var Q=J()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[K],e=D(r,K);try{r[K]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[K]=t:delete r[K],n}:function(r){return z.call(r)};var rr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};function er(r){return null!==r&&"object"==typeof r}function tr(r){return er(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function nr(){return/^\s*function\s*([^(]*)/i}Z(er,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!rr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(er));var ir=/^\s*function\s*([^(]*)/i;function or(r){var e,t,n;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ir.exec(n.toString()))return e[1]}return tr(r)?"Buffer":t}Z(nr,"REGEXP",ir);var ar={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var lr="function"==typeof Float64Array?Float64Array:void 0;var cr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")},sr="function"==typeof Float32Array;var yr=Number.POSITIVE_INFINITY,hr="function"==typeof Float32Array?Float32Array:null;var pr="function"==typeof Float32Array?Float32Array:void 0;var gr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr([1,3.14,-3.14,5e40]),t=e,r=(sr&&t instanceof Float32Array||"[object Float32Array]"===Q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===yr}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},mr="function"==typeof Uint32Array;var wr="function"==typeof Uint32Array?Uint32Array:null;var br="function"==typeof Uint32Array?Uint32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(mr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Int32Array;var Er="function"==typeof Int32Array?Int32Array:null;var Ar="function"==typeof Int32Array?Int32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er([1,3.14,-3.14,2147483648]),t=e,r=(dr&&t instanceof Int32Array||"[object Int32Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},Tr="function"==typeof Uint16Array;var xr="function"==typeof Uint16Array?Uint16Array:null;var jr="function"==typeof Uint16Array?Uint16Array:void 0;var kr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Tr&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Vr="function"==typeof Int16Array;var Lr="function"==typeof Int16Array?Int16Array:null;var Rr="function"==typeof Int16Array?Int16Array:void 0;var Sr=function(){var r,e,t;if("function"!=typeof Lr)return!1;try{e=new Lr([1,3.14,-3.14,32768]),t=e,r=(Vr&&t instanceof Int16Array||"[object Int16Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Br="function"==typeof Uint8Array;var Ir="function"==typeof Uint8Array?Uint8Array:null;var Cr="function"==typeof Uint8Array?Uint8Array:void 0;var Fr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,256,257]),t=e,r=(Br&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Or="function"==typeof Uint8ClampedArray;var Mr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Or&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Q(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Pr="function"==typeof Int8Array;var Yr="function"==typeof Int8Array?Int8Array:null;var Wr="function"==typeof Int8Array?Int8Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([1,3.14,-3.14,128]),t=e,r=(Pr&&t instanceof Int8Array||"[object Int8Array]"===Q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};function Gr(r){return"number"==typeof r}var Zr=Number,Xr=Zr.prototype.toString;var Jr=J();function zr(r){return"object"==typeof r&&(r instanceof Zr||(Jr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function qr(r){return Gr(r)||zr(r)}Z(qr,"isPrimitive",Gr),Z(qr,"isObject",zr);var Dr=Zr.NEGATIVE_INFINITY,Hr=Math.floor;function Kr(r){return Hr(r)===r}function Qr(r){return r<yr&&r>Dr&&Kr(r)}function re(r){return Gr(r)&&Qr(r)}function ee(r){return zr(r)&&Qr(r.valueOf())}function te(r){return re(r)||ee(r)}function ne(r){return re(r)&&r>=0}function ie(r){return ee(r)&&r.valueOf()>=0}function oe(r){return ne(r)||ie(r)}Z(te,"isPrimitive",re),Z(te,"isObject",ee),Z(oe,"isPrimitive",ne),Z(oe,"isObject",ie);function ae(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Kr(r.length)&&r.length>=0&&r.length<=4294967295}function ue(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Kr(r.length)&&r.length>=0&&r.length<=9007199254740991}var fe="function"==typeof ArrayBuffer;function le(r){return fe&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===Q(r)}function ce(r){return"object"==typeof r&&null!==r&&!rr(r)}var se=/./;function ye(r){return"boolean"==typeof r}var he=Boolean,pe=Boolean.prototype.toString;var ge=J();function me(r){return"object"==typeof r&&(r instanceof he||(ge?function(r){try{return pe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function we(r){return ye(r)||me(r)}function be(){return new Function("return this;")()}Z(we,"isPrimitive",ye),Z(we,"isObject",me);var ve="object"==typeof self?self:null,de="object"==typeof window?window:null,Ee="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ae="object"==typeof Ee?Ee:null,_e="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!ye(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return be()}if(_e)return _e;if(ve)return ve;if(de)return de;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=Te.document&&Te.document.childNodes,je=Int8Array;var ke="function"==typeof se||"object"==typeof je||"function"==typeof xe?function(r){return or(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?or(r).toLowerCase():e};function Ve(r){return"function"===ke(r)}function Le(r,e){if(!(this instanceof Le))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Gr(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Gr(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Z(Le,"BYTES_PER_ELEMENT",8),Z(Le.prototype,"BYTES_PER_ELEMENT",8),Z(Le.prototype,"byteLength",16),Z(Le.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Z(Le.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Re="function"==typeof Math.fround?Math.fround:null,Se=new gr(1);var Be="function"==typeof Re?Re:function(r){return Se[0]=r,Se[0]};function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Gr(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Gr(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Be(r)}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Be(e)}),this}function Ce(r){return r instanceof Le||r instanceof Ie||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Fe(r){return Kr(r/2)}function Oe(){return"function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator}Z(Ie,"BYTES_PER_ELEMENT",4),Z(Ie.prototype,"BYTES_PER_ELEMENT",4),Z(Ie.prototype,"byteLength",8),Z(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Z(Ie.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Me=Oe()?Symbol.iterator:null;function Ue(r,e,t){G(r,e,{configurable:!1,enumerable:!1,get:t})}function Ne(r){return r.re}function Pe(r){return r.im}function Ye(r,e){return new gr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function We(r,e){return new cr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ae(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(O("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ne(n),Pe(n))}return e}function Ge(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ae(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ne(o),Pe(o))}return n}function Ze(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Ne(n),r[o+1]=Pe(n),o+=2}return r}var Xe=2*gr.BYTES_PER_ELEMENT,Je=Oe();function ze(r){return r instanceof Ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Ke||"Complex128Array"===r.name}function De(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Xe}function He(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Xe}function Ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ke))return 0===e?new Ke:1===e?new Ke(arguments[0]):2===e?new Ke(arguments[0],arguments[1]):new Ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new gr(0);else if(1===e)if(ne(arguments[0]))t=new gr(2*arguments[0]);else if(ue(arguments[0]))if((n=(t=arguments[0]).length)&&rr(t)&&Ce(t[0])){if(null===(t=Ze(new gr(2*n),t))){if(!Fe(n))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(arguments[0])}}else{if(De(t))t=Ye(t,0);else if(He(t))t=We(t,0);else if(!Fe(n))throw new RangeError(O("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(t)}else if(le(arguments[0])){if(!Kr((t=arguments[0]).byteLength/Xe))throw new RangeError(O("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Xe,t.byteLength));t=new gr(t)}else{if(!ce(arguments[0]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Je)throw new TypeError(O("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=$e(t))instanceof Error)throw t;t=new gr(t)}else{if(!le(t=arguments[0]))throw new TypeError(O("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ne(r=arguments[1]))throw new TypeError(O("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Kr(r/Xe))throw new RangeError(O("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Xe,r));if(2===e){if(!Kr((n=t.byteLength-r)/Xe))throw new RangeError(O("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Xe,n));t=new gr(t,r)}else{if(!ne(n=arguments[2]))throw new TypeError(O("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Xe>t.byteLength-r)throw new RangeError(O("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Xe));t=new gr(t,r,2*n)}}return Z(this,"_buffer",t),Z(this,"_length",t.length/2),this}function Qe(r){return r.re}function rt(r){return r.im}function et(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ae(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(O("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function tt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ae(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function nt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}Z(Ke,"BYTES_PER_ELEMENT",Xe),Z(Ke,"name","Complex64Array"),Z(Ke,"from",(function(r){var t,i,o,a,u,f,l,c,s,y,h,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((i=arguments.length)>1){if(!Ve(o=arguments[1]))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",o));i>2&&(t=arguments[2])}if(ze(r)){if(c=r.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(t,r.get(h),h)))u[p]=Ne(y),u[p+1]=Pe(y);else{if(!(ae(y)&&y.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(ue(r)){if(o){for(c=r.length,l=r.get&&r.set?e("default"):n("default"),h=0;h<c;h++)if(!Ce(l(r,h))){s=!0;break}if(s){if(!Fe(c))throw new RangeError(O("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(t,l(r,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(t,l(r,h),h)))u[p]=Ne(y),u[p+1]=Pe(y);else{if(!(ae(y)&&y.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(ce(r)&&Je&&Ve(r[Me])){if(!Ve((u=r[Me]()).next))throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=o?Ge(u,o,t):$e(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Z(Ke,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(Ke.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(Ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(Ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Z(Ke.prototype,"BYTES_PER_ELEMENT",Ke.BYTES_PER_ELEMENT),Z(Ke.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Z(Ke.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Z(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Z(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&Z(t,Me,(function(){return e.entries()})),t})),Z(Ke.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ne(r))throw new TypeError(O("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),Ue(Ke.prototype,"length",(function(){return this._length})),Z(Ke.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ne(t=arguments[1]))throw new TypeError(O("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ne(r),void(n[t+1]=Pe(r))}if(ze(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ue(r))throw new TypeError(O("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ne(u),n[t+1]=Pe(u),t+=2}}));var it=2*cr.BYTES_PER_ELEMENT,ot=Oe();function at(r){return r instanceof ct||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ut(r){return r===ct||"Complex64Array"===r.name}function ft(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it/2}function lt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it}function ct(){var r,e,t,n;if(e=arguments.length,!(this instanceof ct))return 0===e?new ct:1===e?new ct(arguments[0]):2===e?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===e)t=new cr(0);else if(1===e)if(ne(arguments[0]))t=new cr(2*arguments[0]);else if(ue(arguments[0]))if((n=(t=arguments[0]).length)&&rr(t)&&Ce(t[0])){if(null===(t=nt(new cr(2*n),t))){if(!Fe(n))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new cr(arguments[0])}}else{if(ft(t))t=Ye(t,0);else if(lt(t))t=We(t,0);else if(!Fe(n))throw new RangeError(O("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new cr(t)}else if(le(arguments[0])){if(!Kr((t=arguments[0]).byteLength/it))throw new RangeError(O("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,t.byteLength));t=new cr(t)}else{if(!ce(arguments[0]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ot)throw new TypeError(O("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=et(t))instanceof Error)throw t;t=new cr(t)}else{if(!le(t=arguments[0]))throw new TypeError(O("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ne(r=arguments[1]))throw new TypeError(O("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Kr(r/it))throw new RangeError(O("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,r));if(2===e){if(!Kr((n=t.byteLength-r)/it))throw new RangeError(O("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,n));t=new cr(t,r)}else{if(!ne(n=arguments[2]))throw new TypeError(O("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*it>t.byteLength-r)throw new RangeError(O("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*it));t=new cr(t,r,2*n)}}return Z(this,"_buffer",t),Z(this,"_length",t.length/2),this}Z(ct,"BYTES_PER_ELEMENT",it),Z(ct,"name","Complex128Array"),Z(ct,"from",(function(r){var t,i,o,a,u,f,l,c,s,y,h,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((i=arguments.length)>1){if(!Ve(o=arguments[1]))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",o));i>2&&(t=arguments[2])}if(at(r)){if(c=r.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(t,r.get(h),h)))u[p]=Qe(y),u[p+1]=rt(y);else{if(!(ae(y)&&y.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(ue(r)){if(o){for(c=r.length,l=r.get&&r.set?e("default"):n("default"),h=0;h<c;h++)if(!Ce(l(r,h))){s=!0;break}if(s){if(!Fe(c))throw new RangeError(O("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(t,l(r,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ce(y=o.call(t,l(r,h),h)))u[p]=Qe(y),u[p+1]=rt(y);else{if(!(ae(y)&&y.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(r)}if(ce(r)&&ot&&Ve(r[Me])){if(!Ve((u=r[Me]()).next))throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=o?tt(u,o,t):et(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Z(ct,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Z(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),Z(ct.prototype,"copyWithin",(function(r,e){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Z(ct.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Z(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Le(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Z(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&Z(t,Me,(function(){return e.entries()})),t})),Z(ct.prototype,"get",(function(r){var e;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ne(r))throw new TypeError(O("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Le((e=this._buffer)[r*=2],e[r+1])})),Ue(ct.prototype,"length",(function(){return this._length})),Z(ct.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ne(t=arguments[1]))throw new TypeError(O("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(r),void(n[t+1]=rt(r))}if(at(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new cr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ue(r))throw new TypeError(O("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new cr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Qe(u),n[t+1]=rt(u),t+=2}}));var st=[cr,gr,_r,vr,Sr,kr,$r,Fr,Nr,Ke,ct],yt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],ht=yt.length;function pt(r){var t,i=function(r){var e;if(rr(r))return"generic";if(tr(r))return null;for(e=0;e<ht;e++)if(r instanceof st[e])return yt[e];return ar[or(r)]||null}(r);return"function"==typeof(t=r).get&&"function"==typeof t.set?e(i):n(i)}function gt(r,e,t,n){var i,o,a,u,f,l,c,s,y,h,p,g,m,w,b;for(i=pt(r),h=e[0],y=e[1],s=e[2],f=t[0],u=t[1],a=t[2],o=[],m=0;m<h;m++){for(w=[],l=n+f*m,g=0;g<y;g++){for(b=[],c=l+u*g,p=0;p<s;p++)b.push(i(r,c)),c+=a;w.push(b)}o.push(w)}return o}export{gt as default};
//# sourceMappingURL=mod.js.map
