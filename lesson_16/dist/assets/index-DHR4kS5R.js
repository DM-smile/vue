(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ya(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},Tr=[],Kt=()=>{},wm=()=>!1,to=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ja=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Xa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Am=Object.prototype.hasOwnProperty,ge=(t,e)=>Am.call(t,e),te=Array.isArray,wr=t=>Us(t)==="[object Map]",Hr=t=>Us(t)==="[object Set]",cc=t=>Us(t)==="[object Date]",ie=t=>typeof t=="function",Fe=t=>typeof t=="string",Jt=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",qf=t=>(Ae(t)||ie(t))&&ie(t.then)&&ie(t.catch),Kf=Object.prototype.toString,Us=t=>Kf.call(t),Sm=t=>Us(t).slice(8,-1),zf=t=>Us(t)==="[object Object]",Qa=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,is=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pm=/-(\w)/g,St=no(t=>t.replace(Pm,(e,n)=>n?n.toUpperCase():"")),Rm=/\B([A-Z])/g,fr=no(t=>t.replace(Rm,"-$1").toLowerCase()),ro=no(t=>t.charAt(0).toUpperCase()+t.slice(1)),ko=no(t=>t?`on${ro(t)}`:""),kn=(t,e)=>!Object.is(t,e),mi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uc;const so=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Za(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Nm(r):Za(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Ae(t))return t}const Cm=/;(?![^(]*\))/g,Om=/:([^]+)/,km=/\/\*[^]*?\*\//g;function Nm(t){const e={};return t.replace(km,"").split(Cm).forEach(n=>{if(n){const r=n.split(Om);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ys(t){let e="";if(Fe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=ys(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dm=Ya(Lm);function Jf(t){return!!t||t===""}function Mm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=$s(t[r],e[r]);return n}function $s(t,e){if(t===e)return!0;let n=cc(t),r=cc(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Jt(t),r=Jt(e),n||r)return t===e;if(n=te(t),r=te(e),n||r)return n&&r?Mm(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$s(t[o],e[o]))return!1}}return String(t)===String(e)}function el(t,e){return t.findIndex(n=>$s(n,e))}const Xf=t=>!!(t&&t.__v_isRef===!0),oe=t=>Fe(t)?t:t==null?"":te(t)||Ae(t)&&(t.toString===Kf||!ie(t.toString))?Xf(t)?oe(t.value):JSON.stringify(t,Qf,2):String(t),Qf=(t,e)=>Xf(e)?Qf(t,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[No(r,i)+" =>"]=s,n),{})}:Hr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>No(n))}:Jt(e)?No(e):Ae(e)&&!te(e)&&!zf(e)?String(e):e,No=(t,e="")=>{var n;return Jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Zf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fm(t){return new Zf(t)}function Vm(){return _t}let Ie;const Lo=new WeakSet;class ed{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fc(this),rd(this);const e=Ie,n=Dt;Ie=this,Dt=!0;try{return this.fn()}finally{sd(this),Ie=e,Dt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rl(e);this.deps=this.depsTail=void 0,fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ra(this)&&this.run()}get dirty(){return ra(this)}}let td=0,os,as;function nd(t,e=!1){if(t.flags|=8,e){t.next=as,as=t;return}t.next=os,os=t}function tl(){td++}function nl(){if(--td>0)return;if(as){let e=as;for(as=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;os;){let e=os;for(os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),rl(r),xm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ra(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(id(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function id(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===vs))return;t.globalVersion=vs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ra(t)){t.flags&=-3;return}const n=Ie,r=Dt;Ie=t,Dt=!0;try{rd(t);const s=t.fn(t._value);(e.version===0||kn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ie=n,Dt=r,sd(t),t.flags&=-3}}function rl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dt=!0;const od=[];function Vn(){od.push(Dt),Dt=!1}function xn(){const t=od.pop();Dt=t===void 0?!0:t}function fc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let vs=0;class Um{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ie||!Dt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new Um(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,ad(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=r)}return n}trigger(e){this.version++,vs++,this.notify(e)}notify(e){tl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nl()}}}function ad(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ad(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sa=new WeakMap,er=Symbol(""),ia=Symbol(""),Es=Symbol("");function Je(t,e,n){if(Dt&&Ie){let r=sa.get(t);r||sa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new sl),s.map=r,s.key=n),s.track()}}function rn(t,e,n,r,s,i){const o=sa.get(t);if(!o){vs++;return}const a=l=>{l&&l.trigger()};if(tl(),e==="clear")o.forEach(a);else{const l=te(t),c=l&&Qa(n);if(l&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===Es||!Jt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get(er)),wr(t)&&a(o.get(ia)));break;case"delete":l||(a(o.get(er)),wr(t)&&a(o.get(ia)));break;case"set":wr(t)&&a(o.get(er));break}}nl()}function pr(t){const e=me(t);return e===t?e:(Je(e,"iterate",Es),At(t)?e:e.map(Xe))}function io(t){return Je(t=me(t),"iterate",Es),t}const $m={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,Xe)},concat(...t){return pr(this).concat(...t.map(e=>te(e)?pr(e):e))},entries(){return Do(this,"entries",t=>(t[1]=Xe(t[1]),t))},every(t,e){return Qt(this,"every",t,e,void 0,arguments)},filter(t,e){return Qt(this,"filter",t,e,n=>n.map(Xe),arguments)},find(t,e){return Qt(this,"find",t,e,Xe,arguments)},findIndex(t,e){return Qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qt(this,"findLast",t,e,Xe,arguments)},findLastIndex(t,e){return Qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mo(this,"includes",t)},indexOf(...t){return Mo(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return Mo(this,"lastIndexOf",t)},map(t,e){return Qt(this,"map",t,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...t){return Jr(this,"push",t)},reduce(t,...e){return dc(this,"reduce",t,e)},reduceRight(t,...e){return dc(this,"reduceRight",t,e)},shift(){return Jr(this,"shift")},some(t,e){return Qt(this,"some",t,e,void 0,arguments)},splice(...t){return Jr(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return Jr(this,"unshift",t)},values(){return Do(this,"values",Xe)}};function Do(t,e,n){const r=io(t),s=r[e]();return r!==t&&!At(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const jm=Array.prototype;function Qt(t,e,n,r,s,i){const o=io(t),a=o!==t&&!At(t),l=o[e];if(l!==jm[e]){const f=l.apply(t,i);return a?Xe(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Xe(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function dc(t,e,n,r){const s=io(t);let i=n;return s!==t&&(At(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Xe(a),l,t)}),s[e](i,...r)}function Mo(t,e,n){const r=me(t);Je(r,"iterate",Es);const s=r[e](...n);return(s===-1||s===!1)&&al(n[0])?(n[0]=me(n[0]),r[e](...n)):s}function Jr(t,e,n=[]){Vn(),tl();const r=me(t)[e].apply(t,n);return nl(),xn(),r}const Wm=Ya("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jt));function Hm(t){Jt(t)||(t=String(t));const e=me(this);return Je(e,"has",t),e.hasOwnProperty(t)}class cd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zm:hd:i?dd:fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=te(e);if(!s){let l;if(o&&(l=$m[n]))return l;if(n==="hasOwnProperty")return Hm}const a=Reflect.get(e,n,ze(e)?e:r);return(Jt(n)?ld.has(n):Wm(n))||(s||Je(e,"get",n),i)?a:ze(a)?o&&Qa(n)?a:a.value:Ae(a)?s?md(a):js(a):a}}class ud extends cd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=nr(i);if(!At(r)&&!nr(r)&&(i=me(i),r=me(r)),!te(e)&&ze(i)&&!ze(r))return l?!1:(i.value=r,!0)}const o=te(e)&&Qa(n)?Number(n)<e.length:ge(e,n),a=Reflect.set(e,n,r,ze(e)?e:s);return e===me(s)&&(o?kn(r,i)&&rn(e,"set",n,r):rn(e,"add",n,r)),a}deleteProperty(e,n){const r=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jt(n)||!ld.has(n))&&Je(e,"has",n),r}ownKeys(e){return Je(e,"iterate",te(e)?"length":er),Reflect.ownKeys(e)}}class Bm extends cd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gm=new ud,qm=new Bm,Km=new ud(!0);const oa=t=>t,oi=t=>Reflect.getPrototypeOf(t);function zm(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=wr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?oa:e?aa:Xe;return!e&&Je(i,"iterate",l?ia:er),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ai(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ym(t,e){const n={get(s){const i=this.__v_raw,o=me(i),a=me(s);t||(kn(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=oi(o),c=e?oa:t?aa:Xe;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Je(me(s),"iterate",er),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=me(i),a=me(s);return t||(kn(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=me(a),c=e?oa:t?aa:Xe;return!t&&Je(l,"iterate",er),a.forEach((u,f)=>s.call(i,c(u),c(f),o))}};return Qe(n,t?{add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear")}:{add(s){!e&&!At(s)&&!nr(s)&&(s=me(s));const i=me(this);return oi(i).has.call(i,s)||(i.add(s),rn(i,"add",s,s)),this},set(s,i){!e&&!At(i)&&!nr(i)&&(i=me(i));const o=me(this),{has:a,get:l}=oi(o);let c=a.call(o,s);c||(s=me(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?kn(i,u)&&rn(o,"set",s,i):rn(o,"add",s,i),this},delete(s){const i=me(this),{has:o,get:a}=oi(i);let l=o.call(i,s);l||(s=me(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&rn(i,"delete",s,void 0),c},clear(){const s=me(this),i=s.size!==0,o=s.clear();return i&&rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zm(s,t,e)}),n}function il(t,e){const n=Ym(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const Jm={get:il(!1,!1)},Xm={get:il(!1,!0)},Qm={get:il(!0,!1)};const fd=new WeakMap,dd=new WeakMap,hd=new WeakMap,Zm=new WeakMap;function eg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tg(t){return t.__v_skip||!Object.isExtensible(t)?0:eg(Sm(t))}function js(t){return nr(t)?t:ol(t,!1,Gm,Jm,fd)}function pd(t){return ol(t,!1,Km,Xm,dd)}function md(t){return ol(t,!0,qm,Qm,hd)}function ol(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tg(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ar(t){return nr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function At(t){return!!(t&&t.__v_isShallow)}function al(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function ng(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&Yf(t,"__v_skip",!0),t}const Xe=t=>Ae(t)?js(t):t,aa=t=>Ae(t)?md(t):t;function ze(t){return t?t.__v_isRef===!0:!1}function Qn(t){return gd(t,!1)}function ll(t){return gd(t,!0)}function gd(t,e){return ze(t)?t:new rg(t,e)}class rg{constructor(e,n){this.dep=new sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||At(e)||nr(e);e=r?e:me(e),kn(e,n)&&(this._rawValue=e,this._value=r?e:Xe(e),this.dep.trigger())}}function Sr(t){return ze(t)?t.value:t}const sg={get:(t,e,n)=>e==="__v_raw"?t:Sr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _d(t){return Ar(t)?t:new Proxy(t,sg)}class ig{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return nd(this,!0),!0}get value(){const e=this.dep.track();return id(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function og(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new ig(r,s,n)}const li={},Ai=new WeakMap;let Jn;function ag(t,e=!1,n=Jn){if(n){let r=Ai.get(n);r||Ai.set(n,r=[]),r.push(t)}}function lg(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=P=>s?P:At(P)||s===!1||s===0?sn(P,1):sn(P);let u,f,d,y,R=!1,O=!1;if(ze(t)?(f=()=>t.value,R=At(t)):Ar(t)?(f=()=>c(t),R=!0):te(t)?(O=!0,R=t.some(P=>Ar(P)||At(P)),f=()=>t.map(P=>{if(ze(P))return P.value;if(Ar(P))return c(P);if(ie(P))return l?l(P,2):P()})):ie(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Vn();try{d()}finally{xn()}}const P=Jn;Jn=u;try{return l?l(t,3,[y]):t(y)}finally{Jn=P}}:f=Kt,e&&s){const P=f,x=s===!0?1/0:s;f=()=>sn(P(),x)}const L=Vm(),V=()=>{u.stop(),L&&L.active&&Xa(L.effects,u)};if(i&&e){const P=e;e=(...x)=>{P(...x),V()}}let W=O?new Array(t.length).fill(li):li;const S=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const x=u.run();if(s||R||(O?x.some((D,_)=>kn(D,W[_])):kn(x,W))){d&&d();const D=Jn;Jn=u;try{const _=[x,W===li?void 0:O&&W[0]===li?[]:W,y];l?l(e,3,_):e(..._),W=x}finally{Jn=D}}}else u.run()};return a&&a(S),u=new ed(f),u.scheduler=o?()=>o(S,!1):S,y=P=>ag(P,!1,u),d=u.onStop=()=>{const P=Ai.get(u);if(P){if(l)l(P,4);else for(const x of P)x();Ai.delete(u)}},e?r?S(!0):W=u.run():o?o(S.bind(null,!0),!0):u.run(),V.pause=u.pause.bind(u),V.resume=u.resume.bind(u),V.stop=V,V}function sn(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ze(t))sn(t.value,e,n);else if(te(t))for(let r=0;r<t.length;r++)sn(t[r],e,n);else if(Hr(t)||wr(t))t.forEach(r=>{sn(r,e,n)});else if(zf(t)){for(const r in t)sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ws(t,e,n,r){try{return r?t(...r):t()}catch(s){oo(s,e,n)}}function Xt(t,e,n,r){if(ie(t)){const s=Ws(t,e,n,r);return s&&qf(s)&&s.catch(i=>{oo(i,e,n)}),s}if(te(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function oo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||be;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(i){Vn(),Ws(i,null,10,[t,l,c]),xn();return}}cg(t,n,s,r,o)}function cg(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const st=[];let Wt=-1;const Pr=[];let wn=null,_r=0;const yd=Promise.resolve();let Si=null;function cl(t){const e=Si||yd;return t?e.then(this?t.bind(this):t):e}function ug(t){let e=Wt+1,n=st.length;for(;e<n;){const r=e+n>>>1,s=st[r],i=bs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ul(t){if(!(t.flags&1)){const e=bs(t),n=st[st.length-1];!n||!(t.flags&2)&&e>=bs(n)?st.push(t):st.splice(ug(e),0,t),t.flags|=1,vd()}}function vd(){Si||(Si=yd.then(bd))}function fg(t){te(t)?Pr.push(...t):wn&&t.id===-1?wn.splice(_r+1,0,t):t.flags&1||(Pr.push(t),t.flags|=1),vd()}function hc(t,e,n=Wt+1){for(;n<st.length;n++){const r=st[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ed(t){if(Pr.length){const e=[...new Set(Pr)].sort((n,r)=>bs(n)-bs(r));if(Pr.length=0,wn){wn.push(...e);return}for(wn=e,_r=0;_r<wn.length;_r++){const n=wn[_r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wn=null,_r=0}}const bs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bd(t){try{for(Wt=0;Wt<st.length;Wt++){const e=st[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<st.length;Wt++){const e=st[Wt];e&&(e.flags&=-2)}Wt=-1,st.length=0,Ed(),Si=null,(st.length||Pr.length)&&bd()}}let dt=null,Id=null;function Pi(t){const e=dt;return dt=t,Id=t&&t.type.__scopeId||null,e}function la(t,e=dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Tc(-1);const i=Pi(e);let o;try{o=t(...s)}finally{Pi(i),r._d&&Tc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function on(t,e){if(dt===null)return t;const n=co(dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=be]=e[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function qn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Vn(),Xt(l,n,8,[t.el,a,t,e]),xn())}}const dg=Symbol("_vte"),hg=t=>t.__isTeleport;function fl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Hs(t,e){return ie(t)?Qe({name:t.name},e,{setup:t}):t}function Td(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ri(t,e,n,r,s=!1){if(te(t)){t.forEach((R,O)=>Ri(R,e&&(te(e)?e[O]:e),n,r,s));return}if(ls(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ri(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?co(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,f=a.setupState,d=me(f),y=f===be?()=>!1:R=>ge(d,R);if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,y(c)&&(f[c]=null)):ze(c)&&(c.value=null)),ie(l))Ws(l,a,12,[o,u]);else{const R=Fe(l),O=ze(l);if(R||O){const L=()=>{if(t.f){const V=R?y(l)?f[l]:u[l]:l.value;s?te(V)&&Xa(V,i):te(V)?V.includes(i)||V.push(i):R?(u[l]=[i],y(l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else R?(u[l]=o,y(l)&&(f[l]=o)):O&&(l.value=o,t.k&&(u[t.k]=o))};o?(L.id=-1,gt(L,n)):L()}}}so().requestIdleCallback;so().cancelIdleCallback;const ls=t=>!!t.type.__asyncLoader,wd=t=>t.type.__isKeepAlive;function pg(t,e){Ad(t,"a",e)}function mg(t,e){Ad(t,"da",e)}function Ad(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ao(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wd(s.parent.vnode)&&gg(r,e,n,s),s=s.parent}}function gg(t,e,n,r){const s=ao(e,t,r,!0);dl(()=>{Xa(r[e],s)},n)}function ao(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const a=Gs(n),l=Xt(e,n,t,o);return a(),xn(),l});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=Ke)=>{(!ws||t==="sp")&&ao(t,(...r)=>e(...r),n)},Sd=yn("bm"),Pd=yn("m"),_g=yn("bu"),yg=yn("u"),vg=yn("bum"),dl=yn("um"),Eg=yn("sp"),bg=yn("rtg"),Ig=yn("rtc");function Tg(t,e=Ke){ao("ec",t,e)}const wg="components";function Ci(t,e){return Sg(wg,t,!0,e)||t}const Ag=Symbol.for("v-ndc");function Sg(t,e,n=!0,r=!1){const s=dt||Ke;if(s){const i=s.type;{const a=d_(i,!1);if(a&&(a===e||a===St(e)||a===ro(St(e))))return i}const o=pc(s[t]||i[t],e)||pc(s.appContext[t],e);return!o&&r?i:o}}function pc(t,e){return t&&(t[e]||t[St(e)]||t[ro(St(e))])}function ca(t,e,n,r){let s;const i=n,o=te(t);if(o||Fe(t)){const a=o&&Ar(t);let l=!1;a&&(l=!At(t),t=io(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Xe(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}const ua=t=>t?Yd(t)?co(t):ua(t.parent):null,cs=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ua(t.parent),$root:t=>ua(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cd(t),$forceUpdate:t=>t.f||(t.f=()=>{ul(t.update)}),$nextTick:t=>t.n||(t.n=cl.bind(t.proxy)),$watch:t=>Kg.bind(t)}),Fo=(t,e)=>t!==be&&!t.__isScriptSetup&&ge(t,e),Pg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fo(r,e))return o[e]=1,r[e];if(s!==be&&ge(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==be&&ge(n,e))return o[e]=4,n[e];fa&&(o[e]=0)}}const u=cs[e];let f,d;if(u)return e==="$attrs"&&Je(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==be&&ge(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fo(s,e)?(s[e]=n,!0):r!==be&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&ge(t,o)||Fo(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(cs,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fa=!0;function Rg(t){const e=Cd(t),n=t.proxy,r=t.ctx;fa=!1,e.beforeCreate&&gc(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:y,updated:R,activated:O,deactivated:L,beforeDestroy:V,beforeUnmount:W,destroyed:S,unmounted:P,render:x,renderTracked:D,renderTriggered:_,errorCaptured:h,serverPrefetch:m,expose:T,inheritAttrs:A,components:w,directives:b,filters:Ve}=e;if(c&&Cg(c,r,null),o)for(const ue in o){const le=o[ue];ie(le)&&(r[ue]=le.bind(n))}if(s){const ue=s.call(n,n);Ae(ue)&&(t.data=js(ue))}if(fa=!0,i)for(const ue in i){const le=i[ue],et=ie(le)?le.bind(n,n):ie(le.get)?le.get.bind(n,n):Kt,lt=!ie(le)&&ie(le.set)?le.set.bind(n):Kt,Oe=Le({get:et,set:lt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:ke=>Oe.value=ke})}if(a)for(const ue in a)Rd(a[ue],r,n,ue);if(l){const ue=ie(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(le=>{gi(le,ue[le])})}u&&gc(u,t,"c");function ye(ue,le){te(le)?le.forEach(et=>ue(et.bind(n))):le&&ue(le.bind(n))}if(ye(Sd,f),ye(Pd,d),ye(_g,y),ye(yg,R),ye(pg,O),ye(mg,L),ye(Tg,h),ye(Ig,D),ye(bg,_),ye(vg,W),ye(dl,P),ye(Eg,m),te(T))if(T.length){const ue=t.exposed||(t.exposed={});T.forEach(le=>{Object.defineProperty(ue,le,{get:()=>n[le],set:et=>n[le]=et})})}else t.exposed||(t.exposed={});x&&t.render===Kt&&(t.render=x),A!=null&&(t.inheritAttrs=A),w&&(t.components=w),b&&(t.directives=b),m&&Td(t)}function Cg(t,e,n=Kt){te(t)&&(t=da(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function gc(t,e,n){Xt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rd(t,e,n,r){let s=r.includes(".")?Hd(n,r):()=>n[r];if(Fe(t)){const i=e[t];ie(i)&&un(s,i)}else if(ie(t))un(s,t.bind(n));else if(Ae(t))if(te(t))t.forEach(i=>Rd(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&un(s,i,t)}}function Cd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Oi(l,c,o,!0)),Oi(l,e,o)),Ae(e)&&i.set(e,l),l}function Oi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oi(t,i,n,!0),s&&s.forEach(o=>Oi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Og[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Og={data:_c,props:yc,emits:yc,methods:ts,computed:ts,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ts,directives:ts,watch:Ng,provide:_c,inject:kg};function _c(t,e){return e?t?function(){return Qe(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function kg(t,e){return ts(da(t),da(e))}function da(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?Qe(Object.create(null),t,e):e}function yc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Qe(Object.create(null),mc(t),mc(e??{})):e}function Ng(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=nt(t[r],e[r]);return n}function Od(){return{app:null,config:{isNativeTag:wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lg=0;function Dg(t,e){return function(r,s=null){ie(r)||(r=Qe({},r)),s!=null&&!Ae(s)&&(s=null);const i=Od(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Lg++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:p_,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...f)):ie(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,d){if(!l){const y=c._ceVNode||je(r,s);return y.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),t(y,u,d),l=!0,c._container=u,u.__vue_app__=c,co(y.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Xt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;function gi(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=Ke||dt;if(r||Rr){const s=Rr?Rr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const kd={},Nd=()=>Object.create(kd),Ld=t=>Object.getPrototypeOf(t)===kd;function Mg(t,e,n,r=!1){const s={},i=Nd();t.propsDefaults=Object.create(null),Dd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Fg(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(lo(t.emitsOptions,d))continue;const y=e[d];if(l)if(ge(i,d))y!==i[d]&&(i[d]=y,c=!0);else{const R=St(d);s[R]=ha(l,a,R,y,t,!1)}else y!==i[d]&&(i[d]=y,c=!0)}}}else{Dd(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!ge(e,f)&&((u=fr(f))===f||!ge(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ha(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ge(e,f))&&(delete i[f],c=!0)}c&&rn(t.attrs,"set","")}function Dd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(is(l))continue;const c=e[l];let u;s&&ge(s,u=St(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:lo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=me(n),c=a||be;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ha(s,l,f,c[f],t,!ge(c,f))}}return o}function ha(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Gs(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fr(n))&&(r=!0))}return r}const Vg=new WeakMap;function Md(t,e,n=!1){const r=n?Vg:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=f=>{l=!0;const[d,y]=Md(f,e,!0);Qe(o,d),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ae(t)&&r.set(t,Tr),Tr;if(te(i))for(let u=0;u<i.length;u++){const f=St(i[u]);vc(f)&&(o[f]=be)}else if(i)for(const u in i){const f=St(u);if(vc(f)){const d=i[u],y=o[f]=te(d)||ie(d)?{type:d}:Qe({},d),R=y.type;let O=!1,L=!0;if(te(R))for(let V=0;V<R.length;++V){const W=R[V],S=ie(W)&&W.name;if(S==="Boolean"){O=!0;break}else S==="String"&&(L=!1)}else O=ie(R)&&R.name==="Boolean";y[0]=O,y[1]=L,(O||ge(y,"default"))&&a.push(f)}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function vc(t){return t[0]!=="$"&&!is(t)}const Fd=t=>t[0]==="_"||t==="$stable",hl=t=>te(t)?t.map(Bt):[Bt(t)],xg=(t,e,n)=>{if(e._n)return e;const r=la((...s)=>hl(e(...s)),n);return r._c=!1,r},Vd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fd(s))continue;const i=t[s];if(ie(i))e[s]=xg(s,i,r);else if(i!=null){const o=hl(i);e[s]=()=>o}}},xd=(t,e)=>{const n=hl(e);t.slots.default=()=>n},Ud=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ug=(t,e,n)=>{const r=t.slots=Nd();if(t.vnode.shapeFlag&32){const s=e._;s?(Ud(r,e,n),n&&Yf(r,"_",s,!0)):Vd(e,r)}else e&&xd(t,e)},$g=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ud(s,e,n):(i=!e.$stable,Vd(e,s)),o=e}else e&&(xd(t,e),o={default:1});if(i)for(const a in s)!Fd(a)&&o[a]==null&&delete s[a]},gt=e_;function jg(t){return Wg(t)}function Wg(t,e){const n=so();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:y=Kt,insertStaticContent:R}=t,O=(E,I,v,N=null,j=null,$=null,G=void 0,B=null,p=!!I.dynamicChildren)=>{if(E===I)return;E&&!Xr(E,I)&&(N=U(E),ke(E,j,$,!0),E=null),I.patchFlag===-2&&(p=!1,I.dynamicChildren=null);const{type:g,ref:k,shapeFlag:M}=I;switch(g){case Bs:L(E,I,v,N);break;case rr:V(E,I,v,N);break;case xo:E==null&&W(I,v,N,G);break;case it:w(E,I,v,N,j,$,G,B,p);break;default:M&1?x(E,I,v,N,j,$,G,B,p):M&6?b(E,I,v,N,j,$,G,B,p):(M&64||M&128)&&g.process(E,I,v,N,j,$,G,B,p,X)}k!=null&&j&&Ri(k,E&&E.ref,$,I||E,!I)},L=(E,I,v,N)=>{if(E==null)r(I.el=a(I.children),v,N);else{const j=I.el=E.el;I.children!==E.children&&c(j,I.children)}},V=(E,I,v,N)=>{E==null?r(I.el=l(I.children||""),v,N):I.el=E.el},W=(E,I,v,N)=>{[E.el,E.anchor]=R(E.children,I,v,N,E.el,E.anchor)},S=({el:E,anchor:I},v,N)=>{let j;for(;E&&E!==I;)j=d(E),r(E,v,N),E=j;r(I,v,N)},P=({el:E,anchor:I})=>{let v;for(;E&&E!==I;)v=d(E),s(E),E=v;s(I)},x=(E,I,v,N,j,$,G,B,p)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),E==null?D(I,v,N,j,$,G,B,p):m(E,I,j,$,G,B,p)},D=(E,I,v,N,j,$,G,B)=>{let p,g;const{props:k,shapeFlag:M,transition:K,dirs:H}=E;if(p=E.el=o(E.type,$,k&&k.is,k),M&8?u(p,E.children):M&16&&h(E.children,p,null,N,j,Vo(E,$),G,B),H&&qn(E,null,N,"created"),_(p,E,E.scopeId,G,N),k){for(const F in k)F!=="value"&&!is(F)&&i(p,F,null,k[F],$,N);"value"in k&&i(p,"value",null,k.value,$),(g=k.onVnodeBeforeMount)&&jt(g,N,E)}H&&qn(E,null,N,"beforeMount");const C=Hg(j,K);C&&K.beforeEnter(p),r(p,I,v),((g=k&&k.onVnodeMounted)||C||H)&&gt(()=>{g&&jt(g,N,E),C&&K.enter(p),H&&qn(E,null,N,"mounted")},j)},_=(E,I,v,N,j)=>{if(v&&y(E,v),N)for(let $=0;$<N.length;$++)y(E,N[$]);if(j){let $=j.subTree;if(I===$||Gd($.type)&&($.ssContent===I||$.ssFallback===I)){const G=j.vnode;_(E,G,G.scopeId,G.slotScopeIds,j.parent)}}},h=(E,I,v,N,j,$,G,B,p=0)=>{for(let g=p;g<E.length;g++){const k=E[g]=B?An(E[g]):Bt(E[g]);O(null,k,I,v,N,j,$,G,B)}},m=(E,I,v,N,j,$,G)=>{const B=I.el=E.el;let{patchFlag:p,dynamicChildren:g,dirs:k}=I;p|=E.patchFlag&16;const M=E.props||be,K=I.props||be;let H;if(v&&Kn(v,!1),(H=K.onVnodeBeforeUpdate)&&jt(H,v,I,E),k&&qn(I,E,v,"beforeUpdate"),v&&Kn(v,!0),(M.innerHTML&&K.innerHTML==null||M.textContent&&K.textContent==null)&&u(B,""),g?T(E.dynamicChildren,g,B,v,N,Vo(I,j),$):G||le(E,I,B,null,v,N,Vo(I,j),$,!1),p>0){if(p&16)A(B,M,K,v,j);else if(p&2&&M.class!==K.class&&i(B,"class",null,K.class,j),p&4&&i(B,"style",M.style,K.style,j),p&8){const C=I.dynamicProps;for(let F=0;F<C.length;F++){const Z=C[F],ce=M[Z],Pe=K[Z];(Pe!==ce||Z==="value")&&i(B,Z,ce,Pe,j,v)}}p&1&&E.children!==I.children&&u(B,I.children)}else!G&&g==null&&A(B,M,K,v,j);((H=K.onVnodeUpdated)||k)&&gt(()=>{H&&jt(H,v,I,E),k&&qn(I,E,v,"updated")},N)},T=(E,I,v,N,j,$,G)=>{for(let B=0;B<I.length;B++){const p=E[B],g=I[B],k=p.el&&(p.type===it||!Xr(p,g)||p.shapeFlag&70)?f(p.el):v;O(p,g,k,null,N,j,$,G,!0)}},A=(E,I,v,N,j)=>{if(I!==v){if(I!==be)for(const $ in I)!is($)&&!($ in v)&&i(E,$,I[$],null,j,N);for(const $ in v){if(is($))continue;const G=v[$],B=I[$];G!==B&&$!=="value"&&i(E,$,B,G,j,N)}"value"in v&&i(E,"value",I.value,v.value,j)}},w=(E,I,v,N,j,$,G,B,p)=>{const g=I.el=E?E.el:a(""),k=I.anchor=E?E.anchor:a("");let{patchFlag:M,dynamicChildren:K,slotScopeIds:H}=I;H&&(B=B?B.concat(H):H),E==null?(r(g,v,N),r(k,v,N),h(I.children||[],v,k,j,$,G,B,p)):M>0&&M&64&&K&&E.dynamicChildren?(T(E.dynamicChildren,K,v,j,$,G,B),(I.key!=null||j&&I===j.subTree)&&$d(E,I,!0)):le(E,I,v,k,j,$,G,B,p)},b=(E,I,v,N,j,$,G,B,p)=>{I.slotScopeIds=B,E==null?I.shapeFlag&512?j.ctx.activate(I,v,N,G,p):Ve(I,v,N,j,$,G,p):Ze(E,I,p)},Ve=(E,I,v,N,j,$,G)=>{const B=E.component=a_(E,N,j);if(wd(E)&&(B.ctx.renderer=X),l_(B,!1,G),B.asyncDep){if(j&&j.registerDep(B,ye,G),!E.el){const p=B.subTree=je(rr);V(null,p,I,v)}}else ye(B,E,I,v,j,$,G)},Ze=(E,I,v)=>{const N=I.component=E.component;if(Qg(E,I,v))if(N.asyncDep&&!N.asyncResolved){ue(N,I,v);return}else N.next=I,N.update();else I.el=E.el,N.vnode=I},ye=(E,I,v,N,j,$,G)=>{const B=()=>{if(E.isMounted){let{next:M,bu:K,u:H,parent:C,vnode:F}=E;{const Be=jd(E);if(Be){M&&(M.el=F.el,ue(E,M,G)),Be.asyncDep.then(()=>{E.isUnmounted||B()});return}}let Z=M,ce;Kn(E,!1),M?(M.el=F.el,ue(E,M,G)):M=F,K&&mi(K),(ce=M.props&&M.props.onVnodeBeforeUpdate)&&jt(ce,C,M,F),Kn(E,!0);const Pe=bc(E),tt=E.subTree;E.subTree=Pe,O(tt,Pe,f(tt.el),U(tt),E,j,$),M.el=Pe.el,Z===null&&Zg(E,Pe.el),H&&gt(H,j),(ce=M.props&&M.props.onVnodeUpdated)&&gt(()=>jt(ce,C,M,F),j)}else{let M;const{el:K,props:H}=I,{bm:C,m:F,parent:Z,root:ce,type:Pe}=E,tt=ls(I);Kn(E,!1),C&&mi(C),!tt&&(M=H&&H.onVnodeBeforeMount)&&jt(M,Z,I),Kn(E,!0);{ce.ce&&ce.ce._injectChildStyle(Pe);const Be=E.subTree=bc(E);O(null,Be,v,N,E,j,$),I.el=Be.el}if(F&&gt(F,j),!tt&&(M=H&&H.onVnodeMounted)){const Be=I;gt(()=>jt(M,Z,Be),j)}(I.shapeFlag&256||Z&&ls(Z.vnode)&&Z.vnode.shapeFlag&256)&&E.a&&gt(E.a,j),E.isMounted=!0,I=v=N=null}};E.scope.on();const p=E.effect=new ed(B);E.scope.off();const g=E.update=p.run.bind(p),k=E.job=p.runIfDirty.bind(p);k.i=E,k.id=E.uid,p.scheduler=()=>ul(k),Kn(E,!0),g()},ue=(E,I,v)=>{I.component=E;const N=E.vnode.props;E.vnode=I,E.next=null,Fg(E,I.props,N,v),$g(E,I.children,v),Vn(),hc(E),xn()},le=(E,I,v,N,j,$,G,B,p=!1)=>{const g=E&&E.children,k=E?E.shapeFlag:0,M=I.children,{patchFlag:K,shapeFlag:H}=I;if(K>0){if(K&128){lt(g,M,v,N,j,$,G,B,p);return}else if(K&256){et(g,M,v,N,j,$,G,B,p);return}}H&8?(k&16&&$e(g,j,$),M!==g&&u(v,M)):k&16?H&16?lt(g,M,v,N,j,$,G,B,p):$e(g,j,$,!0):(k&8&&u(v,""),H&16&&h(M,v,N,j,$,G,B,p))},et=(E,I,v,N,j,$,G,B,p)=>{E=E||Tr,I=I||Tr;const g=E.length,k=I.length,M=Math.min(g,k);let K;for(K=0;K<M;K++){const H=I[K]=p?An(I[K]):Bt(I[K]);O(E[K],H,v,null,j,$,G,B,p)}g>k?$e(E,j,$,!0,!1,M):h(I,v,N,j,$,G,B,p,M)},lt=(E,I,v,N,j,$,G,B,p)=>{let g=0;const k=I.length;let M=E.length-1,K=k-1;for(;g<=M&&g<=K;){const H=E[g],C=I[g]=p?An(I[g]):Bt(I[g]);if(Xr(H,C))O(H,C,v,null,j,$,G,B,p);else break;g++}for(;g<=M&&g<=K;){const H=E[M],C=I[K]=p?An(I[K]):Bt(I[K]);if(Xr(H,C))O(H,C,v,null,j,$,G,B,p);else break;M--,K--}if(g>M){if(g<=K){const H=K+1,C=H<k?I[H].el:N;for(;g<=K;)O(null,I[g]=p?An(I[g]):Bt(I[g]),v,C,j,$,G,B,p),g++}}else if(g>K)for(;g<=M;)ke(E[g],j,$,!0),g++;else{const H=g,C=g,F=new Map;for(g=C;g<=K;g++){const mt=I[g]=p?An(I[g]):Bt(I[g]);mt.key!=null&&F.set(mt.key,g)}let Z,ce=0;const Pe=K-C+1;let tt=!1,Be=0;const Gn=new Array(Pe);for(g=0;g<Pe;g++)Gn[g]=0;for(g=H;g<=M;g++){const mt=E[g];if(ce>=Pe){ke(mt,j,$,!0);continue}let $t;if(mt.key!=null)$t=F.get(mt.key);else for(Z=C;Z<=K;Z++)if(Gn[Z-C]===0&&Xr(mt,I[Z])){$t=Z;break}$t===void 0?ke(mt,j,$,!0):(Gn[$t-C]=g+1,$t>=Be?Be=$t:tt=!0,O(mt,I[$t],v,null,j,$,G,B,p),ce++)}const Oo=tt?Bg(Gn):Tr;for(Z=Oo.length-1,g=Pe-1;g>=0;g--){const mt=C+g,$t=I[mt],lc=mt+1<k?I[mt+1].el:N;Gn[g]===0?O(null,$t,v,lc,j,$,G,B,p):tt&&(Z<0||g!==Oo[Z]?Oe($t,v,lc,2):Z--)}}},Oe=(E,I,v,N,j=null)=>{const{el:$,type:G,transition:B,children:p,shapeFlag:g}=E;if(g&6){Oe(E.component.subTree,I,v,N);return}if(g&128){E.suspense.move(I,v,N);return}if(g&64){G.move(E,I,v,X);return}if(G===it){r($,I,v);for(let M=0;M<p.length;M++)Oe(p[M],I,v,N);r(E.anchor,I,v);return}if(G===xo){S(E,I,v);return}if(N!==2&&g&1&&B)if(N===0)B.beforeEnter($),r($,I,v),gt(()=>B.enter($),j);else{const{leave:M,delayLeave:K,afterLeave:H}=B,C=()=>r($,I,v),F=()=>{M($,()=>{C(),H&&H()})};K?K($,C,F):F()}else r($,I,v)},ke=(E,I,v,N=!1,j=!1)=>{const{type:$,props:G,ref:B,children:p,dynamicChildren:g,shapeFlag:k,patchFlag:M,dirs:K,cacheIndex:H}=E;if(M===-2&&(j=!1),B!=null&&Ri(B,null,v,E,!0),H!=null&&(I.renderCache[H]=void 0),k&256){I.ctx.deactivate(E);return}const C=k&1&&K,F=!ls(E);let Z;if(F&&(Z=G&&G.onVnodeBeforeUnmount)&&jt(Z,I,E),k&6)Ut(E.component,v,N);else{if(k&128){E.suspense.unmount(v,N);return}C&&qn(E,null,I,"beforeUnmount"),k&64?E.type.remove(E,I,v,X,N):g&&!g.hasOnce&&($!==it||M>0&&M&64)?$e(g,I,v,!1,!0):($===it&&M&384||!j&&k&16)&&$e(p,I,v),N&&Tt(E)}(F&&(Z=G&&G.onVnodeUnmounted)||C)&&gt(()=>{Z&&jt(Z,I,E),C&&qn(E,null,I,"unmounted")},v)},Tt=E=>{const{type:I,el:v,anchor:N,transition:j}=E;if(I===it){pt(v,N);return}if(I===xo){P(E);return}const $=()=>{s(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:G,delayLeave:B}=j,p=()=>G(v,$);B?B(E.el,$,p):p()}else $()},pt=(E,I)=>{let v;for(;E!==I;)v=d(E),s(E),E=v;s(I)},Ut=(E,I,v)=>{const{bum:N,scope:j,job:$,subTree:G,um:B,m:p,a:g}=E;Ec(p),Ec(g),N&&mi(N),j.stop(),$&&($.flags|=8,ke(G,E,I,v)),B&&gt(B,I),gt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},$e=(E,I,v,N=!1,j=!1,$=0)=>{for(let G=$;G<E.length;G++)ke(E[G],I,v,N,j)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=d(E.anchor||E.el),v=I&&I[dg];return v?d(v):I};let J=!1;const q=(E,I,v)=>{E==null?I._vnode&&ke(I._vnode,null,null,!0):O(I._vnode||null,E,I,null,null,null,v),I._vnode=E,J||(J=!0,hc(),Ed(),J=!1)},X={p:O,um:ke,m:Oe,r:Tt,mt:Ve,mc:h,pc:le,pbc:T,n:U,o:t};return{render:q,hydrate:void 0,createApp:Dg(q)}}function Vo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $d(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=An(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&$d(o,a)),a.type===Bs&&(a.el=o.el)}}function Bg(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jd(e)}function Ec(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Gg=Symbol.for("v-scx"),qg=()=>zt(Gg);function un(t,e,n){return Wd(t,e,n)}function Wd(t,e,n=be){const{immediate:r,deep:s,flush:i,once:o}=n,a=Qe({},n),l=e&&r||!e&&i!=="post";let c;if(ws){if(i==="sync"){const y=qg();c=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=Kt,y.resume=Kt,y.pause=Kt,y}}const u=Ke;a.call=(y,R,O)=>Xt(y,u,R,O);let f=!1;i==="post"?a.scheduler=y=>{gt(y,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(y,R)=>{R?y():ul(y)}),a.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const d=lg(t,e,a);return ws&&(c?c.push(d):l&&d()),d}function Kg(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Hd(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Gs(this),a=Wd(s,i.bind(r),n);return o(),a}function Hd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${fr(e)}Modifiers`];function Yg(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&zg(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Fe(u)?u.trim():u)),o.number&&(s=n.map(wi)));let a,l=r[a=ko(e)]||r[a=ko(St(e))];!l&&i&&(l=r[a=ko(fr(e))]),l&&Xt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(c,t,6,s)}}function Bd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=Bd(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(te(i)?i.forEach(l=>o[l]=null):Qe(o,i),Ae(t)&&r.set(t,o),o)}function lo(t,e){return!t||!to(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,fr(e))||ge(t,e))}function bc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:y,ctx:R,inheritAttrs:O}=t,L=Pi(t);let V,W;try{if(n.shapeFlag&4){const P=s||r,x=P;V=Bt(c.call(x,P,u,f,y,d,R)),W=a}else{const P=e;V=Bt(P.length>1?P(f,{attrs:a,slots:o,emit:l}):P(f,null)),W=e.props?a:Jg(a)}}catch(P){us.length=0,oo(P,t,1),V=je(rr)}let S=V;if(W&&O!==!1){const P=Object.keys(W),{shapeFlag:x}=S;P.length&&x&7&&(i&&P.some(Ja)&&(W=Xg(W,i)),S=Nr(S,W,!1,!0))}return n.dirs&&(S=Nr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&fl(S,n.transition),V=S,Pi(L),V}const Jg=t=>{let e;for(const n in t)(n==="class"||n==="style"||to(n))&&((e||(e={}))[n]=t[n]);return e},Xg=(t,e)=>{const n={};for(const r in t)(!Ja(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Qg(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ic(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!lo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ic(r,o,c):!0:!!o;return!1}function Ic(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!lo(n,i))return!0}return!1}function Zg({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gd=t=>t.__isSuspense;function e_(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):fg(t)}const it=Symbol.for("v-fgt"),Bs=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),us=[];let Et=null;function ve(t=!1){us.push(Et=t?null:[])}function t_(){us.pop(),Et=us[us.length-1]||null}let Is=1;function Tc(t,e=!1){Is+=t,t<0&&Et&&e&&(Et.hasOnce=!0)}function qd(t){return t.dynamicChildren=Is>0?Et||Tr:null,t_(),Is>0&&Et&&Et.push(t),t}function we(t,e,n,r,s,i){return qd(z(t,e,n,r,s,i,!0))}function Kd(t,e,n,r,s){return qd(je(t,e,n,r,s,!0))}function ki(t){return t?t.__v_isVNode===!0:!1}function Xr(t,e){return t.type===e.type&&t.key===e.key}const zd=({key:t})=>t??null,_i=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||ze(t)||ie(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zd(e),ref:e&&_i(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return a?(pl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Is>0&&!o&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const je=n_;function n_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ag)&&(t=rr),ki(t)){const a=Nr(t,e,!0);return n&&pl(a,n),Is>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag=-2,a}if(h_(t)&&(t=t.__vccOpts),e){e=r_(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=ys(a)),Ae(l)&&(al(l)&&!te(l)&&(l=Qe({},l)),e.style=Za(l))}const o=Fe(t)?1:Gd(t)?128:hg(t)?64:Ae(t)?4:ie(t)?2:0;return z(t,e,n,r,s,o,i,!0)}function r_(t){return t?al(t)||Ld(t)?Qe({},t):t:null}function Nr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?s_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zd(c),ref:e&&e.ref?n&&i?te(i)?i.concat(_i(e)):[i,_i(e)]:_i(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nr(t.ssContent),ssFallback:t.ssFallback&&Nr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&fl(u,l.clone(u)),u}function pa(t=" ",e=0){return je(Bs,null,t,e)}function Nn(t="",e=!1){return e?(ve(),Kd(rr,null,t)):je(rr,null,t)}function Bt(t){return t==null||typeof t=="boolean"?je(rr):te(t)?je(it,null,t.slice()):ki(t)?An(t):je(Bs,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nr(t)}function pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ld(e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[pa(e)]):n=8);t.children=e,t.shapeFlag|=n}function s_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ys([e.class,r.class]));else if(s==="style")e.style=Za([e.style,r.style]);else if(to(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){Xt(t,e,7,[n,r])}const i_=Od();let o_=0;function a_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||i_,i={uid:o_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(r,s),emitsOptions:Bd(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yg.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const Ts=()=>Ke||dt;let Ni,ma;{const t=so(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ni=e("__VUE_INSTANCE_SETTERS__",n=>Ke=n),ma=e("__VUE_SSR_SETTERS__",n=>ws=n)}const Gs=t=>{const e=Ke;return Ni(t),t.scope.on(),()=>{t.scope.off(),Ni(e)}},wc=()=>{Ke&&Ke.scope.off(),Ni(null)};function Yd(t){return t.vnode.shapeFlag&4}let ws=!1;function l_(t,e=!1,n=!1){e&&ma(e);const{props:r,children:s}=t.vnode,i=Yd(t);Mg(t,r,i,e),Ug(t,s,n);const o=i?c_(t,e):void 0;return e&&ma(!1),o}function c_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pg);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?f_(t):null,i=Gs(t),o=Ws(r,t,0,[t.props,s]),a=qf(o);if(xn(),i(),(a||t.sp)&&!ls(t)&&Td(t),a){if(o.then(wc,wc),e)return o.then(l=>{Ac(t,l)}).catch(l=>{oo(l,t,0)});t.asyncDep=o}else Ac(t,o)}else Jd(t)}function Ac(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=_d(e)),Jd(t)}function Jd(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const s=Gs(t);Vn();try{Rg(t)}finally{xn(),s()}}}const u_={get(t,e){return Je(t,"get",""),t[e]}};function f_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,u_),slots:t.slots,emit:t.emit,expose:e}}function co(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_d(ng(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cs)return cs[n](t)},has(e,n){return n in e||n in cs}})):t.proxy}function d_(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function h_(t){return ie(t)&&"__vccOpts"in t}const Le=(t,e)=>og(t,e,ws);function uo(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!te(e)?ki(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ki(n)&&(n=[n]),je(t,e,n))}const p_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ga;const Sc=typeof window<"u"&&window.trustedTypes;if(Sc)try{ga=Sc.createPolicy("vue",{createHTML:t=>t})}catch{}const Xd=ga?t=>ga.createHTML(t):t=>t,m_="http://www.w3.org/2000/svg",g_="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,Pc=nn&&nn.createElement("template"),__={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nn.createElementNS(m_,t):e==="mathml"?nn.createElementNS(g_,t):n?nn.createElement(t,{is:n}):nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pc.innerHTML=Xd(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Pc.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},y_=Symbol("_vtc");function v_(t,e,n){const r=t[y_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rc=Symbol("_vod"),E_=Symbol("_vsh"),b_=Symbol(""),I_=/(^|;)\s*display\s*:/;function T_(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yi(r,a,"")}else for(const o in e)n[o]==null&&yi(r,o,"");for(const o in n)o==="display"&&(i=!0),yi(r,o,n[o])}else if(s){if(e!==n){const o=r[b_];o&&(n+=";"+o),r.cssText=n,i=I_.test(n)}}else e&&t.removeAttribute("style");Rc in t&&(t[Rc]=i?r.display:"",t[E_]&&(r.display="none"))}const Cc=/\s*!important$/;function yi(t,e,n){if(te(n))n.forEach(r=>yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=w_(t,e);Cc.test(n)?t.setProperty(fr(r),n.replace(Cc,""),"important"):t[r]=n}}const Oc=["Webkit","Moz","ms"],Uo={};function w_(t,e){const n=Uo[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Uo[e]=r;r=ro(r);for(let s=0;s<Oc.length;s++){const i=Oc[s]+r;if(i in t)return Uo[e]=i}return e}const kc="http://www.w3.org/1999/xlink";function Nc(t,e,n,r,s,i=Dm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(kc,e.slice(6,e.length)):t.setAttributeNS(kc,e,n):n==null||i&&!Jf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jt(n)?String(n):n)}function Lc(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xd(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Jf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pn(t,e,n,r){t.addEventListener(e,n,r)}function A_(t,e,n,r){t.removeEventListener(e,n,r)}const Dc=Symbol("_vei");function S_(t,e,n,r,s=null){const i=t[Dc]||(t[Dc]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=P_(e);if(r){const c=i[e]=O_(r,s);Pn(t,a,c,l)}else o&&(A_(t,a,o,l),i[e]=void 0)}}const Mc=/(?:Once|Passive|Capture)$/;function P_(t){let e;if(Mc.test(t)){e={};let r;for(;r=t.match(Mc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let $o=0;const R_=Promise.resolve(),C_=()=>$o||(R_.then(()=>$o=0),$o=Date.now());function O_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(k_(r,n.value),e,5,[r])};return n.value=t,n.attached=C_(),n}function k_(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Fc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,N_=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?v_(t,r,o):e==="style"?T_(t,n,r):to(e)?Ja(e)||S_(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):L_(t,e,r,o))?(Lc(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nc(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?Lc(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nc(t,e,r,o))};function L_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fc(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fc(e)&&Fe(n)?!1:e in t}const Lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>mi(e,n):e};function D_(t){t.target.composing=!0}function Vc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),br={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fn]=Lr(s);const i=r||s.props&&s.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wi(a)),t[fn](a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",D_),Pn(t,"compositionend",Vc),Pn(t,"change",Vc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fn]=Lr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?wi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},xc={deep:!0,created(t,e,n){t[fn]=Lr(n),Pn(t,"change",()=>{const r=t._modelValue,s=As(t),i=t.checked,o=t[fn];if(te(r)){const a=el(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Hr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Qd(t,i))})},mounted:Uc,beforeUpdate(t,e,n){t[fn]=Lr(n),Uc(t,e,n)}};function Uc(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(te(e))s=el(e,r.props.value)>-1;else if(Hr(e))s=e.has(r.props.value);else{if(e===n)return;s=$s(e,Qd(t,!0))}t.checked!==s&&(t.checked=s)}const M_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Hr(e);Pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wi(As(o)):As(o));t[fn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,cl(()=>{t._assigning=!1})}),t[fn]=Lr(r)},mounted(t,{value:e}){$c(t,e)},beforeUpdate(t,e,n){t[fn]=Lr(n)},updated(t,{value:e}){t._assigning||$c(t,e)}};function $c(t,e){const n=t.multiple,r=te(e);if(!(n&&!r&&!Hr(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=As(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=el(e,a)>-1}else o.selected=e.has(a);else if($s(As(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function As(t){return"_value"in t?t._value:t.value}function Qd(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const F_=Qe({patchProp:N_},__);let jc;function V_(){return jc||(jc=jg(F_))}const x_=(...t)=>{const e=V_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$_(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,U_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function U_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $_(t){return Fe(t)?document.querySelector(t):t}function j_(){return Zd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Zd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const W_=typeof Proxy=="function",H_="devtools-plugin:setup",B_="plugin:settings:set";let mr,_a;function G_(){var t;return mr!==void 0||(typeof window<"u"&&window.performance?(mr=!0,_a=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(mr=!0,_a=globalThis.perf_hooks.performance):mr=!1),mr}function q_(){return G_()?_a.now():Date.now()}class K_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return q_()}},n&&n.on(B_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function z_(t,e){const n=t,r=Zd(),s=j_(),i=W_&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(H_,t,e);else{const o=i?new K_(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Y_="store";function Br(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function eh(t){return t!==null&&typeof t=="object"}function J_(t){return t&&typeof t.then=="function"}function X_(t,e){return function(){return t(e)}}function th(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function nh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;fo(t,n,[],t._modules.root,!0),ml(t,n,e)}function ml(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Br(s,function(o,a){i[a]=X_(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=js({data:e}),t.strict&&ny(t),r&&n&&t._withCommit(function(){r.data=null})}function fo(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=gl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=Q_(t,o,n);r.forEachMutation(function(u,f){var d=o+f;Z_(t,d,u,c)}),r.forEachAction(function(u,f){var d=u.root?f:o+f,y=u.handler||u;ey(t,d,y,c)}),r.forEachGetter(function(u,f){var d=o+f;ty(t,d,u,c)}),r.forEachChild(function(u,f){fo(t,e,n.concat(f),u,s)})}function Q_(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var l=Li(i,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),t.dispatch(f,c)},commit:r?t.commit:function(i,o,a){var l=Li(i,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),t.commit(f,c,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return rh(t,e)}},state:{get:function(){return gl(t.state,n)}}}),s}function rh(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Z_(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function ey(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return J_(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function ty(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function ny(t){un(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function gl(t,e){return e.reduce(function(n,r){return n[r]},t)}function Li(t,e,n){return eh(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ry="vuex bindings",Wc="vuex:mutations",jo="vuex:actions",gr="vuex",sy=0;function iy(t,e){z_({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ry]},function(n){n.addTimelineLayer({id:Wc,label:"Vuex Mutations",color:Hc}),n.addTimelineLayer({id:jo,label:"Vuex Actions",color:Hc}),n.addInspector({id:gr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===gr)if(r.filter){var s=[];ah(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[oh(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===gr){var s=r.nodeId;rh(e,s),r.state=ly(uy(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===gr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(gr),n.sendInspectorState(gr),n.addTimelineEvent({layerId:Wc,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=sy++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:jo,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:jo,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Hc=8702998,oy=6710886,ay=16777215,sh={label:"namespaced",textColor:ay,backgroundColor:oy};function ih(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function oh(t,e){return{id:e||"root",label:ih(e),tags:t.namespaced?[sh]:[],children:Object.keys(t._children).map(function(n){return oh(t._children[n],e+n+"/")})}}function ah(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[sh]:[]}),Object.keys(e._children).forEach(function(s){ah(t,e._children[s],n,r+s+"/")})}function ly(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=cy(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?ih(o):o,editable:!1,value:ya(function(){return i[o]})}})}return s}function cy(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=ya(function(){return t[n]})}else e[n]=ya(function(){return t[n]})}),e}function uy(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ya(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},lh={namespaced:{configurable:!0}};lh.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){Br(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&Br(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&Br(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Br(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,lh);var dr=function(e){this.register([],e,!1)};dr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};dr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};dr.prototype.update=function(e){ch([],this.root,e)};dr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Vt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Br(n.modules,function(a,l){s.register(e.concat(l),a,r)})};dr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};dr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ch(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ch(t.concat(r),e.getChild(r),n.modules[r])}}function fy(t){return new ht(t)}var ht=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new dr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,y){return l.call(o,d,y)},this.commit=function(d,y,R){return c.call(o,d,y,R)},this.strict=s;var u=this._modules.root.state;fo(this,u,[],this._modules.root),ml(this,u),r.forEach(function(f){return f(n)})},_l={state:{configurable:!0}};ht.prototype.install=function(e,n){e.provide(n||Y_,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&iy(e,this)};_l.state.get=function(){return this._state.data};_l.state.set=function(t){};ht.prototype.commit=function(e,n,r){var s=this,i=Li(e,n,r),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};ht.prototype.dispatch=function(e,n){var r=this,s=Li(e,n),i=s.type,o=s.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(d){try{r._actionSubscribers.filter(function(y){return y.after}).forEach(function(y){return y.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(y){return y.error}).forEach(function(y){return y.error(a,r.state,d)})}catch{}f(d)})})}};ht.prototype.subscribe=function(e,n){return th(e,this._subscribers,n)};ht.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return th(r,this._actionSubscribers,n)};ht.prototype.watch=function(e,n,r){var s=this;return un(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ht.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ht.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),fo(this,this.state,e,this._modules.get(e),r.preserveState),ml(this,this.state)};ht.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=gl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),nh(this)};ht.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ht.prototype.hotUpdate=function(e){this._modules.update(e),nh(this,!0)};ht.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ht.prototype,_l);var Ot=fh(function(t,e){var n={};return uh(e).forEach(function(r){var s=r.key,i=r.val;i=t+i,n[s]=function(){if(!(t&&!dh(this.$store,"mapGetters",t)))return this.$store.getters[i]},n[s].vuex=!0}),n}),pn=fh(function(t,e){var n={};return uh(e).forEach(function(r){var s=r.key,i=r.val;n[s]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=dh(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof i=="function"?i.apply(this,[c].concat(a)):c.apply(this.$store,[i].concat(a))}}),n});function uh(t){return dy(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function dy(t){return Array.isArray(t)||eh(t)}function fh(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function dh(t,e,n){var r=t._modulesNamespaceMap[n];return r}const hr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hy={name:"App",computed:{...Ot(["getCounter"]),...Ot("auth",["getUser"]),currentLang(){return this.$i18n.locale},langTitle(){return this.$t("titles.langTitle")}},methods:{...pn(["setCounter"]),...pn("auth",["loginWithGoogle","logout","setUser","loginWithCredential"]),changeLang(){const t=this.$i18n.locale==="ua"?"en":"ua";this.$i18n.locale=t,localStorage.setItem("lastLanguage",t)},onUserPhotoError(t){t.target.style.display="none"},clearCart(){this.setCounter("clear")},onLogin(){this.$router.push({name:"login"})},onLogout(){this.logout()}},created(){this.$i18n.locale=localStorage.getItem("lastLanguage")||"en",localStorage.getItem("lastLanguage")!==this.$i18n.locale&&localStorage.setItem("lastLanguage",this.$i18n.locale);const t=this;window.addEventListener("storage",function(){t.$i18n.locale!==localStorage.getItem("lastLanguage")&&(t.$i18n.locale=localStorage.getItem("lastLanguage"),t.$router.go()),event.key==="authCredentialGoogle"&&t.$store.dispatch("auth/loginWithCredential").then(e=>{e||t.$store.commit("auth/setUser",null)})})}},py={class:"header mgb-20"},my={class:"header__title"},gy={class:"cart__image"},_y={key:0,class:"cart__counter"},yy={class:"header__action-menu"},vy=["title"],Ey={key:0,class:"user-data"},by=["src"],Iy={class:"user-data__name"},Ty={class:"container"};function wy(t,e,n,r,s,i){const o=Ci("router-link"),a=Ci("router-view");return ve(),we(it,null,[z("header",py,[je(o,{to:{name:"home"}},{default:la(()=>[pa(oe(t.$t("titles.homeLink")),1)]),_:1}),je(o,{to:{name:"contacts"}},{default:la(()=>[pa(oe(t.$t("titles.contacts")),1)]),_:1}),z("div",my,oe(t.$t("titles.header")),1),t.getUser?(ve(),we("div",{key:0,class:"cart",onClick:e[0]||(e[0]=(...l)=>i.clearCart&&i.clearCart(...l))},[z("div",gy,[e[5]||(e[5]=z("img",{class:"ibg",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi79VACDIu2TDK3t0mVFG8YsYFFE30EwYuHw&s"},null,-1)),t.getCounter>0?(ve(),we("div",_y,oe(t.getCounter),1)):Nn("",!0)])])):Nn("",!0),z("div",yy,[z("button",{onClick:e[1]||(e[1]=(...l)=>i.changeLang&&i.changeLang(...l)),class:"lang-btn",title:i.langTitle},oe(t.$t("buttons.lang")),9,vy),t.getUser?(ve(),we("div",Ey,[z("img",{class:"user-data__photo",src:t.getUser.photoURL,alt:"user photo",onError:e[2]||(e[2]=(...l)=>i.onUserPhotoError&&i.onUserPhotoError(...l))},null,40,by),z("div",null,[z("span",Iy,oe(t.getUser.displayName),1),z("button",{onClick:e[3]||(e[3]=(...l)=>i.onLogout&&i.onLogout(...l))},oe(t.$t("buttons.logout")),1)])])):(ve(),we("button",{key:1,onClick:e[4]||(e[4]=(...l)=>i.onLogin&&i.onLogin(...l)),class:"btn-auth"},oe(t.$t("buttons.login")),1))])]),z("div",Ty,[je(a)])],64)}const Ay=hr(hy,[["render",wy]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const yr=typeof document<"u";function hh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hh(t.default)}const pe=Object.assign;function Wo(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ft(s)?s.map(t):t(s)}return n}const fs=()=>{},Ft=Array.isArray,ph=/#/g,Py=/&/g,Ry=/\//g,Cy=/=/g,Oy=/\?/g,mh=/\+/g,ky=/%5B/g,Ny=/%5D/g,gh=/%5E/g,Ly=/%60/g,_h=/%7B/g,Dy=/%7C/g,yh=/%7D/g,My=/%20/g;function yl(t){return encodeURI(""+t).replace(Dy,"|").replace(ky,"[").replace(Ny,"]")}function Fy(t){return yl(t).replace(_h,"{").replace(yh,"}").replace(gh,"^")}function va(t){return yl(t).replace(mh,"%2B").replace(My,"+").replace(ph,"%23").replace(Py,"%26").replace(Ly,"`").replace(_h,"{").replace(yh,"}").replace(gh,"^")}function Vy(t){return va(t).replace(Cy,"%3D")}function xy(t){return yl(t).replace(ph,"%23").replace(Oy,"%3F")}function Uy(t){return t==null?"":xy(t).replace(Ry,"%2F")}function Ss(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $y=/\/$/,jy=t=>t.replace($y,"");function Ho(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Gy(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ss(o)}}function Wy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hy(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Dr(e.matched[r],n.matched[s])&&vh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!By(t[n],e[n]))return!1;return!0}function By(t,e){return Ft(t)?Gc(t,e):Ft(e)?Gc(e,t):t===e}function Gc(t,e){return Ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ps;(function(t){t.pop="pop",t.push="push"})(Ps||(Ps={}));var ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ds||(ds={}));function qy(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jy(t)}const Ky=/^[^#]+#/;function zy(t,e){return t.replace(Ky,"#")+e}function Yy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ho=()=>({left:window.scrollX,top:window.scrollY});function Jy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qc(t,e){return(history.state?history.state.position-e:-1)+t}const Ea=new Map;function Xy(t,e){Ea.set(t,e)}function Qy(t){const e=Ea.get(t);return Ea.delete(t),e}let Zy=()=>location.protocol+"//"+location.host;function Eh(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Bc(l,"")}return Bc(n,t)+r+s}function ev(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const y=Eh(t,location),R=n.value,O=e.value;let L=0;if(d){if(n.value=y,e.value=d,o&&o===R){o=null;return}L=O?d.position-O.position:0}else r(y);s.forEach(V=>{V(n.value,R,{delta:L,type:Ps.pop,direction:L?L>0?ds.forward:ds.back:ds.unknown})})};function l(){o=n.value}function c(d){s.push(d);const y=()=>{const R=s.indexOf(d);R>-1&&s.splice(R,1)};return i.push(y),y}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:ho()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Kc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ho():null}}function tv(t){const{history:e,location:n}=window,r={value:Eh(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Zy()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(y){console.error(y),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,Kc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=pe({},s.value,e.state,{forward:l,scroll:ho()});i(u.current,u,!0);const f=pe({},Kc(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function nv(t){t=qy(t);const e=tv(t),n=ev(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:zy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rv(t){return typeof t=="string"||t&&typeof t=="object"}function bh(t){return typeof t=="string"||typeof t=="symbol"}const Ih=Symbol("");var zc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zc||(zc={}));function Mr(t,e){return pe(new Error,{type:t,[Ih]:!0},e)}function Zt(t,e){return t instanceof Error&&Ih in t&&(e==null||!!(t.type&e))}const Yc="[^/]+?",sv={sensitive:!1,strict:!1,start:!0,end:!0},iv=/[.+*?^${}()[\]/\\]/g;function ov(t,e){const n=pe({},sv,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let y=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(iv,"\\$&"),y+=40;else if(d.type===1){const{value:R,repeatable:O,optional:L,regexp:V}=d;i.push({name:R,repeatable:O,optional:L});const W=V||Yc;if(W!==Yc){y+=10;try{new RegExp(`(${W})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${R}" (${W}): `+P.message)}}let S=O?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;f||(S=L&&c.length<2?`(?:/${S})`:"/"+S),L&&(S+="?"),s+=S,y+=20,L&&(y+=-8),O&&(y+=-20),W===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const y=u[d]||"",R=i[d-1];f[R.name]=y&&R.repeatable?y.split("/"):y}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const y of d)if(y.type===0)u+=y.value;else if(y.type===1){const{value:R,repeatable:O,optional:L}=y,V=R in c?c[R]:"";if(Ft(V)&&!O)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const W=Ft(V)?V.join("/"):V;if(!W)if(L)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);u+=W}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function av(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Th(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=av(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jc(r))return 1;if(Jc(s))return-1}return s.length-r.length}function Jc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lv={type:0,value:""},cv=/[a-zA-Z0-9_]/;function uv(t){if(!t)return[[]];if(t==="/")return[[lv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:cv.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function fv(t,e,n){const r=ov(uv(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dv(t,e){const n=[],r=new Map;e=eu({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,d,y){const R=!y,O=Qc(f);O.aliasOf=y&&y.record;const L=eu(e,f),V=[O];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of P)V.push(Qc(pe({},O,{components:y?y.record.components:O.components,path:x,aliasOf:y?y.record:O})))}let W,S;for(const P of V){const{path:x}=P;if(d&&x[0]!=="/"){const D=d.record.path,_=D[D.length-1]==="/"?"":"/";P.path=d.record.path+(x&&_+x)}if(W=fv(P,d,L),y?y.alias.push(W):(S=S||W,S!==W&&S.alias.push(W),R&&f.name&&!Zc(W)&&o(f.name)),wh(W)&&l(W),O.children){const D=O.children;for(let _=0;_<D.length;_++)i(D[_],W,y&&y.children[_])}y=y||W}return S?()=>{o(S)}:fs}function o(f){if(bh(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=mv(f,n);n.splice(d,0,f),f.record.name&&!Zc(f)&&r.set(f.record.name,f)}function c(f,d){let y,R={},O,L;if("name"in f&&f.name){if(y=r.get(f.name),!y)throw Mr(1,{location:f});L=y.record.name,R=pe(Xc(d.params,y.keys.filter(S=>!S.optional).concat(y.parent?y.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&Xc(f.params,y.keys.map(S=>S.name))),O=y.stringify(R)}else if(f.path!=null)O=f.path,y=n.find(S=>S.re.test(O)),y&&(R=y.parse(O),L=y.record.name);else{if(y=d.name?r.get(d.name):n.find(S=>S.re.test(d.path)),!y)throw Mr(1,{location:f,currentLocation:d});L=y.record.name,R=pe({},d.params,f.params),O=y.stringify(R)}const V=[];let W=y;for(;W;)V.unshift(W.record),W=W.parent;return{name:L,path:O,params:R,matched:V,meta:pv(V)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Xc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pv(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function eu(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Th(t,e[i])<0?r=i:n=i+1}const s=gv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function gv(t){let e=t;for(;e=e.parent;)if(wh(e)&&Th(t,e)===0)return e}function wh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _v(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mh," "),o=i.indexOf("="),a=Ss(o<0?i:i.slice(0,o)),l=o<0?null:Ss(i.slice(o+1));if(a in e){let c=e[a];Ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function tu(t){let e="";for(let n in t){const r=t[n];if(n=Vy(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(r)?r.map(i=>i&&va(i)):[r&&va(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vv=Symbol(""),nu=Symbol(""),vl=Symbol(""),Ah=Symbol(""),ba=Symbol("");function Qr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Mr(4,{from:n,to:e})):d instanceof Error?l(d):rv(d)?l(Mr(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Bo(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(hh(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Sn(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Sy(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const y=(f.__vccOpts||f)[e];return y&&Sn(y,n,r,o,a,s)()}))}}return i}function ru(t){const e=zt(vl),n=zt(Ah),r=Le(()=>{const l=Sr(t.to);return e.resolve(l)}),s=Le(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Dr.bind(null,u));if(d>-1)return d;const y=su(l[c-2]);return c>1&&su(u)===y&&f[f.length-1].path!==y?f.findIndex(Dr.bind(null,l[c-2])):d}),i=Le(()=>s.value>-1&&wv(n.params,r.value.params)),o=Le(()=>s.value>-1&&s.value===n.matched.length-1&&vh(n.params,r.value.params));function a(l={}){if(Tv(l)){const c=e[Sr(t.replace)?"replace":"push"](Sr(t.to)).catch(fs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Ev(t){return t.length===1?t[0]:t}const bv=Hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ru,setup(t,{slots:e}){const n=js(ru(t)),{options:r}=zt(vl),s=Le(()=>({[iu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[iu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Ev(e.default(n));return t.custom?i:uo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Iv=bv;function Tv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function su(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const iu=(t,e,n)=>t??e??n,Av=Hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(ba),s=Le(()=>t.route||r.value),i=zt(nu,0),o=Le(()=>{let c=Sr(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Le(()=>s.value.matched[o.value]);gi(nu,Le(()=>o.value+1)),gi(vv,a),gi(ba,s);const l=Qn();return un(()=>[l.value,a.value,t.name],([c,u,f],[d,y,R])=>{u&&(u.instances[f]=c,y&&y!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),c&&u&&(!y||!Dr(u,y)||!d)&&(u.enterCallbacks[f]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ou(n.default,{Component:d,route:c});const y=f.props[u],R=y?y===!0?c.params:typeof y=="function"?y(c):y:null,L=uo(d,pe({},R,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ou(n.default,{Component:L,route:c})||L}}});function ou(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sv=Av;function Pv(t){const e=dv(t.routes,t),n=t.parseQuery||_v,r=t.stringifyQuery||tu,s=t.history,i=Qr(),o=Qr(),a=Qr(),l=ll(bn);let c=bn;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wo.bind(null,U=>""+U),f=Wo.bind(null,Uy),d=Wo.bind(null,Ss);function y(U,J){let q,X;return bh(U)?(q=e.getRecordMatcher(U),X=J):X=U,e.addRoute(X,q)}function R(U){const J=e.getRecordMatcher(U);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(U=>U.record)}function L(U){return!!e.getRecordMatcher(U)}function V(U,J){if(J=pe({},J||l.value),typeof U=="string"){const v=Ho(n,U,J.path),N=e.resolve({path:v.path},J),j=s.createHref(v.fullPath);return pe(v,N,{params:d(N.params),hash:Ss(v.hash),redirectedFrom:void 0,href:j})}let q;if(U.path!=null)q=pe({},U,{path:Ho(n,U.path,J.path).path});else{const v=pe({},U.params);for(const N in v)v[N]==null&&delete v[N];q=pe({},U,{params:f(v)}),J.params=f(J.params)}const X=e.resolve(q,J),de=U.hash||"";X.params=u(d(X.params));const E=Wy(r,pe({},U,{hash:Fy(de),path:X.path})),I=s.createHref(E);return pe({fullPath:E,hash:de,query:r===tu?yv(U.query):U.query||{}},X,{redirectedFrom:void 0,href:I})}function W(U){return typeof U=="string"?Ho(n,U,l.value.path):pe({},U)}function S(U,J){if(c!==U)return Mr(8,{from:J,to:U})}function P(U){return _(U)}function x(U){return P(pe(W(U),{replace:!0}))}function D(U){const J=U.matched[U.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let X=typeof q=="function"?q(U):q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=W(X):{path:X},X.params={}),pe({query:U.query,hash:U.hash,params:X.path!=null?{}:U.params},X)}}function _(U,J){const q=c=V(U),X=l.value,de=U.state,E=U.force,I=U.replace===!0,v=D(q);if(v)return _(pe(W(v),{state:typeof v=="object"?pe({},de,v.state):de,force:E,replace:I}),J||q);const N=q;N.redirectedFrom=J;let j;return!E&&Hy(r,X,q)&&(j=Mr(16,{to:N,from:X}),Oe(X,X,!0,!1)),(j?Promise.resolve(j):T(N,X)).catch($=>Zt($)?Zt($,2)?$:lt($):le($,N,X)).then($=>{if($){if(Zt($,2))return _(pe({replace:I},W($.to),{state:typeof $.to=="object"?pe({},de,$.to.state):de,force:E}),J||N)}else $=w(N,X,!0,I,de);return A(N,X,$),$})}function h(U,J){const q=S(U,J);return q?Promise.reject(q):Promise.resolve()}function m(U){const J=pt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(U):U()}function T(U,J){let q;const[X,de,E]=Rv(U,J);q=Bo(X.reverse(),"beforeRouteLeave",U,J);for(const v of X)v.leaveGuards.forEach(N=>{q.push(Sn(N,U,J))});const I=h.bind(null,U,J);return q.push(I),$e(q).then(()=>{q=[];for(const v of i.list())q.push(Sn(v,U,J));return q.push(I),$e(q)}).then(()=>{q=Bo(de,"beforeRouteUpdate",U,J);for(const v of de)v.updateGuards.forEach(N=>{q.push(Sn(N,U,J))});return q.push(I),$e(q)}).then(()=>{q=[];for(const v of E)if(v.beforeEnter)if(Ft(v.beforeEnter))for(const N of v.beforeEnter)q.push(Sn(N,U,J));else q.push(Sn(v.beforeEnter,U,J));return q.push(I),$e(q)}).then(()=>(U.matched.forEach(v=>v.enterCallbacks={}),q=Bo(E,"beforeRouteEnter",U,J,m),q.push(I),$e(q))).then(()=>{q=[];for(const v of o.list())q.push(Sn(v,U,J));return q.push(I),$e(q)}).catch(v=>Zt(v,8)?v:Promise.reject(v))}function A(U,J,q){a.list().forEach(X=>m(()=>X(U,J,q)))}function w(U,J,q,X,de){const E=S(U,J);if(E)return E;const I=J===bn,v=yr?history.state:{};q&&(X||I?s.replace(U.fullPath,pe({scroll:I&&v&&v.scroll},de)):s.push(U.fullPath,de)),l.value=U,Oe(U,J,q,I),lt()}let b;function Ve(){b||(b=s.listen((U,J,q)=>{if(!Ut.listening)return;const X=V(U),de=D(X);if(de){_(pe(de,{replace:!0,force:!0}),X).catch(fs);return}c=X;const E=l.value;yr&&Xy(qc(E.fullPath,q.delta),ho()),T(X,E).catch(I=>Zt(I,12)?I:Zt(I,2)?(_(pe(W(I.to),{force:!0}),X).then(v=>{Zt(v,20)&&!q.delta&&q.type===Ps.pop&&s.go(-1,!1)}).catch(fs),Promise.reject()):(q.delta&&s.go(-q.delta,!1),le(I,X,E))).then(I=>{I=I||w(X,E,!1),I&&(q.delta&&!Zt(I,8)?s.go(-q.delta,!1):q.type===Ps.pop&&Zt(I,20)&&s.go(-1,!1)),A(X,E,I)}).catch(fs)}))}let Ze=Qr(),ye=Qr(),ue;function le(U,J,q){lt(U);const X=ye.list();return X.length?X.forEach(de=>de(U,J,q)):console.error(U),Promise.reject(U)}function et(){return ue&&l.value!==bn?Promise.resolve():new Promise((U,J)=>{Ze.add([U,J])})}function lt(U){return ue||(ue=!U,Ve(),Ze.list().forEach(([J,q])=>U?q(U):J()),Ze.reset()),U}function Oe(U,J,q,X){const{scrollBehavior:de}=t;if(!yr||!de)return Promise.resolve();const E=!q&&Qy(qc(U.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return cl().then(()=>de(U,J,E)).then(I=>I&&Jy(I)).catch(I=>le(I,U,J))}const ke=U=>s.go(U);let Tt;const pt=new Set,Ut={currentRoute:l,listening:!0,addRoute:y,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:O,resolve:V,options:t,push:P,replace:x,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:et,install(U){const J=this;U.component("RouterLink",Iv),U.component("RouterView",Sv),U.config.globalProperties.$router=J,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Sr(l)}),yr&&!Tt&&l.value===bn&&(Tt=!0,P(s.location).catch(de=>{}));const q={};for(const de in bn)Object.defineProperty(q,de,{get:()=>l.value[de],enumerable:!0});U.provide(vl,J),U.provide(Ah,pd(q)),U.provide(ba,l);const X=U.unmount;pt.add(U),U.unmount=function(){pt.delete(U),pt.size<1&&(c=bn,b&&b(),b=null,l.value=bn,Tt=!1,ue=!1),X()}}};function $e(U){return U.reduce((J,q)=>J.then(()=>m(q)),Promise.resolve())}return Ut}function Rv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Dr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Dr(c,l))||s.push(l))}return[n,r,s]}const Cv={name:"CardComponent",props:{card:{type:Object,default:()=>{}}},computed:{...Ot("users",["userPermissions"]),...Ot("auth",["getUser"])},methods:{...pn("productsList",["deleteItem"]),...pn(["setCounter"]),addToCart(){this.getUser?this.setCounter():this.$router.push({name:"login"})},onDelete(t){this.deleteItem(t)},onEdit(t){this.$router.push({name:"edit",params:{id:t}})}}},Ov={class:"card"},kv={class:"card__image"},Nv=["src"],Lv={class:"card__info"},Dv={class:"card__title"},Mv={class:"card__price"},Fv={class:"card__seller"},Vv={class:"action-card-block"};function xv(t,e,n,r,s,i){return ve(),we("div",Ov,[z("div",kv,[z("img",{src:n.card.image,alt:"image",class:"ibg ibg--contain"},null,8,Nv)]),z("div",Lv,[z("div",Dv,oe(n.card.name),1),z("div",Mv,oe(n.card.price)+" "+oe(t.$t("labels.price")),1),z("div",Fv,oe(t.$t("titles.seller"))+": "+oe(n.card.seller),1),z("div",Vv,[t.userPermissions.write?(ve(),we("button",{key:0,onClick:e[0]||(e[0]=o=>i.onEdit(n.card.id))},oe(t.$t("buttons.edit")),1)):Nn("",!0),t.userPermissions.write?(ve(),we("button",{key:1,onClick:e[1]||(e[1]=o=>i.onDelete(n.card.id))},oe(t.$t("buttons.delete")),1)):Nn("",!0),z("button",{onClick:e[2]||(e[2]=(...o)=>i.addToCart&&i.addToCart(...o))},oe(t.$t("buttons.buy")),1)])])])}const Uv=hr(Cv,[["render",xv]]),$v={name:"FilterComponent",computed:{...Ot("productsList",{productsList:"getItemsList"}),sellersList(){const t=this.productsList.map(e=>e.seller);return[...new Map(t.map(e=>[e,e])).values()]},brandsList(){const t=this.productsList.map(e=>e.brand);return[...new Map(t.map(e=>[e,e])).values()]}},data(){return{filter:{sellerFilt:[],brandsFilt:[]}}},methods:{...pn("productsList",["loadFilteredData","loadList"]),applyFilters(){this.filter.sellerFilt.length===0&&(this.filter.sellerFilt=[...this.sellersList]),this.filter.brandsFilt.length===0&&(this.filter.brandsFilt=[...this.brandsList]),this.loadFilteredData({firstFieldTitle:"seller",firstCompareOperator:"in",firstValueToCompare:this.filter.sellerFilt,secondFieldTitle:"brand",secondCompareOperator:"in",secondValueToCompare:this.filter.brandsFilt})},clearFilters(){this.sellerFilt="",this.brandsFilt=[],this.loadList()}}},jv={class:"filter"},Wv={class:"filter__body"},Hv={class:"filter__seller"},Bv=["value"],Gv={class:"filter__brand mgb-10"},qv=["value"],Kv={class:"buttons"};function zv(t,e,n,r,s,i){return ve(),we("div",jv,[z("div",Wv,[z("h2",null,oe(t.$t("titles.filters")),1),z("h4",null,oe(t.$t("titles.seller"))+":",1),z("div",Hv,[(ve(!0),we(it,null,ca(i.sellersList,o=>(ve(),we("label",{key:s.filter.seller},[on(z("input",{type:"checkbox",name:"seller",value:o,"onUpdate:modelValue":e[0]||(e[0]=a=>s.filter.sellerFilt=a)},null,8,Bv),[[xc,s.filter.sellerFilt,void 0,{lazy:!0}]]),z("span",null,oe(o),1)]))),128))]),z("h4",null,oe(t.$t("titles.brand"))+":",1),z("div",Gv,[(ve(!0),we(it,null,ca(i.brandsList,o=>(ve(),we("label",{key:o},[on(z("input",{type:"checkbox",value:o,"onUpdate:modelValue":e[1]||(e[1]=a=>s.filter.brandsFilt=a)},null,8,qv),[[xc,s.filter.brandsFilt,void 0,{lazy:!0}]]),z("span",null,oe(o),1)]))),128))]),z("div",Kv,[z("button",{onClick:e[2]||(e[2]=(...o)=>i.applyFilters&&i.applyFilters(...o))},oe(t.$t("buttons.apply")),1),z("button",{onClick:e[3]||(e[3]=(...o)=>i.clearFilters&&i.clearFilters(...o))},oe(t.$t("buttons.clearFilters")),1)])])])}const Yv=hr($v,[["render",zv],["__scopeId","data-v-2c840099"]]),Jv="/assets/error404-DY_WKV5Q.png",Xv={name:"HomeView",components:{CardComponent:Uv,FilterComponent:Yv},computed:{...Ot("productsList",{productsList:"getItemsList"}),...Ot("productsList",["isLoading","hasError"]),...Ot("auth",["getUser"]),...Ot("users",["userPermissions"]),emptyProductsList(){return this.productsList.length}},methods:{...pn("productsList",{loadProductsList:"loadList"}),...pn("auth",["loginWithCredential"]),onLogout(){this.logout(),this.$router.push({name:"login"})},onEdit(){this.$router.push({name:"edit"})}},created(){this.loadProductsList(),this.loginWithCredential()}},Qv={key:0,class:"loader"},Zv={key:1,class:"error"},eE={key:2,class:"content"},tE={class:"body"},nE={key:0,class:"filter"},rE={class:"products-list"},sE={key:0,class:"empty-product"};function iE(t,e,n,r,s,i){const o=Ci("filter-component"),a=Ci("card-component");return t.isLoading?(ve(),we("div",Qv,e[1]||(e[1]=[z("img",{src:"https://cdn.svgator.com/images/2023/06/spiral-css-preloader.gif",alt:"loading",class:"ibg loader"},null,-1)]))):t.hasError?(ve(),we("div",Zv,e[2]||(e[2]=[z("img",{src:Jv,alt:"Error",class:"ibg"},null,-1)]))):(ve(),we("div",eE,[t.userPermissions.write?(ve(),we("button",{key:0,class:"add-new-product",onClick:e[0]||(e[0]=l=>i.onEdit())},oe(t.$t("buttons.addProduct")),1)):Nn("",!0),z("div",tE,[t.getUser?(ve(),we("div",nE,[je(o)])):Nn("",!0),z("div",rE,[i.emptyProductsList?Nn("",!0):(ve(),we("div",sE,oe(t.$t("titles.epmtyList")),1)),(ve(!0),we(it,null,ca(t.productsList,l=>(ve(),Kd(a,{key:l.id,card:l},null,8,["card"]))),128))])])]))}const oE=hr(Xv,[["render",iE],["__scopeId","data-v-e7e7b423"]]),aE={name:"LoginPage",data(){return{email:"",password:"",error:null}},computed:{...Ot("auth",["getUser"]),allData(){return!!(this.email&&this.password)}},methods:{...pn("auth",["loginWithGoogle","loginWithEmail","registerWithEmail"]),setAdminData(){this.email="super-admin@gmail.com",this.password="admin1234"},onClear(){this.email="",this.password=""},async onLoginEmail(){if(!this.email||!this.password){this.error="Email та пароль обовʼязкові";return}this.error=null;try{await this.loginWithEmail({email:this.email,password:this.password})}catch(t){this.error=t.message}},async onRegister(){if(!this.email||!this.password){this.error="Email та пароль обовʼязкові";return}this.error=null;try{await this.registerWithEmail({email:this.email,password:this.password})}catch(t){this.error=t.message}},async onLoginGoogle(){try{this.loginWithGoogle()}catch(t){alert(t.message)}}},watch:{getUser(t){const e=this.$route.query.redirect;e?this.$router.push(e):this.$router.push({name:"home"})}}},lE={class:"login"},cE={key:0,class:"error-message"},uE={class:"login__action"};function fE(t,e,n,r,s,i){return ve(),we("div",lE,[z("label",null,[e[7]||(e[7]=z("span",null,"E-mail",-1)),on(z("input",{type:"mail","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[br,s.email]])]),z("label",null,[e[8]||(e[8]=z("span",null,"Password",-1)),on(z("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[br,s.password]])]),s.error?(ve(),we("div",cE,oe(s.error),1)):Nn("",!0),z("div",uE,[z("button",{class:ys({green:i.allData}),onClick:e[2]||(e[2]=(...o)=>i.onLoginEmail&&i.onLoginEmail(...o))},"Login",2),z("button",{class:ys({green:i.allData}),onClick:e[3]||(e[3]=(...o)=>i.onRegister&&i.onRegister(...o))},"Register",2),z("button",{onClick:e[4]||(e[4]=(...o)=>i.onLoginGoogle&&i.onLoginGoogle(...o))},"Google"),z("button",{onClick:e[5]||(e[5]=(...o)=>i.setAdminData&&i.setAdminData(...o))},"Admin"),z("button",{onClick:e[6]||(e[6]=(...o)=>i.onClear&&i.onClear(...o))},"Clear")])])}const dE=hr(aE,[["render",fE],["__scopeId","data-v-ce3b46db"]]),hE=()=>{};var au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(d=64)),r.push(n[u],n[f],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new mE;const d=i<<2|a>>4;if(r.push(d),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(t){const e=Sh(t);return Ph.encodeByteArray(e,!0)},Di=function(t){return gE(t).replace(/\./g,"")},Rh=function(t){try{return Ph.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=()=>_E().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof au>"u")return;const t=au.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rh(t[1]);return e&&JSON.parse(e)},El=()=>{try{return hE()||yE()||vE()||EE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ch=t=>{var e,n;return(n=(e=El())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bE=t=>{const e=Ch(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Oh=()=>{var t;return(t=El())===null||t===void 0?void 0:t.config},kh=t=>{var e;return(e=El())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function AE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RE(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function OE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function NE(t,e){return t.replace(LE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LE=/\{\$([^}]+)}/g;function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lu(i)&&lu(o)){if(!sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ME(t,e){const n=new FE(t,e);return n.subscribe.bind(n)}class FE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Go),s.error===void 0&&(s.error=Go),s.complete===void 0&&(s.complete=Go);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Go(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($E(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UE(t){return t===Xn?void 0:t}function $E(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const WE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},HE=_e.INFO,BE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},GE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=BE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const qE=(t,e)=>e.some(n=>t instanceof n);let cu,uu;function KE(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zE(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Ia=new WeakMap,Lh=new WeakMap,qo=new WeakMap,Il=new WeakMap;function YE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nh.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function JE(t){if(Ia.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ia.set(t,e)}let Ta={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XE(t){Ta=t(Ta)}function QE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ko(this),e,...n);return Lh.set(r,e.sort?e.sort():[e]),Ln(r)}:zE().includes(t)?function(...e){return t.apply(Ko(this),e),Ln(Nh.get(this))}:function(...e){return Ln(t.apply(Ko(this),e))}}function ZE(t){return typeof t=="function"?QE(t):(t instanceof IDBTransaction&&JE(t),qE(t,KE())?new Proxy(t,Ta):t)}function Ln(t){if(t instanceof IDBRequest)return YE(t);if(qo.has(t))return qo.get(t);const e=ZE(t);return e!==t&&(qo.set(t,e),Il.set(e,t)),e}const Ko=t=>Il.get(t);function eb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tb=["get","getKey","getAll","getAllKeys","count"],nb=["put","add","delete","clear"],zo=new Map;function fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zo.get(e))return zo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tb.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return zo.set(e,i),i}XE(t=>({...t,get:(e,n,r)=>fu(e,n)||t.get(e,n,r),has:(e,n)=>!!fu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wa="@firebase/app",du="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new bl("@firebase/app"),ib="@firebase/app-compat",ob="@firebase/analytics-compat",ab="@firebase/analytics",lb="@firebase/app-check-compat",cb="@firebase/app-check",ub="@firebase/auth",fb="@firebase/auth-compat",db="@firebase/database",hb="@firebase/data-connect",pb="@firebase/database-compat",mb="@firebase/functions",gb="@firebase/functions-compat",_b="@firebase/installations",yb="@firebase/installations-compat",vb="@firebase/messaging",Eb="@firebase/messaging-compat",bb="@firebase/performance",Ib="@firebase/performance-compat",Tb="@firebase/remote-config",wb="@firebase/remote-config-compat",Ab="@firebase/storage",Sb="@firebase/storage-compat",Pb="@firebase/firestore",Rb="@firebase/vertexai",Cb="@firebase/firestore-compat",Ob="firebase",kb="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]",Nb={[wa]:"fire-core",[ib]:"fire-core-compat",[ab]:"fire-analytics",[ob]:"fire-analytics-compat",[cb]:"fire-app-check",[lb]:"fire-app-check-compat",[ub]:"fire-auth",[fb]:"fire-auth-compat",[db]:"fire-rtdb",[hb]:"fire-data-connect",[pb]:"fire-rtdb-compat",[mb]:"fire-fn",[gb]:"fire-fn-compat",[_b]:"fire-iid",[yb]:"fire-iid-compat",[vb]:"fire-fcm",[Eb]:"fire-fcm-compat",[bb]:"fire-perf",[Ib]:"fire-perf-compat",[Tb]:"fire-rc",[wb]:"fire-rc-compat",[Ab]:"fire-gcs",[Sb]:"fire-gcs-compat",[Pb]:"fire-fst",[Cb]:"fire-fst-compat",[Rb]:"fire-vertex","fire-js":"fire-js",[Ob]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,Lb=new Map,Sa=new Map;function hu(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Sa.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Sa.set(e,t);for(const n of Mi.values())hu(n,t);for(const n of Lb.values())hu(n,t);return!0}function Tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new qs("app","Firebase",Db);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=kb;function Dh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Aa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});if(n||(n=Oh()),!n)throw Dn.create("no-options");const i=Mi.get(s);if(i){if(sr(n,i.options)&&sr(r,i.config))return i;throw Dn.create("duplicate-app",{appName:s})}const o=new jE(s);for(const l of Sa.values())o.addComponent(l);const a=new Mb(n,r,o);return Mi.set(s,a),a}function Mh(t=Aa){const e=Mi.get(t);if(!e&&t===Aa&&Oh())return Dh();if(!e)throw Dn.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let s=(r=Nb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Fr(new ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="firebase-heartbeat-database",Vb=1,Rs="firebase-heartbeat-store";let Yo=null;function Fh(){return Yo||(Yo=eb(Fb,Vb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Yo}async function xb(t){try{const n=(await Fh()).transaction(Rs),r=await n.objectStore(Rs).get(Vh(t));return await n.done,r}catch(e){if(e instanceof vn)mn.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function pu(t,e){try{const r=(await Fh()).transaction(Rs,"readwrite");await r.objectStore(Rs).put(e,Vh(t)),await r.done}catch(n){if(n instanceof vn)mn.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Vh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=1024,$b=30;class jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$b){const o=Bb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mu(),{heartbeatsToSend:r,unsentEntries:s}=Wb(this._heartbeatsCache.heartbeats),i=Di(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function mu(){return new Date().toISOString().substring(0,10)}function Wb(t,e=Ub){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?OE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gu(t){return Di(JSON.stringify({version:2,heartbeats:t})).length}function Bb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){Fr(new ir("platform-logger",e=>new rb(e),"PRIVATE")),Fr(new ir("heartbeat",e=>new jb(e),"PRIVATE")),Mn(wa,du,t),Mn(wa,du,"esm2017"),Mn("fire-js","")}Gb("");var qb="firebase",Kb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(qb,Kb,"app");var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,h){function m(){}m.prototype=h.prototype,_.D=h.prototype,_.prototype=new m,_.prototype.constructor=_,_.C=function(T,A,w){for(var b=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)b[Ve-2]=arguments[Ve];return h.prototype[A].apply(T,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,h,m){m||(m=0);var T=Array(16);if(typeof h=="string")for(var A=0;16>A;++A)T[A]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(A=0;16>A;++A)T[A]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=_.g[0],m=_.g[1],A=_.g[2];var w=_.g[3],b=h+(w^m&(A^w))+T[0]+3614090360&4294967295;h=m+(b<<7&4294967295|b>>>25),b=w+(A^h&(m^A))+T[1]+3905402710&4294967295,w=h+(b<<12&4294967295|b>>>20),b=A+(m^w&(h^m))+T[2]+606105819&4294967295,A=w+(b<<17&4294967295|b>>>15),b=m+(h^A&(w^h))+T[3]+3250441966&4294967295,m=A+(b<<22&4294967295|b>>>10),b=h+(w^m&(A^w))+T[4]+4118548399&4294967295,h=m+(b<<7&4294967295|b>>>25),b=w+(A^h&(m^A))+T[5]+1200080426&4294967295,w=h+(b<<12&4294967295|b>>>20),b=A+(m^w&(h^m))+T[6]+2821735955&4294967295,A=w+(b<<17&4294967295|b>>>15),b=m+(h^A&(w^h))+T[7]+4249261313&4294967295,m=A+(b<<22&4294967295|b>>>10),b=h+(w^m&(A^w))+T[8]+1770035416&4294967295,h=m+(b<<7&4294967295|b>>>25),b=w+(A^h&(m^A))+T[9]+2336552879&4294967295,w=h+(b<<12&4294967295|b>>>20),b=A+(m^w&(h^m))+T[10]+4294925233&4294967295,A=w+(b<<17&4294967295|b>>>15),b=m+(h^A&(w^h))+T[11]+2304563134&4294967295,m=A+(b<<22&4294967295|b>>>10),b=h+(w^m&(A^w))+T[12]+1804603682&4294967295,h=m+(b<<7&4294967295|b>>>25),b=w+(A^h&(m^A))+T[13]+4254626195&4294967295,w=h+(b<<12&4294967295|b>>>20),b=A+(m^w&(h^m))+T[14]+2792965006&4294967295,A=w+(b<<17&4294967295|b>>>15),b=m+(h^A&(w^h))+T[15]+1236535329&4294967295,m=A+(b<<22&4294967295|b>>>10),b=h+(A^w&(m^A))+T[1]+4129170786&4294967295,h=m+(b<<5&4294967295|b>>>27),b=w+(m^A&(h^m))+T[6]+3225465664&4294967295,w=h+(b<<9&4294967295|b>>>23),b=A+(h^m&(w^h))+T[11]+643717713&4294967295,A=w+(b<<14&4294967295|b>>>18),b=m+(w^h&(A^w))+T[0]+3921069994&4294967295,m=A+(b<<20&4294967295|b>>>12),b=h+(A^w&(m^A))+T[5]+3593408605&4294967295,h=m+(b<<5&4294967295|b>>>27),b=w+(m^A&(h^m))+T[10]+38016083&4294967295,w=h+(b<<9&4294967295|b>>>23),b=A+(h^m&(w^h))+T[15]+3634488961&4294967295,A=w+(b<<14&4294967295|b>>>18),b=m+(w^h&(A^w))+T[4]+3889429448&4294967295,m=A+(b<<20&4294967295|b>>>12),b=h+(A^w&(m^A))+T[9]+568446438&4294967295,h=m+(b<<5&4294967295|b>>>27),b=w+(m^A&(h^m))+T[14]+3275163606&4294967295,w=h+(b<<9&4294967295|b>>>23),b=A+(h^m&(w^h))+T[3]+4107603335&4294967295,A=w+(b<<14&4294967295|b>>>18),b=m+(w^h&(A^w))+T[8]+1163531501&4294967295,m=A+(b<<20&4294967295|b>>>12),b=h+(A^w&(m^A))+T[13]+2850285829&4294967295,h=m+(b<<5&4294967295|b>>>27),b=w+(m^A&(h^m))+T[2]+4243563512&4294967295,w=h+(b<<9&4294967295|b>>>23),b=A+(h^m&(w^h))+T[7]+1735328473&4294967295,A=w+(b<<14&4294967295|b>>>18),b=m+(w^h&(A^w))+T[12]+2368359562&4294967295,m=A+(b<<20&4294967295|b>>>12),b=h+(m^A^w)+T[5]+4294588738&4294967295,h=m+(b<<4&4294967295|b>>>28),b=w+(h^m^A)+T[8]+2272392833&4294967295,w=h+(b<<11&4294967295|b>>>21),b=A+(w^h^m)+T[11]+1839030562&4294967295,A=w+(b<<16&4294967295|b>>>16),b=m+(A^w^h)+T[14]+4259657740&4294967295,m=A+(b<<23&4294967295|b>>>9),b=h+(m^A^w)+T[1]+2763975236&4294967295,h=m+(b<<4&4294967295|b>>>28),b=w+(h^m^A)+T[4]+1272893353&4294967295,w=h+(b<<11&4294967295|b>>>21),b=A+(w^h^m)+T[7]+4139469664&4294967295,A=w+(b<<16&4294967295|b>>>16),b=m+(A^w^h)+T[10]+3200236656&4294967295,m=A+(b<<23&4294967295|b>>>9),b=h+(m^A^w)+T[13]+681279174&4294967295,h=m+(b<<4&4294967295|b>>>28),b=w+(h^m^A)+T[0]+3936430074&4294967295,w=h+(b<<11&4294967295|b>>>21),b=A+(w^h^m)+T[3]+3572445317&4294967295,A=w+(b<<16&4294967295|b>>>16),b=m+(A^w^h)+T[6]+76029189&4294967295,m=A+(b<<23&4294967295|b>>>9),b=h+(m^A^w)+T[9]+3654602809&4294967295,h=m+(b<<4&4294967295|b>>>28),b=w+(h^m^A)+T[12]+3873151461&4294967295,w=h+(b<<11&4294967295|b>>>21),b=A+(w^h^m)+T[15]+530742520&4294967295,A=w+(b<<16&4294967295|b>>>16),b=m+(A^w^h)+T[2]+3299628645&4294967295,m=A+(b<<23&4294967295|b>>>9),b=h+(A^(m|~w))+T[0]+4096336452&4294967295,h=m+(b<<6&4294967295|b>>>26),b=w+(m^(h|~A))+T[7]+1126891415&4294967295,w=h+(b<<10&4294967295|b>>>22),b=A+(h^(w|~m))+T[14]+2878612391&4294967295,A=w+(b<<15&4294967295|b>>>17),b=m+(w^(A|~h))+T[5]+4237533241&4294967295,m=A+(b<<21&4294967295|b>>>11),b=h+(A^(m|~w))+T[12]+1700485571&4294967295,h=m+(b<<6&4294967295|b>>>26),b=w+(m^(h|~A))+T[3]+2399980690&4294967295,w=h+(b<<10&4294967295|b>>>22),b=A+(h^(w|~m))+T[10]+4293915773&4294967295,A=w+(b<<15&4294967295|b>>>17),b=m+(w^(A|~h))+T[1]+2240044497&4294967295,m=A+(b<<21&4294967295|b>>>11),b=h+(A^(m|~w))+T[8]+1873313359&4294967295,h=m+(b<<6&4294967295|b>>>26),b=w+(m^(h|~A))+T[15]+4264355552&4294967295,w=h+(b<<10&4294967295|b>>>22),b=A+(h^(w|~m))+T[6]+2734768916&4294967295,A=w+(b<<15&4294967295|b>>>17),b=m+(w^(A|~h))+T[13]+1309151649&4294967295,m=A+(b<<21&4294967295|b>>>11),b=h+(A^(m|~w))+T[4]+4149444226&4294967295,h=m+(b<<6&4294967295|b>>>26),b=w+(m^(h|~A))+T[11]+3174756917&4294967295,w=h+(b<<10&4294967295|b>>>22),b=A+(h^(w|~m))+T[2]+718787259&4294967295,A=w+(b<<15&4294967295|b>>>17),b=m+(w^(A|~h))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+h&4294967295,_.g[1]=_.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+w&4294967295}r.prototype.u=function(_,h){h===void 0&&(h=_.length);for(var m=h-this.blockSize,T=this.B,A=this.h,w=0;w<h;){if(A==0)for(;w<=m;)s(this,_,w),w+=this.blockSize;if(typeof _=="string"){for(;w<h;)if(T[A++]=_.charCodeAt(w++),A==this.blockSize){s(this,T),A=0;break}}else for(;w<h;)if(T[A++]=_[w++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=h},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var h=1;h<_.length-8;++h)_[h]=0;var m=8*this.o;for(h=_.length-8;h<_.length;++h)_[h]=m&255,m/=256;for(this.u(_),_=Array(16),h=m=0;4>h;++h)for(var T=0;32>T;T+=8)_[m++]=this.g[h]>>>T&255;return _};function i(_,h){var m=a;return Object.prototype.hasOwnProperty.call(m,_)?m[_]:m[_]=h(_)}function o(_,h){this.h=h;for(var m=[],T=!0,A=_.length-1;0<=A;A--){var w=_[A]|0;T&&w==h||(m[A]=w,T=!1)}this.g=m}var a={};function l(_){return-128<=_&&128>_?i(_,function(h){return new o([h|0],0>h?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return f;if(0>_)return L(c(-_));for(var h=[],m=1,T=0;_>=m;T++)h[T]=_/m|0,m*=4294967296;return new o(h,0)}function u(_,h){if(_.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(_.charAt(0)=="-")return L(u(_.substring(1),h));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=c(Math.pow(h,8)),T=f,A=0;A<_.length;A+=8){var w=Math.min(8,_.length-A),b=parseInt(_.substring(A,A+w),h);8>w?(w=c(Math.pow(h,w)),T=T.j(w).add(c(b))):(T=T.j(m),T=T.add(c(b)))}return T}var f=l(0),d=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-L(this).m();for(var _=0,h=1,m=0;m<this.g.length;m++){var T=this.i(m);_+=(0<=T?T:4294967296+T)*h,h*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(O(this))return"-"+L(this).toString(_);for(var h=c(Math.pow(_,6)),m=this,T="";;){var A=P(m,h).g;m=V(m,A.j(h));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(_);if(m=A,R(m))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var h=0;h<_.g.length;h++)if(_.g[h]!=0)return!1;return!0}function O(_){return _.h==-1}t.l=function(_){return _=V(this,_),O(_)?-1:R(_)?0:1};function L(_){for(var h=_.g.length,m=[],T=0;T<h;T++)m[T]=~_.g[T];return new o(m,~_.h).add(d)}t.abs=function(){return O(this)?L(this):this},t.add=function(_){for(var h=Math.max(this.g.length,_.g.length),m=[],T=0,A=0;A<=h;A++){var w=T+(this.i(A)&65535)+(_.i(A)&65535),b=(w>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);T=b>>>16,w&=65535,b&=65535,m[A]=b<<16|w}return new o(m,m[m.length-1]&-2147483648?-1:0)};function V(_,h){return _.add(L(h))}t.j=function(_){if(R(this)||R(_))return f;if(O(this))return O(_)?L(this).j(L(_)):L(L(this).j(_));if(O(_))return L(this.j(L(_)));if(0>this.l(y)&&0>_.l(y))return c(this.m()*_.m());for(var h=this.g.length+_.g.length,m=[],T=0;T<2*h;T++)m[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<_.g.length;A++){var w=this.i(T)>>>16,b=this.i(T)&65535,Ve=_.i(A)>>>16,Ze=_.i(A)&65535;m[2*T+2*A]+=b*Ze,W(m,2*T+2*A),m[2*T+2*A+1]+=w*Ze,W(m,2*T+2*A+1),m[2*T+2*A+1]+=b*Ve,W(m,2*T+2*A+1),m[2*T+2*A+2]+=w*Ve,W(m,2*T+2*A+2)}for(T=0;T<h;T++)m[T]=m[2*T+1]<<16|m[2*T];for(T=h;T<2*h;T++)m[T]=0;return new o(m,0)};function W(_,h){for(;(_[h]&65535)!=_[h];)_[h+1]+=_[h]>>>16,_[h]&=65535,h++}function S(_,h){this.g=_,this.h=h}function P(_,h){if(R(h))throw Error("division by zero");if(R(_))return new S(f,f);if(O(_))return h=P(L(_),h),new S(L(h.g),L(h.h));if(O(h))return h=P(_,L(h)),new S(L(h.g),h.h);if(30<_.g.length){if(O(_)||O(h))throw Error("slowDivide_ only works with positive integers.");for(var m=d,T=h;0>=T.l(_);)m=x(m),T=x(T);var A=D(m,1),w=D(T,1);for(T=D(T,2),m=D(m,2);!R(T);){var b=w.add(T);0>=b.l(_)&&(A=A.add(m),w=b),T=D(T,1),m=D(m,1)}return h=V(_,A.j(h)),new S(A,h)}for(A=f;0<=_.l(h);){for(m=Math.max(1,Math.floor(_.m()/h.m())),T=Math.ceil(Math.log(m)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=c(m),b=w.j(h);O(b)||0<b.l(_);)m-=T,w=c(m),b=w.j(h);R(w)&&(w=d),A=A.add(w),_=V(_,b)}return new S(A,_)}t.A=function(_){return P(this,_).h},t.and=function(_){for(var h=Math.max(this.g.length,_.g.length),m=[],T=0;T<h;T++)m[T]=this.i(T)&_.i(T);return new o(m,this.h&_.h)},t.or=function(_){for(var h=Math.max(this.g.length,_.g.length),m=[],T=0;T<h;T++)m[T]=this.i(T)|_.i(T);return new o(m,this.h|_.h)},t.xor=function(_){for(var h=Math.max(this.g.length,_.g.length),m=[],T=0;T<h;T++)m[T]=this.i(T)^_.i(T);return new o(m,this.h^_.h)};function x(_){for(var h=_.g.length+1,m=[],T=0;T<h;T++)m[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(m,_.h)}function D(_,h){var m=h>>5;h%=32;for(var T=_.g.length-m,A=[],w=0;w<T;w++)A[w]=0<h?_.i(w+m)>>>h|_.i(w+m+1)<<32-h:_.i(w+m);return new o(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,xh=o}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const yu="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new bl("@firebase/firestore");function Fi(t,...e){if(Vr.logLevel<=_e.DEBUG){const n=e.map(Al);Vr.debug(`Firestore (${qr}): ${t}`,...n)}}function wl(t,...e){if(Vr.logLevel<=_e.ERROR){const n=e.map(Al);Vr.error(`Firestore (${qr}): ${t}`,...n)}}function Uh(t,...e){if(Vr.logLevel<=_e.WARN){const n=e.map(Al);Vr.warn(`Firestore (${qr}): ${t}`,...n)}}function Al(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw wl(e),new Error(e)}function bt(t,e){t||Ce()}function zs(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="ok",zb="cancelled",hs="unknown",ee="invalid-argument",Yb="deadline-exceeded",$h="not-found",Jb="permission-denied",Pa="unauthenticated",Xb="resource-exhausted",xr="failed-precondition",Qb="aborted",Zb="out-of-range",jh="unimplemented",eI="internal",tI="unavailable";class Q extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class rI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sI{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(bt(typeof e.accessToken=="string"),new Wh(e.accessToken,new ut(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class iI{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class oI{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new iI(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aI{constructor(e,n){this.h=n,this.appCheck=null,this.m=null,yt(e)&&e.settings.appCheckToken&&(this.m=e.settings.appCheckToken),n.onInit(r=>{this.appCheck=r})}getToken(){return this.m?Promise.resolve(new Eu(this.m)):this.appCheck?this.appCheck.getToken().then(e=>e?(bt(typeof e.token=="string"),new Eu(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}const Ra="(default)";class Cs{constructor(e,n){this.projectId=e,this.database=n||Ra}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database===Ra}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Ca(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Re(r,s);{const i=new TextEncoder,o=fI(i.encode(bu(t,n)),i.encode(bu(e,n)));return o!==0?o:Re(r,s)}}n+=r>65535?2:1}return Re(t.length,e.length)}function bu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function fI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Re(t[n],e[n]);return Re(t.length,e.length)}function Hh(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="__name__";class Ht{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ce(),r===void 0?r=e.length-n:r>e.length-n&&Ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ht.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const r=Ht.isNumericId(e),s=Ht.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(e).compare(Ht.extractNumericId(n)):Ca(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xh.fromString(e.substring(4,e.length-2))}}class Ne extends Ht{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(ee,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const dI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ht{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return dI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iu}static keyField(){return new ft([Iu])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(ee,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Q(ee,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(ee,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Q(ee,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(Ne.fromString(e))}static fromName(e){return new xe(Ne.fromString(e).popFirst(5))}static empty(){return new xe(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e,n){if(!n)throw new Q(ee,`Function ${t}() cannot be called with an empty ${e}.`)}function Tu(t){if(!xe.isDocumentKey(t))throw new Q(ee,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wu(t){if(xe.isDocumentKey(t))throw new Q(ee,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function po(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ce()}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(ee,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=po(t);throw new Q(ee,`Expected type '${e.name}', but it was: ${n}`)}}return t}function hI(t,e){if(e<=0)throw new Q(ee,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci=null;function pI(){return ci===null?ci=function(){return 268435456+Math.round(2147483648*Math.random())}():ci++,"0x"+ci.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){return t==null}function Vi(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="RestConnection",gI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _I{get A(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.T=n+"://"+e.host,this.P=`projects/${r}/databases/${s}`,this.R=this.databaseId.database===Ra?`project_id=${r}`:`project_id=${r}&database_id=${s}`}I(e,n,r,s,i){const o=pI(),a=this.V(e,n.toUriEncodedString());Fi(Jo,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.P,"x-goog-request-params":this.R};return this.p(l,s,i),this.F(e,a,l,r).then(c=>(Fi(Jo,`Received RPC '${e}' ${o}: `,c),c),c=>{throw Uh(Jo,`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}v(e,n,r,s,i,o){return this.I(e,n,r,s,i)}p(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}V(e,n){const r=gI[e];return`${this.T}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Au,fe;function Su(t){if(t===void 0)return wl("RPC_ERROR","HTTP error has no status"),hs;switch(t){case 200:return vu;case 400:return xr;case 401:return Pa;case 403:return Jb;case 404:return $h;case 409:return Qb;case 416:return Zb;case 429:return Xb;case 499:return zb;case 500:return hs;case 501:return jh;case 503:return tI;case 504:return Yb;default:return t>=200&&t<300?vu:t>=400&&t<500?xr:t>=500&&t<600?eI:hs}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(fe=Au||(Au={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";class yI extends _I{D(e,n){throw new Error("Not supported by FetchConnection")}async F(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await fetch(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new Q(Su(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new Q(Su(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vI("Invalid base64 string: "+i):i}}(e);return new gn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gn.EMPTY_BYTE_STRING=new gn("");const EI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(bt(!!t),typeof t=="string"){let e=0;const n=EI.exec(t);if(bt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=-62135596800,Cu=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cu);return new It(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(ee,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(ee,"Timestamp nanoseconds out of range: "+n);if(e<Ru)throw new Q(ee,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(ee,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cu}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ru;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qh(t){const e=t.mapValue.fields.__previous_value__;return Sl(e)?qh(e):e}function ks(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="__type__",bI="__max__",ui={},zh="__vector__",xi="value";function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sl(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bI}(t)?9007199254740991:function(n){var r,s;return((s=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{})[Kh])===null||s===void 0?void 0:s.stringValue)===zh}(t)?10:11:Ce()}function Ui(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=or(s.timestampValue),a=or(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Os(s.bytesValue).isEqual(Os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),a=Me(i.doubleValue);return o===a?Vi(o)===Vi(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hh(t.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Pu(o)!==Pu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ui(o[l],a[l])))return!1;return!0}(t,e);default:return Ce()}}function Ns(t,e){return(t.values||[]).find(n=>Ui(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ou(t.timestampValue,e.timestampValue);case 4:return Ou(ks(t),ks(e));case 5:return Ca(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Os(i),l=Os(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Re(a[c],l[c]);if(u!==0)return u}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(Me(i.latitude),Me(o.latitude));return a!==0?a:Re(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ku(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,c,u;const f=i.fields||{},d=o.fields||{},y=(a=f[xi])===null||a===void 0?void 0:a.arrayValue,R=(l=d[xi])===null||l===void 0?void 0:l.arrayValue,O=Re(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((u=R==null?void 0:R.values)===null||u===void 0?void 0:u.length)||0);return O!==0?O:ku(y,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ui&&o===ui)return 0;if(i===ui)return 1;if(o===ui)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const d=Ca(l[f],u[f]);if(d!==0)return d;const y=$i(a[l[f]],c[u[f]]);if(y!==0)return y}return Re(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Ce()}}function Ou(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=or(t),r=or(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function ku(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$i(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yh(t){return!!t&&"arrayValue"in t}function Nu(t){return!!t&&"nullValue"in t}function Lu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xo(t){return!!t&&"mapValue"in t}function ps(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ps(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ps(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Wi{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{}class xt extends Jh{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new II(e,n,r):n==="array-contains"?new AI(e,r):n==="in"?new SI(e,r):n==="not-in"?new PI(e,r):n==="array-contains-any"?new RI(e,r):new xt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TI(e,r):new wI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Js extends Jh{constructor(e,n){super(),this.filters=e,this.op=n,this.C=null}static create(e,n){return new Js(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.C!==null||(this.C=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.C}getFilters(){return Object.assign([],this.filters)}}class II extends xt{constructor(e,n,r){super(e,n,r),this.key=xe.fromName(r.referenceValue)}matches(e){const n=xe.comparator(e.key,this.key);return this.matchesComparison(n)}}class TI extends xt{constructor(e,n){super(e,"in",n),this.keys=Xh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wI extends xt{constructor(e,n){super(e,"not-in",n),this.keys=Xh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>xe.fromName(r.referenceValue))}class AI extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yh(n)&&Ns(n.arrayValue,this.value)}}class SI extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ns(this.value.arrayValue,n)}}class PI extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ns(this.value.arrayValue,n)}}class RI extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ns(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new It(0,0))}static max(){return new Ge(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Bi(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Bi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ce();const e=this.left.check();if(e!==this.right.check())throw Ce();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce()}get value(){throw Ce()}get color(){throw Ce()}get left(){throw Ce()}get right(){throw Ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e,this.data=new Bi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Du(this.data.getIterator())}getIteratorFrom(e){return new Du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ls(this.comparator);return n.data=e,n}}class Du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new lr([])}unionWith(e){let n=new Ls(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new lr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hh(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ps(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ui(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ys(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(ps(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Gt(e,0,Ge.min(),Ge.min(),Ge.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new Gt(e,1,n,Ge.min(),r,s,0)}static newNoDocument(e,n){return new Gt(e,2,n,Ge.min(),Ge.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,Ge.min(),Ge.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Mu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CI(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.N=null,this.O=null,this.q=null,this.startAt,this.endAt}}function Qh(t){return t.collectionGroup!==null}function Zh(t){const e=zs(t);if(e.N===null){e.N=[];const n=new Set;for(const i of e.explicitOrderBy)e.N.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ls(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.N.push(new Hi(i,r))}),n.has(ft.keyField().canonicalString())||e.N.push(new Hi(ft.keyField(),r))}return e.N}function OI(t){const e=zs(t);return e.O||(e.O=kI(e,Zh(t))),e.O}function kI(t,e){if(t.limitType==="F")return Mu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hi(s.field,i)});const n=t.endAt?new Wi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wi(t.startAt.position,t.startAt.inclusive):null;return Mu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oa(t,e){const n=t.filters.concat([e]);return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function NI(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Vi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}class LI extends mo{}class DI extends mo{constructor(e){super(),this.elements=e}}class MI extends mo{constructor(e){super(),this.elements=e}}class FI extends mo{constructor(e,n){super(),this.serializer=e,this.B=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class go{}class tp extends go{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pl extends go{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class np extends go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VI extends go{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={asc:"ASCENDING",desc:"DESCENDING"},UI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$I={and:"AND",or:"OR"};class jI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HI(t,e){return ka(t,e.toTimestamp())}function ms(t){return bt(!!t),Ge.fromTimestamp(function(n){const r=or(n);return new It(r.seconds,r.nanos)}(t))}function Rl(t,e){return Na(t,e).canonicalString()}function Na(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gi(t,e){return Rl(t.databaseId,e.path)}function La(t,e){const n=function(s){const i=Ne.fromString(s);return bt(sp(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(ee,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(ee,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xe(function(s){return bt(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function Fu(t,e,n){return{name:Gi(t,e),fields:n.value.mapValue.fields}}function BI(t,e){return"found"in e?function(r,s){bt(!!s.found),s.found.name,s.found.updateTime;const i=La(r,s.found.name),o=ms(s.found.updateTime),a=s.found.createTime?ms(s.found.createTime):Ge.min(),l=new vt({mapValue:{fields:s.found.fields}});return Gt.newFoundDocument(i,o,a,l)}(t,e):"missing"in e?function(r,s){bt(!!s.missing),bt(!!s.readTime);const i=La(r,s.missing),o=ms(s.readTime);return Gt.newNoDocument(i,o)}(t,e):Ce()}function GI(t,e){let n;if(e instanceof tp)n={update:Fu(t,e.key,e.value)};else if(e instanceof np)n={delete:Gi(t,e.key)};else if(e instanceof Pl)n={update:Fu(t,e.key,e.data),updateMask:JI(e.fieldMask)};else{if(!(e instanceof VI))return Ce();n={verify:Gi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof LI)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof DI)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof MI)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof FI)return{fieldPath:o.field.canonicalString(),increment:a.B};throw Ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:HI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ce()}(t,e.precondition)),n}function qI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return Rl(c.databaseId,u)}(t,s);const i=function(c){if(c.length!==0)return rp(Js.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:vr(d.field),direction:KI(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||mI(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{$:n,parent:s}}function KI(t){return xI[t]}function zI(t){return UI[t]}function YI(t){return $I[t]}function vr(t){return{fieldPath:t.canonicalString()}}function rp(t){return t instanceof xt?function(n){if(n.op==="=="){if(Lu(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NAN"}};if(Nu(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lu(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NOT_NAN"}};if(Nu(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vr(n.field),op:zI(n.op),value:n.value}}}(t):t instanceof Js?function(n){const r=n.getFilters().map(s=>rp(s));return r.length===1?r[0]:{compositeFilter:{op:YI(n.op),filters:r}}}(t):Ce()}function JI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t){return new jI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{}class QI extends XI{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Z=!1}X(){if(this.Z)throw new Q(xr,"The client has already been terminated.")}I(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.I(e,Na(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Pa&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(hs,i.toString())})}v(e,n,r,s,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.v(e,Na(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Pa&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(hs,o.toString())})}terminate(){this.Z=!0,this.connection.terminate()}}async function Ol(t,e){const n=zs(t),r={writes:e.map(s=>GI(n.serializer,s))};await n.I("Commit",n.serializer.databaseId,Ne.emptyPath(),r)}async function ZI(t,e){const n=zs(t),r={documents:e.map(a=>Gi(n.serializer,a))},s=await n.v("BatchGetDocuments",n.serializer.databaseId,Ne.emptyPath(),r,e.length),i=new Map;s.forEach(a=>{const l=BI(n.serializer,a);i.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=i.get(a.toString());bt(!!l),o.push(l)}),o}async function eT(t,e){const n=zs(t),{$:r,parent:s}=qI(n.serializer,OI(e));return(await n.v("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(a,l,c){const u=La(a,l.name),f=ms(l.updateTime),d=l.createTime?ms(l.createTime):Ge.min(),y=new vt({mapValue:{fields:l.fields}}),R=Gt.newFoundDocument(u,f,d,y);return c?R.setHasCommittedMutations():R}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="ComponentProvider",gs=new Map;function Qs(t){if(t._terminated)throw new Q(xr,"The client has already been terminated.");if(!gs.has(t)){Fi(ip,"Initializing Datastore");const e=function(i){return new yI(i)}(function(i,o,a,l){return new lI(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Gh(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Cl(t._databaseId),r=function(i,o,a,l){return new QI(i,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);gs.set(t,r)}return gs.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=1048576,op="firestore.googleapis.com",Vu=!0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(ee,"Can't provide ssl option if host option is not set");this.host=op,this.ssl=Vu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Vu;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tT)throw new Q(ee,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new Q(ee,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(ee,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(ee,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(ee,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _o{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(xr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(xr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nI;switch(r.type){case"firstParty":return new oI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(ee,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gs.get(n);r&&(Fi(ip,"Removing Datastore"),gs.delete(n),r.terminate())}(this),Promise.resolve()}}function nT(t,e){const n=typeof t=="object"?t:Mh(),r=typeof t=="string"?t:"(default)",s=Tl(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=bE("firestore");i&&rT(s,...i)}return s}function rT(t,e,n,r={}){var s;const i=(t=Kr(t,_o))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==op&&i.host!==a&&Uh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!sr(l,o)&&(t._setSettings(l),r.mockUserToken)){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ut.MOCK_USER;else{c=TE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Q(ee,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(f)}t._authCredentials=new rI(new Wh(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class dn extends En{constructor(e,n,r){super(e,n,function(i){return new Xs(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new xe(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function sT(t,e,...n){if(t=He(t),Bh("collection","path",e),t instanceof _o){const r=Ne.fromString(e,...n);return wu(r),new dn(t,null,r)}{if(!(t instanceof ot||t instanceof dn))throw new Q(ee,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return wu(r),new dn(t.firestore,null,r)}}function ss(t,e,...n){if(t=He(t),arguments.length===1&&(e=uI.newId()),Bh("doc","path",e),t instanceof _o){const r=Ne.fromString(e,...n);return Tu(r),new ot(t,null,new xe(r))}{if(!(t instanceof ot||t instanceof dn))throw new Q(ee,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Tu(r),new ot(t.firestore,t instanceof dn?t.converter:null,new xe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ur(gn.fromBase64String(e))}catch(n){throw new Q(ee,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ur(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(ee,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(ee,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(ee,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=/^__.*__$/;class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pl(e,this.data,this.fieldMask,n,this.fieldTransforms):new tp(e,this.data,n,this.fieldTransforms)}}class ap{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pl(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce()}}class Dl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new Dl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.ot(e),s}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.et(),s}_t(e){return this.nt({path:void 0,st:!0})}ct(e){return qi(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(lp(this.rt)&&iT.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class aT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cl(e)}dt(e,n,r,s=!1){return new Dl({rt:e,methodName:n,ht:r,path:ft.emptyPath(),st:!1,lt:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vo(t){const e=t._freezeSettings(),n=Cl(t._databaseId);return new aT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lT(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);Ml("Data must be an object, but it was:",o,r);const a=up(r,o);let l,c;if(i.merge)l=new lr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const d=Da(e,f,n);if(!o.contains(d))throw new Q(ee,`Field '${d}' is specified in your field mask but missing from your input data.`);dp(u,d)||u.push(d)}l=new lr(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new oT(new vt(a),l,c)}class Eo extends kl{_toFieldTransform(e){if(e.rt!==2)throw e.rt===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eo}}function cT(t,e,n,r){const s=t.dt(1,e,n);Ml("Data must be an object, but it was:",s,r);const i=[],o=vt.empty();Ys(r,(l,c)=>{const u=Fl(e,l,n);c=He(c);const f=s.ut(u);if(c instanceof Eo)i.push(u);else{const d=Zs(c,f);d!=null&&(i.push(u),o.set(u,d))}});const a=new lr(i);return new ap(o,a,s.fieldTransforms)}function uT(t,e,n,r,s,i){const o=t.dt(1,e,n),a=[Da(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(ee,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Da(e,i[d])),l.push(i[d+1]);const c=[],u=vt.empty();for(let d=a.length-1;d>=0;--d)if(!dp(c,a[d])){const y=a[d];let R=l[d];R=He(R);const O=o.ut(y);if(R instanceof Eo)c.push(y);else{const L=Zs(R,O);L!=null&&(c.push(y),u.set(y,L))}}const f=new lr(c);return new ap(u,f,o.fieldTransforms)}function cp(t,e,n,r=!1){return Zs(n,t.dt(r?4:3,e))}function Zs(t,e){if(fp(t=He(t)))return Ml("Unsupported field value:",e,t),up(t,e);if(t instanceof kl)return function(r,s){if(!lp(s.rt))throw s.ct(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ct(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.rt!==4)throw e.ct("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Zs(a,s._t(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=It.fromDate(r);return{timestampValue:ka(s.serializer,i)}}if(r instanceof It){const i=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ka(s.serializer,i)}}if(r instanceof Nl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ur)return{bytesValue:WI(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.ct(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ll)return function(o,a){return{mapValue:{fields:{[Kh]:{stringValue:zh},[xi]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.ct("VectorValues must only contain numeric values.");return ep(a.serializer,c)})}}}}}}(r,s);throw s.ct(`Unsupported field value: ${po(r)}`)}(t,e)}function up(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(r,s)=>{const i=Zs(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof Nl||t instanceof Ur||t instanceof ot||t instanceof kl||t instanceof Ll)}function Ml(t,e,n){if(!fp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=po(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function Da(t,e,n){if((e=He(e))instanceof yo)return e._internalPath;if(typeof e=="string")return Fl(t,e);throw qi("Field path arguments must be of type string or ",t,!1,void 0,n)}const fT=new RegExp("[~\\*/\\[\\]]");function Fl(t,e,n){if(e.search(fT)>=0)throw qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yo(...e.split("."))._internalPath}catch{throw qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(ee,a+t+l)}function dp(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hp extends Vl{data(){return super.data()}}class dT{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function xl(t,e){return typeof e=="string"?Fl(t,e):e instanceof yo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{}class bo extends Ul{}function Uu(t,e,...n){let r=[];e instanceof Ul&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ti).length,a=i.filter(l=>l instanceof ei).length;if(o>1||o>0&&a>0)throw new Q(ee,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ei extends bo{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ei(e,n,r)}_apply(e){const n=this._parse(e);return pp(e._query,n),new En(e.firestore,e.converter,Oa(e._query,n))}_parse(e){const n=vo(e.firestore);return function(i,o,a,l,c,u,f){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new Q(ee,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Hu(f,u);const R=[];for(const O of f)R.push(Wu(l,i,O));d={arrayValue:{values:R}}}else d=Wu(l,i,f)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Hu(f,u),d=cp(a,o,f,u==="in"||u==="not-in");return xt.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $u(t,e,n){const r=e,s=xl("where",t);return ei._create(s,r,n)}class ti extends Ul{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ti(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Js.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)pp(o,l),o=Oa(o,l)}(e._query,n),new En(e.firestore,e.converter,Oa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hT(...t){return t.forEach(e=>_T("and",e)),ti._create("and",t)}class $l extends bo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $l(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(ee,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(ee,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hi(i,o)}(e._query,this._field,this._direction);return new En(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function pT(t,e="asc"){const n=e,r=xl("orderBy",t);return $l._create(r,n)}class jl extends bo{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new jl(e,n,r)}_apply(e){return new En(e.firestore,e.converter,function(r,s,i){return new Xs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),s,i,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function ju(t){return hI("limit",t),jl._create("limit",t,"F")}class Wl extends bo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wl(e,n,r)}_apply(e){const n=gT(e,this.type,this._docOrFields,this._inclusive);return new En(e.firestore,e.converter,function(s,i){return new Xs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function mT(...t){return Wl._create("startAfter",t,!1)}function gT(t,e,n,r){if(n[0]=He(n[0]),n[0]instanceof Vl)return function(i,o,a,l,c){if(!l)throw new Q($h,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const f of Zh(i))if(f.field.isKeyField())u.push(ji(o,l.key));else{const d=l.data.field(f.field);if(Sl(d))throw new Q(ee,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const y=f.field.canonicalString();throw new Q(ee,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}u.push(d)}return new Wi(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=vo(t.firestore);return function(o,a,l,c,u,f){const d=o.explicitOrderBy;if(u.length>d.length)throw new Q(ee,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let R=0;R<u.length;R++){const O=u[R];if(d[R].field.isKeyField()){if(typeof O!="string")throw new Q(ee,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof O}`);if(!Qh(o)&&O.indexOf("/")!==-1)throw new Q(ee,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${O}' contains a slash.`);const L=o.path.child(Ne.fromString(O));if(!xe.isDocumentKey(L))throw new Q(ee,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const V=new xe(L);y.push(ji(a,V))}else{const L=cp(l,c,O);y.push(L)}}return new Wi(y,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Wu(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(ee,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qh(e)&&n.indexOf("/")!==-1)throw new Q(ee,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!xe.isDocumentKey(r))throw new Q(ee,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ji(t,new xe(r))}if(n instanceof ot)return ji(t,n._key);throw new Q(ee,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${po(n)}.`)}function Hu(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(ee,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pp(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(ee,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(ee,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _T(t,e){if(!(e instanceof ei||e instanceof ti))throw new Q(ee,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class yT{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ys(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[xi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Me(o.doubleValue));return new Ll(i)}convertGeoPoint(e){return new Nl(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=or(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);bt(sp(r));const s=new Cs(r.get(1),r.get(3)),i=new xe(r.popFirst(5));return s.isEqual(n)||wl(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mp extends yT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Bu(t){const e=Qs((t=Kr(t,ot)).firestore),n=new mp(t.firestore);return ZI(e,[t._key]).then(r=>{bt(r.length===1);const s=r[0];return new Vl(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Gu(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new Q(jh,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Kr(t,En))._query);const e=Qs(t.firestore),n=new mp(t.firestore);return eT(e,t._query).then(r=>{const s=r.map(i=>new hp(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new dT(t,s)})}function ET(t,e,n,...r){const s=vo((t=Kr(t,ot)).firestore);let i;return i=typeof(e=He(e))=="string"||e instanceof yo?uT(s,"updateDoc",t._key,e,n,r):cT(s,"updateDoc",t._key,e),Ol(Qs(t.firestore),[i.toMutation(t._key,tr.exists(!0))])}function bT(t){return Ol(Qs((t=Kr(t,ot)).firestore),[new np(t._key,tr.none())])}function IT(t,e){const n=ss(t=Kr(t,dn)),r=vT(t.converter,e),s=lT(vo(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Ol(Qs(t.firestore),[s.toMutation(n._key,tr.exists(!1))]).then(()=>n)}(function(){(function(n){qr=n})(`${Gr}_lite`),Fr(new ir("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new _o(new sI(e.getProvider("auth-internal")),new aI(s,e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Q(ee,'"projectId" not provided in firebase.initializeApp.');return new Cs(a.options.projectId,l)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Mn("firestore-lite",yu,""),Mn("firestore-lite",yu,"esm2017")})();function Hl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TT=gp,_p=new qs("auth","Firebase",gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new bl("@firebase/auth");function wT(t,...e){Ki.logLevel<=_e.WARN&&Ki.warn(`Auth (${Gr}): ${t}`,...e)}function vi(t,...e){Ki.logLevel<=_e.ERROR&&Ki.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw Gl(t,...e)}function Mt(t,...e){return Gl(t,...e)}function Bl(t,e,n){const r=Object.assign(Object.assign({},TT()),{[e]:n});return new qs("auth","Firebase",r).create(e,{appName:t.name})}function hn(t){return Bl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),Bl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _p.create(t,...e)}function re(t,e,...n){if(!t)throw Gl(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vi(e),new Error(e)}function _n(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ST(){return qu()==="http:"||qu()==="https:"}function qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ST()||SE()||"connection"in navigator)?navigator.onLine:!0}function RT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=wE()||PE()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kT=new ni(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return vp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return AE()||(c.referrerPolicy="no-referrer"),yp.fetch()(await Ep(t,t.config.apiHost,n,a),c)})}async function vp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CT),e);try{const s=new LT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw di(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw di(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw di(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bl(t,u,c);Pt(t,u)}}catch(s){if(s instanceof vn)throw s;Pt(t,"network-request-failed",{message:String(s)})}}async function ri(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&Pt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ep(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ql(t.config,s):`${t.config.apiScheme}://${s}`;return OT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function NT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),kT.get())})}}function di(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mt(t,e,r);return s.customData._tokenResponse=n,s}function Ku(t){return t!==void 0&&t.enterprise!==void 0}class DT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MT(t,e){return $n(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function zi(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VT(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Kl(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_s(Qo(s.auth_time)),issuedAtTime:_s(Qo(s.iat)),expirationTime:_s(Qo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qo(t){return Number(t)*1e3}function Kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rh(n);return s?JSON.parse(s):(vi("Failed to decode base64 JWT payload"),null)}catch(s){return vi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zu(t){const e=Kl(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&xT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ds(t,zi(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bp(i.providerUserInfo):[],a=jT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function $T(t){const e=He(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bp(t){return t.map(e=>{var{providerId:n}=e,r=Hl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e){const n=await vp(t,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ep(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HT(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=zu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cr;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VT(this,e)}reload(){return $T(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Ds(this,FT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(c=n.createdAt)!==null&&c!==void 0?c:void 0,W=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:P,isAnonymous:x,providerData:D,stsTokenManager:_}=n;re(S&&_,e,"internal-error");const h=Cr.fromJSON(this.name,_);re(typeof S=="string",e,"internal-error"),In(f,e.name),In(d,e.name),re(typeof P=="boolean",e,"internal-error"),re(typeof x=="boolean",e,"internal-error"),In(y,e.name),In(R,e.name),In(O,e.name),In(L,e.name),In(V,e.name),In(W,e.name);const m=new kt({uid:S,auth:e,email:d,emailVerified:P,displayName:f,isAnonymous:x,photoURL:R,phoneNumber:y,tenantId:O,stsTokenManager:h,createdAt:V,lastLoginAt:W});return D&&Array.isArray(D)&&(m.providerData=D.map(T=>Object.assign({},T))),L&&(m._redirectEventId=L),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cr;s.updateFromServerResponse(n);const i=new kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yi(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Cr;a.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function cn(t){_n(t instanceof Function,"Expected a class definition");let e=Yu.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ip.type="NONE";const Ju=Ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e,n){return`firebase:${t}:${e}:${n}`}class Or{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ei(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ei("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zi(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Or(cn(Ju),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||cn(Ju);const o=Ei(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let f;if(typeof u=="string"){const d=await zi(e,{idToken:u}).catch(()=>{});if(!d)break;f=await kt._fromGetAccountInfoResponse(e,d,u)}else f=kt._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Or(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Or(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rp(e))return"Blackberry";if(Cp(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Pp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tp(t=at()){return/firefox\//i.test(t)}function wp(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(t=at()){return/crios\//i.test(t)}function Sp(t=at()){return/iemobile/i.test(t)}function Pp(t=at()){return/android/i.test(t)}function Rp(t=at()){return/blackberry/i.test(t)}function Cp(t=at()){return/webos/i.test(t)}function zl(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BT(t=at()){var e;return zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return RE()&&document.documentMode===10}function Op(t=at()){return zl(t)||Pp(t)||Cp(t)||Rp(t)||/windows phone/i.test(t)||Sp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e=[]){let n;switch(t){case"Browser":n=Xu(at());break;case"Worker":n=`${Xu(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=6;class YT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new qT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zi(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(hn(this));const n=e?He(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KT(this),n=new YT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jn(t){return He(t)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ME(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XT(t){Io=t}function Np(t){return Io.loadJS(t)}function QT(){return Io.recaptchaEnterpriseScript}function ZT(){return Io.gapiScript}function ew(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tw{constructor(){this.enterprise=new nw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rw="recaptcha-enterprise",Lp="NO_RECAPTCHA";class sw{constructor(e){this.type=rw,this.auth=jn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{MT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new DT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ku(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ku(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=QT();l.length!==0&&(l+=a),Np(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zu(t,e,n,r=!1,s=!1){const i=new sw(t);let o;if(s)o=Lp;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Va(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zu(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e){const n=Tl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sr(i,e??{}))return s;Pt(s,"already-initialized")}return n.initialize({options:e})}function ow(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aw(t,e,n){const r=jn(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Dp(e),{host:o,port:a}=lw(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(sr(c,r.config.emulator)&&sr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,cw()}function Dp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lw(t){const e=Dp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ef(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ef(o)}}}function ef(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function uw(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t,e){return ri(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e){return ri(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function hw(t,e){return ri(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Yl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Va(e,n,"signInWithPassword",fw);case"emailLink":return dw(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Va(e,r,"signUpPassword",uw);case"emailLink":return hw(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t,e){return ri(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="http://localhost";class cr extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kr(e,n)}buildRequest(){const e={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gw(t){const e=ns(rs(t)).link,n=e?ns(rs(e)).deep_link_id:null,r=ns(rs(t)).deep_link_id;return(r?ns(rs(r)).link:null)||r||n||e||t}class Jl{constructor(e){var n,r,s,i,o,a;const l=ns(rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=mw((s=l.mode)!==null&&s!==void 0?s:null);re(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gw(e);try{return new Jl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jl.parseLink(n);return re(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends si{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends si{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends si{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t,e){return ri(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),o=tf(r);return new ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=tf(r);return new ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ji(e,n,r,s)}}function Mp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(t,i,e,r):i})}async function yw(t,e,n=!1){const r=await Ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(hn(r));const s="reauthenticate";try{const i=await Ds(t,Mp(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Kl(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),ur._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e,n=!1){if(yt(t.app))return Promise.reject(hn(t));const r="signIn",s=await Mp(t,r,e),i=await ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Vp(t,e){return Fp(jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t){const e=jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ew(t,e,n){if(yt(t.app))return Promise.reject(hn(t));const r=jn(t),o=await Va(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_w).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xp(t),l}),a=await ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bw(t,e,n){return yt(t.app)?Promise.reject(hn(t)):Vp(He(t),zr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xp(t),r})}function Iw(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function Tw(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function ww(t){return He(t).signOut()}const Xi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1e3,Sw=10;class $p extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$p.type="LOCAL";const Pw=$p;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jp.type="SESSION";const Wp=jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new To(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Rw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ql("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function Ow(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function kw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lw(){return Hp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="firebaseLocalStorageDb",Dw=1,Qi="firebaseLocalStorage",Gp="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wo(t,e){return t.transaction([Qi],e?"readwrite":"readonly").objectStore(Qi)}function Mw(){const t=indexedDB.deleteDatabase(Bp);return new ii(t).toPromise()}function xa(){const t=indexedDB.open(Bp,Dw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qi,{keyPath:Gp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qi)?e(r):(r.close(),await Mw(),e(await xa()))})})}async function nf(t,e,n){const r=wo(t,!0).put({[Gp]:e,value:n});return new ii(r).toPromise()}async function Fw(t,e){const n=wo(t,!1).get(e),r=await new ii(n).toPromise();return r===void 0?null:r.value}function rf(t,e){const n=wo(t,!0).delete(e);return new ii(n).toPromise()}const Vw=800,xw=3;class qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(Lw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await nf(e,Xi,"1"),await rf(e,Xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wo(s,!1).getAll();return new ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qp.type="LOCAL";const Uw=qp;new ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){return e?cn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $w(t){return Fp(t.auth,new Zl(t),t.bypassAuthState)}function jw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),vw(n,new Zl(t),t.bypassAuthState)}async function Ww(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),yw(n,new Zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $w;case"linkViaPopup":case"linkViaRedirect":return Ww;case"reauthViaPopup":case"reauthViaRedirect":return jw;default:Pt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new ni(2e3,1e4);async function Bw(t,e,n){if(yt(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=jn(t);AT(t,e,Xl);const s=Kp(r,n);return new Zn(r,"signInViaPopup",e,s).executeNotNull()}class Zn extends zp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hw.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="pendingRedirect",bi=new Map;class qw extends zp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const r=await Kw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kw(t,e){const n=Jw(e),r=Yw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zw(t,e){bi.set(t._key(),e)}function Yw(t){return cn(t._redirectPersistence)}function Jw(t){return Ei(Gw,t.config.apiKey,t.name)}async function Xw(t,e,n=!1){if(yt(t.app))return Promise.reject(hn(t));const r=jn(t),s=Kp(r,e),o=await new qw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*60*1e3;class Zw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rA=/^https?/;async function sA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tA(t);for(const n of e)try{if(iA(n))return}catch{}Pt(t,"unauthorized-domain")}function iA(t){const e=Ma(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rA.test(n))return!1;if(nA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new ni(3e4,6e4);function of(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aA(t){return new Promise((e,n)=>{var r,s,i;function o(){of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{of(),n(Mt(t,"network-request-failed"))},timeout:oA.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=ew("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},Np(`${ZT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function lA(t){return Ii=Ii||aA(t),Ii}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new ni(5e3,15e3),uA="__/auth/iframe",fA="emulator/auth/iframe",dA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ql(e,fA):`https://${t.config.authDomain}/${uA}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=hA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ks(r).slice(1)}`}async function mA(t){const e=await lA(t),n=Yt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:pA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},cA.get());function l(){Yt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_A=500,yA=600,vA="_blank",EA="http://localhost";class af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bA(t,e,n,r=_A,s=yA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gA),{width:r.toString(),height:s.toString(),top:i,left:o}),c=at().toLowerCase();n&&(a=Ap(c)?vA:n),Tp(c)&&(e=e||EA,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[y,R])=>`${d}${y}=${R},`,"");if(BT(c)&&a!=="_self")return IA(e||"",a),new af(null);const f=window.open(e||"",a,u);re(f,t,"popup-blocked");try{f.focus()}catch{}return new af(f)}function IA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="__/auth/handler",wA="emulator/auth/handler",AA=encodeURIComponent("fac");async function lf(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Xl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof si){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${AA}=${encodeURIComponent(l)}`:"";return`${SA(t)}?${Ks(a).slice(1)}${c}`}function SA({config:t}){return t.emulator?ql(t,wA):`https://${t.authDomain}/${TA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class PA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=Xw,this._overrideRedirectResult=zw}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lf(e,n,r,Ma(),s);return bA(e,o,Ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lf(e,n,r,Ma(),s);return Ow(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mA(e),r=new Zw(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zo,{type:Zo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zo];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Op()||wp()||zl()}}const RA=PA;var cf="@firebase/auth",uf="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kA(t){Fr(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(t)},c=new JT(r,s,i,l);return ow(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new ir("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(r=>new CA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(cf,uf,OA(t)),Mn(cf,uf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=5*60,LA=kh("authIdTokenMaxAge")||NA;let ff=null;const DA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LA)return;const s=n==null?void 0:n.token;ff!==s&&(ff=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function MA(t=Mh()){const e=Tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iw(t,{popupRedirectResolver:RA,persistence:[Uw,Pw,Wp]}),r=kh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=DA(i.toString());Tw(n,o,()=>o(n.currentUser)),Iw(n,a=>o(a))}}const s=Ch("auth");return s&&aw(n,`http://${s}`),n}function FA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kA("Browser");const VA={apiKey:"AIzaSyD9Wpov8NGdnkpXX9oc9vMKsKn1hVa5GBY",authDomain:"les-16-t-1.firebaseapp.com",projectId:"les-16-t-1",storageBucket:"les-16-t-1.firebasestorage.app",messagingSenderId:"88096710297",appId:"1:88096710297:web:5eeaa0ba923648295b6208"},Jp=Dh(VA),xA=nT(Jp),Zr=MA(Jp);class Xp{constructor(e){this.dbCollection=sT(xA,`/${e}`)}getItemFromSnap(e){return{id:e.id,...e.data()}}getListFromSnapshot(e){const n=[];return e.docs.forEach(r=>{n.push(this.getItemFromSnap(r))}),n}getQueryOptions(e,n){const r=[];if(n&&r.push(n),e!=null&&e.orderBy&&r.push(pT(e.orderBy,e.orderType??"asc")),e!=null&&e.page){const s=(e==null?void 0:e.limit)??5;r.push(mT(e.page*s)),r.push(ju(s))}else e!=null&&e.limit&&r.push(ju(e==null?void 0:e.limit));return r}loadItemsList(e){const n=this.getQueryOptions(e);return new Promise((r,s)=>{Gu(Uu(this.dbCollection,...n)).then(i=>{r(this.getListFromSnapshot(i))}).catch(i=>{s(i)})})}loadItemById(e){return new Promise((n,r)=>{Bu(ss(this.dbCollection,e)).then(s=>{if(s.exists())n(this.getItemFromSnap(s));else throw new Error("Items not exists")}).catch(s=>{r(s)})})}addItem(e){return new Promise((n,r)=>{IT(this.dbCollection,e).then(()=>{n(!0)}).catch(s=>{r(s)})})}deleteItem(e){return new Promise((n,r)=>{bT(ss(this.dbCollection,e)).then(()=>{n(!0)}).catch(s=>{r(s)})})}updateItem(e,n){return new Promise((r,s)=>{const i=ss(this.dbCollection,e);ET(i,n).then(()=>{r(!0)}).catch(o=>{s(o)})})}getItemById(e){return new Promise((n,r)=>{const s=ss(this.dbCollection,e);Bu(s).then(i=>{i.exists()?n(i.data()):n({})}).catch(i=>{r(i)})})}loadFilteredData({firstFieldTitle:e,firstCompareOperator:n,firstValueToCompare:r,secondFieldTitle:s,secondCompareOperator:i,secondValueToCompare:o},a){const l=hT($u(e,n,r),$u(s,i,o)),c=this.getQueryOptions(a,l),u=Uu(this.dbCollection,...c);return new Promise((f,d)=>{Gu(u).then(y=>{f(this.getListFromSnapshot(y))}).catch(y=>{d(y)})})}}function UA(t){const e=new Xp(t);return{namespaced:!0,state:()=>({[t]:[],currentItem:null,loading:!1,error:null}),getters:{isLoading:n=>n.loading,hasError:n=>n.error,getItemsList:n=>n[t],getItemById:n=>r=>n[t].find(s=>s.id==r),getCurrentItem:({currentItem:n})=>n},mutations:{setItemsList(n,r){n[t]=r},setCurrentItem(n,r){n.currentItem=r},addItem(n,r){n[t].push(r)},deleteItem(n,r){n[t]=n[t].filter(s=>s.id!==r)},setLoading(n,r){n.loading=r},setError(n,r){n.error=r}},actions:{loadList({commit:n},r){n("setError",null),n("setLoading",!0),e.loadItemsList(r).then(s=>{n("setItemsList",s)}).catch(s=>{n("setError",s)}).finally(()=>{n("setLoading",!1)})},addItem({commit:n,dispatch:r},s){n("setError",null),n("setLoading",!0),e.addItem(s).then(()=>{r("loadList")}).catch(i=>{n("setError",i)}).finally(()=>{n("setLoading",!1)})},deleteItem({commit:n,dispatch:r},s){n("setError",null),n("setLoading",!0),e.deleteItem(s).then(()=>{r("loadList")}).catch(i=>{n("setError",i)}).finally(()=>{n("setLoading",!1)})},updateItem({commit:n,dispatch:r},{itemId:s,data:i}){n("setError",null),n("setLoading",!0),e.updateItem(s,i).then(()=>{r("loadList")}).catch(o=>{n("setError",o)}).finally(()=>{n("setLoading",!1)})},loadItemDataById({commit:n},r){n("setError",null),n("setLoading",!0),n("setCurrentItem",null),e.loadItemById(r).then(s=>{n("setCurrentItem",s)}).catch(s=>{n("setError",s)}).finally(()=>{n("setLoading",!1)})},loadFilteredData({commit:n},{firstFieldTitle:r,firstCompareOperator:s,firstValueToCompare:i,secondFieldTitle:o,secondCompareOperator:a,secondValueToCompare:l,options:c}){n("setError",null),n("setLoading",!0),e.loadFilteredData({firstFieldTitle:r,firstCompareOperator:s,firstValueToCompare:i,secondFieldTitle:o,secondCompareOperator:a,secondValueToCompare:l},c).then(u=>{n("setItemsList",u)}).catch(u=>{n("setError",u)}).finally(()=>{n("setLoading",!1)})}}}}const $A={namespaced:!0,state:{user:null,loading:!1,error:null},getters:{getUser:t=>t.user},mutations:{setUser(t,e){t.user=e},setLoading(t,e){t.loading=e},setError(t,e){t.error=e}},actions:{setUser({commit:t},e){t("setUser",e)},async saveLoginUserData({commit:t,dispatch:e},n){const r=n==null?void 0:n.user;t("setUser",r);let s=Ct.credentialFromResult(n);s&&s.idToken&&localStorage.setItem("authCredentialGoogle",JSON.stringify({idToken:s.idToken})),e("users/loadUserPermissions",r.uid,{root:!0})},loginWithGoogle({commit:t,dispatch:e}){const n=new Ct;Bw(Zr,n).then(r=>{e("saveLoginUserData",r)}).catch(r=>{t("setError",r)})},registerWithEmail({commit:t,dispatch:e},{email:n,password:r}){return t("setLoading",!0),Ew(Zr,n,r).then(s=>{e("saveLoginUserData",s)}).catch(s=>{let i="";switch(s.code){case"auth/email-already-in-use":i="Такий email вже зареєстровано";break;case"auth/invalid-email":i="Неправильний формат email";break;case"auth/weak-password":i="Пароль повинен містити щонайменше 6 символів";break;default:i="Сталася помилка при реєстрації"}throw t("setError",i),new Error(i)}).finally(()=>{t("setLoading",!1)})},loginWithEmail({commit:t,dispatch:e},{email:n,password:r}){return t("setLoading",!0),bw(Zr,n,r).then(s=>{e("saveLoginUserData",s)}).catch(s=>{let i="";switch(s.code){case"auth/user-not-found":i="Користувача з таким email не знайдено";break;case"auth/wrong-password":i="Неправильний пароль";break;case"auth/invalid-email":i="Неправильний формат email";break;default:i="Сталася помилка при вході"}throw t("setError",i),new Error(i)}).finally(()=>{t("setLoading",!1)})},async loginWithCredential({commit:t,dispatch:e}){return new Promise((n,r)=>{let s=localStorage.getItem("authCredentialGoogle");if(s)try{const i=JSON.parse(s);if(!i.idToken)throw new Error("Немає idToken");const o=Ct.credential(i.idToken);Vp(Zr,o).then(a=>{e("saveLoginUserData",a),n(a)}).catch(a=>{t("setError",a.message),r(!1)})}catch(i){console.warn("Invalid credential data in localStorage:",i),localStorage.removeItem("authCredentialGoogle"),n(!1)}else n(!1)})},logout({commit:t,dispatch:e}){ww(Zr).then(()=>{localStorage.removeItem("authCredentialGoogle"),localStorage.removeItem("authCredentialEmail"),t("setUser",null),e("users/clearPermissions",null,{root:!0})}).catch(n=>{t("setError",n)})}}},jA=new Xp("users"),WA={namespaced:!0,state:()=>({permissions:{},loading:!1,error:null}),getters:{isLoading:t=>t.loading,hasError:t=>t.error,userPermissions:t=>t.permissions},mutations:{setPermissions(t,e){t.permissions=e},setLoading(t,e){t.loading=e},setError(t,e){t.error=e}},actions:{loadUserPermissions({commit:t,rootGetters:e},n){n??(n=e["auth/getUser"].uid),jA.getItemById(n).then(r=>{t("setPermissions",r)})},clearPermissions({commit:t}){t("setPermissions",{})}}},Ua=fy({state:{counter:0},getters:{getCounter:({counter:t})=>t},mutations:{setCounter(t,e){e?t.counter=0:t.counter++}},actions:{setCounter({commit:t},e){t("setCounter",e)}},modules:{auth:$A,users:WA,productsList:UA("productsList")}}),HA={name:"EditView",props:{id:{type:String,required:!1}},data(){return{productData:{seller:"Rozetka"}}},computed:{...Ot("productsList",{currentProduct:"getCurrentItem"})},methods:{...pn("productsList",{addProduct:"addItem",updateProductData:"updateItem",loadProductData:"loadItemDataById"}),onSave(){this.productData&&(this.id?this.updateProductData({itemId:this.id,data:this.productData}):this.addProduct(this.productData),this.$router.push({name:"home"}))},onClear(){this.productData={seller:"Rozetka"}},onCancel(){this.$router.push({name:"home"})}},watch:{currentProduct:{handler(t){t&&(this.productData={brand:t.brand,name:t.name,price:t.price,seller:t.seller,image:t.image})}}},created(){this.id&&this.loadProductData(this.id)}},BA={class:"edit"},GA={key:0},qA={key:1},KA={class:"mgb-20"},zA={value:"Rozetka",selected:""},YA={value:"Інші продавці"},JA={class:"form-action"};function XA(t,e,n,r,s,i){var o;return ve(),we("div",BA,[n.id?(ve(),we("h2",GA,oe(t.$t("titles.edit"))+": "+oe((o=t.currentProduct)==null?void 0:o.name),1)):(ve(),we("h2",qA,oe(t.$t("titles.editNew")),1)),z("label",null,[z("span",null,oe(t.$t("form.brand")),1),on(z("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.productData.brand=a)},null,512),[[br,s.productData.brand,void 0,{lazy:!0}]])]),z("label",null,[z("span",null,oe(t.$t("form.title")),1),on(z("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>s.productData.name=a)},null,512),[[br,s.productData.name,void 0,{lazy:!0}]])]),z("label",null,[z("span",null,oe(t.$t("form.price")),1),on(z("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>s.productData.price=a)},null,512),[[br,s.productData.price,void 0,{lazy:!0}]])]),z("label",null,[z("span",null,oe(t.$t("form.photo")),1),on(z("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>s.productData.image=a)},null,512),[[br,s.productData.image,void 0,{lazy:!0}]])]),z("label",KA,[z("span",null,oe(t.$t("form.seller")),1),on(z("select",{"onUpdate:modelValue":e[4]||(e[4]=a=>s.productData.seller=a)},[z("option",zA,oe(t.$t("form.rozetka")),1),z("option",YA,oe(t.$t("form.other")),1)],512),[[M_,s.productData.seller]])]),z("div",JA,[z("button",{onClick:e[5]||(e[5]=(...a)=>i.onSave&&i.onSave(...a))},oe(t.$t("buttons.save")),1),z("button",{onClick:e[6]||(e[6]=(...a)=>i.onCancel&&i.onCancel(...a))},oe(t.$t("buttons.cancel")),1),z("button",{onClick:e[7]||(e[7]=(...a)=>i.onClear&&i.onClear(...a))},oe(t.$t("buttons.clear")),1)])])}const QA=hr(HA,[["render",XA]]),ZA={name:"ContactsView"},e0={class:"container"};function t0(t,e,n,r,s,i){return ve(),we("div",e0,[z("h1",null,oe(t.$t("titles.contactsTitle"))+":",1),e[0]||(e[0]=z("div",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid porro asperiores iure exercitationem doloremque praesentium aspernatur nemo, quas animi nesciunt magnam eos mollitia corrupti facere quis. Nulla aliquam odit facilis voluptas soluta hic? Rem consectetur incidunt iure veniam soluta possimus, sunt earum temporibus, vitae, sit itaque et sequi praesentium magnam eaque perspiciatis ipsa esse. Modi necessitatibus reprehenderit commodi sint facilis iusto. Dolorum enim blanditiis sequi iusto quos? Officiis facilis tempore neque harum. Sapiente deserunt numquam enim! Excepturi recusandae distinctio dolor magnam, ad id, corrupti consectetur saepe omnis corporis laboriosam unde harum exercitationem, laudantium quae facilis nisi rerum enim. Officia! ",-1))])}const n0=hr(ZA,[["render",t0]]),r0=[{path:"/",name:"home",component:oE,meta:{requiredAuth:!1}},{path:"/edit/:id?",name:"edit",component:QA,props:!0,meta:{requiredAuth:!0}},{path:"/login",name:"login",component:dE,meta:{requiredAuth:!1}},{path:"/contacts",name:"contacts",component:n0,meta:{requiredAuth:!1}}],Qp=Pv({history:nv(),routes:r0});Qp.beforeEach(async t=>{var e;if((e=t.meta)!=null&&e.requiredAuth){let n=Ua.state.auth.user;if(n||(n=await Ua.dispatch("auth/loginWithCredential")),!n)return{name:"login",query:{redirect:t.fullPath}}}});/*!
  * shared v9.14.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Zi=typeof window<"u",Wn=(t,e=!1)=>e?Symbol.for(t):Symbol(t),s0=(t,e,n)=>i0({l:t,k:e,s:n}),i0=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),De=t=>typeof t=="number"&&isFinite(t),o0=t=>em(t)==="[object Date]",Fn=t=>em(t)==="[object RegExp]",Ao=t=>se(t)&&Object.keys(t).length===0,Ye=Object.assign,a0=Object.create,Ee=(t=null)=>a0(t);let df;const an=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Ee());function hf(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const l0=Object.prototype.hasOwnProperty;function Nt(t,e){return l0.call(t,e)}const Se=Array.isArray,Te=t=>typeof t=="function",Y=t=>typeof t=="string",ae=t=>typeof t=="boolean",he=t=>t!==null&&typeof t=="object",c0=t=>he(t)&&Te(t.then)&&Te(t.catch),Zp=Object.prototype.toString,em=t=>Zp.call(t),se=t=>{if(!he(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},u0=t=>t==null?"":Se(t)||se(t)&&t.toString===Zp?JSON.stringify(t,null,2):String(t);function f0(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function So(t){let e=t;return()=>++e}function d0(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const hi=t=>!he(t)||Se(t);function Ti(t,e){if(hi(t)||hi(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(he(r[i])&&!he(s[i])&&(s[i]=Array.isArray(r[i])?[]:Ee()),hi(s[i])||hi(r[i])?s[i]=r[i]:n.push({src:r[i],des:s[i]}))})}}/*!
  * message-compiler v9.14.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function h0(t,e,n){return{line:t,column:e,offset:n}}function eo(t,e,n){return{start:t,end:e}}const p0=/\{([0-9a-zA-Z]+)\}/g;function tm(t,...e){return e.length===1&&m0(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(p0,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const nm=Object.assign,pf=t=>typeof t=="string",m0=t=>t!==null&&typeof t=="object";function rm(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}const ec={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},g0={[ec.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function _0(t,e,...n){const r=tm(g0[t],...n||[]),s={message:String(r),code:t};return e&&(s.location=e),s}const ne={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},y0={[ne.EXPECTED_TOKEN]:"Expected token: '{0}'",[ne.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[ne.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[ne.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[ne.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[ne.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[ne.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[ne.EMPTY_PLACEHOLDER]:"Empty placeholder",[ne.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[ne.INVALID_LINKED_FORMAT]:"Invalid linked format",[ne.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[ne.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[ne.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[ne.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[ne.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[ne.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Yr(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=tm((s||y0)[t]||"",...i||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function v0(t){throw t}const en=" ",E0="\r",rt=`
`,b0="\u2028",I0="\u2029";function T0(t){const e=t;let n=0,r=1,s=1,i=0;const o=_=>e[_]===E0&&e[_+1]===rt,a=_=>e[_]===rt,l=_=>e[_]===I0,c=_=>e[_]===b0,u=_=>o(_)||a(_)||l(_)||c(_),f=()=>n,d=()=>r,y=()=>s,R=()=>i,O=_=>o(_)||l(_)||c(_)?rt:e[_],L=()=>O(n),V=()=>O(n+i);function W(){return i=0,u(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function S(){return o(n+i)&&i++,i++,e[n+i]}function P(){n=0,r=1,s=1,i=0}function x(_=0){i=_}function D(){const _=n+i;for(;_!==n;)W();i=0}return{index:f,line:d,column:y,peekOffset:R,charAt:O,currentChar:L,currentPeek:V,next:W,peek:S,reset:P,resetPeek:x,skipToPeek:D}}const Tn=void 0,w0=".",mf="'",A0="tokenizer";function S0(t,e={}){const n=e.location!==!1,r=T0(t),s=()=>r.index(),i=()=>h0(r.line(),r.column(),r.index()),o=i(),a=s(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(p,g,k,...M){const K=c();if(g.column+=k,g.offset+=k,u){const H=n?eo(K.startLoc,g):null,C=Yr(p,H,{domain:A0,args:M});u(C)}}function d(p,g,k){p.endLoc=i(),p.currentType=g;const M={type:g};return n&&(M.loc=eo(p.startLoc,p.endLoc)),k!=null&&(M.value=k),M}const y=p=>d(p,14);function R(p,g){return p.currentChar()===g?(p.next(),g):(f(ne.EXPECTED_TOKEN,i(),0,g),"")}function O(p){let g="";for(;p.currentPeek()===en||p.currentPeek()===rt;)g+=p.currentPeek(),p.peek();return g}function L(p){const g=O(p);return p.skipToPeek(),g}function V(p){if(p===Tn)return!1;const g=p.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function W(p){if(p===Tn)return!1;const g=p.charCodeAt(0);return g>=48&&g<=57}function S(p,g){const{currentType:k}=g;if(k!==2)return!1;O(p);const M=V(p.currentPeek());return p.resetPeek(),M}function P(p,g){const{currentType:k}=g;if(k!==2)return!1;O(p);const M=p.currentPeek()==="-"?p.peek():p.currentPeek(),K=W(M);return p.resetPeek(),K}function x(p,g){const{currentType:k}=g;if(k!==2)return!1;O(p);const M=p.currentPeek()===mf;return p.resetPeek(),M}function D(p,g){const{currentType:k}=g;if(k!==8)return!1;O(p);const M=p.currentPeek()===".";return p.resetPeek(),M}function _(p,g){const{currentType:k}=g;if(k!==9)return!1;O(p);const M=V(p.currentPeek());return p.resetPeek(),M}function h(p,g){const{currentType:k}=g;if(!(k===8||k===12))return!1;O(p);const M=p.currentPeek()===":";return p.resetPeek(),M}function m(p,g){const{currentType:k}=g;if(k!==10)return!1;const M=()=>{const H=p.currentPeek();return H==="{"?V(p.peek()):H==="@"||H==="%"||H==="|"||H===":"||H==="."||H===en||!H?!1:H===rt?(p.peek(),M()):w(p,!1)},K=M();return p.resetPeek(),K}function T(p){O(p);const g=p.currentPeek()==="|";return p.resetPeek(),g}function A(p){const g=O(p),k=p.currentPeek()==="%"&&p.peek()==="{";return p.resetPeek(),{isModulo:k,hasSpace:g.length>0}}function w(p,g=!0){const k=(K=!1,H="",C=!1)=>{const F=p.currentPeek();return F==="{"?H==="%"?!1:K:F==="@"||!F?H==="%"?!0:K:F==="%"?(p.peek(),k(K,"%",!0)):F==="|"?H==="%"||C?!0:!(H===en||H===rt):F===en?(p.peek(),k(!0,en,C)):F===rt?(p.peek(),k(!0,rt,C)):!0},M=k();return g&&p.resetPeek(),M}function b(p,g){const k=p.currentChar();return k===Tn?Tn:g(k)?(p.next(),k):null}function Ve(p){const g=p.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36}function Ze(p){return b(p,Ve)}function ye(p){const g=p.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36||g===45}function ue(p){return b(p,ye)}function le(p){const g=p.charCodeAt(0);return g>=48&&g<=57}function et(p){return b(p,le)}function lt(p){const g=p.charCodeAt(0);return g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102}function Oe(p){return b(p,lt)}function ke(p){let g="",k="";for(;g=et(p);)k+=g;return k}function Tt(p){L(p);const g=p.currentChar();return g!=="%"&&f(ne.EXPECTED_TOKEN,i(),0,g),p.next(),"%"}function pt(p){let g="";for(;;){const k=p.currentChar();if(k==="{"||k==="}"||k==="@"||k==="|"||!k)break;if(k==="%")if(w(p))g+=k,p.next();else break;else if(k===en||k===rt)if(w(p))g+=k,p.next();else{if(T(p))break;g+=k,p.next()}else g+=k,p.next()}return g}function Ut(p){L(p);let g="",k="";for(;g=ue(p);)k+=g;return p.currentChar()===Tn&&f(ne.UNTERMINATED_CLOSING_BRACE,i(),0),k}function $e(p){L(p);let g="";return p.currentChar()==="-"?(p.next(),g+=`-${ke(p)}`):g+=ke(p),p.currentChar()===Tn&&f(ne.UNTERMINATED_CLOSING_BRACE,i(),0),g}function U(p){return p!==mf&&p!==rt}function J(p){L(p),R(p,"'");let g="",k="";for(;g=b(p,U);)g==="\\"?k+=q(p):k+=g;const M=p.currentChar();return M===rt||M===Tn?(f(ne.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),M===rt&&(p.next(),R(p,"'")),k):(R(p,"'"),k)}function q(p){const g=p.currentChar();switch(g){case"\\":case"'":return p.next(),`\\${g}`;case"u":return X(p,g,4);case"U":return X(p,g,6);default:return f(ne.UNKNOWN_ESCAPE_SEQUENCE,i(),0,g),""}}function X(p,g,k){R(p,g);let M="";for(let K=0;K<k;K++){const H=Oe(p);if(!H){f(ne.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${g}${M}${p.currentChar()}`);break}M+=H}return`\\${g}${M}`}function de(p){return p!=="{"&&p!=="}"&&p!==en&&p!==rt}function E(p){L(p);let g="",k="";for(;g=b(p,de);)k+=g;return k}function I(p){let g="",k="";for(;g=Ze(p);)k+=g;return k}function v(p){const g=k=>{const M=p.currentChar();return M==="{"||M==="%"||M==="@"||M==="|"||M==="("||M===")"||!M||M===en?k:(k+=M,p.next(),g(k))};return g("")}function N(p){L(p);const g=R(p,"|");return L(p),g}function j(p,g){let k=null;switch(p.currentChar()){case"{":return g.braceNest>=1&&f(ne.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),p.next(),k=d(g,2,"{"),L(p),g.braceNest++,k;case"}":return g.braceNest>0&&g.currentType===2&&f(ne.EMPTY_PLACEHOLDER,i(),0),p.next(),k=d(g,3,"}"),g.braceNest--,g.braceNest>0&&L(p),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),k;case"@":return g.braceNest>0&&f(ne.UNTERMINATED_CLOSING_BRACE,i(),0),k=$(p,g)||y(g),g.braceNest=0,k;default:{let K=!0,H=!0,C=!0;if(T(p))return g.braceNest>0&&f(ne.UNTERMINATED_CLOSING_BRACE,i(),0),k=d(g,1,N(p)),g.braceNest=0,g.inLinked=!1,k;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return f(ne.UNTERMINATED_CLOSING_BRACE,i(),0),g.braceNest=0,G(p,g);if(K=S(p,g))return k=d(g,5,Ut(p)),L(p),k;if(H=P(p,g))return k=d(g,6,$e(p)),L(p),k;if(C=x(p,g))return k=d(g,7,J(p)),L(p),k;if(!K&&!H&&!C)return k=d(g,13,E(p)),f(ne.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,k.value),L(p),k;break}}return k}function $(p,g){const{currentType:k}=g;let M=null;const K=p.currentChar();switch((k===8||k===9||k===12||k===10)&&(K===rt||K===en)&&f(ne.INVALID_LINKED_FORMAT,i(),0),K){case"@":return p.next(),M=d(g,8,"@"),g.inLinked=!0,M;case".":return L(p),p.next(),d(g,9,".");case":":return L(p),p.next(),d(g,10,":");default:return T(p)?(M=d(g,1,N(p)),g.braceNest=0,g.inLinked=!1,M):D(p,g)||h(p,g)?(L(p),$(p,g)):_(p,g)?(L(p),d(g,12,I(p))):m(p,g)?(L(p),K==="{"?j(p,g)||M:d(g,11,v(p))):(k===8&&f(ne.INVALID_LINKED_FORMAT,i(),0),g.braceNest=0,g.inLinked=!1,G(p,g))}}function G(p,g){let k={type:14};if(g.braceNest>0)return j(p,g)||y(g);if(g.inLinked)return $(p,g)||y(g);switch(p.currentChar()){case"{":return j(p,g)||y(g);case"}":return f(ne.UNBALANCED_CLOSING_BRACE,i(),0),p.next(),d(g,3,"}");case"@":return $(p,g)||y(g);default:{if(T(p))return k=d(g,1,N(p)),g.braceNest=0,g.inLinked=!1,k;const{isModulo:K,hasSpace:H}=A(p);if(K)return H?d(g,0,pt(p)):d(g,4,Tt(p));if(w(p))return d(g,0,pt(p));break}}return k}function B(){const{currentType:p,offset:g,startLoc:k,endLoc:M}=l;return l.lastType=p,l.lastOffset=g,l.lastStartLoc=k,l.lastEndLoc=M,l.offset=s(),l.startLoc=i(),r.currentChar()===Tn?d(l,14):G(r,l)}return{nextToken:B,currentOffset:s,currentPosition:i,context:c}}const P0="parser",R0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function C0(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function O0(t={}){const e=t.location!==!1,{onError:n,onWarn:r}=t;function s(S,P,x,D,..._){const h=S.currentPosition();if(h.offset+=D,h.column+=D,n){const m=e?eo(x,h):null,T=Yr(P,m,{domain:P0,args:_});n(T)}}function i(S,P,x,D,..._){const h=S.currentPosition();if(h.offset+=D,h.column+=D,r){const m=e?eo(x,h):null;r(_0(P,m,_))}}function o(S,P,x){const D={type:S};return e&&(D.start=P,D.end=P,D.loc={start:x,end:x}),D}function a(S,P,x,D){e&&(S.end=P,S.loc&&(S.loc.end=x))}function l(S,P){const x=S.context(),D=o(3,x.offset,x.startLoc);return D.value=P,a(D,S.currentOffset(),S.currentPosition()),D}function c(S,P){const x=S.context(),{lastOffset:D,lastStartLoc:_}=x,h=o(5,D,_);return h.index=parseInt(P,10),S.nextToken(),a(h,S.currentOffset(),S.currentPosition()),h}function u(S,P,x){const D=S.context(),{lastOffset:_,lastStartLoc:h}=D,m=o(4,_,h);return m.key=P,x===!0&&(m.modulo=!0),S.nextToken(),a(m,S.currentOffset(),S.currentPosition()),m}function f(S,P){const x=S.context(),{lastOffset:D,lastStartLoc:_}=x,h=o(9,D,_);return h.value=P.replace(R0,C0),S.nextToken(),a(h,S.currentOffset(),S.currentPosition()),h}function d(S){const P=S.nextToken(),x=S.context(),{lastOffset:D,lastStartLoc:_}=x,h=o(8,D,_);return P.type!==12?(s(S,ne.UNEXPECTED_EMPTY_LINKED_MODIFIER,x.lastStartLoc,0),h.value="",a(h,D,_),{nextConsumeToken:P,node:h}):(P.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,Rt(P)),h.value=P.value||"",a(h,S.currentOffset(),S.currentPosition()),{node:h})}function y(S,P){const x=S.context(),D=o(7,x.offset,x.startLoc);return D.value=P,a(D,S.currentOffset(),S.currentPosition()),D}function R(S){const P=S.context(),x=o(6,P.offset,P.startLoc);let D=S.nextToken();if(D.type===9){const _=d(S);x.modifier=_.node,D=_.nextConsumeToken||S.nextToken()}switch(D.type!==10&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(D)),D=S.nextToken(),D.type===2&&(D=S.nextToken()),D.type){case 11:D.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(D)),x.key=y(S,D.value||"");break;case 5:D.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(D)),x.key=u(S,D.value||"");break;case 6:D.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(D)),x.key=c(S,D.value||"");break;case 7:D.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(D)),x.key=f(S,D.value||"");break;default:{s(S,ne.UNEXPECTED_EMPTY_LINKED_KEY,P.lastStartLoc,0);const _=S.context(),h=o(7,_.offset,_.startLoc);return h.value="",a(h,_.offset,_.startLoc),x.key=h,a(x,_.offset,_.startLoc),{nextConsumeToken:D,node:x}}}return a(x,S.currentOffset(),S.currentPosition()),{node:x}}function O(S){const P=S.context(),x=P.currentType===1?S.currentOffset():P.offset,D=P.currentType===1?P.endLoc:P.startLoc,_=o(2,x,D);_.items=[];let h=null,m=null;do{const w=h||S.nextToken();switch(h=null,w.type){case 0:w.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(w)),_.items.push(l(S,w.value||""));break;case 6:w.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(w)),_.items.push(c(S,w.value||""));break;case 4:m=!0;break;case 5:w.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(w)),_.items.push(u(S,w.value||"",!!m)),m&&(i(S,ec.USE_MODULO_SYNTAX,P.lastStartLoc,0,Rt(w)),m=null);break;case 7:w.value==null&&s(S,ne.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,Rt(w)),_.items.push(f(S,w.value||""));break;case 8:{const b=R(S);_.items.push(b.node),h=b.nextConsumeToken||null;break}}}while(P.currentType!==14&&P.currentType!==1);const T=P.currentType===1?P.lastOffset:S.currentOffset(),A=P.currentType===1?P.lastEndLoc:S.currentPosition();return a(_,T,A),_}function L(S,P,x,D){const _=S.context();let h=D.items.length===0;const m=o(1,P,x);m.cases=[],m.cases.push(D);do{const T=O(S);h||(h=T.items.length===0),m.cases.push(T)}while(_.currentType!==14);return h&&s(S,ne.MUST_HAVE_MESSAGES_IN_PLURAL,x,0),a(m,S.currentOffset(),S.currentPosition()),m}function V(S){const P=S.context(),{offset:x,startLoc:D}=P,_=O(S);return P.currentType===14?_:L(S,x,D,_)}function W(S){const P=S0(S,nm({},t)),x=P.context(),D=o(0,x.offset,x.startLoc);return e&&D.loc&&(D.loc.source=S),D.body=V(P),t.onCacheKey&&(D.cacheKey=t.onCacheKey(S)),x.currentType!==14&&s(P,ne.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,S[x.offset]||""),a(D,P.currentOffset(),P.currentPosition()),D}return{parse:W}}function Rt(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function k0(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function gf(t,e){for(let n=0;n<t.length;n++)tc(t[n],e)}function tc(t,e){switch(t.type){case 1:gf(t.cases,e),e.helper("plural");break;case 2:gf(t.items,e);break;case 6:{tc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function N0(t,e={}){const n=k0(t);n.helper("normalize"),t.body&&tc(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function L0(t){const e=t.body;return e.type===2?_f(e):e.cases.forEach(n=>_f(n)),t}function _f(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=rm(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const D0="minifier";function Er(t){switch(t.t=t.type,t.type){case 0:{const e=t;Er(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Er(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Er(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Er(e.key),e.k=e.key,delete e.key,e.modifier&&(Er(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Yr(ne.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:D0,args:[t.type]})}delete t.type}const M0="parser";function F0(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(O,L){o.code+=O}function c(O,L=!0){const V=L?r:"";l(s?V+"  ".repeat(O):V)}function u(O=!0){const L=++o.indentLevel;O&&c(L)}function f(O=!0){const L=--o.indentLevel;O&&c(L)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function V0(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),$r(t,e.key),e.modifier?(t.push(", "),$r(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function x0(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&($r(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function U0(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&($r(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function $0(t,e){e.body?$r(t,e.body):t.push("null")}function $r(t,e){const{helper:n}=t;switch(e.type){case 0:$0(t,e);break;case 1:U0(t,e);break;case 2:x0(t,e);break;case 6:V0(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Yr(ne.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:M0,args:[e.type]})}}const j0=(t,e={})=>{const n=pf(e.mode)?e.mode:"normal",r=pf(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=F0(t,{filename:r,breakLineCode:s,needIndent:i});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(i),o.length>0&&(a.push(`const { ${rm(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),$r(a,t),a.deindent(i),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function W0(t,e={}){const n=nm({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,a=O0(n).parse(t);return r?(i&&L0(a),s&&Er(a),{ast:a,code:""}):(N0(a,n),j0(a,n))}/*!
  * core-base v9.14.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function H0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(an().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(an().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(an().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Hn=[];Hn[0]={w:[0],i:[3,0],"[":[4],o:[7]};Hn[1]={w:[1],".":[2],"[":[4],o:[7]};Hn[2]={w:[2],i:[3,0],0:[3,0]};Hn[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Hn[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Hn[5]={"'":[4,0],o:8,l:[5,0]};Hn[6]={'"':[4,0],o:8,l:[6,0]};const B0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function G0(t){return B0.test(t)}function q0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function K0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function z0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:G0(e)?q0(e):"*"+e}function Y0(t){const e=[];let n=-1,r=0,s=0,i,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),s++},d[3]=()=>{if(s>0)s--,r=4,d[0]();else{if(s=0,o===void 0||(o=z0(o),o===!1))return!1;d[1]()}};function y(){const R=t[n+1];if(r===5&&R==="'"||r===6&&R==='"')return n++,a="\\"+R,d[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&y())){if(l=K0(i),f=Hn[r],c=f[l]||f.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=i,u()===!1))))return;if(r===7)return e}}const yf=new Map;function J0(t,e){return he(t)?t[e]:null}function X0(t,e){if(!he(t))return null;let n=yf.get(e);if(n||(n=Y0(e),n&&yf.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=s[n[i]];if(o===void 0||Te(s))return null;s=o,i++}return s}const Q0=t=>t,Z0=t=>"",eS="text",tS=t=>t.length===0?"":f0(t),nS=u0;function vf(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function rS(t){const e=De(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(De(t.named.count)||De(t.named.n))?De(t.named.count)?t.named.count:De(t.named.n)?t.named.n:e:e}function sS(t,e){e.count||(e.count=t),e.n||(e.n=t)}function iS(t={}){const e=t.locale,n=rS(t),r=he(t.pluralRules)&&Y(e)&&Te(t.pluralRules[e])?t.pluralRules[e]:vf,s=he(t.pluralRules)&&Y(e)&&Te(t.pluralRules[e])?vf:void 0,i=V=>V[r(n,V.length,s)],o=t.list||[],a=V=>o[V],l=t.named||Ee();De(t.pluralIndex)&&sS(n,l);const c=V=>l[V];function u(V){const W=Te(t.messages)?t.messages(V):he(t.messages)?t.messages[V]:!1;return W||(t.parent?t.parent.message(V):Z0)}const f=V=>t.modifiers?t.modifiers[V]:Q0,d=se(t.processor)&&Te(t.processor.normalize)?t.processor.normalize:tS,y=se(t.processor)&&Te(t.processor.interpolate)?t.processor.interpolate:nS,R=se(t.processor)&&Y(t.processor.type)?t.processor.type:eS,L={list:a,named:c,plural:i,linked:(V,...W)=>{const[S,P]=W;let x="text",D="";W.length===1?he(S)?(D=S.modifier||D,x=S.type||x):Y(S)&&(D=S||D):W.length===2&&(Y(S)&&(D=S||D),Y(P)&&(x=P||x));const _=u(V)(L),h=x==="vnode"&&Se(_)&&D?_[0]:_;return D?f(D)(h,x):h},message:u,type:R,interpolate:y,normalize:d,values:Ye(Ee(),o,l)};return L}let Fs=null;function oS(t){Fs=t}function aS(t,e,n){Fs&&Fs.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const lS=cS("function:translate");function cS(t){return e=>Fs&&Fs.emit(t,e)}const uS=ec.__EXTEND_POINT__,zn=So(uS),fS={FALLBACK_TO_TRANSLATE:zn(),CANNOT_FORMAT_NUMBER:zn(),FALLBACK_TO_NUMBER_FORMAT:zn(),CANNOT_FORMAT_DATE:zn(),FALLBACK_TO_DATE_FORMAT:zn(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:zn(),__EXTEND_POINT__:zn()},sm=ne.__EXTEND_POINT__,Yn=So(sm),Lt={INVALID_ARGUMENT:sm,INVALID_DATE_ARGUMENT:Yn(),INVALID_ISO_DATE_ARGUMENT:Yn(),NOT_SUPPORT_NON_STRING_MESSAGE:Yn(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Yn(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Yn(),NOT_SUPPORT_LOCALE_TYPE:Yn(),__EXTEND_POINT__:Yn()};function qt(t){return Yr(t,null,void 0)}function nc(t,e){return e.locale!=null?Ef(e.locale):Ef(t.locale)}let ea;function Ef(t){if(Y(t))return t;if(Te(t)){if(t.resolvedOnce&&ea!=null)return ea;if(t.constructor.name==="Function"){const e=t();if(c0(e))throw qt(Lt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ea=e}else throw qt(Lt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qt(Lt.NOT_SUPPORT_LOCALE_TYPE)}function dS(t,e,n){return[...new Set([n,...Se(e)?e:he(e)?Object.keys(e):Y(e)?[e]:[n]])]}function im(t,e,n){const r=Y(n)?n:jr,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Se(o);)o=bf(i,o,e);const a=Se(e)||!se(e)?e:e.default?e.default:null;o=Y(a)?[a]:a,Se(o)&&bf(i,o,!1),s.__localeChainCache.set(r,i)}return i}function bf(t,e,n){let r=!0;for(let s=0;s<e.length&&ae(r);s++){const i=e[s];Y(i)&&(r=hS(t,e[s],n))}return r}function hS(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=pS(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function pS(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Se(n)||se(n))&&n[s]&&(r=n[s])}return r}const mS="9.14.3",Po=-1,jr="en-US",If="",Tf=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function gS(){return{upper:(t,e)=>e==="text"&&Y(t)?t.toUpperCase():e==="vnode"&&he(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Y(t)?t.toLowerCase():e==="vnode"&&he(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Y(t)?Tf(t):e==="vnode"&&he(t)&&"__v_isVNode"in t?Tf(t.children):t}}let om;function wf(t){om=t}let am;function _S(t){am=t}let lm;function yS(t){lm=t}let cm=null;const vS=t=>{cm=t},ES=()=>cm;let um=null;const Af=t=>{um=t},bS=()=>um;let Sf=0;function IS(t={}){const e=Te(t.onWarn)?t.onWarn:d0,n=Y(t.version)?t.version:mS,r=Y(t.locale)||Te(t.locale)?t.locale:jr,s=Te(r)?jr:r,i=Se(t.fallbackLocale)||se(t.fallbackLocale)||Y(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=se(t.messages)?t.messages:ta(s),a=se(t.datetimeFormats)?t.datetimeFormats:ta(s),l=se(t.numberFormats)?t.numberFormats:ta(s),c=Ye(Ee(),t.modifiers,gS()),u=t.pluralRules||Ee(),f=Te(t.missing)?t.missing:null,d=ae(t.missingWarn)||Fn(t.missingWarn)?t.missingWarn:!0,y=ae(t.fallbackWarn)||Fn(t.fallbackWarn)?t.fallbackWarn:!0,R=!!t.fallbackFormat,O=!!t.unresolving,L=Te(t.postTranslation)?t.postTranslation:null,V=se(t.processor)?t.processor:null,W=ae(t.warnHtmlMessage)?t.warnHtmlMessage:!0,S=!!t.escapeParameter,P=Te(t.messageCompiler)?t.messageCompiler:om,x=Te(t.messageResolver)?t.messageResolver:am||J0,D=Te(t.localeFallbacker)?t.localeFallbacker:lm||dS,_=he(t.fallbackContext)?t.fallbackContext:void 0,h=t,m=he(h.__datetimeFormatters)?h.__datetimeFormatters:new Map,T=he(h.__numberFormatters)?h.__numberFormatters:new Map,A=he(h.__meta)?h.__meta:{};Sf++;const w={version:n,cid:Sf,locale:r,fallbackLocale:i,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:y,fallbackFormat:R,unresolving:O,postTranslation:L,processor:V,warnHtmlMessage:W,escapeParameter:S,messageCompiler:P,messageResolver:x,localeFallbacker:D,fallbackContext:_,onWarn:e,__meta:A};return w.datetimeFormats=a,w.numberFormats=l,w.__datetimeFormatters=m,w.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&aS(w,n,A),w}const ta=t=>({[t]:Ee()});function rc(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,s);return Y(a)?a:e}else return e}function es(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function TS(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function wS(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(TS(t,e[r]))return!0;return!1}function na(t){return n=>AS(n,t)}function AS(t,e){const n=PS(e);if(n==null)throw Vs(0);if(sc(n)===1){const i=CS(n);return t.plural(i.reduce((o,a)=>[...o,Pf(t,a)],[]))}else return Pf(t,n)}const SS=["b","body"];function PS(t){return Bn(t,SS)}const RS=["c","cases"];function CS(t){return Bn(t,RS,[])}function Pf(t,e){const n=kS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=LS(e).reduce((s,i)=>[...s,$a(t,i)],[]);return t.normalize(r)}}const OS=["s","static"];function kS(t){return Bn(t,OS)}const NS=["i","items"];function LS(t){return Bn(t,NS,[])}function $a(t,e){const n=sc(e);switch(n){case 3:return pi(e,n);case 9:return pi(e,n);case 4:{const r=e;if(Nt(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(Nt(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Vs(n)}case 5:{const r=e;if(Nt(r,"i")&&De(r.i))return t.interpolate(t.list(r.i));if(Nt(r,"index")&&De(r.index))return t.interpolate(t.list(r.index));throw Vs(n)}case 6:{const r=e,s=VS(r),i=US(r);return t.linked($a(t,i),s?$a(t,s):void 0,t.type)}case 7:return pi(e,n);case 8:return pi(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const DS=["t","type"];function sc(t){return Bn(t,DS)}const MS=["v","value"];function pi(t,e){const n=Bn(t,MS);if(n)return n;throw Vs(e)}const FS=["m","modifier"];function VS(t){return Bn(t,FS)}const xS=["k","key"];function US(t){const e=Bn(t,xS);if(e)return e;throw Vs(6)}function Bn(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(Nt(t,s)&&t[s]!=null)return t[s]}return n}function Vs(t){return new Error(`unhandled node type: ${t}`)}const fm=t=>t;let Ir=Ee();function Wr(t){return he(t)&&sc(t)===0&&(Nt(t,"b")||Nt(t,"body"))}function dm(t,e={}){let n=!1;const r=e.onError||v0;return e.onError=s=>{n=!0,r(s)},{...W0(t,e),detectError:n}}const $S=(t,e)=>{if(!Y(t))throw qt(Lt.NOT_SUPPORT_NON_STRING_MESSAGE);{ae(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||fm)(t),s=Ir[r];if(s)return s;const{code:i,detectError:o}=dm(t,e),a=new Function(`return ${i}`)();return o?a:Ir[r]=a}};function jS(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Y(t)){ae(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||fm)(t),s=Ir[r];if(s)return s;const{ast:i,detectError:o}=dm(t,{...e,location:!1,jit:!0}),a=na(i);return o?a:Ir[r]=a}else{const n=t.cacheKey;if(n){const r=Ir[n];return r||(Ir[n]=na(t))}else return na(t)}}const Rf=()=>"",wt=t=>Te(t);function Cf(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=t,[l,c]=ja(...e),u=ae(c.missingWarn)?c.missingWarn:t.missingWarn,f=ae(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=ae(c.escapeParameter)?c.escapeParameter:t.escapeParameter,y=!!c.resolvedMessage,R=Y(c.default)||ae(c.default)?ae(c.default)?i?l:()=>l:c.default:n?i?l:()=>l:"",O=n||R!=="",L=nc(t,c);d&&WS(c);let[V,W,S]=y?[l,L,a[L]||Ee()]:hm(t,l,L,o,f,u),P=V,x=l;if(!y&&!(Y(P)||Wr(P)||wt(P))&&O&&(P=R,x=P),!y&&(!(Y(P)||Wr(P)||wt(P))||!Y(W)))return s?Po:l;let D=!1;const _=()=>{D=!0},h=wt(P)?P:pm(t,l,W,P,x,_);if(D)return P;const m=GS(t,W,S,c),T=iS(m),A=HS(t,h,T),w=r?r(A,l):A;if(__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:Y(l)?l:wt(P)?P.key:"",locale:W||(wt(P)?P.locale:""),format:Y(P)?P:wt(P)?P.source:"",message:w};b.meta=Ye({},t.__meta,ES()||{}),lS(b)}return w}function WS(t){Se(t.list)?t.list=t.list.map(e=>Y(e)?hf(e):e):he(t.named)&&Object.keys(t.named).forEach(e=>{Y(t.named[e])&&(t.named[e]=hf(t.named[e]))})}function hm(t,e,n,r,s,i){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,r,n);let f=Ee(),d,y=null;const R="translate";for(let O=0;O<u.length&&(d=u[O],f=o[d]||Ee(),(y=l(f,e))===null&&(y=f[e]),!(Y(y)||Wr(y)||wt(y)));O++)if(!wS(d,u)){const L=rc(t,e,d,i,R);L!==e&&(y=L)}return[y,d,f]}function pm(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(wt(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>r;return c.locale=n,c.key=e,c}const l=o(r,BS(t,n,s,r,a,i));return l.locale=n,l.key=e,l.source=r,l}function HS(t,e,n){return e(n)}function ja(...t){const[e,n,r]=t,s=Ee();if(!Y(e)&&!De(e)&&!wt(e)&&!Wr(e))throw qt(Lt.INVALID_ARGUMENT);const i=De(e)?String(e):(wt(e),e);return De(n)?s.plural=n:Y(n)?s.default=n:se(n)&&!Ao(n)?s.named=n:Se(n)&&(s.list=n),De(r)?s.plural=r:Y(r)?s.default=r:se(r)&&Ye(s,r),[i,s]}function BS(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>s0(e,n,o)}}function GS(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:s,pluralRules:i,messages:y=>{let R=o(n,y);if(R==null&&u){const[,,O]=hm(u,y,e,a,l,c);R=o(O,y)}if(Y(R)||Wr(R)){let O=!1;const V=pm(t,y,e,R,y,()=>{O=!0});return O?Rf:V}else return wt(R)?R:Rf}};return t.processor&&(d.processor=t.processor),r.list&&(d.list=r.list),r.named&&(d.named=r.named),De(r.plural)&&(d.pluralIndex=r.plural),d}function Of(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Wa(...e),d=ae(u.missingWarn)?u.missingWarn:t.missingWarn;ae(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const y=!!u.part,R=nc(t,u),O=o(t,s,R);if(!Y(l)||l==="")return new Intl.DateTimeFormat(R,f).format(c);let L={},V,W=null;const S="datetime format";for(let D=0;D<O.length&&(V=O[D],L=n[V]||{},W=L[l],!se(W));D++)rc(t,l,V,d,S);if(!se(W)||!Y(V))return r?Po:l;let P=`${V}__${l}`;Ao(f)||(P=`${P}__${JSON.stringify(f)}`);let x=a.get(P);return x||(x=new Intl.DateTimeFormat(V,Ye({},W,f)),a.set(P,x)),y?x.formatToParts(c):x.format(c)}const mm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Wa(...t){const[e,n,r,s]=t,i=Ee();let o=Ee(),a;if(Y(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qt(Lt.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw qt(Lt.INVALID_ISO_DATE_ARGUMENT)}}else if(o0(e)){if(isNaN(e.getTime()))throw qt(Lt.INVALID_DATE_ARGUMENT);a=e}else if(De(e))a=e;else throw qt(Lt.INVALID_ARGUMENT);return Y(n)?i.key=n:se(n)&&Object.keys(n).forEach(l=>{mm.includes(l)?o[l]=n[l]:i[l]=n[l]}),Y(r)?i.locale=r:se(r)&&(o=r),se(s)&&(o=s),[i.key||"",a,i,o]}function kf(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Nf(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Ha(...e),d=ae(u.missingWarn)?u.missingWarn:t.missingWarn;ae(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const y=!!u.part,R=nc(t,u),O=o(t,s,R);if(!Y(l)||l==="")return new Intl.NumberFormat(R,f).format(c);let L={},V,W=null;const S="number format";for(let D=0;D<O.length&&(V=O[D],L=n[V]||{},W=L[l],!se(W));D++)rc(t,l,V,d,S);if(!se(W)||!Y(V))return r?Po:l;let P=`${V}__${l}`;Ao(f)||(P=`${P}__${JSON.stringify(f)}`);let x=a.get(P);return x||(x=new Intl.NumberFormat(V,Ye({},W,f)),a.set(P,x)),y?x.formatToParts(c):x.format(c)}const gm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ha(...t){const[e,n,r,s]=t,i=Ee();let o=Ee();if(!De(e))throw qt(Lt.INVALID_ARGUMENT);const a=e;return Y(n)?i.key=n:se(n)&&Object.keys(n).forEach(l=>{gm.includes(l)?o[l]=n[l]:i[l]=n[l]}),Y(r)?i.locale=r:se(r)&&(o=r),se(s)&&(o=s),[i.key||"",a,i,o]}function Lf(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}H0();/*!
  * vue-i18n v9.14.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const qS="9.14.3";function KS(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(an().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(an().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(an().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(an().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(an().__INTLIFY_PROD_DEVTOOLS__=!1)}const zS=fS.__EXTEND_POINT__,tn=So(zS);tn(),tn(),tn(),tn(),tn(),tn(),tn(),tn(),tn();const _m=Lt.__EXTEND_POINT__,ct=So(_m),Ue={UNEXPECTED_RETURN_TYPE:_m,INVALID_ARGUMENT:ct(),MUST_BE_CALL_SETUP_TOP:ct(),NOT_INSTALLED:ct(),NOT_AVAILABLE_IN_LEGACY_MODE:ct(),REQUIRED_VALUE:ct(),INVALID_VALUE:ct(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:ct(),NOT_INSTALLED_WITH_PROVIDE:ct(),UNEXPECTED_ERROR:ct(),NOT_COMPATIBLE_LEGACY_VUE_I18N:ct(),BRIDGE_SUPPORT_VUE_2_ONLY:ct(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:ct(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:ct(),__EXTEND_POINT__:ct()};function We(t,...e){return Yr(t,null,void 0)}const Ba=Wn("__translateVNode"),Ga=Wn("__datetimeParts"),qa=Wn("__numberParts"),ym=Wn("__setPluralRules"),vm=Wn("__injectWithOption"),Ka=Wn("__dispose");function xs(t){if(!he(t))return t;for(const e in t)if(Nt(t,e))if(!e.includes("."))he(t[e])&&xs(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let o=0;o<r;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in s||(s[n[o]]=Ee()),!he(s[n[o]])){i=!0;break}s=s[n[o]]}i||(s[n[r]]=t[e],delete t[e]),he(s[n[r]])&&xs(s[n[r]])}return t}function Ro(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=se(n)?n:Se(r)?Ee():{[t]:Ee()};if(Se(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||Ee(),Ti(c,o[l])):Ti(c,o)}else Y(a)&&Ti(JSON.parse(a),o)}),s==null&&i)for(const a in o)Nt(o,a)&&xs(o[a]);return o}function Em(t){return t.type}function bm(t,e,n){let r=he(e.messages)?e.messages:Ee();"__i18nGlobal"in n&&(r=Ro(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(he(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(he(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Df(t){return je(Bs,null,t,0)}const Mf="__INTLIFY_META__",Ff=()=>[],YS=()=>!1;let Vf=0;function xf(t){return(e,n,r,s)=>t(n,r,Ts()||void 0,s)}const JS=()=>{const t=Ts();let e=null;return t&&(e=Em(t)[Mf])?{[Mf]:e}:null};function ic(t={},e){const{__root:n,__injectWithOption:r}=t,s=n===void 0,i=t.flatJson,o=Zi?Qn:ll,a=!!t.translateExistCompatible;let l=ae(t.inheritLocale)?t.inheritLocale:!0;const c=o(n&&l?n.locale.value:Y(t.locale)?t.locale:jr),u=o(n&&l?n.fallbackLocale.value:Y(t.fallbackLocale)||Se(t.fallbackLocale)||se(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=o(Ro(c.value,t)),d=o(se(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),y=o(se(t.numberFormats)?t.numberFormats:{[c.value]:{}});let R=n?n.missingWarn:ae(t.missingWarn)||Fn(t.missingWarn)?t.missingWarn:!0,O=n?n.fallbackWarn:ae(t.fallbackWarn)||Fn(t.fallbackWarn)?t.fallbackWarn:!0,L=n?n.fallbackRoot:ae(t.fallbackRoot)?t.fallbackRoot:!0,V=!!t.fallbackFormat,W=Te(t.missing)?t.missing:null,S=Te(t.missing)?xf(t.missing):null,P=Te(t.postTranslation)?t.postTranslation:null,x=n?n.warnHtmlMessage:ae(t.warnHtmlMessage)?t.warnHtmlMessage:!0,D=!!t.escapeParameter;const _=n?n.modifiers:se(t.modifiers)?t.modifiers:{};let h=t.pluralRules||n&&n.pluralRules,m;m=(()=>{s&&Af(null);const C={version:qS,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:_,pluralRules:h,missing:S===null?void 0:S,missingWarn:R,fallbackWarn:O,fallbackFormat:V,unresolving:!0,postTranslation:P===null?void 0:P,warnHtmlMessage:x,escapeParameter:D,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};C.datetimeFormats=d.value,C.numberFormats=y.value,C.__datetimeFormatters=se(m)?m.__datetimeFormatters:void 0,C.__numberFormatters=se(m)?m.__numberFormatters:void 0;const F=IS(C);return s&&Af(F),F})(),es(m,c.value,u.value);function A(){return[c.value,u.value,f.value,d.value,y.value]}const w=Le({get:()=>c.value,set:C=>{c.value=C,m.locale=c.value}}),b=Le({get:()=>u.value,set:C=>{u.value=C,m.fallbackLocale=u.value,es(m,c.value,C)}}),Ve=Le(()=>f.value),Ze=Le(()=>d.value),ye=Le(()=>y.value);function ue(){return Te(P)?P:null}function le(C){P=C,m.postTranslation=C}function et(){return W}function lt(C){C!==null&&(S=xf(C)),W=C,m.missing=S}const Oe=(C,F,Z,ce,Pe,tt)=>{A();let Be;try{__INTLIFY_PROD_DEVTOOLS__,s||(m.fallbackContext=n?bS():void 0),Be=C(m)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(m.fallbackContext=void 0)}if(Z!=="translate exists"&&De(Be)&&Be===Po||Z==="translate exists"&&!Be){const[Gn,Oo]=F();return n&&L?ce(n):Pe(Gn)}else{if(tt(Be))return Be;throw We(Ue.UNEXPECTED_RETURN_TYPE)}};function ke(...C){return Oe(F=>Reflect.apply(Cf,null,[F,...C]),()=>ja(...C),"translate",F=>Reflect.apply(F.t,F,[...C]),F=>F,F=>Y(F))}function Tt(...C){const[F,Z,ce]=C;if(ce&&!he(ce))throw We(Ue.INVALID_ARGUMENT);return ke(F,Z,Ye({resolvedMessage:!0},ce||{}))}function pt(...C){return Oe(F=>Reflect.apply(Of,null,[F,...C]),()=>Wa(...C),"datetime format",F=>Reflect.apply(F.d,F,[...C]),()=>If,F=>Y(F))}function Ut(...C){return Oe(F=>Reflect.apply(Nf,null,[F,...C]),()=>Ha(...C),"number format",F=>Reflect.apply(F.n,F,[...C]),()=>If,F=>Y(F))}function $e(C){return C.map(F=>Y(F)||De(F)||ae(F)?Df(String(F)):F)}const J={normalize:$e,interpolate:C=>C,type:"vnode"};function q(...C){return Oe(F=>{let Z;const ce=F;try{ce.processor=J,Z=Reflect.apply(Cf,null,[ce,...C])}finally{ce.processor=null}return Z},()=>ja(...C),"translate",F=>F[Ba](...C),F=>[Df(F)],F=>Se(F))}function X(...C){return Oe(F=>Reflect.apply(Nf,null,[F,...C]),()=>Ha(...C),"number format",F=>F[qa](...C),Ff,F=>Y(F)||Se(F))}function de(...C){return Oe(F=>Reflect.apply(Of,null,[F,...C]),()=>Wa(...C),"datetime format",F=>F[Ga](...C),Ff,F=>Y(F)||Se(F))}function E(C){h=C,m.pluralRules=h}function I(C,F){return Oe(()=>{if(!C)return!1;const Z=Y(F)?F:c.value,ce=j(Z),Pe=m.messageResolver(ce,C);return a?Pe!=null:Wr(Pe)||wt(Pe)||Y(Pe)},()=>[C],"translate exists",Z=>Reflect.apply(Z.te,Z,[C,F]),YS,Z=>ae(Z))}function v(C){let F=null;const Z=im(m,u.value,c.value);for(let ce=0;ce<Z.length;ce++){const Pe=f.value[Z[ce]]||{},tt=m.messageResolver(Pe,C);if(tt!=null){F=tt;break}}return F}function N(C){const F=v(C);return F??(n?n.tm(C)||{}:{})}function j(C){return f.value[C]||{}}function $(C,F){if(i){const Z={[C]:F};for(const ce in Z)Nt(Z,ce)&&xs(Z[ce]);F=Z[C]}f.value[C]=F,m.messages=f.value}function G(C,F){f.value[C]=f.value[C]||{};const Z={[C]:F};if(i)for(const ce in Z)Nt(Z,ce)&&xs(Z[ce]);F=Z[C],Ti(F,f.value[C]),m.messages=f.value}function B(C){return d.value[C]||{}}function p(C,F){d.value[C]=F,m.datetimeFormats=d.value,kf(m,C,F)}function g(C,F){d.value[C]=Ye(d.value[C]||{},F),m.datetimeFormats=d.value,kf(m,C,F)}function k(C){return y.value[C]||{}}function M(C,F){y.value[C]=F,m.numberFormats=y.value,Lf(m,C,F)}function K(C,F){y.value[C]=Ye(y.value[C]||{},F),m.numberFormats=y.value,Lf(m,C,F)}Vf++,n&&Zi&&(un(n.locale,C=>{l&&(c.value=C,m.locale=C,es(m,c.value,u.value))}),un(n.fallbackLocale,C=>{l&&(u.value=C,m.fallbackLocale=C,es(m,c.value,u.value))}));const H={id:Vf,locale:w,fallbackLocale:b,get inheritLocale(){return l},set inheritLocale(C){l=C,C&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,es(m,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:Ve,get modifiers(){return _},get pluralRules(){return h||{}},get isGlobal(){return s},get missingWarn(){return R},set missingWarn(C){R=C,m.missingWarn=R},get fallbackWarn(){return O},set fallbackWarn(C){O=C,m.fallbackWarn=O},get fallbackRoot(){return L},set fallbackRoot(C){L=C},get fallbackFormat(){return V},set fallbackFormat(C){V=C,m.fallbackFormat=V},get warnHtmlMessage(){return x},set warnHtmlMessage(C){x=C,m.warnHtmlMessage=C},get escapeParameter(){return D},set escapeParameter(C){D=C,m.escapeParameter=C},t:ke,getLocaleMessage:j,setLocaleMessage:$,mergeLocaleMessage:G,getPostTranslationHandler:ue,setPostTranslationHandler:le,getMissingHandler:et,setMissingHandler:lt,[ym]:E};return H.datetimeFormats=Ze,H.numberFormats=ye,H.rt=Tt,H.te=I,H.tm=N,H.d=pt,H.n=Ut,H.getDateTimeFormat=B,H.setDateTimeFormat=p,H.mergeDateTimeFormat=g,H.getNumberFormat=k,H.setNumberFormat=M,H.mergeNumberFormat=K,H[vm]=r,H[Ba]=q,H[Ga]=de,H[qa]=X,H}function XS(t){const e=Y(t.locale)?t.locale:jr,n=Y(t.fallbackLocale)||Se(t.fallbackLocale)||se(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Te(t.missing)?t.missing:void 0,s=ae(t.silentTranslationWarn)||Fn(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=ae(t.silentFallbackWarn)||Fn(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=ae(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=se(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Te(t.postTranslation)?t.postTranslation:void 0,f=Y(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,y=ae(t.sync)?t.sync:!0;let R=t.messages;if(se(t.sharedMessages)){const D=t.sharedMessages;R=Object.keys(D).reduce((h,m)=>{const T=h[m]||(h[m]={});return Ye(T,D[m]),h},R||{})}const{__i18n:O,__root:L,__injectWithOption:V}=t,W=t.datetimeFormats,S=t.numberFormats,P=t.flatJson,x=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:R,flatJson:P,datetimeFormats:W,numberFormats:S,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:y,translateExistCompatible:x,__i18n:O,__root:L,__injectWithOption:V}}function za(t={},e){{const n=ic(XS(t)),{__extender:r}=t,s={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return ae(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=ae(i)?!i:i},get silentFallbackWarn(){return ae(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=ae(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[o,a,l]=i,c={};let u=null,f=null;if(!Y(o))throw We(Ue.INVALID_ARGUMENT);const d=o;return Y(a)?c.locale=a:Se(a)?u=a:se(a)&&(f=a),Se(l)?u=l:se(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[o,a,l]=i,c={plural:1};let u=null,f=null;if(!Y(o))throw We(Ue.INVALID_ARGUMENT);const d=o;return Y(a)?c.locale=a:De(a)?c.plural=a:Se(a)?u=a:se(a)&&(f=a),Y(l)?c.locale=l:Se(l)?u=l:se(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},te(i,o){return n.te(i,o)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,o){n.setLocaleMessage(i,o)},mergeLocaleMessage(i,o){n.mergeLocaleMessage(i,o)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,o){n.setDateTimeFormat(i,o)},mergeDateTimeFormat(i,o){n.mergeDateTimeFormat(i,o)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,o){n.setNumberFormat(i,o)},mergeNumberFormat(i,o){n.mergeNumberFormat(i,o)},getChoiceIndex(i,o){return-1}};return s.__extender=r,s}}const oc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function QS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===it?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Ee())}function Im(t){return it}const ZS=Hs({name:"i18n-t",props:Ye({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>De(t)||!isNaN(t)}},oc),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||ac({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(f=>f!=="_"),o=Ee();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Y(t.plural)?+t.plural:t.plural);const a=QS(e,i),l=s[Ba](t.keypath,a,o),c=Ye(Ee(),r),u=Y(t.tag)||he(t.tag)?t.tag:Im();return uo(u,c,l)}}}),Uf=ZS;function eP(t){return Se(t)&&!Y(t[0])}function Tm(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o={part:!0};let a=Ee();t.locale&&(o.locale=t.locale),Y(t.format)?o.key=t.format:he(t.format)&&(Y(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,y)=>n.includes(y)?Ye(Ee(),d,{[y]:t.format[y]}):d,Ee()));const l=r(t.value,o,a);let c=[o.key];Se(l)?c=l.map((d,y)=>{const R=s[d.type],O=R?R({[d.type]:d.value,index:y,parts:l}):[d.value];return eP(O)&&(O[0].key=`${d.type}-${y}`),O}):Y(l)&&(c=[l]);const u=Ye(Ee(),i),f=Y(t.tag)||he(t.tag)?t.tag:Im();return uo(f,u,c)}}const tP=Hs({name:"i18n-n",props:Ye({value:{type:Number,required:!0},format:{type:[String,Object]}},oc),setup(t,e){const n=t.i18n||ac({useScope:t.scope,__useComponent:!0});return Tm(t,e,gm,(...r)=>n[qa](...r))}}),$f=tP,nP=Hs({name:"i18n-d",props:Ye({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},oc),setup(t,e){const n=t.i18n||ac({useScope:t.scope,__useComponent:!0});return Tm(t,e,mm,(...r)=>n[Ga](...r))}}),jf=nP;function rP(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function sP(t){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw We(Ue.UNEXPECTED_ERROR);const u=rP(t,a.$),f=Wf(c);return[Reflect.apply(u.t,u,[...Hf(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);Zi&&t.global===c&&(o.__i18nWatcher=un(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Zi&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Wf(a);o.textContent=Reflect.apply(l.t,l,[...Hf(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Wf(t){if(Y(t))return{path:t};if(se(t)){if(!("path"in t))throw We(Ue.REQUIRED_VALUE,"path");return t}else throw We(Ue.INVALID_VALUE)}function Hf(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},a=r||{};return Y(n)&&(o.locale=n),De(s)&&(o.plural=s),De(i)&&(o.plural=i),[e,a,o]}function iP(t,e,...n){const r=se(n[0])?n[0]:{},s=!!r.useI18nComponentName;(ae(r.globalInstall)?r.globalInstall:!0)&&([s?"i18n":Uf.name,"I18nT"].forEach(o=>t.component(o,Uf)),[$f.name,"I18nN"].forEach(o=>t.component(o,$f)),[jf.name,"I18nD"].forEach(o=>t.component(o,jf))),t.directive("t",sP(e))}function oP(t,e,n){return{beforeCreate(){const r=Ts();if(!r)throw We(Ue.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=s.i18n;if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Bf(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=za(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Bf(t,s);else{this.$i18n=za({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&bm(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=Ts();if(!r)throw We(Ue.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n}}}function Bf(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[ym](e.pluralizationRules||t.pluralizationRules);const n=Ro(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const aP=Wn("global-vue-i18n");function lP(t={},e){const n=__VUE_I18N_LEGACY_API__&&ae(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,r=ae(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,i=new Map,[o,a]=cP(t,n),l=Wn("");function c(d){return i.get(d)||null}function u(d,y){i.set(d,y)}function f(d){i.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(y,...R){if(y.__VUE_I18N_SYMBOL__=l,y.provide(y.__VUE_I18N_SYMBOL__,d),se(R[0])){const V=R[0];d.__composerExtend=V.__composerExtend,d.__vueI18nExtend=V.__vueI18nExtend}let O=null;!n&&r&&(O=yP(y,d.global)),__VUE_I18N_FULL_INSTALL__&&iP(y,d,...R),__VUE_I18N_LEGACY_API__&&n&&y.mixin(oP(a,a.__composer,d));const L=y.unmount;y.unmount=()=>{O&&O(),d.dispose(),L()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:c,__setInstance:u,__deleteInstance:f};return d}}function ac(t={}){const e=Ts();if(e==null)throw We(Ue.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw We(Ue.NOT_INSTALLED);const n=uP(e),r=dP(n),s=Em(e),i=fP(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw We(Ue.NOT_AVAILABLE_IN_LEGACY_MODE);return gP(e,i,r,t)}if(i==="global")return bm(r,t,s),r;if(i==="parent"){let l=hP(n,e,t.__useComponent);return l==null&&(l=r),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ye({},t);"__i18n"in s&&(l.__i18n=s.__i18n),r&&(l.__root=r),a=ic(l),o.__composerExtend&&(a[Ka]=o.__composerExtend(a)),mP(o,e,a),o.__setInstance(e,a)}return a}function cP(t,e,n){const r=Fm();{const s=__VUE_I18N_LEGACY_API__&&e?r.run(()=>za(t)):r.run(()=>ic(t));if(s==null)throw We(Ue.UNEXPECTED_ERROR);return[r,s]}}function uP(t){{const e=zt(t.isCE?aP:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw We(t.isCE?Ue.NOT_INSTALLED_WITH_PROVIDE:Ue.UNEXPECTED_ERROR);return e}}function fP(t,e){return Ao(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function dP(t){return t.mode==="composition"?t.global:t.global.__composer}function hP(t,e,n=!1){let r=null;const s=e.root;let i=pP(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(r=a.__composer,n&&r&&!r[vm]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function pP(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function mP(t,e,n){Pd(()=>{},e),dl(()=>{const r=n;t.__deleteInstance(e);const s=r[Ka];s&&(s(),delete r[Ka])},e)}function gP(t,e,n,r={}){const s=e==="local",i=ll(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw We(Ue.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=ae(r.inheritLocale)?r.inheritLocale:!Y(r.locale),a=Qn(!s||o?n.locale.value:Y(r.locale)?r.locale:jr),l=Qn(!s||o?n.fallbackLocale.value:Y(r.fallbackLocale)||Se(r.fallbackLocale)||se(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),c=Qn(Ro(a.value,r)),u=Qn(se(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),f=Qn(se(r.numberFormats)?r.numberFormats:{[a.value]:{}}),d=s?n.missingWarn:ae(r.missingWarn)||Fn(r.missingWarn)?r.missingWarn:!0,y=s?n.fallbackWarn:ae(r.fallbackWarn)||Fn(r.fallbackWarn)?r.fallbackWarn:!0,R=s?n.fallbackRoot:ae(r.fallbackRoot)?r.fallbackRoot:!0,O=!!r.fallbackFormat,L=Te(r.missing)?r.missing:null,V=Te(r.postTranslation)?r.postTranslation:null,W=s?n.warnHtmlMessage:ae(r.warnHtmlMessage)?r.warnHtmlMessage:!0,S=!!r.escapeParameter,P=s?n.modifiers:se(r.modifiers)?r.modifiers:{},x=r.pluralRules||s&&n.pluralRules;function D(){return[a.value,l.value,c.value,u.value,f.value]}const _=Le({get:()=>i.value?i.value.locale.value:a.value,set:v=>{i.value&&(i.value.locale.value=v),a.value=v}}),h=Le({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),m=Le(()=>i.value?i.value.messages.value:c.value),T=Le(()=>u.value),A=Le(()=>f.value);function w(){return i.value?i.value.getPostTranslationHandler():V}function b(v){i.value&&i.value.setPostTranslationHandler(v)}function Ve(){return i.value?i.value.getMissingHandler():L}function Ze(v){i.value&&i.value.setMissingHandler(v)}function ye(v){return D(),v()}function ue(...v){return i.value?ye(()=>Reflect.apply(i.value.t,null,[...v])):ye(()=>"")}function le(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function et(...v){return i.value?ye(()=>Reflect.apply(i.value.d,null,[...v])):ye(()=>"")}function lt(...v){return i.value?ye(()=>Reflect.apply(i.value.n,null,[...v])):ye(()=>"")}function Oe(v){return i.value?i.value.tm(v):{}}function ke(v,N){return i.value?i.value.te(v,N):!1}function Tt(v){return i.value?i.value.getLocaleMessage(v):{}}function pt(v,N){i.value&&(i.value.setLocaleMessage(v,N),c.value[v]=N)}function Ut(v,N){i.value&&i.value.mergeLocaleMessage(v,N)}function $e(v){return i.value?i.value.getDateTimeFormat(v):{}}function U(v,N){i.value&&(i.value.setDateTimeFormat(v,N),u.value[v]=N)}function J(v,N){i.value&&i.value.mergeDateTimeFormat(v,N)}function q(v){return i.value?i.value.getNumberFormat(v):{}}function X(v,N){i.value&&(i.value.setNumberFormat(v,N),f.value[v]=N)}function de(v,N){i.value&&i.value.mergeNumberFormat(v,N)}const E={get id(){return i.value?i.value.id:-1},locale:_,fallbackLocale:h,messages:m,datetimeFormats:T,numberFormats:A,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(c.value)},get modifiers(){return i.value?i.value.modifiers:P},get pluralRules(){return i.value?i.value.pluralRules:x},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:d},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:y},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:R},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:O},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:W},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:S},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:ue,getPostTranslationHandler:w,setPostTranslationHandler:b,getMissingHandler:Ve,setMissingHandler:Ze,rt:le,d:et,n:lt,tm:Oe,te:ke,getLocaleMessage:Tt,setLocaleMessage:pt,mergeLocaleMessage:Ut,getDateTimeFormat:$e,setDateTimeFormat:U,mergeDateTimeFormat:J,getNumberFormat:q,setNumberFormat:X,mergeNumberFormat:de};function I(v){v.locale.value=a.value,v.fallbackLocale.value=l.value,Object.keys(c.value).forEach(N=>{v.mergeLocaleMessage(N,c.value[N])}),Object.keys(u.value).forEach(N=>{v.mergeDateTimeFormat(N,u.value[N])}),Object.keys(f.value).forEach(N=>{v.mergeNumberFormat(N,f.value[N])}),v.escapeParameter=S,v.fallbackFormat=O,v.fallbackRoot=R,v.fallbackWarn=y,v.missingWarn=d,v.warnHtmlMessage=W}return Sd(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw We(Ue.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=t.proxy.$i18n.__composer;e==="global"?(a.value=v.locale.value,l.value=v.fallbackLocale.value,c.value=v.messages.value,u.value=v.datetimeFormats.value,f.value=v.numberFormats.value):s&&I(v)}),E}const _P=["locale","fallbackLocale","availableLocales"],Gf=["t","rt","d","n","tm","te"];function yP(t,e){const n=Object.create(null);return _P.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw We(Ue.UNEXPECTED_ERROR);const o=ze(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Gf.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw We(Ue.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Gf.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}KS();__INTLIFY_JIT_COMPILATION__?wf(jS):wf($S);_S(X0);yS(im);if(__INTLIFY_PROD_DEVTOOLS__){const t=an();t.__INTLIFY__=!0,oS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const vP={header:"SUPER-SHOP",homeLink:"HOME",contacts:"Contacts",langTitle:"Change language",seller:"Seller",allSellers:"All sellers",brand:"Brands",filters:"Filters",edit:"Editing product",editNew:"Create new product",epmtyList:"No products found!",contactsTitle:"Our contacts"},EP={price:"UAH"},bP={addProduct:"ADD NEW PRODUCT",delete:"Delete",edit:"Edit",buy:"Buy",save:"Save",cancel:"Cancel",clear:"Clear",lang:"🇺🇸",login:"Login",logout:"Logout",apply:"Apply filters",clearFilters:"Clear filters"},IP={brand:"Brand",title:"Title",price:"Price",photo:"Image",seller:"Seller",rozetka:"Rozetka",other:"Ocher sellers"},TP={titles:vP,labels:EP,buttons:bP,form:IP},wP={header:"СУПЕР-МАГАЗИН",homeLink:"ГОЛОВНА",contacts:"Контакти",langTitle:"Обрати мову",seller:"Продавець",allSellers:"Всі продавці",brand:"Бренди",filters:"Фільтри",edit:"Редагування товару",editNew:"Додавання нового товару",epmtyList:"Товари не знайдено!",contactsTitle:"Наші контакти"},AP={price:"ГРН"},SP={addProduct:"ДОДАТИ НОВИЙ ТОВАР",delete:"Видалити",edit:"Редагувати",buy:"Купити",save:"Зберегти",cancel:"Відміна",clear:"Очистити",lang:"🇺🇦",login:"Авторизація",logout:"Вийти",apply:"Застосувати фільтри",clearFilters:"Скинути фільтри"},PP={brand:"Бренд",title:"Назва",price:"Ціна",photo:"Зображення",seller:"Продавець",rozetka:"Розетка",other:"Інші продавці"},RP={titles:wP,labels:AP,buttons:SP,form:PP},CP=lP({locale:"ua",fallbackLocale:"ua",messages:{en:TP,ua:RP}}),Co=x_(Ay);Co.use(Ua);Co.use(Qp);Co.use(CP);Co.mount("#app");
