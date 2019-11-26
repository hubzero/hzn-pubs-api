// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.comps.options');
goog.require('cljs.core');
goog.require('hubzero_pubs.utils');
goog.require('hubzero_pubs.data');
goog.require('hubzero_pubs.comps.panels');
hubzero_pubs.comps.options.close = (function hubzero_pubs$comps$options$close(s){
return cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"options","options",99638489)], null),null);
});
hubzero_pubs.comps.options.item = (function hubzero_pubs$comps$options$item(s,i,name,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__32063_SHARP_){
return f.call(null,s,p1__32063_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),i], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null),name], null)], null),name], null)], null);
});
hubzero_pubs.comps.options.items = (function hubzero_pubs$comps$options$items(s,key,name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options-list","options-list",1926585356),new cljs.core.Keyword(null,"--as-panel","--as-panel",1192078917),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,s),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"options","options",99638489),key,name], null)))?new cljs.core.Keyword(null,"open","open",-1763596448):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inner","inner",-1383171215)], null),cljs.core.merge.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),hubzero_pubs.comps.options.item.call(null,s,"#icon-edit","Rename",(function (){
return cljs.core.List.EMPTY;
})),hubzero_pubs.comps.options.item.call(null,s,"#icon-download","Download",(function (){
return cljs.core.List.EMPTY;
})),hubzero_pubs.comps.options.item.call(null,s,"#icon-delete","Remove",(function (){
return cljs.core.List.EMPTY;
})))], null)], null);
});
hubzero_pubs.comps.options.handle_add_author = (function hubzero_pubs$comps$options$handle_add_author(s,e){
e.preventDefault();

e.stopPropagation();

hubzero_pubs.data.get_users.call(null,s);

hubzero_pubs.comps.panels.show_overlay.call(null,s,true);

return cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"panels","panels",801034044),new cljs.core.Keyword(null,"authors-list","authors-list",1220090663)], null),true);
});
hubzero_pubs.comps.options.authors = (function hubzero_pubs$comps$options$authors(s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authors-options","authors-options",-2071670452),new cljs.core.Keyword(null,"options-list","options-list",1926585356),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,s),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"authors","authors",2063018172)], null)))?new cljs.core.Keyword(null,"open","open",-1763596448):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inner","inner",-1383171215)], null),cljs.core.merge.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),hubzero_pubs.comps.options.item.call(null,s,"#icon-user","Add from project",hubzero_pubs.comps.options.handle_add_author),hubzero_pubs.comps.options.item.call(null,s,"#icon-user","Add new",(function (){
return cljs.core.List.EMPTY;
})))], null)], null);
});

//# sourceMappingURL=options.js.map?rel=1574316462793
