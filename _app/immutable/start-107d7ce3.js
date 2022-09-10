var He=Object.defineProperty;var We=(r,e,t)=>e in r?He(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ge=(r,e,t)=>(We(r,typeof e!="symbol"?e+"":e,t),t);import{S as Me,i as Xe,s as Ye,a as Qe,e as z,c as Ze,b as H,g as ie,t as J,d as le,f as K,h as x,j as et,o as be,k as tt,l as nt,m as rt,n as we,p as C,q as at,r as st,u as ot,v as M,w as Re,x as X,y as Y,z as qe}from"./chunks/index-e5d3839d.js";import{g as Ve,f as Be,s as G,a as ve,b as it,i as lt}from"./chunks/singletons-3dc07a4f.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(r,e){return new URL(r,e).href},ze={},W=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ft(o,l),o in ze)return;ze[o]=!0;const u=o.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":ct,u||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),u)return new Promise((w,m)=>{c.addEventListener("load",w),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class se{constructor(e,t){ge(this,"name","HttpError");ge(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Je{constructor(e,t){this.status=e,this.location=t}}function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(r,e){const t=new URL(r);for(const l of pt){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,u)=>u(r,o),mt(t),t}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(l)}return Se(r,e)};const oe=new Map;function gt(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${_t(t.body)}"]`);const u=document.querySelector(o);if(u!=null&&u.textContent){const{body:n,...c}=JSON.parse(u.textContent),w=u.getAttribute("data-ttl");return w&&oe.set(e,{body:n,init:c,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,c))}return Se(r,t)}function wt(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Se(r,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(r){const e=[],t=[];let l=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(vt).map((u,n,c)=>{const w=decodeURIComponent(u),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const v=n===c.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((L,S)=>{if(S%2){const T=yt.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,D,q]=T;return e.push(D),t.push(q),j?"(.*?)":"([^/]+?)"}return v&&L.includes(".")&&(l=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function vt(r){return!/^\([^)]+\)$/.test(r)}function kt(r,e,t,l){const o={};for(let u=0;u<e.length;u+=1){const n=e[u],c=t[u],w=r[u+1]||"";if(c){const m=l[c];if(!m)throw new Error(`Missing "${c}" param matcher`);if(!m(w))return}o[n]=w}return o}function Et(r,e,t,l){const o=new Set(e);return Object.entries(t).map(([c,[w,m,v]])=>{const{pattern:L,names:S,types:T}=bt(c),j={id:c,exec:D=>{const q=L.exec(D);if(q)return kt(q,S,T,l)},errors:[1,...v||[]].map(D=>r[D]),layouts:[0,...m||[]].map(n),leaf:u(w)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(c){const w=c<0;return w&&(c=~c),[w,r[c]]}function n(c){return c===void 0?c:[o.has(c),r[c]]}}function Rt(r,e){return new se(r,e)}function St(r){let e,t,l;var o=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(u(r))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),H(n,t,c),l=!0},p(n,c){const w={};if(c&4&&(w.data=n[2]),c&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Lt(r){let e,t,l;var o=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[$t]},$$scope:{ctx:n}}}}return o&&(e=new o(u(r))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),H(n,t,c),l=!0},p(n,c){const w={};if(c&4&&(w.data=n[2]),c&523&&(w.$$scope={dirty:c,ctx:n}),o!==(o=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function $t(r){let e,t,l;var o=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(u(r))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),H(n,t,c),l=!0},p(n,c){const w={};if(c&8&&(w.data=n[3]),c&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),le()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Ke(r){let e,t=r[5]&&xe(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(l){e=nt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(x),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,o){H(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=xe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&x(e),t&&t.d()}}}function xe(r){let e;return{c(){e=at(r[6])},l(t){e=st(t,r[6])},m(t,l){H(t,e,l)},p(t,l){l&64&&ot(e,t[6])},d(t){t&&x(e)}}}function Pt(r){let e,t,l,o,u;const n=[Lt,St],c=[];function w(v,L){return v[0][1]?0:1}e=w(r),t=c[e]=n[e](r);let m=r[4]&&Ke(r);return{c(){t.c(),l=Qe(),m&&m.c(),o=z()},l(v){t.l(v),l=Ze(v),m&&m.l(v),o=z()},m(v,L){c[e].m(v,L),H(v,l,L),m&&m.m(v,L),H(v,o,L),u=!0},p(v,[L]){let S=e;e=w(v),e===S?c[e].p(v,L):(ie(),J(c[S],1,1,()=>{c[S]=null}),le(),t=c[e],t?t.p(v,L):(t=c[e]=n[e](v),t.c()),K(t,1),t.m(l.parentNode,l)),v[4]?m?m.p(v,L):(m=Ke(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(v){u||(K(t),u=!0)},o(v){J(t),u=!1},d(v){c[e].d(v),v&&x(l),m&&m.d(v),v&&x(o)}}}function Ot(r,e,t){let{stores:l}=e,{page:o}=e,{components:u}=e,{form:n}=e,{data_0:c=null}=e,{data_1:w=null}=e;et(l.page.notify);let m=!1,v=!1,L=null;return be(()=>{const S=l.page.subscribe(()=>{m&&(t(5,v=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),S}),r.$$set=S=>{"stores"in S&&t(7,l=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,u=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,c=S.data_0),"data_1"in S&&t(3,w=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&l.page.set(o)},[u,n,c,w,m,v,L,l,o]}class jt extends Me{constructor(e){super(),Xe(this,e,Ot,Pt,Ye,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut={},ce=[()=>W(()=>import("./chunks/0-c172922d.js"),["chunks/0-c172922d.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-70e39341.js","assets/_layout-fd11f51a.css","chunks/index-e5d3839d.js","chunks/stores-dc6210f4.js","chunks/singletons-3dc07a4f.js","chunks/data-efde1747.js"],import.meta.url),()=>W(()=>import("./chunks/1-ef2ff607.js"),["chunks/1-ef2ff607.js","components/error.svelte-0d1070e2.js","chunks/index-e5d3839d.js","chunks/stores-dc6210f4.js","chunks/singletons-3dc07a4f.js"],import.meta.url),()=>W(()=>import("./chunks/2-7d7429a0.js"),["chunks/2-7d7429a0.js","components/pages/_page.svelte-f666436d.js","chunks/index-e5d3839d.js","chunks/data-efde1747.js"],import.meta.url),()=>W(()=>import("./chunks/3-0dde9337.js"),["chunks/3-0dde9337.js","components/pages/goals/_page.svelte-09581886.js","chunks/index-e5d3839d.js","chunks/data-efde1747.js"],import.meta.url),()=>W(()=>import("./chunks/4-118b9d76.js"),["chunks/4-118b9d76.js","components/pages/results/_page.svelte-6ca3952b.js","chunks/index-e5d3839d.js","chunks/data-efde1747.js"],import.meta.url)],At=[],It={"":[2],goals:[3],results:[4]},Tt="/__data.js",Ge="sveltekit:scroll",B="sveltekit:index",ne=Et(ce,At,It,Ut),ke=ce[0],Ee=ce[1];ke();Ee();let ee={};try{ee=JSON.parse(sessionStorage[Ge])}catch{}function ye(r){ee[r]=ve()}function Dt({target:r,base:e,trailing_slash:t}){var Te;const l=[],o={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},c=!1,w=!0,m=!1,v=1,L=null,S=!1,T,j=(Te=history.state)==null?void 0:Te[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const D=ee[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,V,Le;function $e(){if(!L){const a=new URL(location.href);L=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),L=null,S=!1})}return L}async function fe(a,{noscroll:i=!1,replaceState:d=!1,keepfocus:s=!1,state:f={}},p){return typeof a=="string"&&(a=new URL(a,Ve(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:p,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=Ae(i),o.id=i.id,o.promise}async function Oe(a,i,d,s,f){var k,E;const p=Le={};let h=a&&await Ae(a);if(!h&&i.origin===location.origin&&i.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!h)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Le!==p)return!1;if(l.length=0,h.type==="redirect")if(d.length>10||d.includes(i.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(h.location,i).href,{},[...d,i.pathname]),!1;else((E=(k=h.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await G.updated.check()&&await Z(i);if(m=!0,s&&s.details){const{details:b}=s,_=b.replaceState?0:1;b.state[B]=j+=_,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(c){n=h.state,h.props.page&&(h.props.page.url=i);const b=ae();T.$set(h.props),b()}else je(h);if(s){const{scroll:b,keepfocus:_}=s;if(!_){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await qe(),w){const R=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await qe();o.promise=null,o.id=null,w=!0,h.props.page&&(V=h.props.page),f&&f(),m=!1}function je(a){var f,p;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),V=a.props.page;const d=ae();T=new jt({target:r,props:{...a.props,stores:G},hydrate:!0}),d();const s={from:null,to:re("to",{params:n.params,routeId:(p=(f=n.route)==null?void 0:f.id)!=null?p:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(h=>h(s)),c=!0}async function Q({url:a,params:i,branch:d,status:s,error:f,route:p,form:h}){var I;const k=d.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:d,error:f,route:p,session_id:v},props:{components:k.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let b={},_=!V;for(let $=0;$<k.length;$+=1){const U=k[$];b={...b,...U.data},(_||!n.branch.some(A=>A===U))&&(E.props[`data_${$}`]=b,_=_||Object.keys((I=U.data)!=null?I:{}).length>0)}if(_||(_=Object.keys(V.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==f||_){E.props.page={error:f,params:i,routeId:p&&p.id,status:s,url:a,data:_?b:V.data};const $=(U,A)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ue({loader:a,parent:i,url:d,params:s,routeId:f,server_data_node:p}){var b,_,R,I,$;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let U=function(...g){for(const O of g){const{href:P}=new URL(O,d);k.dependencies.add(P)}};const A={};for(const g in s)Object.defineProperty(A,g,{get(){return k.params.add(g),s[g]},enumerable:!0});const y={routeId:f,params:A,data:(_=p==null?void 0:p.data)!=null?_:null,url:ht(d,()=>{k.url=!0}),async fetch(g,O){let P;typeof g=="string"?P=g:(P=g.url,O={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...O});const N=new URL(P,d).href;return U(N),c?wt(N,O):gt(P,N,O)},setHeaders:()=>{},depends:U,parent(){return k.parent=!0,i()}};Object.defineProperties(y,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(R=await E.shared.load.call(null,y))!=null?R:null}return{node:E,loader:a,server:p,shared:(I=E.shared)!=null&&I.load?{type:"data",data:h,uses:k}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ue(a,i,d){if(S)return!0;if(!d)return!1;if(d.parent&&i||a.url&&d.url)return!0;for(const s of a.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(l.some(f=>f(new URL(s))))return!0;return!1}function de(a,i){var d,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ae({id:a,invalidating:i,url:d,params:s,route:f}){if(o.id===a&&o.promise)return o.promise;const{errors:p,layouts:h,leaf:k}=f,E=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(s).filter(y=>n.params[y]!==s[y])},b=[...h,k];p.forEach(y=>y==null?void 0:y().catch(()=>{})),b.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let _=null;const R=b.reduce((y,g,O)=>{var F;const P=n.branch[O],N=!!(g!=null&&g[0])&&((P==null?void 0:P.loader)!==g[1]||Ue(E,y.some(Boolean),(F=P.server)==null?void 0:F.uses));return y.push(N),y},[]);if(R.some(Boolean)){try{_=await Fe(d,R)}catch(y){return te({status:500,error:y,url:d,routeId:f.id})}if(_.type==="redirect")return _}const I=_==null?void 0:_.nodes;let $=!1;const U=b.map(async(y,g)=>{var me,De;if(!y)return;const O=n.branch[g],P=(me=I==null?void 0:I[g])!=null?me:null;if((!P||P.type==="skip")&&y[1]===(O==null?void 0:O.loader)&&!Ue(E,$,(De=O.shared)==null?void 0:De.uses))return O;if($=!0,(P==null?void 0:P.type)==="error")throw P.httperror?Rt(P.httperror.status,P.httperror.message):P.error;return ue({loader:y[1],url:d,params:s,routeId:f.id,parent:async()=>{var Ce;const Ne={};for(let _e=0;_e<g;_e+=1)Object.assign(Ne,(Ce=await U[_e])==null?void 0:Ce.data);return Ne},server_data_node:de(P,O==null?void 0:O.server)})});for(const y of U)y.catch(()=>{});const A=[];for(let y=0;y<b.length;y+=1)if(b[y])try{A.push(await U[y])}catch(g){const O=g;if(O instanceof Je)return{type:"redirect",location:O.location};const P=g instanceof se?g.status:500;for(;y--;)if(p[y]){let N,F=y;for(;!A[F];)F-=1;try{return N={node:await p[y](),loader:p[y],data:{},server:null,shared:null},await Q({url:d,params:s,branch:A.slice(0,F+1).concat(N),status:P,error:O,route:f})}catch{continue}}await Z(d);return}else A.push(void 0);return await Q({url:d,params:s,branch:A,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:a,error:i,url:d,routeId:s}){var b;const f={},p=await ke();let h=null;if(p.server)try{const _=await Fe(d,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=(b=_.nodes[0])!=null?b:null}catch{await Z(d);return}const k=await ue({loader:ke,url:d,params:f,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(h)}),E={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Q({url:d,params:f,branch:[k,E],status:a,error:i,route:null})}function pe(a,i){if(Ie(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const f=s.exec(d);if(f){const p=new URL(a.origin+ut(a.pathname,t)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:i,route:s,params:dt(f),url:p}}}}function Ie(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:d,redirect_chain:s,details:f,type:p,delta:h,accepted:k,blocked:E}){var $,U,A,y;let b=!1;const _=pe(a,!1),R={from:re("from",{params:n.params,routeId:(U=($=n.route)==null?void 0:$.id)!=null?U:null,url:n.url}),to:re("to",{params:(A=_==null?void 0:_.params)!=null?A:null,routeId:(y=_==null?void 0:_.route.id)!=null?y:null,url:a}),type:p};h!==void 0&&(R.delta=h);const I={...R,cancel:()=>{b=!0}};if(u.before_navigate.forEach(g=>g(I)),b){E();return}ye(j),k(),c&&G.navigating.set(R),await Oe(_,a,s,{scroll:i,keepfocus:d,details:f},()=>{u.after_navigate.forEach(g=>g(R)),G.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(m||!c)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(d=>d.href===i)}return $e()},invalidateAll:()=>(S=!0,$e()),prefetch:async a=>{const i=new URL(a,Ve(document));await Pe(i)},prefetch_routes:async a=>{const d=(a?ne.filter(s=>a.some(f=>s.exec(f))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:d,route:s}=n;if(!s)return;let f=n.branch.length;for(;f--;)if(s.errors[f]){let p,h=f;for(;!d[h];)h-=1;try{p={node:await s.errors[f](),loader:s.errors[f],data:{},server:null,shared:null};const k=await Q({url:i,params:n.params,branch:d.slice(0,h+1).concat(p),status:500,error:a.error,route:s});n=k.state;const E=ae();T.$set(k.props),E();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==V.status&&(i.page={...V,status:a.status});const d=ae();T.$set(i),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let f=!1;const p={from:re("from",{params:n.params,routeId:(k=(h=n.route)==null?void 0:h.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(p)),f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(j);try{sessionStorage[Ge]=JSON.stringify(ee)}catch{}}});const a=s=>{const{url:f,options:p}=Be(s);if(f&&p.prefetch){if(Ie(f))return;Pe(f)}};let i;const d=s=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=s.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:f,url:p,options:h}=Be(s);if(!f||!p)return;const k=f instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||h.reload||(k?f.target.baseVal:f.target))return;const[b,_]=p.href.split("#");if(_!==void 0&&b===location.href.split("#")[0]){q=!0,ye(j),G.page.set({...V,url:p}),G.page.notify();return}he({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===j)return;const f=s.state[B]-j;he({url:new URL(location.href),scroll:ee[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=s.state[B]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:d,params:s,routeId:f,data:p,form:h})=>{var b;const k=new URL(location.href);let E;try{const _=d.map(async(R,I)=>{const $=p[I];return ue({loader:ce[R],url:k,params:s,routeId:f,parent:async()=>{const U={};for(let A=0;A<I;A+=1)Object.assign(U,(await _[A]).data);return U},server_data_node:de($)})});E=await Q({url:k,params:s,branch:await Promise.all(_),status:a,error:i!=null&&i.__is_http_error?new se(i.status,i.message):i,form:h,route:(b=ne.find(R=>R.id===f))!=null?b:null})}catch(_){const R=_;if(R instanceof Je){await Z(new URL(_.location,location.href));return}E=await te({status:R instanceof se?R.status:500,error:R,url:k,routeId:f})}je(E)}}}let Nt=1;async function Fe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Tt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Nt++)),await W(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}const Ct=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Ct)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ae(){return()=>{}}async function zt({env:r,hydrate:e,paths:t,target:l,trailing_slash:o}){it(t);const u=Dt({target:l,base:t.base,trailing_slash:o});lt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{zt as start};
