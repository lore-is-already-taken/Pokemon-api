(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:me}=Object.prototype,{getPrototypeOf:X}=Object,G=(e=>t=>{const n=me.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>G(t)===e),I=e=>t=>typeof t===e,{isArray:C}=Array,L=I("undefined");function je(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=g("ArrayBuffer");function Me(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const He=I("string"),T=I("function"),ye=I("number"),Q=e=>e!==null&&typeof e=="object",Ie=e=>e===!0||e===!1,B=e=>{if(G(e)!=="object")return!1;const t=X(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ve=g("Date"),qe=g("File"),Je=g("Blob"),We=g("FileList"),ze=e=>Q(e)&&T(e.pipe),$e=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||me.call(e)===t||T(e.toString)&&e.toString()===t)},Ve=g("URLSearchParams"),Ke=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function we(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const be=typeof self>"u"?typeof global>"u"?globalThis:global:self,Oe=e=>!L(e)&&e!==be;function $(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&we(t,s)||s;B(t[o])&&B(r)?t[o]=$(t[o],r):B(r)?t[o]=$({},r):C(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const Xe=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&T(s)?e[o]=pe(s,n):e[o]=s},{allOwnKeys:r}),e),Ge=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qe=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ye=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&X(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ze=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},et=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!ye(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&X(Uint8Array)),nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},rt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},st=g("HTMLFormElement"),ot=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),it=g("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},at=e=>{Se(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ct=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return C(e)?r(e):r(String(e).split(t)),n},ut=()=>{},lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ft=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=C(r)?[]:{};return k(r,(i,u)=>{const d=n(i,s+1);!L(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:C,isArrayBuffer:Ee,isBuffer:je,isFormData:$e,isArrayBufferView:Me,isString:He,isNumber:ye,isBoolean:Ie,isObject:Q,isPlainObject:B,isUndefined:L,isDate:ve,isFile:qe,isBlob:Je,isRegExp:it,isFunction:T,isStream:ze,isURLSearchParams:Ve,isTypedArray:tt,isFileList:We,forEach:k,merge:$,extend:Xe,trim:Ke,stripBOM:Ge,inherits:Qe,toFlatObject:Ye,kindOf:G,kindOfTest:g,endsWith:Ze,toArray:et,forEachEntry:nt,matchAll:rt,isHTMLForm:st,hasOwnProperty:re,hasOwnProp:re,reduceDescriptors:Se,freezeMethods:at,toObjectSet:ct,toCamelCase:ot,noop:ut,toFiniteNumber:lt,findKey:we,global:be,isContextDefined:Oe,toJSONObject:ft};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Re=m.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ge[e]={value:e}});Object.defineProperties(m,ge);Object.defineProperty(Re,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Re);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var dt=typeof self=="object"?self.FormData:window.FormData;const ht=dt;function V(e){return a.isPlainObject(e)||a.isArray(e)}function Ae(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ae(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function pt(e){return a.isArray(e)&&!e.some(V)}const mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Et(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ht||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,S){return!a.isUndefined(S[p])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&Et(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function f(l,p,S){let b=l;if(l&&!S&&typeof l=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&pt(l)||a.isFileList(l)||a.endsWith(p,"[]")&&(b=a.toArray(l)))return p=Ae(p),b.forEach(function(F,Ue){!(a.isUndefined(F)||F===null)&&t.append(i===!0?se([p],Ue,o):i===null?p:p+"[]",c(F))}),!1}return V(l)?!0:(t.append(se(S,p,o),c(l)),!1)}const h=[],y=Object.assign(mt,{defaultVisitor:f,convertValue:c,isVisitable:V});function E(l,p){if(!a.isUndefined(l)){if(h.indexOf(l)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(l),a.forEach(l,function(b,P){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(P)?P.trim():P,p,y))===!0&&E(b,p?p.concat(P):[P])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Y(e,t){this._pairs=[],e&&v(e,this,t)}const Te=Y.prototype;Te.append=function(t,n){this._pairs.push([t,n])};Te.toString=function(t){const n=t?function(r){return t.call(this,r,oe)}:oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function yt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||yt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ie=wt,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bt=typeof URLSearchParams<"u"?URLSearchParams:Y,Ot=FormData,St=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Rt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:bt,FormData:Ot,Blob},isStandardBrowserEnv:St,isStandardBrowserWebWorkerEnv:Rt,protocols:["http","https","file","blob","url","data"]};function gt(e,t){return v(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function At(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Tt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function xe(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Tt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(At(r),s,n,0)}),n}return null}const Pt={"Content-Type":void 0};function Nt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const q={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return v(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Nt(t)):t}],transformResponse:[function(t){const n=this.transitional||q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){q.headers[t]={}});a.forEach(["post","put","patch"],function(t){q.headers[t]=a.merge(Pt)});const Z=q,xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ct=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ae=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function _t(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Lt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ce(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function kt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Dt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const f=_(d);if(!f)throw new Error("header name must be a non-empty string");const h=a.findKey(s,f);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||d]=U(u))}const i=(u,d)=>a.forEach(u,(c,f)=>o(c,f,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Lt(t)?i(Ct(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return _t(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&(!n||ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_(i),i){const u=a.findKey(r,i);u&&(!n||ce(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const u=t?kt(o):String(o).trim();u!==o&&delete n[o],n[u]=U(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ae]=this[ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=_(i);r[u]||(Dt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(J.prototype);a.freezeMethods(J);const R=J;function W(e,t){const n=this||Z,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ce(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});const Ft=null;function Bt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ut=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function _e(e,t){return e&&!jt(t)?Mt(e,t):t}const Ht=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function It(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function vt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),f=r[o];i||(i=c),n[s]=d,r[s]=c;let h=o,y=0;for(;h!==s;)y+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const E=f&&c-f;return E?Math.round(y*1e3/E):void 0}}function ue(e,t){let n=0;const r=vt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const qt=typeof XMLHttpRequest<"u",Jt=qt&&function(e){return new Promise(function(n,r){let s=e.data;const o=R.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const E=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(E+":"+l))}const f=_e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Pe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const E=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:E,config:e,request:c};Bt(function(b){n(b),d()},function(b){r(b),d()},p),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ne;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new m(l,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const E=(e.withCredentials||Ht(f))&&e.xsrfCookieName&&Ut.read(e.xsrfCookieName);E&&o.set(e.xsrfHeaderName,E)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(l,p){c.setRequestHeader(p,l)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=E=>{c&&(r(!E||E.type?new D(null,e,c):E),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const y=It(f);if(y&&O.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},j={http:Ft,xhr:Jt};a.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?j[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function le(e){return z(e),e.headers=R.from(e.headers),e.data=W.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Wt.getAdapter(e.adapter||Z.adapter)(e).then(function(r){return z(e),r.data=W.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Ce(r)||(z(e),r&&r.response&&(r.response.data=W.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const fe=e=>e instanceof R?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(c,f,h){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:h},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,h){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,f,h)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function u(c,f,h){if(h in t)return r(c,f);if(h in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,f)=>s(fe(c),fe(f),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const h=d[f]||s,y=h(e[f],t[f],f);a.isUndefined(y)&&h!==u||(n[f]=y)}),n}const Le="1.2.1",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const de={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Le+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!de[i]&&(de[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function zt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const K={assertOptions:zt,validators:ee},A=K.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new ie,response:new ie}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&K.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),s!==void 0&&K.assertOptions(s,{encode:A.function,serialize:A.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=R.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let f,h=0,y;if(!d){const l=[le.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,c),y=l.length,f=Promise.resolve(n);h<y;)f=f.then(l[h++],l[h++]);return f}y=u.length;let E=n;for(h=0;h<y;){const l=u[h++],p=u[h++];try{E=l(E)}catch(S){p.call(this,S);break}}try{f=le.call(this,E)}catch(l){return Promise.reject(l)}for(h=0,y=c.length;h<y;)f=f.then(c[h++],c[h++]);return f}getUri(t){t=N(this.defaults,t);const n=_e(t.baseURL,t.url);return Pe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(N(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const M=H;class te{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new D(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new te(function(s){t=s}),cancel:t}}}const $t=te;function Vt(e){return function(n){return e.apply(null,n)}}function Kt(e){return a.isObject(e)&&e.isAxiosError===!0}function ke(e){const t=new M(e),n=pe(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ke(N(e,s))},n}const w=ke(Z);w.Axios=M;w.CanceledError=D;w.CancelToken=$t;w.isCancel=Ce;w.VERSION=Le;w.toFormData=v;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Vt;w.isAxiosError=Kt;w.mergeConfig=N;w.AxiosHeaders=R;w.formToJSON=e=>xe(a.isHTMLForm(e)?new FormData(e):e);w.default=w;const x=w,ne="https://pokeapi.co/api/v2/",Xt=ne+"pokemon?limit=1160&offset=0",De=ne+"evolution-chain?limit=1500&offset=0/",Gt=ne+"pokemon/";let Fe="",he=[];const Qt=async()=>{const e=await x.get(Xt),{data:t,status:n}=e;if(n===200)return t.results},Yt=async()=>{const e=await x.get(De),{data:t,status:n}=e;return n===200&&t.results.forEach(async({url:r})=>{const s=await x.get(r),{data:o}=s,i=o.chain;await Be(i),he.push(Fe)}),he};async function Be(e){if(e.hasOwnProperty("evolves_to")&&e.evolves_to.length==0)Fe=e.species.name;else if(e.hasOwnProperty("evolves_to")){const t=e.evolves_to[0];await Be(t)}}const Zt=async e=>{let t=[],n={id:"",name:"",weight:100,sprite:""};return e.forEach(async r=>{const s=await x.get(Gt+r.name),{data:o,status:i}=s;i===200&&o.weight<n.weight&&(n={id:o.id,name:o.name,weight:o.weight,sprite:o.sprites.front_default},t.push(n))}),t},en=async()=>{let e=[];const t=await x.get(De),{data:n,status:r}=t,{results:s}=n;return r===200&&(s==null||s.forEach(async o=>{const i=await x.get(o.url);i.data.chain.evolves_to==0&&e.push(i.data.chain.species.name)})),e};window.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector(".pokeList"),t=document.querySelector(".pokemonCounts"),n=document.querySelector(".minPokeWeight"),r=await Yt(),s=await en(),o=await Qt(),i=E=>{const l=E.name;return r.includes(l)},u=o.filter(i),d=await Zt(u);console.log(d),r.forEach(E=>{const l=document.createElement("div");l.classList.add("card"),l.innerHTML=`${E}`,e.appendChild(l)});const c=document.createElement("h3"),f=document.createElement("h3"),h=document.createElement("h3");c.innerHTML=`Total Pokemones:  ${o.length}`,f.innerHTML=`sin evolucion (contando la ultima evolucion): ${r.length}`,h.innerHTML=`Pokemones sin ningun tipo de evolucion: ${s.length}`,t.appendChild(c),t.appendChild(f),t.appendChild(h);const y=document.createElement("div");n.appendChild(y)});document.createElement("p");
