// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('hubzero_pubs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32657__delegate = function (x){
if(cljs.core.truth_(hubzero_pubs.core.on_js_reload)){
return cljs.core.apply.call(null,hubzero_pubs.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hubzero-pubs.core/on-js-reload' is missing");
}
};
var G__32657 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32658__i = 0, G__32658__a = new Array(arguments.length -  0);
while (G__32658__i < G__32658__a.length) {G__32658__a[G__32658__i] = arguments[G__32658__i + 0]; ++G__32658__i;}
  x = new cljs.core.IndexedSeq(G__32658__a,0,null);
} 
return G__32657__delegate.call(this,x);};
G__32657.cljs$lang$maxFixedArity = 0;
G__32657.cljs$lang$applyTo = (function (arglist__32659){
var x = cljs.core.seq(arglist__32659);
return G__32657__delegate(x);
});
G__32657.cljs$core$IFn$_invoke$arity$variadic = G__32657__delegate;
return G__32657;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://0.0.0.0:3449/figwheel-ws",new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=build_dev.js.map?rel=1574332618587
