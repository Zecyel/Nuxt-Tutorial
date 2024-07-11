import{t as C,y as b,A as D,P as Gt,S as lt,au as Ht,J as qt,av as Zt,n as Xt,D as Yt,d as q,aw as Qt,ax as Jt,ay as z,o as Z,b as X,e as vt,f as wt,h as dt,ac as Wt,F as te,g as Ft,a8 as ee,az as se,l as ht,i as ne,v as re}from"../modules/vue-B86plET-.js";import{V as ie,a as Tt,v as ft,Z as ut,$ as St,a0 as oe,O as ae,a1 as bt,Q as Pt,z as Et,A as Mt,W as le,a2 as he,_ as Kt,a3 as ue,a4 as ce,a5 as de,a6 as fe,a7 as pe,a8 as ge}from"../index-Bhsrb9ns.js";function me(t){var e;return{info:C(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ct={};function as(t){function e(s){return ct[s]??(ct[s]=me(s))}return{info:b({get(){return e(D(t)).info.value},set(s){e(D(t)).info.value=s}}),update:async(s,n)=>{const i=e(n??D(t)),r=await i.update(s);return r&&(i.info.value=r),r}}}var ve=Object.defineProperty,Lt=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,pt=(t,e)=>{for(var s in e||(e={}))ye.call(e,s)&&Ct(t,s,e[s]);if(Lt)for(var s of Lt(e))xe.call(e,s)&&Ct(t,s,e[s]);return t},_e=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],i=n.length;s<i;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}});function kt(t,e,s,n=i=>i){return t*n(.5-e*(.5-s))}function we(t){return[-t[0],-t[1]]}function L(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Se(t,e){return[t[0]/e,t[1]/e]}function B(t){return[t[1],-t[0]]}function Dt(t,e){return t[0]*e[0]+t[1]*e[1]}function be(t,e){return t[0]===e[0]&&t[1]===e[1]}function Pe(t){return Math.hypot(t[0],t[1])}function Ee(t){return t[0]*t[0]+t[1]*t[1]}function $t(t,e){return Ee(P(t,e))}function zt(t){return Se(t,Pe(t))}function Me(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function G(t,e,s){let n=Math.sin(s),i=Math.cos(s),r=t[0]-e[0],a=t[1]-e[1],o=r*i-a*n,l=r*n+a*i;return[o+e[0],l+e[1]]}function gt(t,e,s){return L(t,M(P(e,t),s))}function It(t,e,s){return L(t,M(e,s))}var{min:j,PI:Le}=Math,Nt=.275,H=Le+1e-4;function Ce(t,e={}){let{size:s=16,smoothing:n=.5,thinning:i=.5,simulatePressure:r=!0,easing:a=u=>u,start:o={},end:l={},last:p=!1}=e,{cap:y=!0,easing:v=u=>u*(2-u)}=o,{cap:S=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=o.taper===!1?0:o.taper===!0?Math.max(s,d):o.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,R=Math.pow(s*n,2),$=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let g=w.pressure;if(r){let m=j(1,w.distance/s),it=j(1,1-m);g=j(1,u+(it-u)*(m*Nt))}return(u+g)/2},t[0].pressure),_=kt(s,i,t[t.length-1].pressure,a),et,st=t[0].vector,U=t[0].point,Y=U,F=U,T=Y,nt=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:g,vector:m,distance:it,runningLength:V}=t[u];if(u<t.length-1&&d-V<3)continue;if(i){if(r){let A=j(1,it/s),at=j(1,1-A);w=j(1,x+(at-x)*(A*Nt))}_=kt(s,i,w,a)}else _=s/2;et===void 0&&(et=_);let Ut=V<c?v(V/c):1,Vt=d-V<E?f((d-V)/E):1;_=Math.max(.01,_*Math.min(Ut,Vt));let yt=(u<t.length-1?t[u+1]:t[u]).vector,ot=u<t.length-1?Dt(m,yt):1,Bt=Dt(m,st)<0&&!nt,xt=ot!==null&&ot<0;if(Bt||xt){let A=M(B(st),_);for(let at=1/13,J=0;J<=1;J+=at)F=G(P(g,A),g,H*J),$.push(F),T=G(L(g,A),g,H*-J),h.push(T);U=F,Y=T,xt&&(nt=!0);continue}if(nt=!1,u===t.length-1){let A=M(B(m),_);$.push(P(g,A)),h.push(L(g,A));continue}let _t=M(B(gt(yt,m,ot)),_);F=P(g,_t),(u<=1||$t(U,F)>R)&&($.push(F),U=F),T=L(g,_t),(u<=1||$t(Y,T)>R)&&(h.push(T),Y=T),x=w,st=m}let I=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):L(t[0].point,[1,1]),rt=[],Q=[];if(t.length===1){if(!(c||E)||p){let u=It(I,zt(B(P(I,N))),-(et||_)),w=[];for(let g=1/13,m=g;m<=1;m+=g)w.push(G(u,I,H*2*m));return w}}else{if(!(c||E&&t.length===1))if(y)for(let w=1/13,g=w;g<=1;g+=w){let m=G(h[0],I,H*g);rt.push(m)}else{let w=P($[0],h[0]),g=M(w,.5),m=M(w,.51);rt.push(P(I,g),P(I,m),L(I,m),L(I,g))}let u=B(we(t[t.length-1].vector));if(E||c&&t.length===1)Q.push(N);else if(S){let w=It(N,u,_);for(let g=1/29,m=g;m<1;m+=g)Q.push(G(w,N,H*3*m))}else Q.push(L(N,M(u,_)),L(N,M(u,_*.99)),P(N,M(u,_*.99)),P(N,M(u,_)))}return $.concat(Q,h.reverse(),rt)}function ke(t,e={}){var s;let{streamline:n=.5,size:i=16,last:r=!1}=e;if(t.length===0)return[];let a=.15+(1-n)*.85,o=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(o.length===2){let f=o[1];o=o.slice(0,-1);for(let d=1;d<5;d++)o.push(gt(o[0],f,d/4))}o.length===1&&(o=[...o,[...L(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,v=l[0],S=o.length-1;for(let f=1;f<o.length;f++){let d=r&&f===S?o[f].slice(0,2):gt(v.point,o[f],a);if(be(v.point,d))continue;let c=Me(d,v.point);if(y+=c,f<S&&!p){if(y<i)continue;p=!0}v={point:d,pressure:o[f][2]>=0?o[f][2]:.5,vector:zt(P(v.point,d)),distance:c,runningLength:y},l.push(v)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function De(t,e={}){return Ce(ke(t,e),e)}function W(t,e){return t-e}function $e(t){return t<0?-1:1}function tt(t){return[Math.abs(t),$e(t)]}function Rt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Ie=2,k=Ie,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const i=this.drauu.el,r=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*r,y:(t.pageY-o.top+a.y)*r,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((n=i.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*r,y:l.y*r,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?pt(pt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ne=class jt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return jt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=De(e,pt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const i=n.reduce((r,[a,o],l,p)=>{const[y,v]=p[(l+1)%p.length];return r.push(a,o,(a+y)/2,(o+v)/2),r},["M",...n[0],"Q"]);return i.push("Z"),i.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Ae=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(W),[o,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("cx",(r+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-r)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ot(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(i),s.appendChild(n),s}var Fe=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Rt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Ot(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let r=n/i;r=Math.round(r),Math.abs(r)<=1?(e=this.start.x+i*r,s=this.start.y+i):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Te=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(W),[o,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("x",r),this.attr("y",o),this.attr("width",a-r),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ke(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function ze(t,e,s){let n=e.x,i=e.y,r=s.x-n,a=s.y-i;if(r!==0||a!==0){const o=((t.x-n)*r+(t.y-i)*a)/(r*r+a*a);o>1?(n=s.x,i=s.y):o>0&&(n+=r*o,i+=a*o)}return r=t.x-n,a=t.y-i,r*r+a*a}function Re(t,e){let s=t[0];const n=[s];let i;for(let r=1,a=t.length;r<a;r++)i=t[r],Ke(i,s)>e&&(n.push(i),s=i);return s!==i&&i&&n.push(i),n}function mt(t,e,s,n,i){let r=n,a=0;for(let o=e+1;o<s;o++){const l=ze(t[o],t[e],t[s]);l>r&&(a=o,r=l)}r>n&&(a-e>1&&mt(t,e,a,n,i),i.push(t[a]),s-a>1&&mt(t,a,s,n,i))}function je(t,e){const s=t.length-1,n=[t[0]];return mt(t,0,s,e,n),n.push(t[s]),n}function At(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Re(t,n),t=je(t,n),t}var Oe=class K extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Rt();const s=Ot(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=At(this.points,1,!0),this.count=0),this.attr("d",K.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",K.toSvgData(At(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const n=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}static controlPoint(e,s,n,i){const r=s||e,a=n||e,o=.2,l=K.line(r,a),p=l.angle+(i?Math.PI:0),y=l.length*o,v=e.x+Math.cos(p)*y,S=e.y+Math.sin(p)*y;return{x:v,y:S}}static bezierCommand(e,s,n){const i=K.controlPoint(n[s-1],n[s-2],e),r=K.controlPoint(e,n[s-1],n[s+1],!0);return`C ${i.x.toFixed(k)},${i.y.toFixed(k)} ${r.x.toFixed(k)},${r.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,n,i,r)=>i===0?`M ${n.x.toFixed(k)},${n.y.toFixed(k)}`:`${s} ${K.bezierCommand(n,i,r)}`,"")}},Ue=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const a=r.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=r.getPointAtLength(a*o/this.pathSubFactor),p=r.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:o,element:n||r})}}else r.children&&e(r.children,r)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,i=e.x1,r=e.x2,a=t.y1,o=t.y2,l=e.y1,p=e.y2,y=(s-n)*(l-p)-(a-o)*(i-r),v=(s*o-a*n)*(i-r)-(s-n)*(i*p-l*r),S=(s*o-a*n)*(l-p)-(a-o)*(i*p-l*r),f=(d,c,E)=>d>=c&&d<=E?!0:d>=E&&d<=c;if(y===0)return!1;{const d={x:v/y,y:S/y};return f(d.x,s,n)&&f(d.y,a,o)&&f(d.x,i,r)&&f(d.y,l,p)}}};function Ve(t){return{draw:new Oe(t),stylus:new Ne(t),line:new Fe(t),rectangle:new Te(t),ellipse:new Ae(t),eraseLine:new Ue(t)}}var Be=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=_e(),this._originalPointerId=null,this._models=Ve(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",r,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",r),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function Ge(t){return new Be(t)}const He=Gt(()=>{const{currentSlideNo:t,isPresenter:e}=Tt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=lt("slidev-drawing-enabled",!1),i=lt("slidev-drawing-pinned",!1),r=Ht(lt("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=C(!1),o=C(!1),l=C(!1),p=C(!1),y=C("stylus"),v=b(()=>ft.drawings.syncAll||e.value);let S=!1;const f=b({get(){return y.value},set(h){y.value=h,h==="arrow"?(c.mode="line",r.arrowEnd=!0):(c.mode=h,r.arrowEnd=!1)}}),d=qt({brush:r,acceptsInputTypes:b(()=>n.value&&(!ft.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Zt(Ge(d));function E(){c.clear(),v.value&&St(t.value,"")}function R(){var h;l.value=c.canRedo(),o.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function $(h){S=!0;const x=ut[h||t.value];x!=null?c.load(x):c.clear(),R(),S=!1}return c.on("changed",()=>{if(R(),!S){const h=c.dump(),x=t.value;(ut[x]||"")!==h&&v.value&&St(x,c.dump())}}),oe(h=>{S=!0,h[t.value]!=null&&c.load(h[t.value]||""),S=!1,R()}),Xt(()=>{Yt(t,()=>{c.mounted&&$()},{immediate:!0})}),c.on("start",()=>a.value=!0),c.on("end",()=>a.value=!1),window.addEventListener("keydown",h=>{if(!n.value||ae.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?n.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?E():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?r.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:r,brushColors:s,canClear:p,canRedo:l,canUndo:o,clear:E,drauu:c,drauuOptions:d,drawingEnabled:n,drawingMode:f,drawingPinned:i,drawingState:ut,isDrawing:a,loadCanvas:$}}),qe=["id"],Ze=["id"],Xe=q({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=Tt(),n=C(null),i=Qt(n),r=C(null),a=b(()=>e.width??i.width.value),o=b(()=>e.width?e.width/bt.value:i.height.value),l=b(()=>Pt.value&&!s.value?+Pt.value:Math.min(a.value/Et.value,o.value/Mt.value)),p=b(()=>({height:`${Mt.value}px`,width:`${Et.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),y=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/bt.value}px`}:{});return e.isMain&&Jt(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),z(le,l),z(he,r),(v,S)=>(Z(),X("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:dt(y.value)},[vt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:r,class:"slidev-slide-content",style:dt(p.value)},[wt(v.$slots,"default",{},void 0,!0)],12,Ze),wt(v.$slots,"controls",{},void 0,!0)],12,qe))}}),ls=Kt(Xe,[["__scopeId","data-v-7bf251a8"]]),Ye={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},Qe=vt("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),Je=vt("div",null,"Loading slide...",-1),We=q({__name:"SlideLoading",setup(t){const e=C(!1);return Wt(()=>{setTimeout(()=>{e.value=!0},200)}),(s,n)=>(Z(),X("div",Ye,[e.value?(Z(),X(te,{key:0},[Qe,Je],64)):Ft("v-if",!0)]))}}),hs={render:()=>[]},us={render:()=>[]},ts={render:()=>[]},es={render:()=>[]},ss=["data-slidev-no"],ns=q({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var a,o;return((o=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:o.frontmatter.zoom)??1});z(ue,e.route),z(ce,C(e.route.no)),z(de,C(e.renderContext)),z(fe,ee(e,"clicksContext")),z(ge,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),i=b(()=>({...n.value,"user-select":ft.selectable?void 0:"none"})),r=b(()=>e.route&&se({loader:async()=>{var o,l;const a=await e.route.component();return q({mounted:(o=e.clicksContext)==null?void 0:o.onMounted,unmounted:(l=e.clicksContext)==null?void 0:l.onUnmounted,render:()=>re(a.default)})},delay:300,loadingComponent:We}));return(a,o)=>(Z(),X("div",{"data-slidev-no":e.route.no,class:ne(D(pe)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:dt(i.value)},[ht(D(es)),ht(D(r)),ht(D(ts))],14,ss))}}),cs=Kt(ns,[["__scopeId","data-v-38f18250"]]),rs=["innerHTML"],ds=q({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=He();return(s,n)=>D(e)[s.page]?(Z(),X("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(e)[s.page]},null,8,rs)):Ft("v-if",!0)}});export{us as G,cs as S,ds as _,ls as a,me as b,He as c,hs as d,as as u};
