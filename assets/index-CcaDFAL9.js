(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const y of h)if(y.type==="childList")for(const b of y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function f(h){const y={};return h.integrity&&(y.integrity=h.integrity),h.referrerPolicy&&(y.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?y.credentials="include":h.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(h){if(h.ep)return;h.ep=!0;const y=f(h);fetch(h.href,y)}})();function Jm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var wr={exports:{}},bi={};var d0;function Wm(){if(d0)return bi;d0=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(s,h,y){var b=null;if(y!==void 0&&(b=""+y),h.key!==void 0&&(b=""+h.key),"key"in h){y={};for(var D in h)D!=="key"&&(y[D]=h[D])}else y=h;return h=y.ref,{$$typeof:i,type:s,key:b,ref:h!==void 0?h:null,props:y}}return bi.Fragment=r,bi.jsx=f,bi.jsxs=f,bi}var h0;function Im(){return h0||(h0=1,wr.exports=Wm()),wr.exports}var c=Im(),Cr={exports:{}},it={};var p0;function Fm(){if(p0)return it;p0=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),U=Symbol.iterator;function Q(m){return m===null||typeof m!="object"?null:(m=U&&m[U]||m["@@iterator"],typeof m=="function"?m:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,P={};function X(m,_,L){this.props=m,this.context=_,this.refs=P,this.updater=L||W}X.prototype.isReactComponent={},X.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function J(){}J.prototype=X.prototype;function Y(m,_,L){this.props=m,this.context=_,this.refs=P,this.updater=L||W}var Z=Y.prototype=new J;Z.constructor=Y,V(Z,X.prototype),Z.isPureReactComponent=!0;var at=Array.isArray;function I(){}var $={H:null,A:null,T:null,S:null},Dt=Object.prototype.hasOwnProperty;function te(m,_,L){var q=L.ref;return{$$typeof:i,type:m,key:_,ref:q!==void 0?q:null,props:L}}function Ie(m,_){return te(m.type,_,m.props)}function pe(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function ee(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(L){return _[L]})}var Ut=/\/+/g;function Yt(m,_){return typeof m=="object"&&m!==null&&m.key!=null?ee(""+m.key):_.toString(36)}function Ht(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(I,I):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function C(m,_,L,q,nt){var ut=typeof m;(ut==="undefined"||ut==="boolean")&&(m=null);var gt=!1;if(m===null)gt=!0;else switch(ut){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(m.$$typeof){case i:case r:gt=!0;break;case R:return gt=m._init,C(gt(m._payload),_,L,q,nt)}}if(gt)return nt=nt(m),gt=q===""?"."+Yt(m,0):q,at(nt)?(L="",gt!=null&&(L=gt.replace(Ut,"$&/")+"/"),C(nt,_,L,"",function(fn){return fn})):nt!=null&&(pe(nt)&&(nt=Ie(nt,L+(nt.key==null||m&&m.key===nt.key?"":(""+nt.key).replace(Ut,"$&/")+"/")+gt)),_.push(nt)),1;gt=0;var Vt=q===""?".":q+":";if(at(m))for(var At=0;At<m.length;At++)q=m[At],ut=Vt+Yt(q,At),gt+=C(q,_,L,ut,nt);else if(At=Q(m),typeof At=="function")for(m=At.call(m),At=0;!(q=m.next()).done;)q=q.value,ut=Vt+Yt(q,At++),gt+=C(q,_,L,ut,nt);else if(ut==="object"){if(typeof m.then=="function")return C(Ht(m),_,L,q,nt);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return gt}function B(m,_,L){if(m==null)return m;var q=[],nt=0;return C(m,q,"","",function(ut){return _.call(L,ut,nt++)}),q}function tt(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(L){(m._status===0||m._status===-1)&&(m._status=1,m._result=L)},function(L){(m._status===0||m._status===-1)&&(m._status=2,m._result=L)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var st=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},vt={map:B,forEach:function(m,_,L){B(m,function(){_.apply(this,arguments)},L)},count:function(m){var _=0;return B(m,function(){_++}),_},toArray:function(m){return B(m,function(_){return _})||[]},only:function(m){if(!pe(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return it.Activity=N,it.Children=vt,it.Component=X,it.Fragment=f,it.Profiler=h,it.PureComponent=Y,it.StrictMode=s,it.Suspense=A,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,it.__COMPILER_RUNTIME={__proto__:null,c:function(m){return $.H.useMemoCache(m)}},it.cache=function(m){return function(){return m.apply(null,arguments)}},it.cacheSignal=function(){return null},it.cloneElement=function(m,_,L){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var q=V({},m.props),nt=m.key;if(_!=null)for(ut in _.key!==void 0&&(nt=""+_.key),_)!Dt.call(_,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&_.ref===void 0||(q[ut]=_[ut]);var ut=arguments.length-2;if(ut===1)q.children=L;else if(1<ut){for(var gt=Array(ut),Vt=0;Vt<ut;Vt++)gt[Vt]=arguments[Vt+2];q.children=gt}return te(m.type,nt,q)},it.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:y,_context:m},m},it.createElement=function(m,_,L){var q,nt={},ut=null;if(_!=null)for(q in _.key!==void 0&&(ut=""+_.key),_)Dt.call(_,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(nt[q]=_[q]);var gt=arguments.length-2;if(gt===1)nt.children=L;else if(1<gt){for(var Vt=Array(gt),At=0;At<gt;At++)Vt[At]=arguments[At+2];nt.children=Vt}if(m&&m.defaultProps)for(q in gt=m.defaultProps,gt)nt[q]===void 0&&(nt[q]=gt[q]);return te(m,ut,nt)},it.createRef=function(){return{current:null}},it.forwardRef=function(m){return{$$typeof:D,render:m}},it.isValidElement=pe,it.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:tt}},it.memo=function(m,_){return{$$typeof:v,type:m,compare:_===void 0?null:_}},it.startTransition=function(m){var _=$.T,L={};$.T=L;try{var q=m(),nt=$.S;nt!==null&&nt(L,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(I,st)}catch(ut){st(ut)}finally{_!==null&&L.types!==null&&(_.types=L.types),$.T=_}},it.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},it.use=function(m){return $.H.use(m)},it.useActionState=function(m,_,L){return $.H.useActionState(m,_,L)},it.useCallback=function(m,_){return $.H.useCallback(m,_)},it.useContext=function(m){return $.H.useContext(m)},it.useDebugValue=function(){},it.useDeferredValue=function(m,_){return $.H.useDeferredValue(m,_)},it.useEffect=function(m,_){return $.H.useEffect(m,_)},it.useEffectEvent=function(m){return $.H.useEffectEvent(m)},it.useId=function(){return $.H.useId()},it.useImperativeHandle=function(m,_,L){return $.H.useImperativeHandle(m,_,L)},it.useInsertionEffect=function(m,_){return $.H.useInsertionEffect(m,_)},it.useLayoutEffect=function(m,_){return $.H.useLayoutEffect(m,_)},it.useMemo=function(m,_){return $.H.useMemo(m,_)},it.useOptimistic=function(m,_){return $.H.useOptimistic(m,_)},it.useReducer=function(m,_,L){return $.H.useReducer(m,_,L)},it.useRef=function(m){return $.H.useRef(m)},it.useState=function(m){return $.H.useState(m)},it.useSyncExternalStore=function(m,_,L){return $.H.useSyncExternalStore(m,_,L)},it.useTransition=function(){return $.H.useTransition()},it.version="19.2.0",it}var g0;function Pr(){return g0||(g0=1,Cr.exports=Fm()),Cr.exports}var G=Pr();const Ue=Jm(G);var Or={exports:{}},Si={},_r={exports:{}},Mr={};var m0;function Pm(){return m0||(m0=1,(function(i){function r(C,B){var tt=C.length;C.push(B);t:for(;0<tt;){var st=tt-1>>>1,vt=C[st];if(0<h(vt,B))C[st]=B,C[tt]=vt,tt=st;else break t}}function f(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var B=C[0],tt=C.pop();if(tt!==B){C[0]=tt;t:for(var st=0,vt=C.length,m=vt>>>1;st<m;){var _=2*(st+1)-1,L=C[_],q=_+1,nt=C[q];if(0>h(L,tt))q<vt&&0>h(nt,L)?(C[st]=nt,C[q]=tt,st=q):(C[st]=L,C[_]=tt,st=_);else if(q<vt&&0>h(nt,tt))C[st]=nt,C[q]=tt,st=q;else break t}}return B}function h(C,B){var tt=C.sortIndex-B.sortIndex;return tt!==0?tt:C.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;i.unstable_now=function(){return y.now()}}else{var b=Date,D=b.now();i.unstable_now=function(){return b.now()-D}}var A=[],v=[],R=1,N=null,U=3,Q=!1,W=!1,V=!1,P=!1,X=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function Z(C){for(var B=f(v);B!==null;){if(B.callback===null)s(v);else if(B.startTime<=C)s(v),B.sortIndex=B.expirationTime,r(A,B);else break;B=f(v)}}function at(C){if(V=!1,Z(C),!W)if(f(A)!==null)W=!0,I||(I=!0,ee());else{var B=f(v);B!==null&&Ht(at,B.startTime-C)}}var I=!1,$=-1,Dt=5,te=-1;function Ie(){return P?!0:!(i.unstable_now()-te<Dt)}function pe(){if(P=!1,I){var C=i.unstable_now();te=C;var B=!0;try{t:{W=!1,V&&(V=!1,J($),$=-1),Q=!0;var tt=U;try{e:{for(Z(C),N=f(A);N!==null&&!(N.expirationTime>C&&Ie());){var st=N.callback;if(typeof st=="function"){N.callback=null,U=N.priorityLevel;var vt=st(N.expirationTime<=C);if(C=i.unstable_now(),typeof vt=="function"){N.callback=vt,Z(C),B=!0;break e}N===f(A)&&s(A),Z(C)}else s(A);N=f(A)}if(N!==null)B=!0;else{var m=f(v);m!==null&&Ht(at,m.startTime-C),B=!1}}break t}finally{N=null,U=tt,Q=!1}B=void 0}}finally{B?ee():I=!1}}}var ee;if(typeof Y=="function")ee=function(){Y(pe)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Yt=Ut.port2;Ut.port1.onmessage=pe,ee=function(){Yt.postMessage(null)}}else ee=function(){X(pe,0)};function Ht(C,B){$=X(function(){C(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dt=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(C){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var tt=U;U=B;try{return C()}finally{U=tt}},i.unstable_requestPaint=function(){P=!0},i.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var tt=U;U=C;try{return B()}finally{U=tt}},i.unstable_scheduleCallback=function(C,B,tt){var st=i.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?st+tt:st):tt=st,C){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=tt+vt,C={id:R++,callback:B,priorityLevel:C,startTime:tt,expirationTime:vt,sortIndex:-1},tt>st?(C.sortIndex=tt,r(v,C),f(A)===null&&C===f(v)&&(V?(J($),$=-1):V=!0,Ht(at,tt-st))):(C.sortIndex=vt,r(A,C),W||Q||(W=!0,I||(I=!0,ee()))),C},i.unstable_shouldYield=Ie,i.unstable_wrapCallback=function(C){var B=U;return function(){var tt=U;U=B;try{return C.apply(this,arguments)}finally{U=tt}}}})(Mr)),Mr}var y0;function ty(){return y0||(y0=1,_r.exports=Pm()),_r.exports}var Rr={exports:{}},fe={};var v0;function ey(){if(v0)return fe;v0=1;var i=Pr();function r(A){var v="https://react.dev/errors/"+A;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+A+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function y(A,v,R){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:N==null?null:""+N,children:A,containerInfo:v,implementation:R}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(A,v){if(A==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,fe.createPortal=function(A,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return y(A,v,null,R)},fe.flushSync=function(A){var v=b.T,R=s.p;try{if(b.T=null,s.p=2,A)return A()}finally{b.T=v,s.p=R,s.d.f()}},fe.preconnect=function(A,v){typeof A=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(A,v))},fe.prefetchDNS=function(A){typeof A=="string"&&s.d.D(A)},fe.preinit=function(A,v){if(typeof A=="string"&&v&&typeof v.as=="string"){var R=v.as,N=D(R,v.crossOrigin),U=typeof v.integrity=="string"?v.integrity:void 0,Q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?s.d.S(A,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:N,integrity:U,fetchPriority:Q}):R==="script"&&s.d.X(A,{crossOrigin:N,integrity:U,fetchPriority:Q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},fe.preinitModule=function(A,v){if(typeof A=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=D(v.as,v.crossOrigin);s.d.M(A,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(A)},fe.preload=function(A,v){if(typeof A=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,N=D(R,v.crossOrigin);s.d.L(A,R,{crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},fe.preloadModule=function(A,v){if(typeof A=="string")if(v){var R=D(v.as,v.crossOrigin);s.d.m(A,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(A)},fe.requestFormReset=function(A){s.d.r(A)},fe.unstable_batchedUpdates=function(A,v){return A(v)},fe.useFormState=function(A,v,R){return b.H.useFormState(A,v,R)},fe.useFormStatus=function(){return b.H.useHostTransitionStatus()},fe.version="19.2.0",fe}var x0;function ny(){if(x0)return Rr.exports;x0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Rr.exports=ey(),Rr.exports}var b0;function ly(){if(b0)return Si;b0=1;var i=ty(),r=Pr(),f=ny();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function y(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(y(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=y(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return A(a),t;if(u===l)return A(a),e;u=u.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=u;else{for(var o=!1,d=a.child;d;){if(d===n){o=!0,n=a,l=u;break}if(d===l){o=!0,l=a,n=u;break}d=d.sibling}if(!o){for(d=u.child;d;){if(d===n){o=!0,n=u,l=a;break}if(d===l){o=!0,l=u,n=a;break}d=d.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function R(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=R(t),e!==null)return e;t=t.sibling}return null}var N=Object.assign,U=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Symbol.for("react.client.reference");function Yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case X:return"Profiler";case P:return"StrictMode";case at:return"Suspense";case I:return"SuspenseList";case te:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case Y:return t.displayName||"Context";case J:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Yt(t.type)||"Memo";case Dt:e=t._payload,t=t._init;try{return Yt(t(e))}catch{}}return null}var Ht=Array.isArray,C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},st=[],vt=-1;function m(t){return{current:t}}function _(t){0>vt||(t.current=st[vt],st[vt]=null,vt--)}function L(t,e){vt++,st[vt]=t.current,t.current=e}var q=m(null),nt=m(null),ut=m(null),gt=m(null);function Vt(t,e){switch(L(ut,e),L(nt,t),L(q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Dh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Dh(e),t=Uh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_(q),L(q,t)}function At(){_(q),_(nt),_(ut)}function fn(t){t.memoizedState!==null&&L(gt,t);var e=q.current,n=Uh(e,t.type);e!==n&&(L(nt,t),L(q,n))}function dn(t){nt.current===t&&(_(q),_(nt)),gt.current===t&&(_(gt),mi._currentValue=tt)}var Be,ss;function sl(t){if(Be===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Be=e&&e[1]||"",ss=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+ss}var rc=!1;function sc(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(w){var z=w}Reflect.construct(t,[],H)}else{try{H.call()}catch(w){z=w}t.call(H.prototype)}}else{try{throw Error()}catch(w){z=w}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(w){if(w&&z&&typeof w.stack=="string")return[w.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],d=u[1];if(o&&d){var p=o.split(`
`),E=d.split(`
`);for(a=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(l===p.length||a===E.length)for(l=p.length-1,a=E.length-1;1<=l&&0<=a&&p[l]!==E[a];)a--;for(;1<=l&&0<=a;l--,a--)if(p[l]!==E[a]){if(l!==1||a!==1)do if(l--,a--,0>a||p[l]!==E[a]){var O=`
`+p[l].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=l&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?sl(n):""}function Ap(t,e){switch(t.tag){case 26:case 27:case 5:return sl(t.type);case 16:return sl("Lazy");case 13:return t.child!==e&&e!==null?sl("Suspense Fallback"):sl("Suspense");case 19:return sl("SuspenseList");case 0:case 15:return sc(t.type,!1);case 11:return sc(t.type.render,!1);case 1:return sc(t.type,!0);case 31:return sl("Activity");default:return""}}function fs(t){try{var e="",n=null;do e+=Ap(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fc=Object.prototype.hasOwnProperty,dc=i.unstable_scheduleCallback,hc=i.unstable_cancelCallback,wp=i.unstable_shouldYield,Cp=i.unstable_requestPaint,ze=i.unstable_now,Op=i.unstable_getCurrentPriorityLevel,ds=i.unstable_ImmediatePriority,hs=i.unstable_UserBlockingPriority,Ci=i.unstable_NormalPriority,_p=i.unstable_LowPriority,ps=i.unstable_IdlePriority,Mp=i.log,Rp=i.unstable_setDisableYieldValue,Ca=null,Ae=null;function Nn(t){if(typeof Mp=="function"&&Rp(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ca,t)}catch{}}var we=Math.clz32?Math.clz32:Dp,Hp=Math.log,Np=Math.LN2;function Dp(t){return t>>>=0,t===0?32:31-(Hp(t)/Np|0)|0}var Oi=256,_i=262144,Mi=4194304;function fl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ri(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=l&134217727;return d!==0?(l=d&~u,l!==0?a=fl(l):(o&=d,o!==0?a=fl(o):n||(n=d&~t,n!==0&&(a=fl(n))))):(d=l&~u,d!==0?a=fl(d):o!==0?a=fl(o):n||(n=l&~t,n!==0&&(a=fl(n)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:a}function Oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Up(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gs(){var t=Mi;return Mi<<=1,(Mi&62914560)===0&&(Mi=4194304),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bp(t,e,n,l,a,u){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,p=t.expirationTimes,E=t.hiddenUpdates;for(n=o&~n;0<n;){var O=31-we(n),H=1<<O;d[O]=0,p[O]=-1;var z=E[O];if(z!==null)for(E[O]=null,O=0;O<z.length;O++){var w=z[O];w!==null&&(w.lane&=-536870913)}n&=~H}l!==0&&ms(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(o&~e))}function ms(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-we(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function ys(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-we(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function vs(t,e){var n=e&-e;return n=(n&42)!==0?1:gc(n),(n&(t.suspendedLanes|e))!==0?0:n}function gc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xs(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:i0(t.type))}function bs(t,e){var n=B.p;try{return B.p=t,e()}finally{B.p=n}}var Dn=Math.random().toString(36).slice(2),ie="__reactFiber$"+Dn,ge="__reactProps$"+Dn,Nl="__reactContainer$"+Dn,yc="__reactEvents$"+Dn,$p="__reactListeners$"+Dn,Gp="__reactHandles$"+Dn,Ss="__reactResources$"+Dn,Ma="__reactMarker$"+Dn;function vc(t){delete t[ie],delete t[ge],delete t[yc],delete t[$p],delete t[Gp]}function Dl(t){var e=t[ie];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nl]||n[ie]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kh(t);t!==null;){if(n=t[ie])return n;t=kh(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){if(t=t[ie]||t[Nl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ra(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Bl(t){var e=t[Ss];return e||(e=t[Ss]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[Ma]=!0}var Es=new Set,js={};function dl(t,e){$l(t,e),$l(t+"Capture",e)}function $l(t,e){for(js[t]=e,t=0;t<e.length;t++)Es.add(e[t])}var Lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ts={},zs={};function Yp(t){return fc.call(zs,t)?!0:fc.call(Ts,t)?!1:Lp.test(t)?zs[t]=!0:(Ts[t]=!0,!1)}function Hi(t,e,n){if(Yp(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ni(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function hn(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function As(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qp(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xc(t){if(!t._valueTracker){var e=As(t)?"checked":"value";t._valueTracker=qp(t,e,""+t[e])}}function ws(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=As(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function Di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kp=/[\n"\\]/g;function Ge(t){return t.replace(kp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bc(t,e,n,l,a,u,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Sc(t,o,$e(e)):n!=null?Sc(t,o,$e(n)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+$e(d):t.removeAttribute("name")}function Cs(t,e,n,l,a,u,o,d){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){xc(t);return}n=n!=null?""+$e(n):"",e=e!=null?""+$e(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=d?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),xc(t)}function Sc(t,e,n){e==="number"&&Di(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Gl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+$e(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Os(t,e,n){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+$e(n):""}function _s(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(s(92));if(Ht(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=$e(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),xc(t)}function Ll(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ms(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||Vp.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Rs(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&Ms(t,a,l)}else for(var u in e)e.hasOwnProperty(u)&&Ms(t,u,e[u])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(t){return Qp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pn(){}var jc=null;function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yl=null,ql=null;function Hs(t){var e=Ul(t);if(e&&(t=e.stateNode)){var n=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(bc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ge(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[ge]||null;if(!a)throw Error(s(90));bc(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&ws(l)}break t;case"textarea":Os(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Gl(t,!!n.multiple,e,!1)}}}var zc=!1;function Ns(t,e,n){if(zc)return t(e,n);zc=!0;try{var l=t(e);return l}finally{if(zc=!1,(Yl!==null||ql!==null)&&(ju(),Yl&&(e=Yl,t=ql,ql=Yl=null,Hs(e),t)))for(e=0;e<t.length;e++)Hs(t[e])}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var l=n[ge]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(gn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Ac=!1}var Un=null,wc=null,Bi=null;function Ds(){if(Bi)return Bi;var t,e=wc,n=e.length,l,a="value"in Un?Un.value:Un.textContent,u=a.length;for(t=0;t<n&&e[t]===a[t];t++);var o=n-t;for(l=1;l<=o&&e[n-l]===a[u-l];l++);return Bi=a.slice(t,1<l?1-l:void 0)}function $i(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function Us(){return!1}function me(t){function e(n,l,a,u,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(u):u[d]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Gi:Us,this.isPropagationStopped=Us,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=me(hl),Da=N({},hl,{view:0,detail:0}),Zp=me(Da),Cc,Oc,Ua,Yi=N({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(Cc=t.screenX-Ua.screenX,Oc=t.screenY-Ua.screenY):Oc=Cc=0,Ua=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Bs=me(Yi),Kp=N({},Yi,{dataTransfer:0}),Jp=me(Kp),Wp=N({},Da,{relatedTarget:0}),_c=me(Wp),Ip=N({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=me(Ip),Pp=N({},hl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tg=me(Pp),eg=N({},hl,{data:0}),$s=me(eg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ag[t])?!!e[t]:!1}function Mc(){return ig}var ug=N({},Da,{key:function(t){if(t.key){var e=ng[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$i(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?$i(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$i(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cg=me(ug),og=N({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=me(og),rg=N({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),sg=me(rg),fg=N({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=me(fg),hg=N({},Yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=me(hg),gg=N({},hl,{newState:0,oldState:0}),mg=me(gg),yg=[9,13,27,32],Rc=gn&&"CompositionEvent"in window,Ba=null;gn&&"documentMode"in document&&(Ba=document.documentMode);var vg=gn&&"TextEvent"in window&&!Ba,Ls=gn&&(!Rc||Ba&&8<Ba&&11>=Ba),Ys=" ",qs=!1;function ks(t,e){switch(t){case"keyup":return yg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kl=!1;function xg(t,e){switch(t){case"compositionend":return Vs(e);case"keypress":return e.which!==32?null:(qs=!0,Ys);case"textInput":return t=e.data,t===Ys&&qs?null:t;default:return null}}function bg(t,e){if(kl)return t==="compositionend"||!Rc&&ks(t,e)?(t=Ds(),Bi=wc=Un=null,kl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ls&&e.locale!=="ko"?null:e.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sg[t.type]:e==="textarea"}function Qs(t,e,n,l){Yl?ql?ql.push(l):ql=[l]:Yl=l,e=_u(e,"onChange"),0<e.length&&(n=new Li("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var $a=null,Ga=null;function Eg(t){Oh(t,0)}function qi(t){var e=Ra(t);if(ws(e))return t}function Zs(t,e){if(t==="change")return e}var Ks=!1;if(gn){var Hc;if(gn){var Nc="oninput"in document;if(!Nc){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),Nc=typeof Js.oninput=="function"}Hc=Nc}else Hc=!1;Ks=Hc&&(!document.documentMode||9<document.documentMode)}function Ws(){$a&&($a.detachEvent("onpropertychange",Is),Ga=$a=null)}function Is(t){if(t.propertyName==="value"&&qi(Ga)){var e=[];Qs(e,Ga,t,Tc(t)),Ns(Eg,e)}}function jg(t,e,n){t==="focusin"?(Ws(),$a=e,Ga=n,$a.attachEvent("onpropertychange",Is)):t==="focusout"&&Ws()}function Tg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qi(Ga)}function zg(t,e){if(t==="click")return qi(e)}function Ag(t,e){if(t==="input"||t==="change")return qi(e)}function wg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:wg;function La(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!fc.call(e,a)||!Ce(t[a],e[a]))return!1}return!0}function Fs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ps(t,e){var n=Fs(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Fs(n)}}function tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ef(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Di(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Di(t.document)}return e}function Dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Cg=gn&&"documentMode"in document&&11>=document.documentMode,Vl=null,Uc=null,Ya=null,Bc=!1;function nf(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||Vl==null||Vl!==Di(l)||(l=Vl,"selectionStart"in l&&Dc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ya&&La(Ya,l)||(Ya=l,l=_u(Uc,"onSelect"),0<l.length&&(e=new Li("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=Vl)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xl={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionrun:pl("Transition","TransitionRun"),transitionstart:pl("Transition","TransitionStart"),transitioncancel:pl("Transition","TransitionCancel"),transitionend:pl("Transition","TransitionEnd")},$c={},lf={};gn&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Xl.animationend.animation,delete Xl.animationiteration.animation,delete Xl.animationstart.animation),"TransitionEvent"in window||delete Xl.transitionend.transition);function gl(t){if($c[t])return $c[t];if(!Xl[t])return t;var e=Xl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lf)return $c[t]=e[n];return t}var af=gl("animationend"),uf=gl("animationiteration"),cf=gl("animationstart"),Og=gl("transitionrun"),_g=gl("transitionstart"),Mg=gl("transitioncancel"),of=gl("transitionend"),rf=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function Fe(t,e){rf.set(t,e),dl(e,[t])}var ki=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Le=[],Ql=0,Lc=0;function Vi(){for(var t=Ql,e=Lc=Ql=0;e<t;){var n=Le[e];Le[e++]=null;var l=Le[e];Le[e++]=null;var a=Le[e];Le[e++]=null;var u=Le[e];if(Le[e++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}u!==0&&sf(n,a,u)}}function Xi(t,e,n,l){Le[Ql++]=t,Le[Ql++]=e,Le[Ql++]=n,Le[Ql++]=l,Lc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Yc(t,e,n,l){return Xi(t,e,n,l),Qi(t)}function ml(t,e){return Xi(t,null,null,e),Qi(t)}function sf(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=t.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-we(n),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),u):null}function Qi(t){if(50<ri)throw ri=0,Io=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Zl={};function Rg(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(t,e,n,l){return new Rg(t,e,n,l)}function qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mn(t,e){var n=t.alternate;return n===null?(n=Oe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function ff(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zi(t,e,n,l,a,u){var o=0;if(l=t,typeof t=="function")qc(t)&&(o=1);else if(typeof t=="string")o=Bm(t,n,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case te:return t=Oe(31,n,e,a),t.elementType=te,t.lanes=u,t;case V:return yl(n.children,a,u,e);case P:o=8,a|=24;break;case X:return t=Oe(12,n,e,a|2),t.elementType=X,t.lanes=u,t;case at:return t=Oe(13,n,e,a),t.elementType=at,t.lanes=u,t;case I:return t=Oe(19,n,e,a),t.elementType=I,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:o=10;break t;case J:o=9;break t;case Z:o=11;break t;case $:o=14;break t;case Dt:o=16,l=null;break t}o=29,n=Error(s(130,t===null?"null":typeof t,"")),l=null}return e=Oe(o,n,e,a),e.elementType=t,e.type=l,e.lanes=u,e}function yl(t,e,n,l){return t=Oe(7,t,l,e),t.lanes=n,t}function kc(t,e,n){return t=Oe(6,t,null,e),t.lanes=n,t}function df(t){var e=Oe(18,null,null,0);return e.stateNode=t,e}function Vc(t,e,n){return e=Oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var hf=new WeakMap;function Ye(t,e){if(typeof t=="object"&&t!==null){var n=hf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:fs(e)},hf.set(t,e),e)}return{value:t,source:e,stack:fs(e)}}var Kl=[],Jl=0,Ki=null,qa=0,qe=[],ke=0,Bn=null,ln=1,an="";function yn(t,e){Kl[Jl++]=qa,Kl[Jl++]=Ki,Ki=t,qa=e}function pf(t,e,n){qe[ke++]=ln,qe[ke++]=an,qe[ke++]=Bn,Bn=t;var l=ln;t=an;var a=32-we(l)-1;l&=~(1<<a),n+=1;var u=32-we(e)+a;if(30<u){var o=a-a%5;u=(l&(1<<o)-1).toString(32),l>>=o,a-=o,ln=1<<32-we(e)+a|n<<a|l,an=u+t}else ln=1<<u|n<<a|l,an=t}function Xc(t){t.return!==null&&(yn(t,1),pf(t,1,0))}function Qc(t){for(;t===Ki;)Ki=Kl[--Jl],Kl[Jl]=null,qa=Kl[--Jl],Kl[Jl]=null;for(;t===Bn;)Bn=qe[--ke],qe[ke]=null,an=qe[--ke],qe[ke]=null,ln=qe[--ke],qe[ke]=null}function gf(t,e){qe[ke++]=ln,qe[ke++]=an,qe[ke++]=Bn,ln=e.id,an=e.overflow,Bn=t}var ue=null,Bt=null,mt=!1,$n=null,Ve=!1,Zc=Error(s(519));function Gn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ka(Ye(e,t)),Zc}function mf(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[ie]=t,e[ge]=l,n){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(n=0;n<fi.length;n++)dt(fi[n],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Cs(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),_s(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||Hh(e.textContent,n)?(l.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),l.onScroll!=null&&dt("scroll",e),l.onScrollEnd!=null&&dt("scrollend",e),l.onClick!=null&&(e.onclick=pn),e=!0):e=!1,e||Gn(t,!0)}function yf(t){for(ue=t.return;ue;)switch(ue.tag){case 5:case 31:case 13:Ve=!1;return;case 27:case 3:Ve=!0;return;default:ue=ue.return}}function Wl(t){if(t!==ue)return!1;if(!mt)return yf(t),mt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||dr(t.type,t.memoizedProps)),n=!n),n&&Bt&&Gn(t),yf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Bt=qh(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Bt=qh(t)}else e===27?(e=Bt,Pn(t.type)?(t=yr,yr=null,Bt=t):Bt=e):Bt=ue?Qe(t.stateNode.nextSibling):null;return!0}function vl(){Bt=ue=null,mt=!1}function Kc(){var t=$n;return t!==null&&(be===null?be=t:be.push.apply(be,t),$n=null),t}function ka(t){$n===null?$n=[t]:$n.push(t)}var Jc=m(null),xl=null,vn=null;function Ln(t,e,n){L(Jc,e._currentValue),e._currentValue=n}function xn(t){t._currentValue=Jc.current,_(Jc)}function Wc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Ic(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var o=a.child;u=u.firstContext;t:for(;u!==null;){var d=u;u=a;for(var p=0;p<e.length;p++)if(d.context===e[p]){u.lanes|=n,d=u.alternate,d!==null&&(d.lanes|=n),Wc(u.return,n,t),l||(o=null);break t}u=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(s(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Wc(o,n,t),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Il(t,e,n,l){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var d=a.type;Ce(a.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(a===gt.current){if(o=a.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(mi):t=[mi])}a=a.return}t!==null&&Ic(e,t,n,l),e.flags|=262144}function Ji(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bl(t){xl=t,vn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ce(t){return vf(xl,t)}function Wi(t,e){return xl===null&&bl(t),vf(t,e)}function vf(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},vn===null){if(t===null)throw Error(s(308));vn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else vn=vn.next=e;return n}var Hg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Ng=i.unstable_scheduleCallback,Dg=i.unstable_NormalPriority,Zt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fc(){return{controller:new Hg,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&Ng(Dg,function(){t.controller.abort()})}var Xa=null,Pc=0,Fl=0,Pl=null;function Ug(t,e){if(Xa===null){var n=Xa=[];Pc=0,Fl=lr(),Pl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Pc++,e.then(xf,xf),e}function xf(){if(--Pc===0&&Xa!==null){Pl!==null&&(Pl.status="fulfilled");var t=Xa;Xa=null,Fl=0,Pl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bg(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var bf=C.S;C.S=function(t,e){lh=ze(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ug(t,e),bf!==null&&bf(t,e)};var Sl=m(null);function to(){var t=Sl.current;return t!==null?t:Nt.pooledCache}function Ii(t,e){e===null?L(Sl,Sl.current):L(Sl,e.pool)}function Sf(){var t=to();return t===null?null:{parent:Zt._currentValue,pool:t}}var ta=Error(s(460)),eo=Error(s(474)),Fi=Error(s(542)),Pi={then:function(){}};function Ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jf(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(pn,pn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zf(t),t;default:if(typeof e.status=="string")e.then(pn,pn);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zf(t),t}throw jl=e,ta}}function El(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(jl=n,ta):n}}var jl=null;function Tf(){if(jl===null)throw Error(s(459));var t=jl;return jl=null,t}function zf(t){if(t===ta||t===Fi)throw Error(s(483))}var ea=null,Qa=0;function tu(t){var e=Qa;return Qa+=1,ea===null&&(ea=[]),jf(ea,t,e)}function Za(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function eu(t,e){throw e.$$typeof===U?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Af(t){function e(x,g){if(t){var S=x.deletions;S===null?(x.deletions=[g],x.flags|=16):S.push(g)}}function n(x,g){if(!t)return null;for(;g!==null;)e(x,g),g=g.sibling;return null}function l(x){for(var g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(x,g){return x=mn(x,g),x.index=0,x.sibling=null,x}function u(x,g,S){return x.index=S,t?(S=x.alternate,S!==null?(S=S.index,S<g?(x.flags|=67108866,g):S):(x.flags|=67108866,g)):(x.flags|=1048576,g)}function o(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function d(x,g,S,M){return g===null||g.tag!==6?(g=kc(S,x.mode,M),g.return=x,g):(g=a(g,S),g.return=x,g)}function p(x,g,S,M){var F=S.type;return F===V?O(x,g,S.props.children,M,S.key):g!==null&&(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Dt&&El(F)===g.type)?(g=a(g,S.props),Za(g,S),g.return=x,g):(g=Zi(S.type,S.key,S.props,null,x.mode,M),Za(g,S),g.return=x,g)}function E(x,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Vc(S,x.mode,M),g.return=x,g):(g=a(g,S.children||[]),g.return=x,g)}function O(x,g,S,M,F){return g===null||g.tag!==7?(g=yl(S,x.mode,M,F),g.return=x,g):(g=a(g,S),g.return=x,g)}function H(x,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=kc(""+g,x.mode,S),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return S=Zi(g.type,g.key,g.props,null,x.mode,S),Za(S,g),S.return=x,S;case W:return g=Vc(g,x.mode,S),g.return=x,g;case Dt:return g=El(g),H(x,g,S)}if(Ht(g)||ee(g))return g=yl(g,x.mode,S,null),g.return=x,g;if(typeof g.then=="function")return H(x,tu(g),S);if(g.$$typeof===Y)return H(x,Wi(x,g),S);eu(x,g)}return null}function z(x,g,S,M){var F=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return F!==null?null:d(x,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return S.key===F?p(x,g,S,M):null;case W:return S.key===F?E(x,g,S,M):null;case Dt:return S=El(S),z(x,g,S,M)}if(Ht(S)||ee(S))return F!==null?null:O(x,g,S,M,null);if(typeof S.then=="function")return z(x,g,tu(S),M);if(S.$$typeof===Y)return z(x,g,Wi(x,S),M);eu(x,S)}return null}function w(x,g,S,M,F){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return x=x.get(S)||null,d(g,x,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Q:return x=x.get(M.key===null?S:M.key)||null,p(g,x,M,F);case W:return x=x.get(M.key===null?S:M.key)||null,E(g,x,M,F);case Dt:return M=El(M),w(x,g,S,M,F)}if(Ht(M)||ee(M))return x=x.get(S)||null,O(g,x,M,F,null);if(typeof M.then=="function")return w(x,g,S,tu(M),F);if(M.$$typeof===Y)return w(x,g,S,Wi(g,M),F);eu(g,M)}return null}function k(x,g,S,M){for(var F=null,bt=null,K=g,ot=g=0,pt=null;K!==null&&ot<S.length;ot++){K.index>ot?(pt=K,K=null):pt=K.sibling;var St=z(x,K,S[ot],M);if(St===null){K===null&&(K=pt);break}t&&K&&St.alternate===null&&e(x,K),g=u(St,g,ot),bt===null?F=St:bt.sibling=St,bt=St,K=pt}if(ot===S.length)return n(x,K),mt&&yn(x,ot),F;if(K===null){for(;ot<S.length;ot++)K=H(x,S[ot],M),K!==null&&(g=u(K,g,ot),bt===null?F=K:bt.sibling=K,bt=K);return mt&&yn(x,ot),F}for(K=l(K);ot<S.length;ot++)pt=w(K,x,ot,S[ot],M),pt!==null&&(t&&pt.alternate!==null&&K.delete(pt.key===null?ot:pt.key),g=u(pt,g,ot),bt===null?F=pt:bt.sibling=pt,bt=pt);return t&&K.forEach(function(al){return e(x,al)}),mt&&yn(x,ot),F}function et(x,g,S,M){if(S==null)throw Error(s(151));for(var F=null,bt=null,K=g,ot=g=0,pt=null,St=S.next();K!==null&&!St.done;ot++,St=S.next()){K.index>ot?(pt=K,K=null):pt=K.sibling;var al=z(x,K,St.value,M);if(al===null){K===null&&(K=pt);break}t&&K&&al.alternate===null&&e(x,K),g=u(al,g,ot),bt===null?F=al:bt.sibling=al,bt=al,K=pt}if(St.done)return n(x,K),mt&&yn(x,ot),F;if(K===null){for(;!St.done;ot++,St=S.next())St=H(x,St.value,M),St!==null&&(g=u(St,g,ot),bt===null?F=St:bt.sibling=St,bt=St);return mt&&yn(x,ot),F}for(K=l(K);!St.done;ot++,St=S.next())St=w(K,x,ot,St.value,M),St!==null&&(t&&St.alternate!==null&&K.delete(St.key===null?ot:St.key),g=u(St,g,ot),bt===null?F=St:bt.sibling=St,bt=St);return t&&K.forEach(function(Km){return e(x,Km)}),mt&&yn(x,ot),F}function Rt(x,g,S,M){if(typeof S=="object"&&S!==null&&S.type===V&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:t:{for(var F=S.key;g!==null;){if(g.key===F){if(F=S.type,F===V){if(g.tag===7){n(x,g.sibling),M=a(g,S.props.children),M.return=x,x=M;break t}}else if(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Dt&&El(F)===g.type){n(x,g.sibling),M=a(g,S.props),Za(M,S),M.return=x,x=M;break t}n(x,g);break}else e(x,g);g=g.sibling}S.type===V?(M=yl(S.props.children,x.mode,M,S.key),M.return=x,x=M):(M=Zi(S.type,S.key,S.props,null,x.mode,M),Za(M,S),M.return=x,x=M)}return o(x);case W:t:{for(F=S.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(x,g.sibling),M=a(g,S.children||[]),M.return=x,x=M;break t}else{n(x,g);break}else e(x,g);g=g.sibling}M=Vc(S,x.mode,M),M.return=x,x=M}return o(x);case Dt:return S=El(S),Rt(x,g,S,M)}if(Ht(S))return k(x,g,S,M);if(ee(S)){if(F=ee(S),typeof F!="function")throw Error(s(150));return S=F.call(S),et(x,g,S,M)}if(typeof S.then=="function")return Rt(x,g,tu(S),M);if(S.$$typeof===Y)return Rt(x,g,Wi(x,S),M);eu(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(x,g.sibling),M=a(g,S),M.return=x,x=M):(n(x,g),M=kc(S,x.mode,M),M.return=x,x=M),o(x)):n(x,g)}return function(x,g,S,M){try{Qa=0;var F=Rt(x,g,S,M);return ea=null,F}catch(K){if(K===ta||K===Fi)throw K;var bt=Oe(29,K,null,x.mode);return bt.lanes=M,bt.return=x,bt}finally{}}}var Tl=Af(!0),wf=Af(!1),Yn=!1;function no(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(jt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Qi(t),sf(t,null,n),e}return Xi(t,l,e,n),Qi(t)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,ys(t,n)}}function ao(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?a=u=e:u=u.next=e}else a=u=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var io=!1;function Ja(){if(io){var t=Pl;if(t!==null)throw t}}function Wa(t,e,n,l){io=!1;var a=t.updateQueue;Yn=!1;var u=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var p=d,E=p.next;p.next=null,o===null?u=E:o.next=E,o=p;var O=t.alternate;O!==null&&(O=O.updateQueue,d=O.lastBaseUpdate,d!==o&&(d===null?O.firstBaseUpdate=E:d.next=E,O.lastBaseUpdate=p))}if(u!==null){var H=a.baseState;o=0,O=E=p=null,d=u;do{var z=d.lane&-536870913,w=z!==d.lane;if(w?(ht&z)===z:(l&z)===z){z!==0&&z===Fl&&(io=!0),O!==null&&(O=O.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var k=t,et=d;z=e;var Rt=n;switch(et.tag){case 1:if(k=et.payload,typeof k=="function"){H=k.call(Rt,H,z);break t}H=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=et.payload,z=typeof k=="function"?k.call(Rt,H,z):k,z==null)break t;H=N({},H,z);break t;case 2:Yn=!0}}z=d.callback,z!==null&&(t.flags|=64,w&&(t.flags|=8192),w=a.callbacks,w===null?a.callbacks=[z]:w.push(z))}else w={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},O===null?(E=O=w,p=H):O=O.next=w,o|=z;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;w=d,d=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);O===null&&(p=H),a.baseState=p,a.firstBaseUpdate=E,a.lastBaseUpdate=O,u===null&&(a.shared.lanes=0),Kn|=o,t.lanes=o,t.memoizedState=H}}function Cf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Of(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Cf(n[t],e)}var na=m(null),nu=m(0);function _f(t,e){t=Cn,L(nu,t),L(na,e),Cn=t|e.baseLanes}function uo(){L(nu,Cn),L(na,na.current)}function co(){Cn=nu.current,_(na),_(nu)}var _e=m(null),Xe=null;function Vn(t){var e=t.alternate;L(Xt,Xt.current&1),L(_e,t),Xe===null&&(e===null||na.current!==null||e.memoizedState!==null)&&(Xe=t)}function oo(t){L(Xt,Xt.current),L(_e,t),Xe===null&&(Xe=t)}function Mf(t){t.tag===22?(L(Xt,Xt.current),L(_e,t),Xe===null&&(Xe=t)):Xn()}function Xn(){L(Xt,Xt.current),L(_e,_e.current)}function Me(t){_(_e),Xe===t&&(Xe=null),_(Xt)}var Xt=m(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gr(n)||mr(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bn=0,ct=null,_t=null,Kt=null,au=!1,la=!1,zl=!1,iu=0,Ia=0,aa=null,$g=0;function qt(){throw Error(s(321))}function ro(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ce(t[n],e[n]))return!1;return!0}function so(t,e,n,l,a,u){return bn=u,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?pd:Ao,zl=!1,u=n(l,a),zl=!1,la&&(u=Hf(e,n,l,a)),Rf(t),u}function Rf(t){C.H=ti;var e=_t!==null&&_t.next!==null;if(bn=0,Kt=_t=ct=null,au=!1,Ia=0,aa=null,e)throw Error(s(300));t===null||Jt||(t=t.dependencies,t!==null&&Ji(t)&&(Jt=!0))}function Hf(t,e,n,l){ct=t;var a=0;do{if(la&&(aa=null),Ia=0,la=!1,25<=a)throw Error(s(301));if(a+=1,Kt=_t=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=gd,u=e(n,l)}while(la);return u}function Gg(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?Fa(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(ct.flags|=1024),e}function fo(){var t=iu!==0;return iu=0,t}function ho(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function po(t){if(au){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}au=!1}bn=0,Kt=_t=ct=null,la=!1,Ia=iu=0,aa=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?ct.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Qt(){if(_t===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Kt===null?ct.memoizedState:Kt.next;if(e!==null)Kt=e,_t=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Kt===null?ct.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(t){var e=Ia;return Ia+=1,aa===null&&(aa=[]),t=jf(aa,t,e),e=ct,(Kt===null?e.memoizedState:Kt.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?pd:Ao),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fa(t);if(t.$$typeof===Y)return ce(t)}throw Error(s(438,String(t)))}function go(t){var e=null,n=ct.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=uu(),ct.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=Ie;return e.index++,n}function Sn(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=Qt();return mo(e,_t,t)}function mo(t,e,n){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var o=a.next;a.next=u.next,u.next=o}e.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var d=o=null,p=null,E=e,O=!1;do{var H=E.lane&-536870913;if(H!==E.lane?(ht&H)===H:(bn&H)===H){var z=E.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),H===Fl&&(O=!0);else if((bn&z)===z){E=E.next,z===Fl&&(O=!0);continue}else H={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(d=p=H,o=u):p=p.next=H,ct.lanes|=z,Kn|=z;H=E.action,zl&&n(u,H),u=E.hasEagerState?E.eagerState:n(u,H)}else z={lane:H,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(d=p=z,o=u):p=p.next=z,ct.lanes|=H,Kn|=H;E=E.next}while(E!==null&&E!==e);if(p===null?o=u:p.next=d,!Ce(u,t.memoizedState)&&(Jt=!0,O&&(n=Pl,n!==null)))throw n;t.memoizedState=u,t.baseState=o,t.baseQueue=p,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yo(t){var e=Qt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,u=e.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do u=t(u,o.action),o=o.next;while(o!==a);Ce(u,e.memoizedState)||(Jt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,l]}function Nf(t,e,n){var l=ct,a=Qt(),u=mt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var o=!Ce((_t||a).memoizedState,n);if(o&&(a.memoizedState=n,Jt=!0),a=a.queue,bo(Bf.bind(null,l,a,t),[t]),a.getSnapshot!==e||o||Kt!==null&&Kt.memoizedState.tag&1){if(l.flags|=2048,ia(9,{destroy:void 0},Uf.bind(null,l,a,n,e),null),Nt===null)throw Error(s(349));u||(bn&127)!==0||Df(l,e,n)}return n}function Df(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e=uu(),ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uf(t,e,n,l){e.value=n,e.getSnapshot=l,$f(e)&&Gf(t)}function Bf(t,e,n){return n(function(){$f(e)&&Gf(t)})}function $f(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ce(t,n)}catch{return!0}}function Gf(t){var e=ml(t,2);e!==null&&Se(e,t,2)}function vo(t){var e=de();if(typeof t=="function"){var n=t;if(t=n(),zl){Nn(!0);try{n()}finally{Nn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:t},e}function Lf(t,e,n,l){return t.baseState=n,mo(t,_t,typeof l=="function"?l:Sn)}function Lg(t,e,n,l,a){if(fu(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};C.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,Yf(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Yf(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var u=C.T,o={};C.T=o;try{var d=n(a,l),p=C.S;p!==null&&p(o,d),qf(t,e,d)}catch(E){xo(t,e,E)}finally{u!==null&&o.types!==null&&(u.types=o.types),C.T=u}}else try{u=n(a,l),qf(t,e,u)}catch(E){xo(t,e,E)}}function qf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){kf(t,e,l)},function(l){return xo(t,e,l)}):kf(t,e,n)}function kf(t,e,n){e.status="fulfilled",e.value=n,Vf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Yf(t,n)))}function xo(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,Vf(e),e=e.next;while(e!==l)}t.action=null}function Vf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Xf(t,e){return e}function Qf(t,e){if(mt){var n=Nt.formState;if(n!==null){t:{var l=ct;if(mt){if(Bt){e:{for(var a=Bt,u=Ve;a.nodeType!==8;){if(!u){a=null;break e}if(a=Qe(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Bt=Qe(a.nextSibling),l=a.data==="F!";break t}}Gn(l)}l=!1}l&&(e=n[0])}}return n=de(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xf,lastRenderedState:e},n.queue=l,n=fd.bind(null,ct,l),l.dispatch=n,l=vo(!1),u=zo.bind(null,ct,!1,l.queue),l=de(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=Lg.bind(null,ct,a,u,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function Zf(t){var e=Qt();return Kf(e,_t,t)}function Kf(t,e,n){if(e=mo(t,e,Xf)[0],t=ou(Sn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Fa(e)}catch(o){throw o===ta?Fi:o}else l=e;e=Qt();var a=e.queue,u=a.dispatch;return n!==e.memoizedState&&(ct.flags|=2048,ia(9,{destroy:void 0},Yg.bind(null,a,n),null)),[l,u,t]}function Yg(t,e){t.action=e}function Jf(t){var e=Qt(),n=_t;if(n!==null)return Kf(e,n,t);Qt(),e=e.memoizedState,n=Qt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function ia(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=ct.updateQueue,e===null&&(e=uu(),ct.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function Wf(){return Qt().memoizedState}function ru(t,e,n,l){var a=de();ct.flags|=t,a.memoizedState=ia(1|e,{destroy:void 0},n,l===void 0?null:l)}function su(t,e,n,l){var a=Qt();l=l===void 0?null:l;var u=a.memoizedState.inst;_t!==null&&l!==null&&ro(l,_t.memoizedState.deps)?a.memoizedState=ia(e,u,n,l):(ct.flags|=t,a.memoizedState=ia(1|e,u,n,l))}function If(t,e){ru(8390656,8,t,e)}function bo(t,e){su(2048,8,t,e)}function qg(t){ct.flags|=4;var e=ct.updateQueue;if(e===null)e=uu(),ct.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Ff(t){var e=Qt().memoizedState;return qg({ref:e,nextImpl:t}),function(){if((jt&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Pf(t,e){return su(4,2,t,e)}function td(t,e){return su(4,4,t,e)}function ed(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,n){n=n!=null?n.concat([t]):null,su(4,4,ed.bind(null,e,t),n)}function So(){}function ld(t,e){var n=Qt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&ro(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function ad(t,e){var n=Qt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&ro(e,l[1]))return l[0];if(l=t(),zl){Nn(!0);try{t()}finally{Nn(!1)}}return n.memoizedState=[l,e],l}function Eo(t,e,n){return n===void 0||(bn&1073741824)!==0&&(ht&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=ih(),ct.lanes|=t,Kn|=t,n)}function id(t,e,n,l){return Ce(n,e)?n:na.current!==null?(t=Eo(t,n,l),Ce(t,e)||(Jt=!0),t):(bn&42)===0||(bn&1073741824)!==0&&(ht&261930)===0?(Jt=!0,t.memoizedState=n):(t=ih(),ct.lanes|=t,Kn|=t,e)}function ud(t,e,n,l,a){var u=B.p;B.p=u!==0&&8>u?u:8;var o=C.T,d={};C.T=d,zo(t,!1,e,n);try{var p=a(),E=C.S;if(E!==null&&E(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=Bg(p,l);Pa(t,e,O,Ne(t))}else Pa(t,e,l,Ne(t))}catch(H){Pa(t,e,{then:function(){},status:"rejected",reason:H},Ne())}finally{B.p=u,o!==null&&d.types!==null&&(o.types=d.types),C.T=o}}function kg(){}function jo(t,e,n,l){if(t.tag!==5)throw Error(s(476));var a=cd(t).queue;ud(t,a,e,tt,n===null?kg:function(){return od(t),n(l)})}function cd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:tt},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function od(t){var e=cd(t);e.next===null&&(e=t.alternate.memoizedState),Pa(t,e.next.queue,{},Ne())}function To(){return ce(mi)}function rd(){return Qt().memoizedState}function sd(){return Qt().memoizedState}function Vg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ne();t=qn(n);var l=kn(e,t,n);l!==null&&(Se(l,e,n),Ka(l,e,n)),e={cache:Fc()},t.payload=e;return}e=e.return}}function Xg(t,e,n){var l=Ne();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fu(t)?dd(e,n):(n=Yc(t,e,n,l),n!==null&&(Se(n,t,l),hd(n,e,l)))}function fd(t,e,n){var l=Ne();Pa(t,e,n,l)}function Pa(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fu(t))dd(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var o=e.lastRenderedState,d=u(o,n);if(a.hasEagerState=!0,a.eagerState=d,Ce(d,o))return Xi(t,e,a,0),Nt===null&&Vi(),!1}catch{}finally{}if(n=Yc(t,e,a,l),n!==null)return Se(n,t,l),hd(n,e,l),!0}return!1}function zo(t,e,n,l){if(l={lane:2,revertLane:lr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(e)throw Error(s(479))}else e=Yc(t,n,l,2),e!==null&&Se(e,t,2)}function fu(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function dd(t,e){la=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hd(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,ys(t,n)}}var ti={readContext:ce,use:cu,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};ti.useEffectEvent=qt;var pd={readContext:ce,use:cu,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:ce,useEffect:If,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,ru(4194308,4,ed.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ru(4194308,4,t,e)},useInsertionEffect:function(t,e){ru(4,2,t,e)},useMemo:function(t,e){var n=de();e=e===void 0?null:e;var l=t();if(zl){Nn(!0);try{t()}finally{Nn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=de();if(n!==void 0){var a=n(e);if(zl){Nn(!0);try{n(e)}finally{Nn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=Xg.bind(null,ct,t),[l.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=vo(t);var e=t.queue,n=fd.bind(null,ct,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:So,useDeferredValue:function(t,e){var n=de();return Eo(n,t,e)},useTransition:function(){var t=vo(!1);return t=ud.bind(null,ct,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=ct,a=de();if(mt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Nt===null)throw Error(s(349));(ht&127)!==0||Df(l,e,n)}a.memoizedState=n;var u={value:n,getSnapshot:e};return a.queue=u,If(Bf.bind(null,l,u,t),[t]),l.flags|=2048,ia(9,{destroy:void 0},Uf.bind(null,l,u,n,e),null),n},useId:function(){var t=de(),e=Nt.identifierPrefix;if(mt){var n=an,l=ln;n=(l&~(1<<32-we(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=iu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=$g++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:To,useFormState:Qf,useActionState:Qf,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=zo.bind(null,ct,!0,n),n.dispatch=e,[t,e]},useMemoCache:go,useCacheRefresh:function(){return de().memoizedState=Vg.bind(null,ct)},useEffectEvent:function(t){var e=de(),n={impl:t};return e.memoizedState=n,function(){if((jt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ao={readContext:ce,use:cu,useCallback:ld,useContext:ce,useEffect:bo,useImperativeHandle:nd,useInsertionEffect:Pf,useLayoutEffect:td,useMemo:ad,useReducer:ou,useRef:Wf,useState:function(){return ou(Sn)},useDebugValue:So,useDeferredValue:function(t,e){var n=Qt();return id(n,_t.memoizedState,t,e)},useTransition:function(){var t=ou(Sn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:Nf,useId:rd,useHostTransitionStatus:To,useFormState:Zf,useActionState:Zf,useOptimistic:function(t,e){var n=Qt();return Lf(n,_t,t,e)},useMemoCache:go,useCacheRefresh:sd};Ao.useEffectEvent=Ff;var gd={readContext:ce,use:cu,useCallback:ld,useContext:ce,useEffect:bo,useImperativeHandle:nd,useInsertionEffect:Pf,useLayoutEffect:td,useMemo:ad,useReducer:yo,useRef:Wf,useState:function(){return yo(Sn)},useDebugValue:So,useDeferredValue:function(t,e){var n=Qt();return _t===null?Eo(n,t,e):id(n,_t.memoizedState,t,e)},useTransition:function(){var t=yo(Sn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:Nf,useId:rd,useHostTransitionStatus:To,useFormState:Jf,useActionState:Jf,useOptimistic:function(t,e){var n=Qt();return _t!==null?Lf(n,_t,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:go,useCacheRefresh:sd};gd.useEffectEvent=Ff;function wo(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:N({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Co={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=Ne(),a=qn(l);a.payload=e,n!=null&&(a.callback=n),e=kn(t,a,l),e!==null&&(Se(e,t,l),Ka(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=Ne(),a=qn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=kn(t,a,l),e!==null&&(Se(e,t,l),Ka(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),l=qn(n);l.tag=2,e!=null&&(l.callback=e),e=kn(t,l,n),e!==null&&(Se(e,t,n),Ka(e,t,n))}};function md(t,e,n,l,a,u,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,l)||!La(a,u):!0}function yd(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Co.enqueueReplaceState(e,e.state,null)}function Al(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=N({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function vd(t){ki(t)}function xd(t){console.error(t)}function bd(t){ki(t)}function du(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Sd(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Oo(t,e,n){return n=qn(n),n.tag=3,n.payload={element:null},n.callback=function(){du(t,e)},n}function Ed(t){return t=qn(t),t.tag=3,t}function jd(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){Sd(e,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Sd(e,n,l),typeof a!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Qg(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&Il(e,n,a,!0),n=_e.current,n!==null){switch(n.tag){case 31:case 13:return Xe===null?Tu():n.alternate===null&&kt===0&&(kt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Pi?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),tr(t,l,a)),!1;case 22:return n.flags|=65536,l===Pi?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),tr(t,l,a)),!1}throw Error(s(435,n.tag))}return tr(t,l,a),Tu(),!1}if(mt)return e=_e.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Zc&&(t=Error(s(422),{cause:l}),ka(Ye(t,n)))):(l!==Zc&&(e=Error(s(423),{cause:l}),ka(Ye(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Ye(l,n),a=Oo(t.stateNode,l,a),ao(t,a),kt!==4&&(kt=2)),!1;var u=Error(s(520),{cause:l});if(u=Ye(u,n),oi===null?oi=[u]:oi.push(u),kt!==4&&(kt=2),e===null)return!0;l=Ye(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Oo(n.stateNode,l,t),ao(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Jn===null||!Jn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ed(a),jd(a,t,n,l),ao(n,a),!1}n=n.return}while(n!==null);return!1}var _o=Error(s(461)),Jt=!1;function oe(t,e,n,l){e.child=t===null?wf(e,null,n,l):Tl(e,t.child,n,l)}function Td(t,e,n,l,a){n=n.render;var u=e.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return bl(e),l=so(t,e,n,o,u,a),d=fo(),t!==null&&!Jt?(ho(t,e,a),En(t,e,a)):(mt&&d&&Xc(e),e.flags|=1,oe(t,e,l,a),e.child)}function zd(t,e,n,l,a){if(t===null){var u=n.type;return typeof u=="function"&&!qc(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Ad(t,e,u,l,a)):(t=Zi(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!$o(t,a)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,l)&&t.ref===e.ref)return En(t,e,a)}return e.flags|=1,t=mn(u,l),t.ref=e.ref,t.return=e,e.child=t}function Ad(t,e,n,l,a){if(t!==null){var u=t.memoizedProps;if(La(u,l)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=l=u,$o(t,a))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,En(t,e,a)}return Mo(t,e,n,l,a)}function wd(t,e,n,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return Cd(t,e,u,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ii(e,u!==null?u.cachePool:null),u!==null?_f(e,u):uo(),Mf(e);else return l=e.lanes=536870912,Cd(t,e,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Ii(e,u.cachePool),_f(e,u),Xn(),e.memoizedState=null):(t!==null&&Ii(e,null),uo(),Xn());return oe(t,e,a,n),e.child}function ei(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Cd(t,e,n,l,a){var u=to();return u=u===null?null:{parent:Zt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&Ii(e,null),uo(),Mf(e),t!==null&&Il(t,e,l,!0),e.childLanes=a,null}function hu(t,e){return e=gu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Od(t,e,n){return Tl(e,t.child,null,n),t=hu(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function Zg(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(mt){if(l.mode==="hidden")return t=hu(e,l),e.lanes=536870912,ei(null,t);if(oo(e),(t=Bt)?(t=Yh(t,Ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bn!==null?{id:ln,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=df(t),n.return=e,e.child=n,ue=e,Bt=null)):t=null,t===null)throw Gn(e);return e.lanes=536870912,null}return hu(e,l)}var u=t.memoizedState;if(u!==null){var o=u.dehydrated;if(oo(e),a)if(e.flags&256)e.flags&=-257,e=Od(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Jt||Il(t,e,n,!1),a=(n&t.childLanes)!==0,Jt||a){if(l=Nt,l!==null&&(o=vs(l,n),o!==0&&o!==u.retryLane))throw u.retryLane=o,ml(t,o),Se(l,t,o),_o;Tu(),e=Od(t,e,n)}else t=u.treeContext,Bt=Qe(o.nextSibling),ue=e,mt=!0,$n=null,Ve=!1,t!==null&&gf(e,t),e=hu(e,l),e.flags|=4096;return e}return t=mn(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function pu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Mo(t,e,n,l,a){return bl(e),n=so(t,e,n,l,void 0,a),l=fo(),t!==null&&!Jt?(ho(t,e,a),En(t,e,a)):(mt&&l&&Xc(e),e.flags|=1,oe(t,e,n,a),e.child)}function _d(t,e,n,l,a,u){return bl(e),e.updateQueue=null,n=Hf(e,l,n,a),Rf(t),l=fo(),t!==null&&!Jt?(ho(t,e,u),En(t,e,u)):(mt&&l&&Xc(e),e.flags|=1,oe(t,e,n,u),e.child)}function Md(t,e,n,l,a){if(bl(e),e.stateNode===null){var u=Zl,o=n.contextType;typeof o=="object"&&o!==null&&(u=ce(o)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Co,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},no(e),o=n.contextType,u.context=typeof o=="object"&&o!==null?ce(o):Zl,u.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(wo(e,n,o,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Co.enqueueReplaceState(u,u.state,null),Wa(e,l,u,a),Ja(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var d=e.memoizedProps,p=Al(n,d);u.props=p;var E=u.context,O=n.contextType;o=Zl,typeof O=="object"&&O!==null&&(o=ce(O));var H=n.getDerivedStateFromProps;O=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d||E!==o)&&yd(e,u,l,o),Yn=!1;var z=e.memoizedState;u.state=z,Wa(e,l,u,a),Ja(),E=e.memoizedState,d||z!==E||Yn?(typeof H=="function"&&(wo(e,n,H,l),E=e.memoizedState),(p=Yn||md(e,n,p,l,z,E,o))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=E),u.props=l,u.state=E,u.context=o,l=p):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,lo(t,e),o=e.memoizedProps,O=Al(n,o),u.props=O,H=e.pendingProps,z=u.context,E=n.contextType,p=Zl,typeof E=="object"&&E!==null&&(p=ce(E)),d=n.getDerivedStateFromProps,(E=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==H||z!==p)&&yd(e,u,l,p),Yn=!1,z=e.memoizedState,u.state=z,Wa(e,l,u,a),Ja();var w=e.memoizedState;o!==H||z!==w||Yn||t!==null&&t.dependencies!==null&&Ji(t.dependencies)?(typeof d=="function"&&(wo(e,n,d,l),w=e.memoizedState),(O=Yn||md(e,n,O,l,z,w,p)||t!==null&&t.dependencies!==null&&Ji(t.dependencies))?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,w,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,w,p)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=w),u.props=l,u.state=w,u.context=p,l=O):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,pu(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=Tl(e,t.child,null,a),e.child=Tl(e,null,n,a)):oe(t,e,n,a),e.memoizedState=u.state,t=e.child):t=En(t,e,a),t}function Rd(t,e,n,l){return vl(),e.flags|=256,oe(t,e,n,l),e.child}var Ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(t){return{baseLanes:t,cachePool:Sf()}}function No(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=He),t}function Hd(t,e,n){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=t!==null&&t.memoizedState===null?!1:(Xt.current&2)!==0),o&&(a=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(a?Vn(e):Xn(),(t=Bt)?(t=Yh(t,Ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bn!==null?{id:ln,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=df(t),n.return=e,e.child=n,ue=e,Bt=null)):t=null,t===null)throw Gn(e);return mr(t)?e.lanes=32:e.lanes=536870912,null}var d=l.children;return l=l.fallback,a?(Xn(),a=e.mode,d=gu({mode:"hidden",children:d},a),l=yl(l,a,n,null),d.return=e,l.return=e,d.sibling=l,e.child=d,l=e.child,l.memoizedState=Ho(n),l.childLanes=No(t,o,n),e.memoizedState=Ro,ei(null,l)):(Vn(e),Do(e,d))}var p=t.memoizedState;if(p!==null&&(d=p.dehydrated,d!==null)){if(u)e.flags&256?(Vn(e),e.flags&=-257,e=Uo(t,e,n)):e.memoizedState!==null?(Xn(),e.child=t.child,e.flags|=128,e=null):(Xn(),d=l.fallback,a=e.mode,l=gu({mode:"visible",children:l.children},a),d=yl(d,a,n,null),d.flags|=2,l.return=e,d.return=e,l.sibling=d,e.child=l,Tl(e,t.child,null,n),l=e.child,l.memoizedState=Ho(n),l.childLanes=No(t,o,n),e.memoizedState=Ro,e=ei(null,l));else if(Vn(e),mr(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var E=o.dgst;o=E,l=Error(s(419)),l.stack="",l.digest=o,ka({value:l,source:null,stack:null}),e=Uo(t,e,n)}else if(Jt||Il(t,e,n,!1),o=(n&t.childLanes)!==0,Jt||o){if(o=Nt,o!==null&&(l=vs(o,n),l!==0&&l!==p.retryLane))throw p.retryLane=l,ml(t,l),Se(o,t,l),_o;gr(d)||Tu(),e=Uo(t,e,n)}else gr(d)?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Bt=Qe(d.nextSibling),ue=e,mt=!0,$n=null,Ve=!1,t!==null&&gf(e,t),e=Do(e,l.children),e.flags|=4096);return e}return a?(Xn(),d=l.fallback,a=e.mode,p=t.child,E=p.sibling,l=mn(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?d=mn(E,d):(d=yl(d,a,n,null),d.flags|=2),d.return=e,l.return=e,l.sibling=d,e.child=l,ei(null,l),l=e.child,d=t.child.memoizedState,d===null?d=Ho(n):(a=d.cachePool,a!==null?(p=Zt._currentValue,a=a.parent!==p?{parent:p,pool:p}:a):a=Sf(),d={baseLanes:d.baseLanes|n,cachePool:a}),l.memoizedState=d,l.childLanes=No(t,o,n),e.memoizedState=Ro,ei(t.child,l)):(Vn(e),n=t.child,t=n.sibling,n=mn(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function Do(t,e){return e=gu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function gu(t,e){return t=Oe(22,t,null,e),t.lanes=0,t}function Uo(t,e,n){return Tl(e,t.child,null,n),t=Do(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nd(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Wc(t.return,e,n)}function Bo(t,e,n,l,a,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=u)}function Dd(t,e,n){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var o=Xt.current,d=(o&2)!==0;if(d?(o=o&1|2,e.flags|=128):o&=1,L(Xt,o),oe(t,e,l,n),l=mt?qa:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nd(t,n,e);else if(t.tag===19)Nd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Bo(e,!1,a,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&lu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Bo(e,!0,n,null,u,l);break;case"together":Bo(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Il(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $o(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ji(t)))}function Kg(t,e,n){switch(e.tag){case 3:Vt(e,e.stateNode.containerInfo),Ln(e,Zt,t.memoizedState.cache),vl();break;case 27:case 5:fn(e);break;case 4:Vt(e,e.stateNode.containerInfo);break;case 10:Ln(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,oo(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Vn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Hd(t,e,n):(Vn(e),t=En(t,e,n),t!==null?t.sibling:null);Vn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(Il(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return Dd(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(Xt,Xt.current),l)break;return null;case 22:return e.lanes=0,wd(t,e,n,e.pendingProps);case 24:Ln(e,Zt,t.memoizedState.cache)}return En(t,e,n)}function Ud(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!$o(t,n)&&(e.flags&128)===0)return Jt=!1,Kg(t,e,n);Jt=(t.flags&131072)!==0}else Jt=!1,mt&&(e.flags&1048576)!==0&&pf(e,qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=El(e.elementType),e.type=t,typeof t=="function")qc(t)?(l=Al(t,l),e.tag=1,e=Md(null,e,t,l,n)):(e.tag=0,e=Mo(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===Z){e.tag=11,e=Td(null,e,t,l,n);break t}else if(a===$){e.tag=14,e=zd(null,e,t,l,n);break t}}throw e=Yt(t)||t,Error(s(306,e,""))}}return e;case 0:return Mo(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=Al(l,e.pendingProps),Md(t,e,l,a,n);case 3:t:{if(Vt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,lo(t,e),Wa(e,l,null,n);var o=e.memoizedState;if(l=o.cache,Ln(e,Zt,l),l!==u.cache&&Ic(e,[Zt],n,!0),Ja(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Rd(t,e,l,n);break t}else if(l!==a){a=Ye(Error(s(424)),e),ka(a),e=Rd(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Bt=Qe(t.firstChild),ue=e,mt=!0,$n=null,Ve=!0,n=wf(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(vl(),l===a){e=En(t,e,n);break t}oe(t,e,l,n)}e=e.child}return e;case 26:return pu(t,e),t===null?(n=Zh(e.type,null,e.pendingProps,null))?e.memoizedState=n:mt||(n=e.type,t=e.pendingProps,l=Mu(ut.current).createElement(n),l[ie]=e,l[ge]=t,re(l,n,t),ne(l),e.stateNode=l):e.memoizedState=Zh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return fn(e),t===null&&mt&&(l=e.stateNode=Vh(e.type,e.pendingProps,ut.current),ue=e,Ve=!0,a=Bt,Pn(e.type)?(yr=a,Bt=Qe(l.firstChild)):Bt=a),oe(t,e,e.pendingProps.children,n),pu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((a=l=Bt)&&(l=Tm(l,e.type,e.pendingProps,Ve),l!==null?(e.stateNode=l,ue=e,Bt=Qe(l.firstChild),Ve=!1,a=!0):a=!1),a||Gn(e)),fn(e),a=e.type,u=e.pendingProps,o=t!==null?t.memoizedProps:null,l=u.children,dr(a,u)?l=null:o!==null&&dr(a,o)&&(e.flags|=32),e.memoizedState!==null&&(a=so(t,e,Gg,null,null,n),mi._currentValue=a),pu(t,e),oe(t,e,l,n),e.child;case 6:return t===null&&mt&&((t=n=Bt)&&(n=zm(n,e.pendingProps,Ve),n!==null?(e.stateNode=n,ue=e,Bt=null,t=!0):t=!1),t||Gn(e)),null;case 13:return Hd(t,e,n);case 4:return Vt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Tl(e,null,l,n):oe(t,e,l,n),e.child;case 11:return Td(t,e,e.type,e.pendingProps,n);case 7:return oe(t,e,e.pendingProps,n),e.child;case 8:return oe(t,e,e.pendingProps.children,n),e.child;case 12:return oe(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,Ln(e,e.type,l.value),oe(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,bl(e),a=ce(a),l=l(a),e.flags|=1,oe(t,e,l,n),e.child;case 14:return zd(t,e,e.type,e.pendingProps,n);case 15:return Ad(t,e,e.type,e.pendingProps,n);case 19:return Dd(t,e,n);case 31:return Zg(t,e,n);case 22:return wd(t,e,n,e.pendingProps);case 24:return bl(e),l=ce(Zt),t===null?(a=to(),a===null&&(a=Nt,u=Fc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),e.memoizedState={parent:l,cache:a},no(e),Ln(e,Zt,a)):((t.lanes&n)!==0&&(lo(t,e),Wa(e,null,null,n),Ja()),a=t.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Ln(e,Zt,l)):(l=u.cache,Ln(e,Zt,l),l!==a.cache&&Ic(e,[Zt],n,!0))),oe(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function jn(t){t.flags|=4}function Go(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(rh())t.flags|=8192;else throw jl=Pi,eo}else t.flags&=-16777217}function Bd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fh(e))if(rh())t.flags|=8192;else throw jl=Pi,eo}function mu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?gs():536870912,t.lanes|=e,ra|=e)}function ni(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Jg(t,e,n){var l=e.pendingProps;switch(Qc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return $t(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),xn(Zt),At(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?jn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Kc())),$t(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(jn(e),u!==null?($t(e),Bd(e,u)):($t(e),Go(e,a,null,l,n))):u?u!==t.memoizedState?(jn(e),$t(e),Bd(e,u)):($t(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&jn(e),$t(e),Go(e,a,t,l,n)),null;case 27:if(dn(e),n=ut.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&jn(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return $t(e),null}t=q.current,Wl(e)?mf(e):(t=Vh(a,l,n),e.stateNode=t,jn(e))}return $t(e),null;case 5:if(dn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&jn(e);else{if(!l){if(e.stateNode===null)throw Error(s(166));return $t(e),null}if(u=q.current,Wl(e))mf(e);else{var o=Mu(ut.current);switch(u){case 1:u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=o.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}u[ie]=e,u[ge]=l;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)u.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=u;t:switch(re(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&jn(e)}}return $t(e),Go(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&jn(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(s(166));if(t=ut.current,Wl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=ue,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[ie]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Hh(t.nodeValue,n)),t||Gn(e,!0)}else t=Mu(t).createTextNode(l),t[ie]=e,e.stateNode=t}return $t(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Wl(e),n!==null){if(t===null){if(!l)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ie]=e}else vl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;$t(e),t=!1}else n=Kc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(s(558))}return $t(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Wl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[ie]=e}else vl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;$t(e),a=!1}else a=Kc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),mu(e,e.updateQueue),$t(e),null);case 4:return At(),t===null&&cr(e.stateNode.containerInfo),$t(e),null;case 10:return xn(e.type),$t(e),null;case 19:if(_(Xt),l=e.memoizedState,l===null)return $t(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)ni(l,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=lu(t),u!==null){for(e.flags|=128,ni(l,!1),t=u.updateQueue,e.updateQueue=t,mu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)ff(n,t),n=n.sibling;return L(Xt,Xt.current&1|2),mt&&yn(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ze()>Su&&(e.flags|=128,a=!0,ni(l,!1),e.lanes=4194304)}else{if(!a)if(t=lu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,mu(e,t),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!mt)return $t(e),null}else 2*ze()-l.renderingStartTime>Su&&n!==536870912&&(e.flags|=128,a=!0,ni(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ze(),t.sibling=null,n=Xt.current,L(Xt,a?n&1|2:n&1),mt&&yn(e,l.treeForkCount),t):($t(e),null);case 22:case 23:return Me(e),co(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),n=e.updateQueue,n!==null&&mu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&_(Sl),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),xn(Zt),$t(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Wg(t,e){switch(Qc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xn(Zt),At(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dn(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(s(340));vl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));vl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(Xt),null;case 4:return At(),null;case 10:return xn(e.type),null;case 22:case 23:return Me(e),co(),t!==null&&_(Sl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return xn(Zt),null;case 25:return null;default:return null}}function $d(t,e){switch(Qc(e),e.tag){case 3:xn(Zt),At();break;case 26:case 27:case 5:dn(e);break;case 4:At();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:_(Xt);break;case 10:xn(e.type);break;case 22:case 23:Me(e),co(),t!==null&&_(Sl);break;case 24:xn(Zt)}}function li(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var u=n.create,o=n.inst;l=u(),o.destroy=l}n=n.next}while(n!==a)}}catch(d){Ct(e,e.return,d)}}function Qn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=e;var p=n,E=d;try{E()}catch(O){Ct(a,p,O)}}}l=l.next}while(l!==u)}}catch(O){Ct(e,e.return,O)}}function Gd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Of(e,n)}catch(l){Ct(t,t.return,l)}}}function Ld(t,e,n){n.props=Al(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){Ct(t,e,l)}}function ai(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){Ct(t,e,a)}}function un(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Ct(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ct(t,e,a)}else n.current=null}function Yd(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Ct(t,t.return,a)}}function Lo(t,e,n){try{var l=t.stateNode;vm(l,t.type,n,e),l[ge]=e}catch(a){Ct(t,t.return,a)}}function qd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pn(t.type)||t.tag===4}function Yo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qo(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pn));else if(l!==4&&(l===27&&Pn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(qo(t,e,n),t=t.sibling;t!==null;)qo(t,e,n),t=t.sibling}function yu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&Pn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}function kd(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);re(e,l,n),e[ie]=t,e[ge]=n}catch(u){Ct(t,t.return,u)}}var Tn=!1,Wt=!1,ko=!1,Vd=typeof WeakSet=="function"?WeakSet:Set,le=null;function Ig(t,e){if(t=t.containerInfo,sr=$u,t=ef(t),Dc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var o=0,d=-1,p=-1,E=0,O=0,H=t,z=null;e:for(;;){for(var w;H!==n||a!==0&&H.nodeType!==3||(d=o+a),H!==u||l!==0&&H.nodeType!==3||(p=o+l),H.nodeType===3&&(o+=H.nodeValue.length),(w=H.firstChild)!==null;)z=H,H=w;for(;;){if(H===t)break e;if(z===n&&++E===a&&(d=o),z===u&&++O===l&&(p=o),(w=H.nextSibling)!==null)break;H=z,z=H.parentNode}H=w}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(fr={focusedElem:t,selectionRange:n},$u=!1,le=e;le!==null;)if(e=le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,le=t;else for(;le!==null;){switch(e=le,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var k=Al(n.type,a);t=l.getSnapshotBeforeUpdate(k,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){Ct(n,n.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)pr(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function Xd(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:An(t,n),l&4&&li(5,n);break;case 1:if(An(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){Ct(n,n.return,o)}else{var a=Al(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){Ct(n,n.return,o)}}l&64&&Gd(n),l&512&&ai(n,n.return);break;case 3:if(An(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Of(t,e)}catch(o){Ct(n,n.return,o)}}break;case 27:e===null&&l&4&&kd(n);case 26:case 5:An(t,n),e===null&&l&4&&Yd(n),l&512&&ai(n,n.return);break;case 12:An(t,n);break;case 31:An(t,n),l&4&&Kd(t,n);break;case 13:An(t,n),l&4&&Jd(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=um.bind(null,n),Am(t,n))));break;case 22:if(l=n.memoizedState!==null||Tn,!l){e=e!==null&&e.memoizedState!==null||Wt,a=Tn;var u=Wt;Tn=l,(Wt=e)&&!u?wn(t,n,(n.subtreeFlags&8772)!==0):An(t,n),Tn=a,Wt=u}break;case 30:break;default:An(t,n)}}function Qd(t){var e=t.alternate;e!==null&&(t.alternate=null,Qd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Lt=null,ye=!1;function zn(t,e,n){for(n=n.child;n!==null;)Zd(t,e,n),n=n.sibling}function Zd(t,e,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 26:Wt||un(n,e),zn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Wt||un(n,e);var l=Lt,a=ye;Pn(n.type)&&(Lt=n.stateNode,ye=!1),zn(t,e,n),hi(n.stateNode),Lt=l,ye=a;break;case 5:Wt||un(n,e);case 6:if(l=Lt,a=ye,Lt=null,zn(t,e,n),Lt=l,ye=a,Lt!==null)if(ye)try{(Lt.nodeType===9?Lt.body:Lt.nodeName==="HTML"?Lt.ownerDocument.body:Lt).removeChild(n.stateNode)}catch(u){Ct(n,e,u)}else try{Lt.removeChild(n.stateNode)}catch(u){Ct(n,e,u)}break;case 18:Lt!==null&&(ye?(t=Lt,Gh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ya(t)):Gh(Lt,n.stateNode));break;case 4:l=Lt,a=ye,Lt=n.stateNode.containerInfo,ye=!0,zn(t,e,n),Lt=l,ye=a;break;case 0:case 11:case 14:case 15:Qn(2,n,e),Wt||Qn(4,n,e),zn(t,e,n);break;case 1:Wt||(un(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ld(n,e,l)),zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:Wt=(l=Wt)||n.memoizedState!==null,zn(t,e,n),Wt=l;break;default:zn(t,e,n)}}function Kd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ya(t)}catch(n){Ct(e,e.return,n)}}}function Jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ya(t)}catch(n){Ct(e,e.return,n)}}function Fg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Vd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Vd),e;default:throw Error(s(435,t.tag))}}function vu(t,e){var n=Fg(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=cm.bind(null,t,l);l.then(a,a)}})}function ve(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=t,o=e,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Pn(d.type)){Lt=d.stateNode,ye=!1;break t}break;case 5:Lt=d.stateNode,ye=!1;break t;case 3:case 4:Lt=d.stateNode.containerInfo,ye=!0;break t}d=d.return}if(Lt===null)throw Error(s(160));Zd(u,o,a),Lt=null,ye=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Wd(e,t),e=e.sibling}var Pe=null;function Wd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ve(e,t),xe(t),l&4&&(Qn(3,t,t.return),li(3,t),Qn(5,t,t.return));break;case 1:ve(e,t),xe(t),l&512&&(Wt||n===null||un(n,n.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Pe;if(ve(e,t),xe(t),l&512&&(Wt||n===null||un(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Ma]||u[ie]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),re(u,l,n),u[ie]=t,ne(u),l=u;break t;case"link":var o=Wh("link","href",a).get(l+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(u=o[d],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break e}}u=a.createElement(l),re(u,l,n),a.head.appendChild(u);break;case"meta":if(o=Wh("meta","content",a).get(l+(n.content||""))){for(d=0;d<o.length;d++)if(u=o[d],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break e}}u=a.createElement(l),re(u,l,n),a.head.appendChild(u);break;default:throw Error(s(468,l))}u[ie]=t,ne(u),l=u}t.stateNode=l}else Ih(a,t.type,t.stateNode);else t.stateNode=Jh(a,l,t.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Ih(a,t.type,t.stateNode):Jh(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Lo(t,t.memoizedProps,n.memoizedProps)}break;case 27:ve(e,t),xe(t),l&512&&(Wt||n===null||un(n,n.return)),n!==null&&l&4&&Lo(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ve(e,t),xe(t),l&512&&(Wt||n===null||un(n,n.return)),t.flags&32){a=t.stateNode;try{Ll(a,"")}catch(k){Ct(t,t.return,k)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Lo(t,a,n!==null?n.memoizedProps:a)),l&1024&&(ko=!0);break;case 6:if(ve(e,t),xe(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(k){Ct(t,t.return,k)}}break;case 3:if(Nu=null,a=Pe,Pe=Ru(e.containerInfo),ve(e,t),Pe=a,xe(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(k){Ct(t,t.return,k)}ko&&(ko=!1,Id(t));break;case 4:l=Pe,Pe=Ru(t.stateNode.containerInfo),ve(e,t),xe(t),Pe=l;break;case 12:ve(e,t),xe(t);break;case 31:ve(e,t),xe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vu(t,l)));break;case 13:ve(e,t),xe(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bu=ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vu(t,l)));break;case 22:a=t.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,E=Tn,O=Wt;if(Tn=E||a,Wt=O||p,ve(e,t),Wt=O,Tn=E,xe(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||p||Tn||Wt||wl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){p=n=e;try{if(u=p.stateNode,a)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=p.stateNode;var H=p.memoizedProps.style,z=H!=null&&H.hasOwnProperty("display")?H.display:null;d.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(k){Ct(p,p.return,k)}}}else if(e.tag===6){if(n===null){p=e;try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(k){Ct(p,p.return,k)}}}else if(e.tag===18){if(n===null){p=e;try{var w=p.stateNode;a?Lh(w,!0):Lh(p.stateNode,!1)}catch(k){Ct(p,p.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,vu(t,n))));break;case 19:ve(e,t),xe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vu(t,l)));break;case 30:break;case 21:break;default:ve(e,t),xe(t)}}function xe(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(qd(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,u=Yo(t);yu(t,u,a);break;case 5:var o=n.stateNode;n.flags&32&&(Ll(o,""),n.flags&=-33);var d=Yo(t);yu(t,d,o);break;case 3:case 4:var p=n.stateNode.containerInfo,E=Yo(t);qo(t,E,p);break;default:throw Error(s(161))}}catch(O){Ct(t,t.return,O)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Id(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Id(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function An(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Xd(t,e.alternate,e),e=e.sibling}function wl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Qn(4,e,e.return),wl(e);break;case 1:un(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ld(e,e.return,n),wl(e);break;case 27:hi(e.stateNode);case 26:case 5:un(e,e.return),wl(e);break;case 22:e.memoizedState===null&&wl(e);break;case 30:wl(e);break;default:wl(e)}t=t.sibling}}function wn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,u=e,o=u.flags;switch(u.tag){case 0:case 11:case 15:wn(a,u,n),li(4,u);break;case 1:if(wn(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){Ct(l,l.return,E)}if(l=u,a=l.updateQueue,a!==null){var d=l.stateNode;try{var p=a.shared.hiddenCallbacks;if(p!==null)for(a.shared.hiddenCallbacks=null,a=0;a<p.length;a++)Cf(p[a],d)}catch(E){Ct(l,l.return,E)}}n&&o&64&&Gd(u),ai(u,u.return);break;case 27:kd(u);case 26:case 5:wn(a,u,n),n&&l===null&&o&4&&Yd(u),ai(u,u.return);break;case 12:wn(a,u,n);break;case 31:wn(a,u,n),n&&o&4&&Kd(a,u);break;case 13:wn(a,u,n),n&&o&4&&Jd(a,u);break;case 22:u.memoizedState===null&&wn(a,u,n),ai(u,u.return);break;case 30:break;default:wn(a,u,n)}e=e.sibling}}function Vo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Va(n))}function Xo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t))}function tn(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(t,e,n,l),e=e.sibling}function Fd(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:tn(t,e,n,l),a&2048&&li(9,e);break;case 1:tn(t,e,n,l);break;case 3:tn(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t)));break;case 12:if(a&2048){tn(t,e,n,l),t=e.stateNode;try{var u=e.memoizedProps,o=u.id,d=u.onPostCommit;typeof d=="function"&&d(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Ct(e,e.return,p)}}else tn(t,e,n,l);break;case 31:tn(t,e,n,l);break;case 13:tn(t,e,n,l);break;case 23:break;case 22:u=e.stateNode,o=e.alternate,e.memoizedState!==null?u._visibility&2?tn(t,e,n,l):ii(t,e):u._visibility&2?tn(t,e,n,l):(u._visibility|=2,ua(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Vo(o,e);break;case 24:tn(t,e,n,l),a&2048&&Xo(e.alternate,e);break;default:tn(t,e,n,l)}}function ua(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,o=e,d=n,p=l,E=o.flags;switch(o.tag){case 0:case 11:case 15:ua(u,o,d,p,a),li(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?ua(u,o,d,p,a):ii(u,o):(O._visibility|=2,ua(u,o,d,p,a)),a&&E&2048&&Vo(o.alternate,o);break;case 24:ua(u,o,d,p,a),a&&E&2048&&Xo(o.alternate,o);break;default:ua(u,o,d,p,a)}e=e.sibling}}function ii(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:ii(n,l),a&2048&&Vo(l.alternate,l);break;case 24:ii(n,l),a&2048&&Xo(l.alternate,l);break;default:ii(n,l)}e=e.sibling}}var ui=8192;function ca(t,e,n){if(t.subtreeFlags&ui)for(t=t.child;t!==null;)Pd(t,e,n),t=t.sibling}function Pd(t,e,n){switch(t.tag){case 26:ca(t,e,n),t.flags&ui&&t.memoizedState!==null&&$m(n,Pe,t.memoizedState,t.memoizedProps);break;case 5:ca(t,e,n);break;case 3:case 4:var l=Pe;Pe=Ru(t.stateNode.containerInfo),ca(t,e,n),Pe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ui,ui=16777216,ca(t,e,n),ui=l):ca(t,e,n));break;default:ca(t,e,n)}}function th(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ci(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];le=l,nh(l,t)}th(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eh(t),t=t.sibling}function eh(t){switch(t.tag){case 0:case 11:case 15:ci(t),t.flags&2048&&Qn(9,t,t.return);break;case 3:ci(t);break;case 12:ci(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xu(t)):ci(t);break;default:ci(t)}}function xu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];le=l,nh(l,t)}th(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Qn(8,e,e.return),xu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,xu(e));break;default:xu(e)}t=t.sibling}}function nh(t,e){for(;le!==null;){var n=le;switch(n.tag){case 0:case 11:case 15:Qn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Va(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,le=l;else t:for(n=t;le!==null;){l=le;var a=l.sibling,u=l.return;if(Qd(l),l===n){le=null;break t}if(a!==null){a.return=u,le=a;break t}le=u}}}var Pg={getCacheForType:function(t){var e=ce(Zt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ce(Zt).controller.signal}},tm=typeof WeakMap=="function"?WeakMap:Map,jt=0,Nt=null,ft=null,ht=0,wt=0,Re=null,Zn=!1,oa=!1,Qo=!1,Cn=0,kt=0,Kn=0,Cl=0,Zo=0,He=0,ra=0,oi=null,be=null,Ko=!1,bu=0,lh=0,Su=1/0,Eu=null,Jn=null,Ft=0,Wn=null,sa=null,On=0,Jo=0,Wo=null,ah=null,ri=0,Io=null;function Ne(){return(jt&2)!==0&&ht!==0?ht&-ht:C.T!==null?lr():xs()}function ih(){if(He===0)if((ht&536870912)===0||mt){var t=_i;_i<<=1,(_i&3932160)===0&&(_i=262144),He=t}else He=536870912;return t=_e.current,t!==null&&(t.flags|=32),He}function Se(t,e,n){(t===Nt&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(fa(t,0),In(t,ht,He,!1)),_a(t,n),((jt&2)===0||t!==Nt)&&(t===Nt&&((jt&2)===0&&(Cl|=n),kt===4&&In(t,ht,He,!1)),cn(t))}function uh(t,e,n){if((jt&6)!==0)throw Error(s(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Oa(t,e),a=l?lm(t,e):Po(t,e,!0),u=l;do{if(a===0){oa&&!l&&In(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!em(n)){a=Po(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var d=t;a=oi;var p=d.current.memoizedState.isDehydrated;if(p&&(fa(d,o).flags|=256),o=Po(d,o,!1),o!==2){if(Qo&&!p){d.errorRecoveryDisabledLanes|=u,Cl|=u,a=4;break t}u=be,be=a,u!==null&&(be===null?be=u:be.push.apply(be,u))}a=o}if(u=!1,a!==2)continue}}if(a===1){fa(t,0),In(t,e,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:In(l,e,He,!Zn);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(a=bu+300-ze(),10<a)){if(In(l,e,He,!Zn),Ri(l,0,!0)!==0)break t;On=e,l.timeoutHandle=Bh(ch.bind(null,l,n,be,Eu,Ko,e,He,Cl,ra,Zn,u,"Throttled",-0,0),a);break t}ch(l,n,be,Eu,Ko,e,He,Cl,ra,Zn,u,null,-0,0)}}break}while(!0);cn(t)}function ch(t,e,n,l,a,u,o,d,p,E,O,H,z,w){if(t.timeoutHandle=-1,H=e.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},Pd(e,u,H);var k=(u&62914560)===u?bu-ze():(u&4194048)===u?lh-ze():0;if(k=Gm(H,k),k!==null){On=u,t.cancelPendingCommit=k(gh.bind(null,t,e,u,n,l,a,o,d,p,O,H,null,z,w)),In(t,u,o,!E);return}}gh(t,e,u,n,l,a,o,d,p)}function em(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!Ce(u(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e,n,l){e&=~Zo,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var u=31-we(a),o=1<<u;l[u]=-1,a&=~o}n!==0&&ms(t,n,e)}function ju(){return(jt&6)===0?(si(0),!1):!0}function Fo(){if(ft!==null){if(wt===0)var t=ft.return;else t=ft,vn=xl=null,po(t),ea=null,Qa=0,t=ft;for(;t!==null;)$d(t.alternate,t),t=t.return;ft=null}}function fa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Sm(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),On=0,Fo(),Nt=t,ft=n=mn(t.current,null),ht=e,wt=0,Re=null,Zn=!1,oa=Oa(t,e),Qo=!1,ra=He=Zo=Cl=Kn=kt=0,be=oi=null,Ko=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-we(l),u=1<<a;e|=t[a],l&=~u}return Cn=e,Vi(),n}function oh(t,e){ct=null,C.H=ti,e===ta||e===Fi?(e=Tf(),wt=3):e===eo?(e=Tf(),wt=4):wt=e===_o?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,ft===null&&(kt=1,du(t,Ye(e,t.current)))}function rh(){var t=_e.current;return t===null?!0:(ht&4194048)===ht?Xe===null:(ht&62914560)===ht||(ht&536870912)!==0?t===Xe:!1}function sh(){var t=C.H;return C.H=ti,t===null?ti:t}function fh(){var t=C.A;return C.A=Pg,t}function Tu(){kt=4,Zn||(ht&4194048)!==ht&&_e.current!==null||(oa=!0),(Kn&134217727)===0&&(Cl&134217727)===0||Nt===null||In(Nt,ht,He,!1)}function Po(t,e,n){var l=jt;jt|=2;var a=sh(),u=fh();(Nt!==t||ht!==e)&&(Eu=null,fa(t,e)),e=!1;var o=kt;t:do try{if(wt!==0&&ft!==null){var d=ft,p=Re;switch(wt){case 8:Fo(),o=6;break t;case 3:case 2:case 9:case 6:_e.current===null&&(e=!0);var E=wt;if(wt=0,Re=null,da(t,d,p,E),n&&oa){o=0;break t}break;default:E=wt,wt=0,Re=null,da(t,d,p,E)}}nm(),o=kt;break}catch(O){oh(t,O)}while(!0);return e&&t.shellSuspendCounter++,vn=xl=null,jt=l,C.H=a,C.A=u,ft===null&&(Nt=null,ht=0,Vi()),o}function nm(){for(;ft!==null;)dh(ft)}function lm(t,e){var n=jt;jt|=2;var l=sh(),a=fh();Nt!==t||ht!==e?(Eu=null,Su=ze()+500,fa(t,e)):oa=Oa(t,e);t:do try{if(wt!==0&&ft!==null){e=ft;var u=Re;e:switch(wt){case 1:wt=0,Re=null,da(t,e,u,1);break;case 2:case 9:if(Ef(u)){wt=0,Re=null,hh(e);break}e=function(){wt!==2&&wt!==9||Nt!==t||(wt=7),cn(t)},u.then(e,e);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:Ef(u)?(wt=0,Re=null,hh(e)):(wt=0,Re=null,da(t,e,u,7));break;case 5:var o=null;switch(ft.tag){case 26:o=ft.memoizedState;case 5:case 27:var d=ft;if(o?Fh(o):d.stateNode.complete){wt=0,Re=null;var p=d.sibling;if(p!==null)ft=p;else{var E=d.return;E!==null?(ft=E,zu(E)):ft=null}break e}}wt=0,Re=null,da(t,e,u,5);break;case 6:wt=0,Re=null,da(t,e,u,6);break;case 8:Fo(),kt=6;break t;default:throw Error(s(462))}}am();break}catch(O){oh(t,O)}while(!0);return vn=xl=null,C.H=l,C.A=a,jt=n,ft!==null?0:(Nt=null,ht=0,Vi(),kt)}function am(){for(;ft!==null&&!wp();)dh(ft)}function dh(t){var e=Ud(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?zu(t):ft=e}function hh(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=_d(n,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=_d(n,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:po(e);default:$d(n,e),e=ft=ff(e,Cn),e=Ud(n,e,Cn)}t.memoizedProps=t.pendingProps,e===null?zu(t):ft=e}function da(t,e,n,l){vn=xl=null,po(e),ea=null,Qa=0;var a=e.return;try{if(Qg(t,a,e,n,ht)){kt=1,du(t,Ye(n,t.current)),ft=null;return}}catch(u){if(a!==null)throw ft=a,u;kt=1,du(t,Ye(n,t.current)),ft=null;return}e.flags&32768?(mt||l===1?t=!0:oa||(ht&536870912)!==0?t=!1:(Zn=t=!0,(l===2||l===9||l===3||l===6)&&(l=_e.current,l!==null&&l.tag===13&&(l.flags|=16384))),ph(e,t)):zu(e)}function zu(t){var e=t;do{if((e.flags&32768)!==0){ph(e,Zn);return}t=e.return;var n=Jg(e.alternate,e,Cn);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);kt===0&&(kt=5)}function ph(t,e){do{var n=Wg(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);kt=6,ft=null}function gh(t,e,n,l,a,u,o,d,p){t.cancelPendingCommit=null;do Au();while(Ft!==0);if((jt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Lc,Bp(t,n,u,o,d,p),t===Nt&&(ft=Nt=null,ht=0),sa=e,Wn=t,On=n,Jo=u,Wo=a,ah=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,om(Ci,function(){return bh(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,a=B.p,B.p=2,o=jt,jt|=4;try{Ig(t,e,n)}finally{jt=o,B.p=a,C.T=l}}Ft=1,mh(),yh(),vh()}}function mh(){if(Ft===1){Ft=0;var t=Wn,e=sa,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var l=B.p;B.p=2;var a=jt;jt|=4;try{Wd(e,t);var u=fr,o=ef(t.containerInfo),d=u.focusedElem,p=u.selectionRange;if(o!==d&&d&&d.ownerDocument&&tf(d.ownerDocument.documentElement,d)){if(p!==null&&Dc(d)){var E=p.start,O=p.end;if(O===void 0&&(O=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(O,d.value.length);else{var H=d.ownerDocument||document,z=H&&H.defaultView||window;if(z.getSelection){var w=z.getSelection(),k=d.textContent.length,et=Math.min(p.start,k),Rt=p.end===void 0?et:Math.min(p.end,k);!w.extend&&et>Rt&&(o=Rt,Rt=et,et=o);var x=Ps(d,et),g=Ps(d,Rt);if(x&&g&&(w.rangeCount!==1||w.anchorNode!==x.node||w.anchorOffset!==x.offset||w.focusNode!==g.node||w.focusOffset!==g.offset)){var S=H.createRange();S.setStart(x.node,x.offset),w.removeAllRanges(),et>Rt?(w.addRange(S),w.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),w.addRange(S))}}}}for(H=[],w=d;w=w.parentNode;)w.nodeType===1&&H.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<H.length;d++){var M=H[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$u=!!sr,fr=sr=null}finally{jt=a,B.p=l,C.T=n}}t.current=e,Ft=2}}function yh(){if(Ft===2){Ft=0;var t=Wn,e=sa,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var l=B.p;B.p=2;var a=jt;jt|=4;try{Xd(t,e.alternate,e)}finally{jt=a,B.p=l,C.T=n}}Ft=3}}function vh(){if(Ft===4||Ft===3){Ft=0,Cp();var t=Wn,e=sa,n=On,l=ah;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ft=5:(Ft=0,sa=Wn=null,xh(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Jn=null),mc(n),e=e.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=C.T,a=B.p,B.p=2,C.T=null;try{for(var u=t.onRecoverableError,o=0;o<l.length;o++){var d=l[o];u(d.value,{componentStack:d.stack})}}finally{C.T=e,B.p=a}}(On&3)!==0&&Au(),cn(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Io?ri++:(ri=0,Io=t):ri=0,si(0)}}function xh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Va(e)))}function Au(){return mh(),yh(),vh(),bh()}function bh(){if(Ft!==5)return!1;var t=Wn,e=Jo;Jo=0;var n=mc(On),l=C.T,a=B.p;try{B.p=32>n?32:n,C.T=null,n=Wo,Wo=null;var u=Wn,o=On;if(Ft=0,sa=Wn=null,On=0,(jt&6)!==0)throw Error(s(331));var d=jt;if(jt|=4,eh(u.current),Fd(u,u.current,o,n),jt=d,si(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ca,u)}catch{}return!0}finally{B.p=a,C.T=l,xh(t,e)}}function Sh(t,e,n){e=Ye(n,e),e=Oo(t.stateNode,e,2),t=kn(t,e,2),t!==null&&(_a(t,2),cn(t))}function Ct(t,e,n){if(t.tag===3)Sh(t,t,n);else for(;e!==null;){if(e.tag===3){Sh(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Jn===null||!Jn.has(l))){t=Ye(n,t),n=Ed(2),l=kn(e,n,2),l!==null&&(jd(n,l,e,t),_a(l,2),cn(l));break}}e=e.return}}function tr(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new tm;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Qo=!0,a.add(n),t=im.bind(null,t,e,n),e.then(t,t))}function im(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Nt===t&&(ht&n)===n&&(kt===4||kt===3&&(ht&62914560)===ht&&300>ze()-bu?(jt&2)===0&&fa(t,0):Zo|=n,ra===ht&&(ra=0)),cn(t)}function Eh(t,e){e===0&&(e=gs()),t=ml(t,e),t!==null&&(_a(t,e),cn(t))}function um(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Eh(t,n)}function cm(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(e),Eh(t,n)}function om(t,e){return dc(t,e)}var wu=null,ha=null,er=!1,Cu=!1,nr=!1,Fn=0;function cn(t){t!==ha&&t.next===null&&(ha===null?wu=ha=t:ha=ha.next=t),Cu=!0,er||(er=!0,sm())}function si(t,e){if(!nr&&Cu){nr=!0;do for(var n=!1,l=wu;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var o=l.suspendedLanes,d=l.pingedLanes;u=(1<<31-we(42|t)+1)-1,u&=a&~(o&~d),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Ah(l,u))}else u=ht,u=Ri(l,l===Nt?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Oa(l,u)||(n=!0,Ah(l,u));l=l.next}while(n);nr=!1}}function rm(){jh()}function jh(){Cu=er=!1;var t=0;Fn!==0&&bm()&&(t=Fn);for(var e=ze(),n=null,l=wu;l!==null;){var a=l.next,u=Th(l,e);u===0?(l.next=null,n===null?wu=a:n.next=a,a===null&&(ha=n)):(n=l,(t!==0||(u&3)!==0)&&(Cu=!0)),l=a}Ft!==0&&Ft!==5||si(t),Fn!==0&&(Fn=0)}function Th(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var o=31-we(u),d=1<<o,p=a[o];p===-1?((d&n)===0||(d&l)!==0)&&(a[o]=Up(d,e)):p<=e&&(t.expiredLanes|=d),u&=~d}if(e=Nt,n=ht,n=Ri(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&hc(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Oa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&hc(l),mc(n)){case 2:case 8:n=hs;break;case 32:n=Ci;break;case 268435456:n=ps;break;default:n=Ci}return l=zh.bind(null,t),n=dc(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&hc(l),t.callbackPriority=2,t.callbackNode=null,2}function zh(t,e){if(Ft!==0&&Ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Au()&&t.callbackNode!==n)return null;var l=ht;return l=Ri(t,t===Nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(uh(t,l,e),Th(t,ze()),t.callbackNode!=null&&t.callbackNode===n?zh.bind(null,t):null)}function Ah(t,e){if(Au())return null;uh(t,e,!0)}function sm(){Em(function(){(jt&6)!==0?dc(ds,rm):jh()})}function lr(){if(Fn===0){var t=Fl;t===0&&(t=Oi,Oi<<=1,(Oi&261888)===0&&(Oi=256)),Fn=t}return Fn}function wh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ui(""+t)}function Ch(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function fm(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var u=wh((a[ge]||null).action),o=l.submitter;o&&(e=(e=o[ge]||null)?wh(e.formAction):o.getAttribute("formAction"),e!==null&&(u=e,o=null));var d=new Li("action","action",null,l,a);t.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fn!==0){var p=o?Ch(a,o):new FormData(a);jo(n,{pending:!0,data:p,method:a.method,action:u},null,p)}}else typeof u=="function"&&(d.preventDefault(),p=o?Ch(a,o):new FormData(a),jo(n,{pending:!0,data:p,method:a.method,action:u},u,p))},currentTarget:a}]})}}for(var ar=0;ar<Gc.length;ar++){var ir=Gc[ar],dm=ir.toLowerCase(),hm=ir[0].toUpperCase()+ir.slice(1);Fe(dm,"on"+hm)}Fe(af,"onAnimationEnd"),Fe(uf,"onAnimationIteration"),Fe(cf,"onAnimationStart"),Fe("dblclick","onDoubleClick"),Fe("focusin","onFocus"),Fe("focusout","onBlur"),Fe(Og,"onTransitionRun"),Fe(_g,"onTransitionStart"),Fe(Mg,"onTransitionCancel"),Fe(of,"onTransitionEnd"),$l("onMouseEnter",["mouseout","mouseover"]),$l("onMouseLeave",["mouseout","mouseover"]),$l("onPointerEnter",["pointerout","pointerover"]),$l("onPointerLeave",["pointerout","pointerover"]),dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Oh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var o=l.length-1;0<=o;o--){var d=l[o],p=d.instance,E=d.currentTarget;if(d=d.listener,p!==u&&a.isPropagationStopped())break t;u=d,a.currentTarget=E;try{u(a)}catch(O){ki(O)}a.currentTarget=null,u=p}else for(o=0;o<l.length;o++){if(d=l[o],p=d.instance,E=d.currentTarget,d=d.listener,p!==u&&a.isPropagationStopped())break t;u=d,a.currentTarget=E;try{u(a)}catch(O){ki(O)}a.currentTarget=null,u=p}}}}function dt(t,e){var n=e[yc];n===void 0&&(n=e[yc]=new Set);var l=t+"__bubble";n.has(l)||(_h(e,t,2,!1),n.add(l))}function ur(t,e,n){var l=0;e&&(l|=4),_h(n,t,l,e)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function cr(t){if(!t[Ou]){t[Ou]=!0,Es.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||ur(n,!1,t),ur(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ou]||(e[Ou]=!0,ur("selectionchange",!1,e))}}function _h(t,e,n,l){switch(i0(e)){case 2:var a=qm;break;case 8:a=km;break;default:a=Er}n=a.bind(null,e,n,t),a=void 0,!Ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function or(t,e,n,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=l.return;o!==null;){var p=o.tag;if((p===3||p===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=Dl(d),o===null)return;if(p=o.tag,p===5||p===6||p===26||p===27){l=u=o;continue t}d=d.parentNode}}l=l.return}Ns(function(){var E=u,O=Tc(n),H=[];t:{var z=rf.get(t);if(z!==void 0){var w=Li,k=t;switch(t){case"keypress":if($i(n)===0)break t;case"keydown":case"keyup":w=cg;break;case"focusin":k="focus",w=_c;break;case"focusout":k="blur",w=_c;break;case"beforeblur":case"afterblur":w=_c;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=sg;break;case af:case uf:case cf:w=Fp;break;case of:w=dg;break;case"scroll":case"scrollend":w=Zp;break;case"wheel":w=pg;break;case"copy":case"cut":case"paste":w=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Gs;break;case"toggle":case"beforetoggle":w=mg}var et=(e&4)!==0,Rt=!et&&(t==="scroll"||t==="scrollend"),x=et?z!==null?z+"Capture":null:z;et=[];for(var g=E,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||x===null||(M=Ha(g,x),M!=null&&et.push(di(g,M,S))),Rt)break;g=g.return}0<et.length&&(z=new w(z,k,null,n,O),H.push({event:z,listeners:et}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",z&&n!==jc&&(k=n.relatedTarget||n.fromElement)&&(Dl(k)||k[Nl]))break t;if((w||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=E,k=k?Dl(k):null,k!==null&&(Rt=y(k),et=k.tag,k!==Rt||et!==5&&et!==27&&et!==6)&&(k=null)):(w=null,k=E),w!==k)){if(et=Bs,M="onMouseLeave",x="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(et=Gs,M="onPointerLeave",x="onPointerEnter",g="pointer"),Rt=w==null?z:Ra(w),S=k==null?z:Ra(k),z=new et(M,g+"leave",w,n,O),z.target=Rt,z.relatedTarget=S,M=null,Dl(O)===E&&(et=new et(x,g+"enter",k,n,O),et.target=S,et.relatedTarget=Rt,M=et),Rt=M,w&&k)e:{for(et=gm,x=w,g=k,S=0,M=x;M;M=et(M))S++;M=0;for(var F=g;F;F=et(F))M++;for(;0<S-M;)x=et(x),S--;for(;0<M-S;)g=et(g),M--;for(;S--;){if(x===g||g!==null&&x===g.alternate){et=x;break e}x=et(x),g=et(g)}et=null}else et=null;w!==null&&Mh(H,z,w,et,!1),k!==null&&Rt!==null&&Mh(H,Rt,k,et,!0)}}t:{if(z=E?Ra(E):window,w=z.nodeName&&z.nodeName.toLowerCase(),w==="select"||w==="input"&&z.type==="file")var bt=Zs;else if(Xs(z))if(Ks)bt=Ag;else{bt=Tg;var K=jg}else w=z.nodeName,!w||w.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?E&&Ec(E.elementType)&&(bt=Zs):bt=zg;if(bt&&(bt=bt(t,E))){Qs(H,bt,n,O);break t}K&&K(t,z,E),t==="focusout"&&E&&z.type==="number"&&E.memoizedProps.value!=null&&Sc(z,"number",z.value)}switch(K=E?Ra(E):window,t){case"focusin":(Xs(K)||K.contentEditable==="true")&&(Vl=K,Uc=E,Ya=null);break;case"focusout":Ya=Uc=Vl=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,nf(H,n,O);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":nf(H,n,O)}var ot;if(Rc)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else kl?ks(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");pt&&(Ls&&n.locale!=="ko"&&(kl||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&kl&&(ot=Ds()):(Un=O,wc="value"in Un?Un.value:Un.textContent,kl=!0)),K=_u(E,pt),0<K.length&&(pt=new $s(pt,t,null,n,O),H.push({event:pt,listeners:K}),ot?pt.data=ot:(ot=Vs(n),ot!==null&&(pt.data=ot)))),(ot=vg?xg(t,n):bg(t,n))&&(pt=_u(E,"onBeforeInput"),0<pt.length&&(K=new $s("onBeforeInput","beforeinput",null,n,O),H.push({event:K,listeners:pt}),K.data=ot)),fm(H,t,E,n,O)}Oh(H,e)})}function di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _u(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Ha(t,n),a!=null&&l.unshift(di(t,a,u)),a=Ha(t,e),a!=null&&l.push(di(t,a,u))),t.tag===3)return l;t=t.return}return[]}function gm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mh(t,e,n,l,a){for(var u=e._reactName,o=[];n!==null&&n!==l;){var d=n,p=d.alternate,E=d.stateNode;if(d=d.tag,p!==null&&p===l)break;d!==5&&d!==26&&d!==27||E===null||(p=E,a?(E=Ha(n,u),E!=null&&o.unshift(di(n,E,p))):a||(E=Ha(n,u),E!=null&&o.push(di(n,E,p)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mm=/\r\n?/g,ym=/\u0000|\uFFFD/g;function Rh(t){return(typeof t=="string"?t:""+t).replace(mm,`
`).replace(ym,"")}function Hh(t,e){return e=Rh(e),Rh(t)===e}function Mt(t,e,n,l,a,u){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ll(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ll(t,""+l);break;case"className":Ni(t,"class",l);break;case"tabIndex":Ni(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(t,n,l);break;case"style":Rs(t,l,u);break;case"data":if(e!=="object"){Ni(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Ui(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Mt(t,e,"name",a.name,a,null),Mt(t,e,"formEncType",a.formEncType,a,null),Mt(t,e,"formMethod",a.formMethod,a,null),Mt(t,e,"formTarget",a.formTarget,a,null)):(Mt(t,e,"encType",a.encType,a,null),Mt(t,e,"method",a.method,a,null),Mt(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Ui(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=pn);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=Ui(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":dt("beforetoggle",t),dt("toggle",t),Hi(t,"popover",l);break;case"xlinkActuate":hn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":hn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":hn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":hn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":hn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":hn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":hn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":hn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":hn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Hi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xp.get(n)||n,Hi(t,n,l))}}function rr(t,e,n,l,a,u){switch(n){case"style":Rs(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof l=="string"?Ll(t,l):(typeof l=="number"||typeof l=="bigint")&&Ll(t,""+l);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!js.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),u=t[ge]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):Hi(t,n,l)}}}function re(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Mt(t,e,u,o,n,null)}}a&&Mt(t,e,"srcSet",n.srcSet,n,null),l&&Mt(t,e,"src",n.src,n,null);return;case"input":dt("invalid",t);var d=u=o=a=null,p=null,E=null;for(l in n)if(n.hasOwnProperty(l)){var O=n[l];if(O!=null)switch(l){case"name":a=O;break;case"type":o=O;break;case"checked":p=O;break;case"defaultChecked":E=O;break;case"value":u=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,e));break;default:Mt(t,e,l,O,n,null)}}Cs(t,u,d,p,E,o,a,!1);return;case"select":dt("invalid",t),l=o=u=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":u=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:Mt(t,e,a,d,n,null)}e=u,n=o,t.multiple=!!l,e!=null?Gl(t,!!l,e,!1):n!=null&&Gl(t,!!l,n,!0);return;case"textarea":dt("invalid",t),u=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":a=d;break;case"children":u=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:Mt(t,e,o,d,n,null)}_s(t,l,a,u);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(l=n[p],l!=null))switch(p){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Mt(t,e,p,l,n,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(l=0;l<fi.length;l++)dt(fi[l],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Mt(t,e,E,l,n,null)}return;default:if(Ec(e)){for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&rr(t,e,O,l,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!=null&&Mt(t,e,d,l,n,null))}function vm(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,o=null,d=null,p=null,E=null,O=null;for(w in n){var H=n[w];if(n.hasOwnProperty(w)&&H!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=H;default:l.hasOwnProperty(w)||Mt(t,e,w,null,l,H)}}for(var z in l){var w=l[z];if(H=n[z],l.hasOwnProperty(z)&&(w!=null||H!=null))switch(z){case"type":u=w;break;case"name":a=w;break;case"checked":E=w;break;case"defaultChecked":O=w;break;case"value":o=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:w!==H&&Mt(t,e,z,w,l,H)}}bc(t,o,d,p,E,O,u,a);return;case"select":w=o=d=z=null;for(u in n)if(p=n[u],n.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":w=p;default:l.hasOwnProperty(u)||Mt(t,e,u,null,l,p)}for(a in l)if(u=l[a],p=n[a],l.hasOwnProperty(a)&&(u!=null||p!=null))switch(a){case"value":z=u;break;case"defaultValue":d=u;break;case"multiple":o=u;default:u!==p&&Mt(t,e,a,u,l,p)}e=d,n=o,l=w,z!=null?Gl(t,!!n,z,!1):!!l!=!!n&&(e!=null?Gl(t,!!n,e,!0):Gl(t,!!n,n?[]:"",!1));return;case"textarea":w=z=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Mt(t,e,d,null,l,a)}for(o in l)if(a=l[o],u=n[o],l.hasOwnProperty(o)&&(a!=null||u!=null))switch(o){case"value":z=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==u&&Mt(t,e,o,a,l,u)}Os(t,z,w);return;case"option":for(var k in n)if(z=n[k],n.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k))switch(k){case"selected":t.selected=!1;break;default:Mt(t,e,k,null,l,z)}for(p in l)if(z=l[p],w=n[p],l.hasOwnProperty(p)&&z!==w&&(z!=null||w!=null))switch(p){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Mt(t,e,p,z,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in n)z=n[et],n.hasOwnProperty(et)&&z!=null&&!l.hasOwnProperty(et)&&Mt(t,e,et,null,l,z);for(E in l)if(z=l[E],w=n[E],l.hasOwnProperty(E)&&z!==w&&(z!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:Mt(t,e,E,z,l,w)}return;default:if(Ec(e)){for(var Rt in n)z=n[Rt],n.hasOwnProperty(Rt)&&z!==void 0&&!l.hasOwnProperty(Rt)&&rr(t,e,Rt,void 0,l,z);for(O in l)z=l[O],w=n[O],!l.hasOwnProperty(O)||z===w||z===void 0&&w===void 0||rr(t,e,O,z,l,w);return}}for(var x in n)z=n[x],n.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Mt(t,e,x,null,l,z);for(H in l)z=l[H],w=n[H],!l.hasOwnProperty(H)||z===w||z==null&&w==null||Mt(t,e,H,z,l,w)}function Nh(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],u=a.transferSize,o=a.initiatorType,d=a.duration;if(u&&d&&Nh(o)){for(o=0,d=a.responseEnd,l+=1;l<n.length;l++){var p=n[l],E=p.startTime;if(E>d)break;var O=p.transferSize,H=p.initiatorType;O&&Nh(H)&&(p=p.responseEnd,o+=O*(p<d?1:(d-E)/(p-E)))}if(--l,e+=8*(u+o)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sr=null,fr=null;function Mu(t){return t.nodeType===9?t:t.ownerDocument}function Dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function dr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hr=null;function bm(){var t=window.event;return t&&t.type==="popstate"?t===hr?!1:(hr=t,!0):(hr=null,!1)}var Bh=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(jm)}:Bh;function jm(t){setTimeout(function(){throw t})}function Pn(t){return t==="head"}function Gh(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),ya(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")hi(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,hi(n);for(var u=n.firstChild;u;){var o=u.nextSibling,d=u.nodeName;u[Ma]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=o}}else n==="body"&&hi(t.ownerDocument.body);n=a}while(n);ya(e)}function Lh(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function pr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pr(n),vc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Tm(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ma])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Qe(t.nextSibling),t===null)break}return null}function zm(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Qe(t.nextSibling),t===null))return null;return t}function Yh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qe(t.nextSibling),t===null))return null;return t}function gr(t){return t.data==="$?"||t.data==="$~"}function mr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Am(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var yr=null;function qh(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Qe(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Vh(t,e,n){switch(e=Mu(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function hi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vc(t)}var Ze=new Map,Xh=new Set;function Ru(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _n=B.d;B.d={f:wm,r:Cm,D:Om,C:_m,L:Mm,m:Rm,X:Nm,S:Hm,M:Dm};function wm(){var t=_n.f(),e=ju();return t||e}function Cm(t){var e=Ul(t);e!==null&&e.tag===5&&e.type==="form"?od(e):_n.r(t)}var pa=typeof document>"u"?null:document;function Qh(t,e,n){var l=pa;if(l&&typeof e=="string"&&e){var a=Ge(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Xh.has(a)||(Xh.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),re(e,"link",t),ne(e),l.head.appendChild(e)))}}function Om(t){_n.D(t),Qh("dns-prefetch",t,null)}function _m(t,e){_n.C(t,e),Qh("preconnect",t,e)}function Mm(t,e,n){_n.L(t,e,n);var l=pa;if(l&&t&&e){var a='link[rel="preload"][as="'+Ge(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ge(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ge(n.imageSizes)+'"]')):a+='[href="'+Ge(t)+'"]';var u=a;switch(e){case"style":u=ga(t);break;case"script":u=ma(t)}Ze.has(u)||(t=N({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ze.set(u,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(pi(u))||e==="script"&&l.querySelector(gi(u))||(e=l.createElement("link"),re(e,"link",t),ne(e),l.head.appendChild(e)))}}function Rm(t,e){_n.m(t,e);var n=pa;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ge(l)+'"][href="'+Ge(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ma(t)}if(!Ze.has(u)&&(t=N({rel:"modulepreload",href:t},e),Ze.set(u,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gi(u)))return}l=n.createElement("link"),re(l,"link",t),ne(l),n.head.appendChild(l)}}}function Hm(t,e,n){_n.S(t,e,n);var l=pa;if(l&&t){var a=Bl(l).hoistableStyles,u=ga(t);e=e||"default";var o=a.get(u);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(pi(u)))d.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ze.get(u))&&vr(t,n);var p=o=l.createElement("link");ne(p),re(p,"link",t),p._p=new Promise(function(E,O){p.onload=E,p.onerror=O}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Hu(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(u,o)}}}function Nm(t,e){_n.X(t,e);var n=pa;if(n&&t){var l=Bl(n).hoistableScripts,a=ma(t),u=l.get(a);u||(u=n.querySelector(gi(a)),u||(t=N({src:t,async:!0},e),(e=Ze.get(a))&&xr(t,e),u=n.createElement("script"),ne(u),re(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function Dm(t,e){_n.M(t,e);var n=pa;if(n&&t){var l=Bl(n).hoistableScripts,a=ma(t),u=l.get(a);u||(u=n.querySelector(gi(a)),u||(t=N({src:t,async:!0,type:"module"},e),(e=Ze.get(a))&&xr(t,e),u=n.createElement("script"),ne(u),re(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function Zh(t,e,n,l){var a=(a=ut.current)?Ru(a):null;if(!a)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ga(n.href),n=Bl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ga(n.href);var u=Bl(a).hoistableStyles,o=u.get(t);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,o),(u=a.querySelector(pi(t)))&&!u._p&&(o.instance=u,o.state.loading=5),Ze.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ze.set(t,n),u||Um(a,t,n,o.state))),e&&l===null)throw Error(s(528,""));return o}if(e&&l!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ma(n),n=Bl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ga(t){return'href="'+Ge(t)+'"'}function pi(t){return'link[rel="stylesheet"]['+t+"]"}function Kh(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function Um(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),re(e,"link",n),ne(e),t.head.appendChild(e))}function ma(t){return'[src="'+Ge(t)+'"]'}function gi(t){return"script[async]"+t}function Jh(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ge(n.href)+'"]');if(l)return e.instance=l,ne(l),l;var a=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ne(l),re(l,"style",a),Hu(l,n.precedence,t),e.instance=l;case"stylesheet":a=ga(n.href);var u=t.querySelector(pi(a));if(u)return e.state.loading|=4,e.instance=u,ne(u),u;l=Kh(n),(a=Ze.get(a))&&vr(l,a),u=(t.ownerDocument||t).createElement("link"),ne(u);var o=u;return o._p=new Promise(function(d,p){o.onload=d,o.onerror=p}),re(u,"link",l),e.state.loading|=4,Hu(u,n.precedence,t),e.instance=u;case"script":return u=ma(n.src),(a=t.querySelector(gi(u)))?(e.instance=a,ne(a),a):(l=n,(a=Ze.get(u))&&(l=N({},n),xr(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),ne(a),re(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Hu(l,n.precedence,t));return e.instance}function Hu(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===e)u=d;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nu=null;function Wh(t,e,n){if(Nu===null){var l=new Map,a=Nu=new Map;a.set(n,l)}else a=Nu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var u=n[a];if(!(u[Ma]||u[ie]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(e)||"";o=t+o;var d=l.get(o);d?d.push(u):l.set(o,[u])}}return l}function Ih(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Bm(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $m(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=ga(l.href),u=e.querySelector(pi(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Du.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,ne(u);return}u=e.ownerDocument||e,l=Kh(l),(a=Ze.get(a))&&vr(l,a),u=u.createElement("link"),ne(u);var o=u;o._p=new Promise(function(d,p){o.onload=d,o.onerror=p}),re(u,"link",l),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Du.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var br=0;function Gm(t,e){return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&br===0&&(br=62500*xm());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>br?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function Bu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(Lm,t),Uu=null,Du.call(t))}function Lm(t,e){if(!(e.state.loading&4)){var n=Uu.get(t);if(n)var l=n.get(null);else{n=new Map,Uu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var o=a[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=e.instance,o=a.getAttribute("data-precedence"),u=n.get(o)||l,u===l&&n.set(null,a),n.set(o,a),this.count++,l=Du.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var mi={$$typeof:Y,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Ym(t,e,n,l,a,u,o,d,p){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ph(t,e,n,l,a,u,o,d,p,E,O,H){return t=new Ym(t,e,n,o,p,E,O,H,d),e=1,u===!0&&(e|=24),u=Oe(3,null,null,e),t.current=u,u.stateNode=t,e=Fc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:e},no(u),t}function t0(t){return t?(t=Zl,t):Zl}function e0(t,e,n,l,a,u){a=t0(a),l.context===null?l.context=a:l.pendingContext=a,l=qn(e),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=kn(t,l,e),n!==null&&(Se(n,t,e),Ka(n,t,e))}function n0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sr(t,e){n0(t,e),(t=t.alternate)&&n0(t,e)}function l0(t){if(t.tag===13||t.tag===31){var e=ml(t,67108864);e!==null&&Se(e,t,67108864),Sr(t,67108864)}}function a0(t){if(t.tag===13||t.tag===31){var e=Ne();e=gc(e);var n=ml(t,e);n!==null&&Se(n,t,e),Sr(t,e)}}var $u=!0;function qm(t,e,n,l){var a=C.T;C.T=null;var u=B.p;try{B.p=2,Er(t,e,n,l)}finally{B.p=u,C.T=a}}function km(t,e,n,l){var a=C.T;C.T=null;var u=B.p;try{B.p=8,Er(t,e,n,l)}finally{B.p=u,C.T=a}}function Er(t,e,n,l){if($u){var a=jr(l);if(a===null)or(t,e,l,Gu,n),u0(t,l);else if(Xm(a,t,e,n,l))l.stopPropagation();else if(u0(t,l),e&4&&-1<Vm.indexOf(t)){for(;a!==null;){var u=Ul(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=fl(u.pendingLanes);if(o!==0){var d=u;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var p=1<<31-we(o);d.entanglements[1]|=p,o&=~p}cn(u),(jt&6)===0&&(Su=ze()+500,si(0))}}break;case 31:case 13:d=ml(u,2),d!==null&&Se(d,u,2),ju(),Sr(u,2)}if(u=jr(l),u===null&&or(t,e,l,Gu,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else or(t,e,l,null,n)}}function jr(t){return t=Tc(t),Tr(t)}var Gu=null;function Tr(t){if(Gu=null,t=Dl(t),t!==null){var e=y(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=b(e),t!==null)return t;t=null}else if(n===31){if(t=D(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gu=t,null}function i0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Op()){case ds:return 2;case hs:return 8;case Ci:case _p:return 32;case ps:return 268435456;default:return 32}default:return 32}}var zr=!1,tl=null,el=null,nl=null,yi=new Map,vi=new Map,ll=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,e){switch(t){case"focusin":case"focusout":tl=null;break;case"dragenter":case"dragleave":el=null;break;case"mouseover":case"mouseout":nl=null;break;case"pointerover":case"pointerout":yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(e.pointerId)}}function xi(t,e,n,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=Ul(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Xm(t,e,n,l,a){switch(e){case"focusin":return tl=xi(tl,t,e,n,l,a),!0;case"dragenter":return el=xi(el,t,e,n,l,a),!0;case"mouseover":return nl=xi(nl,t,e,n,l,a),!0;case"pointerover":var u=a.pointerId;return yi.set(u,xi(yi.get(u)||null,t,e,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,vi.set(u,xi(vi.get(u)||null,t,e,n,l,a)),!0}return!1}function c0(t){var e=Dl(t.target);if(e!==null){var n=y(e);if(n!==null){if(e=n.tag,e===13){if(e=b(n),e!==null){t.blockedOn=e,bs(t.priority,function(){a0(n)});return}}else if(e===31){if(e=D(n),e!==null){t.blockedOn=e,bs(t.priority,function(){a0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jr(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);jc=l,n.target.dispatchEvent(l),jc=null}else return e=Ul(n),e!==null&&l0(e),t.blockedOn=n,!1;e.shift()}return!0}function o0(t,e,n){Lu(t)&&n.delete(e)}function Qm(){zr=!1,tl!==null&&Lu(tl)&&(tl=null),el!==null&&Lu(el)&&(el=null),nl!==null&&Lu(nl)&&(nl=null),yi.forEach(o0),vi.forEach(o0)}function Yu(t,e){t.blockedOn===e&&(t.blockedOn=null,zr||(zr=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Qm)))}var qu=null;function r0(t){qu!==t&&(qu=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Tr(l||n)===null)continue;break}var u=Ul(n);u!==null&&(t.splice(e,3),e-=3,jo(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ya(t){function e(p){return Yu(p,t)}tl!==null&&Yu(tl,t),el!==null&&Yu(el,t),nl!==null&&Yu(nl,t),yi.forEach(e),vi.forEach(e);for(var n=0;n<ll.length;n++){var l=ll[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ll.length&&(n=ll[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&ll.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],o=a[ge]||null;if(typeof u=="function")o||r0(n);else if(o){var d=null;if(u&&u.hasAttribute("formAction")){if(a=u,o=u[ge]||null)d=o.formAction;else if(Tr(a)!==null)continue}else d=o.action;typeof d=="function"?n[l+1]=d:(n.splice(l,3),l-=3),r0(n)}}}function s0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Ar(t){this._internalRoot=t}ku.prototype.render=Ar.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,l=Ne();e0(n,l,t,e,null,null)},ku.prototype.unmount=Ar.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;e0(t.current,2,null,t,null,null),ju(),e[Nl]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=xs();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ll.length&&e!==0&&e<ll[n].priority;n++);ll.splice(n,0,t),n===0&&c0(t)}};var f0=r.version;if(f0!=="19.2.0")throw Error(s(527,f0,"19.2.0"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var Zm={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Ca=Vu.inject(Zm),Ae=Vu}catch{}}return Si.createRoot=function(t,e){if(!h(t))throw Error(s(299));var n=!1,l="",a=vd,u=xd,o=bd;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Ph(t,1,!1,null,null,n,l,null,a,u,o,s0),t[Nl]=e.current,cr(t),new Ar(e)},Si.hydrateRoot=function(t,e,n){if(!h(t))throw Error(s(299));var l=!1,a="",u=vd,o=xd,d=bd,p=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(p=n.formState)),e=Ph(t,1,!0,e,n??null,l,a,p,u,o,d,s0),e.context=t0(null),n=e.current,l=Ne(),l=gc(l),a=qn(l),a.callback=null,kn(n,a,l),n=l,e.current.lanes=n,_a(e,n),cn(e),t[Nl]=e.current,cr(t),new ku(e)},Si.version="19.2.0",Si}var S0;function ay(){if(S0)return Or.exports;S0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Or.exports=ly(),Or.exports}var iy=ay(),Te=function(){return Te=Object.assign||function(r){for(var f,s=1,h=arguments.length;s<h;s++){f=arguments[s];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(r[y]=f[y])}return r},Te.apply(this,arguments)};function Ti(i,r,f){if(f||arguments.length===2)for(var s=0,h=r.length,y;s<h;s++)(y||!(s in r))&&(y||(y=Array.prototype.slice.call(r,0,s)),y[s]=r[s]);return i.concat(y||Array.prototype.slice.call(r))}var Gt="-ms-",ji="-moz-",zt="-webkit-",X0="comm",ec="rule",ts="decl",uy="@import",Q0="@keyframes",cy="@layer",Z0=Math.abs,es=String.fromCharCode,Yr=Object.assign;function oy(i,r){return ae(i,0)^45?(((r<<2^ae(i,0))<<2^ae(i,1))<<2^ae(i,2))<<2^ae(i,3):0}function K0(i){return i.trim()}function Hn(i,r){return(i=r.exec(i))?i[0]:i}function rt(i,r,f){return i.replace(r,f)}function Zu(i,r,f){return i.indexOf(r,f)}function ae(i,r){return i.charCodeAt(r)|0}function Sa(i,r,f){return i.slice(r,f)}function rn(i){return i.length}function J0(i){return i.length}function Ei(i,r){return r.push(i),i}function ry(i,r){return i.map(r).join("")}function E0(i,r){return i.filter(function(f){return!Hn(f,r)})}var nc=1,Ea=1,W0=0,Je=0,It=0,wa="";function lc(i,r,f,s,h,y,b,D){return{value:i,root:r,parent:f,type:s,props:h,children:y,line:nc,column:Ea,length:b,return:"",siblings:D}}function ol(i,r){return Yr(lc("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},r)}function va(i){for(;i.root;)i=ol(i.root,{children:[i]});Ei(i,i.siblings)}function sy(){return It}function fy(){return It=Je>0?ae(wa,--Je):0,Ea--,It===10&&(Ea=1,nc--),It}function en(){return It=Je<W0?ae(wa,Je++):0,Ea++,It===10&&(Ea=1,nc++),It}function Ml(){return ae(wa,Je)}function Ku(){return Je}function ac(i,r){return Sa(wa,i,r)}function qr(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dy(i){return nc=Ea=1,W0=rn(wa=i),Je=0,[]}function hy(i){return wa="",i}function Hr(i){return K0(ac(Je-1,kr(i===91?i+2:i===40?i+1:i)))}function py(i){for(;(It=Ml())&&It<33;)en();return qr(i)>2||qr(It)>3?"":" "}function gy(i,r){for(;--r&&en()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return ac(i,Ku()+(r<6&&Ml()==32&&en()==32))}function kr(i){for(;en();)switch(It){case i:return Je;case 34:case 39:i!==34&&i!==39&&kr(It);break;case 40:i===41&&kr(i);break;case 92:en();break}return Je}function my(i,r){for(;en()&&i+It!==57;)if(i+It===84&&Ml()===47)break;return"/*"+ac(r,Je-1)+"*"+es(i===47?i:en())}function yy(i){for(;!qr(Ml());)en();return ac(i,Je)}function vy(i){return hy(Ju("",null,null,null,[""],i=dy(i),0,[0],i))}function Ju(i,r,f,s,h,y,b,D,A){for(var v=0,R=0,N=b,U=0,Q=0,W=0,V=1,P=1,X=1,J=0,Y="",Z=h,at=y,I=s,$=Y;P;)switch(W=J,J=en()){case 40:if(W!=108&&ae($,N-1)==58){Zu($+=rt(Hr(J),"&","&\f"),"&\f",Z0(v?D[v-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:$+=Hr(J);break;case 9:case 10:case 13:case 32:$+=py(W);break;case 92:$+=gy(Ku()-1,7);continue;case 47:switch(Ml()){case 42:case 47:Ei(xy(my(en(),Ku()),r,f,A),A);break;default:$+="/"}break;case 123*V:D[v++]=rn($)*X;case 125*V:case 59:case 0:switch(J){case 0:case 125:P=0;case 59+R:X==-1&&($=rt($,/\f/g,"")),Q>0&&rn($)-N&&Ei(Q>32?T0($+";",s,f,N-1,A):T0(rt($," ","")+";",s,f,N-2,A),A);break;case 59:$+=";";default:if(Ei(I=j0($,r,f,v,R,h,D,Y,Z=[],at=[],N,y),y),J===123)if(R===0)Ju($,r,I,I,Z,y,N,D,at);else switch(U===99&&ae($,3)===110?100:U){case 100:case 108:case 109:case 115:Ju(i,I,I,s&&Ei(j0(i,I,I,0,0,h,D,Y,h,Z=[],N,at),at),h,at,N,D,s?Z:at);break;default:Ju($,I,I,I,[""],at,0,D,at)}}v=R=Q=0,V=X=1,Y=$="",N=b;break;case 58:N=1+rn($),Q=W;default:if(V<1){if(J==123)--V;else if(J==125&&V++==0&&fy()==125)continue}switch($+=es(J),J*V){case 38:X=R>0?1:($+="\f",-1);break;case 44:D[v++]=(rn($)-1)*X,X=1;break;case 64:Ml()===45&&($+=Hr(en())),U=Ml(),R=N=rn(Y=$+=yy(Ku())),J++;break;case 45:W===45&&rn($)==2&&(V=0)}}return y}function j0(i,r,f,s,h,y,b,D,A,v,R,N){for(var U=h-1,Q=h===0?y:[""],W=J0(Q),V=0,P=0,X=0;V<s;++V)for(var J=0,Y=Sa(i,U+1,U=Z0(P=b[V])),Z=i;J<W;++J)(Z=K0(P>0?Q[J]+" "+Y:rt(Y,/&\f/g,Q[J])))&&(A[X++]=Z);return lc(i,r,f,h===0?ec:D,A,v,R,N)}function xy(i,r,f,s){return lc(i,r,f,X0,es(sy()),Sa(i,2,-2),0,s)}function T0(i,r,f,s,h){return lc(i,r,f,ts,Sa(i,0,s),Sa(i,s+1,-1),s,h)}function I0(i,r,f){switch(oy(i,r)){case 5103:return zt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+i+i;case 4789:return ji+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+i+ji+i+Gt+i+i;case 5936:switch(ae(i,r+11)){case 114:return zt+i+Gt+rt(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return zt+i+Gt+rt(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return zt+i+Gt+rt(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return zt+i+Gt+i+i;case 6165:return zt+i+Gt+"flex-"+i+i;case 5187:return zt+i+rt(i,/(\w+).+(:[^]+)/,zt+"box-$1$2"+Gt+"flex-$1$2")+i;case 5443:return zt+i+Gt+"flex-item-"+rt(i,/flex-|-self/g,"")+(Hn(i,/flex-|baseline/)?"":Gt+"grid-row-"+rt(i,/flex-|-self/g,""))+i;case 4675:return zt+i+Gt+"flex-line-pack"+rt(i,/align-content|flex-|-self/g,"")+i;case 5548:return zt+i+Gt+rt(i,"shrink","negative")+i;case 5292:return zt+i+Gt+rt(i,"basis","preferred-size")+i;case 6060:return zt+"box-"+rt(i,"-grow","")+zt+i+Gt+rt(i,"grow","positive")+i;case 4554:return zt+rt(i,/([^-])(transform)/g,"$1"+zt+"$2")+i;case 6187:return rt(rt(rt(i,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),i,"")+i;case 5495:case 3959:return rt(i,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return rt(rt(i,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+Gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+i+i;case 4200:if(!Hn(i,/flex-|baseline/))return Gt+"grid-column-align"+Sa(i,r)+i;break;case 2592:case 3360:return Gt+rt(i,"template-","")+i;case 4384:case 3616:return f&&f.some(function(s,h){return r=h,Hn(s.props,/grid-\w+-end/)})?~Zu(i+(f=f[r].value),"span",0)?i:Gt+rt(i,"-start","")+i+Gt+"grid-row-span:"+(~Zu(f,"span",0)?Hn(f,/\d+/):+Hn(f,/\d+/)-+Hn(i,/\d+/))+";":Gt+rt(i,"-start","")+i;case 4896:case 4128:return f&&f.some(function(s){return Hn(s.props,/grid-\w+-start/)})?i:Gt+rt(rt(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return rt(i,/(.+)-inline(.+)/,zt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(i)-1-r>6)switch(ae(i,r+1)){case 109:if(ae(i,r+4)!==45)break;case 102:return rt(i,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+ji+(ae(i,r+3)==108?"$3":"$2-$3"))+i;case 115:return~Zu(i,"stretch",0)?I0(rt(i,"stretch","fill-available"),r,f)+i:i}break;case 5152:case 5920:return rt(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,h,y,b,D,A,v){return Gt+h+":"+y+v+(b?Gt+h+"-span:"+(D?A:+A-+y)+v:"")+i});case 4949:if(ae(i,r+6)===121)return rt(i,":",":"+zt)+i;break;case 6444:switch(ae(i,ae(i,14)===45?18:11)){case 120:return rt(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+zt+(ae(i,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+Gt+"$2box$3")+i;case 100:return rt(i,":",":"+Gt)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return rt(i,"scroll-","scroll-snap-")+i}return i}function Fu(i,r){for(var f="",s=0;s<i.length;s++)f+=r(i[s],s,i,r)||"";return f}function by(i,r,f,s){switch(i.type){case cy:if(i.children.length)break;case uy:case ts:return i.return=i.return||i.value;case X0:return"";case Q0:return i.return=i.value+"{"+Fu(i.children,s)+"}";case ec:if(!rn(i.value=i.props.join(",")))return""}return rn(f=Fu(i.children,s))?i.return=i.value+"{"+f+"}":""}function Sy(i){var r=J0(i);return function(f,s,h,y){for(var b="",D=0;D<r;D++)b+=i[D](f,s,h,y)||"";return b}}function Ey(i){return function(r){r.root||(r=r.return)&&i(r)}}function jy(i,r,f,s){if(i.length>-1&&!i.return)switch(i.type){case ts:i.return=I0(i.value,i.length,f);return;case Q0:return Fu([ol(i,{value:rt(i.value,"@","@"+zt)})],s);case ec:if(i.length)return ry(f=i.props,function(h){switch(Hn(h,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":va(ol(i,{props:[rt(h,/:(read-\w+)/,":"+ji+"$1")]})),va(ol(i,{props:[h]})),Yr(i,{props:E0(f,s)});break;case"::placeholder":va(ol(i,{props:[rt(h,/:(plac\w+)/,":"+zt+"input-$1")]})),va(ol(i,{props:[rt(h,/:(plac\w+)/,":"+ji+"$1")]})),va(ol(i,{props:[rt(h,/:(plac\w+)/,Gt+"input-$1")]})),va(ol(i,{props:[h]})),Yr(i,{props:E0(f,s)});break}return""})}}var Ty={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},De={},ja=typeof process<"u"&&De!==void 0&&(De.REACT_APP_SC_ATTR||De.SC_ATTR)||"data-styled",F0="active",P0="data-styled-version",ic="6.1.19",ns=`/*!sc*/
`,Pu=typeof window<"u"&&typeof document<"u",zy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&De!==void 0&&De.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&De.REACT_APP_SC_DISABLE_SPEEDY!==""?De.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&De.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&De!==void 0&&De.SC_DISABLE_SPEEDY!==void 0&&De.SC_DISABLE_SPEEDY!==""&&De.SC_DISABLE_SPEEDY!=="false"&&De.SC_DISABLE_SPEEDY),uc=Object.freeze([]),Ta=Object.freeze({});function Ay(i,r,f){return f===void 0&&(f=Ta),i.theme!==f.theme&&i.theme||r||f.theme}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cy=/(^-|-$)/g;function z0(i){return i.replace(wy,"-").replace(Cy,"")}var Oy=/(a)(d)/gi,Xu=52,A0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Vr(i){var r,f="";for(r=Math.abs(i);r>Xu;r=r/Xu|0)f=A0(r%Xu)+f;return(A0(r%Xu)+f).replace(Oy,"$1-$2")}var Nr,ep=5381,xa=function(i,r){for(var f=r.length;f;)i=33*i^r.charCodeAt(--f);return i},np=function(i){return xa(ep,i)};function lp(i){return Vr(np(i)>>>0)}function _y(i){return i.displayName||i.name||"Component"}function Dr(i){return typeof i=="string"&&!0}var ap=typeof Symbol=="function"&&Symbol.for,ip=ap?Symbol.for("react.memo"):60115,My=ap?Symbol.for("react.forward_ref"):60112,Ry={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ny=((Nr={})[My]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nr[ip]=up,Nr);function w0(i){return("type"in(r=i)&&r.type.$$typeof)===ip?up:"$$typeof"in i?Ny[i.$$typeof]:Ry;var r}var Dy=Object.defineProperty,Uy=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,By=Object.getOwnPropertyDescriptor,$y=Object.getPrototypeOf,O0=Object.prototype;function cp(i,r,f){if(typeof r!="string"){if(O0){var s=$y(r);s&&s!==O0&&cp(i,s,f)}var h=Uy(r);C0&&(h=h.concat(C0(r)));for(var y=w0(i),b=w0(r),D=0;D<h.length;++D){var A=h[D];if(!(A in Hy||f&&f[A]||b&&A in b||y&&A in y)){var v=By(r,A);try{Dy(i,A,v)}catch{}}}}return i}function za(i){return typeof i=="function"}function ls(i){return typeof i=="object"&&"styledComponentId"in i}function _l(i,r){return i&&r?"".concat(i," ").concat(r):i||r||""}function Xr(i,r){if(i.length===0)return"";for(var f=i[0],s=1;s<i.length;s++)f+=i[s];return f}function zi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Qr(i,r,f){if(f===void 0&&(f=!1),!f&&!zi(i)&&!Array.isArray(i))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)i[s]=Qr(i[s],r[s]);else if(zi(r))for(var s in r)i[s]=Qr(i[s],r[s]);return i}function as(i,r){Object.defineProperty(i,"toString",{value:r})}function Ai(i){for(var r=[],f=1;f<arguments.length;f++)r[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Gy=(function(){function i(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return i.prototype.indexOfGroup=function(r){for(var f=0,s=0;s<r;s++)f+=this.groupSizes[s];return f},i.prototype.insertRules=function(r,f){if(r>=this.groupSizes.length){for(var s=this.groupSizes,h=s.length,y=h;r>=y;)if((y<<=1)<0)throw Ai(16,"".concat(r));this.groupSizes=new Uint32Array(y),this.groupSizes.set(s),this.length=y;for(var b=h;b<y;b++)this.groupSizes[b]=0}for(var D=this.indexOfGroup(r+1),A=(b=0,f.length);b<A;b++)this.tag.insertRule(D,f[b])&&(this.groupSizes[r]++,D++)},i.prototype.clearGroup=function(r){if(r<this.length){var f=this.groupSizes[r],s=this.indexOfGroup(r),h=s+f;this.groupSizes[r]=0;for(var y=s;y<h;y++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(r){var f="";if(r>=this.length||this.groupSizes[r]===0)return f;for(var s=this.groupSizes[r],h=this.indexOfGroup(r),y=h+s,b=h;b<y;b++)f+="".concat(this.tag.getRule(b)).concat(ns);return f},i})(),Wu=new Map,tc=new Map,Iu=1,Qu=function(i){if(Wu.has(i))return Wu.get(i);for(;tc.has(Iu);)Iu++;var r=Iu++;return Wu.set(i,r),tc.set(r,i),r},Ly=function(i,r){Iu=r+1,Wu.set(i,r),tc.set(r,i)},Yy="style[".concat(ja,"][").concat(P0,'="').concat(ic,'"]'),qy=new RegExp("^".concat(ja,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ky=function(i,r,f){for(var s,h=f.split(","),y=0,b=h.length;y<b;y++)(s=h[y])&&i.registerName(r,s)},Vy=function(i,r){for(var f,s=((f=r.textContent)!==null&&f!==void 0?f:"").split(ns),h=[],y=0,b=s.length;y<b;y++){var D=s[y].trim();if(D){var A=D.match(qy);if(A){var v=0|parseInt(A[1],10),R=A[2];v!==0&&(Ly(R,v),ky(i,R,A[3]),i.getTag().insertRules(v,h)),h.length=0}else h.push(D)}}},_0=function(i){for(var r=document.querySelectorAll(Yy),f=0,s=r.length;f<s;f++){var h=r[f];h&&h.getAttribute(ja)!==F0&&(Vy(i,h),h.parentNode&&h.parentNode.removeChild(h))}};function Xy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var op=function(i){var r=document.head,f=i||r,s=document.createElement("style"),h=(function(D){var A=Array.from(D.querySelectorAll("style[".concat(ja,"]")));return A[A.length-1]})(f),y=h!==void 0?h.nextSibling:null;s.setAttribute(ja,F0),s.setAttribute(P0,ic);var b=Xy();return b&&s.setAttribute("nonce",b),f.insertBefore(s,y),s},Qy=(function(){function i(r){this.element=op(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var s=document.styleSheets,h=0,y=s.length;h<y;h++){var b=s[h];if(b.ownerNode===f)return b}throw Ai(17)})(this.element),this.length=0}return i.prototype.insertRule=function(r,f){try{return this.sheet.insertRule(f,r),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},i.prototype.getRule=function(r){var f=this.sheet.cssRules[r];return f&&f.cssText?f.cssText:""},i})(),Zy=(function(){function i(r){this.element=op(r),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(r,f){if(r<=this.length&&r>=0){var s=document.createTextNode(f);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},i.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},i})(),Ky=(function(){function i(r){this.rules=[],this.length=0}return i.prototype.insertRule=function(r,f){return r<=this.length&&(this.rules.splice(r,0,f),this.length++,!0)},i.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},i.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},i})(),M0=Pu,Jy={isServer:!Pu,useCSSOMInjection:!zy},rp=(function(){function i(r,f,s){r===void 0&&(r=Ta),f===void 0&&(f={});var h=this;this.options=Te(Te({},Jy),r),this.gs=f,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Pu&&M0&&(M0=!1,_0(this)),as(this,function(){return(function(y){for(var b=y.getTag(),D=b.length,A="",v=function(N){var U=(function(X){return tc.get(X)})(N);if(U===void 0)return"continue";var Q=y.names.get(U),W=b.getGroup(N);if(Q===void 0||!Q.size||W.length===0)return"continue";var V="".concat(ja,".g").concat(N,'[id="').concat(U,'"]'),P="";Q!==void 0&&Q.forEach(function(X){X.length>0&&(P+="".concat(X,","))}),A+="".concat(W).concat(V,'{content:"').concat(P,'"}').concat(ns)},R=0;R<D;R++)v(R);return A})(h)})}return i.registerId=function(r){return Qu(r)},i.prototype.rehydrate=function(){!this.server&&Pu&&_0(this)},i.prototype.reconstructWithOptions=function(r,f){return f===void 0&&(f=!0),new i(Te(Te({},this.options),r),this.gs,f&&this.names||void 0)},i.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(f){var s=f.useCSSOMInjection,h=f.target;return f.isServer?new Ky(h):s?new Qy(h):new Zy(h)})(this.options),new Gy(r)));var r},i.prototype.hasNameForId=function(r,f){return this.names.has(r)&&this.names.get(r).has(f)},i.prototype.registerName=function(r,f){if(Qu(r),this.names.has(r))this.names.get(r).add(f);else{var s=new Set;s.add(f),this.names.set(r,s)}},i.prototype.insertRules=function(r,f,s){this.registerName(r,f),this.getTag().insertRules(Qu(r),s)},i.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},i.prototype.clearRules=function(r){this.getTag().clearGroup(Qu(r)),this.clearNames(r)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Wy=/&/g,Iy=/^\s*\/\/.*$/gm;function sp(i,r){return i.map(function(f){return f.type==="rule"&&(f.value="".concat(r," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(r," ")),f.props=f.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=sp(f.children,r)),f})}function Fy(i){var r,f,s,h=Ta,y=h.options,b=y===void 0?Ta:y,D=h.plugins,A=D===void 0?uc:D,v=function(U,Q,W){return W.startsWith(f)&&W.endsWith(f)&&W.replaceAll(f,"").length>0?".".concat(r):U},R=A.slice();R.push(function(U){U.type===ec&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Wy,f).replace(s,v))}),b.prefix&&R.push(jy),R.push(by);var N=function(U,Q,W,V){Q===void 0&&(Q=""),W===void 0&&(W=""),V===void 0&&(V="&"),r=V,f=Q,s=new RegExp("\\".concat(f,"\\b"),"g");var P=U.replace(Iy,""),X=vy(W||Q?"".concat(W," ").concat(Q," { ").concat(P," }"):P);b.namespace&&(X=sp(X,b.namespace));var J=[];return Fu(X,Sy(R.concat(Ey(function(Y){return J.push(Y)})))),J};return N.hash=A.length?A.reduce(function(U,Q){return Q.name||Ai(15),xa(U,Q.name)},ep).toString():"",N}var Py=new rp,Zr=Fy(),fp=Ue.createContext({shouldForwardProp:void 0,styleSheet:Py,stylis:Zr});fp.Consumer;Ue.createContext(void 0);function R0(){return G.useContext(fp)}var dp=(function(){function i(r,f){var s=this;this.inject=function(h,y){y===void 0&&(y=Zr);var b=s.name+y.hash;h.hasNameForId(s.id,b)||h.insertRules(s.id,b,y(s.rules,b,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=f,as(this,function(){throw Ai(12,String(s.name))})}return i.prototype.getName=function(r){return r===void 0&&(r=Zr),this.name+r.hash},i})(),t1=function(i){return i>="A"&&i<="Z"};function H0(i){for(var r="",f=0;f<i.length;f++){var s=i[f];if(f===1&&s==="-"&&i[0]==="-")return i;t1(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var hp=function(i){return i==null||i===!1||i===""},pp=function(i){var r,f,s=[];for(var h in i){var y=i[h];i.hasOwnProperty(h)&&!hp(y)&&(Array.isArray(y)&&y.isCss||za(y)?s.push("".concat(H0(h),":"),y,";"):zi(y)?s.push.apply(s,Ti(Ti(["".concat(h," {")],pp(y),!1),["}"],!1)):s.push("".concat(H0(h),": ").concat((r=h,(f=y)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||r in Ty||r.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return s};function Rl(i,r,f,s){if(hp(i))return[];if(ls(i))return[".".concat(i.styledComponentId)];if(za(i)){if(!za(y=i)||y.prototype&&y.prototype.isReactComponent||!r)return[i];var h=i(r);return Rl(h,r,f,s)}var y;return i instanceof dp?f?(i.inject(f,s),[i.getName(s)]):[i]:zi(i)?pp(i):Array.isArray(i)?Array.prototype.concat.apply(uc,i.map(function(b){return Rl(b,r,f,s)})):[i.toString()]}function e1(i){for(var r=0;r<i.length;r+=1){var f=i[r];if(za(f)&&!ls(f))return!1}return!0}var n1=np(ic),l1=(function(){function i(r,f,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&e1(r),this.componentId=f,this.baseHash=xa(n1,f),this.baseStyle=s,rp.registerId(f)}return i.prototype.generateAndInjectStyles=function(r,f,s){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,f,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))h=_l(h,this.staticRulesId);else{var y=Xr(Rl(this.rules,r,f,s)),b=Vr(xa(this.baseHash,y)>>>0);if(!f.hasNameForId(this.componentId,b)){var D=s(y,".".concat(b),void 0,this.componentId);f.insertRules(this.componentId,b,D)}h=_l(h,b),this.staticRulesId=b}else{for(var A=xa(this.baseHash,s.hash),v="",R=0;R<this.rules.length;R++){var N=this.rules[R];if(typeof N=="string")v+=N;else if(N){var U=Xr(Rl(N,r,f,s));A=xa(A,U+R),v+=U}}if(v){var Q=Vr(A>>>0);f.hasNameForId(this.componentId,Q)||f.insertRules(this.componentId,Q,s(v,".".concat(Q),void 0,this.componentId)),h=_l(h,Q)}}return h},i})(),gp=Ue.createContext(void 0);gp.Consumer;var Ur={};function a1(i,r,f){var s=ls(i),h=i,y=!Dr(i),b=r.attrs,D=b===void 0?uc:b,A=r.componentId,v=A===void 0?(function(Z,at){var I=typeof Z!="string"?"sc":z0(Z);Ur[I]=(Ur[I]||0)+1;var $="".concat(I,"-").concat(lp(ic+I+Ur[I]));return at?"".concat(at,"-").concat($):$})(r.displayName,r.parentComponentId):A,R=r.displayName,N=R===void 0?(function(Z){return Dr(Z)?"styled.".concat(Z):"Styled(".concat(_y(Z),")")})(i):R,U=r.displayName&&r.componentId?"".concat(z0(r.displayName),"-").concat(r.componentId):r.componentId||v,Q=s&&h.attrs?h.attrs.concat(D).filter(Boolean):D,W=r.shouldForwardProp;if(s&&h.shouldForwardProp){var V=h.shouldForwardProp;if(r.shouldForwardProp){var P=r.shouldForwardProp;W=function(Z,at){return V(Z,at)&&P(Z,at)}}else W=V}var X=new l1(f,U,s?h.componentStyle:void 0);function J(Z,at){return(function(I,$,Dt){var te=I.attrs,Ie=I.componentStyle,pe=I.defaultProps,ee=I.foldedComponentIds,Ut=I.styledComponentId,Yt=I.target,Ht=Ue.useContext(gp),C=R0(),B=I.shouldForwardProp||C.shouldForwardProp,tt=Ay($,Ht,pe)||Ta,st=(function(nt,ut,gt){for(var Vt,At=Te(Te({},ut),{className:void 0,theme:gt}),fn=0;fn<nt.length;fn+=1){var dn=za(Vt=nt[fn])?Vt(At):Vt;for(var Be in dn)At[Be]=Be==="className"?_l(At[Be],dn[Be]):Be==="style"?Te(Te({},At[Be]),dn[Be]):dn[Be]}return ut.className&&(At.className=_l(At.className,ut.className)),At})(te,$,tt),vt=st.as||Yt,m={};for(var _ in st)st[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&st.theme===tt||(_==="forwardedAs"?m.as=st.forwardedAs:B&&!B(_,vt)||(m[_]=st[_]));var L=(function(nt,ut){var gt=R0(),Vt=nt.generateAndInjectStyles(ut,gt.styleSheet,gt.stylis);return Vt})(Ie,st),q=_l(ee,Ut);return L&&(q+=" "+L),st.className&&(q+=" "+st.className),m[Dr(vt)&&!tp.has(vt)?"class":"className"]=q,Dt&&(m.ref=Dt),G.createElement(vt,m)})(Y,Z,at)}J.displayName=N;var Y=Ue.forwardRef(J);return Y.attrs=Q,Y.componentStyle=X,Y.displayName=N,Y.shouldForwardProp=W,Y.foldedComponentIds=s?_l(h.foldedComponentIds,h.styledComponentId):"",Y.styledComponentId=U,Y.target=s?h.target:i,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=s?(function(at){for(var I=[],$=1;$<arguments.length;$++)I[$-1]=arguments[$];for(var Dt=0,te=I;Dt<te.length;Dt++)Qr(at,te[Dt],!0);return at})({},h.defaultProps,Z):Z}}),as(Y,function(){return".".concat(Y.styledComponentId)}),y&&cp(Y,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function N0(i,r){for(var f=[i[0]],s=0,h=r.length;s<h;s+=1)f.push(r[s],i[s+1]);return f}var D0=function(i){return Object.assign(i,{isCss:!0})};function is(i){for(var r=[],f=1;f<arguments.length;f++)r[f-1]=arguments[f];if(za(i)||zi(i))return D0(Rl(N0(uc,Ti([i],r,!0))));var s=i;return r.length===0&&s.length===1&&typeof s[0]=="string"?Rl(s):D0(Rl(N0(s,r)))}function Kr(i,r,f){if(f===void 0&&(f=Ta),!r)throw Ai(1,r);var s=function(h){for(var y=[],b=1;b<arguments.length;b++)y[b-1]=arguments[b];return i(r,f,is.apply(void 0,Ti([h],y,!1)))};return s.attrs=function(h){return Kr(i,r,Te(Te({},f),{attrs:Array.prototype.concat(f.attrs,h).filter(Boolean)}))},s.withConfig=function(h){return Kr(i,r,Te(Te({},f),h))},s}var mp=function(i){return Kr(a1,i)},T=mp;tp.forEach(function(i){T[i]=mp(i)});function cc(i){for(var r=[],f=1;f<arguments.length;f++)r[f-1]=arguments[f];var s=Xr(is.apply(void 0,Ti([i],r,!1))),h=lp(s);return new dp(h,s)}const Ee={tablet:768,desktop:1024,wide:2560},j={mobile:i=>`
    @media (max-width: ${Ee.tablet-1}px) {
      ${i}
    }
  `,tablet:i=>`
    @media (min-width: ${Ee.tablet}px) and (max-width: ${Ee.desktop-1}px) {
      ${i}
    }
  `,desktop:i=>`
    @media (min-width: ${Ee.desktop}px) {
      ${i}
    }
  `,wide:i=>`
    @media (min-width: ${Ee.wide}px) {
      ${i}
    }
  `,tabletUp:i=>`
    @media (min-width: ${Ee.tablet}px) {
      ${i}
    }
  `,desktopUp:i=>`
    @media (min-width: ${Ee.desktop}px) {
      ${i}
    }
  `};function Aa(){if(typeof window>"u")return"desktop";const i=window.innerWidth;return i<Ee.tablet?"mobile":i<Ee.desktop?"tablet":i<Ee.wide?"desktop":"wide"}function rl(i){let r=!1;const f=()=>{r||(r=!0,requestAnimationFrame(()=>{i(),r=!1}))};return f.cancel=()=>{r=!1},f}function We(){const[i,r]=G.useState(()=>typeof window<"u"?window.innerWidth<Ee.desktop:!1);return G.useEffect(()=>{const f=window.matchMedia(`(max-width: ${Ee.desktop-1}px)`),s=h=>r(h.matches);return f.addEventListener("change",s),()=>f.removeEventListener("change",s)},[]),i}const i1=T.section`
    width: 100%;
    min-height: calc(100svh - 110px);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    ${j.tablet(`
        min-height: calc(100svh - 80px);
    `)}
    ${j.mobile(`
        min-height: calc(100svh - 150px);
    `)}
    ${j.wide(`
        min-height: calc(100lvh - 190px);
    `)}
`,u1=T.div`
    position: relative;
    z-index: 2;
    width: 100%;
    margin: 0 auto;
    padding: 110px 80px 40px;
    display: flex;
    flex-direction: column;
    gap: 47px;
    flex: 1;
    text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500;

    ${j.tablet(`
        padding: 40px 40px 50px;
        gap: 0;
    `)}

    ${j.mobile(`
        padding: 40px 20px 30px;
        gap: 0;
    `)}
    ${j.wide(`
        padding-top: 190px;
    `)}
`,c1=T.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;

    ${j.tablet(`
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
    `)}

    ${j.mobile(`
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
    `)}
`,o1=T.div`
    width: 630px;

    ${j.tablet(`
        display: contents;
    `)}

    ${j.mobile(`
        display: contents;
    `)}
`,r1=T.div`
    width: 494px;
    text-align: right;
    margin-left: auto;

    ${j.wide(`
        width: 878px;
    `)}

    ${j.tablet(`
        display: contents;
    `)}

    ${j.mobile(`
        display: contents;
    `)}
`,s1=T.h1`
    font-family: "Space Grotesk", sans-serif;
    font-size: 74px;
    font-weight: 500;
    color: #f7ff95;
    line-height: 0.85;
    letter-spacing: 0;
    margin: 0;
    text-transform: uppercase;

    ${j.wide(`
        font-size: 132px;
    `)}

    ${j.tablet(`
        font-size: 74px;
    `)}

    ${j.mobile(`
        font-size: 40px;
    `)}
`,f1=T.h2`
    font-family: "Space Grotesk", sans-serif;
    font-size: 74px;
    font-weight: 500;
    color: #f7ff95;
    line-height: 0.85;
    margin: 0;
    text-transform: uppercase;

    ${j.wide(`
        font-size: 132px;
    `)}

    ${j.tablet(`
        font-size: 74px;
        line-height: 0.9;
    `)}

    ${j.mobile(`
        font-size: 36px;
        line-height: 0.9;
    `)}
`,d1=T.p`
    font-family: "Space Grotesk", sans-serif;
    font-size: 21px;
    font-weight: 500;
    color: #ffffff;
    line-height: 1.3;
    max-width: 411px;
    margin: 0;
    text-transform: uppercase;

    ${j.wide(`
        font-size: 32px;
        max-width: 731px;
    `)}

    ${j.tablet(`
        font-size: 19px;
        max-width: 411px;
        padding: 47px 0;
    `)}

    ${j.mobile(`
        font-size: 17px;
        max-width: 100%;
        padding: 30px 0;
    `)}
`,h1=T.p`
    font-family: "Space Mono", monospace;
    font-size: 21px;
    font-weight: 500;
    color: #fbfbfb;
    letter-spacing: 0.14px;
    line-height: 1.35;
    margin: 0;
    text-transform: uppercase;

    ${j.wide(`
        font-size: 26px;
        letter-spacing: 0.26px;
    `)}

    ${j.tablet(`
        font-size: 19px;
    `)}

    ${j.mobile(`
        font-size: 17px;
    `)}
`,p1=T.div`
    width: 630px;

    ${j.tablet(`
        width: 100%;
        text-align: left;
    `)}

    ${j.mobile(`
        width: 100%;
        text-align: left;
    `)}
`,g1=T.div`
    ${j.tablet(`
        order: 2;
        width: 100%;
        text-align: right;
        margin-top: auto;
    `)}

    ${j.mobile(`
        order: 2;
        width: 100%;
        text-align: right;
        margin-top: auto;
    `)}
`,m1=T.div`
    ${j.tablet(`
        order: 3;
        width: 100%;
    `)}

    ${j.mobile(`
        order: 3;
        width: 100%;
    `)}
`;function y1(){const i=We();return c.jsx(i1,{"data-slide":!0,children:c.jsxs(u1,{children:[c.jsx(p1,{children:c.jsxs(s1,{children:["Digital",c.jsx("br",{}),"disruption",c.jsx("br",{}),"diaries:"]})}),c.jsxs(c1,{children:[c.jsx(o1,{children:c.jsx(m1,{children:c.jsx(d1,{children:"Three hypothetical stories expose how cyber attacks could swiftly disrupt and destabilise daily life – and explore the solutions required to protect our most critical systems"})})}),c.jsx(r1,{children:c.jsx(g1,{children:c.jsxs(f1,{children:["what",c.jsx("br",{}),"if Europe's",c.jsx("br",{}),"networks",c.jsx("br",{}),"went dark?"]})})})]}),c.jsx(h1,{children:i?"TAP TO EXPLORE":"SCROLL TO EXPLORE"})]})})}const v1=T.section`
    width: 100%;
    min-height: 100lvh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,x1=T.div`
    position: relative;
    z-index: 2;
    background: #000000;
    width: 550px;
    max-width: calc(100% - 40px);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,b1=T.p`
    font-family: "Space Mono", monospace;
    font-size: 19px;
    font-weight: 500;
    color: #f7ff95;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.35;
    letter-spacing: 0.19px;
    margin: 0;

    ${j.mobile(`
        font-size: 16px;
    `)}

    ${j.wide(`
        font-size: 35px;
    `)}
`;function S1(){return c.jsx(v1,{"data-slide":!0,"data-slide-intro-end":!0,id:"warning",children:c.jsx(x1,{children:c.jsxs(b1,{children:["Flashing lights warning:",c.jsx("br",{}),"the following content contains glitch effects that may affect those with photosensitive epilepsy"]})})})}const E1=T.section`
    width: 100%;
    height: 200vh;
    position: relative;
`,j1=T.div`
    width: 100%;
    height: 100lvh;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
`,T1=T.p`
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: 500;
    color: #f7ff95;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.4;
    margin: 0;

    ${j.wide(`
        font-size: 42px;
    `)}
`,z1="One click...";function A1(){const i=z1;return c.jsx(E1,{"data-slide":!0,children:c.jsx(j1,{children:c.jsx(T1,{children:i})})})}const w1=T.section`
    width: 100%;
    height: 200vh;
    position: relative;
`,C1=T.div`
    width: 100%;
    height: 100lvh;
    background: #f7ff95;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;
    position: sticky;
    top: 0;

    ${j.mobile(`
        align-items: flex-start;
    `)}
`,O1=T.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        min-height: calc(100dvh - 40px);
        width: 100%;
    }
`,_1=T.div`
    font-family: "logic-monospace", monospace;
    font-size: 24px;
    font-weight: 400;
    color: #000000;
    text-align: center;
    line-height: 1.35;
    letter-spacing: -0.84px;
    max-width: 846px;
    width: 100%;

    ${j.tablet(`
        padding: 0 100px;
    `)}

    ${j.mobile(`
        font-size: 18px;
        max-width: 100%;
        padding: 0 20px;
        text-align: left;
        line-height: 1.45;
    `)}

    ${j.wide(`
        font-size: 42px;
        letter-spacing: -1.5px;
    `)}

    p {
        margin: 0 0 12px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    strong {
        font-weight: 700;
    }
`;function M1(){return c.jsx(w1,{"data-slide":!0,children:c.jsx(C1,{children:c.jsx(O1,{children:c.jsxs(_1,{children:[c.jsxs("p",{children:[c.jsx("strong",{children:"That is all it takes"})," to bring down networks, disrupt lives and cause a cascade of harm in today's hyper-connected world."]}),c.jsxs("p",{children:["Against this backdrop, what could happen if three key European industries – ",c.jsx("strong",{children:"energy"}),","," ",c.jsx("strong",{children:"finance"})," and"," ",c.jsx("strong",{children:"transport"})," – came under fire?"]}),c.jsx("p",{children:"What solutions exist to protect society in this new age of digital warfare?"})]})})})})}const R1=T.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(19, 19, 19, 0.5);
    backdrop-filter: blur(4px);
    padding: 8px 240px 12px;
    transform: translateY(${({$visible:i})=>i?"0":"100%"});
    transition: transform 0.4s ease;

    ${j.tablet(`
        padding: 8px 80px 12px;
    `)}

    ${j.mobile(`
        padding: 8px 20px 12px;
    `)}
`,H1=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 167px;

    ${j.tablet(`
        gap: 80px;
    `)}

    ${j.mobile(`
        gap: 40px;
    `)}
`,N1=T.button`
    background: transparent;
    color: ${i=>i.$active?"#ffffff":"rgba(255, 255, 255, 0.5)"};
    border: none;
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 19px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3;
    padding: 0;
    width: 90px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff;
    }

    ${j.mobile(`
        font-size: 15px;
        width: auto;
    `)}

    ${j.wide(`
        font-size: 35px;
    `)}
`;function D1({tabs:i,activeTab:r,onTabChange:f,visible:s=!0}){return c.jsx(R1,{$visible:s,children:c.jsx(H1,{children:i.map((h,y)=>c.jsx(N1,{$active:r===y,onClick:()=>f(y),children:h.label},h.id))})})}const U1="/ft-article-sopra-steria/";function yt(i){const r=i.startsWith("/")?i.slice(1):i;return`${U1}${r}`}function Jr(i){if(!i||i.includes("_mobile"))return i;const r=i.match(/\.[^.]+$/)?.[0]||"";return i.includes("_desktop")?i.replace(`_desktop${r}`,`_mobile${r}`):i.replace(r,`_mobile${r}`)}T.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.9)"};
    line-height: 1.7;
    margin: 0 0 24px 0;
    text-align: left;

    &:last-child {
        margin-bottom: 0;
    }

    ${j.mobile(`
        font-size: 15px;
        margin-bottom: 20px;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;function yp(i=20,r=20,f=100,s=170){let h="";for(let y=0;y<=i;y++){const b=(y/i*r).toFixed(2),D=Math.floor(Math.random()*f),A=Math.floor(Math.random()*s);h+=`${b}% { clip: rect(${D}px, 9999px, ${A}px, 0); }
`}return h+=`${r}% { clip: rect(0, 0, 0, 0); }
`,h+=`100% { clip: rect(0, 0, 0, 0); }
`,h}const B1=cc`${yp(20,60)}`,$1=cc`${yp(20,60)}`,G1=is`
    position: relative;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        overflow: hidden;
        padding: inherit;
    }

    &::before {
        left: -2px;
        text-shadow: -1px 0 red;
        animation: ${B1} 6s linear infinite;
    }

    &::after {
        left: 2px;
        text-shadow: 1px 0 blue;
        animation: ${$1} 8s linear infinite;
    }
`,L1=T.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`,vp=T.p`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.2;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;
    // ${G1}

    ${j.tablet(`
        font-size: 25px;
    `)}

    ${j.mobile(`
        font-size: 21px;
    `)}

    ${j.wide(`
        font-size: 51px;
    `)}
`,Y1=cc`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,q1=T.span`
    display: inline-block;
    width: 2px;
    height: 0.8em;
    background: #000;
    margin-left: 4px;
    margin-bottom: 6px;
    vertical-align: middle;
    animation: ${Y1} 0.7s step-end infinite;
`,k1=T(vp)`
    color: #000;
    background: #fff;
    padding: 2px 8px;
    margin: 4px 2px;
    margin-bottom: 8px;

    &::before,
    &::after {
        display: none;
    }
`,V1=T.h2`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.3;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;
    display: inline;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;

    ${j.tablet(`
        font-size: 25px;
    `)}

    ${j.mobile(`
        font-size: 21px;
    `)}

    ${j.wide(`
        font-size: 51px;
    `)}
`;function us({chapter:i,title:r,subtitle:f}){const[s,h]=G.useState(""),[y,b]=G.useState(!1),D=G.useRef(null);return G.useEffect(()=>{if(!r)return;const A=D.current;if(!A)return;const v=new IntersectionObserver(([R])=>{R.isIntersecting&&!y&&b(!0)},{threshold:.5});return v.observe(A),()=>v.disconnect()},[r,y]),G.useEffect(()=>{if(!y||!r)return;const A=`_${r}`;let v=0;const R=setInterval(()=>{v++,h(A.slice(0,v)),v>=A.length&&clearInterval(R)},150);return()=>clearInterval(R)},[y,r]),c.jsxs(L1,{children:[c.jsx("div",{children:c.jsx(vp,{"data-text":i,children:i})}),r&&c.jsx("div",{children:c.jsxs(k1,{ref:D,children:[s,c.jsx(q1,{})]})}),c.jsx("div",{children:c.jsxs(V1,{children:["> ",f]})})]})}T.p`
    color: #000000;
    text-align: center;
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 42px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 50.4px */
    margin: 105px 0 0 0;
    letter-spacing: 0;

    /* Responsive sizing */
    ${j.tablet`
        font-size: 36px;
        line-height: 120%;
        margin-top: 80px;
    `}

    ${j.mobile`
        font-size: 28px;
        line-height: 120%;
        margin-top: 60px;
    `}

    ${j.wide`
        font-size: 72px;
    `}
`;T.div`
    background: ${i=>i.$background||"rgba(255, 255, 255, 0.1)"};
    border-left: 4px solid ${i=>i.$accentColor||"#FFD700"};
    padding: 32px 40px;
    margin: 40px 0;
    text-align: left;

    ${j.mobile(`
        padding: 24px 20px;
        margin: 32px 0;
    `)}
`;T.div`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 64px;
    font-weight: 400;
    color: ${i=>i.$color||"#fff"};
    line-height: 1;
    margin-bottom: 16px;

    ${j.tablet(`
        font-size: 48px;
    `)}

    ${j.mobile(`
        font-size: 40px;
    `)}

    ${j.wide(`
        font-size: 102px;
    `)}
`;T.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.9)"};
    line-height: 1.6;
    margin: 0 0 8px 0;

    ${j.mobile(`
        font-size: 15px;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;T.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.6)"};
    line-height: 1.4;
    margin: 0;
    font-style: italic;

    ${j.mobile(`
        font-size: 12px;
    `)}

    ${j.wide(`
        font-size: 26px;
    `)}
`;T.blockquote`
    margin: 48px 0;
    padding: 0;
    text-align: left;
    border-left: 3px solid ${i=>i.$accentColor||"#FFD700"};
    padding-left: 32px;

    ${j.mobile(`
        margin: 32px 0;
        padding-left: 20px;
    `)}
`;T.p`
    font-family: "EB Garamond", Georgia, serif;
    font-size: 28px;
    font-style: italic;
    font-weight: 400;
    color: ${i=>i.$color||"#fff"};
    line-height: 1.4;
    margin: 0 0 16px 0;

    ${j.tablet(`
        font-size: 24px;
    `)}

    ${j.mobile(`
        font-size: 20px;
    `)}

    ${j.wide(`
        font-size: 49px;
    `)}
`;T.footer`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.7)"};
    line-height: 1.4;

    ${j.mobile(`
        font-size: 13px;
    `)}

    ${j.wide(`
        font-size: 28px;
    `)}
`;T.span`
    font-weight: 600;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.9)"};
`;T.span`
    display: block;
    margin-top: 4px;
`;T.div`
    padding: 0;
`;T.p`
    color: #000000;
    text-align: center;
    font-family: "EB Garamond", serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 48px */
    margin: 0 0 32px 0;
    letter-spacing: 0;

    ${j.tablet(`
        font-size: 30px;
    `)}
    ${j.mobile(`
        font-size: 21px;
    `)}

    ${j.wide(`
        font-size: 68px;
    `)}
`;T.p`
    color: #000000;
    text-align: center;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 20.4px */
    margin: 0;
    letter-spacing: 0;
    ${j.tablet(`
        font-size: 14px;
    `)}
    ${j.mobile(`
        font-size: 12px;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;T.h3`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    color: ${i=>i.$color||"#fff"};
    line-height: 1.3;
    margin: 48px 0 24px 0;
    text-align: left;

    &:first-child {
        margin-top: 0;
    }

    ${j.tablet(`
        font-size: 28px;
    `)}

    ${j.mobile(`
        font-size: 24px;
        margin: 40px 0 20px 0;
    `)}

    ${j.wide(`
        font-size: 54px;
    `)}
`;T.div`
    margin: 40px 0;
    text-align: left;
`;T.h4`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${i=>i.$accentColor||"#FFD700"};
    margin: 0 0 24px 0;

    ${j.mobile(`
        font-size: 12px;
        margin-bottom: 16px;
    `)}

    ${j.wide(`
        font-size: 26px;
        letter-spacing: 3.6px;
    `)}
`;T.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;T.li`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.9)"};
    line-height: 1.5;
    padding-left: 24px;
    position: relative;

    &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${i=>i.$accentColor||"#FFD700"};
        font-weight: 700;
    }

    ${j.mobile(`
        font-size: 15px;
        padding-left: 20px;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;const X1=cc`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,Q1=T.span`
    animation: ${X1} 1s step-end infinite;
`;function Z1({time:i}){const r=i.indexOf(":");if(r===-1)return i;const f=i.slice(0,r),s=i.slice(r+1);return c.jsxs(c.Fragment,{children:[f,c.jsx(Q1,{children:":"}),s]})}T.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    text-align: left;

    ${j.mobile(`
        flex-direction: column;
        gap: 8px;
    `)}
`;T.span`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: ${i=>i.$color||"#fff"};
    min-width: 80px;
    flex-shrink: 0;

    ${j.mobile(`
        font-size: 15px;
        min-width: auto;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;T.span`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${i=>i.$color||"rgba(255, 255, 255, 0.9)"};
    line-height: 1.6;

    ${j.mobile(`
        font-size: 15px;
    `)}

    ${j.wide(`
        font-size: 32px;
    `)}
`;const se=22.8;T.div`
    display: none;
    height: ${i=>i.height||"1em"};

    ${j.mobile(`
        display: block;
    `)}
`;T.div`
    display: block;
    height: ${i=>i.height||"1em"};

    ${j.mobile(`
        display: none;
    `)}
`;T.div`
    display: none;
    height: ${i=>i.height||"1em"};

    ${j.tablet(`
        display: block;
    `)}
`;T.div`
    height: ${i=>i.height||"16px"};
`;const cs=(i=5,r=!1)=>{const[f,s]=G.useState(!1),h=G.useRef(null);return G.useEffect(()=>{const b=new IntersectionObserver(([D])=>{D.isIntersecting&&s(!0)},{threshold:.1,rootMargin:"0px 0px -10% 0px"});return h.current&&b.observe(h.current),()=>b.disconnect()},[]),{ref:h,animatePathChildren:b=>b,inView:f}};T.div`
    width: 100%;
    background: ${i=>i.backgroundColor||"#f2f0ea"};
    z-index: -1;
`;T.section`
    width: 100%;
    max-width: ${i=>i.maxWidth||"1036px"};
    margin: 0 auto;
    padding: ${i=>i.padding||"0px 40px"};
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;

    ${j.mobile(`
        padding: 0px 20px};
    `)}
`;T.div`
    margin: 0 auto;
    position: relative;
`;const K1=T.svg`
    top: 0;
    left: 0;
    width: 100%;
    height: ${i=>i.height||"150px"};
    pointer-events: none;
    display: block;

    ${i=>i.desktopHeight&&`
        @media (min-width: 1024px) {
            height: ${i.desktopHeight};
        }
    `}

    ${i=>i.tabletHeight&&`
        @media (min-width: 768px) and (max-width: 1023px) {
            height: ${i.tabletHeight};
        }
    `}

    ${i=>i.mobileHeight&&`
        @media (max-width: 767px) {
            height: ${i.mobileHeight};
        }
    `}
`,J1=Ue.forwardRef(({children:i,animationDuration:r=1,reverse:f=!1,height:s,desktopHeight:h,tabletHeight:y,mobileHeight:b,...D})=>{const{ref:A,animatePathChildren:v}=cs(r,f),R=v(i);return c.jsx(K1,{ref:A,height:s,desktopHeight:h,tabletHeight:y,mobileHeight:b,...D,children:R})});T.div`
    position: relative;
    width: 50%;
    margin-right: auto;
`;T.div`
    position: relative;
    width: 50%;
    margin-left: auto;
`;T.div`
    z-index: 1;
    position: relative;
    width: 50%;
    margin-left: auto;
    margin-right: 10%;
    padding-left: 40px;
    background: ${i=>i.backgroundColor||"transparent"};
    outline: 3px solid ${i=>i.backgroundColor||"transparent"};

    ${j.tablet(`
        width: 60%;
    `)}
    ${j.mobile(`
        width: 80%;
    `)}
`;T.div`
    position: relative;
    width: 50%;
    margin-right: auto;
    padding-right: 40px;
    background: ${i=>i.backgroundColor||"transparent"};
    outline: 3px solid ${i=>i.backgroundColor||"transparent"};
    z-index: 1;

    ${j.tablet(`
        width: 60%;
    `)}
    ${j.mobile(`
        width: 90%;
    `)}
`;const W1=T.svg`
    width: 100%;
    height: 100%;
    display: block;
`,Br=Ue.forwardRef(({children:i,animationDuration:r=1,reverse:f=!1,...s})=>{const{ref:h,animatePathChildren:y}=cs(r,f),b=y(i);return c.jsx(W1,{ref:h,...s,children:b})});Ue.forwardRef(({animationDuration:i=1,height:r="450px",tabletHeight:f="300px",mobileHeight:s="200px",...h},y)=>c.jsx(J1,{ref:y,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 523 469",fill:"none",preserveAspectRatio:"none",height:r,tabletHeight:f,mobileHeight:s,animationDuration:i,...h,children:c.jsx("path",{d:"M521.5 0V247.5C521.667 257.5 521.5 279 512 294.5C510 297.763 499 323 443 323H367.5H0.5V469",stroke:"black",strokeWidth:"1",vectorEffect:"non-scaling-stroke"})}));Ue.forwardRef(({animationDuration:i=1,reverse:r=!1,tall:f=!1,...s},h)=>{const[y,b]=G.useState(()=>Aa()==="mobile");return G.useEffect(()=>{const D=()=>{b(Aa()==="mobile")};return window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]),y?f?c.jsx(Br,{ref:h,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 383 484",fill:"none",preserveAspectRatio:"none",animationDuration:i,reverse:r,...s,children:c.jsx("path",{d:"M1 345.501C1.00007 360.299 14.4132 372.387 31.0781 372.388H169.612C182.163 372.388 192.434 381.511 192.435 392.879V484H191.435V392.879C191.434 382.164 181.718 373.388 169.612 373.388H31.0781C13.9674 373.387 7.39752e-05 360.952 0 345.501V321.336H1V345.501ZM190.5 57.8359H355.142C370.527 57.8362 383 70.3085 383 85.6943V128.578H382V85.6943C382 70.8608 369.975 58.8362 355.142 58.8359H189.979V58H189.5V0H190.5V57.8359Z",fill:"black",vectorEffect:"non-scaling-stroke"})}):c.jsx(Br,{ref:h,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 343 307",fill:"none",preserveAspectRatio:"none",animationDuration:i,reverse:r,...s,children:c.jsx("path",{d:"M342.5 76.9568L342.5 27.8589C342.5 12.749 330.251 0.500031 315.141 0.500031L80.5 0.500038M0.49998 182.834L0.499978 209.137C0.499977 225.6 13.5451 238.947 29.6371 238.947L49.0255 238.947L113.932 238.947L152.567 238.947C164.315 238.947 173.838 248.689 173.838 260.707L173.838 306.5",stroke:"black",strokeWidth:"1",vectorEffect:"non-scaling-stroke"})}):c.jsx(Br,{ref:h,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1038 778",fill:"none",preserveAspectRatio:"none",animationDuration:i,reverse:r,...s,children:c.jsx("path",{d:"M1037 378.484L1037 221.996C1037 166.768 992.23 121.996 937.002 121.996L0.499935 121.996L0.499946 -9.06139e-05M1.50065 328.499L1.50063 542.999C1.50063 598.227 46.2722 642.999 101.501 642.999L301 642.999L346.502 642.999L447.394 642.999C487.85 642.999 520.591 675.9 520.393 716.355L520.393 777.5",stroke:"black",strokeWidth:"1",vectorEffect:"non-scaling-stroke"})})});const I1=T.svg`
    width: 100%;
    height: ${i=>i.height||"100%"};
    display: block;

    ${i=>i.desktopHeight&&`
        @media (min-width: 1024px) {
            height: ${i.desktopHeight};
        }
    `}

    ${i=>i.tabletHeight&&`
        @media (min-width: 768px) and (max-width: 1023px) {
            height: ${i.tabletHeight};
        }
    `}

    ${i=>i.mobileHeight&&`
        @media (max-width: 767px) {
            height: ${i.mobileHeight};
        }
    `}
`,U0=Ue.forwardRef(({children:i,animationDuration:r=1,reverse:f=!1,...s})=>{const{ref:h,animatePathChildren:y}=cs(r,f),b=y(i);return c.jsx(I1,{ref:h,...s,children:b})});Ue.forwardRef(({animationDuration:i=1,reverse:r=!1,...f},s)=>{const[h,y]=G.useState(()=>Aa()==="mobile");return G.useEffect(()=>{const b=()=>{y(Aa()==="mobile")};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]),h?c.jsx(U0,{ref:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 443",fill:"none",preserveAspectRatio:"none",animationDuration:i,reverse:r,...f,children:c.jsx("path",{d:"M0.499973 183.172L0.499968 140.359C0.499967 125.249 12.749 113 27.8588 113L193 113L193 -1.40277e-05M383.5 276.999L383.5 301.14C383.5 316.25 368.805 328.499 350.678 328.499L248.535 328.499L260.23 328.499L181.953 328.499L181.953 443",stroke:"black",strokeWidth:"1",vectorEffect:"non-scaling-stroke"})}):c.jsx(U0,{ref:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1038 558",fill:"none",preserveAspectRatio:"none",animationDuration:i,reverse:r,...f,children:c.jsx("path",{d:"M1037.5 243.364V457C1037.5 512.228 992.729 557 937.5 557H15.4639M0.5 384.856L0.5 226.513C0.5 171.285 45.2715 126.513 100.5 126.513L521 126.945V0",stroke:"black",strokeWidth:"1",vectorEffect:"non-scaling-stroke"})})});const F1=T.div`
    width: ${se}px;
    height: ${se}px;
    border-radius: 50%;
    background-color: #000000;
    flex-shrink: 0;
    margin-right: 16px;
    transform: translateX(-50%);
    opacity: 0;

    ${i=>i.$animate&&`
        animation: circleScaleIn 0.6s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    `}

    @keyframes circleScaleIn {
        from {
            scale: 0;
            opacity: 0;
        }
        to {
            scale: 1;
            opacity: 1;
        }
    }

    ${i=>i.hideOnMobile&&j.mobile(`
            display: none;
        `)}

    ${i=>i.showOnlyOnMobile&&`
        display: none;
        ${j.mobile(`
            display: block;
        `)}
    `}

    ${i=>i.hideOnTablet&&j.tablet(`
            display: none;
        `)}
`,nn=Ue.forwardRef(({children:i,hideOnMobile:r,showOnlyOnMobile:f,...s})=>{const[h,y]=G.useState(!1),b=G.useRef(null);return G.useEffect(()=>{const D=new IntersectionObserver(([A])=>{A.isIntersecting&&y(!0)},{threshold:.1,rootMargin:"0px 0px -10% 0px"});return b.current&&D.observe(b.current),()=>D.disconnect()},[]),c.jsx(F1,{ref:b,$animate:h,hideOnMobile:r,showOnlyOnMobile:f,...s,children:i})});T(nn)`
    ${i=>i.left||i.tabletLeft||i.mobileLeft?"position:absolute":""};
    left: ${i=>i.left||"auto"};
    transform: translateX(-50%) translateY(-10px);

    ${i=>i.tabletLeft&&j.tablet(`
            left: ${i.tabletLeft};
        `)}

    ${i=>i.mobileLeft&&j.mobile(`
            left: ${i.mobileLeft};
        `)}
`;T(nn)`
    position: absolute;
    left: ${i=>i.left||`-${se/2}px`};
    margin-bottom: auto;
    top: -${se/2}px;
    transform: none;
`;T(nn)`
    position: absolute;
    right: -${1.5*se}px;
    margin-bottom: auto;
    top: -${se/2}px;
    transform: none;
`;T(nn)`
    position: relative;
    left: -${se}px;
    margin-bottom: auto;
    margin-top: ${se/3}px;
    transform: none;
`;T(nn)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;T(nn)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;T(nn)`
    position: absolute;
    bottom: ${-se/2}px;
    left: ${i=>i.left||"50%"};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;T(nn)`
    position: absolute;
    top: ${-se/2}px;
    left: ${i=>i.left||`calc(50% - ${se/1.8}px)`};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;T(nn)`
    position: absolute;
    bottom: ${-se/2}px;
    left: ${i=>i.left||`-${se/2}px`};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;

    ${i=>i.mobileLeft&&j.mobile(`
            left: ${i.mobileLeft};
        `)}
`;T(nn)`
    position: absolute;
    bottom: ${-se/2}px;
    right: ${-se/2}px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;T(nn)`
    position: absolute;
    bottom: ${-se/2}px;
    right: calc(2% + ${se/2}px);
    flex-shrink: 0;
    transform: none;
`;const P1=T.p`
    line-height: 1.2;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    text-align: left;

    font-size: 19px;
    font-weight: 400;

    ${j.tablet(`
        font-weight: 400;
        font-size: 19px;
    `)}

    ${j.mobile(`
        font-weight: 300;
        font-size: 16px;
    `)}

    ${j.wide(`
        font-size: 35px;
    `)}

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: #000000;
        text-decoration: underline;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.7;
        }
    }
`,xp=Ue.forwardRef(({children:i,animationDuration:r=.6,...f})=>c.jsx(P1,{...f,children:i}));T.span`
    flex: 1;
    display: block;
`;T(xp)`
    width: 50%;
    display: flex;
    align-items: flex-start;
    padding-right: 32px;
`;T.div`
    max-width: 518px;
    margin: -20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;T(xp)`
    text-align: left;
    max-width: 100%;
`;T.div`
    position: relative;
    background: transparent;
    height: ${i=>i.height||"940px"};
    ${i=>i.desktopHeight&&`
        @media (min-width: 1024px) {
            height: ${i.desktopHeight};
        }
    `}

    ${i=>i.tabletHeight&&`
        @media (min-width: 768px) and (max-width: 1023px) {
            height: ${i.tabletHeight};
        }
    `}

    ${i=>i.mobileHeight&&`
        @media (max-width: 767px) {
            height: ${i.mobileHeight};
        }
    `}
`;T.div`
    position: absolute;
    bottom: 15px;
    left: 0;
    height: ${i=>i.height||"100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    padding-bottom: 80px;
    padding-top: 110px;
    ${j.tablet(`

    `)}
    ${j.mobile(`
        padding-bottom: 20px;
        padding-top: unset;
    `)}

    ${i=>i.desktopHeight&&`
        @media (min-width: 1024px) {
            height: ${i.desktopHeight};
        }
    `}

    ${i=>i.tabletHeight&&`
        @media (min-width: 768px) and (max-width: 1023px) {
            height: ${i.tabletHeight};
        }
    `}

    ${i=>i.mobileHeight&&`
        @media (max-width: 767px) {
            height: ${i.mobileHeight};
        }
    `}
`;T.div`
    position: relative;
    background: transparent;
    height: ${i=>i.height||"auto"};

    ${i=>i.desktopHeight&&`
        @media (min-width: 1024px) {
            height: ${i.desktopHeight};
        }
    `}

    ${i=>i.tabletHeight&&`
        @media (min-width: 768px) and (max-width: 1023px) {
            height: ${i.tabletHeight};
        }
    `}

    ${i=>i.mobileHeight&&`
        @media (max-width: 767px) {
            height: ${i.mobileHeight};
        }
    `}
`;T.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    ${j.mobile(`
        padding-bottom: 160px;
    `)}
`;function tv({delay:i=500,duration:r=1e3}={}){return G.useRef(null)}const Wr=T.div`
    text-align: center;
    max-width: 500px;
    font-family: "logic-monospace", monospace;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.96px;
    color: #000;

    span {
        background: ${({$bg:i})=>i||"#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    strong {
        font-weight: 700;
    }

    ${j.tablet(`
        font-size: 28px;
    `)}

    ${j.mobile(`
        font-size: 19px;
        line-height: 1.35;
        letter-spacing: -0.76px;
        text-align: left;
    `)}

    ${j.wide(`
        font-size: 51px;
        letter-spacing: -1.7px;
    `)}
`,ev=T.div`
    font-family: "logic-monospace", monospace;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.25;
    max-width: 500px;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;
    text-transform: uppercase;

    span {
        background: ${({$bg:i})=>i||"#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${j.tablet(`
        font-size: 28px;
    `)}

    ${j.mobile(`
        font-size: 22px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}

    ${j.wide(`
        font-size: 51px;
        letter-spacing: -1.7px;
    `)}
`,nv=T(ev)`
    ${j.mobile(`
        font-size: 30px;
        text-align: left;
    `)}
`;function B0({$bg:i,children:r}){const f=tv({delay:500,duration:1e3});return c.jsx(nv,{$bg:i,children:c.jsx("span",{ref:f,children:r})})}const os=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: auto 0;
    width: 100vw;
    max-width: 100%;

    ${j.mobile(`
        && { margin-top: auto; margin-bottom: auto; }
    `)}
`,he=T.div`
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid #fff;
    background: #000;

    && p {
        font-family: "logic-monospace", monospace;
        font-size: 26px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 0.9;
        text-align: center;
        color: #ebebeb;
        margin: 0;

        ${j.mobile(`
            font-size: 16px;
        `)}

        ${j.wide(`
            font-size: 46px;
            letter-spacing: -1.7px;
        `)}
    }
`,Ir=T.div`
    font-family: "logic-monospace", monospace;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;
    max-width: ${({maxWidth:i})=>i||"600px"};
    margin-bottom: 100px;

    span {
        background: ${({$bg:i})=>i||"#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${j.tablet(`
        font-size: 28px;
    `)}

    ${j.mobile(`
        font-family: "logic-monospace", monospace;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.76px;
        text-align: left;
        margin-bottom: 0;
        margin-top: auto;
        padding-bottom: 40px;
    `)}

    ${j.wide(`
        font-size: 51px;
        letter-spacing: -1.7px;
    `)}
`,lv=T.span`
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #000;
    background: ${({$color:i})=>i||"#f7ff95"};
    padding: 4px 8px 4px 16px;
    line-height: normal;

    ${j.mobile(`
        font-size: 21px;
    `)}

    ${j.wide(`
        font-size: 46px;
    `)}
`;function av({time:i,color:r}){return c.jsx(lv,{$color:r,children:c.jsx(Z1,{time:i})})}const iv=typeof window<"u"&&window.innerWidth<Ee.desktop;function oc(i){const r=G.useRef(null);return G.useEffect(()=>{if(iv)return;const f=r.current;if(!f||!f.src||!i)return;const s=f.src;if(s.startsWith("blob:"))return;let h,y=!1;return fetch(s).then(b=>{if(!b.ok)throw new Error(`HTTP ${b.status}`);return b.blob()}).then(b=>{y||(h=URL.createObjectURL(b),r.current&&(r.current.src=h))}).catch(b=>{console.warn("[useScrollVideo] blob preload failed, using original src:",b.message)}),()=>{y=!0,h&&URL.revokeObjectURL(h)}},[]),G.useEffect(()=>{if(!i)return;const f=i.on("change",s=>{const h=r.current;!h||!h.duration||isNaN(h.duration)||(h.currentTime=s*h.duration)});return()=>f()},[i]),r}const uv=typeof window<"u"&&window.innerWidth<768;function wi(){const i=G.useRef(null);return G.useEffect(()=>{const r=i.current;if(!r)return;const f=r.currentSrc||r.src;let s=!0,h=!1;const y=()=>{s&&(r.pause(),r.removeAttribute("src"),r.load(),s=!1)},b=()=>{s||(r.src=f,r.load(),s=!0)},D=new IntersectionObserver(([v])=>{v.isIntersecting?(b(),h&&r.play().catch(()=>{})):y()},{rootMargin:uv?"0%":"100%"}),A=new IntersectionObserver(([v])=>{h=v.isIntersecting,h&&s?r.play().catch(()=>{}):s&&r.pause()},{threshold:.1});return D.observe(r),A.observe(r),()=>{D.disconnect(),A.disconnect()}},[]),i}const cv=typeof window<"u"&&window.innerWidth<Ee.desktop,$0=T.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;function bp({path:i,fallbackPath:r,height:f="600px",width:s="100%",loop:h=!0,autoplay:y=!0,renderer:b="svg",scrollSync:D=!1,scrollProgress:A=null,initialFrame:v=0,finalFrame:R=1,preserveAspectRatio:N="xMidYMid meet"}){if(cv)return c.jsx($0,{style:{height:f,width:s}});const U=G.useRef(null),Q=G.useRef(!1),W=G.useRef(null);return G.useEffect(()=>{(async()=>{let P;try{const J=yt(i),Y=await fetch(J);if(!Y.ok)throw new Error(`HTTP error! status: ${Y.status}`);P=await Y.json()}catch(J){if(r)try{console.warn(`Primary animation path failed: ${i}, trying fallback: ${r}`);const Y=yt(r),Z=await fetch(Y);if(!Z.ok)throw new Error(`HTTP error! status: ${Z.status}`);P=await Z.json()}catch(Y){console.error("Failed to load both primary and fallback animation",J,Y);return}else{console.error(`Failed to load lottie animation: ${i}`,J);return}}const X=new IntersectionObserver(J=>{J.forEach(Y=>{if(Y.isIntersecting&&U.current&&!Q.current){Q.current=!0;const Z=lottie.loadAnimation({container:U.current,renderer:b,loop:h,autoplay:!1,animationData:P,rendererSettings:{preserveAspectRatio:N}});if(W.current=Z,v>0){const at=Z.getDuration(!0),I=v*at;Z.goToAndStop(Math.round(I),!0)}X.unobserve(Y.target)}})},{rootMargin:"100%"});return U.current&&X.observe(U.current),()=>{X.disconnect()}})()},[i,r,h,y,b,D,v,N]),G.useEffect(()=>{if(!y||D||A)return;let V=null,P=!1;const X=()=>{const Y=W.current,Z=U.current;if(!Y||!Z)return;if(!V){let $=Z.parentElement;for(;$&&$!==document.body;){if($.style.opacity!==""){V=$;break}$=$.parentElement}V=V||Z}const at=V.getBoundingClientRect(),I=at.top<=0&&at.bottom>0;I&&!P?(P=!0,Y.goToAndPlay(0)):!I&&P&&(P=!1,Y.pause())},J=rl(X);return X(),window.addEventListener("scroll",J,{passive:!0}),()=>{J.cancel(),window.removeEventListener("scroll",J)}},[y,D,A]),G.useEffect(()=>{if(!D||!W.current||!U.current)return;const P=rl(()=>{const X=U.current,J=W.current;if(!X||!J)return;const Y=X.getBoundingClientRect(),Z=window.innerHeight,at=1-Y.top/(Z+Y.height),I=Math.max(0,Math.min(1,at)),$=J.getDuration(!0),Dt=I*$;J.goToAndStop(Dt,!0)});return window.addEventListener("scroll",P,!1),()=>{P.cancel(),window.removeEventListener("scroll",P,!1)}},[D]),G.useEffect(()=>{if(!A)return;const V=A.onChange(P=>{const X=W.current;if(!X)return;const J=X.getDuration(!0),Y=R-v,Z=(v+P*Y)*J;X.goToAndStop(Math.round(Z),!0)});return()=>V()},[A,v,R]),c.jsx($0,{ref:U,style:{width:s,height:f}})}const ov=T.div`
    width: ${i=>i.$width||"100%"};
    height: ${i=>i.$height||"auto"};
    max-height: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;function rs({animations:i,heights:r=null,widths:f={},height:s=null,width:h=null,loop:y=!0,autoplay:b=!0,scrollSync:D=!1,scrollProgress:A=null,initialFrame:v=0,finalFrame:R=1,preserveAspectRatio:N="xMidYMid meet"}){const[U,Q]=G.useState(()=>Aa());G.useEffect(()=>{const Z=()=>{Q(Aa())};return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]);const W=Z=>{const at=Z==="wide"?"desktop":Z;if(typeof i=="string"){const I=i.split("/").pop();return`/lottie/${at}/${I}`}return i[at]||i.desktop},V=W(U),P=U!=="desktop"&&U!=="wide"?W("desktop"):void 0,X=U==="wide"?"desktop":U,J=s!==null?s:r?r[X]||r.desktop:void 0,Y=h!==null?h:f[X]||f.desktop||"100%";return c.jsx(ov,{$height:J,$width:Y,children:c.jsx(bp,{path:V,fallbackPath:P,height:"100%",width:"100%",loop:y,autoplay:b,scrollSync:D,scrollProgress:A,initialFrame:v,finalFrame:R,preserveAspectRatio:N})})}const rv=T.section`
    position: relative;
    ${({$flowHeight:i})=>i?"":"min-height: 100lvh;"}
    background: ${({$bg:i})=>i||"#0d1117"};
    color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`,G0=T.div`
    position: absolute;
    inset: 0;
    background-image: url(${({$src:i})=>i});
    background-size: cover;
    background-position: center;
    z-index: 0;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`,sv=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`,fv=T.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.6) 100%
    );
`,dv=T.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10vh;
    height: 60vh;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({$mobileScale:i})=>i?j.mobile(`
                transform: scale(${i});
                transform-origin: center;
            `):""}
`,hv=T.div`
    position: relative;
    z-index: 1;
    padding: 120px 80px 80px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: ${({$position:i})=>i==="bottom"?"flex-end":"flex-start"};

    ${j.mobile(`
        padding: 120px 20px 40px;
    `)}
`,pv=T.div`
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1;

    ${j.mobile(`
        top: 70px;
    `)}
`,gv=T.h2`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 16px;
    line-height: 1.2;
    letter-spacing: 0;

    span {
        background: #000;
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${j.tablet(`
        font-size: 25px;
    `)}

    ${j.mobile(`
        font-size: 21px;
        line-height: 1.3;
    `)}

    ${j.wide(`
        font-size: 51px;
    `)}
`,Sp=T.div`
    max-width: 600px;

    p {
        font-family: "logic-monospace", monospace;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.96px;
        color: #ebebeb;
        margin: 0 0 16px;
        background: #000;
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;

        ${j.mobile(`
            font-size: 19px;
            font-weight: 500;
            letter-spacing: -0.76px;
        `)}

        ${j.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
        `)}
    }

    strong {
        font-weight: 700;
    }
`,mv=T(Sp)`
    p {
        background: #000;
        display: inline;
        padding: 2px 4px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
`;function xt({timestamp:i,heading:r,children:f,textPosition:s="top",backgroundImage:h,backgroundVideo:y,poster:b,highlightText:D=!1,backgroundColor:A,accentColor:v,scrollProgress:R,flowHeight:N=!1,lottieOverlay:U,mobileScale:Q}){const W=We(),V=oc(R),P=wi(),X=R?V:P,J=D?mv:Sp,Y=y?yt(W?Jr(y):y):void 0,Z=b?yt(W?Jr(b):b):void 0;return c.jsxs(rv,{$bg:A,$flowHeight:N,children:[y?c.jsxs(c.Fragment,{children:[W?Z?c.jsx(G0,{$src:Z}):c.jsx("div",{}):c.jsx(sv,{ref:X,src:Y,poster:Z,...R?{preload:"auto"}:{loop:!0},muted:!0,playsInline:!0}),c.jsx(fv,{})]}):h&&c.jsx(G0,{$src:h}),U&&c.jsx(dv,{$mobileScale:Q,children:c.jsx(rs,{animations:U,height:"100%",width:"100%",loop:!1,autoplay:!0,preserveAspectRatio:"xMidYMid meet"})}),i&&c.jsx(pv,{children:c.jsx(av,{time:i,color:v})}),c.jsxs(hv,{$position:s,children:[r&&c.jsx(gv,{children:c.jsx("span",{children:r})}),c.jsx(J,{children:f})]})]})}const yv=T.div`
    width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px 8px 20px;
    box-sizing: border-box;
    z-index: 99;
    position: relative;
    ${({$bordered:i})=>i?"border-bottom: 2px solid #fff;":""}

    ${j.mobile(`
        padding-top: 76px;
    `)}
`,vv=T.span`
    font-family: ${({$fontFamily:i})=>i||"'logic-monospace', monospace"};
    font-weight: ${({$fontWeight:i})=>i||700};
    font-size: 24px;
    text-transform: uppercase;
    color: ${({$color:i})=>i||"#f7ff95"};
    line-height: 1.2;
    text-align: center;

    ${j.mobile(`
        font-size: 19px;
    `)}

    ${j.wide(`
        font-size: 42px;
    `)}
`;function Ep({children:i,color:r,bordered:f,fontFamily:s,fontWeight:h}){return c.jsx(yv,{$bordered:f,children:c.jsx(vv,{$color:r,$fontFamily:s,$fontWeight:h,children:i})})}const xv=T.section`
    min-height: 100lvh;
    background: ${({$bg:i})=>i||"#f7ff95"};
    color: #000;
    display: flex;
    flex-direction: column;
`,bv=T.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: ${({$align:i})=>i==="bottom"?"flex-end":"center"};
    align-items: center;
    padding: ${({$align:i})=>i==="bottom"?"60px 80px 120px":"60px 80px 100px"};
    max-width: 846px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${j.mobile(`
        padding: 0 20px;
        justify-content: flex-start;
    `)}

    strong {
        font-weight: 700;
    }

    a {
        color: inherit;
        text-decoration: underline;
    }
`,Sv=107,Ev=40,jv=T.div`
    width: 100%;

    @media (max-width: 767px) {
        min-height: calc(
            100dvh -
                ${({$hasHeader:i})=>i?Sv:0}px -
                ${Ev}px
        );
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`,Pt=T.div`
    p {
        font-family: "logic-monospace", monospace;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -0.96px;
        color: #000;
        margin: 0 0 16px;
        text-align: center;

        ${j.tablet(`
            font-size: 21px;
            letter-spacing: -0.84px;
        `)}

        ${j.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            color: #222;
            text-align: left;
        `)}

        ${j.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
        `)}
    }
`;function Ot({sectionTitle:i,children:r,backgroundColor:f,headingColor:s,contentAlign:h}){return c.jsxs(xv,{$bg:f,children:[i&&c.jsx(Ep,{color:s,children:i}),c.jsx(bv,{$align:h,children:c.jsx(jv,{$hasHeader:!!i,children:r})})]})}T.section`
    height: 100lvh;
    width: 100%;
    overflow: hidden;
`;T.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;T.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;const Tv=T.div`
    position: relative;
    height: 200vh;
`,zv=T.div`
    position: sticky;
    top: 0;
    height: 100lvh;
    overflow: hidden;

    ${j.mobile(`
        height: 100dvh;
    `)}
`,Av=T.div`
    width: 100%;
    height: 100%;
    background: ${({$bg:i})=>i||"#0d1117"};
    color: #000;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`,wv=T.div`
    position: absolute;
    inset: 0;
    background-image: url(${({$src:i})=>i});
    background-size: cover;
    background-position: center;
    z-index: 0;
`,Cv=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`,$r=T.div`
    position: absolute;
    left: 0;
    right: 0;
    ${({$top:i,$bottom:r,$height:f})=>f?i!=null?`top: ${i};`:`bottom: ${r||"0"};`:"top: 0; bottom: 0;"}
    width: 100%;
    height: ${({$height:i})=>i||"100%"};
    z-index: 0;
    overflow: hidden;

    ${({$mobileScale:i})=>i?j.mobile(`
                transform: scale(${i});
                transform-origin: center;
            `):""}
`,Ov=T.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(${({$visible:i})=>i?1:.5});
    opacity: ${({$visible:i})=>i?1:0};
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;
`,_v=107,Mv=40,Rv=T.div`
    width: 100%;
    display: contents;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(
            100dvh -
                ${({$hasHeader:i})=>i?_v:0}px -
                ${Mv}px
        );

        > * {
            margin-top: 0;
        }
    }
`,Hv=T.div`
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px;
    max-width: ${({$maxWidth:i})=>i||"846px"};
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${j.mobile(`
        padding: 10px 20px;
        align-items: flex-start;
    `)}

    p {
        font-family: "logic-monospace", monospace;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: -0.96px;
        color: #fff;
        margin: 0 0 16px;
        text-align: center;

        ${j.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            line-height: 1.35;
        `)}

        ${j.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;function Hl({sectionTitle:i,headingColor:r,headingBordered:f,headingFontFamily:s,headingFontWeight:h,backgroundVideo:y,backgroundImage:b,lottieAnimation:D,lottieHeight:A,lottieBottom:v,lottieTop:R,poster:N,backgroundColor:U,maxWidth:Q,children:W,mobileScale:V,mobileBackgroundImage:P,mobileLottieAnimation:X,lottieLoop:J=!0,revealInterval:Y=500}){const Z=We(),at=G.useRef(),I=G.useRef(),$=G.useRef([]),Dt=G.useRef(new Set),te=G.useRef(!1),Ie=G.useRef(!1),[pe,ee]=G.useState(!1);return G.useLayoutEffect(()=>{const Ut=at.current;if(!Ut)return;const Yt=Array.from(Ut.parentElement.children);Ut.style.zIndex=Yt.indexOf(Ut)+1,Ut.style.opacity="0"},[]),G.useEffect(()=>{const Ut=at.current;if(!Ut)return;const Yt=()=>{const C=Ut.getBoundingClientRect().top<=0;Ut.style.opacity=C?"1":"0",C&&!Ie.current&&(Ie.current=!0,ee(!0))},Ht=rl(Yt);return Yt(),window.addEventListener("scroll",Ht,{passive:!0}),()=>{Ht.cancel(),window.removeEventListener("scroll",Ht)}},[]),G.useLayoutEffect(()=>{const Ut=I.current?.querySelectorAll("p");if(Ut&&Ut.length>0){const Yt=Array.from(Ut).map(Ht=>{const C=Ht.parentElement,B=C===I.current?Ht:C;return{p:Ht,target:B}});$.current=Yt,Yt.forEach(({target:Ht},C)=>{Ht.style.transition="opacity 50ms ease",C===0?(Ht.style.opacity="1",Dt.current.add(0)):Ht.style.opacity="0"})}},[]),G.useEffect(()=>{const Ut=at.current;if(!Ut)return;const Yt=new IntersectionObserver(([Ht])=>{if(Ht.isIntersecting&&!te.current){te.current=!0;const C=$.current;let B=1;const tt=setInterval(()=>{if(B>=C.length){clearInterval(tt);return}const{p:st,target:vt}=C[B];vt.style.opacity="1",Dt.current.add(B),B++},Y)}},{threshold:.3});return Yt.observe(Ut),()=>Yt.disconnect()},[]),c.jsx(Tv,{ref:at,"data-slide":!0,children:c.jsx(zv,{children:c.jsxs(Av,{$bg:U,children:[P&&c.jsx(wv,{$src:yt(P)}),Z&&X?c.jsx($r,{$height:"100%",$mobileScale:V,children:c.jsx(bp,{path:X,loop:!1,autoplay:!0,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet"})}):D&&c.jsx($r,{$height:A,$bottom:v,$top:R,$mobileScale:V,children:c.jsx(rs,{animations:D,loop:J,autoplay:!0,width:"100%",height:"100%",preserveAspectRatio:A?"xMidYMid meet":"xMidYMid slice"})}),b&&!D&&c.jsx($r,{$height:A,$bottom:v,$top:R,$mobileScale:V,children:c.jsx(Ov,{src:yt(b),$visible:pe,alt:""})}),y&&!D&&c.jsx(Cv,{src:yt(y),poster:N?yt(N):void 0,muted:!0,playsInline:!0,autoPlay:!0,loop:!0}),i&&c.jsx(Ep,{color:r,bordered:f,fontFamily:s,fontWeight:h,children:i}),c.jsxs(Hv,{ref:I,$maxWidth:Q,children:[c.jsx(Rv,{$hasHeader:!!i,children:W}),c.jsx("p",{"aria-hidden":!0,style:{position:"absolute",visibility:"hidden"}})]})]})})})}const Nv=T.blockquote`
    margin: 40px auto;
    padding: 0;
    max-width: 846px;
    text-align: center;

    ${j.mobile(`
        text-align: left;
        margin: 20px 0;
    `)}
`,Dv=T.span`
    display: block;
    font-family: 'logic-monospace', monospace;
    font-size: 44px;
    font-weight: 600;
    line-height: 1;
    color: #000;
    margin-bottom: 8px;

    ${j.mobile(`
        font-size: 38px;
        margin-bottom: 0;
    `)}

    ${j.wide(`
        font-size: 75px;
    `)}
`,Uv=T.p`
    font-family: 'logic-monospace', monospace;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -0.88px;
    line-height: 1.3;
    color: #000;
    margin: 0 0 16px;

    ${j.mobile(`
        font-size: 20px;
    `)}

    ${j.wide(`
        font-size: 51px;
        letter-spacing: -1.56px;
    `)}
`,Bv=T.p`
    font-family: 'logic-monospace', monospace;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    color: #000;
    margin: 0;
    line-height: 120%;
    text-transform: uppercase;

    ${j.wide(`
        font-size: 32px;
    `)}
`;function je({quote:i,name:r,role:f}){return c.jsxs(Nv,{children:[c.jsx(Dv,{children:"“"}),c.jsx(Uv,{children:i}),c.jsxs(Bv,{children:[r,f?c.jsxs(c.Fragment,{children:[",",c.jsx("br",{}),f]}):""]})]})}function jp(i=0){let r=i;const f=new Set;return{get(){return r},set(s){r=s,f.forEach(h=>h(s))},on(s,h){return f.add(h),()=>f.delete(h)},onChange(s){return f.add(s),()=>f.delete(s)}}}const Fr=T.div`
    position: sticky;
    top: 0;
    height: 100lvh;
    overflow: hidden;
`,$v=T.div`
    position: relative;
    height: ${i=>i.$trackHeight};
    margin-bottom: calc(-1 * (${i=>i.$trackHeight} - ${i=>i.$flowHeight||"100lvh"}));
`;function Tp(i,r){G.useLayoutEffect(()=>{const f=i.current,s=Array.from(f.parentElement.children);f.style.zIndex=s.indexOf(f)+1,r&&(f.style.opacity="0",f.style.pointerEvents="none")},[r]),G.useEffect(()=>{if(!r)return;const f=i.current,s=()=>{const y=f.getBoundingClientRect().top<=0;f.style.opacity=y?"1":"0",f.style.pointerEvents=y?"auto":"none"},h=rl(s);return s(),window.addEventListener("scroll",h,{passive:!0}),()=>{h.cancel(),window.removeEventListener("scroll",h)}},[r])}function Gv({children:i,trackHeight:r,flowHeight:f,appearInPlace:s}){const h=G.useRef(),y=G.useMemo(()=>jp(0),[]);return G.useEffect(()=>{const b=()=>{const A=h.current;if(!A)return;const v=A.getBoundingClientRect(),R=-v.top/(v.height-window.innerHeight);y.set(Math.max(0,Math.min(1,R)))},D=rl(b);return b(),window.addEventListener("scroll",D,{passive:!0}),()=>{D.cancel(),window.removeEventListener("scroll",D)}},[y]),Tp(h,s),c.jsx($v,{ref:h,$trackHeight:r,$flowHeight:f,"data-slide":!0,children:c.jsx(Fr,{children:typeof i=="function"?i({scrollYProgress:y}):i})})}const Lv=T.div`
    position: relative;
    height: ${i=>i.$flowHeight};
    margin-bottom: calc(-1 * (${i=>i.$flowHeight} - 100lvh));
`;function Yv({children:i,appearInPlace:r,flowHeight:f}){const s=G.useRef(),h=G.useRef();return Tp(f?h:s,r),f?c.jsx(Lv,{ref:h,$flowHeight:f,"data-slide":!0,children:c.jsx(Fr,{children:i})}):c.jsx(Fr,{ref:s,"data-slide":!0,children:i})}function lt({children:i,appearInPlace:r,trackHeight:f,flowHeight:s}){return f?c.jsx(Gv,{trackHeight:f,flowHeight:s,appearInPlace:r,children:i}):c.jsx(Yv,{appearInPlace:r,flowHeight:s,children:i})}function sn({slides:i,background:r,trackHeight:f="300vh",flowHeight:s,appearInPlace:h=!1}){const y=G.useRef(null),b=G.useMemo(()=>jp(0),[]),[D,A]=G.useState(0);return G.useEffect(()=>{const v=()=>{const N=y.current;if(!N)return;const U=N.getBoundingClientRect(),Q=-U.top/(U.height-window.innerHeight);b.set(Math.max(0,Math.min(1,Q)))},R=rl(v);return v(),window.addEventListener("scroll",R,{passive:!0}),()=>{R.cancel(),window.removeEventListener("scroll",R)}},[b]),G.useLayoutEffect(()=>{const v=y.current,R=Array.from(v.parentElement.children);v.style.zIndex=R.indexOf(v)+1,h&&(v.style.opacity="0")},[h]),G.useEffect(()=>{if(!h)return;const v=y.current,R=()=>{v.style.opacity=v.getBoundingClientRect().top<=0?"1":"0"},N=rl(R);return R(),window.addEventListener("scroll",N,{passive:!0}),()=>{N.cancel(),window.removeEventListener("scroll",N)}},[h]),G.useEffect(()=>{const v=i.length;return b.on("change",R=>{const N=Math.min(Math.floor(R*v),v-1);A(U=>U===N?U:N)})},[b,i.length]),c.jsx("div",{ref:y,"data-slide":!0,"data-slide-phases":i.length,"data-slide-track-height":f,style:{position:"relative",height:f,...s&&{marginBottom:`calc(${s} - ${f})`}},children:c.jsxs("div",{style:{position:"sticky",top:0,height:"100lvh",overflow:"hidden"},children:[r?.({scrollYProgress:b}),i[D]({scrollYProgress:b})]})})}function ba({src:i,poster:r,...f}){const s=wi(),h=We(),y=h?Jr(i):i;return h?r?c.jsx("img",{src:r,...f,alt:""}):c.jsx("div",{...f}):c.jsx("video",{ref:s,src:y,poster:r,...f})}const on={osloCityscape:"/videos/ch1/ch1_1.mp4",osloCityscapeMobile:"/videos/ch1/ch1_1_mobile.mp4",globe:"/videos/ch1/ch1_2_desktop.mp4",globeMobile:"/videos/ch1/ch1_2_mobile.mp4",elevator:"/videos/ch1/ch1_3.mp4",signalLost:"/videos/ch1/ch1_4.mp4",glitchyCityscape:"/videos/ch1/ch1_5.mp4",glitchyCityscape530:"/videos/ch1/ch1_6.mp4",womanScreens:"/videos/ch1/ch1_7.mp4",escalator:"/videos/ch1/ch1_8.mp4"},il={osloCityscape:"/videos/posters/ch1/ch1_1.jpg",globe:"/videos/posters/ch1/ch1_2-2.jpg",elevator:"/videos/posters/ch1/ch1_3.jpg",signalLost:"/videos/posters/ch1/ch1_4.jpg",glitchyCityscape:"/videos/posters/ch1/ch1_5.jpg",glitchyCityscape530:"/videos/posters/ch1/ch1_6.jpg",womanScreens:"/videos/posters/ch1/ch1_7.jpg",escalator:"/videos/posters/ch1/ch1_8.jpg"};function Gr({scrollProgress:i,threshold:r,children:f}){const s=G.useRef(null);return G.useEffect(()=>{const h=s.current;return h?(h.style.transition="opacity 0.4s ease, transform 0.4s ease",h.style.opacity=r===0?"1":"0",h.style.transform=r===0?"translateY(0)":"translateY(30px)",i.on("change",b=>{b>=r?(h.style.opacity="1",h.style.transform="translateY(0)"):(h.style.opacity="0",h.style.transform="translateY(30px)")})):void 0},[i,r]),c.jsx("div",{ref:s,children:f})}T.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    top: 5vh;
    min-height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    overflow: hidden;
`;T.span`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -2px;
    display: block;
    text-align: center;
    background: black;
    padding: 4px 12px;

    ${j.tablet(`
        font-size: 25px;
    `)}

    ${j.mobile(`
        font-size: 21px;
        line-height: 1.3;
    `)}

    ${j.wide(`
        font-size: 51px;
    `)}
`;const qv=T.div`
    background: #0d1117;
    color: #fff;
`,kv=T.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 102px 80px 80px;
    overflow: hidden;

    ${j.mobile(`
        padding: 80px 20px 60px;
    `)}
`,Vv=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,L0=T.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
        180deg,
        rgba(13, 17, 23, 0.4) 0%,
        rgba(13, 17, 23, 0.2) 40%,
        rgba(13, 17, 23, 0.4) 100%
    );
`;function Y0({scrollProgress:i,src:r,mobileSrc:f,poster:s}){const h=We(),y=oc(h?null:i);return wi(),h?s?c.jsx("img",{src:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"},alt:""}):c.jsx("div",{}):c.jsx(Vv,{ref:y,src:r,poster:s,muted:!0,playsInline:!0,preload:"auto"})}function Xv(){const i=We();return c.jsxs(qv,{children:[c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",background:({scrollYProgress:r})=>c.jsxs(c.Fragment,{children:[c.jsx(Y0,{scrollProgress:r,src:yt(on.osloCityscape),mobileSrc:yt(on.osloCityscapeMobile),poster:yt(il.osloCityscape)}),c.jsx(L0,{})]}),slides:[()=>c.jsx(kv,{children:c.jsx("div",{style:{position:"relative",zIndex:2},children:c.jsx(us,{chapter:"CHAPTER_ONE",title:"ENERGY",subtitle:"When vital infrastructure is held hostage by hacktivists"})})}),()=>c.jsxs(xt,{backgroundColor:"transparent",heading:c.jsxs(c.Fragment,{children:["TUESDAY",c.jsx("br",{}),"OSLO, NORWAY"]}),textPosition:"top",children:[c.jsx("p",{children:"The sun sets early in December, and by mid-afternoon the city is slipping into darkness."}),c.jsx("p",{children:"As workers wrap up for the day, the grid that keeps Norway – and several neighbouring countries – running begins to falter."})]})]}),c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",appearInPlace:!0,background:({scrollYProgress:r})=>c.jsxs(c.Fragment,{children:[c.jsx(Y0,{scrollProgress:r,src:yt(on.globe),mobileSrc:yt(on.globeMobile),poster:yt(il.globe)}),c.jsx(L0,{})]}),slides:[()=>c.jsxs(xt,{timestamp:"4:45pm",backgroundColor:"transparent",textPosition:"top",children:[c.jsx("p",{children:"A lead engineer at one of Norway’s top energy companies logs in for the evening shift and is immediately locked out of the grid’s control system."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Something is seriously wrong."})]}),()=>c.jsxs(xt,{timestamp:"5:00pm",backgroundColor:"transparent",textPosition:"top",children:[c.jsxs("p",{children:["Remotely, a hacktivist group is in the process of systematically taking out the smart grids of the country’s leading energy providers via a"," ",c.jsx("strong",{children:"distributed denial-of-service attack"}),"."]}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"By targeting smart meters, they are overwhelming the central servers that power the grids."})]})]}),c.jsx(lt,{appearInPlace:!0,trackHeight:"200vh",flowHeight:"100vh",children:c.jsxs(xt,{timestamp:"5:10pm",backgroundVideo:on.elevator,poster:il.elevator,textPosition:"top",children:[c.jsx("p",{children:"Across town, the CTO of a prominent investment firm is ready to leave for the day."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"She presses the elevator button on the 14th floor of the company’s building, but nothing happens."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Moments later, the entire floor is plunged into darkness."})]})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"200vh",flowHeight:"200vh",children:c.jsxs(xt,{timestamp:"5:15pm",backgroundVideo:on.signalLost,poster:il.signalLost,textPosition:"top",children:[c.jsx("p",{children:"Outside, the city’s skyline no longer shines brightly. Mobile and internet services are down."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"People across Oslo start to panic."})]})}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"AN EVOLVING THREAT LANDSCAPE",children:c.jsxs(Pt,{children:[c.jsx("p",{children:"Energy powers everything."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"But as energy networks become “smarter”, with automated load balancing, remote sensors and increasing reliance on digital infrastructure, cyber criminals can find novel ways of exploiting cracks in the system."})]})})}),i?c.jsx(lt,{appearInPlace:!0,children:c.jsxs(Hl,{sectionTitle:"AN EVOLVING THREAT LANDSCAPE",headingColor:"#f7ff95",backgroundColor:"#f7ff95",revealInterval:300,children:[c.jsx(Wr,{children:c.jsxs("span",{children:["Cyber attacks ",c.jsx("strong",{children:"doubled"}),c.jsx("br",{}),"between 2020 and 2022 in",c.jsx("br",{}),c.jsx("strong",{children:"Europe’s power sector"})," with"]})}),c.jsxs(B0,{$bg:"#fff",children:["48 attacks",c.jsx("br",{}),"on Europe’s energy",c.jsx("br",{}),"infrastructure"]}),c.jsx(Ir,{children:c.jsxs("span",{children:["in 2022, according to Eurelectric,",c.jsx("br",{})," a federation for the European",c.jsx("br",{}),"electricity industry."]})})]})}):c.jsx(lt,{appearInPlace:!0,flowHeight:"100vh",trackHeight:"200vh",children:({scrollYProgress:r})=>c.jsxs(Hl,{sectionTitle:"AN EVOLVING THREAT LANDSCAPE",headingColor:"#f7ff95",backgroundColor:"#f7ff95",scrollProgress:r,children:[c.jsx(Gr,{scrollProgress:r,threshold:0,children:c.jsx(Wr,{children:c.jsxs("span",{children:["Cyber attacks ",c.jsx("strong",{children:"doubled"}),c.jsx("br",{}),"between 2020 and 2022 in",c.jsx("br",{}),c.jsx("strong",{children:"Europe’s power sector"})," ","with"]})})}),c.jsx(Gr,{scrollProgress:r,threshold:.25,children:c.jsxs(B0,{$bg:"#fff",children:["48 attacks",c.jsx("br",{}),"on Europe’s energy",c.jsx("br",{}),"infrastructure"]})}),c.jsx(Gr,{scrollProgress:r,threshold:.5,children:c.jsx(Ir,{children:c.jsxs("span",{children:["in 2022, according to Eurelectric,",c.jsx("br",{})," a federation for the European",c.jsx("br",{}),"electricity industry."]})})})]})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"AN EVOLVING THREAT LANDSCAPE",children:c.jsx(Pt,{children:c.jsxs("p",{children:["Sopra Steria, a technology and consulting company that provides cybersecurity services, identified in its State of Cybersecurity 2025"," ",c.jsx("a",{href:"https://www.soprasteria.com/docs/librariesprovider2/sopra-steria-corporate/publications/en_25.08.20---sopra-steria---%C3%A9tat-de-la-cybers%C3%A9curit%C3%A9-en-2025.pdf?sfvrsn=216234db_6",children:"report"})," ","that Advanced Persistent Threat (APT) groups are increasingly collaborating with cyber criminals, particularly on destructive attacks."]})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"AN EVOLVING THREAT LANDSCAPE",children:c.jsx(je,{quote:"Historically, cyber attacks have been high-consequence and low-frequency. When you get hacktivists and criminals who are able to target operational technology and who understand how to do it, you eventually get high-consequence, high-frequency events",name:"Robert M Lee",role:"Leading expert in operational technology security, CEO of Dragos"})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(xt,{timestamp:"5:20pm",heading:"THE CITY IS PLUNGED INTO DARKNESS",backgroundVideo:on.glitchyCityscape,poster:il.glitchyCityscape,textPosition:"top",children:c.jsx("p",{children:"As the grid’s automated load balancers struggle to cope with the intensity of a sustained attack, safety shutdowns are triggered across energy grids, causing blackouts."})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(xt,{timestamp:"5:30pm",backgroundVideo:on.glitchyCityscape530,poster:il.glitchyCityscape530,textPosition:"top",children:c.jsx("p",{children:"Workers use phone torches to find their way to the stairwell and towards the lobby. Confusion is widespread; every building is impacted."})})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",flowHeight:"200vh",children:c.jsx(xt,{timestamp:"7:00pm",backgroundVideo:on.womanScreens,poster:il.womanScreens,textPosition:"top",highlightText:!0,children:c.jsx("p",{children:"C-suite executives across the various energy firms are struggling to get a sense of the impact as internal systems, including monitoring tools, have been compromised. Engineers no longer have real-time visibility."})})}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:c.jsx(Pt,{children:c.jsx("p",{children:"Most of the investment in cybersecurity in the energy sector has gone into prevention rather than visibility and monitoring. This presents challenges for root-cause analysis and improving prevention strategies."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:c.jsx(Pt,{children:c.jsxs("p",{children:["Europe’s policymakers are starting to recognise the risks. In 2025, the European Commission"," ",c.jsx("a",{href:"https://www.enisa.europa.eu/news/enisa-to-operate-the-eu-cybersecurity-reserve-with-eur-36-million",children:"signed"})," ","a €36mn agreement with the EU’s Agency for Cybersecurity (ENISA) to administer a reserve that can be used by critical sectors – including energy – to support the response and recovery from cyber incidents."]})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:c.jsx(je,{quote:"Critical operators are moving toward defensible architectures where there’s an assumption that breaches will occur",name:"Jørgen Rørvik",role:"Director of Cybersecurity and Connectivity, Sopra Steria Nordics"})})}),i?c.jsxs(c.Fragment,{children:[c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:c.jsx(Pt,{children:c.jsx("p",{children:"Defensible architectures can include breaking the grid into “islands”, which can distribute power locally, to prevent cascading failures, or building a parallel network for monitoring and management to prevent loss of visibility, Rørvik says."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:c.jsx(je,{quote:"Within this architecture, essential assets can continue functioning, even while under sustained attack",name:"Jørgen Rørvik",role:"Director of Cybersecurity and Connectivity, Sopra Steria Nordics"})})})]}):c.jsx(lt,{appearInPlace:!0,children:c.jsxs(Ot,{sectionTitle:"OPERATING WHILE UNDER ATTACK",children:[c.jsx(Pt,{children:c.jsx("p",{children:"Defensible architectures can include breaking the grid into “islands”, which can distribute power locally, to prevent cascading failures, or building a parallel network for monitoring and management to prevent loss of visibility, Rørvik says."})}),c.jsx(je,{quote:"Within this architecture, essential assets can continue functioning, even while under sustained attack",name:"Jørgen Rørvik",role:"Director of Cybersecurity and Connectivity, Sopra Steria Nordics"})]})}),c.jsx(sn,{trackHeight:"400vh",flowHeight:"300vh",appearInPlace:!0,background:()=>c.jsx(ba,{src:yt(on.escalator),poster:yt(il.escalator),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{timestamp:"8:00pm",heading:"WORK CONTINUES THROUGH THE NIGHT",backgroundColor:"transparent",textPosition:"top",children:c.jsx("p",{children:"Policymakers, emergency services and cybersecurity experts gather to implement emergency procedures."})}),()=>c.jsx(xt,{timestamp:"2:00am",backgroundColor:"transparent",textPosition:"top",children:c.jsx("p",{children:"Cyber experts work with internet service providers to divert malicious traffic and implement recovery protocols."})}),()=>c.jsx(xt,{timestamp:"8:00am",backgroundColor:"transparent",textPosition:"top",children:c.jsx("p",{children:"Power has returned, but public services reel from the human and financial cost of this major incident."})})]}),c.jsx(Hl,{sectionTitle:"THE SOLUTIONS",headingColor:"#EBEBEB",headingBordered:!0,headingFontFamily:"'Space Grotesk', sans-serif",headingFontWeight:500,backgroundColor:"#f7ff95",trackHeight:"200vh",flowHeight:"200vh",children:c.jsxs(os,{children:[c.jsx(he,{children:c.jsx("p",{children:"State-led cyber defence policies"})}),c.jsx(he,{children:c.jsx("p",{children:"Regular penetration testing and threat simulations"})}),c.jsx(he,{children:c.jsx("p",{children:"24/7 Security Operation Centres with real-time monitoring"})}),c.jsx(he,{children:c.jsx("p",{children:"Cross-sector coordination across energy, telecoms and media"})}),c.jsx(he,{children:c.jsx("p",{children:"A threat-driven approach beyond compliance"})})]})})]})}const Qv=T.div`
    font-family: "logic-monospace", monospace;
    font-size: 21px;
    font-weight: 500;
    color: #000;
    text-align: center;
    line-height: 1.35;
    letter-spacing: -0.84px;
    max-width: 846px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    padding: 0 80px;
    box-sizing: border-box;
    background: #8eb8ff;
    ${j.tablet(`
        font-size: 21px;
        letter-spacing: -0.84px;
        padding: 0 40px;
    `)} ${j.mobile(`
        font-size: 17px;
        letter-spacing: -0.68px;
        color: #222;
        text-align: left;
        padding: 0 20px;
        position: relative;
        bottom: auto;
        padding: 0;
    `)} ${j.wide(`
        font-size: 39px;
        letter-spacing: -1.5px;
    `)};
`,Zv=T.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`,Kv=T.div`
    font-family: "Space Grotesk", sans-serif;
    font-size: 120px;
    font-weight: 700;
    color: #fff;
    text-align: left;
    line-height: 1;
    padding: 0 20px;
    margin-bottom: 12px;
`;function q0({children:i}){return c.jsx(Qv,{children:i})}const Tt="#8eb8ff",Mn={madridCityscape:"/videos/ch2/ch2_1.mp4",madridCityscapeMobile:"/videos/ch2/ch2_1_mobile.mp4",supermarket:"/videos/ch2/ch2_2_glitch.mp4",supermarketBlurred:"/videos/ch2/ch2_3.mp4",warehousePhone:"/videos/ch2/ch2_4_desktop.mp4",ironGate:"/videos/ch2/ch2_5.mp4",phoneInHand:"/videos/ch2/ch2_630.mp4",warehouse:"/videos/ch2/ch2_7.mp4",idVerification:"/videos/ch2/ch2_8.mp4"},ul={madridCityscape:"/videos/posters/ch2/ch2_1.jpg",supermarket:"/videos/posters/ch2/ch2_2_glitch.jpg",supermarketBlurred:"/videos/posters/ch2/ch2_3.jpg",warehousePhone:"/videos/posters/ch2/ch2_4_desktop.jpg",ironGate:"/videos/posters/ch2/ch2_5.jpg",phoneInHand:"/videos/posters/ch2/ch2_630.jpg",warehouse:"/videos/posters/ch2/ch2_7.jpg",idVerification:"/videos/posters/ch2/ch2_8.jpg"},Jv=T.div`
    background: #0d1117;
    color: #fff;
`,Wv=T.section`
    position: relative;
    min-height: 100lvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 102px 80px 80px;
    overflow: hidden;

    ${j.mobile(`
        padding: 80px 20px 60px;
    `)}
`,Iv=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,Fv=T.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.6) 100%
    );
`;function Pv({scrollProgress:i,src:r,mobileSrc:f,poster:s}){const h=We(),y=oc(h?null:i);return wi(),h?s?c.jsx("img",{src:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"},alt:""}):c.jsx("div",{}):c.jsx(Iv,{ref:y,src:r,poster:s,muted:!0,playsInline:!0,preload:"auto"})}function tx(){const i=We();return c.jsxs(Jv,{children:[c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",background:({scrollYProgress:r})=>c.jsxs(c.Fragment,{children:[c.jsx(Pv,{scrollProgress:r,src:yt(Mn.madridCityscape),mobileSrc:yt(Mn.madridCityscapeMobile),poster:yt(ul.madridCityscape)}),c.jsx(Fv,{})]}),slides:[()=>c.jsx(Wv,{children:c.jsx("div",{style:{position:"relative",zIndex:2},children:c.jsx(us,{chapter:"CHAPTER_TWO",title:"FINANCE",subtitle:"How a single email could crash a continent’s payment systems"})})}),()=>c.jsxs(xt,{backgroundColor:"transparent",heading:c.jsxs(c.Fragment,{children:["THURSDAY",c.jsx("br",{}),"MADRID, SPAIN"]}),textPosition:"top",accentColor:Tt,children:[c.jsx("p",{children:"In Madrid, a single phishing email sets off a chain reaction that brings payment systems to a standstill."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"It begins quietly, with a distracted employee and a convincingly urgent email."})]})]}),c.jsx(sn,{trackHeight:"400vh",flowHeight:"300vh",appearInPlace:!0,background:()=>c.jsx(ba,{src:yt(Mn.supermarket),poster:yt(ul.supermarket),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{backgroundColor:"transparent",textPosition:"top",highlightText:!0,accentColor:Tt,children:c.jsx("p",{children:"Within hours, an issue at a local supermarket in Madrid escalates into a multi-million-euro crisis, with malware spreading from one store to thousands and damage reaching far beyond one retailer."})}),()=>c.jsx(xt,{timestamp:"12:00pm",backgroundColor:"transparent",textPosition:"top",highlightText:!0,mobileScale:"1.3",accentColor:Tt,children:c.jsx("p",{children:"A stressed store manager clicks a link to a lookalike inventory portal in an “urgent” email from a supposed HQ executive."})}),()=>c.jsxs(xt,{timestamp:"12:20pm",backgroundColor:"transparent",textPosition:"top",highlightText:!0,accentColor:Tt,children:[c.jsx("p",{children:"Cyber attackers can now traverse the network and deploy malware to the retailer’s POS system."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Sensitive payment data is sent in batches to an external server."})]})]}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsx(xt,{timestamp:"1:05pm",backgroundVideo:Mn.supermarketBlurred,poster:ul.supermarketBlurred,textPosition:"top",highlightText:!0,accentColor:Tt,children:c.jsx("p",{children:"Concerned about the email chain, the store manager contacts the IT help desk."})})}),c.jsx(sn,{trackHeight:"300vh",flowHeight:"300vh",appearInPlace:!0,background:()=>c.jsx(ba,{src:yt(Mn.warehousePhone),poster:yt(ul.warehousePhone),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{timestamp:"1:35pm",backgroundColor:"transparent",textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"As the malware overloads resources, payment systems across stores fail."})}),()=>c.jsx(xt,{timestamp:"2:00pm",backgroundColor:"transparent",textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"The help desk is flooded with reports from stores experiencing outages."})})]}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT",backgroundColor:Tt,headingColor:Tt,children:c.jsxs(Pt,{children:[c.jsxs("p",{children:["Today’s ",c.jsx("strong",{children:"phishing attacks"})," are meticulous mimicking corporate tone, structure and urgency. An employee’s decision to trust an email while under pressure provides the attackers with everything they need to prowl the network and access a vulnerable system."]}),c.jsx("p",{children:"Artificial intelligence (AI) enables attackers to craft flawless, personalised phishing emails free of spelling errors or awkward phrasing."})]})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsxs(Ot,{sectionTitle:"WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT",backgroundColor:Tt,headingColor:Tt,children:[c.jsx(Pt,{children:c.jsx("p",{children:"AI enables them to use real-time company data and social media to make each message convincingly authentic."})}),c.jsx(je,{quote:"Entire campaigns are being run by machines – targeting the right person, at the right time, with the right message",name:"Arsenio Pérez Gavira",role:"Cybersecurity Manager, Sopra Steria Spain"})]})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT",backgroundColor:Tt,headingColor:Tt,children:c.jsx(je,{quote:"Defending against this demands adaptive defences powered by the same kind of intelligence, capable of detecting patterns and responding in real time",name:"Arsenio Pérez Gavira",role:"Cybersecurity Manager, Sopra Steria Spain"})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT",backgroundColor:Tt,headingColor:Tt,children:c.jsxs(Pt,{children:[c.jsxs("p",{children:["Around ",c.jsx("strong",{children:"60 per cent"})," of all cybersecurity incidents"," ",c.jsx("a",{href:"https://www.soprasteria.com/docs/librariesprovider2/sopra-steria-corporate/publications/en_25.08.20---sopra-steria---%C3%A9tat-de-la-cybers%C3%A9curit%C3%A9-en-2025.pdf?sfvrsn=216234db_6",children:"reported"})," ","by customers to Sopra Steria’s clients were phishing-related."]}),c.jsx("p",{children:"To prevent these attacks, organisations must train staff with scenario-based and department-specific simulations to respond to attacks in real time."})]})})}),c.jsx(lt,{appearInPlace:!0,flowHeight:"200vh",trackHeight:"200vh",children:({scrollYProgress:r})=>c.jsx(Hl,{sectionTitle:"WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT",headingColor:Tt,backgroundColor:Tt,mobileScale:"0.7",backgroundImage:i?void 0:"/videos/ch2/41pecent.jpg",scrollProgress:r,maxWidth:"90vw",lottieHeight:"50vh",lottieTop:"20vh",lottieLoop:!1,children:i?c.jsxs(Zv,{children:[c.jsx(Kv,{children:"41%"}),c.jsx(q0,{children:"is the approximate share of organisations that recorded a material incident during the past 12 months and say it was caused by a third party, according to the World Economic Forum’s 2024 Cybersecurity Outlook."})]}):c.jsx(q0,{children:"is the approximate share of organisations that recorded a material incident during the past 12 months and say it was caused by a third party, according to the World Economic Forum’s 2024 Cybersecurity Outlook."})})}),c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",background:()=>c.jsx(ba,{src:yt(Mn.ironGate),poster:yt(ul.ironGate),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{timestamp:"3:00pm",heading:"FROM COMPANY BREACH TO MAJOR DISRUPTION",backgroundColor:"transparent",textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"All of the retailer’s stores close as payments and inventory systems fail."})}),()=>c.jsx(xt,{timestamp:"4:30pm",backgroundColor:"transparent",textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"Internal forensics reveals loyalty card and e-receipt data were compromised."})})]}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",flowHeight:"200vh",children:c.jsx(xt,{timestamp:"6:30pm",backgroundVideo:Mn.phoneInHand,poster:ul.phoneInHand,lottieOverlay:{mobile:"/videos/ch2/SOPRA_CH2_430pm_MOBILE.json",tablet:"/videos/ch2/SOPRA_CH2_430pm_MOBILE.json",desktop:"/videos/ch2/SOPRA_CH2_430pm_MOBILE.json"},mobileScale:.95,textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"The first media stories break as customers report phishing attacks."})})}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL",backgroundColor:Tt,headingColor:Tt,children:c.jsxs(Pt,{children:[c.jsx("p",{children:"The attack exposes the fragility of interconnected systems. Attackers launch fresh intrusions from the breach, while banks compound the disruption with tightened security that leads consumer spending to grind to a halt."}),c.jsx("p",{children:"The cost of these attacks is high, both financially and in terms of customer trust."})]})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL",backgroundColor:Tt,headingColor:Tt,children:c.jsx(Pt,{children:c.jsxs("p",{children:["In 2025, UK retailer Marks & Spencer estimated a"," ",c.jsx("strong",{children:"£300mn"})," hit to profits following a cyber incident during which customer data was stolen, and operations and product availability disrupted."]})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL",backgroundColor:Tt,headingColor:Tt,children:c.jsx(je,{quote:"With everything connected or wanting to be connected to every other system, firms must examine their architecture and make sure there aren’t any security gaps",name:"Stefan Garczynski",role:"Managing Security Architect, Sopra Steria"})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL",backgroundColor:Tt,headingColor:Tt,children:c.jsx(je,{quote:"A zero-trust architecture eliminates the ability of attackers to traverse the network, by ensuring authentication is always required and nothing is trusted automatically",name:"Stefan Garczynski",role:"Managing Security Architect, Sopra Steria"})})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsxs(xt,{timestamp:"7:00am",heading:"THE NEXT DAY",backgroundVideo:Mn.warehouse,poster:ul.warehouse,textPosition:"top",accentColor:Tt,children:[c.jsx("p",{children:"It emerges that supplier credentials were exploited."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Other European retailers are targeted."})]})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsx(xt,{timestamp:"2:00pm",backgroundVideo:Mn.idVerification,poster:ul.idVerification,textPosition:"top",accentColor:Tt,children:c.jsx("p",{children:"Banks introduce tighter fraud checks."})})}),c.jsx(Hl,{sectionTitle:"THE SOLUTIONS",headingColor:"#EBEBEB",headingBordered:!0,headingFontFamily:"'Space Grotesk', sans-serif",headingFontWeight:500,backgroundColor:"#000",children:c.jsxs(os,{children:[c.jsx(he,{children:c.jsx("p",{children:"Zero-trust architecture"})}),c.jsx(he,{children:c.jsx("p",{children:"Network segmentation"})}),c.jsx(he,{children:c.jsx("p",{children:"Targeted phishing training"})}),c.jsx(he,{children:c.jsx("p",{children:"Supplier security checks"})}),c.jsx(he,{children:c.jsx("p",{children:"AI-driven threat monitoring"})}),c.jsx(he,{children:c.jsx("p",{children:"Cross-sector drills"})})]})})]})}const Et="#c999ff",ex="rgba(201, 153, 255, 0.15)",Rn={portOfDover:"/videos/ch3/ch3_1.mp4",portOfDoverMobile:"/videos/ch3/ch3_1_mobile.mp4",satNav:"/videos/ch3/ch3_2.mp4",truckDepot:"/videos/ch3/ch3_3.mp4",airportBoard:"/videos/ch3/ch3_4.mp4",truckRoad:"/videos/ch3/ch3_5.mp4",satellite:"/videos/ch3/ch3_6.mp4",mapDark:"/videos/ch3/ch3_7.mp4",trainStation:"/videos/ch3/ch3_8.mp4"},cl={portOfDover:"/videos/posters/ch3/ch3_1.jpg",satNav:"/videos/posters/ch3/ch3_2.jpg",truckDepot:"/videos/posters/ch3/ch3_3.jpg",airportBoard:"/videos/posters/ch3/ch3_4.jpg",truckRoad:"/videos/posters/ch3/ch3_5.jpg",satellite:"/videos/posters/ch3/ch3_6.jpg",mapDark:"/videos/posters/ch3/ch3_7.jpg",trainStation:"/videos/posters/ch3/ch3_8.jpg"},nx=T.div`
    background: #0d1117;
    color: #fff;
`,lx=T.section`
    position: relative;
    min-height: 100lvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 102px 80px 80px;
    overflow: hidden;

    ${j.mobile(`
        padding: 80px 20px 60px;
    `)}
`,ax=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,ix=T.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.6) 100%
    );
`,k0=20;function ux(){const i=G.useRef(null),r=G.useRef(null),f=G.useRef(null);return G.useEffect(()=>{const s=()=>{const b=i.current,D=r.current,A=f.current;if(!b||!D||!A)return;const R=(b.closest("[data-slide]")?.querySelector(":scope > div > div")||b.parentElement).getBoundingClientRect(),N=b.getBoundingClientRect(),U=D.getBoundingClientRect(),Q=N.bottom-R.top+k0,W=U.top-R.top-Q-k0;A.style.position="absolute",A.style.top=`${Q}px`,A.style.height=`${Math.max(0,W)}px`,A.style.left="0",A.style.right="0"};s(),window.addEventListener("resize",s);const h=setInterval(s,200),y=setTimeout(()=>clearInterval(h),3e3);return()=>{window.removeEventListener("resize",s),clearInterval(h),clearTimeout(y)}},[]),c.jsxs(c.Fragment,{children:[c.jsx(Wr,{ref:i,$bg:Et,children:c.jsx("span",{children:"EU transport sector cyber incidents (2025)"})}),c.jsx("div",{ref:f,style:{transformOrigin:"center bottom",transform:"scale(1.5)"},children:c.jsx(rs,{animations:{mobile:"/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json",tablet:"/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json",desktop:"/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json"},loop:!0,autoplay:!0,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet"})}),c.jsx(Ir,{ref:r,$bg:"#fff",style:{position:"absolute",bottom:60,left:20,right:0,margin:"0 auto",maxWidth:600},children:c.jsx("span",{children:"Source: ENISA 2025 report"})})]})}function cx({scrollProgress:i,src:r,mobileSrc:f,poster:s}){const h=We(),y=oc(h?null:i);return wi(),h?s?c.jsx("img",{src:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"},alt:""}):c.jsx("div",{}):c.jsx(ax,{ref:y,src:r,poster:s,muted:!0,playsInline:!0,preload:"auto"})}function ox(){return c.jsxs(nx,{children:[c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",background:({scrollYProgress:i})=>c.jsxs(c.Fragment,{children:[c.jsx(cx,{scrollProgress:i,src:yt(Rn.portOfDover),mobileSrc:yt(Rn.portOfDoverMobile),poster:yt(cl.portOfDover)}),c.jsx(ix,{})]}),slides:[()=>c.jsx(lx,{children:c.jsx("div",{style:{position:"relative",zIndex:2},children:c.jsx(us,{chapter:"CHAPTER_THREE",title:"TRANSPORT",subtitle:"How hidden vulnerabilities could grind a country’s transport network to a halt"})})}),()=>c.jsxs(xt,{backgroundColor:"transparent",heading:c.jsxs(c.Fragment,{children:["MONDAY",c.jsx("br",{}),"PORT OF DOVER, UK"]}),textPosition:"top",accentColor:Et,children:[c.jsx("p",{children:"At a major UK port, logistics drivers prepare for the day ahead while commuters gather at stations across the country."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Just as the morning rush begins, unexpected glitches creep into navigation systems. This is the first sign of a broader attack targeting transport nationwide."})]})]}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsxs(xt,{timestamp:"8:00am",backgroundVideo:Rn.satNav,poster:cl.satNav,textPosition:"top",highlightText:!0,accentColor:Et,children:[c.jsx("p",{children:"A driver taps the day’s first delivery address into his satnav, only for the screen to freeze."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"He keeps tapping, but nothing displays."})]})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsxs(xt,{timestamp:"8:15am",backgroundVideo:Rn.truckDepot,poster:cl.truckDepot,textPosition:"top",highlightText:!0,accentColor:Et,children:[c.jsx("p",{children:"Others in the depot face similar issues, and management wonders why vans aren’t moving."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Thousands of pounds of revenue could be lost because of a late departure."})]})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",flowHeight:"200vh",children:c.jsx(xt,{timestamp:"9:00am",backgroundVideo:Rn.airportBoard,poster:cl.airportBoard,textPosition:"top",highlightText:!0,accentColor:Et,children:c.jsxs("p",{children:["A foreign hacker group is using a technique called"," ",c.jsx("strong",{children:"GPS jamming"})," to block signals and interfere with the GPS network, disrupting travel in the UK."]})})}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"HACKERS EXPLOIT EMERGING VULNERABILITIES",backgroundColor:Et,headingColor:Et,children:c.jsx(Pt,{children:c.jsx("p",{children:"While the Global Positioning System (GPS) has been a trusted navigation system since the mid-1990s, it’s far from invulnerable."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsxs(Ot,{sectionTitle:"HACKERS EXPLOIT EMERGING VULNERABILITIES",backgroundColor:Et,headingColor:Et,children:[c.jsx(je,{quote:c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:"Jamming"})," can block the signals, while ",c.jsx("strong",{children:"spoofing"})," tricks systems into misreading locations"]}),name:"Fabien Lecoq",role:"Cybersecurity Director, Sopra Steria"}),c.jsx(Pt,{children:c.jsx("p",{children:"Transport is the second most targeted sector in the EU, with the majority of attacks concentrated in air and logistics."})})]})}),c.jsx(lt,{appearInPlace:!0,flowHeight:"100vh",trackHeight:"200vh",children:({scrollYProgress:i})=>c.jsx(Hl,{sectionTitle:"HACKERS EXPLOIT EMERGING VULNERABILITIES",headingColor:Et,backgroundColor:`repeating-linear-gradient(90deg, ${Et} 0px, ${Et} 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, ${Et} 0px, ${Et} 2px, #000 2px, #000 40px)`,gridColor:ex,scrollProgress:i,children:c.jsx(ux,{})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"HACKERS EXPLOIT EMERGING VULNERABILITIES",backgroundColor:Et,headingColor:Et,children:c.jsx(je,{quote:c.jsxs(c.Fragment,{children:["Aircraft, ground systems and even airport gates are now deeply interconnected.",c.jsx("br",{}),c.jsx("br",{}),"This creates new vulnerabilities: imagine someone disrupting digital flight‑planning systems during peak travel or manipulating airport operational networks"]}),name:"Stefan Garczynski",role:"Managing Security Architect, Sopra Steria"})})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsx(xt,{timestamp:"12:00pm",heading:"WHEN DISRUPTION CROSSES BORDERS",backgroundVideo:Rn.truckRoad,poster:cl.truckRoad,textPosition:"top",accentColor:Et,children:c.jsx("p",{children:"The driver makes deliveries, albeit at a slower pace, using maps and institutional knowledge."})})}),c.jsx(sn,{trackHeight:"300vh",flowHeight:"300vh",appearInPlace:!0,background:()=>c.jsx(ba,{src:yt(Rn.satellite),poster:yt(cl.satellite),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{timestamp:"3:00pm",backgroundColor:"transparent",textPosition:"top",accentColor:Et,children:c.jsx("p",{children:"Over the radio, news breaks about a disruption to a UK military jet carrying an MP over Russian airspace. Early reports suggest it was a GPS disturbance."})}),()=>c.jsx(xt,{timestamp:"3:30pm",backgroundColor:"transparent",textPosition:"top",accentColor:Et,children:c.jsx("p",{children:"UK airports implement additional security measures, delaying arrivals and departures."})})]}),c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"SEEKING SECURITY IN DIGITAL SOVEREIGNTY",backgroundColor:Et,headingColor:Et,children:c.jsxs(Pt,{children:[c.jsx("p",{children:"Europe’s reliance on GPS – a US-owned satellite service – poses a strategic risk in times of global tension."}),c.jsxs("p",{children:["13 EU member states have already"," ",c.jsx("a",{href:"https://navisp.esa.int/news/article/13%20EU%20Member%20States%20call%20for%20common%20actions%20in%20response%20to%20GNSS%20jamming%20and%20spoofing%20threats",children:"called"})," ","on the European Commission to accelerate the deployment of interference-resistant Global Navigation Satellite System (GNSS) technologies to accelerate Europe’s digital sovereignty."]})]})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"SEEKING SECURITY IN DIGITAL SOVEREIGNTY",backgroundColor:Et,headingColor:Et,children:c.jsx(Pt,{children:c.jsx("p",{children:"Julia Carver, an assistant professor focusing on Europe’s cybersecurity policy and strategic affairs at Leiden University, explains that the EU’s vision of digital sovereignty emphasises self-determination."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"SEEKING SECURITY IN DIGITAL SOVEREIGNTY",backgroundColor:Et,headingColor:Et,children:c.jsx(je,{quote:"Europe wants to choose its digital vendors and set the regulations and parameters for how its digital devices are used. It also wants to have greater control over personal and non-personal data",name:"Julia Carver",role:"Assistant Professor, Leiden University"})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsxs(Ot,{sectionTitle:"SEEKING SECURITY IN DIGITAL SOVEREIGNTY",backgroundColor:Et,headingColor:Et,children:[c.jsx(Pt,{children:c.jsx("p",{children:"From a legal perspective, digital sovereignty is tricky."})}),c.jsx(je,{quote:"Digital sovereignty sounds compelling but, in legal terms, it goes in many directions. It’s rooted in internal market law, yet the threats themselves are cross-border",name:"Elaine Fahey",role:"Professor of EU Law, City St George’s, University of London"})]})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"SEEKING SECURITY IN DIGITAL SOVEREIGNTY",backgroundColor:Et,headingColor:Et,children:c.jsx(je,{quote:"That’s the paradox of the digital era; the EU has limited powers, yet it faces limitless, transboundary risks",name:"Elaine Fahey",role:"Professor of EU Law, City St George’s, University of London"})})}),c.jsx(sn,{trackHeight:"300vh",flowHeight:"200vh",appearInPlace:!0,background:()=>c.jsx(ba,{src:yt(Rn.mapDark),poster:yt(cl.mapDark),loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),slides:[()=>c.jsx(xt,{timestamp:"6:00pm",heading:"CHAOS CONTINUES INTO THE EVENING",backgroundColor:"transparent",textPosition:"top",accentColor:Et,children:c.jsx("p",{children:"Drivers are told they will need to work overtime to recoup the company’s revenue losses."})}),()=>c.jsx(xt,{timestamp:"7:00pm",backgroundColor:"transparent",textPosition:"top",accentColor:Et,children:c.jsx("p",{children:"As the driver heads home, his usual train is delayed by two hours."})})]}),c.jsx(lt,{appearInPlace:!0,trackHeight:"300vh",children:c.jsxs(xt,{timestamp:"7:30pm",backgroundVideo:Rn.trainStation,poster:cl.trainStation,textPosition:"top",highlightText:!0,accentColor:Et,children:[c.jsx("p",{children:"A news alert says trains have been cancelled or delayed owing to a coordinated attack on wifi networks at UK train stations."}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"Cyber analysts believe a foreign entity is behind travel chaos throughout the country."})]})}),c.jsx(Hl,{sectionTitle:"THE SOLUTIONS",headingColor:"#EBEBEB",headingBordered:!0,headingFontFamily:"'Space Grotesk', sans-serif",headingFontWeight:500,backgroundColor:"#000",children:c.jsxs(os,{children:[c.jsx(he,{children:c.jsx("p",{children:"Expanding European investment in GNSS"})}),c.jsx(he,{children:c.jsx("p",{children:"Manufacturing critical GPS and satellite components"})}),c.jsx(he,{children:c.jsx("p",{children:"Promoting EU-developed navigation software and apps"})}),c.jsx(he,{children:c.jsx("p",{children:"Zero-trust architectures"})})]})})]})}const Ol="#d96a38";function rx(){const i=We();return c.jsxs("div",{"data-slide":!0,children:[c.jsx(lt,{children:c.jsx(Ot,{sectionTitle:"THE LESSON IS CLEAR",backgroundColor:Ol,headingColor:Ol,children:c.jsx(Pt,{children:c.jsx("p",{children:"Cyber threats do not respect borders – digital or physical."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"THE LESSON IS CLEAR",backgroundColor:Ol,headingColor:Ol,children:c.jsx(Pt,{children:c.jsx("p",{children:"From corrupted payment infrastructure in Madrid to a disrupted UK or blackouts in Oslo, these hypothetical scenarios show how quickly disruption could ripple across Europe’s daily life – crossing industries and countries in hours, sometimes minutes."})})})}),c.jsx(lt,{appearInPlace:!0,children:c.jsx(Ot,{sectionTitle:"THE LESSON IS CLEAR",backgroundColor:Ol,headingColor:Ol,children:c.jsxs(Pt,{children:[c.jsx("p",{children:"The sophistication of these attacks demands an equally sophisticated response, but this cyber resilience cannot be built in silos."}),!i&&c.jsxs(c.Fragment,{children:[c.jsx("br",{}),c.jsx("br",{})]}),c.jsx("p",{children:"These cases highlight why a multifaceted, cross-border and cross-sector approach to cybersecurity is required in today’s hyper-connected society."}),!i&&c.jsxs(c.Fragment,{children:[c.jsx("br",{}),c.jsx("br",{})]}),c.jsx("p",{children:"The future will belong not to the best-defended sector, but to the best-coordinated network."})]})})}),c.jsx(lt,{appearInPlace:!0,trackHeight:"200vh",flowHeight:"200vh",children:c.jsx(Ot,{backgroundColor:Ol,children:c.jsx(je,{quote:"It’s no longer a case of if an attack will happen, but when. To stay ahead of threats evolving in both complexity and scale, Europe must act not just with urgency, but also with unity",name:"Fabien Lecoq",role:"Cybersecurity Director, Sopra Steria"})})})]})}function sx(i,r){const f=Array.from(document.querySelectorAll("[data-slide]"));for(const s of f){const h=s.getBoundingClientRect().top+window.scrollY,y=s.dataset.slidePhases?parseInt(s.dataset.slidePhases,10):0;if(y>1){const b=s.offsetHeight;for(let D=0;D<y;D++)if(h+D/y*b>i+r)return{el:s,phaseIndex:D,phases:y}}else if(h>i+r)return{el:s,phaseIndex:0,phases:0}}return null}const fx=300;let Ke=null;function Lr(i,r){Ke!=null&&(cancelAnimationFrame(Ke),Ke=null);const f=window.scrollY,s=i-f;if(Math.abs(s)<2){r?.();return}const h=performance.now();function y(b){const D=b-h,A=Math.min(D/fx,1),v=1-Math.pow(1-A,3);window.scrollTo(0,Math.round(f+s*v)),A<1?Ke=requestAnimationFrame(y):(Ke=null,r?.())}Ke=requestAnimationFrame(y)}function dx(){return new Promise(i=>{window.scrollY<1?(window.scrollTo(0,1),requestAnimationFrame(()=>requestAnimationFrame(i))):i()})}function hx(){const i=We(),r=G.useRef(!1),f=G.useRef({x:0,y:0});G.useEffect(()=>{if(!i)return;history.scrollRestoration="manual",window.scrollTo(0,1);const s=setInterval(()=>{window.scrollY<5&&window.scrollTo(0,1)},50);setTimeout(()=>clearInterval(s),3e3);const h=b=>{Ke!=null&&(cancelAnimationFrame(Ke),Ke=null,r.current=!1),f.current={x:b.touches[0].clientX,y:b.touches[0].clientY}},y=b=>{if(r.current)return;const D=b.changedTouches[0].clientX-f.current.x,A=b.changedTouches[0].clientY-f.current.y;if(Math.abs(D)>15||Math.abs(A)>15||b.target.closest("a, button, input, select, textarea, [role='button'], video, nav, .o-header"))return;r.current=!0;const v=document.querySelector("[data-slide-intro-end]");if(v&&window.scrollY<v.getBoundingClientRect().top+window.scrollY-50){const R=v.getBoundingClientRect().top+window.scrollY;Lr(R,()=>{r.current=!1});return}dx().then(()=>{const R=window.scrollY,N=document.querySelector("[data-slide-intro-end]"),U=N&&R>N.getBoundingClientRect().top+window.scrollY,Q=U?150:0,V=sx(R,U?150:50);if(V!=null){const{el:P,phaseIndex:X,phases:J}=V;let Y;X>0&&J>1?Y=P.getBoundingClientRect().top+window.scrollY+X/J*P.offsetHeight:Y=P.getBoundingClientRect().top+window.scrollY+Q,Lr(Y,()=>{r.current=!1})}else{const P=document.getElementById("cta-sopra");if(P){const X=P.getBoundingClientRect().top+window.scrollY;Lr(X-200,()=>{r.current=!1})}else r.current=!1}})};return document.addEventListener("touchstart",h,{passive:!0}),document.addEventListener("touchend",y,{passive:!0}),()=>{document.removeEventListener("touchstart",h),document.removeEventListener("touchend",y),Ke!=null&&(cancelAnimationFrame(Ke),Ke=null)}},[i])}const px=T.div``,gx=T.div`
    position: relative;
`,mx=T.div`
    position: sticky;
    top: 0;
    height: 100lvh;
    z-index: 0;
    overflow: hidden;
`,yx=T.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,vx=T.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.55) 100%
    );
`,xx=T.div`
    position: relative;
    z-index: 1;
    margin-top: -100lvh;
`,zp=T.div`
    scroll-margin-top: 40px;
    isolation: isolate;

    ${j.mobile(`
        scroll-margin-top: 60px;
    `)}
`,V0=G.forwardRef(function({children:r,forceMount:f,...s},h){const[y,b]=G.useState(!1),D=G.useRef(null),A=y||f;return G.useEffect(()=>{if(A)return;const v=D.current;if(!v)return;const R=new IntersectionObserver(([N])=>{N.isIntersecting&&(b(!0),R.disconnect())},{rootMargin:"200%"});return R.observe(v),()=>R.disconnect()},[A]),c.jsx(zp,{ref:v=>{D.current=v,typeof h=="function"?h(v):h&&(h.current=v)},...s,children:A?r:null})}),bx=[{id:"energy",label:"Energy",shortLabel:"ENER"},{id:"finance",label:"Finance",shortLabel:"FINAN"},{id:"transport",label:"Transport",shortLabel:"SPORT"}];function Sx(){const[i,r]=G.useState(0),[f,s]=G.useState(!1),[h,y]=G.useState({}),b=G.useRef([]),D=We();hx();const A=R=>y(N=>({...N,[R]:!0})),v=R=>{r(R);for(let N=1;N<=R;N++)A(N);requestAnimationFrame(()=>{requestAnimationFrame(()=>{b.current[R]?.scrollIntoView({behavior:"smooth"})})})};return G.useEffect(()=>{const N=rl(()=>{const U=window.scrollY+200,Q=b.current[0],W=b.current[2];if(Q&&W){const V=Q.offsetTop;s(U>=V)}b.current.forEach((V,P)=>{if(V){const X=V.offsetTop,J=X+V.offsetHeight;U>=X&&U<J&&r(P)}})});return window.addEventListener("scroll",N,{passive:!0}),()=>{N.cancel(),window.removeEventListener("scroll",N)}},[]),c.jsxs(px,{children:[c.jsxs(gx,{children:[c.jsxs(mx,{children:[c.jsx(yx,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,fetchpriority:"high",poster:yt("videos/posters/intro/GettyImages-1444535963.jpg"),src:yt(D?"videos/intro/GettyImages-1444535963_mobile.mp4":"videos/intro/GettyImages-1444535963.mp4")}),c.jsx(vx,{})]}),c.jsxs(xx,{children:[c.jsx(y1,{}),c.jsx(S1,{})]})]}),c.jsx(A1,{}),c.jsx(M1,{}),c.jsx(D1,{tabs:bx,activeTab:i,onTabChange:v,visible:f}),c.jsx(zp,{ref:R=>b.current[0]=R,children:c.jsx(Xv,{})}),c.jsx(V0,{ref:R=>b.current[1]=R,forceMount:h[1],children:c.jsx(tx,{})}),c.jsx(V0,{ref:R=>b.current[2]=R,forceMount:h[2],children:c.jsx(ox,{})}),c.jsx(rx,{})]})}window.innerWidth>=768&&["videos/intro/GettyImages-1444535963.mp4","videos/ch1/ch1_1.mp4"].forEach(i=>{const r=document.createElement("link");r.rel="preload",r.as="video",r.crossOrigin="anonymous",r.href=yt(i),document.head.appendChild(r)});iy.createRoot(document.getElementById("react-root")).render(c.jsx(G.StrictMode,{children:c.jsx(Sx,{})}));
