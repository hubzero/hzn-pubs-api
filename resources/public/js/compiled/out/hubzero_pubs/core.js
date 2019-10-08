// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.core');
goog.require('cljs.core');
goog.require('glue.core');
cljs.core.enable_console_print_BANG_.call(null);
glue.core.defcomponent.call(null,new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),"#todo",new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"todos","todos",630308868),glue.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello"], null)),new cljs.core.Keyword(null,"counter","counter",804008177),glue.core.atom.call(null,(0))], null);
}),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-random-todo","add-random-todo",-446942652),(function (this$,state,_){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(state),(function (p1__23055_SHARP_){
return cljs.core.conj.call(null,p1__23055_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))));
}));
}),new cljs.core.Keyword(null,"child-clicked","child-clicked",-1307603970),(function (this$,state,n){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(state),cljs.core.inc);
})], null)], null));
glue.core.defcomponent.call(null,new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),"#todo-item",new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),glue.core.atom.call(null,(0))], null);
}),new cljs.core.Keyword(null,"computed","computed",-1482016762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter-label","counter-label",485281095),(function (this$,state){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(state)))," clicks"].join('');
})], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-me","click-me",-895068160),(function (this$,state,_){
cljs.core.println.call(null,"Click happened on",glue.core.prop.call(null,this$,new cljs.core.Keyword(null,"label","label",1718410804)));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(state),cljs.core.inc);

return glue.core.emit.call(null,this$,new cljs.core.Keyword(null,"todo-click","todo-click",-694909914),(1));
})], null)], null));
if((typeof hubzero_pubs !== 'undefined') && (typeof hubzero_pubs.core !== 'undefined') && (typeof hubzero_pubs.core.app !== 'undefined')){
} else {
hubzero_pubs.core.app = glue.core.vue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"el","el",-1618201118),"#app"], null));
}
hubzero_pubs.core.on_js_reload = (function hubzero_pubs$core$on_js_reload(){
return glue.core.reset_state_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1570528829592
