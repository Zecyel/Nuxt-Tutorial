import{f as Y,C as q,D as I,E as O,F as Q,G as W,H as X,J as Z,K as ee,L as ne,M as te,N as se}from"../modules/unplugin-icons-DRUiUBAL.js";import{d as L,t as $,S as oe,aE as le,o as g,b as M,f as ae,h as z,A as e,c as x,k as o,l as n,i as l,e as r,x as ie,aa as m,ab as re,F as ue,ad as ce,ao as b,g as de}from"../modules/vue-CdAPATPx.js";import{V as h,L as _e}from"./useWakeLock-Bl9jmOCs.js";import{c as pe}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-wfuYzb2x.js";import{_ as a}from"./IconButton.vue_vue_type_script_setup_true_lang-BLg2SUmg.js";const me=L({__name:"Draggable",props:{storageKey:{},initial:{}},setup(D){const u=D,w=$(null),f=u.initial??{x:0,y:0},k=u.storageKey?oe(u.storageKey,f):$(f),{style:y}=le(w,{initialValue:k});return(v,d)=>(g(),M("div",{ref_key:"el",ref:w,class:"fixed",style:z(e(y))},[ae(v.$slots,"default")],4))}}),ge=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),we=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),fe={class:"flex bg-main p-2"},ve={class:"inline-block w-7 text-center"},be={class:"pt-.5"},$e=L({__name:"DrawingControls",setup(D){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:i,drawingPinned:c,brushColors:B}=pe();function S(){v.undo()}function V(){v.redo()}let C="stylus";function _(p){i.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){u.color=p,d.value=!0,i.value=C}return(p,t)=>{const K=Y,N=q,U=I,A=O,F=Q,R=W,P=X,j=Z,G=ee,H=ne,J=te,T=se;return g(),x(me,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[ge]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(h),n(e(_e),null,{popper:o(()=>[r("div",fe,[r("div",ve,ie(e(u).size),1),r("div",be,[m(r("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>i.value=e(C))},null,544),[[re,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[we]),_:1},8,["class"])]),_:1}),(g(!0),M(ue,null,ce(e(B),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(i)!=="eraseLine"?"active":"shallow"),onClick:ke=>E(s)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(h),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>S())},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>V())},{default:o(()=>[n(P)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(h),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(G,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(H,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(J,null,null,512),[[b,e(c)]]),m(n(T,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):de("v-if",!0)]),_:1},8,["class"])}}});export{$e as _};
