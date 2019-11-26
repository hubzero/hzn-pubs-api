// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('hubzero_pubs.comps.app');
if((typeof hubzero_pubs !== 'undefined') && (typeof hubzero_pubs.core !== 'undefined') && (typeof hubzero_pubs.core.s !== 'undefined')){
} else {
hubzero_pubs.core.s = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"authors","authors",2063018172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar","baz"], null),new cljs.core.Keyword(null,"licenses","licenses",521774891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Attribution-NoDerivs 3.0 Unported",new cljs.core.Keyword(null,"detail","detail",-1545345025),"You are free: to Share \u2014 to copy, distribute and transmit the work, to Remix \u2014 to adapt the work, to make commercial use of the work"], null)], null),new cljs.core.Keyword(null,"citations","citations",-1246396334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paskin, N. (1999). Toward unique identifiers. Proceedings of the IEEE, 87(7), 1208\u20131227. doi:10.1109/5.771073","Paskin, N. (2001). Toward unique identifiers. Proceedings of the IEEE, 87(7), 1208\u20131227. doi:10.1109/5.771073"], null),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),1.25,new cljs.core.Keyword(null,"units","units",-533089095),"GB",new cljs.core.Keyword(null,"percent","percent",2031453817),"25",new cljs.core.Keyword(null,"max","max",61366548),(5)], null)], null)], null));
}
hubzero_pubs.core.on_js_reload = (function hubzero_pubs$core$on_js_reload(){
return null;
});
hubzero_pubs.core.get_prj_id = (function hubzero_pubs$core$get_prj_id(){
return cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.first.call(null,clojure.string.split.call(null,document.cookie,/;/)),/=/));
});
hubzero_pubs.core.run = (function hubzero_pubs$core$run(prj_id){
cljs.core.prn.call(null,"PROJECT",prj_id);

cljs.core.swap_BANG_.call(null,hubzero_pubs.core.s,cljs.core.assoc,new cljs.core.Keyword(null,"prj-id","prj-id",1615029734),prj_id);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return hubzero_pubs.comps.app.app.call(null,hubzero_pubs.core.s);
})], null),document.getElementById("app"));
});
goog.exportSymbol('hubzero_pubs.core.run', hubzero_pubs.core.run);
hubzero_pubs.core.run.call(null,hubzero_pubs.core.get_prj_id.call(null));

//# sourceMappingURL=core.js.map?rel=1574332618454
