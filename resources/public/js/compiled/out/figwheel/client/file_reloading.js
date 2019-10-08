// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28099_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28099_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28100 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28101 = null;
var count__28102 = (0);
var i__28103 = (0);
while(true){
if((i__28103 < count__28102)){
var n = cljs.core._nth.call(null,chunk__28101,i__28103);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28104 = seq__28100;
var G__28105 = chunk__28101;
var G__28106 = count__28102;
var G__28107 = (i__28103 + (1));
seq__28100 = G__28104;
chunk__28101 = G__28105;
count__28102 = G__28106;
i__28103 = G__28107;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28100);
if(temp__5720__auto__){
var seq__28100__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28100__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28100__$1);
var G__28108 = cljs.core.chunk_rest.call(null,seq__28100__$1);
var G__28109 = c__4550__auto__;
var G__28110 = cljs.core.count.call(null,c__4550__auto__);
var G__28111 = (0);
seq__28100 = G__28108;
chunk__28101 = G__28109;
count__28102 = G__28110;
i__28103 = G__28111;
continue;
} else {
var n = cljs.core.first.call(null,seq__28100__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28112 = cljs.core.next.call(null,seq__28100__$1);
var G__28113 = null;
var G__28114 = (0);
var G__28115 = (0);
seq__28100 = G__28112;
chunk__28101 = G__28113;
count__28102 = G__28114;
i__28103 = G__28115;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28116){
var vec__28117 = p__28116;
var _ = cljs.core.nth.call(null,vec__28117,(0),null);
var v = cljs.core.nth.call(null,vec__28117,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28120){
var vec__28121 = p__28120;
var k = cljs.core.nth.call(null,vec__28121,(0),null);
var v = cljs.core.nth.call(null,vec__28121,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28133_28141 = cljs.core.seq.call(null,deps);
var chunk__28134_28142 = null;
var count__28135_28143 = (0);
var i__28136_28144 = (0);
while(true){
if((i__28136_28144 < count__28135_28143)){
var dep_28145 = cljs.core._nth.call(null,chunk__28134_28142,i__28136_28144);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28145;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28145));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28145,(depth + (1)),state);
} else {
}


var G__28146 = seq__28133_28141;
var G__28147 = chunk__28134_28142;
var G__28148 = count__28135_28143;
var G__28149 = (i__28136_28144 + (1));
seq__28133_28141 = G__28146;
chunk__28134_28142 = G__28147;
count__28135_28143 = G__28148;
i__28136_28144 = G__28149;
continue;
} else {
var temp__5720__auto___28150 = cljs.core.seq.call(null,seq__28133_28141);
if(temp__5720__auto___28150){
var seq__28133_28151__$1 = temp__5720__auto___28150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28133_28151__$1)){
var c__4550__auto___28152 = cljs.core.chunk_first.call(null,seq__28133_28151__$1);
var G__28153 = cljs.core.chunk_rest.call(null,seq__28133_28151__$1);
var G__28154 = c__4550__auto___28152;
var G__28155 = cljs.core.count.call(null,c__4550__auto___28152);
var G__28156 = (0);
seq__28133_28141 = G__28153;
chunk__28134_28142 = G__28154;
count__28135_28143 = G__28155;
i__28136_28144 = G__28156;
continue;
} else {
var dep_28157 = cljs.core.first.call(null,seq__28133_28151__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28157;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28157));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28157,(depth + (1)),state);
} else {
}


var G__28158 = cljs.core.next.call(null,seq__28133_28151__$1);
var G__28159 = null;
var G__28160 = (0);
var G__28161 = (0);
seq__28133_28141 = G__28158;
chunk__28134_28142 = G__28159;
count__28135_28143 = G__28160;
i__28136_28144 = G__28161;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28137){
var vec__28138 = p__28137;
var seq__28139 = cljs.core.seq.call(null,vec__28138);
var first__28140 = cljs.core.first.call(null,seq__28139);
var seq__28139__$1 = cljs.core.next.call(null,seq__28139);
var x = first__28140;
var xs = seq__28139__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28138,seq__28139,first__28140,seq__28139__$1,x,xs,get_deps__$1){
return (function (p1__28124_SHARP_){
return clojure.set.difference.call(null,p1__28124_SHARP_,x);
});})(vec__28138,seq__28139,first__28140,seq__28139__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28162 = cljs.core.seq.call(null,provides);
var chunk__28163 = null;
var count__28164 = (0);
var i__28165 = (0);
while(true){
if((i__28165 < count__28164)){
var prov = cljs.core._nth.call(null,chunk__28163,i__28165);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28174_28182 = cljs.core.seq.call(null,requires);
var chunk__28175_28183 = null;
var count__28176_28184 = (0);
var i__28177_28185 = (0);
while(true){
if((i__28177_28185 < count__28176_28184)){
var req_28186 = cljs.core._nth.call(null,chunk__28175_28183,i__28177_28185);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28186,prov);


var G__28187 = seq__28174_28182;
var G__28188 = chunk__28175_28183;
var G__28189 = count__28176_28184;
var G__28190 = (i__28177_28185 + (1));
seq__28174_28182 = G__28187;
chunk__28175_28183 = G__28188;
count__28176_28184 = G__28189;
i__28177_28185 = G__28190;
continue;
} else {
var temp__5720__auto___28191 = cljs.core.seq.call(null,seq__28174_28182);
if(temp__5720__auto___28191){
var seq__28174_28192__$1 = temp__5720__auto___28191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28174_28192__$1)){
var c__4550__auto___28193 = cljs.core.chunk_first.call(null,seq__28174_28192__$1);
var G__28194 = cljs.core.chunk_rest.call(null,seq__28174_28192__$1);
var G__28195 = c__4550__auto___28193;
var G__28196 = cljs.core.count.call(null,c__4550__auto___28193);
var G__28197 = (0);
seq__28174_28182 = G__28194;
chunk__28175_28183 = G__28195;
count__28176_28184 = G__28196;
i__28177_28185 = G__28197;
continue;
} else {
var req_28198 = cljs.core.first.call(null,seq__28174_28192__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28198,prov);


var G__28199 = cljs.core.next.call(null,seq__28174_28192__$1);
var G__28200 = null;
var G__28201 = (0);
var G__28202 = (0);
seq__28174_28182 = G__28199;
chunk__28175_28183 = G__28200;
count__28176_28184 = G__28201;
i__28177_28185 = G__28202;
continue;
}
} else {
}
}
break;
}


var G__28203 = seq__28162;
var G__28204 = chunk__28163;
var G__28205 = count__28164;
var G__28206 = (i__28165 + (1));
seq__28162 = G__28203;
chunk__28163 = G__28204;
count__28164 = G__28205;
i__28165 = G__28206;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28162);
if(temp__5720__auto__){
var seq__28162__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28162__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28162__$1);
var G__28207 = cljs.core.chunk_rest.call(null,seq__28162__$1);
var G__28208 = c__4550__auto__;
var G__28209 = cljs.core.count.call(null,c__4550__auto__);
var G__28210 = (0);
seq__28162 = G__28207;
chunk__28163 = G__28208;
count__28164 = G__28209;
i__28165 = G__28210;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28162__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28178_28211 = cljs.core.seq.call(null,requires);
var chunk__28179_28212 = null;
var count__28180_28213 = (0);
var i__28181_28214 = (0);
while(true){
if((i__28181_28214 < count__28180_28213)){
var req_28215 = cljs.core._nth.call(null,chunk__28179_28212,i__28181_28214);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28215,prov);


var G__28216 = seq__28178_28211;
var G__28217 = chunk__28179_28212;
var G__28218 = count__28180_28213;
var G__28219 = (i__28181_28214 + (1));
seq__28178_28211 = G__28216;
chunk__28179_28212 = G__28217;
count__28180_28213 = G__28218;
i__28181_28214 = G__28219;
continue;
} else {
var temp__5720__auto___28220__$1 = cljs.core.seq.call(null,seq__28178_28211);
if(temp__5720__auto___28220__$1){
var seq__28178_28221__$1 = temp__5720__auto___28220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28178_28221__$1)){
var c__4550__auto___28222 = cljs.core.chunk_first.call(null,seq__28178_28221__$1);
var G__28223 = cljs.core.chunk_rest.call(null,seq__28178_28221__$1);
var G__28224 = c__4550__auto___28222;
var G__28225 = cljs.core.count.call(null,c__4550__auto___28222);
var G__28226 = (0);
seq__28178_28211 = G__28223;
chunk__28179_28212 = G__28224;
count__28180_28213 = G__28225;
i__28181_28214 = G__28226;
continue;
} else {
var req_28227 = cljs.core.first.call(null,seq__28178_28221__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28227,prov);


var G__28228 = cljs.core.next.call(null,seq__28178_28221__$1);
var G__28229 = null;
var G__28230 = (0);
var G__28231 = (0);
seq__28178_28211 = G__28228;
chunk__28179_28212 = G__28229;
count__28180_28213 = G__28230;
i__28181_28214 = G__28231;
continue;
}
} else {
}
}
break;
}


var G__28232 = cljs.core.next.call(null,seq__28162__$1);
var G__28233 = null;
var G__28234 = (0);
var G__28235 = (0);
seq__28162 = G__28232;
chunk__28163 = G__28233;
count__28164 = G__28234;
i__28165 = G__28235;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28236_28240 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28237_28241 = null;
var count__28238_28242 = (0);
var i__28239_28243 = (0);
while(true){
if((i__28239_28243 < count__28238_28242)){
var ns_28244 = cljs.core._nth.call(null,chunk__28237_28241,i__28239_28243);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28244);


var G__28245 = seq__28236_28240;
var G__28246 = chunk__28237_28241;
var G__28247 = count__28238_28242;
var G__28248 = (i__28239_28243 + (1));
seq__28236_28240 = G__28245;
chunk__28237_28241 = G__28246;
count__28238_28242 = G__28247;
i__28239_28243 = G__28248;
continue;
} else {
var temp__5720__auto___28249 = cljs.core.seq.call(null,seq__28236_28240);
if(temp__5720__auto___28249){
var seq__28236_28250__$1 = temp__5720__auto___28249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28236_28250__$1)){
var c__4550__auto___28251 = cljs.core.chunk_first.call(null,seq__28236_28250__$1);
var G__28252 = cljs.core.chunk_rest.call(null,seq__28236_28250__$1);
var G__28253 = c__4550__auto___28251;
var G__28254 = cljs.core.count.call(null,c__4550__auto___28251);
var G__28255 = (0);
seq__28236_28240 = G__28252;
chunk__28237_28241 = G__28253;
count__28238_28242 = G__28254;
i__28239_28243 = G__28255;
continue;
} else {
var ns_28256 = cljs.core.first.call(null,seq__28236_28250__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28256);


var G__28257 = cljs.core.next.call(null,seq__28236_28250__$1);
var G__28258 = null;
var G__28259 = (0);
var G__28260 = (0);
seq__28236_28240 = G__28257;
chunk__28237_28241 = G__28258;
count__28238_28242 = G__28259;
i__28239_28243 = G__28260;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28261__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28262__i = 0, G__28262__a = new Array(arguments.length -  0);
while (G__28262__i < G__28262__a.length) {G__28262__a[G__28262__i] = arguments[G__28262__i + 0]; ++G__28262__i;}
  args = new cljs.core.IndexedSeq(G__28262__a,0,null);
} 
return G__28261__delegate.call(this,args);};
G__28261.cljs$lang$maxFixedArity = 0;
G__28261.cljs$lang$applyTo = (function (arglist__28263){
var args = cljs.core.seq(arglist__28263);
return G__28261__delegate(args);
});
G__28261.cljs$core$IFn$_invoke$arity$variadic = G__28261__delegate;
return G__28261;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28264_SHARP_,p2__28265_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28264_SHARP_)),p2__28265_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28266_SHARP_,p2__28267_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28266_SHARP_),p2__28267_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28268 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28268.addCallback(((function (G__28268){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28268))
);

G__28268.addErrback(((function (G__28268){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28268))
);

return G__28268;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28269){if((e28269 instanceof Error)){
var e = e28269;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28269;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28270){if((e28270 instanceof Error)){
var e = e28270;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28270;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28271 = cljs.core._EQ_;
var expr__28272 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28271.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28272))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28271.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28272))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28271.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28272))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28271,expr__28272){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28271,expr__28272))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28274,callback){
var map__28275 = p__28274;
var map__28275__$1 = (((((!((map__28275 == null))))?(((((map__28275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28275):map__28275);
var file_msg = map__28275__$1;
var request_url = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28275,map__28275__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28275,map__28275__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__){
return (function (state_28315){
var state_val_28316 = (state_28315[(1)]);
if((state_val_28316 === (7))){
var inst_28311 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28317_28344 = state_28315__$1;
(statearr_28317_28344[(2)] = inst_28311);

(statearr_28317_28344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (1))){
var state_28315__$1 = state_28315;
var statearr_28318_28345 = state_28315__$1;
(statearr_28318_28345[(2)] = null);

(statearr_28318_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (4))){
var inst_28279 = (state_28315[(7)]);
var inst_28279__$1 = (state_28315[(2)]);
var state_28315__$1 = (function (){var statearr_28319 = state_28315;
(statearr_28319[(7)] = inst_28279__$1);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28279__$1)){
var statearr_28320_28346 = state_28315__$1;
(statearr_28320_28346[(1)] = (5));

} else {
var statearr_28321_28347 = state_28315__$1;
(statearr_28321_28347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (15))){
var inst_28296 = (state_28315[(8)]);
var inst_28293 = (state_28315[(9)]);
var inst_28298 = inst_28296.call(null,inst_28293);
var state_28315__$1 = state_28315;
var statearr_28322_28348 = state_28315__$1;
(statearr_28322_28348[(2)] = inst_28298);

(statearr_28322_28348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (13))){
var inst_28305 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28323_28349 = state_28315__$1;
(statearr_28323_28349[(2)] = inst_28305);

(statearr_28323_28349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (6))){
var state_28315__$1 = state_28315;
var statearr_28324_28350 = state_28315__$1;
(statearr_28324_28350[(2)] = null);

(statearr_28324_28350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (17))){
var inst_28302 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28325_28351 = state_28315__$1;
(statearr_28325_28351[(2)] = inst_28302);

(statearr_28325_28351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (3))){
var inst_28313 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28315__$1,inst_28313);
} else {
if((state_val_28316 === (12))){
var state_28315__$1 = state_28315;
var statearr_28326_28352 = state_28315__$1;
(statearr_28326_28352[(2)] = null);

(statearr_28326_28352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (2))){
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28315__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28316 === (11))){
var inst_28284 = (state_28315[(10)]);
var inst_28291 = figwheel.client.file_reloading.blocking_load.call(null,inst_28284);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28315__$1,(14),inst_28291);
} else {
if((state_val_28316 === (9))){
var inst_28284 = (state_28315[(10)]);
var state_28315__$1 = state_28315;
if(cljs.core.truth_(inst_28284)){
var statearr_28327_28353 = state_28315__$1;
(statearr_28327_28353[(1)] = (11));

} else {
var statearr_28328_28354 = state_28315__$1;
(statearr_28328_28354[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (5))){
var inst_28285 = (state_28315[(11)]);
var inst_28279 = (state_28315[(7)]);
var inst_28284 = cljs.core.nth.call(null,inst_28279,(0),null);
var inst_28285__$1 = cljs.core.nth.call(null,inst_28279,(1),null);
var state_28315__$1 = (function (){var statearr_28329 = state_28315;
(statearr_28329[(11)] = inst_28285__$1);

(statearr_28329[(10)] = inst_28284);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28285__$1)){
var statearr_28330_28355 = state_28315__$1;
(statearr_28330_28355[(1)] = (8));

} else {
var statearr_28331_28356 = state_28315__$1;
(statearr_28331_28356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (14))){
var inst_28296 = (state_28315[(8)]);
var inst_28284 = (state_28315[(10)]);
var inst_28293 = (state_28315[(2)]);
var inst_28294 = console.log("Loading!",inst_28284);
var inst_28295 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28296__$1 = cljs.core.get.call(null,inst_28295,inst_28284);
var state_28315__$1 = (function (){var statearr_28332 = state_28315;
(statearr_28332[(8)] = inst_28296__$1);

(statearr_28332[(12)] = inst_28294);

(statearr_28332[(9)] = inst_28293);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28296__$1)){
var statearr_28333_28357 = state_28315__$1;
(statearr_28333_28357[(1)] = (15));

} else {
var statearr_28334_28358 = state_28315__$1;
(statearr_28334_28358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (16))){
var inst_28293 = (state_28315[(9)]);
var inst_28300 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28293);
var state_28315__$1 = state_28315;
var statearr_28335_28359 = state_28315__$1;
(statearr_28335_28359[(2)] = inst_28300);

(statearr_28335_28359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (10))){
var inst_28307 = (state_28315[(2)]);
var state_28315__$1 = (function (){var statearr_28336 = state_28315;
(statearr_28336[(13)] = inst_28307);

return statearr_28336;
})();
var statearr_28337_28360 = state_28315__$1;
(statearr_28337_28360[(2)] = null);

(statearr_28337_28360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (8))){
var inst_28285 = (state_28315[(11)]);
var inst_28287 = console.log("Evaling!",inst_28285);
var inst_28288 = eval(inst_28285);
var state_28315__$1 = (function (){var statearr_28338 = state_28315;
(statearr_28338[(14)] = inst_28287);

return statearr_28338;
})();
var statearr_28339_28361 = state_28315__$1;
(statearr_28339_28361[(2)] = inst_28288);

(statearr_28339_28361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24682__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24623__auto__ = null;
var figwheel$client$file_reloading$state_machine__24623__auto____0 = (function (){
var statearr_28340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28340[(0)] = figwheel$client$file_reloading$state_machine__24623__auto__);

(statearr_28340[(1)] = (1));

return statearr_28340;
});
var figwheel$client$file_reloading$state_machine__24623__auto____1 = (function (state_28315){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_28315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e28341){if((e28341 instanceof Object)){
var ex__24626__auto__ = e28341;
var statearr_28342_28362 = state_28315;
(statearr_28342_28362[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28363 = state_28315;
state_28315 = G__28363;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24623__auto__ = function(state_28315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24623__auto____1.call(this,state_28315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24623__auto____0;
figwheel$client$file_reloading$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24623__auto____1;
return figwheel$client$file_reloading$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__))
})();
var state__24684__auto__ = (function (){var statearr_28343 = f__24683__auto__.call(null);
(statearr_28343[(6)] = c__24682__auto__);

return statearr_28343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__))
);

return c__24682__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28365 = arguments.length;
switch (G__28365) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28367,callback){
var map__28368 = p__28367;
var map__28368__$1 = (((((!((map__28368 == null))))?(((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28368):map__28368);
var file_msg = map__28368__$1;
var namespace = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28368,map__28368__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28368,map__28368__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28370){
var map__28371 = p__28370;
var map__28371__$1 = (((((!((map__28371 == null))))?(((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);
var file_msg = map__28371__$1;
var namespace = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28373){
var map__28374 = p__28373;
var map__28374__$1 = (((((!((map__28374 == null))))?(((((map__28374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28374):map__28374);
var file_msg = map__28374__$1;
var namespace = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28376,callback){
var map__28377 = p__28376;
var map__28377__$1 = (((((!((map__28377 == null))))?(((((map__28377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28377):map__28377);
var file_msg = map__28377__$1;
var request_url = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24682__auto___28427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___28427,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___28427,out){
return (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (1))){
var inst_28386 = cljs.core.seq.call(null,files);
var inst_28387 = cljs.core.first.call(null,inst_28386);
var inst_28388 = cljs.core.next.call(null,inst_28386);
var inst_28389 = files;
var state_28412__$1 = (function (){var statearr_28414 = state_28412;
(statearr_28414[(7)] = inst_28389);

(statearr_28414[(8)] = inst_28388);

(statearr_28414[(9)] = inst_28387);

return statearr_28414;
})();
var statearr_28415_28428 = state_28412__$1;
(statearr_28415_28428[(2)] = null);

(statearr_28415_28428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (2))){
var inst_28389 = (state_28412[(7)]);
var inst_28395 = (state_28412[(10)]);
var inst_28394 = cljs.core.seq.call(null,inst_28389);
var inst_28395__$1 = cljs.core.first.call(null,inst_28394);
var inst_28396 = cljs.core.next.call(null,inst_28394);
var inst_28397 = (inst_28395__$1 == null);
var inst_28398 = cljs.core.not.call(null,inst_28397);
var state_28412__$1 = (function (){var statearr_28416 = state_28412;
(statearr_28416[(11)] = inst_28396);

(statearr_28416[(10)] = inst_28395__$1);

return statearr_28416;
})();
if(inst_28398){
var statearr_28417_28429 = state_28412__$1;
(statearr_28417_28429[(1)] = (4));

} else {
var statearr_28418_28430 = state_28412__$1;
(statearr_28418_28430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else {
if((state_val_28413 === (4))){
var inst_28395 = (state_28412[(10)]);
var inst_28400 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28395);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(7),inst_28400);
} else {
if((state_val_28413 === (5))){
var inst_28406 = cljs.core.async.close_BANG_.call(null,out);
var state_28412__$1 = state_28412;
var statearr_28419_28431 = state_28412__$1;
(statearr_28419_28431[(2)] = inst_28406);

(statearr_28419_28431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (6))){
var inst_28408 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28420_28432 = state_28412__$1;
(statearr_28420_28432[(2)] = inst_28408);

(statearr_28420_28432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (7))){
var inst_28396 = (state_28412[(11)]);
var inst_28402 = (state_28412[(2)]);
var inst_28403 = cljs.core.async.put_BANG_.call(null,out,inst_28402);
var inst_28389 = inst_28396;
var state_28412__$1 = (function (){var statearr_28421 = state_28412;
(statearr_28421[(7)] = inst_28389);

(statearr_28421[(12)] = inst_28403);

return statearr_28421;
})();
var statearr_28422_28433 = state_28412__$1;
(statearr_28422_28433[(2)] = null);

(statearr_28422_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24682__auto___28427,out))
;
return ((function (switch__24622__auto__,c__24682__auto___28427,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____0 = (function (){
var statearr_28423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28423[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__);

(statearr_28423[(1)] = (1));

return statearr_28423;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____1 = (function (state_28412){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_28412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e28424){if((e28424 instanceof Object)){
var ex__24626__auto__ = e28424;
var statearr_28425_28434 = state_28412;
(statearr_28425_28434[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28435 = state_28412;
state_28412 = G__28435;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___28427,out))
})();
var state__24684__auto__ = (function (){var statearr_28426 = f__24683__auto__.call(null);
(statearr_28426[(6)] = c__24682__auto___28427);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___28427,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28436,opts){
var map__28437 = p__28436;
var map__28437__$1 = (((((!((map__28437 == null))))?(((((map__28437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28437):map__28437);
var eval_body = cljs.core.get.call(null,map__28437__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28439){var e = e28439;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28440_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28440_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28441){
var vec__28442 = p__28441;
var k = cljs.core.nth.call(null,vec__28442,(0),null);
var v = cljs.core.nth.call(null,vec__28442,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28445){
var vec__28446 = p__28445;
var k = cljs.core.nth.call(null,vec__28446,(0),null);
var v = cljs.core.nth.call(null,vec__28446,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28452,p__28453){
var map__28454 = p__28452;
var map__28454__$1 = (((((!((map__28454 == null))))?(((((map__28454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28454):map__28454);
var opts = map__28454__$1;
var before_jsload = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28455 = p__28453;
var map__28455__$1 = (((((!((map__28455 == null))))?(((((map__28455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28455):map__28455);
var msg = map__28455__$1;
var files = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28609){
var state_val_28610 = (state_28609[(1)]);
if((state_val_28610 === (7))){
var inst_28471 = (state_28609[(7)]);
var inst_28472 = (state_28609[(8)]);
var inst_28470 = (state_28609[(9)]);
var inst_28469 = (state_28609[(10)]);
var inst_28477 = cljs.core._nth.call(null,inst_28470,inst_28472);
var inst_28478 = figwheel.client.file_reloading.eval_body.call(null,inst_28477,opts);
var inst_28479 = (inst_28472 + (1));
var tmp28611 = inst_28471;
var tmp28612 = inst_28470;
var tmp28613 = inst_28469;
var inst_28469__$1 = tmp28613;
var inst_28470__$1 = tmp28612;
var inst_28471__$1 = tmp28611;
var inst_28472__$1 = inst_28479;
var state_28609__$1 = (function (){var statearr_28614 = state_28609;
(statearr_28614[(7)] = inst_28471__$1);

(statearr_28614[(8)] = inst_28472__$1);

(statearr_28614[(9)] = inst_28470__$1);

(statearr_28614[(10)] = inst_28469__$1);

(statearr_28614[(11)] = inst_28478);

return statearr_28614;
})();
var statearr_28615_28698 = state_28609__$1;
(statearr_28615_28698[(2)] = null);

(statearr_28615_28698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (20))){
var inst_28512 = (state_28609[(12)]);
var inst_28520 = figwheel.client.file_reloading.sort_files.call(null,inst_28512);
var state_28609__$1 = state_28609;
var statearr_28616_28699 = state_28609__$1;
(statearr_28616_28699[(2)] = inst_28520);

(statearr_28616_28699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (27))){
var state_28609__$1 = state_28609;
var statearr_28617_28700 = state_28609__$1;
(statearr_28617_28700[(2)] = null);

(statearr_28617_28700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (1))){
var inst_28461 = (state_28609[(13)]);
var inst_28458 = before_jsload.call(null,files);
var inst_28459 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28460 = (function (){return ((function (inst_28461,inst_28458,inst_28459,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28449_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28449_SHARP_);
});
;})(inst_28461,inst_28458,inst_28459,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28461__$1 = cljs.core.filter.call(null,inst_28460,files);
var inst_28462 = cljs.core.not_empty.call(null,inst_28461__$1);
var state_28609__$1 = (function (){var statearr_28618 = state_28609;
(statearr_28618[(14)] = inst_28459);

(statearr_28618[(13)] = inst_28461__$1);

(statearr_28618[(15)] = inst_28458);

return statearr_28618;
})();
if(cljs.core.truth_(inst_28462)){
var statearr_28619_28701 = state_28609__$1;
(statearr_28619_28701[(1)] = (2));

} else {
var statearr_28620_28702 = state_28609__$1;
(statearr_28620_28702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (24))){
var state_28609__$1 = state_28609;
var statearr_28621_28703 = state_28609__$1;
(statearr_28621_28703[(2)] = null);

(statearr_28621_28703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (39))){
var inst_28562 = (state_28609[(16)]);
var state_28609__$1 = state_28609;
var statearr_28622_28704 = state_28609__$1;
(statearr_28622_28704[(2)] = inst_28562);

(statearr_28622_28704[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (46))){
var inst_28604 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28623_28705 = state_28609__$1;
(statearr_28623_28705[(2)] = inst_28604);

(statearr_28623_28705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (4))){
var inst_28506 = (state_28609[(2)]);
var inst_28507 = cljs.core.List.EMPTY;
var inst_28508 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28507);
var inst_28509 = (function (){return ((function (inst_28506,inst_28507,inst_28508,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28450_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28450_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28450_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28450_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28506,inst_28507,inst_28508,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28510 = cljs.core.filter.call(null,inst_28509,files);
var inst_28511 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28512 = cljs.core.concat.call(null,inst_28510,inst_28511);
var state_28609__$1 = (function (){var statearr_28624 = state_28609;
(statearr_28624[(17)] = inst_28508);

(statearr_28624[(12)] = inst_28512);

(statearr_28624[(18)] = inst_28506);

return statearr_28624;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28625_28706 = state_28609__$1;
(statearr_28625_28706[(1)] = (16));

} else {
var statearr_28626_28707 = state_28609__$1;
(statearr_28626_28707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (15))){
var inst_28496 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28627_28708 = state_28609__$1;
(statearr_28627_28708[(2)] = inst_28496);

(statearr_28627_28708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (21))){
var inst_28522 = (state_28609[(19)]);
var inst_28522__$1 = (state_28609[(2)]);
var inst_28523 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28522__$1);
var state_28609__$1 = (function (){var statearr_28628 = state_28609;
(statearr_28628[(19)] = inst_28522__$1);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28609__$1,(22),inst_28523);
} else {
if((state_val_28610 === (31))){
var inst_28607 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28609__$1,inst_28607);
} else {
if((state_val_28610 === (32))){
var inst_28562 = (state_28609[(16)]);
var inst_28567 = inst_28562.cljs$lang$protocol_mask$partition0$;
var inst_28568 = (inst_28567 & (64));
var inst_28569 = inst_28562.cljs$core$ISeq$;
var inst_28570 = (cljs.core.PROTOCOL_SENTINEL === inst_28569);
var inst_28571 = ((inst_28568) || (inst_28570));
var state_28609__$1 = state_28609;
if(cljs.core.truth_(inst_28571)){
var statearr_28629_28709 = state_28609__$1;
(statearr_28629_28709[(1)] = (35));

} else {
var statearr_28630_28710 = state_28609__$1;
(statearr_28630_28710[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (40))){
var inst_28584 = (state_28609[(20)]);
var inst_28583 = (state_28609[(2)]);
var inst_28584__$1 = cljs.core.get.call(null,inst_28583,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28585 = cljs.core.get.call(null,inst_28583,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28586 = cljs.core.not_empty.call(null,inst_28584__$1);
var state_28609__$1 = (function (){var statearr_28631 = state_28609;
(statearr_28631[(21)] = inst_28585);

(statearr_28631[(20)] = inst_28584__$1);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28586)){
var statearr_28632_28711 = state_28609__$1;
(statearr_28632_28711[(1)] = (41));

} else {
var statearr_28633_28712 = state_28609__$1;
(statearr_28633_28712[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (33))){
var state_28609__$1 = state_28609;
var statearr_28634_28713 = state_28609__$1;
(statearr_28634_28713[(2)] = false);

(statearr_28634_28713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (13))){
var inst_28482 = (state_28609[(22)]);
var inst_28486 = cljs.core.chunk_first.call(null,inst_28482);
var inst_28487 = cljs.core.chunk_rest.call(null,inst_28482);
var inst_28488 = cljs.core.count.call(null,inst_28486);
var inst_28469 = inst_28487;
var inst_28470 = inst_28486;
var inst_28471 = inst_28488;
var inst_28472 = (0);
var state_28609__$1 = (function (){var statearr_28635 = state_28609;
(statearr_28635[(7)] = inst_28471);

(statearr_28635[(8)] = inst_28472);

(statearr_28635[(9)] = inst_28470);

(statearr_28635[(10)] = inst_28469);

return statearr_28635;
})();
var statearr_28636_28714 = state_28609__$1;
(statearr_28636_28714[(2)] = null);

(statearr_28636_28714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (22))){
var inst_28522 = (state_28609[(19)]);
var inst_28530 = (state_28609[(23)]);
var inst_28525 = (state_28609[(24)]);
var inst_28526 = (state_28609[(25)]);
var inst_28525__$1 = (state_28609[(2)]);
var inst_28526__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28525__$1);
var inst_28527 = (function (){var all_files = inst_28522;
var res_SINGLEQUOTE_ = inst_28525__$1;
var res = inst_28526__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28522,inst_28530,inst_28525,inst_28526,inst_28525__$1,inst_28526__$1,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28451_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28451_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28522,inst_28530,inst_28525,inst_28526,inst_28525__$1,inst_28526__$1,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28528 = cljs.core.filter.call(null,inst_28527,inst_28525__$1);
var inst_28529 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28530__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28529);
var inst_28531 = cljs.core.not_empty.call(null,inst_28530__$1);
var state_28609__$1 = (function (){var statearr_28637 = state_28609;
(statearr_28637[(23)] = inst_28530__$1);

(statearr_28637[(24)] = inst_28525__$1);

(statearr_28637[(25)] = inst_28526__$1);

(statearr_28637[(26)] = inst_28528);

return statearr_28637;
})();
if(cljs.core.truth_(inst_28531)){
var statearr_28638_28715 = state_28609__$1;
(statearr_28638_28715[(1)] = (23));

} else {
var statearr_28639_28716 = state_28609__$1;
(statearr_28639_28716[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (36))){
var state_28609__$1 = state_28609;
var statearr_28640_28717 = state_28609__$1;
(statearr_28640_28717[(2)] = false);

(statearr_28640_28717[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (41))){
var inst_28584 = (state_28609[(20)]);
var inst_28588 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28589 = cljs.core.map.call(null,inst_28588,inst_28584);
var inst_28590 = cljs.core.pr_str.call(null,inst_28589);
var inst_28591 = ["figwheel-no-load meta-data: ",inst_28590].join('');
var inst_28592 = figwheel.client.utils.log.call(null,inst_28591);
var state_28609__$1 = state_28609;
var statearr_28641_28718 = state_28609__$1;
(statearr_28641_28718[(2)] = inst_28592);

(statearr_28641_28718[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (43))){
var inst_28585 = (state_28609[(21)]);
var inst_28595 = (state_28609[(2)]);
var inst_28596 = cljs.core.not_empty.call(null,inst_28585);
var state_28609__$1 = (function (){var statearr_28642 = state_28609;
(statearr_28642[(27)] = inst_28595);

return statearr_28642;
})();
if(cljs.core.truth_(inst_28596)){
var statearr_28643_28719 = state_28609__$1;
(statearr_28643_28719[(1)] = (44));

} else {
var statearr_28644_28720 = state_28609__$1;
(statearr_28644_28720[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (29))){
var inst_28522 = (state_28609[(19)]);
var inst_28530 = (state_28609[(23)]);
var inst_28525 = (state_28609[(24)]);
var inst_28562 = (state_28609[(16)]);
var inst_28526 = (state_28609[(25)]);
var inst_28528 = (state_28609[(26)]);
var inst_28558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28561 = (function (){var all_files = inst_28522;
var res_SINGLEQUOTE_ = inst_28525;
var res = inst_28526;
var files_not_loaded = inst_28528;
var dependencies_that_loaded = inst_28530;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28562,inst_28526,inst_28528,inst_28558,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28560){
var map__28645 = p__28560;
var map__28645__$1 = (((((!((map__28645 == null))))?(((((map__28645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);
var namespace = cljs.core.get.call(null,map__28645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28562,inst_28526,inst_28528,inst_28558,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28562__$1 = cljs.core.group_by.call(null,inst_28561,inst_28528);
var inst_28564 = (inst_28562__$1 == null);
var inst_28565 = cljs.core.not.call(null,inst_28564);
var state_28609__$1 = (function (){var statearr_28647 = state_28609;
(statearr_28647[(16)] = inst_28562__$1);

(statearr_28647[(28)] = inst_28558);

return statearr_28647;
})();
if(inst_28565){
var statearr_28648_28721 = state_28609__$1;
(statearr_28648_28721[(1)] = (32));

} else {
var statearr_28649_28722 = state_28609__$1;
(statearr_28649_28722[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (44))){
var inst_28585 = (state_28609[(21)]);
var inst_28598 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28585);
var inst_28599 = cljs.core.pr_str.call(null,inst_28598);
var inst_28600 = ["not required: ",inst_28599].join('');
var inst_28601 = figwheel.client.utils.log.call(null,inst_28600);
var state_28609__$1 = state_28609;
var statearr_28650_28723 = state_28609__$1;
(statearr_28650_28723[(2)] = inst_28601);

(statearr_28650_28723[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (6))){
var inst_28503 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28651_28724 = state_28609__$1;
(statearr_28651_28724[(2)] = inst_28503);

(statearr_28651_28724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (28))){
var inst_28528 = (state_28609[(26)]);
var inst_28555 = (state_28609[(2)]);
var inst_28556 = cljs.core.not_empty.call(null,inst_28528);
var state_28609__$1 = (function (){var statearr_28652 = state_28609;
(statearr_28652[(29)] = inst_28555);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28556)){
var statearr_28653_28725 = state_28609__$1;
(statearr_28653_28725[(1)] = (29));

} else {
var statearr_28654_28726 = state_28609__$1;
(statearr_28654_28726[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (25))){
var inst_28526 = (state_28609[(25)]);
var inst_28542 = (state_28609[(2)]);
var inst_28543 = cljs.core.not_empty.call(null,inst_28526);
var state_28609__$1 = (function (){var statearr_28655 = state_28609;
(statearr_28655[(30)] = inst_28542);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28543)){
var statearr_28656_28727 = state_28609__$1;
(statearr_28656_28727[(1)] = (26));

} else {
var statearr_28657_28728 = state_28609__$1;
(statearr_28657_28728[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (34))){
var inst_28578 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
if(cljs.core.truth_(inst_28578)){
var statearr_28658_28729 = state_28609__$1;
(statearr_28658_28729[(1)] = (38));

} else {
var statearr_28659_28730 = state_28609__$1;
(statearr_28659_28730[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (17))){
var state_28609__$1 = state_28609;
var statearr_28660_28731 = state_28609__$1;
(statearr_28660_28731[(2)] = recompile_dependents);

(statearr_28660_28731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (3))){
var state_28609__$1 = state_28609;
var statearr_28661_28732 = state_28609__$1;
(statearr_28661_28732[(2)] = null);

(statearr_28661_28732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (12))){
var inst_28499 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28662_28733 = state_28609__$1;
(statearr_28662_28733[(2)] = inst_28499);

(statearr_28662_28733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (2))){
var inst_28461 = (state_28609[(13)]);
var inst_28468 = cljs.core.seq.call(null,inst_28461);
var inst_28469 = inst_28468;
var inst_28470 = null;
var inst_28471 = (0);
var inst_28472 = (0);
var state_28609__$1 = (function (){var statearr_28663 = state_28609;
(statearr_28663[(7)] = inst_28471);

(statearr_28663[(8)] = inst_28472);

(statearr_28663[(9)] = inst_28470);

(statearr_28663[(10)] = inst_28469);

return statearr_28663;
})();
var statearr_28664_28734 = state_28609__$1;
(statearr_28664_28734[(2)] = null);

(statearr_28664_28734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (23))){
var inst_28522 = (state_28609[(19)]);
var inst_28530 = (state_28609[(23)]);
var inst_28525 = (state_28609[(24)]);
var inst_28526 = (state_28609[(25)]);
var inst_28528 = (state_28609[(26)]);
var inst_28533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28535 = (function (){var all_files = inst_28522;
var res_SINGLEQUOTE_ = inst_28525;
var res = inst_28526;
var files_not_loaded = inst_28528;
var dependencies_that_loaded = inst_28530;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28533,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28534){
var map__28665 = p__28534;
var map__28665__$1 = (((((!((map__28665 == null))))?(((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var request_url = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28533,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28536 = cljs.core.reverse.call(null,inst_28530);
var inst_28537 = cljs.core.map.call(null,inst_28535,inst_28536);
var inst_28538 = cljs.core.pr_str.call(null,inst_28537);
var inst_28539 = figwheel.client.utils.log.call(null,inst_28538);
var state_28609__$1 = (function (){var statearr_28667 = state_28609;
(statearr_28667[(31)] = inst_28533);

return statearr_28667;
})();
var statearr_28668_28735 = state_28609__$1;
(statearr_28668_28735[(2)] = inst_28539);

(statearr_28668_28735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (35))){
var state_28609__$1 = state_28609;
var statearr_28669_28736 = state_28609__$1;
(statearr_28669_28736[(2)] = true);

(statearr_28669_28736[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (19))){
var inst_28512 = (state_28609[(12)]);
var inst_28518 = figwheel.client.file_reloading.expand_files.call(null,inst_28512);
var state_28609__$1 = state_28609;
var statearr_28670_28737 = state_28609__$1;
(statearr_28670_28737[(2)] = inst_28518);

(statearr_28670_28737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (11))){
var state_28609__$1 = state_28609;
var statearr_28671_28738 = state_28609__$1;
(statearr_28671_28738[(2)] = null);

(statearr_28671_28738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (9))){
var inst_28501 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28672_28739 = state_28609__$1;
(statearr_28672_28739[(2)] = inst_28501);

(statearr_28672_28739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (5))){
var inst_28471 = (state_28609[(7)]);
var inst_28472 = (state_28609[(8)]);
var inst_28474 = (inst_28472 < inst_28471);
var inst_28475 = inst_28474;
var state_28609__$1 = state_28609;
if(cljs.core.truth_(inst_28475)){
var statearr_28673_28740 = state_28609__$1;
(statearr_28673_28740[(1)] = (7));

} else {
var statearr_28674_28741 = state_28609__$1;
(statearr_28674_28741[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (14))){
var inst_28482 = (state_28609[(22)]);
var inst_28491 = cljs.core.first.call(null,inst_28482);
var inst_28492 = figwheel.client.file_reloading.eval_body.call(null,inst_28491,opts);
var inst_28493 = cljs.core.next.call(null,inst_28482);
var inst_28469 = inst_28493;
var inst_28470 = null;
var inst_28471 = (0);
var inst_28472 = (0);
var state_28609__$1 = (function (){var statearr_28675 = state_28609;
(statearr_28675[(7)] = inst_28471);

(statearr_28675[(8)] = inst_28472);

(statearr_28675[(9)] = inst_28470);

(statearr_28675[(10)] = inst_28469);

(statearr_28675[(32)] = inst_28492);

return statearr_28675;
})();
var statearr_28676_28742 = state_28609__$1;
(statearr_28676_28742[(2)] = null);

(statearr_28676_28742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (45))){
var state_28609__$1 = state_28609;
var statearr_28677_28743 = state_28609__$1;
(statearr_28677_28743[(2)] = null);

(statearr_28677_28743[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (26))){
var inst_28522 = (state_28609[(19)]);
var inst_28530 = (state_28609[(23)]);
var inst_28525 = (state_28609[(24)]);
var inst_28526 = (state_28609[(25)]);
var inst_28528 = (state_28609[(26)]);
var inst_28545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28547 = (function (){var all_files = inst_28522;
var res_SINGLEQUOTE_ = inst_28525;
var res = inst_28526;
var files_not_loaded = inst_28528;
var dependencies_that_loaded = inst_28530;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28545,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28546){
var map__28678 = p__28546;
var map__28678__$1 = (((((!((map__28678 == null))))?(((((map__28678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var namespace = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28545,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28548 = cljs.core.map.call(null,inst_28547,inst_28526);
var inst_28549 = cljs.core.pr_str.call(null,inst_28548);
var inst_28550 = figwheel.client.utils.log.call(null,inst_28549);
var inst_28551 = (function (){var all_files = inst_28522;
var res_SINGLEQUOTE_ = inst_28525;
var res = inst_28526;
var files_not_loaded = inst_28528;
var dependencies_that_loaded = inst_28530;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28545,inst_28547,inst_28548,inst_28549,inst_28550,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28522,inst_28530,inst_28525,inst_28526,inst_28528,inst_28545,inst_28547,inst_28548,inst_28549,inst_28550,state_val_28610,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28552 = setTimeout(inst_28551,(10));
var state_28609__$1 = (function (){var statearr_28680 = state_28609;
(statearr_28680[(33)] = inst_28545);

(statearr_28680[(34)] = inst_28550);

return statearr_28680;
})();
var statearr_28681_28744 = state_28609__$1;
(statearr_28681_28744[(2)] = inst_28552);

(statearr_28681_28744[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (16))){
var state_28609__$1 = state_28609;
var statearr_28682_28745 = state_28609__$1;
(statearr_28682_28745[(2)] = reload_dependents);

(statearr_28682_28745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (38))){
var inst_28562 = (state_28609[(16)]);
var inst_28580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28562);
var state_28609__$1 = state_28609;
var statearr_28683_28746 = state_28609__$1;
(statearr_28683_28746[(2)] = inst_28580);

(statearr_28683_28746[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (30))){
var state_28609__$1 = state_28609;
var statearr_28684_28747 = state_28609__$1;
(statearr_28684_28747[(2)] = null);

(statearr_28684_28747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (10))){
var inst_28482 = (state_28609[(22)]);
var inst_28484 = cljs.core.chunked_seq_QMARK_.call(null,inst_28482);
var state_28609__$1 = state_28609;
if(inst_28484){
var statearr_28685_28748 = state_28609__$1;
(statearr_28685_28748[(1)] = (13));

} else {
var statearr_28686_28749 = state_28609__$1;
(statearr_28686_28749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (18))){
var inst_28516 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
if(cljs.core.truth_(inst_28516)){
var statearr_28687_28750 = state_28609__$1;
(statearr_28687_28750[(1)] = (19));

} else {
var statearr_28688_28751 = state_28609__$1;
(statearr_28688_28751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (42))){
var state_28609__$1 = state_28609;
var statearr_28689_28752 = state_28609__$1;
(statearr_28689_28752[(2)] = null);

(statearr_28689_28752[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (37))){
var inst_28575 = (state_28609[(2)]);
var state_28609__$1 = state_28609;
var statearr_28690_28753 = state_28609__$1;
(statearr_28690_28753[(2)] = inst_28575);

(statearr_28690_28753[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28610 === (8))){
var inst_28482 = (state_28609[(22)]);
var inst_28469 = (state_28609[(10)]);
var inst_28482__$1 = cljs.core.seq.call(null,inst_28469);
var state_28609__$1 = (function (){var statearr_28691 = state_28609;
(statearr_28691[(22)] = inst_28482__$1);

return statearr_28691;
})();
if(inst_28482__$1){
var statearr_28692_28754 = state_28609__$1;
(statearr_28692_28754[(1)] = (10));

} else {
var statearr_28693_28755 = state_28609__$1;
(statearr_28693_28755[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24622__auto__,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____0 = (function (){
var statearr_28694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28694[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__);

(statearr_28694[(1)] = (1));

return statearr_28694;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____1 = (function (state_28609){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_28609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e28695){if((e28695 instanceof Object)){
var ex__24626__auto__ = e28695;
var statearr_28696_28756 = state_28609;
(statearr_28696_28756[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28757 = state_28609;
state_28609 = G__28757;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__ = function(state_28609){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____1.call(this,state_28609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24684__auto__ = (function (){var statearr_28697 = f__24683__auto__.call(null);
(statearr_28697[(6)] = c__24682__auto__);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__,map__28454,map__28454__$1,opts,before_jsload,on_jsload,reload_dependents,map__28455,map__28455__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24682__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28760,link){
var map__28761 = p__28760;
var map__28761__$1 = (((((!((map__28761 == null))))?(((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var file = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28761,map__28761__$1,file){
return (function (p1__28758_SHARP_,p2__28759_SHARP_){
if(cljs.core._EQ_.call(null,p1__28758_SHARP_,p2__28759_SHARP_)){
return p1__28758_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28761,map__28761__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28764){
var map__28765 = p__28764;
var map__28765__$1 = (((((!((map__28765 == null))))?(((((map__28765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);
var match_length = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28763_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28763_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28767_SHARP_,p2__28768_SHARP_){
return cljs.core.assoc.call(null,p1__28767_SHARP_,cljs.core.get.call(null,p2__28768_SHARP_,key),p2__28768_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28769 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28769);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28769);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28770,p__28771){
var map__28772 = p__28770;
var map__28772__$1 = (((((!((map__28772 == null))))?(((((map__28772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);
var on_cssload = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28773 = p__28771;
var map__28773__$1 = (((((!((map__28773 == null))))?(((((map__28773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var files_msg = map__28773__$1;
var files = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1570528832913
