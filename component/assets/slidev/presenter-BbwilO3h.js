import{g as H,h as j,k as q,l as A}from"../modules/unplugin-icons-Bk1Sb-7-.js";import{d as M,o,c as l,i as P,A as e,t as z,y as b,D as N,O as J,ac as O,J as K,ae as Q,a1 as U,b as y,e as s,l as t,k as h,g as F,h as I,x as X,F as Y,p as Z,a as ee}from"../modules/vue-D17_N0S7.js";import{a as te,u as se,h as oe,c as ne,d as ae,j as re,k as ie,l as ce,m as le,n as ue,o as de,s as pe,_ as _e}from"../index-BgrUA8Ce.js";import{r as me,u as fe,a as xe,S as ve,o as ke,_ as he,G as ge,b as be,c as ye}from"./useWakeLock-27nzGrx2.js";import{b as Ce,c as Se,a as B,S as we}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CrGPcMY5.js";import{_ as $e,C as ze}from"./ClicksSlider-B1I-mNKF.js";import{_ as Ne}from"./DrawingControls.vue_vue_type_style_index_0_lang-BqrpQkXt.js";import{_ as D}from"./IconButton.vue_vue_type_script_setup_true_lang-Ci8FVayh.js";import"../modules/shiki-BQsYoCuP.js";import"./title-renderer.md_vue_type_script_setup_true_lang-CXJ0TWRa.js";import"./context-DCld-N1h.js";const Fe=M({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(i){const c=i,{info:r}=Ce(c.no);return(u,m)=>{var f,x;return o(),l($e,{class:P(c.class),note:(f=e(r))==null?void 0:f.note,"note-html":(x=e(r))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),C=i=>(Z("data-v-64d32d7c"),i=i(),ee(),i),Ie={class:"bg-main h-full slidev-presenter"},Be=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),De={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Me=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Pe={key:0,class:"grid-section note of-auto"},Re={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ee={class:"grid-section bottom flex"},Le=C(()=>s("div",{"flex-auto":""},null,-1)),Ve={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},We={class:"progress-bar"},Ge=M({__name:"presenter",setup(i){const c=z();me(),fe(c),xe();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:m,hasNext:f,nextRoute:x,slides:R,getPrimaryClicks:T,total:E}=te(),{isDrawing:L}=Se();se({title:`Presenter - ${pe}`}),z(!1);const{timer:V,resetTimer:S}=oe(),W=b(()=>R.value.map(k=>ne(k))),n=b(()=>r.value.current<r.value.total?[m.value,r.value.current+1]:f.value?[x.value,0]:null),v=b(()=>n.value&&W.value[n.value[0].no-1]);N(n,()=>{v.value&&n.value&&(v.value.current=n.value[1])},{immediate:!0});const w=J();return O(()=>{const k=c.value.querySelector("#slide-content"),d=K(Q()),g=U();N(()=>{if(!g.value||L.value||!re.value)return;const a=k.getBoundingClientRect(),p=(d.x-a.left)/a.width*100,_=(d.y-a.top)/a.height*100;if(!(p<0||p>100||_<0||_>100))return{x:p,y:_}},a=>{ae.cursor=a})}),(k,d)=>{var $;const g=H,a=j,p=q,_=A;return o(),y(Y,null,[s("div",Ie,[s("div",{class:P(["grid-container",`layout${e(ie)}`])},[s("div",{ref_key:"main",ref:c,class:"relative grid-section main flex flex-col"},[t(B,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ke)},{default:h(()=>[t(ve,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),l(ze,{key:($=e(m))==null?void 0:$.no,"clicks-context":e(T)(e(m)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),s("div",De,[n.value&&v.value?(o(),l(B,{key:"next"},{default:h(()=>[(o(),l(we,{key:n.value[0].no,"clicks-context":v.value,route:n.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):F("v-if",!0),Me]),w.value&&e(ce)?(o(),y("div",Pe,[t(e(w))])):(o(),y("div",Re,[(o(),l(Fe,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:I({fontSize:`${e(le)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),s("div",Te,[t(D,{title:"Increase font size",onClick:e(ue)},{default:h(()=>[t(g)]),_:1},8,["onClick"]),t(D,{title:"Decrease font size",onClick:e(de)},{default:h(()=>[t(a)]),_:1},8,["onClick"]),F("v-if",!0)])])),s("div",Ee,[t(he,{persist:!0}),Le,s("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:d[2]||(d[2]=(...G)=>e(S)&&e(S)(...G))},[t(p,{class:"absolute"}),t(_,{class:"absolute opacity-0"})]),s("div",Ve,X(e(V)),1)]),(o(),l(Ne,{key:2}))],2),s("div",We,[s("div",{class:"progress h-3px bg-primary transition-all",style:I({width:`${(e(u)-1)/(e(E)-1)*100+1}%`})},null,4)])]),t(ge),t(be),t(ye)],64)}}}),Ze=_e(Ge,[["__scopeId","data-v-64d32d7c"]]);export{Ze as default};
