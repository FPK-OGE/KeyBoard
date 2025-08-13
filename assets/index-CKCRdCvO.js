(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Pd={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function GS(){if(x_)return _l;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return _l.Fragment=t,_l.jsx=n,_l.jsxs=n,_l}var U_;function KS(){return U_||(U_=1,Pd.exports=GS()),Pd.exports}var ot=KS(),xd={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function YS(){if(L_)return St;L_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=I&&D[I]||D["@@iterator"],typeof D=="function"?D:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,et={};function Z(D,Q,nt){this.props=D,this.context=Q,this.refs=et,this.updater=nt||j}Z.prototype.isReactComponent={},Z.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},Z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function st(){}st.prototype=Z.prototype;function it(D,Q,nt){this.props=D,this.context=Q,this.refs=et,this.updater=nt||j}var ut=it.prototype=new st;ut.constructor=it,$(ut,Z.prototype),ut.isPureReactComponent=!0;var Ut=Array.isArray,At={H:null,A:null,T:null,S:null,V:null},Bt=Object.prototype.hasOwnProperty;function V(D,Q,nt,W,ft,bt){return nt=bt.ref,{$$typeof:r,type:D,key:Q,ref:nt!==void 0?nt:null,props:bt}}function S(D,Q){return V(D.type,Q,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(nt){return Q[nt]})}var M=/\/+/g;function P(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):Q.toString(36)}function b(){}function Ue(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(b,b):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ae(D,Q,nt,W,ft){var bt=typeof D;(bt==="undefined"||bt==="boolean")&&(D=null);var vt=!1;if(D===null)vt=!0;else switch(bt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(D.$$typeof){case r:case t:vt=!0;break;case A:return vt=D._init,ae(vt(D._payload),Q,nt,W,ft)}}if(vt)return ft=ft(D),vt=W===""?"."+P(D,0):W,Ut(ft)?(nt="",vt!=null&&(nt=vt.replace(M,"$&/")+"/"),ae(ft,Q,nt,"",function(Yn){return Yn})):ft!=null&&(R(ft)&&(ft=S(ft,nt+(ft.key==null||D&&D.key===ft.key?"":(""+ft.key).replace(M,"$&/")+"/")+vt)),Q.push(ft)),1;vt=0;var Ce=W===""?".":W+":";if(Ut(D))for(var Zt=0;Zt<D.length;Zt++)W=D[Zt],bt=Ce+P(W,Zt),vt+=ae(W,Q,nt,bt,ft);else if(Zt=C(D),typeof Zt=="function")for(D=Zt.call(D),Zt=0;!(W=D.next()).done;)W=W.value,bt=Ce+P(W,Zt++),vt+=ae(W,Q,nt,bt,ft);else if(bt==="object"){if(typeof D.then=="function")return ae(Ue(D),Q,nt,W,ft);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return vt}function H(D,Q,nt){if(D==null)return D;var W=[],ft=0;return ae(D,W,"","",function(bt){return Q.call(nt,bt,ft++)}),W}function tt(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(nt){(D._status===0||D._status===-1)&&(D._status=1,D._result=nt)},function(nt){(D._status===0||D._status===-1)&&(D._status=2,D._result=nt)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var ht=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Lt(){}return St.Children={map:H,forEach:function(D,Q,nt){H(D,function(){Q.apply(this,arguments)},nt)},count:function(D){var Q=0;return H(D,function(){Q++}),Q},toArray:function(D){return H(D,function(Q){return Q})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=Z,St.Fragment=n,St.Profiler=l,St.PureComponent=it,St.StrictMode=s,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=At,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return At.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,Q,nt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=$({},D.props),ft=D.key,bt=void 0;if(Q!=null)for(vt in Q.ref!==void 0&&(bt=void 0),Q.key!==void 0&&(ft=""+Q.key),Q)!Bt.call(Q,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&Q.ref===void 0||(W[vt]=Q[vt]);var vt=arguments.length-2;if(vt===1)W.children=nt;else if(1<vt){for(var Ce=Array(vt),Zt=0;Zt<vt;Zt++)Ce[Zt]=arguments[Zt+2];W.children=Ce}return V(D.type,ft,void 0,void 0,bt,W)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},St.createElement=function(D,Q,nt){var W,ft={},bt=null;if(Q!=null)for(W in Q.key!==void 0&&(bt=""+Q.key),Q)Bt.call(Q,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ft[W]=Q[W]);var vt=arguments.length-2;if(vt===1)ft.children=nt;else if(1<vt){for(var Ce=Array(vt),Zt=0;Zt<vt;Zt++)Ce[Zt]=arguments[Zt+2];ft.children=Ce}if(D&&D.defaultProps)for(W in vt=D.defaultProps,vt)ft[W]===void 0&&(ft[W]=vt[W]);return V(D,bt,void 0,void 0,null,ft)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:p,render:D}},St.isValidElement=R,St.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:tt}},St.memo=function(D,Q){return{$$typeof:y,type:D,compare:Q===void 0?null:Q}},St.startTransition=function(D){var Q=At.T,nt={};At.T=nt;try{var W=D(),ft=At.S;ft!==null&&ft(nt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Lt,ht)}catch(bt){ht(bt)}finally{At.T=Q}},St.unstable_useCacheRefresh=function(){return At.H.useCacheRefresh()},St.use=function(D){return At.H.use(D)},St.useActionState=function(D,Q,nt){return At.H.useActionState(D,Q,nt)},St.useCallback=function(D,Q){return At.H.useCallback(D,Q)},St.useContext=function(D){return At.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,Q){return At.H.useDeferredValue(D,Q)},St.useEffect=function(D,Q,nt){var W=At.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,Q)},St.useId=function(){return At.H.useId()},St.useImperativeHandle=function(D,Q,nt){return At.H.useImperativeHandle(D,Q,nt)},St.useInsertionEffect=function(D,Q){return At.H.useInsertionEffect(D,Q)},St.useLayoutEffect=function(D,Q){return At.H.useLayoutEffect(D,Q)},St.useMemo=function(D,Q){return At.H.useMemo(D,Q)},St.useOptimistic=function(D,Q){return At.H.useOptimistic(D,Q)},St.useReducer=function(D,Q,nt){return At.H.useReducer(D,Q,nt)},St.useRef=function(D){return At.H.useRef(D)},St.useState=function(D){return At.H.useState(D)},St.useSyncExternalStore=function(D,Q,nt){return At.H.useSyncExternalStore(D,Q,nt)},St.useTransition=function(){return At.H.useTransition()},St.version="19.1.1",St}var z_;function Dm(){return z_||(z_=1,xd.exports=YS()),xd.exports}var Pe=Dm(),Ud={exports:{}},vl={},Ld={exports:{}},zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function QS(){return B_||(B_=1,function(r){function t(H,tt){var ht=H.length;H.push(tt);t:for(;0<ht;){var Lt=ht-1>>>1,D=H[Lt];if(0<l(D,tt))H[Lt]=tt,H[ht]=D,ht=Lt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var tt=H[0],ht=H.pop();if(ht!==tt){H[0]=ht;t:for(var Lt=0,D=H.length,Q=D>>>1;Lt<Q;){var nt=2*(Lt+1)-1,W=H[nt],ft=nt+1,bt=H[ft];if(0>l(W,ht))ft<D&&0>l(bt,W)?(H[Lt]=bt,H[ft]=ht,Lt=ft):(H[Lt]=W,H[nt]=ht,Lt=nt);else if(ft<D&&0>l(bt,ht))H[Lt]=bt,H[ft]=ht,Lt=ft;else break t}}return tt}function l(H,tt){var ht=H.sortIndex-tt.sortIndex;return ht!==0?ht:H.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],y=[],A=1,I=null,C=3,j=!1,$=!1,et=!1,Z=!1,st=typeof setTimeout=="function"?setTimeout:null,it=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;function Ut(H){for(var tt=n(y);tt!==null;){if(tt.callback===null)s(y);else if(tt.startTime<=H)s(y),tt.sortIndex=tt.expirationTime,t(g,tt);else break;tt=n(y)}}function At(H){if(et=!1,Ut(H),!$)if(n(g)!==null)$=!0,Bt||(Bt=!0,P());else{var tt=n(y);tt!==null&&ae(At,tt.startTime-H)}}var Bt=!1,V=-1,S=5,R=-1;function N(){return Z?!0:!(r.unstable_now()-R<S)}function M(){if(Z=!1,Bt){var H=r.unstable_now();R=H;var tt=!0;try{t:{$=!1,et&&(et=!1,it(V),V=-1),j=!0;var ht=C;try{e:{for(Ut(H),I=n(g);I!==null&&!(I.expirationTime>H&&N());){var Lt=I.callback;if(typeof Lt=="function"){I.callback=null,C=I.priorityLevel;var D=Lt(I.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){I.callback=D,Ut(H),tt=!0;break e}I===n(g)&&s(g),Ut(H)}else s(g);I=n(g)}if(I!==null)tt=!0;else{var Q=n(y);Q!==null&&ae(At,Q.startTime-H),tt=!1}}break t}finally{I=null,C=ht,j=!1}tt=void 0}}finally{tt?P():Bt=!1}}}var P;if(typeof ut=="function")P=function(){ut(M)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Ue=b.port2;b.port1.onmessage=M,P=function(){Ue.postMessage(null)}}else P=function(){st(M,0)};function ae(H,tt){V=st(function(){H(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(H){switch(C){case 1:case 2:case 3:var tt=3;break;default:tt=C}var ht=C;C=tt;try{return H()}finally{C=ht}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ht=C;C=H;try{return tt()}finally{C=ht}},r.unstable_scheduleCallback=function(H,tt,ht){var Lt=r.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?Lt+ht:Lt):ht=Lt,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ht+D,H={id:A++,callback:tt,priorityLevel:H,startTime:ht,expirationTime:D,sortIndex:-1},ht>Lt?(H.sortIndex=ht,t(y,H),n(g)===null&&H===n(y)&&(et?(it(V),V=-1):et=!0,ae(At,ht-Lt))):(H.sortIndex=D,t(g,H),$||j||($=!0,Bt||(Bt=!0,P()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var tt=C;return function(){var ht=C;C=tt;try{return H.apply(this,arguments)}finally{C=ht}}}}(zd)),zd}var q_;function XS(){return q_||(q_=1,Ld.exports=QS()),Ld.exports}var Bd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function $S(){if(j_)return Qe;j_=1;var r=Dm();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,A){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:I==null?null:""+I,children:g,containerInfo:y,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qe.createPortal=function(g,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(g,y,null,A)},Qe.flushSync=function(g){var y=f.T,A=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=A,s.d.f()}},Qe.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Qe.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Qe.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var A=y.as,I=p(A,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:I,integrity:C,fetchPriority:j}):A==="script"&&s.d.X(g,{crossOrigin:I,integrity:C,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Qe.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Qe.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,I=p(A,y.crossOrigin);s.d.L(g,A,{crossOrigin:I,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Qe.preloadModule=function(g,y){if(typeof g=="string")if(y){var A=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Qe.requestFormReset=function(g){s.d.r(g)},Qe.unstable_batchedUpdates=function(g,y){return g(y)},Qe.useFormState=function(g,y,A){return f.H.useFormState(g,y,A)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.1.1",Qe}var H_;function ZS(){if(H_)return Bd.exports;H_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bd.exports=$S(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function WS(){if(F_)return vl;F_=1;var r=XS(),t=Dm(),n=ZS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),e;if(d===o)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,o=d;break}if(E===o){v=!0,o=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,o=h;break}if(E===o){v=!0,o=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,I=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),it=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),Bt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var b=Symbol.for("react.client.reference");function Ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===b?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case et:return"StrictMode";case At:return"Suspense";case Bt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case ut:return(e.displayName||"Context")+".Provider";case it:return(e._context.displayName||"Context")+".Consumer";case Ut:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:Ue(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Ue(e(i))}catch{}}return null}var ae=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},Lt=[],D=-1;function Q(e){return{current:e}}function nt(e){0>D||(e.current=Lt[D],Lt[D]=null,D--)}function W(e,i){D++,Lt[D]=e.current,e.current=i}var ft=Q(null),bt=Q(null),vt=Q(null),Ce=Q(null);function Zt(e,i){switch(W(vt,i),W(bt,e),W(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=c_(i),e=h_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ft),W(ft,e)}function Yn(){nt(ft),nt(bt),nt(vt)}function tr(e){e.memoizedState!==null&&W(Ce,e);var i=ft.current,a=h_(i,e.type);i!==a&&(W(bt,e),W(ft,a))}function Ti(e){bt.current===e&&(nt(ft),nt(bt)),Ce.current===e&&(nt(Ce),dl._currentValue=ht)}var $r=Object.prototype.hasOwnProperty,Zr=r.unstable_scheduleCallback,Wr=r.unstable_cancelCallback,uo=r.unstable_shouldYield,eu=r.unstable_requestPaint,Tn=r.unstable_now,kh=r.unstable_getCurrentPriorityLevel,co=r.unstable_ImmediatePriority,Xs=r.unstable_UserBlockingPriority,Jr=r.unstable_NormalPriority,Ph=r.unstable_LowPriority,$s=r.unstable_IdlePriority,ho=r.log,nu=r.unstable_setDisableYieldValue,oe=null,Ht=null;function cn(e){if(typeof ho=="function"&&nu(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(oe,e)}catch{}}var Ke=Math.clz32?Math.clz32:ts,iu=Math.log,xh=Math.LN2;function ts(e){return e>>>=0,e===0?32:31-(iu(e)/xh|0)|0}var es=256,ns=4194304;function Un(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zs(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~d,o!==0?h=Un(o):(v&=E,v!==0?h=Un(v):a||(a=E&~e,a!==0&&(h=Un(a))))):(E=o&~d,E!==0?h=Un(E):v!==0?h=Un(v):a||(a=o&~e,a!==0&&(h=Un(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function is(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mo(){var e=es;return es<<=1,(es&4194048)===0&&(es=256),e}function po(){var e=ns;return ns<<=1,(ns&62914560)===0&&(ns=4194304),e}function Ai(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Si(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function go(e,i,a,o,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ke(a),K=1<<F;E[F]=0,w[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}o!==0&&Qn(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Qn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ke(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function yo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ke(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:O_(e.type))}function ru(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var ee=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ee,me="__reactProps$"+ee,An="__reactContainer$"+ee,_o="__reactEvents$"+ee,Uh="__reactListeners$"+ee,ir="__reactHandles$"+ee,su="__reactResources$"+ee,rs="__reactMarker$"+ee;function rr(e){delete e[Ee],delete e[me],delete e[_o],delete e[Uh],delete e[ir]}function wi(e){var i=e[Ee];if(i)return i;for(var a=e.parentNode;a;){if(i=a[An]||a[Ee]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=p_(e);e!==null;){if(a=e[Ee])return a;e=p_(e)}return i}e=a,a=e.parentNode}return null}function Xn(e){if(e=e[Ee]||e[An]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function $n(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Je(e){var i=e[su];return i||(i=e[su]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ce(e){e[rs]=!0}var vo=new Set,Js={};function Ln(e,i){bi(e,i),bi(e+"Capture",i)}function bi(e,i){for(Js[e]=i,e=0;e<i.length;e++)vo.add(i[e])}var au=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},ss={};function lu(e){return $r.call(ss,e)?!0:$r.call(ou,e)?!1:au.test(e)?ss[e]=!0:(ou[e]=!0,!1)}function sr(e,i,a){if(lu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Zn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Le(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var as,uu;function Ri(e){if(as===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);as=i&&i[1]||"",uu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+as+e+uu}var ta=!1;function ea(e,i){if(!e||ta)return"";ta=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(o===w.length||h===L.length)for(o=w.length-1,h=L.length-1;1<=o&&0<=h&&w[o]!==L[h];)h--;for(;1<=o&&0<=h;o--,h--)if(w[o]!==L[h]){if(o!==1||h!==1)do if(o--,h--,0>h||w[o]!==L[h]){var F=`
`+w[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{ta=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ri(a):""}function Eo(e){switch(e.tag){case 26:case 27:case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 15:return ea(e.type,!1);case 11:return ea(e.type.render,!1);case 1:return ea(e.type,!0);case 31:return Ri("Activity");default:return""}}function na(e){try{var i="";do i+=Eo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function To(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Lh(e){var i=To(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ia(e){e._valueTracker||(e._valueTracker=Lh(e))}function Ao(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=To(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zh=/[\n"\\]/g;function pe(e){return e.replace(zh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,o,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+tn(i)):e.value!==""+tn(i)&&(e.value=""+tn(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ar(e,v,tn(i)):a!=null?ar(e,v,tn(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+tn(E):e.removeAttribute("name")}function ls(e,i,a,o,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+tn(a):"",i=i!=null?""+tn(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ar(e,i,a){i==="number"&&os(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ii(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+tn(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+tn(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+tn(a):""}function us(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ae(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=tn(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Sn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cu(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||cs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function So(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&cu(e,h,o)}else for(var d in i)i.hasOwnProperty(d)&&cu(e,d,i[d])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ra(e){return qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ci=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Oi=null;function bo(e){var i=Xn(e);if(i&&(e=i.stateNode)){var a=e[me]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[me]||null;if(!h)throw Error(s(90));hn(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Ao(o)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ii(e,!!a.multiple,i,!1)}}}var Wn=!1;function hu(e,i,a){if(Wn)return e(i,a);Wn=!0;try{var o=e(i);return o}finally{if(Wn=!1,(Di!==null||Oi!==null)&&(rc(),Di&&(i=Di,e=Oi,Oi=Di=null,bo(i),e)))for(i=0;i<e.length;i++)bo(e[i])}}function hs(e,i){var a=e.stateNode;if(a===null)return null;var o=a[me]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bn=!1;if(zn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){bn=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{bn=!1}var Jn=null,or=null,Ni=null;function Ro(){if(Ni)return Ni;var e,i=or,a=i.length,o,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===h[d-o];o++);return Ni=h.slice(e,1<o?1-o:void 0)}function ti(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Io(){return!1}function De(e){function i(a,o,h,d,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:Io,this.isPropagationStopped=Io,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=De(qt),ds=A({},qt,{view:0,detail:0}),fu=De(ds),aa,oa,ni,ms=A({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(aa=e.screenX-ni.screenX,oa=e.screenY-ni.screenY):oa=aa=0,ni=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),Rn=De(ms),du=A({},ms,{dataTransfer:0}),jh=De(du),ps=A({},ds,{relatedTarget:0}),la=De(ps),Co=A({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),ua=De(Co),mu=A({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ca=De(mu),Hh=A({},qt,{data:0}),Do=De(Hh),gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=gu[e])?!!i[e]:!1}function ys(){return Oo}var yu=A({},ds,{key:function(e){if(e.key){var i=gs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ha=De(yu),_u=A({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=De(_u),Mi=A({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),vu=De(Mi),Eu=A({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=De(Eu),Au=A({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fa=De(Au),en=A({},qt,{newState:0,oldState:0}),Su=De(en),wu=[9,13,27,32],ii=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var m=zn&&"TextEvent"in window&&!u,_=zn&&(!ii||u&&8<u&&11>=u),T=" ",x=!1;function q(e,i){switch(e){case"keyup":return wu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Te(e,i){switch(e){case"compositionend":return J(i);case"keypress":return i.which!==32?null:(x=!0,T);case"textInput":return e=i.data,e===T&&x?null:e;default:return null}}function Vt(e,i){if(Mt)return e==="compositionend"||!ii&&q(e,i)?(e=Ro(),Ni=or=Jn=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ae(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Vi(e,i,a,o){Di?Oi?Oi.push(o):Oi=[o]:Di=o,i=cc(i,"onChange"),0<i.length&&(a=new sa("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var ze=null,ri=null;function Mo(e){s_(e,0)}function bu(e){var i=$n(e);if(Ao(i))return e}function Rp(e,i){if(e==="change")return i}var Ip=!1;if(zn){var Fh;if(zn){var Gh="oninput"in document;if(!Gh){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Gh=typeof Cp.oninput=="function"}Fh=Gh}else Fh=!1;Ip=Fh&&(!document.documentMode||9<document.documentMode)}function Dp(){ze&&(ze.detachEvent("onpropertychange",Op),ri=ze=null)}function Op(e){if(e.propertyName==="value"&&bu(ri)){var i=[];Vi(i,ri,e,wn(e)),hu(Mo,i)}}function TA(e,i,a){e==="focusin"?(Dp(),ze=i,ri=a,ze.attachEvent("onpropertychange",Op)):e==="focusout"&&Dp()}function AA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(ri)}function SA(e,i){if(e==="click")return bu(i)}function wA(e,i){if(e==="input"||e==="change")return bu(i)}function bA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:bA;function Vo(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!$r.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,i){var a=Np(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Np(a)}}function Vp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Vp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=os(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=os(e.document)}return i}function Kh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var RA=zn&&"documentMode"in document&&11>=document.documentMode,da=null,Yh=null,ko=null,Qh=!1;function Pp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qh||da==null||da!==os(o)||(o=da,"selectionStart"in o&&Kh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ko&&Vo(ko,o)||(ko=o,o=cc(Yh,"onSelect"),0<o.length&&(i=new sa("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=da)))}function _s(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ma={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Xh={},xp={};zn&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function vs(e){if(Xh[e])return Xh[e];if(!ma[e])return e;var i=ma[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in xp)return Xh[e]=i[a];return e}var Up=vs("animationend"),Lp=vs("animationiteration"),zp=vs("animationstart"),IA=vs("transitionrun"),CA=vs("transitionstart"),DA=vs("transitioncancel"),Bp=vs("transitionend"),qp=new Map,$h="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$h.push("scrollEnd");function Bn(e,i){qp.set(e,i),Ln(i,[e])}var jp=new WeakMap;function In(e,i){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:na(i)},jp.set(e,i),i)}return{value:e,source:i,stack:na(i)}}var Cn=[],pa=0,Zh=0;function Ru(){for(var e=pa,i=Zh=pa=0;i<e;){var a=Cn[i];Cn[i++]=null;var o=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var d=Cn[i];if(Cn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}d!==0&&Hp(a,h,d)}}function Iu(e,i,a,o){Cn[pa++]=e,Cn[pa++]=i,Cn[pa++]=a,Cn[pa++]=o,Zh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Wh(e,i,a,o){return Iu(e,i,a,o),Cu(e)}function ga(e,i){return Iu(e,null,null,i),Cu(e)}function Hp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ke(a),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),d):null}function Cu(e){if(50<sl)throw sl=0,sd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ya={};function OA(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,o){return new OA(e,i,a,o)}function Jh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,a,o,h,d){var v=0;if(o=e,typeof e=="function")Jh(e)&&(v=1);else if(typeof e=="string")v=MS(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=dn(31,a,i,h),e.elementType=R,e.lanes=d,e;case $:return Es(a.children,h,d,i);case et:v=8,h|=24;break;case Z:return e=dn(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case At:return e=dn(13,a,i,h),e.elementType=At,e.lanes=d,e;case Bt:return e=dn(19,a,i,h),e.elementType=Bt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:case ut:v=10;break t;case it:v=9;break t;case Ut:v=11;break t;case V:v=14;break t;case S:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=dn(v,a,i,h),i.elementType=e,i.type=o,i.lanes=d,i}function Es(e,i,a,o){return e=dn(7,e,o,i),e.lanes=a,e}function tf(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function ef(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _a=[],va=0,Ou=null,Nu=0,Dn=[],On=0,Ts=null,Pi=1,xi="";function As(e,i){_a[va++]=Nu,_a[va++]=Ou,Ou=e,Nu=i}function Gp(e,i,a){Dn[On++]=Pi,Dn[On++]=xi,Dn[On++]=Ts,Ts=e;var o=Pi;e=xi;var h=32-Ke(o)-1;o&=~(1<<h),a+=1;var d=32-Ke(i)+h;if(30<d){var v=h-h%5;d=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Pi=1<<32-Ke(i)+h|a<<h|o,xi=d+e}else Pi=1<<d|a<<h|o,xi=e}function nf(e){e.return!==null&&(As(e,1),Gp(e,1,0))}function rf(e){for(;e===Ou;)Ou=_a[--va],_a[va]=null,Nu=_a[--va],_a[va]=null;for(;e===Ts;)Ts=Dn[--On],Dn[On]=null,xi=Dn[--On],Dn[On]=null,Pi=Dn[--On],Dn[On]=null}var nn=null,le=null,zt=!1,Ss=null,si=!1,sf=Error(s(519));function ws(e){var i=Error(s(418,""));throw Uo(In(i,e)),sf}function Kp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Ee]=e,i[me]=o,a){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ct(ol[a],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Ct("invalid",i),ls(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ia(i);break;case"select":Ct("invalid",i);break;case"textarea":Ct("invalid",i),us(i,o.value,o.defaultValue,o.children),ia(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||u_(i.textContent,a)?(o.popover!=null&&(Ct("beforetoggle",i),Ct("toggle",i)),o.onScroll!=null&&Ct("scroll",i),o.onScrollEnd!=null&&Ct("scrollend",i),o.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||ws(e)}function Yp(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:nn=nn.return}}function Po(e){if(e!==nn)return!1;if(!zt)return Yp(e),zt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Td(e.type,e.memoizedProps)),a=!a),a&&le&&ws(e),Yp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=jn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Sr(e.type)?(e=bd,bd=null,le=e):le=i):le=nn?jn(e.stateNode.nextSibling):null;return!0}function xo(){le=nn=null,zt=!1}function Qp(){var e=Ss;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ss=null),e}function Uo(e){Ss===null?Ss=[e]:Ss.push(e)}var af=Q(null),bs=null,Ui=null;function lr(e,i,a){W(af,i._currentValue),i._currentValue=a}function Li(e){e._currentValue=af.current,nt(af)}function of(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function lf(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),of(d.return,a,e),o||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),of(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Lo(e,i,a,o){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ce.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}h=h.return}e!==null&&lf(i,e,a,o),i.flags|=262144}function Mu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){bs=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return Xp(bs,e)}function Vu(e,i){return bs===null&&Rs(e),Xp(e,i)}function Xp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(s(308));Ui=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ui=Ui.next=i;return a}var NA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},MA=r.unstable_scheduleCallback,VA=r.unstable_NormalPriority,Se={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new NA,data:new Map,refCount:0}}function zo(e){e.refCount--,e.refCount===0&&MA(VA,function(){e.controller.abort()})}var Bo=null,cf=0,Ea=0,Ta=null;function kA(e,i){if(Bo===null){var a=Bo=[];cf=0,Ea=fd(),Ta={status:"pending",value:void 0,then:function(o){a.push(o)}}}return cf++,i.then($p,$p),i}function $p(){if(--cf===0&&Bo!==null){Ta!==null&&(Ta.status="fulfilled");var e=Bo;Bo=null,Ea=0,Ta=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function PA(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Zp=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&kA(e,i),Zp!==null&&Zp(e,i)};var Is=Q(null);function hf(){var e=Is.current;return e!==null?e:Wt.pooledCache}function ku(e,i){i===null?W(Is,Is.current):W(Is,i.pool)}function Wp(){var e=hf();return e===null?null:{parent:Se._currentValue,pool:e}}var qo=Error(s(460)),Jp=Error(s(474)),Pu=Error(s(542)),ff={then:function(){}};function tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xu(){}function eg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(xu,xu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ig(e),e;default:if(typeof i.status=="string")i.then(xu,xu);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ig(e),e}throw jo=i,qo}}var jo=null;function ng(){if(jo===null)throw Error(s(459));var e=jo;return jo=null,e}function ig(e){if(e===qo||e===Pu)throw Error(s(483))}var ur=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hr(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Cu(e),Hp(e,null,a),i}return Iu(e,o,i,a),Cu(e)}function Ho(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,yo(e,a)}}function pf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var gf=!1;function Fo(){if(gf){var e=Ta;if(e!==null)throw e}}function Go(e,i,a,o){gf=!1;var h=e.updateQueue;ur=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=w))}if(d!==null){var K=h.baseState;v=0,F=L=w=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(kt&z)===z:(o&z)===z){z!==0&&z===Ea&&(gf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var _t=e,mt=E;z=i;var Xt=a;switch(mt.tag){case 1:if(_t=mt.payload,typeof _t=="function"){K=_t.call(Xt,K,z);break t}K=_t;break t;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=mt.payload,z=typeof _t=="function"?_t.call(Xt,K,z):_t,z==null)break t;K=A({},K,z);break t;case 2:ur=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,w=K):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(w=K),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),vr|=v,e.lanes=v,e.memoizedState=K}}function rg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function sg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rg(a[e],i)}var Aa=Q(null),Uu=Q(0);function ag(e,i){e=Gi,W(Uu,e),W(Aa,i),Gi=e|i.baseLanes}function yf(){W(Uu,Gi),W(Aa,Aa.current)}function _f(){Gi=Uu.current,nt(Aa),nt(Uu)}var fr=0,wt=null,Yt=null,ge=null,Lu=!1,Sa=!1,Cs=!1,zu=0,Ko=0,wa=null,xA=0;function he(){throw Error(s(321))}function vf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function Ef(e,i,a,o,h,d){return fr=d,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Hg:Fg,Cs=!1,d=a(o,h),Cs=!1,Sa&&(d=lg(i,a,o,h)),og(e),d}function og(e){H.H=Gu;var i=Yt!==null&&Yt.next!==null;if(fr=0,ge=Yt=wt=null,Lu=!1,Ko=0,wa=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&Mu(e)&&(Ne=!0))}function lg(e,i,a,o){wt=e;var h=0;do{if(Sa&&(wa=null),Ko=0,Sa=!1,25<=h)throw Error(s(301));if(h+=1,ge=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=HA,d=i(a,o)}while(Sa);return d}function UA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Yo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(wt.flags|=1024),i}function Tf(){var e=zu!==0;return zu=0,e}function Af(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Sf(e){if(Lu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Lu=!1}fr=0,ge=Yt=wt=null,Sa=!1,Ko=zu=0,wa=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?wt.memoizedState=ge=e:ge=ge.next=e,ge}function ye(){if(Yt===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=ge===null?wt.memoizedState:ge.next;if(i!==null)ge=i,Yt=e;else{if(e===null)throw wt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},ge===null?wt.memoizedState=ge=e:ge=ge.next=e}return ge}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(e){var i=Ko;return Ko+=1,wa===null&&(wa=[]),e=eg(wa,e,i),i=wt,(ge===null?i.memoizedState:ge.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Hg:Fg),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===ut)return Ye(e)}throw Error(s(438,String(e)))}function bf(e){var i=null,a=wt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=wt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=wf(),wt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=N;return i.index++,a}function zi(e,i){return typeof i=="function"?i(e):i}function qu(e){var i=ye();return Rf(i,Yt,e)}function Rf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(kt&K)===K:(fr&K)===K){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===Ea&&(F=!0);else if((fr&z)===z){L=L.next,z===Ea&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=K,v=d):w=w.next=K,wt.lanes|=z,vr|=z;K=L.action,Cs&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,wt.lanes|=K,vr|=K;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!fn(d,e.memoizedState)&&(Ne=!0,F&&(a=Ta,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function If(e){var i=ye(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function ug(e,i,a){var o=wt,h=ye(),d=zt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Ne=!0),h=h.queue;var E=fg.bind(null,o,h,e);if(Qo(2048,8,E,[e]),h.getSnapshot!==i||v||ge!==null&&ge.memoizedState.tag&1){if(o.flags|=2048,ba(9,ju(),hg.bind(null,o,h,a,i),null),Wt===null)throw Error(s(349));d||(fr&124)!==0||cg(o,i,a)}return a}function cg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=wt.updateQueue,i===null?(i=wf(),wt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function hg(e,i,a,o){i.value=a,i.getSnapshot=o,dg(i)&&mg(e)}function fg(e,i,a){return a(function(){dg(i)&&mg(e)})}function dg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function mg(e){var i=ga(e,2);i!==null&&_n(i,e,2)}function Cf(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),Cs){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},i}function pg(e,i,a,o){return e.baseState=a,Rf(e,Yt,typeof o=="function"?o:zi)}function LA(e,i,a,o,h){if(Fu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,gg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function gg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var E=a(h,o),w=H.S;w!==null&&w(v,E),yg(e,i,E)}catch(L){Df(e,i,L)}finally{H.T=d}}else try{d=a(h,o),yg(e,i,d)}catch(L){Df(e,i,L)}}function yg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_g(e,i,o)},function(o){return Df(e,i,o)}):_g(e,i,a)}function _g(e,i,a){i.status="fulfilled",i.value=a,vg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,gg(e,a)))}function Df(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,vg(i),i=i.next;while(i!==o)}e.action=null}function vg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Eg(e,i){return i}function Tg(e,i){if(zt){var a=Wt.formState;if(a!==null){t:{var o=wt;if(zt){if(le){e:{for(var h=le,d=si;h.nodeType!==8;){if(!d){h=null;break e}if(h=jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=jn(h.nextSibling),o=h.data==="F!";break t}}ws(o)}o=!1}o&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:i},a.queue=o,a=Bg.bind(null,wt,o),o.dispatch=a,o=Cf(!1),d=kf.bind(null,wt,!1,o.queue),o=rn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=LA.bind(null,wt,h,d,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function Ag(e){var i=ye();return Sg(i,Yt,e)}function Sg(e,i,a){if(i=Rf(e,i,Eg)[0],e=qu(zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Yo(i)}catch(v){throw v===qo?Pu:v}else o=i;i=ye();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(wt.flags|=2048,ba(9,ju(),zA.bind(null,h,a),null)),[o,d,e]}function zA(e,i){e.action=i}function wg(e){var i=ye(),a=Yt;if(a!==null)return Sg(i,a,e);ye(),i=i.memoizedState,a=ye();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function ba(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=wt.updateQueue,i===null&&(i=wf(),wt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function ju(){return{destroy:void 0,resource:void 0}}function bg(){return ye().memoizedState}function Hu(e,i,a,o){var h=rn();o=o===void 0?null:o,wt.flags|=e,h.memoizedState=ba(1|i,ju(),a,o)}function Qo(e,i,a,o){var h=ye();o=o===void 0?null:o;var d=h.memoizedState.inst;Yt!==null&&o!==null&&vf(o,Yt.memoizedState.deps)?h.memoizedState=ba(i,d,a,o):(wt.flags|=e,h.memoizedState=ba(1|i,d,a,o))}function Rg(e,i){Hu(8390656,8,e,i)}function Ig(e,i){Qo(2048,8,e,i)}function Cg(e,i){return Qo(4,2,e,i)}function Dg(e,i){return Qo(4,4,e,i)}function Og(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ng(e,i,a){a=a!=null?a.concat([e]):null,Qo(4,4,Og.bind(null,i,e),a)}function Of(){}function Mg(e,i){var a=ye();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&vf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Vg(e,i){var a=ye();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&vf(i,o[1]))return o[0];if(o=e(),Cs){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[o,i],o}function Nf(e,i,a){return a===void 0||(fr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=xy(),wt.lanes|=e,vr|=e,a)}function kg(e,i,a,o){return fn(a,i)?a:Aa.current!==null?(e=Nf(e,a,o),fn(e,i)||(Ne=!0),e):(fr&42)===0?(Ne=!0,e.memoizedState=a):(e=xy(),wt.lanes|=e,vr|=e,i)}function Pg(e,i,a,o,h){var d=tt.p;tt.p=d!==0&&8>d?d:8;var v=H.T,E={};H.T=E,kf(e,!1,i,a);try{var w=h(),L=H.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=PA(w,o);Xo(e,i,F,yn(e))}else Xo(e,i,o,yn(e))}catch(K){Xo(e,i,{then:function(){},status:"rejected",reason:K},yn())}finally{tt.p=d,H.T=v}}function BA(){}function Mf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=xg(e).queue;Pg(e,h,i,ht,a===null?BA:function(){return Ug(e),a(o)})}function xg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:ht},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ug(e){var i=xg(e).next.queue;Xo(e,i,{},yn())}function Vf(){return Ye(dl)}function Lg(){return ye().memoizedState}function zg(){return ye().memoizedState}function qA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=cr(a);var o=hr(i,e,a);o!==null&&(_n(o,i,a),Ho(o,i,a)),i={cache:uf()},e.payload=i;return}i=i.return}}function jA(e,i,a){var o=yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fu(e)?qg(i,a):(a=Wh(e,i,a,o),a!==null&&(_n(a,e,o),jg(a,i,o)))}function Bg(e,i,a){var o=yn();Xo(e,i,a,o)}function Xo(e,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))qg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,fn(E,v))return Iu(e,i,h,0),Wt===null&&Ru(),!1}catch{}finally{}if(a=Wh(e,i,h,o),a!==null)return _n(a,e,o),jg(a,i,o),!0}return!1}function kf(e,i,a,o){if(o={lane:2,revertLane:fd(),action:o,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(i)throw Error(s(479))}else i=Wh(e,a,o,2),i!==null&&_n(i,e,2)}function Fu(e){var i=e.alternate;return e===wt||i!==null&&i===wt}function qg(e,i){Sa=Lu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function jg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,yo(e,a)}}var Gu={readContext:Ye,use:Bu,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he},Hg={readContext:Ye,use:Bu,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:Ye,useEffect:Rg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Hu(4194308,4,Og.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Hu(4194308,4,e,i)},useInsertionEffect:function(e,i){Hu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var o=e();if(Cs){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=rn();if(a!==void 0){var h=a(i);if(Cs){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=jA.bind(null,wt,e),[o.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=Cf(e);var i=e.queue,a=Bg.bind(null,wt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,i){var a=rn();return Nf(a,e,i)},useTransition:function(){var e=Cf(!1);return e=Pg.bind(null,wt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=wt,h=rn();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(kt&124)!==0||cg(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Rg(fg.bind(null,o,d,e),[e]),o.flags|=2048,ba(9,ju(),hg.bind(null,o,d,a,i),null),a},useId:function(){var e=rn(),i=Wt.identifierPrefix;if(zt){var a=xi,o=Pi;a=(o&~(1<<32-Ke(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=zu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=xA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Vf,useFormState:Tg,useActionState:Tg,useOptimistic:function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=kf.bind(null,wt,!0,a),a.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return rn().memoizedState=qA.bind(null,wt)}},Fg={readContext:Ye,use:Bu,useCallback:Mg,useContext:Ye,useEffect:Ig,useImperativeHandle:Ng,useInsertionEffect:Cg,useLayoutEffect:Dg,useMemo:Vg,useReducer:qu,useRef:bg,useState:function(){return qu(zi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=ye();return kg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=qu(zi)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:Yo(e),i]},useSyncExternalStore:ug,useId:Lg,useHostTransitionStatus:Vf,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,i){var a=ye();return pg(a,Yt,e,i)},useMemoCache:bf,useCacheRefresh:zg},HA={readContext:Ye,use:Bu,useCallback:Mg,useContext:Ye,useEffect:Ig,useImperativeHandle:Ng,useInsertionEffect:Cg,useLayoutEffect:Dg,useMemo:Vg,useReducer:If,useRef:bg,useState:function(){return If(zi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=ye();return Yt===null?Nf(a,e,i):kg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=If(zi)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:Yo(e),i]},useSyncExternalStore:ug,useId:Lg,useHostTransitionStatus:Vf,useFormState:wg,useActionState:wg,useOptimistic:function(e,i){var a=ye();return Yt!==null?pg(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:zg},Ra=null,$o=0;function Ku(e){var i=$o;return $o+=1,Ra===null&&(Ra=[]),eg(Ra,e,i)}function Zo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Yu(e,i){throw i.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gg(e){var i=e._init;return i(e._payload)}function Kg(e){function i(k,O){if(e){var U=k.deletions;U===null?(k.deletions=[O],k.flags|=16):U.push(O)}}function a(k,O){if(!e)return null;for(;O!==null;)i(k,O),O=O.sibling;return null}function o(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=ki(k,O),k.index=0,k.sibling=null,k}function d(k,O,U){return k.index=U,e?(U=k.alternate,U!==null?(U=U.index,U<O?(k.flags|=67108866,O):U):(k.flags|=67108866,O)):(k.flags|=1048576,O)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function E(k,O,U,G){return O===null||O.tag!==6?(O=tf(U,k.mode,G),O.return=k,O):(O=h(O,U),O.return=k,O)}function w(k,O,U,G){var at=U.type;return at===$?F(k,O,U.props.children,G,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Gg(at)===O.type)?(O=h(O,U.props),Zo(O,U),O.return=k,O):(O=Du(U.type,U.key,U.props,null,k.mode,G),Zo(O,U),O.return=k,O)}function L(k,O,U,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=ef(U,k.mode,G),O.return=k,O):(O=h(O,U.children||[]),O.return=k,O)}function F(k,O,U,G,at){return O===null||O.tag!==7?(O=Es(U,k.mode,G,at),O.return=k,O):(O=h(O,U),O.return=k,O)}function K(k,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=tf(""+O,k.mode,U),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Du(O.type,O.key,O.props,null,k.mode,U),Zo(U,O),U.return=k,U;case j:return O=ef(O,k.mode,U),O.return=k,O;case S:var G=O._init;return O=G(O._payload),K(k,O,U)}if(ae(O)||P(O))return O=Es(O,k.mode,U,null),O.return=k,O;if(typeof O.then=="function")return K(k,Ku(O),U);if(O.$$typeof===ut)return K(k,Vu(k,O),U);Yu(k,O)}return null}function z(k,O,U,G){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:E(k,O,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===at?w(k,O,U,G):null;case j:return U.key===at?L(k,O,U,G):null;case S:return at=U._init,U=at(U._payload),z(k,O,U,G)}if(ae(U)||P(U))return at!==null?null:F(k,O,U,G,null);if(typeof U.then=="function")return z(k,O,Ku(U),G);if(U.$$typeof===ut)return z(k,O,Vu(k,U),G);Yu(k,U)}return null}function B(k,O,U,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return k=k.get(U)||null,E(O,k,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return k=k.get(G.key===null?U:G.key)||null,w(O,k,G,at);case j:return k=k.get(G.key===null?U:G.key)||null,L(O,k,G,at);case S:var Rt=G._init;return G=Rt(G._payload),B(k,O,U,G,at)}if(ae(G)||P(G))return k=k.get(U)||null,F(O,k,G,at,null);if(typeof G.then=="function")return B(k,O,U,Ku(G),at);if(G.$$typeof===ut)return B(k,O,U,Vu(O,G),at);Yu(O,G)}return null}function _t(k,O,U,G){for(var at=null,Rt=null,ct=O,pt=O=0,Ve=null;ct!==null&&pt<U.length;pt++){ct.index>pt?(Ve=ct,ct=null):Ve=ct.sibling;var xt=z(k,ct,U[pt],G);if(xt===null){ct===null&&(ct=Ve);break}e&&ct&&xt.alternate===null&&i(k,ct),O=d(xt,O,pt),Rt===null?at=xt:Rt.sibling=xt,Rt=xt,ct=Ve}if(pt===U.length)return a(k,ct),zt&&As(k,pt),at;if(ct===null){for(;pt<U.length;pt++)ct=K(k,U[pt],G),ct!==null&&(O=d(ct,O,pt),Rt===null?at=ct:Rt.sibling=ct,Rt=ct);return zt&&As(k,pt),at}for(ct=o(ct);pt<U.length;pt++)Ve=B(ct,k,pt,U[pt],G),Ve!==null&&(e&&Ve.alternate!==null&&ct.delete(Ve.key===null?pt:Ve.key),O=d(Ve,O,pt),Rt===null?at=Ve:Rt.sibling=Ve,Rt=Ve);return e&&ct.forEach(function(Cr){return i(k,Cr)}),zt&&As(k,pt),at}function mt(k,O,U,G){if(U==null)throw Error(s(151));for(var at=null,Rt=null,ct=O,pt=O=0,Ve=null,xt=U.next();ct!==null&&!xt.done;pt++,xt=U.next()){ct.index>pt?(Ve=ct,ct=null):Ve=ct.sibling;var Cr=z(k,ct,xt.value,G);if(Cr===null){ct===null&&(ct=Ve);break}e&&ct&&Cr.alternate===null&&i(k,ct),O=d(Cr,O,pt),Rt===null?at=Cr:Rt.sibling=Cr,Rt=Cr,ct=Ve}if(xt.done)return a(k,ct),zt&&As(k,pt),at;if(ct===null){for(;!xt.done;pt++,xt=U.next())xt=K(k,xt.value,G),xt!==null&&(O=d(xt,O,pt),Rt===null?at=xt:Rt.sibling=xt,Rt=xt);return zt&&As(k,pt),at}for(ct=o(ct);!xt.done;pt++,xt=U.next())xt=B(ct,k,pt,xt.value,G),xt!==null&&(e&&xt.alternate!==null&&ct.delete(xt.key===null?pt:xt.key),O=d(xt,O,pt),Rt===null?at=xt:Rt.sibling=xt,Rt=xt);return e&&ct.forEach(function(FS){return i(k,FS)}),zt&&As(k,pt),at}function Xt(k,O,U,G){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===$){if(O.tag===7){a(k,O.sibling),G=h(O,U.props.children),G.return=k,k=G;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&Gg(at)===O.type){a(k,O.sibling),G=h(O,U.props),Zo(G,U),G.return=k,k=G;break t}a(k,O);break}else i(k,O);O=O.sibling}U.type===$?(G=Es(U.props.children,k.mode,G,U.key),G.return=k,k=G):(G=Du(U.type,U.key,U.props,null,k.mode,G),Zo(G,U),G.return=k,k=G)}return v(k);case j:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(k,O.sibling),G=h(O,U.children||[]),G.return=k,k=G;break t}else{a(k,O);break}else i(k,O);O=O.sibling}G=ef(U,k.mode,G),G.return=k,k=G}return v(k);case S:return at=U._init,U=at(U._payload),Xt(k,O,U,G)}if(ae(U))return _t(k,O,U,G);if(P(U)){if(at=P(U),typeof at!="function")throw Error(s(150));return U=at.call(U),mt(k,O,U,G)}if(typeof U.then=="function")return Xt(k,O,Ku(U),G);if(U.$$typeof===ut)return Xt(k,O,Vu(k,U),G);Yu(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(k,O.sibling),G=h(O,U),G.return=k,k=G):(a(k,O),G=tf(U,k.mode,G),G.return=k,k=G),v(k)):a(k,O)}return function(k,O,U,G){try{$o=0;var at=Xt(k,O,U,G);return Ra=null,at}catch(ct){if(ct===qo||ct===Pu)throw ct;var Rt=dn(29,ct,null,k.mode);return Rt.lanes=G,Rt.return=k,Rt}finally{}}}var Ia=Kg(!0),Yg=Kg(!1),Nn=Q(null),ai=null;function dr(e){var i=e.alternate;W(we,we.current&1),W(Nn,e),ai===null&&(i===null||Aa.current!==null||i.memoizedState!==null)&&(ai=e)}function Qg(e){if(e.tag===22){if(W(we,we.current),W(Nn,e),ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ai=e)}}else mr()}function mr(){W(we,we.current),W(Nn,Nn.current)}function Bi(e){nt(Nn),ai===e&&(ai=null),nt(we)}var we=Q(0);function Qu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Pf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:A({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=yn(),h=cr(o);h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,o),i!==null&&(_n(i,e,o),Ho(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=yn(),h=cr(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(e,h,o),i!==null&&(_n(i,e,o),Ho(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),o=cr(a);o.tag=2,i!=null&&(o.callback=i),i=hr(e,o,a),i!==null&&(_n(i,e,a),Ho(i,e,a))}};function Xg(e,i,a,o,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):i.prototype&&i.prototype.isPureReactComponent?!Vo(a,o)||!Vo(h,d):!0}function $g(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Ds(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=A({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zg(e){Xu(e)}function Wg(e){console.error(e)}function Jg(e){Xu(e)}function $u(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function ty(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Uf(e,i,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(e,i)},a}function ey(e){return e=cr(e),e.tag=3,e}function ny(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){ty(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ty(i,a,o),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function FA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Lo(i,a,h,!0),a=Nn.current,a!==null){switch(a.tag){case 13:return ai===null?od():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===ff?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),ud(e,o,h)),!1;case 22:return a.flags|=65536,o===ff?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),ud(e,o,h)),!1}throw Error(s(435,a.tag))}return ud(e,o,h),od(),!1}if(zt)return i=Nn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==sf&&(e=Error(s(422),{cause:o}),Uo(In(e,a)))):(o!==sf&&(i=Error(s(423),{cause:o}),Uo(In(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=In(o,a),h=Uf(e.stateNode,o,h),pf(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:o});if(d=In(d,a),rl===null?rl=[d]:rl.push(d),ue!==4&&(ue=2),i===null)return!0;o=In(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Uf(a.stateNode,o,e),pf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ey(h),ny(h,e,a,o),pf(a,h),!1}a=a.return}while(a!==null);return!1}var iy=Error(s(461)),Ne=!1;function Be(e,i,a,o){i.child=e===null?Yg(i,null,a,o):Ia(i,e.child,a,o)}function ry(e,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return Rs(i),o=Ef(e,i,a,v,d,h),E=Tf(),e!==null&&!Ne?(Af(e,i,h),qi(e,i,h)):(zt&&E&&nf(i),i.flags|=1,Be(e,i,o,h),i.child)}function sy(e,i,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!Jh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ay(e,i,d,o,h)):(e=Du(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Gf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(v,o)&&e.ref===i.ref)return qi(e,i,h)}return i.flags|=1,e=ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function ay(e,i,a,o,h){if(e!==null){var d=e.memoizedProps;if(Vo(d,o)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=o=d,Gf(e,h))(e.flags&131072)!==0&&(Ne=!0);else return i.lanes=e.lanes,qi(e,i,h)}return Lf(e,i,a,o,h)}function oy(e,i,a){var o=i.pendingProps,h=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return ly(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,d!==null?d.cachePool:null),d!==null?ag(i,d):yf(),Qg(i);else return i.lanes=i.childLanes=536870912,ly(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(ku(i,d.cachePool),ag(i,d),mr(),i.memoizedState=null):(e!==null&&ku(i,null),yf(),mr());return Be(e,i,h,a),i.child}function ly(e,i,a,o){var h=hf();return h=h===null?null:{parent:Se._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&ku(i,null),yf(),Qg(i),e!==null&&Lo(e,i,o,!0),null}function Zu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Lf(e,i,a,o,h){return Rs(i),a=Ef(e,i,a,o,void 0,h),o=Tf(),e!==null&&!Ne?(Af(e,i,h),qi(e,i,h)):(zt&&o&&nf(i),i.flags|=1,Be(e,i,a,h),i.child)}function uy(e,i,a,o,h,d){return Rs(i),i.updateQueue=null,a=lg(i,o,a,h),og(e),o=Tf(),e!==null&&!Ne?(Af(e,i,d),qi(e,i,d)):(zt&&o&&nf(i),i.flags|=1,Be(e,i,a,d),i.child)}function cy(e,i,a,o,h){if(Rs(i),i.stateNode===null){var d=ya,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ye(v)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},df(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ye(v):ya,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Pf(i,a,v,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&xf.enqueueReplaceState(d,d.state,null),Go(i,o,d,h),Fo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Ds(a,E);d.props=w;var L=d.context,F=a.contextType;v=ya,typeof F=="object"&&F!==null&&(v=Ye(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&$g(i,d,o,v),ur=!1;var z=i.memoizedState;d.state=z,Go(i,o,d,h),Fo(),L=i.memoizedState,E||z!==L||ur?(typeof K=="function"&&(Pf(i,a,K,o),L=i.memoizedState),(w=ur||Xg(i,a,w,o,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=L),d.props=o,d.state=L,d.context=v,o=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,mf(e,i),v=i.memoizedProps,F=Ds(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,w=ya,typeof L=="object"&&L!==null&&(w=Ye(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==w)&&$g(i,d,o,w),ur=!1,z=i.memoizedState,d.state=z,Go(i,o,d,h),Fo();var B=i.memoizedState;v!==K||z!==B||ur||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof E=="function"&&(Pf(i,a,E,o),B=i.memoizedState),(F=ur||Xg(i,a,F,o,z,B,w)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,B,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,B,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),d.props=o,d.state=B,d.context=w,o=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Zu(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ia(i,e.child,null,h),i.child=Ia(i,null,a,h)):Be(e,i,a,h),i.memoizedState=d.state,e=i.child):e=qi(e,i,h),e}function hy(e,i,a,o){return xo(),i.flags|=256,Be(e,i,a,o),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:Wp()}}function qf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Mn),e}function fy(e,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(zt){if(h?dr(i):mr(),zt){var E=le,w;if(w=E){t:{for(w=E,E=si;w.nodeType!==8;){if(!E){E=null;break t}if(w=jn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:Ts!==null?{id:Pi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},w=dn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,nn=i,le=null,w=!0):w=!1}w||ws(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return wd(E)?i.lanes=32:i.lanes=536870912,null;Bi(i)}return E=o.children,o=o.fallback,h?(mr(),h=i.mode,E=Wu({mode:"hidden",children:E},h),o=Es(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,h=i.child,h.memoizedState=Bf(a),h.childLanes=qf(e,v,a),i.memoizedState=zf,o):(dr(i),jf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(dr(i),i.flags&=-257,i=Hf(e,i,a)):i.memoizedState!==null?(mr(),i.child=e.child,i.flags|=128,i=null):(mr(),h=o.fallback,E=i.mode,o=Wu({mode:"visible",children:o.children},E),h=Es(h,E,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,Ia(i,e.child,null,a),o=i.child,o.memoizedState=Bf(a),o.childLanes=qf(e,v,a),i.memoizedState=zf,i=h);else if(dr(i),wd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,o=Error(s(419)),o.stack="",o.digest=v,Uo({value:o,source:null,stack:null}),i=Hf(e,i,a)}else if(Ne||Lo(e,i,a,!1),v=(a&e.childLanes)!==0,Ne||v){if(v=Wt,v!==null&&(o=a&-a,o=(o&42)!==0?1:er(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==w.retryLane))throw w.retryLane=o,ga(e,o),_n(v,e,o),iy;E.data==="$?"||od(),i=Hf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,le=jn(E.nextSibling),nn=i,zt=!0,Ss=null,si=!1,e!==null&&(Dn[On++]=Pi,Dn[On++]=xi,Dn[On++]=Ts,Pi=e.id,xi=e.overflow,Ts=i),i=jf(i,o.children),i.flags|=4096);return i}return h?(mr(),h=o.fallback,E=i.mode,w=e.child,L=w.sibling,o=ki(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=ki(L,h):(h=Es(h,E,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,E=e.child.memoizedState,E===null?E=Bf(a):(w=E.cachePool,w!==null?(L=Se._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=Wp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=qf(e,v,a),i.memoizedState=zf,o):(dr(i),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function jf(e,i){return i=Wu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wu(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hf(e,i,a){return Ia(i,e.child,null,a),e=jf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function dy(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),of(e.return,i,a)}function Ff(e,i,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function my(e,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;if(Be(e,i,o.children,a),o=we.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dy(e,a,i);else if(e.tag===19)dy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(W(we,o),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Qu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ff(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Qu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Ff(i,!0,a,null,d);break;case"together":Ff(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),vr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Lo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Gf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function GA(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),lr(i,Se,e.memoizedState.cache),xo();break;case 27:case 5:tr(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:lr(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?fy(e,i,a):(dr(i),e=qi(e,i,a),e!==null?e.sibling:null);dr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Lo(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return my(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(we,we.current),o)break;return null;case 22:case 23:return i.lanes=0,oy(e,i,a);case 24:lr(i,Se,e.memoizedState.cache)}return qi(e,i,a)}function py(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!Gf(e,a)&&(i.flags&128)===0)return Ne=!1,GA(e,i,a);Ne=(e.flags&131072)!==0}else Ne=!1,zt&&(i.flags&1048576)!==0&&Gp(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")Jh(o)?(e=Ds(o,e),i.tag=1,i=cy(null,i,o,e,a)):(i.tag=0,i=Lf(null,i,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===Ut){i.tag=11,i=ry(null,i,o,e,a);break t}else if(h===V){i.tag=14,i=sy(null,i,o,e,a);break t}}throw i=Ue(o)||o,Error(s(306,i,""))}}return i;case 0:return Lf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=Ds(o,i.pendingProps),cy(e,i,o,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;h=d.element,mf(e,i),Go(i,o,null,a);var v=i.memoizedState;if(o=v.cache,lr(i,Se,o),o!==d.cache&&lf(i,[Se],a,!0),Fo(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=hy(e,i,o,a);break t}else if(o!==h){h=In(Error(s(424)),i),Uo(h),i=hy(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=jn(e.firstChild),nn=i,zt=!0,Ss=null,si=!0,a=Yg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xo(),o===h){i=qi(e,i,a);break t}Be(e,i,o,a)}i=i.child}return i;case 26:return Zu(e,i),e===null?(a=v_(i.type,null,i.pendingProps,null))?i.memoizedState=a:zt||(a=i.type,e=i.pendingProps,o=fc(vt.current).createElement(a),o[Ee]=i,o[me]=e,je(o,a,e),ce(o),i.stateNode=o):i.memoizedState=v_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return tr(i),e===null&&zt&&(o=i.stateNode=g_(i.type,i.pendingProps,vt.current),nn=i,si=!0,h=le,Sr(i.type)?(bd=h,le=jn(o.firstChild)):le=h),Be(e,i,i.pendingProps.children,a),Zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&zt&&((h=o=le)&&(o=vS(o,i.type,i.pendingProps,si),o!==null?(i.stateNode=o,nn=i,le=jn(o.firstChild),si=!1,h=!0):h=!1),h||ws(i)),tr(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,Td(h,d)?o=null:v!==null&&Td(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Ef(e,i,UA,null,null,a),dl._currentValue=h),Zu(e,i),Be(e,i,o,a),i.child;case 6:return e===null&&zt&&((e=a=le)&&(a=ES(a,i.pendingProps,si),a!==null?(i.stateNode=a,nn=i,le=null,e=!0):e=!1),e||ws(i)),null;case 13:return fy(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ia(i,null,o,a):Be(e,i,o,a),i.child;case 11:return ry(e,i,i.type,i.pendingProps,a);case 7:return Be(e,i,i.pendingProps,a),i.child;case 8:return Be(e,i,i.pendingProps.children,a),i.child;case 12:return Be(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,lr(i,i.type,o.value),Be(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Rs(i),h=Ye(h),o=o(h),i.flags|=1,Be(e,i,o,a),i.child;case 14:return sy(e,i,i.type,i.pendingProps,a);case 15:return ay(e,i,i.type,i.pendingProps,a);case 19:return my(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Wu(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ki(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return oy(e,i,a);case 24:return Rs(i),o=Ye(Se),e===null?(h=hf(),h===null&&(h=Wt,d=uf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},df(i),lr(i,Se,h)):((e.lanes&a)!==0&&(mf(e,i),Go(i,null,null,a),Fo()),h=e.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),lr(i,Se,o)):(o=d.cache,lr(i,Se,o),o!==h.cache&&lf(i,[Se],a,!0))),Be(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ji(e){e.flags|=4}function gy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!w_(i)){if(i=Nn.current,i!==null&&((kt&4194048)===kt?ai!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==ai))throw jo=ff,Jp;e.flags|=8192}}function Ju(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?po():536870912,e.lanes|=i,Na|=i)}function Wo(e,i){if(!zt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function KA(e,i,a){var o=i.pendingProps;switch(rf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Li(Se),Yn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Po(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qp())),ie(i),null;case 26:return a=i.memoizedState,e===null?(ji(i),a!==null?(ie(i),gy(i,a)):(ie(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ji(i),ie(i),gy(i,a)):(ie(i),i.flags&=-16777217):(e.memoizedProps!==o&&ji(i),ie(i),i.flags&=-16777217),null;case 27:Ti(i),a=vt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ji(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=ft.current,Po(i)?Kp(i):(e=g_(h,o,a),i.stateNode=e,ji(i))}return ie(i),null;case 5:if(Ti(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ji(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(e=ft.current,Po(i))Kp(i);else{switch(h=fc(vt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Ee]=i,e[me]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return ie(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ji(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=vt.current,Po(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=nn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||ws(i)}else e=fc(e).createTextNode(o),e[Ee]=i,i.stateNode=e}return ie(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Po(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ee]=i}else xo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=Qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Bi(i),i):(Bi(i),null)}if(Bi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Ju(i,i.updateQueue),ie(i),null;case 4:return Yn(),e===null&&gd(i.stateNode.containerInfo),ie(i),null;case 10:return Li(i.type),ie(i),null;case 19:if(nt(we),h=i.memoizedState,h===null)return ie(i),null;if(o=(i.flags&128)!==0,d=h.rendering,d===null)if(o)Wo(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Qu(e),d!==null){for(i.flags|=128,Wo(h,!1),e=d.updateQueue,i.updateQueue=e,Ju(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Fp(a,e),a=a.sibling;return W(we,we.current&1|2),i.child}e=e.sibling}h.tail!==null&&Tn()>nc&&(i.flags|=128,o=!0,Wo(h,!1),i.lanes=4194304)}else{if(!o)if(e=Qu(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Ju(i,e),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!zt)return ie(i),null}else 2*Tn()-h.renderingStartTime>nc&&a!==536870912&&(i.flags|=128,o=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,e=we.current,W(we,o?e&1|2:e&1),i):(ie(i),null);case 22:case 23:return Bi(i),_f(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&Ju(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&nt(Is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Li(Se),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function YA(e,i){switch(rf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Li(Se),Yn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ti(i),null;case 13:if(Bi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(we),null;case 4:return Yn(),null;case 10:return Li(i.type),null;case 22:case 23:return Bi(i),_f(),e!==null&&nt(Is),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Li(Se),null;case 25:return null;default:return null}}function yy(e,i){switch(rf(i),i.tag){case 3:Li(Se),Yn();break;case 26:case 27:case 5:Ti(i);break;case 4:Yn();break;case 13:Bi(i);break;case 19:nt(we);break;case 10:Li(i.type);break;case 22:case 23:Bi(i),_f(),e!==null&&nt(Is);break;case 24:Li(Se)}}function Jo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==h)}}catch(E){$t(i,i.return,E)}}function pr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(F){$t(h,w,F)}}}o=o.next}while(o!==d)}}catch(F){$t(i,i.return,F)}}function _y(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{sg(i,a)}catch(o){$t(e,e.return,o)}}}function vy(e,i,a){a.props=Ds(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){$t(e,i,o)}}function tl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){$t(e,i,h)}}function oi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function Ey(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function Kf(e,i,a){try{var o=e.stateNode;mS(o,e.type,a,i),o[me]=i}catch(h){$t(e,e.return,h)}}function Ty(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sr(e.type)||e.tag===4}function Yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ty(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=hc));else if(o!==4&&(o===27&&Sr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Qf(e,i,a),e=e.sibling;e!==null;)Qf(e,i,a),e=e.sibling}function tc(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Sr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,i,a),e=e.sibling;e!==null;)tc(e,i,a),e=e.sibling}function Ay(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,o,a),i[Ee]=e,i[me]=a}catch(d){$t(e,e.return,d)}}var Hi=!1,fe=!1,Xf=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,Me=null;function QA(e,i){if(e=e.containerInfo,vd=_c,e=kp(e),Kh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==d||o!==0&&K.nodeType!==3||(w=v+o),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===o&&(w=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ed={focusedElem:e,selectionRange:a},_c=!1,Me=i;Me!==null;)if(i=Me,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Me=e;else for(;Me!==null;){switch(i=Me,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var _t=Ds(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(_t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(mt){$t(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Sd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Me=e;break}Me=i.return}}function wy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:gr(e,a),o&4&&Jo(5,a);break;case 1:if(gr(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){$t(a,a.return,v)}else{var h=Ds(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$t(a,a.return,v)}}o&64&&_y(a),o&512&&tl(a,a.return);break;case 3:if(gr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{sg(e,i)}catch(v){$t(a,a.return,v)}}break;case 27:i===null&&o&4&&Ay(a);case 26:case 5:gr(e,a),i===null&&o&4&&Ey(a),o&512&&tl(a,a.return);break;case 12:gr(e,a);break;case 13:gr(e,a),o&4&&Iy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=iS.bind(null,a),TS(e,a))));break;case 22:if(o=a.memoizedState!==null||Hi,!o){i=i!==null&&i.memoizedState!==null||fe,h=Hi;var d=fe;Hi=o,(fe=i)&&!d?yr(e,a,(a.subtreeFlags&8772)!==0):gr(e,a),Hi=h,fe=d}break;case 30:break;default:gr(e,a)}}function by(e){var i=e.alternate;i!==null&&(e.alternate=null,by(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&rr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,sn=!1;function Fi(e,i,a){for(a=a.child;a!==null;)Ry(e,i,a),a=a.sibling}function Ry(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:fe||oi(a,i),Fi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fe||oi(a,i);var o=ne,h=sn;Sr(a.type)&&(ne=a.stateNode,sn=!1),Fi(e,i,a),ul(a.stateNode),ne=o,sn=h;break;case 5:fe||oi(a,i);case 6:if(o=ne,h=sn,ne=null,Fi(e,i,a),ne=o,sn=h,ne!==null)if(sn)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:ne!==null&&(sn?(e=ne,m_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yl(e)):m_(ne,a.stateNode));break;case 4:o=ne,h=sn,ne=a.stateNode.containerInfo,sn=!0,Fi(e,i,a),ne=o,sn=h;break;case 0:case 11:case 14:case 15:fe||pr(2,a,i),fe||pr(4,a,i),Fi(e,i,a);break;case 1:fe||(oi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vy(a,i,o)),Fi(e,i,a);break;case 21:Fi(e,i,a);break;case 22:fe=(o=fe)||a.memoizedState!==null,Fi(e,i,a),fe=o;break;default:Fi(e,i,a)}}function Iy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yl(e)}catch(a){$t(i,i.return,a)}}function XA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Sy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Sy),i;default:throw Error(s(435,e.tag))}}function $f(e,i){var a=XA(e);i.forEach(function(o){var h=rS.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Sr(E.type)){ne=E.stateNode,sn=!1;break t}break;case 5:ne=E.stateNode,sn=!1;break t;case 3:case 4:ne=E.stateNode.containerInfo,sn=!0;break t}E=E.return}if(ne===null)throw Error(s(160));Ry(d,v,h),ne=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Cy(i,e),i=i.sibling}var qn=null;function Cy(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),pn(e),o&4&&(pr(3,e,e.return),Jo(3,e),pr(5,e,e.return));break;case 1:mn(i,e),pn(e),o&512&&(fe||a===null||oi(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=qn;if(mn(i,e),pn(e),o&512&&(fe||a===null||oi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[rs]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,o,a),d[Ee]=e,ce(d),o=d;break t;case"link":var v=A_("link","href",h).get(o+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(o),je(d,o,a),h.head.appendChild(d);break;case"meta":if(v=A_("meta","content",h).get(o+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(o),je(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ee]=e,ce(d),o=d}e.stateNode=o}else S_(h,e.type,e.stateNode);else e.stateNode=T_(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?S_(h,e.type,e.stateNode):T_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),pn(e),o&512&&(fe||a===null||oi(a,a.return)),a!==null&&o&4&&Kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),pn(e),o&512&&(fe||a===null||oi(a,a.return)),e.flags&32){h=e.stateNode;try{Sn(h,"")}catch(B){$t(e,e.return,B)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Kf(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Xf=!0);break;case 6:if(mn(i,e),pn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(B){$t(e,e.return,B)}}break;case 3:if(pc=null,h=qn,qn=dc(i.containerInfo),mn(i,e),qn=h,pn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yl(i.containerInfo)}catch(B){$t(e,e.return,B)}Xf&&(Xf=!1,Dy(e));break;case 4:o=qn,qn=dc(e.stateNode.containerInfo),mn(i,e),pn(e),qn=o;break;case 12:mn(i,e),pn(e);break;case 13:mn(i,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nd=Tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$f(e,o)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Hi,F=fe;if(Hi=L||h,fe=F||w,mn(i,e),fe=F,Hi=L,pn(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Hi||fe||Os(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var K=w.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){$t(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){$t(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$f(e,a))));break;case 19:mn(i,e),pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$f(e,o)));break;case 30:break;case 21:break;default:mn(i,e),pn(e)}}function pn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Ty(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Yf(e);tc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Sn(v,""),a.flags&=-33);var E=Yf(e);tc(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Yf(e);Qf(e,L,w);break;default:throw Error(s(161))}}catch(F){$t(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Dy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function gr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)wy(e,i.alternate,i),i=i.sibling}function Os(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:pr(4,i,i.return),Os(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&vy(i,i.return,a),Os(i);break;case 27:ul(i.stateNode);case 26:case 5:oi(i,i.return),Os(i);break;case 22:i.memoizedState===null&&Os(i);break;case 30:Os(i);break;default:Os(i)}e=e.sibling}}function yr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:yr(h,d,a),Jo(4,d);break;case 1:if(yr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){$t(o,o.return,L)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)rg(w[h],E)}catch(L){$t(o,o.return,L)}}a&&v&64&&_y(d),tl(d,d.return);break;case 27:Ay(d);case 26:case 5:yr(h,d,a),a&&o===null&&v&4&&Ey(d),tl(d,d.return);break;case 12:yr(h,d,a);break;case 13:yr(h,d,a),a&&v&4&&Iy(h,d);break;case 22:d.memoizedState===null&&yr(h,d,a),tl(d,d.return);break;case 30:break;default:yr(h,d,a)}i=i.sibling}}function Zf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zo(a))}function Wf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&zo(e))}function li(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Oy(e,i,a,o),i=i.sibling}function Oy(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(e,i,a,o),h&2048&&Jo(9,i);break;case 1:li(e,i,a,o);break;case 3:li(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&zo(e)));break;case 12:if(h&2048){li(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(i,i.return,w)}}else li(e,i,a,o);break;case 13:li(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(e,i,a,o):el(e,i):d._visibility&2?li(e,i,a,o):(d._visibility|=2,Ca(e,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&Zf(v,i);break;case 24:li(e,i,a,o),h&2048&&Wf(i.alternate,i);break;default:li(e,i,a,o)}}function Ca(e,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=o,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ca(d,v,E,w,h),Jo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ca(d,v,E,w,h):el(d,v):(F._visibility|=2,Ca(d,v,E,w,h)),h&&L&2048&&Zf(v.alternate,v);break;case 24:Ca(d,v,E,w,h),h&&L&2048&&Wf(v.alternate,v);break;default:Ca(d,v,E,w,h)}i=i.sibling}}function el(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:el(a,o),h&2048&&Zf(o.alternate,o);break;case 24:el(a,o),h&2048&&Wf(o.alternate,o);break;default:el(a,o)}i=i.sibling}}var nl=8192;function Da(e){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)Ny(e),e=e.sibling}function Ny(e){switch(e.tag){case 26:Da(e),e.flags&nl&&e.memoizedState!==null&&kS(qn,e.memoizedState,e.memoizedProps);break;case 5:Da(e);break;case 3:case 4:var i=qn;qn=dc(e.stateNode.containerInfo),Da(e),qn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=nl,nl=16777216,Da(e),nl=i):Da(e));break;default:Da(e)}}function My(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function il(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Me=o,ky(o,e)}My(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vy(e),e=e.sibling}function Vy(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&pr(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ec(e)):il(e);break;default:il(e)}}function ec(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Me=o,ky(o,e)}My(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:pr(8,i,i.return),ec(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ec(i));break;default:ec(i)}e=e.sibling}}function ky(e,i){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:pr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Me=o;else t:for(a=e;Me!==null;){o=Me;var h=o.sibling,d=o.return;if(by(o),o===a){Me=null;break t}if(h!==null){h.return=d,Me=h;break t}Me=d}}}var $A={getCacheForType:function(e){var i=Ye(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},ZA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Wt=null,It=null,kt=0,Gt=0,gn=null,_r=!1,Oa=!1,Jf=!1,Gi=0,ue=0,vr=0,Ns=0,td=0,Mn=0,Na=0,rl=null,an=null,ed=!1,nd=0,nc=1/0,ic=null,Er=null,qe=0,Tr=null,Ma=null,Va=0,id=0,rd=null,Py=null,sl=0,sd=null;function yn(){if((Ft&2)!==0&&kt!==0)return kt&-kt;if(H.T!==null){var e=Ea;return e!==0?e:fd()}return nr()}function xy(){Mn===0&&(Mn=(kt&536870912)===0||zt?mo():536870912);var e=Nn.current;return e!==null&&(e.flags|=32),Mn}function _n(e,i,a){(e===Wt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(ka(e,0),Ar(e,kt,Mn,!1)),Si(e,a),((Ft&2)===0||e!==Wt)&&(e===Wt&&((Ft&2)===0&&(Ns|=a),ue===4&&Ar(e,kt,Mn,!1)),ui(e))}function Uy(e,i,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||is(e,i),h=o?tS(e,i):ld(e,i,!0),d=o;do{if(h===0){Oa&&!o&&Ar(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!WA(a)){h=ld(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=rl;var w=E.current.memoizedState.isDehydrated;if(w&&(ka(E,v).flags|=256),v=ld(E,v,!1),v!==2){if(Jf&&!w){E.errorRecoveryDisabledLanes|=d,Ns|=d,h=4;break t}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){ka(e,0),Ar(e,i,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ar(o,i,Mn,!_r);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=nd+300-Tn(),10<h)){if(Ar(o,i,Mn,!_r),Zs(o,0,!0)!==0)break t;o.timeoutHandle=f_(Ly.bind(null,o,a,an,ic,ed,i,Mn,Ns,Na,_r,d,2,-0,0),h);break t}Ly(o,a,an,ic,ed,i,Mn,Ns,Na,_r,d,0,-0,0)}}break}while(!0);ui(e)}function Ly(e,i,a,o,h,d,v,E,w,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(fl={stylesheets:null,count:0,unsuspend:VS},Ny(i),K=PS(),K!==null)){e.cancelPendingCommit=K(Gy.bind(null,e,i,d,a,o,h,v,E,w,F,1,z,B)),Ar(e,d,v,!L);return}Gy(e,i,d,a,o,h,v,E,w)}function WA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(e,i,a,o){i&=~td,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var d=31-Ke(h),v=1<<d;o[d]=-1,h&=~v}a!==0&&Qn(e,a,i)}function rc(){return(Ft&6)===0?(al(0),!1):!0}function ad(){if(It!==null){if(Gt===0)var e=It.return;else e=It,Ui=bs=null,Sf(e),Ra=null,$o=0,e=It;for(;e!==null;)yy(e.alternate,e),e=e.return;It=null}}function ka(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ad(),Wt=e,It=a=ki(e.current,null),kt=i,Gt=0,gn=null,_r=!1,Oa=is(e,i),Jf=!1,Na=Mn=td=Ns=vr=ue=0,an=rl=null,ed=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-Ke(o),d=1<<h;i|=e[h],o&=~d}return Gi=i,Ru(),a}function zy(e,i){wt=null,H.H=Gu,i===qo||i===Pu?(i=ng(),Gt=3):i===Jp?(i=ng(),Gt=4):Gt=i===iy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,It===null&&(ue=1,$u(e,In(i,e.current)))}function By(){var e=H.H;return H.H=Gu,e===null?Gu:e}function qy(){var e=H.A;return H.A=$A,e}function od(){ue=4,_r||(kt&4194048)!==kt&&Nn.current!==null||(Oa=!0),(vr&134217727)===0&&(Ns&134217727)===0||Wt===null||Ar(Wt,kt,Mn,!1)}function ld(e,i,a){var o=Ft;Ft|=2;var h=By(),d=qy();(Wt!==e||kt!==i)&&(ic=null,ka(e,i)),i=!1;var v=ue;t:do try{if(Gt!==0&&It!==null){var E=It,w=gn;switch(Gt){case 8:ad(),v=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(i=!0);var L=Gt;if(Gt=0,gn=null,Pa(e,E,w,L),a&&Oa){v=0;break t}break;default:L=Gt,Gt=0,gn=null,Pa(e,E,w,L)}}JA(),v=ue;break}catch(F){zy(e,F)}while(!0);return i&&e.shellSuspendCounter++,Ui=bs=null,Ft=o,H.H=h,H.A=d,It===null&&(Wt=null,kt=0,Ru()),v}function JA(){for(;It!==null;)jy(It)}function tS(e,i){var a=Ft;Ft|=2;var o=By(),h=qy();Wt!==e||kt!==i?(ic=null,nc=Tn()+500,ka(e,i)):Oa=is(e,i);t:do try{if(Gt!==0&&It!==null){i=It;var d=gn;e:switch(Gt){case 1:Gt=0,gn=null,Pa(e,i,d,1);break;case 2:case 9:if(tg(d)){Gt=0,gn=null,Hy(i);break}i=function(){Gt!==2&&Gt!==9||Wt!==e||(Gt=7),ui(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:tg(d)?(Gt=0,gn=null,Hy(i)):(Gt=0,gn=null,Pa(e,i,d,7));break;case 5:var v=null;switch(It.tag){case 26:v=It.memoizedState;case 5:case 27:var E=It;if(!v||w_(v)){Gt=0,gn=null;var w=E.sibling;if(w!==null)It=w;else{var L=E.return;L!==null?(It=L,sc(L)):It=null}break e}}Gt=0,gn=null,Pa(e,i,d,5);break;case 6:Gt=0,gn=null,Pa(e,i,d,6);break;case 8:ad(),ue=6;break t;default:throw Error(s(462))}}eS();break}catch(F){zy(e,F)}while(!0);return Ui=bs=null,H.H=o,H.A=h,Ft=a,It!==null?0:(Wt=null,kt=0,Ru(),ue)}function eS(){for(;It!==null&&!uo();)jy(It)}function jy(e){var i=py(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,i===null?sc(e):It=i}function Hy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=uy(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=uy(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:Sf(i);default:yy(a,i),i=It=Fp(i,Gi),i=py(a,i,Gi)}e.memoizedProps=e.pendingProps,i===null?sc(e):It=i}function Pa(e,i,a,o){Ui=bs=null,Sf(i),Ra=null,$o=0;var h=i.return;try{if(FA(e,h,i,a,kt)){ue=1,$u(e,In(a,e.current)),It=null;return}}catch(d){if(h!==null)throw It=h,d;ue=1,$u(e,In(a,e.current)),It=null;return}i.flags&32768?(zt||o===1?e=!0:Oa||(kt&536870912)!==0?e=!1:(_r=e=!0,(o===2||o===9||o===3||o===6)&&(o=Nn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Fy(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){Fy(i,_r);return}e=i.return;var a=KA(i.alternate,i,Gi);if(a!==null){It=a;return}if(i=i.sibling,i!==null){It=i;return}It=i=e}while(i!==null);ue===0&&(ue=5)}function Fy(e,i){do{var a=YA(e.alternate,e);if(a!==null){a.flags&=32767,It=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){It=e;return}It=e=a}while(e!==null);ue=6,It=null}function Gy(e,i,a,o,h,d,v,E,w){e.cancelPendingCommit=null;do ac();while(qe!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Zh,go(e,a,d,v,E,w),e===Wt&&(It=Wt=null,kt=0),Ma=i,Tr=e,Va=a,id=d,rd=h,Py=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(Jr,function(){return $y(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,h=tt.p,tt.p=2,v=Ft,Ft|=4;try{QA(e,i,a)}finally{Ft=v,tt.p=h,H.T=o}}qe=1,Ky(),Yy(),Qy()}}function Ky(){if(qe===1){qe=0;var e=Tr,i=Ma,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Ft;Ft|=4;try{Cy(i,e);var d=Ed,v=kp(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Vp(E.ownerDocument.documentElement,E)){if(w!==null&&Kh(E)){var L=w.start,F=w.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),_t=E.textContent.length,mt=Math.min(w.start,_t),Xt=w.end===void 0?mt:Math.min(w.end,_t);!B.extend&&mt>Xt&&(v=Xt,Xt=mt,mt=v);var k=Mp(E,mt),O=Mp(E,Xt);if(k&&O&&(B.rangeCount!==1||B.anchorNode!==k.node||B.anchorOffset!==k.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var U=K.createRange();U.setStart(k.node,k.offset),B.removeAllRanges(),mt>Xt?(B.addRange(U),B.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),B.addRange(U))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var G=K[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}_c=!!vd,Ed=vd=null}finally{Ft=h,tt.p=o,H.T=a}}e.current=i,qe=2}}function Yy(){if(qe===2){qe=0;var e=Tr,i=Ma,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Ft;Ft|=4;try{wy(e,i.alternate,i)}finally{Ft=h,tt.p=o,H.T=a}}qe=3}}function Qy(){if(qe===4||qe===3){qe=0,eu();var e=Tr,i=Ma,a=Va,o=Py;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qe=5:(qe=0,Ma=Tr=null,Xy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Er=null),Ws(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,h=tt.p,tt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var E=o[v];d(E.value,{componentStack:E.stack})}}finally{H.T=i,tt.p=h}}(Va&3)!==0&&ac(),ui(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===sd?sl++:(sl=0,sd=e):sl=0,al(0)}}function Xy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,zo(i)))}function ac(e){return Ky(),Yy(),Qy(),$y()}function $y(){if(qe!==5)return!1;var e=Tr,i=id;id=0;var a=Ws(Va),o=H.T,h=tt.p;try{tt.p=32>a?32:a,H.T=null,a=rd,rd=null;var d=Tr,v=Va;if(qe=0,Ma=Tr=null,Va=0,(Ft&6)!==0)throw Error(s(331));var E=Ft;if(Ft|=4,Vy(d.current),Oy(d,d.current,v,a),Ft=E,al(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{tt.p=h,H.T=o,Xy(e,i)}}function Zy(e,i,a){i=In(a,i),i=Uf(e.stateNode,i,2),e=hr(e,i,2),e!==null&&(Si(e,2),ui(e))}function $t(e,i,a){if(e.tag===3)Zy(e,e,a);else for(;i!==null;){if(i.tag===3){Zy(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Er===null||!Er.has(o))){e=In(a,e),a=ey(2),o=hr(i,a,2),o!==null&&(ny(a,o,i,e),Si(o,2),ui(o));break}}i=i.return}}function ud(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ZA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Jf=!0,h.add(a),e=nS.bind(null,e,i,a),i.then(e,e))}function nS(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(kt&a)===a&&(ue===4||ue===3&&(kt&62914560)===kt&&300>Tn()-nd?(Ft&2)===0&&ka(e,0):td|=a,Na===kt&&(Na=0)),ui(e)}function Wy(e,i){i===0&&(i=po()),e=ga(e,i),e!==null&&(Si(e,i),ui(e))}function iS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Wy(e,a)}function rS(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Wy(e,a)}function sS(e,i){return Zr(e,i)}var oc=null,xa=null,cd=!1,lc=!1,hd=!1,Ms=0;function ui(e){e!==xa&&e.next===null&&(xa===null?oc=xa=e:xa=xa.next=e),lc=!0,cd||(cd=!0,oS())}function al(e,i){if(!hd&&lc){hd=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var v=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-Ke(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n_(o,d))}else d=kt,d=Zs(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||is(o,d)||(a=!0,n_(o,d));o=o.next}while(a);hd=!1}}function aS(){Jy()}function Jy(){lc=cd=!1;var e=0;Ms!==0&&(pS()&&(e=Ms),Ms=0);for(var i=Tn(),a=null,o=oc;o!==null;){var h=o.next,d=t_(o,i);d===0?(o.next=null,a===null?oc=h:a.next=h,h===null&&(xa=a)):(a=o,(e!==0||(d&3)!==0)&&(lc=!0)),o=h}al(e)}function t_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ke(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&o)!==0)&&(h[v]=fo(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=Wt,a=kt,a=Zs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Wr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||is(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Wr(o),Ws(a)){case 2:case 8:a=Xs;break;case 32:a=Jr;break;case 268435456:a=$s;break;default:a=Jr}return o=e_.bind(null,e),a=Zr(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Wr(o),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,i){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var o=kt;return o=Zs(e,e===Wt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Uy(e,o,i),t_(e,Tn()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,i){if(ac())return null;Uy(e,i,!0)}function oS(){yS(function(){(Ft&6)!==0?Zr(co,aS):Jy()})}function fd(){return Ms===0&&(Ms=mo()),Ms}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ra(""+e)}function r_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function lS(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=i_((h[me]||null).action),v=o.submitter;v&&(i=(i=v[me]||null)?i_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new sa("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ms!==0){var w=v?r_(h,v):new FormData(h);Mf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?r_(h,v):new FormData(h),Mf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var dd=0;dd<$h.length;dd++){var md=$h[dd],uS=md.toLowerCase(),cS=md[0].toUpperCase()+md.slice(1);Bn(uS,"on"+cS)}Bn(Up,"onAnimationEnd"),Bn(Lp,"onAnimationIteration"),Bn(zp,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(IA,"onTransitionRun"),Bn(CA,"onTransitionStart"),Bn(DA,"onTransitionCancel"),Bn(Bp,"onTransitionEnd"),bi("onMouseEnter",["mouseout","mouseover"]),bi("onMouseLeave",["mouseout","mouseover"]),bi("onPointerEnter",["pointerout","pointerover"]),bi("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function s_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Xu(F)}h.currentTarget=null,d=w}else for(v=0;v<o.length;v++){if(E=o[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Xu(F)}h.currentTarget=null,d=w}}}}function Ct(e,i){var a=i[_o];a===void 0&&(a=i[_o]=new Set);var o=e+"__bubble";a.has(o)||(a_(i,e,2,!1),a.add(o))}function pd(e,i,a){var o=0;i&&(o|=4),a_(a,e,o,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function gd(e){if(!e[uc]){e[uc]=!0,vo.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||pd(a,!1,e),pd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,pd("selectionchange",!1,i))}}function a_(e,i,a,o){switch(O_(i)){case 2:var h=LS;break;case 8:h=zS;break;default:h=Od}a=h.bind(null,i,a,e),h=void 0,!bn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function yd(e,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=o.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=wi(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){o=d=v;continue t}E=E.parentNode}}o=o.return}hu(function(){var L=d,F=wn(a),K=[];t:{var z=qp.get(e);if(z!==void 0){var B=sa,_t=e;switch(e){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":B=ha;break;case"focusin":_t="focus",B=la;break;case"focusout":_t="blur",B=la;break;case"beforeblur":case"afterblur":B=la;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=vu;break;case Up:case Lp:case zp:B=ua;break;case Bp:B=Tu;break;case"scroll":case"scrollend":B=fu;break;case"wheel":B=fa;break;case"copy":case"cut":case"paste":B=ca;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=No;break;case"toggle":case"beforetoggle":B=Su}var mt=(i&4)!==0,Xt=!mt&&(e==="scroll"||e==="scrollend"),k=mt?z!==null?z+"Capture":null:z;mt=[];for(var O=L,U;O!==null;){var G=O;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||k===null||(G=hs(O,k),G!=null&&mt.push(ll(O,G,U))),Xt)break;O=O.return}0<mt.length&&(z=new B(z,_t,null,a,F),K.push({event:z,listeners:mt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Ci&&(_t=a.relatedTarget||a.fromElement)&&(wi(_t)||_t[An]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(_t=a.relatedTarget||a.toElement,B=L,_t=_t?wi(_t):null,_t!==null&&(Xt=c(_t),mt=_t.tag,_t!==Xt||mt!==5&&mt!==27&&mt!==6)&&(_t=null)):(B=null,_t=L),B!==_t)){if(mt=Rn,G="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=No,G="onPointerLeave",k="onPointerEnter",O="pointer"),Xt=B==null?z:$n(B),U=_t==null?z:$n(_t),z=new mt(G,O+"leave",B,a,F),z.target=Xt,z.relatedTarget=U,G=null,wi(F)===L&&(mt=new mt(k,O+"enter",_t,a,F),mt.target=U,mt.relatedTarget=Xt,G=mt),Xt=G,B&&_t)e:{for(mt=B,k=_t,O=0,U=mt;U;U=Ua(U))O++;for(U=0,G=k;G;G=Ua(G))U++;for(;0<O-U;)mt=Ua(mt),O--;for(;0<U-O;)k=Ua(k),U--;for(;O--;){if(mt===k||k!==null&&mt===k.alternate)break e;mt=Ua(mt),k=Ua(k)}mt=null}else mt=null;B!==null&&o_(K,z,B,mt,!1),_t!==null&&Xt!==null&&o_(K,Xt,_t,mt,!0)}}t:{if(z=L?$n(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=Rp;else if(Ae(z))if(Ip)at=wA;else{at=AA;var Rt=TA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&wo(L.elementType)&&(at=Rp):at=SA;if(at&&(at=at(e,L))){Vi(K,at,a,F);break t}Rt&&Rt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&ar(z,"number",z.value)}switch(Rt=L?$n(L):window,e){case"focusin":(Ae(Rt)||Rt.contentEditable==="true")&&(da=Rt,Yh=L,ko=null);break;case"focusout":ko=Yh=da=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,Pp(K,a,F);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":Pp(K,a,F)}var ct;if(ii)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Mt?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(_&&a.locale!=="ko"&&(Mt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Mt&&(ct=Ro()):(Jn=F,or="value"in Jn?Jn.value:Jn.textContent,Mt=!0)),Rt=cc(L,pt),0<Rt.length&&(pt=new Do(pt,e,null,a,F),K.push({event:pt,listeners:Rt}),ct?pt.data=ct:(ct=J(a),ct!==null&&(pt.data=ct)))),(ct=m?Te(e,a):Vt(e,a))&&(pt=cc(L,"onBeforeInput"),0<pt.length&&(Rt=new Do("onBeforeInput","beforeinput",null,a,F),K.push({event:Rt,listeners:pt}),Rt.data=ct)),lS(K,e,L,a,F)}s_(K,i)})}function ll(e,i,a){return{instance:e,listener:i,currentTarget:a}}function cc(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=hs(e,a),h!=null&&o.unshift(ll(e,h,d)),h=hs(e,i),h!=null&&o.push(ll(e,h,d))),e.tag===3)return o;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,i,a,o,h){for(var d=i._reactName,v=[];a!==null&&a!==o;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=hs(a,d),L!=null&&v.unshift(ll(a,L,w))):h||(L=hs(a,d),L!=null&&v.push(ll(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var fS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(dS,"")}function u_(e,i){return i=l_(i),l_(e)===i}function hc(){}function Qt(e,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Sn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Sn(e,""+o);break;case"className":Zn(e,"class",o);break;case"tabIndex":Zn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,o);break;case"style":So(e,o,d);break;case"data":if(i!=="object"){Zn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ra(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ra(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=hc);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ra(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),sr(e,"popover",o);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":sr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bh.get(a)||a,sr(e,a,o))}}function _d(e,i,a,o,h,d){switch(a){case"style":So(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Sn(e,o):(typeof o=="number"||typeof o=="bigint")&&Sn(e,""+o);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"onClick":o!=null&&(e.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[me]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):sr(e,a,o)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,d,v,a,null)}}h&&Qt(e,i,"srcSet",a.srcSet,a,null),o&&Qt(e,i,"src",a.src,a,null);return;case"input":Ct("invalid",e);var E=d=v=h=null,w=null,L=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Qt(e,i,o,F,a,null)}}ls(e,d,E,w,L,v,h,!1),ia(e);return;case"select":Ct("invalid",e),o=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:Qt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!o,i!=null?Ii(e,!!o,i,!1):a!=null&&Ii(e,!!o,a,!0);return;case"textarea":Ct("invalid",e),d=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qt(e,i,v,E,a,null)}us(e,o,h,d),ia(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(e,i,w,o,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(o=0;o<ol.length;o++)Ct(ol[o],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(o=a[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,L,o,a,null)}return;default:if(wo(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&_d(e,i,F,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Qt(e,i,E,o,a,null))}function mS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=K;default:o.hasOwnProperty(B)||Qt(e,i,B,null,o,K)}}for(var z in o){var B=o[z];if(K=a[z],o.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Qt(e,i,z,B,o,K)}}hn(e,v,E,w,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":B=w;default:o.hasOwnProperty(d)||Qt(e,i,d,null,o,w)}for(h in o)if(d=o[h],w=a[h],o.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&Qt(e,i,h,d,o,w)}i=E,a=v,o=B,z!=null?Ii(e,!!a,z,!1):!!o!=!!a&&(i!=null?Ii(e,!!a,i,!0):Ii(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,o,h)}for(v in o)if(h=o[v],d=a[v],o.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qt(e,i,v,h,o,d)}Kt(e,z,B);return;case"option":for(var _t in a)if(z=a[_t],a.hasOwnProperty(_t)&&z!=null&&!o.hasOwnProperty(_t))switch(_t){case"selected":e.selected=!1;break;default:Qt(e,i,_t,null,o,z)}for(w in o)if(z=o[w],B=a[w],o.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,w,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)z=a[mt],a.hasOwnProperty(mt)&&z!=null&&!o.hasOwnProperty(mt)&&Qt(e,i,mt,null,o,z);for(L in o)if(z=o[L],B=a[L],o.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qt(e,i,L,z,o,B)}return;default:if(wo(i)){for(var Xt in a)z=a[Xt],a.hasOwnProperty(Xt)&&z!==void 0&&!o.hasOwnProperty(Xt)&&_d(e,i,Xt,void 0,o,z);for(F in o)z=o[F],B=a[F],!o.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||_d(e,i,F,z,o,B);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!o.hasOwnProperty(k)&&Qt(e,i,k,null,o,z);for(K in o)z=o[K],B=a[K],!o.hasOwnProperty(K)||z===B||z==null&&B==null||Qt(e,i,K,z,o,B)}var vd=null,Ed=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Td(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ad=null;function pS(){var e=window.event;return e&&e.type==="popstate"?e===Ad?!1:(Ad=e,!0):(Ad=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(_S)}:f_;function _S(e){setTimeout(function(){throw e})}function Sr(e){return e==="head"}function m_(e,i){var a=i,o=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&ul(v.documentElement),a&2&&ul(v.body),a&4)for(a=v.head,ul(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[rs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),yl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);yl(i)}function Sd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vS(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function ES(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jn(e.nextSibling),e===null))return null;return e}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function TS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function jn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var bd=null;function p_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function g_(e,i,a){switch(i=fc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ul(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);rr(e)}var Vn=new Map,y_=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=tt.d;tt.d={f:AS,r:SS,D:wS,C:bS,L:RS,m:IS,X:DS,S:CS,M:OS};function AS(){var e=Ki.f(),i=rc();return e||i}function SS(e){var i=Xn(e);i!==null&&i.tag===5&&i.type==="form"?Ug(i):Ki.r(e)}var La=typeof document>"u"?null:document;function __(e,i,a){var o=La;if(o&&typeof i=="string"&&i){var h=pe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),y_.has(h)||(y_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),je(i,"link",e),ce(i),o.head.appendChild(i)))}}function wS(e){Ki.D(e),__("dns-prefetch",e,null)}function bS(e,i){Ki.C(e,i),__("preconnect",e,i)}function RS(e,i,a){Ki.L(e,i,a);var o=La;if(o&&e&&i){var h='link[rel="preload"][as="'+pe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+pe(a.imageSizes)+'"]')):h+='[href="'+pe(e)+'"]';var d=h;switch(i){case"style":d=za(e);break;case"script":d=Ba(e)}Vn.has(d)||(e=A({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Vn.set(d,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(cl(d))||i==="script"&&o.querySelector(hl(d))||(i=o.createElement("link"),je(i,"link",e),ce(i),o.head.appendChild(i)))}}function IS(e,i){Ki.m(e,i);var a=La;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ba(e)}if(!Vn.has(d)&&(e=A({rel:"modulepreload",href:e},i),Vn.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(d)))return}o=a.createElement("link"),je(o,"link",e),ce(o),a.head.appendChild(o)}}}function CS(e,i,a){Ki.S(e,i,a);var o=La;if(o&&e){var h=Je(o).hoistableStyles,d=za(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(cl(d)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Vn.get(d))&&Rd(e,a);var w=v=o.createElement("link");ce(w),je(w,"link",e),w._p=new Promise(function(L,F){w.onload=L,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,mc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function DS(e,i){Ki.X(e,i);var a=La;if(a&&e){var o=Je(a).hoistableScripts,h=Ba(e),d=o.get(h);d||(d=a.querySelector(hl(h)),d||(e=A({src:e,async:!0},i),(i=Vn.get(h))&&Id(e,i),d=a.createElement("script"),ce(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function OS(e,i){Ki.M(e,i);var a=La;if(a&&e){var o=Je(a).hoistableScripts,h=Ba(e),d=o.get(h);d||(d=a.querySelector(hl(h)),d||(e=A({src:e,async:!0,type:"module"},i),(i=Vn.get(h))&&Id(e,i),d=a.createElement("script"),ce(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function v_(e,i,a,o){var h=(h=vt.current)?dc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=za(a.href),a=Je(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=za(a.href);var d=Je(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(cl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Vn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(e,a),d||NS(h,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ba(a),a=Je(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function za(e){return'href="'+pe(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function E_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function NS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),je(i,"link",a),ce(i),e.head.appendChild(i))}function Ba(e){return'[src="'+pe(e)+'"]'}function hl(e){return"script[async]"+e}function T_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return i.instance=o,ce(o),o;var h=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ce(o),je(o,"style",h),mc(o,a.precedence,e),i.instance=o;case"stylesheet":h=za(a.href);var d=e.querySelector(cl(h));if(d)return i.state.loading|=4,i.instance=d,ce(d),d;o=E_(a),(h=Vn.get(h))&&Rd(o,h),d=(e.ownerDocument||e).createElement("link"),ce(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),je(d,"link",o),i.state.loading|=4,mc(d,a.precedence,e),i.instance=d;case"script":return d=Ba(a.src),(h=e.querySelector(hl(d)))?(i.instance=h,ce(h),h):(o=a,(h=Vn.get(d))&&(o=A({},a),Id(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),ce(h),je(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,mc(o,a.precedence,e));return i.instance}function mc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var pc=null;function A_(e,i,a){if(pc===null){var o=new Map,h=pc=new Map;h.set(a,o)}else h=pc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[rs]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=o.get(v);E?E.push(d):o.set(v,[d])}}return o}function S_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function MS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fl=null;function VS(){}function kS(e,i,a){if(fl===null)throw Error(s(475));var o=fl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=za(a.href),d=e.querySelector(cl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=gc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,ce(d);return}d=e.ownerDocument||e,a=E_(a),(h=Vn.get(h))&&Rd(a,h),d=d.createElement("link"),ce(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),je(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=gc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function PS(){if(fl===null)throw Error(s(475));var e=fl;return e.stylesheets&&e.count===0&&Cd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Cd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)Cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Cd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(xS,e),yc=null,gc.call(e))}function xS(e,i){if(!(i.state.loading&4)){var a=yc.get(e);if(a)var o=a.get(null);else{a=new Map,yc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,h),a.set(v,h),this.count++,o=gc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var dl={$$typeof:ut,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function US(e,i,a,o,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ai(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.hiddenUpdates=Ai(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function b_(e,i,a,o,h,d,v,E,w,L,F,K){return e=new US(e,i,a,v,E,w,L,K),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=uf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},df(d),e}function R_(e){return e?(e=ya,e):ya}function I_(e,i,a,o,h,d){h=R_(h),o.context===null?o.context=h:o.pendingContext=h,o=cr(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=hr(e,o,i),a!==null&&(_n(a,e,i),Ho(a,e,i))}function C_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Dd(e,i){C_(e,i),(e=e.alternate)&&C_(e,i)}function D_(e){if(e.tag===13){var i=ga(e,67108864);i!==null&&_n(i,e,67108864),Dd(e,67108864)}}var _c=!0;function LS(e,i,a,o){var h=H.T;H.T=null;var d=tt.p;try{tt.p=2,Od(e,i,a,o)}finally{tt.p=d,H.T=h}}function zS(e,i,a,o){var h=H.T;H.T=null;var d=tt.p;try{tt.p=8,Od(e,i,a,o)}finally{tt.p=d,H.T=h}}function Od(e,i,a,o){if(_c){var h=Nd(o);if(h===null)yd(e,i,o,vc,a),N_(e,o);else if(qS(h,e,i,a,o))o.stopPropagation();else if(N_(e,o),i&4&&-1<BS.indexOf(e)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-Ke(v);E.entanglements[1]|=w,v&=~w}ui(d),(Ft&6)===0&&(nc=Tn()+500,al(0))}}break;case 13:E=ga(d,2),E!==null&&_n(E,d,2),rc(),Dd(d,2)}if(d=Nd(o),d===null&&yd(e,i,o,vc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else yd(e,i,o,null,a)}}function Nd(e){return e=wn(e),Md(e)}var vc=null;function Md(e){if(vc=null,e=wi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function O_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kh()){case co:return 2;case Xs:return 8;case Jr:case Ph:return 32;case $s:return 268435456;default:return 32}default:return 32}}var Vd=!1,wr=null,br=null,Rr=null,ml=new Map,pl=new Map,Ir=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N_(e,i){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(i.pointerId)}}function gl(e,i,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&D_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function qS(e,i,a,o,h){switch(i){case"focusin":return wr=gl(wr,e,i,a,o,h),!0;case"dragenter":return br=gl(br,e,i,a,o,h),!0;case"mouseover":return Rr=gl(Rr,e,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return ml.set(d,gl(ml.get(d)||null,e,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,pl.set(d,gl(pl.get(d)||null,e,i,a,o,h)),!0}return!1}function M_(e){var i=wi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ru(e.priority,function(){if(a.tag===13){var o=yn();o=er(o);var h=ga(a,o);h!==null&&_n(h,a,o),Dd(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ci=o,a.target.dispatchEvent(o),Ci=null}else return i=Xn(a),i!==null&&D_(i),e.blockedOn=a,!1;i.shift()}return!0}function V_(e,i,a){Ec(e)&&a.delete(i)}function jS(){Vd=!1,wr!==null&&Ec(wr)&&(wr=null),br!==null&&Ec(br)&&(br=null),Rr!==null&&Ec(Rr)&&(Rr=null),ml.forEach(V_),pl.forEach(V_)}function Tc(e,i){e.blockedOn===i&&(e.blockedOn=null,Vd||(Vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jS)))}var Ac=null;function k_(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var d=Xn(a);d!==null&&(e.splice(i,3),i-=3,Mf(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function yl(e){function i(w){return Tc(w,e)}wr!==null&&Tc(wr,e),br!==null&&Tc(br,e),Rr!==null&&Tc(Rr,e),ml.forEach(i),pl.forEach(i);for(var a=0;a<Ir.length;a++){var o=Ir[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ir.length&&(a=Ir[0],a.blockedOn===null);)M_(a),a.blockedOn===null&&Ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],v=h[me]||null;if(typeof d=="function")v||k_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[me]||null)E=v.formAction;else if(Md(h)!==null)continue}else E=v.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),k_(a)}}}function kd(e){this._internalRoot=e}Sc.prototype.render=kd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=yn();I_(a,o,e,i,null,null)},Sc.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;I_(e.current,2,null,e,null,null),rc(),i[An]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=nr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ir.length&&i!==0&&i<Ir[a].priority;a++);Ir.splice(a,0,e),a===0&&M_(e)}};var P_=t.version;if(P_!=="19.1.1")throw Error(s(527,P_,"19.1.1"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var HS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{oe=wc.inject(HS),Ht=wc}catch{}}return vl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=Zg,d=Wg,v=Jg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=b_(e,1,!1,null,null,a,o,h,d,v,E,null),e[An]=i.current,gd(e),new kd(i)},vl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=Zg,v=Wg,E=Jg,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=b_(e,1,!0,i,a??null,o,h,d,v,E,w,L),i.context=R_(null),a=i.current,o=yn(),o=er(o),h=cr(o),h.callback=null,hr(a,h,o),a=o,i.current.lanes=a,Si(i,a),ui(i),e[An]=i.current,gd(e),new Sc(i)},vl.version="19.1.1",vl}var G_;function JS(){if(G_)return Ud.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=WS(),Ud.exports}var t1=JS();const e1="data:image/svg+xml,%3csvg%20width='476'%20height='170'%20viewBox='0%200%20476%20170'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_dd_136_21)'%3e%3ccircle%20cx='64.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='244.5'%20cy='118.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='244.5'%20cy='85.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='101.5'%20cy='111.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='298.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='344.5'%20cy='111.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='157.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='378.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='198.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='428.5'%20cy='113.5'%20r='43.5'%20fill='%23C0C0C0'/%3e%3ccircle%20cx='47.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='227.5'%20cy='97.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='227.5'%20cy='64.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='84.5'%20cy='90.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='281.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='327.5'%20cy='90.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='140.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='361.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='181.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='411.5'%20cy='92.5'%20r='43.5'%20fill='%23D4D3D3'/%3e%3ccircle%20cx='57.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='237.5'%20cy='76.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='237.5'%20cy='43.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='94.5'%20cy='69.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='291.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='337.5'%20cy='69.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='150.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='371.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='191.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3ccircle%20cx='421.5'%20cy='71.5'%20r='43.5'%20fill='%23E4E4E4'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_dd_136_21'%20x='0'%20y='0'%20width='476'%20height='170'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_136_21'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_136_21'%20result='effect2_dropShadow_136_21'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect2_dropShadow_136_21'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",n1="data:image/svg+xml,%3csvg%20width='55'%20height='55'%20viewBox='0%200%2055%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='55'%20height='55'%20fill='url(%23pattern0_83_958)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_83_958'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_83_958'%20transform='scale(0.01)'/%3e%3c/pattern%3e%3cimage%20id='image0_83_958'%20width='100'%20height='100'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nO2da4hXRRTAf7abRWWWvajEopcRhdVWUPZA2YhIWhEJhAztRRQVRCWVhBQJgUYf0rCwKKQ+bPQk0rKHlWVmsVQK2YNeHyTDXkZZWzdOTLAs/zN773/vvTP/O+cH55M458yZ/z0zc2bmLBiGYRiGYRiGYRiGYRhGZ7MXcBmwQJFbgXnA5NCGpsAhwKdAllM2A3OBMaENbyoPFhiMobIaOCC08U1kU5sDIjIATAjdgabx1CgGROTp0B1oGj3Ab6MclItCd6JpnAQ8AryiyEbgL8+ArAvdgRQ5GtiiDMjfbrVm1MwUz1cyq432xrs2ezpc5Me6B4HQ9iz3FGhjd2AZMDjKuSs2+QxY7AaoNvoVY7YWaOO2CJyXVSi/A3cC3dTASsUImfTzMhCB07IapN9Fg0pZ4DHgwJxtvB+Bs7KaZEXF48FEj/LenG1cH4GjsprkH2B6xWPCdkX5zTn//27AIuCXCBxWh7xW8XjwkqJ4VcF2uoH9GyASNeZ7fqiyT5tEhSz2pOZT5kwXolr5ZnaVii9RlA66w66U+WiU4bwtjvPEyzNIm3cVv9xSpVKZlH9VFF9NuowBdih+kVPWSlmvKF5OuhzhiRxTq1b+gKJYPtlUman4RCb6fatWfqWiXA67ukiTRSXk+drmNM/neTxp8ownp1U5kv//UzFgDmnypeKPhaHX3PeSHvt5NoUz6jLiccWANaTHeZ4QLqmVWrhJMeB70uMGxRc/1GnENM+v4jDSYqXih7WxxM3U7mp9oPhhSd2GfKUYcgfp0O3O0YOkTIbzbMi1d0QXDbXQLf8Wxe70c9JhruKDP+q45DCcPk/+Ri7CpcASxQcyr0SV4TyHNFir9F9WXkHQzpJlbZ4C22Pr/6uKQXKjvulM9EQI2b0HYali0Ic0nxmeOVRupES1ytgFjKXZLFT6LpnfYJzo+WzluUGT6Vf6LWcjUe5U5X17k9mq9Fv2Z0HRLlDfT3PZx91KbNVvOV8PysOKYW/QXKZ6QvWRoY27TjHs5wZXfbhW6fOPMfT5LM+v5SiayYqYo8LennjazoPQTuC92OdN7UHo3TSPLk/BhcuJhCcVA9+keZzuCdGnEvkkJ6HsBJrFfZ5FTC2vb/Mw2fOreTmGlUdJHAPsVPr5PJGx0TMoy9xThk5mwgjPuqPLTMzyGPv/A8jaz5lLXNr7qu99G2MyVb6At0YYFElNv+OunN7oHvnUKX05HNfl5r3z3UGTduYzVK4iUiRt8FOODmQBZYvnMl+Pu6RRpL0XYp8je0sojJZVLK2ecY91oadIO58UqGIRlGmRfylft7D57IJtfAwcTAcxKWf8zQLIhoIbvuEiGe5xdCASWy8G3o5gELIhm9WZyqJkIMdKsfL6JXUhxb2uAR5z70g2BRCpOXyhx8bDgRddySm5F/Ad8Lq7r3xyjb4yhhFNCsQwDMMYMYO6HPjCTaTbgOcqfol1kCs1tdldY9rhVlDzEi5+8B/z3SBoy8wnKqiLO91TKCZzS3QZsOTo85zFD5VHS9Q5xXOeMVTWh3hwE5I9C+aNyrpNvq6ATjkFTYa+grtrKVRQxlxVRKdsJJPhrjZS5qNlTkGdgyltEJcWdM43Jei8oo28V0cmEMssR5FVeJ2ot6DOWktjhOZYTyWIViJlzstYSBQ5o5EkaFKsyumYbSWWybs9p85dKRZjG5/j/GFnyU+su1wWYKTJPLorPXUxDnhI+QMvGyp6FtftXjm1OveXV1EXVKCz4zgUuNT9qVfZkJ1SU0Wj2a7ytCwyzk09j2UYhmEYhmEYhmEYhmEYtOBfBzUE784skh0AAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",i1="_mainCloud_15p21_17",r1="_mainCloudactive_15p21_35",s1="_MainBoard_15p21_53",a1="_MainBoardactive_15p21_71",o1="_cloud_15p21_87",l1="_shop_15p21_99",u1="_Keys_15p21_115",c1="_key1_0_15p21_127",h1="_key1_1_15p21_145",f1="_key1_2_15p21_161",d1="_key2_0_15p21_181",m1="_key2_1_15p21_195",p1="_key2_2_15p21_213",g1="_key3_0_15p21_233",y1="_key3_1_15p21_247",_1="_key3_2_15p21_267",v1="_modalOverlay_15p21_285",E1="_modalContent_15p21_309",T1="_show_15p21_329",A1="_hide_15p21_345",S1="_keyAnimationOpen_15p21_399",w1="_keyAnimationClose_15p21_407",b1="_text_15p21_415",R1="_textInfo_15p21_427",Jt={mainCloud:i1,mainCloudactive:r1,MainBoard:s1,MainBoardactive:a1,cloud:o1,shop:l1,Keys:u1,key1_0:c1,key1_1:h1,key1_2:f1,key2_0:d1,key2_1:m1,key2_2:p1,key3_0:g1,key3_1:y1,key3_2:_1,modalOverlay:v1,modalContent:E1,show:T1,hide:A1,keyAnimationOpen:S1,keyAnimationClose:w1,text:b1,textInfo:R1},I1=({active:r,setActive:t})=>ot.jsxs("div",{className:r?Jt.mainCloudactive:Jt.mainCloud,onClick:()=>t(n=>!n),children:[ot.jsx("img",{src:n1,alt:"shop",className:Jt.shop}),ot.jsx("img",{src:e1,alt:"cloud",className:Jt.cloud})]}),C1="/KeyBoard/assets/Group%201597880434-BHYPAkAm.svg",D1="/KeyBoard/assets/%D0%94%D1%80%D0%B5%D0%B2%D0%BE-CSnuHcqr.png",O1="/KeyBoard/assets/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE-C3vuHJH6.svg",N1="/KeyBoard/assets/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-B9cJuFsY.png",M1=ot.jsxs("p",{children:[ot.jsx("div",{className:Jt.textInfo,children:"Инструкция по активации:"}),ot.jsx("br",{}),"1. Скачайте и установите клиент Steam.",ot.jsx("br",{}),"2. Зарегистрируйте аккаунт, если его нет.",ot.jsx("br",{}),"3. Запустите Steam и авторизуйтесь.",ot.jsx("br",{}),'4. В нижнем левом углу нажмите "Добавить игру" → "Активировать в Steam".',ot.jsx("br",{}),"5. Введите ключ активации, полученный после оплаты.",ot.jsx("br",{}),ot.jsx("br",{}),"Важная информация:",ot.jsx("br",{}),"Ключ будет доступен в личном кабинете в течение 30 минут после оплаты.",ot.jsx("br",{}),"Возврат или замена ключа невозможны.",ot.jsx("br",{}),ot.jsx("br",{}),"Если возникли проблемы с активацией:",ot.jsx("br",{}),"Проверьте правильность введенного ключа",ot.jsx("br",{}),"Убедитесь, что ключ соответствует вашему региону",ot.jsx("br",{}),"Если проблема не решена — обратитесь в поддержку"]}),V1=({visible:r,onClose:t,selectedKey:n})=>{const[s,l]=Pe.useState(r),[c,f]=Pe.useState(!1);return Pe.useEffect(()=>{if(r)l(!0),f(!1),requestAnimationFrame(()=>{requestAnimationFrame(()=>{f(!0)})});else{f(!1);const p=setTimeout(()=>l(!1),800);return()=>clearTimeout(p)}},[r]),s?ot.jsx("div",{className:`${Jt.modalOverlay} ${c?Jt.show:Jt.hide}`,onClick:t,children:ot.jsxs("div",{className:`${Jt.modalContent} ${c?Jt.show:Jt.hide}`,onClick:p=>p.stopPropagation(),children:[ot.jsx("h2",{className:Jt.text,children:M1||"Выбери ключ"}),"тут будет кнопка"]})}):null},k1=()=>{const[r,t]=Pe.useState([0,0,1]),[n,s]=Pe.useState(!1),[l,c]=Pe.useState(null),[f,p]=Pe.useState(0),[g,y]=Pe.useState(null),[A,I]=Pe.useState(null),C=[Jt.key1_0,Jt.key1_1,Jt.key1_2],j=[Jt.key2_0,Jt.key2_1,Jt.key2_2],$=[Jt.key3_0,Jt.key3_1,Jt.key3_2],et=(st,it)=>{l===it?f===1?(y("open"),I(it),s(!0),p(2)):f===2&&(y("close"),I(it),p(0),s(!1),setTimeout(()=>{I(null),y(null)},800)):(t(st),c(it),p(1),s(!1),I(null),y(null))},Z=st=>{let it;if(st===1?it=C[r[0]]:st===2?it=j[r[1]]:st===3&&(it=$[r[2]]),A===st){if(g==="open")return`${it} ${Jt.keyAnimationOpen}`;if(g==="close")return`${it} ${Jt.keyAnimationClose}`}return it};return ot.jsxs("div",{className:Jt.Keys,children:[ot.jsx("img",{src:D1,alt:"",className:Z(1),onClick:()=>et([1,2,2],1)}),ot.jsx("img",{src:O1,alt:"",className:Z(2),onClick:()=>et([0,0,1],2)}),ot.jsx("img",{src:N1,alt:"",className:Z(3),onClick:()=>et([2,1,0],3)}),ot.jsx(V1,{visible:n,onClose:()=>s(!1),selectedKey:l})]})},P1=({active:r,setActive:t})=>ot.jsx(ot.Fragment,{children:ot.jsxs("div",{className:r?Jt.MainBoardactive:Jt.MainBoard,children:[ot.jsx("img",{src:C1,alt:""}),ot.jsx(k1,{setActive:t})]})}),x1=()=>{const[r,t]=Pe.useState(!1);return ot.jsxs(ot.Fragment,{children:[ot.jsx(I1,{active:r,setActive:t}),ot.jsx(P1,{active:r,setActive:t})]})};function U1(){return ot.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",padding:"1rem",textAlign:"center",fontSize:"1.2rem"},children:ot.jsx("p",{children:"Данное приложение доступно только на мобильных устройствах."})})}const L1=()=>{};var K_={};/**
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
 */const I0=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},z1=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],f=r[n++],p=r[n++],g=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},C0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,p=f?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,A=c>>2,I=(c&3)<<4|p>>4;let C=(p&15)<<2|y>>6,j=y&63;g||(j=64,f||(C=64)),s.push(n[A],n[I],n[C],n[j])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(I0(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):z1(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const I=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||p==null||y==null||I==null)throw new B1;const C=c<<2|p>>4;if(s.push(C),y!==64){const j=p<<4&240|y>>2;if(s.push(j),I!==64){const $=y<<6&192|I;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class B1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q1=function(r){const t=I0(r);return C0.encodeByteArray(t,!0)},Hc=function(r){return q1(r).replace(/\./g,"")},D0=function(r){try{return C0.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function j1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H1=()=>j1().__FIREBASE_DEFAULTS__,F1=()=>{if(typeof process>"u"||typeof K_>"u")return;const r=K_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},G1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&D0(r[1]);return t&&JSON.parse(t)},ch=()=>{try{return L1()||H1()||F1()||G1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},O0=r=>ch()?.emulatorHosts?.[r],K1=r=>{const t=O0(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},N0=()=>ch()?.config,M0=r=>ch()?.[`_${r}`];/**
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
 */class Y1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function no(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function V0(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Q1(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Hc(JSON.stringify(n)),Hc(JSON.stringify(f)),""].join(".")}const Rl={};function X1(){const r={prod:[],emulator:[]};for(const t of Object.keys(Rl))Rl[t]?r.emulator.push(t):r.prod.push(t);return r}function $1(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let Y_=!1;function k0(r,t){if(typeof window>"u"||typeof document>"u"||!no(window.location.host)||Rl[r]===t||Rl[r]||Y_)return;Rl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",c=X1().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function p(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Y_=!0,f()},C}function A(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function I(){const C=$1(s),j=n("text"),$=document.getElementById(j)||document.createElement("span"),et=n("learnmore"),Z=document.getElementById(et)||document.createElement("a"),st=n("preprendIcon"),it=document.getElementById(st)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ut=C.element;p(ut),A(Z,et);const Ut=y();g(it,st),ut.append(it,$,Z,Ut),document.body.appendChild(ut)}c?($.innerText="Preview backend disconnected.",it.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(it.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function W1(){const r=ch()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ew(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function nw(){return!W1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function U0(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(n){t(n)}})}function iw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rw="FirebaseError";class Kn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=rw,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?sw(c,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new Kn(l,p,s)}}function sw(r,t){return r.replace(aw,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const aw=/\{\$([^}]+)}/g;function ow(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function zr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(Q_(c)&&Q_(f)){if(!zr(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Q_(r){return r!==null&&typeof r=="object"}/**
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
 */function Gl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function El(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function Tl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function lw(r,t){const n=new uw(r,t);return n.subscribe.bind(n)}class uw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cw(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=qd),l.error===void 0&&(l.error=qd),l.complete===void 0&&(l.complete=qd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function qd(){}/**
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
 */const hw=1e3,fw=2,dw=14400*1e3,mw=.5;function X_(r,t=hw,n=fw){const s=t*Math.pow(n,r),l=Math.round(mw*s*(Math.random()-.5)*2);return Math.min(dw,s+l)}/**
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
 */function xe(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class pw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Y1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yw(t))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Vs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vs){return this.instances.has(t)}getOptions(t=Vs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(l)}return l}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Vs){return this.component?this.component.multipleInstances?t:Vs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(r){return r===Vs?void 0:r}function yw(r){return r.instantiationMode==="EAGER"}/**
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
 */class _w{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new pw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Dt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Dt||(Dt={}));const vw={debug:Dt.DEBUG,verbose:Dt.VERBOSE,info:Dt.INFO,warn:Dt.WARN,error:Dt.ERROR,silent:Dt.SILENT},Ew=Dt.INFO,Tw={[Dt.DEBUG]:"log",[Dt.VERBOSE]:"log",[Dt.INFO]:"info",[Dt.WARN]:"warn",[Dt.ERROR]:"error"},Aw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Tw[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hh{constructor(t){this.name=t,this._logLevel=Ew,this._logHandler=Aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Dt.DEBUG,...t),this._logHandler(this,Dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Dt.VERBOSE,...t),this._logHandler(this,Dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Dt.INFO,...t),this._logHandler(this,Dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Dt.WARN,...t),this._logHandler(this,Dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Dt.ERROR,...t),this._logHandler(this,Dt.ERROR,...t)}}const Sw=(r,t)=>t.some(n=>r instanceof n);let $_,Z_;function ww(){return $_||($_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bw(){return Z_||(Z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L0=new WeakMap,nm=new WeakMap,z0=new WeakMap,jd=new WeakMap,Om=new WeakMap;function Rw(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Pr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&L0.set(n,r)}).catch(()=>{}),Om.set(t,r),t}function Iw(r){if(nm.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});nm.set(r,t)}let im={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return nm.get(r);if(t==="objectStoreNames")return r.objectStoreNames||z0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Cw(r){im=r(im)}function Dw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Hd(this),t,...n);return z0.set(s,t.sort?t.sort():[t]),Pr(s)}:bw().includes(r)?function(...t){return r.apply(Hd(this),t),Pr(L0.get(this))}:function(...t){return Pr(r.apply(Hd(this),t))}}function Ow(r){return typeof r=="function"?Dw(r):(r instanceof IDBTransaction&&Iw(r),Sw(r,ww())?new Proxy(r,im):r)}function Pr(r){if(r instanceof IDBRequest)return Rw(r);if(jd.has(r))return jd.get(r);const t=Ow(r);return t!==r&&(jd.set(r,t),Om.set(t,r)),t}const Hd=r=>Om.get(r);function B0(r,t,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),p=Pr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Pr(f.result),g.oldVersion,g.newVersion,Pr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const Nw=["get","getKey","getAll","getAllKeys","count"],Mw=["put","add","delete","clear"],Fd=new Map;function W_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Fd.get(t))return Fd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=Mw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Nw.includes(n)))return;const c=async function(f,...p){const g=this.transaction(f,l?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),l&&g.done]))[0]};return Fd.set(t,c),c}Cw(r=>({...r,get:(t,n,s)=>W_(t,n)||r.get(t,n,s),has:(t,n)=>!!W_(t,n)||r.has(t,n)}));/**
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
 */class Vw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kw(r){return r.getComponent()?.type==="VERSION"}const rm="@firebase/app",J_="0.14.1";/**
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
 */const $i=new hh("@firebase/app"),Pw="@firebase/app-compat",xw="@firebase/analytics-compat",Uw="@firebase/analytics",Lw="@firebase/app-check-compat",zw="@firebase/app-check",Bw="@firebase/auth",qw="@firebase/auth-compat",jw="@firebase/database",Hw="@firebase/data-connect",Fw="@firebase/database-compat",Gw="@firebase/functions",Kw="@firebase/functions-compat",Yw="@firebase/installations",Qw="@firebase/installations-compat",Xw="@firebase/messaging",$w="@firebase/messaging-compat",Zw="@firebase/performance",Ww="@firebase/performance-compat",Jw="@firebase/remote-config",tb="@firebase/remote-config-compat",eb="@firebase/storage",nb="@firebase/storage-compat",ib="@firebase/firestore",rb="@firebase/ai",sb="@firebase/firestore-compat",ab="firebase",ob="12.1.0";/**
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
 */const sm="[DEFAULT]",lb={[rm]:"fire-core",[Pw]:"fire-core-compat",[Uw]:"fire-analytics",[xw]:"fire-analytics-compat",[zw]:"fire-app-check",[Lw]:"fire-app-check-compat",[Bw]:"fire-auth",[qw]:"fire-auth-compat",[jw]:"fire-rtdb",[Hw]:"fire-data-connect",[Fw]:"fire-rtdb-compat",[Gw]:"fire-fn",[Kw]:"fire-fn-compat",[Yw]:"fire-iid",[Qw]:"fire-iid-compat",[Xw]:"fire-fcm",[$w]:"fire-fcm-compat",[Zw]:"fire-perf",[Ww]:"fire-perf-compat",[Jw]:"fire-rc",[tb]:"fire-rc-compat",[eb]:"fire-gcs",[nb]:"fire-gcs-compat",[ib]:"fire-fst",[sb]:"fire-fst-compat",[rb]:"fire-vertex","fire-js":"fire-js",[ab]:"fire-js-all"};/**
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
 */const Fc=new Map,ub=new Map,am=new Map;function tv(r,t){try{r.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const t=r.name;if(am.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;am.set(t,r);for(const n of Fc.values())tv(n,r);for(const n of ub.values())tv(n,r);return!0}function Gs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function kn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Fs("app","Firebase",cb);/**
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
 */class hb{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const io=ob;function q0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:sm,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw xr.create("bad-app-name",{appName:String(l)});if(n||(n=N0()),!n)throw xr.create("no-options");const c=Fc.get(l);if(c){if(zr(n,c.options)&&zr(s,c.config))return c;throw xr.create("duplicate-app",{appName:l})}const f=new _w(l);for(const g of am.values())f.addComponent(g);const p=new hb(n,s,f);return Fc.set(l,p),p}function Nm(r=sm){const t=Fc.get(r);if(!t&&r===sm&&N0())return q0();if(!t)throw xr.create("no-app",{appName:r});return t}function xn(r,t,n){let s=lb[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const f=[`Unable to register library "${s}" with version "${t}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(f.join(" "));return}_i(new Fn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const fb="firebase-heartbeat-database",db=1,kl="firebase-heartbeat-store";let Gd=null;function j0(){return Gd||(Gd=B0(fb,db,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(r=>{throw xr.create("idb-open",{originalErrorMessage:r.message})})),Gd}async function mb(r){try{const n=(await j0()).transaction(kl),s=await n.objectStore(kl).get(H0(r));return await n.done,s}catch(t){if(t instanceof Kn)$i.warn(t.message);else{const n=xr.create("idb-get",{originalErrorMessage:t?.message});$i.warn(n.message)}}}async function ev(r,t){try{const s=(await j0()).transaction(kl,"readwrite");await s.objectStore(kl).put(t,H0(r)),await s.done}catch(n){if(n instanceof Kn)$i.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n?.message});$i.warn(s.message)}}}function H0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const pb=1024,gb=30;class yb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>gb){const l=Eb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){$i.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nv(),{heartbeatsToSend:n,unsentEntries:s}=_b(this._heartbeatsCache.heartbeats),l=Hc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $i.warn(t),""}}}function nv(){return new Date().toISOString().substring(0,10)}function _b(r,t=pb){const n=[];let s=r.slice();for(const l of r){const c=n.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),iv(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),iv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?U0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ev(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ev(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function iv(r){return Hc(JSON.stringify({version:2,heartbeats:r})).length}function Eb(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function Tb(r){_i(new Fn("platform-logger",t=>new Vw(t),"PRIVATE")),_i(new Fn("heartbeat",t=>new yb(t),"PRIVATE")),xn(rm,J_,r),xn(rm,J_,"esm2020"),xn("fire-js","")}Tb("");var Ab="firebase",Sb="12.1.0";/**
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
 */xn(Ab,Sb,"app");const F0="@firebase/installations",Mm="0.6.19";/**
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
 */const G0=1e4,K0=`w:${Mm}`,Y0="FIS_v2",wb="https://firebaseinstallations.googleapis.com/v1",bb=3600*1e3,Rb="installations",Ib="Installations";/**
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
 */const Cb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new Fs(Rb,Ib,Cb);function Q0(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
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
 */function X0({projectId:r}){return`${wb}/projects/${r}/installations`}function $0(r){return{token:r.token,requestStatus:2,expiresIn:Ob(r.expiresIn),creationTime:Date.now()}}async function Z0(r,t){const s=(await t.json()).error;return Us.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function W0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Db(r,{refreshToken:t}){const n=W0(r);return n.append("Authorization",Nb(t)),n}async function J0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Ob(r){return Number(r.replace("s","000"))}function Nb(r){return`${Y0} ${r}`}/**
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
 */async function Mb({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=X0(r),l=W0(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:n,authVersion:Y0,appId:r.appId,sdkVersion:K0},p={method:"POST",headers:l,body:JSON.stringify(f)},g=await J0(()=>fetch(s,p));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:$0(y.authToken)}}else throw await Z0("Create Installation",g)}/**
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
 */function tE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function Vb(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kb=/^[cdef][\w-]{21}$/,om="";function Pb(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=xb(r);return kb.test(n)?n:om}catch{return om}}function xb(r){return Vb(r).substr(0,22)}/**
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
 */function fh(r){return`${r.appName}!${r.appId}`}/**
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
 */const eE=new Map;function nE(r,t){const n=fh(r);iE(n,t),Ub(n,t)}function iE(r,t){const n=eE.get(r);if(n)for(const s of n)s(t)}function Ub(r,t){const n=Lb();n&&n.postMessage({key:r,fid:t}),zb()}let ks=null;function Lb(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=r=>{iE(r.data.key,r.data.fid)}),ks}function zb(){eE.size===0&&ks&&(ks.close(),ks=null)}/**
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
 */const Bb="firebase-installations-database",qb=1,Ls="firebase-installations-store";let Kd=null;function Vm(){return Kd||(Kd=B0(Bb,qb,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ls)}}})),Kd}async function Gc(r,t){const n=fh(r),l=(await Vm()).transaction(Ls,"readwrite"),c=l.objectStore(Ls),f=await c.get(n);return await c.put(t,n),await l.done,(!f||f.fid!==t.fid)&&nE(r,t.fid),t}async function rE(r){const t=fh(r),s=(await Vm()).transaction(Ls,"readwrite");await s.objectStore(Ls).delete(t),await s.done}async function dh(r,t){const n=fh(r),l=(await Vm()).transaction(Ls,"readwrite"),c=l.objectStore(Ls),f=await c.get(n),p=t(f);return p===void 0?await c.delete(n):await c.put(p,n),await l.done,p&&(!f||f.fid!==p.fid)&&nE(r,p.fid),p}/**
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
 */async function km(r){let t;const n=await dh(r.appConfig,s=>{const l=jb(s),c=Hb(r,l);return t=c.registrationPromise,c.installationEntry});return n.fid===om?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function jb(r){const t=r||{fid:Pb(),registrationStatus:0};return sE(t)}function Hb(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Us.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Fb(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Gb(r)}:{installationEntry:t}}async function Fb(r,t){try{const n=await Mb(r,t);return Gc(r.appConfig,n)}catch(n){throw Q0(n)&&n.customData.serverCode===409?await rE(r.appConfig):await Gc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Gb(r){let t=await rv(r.appConfig);for(;t.registrationStatus===1;)await tE(100),t=await rv(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await km(r);return s||n}return t}function rv(r){return dh(r,t=>{if(!t)throw Us.create("installation-not-found");return sE(t)})}function sE(r){return Kb(r)?{fid:r.fid,registrationStatus:0}:r}function Kb(r){return r.registrationStatus===1&&r.registrationTime+G0<Date.now()}/**
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
 */async function Yb({appConfig:r,heartbeatServiceProvider:t},n){const s=Qb(r,n),l=Db(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:K0,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(f)},g=await J0(()=>fetch(s,p));if(g.ok){const y=await g.json();return $0(y)}else throw await Z0("Generate Auth Token",g)}function Qb(r,{fid:t}){return`${X0(r)}/${t}/authTokens:generate`}/**
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
 */async function Pm(r,t=!1){let n;const s=await dh(r.appConfig,c=>{if(!aE(c))throw Us.create("not-registered");const f=c.authToken;if(!t&&Zb(f))return c;if(f.requestStatus===1)return n=Xb(r,t),c;{if(!navigator.onLine)throw Us.create("app-offline");const p=Jb(c);return n=$b(r,p),p}});return n?await n:s.authToken}async function Xb(r,t){let n=await sv(r.appConfig);for(;n.authToken.requestStatus===1;)await tE(100),n=await sv(r.appConfig);const s=n.authToken;return s.requestStatus===0?Pm(r,t):s}function sv(r){return dh(r,t=>{if(!aE(t))throw Us.create("not-registered");const n=t.authToken;return tR(n)?{...t,authToken:{requestStatus:0}}:t})}async function $b(r,t){try{const n=await Yb(r,t),s={...t,authToken:n};return await Gc(r.appConfig,s),n}catch(n){if(Q0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rE(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Gc(r.appConfig,s)}throw n}}function aE(r){return r!==void 0&&r.registrationStatus===2}function Zb(r){return r.requestStatus===2&&!Wb(r)}function Wb(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+bb}function Jb(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function tR(r){return r.requestStatus===1&&r.requestTime+G0<Date.now()}/**
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
 */async function eR(r){const t=r,{installationEntry:n,registrationPromise:s}=await km(t);return s?s.catch(console.error):Pm(t).catch(console.error),n.fid}/**
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
 */async function nR(r,t=!1){const n=r;return await iR(n),(await Pm(n,t)).token}async function iR(r){const{registrationPromise:t}=await km(r);t&&await t}/**
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
 */function rR(r){if(!r||!r.options)throw Yd("App Configuration");if(!r.name)throw Yd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Yd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Yd(r){return Us.create("missing-app-config-values",{valueName:r})}/**
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
 */const oE="installations",sR="installations-internal",aR=r=>{const t=r.getProvider("app").getImmediate(),n=rR(t),s=Gs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},oR=r=>{const t=r.getProvider("app").getImmediate(),n=Gs(t,oE).getImmediate();return{getId:()=>eR(n),getToken:l=>nR(n,l)}};function lR(){_i(new Fn(oE,aR,"PUBLIC")),_i(new Fn(sR,oR,"PRIVATE"))}lR();xn(F0,Mm);xn(F0,Mm,"esm2020");/**
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
 */const Kc="analytics",uR="firebase_id",cR="origin",hR=60*1e3,fR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xm="https://www.googletagmanager.com/gtag/js";/**
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
 */const un=new hh("@firebase/analytics");/**
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
 */const dR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new Fs("analytics","Analytics",dR);/**
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
 */function mR(r){if(!r.startsWith(xm)){const t=En.create("invalid-gtag-resource",{gtagURL:r});return un.warn(t.message),""}return r}function lE(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function pR(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function gR(r,t){const n=pR("firebase-js-sdk-policy",{createScriptURL:mR}),s=document.createElement("script"),l=`${xm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function yR(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function _R(r,t,n,s,l,c){const f=s[l];try{if(f)await t[f];else{const g=(await lE(n)).find(y=>y.measurementId===l);g&&await t[g.appId]}}catch(p){un.error(p)}r("config",l,c)}async function vR(r,t,n,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const p=await lE(n);for(const g of f){const y=p.find(I=>I.measurementId===g),A=y&&t[y.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){un.error(c)}}function ER(r,t,n,s){async function l(c,...f){try{if(c==="event"){const[p,g]=f;await vR(r,t,n,p,g)}else if(c==="config"){const[p,g]=f;await _R(r,t,n,s,p,g)}else if(c==="consent"){const[p,g]=f;r("consent",p,g)}else if(c==="get"){const[p,g,y]=f;r("get",p,g,y)}else if(c==="set"){const[p]=f;r("set",p)}else r(c,...f)}catch(p){un.error(p)}}return l}function TR(r,t,n,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=ER(c,r,t,n),{gtagCore:c,wrappedGtag:window[l]}}function AR(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xm)&&n.src.includes(r))return n;return null}/**
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
 */const SR=30,wR=1e3;class bR{constructor(t={},n=wR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const uE=new bR;function RR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function IR(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:RR(n)},l=fR.replace("{app-id}",t),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let f="";try{const p=await c.json();p.error?.message&&(f=p.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function CR(r,t=uE,n){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw En.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw En.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new NR;return setTimeout(async()=>{p.abort()},hR),cE({appId:s,apiKey:l,measurementId:c},f,p,t)}async function cE(r,{throttleEndTimeMillis:t,backoffCount:n},s,l=uE){const{appId:c,measurementId:f}=r;try{await DR(s,t)}catch(p){if(f)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:f};throw p}try{const p=await IR(r);return l.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!OR(g)){if(l.deleteThrottleMetadata(c),f)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:f};throw p}const y=Number(g?.customData?.httpStatus)===503?X_(n,l.intervalMillis,SR):X_(n,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return l.setThrottleMetadata(c,A),un.debug(`Calling attemptFetch again in ${y} millis`),cE(r,A,s,l)}}function DR(r,t){return new Promise((n,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),s(En.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function OR(r){if(!(r instanceof Kn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class NR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function MR(r,t,n,s,l){if(l&&l.global){r("event",n,s);return}else{const c=await t,f={...s,send_to:c};r("event",n,f)}}/**
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
 */async function VR(){if(x0())try{await U0()}catch(r){return un.warn(En.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return un.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kR(r,t,n,s,l,c,f){const p=CR(r);p.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>un.error(C)),t.push(p);const g=VR().then(C=>{if(C)return s.getId()}),[y,A]=await Promise.all([p,g]);AR(c)||gR(c,y.measurementId),l("js",new Date);const I=f?.config??{};return I[cR]="firebase",I.update=!0,A!=null&&(I[uR]=A),l("config",y.measurementId,I),y.measurementId}/**
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
 */class PR{constructor(t){this.app=t}_delete(){return delete Il[this.app.options.appId],Promise.resolve()}}let Il={},av=[];const ov={};let Qd="dataLayer",xR="gtag",lv,hE,uv=!1;function UR(){const r=[];if(P0()&&r.push("This is a browser extension environment."),iw()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:t});un.warn(n.message)}}function LR(r,t,n){UR();const s=r.options.appId;if(!s)throw En.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(Il[s]!=null)throw En.create("already-exists",{id:s});if(!uv){yR(Qd);const{wrappedGtag:c,gtagCore:f}=TR(Il,av,ov,Qd,xR);hE=c,lv=f,uv=!0}return Il[s]=kR(r,av,ov,t,lv,Qd,n),new PR(r)}function zR(r=Nm()){r=xe(r);const t=Gs(r,Kc);return t.isInitialized()?t.getImmediate():BR(r)}function BR(r,t={}){const n=Gs(r,Kc);if(n.isInitialized()){const l=n.getImmediate();if(zr(t,n.getOptions()))return l;throw En.create("already-initialized")}return n.initialize({options:t})}function qR(r,t,n,s){r=xe(r),MR(hE,Il[r.app.options.appId],t,n,s).catch(l=>un.error(l))}const cv="@firebase/analytics",hv="0.10.18";function jR(){_i(new Fn(Kc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return LR(s,l,n)},"PUBLIC")),_i(new Fn("analytics-internal",r,"PRIVATE")),xn(cv,hv),xn(cv,hv,"esm2020");function r(t){try{const n=t.getProvider(Kc).getImmediate();return{logEvent:(s,l,c)=>qR(n,s,l,c)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}jR();function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=fE,dE=new Fs("auth","Firebase",fE());/**
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
 */const Yc=new hh("@firebase/auth");function FR(r,...t){Yc.logLevel<=Dt.WARN&&Yc.warn(`Auth (${io}): ${r}`,...t)}function Vc(r,...t){Yc.logLevel<=Dt.ERROR&&Yc.error(`Auth (${io}): ${r}`,...t)}/**
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
 */function Gn(r,...t){throw Um(r,...t)}function hi(r,...t){return Um(r,...t)}function mE(r,t,n){const s={...HR(),[t]:n};return new Fs("auth","Firebase",s).create(t,{appName:r.name})}function Xi(r){return mE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Um(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return dE.create(r,...t)}function gt(r,t,...n){if(!r)throw Um(t,...n)}function Yi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Vc(t),new Error(t)}function Zi(r,t){r||Yi(t)}/**
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
 */function lm(){return typeof self<"u"&&self.location?.href||""}function GR(){return fv()==="http:"||fv()==="https:"}function fv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function KR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GR()||P0()||"connection"in navigator)?navigator.onLine:!0}function YR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Kl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zi(n>t,"Short delay should be less than long delay!"),this.isMobile=Z1()||tw()}get(){return KR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lm(r,t){Zi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class pE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$R=new Kl(3e4,6e4);function Kr(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function Yr(r,t,n,s,l={}){return gE(r,l,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const p=Gl({key:r.config.apiKey,...f}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:g,...c};return J1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&no(r.emulatorConfig.host)&&(y.credentials="include"),pE.fetch()(await yE(r,r.config.apiHost,n,p),y)})}async function gE(r,t,n){r._canInitEmulator=!1;const s={...QR,...t};try{const l=new WR(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw bc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw bc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw bc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw bc(r,"user-disabled",f);const A=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw mE(r,A,y);Gn(r,A)}}catch(l){if(l instanceof Kn)throw l;Gn(r,"network-request-failed",{message:String(l)})}}async function Yl(r,t,n,s,l={}){const c=await Yr(r,t,n,s,l);return"mfaPendingCredential"in c&&Gn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function yE(r,t,n,s){const l=`${t}${n}?${s}`,c=r,f=c.config.emulator?Lm(r.config,l):`${r.config.apiScheme}://${l}`;return XR.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function ZR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hi(this.auth,"network-request-failed")),$R.get())})}}function bc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=hi(r,t,s);return l.customData._tokenResponse=n,l}function dv(r){return r!==void 0&&r.enterprise!==void 0}class JR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return ZR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t2(r,t){return Yr(r,"GET","/v2/recaptchaConfig",Kr(r,t))}/**
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
 */async function e2(r,t){return Yr(r,"POST","/v1/accounts:delete",t)}async function Qc(r,t){return Yr(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Cl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function n2(r,t=!1){const n=xe(r),s=await n.getIdToken(t),l=zm(s);gt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:s,authTime:Cl(Xd(l.auth_time)),issuedAtTime:Cl(Xd(l.iat)),expirationTime:Cl(Xd(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Xd(r){return Number(r)*1e3}function zm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const l=D0(n);return l?JSON.parse(l):(Vc("Failed to decode base64 JWT payload"),null)}catch(l){return Vc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function mv(r){const t=zm(r);return gt(t,"internal-error"),gt(typeof t.exp<"u","internal-error"),gt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Pl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Kn&&i2(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function i2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class r2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class um{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xc(r){const t=r.auth,n=await r.getIdToken(),s=await Pl(r,Qc(t,{idToken:n}));gt(s?.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?_E(l.providerUserInfo):[],f=a2(r.providerData,c),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!f?.length,y=p?g:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new um(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,A)}async function s2(r){const t=xe(r);await Xc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function a2(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function _E(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function o2(r,t){const n=await gE(r,{},async()=>{const s=Gl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,f=await yE(r,l,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&no(r.emulatorConfig.host)&&(g.credentials="include"),pE.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l2(r,t){return Yr(r,"POST","/v2/accounts:revokeToken",Kr(r,t))}/**
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
 */class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gt(t.idToken,"internal-error"),gt(typeof t.idToken<"u","internal-error"),gt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):mv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){gt(t.length!==0,"internal-error");const n=mv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(gt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await o2(t,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,f=new Ka;return s&&(gt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(gt(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(gt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
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
 */function Dr(r,t){gt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hn{constructor({uid:t,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new r2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new um(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,t));return gt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return n2(this,t)}reload(){return s2(this)}_assign(t){this!==t&&(gt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Hn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){gt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Xi(this.auth));const t=await this.getIdToken();return await Pl(this,e2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:I,emailVerified:C,isAnonymous:j,providerData:$,stsTokenManager:et}=n;gt(I&&et,t,"internal-error");const Z=Ka.fromJSON(this.name,et);gt(typeof I=="string",t,"internal-error"),Dr(s,t.name),Dr(l,t.name),gt(typeof C=="boolean",t,"internal-error"),gt(typeof j=="boolean",t,"internal-error"),Dr(c,t.name),Dr(f,t.name),Dr(p,t.name),Dr(g,t.name),Dr(y,t.name),Dr(A,t.name);const st=new Hn({uid:I,auth:t,email:l,emailVerified:C,displayName:s,isAnonymous:j,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:Z,createdAt:y,lastLoginAt:A});return $&&Array.isArray($)&&(st.providerData=$.map(it=>({...it}))),g&&(st._redirectEventId=g),st}static async _fromIdTokenResponse(t,n,s=!1){const l=new Ka;l.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await Xc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];gt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?_E(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,p=new Ka;p.updateFromIdToken(s);const g=new Hn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new um(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
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
 */const pv=new Map;function Qi(r){Zi(r instanceof Function,"Expected a class definition");let t=pv.get(r);return t?(Zi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,pv.set(r,t),t)}/**
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
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vE.type="NONE";const gv=vE;/**
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
 */function kc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ya{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=kc(this.userKey,l.apiKey,c),this.fullPersistenceKey=kc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Qc(this.auth,{idToken:t}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,t):null}return Hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ya(Qi(gv),t,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||Qi(gv);const f=kc(s,t.config.apiKey,t.name);let p=null;for(const y of n)try{const A=await y._get(f);if(A){let I;if(typeof A=="string"){const C=await Qc(t,{idToken:A}).catch(()=>{});if(!C)break;I=await Hn._fromGetAccountInfoResponse(t,C,A)}else I=Hn._fromJSON(t,A);y!==c&&(p=I),c=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Ya(c,t,s):(c=g[0],p&&await c._set(f,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new Ya(c,t,s))}}/**
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
 */function yv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(SE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(EE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bE(t))return"Blackberry";if(RE(t))return"Webos";if(TE(t))return"Safari";if((t.includes("chrome/")||AE(t))&&!t.includes("edge/"))return"Chrome";if(wE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function EE(r=We()){return/firefox\//i.test(r)}function TE(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function AE(r=We()){return/crios\//i.test(r)}function SE(r=We()){return/iemobile/i.test(r)}function wE(r=We()){return/android/i.test(r)}function bE(r=We()){return/blackberry/i.test(r)}function RE(r=We()){return/webos/i.test(r)}function Bm(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function u2(r=We()){return Bm(r)&&!!window.navigator?.standalone}function c2(){return ew()&&document.documentMode===10}function IE(r=We()){return Bm(r)||wE(r)||RE(r)||bE(r)||/windows phone/i.test(r)||SE(r)}/**
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
 */function CE(r,t=[]){let n;switch(r){case"Browser":n=yv(We());break;case"Worker":n=`${yv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${s}`}/**
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
 */class h2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,p)=>{try{const g=t(c);f(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function f2(r,t={}){return Yr(r,"GET","/v2/passwordPolicy",Kr(r,t))}/**
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
 */const d2=6;class m2{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??d2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class p2{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.beforeStateQueue=new h2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ya.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Qc(this,{idToken:t}),s=await Hn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===f)&&p?.user&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return gt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=YR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kn(this.app))return Promise.reject(Xi(this));const n=t?xe(t):null;return n&&gt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&gt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await f2(this),n=new m2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Fs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await l2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qi(t)||this._popupRedirectResolver;gt(n,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Qi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(gt(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,l);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&FR(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ks(r){return xe(r)}class _v{constructor(t){this.auth=t,this.observer=null,this.addObserver=lw(n=>this.observer=n)}get next(){return gt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g2(r){mh=r}function DE(r){return mh.loadJS(r)}function y2(){return mh.recaptchaEnterpriseScript}function _2(){return mh.gapiScript}function v2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class E2{constructor(){this.enterprise=new T2}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class T2{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const A2="recaptcha-enterprise",OE="NO_RECAPTCHA";class S2{constructor(t){this.type=A2,this.auth=Ks(t)}async verify(t="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{t2(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new JR(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(g=>{p(g)})})}function l(c,f,p){const g=window.grecaptcha;dv(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:t}).then(y=>{f(y)}).catch(()=>{f(OE)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new E2().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(p=>{if(!n&&dv(window.grecaptcha))l(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=y2();g.length!==0&&(g+=p),DE(g).then(()=>{l(p,c,f)}).catch(y=>{f(y)})}}).catch(p=>{f(p)})})}}async function vv(r,t,n,s=!1,l=!1){const c=new S2(r);let f;if(l)f=OE;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const p={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function cm(r,t,n,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await vv(r,t,n,n==="getOobCode");return s(r,c)}else return s(r,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await vv(r,t,n,n==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
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
 */function w2(r,t){const n=Gs(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(zr(c,t??{}))return l;Gn(l,"already-initialized")}return n.initialize({options:t})}function b2(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Qi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function R2(r,t,n){const s=Ks(r);gt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=NE(t),{host:f,port:p}=I2(t),g=p===null?"":`:${p}`,y={url:`${c}//${f}${g}/`},A=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){gt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),gt(zr(y,s.config.emulator)&&zr(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,no(f)?(V0(`${c}//${f}${g}`),k0("Auth",!0)):C2()}function NE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function I2(r){const t=NE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Ev(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:Ev(f)}}}function Ev(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function C2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class qm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Yi("not implemented")}_getIdTokenResponse(t){return Yi("not implemented")}_linkToIdToken(t,n){return Yi("not implemented")}_getReauthenticationResolver(t){return Yi("not implemented")}}async function D2(r,t){return Yr(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function O2(r,t){return Yl(r,"POST","/v1/accounts:signInWithPassword",Kr(r,t))}/**
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
 */async function N2(r,t){return Yl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,t))}async function M2(r,t){return Yl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,t))}/**
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
 */class xl extends qm{constructor(t,n,s,l=null){super("password",s),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new xl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new xl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cm(t,n,"signInWithPassword",O2);case"emailLink":return N2(t,{email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cm(t,s,"signUpPassword",D2);case"emailLink":return M2(t,{idToken:n,email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Qa(r,t){return Yl(r,"POST","/v1/accounts:signInWithIdp",Kr(r,t))}/**
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
 */const V2="http://localhost";class zs extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const f=new zs(s,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Qa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Qa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Qa(t,n)}buildRequest(){const t={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gl(n)}return t}}/**
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
 */function k2(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P2(r){const t=El(Tl(r)).link,n=t?El(Tl(t)).deep_link_id:null,s=El(Tl(r)).deep_link_id;return(s?El(Tl(s)).link:null)||s||n||t||r}class jm{constructor(t){const n=El(Tl(t)),s=n.apiKey??null,l=n.oobCode??null,c=k2(n.mode??null);gt(s&&l&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=P2(t);try{return new jm(n)}catch{return null}}}/**
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
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(t,n){return xl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=jm.parseLink(n);return gt(s,"argument-error"),xl._fromEmailAndCode(t,s.code,s.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ME{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends ME{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Ql{constructor(){super("facebook.com")}static credential(t){return zs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Nr extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Ql{constructor(){super("github.com")}static credential(t){return zs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Vr extends Ql{constructor(){super("twitter.com")}static credential(t,n){return zs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Vr.credential(n,s)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */async function x2(r,t){return Yl(r,"POST","/v1/accounts:signUp",Kr(r,t))}/**
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
 */class Bs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const c=await Hn._fromIdTokenResponse(t,s,l),f=Tv(s);return new Bs({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=Tv(s);return new Bs({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function Tv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class $c extends Kn{constructor(t,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new $c(t,n,s,l)}}function VE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(r,c,t,s):c})}async function U2(r,t,n=!1){const s=await Pl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Bs._forOperation(r,"link",s)}/**
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
 */async function L2(r,t,n=!1){const{auth:s}=r;if(kn(s.app))return Promise.reject(Xi(s));const l="reauthenticate";try{const c=await Pl(r,VE(s,l,t,r),n);gt(c.idToken,s,"internal-error");const f=zm(c.idToken);gt(f,s,"internal-error");const{sub:p}=f;return gt(r.uid===p,s,"user-mismatch"),Bs._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Gn(s,"user-mismatch"),c}}/**
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
 */async function kE(r,t,n=!1){if(kn(r.app))return Promise.reject(Xi(r));const s="signIn",l=await VE(r,s,t),c=await Bs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}async function z2(r,t){return kE(Ks(r),t)}/**
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
 */async function PE(r){const t=Ks(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function B2(r,t,n){if(kn(r.app))return Promise.reject(Xi(r));const s=Ks(r),f=await cm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",x2).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&PE(r),g}),p=await Bs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function q2(r,t,n){return kn(r.app)?Promise.reject(Xi(r)):z2(xe(r),ro.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&PE(r),s})}function j2(r,t,n,s){return xe(r).onIdTokenChanged(t,n,s)}function H2(r,t,n){return xe(r).beforeAuthStateChanged(t,n)}function F2(r,t,n,s){return xe(r).onAuthStateChanged(t,n,s)}function G2(r){return xe(r).signOut()}const Zc="__sak";/**
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
 */class xE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const K2=1e3,Y2=10;class UE extends xE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);c2()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,Y2):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}UE.type="LOCAL";const Q2=UE;/**
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
 */class LE extends xE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}LE.type="SESSION";const zE=LE;/**
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
 */function X2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ph{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new ph(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:c}=n.data,f=this.handlersMap[l];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(f).map(async y=>y(n.origin,c)),g=await X2(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
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
 */function Hm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class $2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((p,g)=>{const y=Hm("",20);l.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(I){const C=I;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(C.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function fi(){return window}function Z2(r){fi().location.href=r}/**
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
 */function BE(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function W2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){return navigator?.serviceWorker?.controller||null}function tI(){return BE()?self:null}/**
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
 */const qE="firebaseLocalStorageDb",eI=1,Wc="firebaseLocalStorage",jE="fbase_key";class Xl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(r,t){return r.transaction([Wc],t?"readwrite":"readonly").objectStore(Wc)}function nI(){const r=indexedDB.deleteDatabase(qE);return new Xl(r).toPromise()}function hm(){const r=indexedDB.open(qE,eI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wc,{keyPath:jE})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wc)?t(s):(s.close(),await nI(),t(await hm()))})})}async function Av(r,t,n){const s=gh(r,!0).put({[jE]:t,value:n});return new Xl(s).toPromise()}async function iI(r,t){const n=gh(r,!1).get(t),s=await new Xl(n).toPromise();return s===void 0?null:s.value}function Sv(r,t){const n=gh(r,!0).delete(t);return new Xl(n).toPromise()}const rI=800,sI=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>sI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return BE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(tI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await W2(),!this.activeServiceWorker)return;this.sender=new $2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hm();return await Av(t,Zc,"1"),await Sv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Av(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>iI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=gh(l,!1).getAll();return new Xl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const aI=HE;new Kl(3e4,6e4);/**
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
 */function oI(r,t){return t?Qi(t):(gt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fm extends qm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Qa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Qa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function lI(r){return kE(r.auth,new Fm(r),r.bypassAuthState)}function uI(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),L2(n,new Fm(r),r.bypassAuthState)}async function cI(r){const{auth:t,user:n}=r;return gt(n,t,"internal-error"),U2(n,new Fm(r),r.bypassAuthState)}/**
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
 */class FE{constructor(t,n,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lI;case"linkViaPopup":case"linkViaRedirect":return cI;case"reauthViaPopup":case"reauthViaRedirect":return uI;default:Gn(this.auth,"internal-error")}}resolve(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hI=new Kl(2e3,1e4);class Ga extends FE{constructor(t,n,s,l,c){super(t,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Ga.currentPopupAction&&Ga.currentPopupAction.cancel(),Ga.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return gt(t,this.auth,"internal-error"),t}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const t=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ga.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,hI.get())};t()}}Ga.currentPopupAction=null;/**
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
 */const fI="pendingRedirect",Pc=new Map;class dI extends FE{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const s=await mI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mI(r,t){const n=yI(t),s=gI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function pI(r,t){Pc.set(r._key(),t)}function gI(r){return Qi(r._redirectPersistence)}function yI(r){return kc(fI,r.config.apiKey,r.name)}async function _I(r,t,n=!1){if(kn(r.app))return Promise.reject(Xi(r));const s=Ks(r),l=oI(s,t),f=await new dI(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const vI=600*1e3;class EI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!TI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!GE(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(hi(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(t))}saveEventToCache(t){this.cachedEventUids.add(wv(t)),this.lastProcessedEventTime=Date.now()}}function wv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function GE({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function TI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GE(r);default:return!1}}/**
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
 */async function AI(r,t={}){return Yr(r,"GET","/v1/projects",t)}/**
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
 */const SI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function bI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await AI(r);for(const n of t)try{if(RI(n))return}catch{}Gn(r,"unauthorized-domain")}function RI(r){const t=lm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!wI.test(n))return!1;if(SI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const II=new Kl(3e4,6e4);function bv(){const r=fi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CI(r){return new Promise((t,n)=>{function s(){bv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bv(),n(hi(r,"network-request-failed"))},timeout:II.get()})}if(fi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(fi().gapi?.load)s();else{const l=v2("iframefcb");return fi()[l]=()=>{gapi.load?s():n(hi(r,"network-request-failed"))},DE(`${_2()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw xc=null,t})}let xc=null;function DI(r){return xc=xc||CI(r),xc}/**
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
 */const OI=new Kl(5e3,15e3),NI="__/auth/iframe",MI="emulator/auth/iframe",VI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PI(r){const t=r.config;gt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Lm(t,MI):`https://${r.config.authDomain}/${NI}`,s={apiKey:t.apiKey,appName:r.name,v:io},l=kI.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Gl(s).slice(1)}`}async function xI(r){const t=await DI(r),n=fi().gapi;return gt(n,r,"internal-error"),t.open({where:document.body,url:PI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VI,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const f=hi(r,"network-request-failed"),p=fi().setTimeout(()=>{c(f)},OI.get());function g(){fi().clearTimeout(p),l(s)}s.ping(g).then(g,()=>{c(f)})}))}/**
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
 */const UI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,zI=600,BI="_blank",qI="http://localhost";class Rv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(r,t,n,s=LI,l=zI){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...UI,width:s.toString(),height:l.toString(),top:c,left:f},y=We().toLowerCase();n&&(p=AE(y)?BI:n),EE(y)&&(t=t||qI,g.scrollbars="yes");const A=Object.entries(g).reduce((C,[j,$])=>`${C}${j}=${$},`,"");if(u2(y)&&p!=="_self")return HI(t||"",p),new Rv(null);const I=window.open(t||"",p,A);gt(I,r,"popup-blocked");try{I.focus()}catch{}return new Rv(I)}function HI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FI="__/auth/handler",GI="emulator/auth/handler",KI=encodeURIComponent("fac");async function Iv(r,t,n,s,l,c){gt(r.config.authDomain,r,"auth-domain-config-required"),gt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:io,eventId:l};if(t instanceof ME){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",ow(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,I]of Object.entries({}))f[A]=I}if(t instanceof Ql){const A=t.getScopes().filter(I=>I!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const g=await r._getAppCheckToken(),y=g?`#${KI}=${encodeURIComponent(g)}`:"";return`${YI(r)}?${Gl(p).slice(1)}${y}`}function YI({config:r}){return r.emulator?Lm(r,GI):`https://${r.authDomain}/${FI}`}/**
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
 */const $d="webStorageSupport";class QI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zE,this._completeRedirectFn=_I,this._overrideRedirectResult=pI}async _openPopup(t,n,s,l){Zi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Iv(t,n,s,lm(),l);return jI(t,c,Hm())}async _openRedirect(t,n,s,l){await this._originValidation(t);const c=await Iv(t,n,s,lm(),l);return Z2(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(Zi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await xI(t),s=new EI(t);return n.register("authEvent",l=>(gt(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($d,{type:$d},l=>{const c=l?.[0]?.[$d];c!==void 0&&n(!!c),Gn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return IE()||TE()||Bm()}}const XI=QI;var Cv="@firebase/auth",Dv="1.11.0";/**
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
 */class $I{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){gt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(r){_i(new Fn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;gt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(r)},y=new p2(s,l,c,g);return b2(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),_i(new Fn("auth-internal",t=>{const n=Ks(t.getProvider("auth").getImmediate());return(s=>new $I(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Cv,Dv,ZI(r)),xn(Cv,Dv,"esm2020")}/**
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
 */const JI=300,tC=M0("authIdTokenMaxAge")||JI;let Ov=null;const eC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>tC)return;const l=n?.token;Ov!==l&&(Ov=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function nC(r=Nm()){const t=Gs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=w2(r,{popupRedirectResolver:XI,persistence:[aI,Q2,zE]}),s=M0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=eC(c.toString());H2(n,f,()=>f(n.currentUser)),j2(n,p=>f(p))}}const l=O0("auth");return l&&R2(n,`http://${l}`),n}function iC(){return document.getElementsByTagName("head")?.[0]??document}g2({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=hi("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",iC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");var Nv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,KE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,S){function R(){}R.prototype=S.prototype,V.D=S.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(N,M,P){for(var b=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)b[Ue-2]=arguments[Ue];return S.prototype[M].apply(N,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)N[M]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(M=0;16>M;++M)N[M]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=V.g[0],R=V.g[1],M=V.g[2];var P=V.g[3],b=S+(P^R&(M^P))+N[0]+3614090360&4294967295;S=R+(b<<7&4294967295|b>>>25),b=P+(M^S&(R^M))+N[1]+3905402710&4294967295,P=S+(b<<12&4294967295|b>>>20),b=M+(R^P&(S^R))+N[2]+606105819&4294967295,M=P+(b<<17&4294967295|b>>>15),b=R+(S^M&(P^S))+N[3]+3250441966&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(P^R&(M^P))+N[4]+4118548399&4294967295,S=R+(b<<7&4294967295|b>>>25),b=P+(M^S&(R^M))+N[5]+1200080426&4294967295,P=S+(b<<12&4294967295|b>>>20),b=M+(R^P&(S^R))+N[6]+2821735955&4294967295,M=P+(b<<17&4294967295|b>>>15),b=R+(S^M&(P^S))+N[7]+4249261313&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(P^R&(M^P))+N[8]+1770035416&4294967295,S=R+(b<<7&4294967295|b>>>25),b=P+(M^S&(R^M))+N[9]+2336552879&4294967295,P=S+(b<<12&4294967295|b>>>20),b=M+(R^P&(S^R))+N[10]+4294925233&4294967295,M=P+(b<<17&4294967295|b>>>15),b=R+(S^M&(P^S))+N[11]+2304563134&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(P^R&(M^P))+N[12]+1804603682&4294967295,S=R+(b<<7&4294967295|b>>>25),b=P+(M^S&(R^M))+N[13]+4254626195&4294967295,P=S+(b<<12&4294967295|b>>>20),b=M+(R^P&(S^R))+N[14]+2792965006&4294967295,M=P+(b<<17&4294967295|b>>>15),b=R+(S^M&(P^S))+N[15]+1236535329&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(M^P&(R^M))+N[1]+4129170786&4294967295,S=R+(b<<5&4294967295|b>>>27),b=P+(R^M&(S^R))+N[6]+3225465664&4294967295,P=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(P^S))+N[11]+643717713&4294967295,M=P+(b<<14&4294967295|b>>>18),b=R+(P^S&(M^P))+N[0]+3921069994&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^P&(R^M))+N[5]+3593408605&4294967295,S=R+(b<<5&4294967295|b>>>27),b=P+(R^M&(S^R))+N[10]+38016083&4294967295,P=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(P^S))+N[15]+3634488961&4294967295,M=P+(b<<14&4294967295|b>>>18),b=R+(P^S&(M^P))+N[4]+3889429448&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^P&(R^M))+N[9]+568446438&4294967295,S=R+(b<<5&4294967295|b>>>27),b=P+(R^M&(S^R))+N[14]+3275163606&4294967295,P=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(P^S))+N[3]+4107603335&4294967295,M=P+(b<<14&4294967295|b>>>18),b=R+(P^S&(M^P))+N[8]+1163531501&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^P&(R^M))+N[13]+2850285829&4294967295,S=R+(b<<5&4294967295|b>>>27),b=P+(R^M&(S^R))+N[2]+4243563512&4294967295,P=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(P^S))+N[7]+1735328473&4294967295,M=P+(b<<14&4294967295|b>>>18),b=R+(P^S&(M^P))+N[12]+2368359562&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(R^M^P)+N[5]+4294588738&4294967295,S=R+(b<<4&4294967295|b>>>28),b=P+(S^R^M)+N[8]+2272392833&4294967295,P=S+(b<<11&4294967295|b>>>21),b=M+(P^S^R)+N[11]+1839030562&4294967295,M=P+(b<<16&4294967295|b>>>16),b=R+(M^P^S)+N[14]+4259657740&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^P)+N[1]+2763975236&4294967295,S=R+(b<<4&4294967295|b>>>28),b=P+(S^R^M)+N[4]+1272893353&4294967295,P=S+(b<<11&4294967295|b>>>21),b=M+(P^S^R)+N[7]+4139469664&4294967295,M=P+(b<<16&4294967295|b>>>16),b=R+(M^P^S)+N[10]+3200236656&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^P)+N[13]+681279174&4294967295,S=R+(b<<4&4294967295|b>>>28),b=P+(S^R^M)+N[0]+3936430074&4294967295,P=S+(b<<11&4294967295|b>>>21),b=M+(P^S^R)+N[3]+3572445317&4294967295,M=P+(b<<16&4294967295|b>>>16),b=R+(M^P^S)+N[6]+76029189&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^P)+N[9]+3654602809&4294967295,S=R+(b<<4&4294967295|b>>>28),b=P+(S^R^M)+N[12]+3873151461&4294967295,P=S+(b<<11&4294967295|b>>>21),b=M+(P^S^R)+N[15]+530742520&4294967295,M=P+(b<<16&4294967295|b>>>16),b=R+(M^P^S)+N[2]+3299628645&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(M^(R|~P))+N[0]+4096336452&4294967295,S=R+(b<<6&4294967295|b>>>26),b=P+(R^(S|~M))+N[7]+1126891415&4294967295,P=S+(b<<10&4294967295|b>>>22),b=M+(S^(P|~R))+N[14]+2878612391&4294967295,M=P+(b<<15&4294967295|b>>>17),b=R+(P^(M|~S))+N[5]+4237533241&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~P))+N[12]+1700485571&4294967295,S=R+(b<<6&4294967295|b>>>26),b=P+(R^(S|~M))+N[3]+2399980690&4294967295,P=S+(b<<10&4294967295|b>>>22),b=M+(S^(P|~R))+N[10]+4293915773&4294967295,M=P+(b<<15&4294967295|b>>>17),b=R+(P^(M|~S))+N[1]+2240044497&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~P))+N[8]+1873313359&4294967295,S=R+(b<<6&4294967295|b>>>26),b=P+(R^(S|~M))+N[15]+4264355552&4294967295,P=S+(b<<10&4294967295|b>>>22),b=M+(S^(P|~R))+N[6]+2734768916&4294967295,M=P+(b<<15&4294967295|b>>>17),b=R+(P^(M|~S))+N[13]+1309151649&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~P))+N[4]+4149444226&4294967295,S=R+(b<<6&4294967295|b>>>26),b=P+(R^(S|~M))+N[11]+3174756917&4294967295,P=S+(b<<10&4294967295|b>>>22),b=M+(S^(P|~R))+N[2]+718787259&4294967295,M=P+(b<<15&4294967295|b>>>17),b=R+(P^(M|~S))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(b<<21&4294967295|b>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+P&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var R=S-this.blockSize,N=this.B,M=this.h,P=0;P<S;){if(M==0)for(;P<=R;)l(this,V,P),P+=this.blockSize;if(typeof V=="string"){for(;P<S;)if(N[M++]=V.charCodeAt(P++),M==this.blockSize){l(this,N),M=0;break}}else for(;P<S;)if(N[M++]=V[P++],M==this.blockSize){l(this,N),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var R=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=R&255,R/=256;for(this.u(V),V=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)V[R++]=this.g[S]>>>N&255;return V};function c(V,S){var R=p;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=S(V)}function f(V,S){this.h=S;for(var R=[],N=!0,M=V.length-1;0<=M;M--){var P=V[M]|0;N&&P==S||(R[M]=P,N=!1)}this.g=R}var p={};function g(V){return-128<=V&&128>V?c(V,function(S){return new f([S|0],0>S?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return I;if(0>V)return Z(y(-V));for(var S=[],R=1,N=0;V>=R;N++)S[N]=V/R|0,R*=4294967296;return new f(S,0)}function A(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return Z(A(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=I,M=0;M<V.length;M+=8){var P=Math.min(8,V.length-M),b=parseInt(V.substring(M,M+P),S);8>P?(P=y(Math.pow(S,P)),N=N.j(P).add(y(b))):(N=N.j(R),N=N.add(y(b)))}return N}var I=g(0),C=g(1),j=g(16777216);r=f.prototype,r.m=function(){if(et(this))return-Z(this).m();for(var V=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);V+=(0<=N?N:4294967296+N)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(et(this))return"-"+Z(this).toString(V);for(var S=y(Math.pow(V,6)),R=this,N="";;){var M=Ut(R,S).g;R=st(R,M.j(S));var P=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=M,$(R))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function et(V){return V.h==-1}r.l=function(V){return V=st(this,V),et(V)?-1:$(V)?0:1};function Z(V){for(var S=V.g.length,R=[],N=0;N<S;N++)R[N]=~V.g[N];return new f(R,~V.h).add(C)}r.abs=function(){return et(this)?Z(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0,M=0;M<=S;M++){var P=N+(this.i(M)&65535)+(V.i(M)&65535),b=(P>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=b>>>16,P&=65535,b&=65535,R[M]=b<<16|P}return new f(R,R[R.length-1]&-2147483648?-1:0)};function st(V,S){return V.add(Z(S))}r.j=function(V){if($(this)||$(V))return I;if(et(this))return et(V)?Z(this).j(Z(V)):Z(Z(this).j(V));if(et(V))return Z(this.j(Z(V)));if(0>this.l(j)&&0>V.l(j))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var P=this.i(N)>>>16,b=this.i(N)&65535,Ue=V.i(M)>>>16,ae=V.i(M)&65535;R[2*N+2*M]+=b*ae,it(R,2*N+2*M),R[2*N+2*M+1]+=P*ae,it(R,2*N+2*M+1),R[2*N+2*M+1]+=b*Ue,it(R,2*N+2*M+1),R[2*N+2*M+2]+=P*Ue,it(R,2*N+2*M+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function it(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function ut(V,S){this.g=V,this.h=S}function Ut(V,S){if($(S))throw Error("division by zero");if($(V))return new ut(I,I);if(et(V))return S=Ut(Z(V),S),new ut(Z(S.g),Z(S.h));if(et(S))return S=Ut(V,Z(S)),new ut(Z(S.g),S.h);if(30<V.g.length){if(et(V)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=S;0>=N.l(V);)R=At(R),N=At(N);var M=Bt(R,1),P=Bt(N,1);for(N=Bt(N,2),R=Bt(R,2);!$(N);){var b=P.add(N);0>=b.l(V)&&(M=M.add(R),P=b),N=Bt(N,1),R=Bt(R,1)}return S=st(V,M.j(S)),new ut(M,S)}for(M=I;0<=V.l(S);){for(R=Math.max(1,Math.floor(V.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=y(R),b=P.j(S);et(b)||0<b.l(V);)R-=N,P=y(R),b=P.j(S);$(P)&&(P=C),M=M.add(P),V=st(V,b)}return new ut(M,V)}r.A=function(V){return Ut(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&V.i(N);return new f(R,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|V.i(N);return new f(R,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^V.i(N);return new f(R,this.h^V.h)};function At(V){for(var S=V.g.length+1,R=[],N=0;N<S;N++)R[N]=V.i(N)<<1|V.i(N-1)>>>31;return new f(R,V.h)}function Bt(V,S){var R=S>>5;S%=32;for(var N=V.g.length-R,M=[],P=0;P<N;P++)M[P]=0<S?V.i(P+R)>>>S|V.i(P+R+1)<<32-S:V.i(P+R);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,KE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,Ur=f}).apply(typeof Nv<"u"?Nv:typeof self<"u"?self:typeof window<"u"?window:{});var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YE,Al,QE,Uc,fm,XE,$E,ZE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rc=="object"&&Rc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)t:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var x=u[T];if(!(x in _))break t;_=_[x]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,T=!1,x={next:function(){if(!T&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function g(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,_){return u.call.apply(u.bind,arguments)}function I(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,T),u.apply(m,x)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:I,C.apply(null,arguments)}function j(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,x,q){for(var J=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)J[Mt-2]=arguments[Mt];return m.prototype[x].apply(T,J)}}function et(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function Z(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(g(T)){const x=u.length||0,q=T.length||0;u.length=x+q;for(let J=0;J<q;J++)u[x+J]=T[J]}else u.push(T)}}class st{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function it(u){return/^[\s\xa0]*$/.test(u)}function ut(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function Ut(u){return Ut[" "](u),u}Ut[" "]=function(){};var At=ut().indexOf("Gecko")!=-1&&!(ut().toLowerCase().indexOf("webkit")!=-1&&ut().indexOf("Edge")==-1)&&!(ut().indexOf("Trident")!=-1||ut().indexOf("MSIE")!=-1)&&ut().indexOf("Edge")==-1;function Bt(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,T;for(let x=1;x<arguments.length;x++){T=arguments[x];for(_ in T)u[_]=T[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function P(u){p.setTimeout(()=>{throw u},0)}function b(){var u=Lt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ue{constructor(){this.h=this.g=null}add(m,_){const T=ae.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ae=new st(()=>new H,u=>u.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ht=!1,Lt=new Ue,D=()=>{const u=p.Promise.resolve(void 0);tt=()=>{u.then(Q)}};var Q=()=>{for(var u;u=b();){try{u.h.call(u.g)}catch(_){P(_)}var m=ae;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ht=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};p.addEventListener("test",_,m),p.removeEventListener("test",_,m)}catch{}return u}();function bt(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(At){t:{try{Ut(m.nodeName);var x=!0;break t}catch{}x=!1}x||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&bt.aa.h.call(this)}}$(bt,W);var vt={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Yn(u,m,_,T,x){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=x,this.key=++Zt,this.da=this.fa=!1}function tr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ti(u){this.src=u,this.g={},this.h=0}Ti.prototype.add=function(u,m,_,T,x){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var J=Zr(u,m,T,x);return-1<J?(m=u[J],_||(m.fa=!1)):(m=new Yn(m,this.src,q,!!T,x),m.fa=_,u.push(m)),m};function $r(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],x=Array.prototype.indexOf.call(T,m,void 0),q;(q=0<=x)&&Array.prototype.splice.call(T,x,1),q&&(tr(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Zr(u,m,_,T){for(var x=0;x<u.length;++x){var q=u[x];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==T)return x}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),uo={};function eu(u,m,_,T,x){if(Array.isArray(m)){for(var q=0;q<m.length;q++)eu(u,m[q],_,T,x);return null}return _=nu(_),u&&u[Ce]?u.K(m,_,y(T)?!!T.capture:!1,x):Tn(u,m,_,!1,T,x)}function Tn(u,m,_,T,x,q){if(!m)throw Error("Invalid event type");var J=y(x)?!!x.capture:!!x,Mt=$s(u);if(Mt||(u[Wr]=Mt=new Ti(u)),_=Mt.add(m,_,T,J,q),_.proxy)return _;if(T=kh(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)ft||(x=J),x===void 0&&(x=!1),u.addEventListener(m.toString(),T,x);else if(u.attachEvent)u.attachEvent(Jr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function kh(){function u(_){return m.call(u.src,u.listener,_)}const m=Ph;return u}function co(u,m,_,T,x){if(Array.isArray(m))for(var q=0;q<m.length;q++)co(u,m[q],_,T,x);else T=y(T)?!!T.capture:!!T,_=nu(_),u&&u[Ce]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Zr(q,_,T,x),-1<_&&(tr(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=$s(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Zr(m,_,T,x)),(_=-1<u?m[u]:null)&&Xs(_))}function Xs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ce])$r(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Jr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=$s(m))?($r(_,u),_.h==0&&(_.src=null,m[Wr]=null)):tr(u)}}}function Jr(u){return u in uo?uo[u]:uo[u]="on"+u}function Ph(u,m){if(u.da)u=!0;else{m=new bt(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Xs(u),u=_.call(T,m)}return u}function $s(u){return u=u[Wr],u instanceof Ti?u:null}var ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function nu(u){return typeof u=="function"?u:(u[ho]||(u[ho]=function(m){return u.handleEvent(m)}),u[ho])}function oe(){nt.call(this),this.i=new Ti(this),this.M=this,this.F=null}$(oe,nt),oe.prototype[Ce]=!0,oe.prototype.removeEventListener=function(u,m,_,T){co(this,u,m,_,T)};function Ht(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var x=m;m=new W(T,u),N(m,x)}if(x=!0,_)for(var q=_.length-1;0<=q;q--){var J=m.g=_[q];x=cn(J,T,!0,m)&&x}if(J=m.g=u,x=cn(J,T,!0,m)&&x,x=cn(J,T,!1,m)&&x,_)for(q=0;q<_.length;q++)J=m.g=_[q],x=cn(J,T,!1,m)&&x}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)tr(_[T]);delete u.g[m],u.h--}}this.F=null},oe.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},oe.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function cn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var x=!0,q=0;q<m.length;++q){var J=m[q];if(J&&!J.da&&J.capture==_){var Mt=J.listener,Te=J.ha||J.src;J.fa&&$r(u.i,J),x=Mt.call(Te,T)!==!1&&x}}return x&&!T.defaultPrevented}function Ke(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function iu(u){u.g=Ke(()=>{u.g=null,u.i&&(u.i=!1,iu(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class xh extends nt{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(u){nt.call(this),this.h=u,this.g={}}$(ts,nt);var es=[];function ns(u){Bt(u.g,function(m,_){this.g.hasOwnProperty(_)&&Xs(m)},u),u.g={}}ts.prototype.N=function(){ts.aa.N.call(this),ns(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=p.JSON.stringify,Zs=p.JSON.parse,is=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function fo(){}fo.prototype.h=null;function mo(u){return u.h||(u.h=u.i())}function po(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){W.call(this,"d")}$(Si,W);function go(){W.call(this,"c")}$(go,W);var Qn={},yo=null;function er(){return yo=yo||new oe}Qn.La="serverreachability";function Ws(u){W.call(this,Qn.La,u)}$(Ws,W);function nr(u){const m=er();Ht(m,new Ws(m))}Qn.STAT_EVENT="statevent";function ru(u,m){W.call(this,Qn.STAT_EVENT,u),this.stat=m}$(ru,W);function ee(u){const m=er();Ht(m,new ru(m,u))}Qn.Ma="timingevent";function Ee(u,m){W.call(this,Qn.Ma,u),this.size=m}$(Ee,W);function me(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function _o(u,m,_,T,x,q){u.info(function(){if(u.g)if(q)for(var J="",Mt=q.split("&"),Te=0;Te<Mt.length;Te++){var Vt=Mt[Te].split("=");if(1<Vt.length){var Oe=Vt[0];Vt=Vt[1];var Ae=Oe.split("_");J=2<=Ae.length&&Ae[1]=="type"?J+(Oe+"="+Vt+"&"):J+(Oe+"=redacted&")}}else J=null;else J=q;return"XMLHTTP REQ ("+T+") [attempt "+x+"]: "+m+`
`+_+`
`+J})}function Uh(u,m,_,T,x,q,J){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+x+"]: "+m+`
`+_+`
`+q+" "+J})}function ir(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+rs(u,_)+(T?" "+T:"")})}function su(u,m){u.info(function(){return"TIMEOUT: "+m})}An.prototype.info=function(){};function rs(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var x=T[1];if(Array.isArray(x)&&!(1>x.length)){var q=x[0];if(q!="noop"&&q!="stop"&&q!="close")for(var J=1;J<x.length;J++)x[J]=""}}}}return Un(_)}catch{return m}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}$($n,fo),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function Je(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}var vo={},Js={};function Ln(u,m,_){u.L=1,u.v=us(hn(m)),u.m=_,u.P=!0,bi(u,null)}function bi(u,m){u.F=Date.now(),ss(u),u.A=hn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),bo(_.i,"t",T),u.C=0,_=u.j.J,u.h=new ce,u.g=Tu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new xh(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var x="readystatechange";Array.isArray(x)||(x&&(es[0]=x.toString()),x=es);for(var q=0;q<x.length;q++){var J=eu(_,x[q],T||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),nr(),_o(u.i,u.u,u.A,u.l,u.R,u.m)}Je.prototype.ca=function(u){u=u.target;const m=this.M;m&&Rn(u)==3?m.j():this.Y(u)},Je.prototype.Y=function(u){try{if(u==this.g)t:{const Ae=Rn(this.g);var m=this.g.Ba();const Vi=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||Ae!=4||m==7||(m==8||0>=Vi?nr(3):nr(2)),sr(this);var _=this.g.Z();this.X=_;e:if(au(this)){var T=du(this.g);u="";var x=T.length,q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),Zn(this);var J="";break e}this.h.i=new p.TextDecoder}for(m=0;m<x;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(q&&m==x-1)});T.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,Uh(this.i,this.u,this.A,this.l,this.R,Ae,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Mt,Te=this.g;if((Mt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!it(Mt)){var Vt=Mt;break e}}Vt=null}if(_=Vt)ir(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,as(this,_);else{this.o=!1,this.s=3,ee(12),Le(this),Zn(this);break t}}if(this.P){_=!0;let ze;for(;!this.J&&this.C<J.length;)if(ze=ou(this,J),ze==Js){Ae==4&&(this.s=4,ee(14),_=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==vo){this.s=4,ee(15),ir(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else ir(this.i,this.l,ze,null),as(this,ze);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||J.length!=0||this.h.h||(this.s=1,ee(16),_=!1),this.o=this.o&&_,!_)ir(this.i,this.l,J,"[Invalid Chunked Response]"),Le(this),Zn(this);else if(0<J.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ys(Oe),Oe.M=!0,ee(11))}}else ir(this.i,this.l,J,null),as(this,J);Ae==4&&Le(this),this.o&&!this.J&&(Ae==4?_u(this.j,this):(this.o=!1,ss(this)))}else jh(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Le(this),Zn(this)}}}catch{}finally{}};function au(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ou(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Js:(_=Number(m.substring(_,T)),isNaN(_)?vo:(T+=1,T+_>m.length?Js:(m=m.slice(T,T+_),u.C=T+_,m)))}Je.prototype.cancel=function(){this.J=!0,Le(this)};function ss(u){u.S=Date.now()+u.I,lu(u,u.I)}function lu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=me(C(u.ba,u),m)}function sr(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Je.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(su(this.i,this.A),this.L!=2&&(nr(),ee(17)),Le(this),this.s=2,Zn(this)):lu(this,this.S-u)};function Zn(u){u.j.G==0||u.J||_u(u.j,u)}function Le(u){sr(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ns(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function as(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Eo(_.h,u))){if(!u.K&&Eo(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var x=T;if(x[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ha(_),ua(_);else break t;Oo(_),ee(18)}}else _.za=x[1],0<_.za-_.T&&37500>x[2]&&_.F&&_.v==0&&!_.C&&(_.C=me(C(_.Za,_),6e3));if(1>=ea(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((u.K||_.g==u)&&ha(_),!it(m))for(x=_.Da.g.parse(m),m=0;m<x.length;m++){let Vt=x[m];if(_.T=Vt[0],Vt=Vt[1],_.G==2)if(Vt[0]=="c"){_.K=Vt[1],_.ia=Vt[2];const Oe=Vt[3];Oe!=null&&(_.la=Oe,_.j.info("VER="+_.la));const Ae=Vt[4];Ae!=null&&(_.Aa=Ae,_.j.info("SVER="+_.Aa));const Vi=Vt[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(T=1.5*Vi,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const ze=u.g;if(ze){const ri=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var q=T.h;q.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(na(q,q.h),q.h=null))}if(T.D){const Mo=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(T.ya=Mo,Kt(T.I,T.D,Mo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var J=u;if(T.qa=Eu(T,T.J?T.ia:null,T.W),J.K){tn(T.h,J);var Mt=J,Te=T.L;Te&&(Mt.I=Te),Mt.B&&(sr(Mt),ss(Mt)),T.g=J}else gu(T);0<_.i.length&&ca(_)}else Vt[0]!="stop"&&Vt[0]!="close"||Mi(_,7);else _.G==3&&(Vt[0]=="stop"||Vt[0]=="close"?Vt[0]=="stop"?Mi(_,7):Co(_):Vt[0]!="noop"&&_.l&&_.l.ta(Vt),_.v=0)}}nr(4)}catch{}}var uu=class{constructor(u,m){this.g=u,this.map=m}};function Ri(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ta(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ea(u){return u.h?1:u.g?u.g.size:0}function Eo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function na(u,m){u.g?u.g.add(m):u.h=m}function tn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ri.prototype.cancel=function(){if(this.i=To(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function To(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return et(u.i)}function Lh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function ia(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function Ao(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=ia(u),T=Lh(u),x=T.length,q=0;q<x;q++)m.call(void 0,T[q],_&&_[q],u)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),x=null;if(0<=T){var q=u[_].substring(0,T);x=u[_].substring(T+1)}else q=u[_];m(q,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function pe(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof pe){this.h=u.h,ls(this,u.j),this.o=u.o,this.g=u.g,ar(this,u.s),this.l=u.l;var m=u.i,_=new Ci;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ii(this,_),this.m=u.m}else u&&(m=String(u).match(os))?(this.h=!1,ls(this,m[1]||"",!0),this.o=Sn(m[2]||""),this.g=Sn(m[3]||"",!0),ar(this,m[4]),this.l=Sn(m[5]||"",!0),Ii(this,m[6]||"",!0),this.m=Sn(m[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}pe.prototype.toString=function(){var u=[],m=this.j;m&&u.push(cs(m,So,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(cs(m,So,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(cs(_,_.charAt(0)=="/"?Bh:wo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",cs(_,ra)),u.join("")};function hn(u){return new pe(u)}function ls(u,m,_){u.j=_?Sn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ar(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ii(u,m,_){m instanceof Ci?(u.i=m,hu(u.i,u.h)):(_||(m=cs(m,qh)),u.i=new Ci(m,u.h))}function Kt(u,m,_){u.i.set(m,_)}function us(u){return Kt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function cs(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,cu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function cu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var So=/[#\/\?@]/g,wo=/[#\?:]/g,Bh=/[#\?]/g,qh=/[#\?@]/g,ra=/#/g;function Ci(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function wn(u){u.g||(u.g=new Map,u.h=0,u.i&&zh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Ci.prototype,r.add=function(u,m){wn(this),this.i=null,u=Wn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Di(u,m){wn(u),m=Wn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Oi(u,m){return wn(u),m=Wn(u,m),u.g.has(m)}r.forEach=function(u,m){wn(this),this.g.forEach(function(_,T){_.forEach(function(x){u.call(m,x,T,this)},this)},this)},r.na=function(){wn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const x=u[T];for(let q=0;q<x.length;q++)_.push(m[T])}return _},r.V=function(u){wn(this);let m=[];if(typeof u=="string")Oi(this,u)&&(m=m.concat(this.g.get(Wn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return wn(this),this.i=null,u=Wn(this,u),Oi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function bo(u,m,_){Di(u,m),0<_.length&&(u.i=null,u.g.set(Wn(u,m),et(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const q=encodeURIComponent(String(T)),J=this.V(T);for(T=0;T<J.length;T++){var x=q;J[T]!==""&&(x+="="+encodeURIComponent(String(J[T]))),u.push(x)}}return this.i=u.join("&")};function Wn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function hu(u,m){m&&!u.j&&(wn(u),u.i=null,u.g.forEach(function(_,T){var x=T.toLowerCase();T!=x&&(Di(this,T),bo(this,x,_))},u)),u.j=m}function hs(u,m){const _=new An;if(p.Image){const T=new Image;T.onload=j(bn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=j(bn,_,"TestLoadImage: error",!1,m,T),T.onabort=j(bn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=j(bn,_,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function zn(u,m){const _=new An,T=new AbortController,x=setTimeout(()=>{T.abort(),bn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(x),q.ok?bn(_,"TestPingServer: ok",!0,m):bn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(x),bn(_,"TestPingServer: error",!1,m)})}function bn(u,m,_,T,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),T(_)}catch{}}function fs(){this.g=new is}function Jn(u,m,_){const T=_||"";try{Ao(u,function(x,q){let J=x;y(x)&&(J=Un(x)),m.push(T+q+"="+encodeURIComponent(J))})}catch(x){throw m.push(T+"type="+encodeURIComponent("_badmap")),x}}function or(u){this.l=u.Ub||null,this.j=u.eb||!1}$(or,fo),or.prototype.g=function(){return new Ni(this.l,this.j)},or.prototype.i=function(u){return function(){return u}}({});function Ni(u,m){oe.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ni,oe),r=Ni.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ei(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ti(this):ei(this),this.readyState==3&&Ro(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ti(this))},r.Qa=function(u){this.g&&(this.response=u,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ei(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function ei(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Io(u){let m="";return Bt(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function De(u,m,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=Io(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Kt(u,m,_))}function qt(u){oe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(qt,oe);var sa=/^https?$/i,ds=["POST","PUT"];r=qt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?mo(this.o):mo(Xn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){fu(this,q);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var x in T)_.set(x,T[x]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())_.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),x=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ds,m,void 0))||T||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,J]of _)this.g.setRequestHeader(q,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ms(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){fu(this,q)}};function fu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,aa(u),ni(u)}function aa(u){u.A||(u.A=!0,Ht(u,"complete"),Ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ht(this,"complete"),Ht(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oa(this):this.bb())},r.bb=function(){oa(this)};function oa(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Ke(u.Ea,0,u);else if(Ht(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const J=u.Z();t:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var T;if(T=J===0){var x=String(u.D).match(os)[1]||null;!x&&p.self&&p.self.location&&(x=p.self.location.protocol.slice(0,-1)),T=!sa.test(x?x.toLowerCase():"")}_=T}if(_)Ht(u,"complete"),Ht(u,"success");else{u.m=6;try{var q=2<Rn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",aa(u)}}finally{ni(u)}}}}function ni(u,m){if(u.g){ms(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ht(u,"ready");try{_.onreadystatechange=T}catch{}}}function ms(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Zs(m)}};function du(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function jh(u){const m={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(it(u[T]))continue;var _=M(u[T]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[x]||[];m[x]=q,q.push(_)}V(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function la(u){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,u),this.cb=ps("retryDelaySeedMs",1e4,u),this.Wa=ps("forwardChannelMaxRetries",2,u),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(u&&u.concurrentRequestLimit),this.Da=new fs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=la.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,T){ee(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Eu(this,null,this.W),ca(this)};function Co(u){if(mu(u),u.G==3){var m=u.U++,_=hn(u.I);if(Kt(_,"SID",u.K),Kt(_,"RID",m),Kt(_,"TYPE","terminate"),gs(u,_),m=new Je(u,u.j,m),m.L=2,m.v=us(hn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=m.v,_=!0),_||(m.g=Tu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ss(m)}vu(u)}function ua(u){u.g&&(ys(u),u.g.cancel(),u.g=null)}function mu(u){ua(u),u.u&&(p.clearTimeout(u.u),u.u=null),ha(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ca(u){if(!ta(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||D(),ht||(tt(),ht=!0),Lt.add(m,u),u.B=0}}function Hh(u,m){return ea(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=me(C(u.Ga,u,m),No(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const x=new Je(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(x.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=pu(this,x,m),_=hn(this.I),Kt(_,"RID",u),Kt(_,"CVER",22),this.D&&Kt(_,"X-HTTP-Session-Id",this.D),gs(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Io(q)))+"&"+m:this.m&&De(_,this.m,q)),na(this.h,x),this.Ua&&Kt(_,"TYPE","init"),this.P?(Kt(_,"$req",m),Kt(_,"SID","null"),x.T=!0,Ln(x,_,null)):Ln(x,_,m),this.G=2}}else this.G==3&&(u?Do(this,u):this.i.length==0||ta(this.h)||Do(this))};function Do(u,m){var _;m?_=m.l:_=u.U++;const T=hn(u.I);Kt(T,"SID",u.K),Kt(T,"RID",_),Kt(T,"AID",u.T),gs(u,T),u.m&&u.o&&De(T,u.m,u.o),_=new Je(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=pu(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),na(u.h,_),Ln(_,T,m)}function gs(u,m){u.H&&Bt(u.H,function(_,T){Kt(m,T,_)}),u.l&&Ao({},function(_,T){Kt(m,T,_)})}function pu(u,m,_){_=Math.min(u.i.length,_);var T=u.l?C(u.l.Na,u.l,u):null;t:{var x=u.i;let q=-1;for(;;){const J=["count="+_];q==-1?0<_?(q=x[0].g,J.push("ofs="+q)):q=0:J.push("ofs="+q);let Mt=!0;for(let Te=0;Te<_;Te++){let Vt=x[Te].g;const Oe=x[Te].map;if(Vt-=q,0>Vt)q=Math.max(0,x[Te].g-100),Mt=!1;else try{Jn(Oe,J,"req"+Vt+"_")}catch{T&&T(Oe)}}if(Mt){T=J.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,T}function gu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||D(),ht||(tt(),ht=!0),Lt.add(m,u),u.v=0}}function Oo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=me(C(u.Fa,u),No(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=me(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ua(this),yu(this))};function ys(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function yu(u){u.g=new Je(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);Kt(m,"RID","rpc"),Kt(m,"SID",u.K),Kt(m,"AID",u.T),Kt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Kt(m,"TO",u.ja),Kt(m,"TYPE","xmlhttp"),gs(u,m),u.m&&u.o&&De(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=us(hn(m)),_.m=null,_.P=!0,bi(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ua(this),Oo(this),ee(19))};function ha(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function _u(u,m){var _=null;if(u.g==m){ha(u),ys(u),u.g=null;var T=2}else if(Eo(u.h,m))_=m.D,tn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var x=u.B;T=er(),Ht(T,new Ee(T,_)),ca(u)}else gu(u);else if(x=m.s,x==3||x==0&&0<m.X||!(T==1&&Hh(u,m)||T==2&&Oo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),x){case 1:Mi(u,5);break;case 4:Mi(u,10);break;case 3:Mi(u,6);break;default:Mi(u,2)}}}function No(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Mi(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),T=u.Xa;const x=!T;T=new pe(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ls(T,"https"),us(T),x?hs(T.toString(),_):zn(T.toString(),_)}else ee(2);u.G=0,u.l&&u.l.sa(m),vu(u),mu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function vu(u){if(u.G=0,u.ka=[],u.l){const m=To(u.h);(m.length!=0||u.i.length!=0)&&(Z(u.ka,m),Z(u.ka,u.i),u.h.i.length=0,et(u.i),u.i.length=0),u.l.ra()}}function Eu(u,m,_){var T=_ instanceof pe?hn(_):new pe(_);if(T.g!="")m&&(T.g=m+"."+T.g),ar(T,T.s);else{var x=p.location;T=x.protocol,m=m?m+"."+x.hostname:x.hostname,x=+x.port;var q=new pe(null);T&&ls(q,T),m&&(q.g=m),x&&ar(q,x),_&&(q.l=_),T=q}return _=u.D,m=u.ya,_&&m&&Kt(T,_,m),Kt(T,"VER",u.la),gs(u,T),T}function Tu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new qt(new or({eb:_})):new qt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}r=Au.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function fa(){}fa.prototype.g=function(u,m){return new en(u,m)};function en(u,m){oe.call(this),this.g=new la(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!it(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!it(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ii(this)}$(en,oe),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Co(this.g)},en.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Un(u),u=_);m.i.push(new uu(m.Ya++,u)),m.G==3&&ca(m)},en.prototype.N=function(){this.g.l=null,delete this.j,Co(this.g),delete this.g,en.aa.N.call(this)};function Su(u){Si.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(Su,Si);function wu(){go.call(this),this.status=1}$(wu,go);function ii(u){this.g=u}$(ii,Au),ii.prototype.ua=function(){Ht(this.g,"a")},ii.prototype.ta=function(u){Ht(this.g,new Su(u))},ii.prototype.sa=function(u){Ht(this.g,new wu)},ii.prototype.ra=function(){Ht(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,ZE=function(){return new fa},$E=function(){return er()},XE=Qn,fm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Uc=rr,wi.COMPLETE="complete",QE=wi,po.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Al=po,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,YE=qt}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});const Mv="@firebase/firestore",Vv="4.9.0";/**
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
 */class $e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let so="12.0.0";/**
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
 */const qs=new hh("@firebase/firestore");function qa(){return qs.logLevel}function rt(r,...t){if(qs.logLevel<=Dt.DEBUG){const n=t.map(Gm);qs.debug(`Firestore (${so}): ${r}`,...n)}}function Wi(r,...t){if(qs.logLevel<=Dt.ERROR){const n=t.map(Gm);qs.error(`Firestore (${so}): ${r}`,...n)}}function $a(r,...t){if(qs.logLevel<=Dt.WARN){const n=t.map(Gm);qs.warn(`Firestore (${so}): ${r}`,...n)}}function Gm(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function yt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,WE(r,s,n)}function WE(r,t,n){let s=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Wi(s),new Error(s)}function jt(r,t,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||WE(t,l,s)}function Tt(r,t){return r}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class JE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class sC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aC{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){jt(this.o===void 0,42304);let s=this.i;const l=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Lr,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const g=c;t.enqueueRetryable(async()=>{await g.promise,await l(this.currentUser)})},p=g=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Lr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(jt(typeof s.accessToken=="string",31837,{l:s}),new JE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return jt(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class oC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){jt(this.o===void 0,3512);const s=c=>{c.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(jt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Km{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=cC(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=t.charAt(l[c]%62))}return s}}function Ot(r,t){return r<t?-1:r>t?1:0}function dm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const l=r.charAt(s),c=t.charAt(s);if(l!==c)return Zd(l)===Zd(c)?Ot(l,c):Zd(l)?1:-1}return Ot(r.length,t.length)}const hC=55296,fC=57343;function Zd(r){const t=r.charCodeAt(0);return t>=hC&&t<=fC}function Za(r,t,n){return r.length===t.length&&r.every((s,l)=>n(s,t[l]))}/**
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
 */const Pv="__name__";class ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&yt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&yt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const c=ci.compareSegments(t.get(l),n.get(l));if(c!==0)return c}return Ot(t.length,n.length)}static compareSegments(t,n){const s=ci.isNumericId(t),l=ci.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?ci.extractNumericId(t).compare(ci.extractNumericId(n)):dm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ur.fromString(t.substring(4,t.length-2))}}class re extends ci{construct(t,n,s){return new re(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new lt(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(l=>l.length>0))}return new re(n)}static emptyPath(){return new re([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ci{construct(t,n,s){return new Fe(t,n,s)}static isValidIdentifier(t){return dC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pv}static keyField(){return new Fe([Pv])}static fromServerFormat(t){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new lt(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new lt(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new lt(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(s+=p,l++):(c(),l++)}if(c(),f)throw new lt(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(re.fromString(t))}static fromName(t){return new dt(re.fromString(t).popFirst(5))}static empty(){return new dt(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&re.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return re.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new re(t.slice()))}}/**
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
 */function mC(r,t,n){if(!n)throw new lt(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function pC(r,t,n,s){if(t===!0&&s===!0)throw new lt(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function xv(r){if(!dt.isDocumentKey(r))throw new lt(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function tT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ym(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":yt(12329,{type:typeof r})}function js(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new lt(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ym(r);throw new lt(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ve(r,t){const n={typeString:r};return t&&(n.value=t),n}function $l(r,t){if(!tT(r))throw new lt(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const l=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(l&&typeof f!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new lt(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const Uv=-62135596800,Lv=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(t){return te.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Lv);return new te(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Uv)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lv}_compareTo(t){return this.seconds===t.seconds?Ot(this.nanoseconds,t.nanoseconds):Ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($l(t,te._jsonSchema))return new te(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Uv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ve("string",te._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
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
 */class Et{static fromTimestamp(t){return new Et(t)}static min(){return new Et(new te(0,0))}static max(){return new Et(new te(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ul=-1;function gC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=Et.fromTimestamp(s===1e9?new te(n+1,0):new te(n,s));return new Br(l,dt.empty(),t)}function yC(r){return new Br(r.readTime,r.key,Ul)}class Br{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Br(Et.min(),dt.empty(),Ul)}static max(){return new Br(Et.max(),dt.empty(),Ul)}}function _C(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(r.documentKey,t.documentKey),n!==0?n:Ot(r.largestBatchId,t.largestBatchId))}/**
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
 */const vC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ao(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==vC)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let l=0,c=0,f=!1;t.forEach(p=>{++l,p.next(()=>{++c,f&&c===l&&n()},g=>s(g))}),f=!0,c===l&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(l=>l?Y.resolve(l):s());return n}static forEach(t,n){const s=[];return t.forEach((l,c)=>{s.push(n.call(this,l,c))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,l)=>{const c=t.length,f=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;n(t[y]).next(A=>{f[y]=A,++p,p===c&&s(f)},A=>l(A))}})}static doWhile(t,n){return new Y((s,l)=>{const c=()=>{t()===!0?n().next(()=>{c()},l):s()};c()})}}function TC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class yh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}yh.ce=-1;/**
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
 */const Qm=-1;function _h(r){return r==null}function Jc(r){return r===0&&1/r==-1/0}function AC(r){return typeof r=="number"&&Number.isInteger(r)&&!Jc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const eT="";function SC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=zv(t)),t=wC(r.get(n),t);return zv(t)}function wC(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case eT:n+="";break;default:n+=c}}return n}function zv(r){return r+eT+""}/**
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
 */function Bv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Qr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function nT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class se{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ic(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ic(this.root,t,this.comparator,!0)}}class Ic{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,s,l,c){this.key=t,this.value=n,this.color=s??He.RED,this.left=l??He.EMPTY,this.right=c??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,c){return new He(t??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return He.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw yt(27949);return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(t,n,s,l,c){return this}insert(t,n,s){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(t){return new qv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ie(this.comparator);return n.data=t,n}}class qv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(t){this.fields=t,t.sort(Fe.comparator)}static empty(){return new vn([])}unionWith(t){let n=new Ie(Fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new vn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Za(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class iT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new iT("Invalid base64 string: "+c):c}}(t);return new Ge(n)}static fromUint8Array(t){const n=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new Ge(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const bC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(r){if(jt(!!r,39018),typeof r=="string"){let t=0;const n=bC.exec(r);if(jt(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:de(r.seconds),nanos:de(r.nanos)}}function de(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function jr(r){return typeof r=="string"?Ge.fromBase64String(r):Ge.fromUint8Array(r)}/**
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
 */const rT="server_timestamp",sT="__type__",aT="__previous_value__",oT="__local_write_time__";function Xm(r){return(r?.mapValue?.fields||{})[sT]?.stringValue===rT}function vh(r){const t=r.mapValue.fields[aT];return Xm(t)?vh(t):t}function Ll(r){const t=qr(r.mapValue.fields[oT].timestampValue);return new te(t.seconds,t.nanos)}/**
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
 */class RC{constructor(t,n,s,l,c,f,p,g,y,A){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=A}}const th="(default)";class zl{constructor(t,n){this.projectId=t,this.database=n||th}static empty(){return new zl("","")}get isDefaultDatabase(){return this.database===th}isEqual(t){return t instanceof zl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const lT="__type__",IC="__max__",Cc={mapValue:{}},uT="__vector__",eh="value";function Hr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Xm(r)?4:DC(r)?9007199254740991:CC(r)?10:11:yt(28295,{value:r})}function vi(r,t){if(r===t)return!0;const n=Hr(r);if(n!==Hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ll(r).isEqual(Ll(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=qr(l.timestampValue),p=qr(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return jr(l.bytesValue).isEqual(jr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return de(l.geoPointValue.latitude)===de(c.geoPointValue.latitude)&&de(l.geoPointValue.longitude)===de(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return de(l.integerValue)===de(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=de(l.doubleValue),p=de(c.doubleValue);return f===p?Jc(f)===Jc(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return Za(r.arrayValue.values||[],t.arrayValue.values||[],vi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},p=c.mapValue.fields||{};if(Bv(f)!==Bv(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!vi(f[g],p[g])))return!1;return!0}(r,t);default:return yt(52216,{left:r})}}function Bl(r,t){return(r.values||[]).find(n=>vi(n,t))!==void 0}function Wa(r,t){if(r===t)return 0;const n=Hr(r),s=Hr(t);if(n!==s)return Ot(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ot(r.booleanValue,t.booleanValue);case 2:return function(c,f){const p=de(c.integerValue||c.doubleValue),g=de(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return jv(r.timestampValue,t.timestampValue);case 4:return jv(Ll(r),Ll(t));case 5:return dm(r.stringValue,t.stringValue);case 6:return function(c,f){const p=jr(c),g=jr(f);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const p=c.split("/"),g=f.split("/");for(let y=0;y<p.length&&y<g.length;y++){const A=Ot(p[y],g[y]);if(A!==0)return A}return Ot(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const p=Ot(de(c.latitude),de(f.latitude));return p!==0?p:Ot(de(c.longitude),de(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Hv(r.arrayValue,t.arrayValue);case 10:return function(c,f){const p=c.fields||{},g=f.fields||{},y=p[eh]?.arrayValue,A=g[eh]?.arrayValue,I=Ot(y?.values?.length||0,A?.values?.length||0);return I!==0?I:Hv(y,A)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===Cc.mapValue&&f===Cc.mapValue)return 0;if(c===Cc.mapValue)return 1;if(f===Cc.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=f.fields||{},A=Object.keys(y);g.sort(),A.sort();for(let I=0;I<g.length&&I<A.length;++I){const C=dm(g[I],A[I]);if(C!==0)return C;const j=Wa(p[g[I]],y[A[I]]);if(j!==0)return j}return Ot(g.length,A.length)}(r.mapValue,t.mapValue);default:throw yt(23264,{he:n})}}function jv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ot(r,t);const n=qr(r),s=qr(t),l=Ot(n.seconds,s.seconds);return l!==0?l:Ot(n.nanos,s.nanos)}function Hv(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=Wa(n[l],s[l]);if(c)return c}return Ot(n.length,s.length)}function Ja(r){return mm(r)}function mm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=qr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return jr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return dt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=mm(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${mm(n.fields[f])}`;return l+"}"}(r.mapValue):yt(61005,{value:r})}function Lc(r){switch(Hr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=vh(r);return t?16+Lc(t):16;case 5:return 2*r.stringValue.length;case 6:return jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+Lc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return Qr(s.fields,(c,f)=>{l+=c.length+Lc(f)}),l}(r.mapValue);default:throw yt(13486,{value:r})}}function pm(r){return!!r&&"integerValue"in r}function $m(r){return!!r&&"arrayValue"in r}function Fv(r){return!!r&&"nullValue"in r}function Gv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zc(r){return!!r&&"mapValue"in r}function CC(r){return(r?.mapValue?.fields||{})[lT]?.stringValue===uT}function Dl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Qr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Dl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dl(r.arrayValue.values[n]);return t}return{...r}}function DC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
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
 */class ln{constructor(t){this.value=t}static empty(){return new ln({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!zc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dl(n)}setAll(t){let n=Fe.emptyPath(),s={},l=[];t.forEach((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,l),s={},l=[],n=p.popLast()}f?s[p.lastSegment()]=Dl(f):l.push(p.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(t){const n=this.field(t.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return vi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];zc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){Qr(n,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new ln(Dl(this.value))}}function cT(r){const t=[];return Qr(r.fields,(n,s)=>{const l=new Fe([n]);if(zc(s)){const c=cT(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new vn(t)}/**
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
 */class Ze{constructor(t,n,s,l,c,f,p){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(t){return new Ze(t,0,Et.min(),Et.min(),Et.min(),ln.empty(),0)}static newFoundDocument(t,n,s,l){return new Ze(t,1,n,Et.min(),s,l,0)}static newNoDocument(t,n){return new Ze(t,2,n,Et.min(),Et.min(),ln.empty(),0)}static newUnknownDocument(t,n){return new Ze(t,3,n,Et.min(),Et.min(),ln.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ze&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nh{constructor(t,n){this.position=t,this.inclusive=n}}function Kv(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=dt.comparator(dt.fromName(f.referenceValue),n.key):s=Wa(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class ih{constructor(t,n="asc"){this.field=t,this.dir=n}}function OC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class hT{}class be extends hT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new MC(t,n,s):n==="array-contains"?new PC(t,s):n==="in"?new xC(t,s):n==="not-in"?new UC(t,s):n==="array-contains-any"?new LC(t,s):new be(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new VC(t,s):new kC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Wa(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Wa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends hT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Ei(t,n)}matches(t){return fT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fT(r){return r.op==="and"}function dT(r){return NC(r)&&fT(r)}function NC(r){for(const t of r.filters)if(t instanceof Ei)return!1;return!0}function gm(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+Ja(r.value);if(dT(r))return r.filters.map(t=>gm(t)).join(",");{const t=r.filters.map(n=>gm(n)).join(",");return`${r.op}(${t})`}}function mT(r,t){return r instanceof be?function(s,l){return l instanceof be&&s.op===l.op&&s.field.isEqual(l.field)&&vi(s.value,l.value)}(r,t):r instanceof Ei?function(s,l){return l instanceof Ei&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,p)=>c&&mT(f,l.filters[p]),!0):!1}(r,t):void yt(19439)}function pT(r){return r instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ja(n.value)}`}(r):r instanceof Ei?function(n){return n.op.toString()+" {"+n.getFilters().map(pT).join(" ,")+"}"}(r):"Filter"}class MC extends be{constructor(t,n,s){super(t,n,s),this.key=dt.fromName(s.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class VC extends be{constructor(t,n){super(t,"in",n),this.keys=gT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class kC extends be{constructor(t,n){super(t,"not-in",n),this.keys=gT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function gT(r,t){return(t.arrayValue?.values||[]).map(n=>dt.fromName(n.referenceValue))}class PC extends be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $m(n)&&Bl(n.arrayValue,this.value)}}class xC extends be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class UC extends be{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bl(this.value.arrayValue,n)}}class LC extends be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bl(this.value.arrayValue,s))}}/**
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
 */class zC{constructor(t,n=null,s=[],l=[],c=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=p,this.Te=null}}function Qv(r,t=null,n=[],s=[],l=null,c=null,f=null){return new zC(r,t,n,s,l,c,f)}function Zm(r){const t=Tt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>gm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),_h(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ja(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ja(s)).join(",")),t.Te=n}return t.Te}function Wm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!OC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!mT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Yv(r.startAt,t.startAt)&&Yv(r.endAt,t.endAt)}function ym(r){return dt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Eh{constructor(t,n=null,s=[],l=[],c=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BC(r,t,n,s,l,c,f,p){return new Eh(r,t,n,s,l,c,f,p)}function Jm(r){return new Eh(r)}function Xv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qC(r){return r.collectionGroup!==null}function Ol(r){const t=Tt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Ie(Fe.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new ih(c,s))}),n.has(Fe.keyField().canonicalString())||t.Ie.push(new ih(Fe.keyField(),s))}return t.Ie}function di(r){const t=Tt(r);return t.Ee||(t.Ee=jC(t,Ol(r))),t.Ee}function jC(r,t){if(r.limitType==="F")return Qv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new ih(l.field,c)});const n=r.endAt?new nh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new nh(r.startAt.position,r.startAt.inclusive):null;return Qv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function _m(r,t,n){return new Eh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Th(r,t){return Wm(di(r),di(t))&&r.limitType===t.limitType}function yT(r){return`${Zm(di(r))}|lt:${r.limitType}`}function ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(l=>pT(l)).join(", ")}]`),_h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(l=>Ja(l)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(l=>Ja(l)).join(",")),`Target(${s})`}(di(r))}; limitType=${r.limitType})`}function Ah(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):dt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of Ol(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,p,g){const y=Kv(f,p,g);return f.inclusive?y<=0:y<0}(s.startAt,Ol(s),l)||s.endAt&&!function(f,p,g){const y=Kv(f,p,g);return f.inclusive?y>=0:y>0}(s.endAt,Ol(s),l))}(r,t)}function HC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _T(r){return(t,n)=>{let s=!1;for(const l of Ol(r)){const c=FC(l,t,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function FC(r,t,n){const s=r.field.isKeyField()?dt.comparator(t.key,n.key):function(c,f,p){const g=f.data.field(c),y=p.data.field(c);return g!==null&&y!==null?Wa(g,y):yt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return yt(19790,{direction:r.dir})}}/**
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
 */class Ys{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Qr(this.inner,(n,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return nT(this.inner)}size(){return this.innerSize}}/**
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
 */const GC=new se(dt.comparator);function Ji(){return GC}const vT=new se(dt.comparator);function Sl(...r){let t=vT;for(const n of r)t=t.insert(n.key,n);return t}function ET(r){let t=vT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ps(){return Nl()}function TT(){return Nl()}function Nl(){return new Ys(r=>r.toString(),(r,t)=>r.isEqual(t))}const KC=new se(dt.comparator),YC=new Ie(dt.comparator);function Nt(...r){let t=YC;for(const n of r)t=t.add(n);return t}const QC=new Ie(Ot);function XC(){return QC}/**
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
 */function tp(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jc(t)?"-0":t}}function AT(r){return{integerValue:""+r}}function ST(r,t){return AC(t)?AT(t):tp(r,t)}/**
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
 */class Sh{constructor(){this._=void 0}}function $C(r,t,n){return r instanceof rh?function(l,c){const f={fields:{[sT]:{stringValue:rT},[oT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Xm(c)&&(c=vh(c)),c&&(f.fields[aT]=c),{mapValue:f}}(n,t):r instanceof ql?bT(r,t):r instanceof jl?RT(r,t):function(l,c){const f=wT(l,c),p=$v(f)+$v(l.Ae);return pm(f)&&pm(l.Ae)?AT(p):tp(l.serializer,p)}(r,t)}function ZC(r,t,n){return r instanceof ql?bT(r,t):r instanceof jl?RT(r,t):n}function wT(r,t){return r instanceof Hl?function(s){return pm(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class rh extends Sh{}class ql extends Sh{constructor(t){super(),this.elements=t}}function bT(r,t){const n=IT(t);for(const s of r.elements)n.some(l=>vi(l,s))||n.push(s);return{arrayValue:{values:n}}}class jl extends Sh{constructor(t){super(),this.elements=t}}function RT(r,t){let n=IT(t);for(const s of r.elements)n=n.filter(l=>!vi(l,s));return{arrayValue:{values:n}}}class Hl extends Sh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function $v(r){return de(r.integerValue||r.doubleValue)}function IT(r){return $m(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class WC{constructor(t,n){this.field=t,this.transform=n}}function JC(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof ql&&l instanceof ql||s instanceof jl&&l instanceof jl?Za(s.elements,l.elements,vi):s instanceof Hl&&l instanceof Hl?vi(s.Ae,l.Ae):s instanceof rh&&l instanceof rh}(r.transform,t.transform)}class tD{constructor(t,n){this.version=t,this.transformResults=n}}class mi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mi}static exists(t){return new mi(void 0,t)}static updateTime(t){return new mi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class wh{}function CT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new OT(r.key,mi.none()):new Zl(r.key,r.data,mi.none());{const n=r.data,s=ln.empty();let l=new Ie(Fe.comparator);for(let c of t.fields)if(!l.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new Xr(r.key,s,new vn(l.toArray()),mi.none())}}function eD(r,t,n){r instanceof Zl?function(l,c,f){const p=l.value.clone(),g=Wv(l.fieldTransforms,c,f.transformResults);p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):r instanceof Xr?function(l,c,f){if(!Bc(l.precondition,c))return void c.convertToUnknownDocument(f.version);const p=Wv(l.fieldTransforms,c,f.transformResults),g=c.data;g.setAll(DT(l)),g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Ml(r,t,n,s){return r instanceof Zl?function(c,f,p,g){if(!Bc(c.precondition,f))return p;const y=c.value.clone(),A=Jv(c.fieldTransforms,g,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Xr?function(c,f,p,g){if(!Bc(c.precondition,f))return p;const y=Jv(c.fieldTransforms,g,f),A=f.data;return A.setAll(DT(c)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(I=>I.field))}(r,t,n,s):function(c,f,p){return Bc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,n)}function nD(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=wT(s.transform,l||null);c!=null&&(n===null&&(n=ln.empty()),n.set(s.field,c))}return n||null}function Zv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Za(s,l,(c,f)=>JC(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Zl extends wh{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Xr extends wh{constructor(t,n,s,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function DT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Wv(r,t,n){const s=new Map;jt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let l=0;l<n.length;l++){const c=r[l],f=c.transform,p=t.data.field(c.field);s.set(c.field,ZC(f,p,n[l]))}return s}function Jv(r,t,n){const s=new Map;for(const l of r){const c=l.transform,f=n.data.field(l.field);s.set(l.field,$C(c,f,t))}return s}class OT extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iD extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rD{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&eD(c,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=TT();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=n.has(l.key)?null:p;const g=CT(f,p);g!==null&&s.set(l.key,g),f.isValidDocument()||f.convertToNoDocument(Et.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Nt())}isEqual(t){return this.batchId===t.batchId&&Za(this.mutations,t.mutations,(n,s)=>Zv(n,s))&&Za(this.baseMutations,t.baseMutations,(n,s)=>Zv(n,s))}}class ep{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){jt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let l=function(){return KC}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new ep(t,n,s,l)}}/**
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
 */class sD{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class aD{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var _e,Pt;function oD(r){switch(r){case X.OK:return yt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return yt(15467,{code:r})}}function NT(r){if(r===void 0)return Wi("GRPC error has no .code"),X.UNKNOWN;switch(r){case _e.OK:return X.OK;case _e.CANCELLED:return X.CANCELLED;case _e.UNKNOWN:return X.UNKNOWN;case _e.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case _e.INTERNAL:return X.INTERNAL;case _e.UNAVAILABLE:return X.UNAVAILABLE;case _e.UNAUTHENTICATED:return X.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case _e.NOT_FOUND:return X.NOT_FOUND;case _e.ALREADY_EXISTS:return X.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return X.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case _e.ABORTED:return X.ABORTED;case _e.OUT_OF_RANGE:return X.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return X.UNIMPLEMENTED;case _e.DATA_LOSS:return X.DATA_LOSS;default:return yt(39323,{code:r})}}(Pt=_e||(_e={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lD(){return new TextEncoder}/**
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
 */const uD=new Ur([4294967295,4294967295],0);function t0(r){const t=lD().encode(r),n=new KE;return n.update(t),new Uint8Array(n.digest())}function e0(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Ur([n,s],0),new Ur([l,c],0)]}class np{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wl(`Invalid padding: ${n}`);if(s<0)throw new wl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new wl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new wl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Ur.fromNumber(this.ge)}ye(t,n,s){let l=t.add(n.multiply(Ur.fromNumber(s)));return l.compare(uD)===1&&(l=new Ur([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=t0(t),[s,l]=e0(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,l,c);if(!this.we(f))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new np(c,l,n);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.ge===0)return;const n=t0(t),[s,l]=e0(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,l,c);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bh{constructor(t,n,s,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Wl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new bh(Et.min(),l,new se(Ot),Ji(),Nt())}}class Wl{constructor(t,n,s,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Wl(s,n,Nt(),Nt(),Nt())}}/**
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
 */class qc{constructor(t,n,s,l){this.be=t,this.removedTargetIds=n,this.key=s,this.De=l}}class MT{constructor(t,n){this.targetId=t,this.Ce=n}}class VT{constructor(t,n,s=Ge.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class n0{constructor(){this.ve=0,this.Fe=i0(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Nt(),n=Nt(),s=Nt();return this.Fe.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:yt(38017,{changeType:c})}}),new Wl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=i0()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,jt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class cD{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ji(),this.Je=Dc(),this.He=Dc(),this.Ye=new se(Ot)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:yt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((s,l)=>{this.rt(l)&&n(l)})}st(t){const n=t.targetId,s=t.Ce.count,l=this.ot(n);if(l){const c=l.target;if(ym(c))if(s===0){const f=new dt(c.path);this.et(n,f,Ze.newNoDocument(f,Et.min()))}else jt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(t),g=p?this.ct(p,t,f):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let f,p;try{f=jr(s).toUint8Array()}catch(g){if(g instanceof iT)return $a("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new np(f,l,c)}catch(g){return $a(g instanceof wl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach(c=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(p)||(this.et(n,c,null),l++)}),l}Tt(t){const n=new Map;this.ze.forEach((c,f)=>{const p=this.ot(f);if(p){if(c.current&&ym(p.target)){const g=new dt(p.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,Ze.newNoDocument(g,t))}c.Be&&(n.set(f,c.ke()),c.qe())}});let s=Nt();this.He.forEach((c,f)=>{let p=!0;f.forEachWhile(g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(c))}),this.je.forEach((c,f)=>f.setReadTime(t));const l=new bh(t,n,this.Ye,this.je,s);return this.je=Ji(),this.Je=Dc(),this.He=Dc(),this.Ye=new se(Ot),l}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.Qe(n,1):l.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new n0,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Ie(Ot),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Ie(Ot),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new n0),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Dc(){return new se(dt.comparator)}function i0(){return new se(dt.comparator)}const hD={asc:"ASCENDING",desc:"DESCENDING"},fD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dD={and:"AND",or:"OR"};class mD{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function vm(r,t){return r.useProto3Json||_h(t)?t:{value:t}}function sh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function pD(r,t){return sh(r,t.toTimestamp())}function pi(r){return jt(!!r,49232),Et.fromTimestamp(function(n){const s=qr(n);return new te(s.seconds,s.nanos)}(r))}function ip(r,t){return Em(r,t).canonicalString()}function Em(r,t){const n=function(l){return new re(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?n:n.child(t)}function PT(r){const t=re.fromString(r);return jt(BT(t),10190,{key:t.toString()}),t}function Tm(r,t){return ip(r.databaseId,t.path)}function Wd(r,t){const n=PT(t);if(n.get(1)!==r.databaseId.projectId)throw new lt(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new lt(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new dt(UT(n))}function xT(r,t){return ip(r.databaseId,t)}function gD(r){const t=PT(r);return t.length===4?re.emptyPath():UT(t)}function Am(r){return new re(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function UT(r){return jt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function r0(r,t,n){return{name:Tm(r,t),fields:n.value.mapValue.fields}}function yD(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,A){return y.useProto3Json?(jt(A===void 0||typeof A=="string",58123),Ge.fromBase64String(A||"")):(jt(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),Ge.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(y){const A=y.code===void 0?X.UNKNOWN:NT(y.code);return new lt(A,y.message||"")}(f);n=new VT(s,l,c,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Wd(r,s.document.name),c=pi(s.document.updateTime),f=s.document.createTime?pi(s.document.createTime):Et.min(),p=new ln({mapValue:{fields:s.document.fields}}),g=Ze.newFoundDocument(l,c,f,p),y=s.targetIds||[],A=s.removedTargetIds||[];n=new qc(y,A,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Wd(r,s.document),c=s.readTime?pi(s.readTime):Et.min(),f=Ze.newNoDocument(l,c),p=s.removedTargetIds||[];n=new qc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Wd(r,s.document),c=s.removedTargetIds||[];n=new qc([],c,l,null)}else{if(!("filter"in t))return yt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new aD(l,c),p=s.targetId;n=new MT(p,f)}}return n}function _D(r,t){let n;if(t instanceof Zl)n={update:r0(r,t.key,t.value)};else if(t instanceof OT)n={delete:Tm(r,t.key)};else if(t instanceof Xr)n={update:r0(r,t.key,t.data),updateMask:ID(t.fieldMask)};else{if(!(t instanceof iD))return yt(16599,{Vt:t.type});n={verify:Tm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const p=f.transform;if(p instanceof rh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof jl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Hl)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw yt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:pD(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:yt(27497)}(r,t.precondition)),n}function vD(r,t){return r&&r.length>0?(jt(t!==void 0,14353),r.map(n=>function(l,c){let f=l.updateTime?pi(l.updateTime):pi(c);return f.isEqual(Et.min())&&(f=pi(c)),new tD(f,l.transformResults||[])}(n,t))):[]}function ED(r,t){return{documents:[xT(r,t.path)]}}function TD(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=xT(r,l);const c=function(y){if(y.length!==0)return zT(Ei.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(A=>function(C){return{field:Ha(C.field),direction:wD(C.dir)}}(A))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=vm(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ft:n,parent:l}}function AD(r){let t=gD(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){jt(s===1,65062);const A=n.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=function(I){const C=LT(I);return C instanceof Ei&&dT(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(I){return I.map(C=>function($){return new ih(Fa($.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(C))}(n.orderBy));let p=null;n.limit&&(p=function(I){let C;return C=typeof I=="object"?I.value:I,_h(C)?null:C}(n.limit));let g=null;n.startAt&&(g=function(I){const C=!!I.before,j=I.values||[];return new nh(j,C)}(n.startAt));let y=null;return n.endAt&&(y=function(I){const C=!I.before,j=I.values||[];return new nh(j,C)}(n.endAt)),BC(t,l,f,c,p,"F",g,y)}function SD(r,t){const n=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt(28987,{purpose:l})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Fa(n.unaryFilter.field);return be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Fa(n.unaryFilter.field);return be.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Fa(n.unaryFilter.field);return be.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Fa(n.unaryFilter.field);return be.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return yt(61313);default:return yt(60726)}}(r):r.fieldFilter!==void 0?function(n){return be.create(Fa(n.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return yt(58110);default:return yt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Ei.create(n.compositeFilter.filters.map(s=>LT(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return yt(1026)}}(n.compositeFilter.op))}(r):yt(30097,{filter:r})}function wD(r){return hD[r]}function bD(r){return fD[r]}function RD(r){return dD[r]}function Ha(r){return{fieldPath:r.canonicalString()}}function Fa(r){return Fe.fromServerFormat(r.fieldPath)}function zT(r){return r instanceof be?function(n){if(n.op==="=="){if(Gv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NAN"}};if(Fv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NOT_NAN"}};if(Fv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ha(n.field),op:bD(n.op),value:n.value}}}(r):r instanceof Ei?function(n){const s=n.getFilters().map(l=>zT(l));return s.length===1?s[0]:{compositeFilter:{op:RD(n.op),filters:s}}}(r):yt(54877,{filter:r})}function ID(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function BT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class kr{constructor(t,n,s,l,c=Et.min(),f=Et.min(),p=Ge.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new kr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class CD{constructor(t){this.yt=t}}function DD(r){const t=AD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?_m(t,t.limit,"L"):t}/**
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
 */class OD{constructor(){this.Cn=new ND}addToCollectionParentIndex(t,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(Br.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(Br.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class ND{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new Ie(re.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new Ie(re.comparator)).toArray()}}/**
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
 */const s0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qT=41943040;class on{static withCacheSize(t){return new on(t,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(qT,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class to{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new to(0)}static cr(){return new to(-1)}}/**
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
 */const a0="LruGarbageCollector",MD=1048576;function o0([r,t],[n,s]){const l=Ot(r,n);return l===0?Ot(t,s):l}class VD{constructor(t){this.Ir=t,this.buffer=new Ie(o0),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();o0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){rt(a0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oo(n)?rt(a0,"Ignoring IndexedDB error during garbage collection: ",n):await ao(n)}await this.Vr(3e5)})}}class PD{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(yh.ce);const s=new VD(n);return this.mr.forEachTarget(t,l=>s.Ar(l.sequenceNumber)).next(()=>this.mr.pr(t,l=>s.Ar(l))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(s0)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),s0):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,l,c,f,p,g,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),l=this.params.maximumSequenceNumbersToCollect):l=I,f=Date.now(),this.nthSequenceNumber(t,l))).next(I=>(s=I,p=Date.now(),this.removeTargets(t,s,n))).next(I=>(c=I,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(I=>(y=Date.now(),qa()<=Dt.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${I} documents in `+(y-g)+`ms
Total Duration: ${y-A}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:I})))}}function xD(r,t){return new PD(r,t)}/**
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
 */class UD{constructor(){this.changes=new Ys(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ze.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class LD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class zD{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,n))).next(l=>(s!==null&&Ml(s.mutation,l,vn.empty(),te.now()),l))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Nt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Nt()){const l=Ps();return this.populateOverlays(t,l,n).next(()=>this.computeViews(t,n,l,s).next(c=>{let f=Sl();return c.forEach((p,g)=>{f=f.insert(p,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ps();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Nt()))}populateOverlays(t,n,s){const l=[];return s.forEach(c=>{n.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,p)=>{n.set(f,p)})})}computeViews(t,n,s,l){let c=Ji();const f=Nl(),p=function(){return Nl()}();return n.forEach((g,y)=>{const A=s.get(y.key);l.has(y.key)&&(A===void 0||A.mutation instanceof Xr)?c=c.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),Ml(A.mutation,y,A.mutation.getFieldMask(),te.now())):f.set(y.key,vn.empty())}),this.recalculateAndSaveOverlays(t,c).next(g=>(g.forEach((y,A)=>f.set(y,A)),n.forEach((y,A)=>p.set(y,new LD(A,f.get(y)??null))),p))}recalculateAndSaveOverlays(t,n){const s=Nl();let l=new se((f,p)=>f-p),c=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const p of f)p.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let A=s.get(g)||vn.empty();A=p.applyToLocalView(y,A),s.set(g,A);const I=(l.get(p.batchId)||Nt()).add(g);l=l.insert(p.batchId,I)})}).next(()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,A=g.value,I=TT();A.forEach(C=>{if(!c.has(C)){const j=CT(n.get(C),s.get(C));j!==null&&I.set(C,j),c=c.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,I))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,l){return function(f){return dt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-c.size):Y.resolve(Ps());let p=Ul,g=c;return f.next(y=>Y.forEach(y,(A,I)=>(p<I.largestBatchId&&(p=I.largestBatchId),c.get(A)?Y.resolve():this.remoteDocumentCache.getEntry(t,A).next(C=>{g=g.insert(A,C)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,g,y,Nt())).next(A=>({batchId:p,changes:ET(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next(s=>{let l=Sl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const c=n.collectionGroup;let f=Sl();return this.indexManager.getCollectionParents(t,c).next(p=>Y.forEach(p,g=>{const y=function(I,C){return new Eh(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(A=>{A.forEach((I,C)=>{f=f.insert(I,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,l))).next(f=>{c.forEach((g,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,Ze.newInvalidDocument(A)))});let p=Sl();return f.forEach((g,y)=>{const A=c.get(g);A!==void 0&&Ml(A.mutation,y,vn.empty(),te.now()),Ah(n,y)&&(p=p.insert(g,y))}),p})}}/**
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
 */class BD{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(l){return{id:l.id,version:l.version,createTime:pi(l.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(l){return{name:l.name,query:DD(l.bundledQuery),readTime:pi(l.readTime)}}(n)),Y.resolve()}}/**
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
 */class qD{constructor(){this.overlays=new se(dt.comparator),this.qr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ps();return Y.forEach(n,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((l,c)=>{this.St(t,n,c)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.qr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const l=Ps(),c=n.length+1,f=new dt(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&l.set(g.getKey(),g)}return Y.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let c=new se((y,A)=>y-A);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=c.get(y.largestBatchId);A===null&&(A=Ps(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const p=Ps(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,A)=>p.set(y,A)),!(p.size()>=l)););return Y.resolve(p)}St(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.qr.get(l.largestBatchId).delete(s.key);this.qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new sD(n,s));let c=this.qr.get(n);c===void 0&&(c=Nt(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
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
 */class jD{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class rp{constructor(){this.Qr=new Ie(ke.$r),this.Ur=new Ie(ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new ke(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Gr(new ke(t,n))}zr(t,n){t.forEach(s=>this.removeReference(s,n))}jr(t){const n=new dt(new re([])),s=new ke(n,t),l=new ke(n,t+1),c=[];return this.Ur.forEachInRange([s,l],f=>{this.Gr(f),c.push(f.key)}),c}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new dt(new re([])),s=new ke(n,t),l=new ke(n,t+1);let c=Nt();return this.Ur.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new ke(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return dt.comparator(t.key,n.key)||Ot(t.Yr,n.Yr)}static Kr(t,n){return Ot(t.Yr,n.Yr)||dt.comparator(t.key,n.key)}}/**
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
 */class HD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(ke.$r)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new rD(c,n,s,l);this.mutationQueue.push(f);for(const p of l)this.Zr=this.Zr.add(new ke(p.key,c)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.ei(s),c=l<0?0:l;return Y.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Qm:this.tr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),l=new ke(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,l],f=>{const p=this.Xr(f.Yr);c.push(p)}),Y.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ie(Ot);return n.forEach(l=>{const c=new ke(l,0),f=new ke(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],p=>{s=s.add(p.Yr)})}),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let c=s;dt.isDocumentKey(c)||(c=c.child(""));const f=new ke(new dt(c),0);let p=new Ie(Ot);return this.Zr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Yr)),!0)},f),Y.resolve(this.ti(p))}ti(t){const n=[];return t.forEach(s=>{const l=this.Xr(s);l!==null&&n.push(l)}),n}removeMutationBatch(t,n){jt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,l=>{const c=new ke(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Zr=s})}ir(t){}containsKey(t,n){const s=new ke(n,0),l=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FD{constructor(t){this.ri=t,this.docs=function(){return new se(dt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(t,n){let s=Ji();return n.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Ze.newInvalidDocument(l))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let c=Ji();const f=n.path,p=new dt(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:A}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||_C(yC(A),s)<=0||(l.has(A.key)||Ah(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return Y.resolve(c)}getAllFromCollectionGroup(t,n,s,l){yt(9500)}ii(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new GD(this)}getSize(t){return Y.resolve(this.size)}}class GD extends UD{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?n.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class KD{constructor(t){this.persistence=t,this.si=new Ys(n=>Zm(n),Wm),this.lastRemoteSnapshotVersion=Et.min(),this.highestTargetId=0,this.oi=0,this._i=new rp,this.targetCount=0,this.ai=to.ur()}forEachTarget(t,n){return this.si.forEach((s,l)=>n(l)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new to(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.Pr(n),Y.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let l=0;const c=[];return this.si.forEach((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),Y.waitFor(c).next(()=>l)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),Y.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this._i.containsKey(n))}}/**
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
 */class jT{constructor(t,n){this.ui={},this.overlays={},this.ci=new yh(0),this.li=!1,this.li=!0,this.hi=new jD,this.referenceDelegate=t(this),this.Pi=new KD(this),this.indexManager=new OD,this.remoteDocumentCache=function(l){return new FD(l)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new CD(n),this.Ii=new BD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new HD(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){rt("MemoryPersistence","Starting transaction:",t);const l=new YD(this.ci.next());return this.referenceDelegate.Ei(),s(l).next(c=>this.referenceDelegate.di(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Ai(t,n){return Y.or(Object.values(this.ui).map(s=>()=>s.containsKey(t,n)))}}class YD extends EC{constructor(t){super(),this.currentSequenceNumber=t}}class sp{constructor(t){this.persistence=t,this.Ri=new rp,this.Vi=null}static mi(t){return new sp(t)}get fi(){if(this.Vi)return this.Vi;throw yt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(l=>this.fi.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(l=>{l.forEach(c=>this.fi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,s=>{const l=dt.fromPath(s);return this.gi(t,l).next(c=>{c||n.removeEntry(l,Et.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class ah{constructor(t,n){this.persistence=t,this.pi=new Ys(s=>SC(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=xD(this,n)}static mi(t,n){return new ah(t,n)}Ei(){}di(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(l=>s+l))}wr(t){let n=0;return this.pr(t,s=>{n++}).next(()=>n)}pr(t,n){return Y.forEach(this.pi,(s,l)=>this.br(t,s,l).next(c=>c?Y.resolve():n(l)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,f=>this.br(t,f,n).next(p=>{p||(s++,c.removeEntry(f,Et.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Lc(t.data.value)),n}br(t,n,s){return Y.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.pi.get(n);return Y.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ap{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=l}static As(t,n){let s=Nt(),l=Nt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new ap(t,n.fromCache,s,l)}}/**
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
 */class QD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class XD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nw()?8:TC(We())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,l){const c={result:null};return this.ys(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ws(t,n,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new QD;return this.Ss(t,n,f).next(p=>{if(c.result=p,this.Vs)return this.bs(t,n,f,p.size)})}).next(()=>c.result)}bs(t,n,s,l){return s.documentReadCount<this.fs?(qa()<=Dt.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(qa()<=Dt.DEBUG&&rt("QueryEngine","Query:",ja(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.gs*l?(qa()<=Dt.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,di(n))):Y.resolve())}ys(t,n){if(Xv(n))return Y.resolve(null);let s=di(n);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=_m(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Nt(...c);return this.ps.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(g=>{const y=this.Ds(n,p);return this.Cs(n,y,f,g.readTime)?this.ys(t,_m(n,null,"F")):this.vs(t,y,n,g)}))})))}ws(t,n,s,l){return Xv(n)||l.isEqual(Et.min())?Y.resolve(null):this.ps.getDocuments(t,s).next(c=>{const f=this.Ds(n,c);return this.Cs(n,f,s,l)?Y.resolve(null):(qa()<=Dt.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),ja(n)),this.vs(t,f,n,gC(l,Ul)).next(p=>p))})}Ds(t,n){let s=new Ie(_T(t));return n.forEach((l,c)=>{Ah(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,n,s){return qa()<=Dt.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",ja(n)),this.ps.getDocumentsMatchingQuery(t,n,Br.min(),s)}vs(t,n,s,l){return this.ps.getDocumentsMatchingQuery(t,s,l).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const op="LocalStore",$D=3e8;class ZD{constructor(t,n,s,l){this.persistence=t,this.Fs=n,this.serializer=l,this.Ms=new se(Ot),this.xs=new Ys(c=>Zm(c),Wm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function WD(r,t,n,s){return new ZD(r,t,n,s)}async function HT(r,t){const n=Tt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,n.Bs(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],p=[];let g=Nt();for(const y of l){f.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}for(const y of c){p.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Ls:y,removedBatchIds:f,addedBatchIds:p}))})})}function JD(r,t){const n=Tt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return function(p,g,y,A){const I=y.batch,C=I.keys();let j=Y.resolve();return C.forEach($=>{j=j.next(()=>A.getEntry(g,$)).next(et=>{const Z=y.docVersions.get($);jt(Z!==null,48541),et.version.compareTo(Z)<0&&(I.applyToRemoteDocument(et,y),et.isValidDocument()&&(et.setReadTime(y.commitVersion),A.addEntry(et)))})}),j.next(()=>p.mutationQueue.removeMutationBatch(g,I))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Nt();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,l))})}function FT(r){const t=Tt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function tO(r,t){const n=Tt(r),s=t.snapshotVersion;let l=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});l=n.Ms;const p=[];t.targetChanges.forEach((A,I)=>{const C=l.get(I);if(!C)return;p.push(n.Pi.removeMatchingKeys(c,A.removedDocuments,I).next(()=>n.Pi.addMatchingKeys(c,A.addedDocuments,I)));let j=C.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(I)!==null?j=j.withResumeToken(Ge.EMPTY_BYTE_STRING,Et.min()).withLastLimboFreeSnapshotVersion(Et.min()):A.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(A.resumeToken,s)),l=l.insert(I,j),function(et,Z,st){return et.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=$D?!0:st.addedDocuments.size+st.modifiedDocuments.size+st.removedDocuments.size>0}(C,j,A)&&p.push(n.Pi.updateTargetData(c,j))});let g=Ji(),y=Nt();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))}),p.push(eO(c,f,t.documentUpdates).next(A=>{g=A.ks,y=A.qs})),!s.isEqual(Et.min())){const A=n.Pi.getLastRemoteSnapshotVersion(c).next(I=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s));p.push(A)}return Y.waitFor(p).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,g,y)).next(()=>g)}).then(c=>(n.Ms=l,c))}function eO(r,t,n){let s=Nt(),l=Nt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Ji();return n.forEach((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(Et.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):rt(op,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)}),{ks:f,qs:l}})}function nO(r,t){const n=Tt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function iO(r,t){const n=Tt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return n.Pi.getTargetData(s,t).next(c=>c?(l=c,Y.resolve(l)):n.Pi.allocateTargetId(s).next(f=>(l=new kr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=n.Ms.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s})}async function Sm(r,t,n){const s=Tt(r),l=s.Ms.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!oo(f))throw f;rt(op,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(l.target)}function l0(r,t,n){const s=Tt(r);let l=Et.min(),c=Nt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,A){const I=Tt(g),C=I.xs.get(A);return C!==void 0?Y.resolve(I.Ms.get(C)):I.Pi.getTargetData(y,A)}(s,f,di(t)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,p.targetId).next(g=>{c=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,t,n?l:Et.min(),n?c:Nt())).next(p=>(rO(s,HC(t),p),{documents:p,Qs:c})))}function rO(r,t,n){let s=r.Os.get(t)||Et.min();n.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Os.set(t,s)}class u0{constructor(){this.activeTargetIds=XC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sO{constructor(){this.Mo=new u0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new u0,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aO{Oo(t){}shutdown(){}}/**
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
 */const c0="ConnectivityMonitor";class h0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){rt(c0,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){rt(c0,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oc=null;function wm(){return Oc===null?Oc=function(){return 268435456+Math.round(2147483648*Math.random())}():Oc++,"0x"+Oc.toString(16)}/**
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
 */const Jd="RestConnection",oO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lO{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${l}`,this.Wo=this.databaseId.database===th?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Go(t,n,s,l,c){const f=wm(),p=this.zo(t,n.toUriEncodedString());rt(Jd,`Sending RPC '${t}' ${f}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,c);const{host:y}=new URL(p),A=no(y);return this.Jo(t,p,g,s,A).then(I=>(rt(Jd,`Received RPC '${t}' ${f}: `,I),I),I=>{throw $a(Jd,`RPC '${t}' ${f} failed with error: `,I,"url: ",p,"request:",s),I})}Ho(t,n,s,l,c,f){return this.Go(t,n,s,l,c)}jo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+so}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}zo(t,n){const s=oO[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class uO{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Xe="WebChannelConnection";class cO extends lO{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,l,c){const f=wm();return new Promise((p,g)=>{const y=new YE;y.setWithCredentials(!0),y.listenOnce(QE.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Uc.NO_ERROR:const I=y.getResponseJson();rt(Xe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(I)),p(I);break;case Uc.TIMEOUT:rt(Xe,`RPC '${t}' ${f} timed out`),g(new lt(X.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const C=y.getStatus();if(rt(Xe,`RPC '${t}' ${f} failed with status:`,C,"response text:",y.getResponseText()),C>0){let j=y.getResponseJson();Array.isArray(j)&&(j=j[0]);const $=j?.error;if($&&$.status&&$.message){const et=function(st){const it=st.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(it)>=0?it:X.UNKNOWN}($.status);g(new lt(et,$.message))}else g(new lt(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new lt(X.UNAVAILABLE,"Connection failed."));break;default:yt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{rt(Xe,`RPC '${t}' ${f} completed.`)}});const A=JSON.stringify(l);rt(Xe,`RPC '${t}' ${f} sending request:`,l),y.send(n,"POST",A,s,15)})}T_(t,n,s){const l=wm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=ZE(),p=$E(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const A=c.join("");rt(Xe,`Creating RPC '${t}' stream ${l}: ${A}`,g);const I=f.createWebChannel(A,g);this.I_(I);let C=!1,j=!1;const $=new uO({Yo:Z=>{j?rt(Xe,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(C||(rt(Xe,`Opening RPC '${t}' stream ${l} transport.`),I.open(),C=!0),rt(Xe,`RPC '${t}' stream ${l} sending:`,Z),I.send(Z))},Zo:()=>I.close()}),et=(Z,st,it)=>{Z.listen(st,ut=>{try{it(ut)}catch(Ut){setTimeout(()=>{throw Ut},0)}})};return et(I,Al.EventType.OPEN,()=>{j||(rt(Xe,`RPC '${t}' stream ${l} transport opened.`),$.o_())}),et(I,Al.EventType.CLOSE,()=>{j||(j=!0,rt(Xe,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(I))}),et(I,Al.EventType.ERROR,Z=>{j||(j=!0,$a(Xe,`RPC '${t}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),$.a_(new lt(X.UNAVAILABLE,"The operation could not be completed")))}),et(I,Al.EventType.MESSAGE,Z=>{if(!j){const st=Z.data[0];jt(!!st,16349);const it=st,ut=it?.error||it[0]?.error;if(ut){rt(Xe,`RPC '${t}' stream ${l} received error:`,ut);const Ut=ut.status;let At=function(S){const R=_e[S];if(R!==void 0)return NT(R)}(Ut),Bt=ut.message;At===void 0&&(At=X.INTERNAL,Bt="Unknown error status: "+Ut+" with message "+ut.message),j=!0,$.a_(new lt(At,Bt)),I.close()}else rt(Xe,`RPC '${t}' stream ${l} received:`,st),$.u_(st)}}),et(p,XE.STAT_EVENT,Z=>{Z.stat===fm.PROXY?rt(Xe,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===fm.NOPROXY&&rt(Xe,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{$.__()},0),$}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function tm(){return typeof document<"u"?document:null}/**
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
 */function Rh(r){return new mD(r,!0)}/**
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
 */class GT{constructor(t,n,s=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&rt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const f0="PersistentStream";class KT{constructor(t,n,s,l,c,f,p,g){this.Mi=t,this.S_=s,this.b_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new GT(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.D_===n&&this.G_(s,l)},s=>{t(()=>{const l=new lt(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)})})}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(l=>{s(()=>this.z_(l))}),this.stream.onMessage(l=>{s(()=>++this.F_==1?this.J_(l):this.onNext(l))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return rt(f0,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(rt(f0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hO extends KT{constructor(t,n,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=yD(this.serializer,t),s=function(c){if(!("targetChange"in c))return Et.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Et.min():f.readTime?pi(f.readTime):Et.min()}(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Am(this.serializer),n.addTarget=function(c,f){let p;const g=f.target;if(p=ym(g)?{documents:ED(c,g)}:{query:TD(c,g).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=kT(c,f.resumeToken);const y=vm(c,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(Et.min())>0){p.readTime=sh(c,f.snapshotVersion.toTimestamp());const y=vm(c,f.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,t);const s=SD(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Am(this.serializer),n.removeTarget=t,this.q_(n)}}class fO extends KT{constructor(t,n,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return jt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,jt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){jt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=vD(t.writeResults,t.commitTime),s=pi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Am(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>_D(this.serializer,s))};this.q_(n)}}/**
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
 */class dO{}class mO extends dO{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Go(t,Em(n,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new lt(X.UNKNOWN,c.toString())})}Ho(t,n,s,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Ho(t,Em(n,s),l,f,p,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new lt(X.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class pO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wi(n),this.aa=!1):rt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Hs="RemoteStore";class gO{constructor(t,n,s,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(rt(Hs,"Restarting streams for network reachability change."),await async function(g){const y=Tt(g);y.Ea.add(4),await Jl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Ih(y)}(this))})}),this.Ra=new pO(s,l)}}async function Ih(r){if(Qs(r))for(const t of r.da)await t(!0)}async function Jl(r){for(const t of r.da)await t(!1)}function YT(r,t){const n=Tt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),hp(n)?cp(n):lo(n).O_()&&up(n,t))}function lp(r,t){const n=Tt(r),s=lo(n);n.Ia.delete(t),s.O_()&&QT(n,t),n.Ia.size===0&&(s.O_()?s.L_():Qs(n)&&n.Ra.set("Unknown"))}function up(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Et.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}lo(r).Y_(t)}function QT(r,t){r.Va.Ue(t),lo(r).Z_(t)}function cp(r){r.Va=new cD({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),lo(r).start(),r.Ra.ua()}function hp(r){return Qs(r)&&!lo(r).x_()&&r.Ia.size>0}function Qs(r){return Tt(r).Ea.size===0}function XT(r){r.Va=void 0}async function yO(r){r.Ra.set("Online")}async function _O(r){r.Ia.forEach((t,n)=>{up(r,t)})}async function vO(r,t){XT(r),hp(r)?(r.Ra.ha(t),cp(r)):r.Ra.set("Unknown")}async function EO(r,t,n){if(r.Ra.set("Online"),t instanceof VT&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const p of c.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.Ia.delete(p),l.Va.removeTarget(p))}(r,t)}catch(s){rt(Hs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await oh(r,s)}else if(t instanceof qc?r.Va.Ze(t):t instanceof MT?r.Va.st(t):r.Va.tt(t),!n.isEqual(Et.min()))try{const s=await FT(r.localStore);n.compareTo(s)>=0&&await function(c,f){const p=c.Va.Tt(f);return p.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const A=c.Ia.get(y);A&&c.Ia.set(y,A.withResumeToken(g.resumeToken,f))}}),p.targetMismatches.forEach((g,y)=>{const A=c.Ia.get(g);if(!A)return;c.Ia.set(g,A.withResumeToken(Ge.EMPTY_BYTE_STRING,A.snapshotVersion)),QT(c,g);const I=new kr(A.target,g,y,A.sequenceNumber);up(c,I)}),c.remoteSyncer.applyRemoteEvent(p)}(r,n)}catch(s){rt(Hs,"Failed to raise snapshot:",s),await oh(r,s)}}async function oh(r,t,n){if(!oo(t))throw t;r.Ea.add(1),await Jl(r),r.Ra.set("Offline"),n||(n=()=>FT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{rt(Hs,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Ih(r)})}function $T(r,t){return t().catch(n=>oh(r,n,t))}async function Ch(r){const t=Tt(r),n=Fr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Qm;for(;TO(t);)try{const l=await nO(t.localStore,s);if(l===null){t.Ta.length===0&&n.L_();break}s=l.batchId,AO(t,l)}catch(l){await oh(t,l)}ZT(t)&&WT(t)}function TO(r){return Qs(r)&&r.Ta.length<10}function AO(r,t){r.Ta.push(t);const n=Fr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function ZT(r){return Qs(r)&&!Fr(r).x_()&&r.Ta.length>0}function WT(r){Fr(r).start()}async function SO(r){Fr(r).ra()}async function wO(r){const t=Fr(r);for(const n of r.Ta)t.ea(n.mutations)}async function bO(r,t,n){const s=r.Ta.shift(),l=ep.from(s,t,n);await $T(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await Ch(r)}async function RO(r,t){t&&Fr(r).X_&&await async function(s,l){if(function(f){return oD(f)&&f!==X.ABORTED}(l.code)){const c=s.Ta.shift();Fr(s).B_(),await $T(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await Ch(s)}}(r,t),ZT(r)&&WT(r)}async function d0(r,t){const n=Tt(r);n.asyncQueue.verifyOperationInProgress(),rt(Hs,"RemoteStore received new credentials");const s=Qs(n);n.Ea.add(3),await Jl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Ih(n)}async function IO(r,t){const n=Tt(r);t?(n.Ea.delete(2),await Ih(n)):t||(n.Ea.add(2),await Jl(n),n.Ra.set("Unknown"))}function lo(r){return r.ma||(r.ma=function(n,s,l){const c=Tt(n);return c.sa(),new hO(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:yO.bind(null,r),t_:_O.bind(null,r),r_:vO.bind(null,r),H_:EO.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),hp(r)?cp(r):r.Ra.set("Unknown")):(await r.ma.stop(),XT(r))})),r.ma}function Fr(r){return r.fa||(r.fa=function(n,s,l){const c=Tt(n);return c.sa(),new fO(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:SO.bind(null,r),r_:RO.bind(null,r),ta:wO.bind(null,r),na:bO.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Ch(r)):(await r.fa.stop(),r.Ta.length>0&&(rt(Hs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class fp{constructor(t,n,s,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,c){const f=Date.now()+s,p=new fp(t,n,f,l,c);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),oo(r))return new lt(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Xa{static emptySet(t){return new Xa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||dt.comparator(n.key,s.key):(n,s)=>dt.comparator(n.key,s.key),this.keyedMap=Sl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class m0{constructor(){this.ga=new se(dt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):yt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class eo{constructor(t,n,s,l,c,f,p,g,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,l,c){const f=[];return n.forEach(p=>{f.push({type:0,doc:p})}),new eo(t,n,Xa.emptySet(n),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Th(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class CO{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class DO{constructor(){this.queries=p0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=Tt(n),c=l.queries;l.queries=p0(),c.forEach((f,p)=>{for(const g of p.Sa)g.onError(s)})})(this,new lt(X.ABORTED,"Firestore shutting down"))}}function p0(){return new Ys(r=>yT(r),Th)}async function OO(r,t){const n=Tt(r);let s=3;const l=t.query;let c=n.queries.get(l);c?!c.ba()&&t.Da()&&(s=2):(c=new CO,s=t.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(l,!0);break;case 1:c.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const p=dp(f,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(p)}n.queries.set(l,c),c.Sa.push(t),t.va(n.onlineState),c.wa&&t.Fa(c.wa)&&mp(n)}async function NO(r,t){const n=Tt(r),s=t.query;let l=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(t);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function MO(r,t){const n=Tt(r);let s=!1;for(const l of t){const c=l.query,f=n.queries.get(c);if(f){for(const p of f.Sa)p.Fa(l)&&(s=!0);f.wa=l}}s&&mp(n)}function VO(r,t,n){const s=Tt(r),l=s.queries.get(t);if(l)for(const c of l.Sa)c.onError(n);s.queries.delete(t)}function mp(r){r.Ca.forEach(t=>{t.next()})}var bm,g0;(g0=bm||(bm={})).Ma="default",g0.Cache="cache";class kO{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new eo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=eo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==bm.Cache}}/**
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
 */class JT{constructor(t){this.key=t}}class tA{constructor(t){this.key=t}}class PO{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Nt(),this.mutatedKeys=Nt(),this.eu=_T(t),this.tu=new Xa(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new m0,l=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((A,I)=>{const C=l.get(A),j=Ah(this.query,I)?I:null,$=!!C&&this.mutatedKeys.has(C.key),et=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let Z=!1;C&&j?C.data.isEqual(j.data)?$!==et&&(s.track({type:3,doc:j}),Z=!0):this.su(C,j)||(s.track({type:2,doc:j}),Z=!0,(g&&this.eu(j,g)>0||y&&this.eu(j,y)<0)&&(p=!0)):!C&&j?(s.track({type:0,doc:j}),Z=!0):C&&!j&&(s.track({type:1,doc:C}),Z=!0,(g||y)&&(p=!0)),Z&&(j?(f=f.add(j),c=et?c.add(A):c.delete(A)):(f=f.delete(A),c=c.delete(A)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),c=c.delete(A.key),s.track({type:1,doc:A})}return{tu:f,iu:s,Cs:p,mutatedKeys:c}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort((A,I)=>function(j,$){const et=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt(20277,{Rt:Z})}};return et(j)-et($)}(A.type,I.type)||this.eu(A.doc,I.doc)),this.ou(s),l=l??!1;const p=n&&!l?this._u():[],g=this.Xa.size===0&&this.current&&!l?1:0,y=g!==this.Za;return this.Za=g,f.length!==0||y?{snapshot:new eo(this.query,t.tu,c,f,t.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new m0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Nt(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return t.forEach(s=>{this.Xa.has(s)||n.push(new tA(s))}),this.Xa.forEach(s=>{t.has(s)||n.push(new JT(s))}),n}cu(t){this.Ya=t.Qs,this.Xa=Nt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pp="SyncEngine";class xO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class UO{constructor(t){this.key=t,this.hu=!1}}class LO{constructor(t,n,s,l,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Ys(p=>yT(p),Th),this.Iu=new Map,this.Eu=new Set,this.du=new se(dt.comparator),this.Au=new Map,this.Ru=new rp,this.Vu={},this.mu=new Map,this.fu=to.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zO(r,t,n=!0){const s=aA(r);let l;const c=s.Tu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await eA(s,t,n,!0),l}async function BO(r,t){const n=aA(r);await eA(n,t,!0,!1)}async function eA(r,t,n,s){const l=await iO(r.localStore,di(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await qO(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&YT(r.remoteStore,l),p}async function qO(r,t,n,s,l){r.pu=(I,C,j)=>async function(et,Z,st,it){let ut=Z.view.ru(st);ut.Cs&&(ut=await l0(et.localStore,Z.query,!1).then(({documents:V})=>Z.view.ru(V,ut)));const Ut=it&&it.targetChanges.get(Z.targetId),At=it&&it.targetMismatches.get(Z.targetId)!=null,Bt=Z.view.applyChanges(ut,et.isPrimaryClient,Ut,At);return _0(et,Z.targetId,Bt.au),Bt.snapshot}(r,I,C,j);const c=await l0(r.localStore,t,!0),f=new PO(t,c.Qs),p=f.ru(c.documents),g=Wl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=f.applyChanges(p,r.isPrimaryClient,g);_0(r,n,y.au);const A=new xO(t,n,f);return r.Tu.set(t,A),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),y.snapshot}async function jO(r,t,n){const s=Tt(r),l=s.Tu.get(t),c=s.Iu.get(l.targetId);if(c.length>1)return s.Iu.set(l.targetId,c.filter(f=>!Th(f,t))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await Sm(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),n&&lp(s.remoteStore,l.targetId),Rm(s,l.targetId)}).catch(ao)):(Rm(s,l.targetId),await Sm(s.localStore,l.targetId,!0))}async function HO(r,t){const n=Tt(r),s=n.Tu.get(t),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),lp(n.remoteStore,s.targetId))}async function FO(r,t,n){const s=ZO(r);try{const l=await function(f,p){const g=Tt(f),y=te.now(),A=p.reduce((j,$)=>j.add($.key),Nt());let I,C;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let $=Ji(),et=Nt();return g.Ns.getEntries(j,A).next(Z=>{$=Z,$.forEach((st,it)=>{it.isValidDocument()||(et=et.add(st))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,$)).next(Z=>{I=Z;const st=[];for(const it of p){const ut=nD(it,I.get(it.key).overlayedDocument);ut!=null&&st.push(new Xr(it.key,ut,cT(ut.value.mapValue),mi.exists(!0)))}return g.mutationQueue.addMutationBatch(j,y,st,p)}).next(Z=>{C=Z;const st=Z.applyToLocalDocumentSet(I,et);return g.documentOverlayCache.saveOverlays(j,Z.batchId,st)})}).then(()=>({batchId:C.batchId,changes:ET(I)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,p,g){let y=f.Vu[f.currentUser.toKey()];y||(y=new se(Ot)),y=y.insert(p,g),f.Vu[f.currentUser.toKey()]=y}(s,l.batchId,n),await tu(s,l.changes),await Ch(s.remoteStore)}catch(l){const c=dp(l,"Failed to persist write");n.reject(c)}}async function nA(r,t){const n=Tt(r);try{const s=await tO(n.localStore,t);t.targetChanges.forEach((l,c)=>{const f=n.Au.get(c);f&&(jt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?jt(f.hu,14607):l.removedDocuments.size>0&&(jt(f.hu,42227),f.hu=!1))}),await tu(n,s,t)}catch(s){await ao(s)}}function y0(r,t,n){const s=Tt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach((c,f)=>{const p=f.view.va(t);p.snapshot&&l.push(p.snapshot)}),function(f,p){const g=Tt(f);g.onlineState=p;let y=!1;g.queries.forEach((A,I)=>{for(const C of I.Sa)C.va(p)&&(y=!0)}),y&&mp(g)}(s.eventManager,t),l.length&&s.Pu.H_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function GO(r,t,n){const s=Tt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Au.get(t),c=l&&l.key;if(c){let f=new se(dt.comparator);f=f.insert(c,Ze.newNoDocument(c,Et.min()));const p=Nt().add(c),g=new bh(Et.min(),new Map,new se(Ot),f,p);await nA(s,g),s.du=s.du.remove(c),s.Au.delete(t),gp(s)}else await Sm(s.localStore,t,!1).then(()=>Rm(s,t,n)).catch(ao)}async function KO(r,t){const n=Tt(r),s=t.batch.batchId;try{const l=await JD(n.localStore,t);rA(n,s,null),iA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tu(n,l)}catch(l){await ao(l)}}async function YO(r,t,n){const s=Tt(r);try{const l=await function(f,p){const g=Tt(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return g.mutationQueue.lookupMutationBatch(y,p).next(I=>(jt(I!==null,37113),A=I.keys(),g.mutationQueue.removeMutationBatch(y,I))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,A,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>g.localDocuments.getDocuments(y,A))})}(s.localStore,t);rA(s,t,n),iA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await tu(s,l)}catch(l){await ao(l)}}function iA(r,t){(r.mu.get(t)||[]).forEach(n=>{n.resolve()}),r.mu.delete(t)}function rA(r,t,n){const s=Tt(r);let l=s.Vu[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(n?c.reject(n):c.resolve(),l=l.remove(t)),s.Vu[s.currentUser.toKey()]=l}}function Rm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(s=>{r.Ru.containsKey(s)||sA(r,s)})}function sA(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(lp(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),gp(r))}function _0(r,t,n){for(const s of n)s instanceof JT?(r.Ru.addReference(s.key,t),QO(r,s)):s instanceof tA?(rt(pp,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||sA(r,s.key)):yt(19791,{wu:s})}function QO(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(rt(pp,"New document in limbo: "+n),r.Eu.add(s),gp(r))}function gp(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new dt(re.fromString(t)),s=r.fu.next();r.Au.set(s,new UO(n)),r.du=r.du.insert(n,s),YT(r.remoteStore,new kr(di(Jm(n.path)),s,"TargetPurposeLimboResolution",yh.ce))}}async function tu(r,t,n){const s=Tt(r),l=[],c=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((p,g)=>{f.push(s.pu(g,t,n).then(y=>{if((y||n)&&s.isPrimaryClient){const A=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(y){l.push(y);const A=ap.As(g.targetId,y);c.push(A)}}))}),await Promise.all(f),s.Pu.H_(l),await async function(g,y){const A=Tt(g);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>Y.forEach(y,C=>Y.forEach(C.Es,j=>A.persistence.referenceDelegate.addReference(I,C.targetId,j)).next(()=>Y.forEach(C.ds,j=>A.persistence.referenceDelegate.removeReference(I,C.targetId,j)))))}catch(I){if(!oo(I))throw I;rt(op,"Failed to update sequence numbers: "+I)}for(const I of y){const C=I.targetId;if(!I.fromCache){const j=A.Ms.get(C),$=j.snapshotVersion,et=j.withLastLimboFreeSnapshotVersion($);A.Ms=A.Ms.insert(C,et)}}}(s.localStore,c))}async function XO(r,t){const n=Tt(r);if(!n.currentUser.isEqual(t)){rt(pp,"User change. New user:",t.toKey());const s=await HT(n.localStore,t);n.currentUser=t,function(c,f){c.mu.forEach(p=>{p.forEach(g=>{g.reject(new lt(X.CANCELLED,f))})}),c.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await tu(n,s.Ls)}}function $O(r,t){const n=Tt(r),s=n.Au.get(t);if(s&&s.hu)return Nt().add(s.key);{let l=Nt();const c=n.Iu.get(t);if(!c)return l;for(const f of c){const p=n.Tu.get(f);l=l.unionWith(p.view.nu)}return l}}function aA(r){const t=Tt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=nA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$O.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=GO.bind(null,t),t.Pu.H_=MO.bind(null,t.eventManager),t.Pu.yu=VO.bind(null,t.eventManager),t}function ZO(r){const t=Tt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=KO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=YO.bind(null,t),t}class lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return WD(this.persistence,new XD,t.initialUser,this.serializer)}Cu(t){return new jT(sp.mi,this.serializer)}Du(t){return new sO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lh.provider={build:()=>new lh};class WO extends lh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){jt(this.persistence.referenceDelegate instanceof ah,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new kD(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new jT(s=>ah.mi(s,n),this.serializer)}}class Im{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>y0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XO.bind(null,this.syncEngine),await IO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new DO}()}createDatastore(t){const n=Rh(t.databaseInfo.databaseId),s=function(c){return new cO(c)}(t.databaseInfo);return function(c,f,p,g){return new mO(c,f,p,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,l,c,f,p){return new gO(s,l,c,f,p)}(this.localStore,this.datastore,t.asyncQueue,n=>y0(this.syncEngine,n,0),function(){return h0.v()?new h0:new aO}())}createSyncEngine(t,n){return function(l,c,f,p,g,y,A){const I=new LO(l,c,f,p,g,y);return A&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=Tt(n);rt(Hs,"RemoteStore shutting down."),s.Ea.add(5),await Jl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Im.provider={build:()=>new Im};/**
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
 */class JO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Gr="FirestoreClient";class tN{constructor(t,n,s,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=$e.UNAUTHENTICATED,this.clientId=Km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{rt(Gr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(rt(Gr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=dp(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function em(r,t){r.asyncQueue.verifyOperationInProgress(),rt(Gr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await HT(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function v0(r,t){r.asyncQueue.verifyOperationInProgress();const n=await eN(r);rt(Gr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>d0(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>d0(t.remoteStore,l)),r._onlineComponents=t}async function eN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(Gr,"Using user provided OfflineComponentProvider");try{await em(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(l){return l.name==="FirebaseError"?l.code===X.FAILED_PRECONDITION||l.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(n))throw n;$a("Error using user provided cache. Falling back to memory cache: "+n),await em(r,new lh)}}else rt(Gr,"Using default OfflineComponentProvider"),await em(r,new WO(void 0));return r._offlineComponents}async function oA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(Gr,"Using user provided OnlineComponentProvider"),await v0(r,r._uninitializedComponentsProvider._online)):(rt(Gr,"Using default OnlineComponentProvider"),await v0(r,new Im))),r._onlineComponents}function nN(r){return oA(r).then(t=>t.syncEngine)}async function iN(r){const t=await oA(r),n=t.eventManager;return n.onListen=zO.bind(null,t.syncEngine),n.onUnlisten=jO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=BO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=HO.bind(null,t.syncEngine),n}function rN(r,t,n={}){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,p,g,y){const A=new JO({next:C=>{A.Nu(),f.enqueueAndForget(()=>NO(c,I));const j=C.docs.has(p);!j&&C.fromCache?y.reject(new lt(X.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&C.fromCache&&g&&g.source==="server"?y.reject(new lt(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),I=new kO(Jm(p.path),A,{includeMetadataChanges:!0,qa:!0});return OO(c,I)}(await iN(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function lA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const E0=new Map;/**
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
 */const uA="firestore.googleapis.com",T0=!0;class A0{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new lt(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uA,this.ssl=T0}else this.host=t.host,this.ssl=t.ssl??T0;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=qT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<MD)throw new lt(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lA(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yp{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rC;switch(s.type){case"firstParty":return new lC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new lt(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=E0.get(n);s&&(rt("ComponentProvider","Removing Datastore"),E0.delete(n),s.terminate())}(this),Promise.resolve()}}function sN(r,t,n,s={}){r=js(r,yp);const l=no(t),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},p=`${t}:${n}`;l&&(V0(`https://${p}`),k0("Firestore",!0)),c.host!==uA&&c.host!==p&&$a("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:l,emulatorOptions:s};if(!zr(g,f)&&(r._setSettings(g),s.mockUserToken)){let y,A;if(typeof s.mockUserToken=="string")y=s.mockUserToken,A=$e.MOCK_USER;else{y=Q1(s.mockUserToken,r._app?.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new lt(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new $e(I)}r._authCredentials=new sC(new JE(y,A))}}/**
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
 */class _p{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new _p(this.firestore,t,this._query)}}class Re{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Re(this.firestore,t,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if($l(n,Re._jsonSchema))return new Re(t,s||null,new dt(re.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:ve("string",Re._jsonSchemaVersion),referencePath:ve("string")};class Fl extends _p{constructor(t,n,s){super(t,n,Jm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Re(this.firestore,null,new dt(t))}withConverter(t){return new Fl(this.firestore,t,this._path)}}function vp(r,t,...n){if(r=xe(r),arguments.length===1&&(t=Km.newId()),mC("doc","path",t),r instanceof yp){const s=re.fromString(t,...n);return xv(s),new Re(r,null,new dt(s))}{if(!(r instanceof Re||r instanceof Fl))throw new lt(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(re.fromString(t,...n));return xv(s),new Re(r.firestore,r instanceof Fl?r.converter:null,new dt(s))}}/**
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
 */const S0="AsyncQueue";class w0{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new GT(this,"async_queue_retry"),this._c=()=>{const s=tm();s&&rt(S0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=tm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=tm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!oo(t))throw t;rt(S0,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Wi("INTERNAL UNHANDLED ERROR: ",b0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const l=fp.createAndSchedule(this,t,n,s,c=>this.hc(c));return this.tc.push(l),l}uc(){this.nc&&yt(47125,{Pc:b0(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function b0(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Dh extends yp{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new w0,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new w0(t),this._firestoreClient=void 0,await t}}}function aN(r,t){const n=typeof r=="object"?r:Nm(),s=typeof r=="string"?r:th,l=Gs(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=K1("firestore");c&&sN(l,...c)}return l}function cA(r){if(r._terminated)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oN(r),r._firestoreClient}function oN(r){const t=r._freezeSettings(),n=function(l,c,f,p){return new RC(l,c,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lA(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new tN(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(r._componentsProvider))}/**
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
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(Ge.fromBase64String(t))}catch(n){throw new lt(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pn(Ge.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($l(t,Pn._jsonSchema))return Pn.fromBase64String(t.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:ve("string",Pn._jsonSchemaVersion),bytes:ve("string")};/**
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
 */class Oh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new lt(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Nh{constructor(t){this._methodName=t}}/**
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
 */class gi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new lt(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new lt(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ot(this._lat,t._lat)||Ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gi._jsonSchemaVersion}}static fromJSON(t){if($l(t,gi._jsonSchema))return new gi(t.latitude,t.longitude)}}gi._jsonSchemaVersion="firestore/geoPoint/1.0",gi._jsonSchema={type:ve("string",gi._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class yi{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:yi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($l(t,yi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new yi(t.vectorValues);throw new lt(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yi._jsonSchemaVersion="firestore/vectorValue/1.0",yi._jsonSchema={type:ve("string",yi._jsonSchemaVersion),vectorValues:ve("object")};/**
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
 */const lN=/^__.*__$/;class uN{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(t,this.data,n,this.fieldTransforms)}}class hA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function fA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{Ac:r})}}class Ep{constructor(t,n,s,l,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ep({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return uh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(fA(this.Ac)&&lN.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class cN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Rh(t)}Cc(t,n,s,l=!1){return new Ep({Ac:t,methodName:n,Dc:s,path:Fe.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dA(r){const t=r._freezeSettings(),n=Rh(r._databaseId);return new cN(r._databaseId,!!t.ignoreUndefinedProperties,n)}function hN(r,t,n,s,l,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,t,n,l);Ap("Data must be an object, but it was:",f,s);const p=mA(s,f);let g,y;if(c.merge)g=new vn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const A=[];for(const I of c.mergeFields){const C=Cm(t,I,n);if(!f.contains(C))throw new lt(X.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);gA(A,C)||A.push(C)}g=new vn(A),y=f.fieldTransforms.filter(I=>g.covers(I.field))}else g=null,y=f.fieldTransforms;return new uN(new ln(p),g,y)}class Mh extends Nh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mh}}class Tp extends Nh{constructor(t,n){super(t),this.Fc=n}_toFieldTransform(t){const n=new Hl(t.serializer,ST(t.serializer,this.Fc));return new WC(t.path,n)}isEqual(t){return t instanceof Tp&&this.Fc===t.Fc}}function fN(r,t,n,s){const l=r.Cc(1,t,n);Ap("Data must be an object, but it was:",l,s);const c=[],f=ln.empty();Qr(s,(g,y)=>{const A=Sp(t,g,n);y=xe(y);const I=l.yc(A);if(y instanceof Mh)c.push(A);else{const C=Vh(y,I);C!=null&&(c.push(A),f.set(A,C))}});const p=new vn(c);return new hA(f,p,l.fieldTransforms)}function dN(r,t,n,s,l,c){const f=r.Cc(1,t,n),p=[Cm(t,s,n)],g=[l];if(c.length%2!=0)throw new lt(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<c.length;C+=2)p.push(Cm(t,c[C])),g.push(c[C+1]);const y=[],A=ln.empty();for(let C=p.length-1;C>=0;--C)if(!gA(y,p[C])){const j=p[C];let $=g[C];$=xe($);const et=f.yc(j);if($ instanceof Mh)y.push(j);else{const Z=Vh($,et);Z!=null&&(y.push(j),A.set(j,Z))}}const I=new vn(y);return new hA(A,I,f.fieldTransforms)}function Vh(r,t){if(pA(r=xe(r)))return Ap("Unsupported field value:",t,r),mA(r,t);if(r instanceof Nh)return function(s,l){if(!fA(l.Ac))throw l.Sc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const p of s){let g=Vh(p,l.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=xe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ST(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=te.fromDate(s);return{timestampValue:sh(l.serializer,c)}}if(s instanceof te){const c=new te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sh(l.serializer,c)}}if(s instanceof gi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:kT(l.serializer,s._byteString)};if(s instanceof Re){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:ip(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof yi)return function(f,p){return{mapValue:{fields:{[lT]:{stringValue:uT},[eh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return tp(p.serializer,y)})}}}}}}(s,l);throw l.Sc(`Unsupported field value: ${Ym(s)}`)}(r,t)}function mA(r,t){const n={};return nT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qr(r,(s,l)=>{const c=Vh(l,t.mc(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function pA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof gi||r instanceof Pn||r instanceof Re||r instanceof Nh||r instanceof yi)}function Ap(r,t,n){if(!pA(n)||!tT(n)){const s=Ym(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Cm(r,t,n){if((t=xe(t))instanceof Oh)return t._internalPath;if(typeof t=="string")return Sp(r,t);throw uh("Field path arguments must be of type string or ",r,!1,void 0,n)}const mN=new RegExp("[~\\*/\\[\\]]");function Sp(r,t,n){if(t.search(mN)>=0)throw uh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Oh(...t.split("."))._internalPath}catch{throw uh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function uh(r,t,n,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||f)&&(g+=" (found",c&&(g+=` in field ${s}`),f&&(g+=` in document ${l}`),g+=")"),new lt(X.INVALID_ARGUMENT,p+r+g)}function gA(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class yA{constructor(t,n,s,l,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_A("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pN extends yA{data(){return super.data()}}function _A(r,t){return typeof t=="string"?Sp(r,t):t instanceof Oh?t._internalPath:t._delegate._internalPath}class gN{convertValue(t,n="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return de(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Qr(t,(l,c)=>{s[l]=this.convertValue(c,n)}),s}convertVectorValue(t){const n=t.fields?.[eh].arrayValue?.values?.map(s=>de(s.doubleValue));return new yi(n)}convertGeoPoint(t){return new gi(de(t.latitude),de(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=vh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ll(t));default:return null}}convertTimestamp(t){const n=qr(t);return new te(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=re.fromString(t);jt(BT(s),9688,{name:t});const l=new zl(s.get(1),s.get(3)),c=new dt(s.popFirst(5));return l.isEqual(n)||Wi(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function yN(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class bl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xs extends yA{constructor(t,n,s,l,c,f){super(t,n,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(_A("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",xs._jsonSchema={type:ve("string",xs._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class jc extends xs{data(t={}){return super.data(t)}}class Vl{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new bl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new jc(this._firestore,this._userDataWriter,s.key,s,new bl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new lt(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(p=>{const g=new jc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new bl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const g=new jc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new bl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,A=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),A=f.indexOf(p.doc.key)),{type:_N(p.type),doc:g,oldIndex:y,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Vl._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function _N(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt(61501,{type:r})}}/**
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
 */function vA(r){r=js(r,Re);const t=js(r.firestore,Dh);return rN(cA(t),r._key).then(n=>AN(t,r,n))}Vl._jsonSchemaVersion="firestore/querySnapshot/1.0",Vl._jsonSchema={type:ve("string",Vl._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};class vN extends gN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function EN(r,t,n){r=js(r,Re);const s=js(r.firestore,Dh),l=yN(r.converter,t);return EA(s,[hN(dA(s),"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,mi.none())])}function TN(r,t,n,...s){r=js(r,Re);const l=js(r.firestore,Dh),c=dA(l);let f;return f=typeof(t=xe(t))=="string"||t instanceof Oh?dN(c,"updateDoc",r._key,t,n,s):fN(c,"updateDoc",r._key,t),EA(l,[f.toMutation(r._key,mi.exists(!0))])}function EA(r,t){return function(s,l){const c=new Lr;return s.asyncQueue.enqueueAndForget(async()=>FO(await nN(s),l,c)),c.promise}(cA(r),t)}function AN(r,t,n){const s=n.docs.get(t._key),l=new vN(r);return new xs(r,l,t._key,s,new bl(n.hasPendingWrites,n.fromCache),t.converter)}function SN(r){return new Tp("increment",r)}(function(t,n=!0){(function(l){so=l})(io),_i(new Fn("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),p=new Dh(new aC(s.getProvider("auth-internal")),new uC(f,s.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new lt(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zl(y.options.projectId,A)}(f,l),f);return c={useFetchStreams:n,...c},p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),xn(Mv,Vv,t),xn(Mv,Vv,"esm2020")})();const wN={apiKey:"AIzaSyAZOlSsxaJu6s4MUs7-42xYYxCupVQ_yNc",authDomain:"keyboard-74c77.firebaseapp.com",projectId:"keyboard-74c77",storageBucket:"keyboard-74c77.firebasestorage.app",messagingSenderId:"898425330792",appId:"1:898425330792:web:e8577edc35c4b20ec1afdd",measurementId:"G-VJYQW6BNBM"},wp=q0(wN);zR(wp);const Nc=nC(wp),bp=aN(wp);async function R0(r,t){const n=vp(bp,"users",r);return(await vA(n)).exists()||await EN(n,{email:t||"",keys:0,purchases:[],createdAt:Date.now()}),n}async function Mc(r){const t=vp(bp,"users",r),n=await vA(t);return n.exists()?n.data():null}async function bN(r,t=1){const n=vp(bp,"users",r);await TN(n,{keys:SN(t)})}const RN=()=>{const[r,t]=Pe.useState(window.innerWidth<=480),[n,s]=Pe.useState(null),[l,c]=Pe.useState(null),[f,p]=Pe.useState({email:"",password:""}),[g,y]=Pe.useState(""),[A,I]=Pe.useState(!1);Pe.useEffect(()=>{const st=F2(Nc,async ut=>{if(s(ut),ut){await R0(ut.uid,ut.email||"");const Ut=await Mc(ut.uid);c(Ut)}else c(null)}),it=()=>t(window.innerWidth<=480);return window.addEventListener("resize",it),()=>{st(),window.removeEventListener("resize",it)}},[]);const C=st=>p(it=>({...it,[st.target.name]:st.target.value})),j=async()=>{if(y(""),!f.email||!f.password)return y("Заполните email и пароль");try{I(!0);const st=await B2(Nc,f.email,f.password);await R0(st.user.uid,st.user.email||"");const it=await Mc(st.user.uid);c(it)}catch(st){y(IN(st))}finally{I(!1)}},$=async()=>{if(y(""),!f.email||!f.password)return y("Заполните email и пароль");try{I(!0);const st=await q2(Nc,f.email,f.password),it=await Mc(st.user.uid);c(it)}catch{y("Неверный email или пароль")}finally{I(!1)}},et=async()=>{await G2(Nc)},Z=async()=>{if(!n)return;await bN(n.uid,1);const st=await Mc(n.uid);c(st)};return n&&l?ot.jsxs(ot.Fragment,{children:[r?ot.jsx(x1,{}):ot.jsx(U1,{}),ot.jsxs("div",{style:{position:"fixed",right:12,bottom:12,padding:12,background:"rgba(0,0,0,0.7)",color:"#fff",borderRadius:12},children:[ot.jsx("div",{style:{marginBottom:8},children:ot.jsx("b",{children:n.email})}),ot.jsxs("div",{style:{marginBottom:8},children:["Ключи: ",ot.jsx("b",{children:l?.keys??0})]}),ot.jsx("button",{onClick:Z,style:{marginRight:8},children:"+1 ключ (демо)"}),ot.jsx("button",{onClick:et,children:"Выйти"})]})]}):ot.jsxs("div",{style:{padding:20,maxWidth:360,margin:"0 auto"},children:[ot.jsx("h1",{children:"Регистрация / Вход"}),ot.jsx("input",{type:"email",name:"email",placeholder:"Email",value:f.email,onChange:C,style:{display:"block",marginBottom:10,width:"100%"},autoComplete:"email"}),ot.jsx("input",{type:"password",name:"password",placeholder:"Пароль",value:f.password,onChange:C,style:{display:"block",marginBottom:10,width:"100%"},autoComplete:"current-password"}),ot.jsxs("div",{style:{marginBottom:10},children:[ot.jsx("button",{onClick:j,disabled:A,style:{marginRight:10},children:"Зарегистрироваться"}),ot.jsx("button",{onClick:$,disabled:A,children:"Войти"})]}),g&&ot.jsx("p",{style:{color:"red"},children:g}),A&&ot.jsx("p",{children:"Загрузка..."})]})};function IN(r){const t=String(r?.message||"");return t.includes("auth/invalid-email")?"Некорректный email":t.includes("auth/weak-password")?"Слабый пароль (минимум 6 символов)":t.includes("auth/email-already-in-use")?"Email уже используется":"Ошибка регистрации"}t1.createRoot(document.getElementById("root")).render(ot.jsxs(Pe.StrictMode,{children:[ot.jsx(RN,{}),ot.jsx("p",{children:"1.7.3"})]}));
