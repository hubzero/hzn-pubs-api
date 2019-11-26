// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.comps.folders');
goog.require('cljs.core');
goog.require('hubzero_pubs.utils');
goog.require('hubzero_pubs.comps.ui');
hubzero_pubs.comps.folders.spf = (function hubzero_pubs$comps$folders$spf(path,file){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
});
hubzero_pubs.comps.folders.folder_pop = (function hubzero_pubs$comps$folders$folder_pop(s,e){
cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,s),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-panel","current-panel",1482744861)], null))).classList.remove("open");

cljs.core.swap_BANG_.call(null,s,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-panel","current-panel",1482744861)], null),cljs.core.pop);

return cljs.core.swap_BANG_.call(null,s,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-folder","current-folder",1012906650)], null),cljs.core.pop);
});
hubzero_pubs.comps.folders.folder_push = (function hubzero_pubs$comps$folders$folder_push(s,name,path,e){
e.stopPropagation();

var node_1289 = hubzero_pubs.utils.find_ancestor.call(null,e.target,"li").querySelector(".panel-subpanel");
node_1289.classList.toggle("open");

cljs.core.swap_BANG_.call(null,s,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-panel","current-panel",1482744861)], null),cljs.core.conj,node_1289);

return cljs.core.swap_BANG_.call(null,s,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-folder","current-folder",1012906650)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,path], null));
});
hubzero_pubs.comps.folders.toggle_folder_files = (function hubzero_pubs$comps$folders$toggle_folder_files(s,key,index,selected){
var $ = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s));
var $__$1 = cljs.core.nth.call(null,$,index);
var $__$2 = cljs.core.first.call(null,$__$1);
var $__$3 = cljs.core.reduce.call(null,((function ($,$__$1,$__$2){
return (function (c,f){
if(cljs.core.truth_(clojure.string.includes_QMARK_(cljs.core.first.call(null,f),$__$2))){
return cljs.core.reduce.call(null,((function ($,$__$1,$__$2){
return (function (c2,f2){
var k = hubzero_pubs.comps.folders.spf.call(null,cljs.core.first.call(null,f),f2);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.call(null,c2,k,f2);
} else {
return cljs.core.dissoc.call(null,c2,k);
}
});})($,$__$1,$__$2))
,c,cljs.core.last.call(null,f));
} else {
return c;
}
});})($,$__$1,$__$2))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,s),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),key], null)),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)));
return cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),key], null),$__$3);
});
hubzero_pubs.comps.folders.folder_click = (function hubzero_pubs$comps$folders$folder_click(s,key,index,e){
e.stopPropagation();

var classes = hubzero_pubs.utils.find_ancestor.call(null,e.target,"li").querySelector(".selected-indicator").classList;
hubzero_pubs.comps.folders.toggle_folder_files.call(null,s,key,index,(!(cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null),Array.from(classes))))));

return classes.toggle("selected");
});
hubzero_pubs.comps.folders.folder_selected_QMARK_ = (function hubzero_pubs$comps$folders$folder_selected_QMARK_(s,key,index){
var $ = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s));
var $__$1 = cljs.core.nth.call(null,$,index);
var $__$2 = cljs.core.first.call(null,$__$1);
return cljs.core.reduce.call(null,((function ($,$__$1,$__$2){
return (function (c,f){
if(cljs.core.truth_(clojure.string.includes_QMARK_(cljs.core.first.call(null,f),$__$2))){
var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.reduce.call(null,((function (and__4120__auto__,$,$__$1,$__$2){
return (function (x,y){
var and__4120__auto____$1 = x;
if(cljs.core.truth_(and__4120__auto____$1)){
return y;
} else {
return and__4120__auto____$1;
}
});})(and__4120__auto__,$,$__$1,$__$2))
,cljs.core.reduce.call(null,((function (and__4120__auto__,$,$__$1,$__$2){
return (function (c2,f2){
var and__4120__auto____$1 = c2;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,s),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),key,hubzero_pubs.comps.folders.spf.call(null,cljs.core.first.call(null,f),f2)], null));
} else {
return and__4120__auto____$1;
}
});})(and__4120__auto__,$,$__$1,$__$2))
,c,cljs.core.last.call(null,f)));
} else {
return and__4120__auto__;
}
} else {
return c;
}
});})($,$__$1,$__$2))
,true,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)));
});
hubzero_pubs.comps.folders.folder = (function hubzero_pubs$comps$folders$folder(s,path,name,key,index){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__1290_SHARP_){
return hubzero_pubs.comps.folders.folder_push.call(null,s,name,path,p1__1290_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"folder","folder",1515881736)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-indicator","selected-indicator",1085564017),(cljs.core.truth_(hubzero_pubs.comps.folders.folder_selected_QMARK_.call(null,s,key,index))?new cljs.core.Keyword(null,"selected","selected",574897764):null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__1291_SHARP_){
return hubzero_pubs.comps.folders.folder_click.call(null,s,key,index,p1__1291_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),hubzero_pubs.comps.ui.icon.call(null,s,"#icon-checkmark"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Selected indicator"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),hubzero_pubs.comps.ui.icon.call(null,s,"#icon-folder-open"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Folder"], null)], null),name], null)], null),(((index < cljs.core.count.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)))))?hubzero_pubs.comps.folders.subpanel.call(null,s,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)),name,key,index):null)], null);
});

//# sourceMappingURL=folders.js.map?rel=1574315843746
