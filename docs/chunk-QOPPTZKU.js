import{ya as k}from"./chunk-7BWJY6YX.js";import{Da as i,Sa as r,Ua as D,Va as g,X as v,Xa as s,Za as o,cb as a,db as l,eb as m,mb as d,nb as _,ob as c,pb as f,qa as C,qb as E,ub as x,vb as u}from"./chunk-SGWCVCL6.js";var P=()=>[import("./chunk-YPVP637Z.js").then(e=>e.ItemImagePipe)];function h(e,n){if(e&1&&(m(0,"img",1),x(1,"itemImage"),a(2,"span",0),_(3),l()),e&2){let t=d(2);s("srcset",u(1,2,t.detail().item.name)),i(3),c(t.detail().item.name)}}function I(e,n){if(e&1&&(m(0,"img",1),x(1,"itemImage"),a(2,"span",0),_(3),l()),e&2){let t=d(2);s("srcset",u(1,2,t.detail().held_item.name)),i(3),c(t.detail().held_item.name)}}function T(e,n){if(e&1&&(m(0,"i",2),a(1,"span",0),_(2),l()),e&2){let t=d(2);i(2),f("Lvl ",t.detail().min_level,"")}}function w(e,n){e&1&&m(0,"i",3)}function S(e,n){e&1&&m(0,"i",4)}function F(e,n){if(e&1&&(r(0,w,1,0,"i",3)(1,S,1,0,"i",4),a(2,"span",0),_(3),l()),e&2){let t,p=d(2);o((t=p.detail().time_of_day)==="day"?0:t==="night"?1:-1),i(3),c(p.detail().time_of_day)}}function M(e,n){if(e&1&&(m(0,"i",5),a(1,"span",0),_(2),l()),e&2){let t=d(2);i(2),f("Move: ",t.detail().known_move_type.name,"")}}function B(e,n){if(e&1&&(m(0,"i",6),a(1,"span",0),_(2),l()),e&2){let t=d(2);i(2),c(t.detail().trigger.name)}}function b(e,n){if(e&1&&r(0,h,4,4)(1,I,4,4)(2,T,3,1)(3,F,4,2,"span",0)(4,M,3,1)(5,B,3,1),e&2){let t=d();o(t.detail().item?0:-1),i(),o(t.detail().held_item?1:-1),i(),o(t.detail().min_level?2:-1),i(),o(t.detail().time_of_day?3:-1),i(),o(t.detail().known_move_type?4:-1),i(),o(!t.detail().item&&!t.detail().held_item&&!t.detail().min_level&&!t.detail().time_of_day&&!t.detail().known_move_type&&t.detail().trigger&&t.detail().trigger.name==="trade"?5:-1)}}function q(e,n){e&1&&(a(0,"p"),_(1,"Cargando Informaci\xF3n..."),l())}var G=(()=>{class e{detail=C.required();static \u0275fac=function(p){return new(p||e)};static \u0275cmp=v({type:e,selectors:[["app-pokemon-evolution-details"]],hostAttrs:[1,"flex","flex-col","items-center","gap-1"],inputs:{detail:[1,"detail"]},standalone:!0,features:[E],decls:4,vars:1,consts:[[1,"text-[10px]","text-slate-600","font-bold"],["alt","",3,"srcset"],[1,"fa-solid","fa-arrow-right","text-gray-200"],[1,"fa-solid","fa-sun","text-yellow-300"],[1,"fa-solid","fa-moon","text-slate-800"],[1,"fa-solid","fa-hat-wizard","text-pink-400"],[1,"fa-solid","fa-arrow-right-arrow-left","text-gray-200"]],template:function(p,y){p&1&&(r(0,b,6,6)(1,q,2,0),D(2,0,P,null,1)),p&2&&(i(2),g(y.detail()))},dependencies:[k],changeDetection:0})}return e})();export{G as PokemonEvolutionDetailsComponent};
