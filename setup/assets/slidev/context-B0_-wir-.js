import{a2 as n,a8 as r,t as j,y as u,ay as $,aD as v}from"../modules/vue-DPtMNUtF.js";import{W as p,a8 as C,aj as x,a6 as S,a4 as k,a5 as R,ak as l,a3 as T,al as E,am as F}from"../index-DK3NXZZ2.js";function g(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(k),c=n(R),o=n(l,{}),d=n(T,void 0),m=n(p,j(1)),f=n(C,u(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{O as f,L as p,g as u};
