import{a as S,b as x,d as M,g as P,h as E,i as T}from"./chunk-OKEQJ6DD.js";import{b as D,c as N}from"./chunk-XXMKUIPK.js";import{e as b}from"./chunk-7BWJY6YX.js";import{$ as u,Eb as I,Fa as y,Ha as v,Ia as A,L as p,La as C,N as h,Q as c,T as l,X as m,cb as w,db as F,eb as _,na as g,qb as R,wa as f}from"./chunk-SGWCVCL6.js";var k=[{path:"pokedex",loadComponent:()=>import("./chunk-3HAAZAYQ.js")},{path:"pokedex/:pokemon",loadComponent:()=>import("./chunk-6L2OAH7Y.js")},{path:"",redirectTo:"pokedex",pathMatch:"full"}];var H="@",U=(()=>{let e=class e{constructor(o,r,i,s,a){this.doc=o,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=l(v,{optional:!0}),this.loadingSchedulerFn=l(z,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let o=()=>this.moduleImpl??import("./chunk-VQLY45JM.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(o):r=o(),r.catch(i=>{throw new p(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new d(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let L=a.createRenderer(o,r);s.use(L),this.scheduler?.notify(10)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){y()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),d=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(H)}},z=new c("");function O(n="animations"){return C("NgAsyncAnimations"),u([{provide:A,useFactory:(e,t,o)=>new U(e,t,o,n),deps:[b,S,g]},{provide:f,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var V={providers:[I(),P(k,T({onViewTransitionCreated(n){console.log({transitionInfo:n})}}),E()),D(N()),O()]};var j=(()=>{class n{title="pokedex";static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["app-root"]],standalone:!0,features:[R],decls:2,vars:0,consts:[[1,"w-full","h-full"]],template:function(o,r){o&1&&(w(0,"main",0),_(1,"router-outlet"),F())},dependencies:[M]})}return n})();x(j,V).catch(n=>console.error(n));
