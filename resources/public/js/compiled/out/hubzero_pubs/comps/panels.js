// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.comps.panels');
goog.require('cljs.core');
goog.require('hubzero_pubs.data');
goog.require('hubzero_pubs.comps.ui');
hubzero_pubs.comps.panels.show_overlay = (function hubzero_pubs$comps$panels$show_overlay(s,show){
var $ = document;
var $__$1 = $.querySelector("body");
var $__$2 = $__$1.classList;
if(cljs.core.truth_(show)){
return $__$2.add("with-overlay");
} else {
return $__$2.remove("with-overlay");
}
});
hubzero_pubs.comps.panels.close = (function hubzero_pubs$comps$panels$close(s){
cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044)], null),null);

return hubzero_pubs.comps.panels.show_overlay.call(null,s,false);
});
hubzero_pubs.comps.panels.show = (function hubzero_pubs$comps$panels$show(s,e,show,key){
cljs.core.prn.call(null,"SHOW SHOW SHOW",key);

e.preventDefault();

hubzero_pubs.data.get_files.call(null,s);

cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),key], null),show);

return hubzero_pubs.comps.panels.show_overlay.call(null,s,true);
});
hubzero_pubs.comps.panels.overlay = (function hubzero_pubs$comps$panels$overlay(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"page-overlay","page-overlay",-146610072),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hubzero_pubs.comps.panels.close.call(null,s);
})], null)], null);
});
hubzero_pubs.comps.panels.header = (function hubzero_pubs$comps$panels$header(s,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hubzero_pubs.comps.panels.close.call(null,s);
})], null),hubzero_pubs.comps.ui.icon.call(null,s,"#icon-left"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Return"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null)], null);
});

//# sourceMappingURL=panels.js.map?rel=1574316462614
