import{S as lt,i as at,s as rt,a as K,k as c,q as v,I as st,h as r,c as M,l as _,m as f,r as g,n as ot,b as N,C as e,A as x,J as nt,u as V}from"../../chunks/index-e5d3839d.js";import{d as $}from"../../chunks/data-efde1747.js";function tt(p,n,a){const i=p.slice();return i[2]=n[a],i}function et(p){let n,a,i=p[2].name+"",t,d,m=p[2].played+"",u,E,C=p[2].won+"",B,L,T=p[2].drawn+"",R,b,S=p[2].lost+"",k,q,w=p[2].g.toString().replace(",",":")+"",I,D,H,A=p[2].won*3+p[2].drawn+"",W;return{c(){n=c("tr"),a=c("td"),t=v(i),d=c("td"),u=v(m),E=c("td"),B=v(C),L=c("td"),R=v(T),b=c("td"),k=v(S),q=c("td"),I=v(w),D=c("td"),H=c("b"),W=v(A)},l(h){n=_(h,"TR",{});var l=f(n);a=_(l,"TD",{});var s=f(a);t=g(s,i),s.forEach(r),d=_(l,"TD",{});var G=f(d);u=g(G,m),G.forEach(r),E=_(l,"TD",{});var o=f(E);B=g(o,C),o.forEach(r),L=_(l,"TD",{});var y=f(L);R=g(y,T),y.forEach(r),b=_(l,"TD",{});var J=f(b);k=g(J,S),J.forEach(r),q=_(l,"TD",{});var P=f(q);I=g(P,w),P.forEach(r),D=_(l,"TD",{});var j=f(D);H=_(j,"B",{});var z=f(H);W=g(z,A),z.forEach(r),j.forEach(r),l.forEach(r)},m(h,l){N(h,n,l),e(n,a),e(a,t),e(n,d),e(d,u),e(n,E),e(E,B),e(n,L),e(L,R),e(n,b),e(b,k),e(n,q),e(q,I),e(n,D),e(D,H),e(H,W)},p(h,l){l&1&&i!==(i=h[2].name+"")&&V(t,i),l&1&&m!==(m=h[2].played+"")&&V(u,m),l&1&&C!==(C=h[2].won+"")&&V(B,C),l&1&&T!==(T=h[2].drawn+"")&&V(R,T),l&1&&S!==(S=h[2].lost+"")&&V(k,S),l&1&&w!==(w=h[2].g.toString().replace(",",":")+"")&&V(I,w),l&1&&A!==(A=h[2].won*3+h[2].drawn+"")&&V(W,A)},d(h){h&&r(n)}}}function ht(p){let n,a,i,t,d,m,u,E,C,B,L,T,R,b,S,k,q,w,I,D,H,A,W,h=p[0],l=[];for(let s=0;s<h.length;s+=1)l[s]=et(tt(p,h,s));return{c(){n=K(),a=c("div"),i=c("h1"),t=v("Tables"),d=K(),m=c("table"),u=c("tr"),E=c("th"),C=v("Club"),B=c("th"),L=v("P"),T=c("th"),R=v("W"),b=c("th"),S=v("D"),k=c("th"),q=v("L"),w=c("th"),I=v("G"),D=c("th"),H=c("b"),A=v("Pts"),W=K();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){st('[data-svelte="svelte-3y6u34"]',document.head).forEach(r),n=M(s),a=_(s,"DIV",{class:!0});var o=f(a);i=_(o,"H1",{});var y=f(i);t=g(y,"Tables"),y.forEach(r),d=M(o),m=_(o,"TABLE",{});var J=f(m);u=_(J,"TR",{});var P=f(u);E=_(P,"TH",{});var j=f(E);C=g(j,"Club"),j.forEach(r),B=_(P,"TH",{});var z=f(B);L=g(z,"P"),z.forEach(r),T=_(P,"TH",{});var O=f(T);R=g(O,"W"),O.forEach(r),b=_(P,"TH",{});var Q=f(b);S=g(Q,"D"),Q.forEach(r),k=_(P,"TH",{});var U=f(k);q=g(U,"L"),U.forEach(r),w=_(P,"TH",{});var X=f(w);I=g(X,"G"),X.forEach(r),D=_(P,"TH",{});var Y=f(D);H=_(Y,"B",{});var Z=f(H);A=g(Z,"Pts"),Z.forEach(r),Y.forEach(r),P.forEach(r),W=M(J);for(let F=0;F<l.length;F+=1)l[F].l(J);J.forEach(r),o.forEach(r),this.h()},h(){document.title="Breaktime Bhora | Tables",ot(a,"class","main")},m(s,G){N(s,n,G),N(s,a,G),e(a,i),e(i,t),e(a,d),e(a,m),e(m,u),e(u,E),e(E,C),e(u,B),e(B,L),e(u,T),e(T,R),e(u,b),e(b,S),e(u,k),e(k,q),e(u,w),e(w,I),e(u,D),e(D,H),e(H,A),e(m,W);for(let o=0;o<l.length;o+=1)l[o].m(m,null)},p(s,[G]){if(G&1){h=s[0];let o;for(o=0;o<h.length;o+=1){const y=tt(s,h,o);l[o]?l[o].p(y,G):(l[o]=et(y),l[o].c(),l[o].m(m,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=h.length}},i:x,o:x,d(s){s&&r(n),s&&r(a),nt(l,s)}}}function ct(p,n,a){function i(d){return{name:d,played:$[0].stats.length,won:0,drawn:0,lost:0,g:[0,0]}}let t=[new i("PLA"),new i("GRH")];return $[0].stats.forEach(d=>{d.score_plasil>d.score_grehn?(a(0,t[0].won+=1,t),a(0,t[1].lost+=1,t)):d.score_grehn>d.score_plasil?(a(0,t[1].won+=1,t),a(0,t[0].lost+=1,t)):(a(0,t[1].drawn+=1,t),a(0,t[0].drawn+=1,t)),a(0,t[0].g[0]+=d.score_plasil,t),a(0,t[0].g[1]+=d.score_grehn,t),a(0,t[1].g[0]+=d.score_grehn,t),a(0,t[1].g[1]+=d.score_plasil,t)}),(t[0].points<t[1].points||t[0].points===t[1].points&&t[0].g[0]<t[1].g[0])&&t.reverse(),[t]}class dt extends lt{constructor(n){super(),at(this,n,ct,ht,rt,{})}}export{dt as default};
