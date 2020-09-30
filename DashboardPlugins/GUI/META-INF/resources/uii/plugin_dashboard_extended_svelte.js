!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function a(t){t.forEach(n)}function l(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function o(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function c(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,n,e,a){return t.addEventListener(n,e,a),()=>t.removeEventListener(n,e,a)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function h(t,n,e,a){t.style.setProperty(n,e,a?"important":"")}let b;function y(t){b=t}function _(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const x=[],v=[],$=[],w=[],N=Promise.resolve();let O=!1;function A(t){$.push(t)}let k=!1;const R=new Set;function I(){if(!k){k=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];y(n),K(n.$$)}for(y(null),x.length=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];R.has(n)||(R.add(n),n())}$.length=0}while(x.length);for(;w.length;)w.pop()();O=!1,k=!1,R.clear()}}function K(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const G=new Set;function W(t,n){-1===t.$$.dirty[0]&&(x.push(t),O||(O=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(r,o,s,c,u,d,f=[-1]){const m=b;y(r);const g=o.props||{},p=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let h=!1;if(p.ctx=s?s(r,g,(t,n,...e)=>{const a=e.length?e[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),h&&W(r,t)),n}):[],p.update(),h=!0,a(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();o.intro&&((_=r.$$.fragment)&&_.i&&(G.delete(_),_.i(x))),function(t,e,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:c}=t.$$;o&&o.m(e,r),A(()=>{const e=s.map(n).filter(l);i?i.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(A)}(r,o.target,o.anchor),I()}var _,x;y(m)}function D(t,n,e){const a=t.slice();return a[10]=n[e],a}function E(t,n,e){const a=t.slice();return a[7]=n[e],a}function T(t,n,e){const a=t.slice();return a[10]=n[e],a}function L(t,n,e){const a=t.slice();return a[7]=n[e],a}function S(n){let e,a;return{c(){e=u("div"),a=u("span"),a.textContent=""+n[3]("dashboard_nagiosNotLoaded"),g(a,"class","alert alert-info alert-dismissable margin-bottom-10"),h(e,"padding","20px")},m(t,n){s(t,e,n),o(e,a)},p:t,d(t){t&&i(e)}}}function j(t){let n,e,a="down"!=t[1]&&z(t),l="down"==t[1]&&M(t);return{c(){n=u("div"),a&&a.c(),e=f(),l&&l.c(),g(n,"class","padding:10px;")},m(t,r){s(t,n,r),a&&a.m(n,null),o(n,e),l&&l.m(n,null)},p(t,r){"down"!=t[1]?a?a.p(t,r):(a=z(t),a.c(),a.m(n,e)):a&&(a.d(1),a=null),"down"==t[1]?l?l.p(t,r):(l=M(t),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},d(t){t&&i(n),a&&a.d(),l&&l.d()}}}function z(t){let n,e=t[0],a=[];for(let n=0;n<e.length;n+=1)a[n]=F(L(t,e,n));return{c(){n=u("div");for(let t=0;t<a.length;t+=1)a[t].c();h(n,"padding","10px")},m(t,e){s(t,n,e);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,l){if(1&l){let r;for(e=t[0],r=0;r<e.length;r+=1){const o=L(t,e,r);a[r]?a[r].p(o,l):(a[r]=F(o),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},d(t){t&&i(n),c(a,t)}}}function B(t){let n,e=t[7].nagios.status.service_status,a=[];for(let n=0;n<e.length;n+=1)a[n]=H(T(t,e,n));return{c(){n=u("div");for(let t=0;t<a.length;t+=1)a[t].c();h(n,"margin-top","-15px")},m(t,e){s(t,n,e);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,l){if(1&l){let r;for(e=t[7].nagios.status.service_status,r=0;r<e.length;r+=1){const o=T(t,e,r);a[r]?a[r].p(o,l):(a[r]=H(o),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},d(t){t&&i(n),c(a,t)}}}function H(t){let n,e,a,l,r,c=t[10].service_display_name+"";return{c(){n=u("span"),e=d(c),a=f(),g(n,"class",l="badge "+t[10].badgeColor+" font-size-xs"),h(n,"font-weight","normal"),h(n,"margin","3px"),g(n,"title",r=t[10].status_information),g(n,"rel","tooltip")},m(t,l){s(t,n,l),o(n,e),o(n,a)},p(t,a){1&a&&c!==(c=t[10].service_display_name+"")&&p(e,c),1&a&&l!==(l="badge "+t[10].badgeColor+" font-size-xs")&&g(n,"class",l),1&a&&r!==(r=t[10].status_information)&&g(n,"title",r)},d(t){t&&i(n)}}}function F(t){let n,e,a,l,r,c,m,b,y,_,x,v=t[7].name+"",$="OK"!=t[7].summary&&null!=t[7].nagios&&B(t);return{c(){n=u("div"),e=u("div"),a=u("div"),l=u("i"),c=f(),m=u("span"),b=d(v),_=f(),$&&$.c(),x=f(),g(l,"class",r="fa "+("OK"==t[7].summary?"fa-check":"WARNING"==t[7].summary?"fa-exclamation-triangle":"fa-times-circle")),h(m,"margin","5px"),g(a,"class",y="label "+("OK"==t[7].summary?"label-intranda-green":"WARNING"==t[7].summary?"label-intranda-orange":"label-intranda-red")),h(a,"position","relative"),h(a,"top","-1em"),h(a,"font-size","14px"),h(a,"font-weight","normal"),h(a,"padding","5px"),h(a,"display","inline-block"),h(a,"border","white solid 5px"),h(e,"height","1px"),h(e,"background-color","#cccccc"),h(e,"text-align","left"),h(e,"margin","25px 20px 40px 0px")},m(t,r){s(t,n,r),o(n,e),o(e,a),o(a,l),o(a,c),o(a,m),o(m,b),o(n,_),$&&$.m(n,null),o(n,x)},p(t,e){1&e&&r!==(r="fa "+("OK"==t[7].summary?"fa-check":"WARNING"==t[7].summary?"fa-exclamation-triangle":"fa-times-circle"))&&g(l,"class",r),1&e&&v!==(v=t[7].name+"")&&p(b,v),1&e&&y!==(y="label "+("OK"==t[7].summary?"label-intranda-green":"WARNING"==t[7].summary?"label-intranda-orange":"label-intranda-red"))&&g(a,"class",y),"OK"!=t[7].summary&&null!=t[7].nagios?$?$.p(t,e):($=B(t),$.c(),$.m(n,x)):$&&($.d(1),$=null)},d(t){t&&i(n),$&&$.d()}}}function M(t){let n,e,a,l=t[0],r=[];for(let n=0;n<l.length;n+=1)r[n]=U(E(t,l,n));return{c(){n=u("div"),e=u("table"),a=u("tbody");for(let t=0;t<r.length;t+=1)r[t].c();g(e,"class","table table-hover responsive")},m(t,l){s(t,n,l),o(n,e),o(e,a);for(let t=0;t<r.length;t+=1)r[t].m(a,null)},p(t,n){if(1&n){let e;for(l=t[0],e=0;e<l.length;e+=1){const o=E(t,l,e);r[e]?r[e].p(o,n):(r[e]=U(o),r[e].c(),r[e].m(a,null))}for(;e<r.length;e+=1)r[e].d(1);r.length=l.length}},d(t){t&&i(n),c(r,t)}}}function P(t){let n,e,a=t[10].service_display_name+"";return{c(){n=u("span"),e=d(a),g(n,"class","badge badge-intranda-green"),h(n,"font-weight","normal")},m(t,a){s(t,n,a),o(n,e)},p(t,n){1&n&&a!==(a=t[10].service_display_name+"")&&p(e,a)},d(t){t&&i(n)}}}function q(t){let n,e,a=t[10].service_display_name+"";return{c(){n=u("span"),e=d(a),g(n,"class","badge badge-intranda-orange"),h(n,"font-weight","normal")},m(t,a){s(t,n,a),o(n,e)},p(t,n){1&n&&a!==(a=t[10].service_display_name+"")&&p(e,a)},d(t){t&&i(n)}}}function J(t){let n,e,a=t[10].service_display_name+"";return{c(){n=u("span"),e=d(a),g(n,"class","badge badge-intranda-red"),h(n,"font-weight","normal")},m(t,a){s(t,n,a),o(n,e)},p(t,n){1&n&&a!==(a=t[10].service_display_name+"")&&p(e,a)},d(t){t&&i(n)}}}function Q(t){let n,e,a,l,r,c,m,g,h=t[10].status_information+"",b=("OK"==t[10].status||"SOFT"==t[10].state_type)&&P(t),y="WARNING"==t[10].status&&"HARD"==t[10].state_type&&q(t),_="CRITICAL"==t[10].status&&"HARD"==t[10].state_type&&J(t);return{c(){n=u("tr"),e=u("td"),b&&b.c(),a=f(),y&&y.c(),l=f(),_&&_.c(),r=f(),c=u("td"),m=d(h),g=f()},m(t,i){s(t,n,i),o(n,e),b&&b.m(e,null),o(e,a),y&&y.m(e,null),o(e,l),_&&_.m(e,null),o(n,r),o(n,c),o(c,m),o(n,g)},p(t,n){"OK"==t[10].status||"SOFT"==t[10].state_type?b?b.p(t,n):(b=P(t),b.c(),b.m(e,a)):b&&(b.d(1),b=null),"WARNING"==t[10].status&&"HARD"==t[10].state_type?y?y.p(t,n):(y=q(t),y.c(),y.m(e,l)):y&&(y.d(1),y=null),"CRITICAL"==t[10].status&&"HARD"==t[10].state_type?_?_.p(t,n):(_=J(t),_.c(),_.m(e,null)):_&&(_.d(1),_=null),1&n&&h!==(h=t[10].status_information+"")&&p(m,h)},d(t){t&&i(n),b&&b.d(),y&&y.d(),_&&_.d()}}}function U(t){let n,e,a,l,r,m,b,y,_,x,v,$=t[7].name+"",w=t[7].nagios.status.service_status,N=[];for(let n=0;n<w.length;n+=1)N[n]=Q(D(t,w,n));return{c(){n=u("tr"),e=u("td"),a=u("div"),l=u("i"),m=f(),b=u("span"),y=d($),x=f();for(let t=0;t<N.length;t+=1)N[t].c();v=d(""),g(l,"class",r="fa "+("OK"==t[7].summary?"fa-check":"WARNING"==t[7].summary?"fa-exclamation-triangle":"fa-times-circle")),h(b,"margin","5px"),g(a,"class",_="label "+("OK"==t[7].summary?"label-intranda-green":"WARNING"==t[7].summary?"label-intranda-orange":"label-intranda-red")),h(a,"font-size","14px"),h(a,"font-weight","normal"),h(a,"padding","5px"),h(a,"margin","0px"),h(a,"display","block"),g(e,"colspan","2")},m(t,r){s(t,n,r),o(n,e),o(e,a),o(a,l),o(a,m),o(a,b),o(b,y),s(t,x,r);for(let n=0;n<N.length;n+=1)N[n].m(t,r);s(t,v,r)},p(t,n){if(1&n&&r!==(r="fa "+("OK"==t[7].summary?"fa-check":"WARNING"==t[7].summary?"fa-exclamation-triangle":"fa-times-circle"))&&g(l,"class",r),1&n&&$!==($=t[7].name+"")&&p(y,$),1&n&&_!==(_="label "+("OK"==t[7].summary?"label-intranda-green":"WARNING"==t[7].summary?"label-intranda-orange":"label-intranda-red"))&&g(a,"class",_),1&n){let e;for(w=t[7].nagios.status.service_status,e=0;e<w.length;e+=1){const a=D(t,w,e);N[e]?N[e].p(a,n):(N[e]=Q(a),N[e].c(),N[e].m(v.parentNode,v))}for(;e<N.length;e+=1)N[e].d(1);N.length=w.length}},d(t){t&&i(n),t&&i(x),c(N,t),t&&i(v)}}}function V(n){let e,l,r,c,d,p,h,b,y,_,x,v,$,w,N,O,A,k,R=0==n[0].length&&S(n),I=0!=n[0].length&&j(n);return{c(){e=u("div"),l=u("div"),r=u("h2"),r.innerHTML='<i class="fa fa-binoculars"></i>\n\t\t\tMonitoring',c=f(),d=u("div"),p=u("a"),h=u("i"),y=f(),_=u("a"),x=u("i"),w=f(),N=u("div"),R&&R.c(),O=f(),I&&I.c(),g(h,"class","fa fa-refresh"),g(p,"class","btn btn-mini"),g(p,"title",b=n[3]("reload")),g(x,"class",v="fa "+("down"==n[1]?"fa-angle-up":"fa-angle-down")),g(_,"class","btn btn-mini"),g(_,"title",$="up"==n[1]?n[3]("showBoxDetailsOn"):n[3]("showBoxDetailsOff")),g(d,"class","actions"),g(l,"class","box-title"),g(N,"class","box-content nopadding"),g(e,"class","box box-color lightgrey box-bordered")},m(t,a){s(t,e,a),o(e,l),o(l,r),o(l,c),o(l,d),o(d,p),o(p,h),o(d,y),o(d,_),o(_,x),o(e,w),o(e,N),R&&R.m(N,null),o(N,O),I&&I.m(N,null),A||(k=[m(p,"click",n[2]),m(_,"click",n[4])],A=!0)},p(t,[n]){2&n&&v!==(v="fa "+("down"==t[1]?"fa-angle-up":"fa-angle-down"))&&g(x,"class",v),2&n&&$!==($="up"==t[1]?t[3]("showBoxDetailsOn"):t[3]("showBoxDetailsOff"))&&g(_,"title",$),0==t[0].length?R?R.p(t,n):(R=S(t),R.c(),R.m(N,O)):R&&(R.d(1),R=null),0!=t[0].length?I?I.p(t,n):(I=j(t),I.c(),I.m(N,null)):I&&(I.d(1),I=null)},i:t,o:t,d(t){t&&i(e),R&&R.d(),I&&I.d(),A=!1,a(k)}}}function X(t,n,e){_(()=>{o()});let{msgs:a}=n,l=[],r="up",o=()=>{l.length>0&&e(0,l=[]),fetch("/goobi/plugins/exdashboard/nagios").then(t=>{t.json().then(t=>{for(var n of(e(0,l=t),l))if(n.nagios)for(var a of n.nagios.status.service_status)a.badgeColor=s(a)})})},s=t=>"OK"==t.status||"SOFT"==t.state_type?"badge-intranda-green":"WARNING"==t.status?"badge-intranda-orange":"badge-intranda-red";return t.$$set=t=>{"msgs"in t&&e(5,a=t.msgs)},[l,r,o,t=>0==Object.keys(a).length?"*".repeat(t.length):a[t]?a[t]:"???"+t+"???",()=>{e(1,r="up"==r?"down":"up")},a]}window.mountSvelteNagios=class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,X,V,r,{msgs:5})}}}();
//# sourceMappingURL=bundle.js.map
