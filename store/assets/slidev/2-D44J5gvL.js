import{d as h,r as g,A as c,o as a,c as p,k as y,f as k,b as u,y as v,F as b,ad as D,i as T,l as f,g as C,h as $,aA as I,aa as N,q as A,s as M,e as B}from"../modules/vue-BKxpOU4E.js";import{a as F,aa as L,ab as S}from"../index-oqaLO92g.js";import{_ as H}from"./title-renderer.md_vue_type_script_setup_true_lang-CVF5XPv3.js";import{u as P,p as V,f as z}from"./context-Cdun90yG.js";import{I as O}from"./default-CeloAU1X.js";import"../modules/shiki-BJiTwP__.js";const R=["href","innerHTML"],w=["href"],E=h({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=F();return(e,o)=>{const s=g("RouterLink");return!c(r)&&e.title?(a(),p(s,{key:0,to:String(e.to),onClick:o[0]||(o[0]=i=>i.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!c(r)&&!e.title?(a(),p(s,{key:1,to:String(e.to),onClick:o[1]||(o[1]=i=>i.target.blur())},{default:y(()=>[k(e.$slots,"default")]),_:3},8,["to"])):c(r)&&e.title?(a(),u("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,R)):(a(),u("a",{key:3,href:`#${e.to}`},[k(e.$slots,"default")],8,w))}}}),j=["start"],q=h({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,e=v(()=>[...L(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),o=v(()=>[...L(r.listStyle||[])]);return(s,i)=>{const m=E,l=g("TocList",!0);return s.list&&s.list.length>0?(a(),u("ol",{key:0,class:T(e.value),start:s.level===1?s.start:void 0,style:$(o.value.length>=s.level?`list-style:${o.value[s.level-1]}`:void 0)},[(a(!0),u(b,null,D(s.list,t=>(a(),u("li",{key:t.path,class:T(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[f(m,{to:t.path},{default:y(()=>[f(c(H),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(a(),p(l,{key:0,level:s.level+1,"list-style":s.listStyle,list:t.children,"list-class":s.listClass},null,8,["level","list-style","list","list-class"])):C("v-if",!0)],2))),128))],14,j)):C("v-if",!0)}}}),Y=h({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:e}=P();function o(l,t=1){if(t>Number(r.maxDepth))return[];if(t<Number(r.minDepth)){const n=l.find(_=>_.active||_.activeParent);return n?o(n.children,t+1):[]}return l.map(n=>({...n,children:o(n.children,t+1)}))}function s(l){return l.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:s(t.children)}))}function i(l){const t=l.some(n=>n.active||n.activeParent||n.hasActiveParent);return l.filter(()=>t).map(n=>({...n,children:i(n.children)}))}const m=v(()=>{const l=e==null?void 0:e.nav.tocTree;if(!l)return[];let t=o(l);return r.mode==="onlyCurrentTree"?t=s(t):r.mode==="onlySiblings"&&(t=i(t)),t});return(l,t)=>{const n=q;return a(),u("div",{class:"slidev-toc",style:$(`column-count:${l.columns}`)},[f(n,{level:1,start:l.start,"list-style":l.listStyle,list:m.value,"list-class":l.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),G=B("h1",null,"Table of Contents",-1),Z={__name:"2",setup(d){return V(S),P(),(r,e)=>{const o=Y,s=I("click");return a(),p(O,A(M(c(z)(c(S),1))),{default:y(()=>[G,N(f(o,{minDepth:"1",maxDepth:"2"},null,512),[[s]])]),_:1},16)}}};export{Z as default};
