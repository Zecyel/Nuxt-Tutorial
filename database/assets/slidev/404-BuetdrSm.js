import{M as m,y as f,b as h,e,a6 as a,x as r,A as x,c as u,k as p,g as i,r as v,o as l,p as g,a as k}from"../modules/vue-CdAPATPx.js";import{_ as S,a as y}from"../index-BSXhj0GC.js";import"../modules/shiki-CX7-1yLa.js";const N=o=>(g("data-v-95847c30"),o=o(),k(),o),w={class:"grid justify-center text-center pt-15% gap-5"},B=N(()=>e("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},C={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},V={__name:"404",setup(o){const{currentRoute:n}=m(),{total:d}=y(),s=f(()=>{const c=n.value.path.match(/\d+/);if(c){const t=+c[0];if(t>0&&t<=d.value)return t}return null});return(_,c)=>{const t=v("RouterLink");return l(),h("div",w,[e("div",null,[B,e("p",I,[a(" Page "),e("code",R,r(x(n).path),1),a(" not found ")])]),e("div",C,[s.value!==1?(l(),u(t,{key:0,to:"/",class:"page-link"},{default:p(()=>[a(" Go Home ")]),_:1})):i("v-if",!0),s.value?(l(),u(t,{key:1,to:`/${s.value}`,class:"page-link"},{default:p(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("v-if",!0)])])}}},j=S(V,[["__scopeId","data-v-95847c30"]]);export{j as default};
