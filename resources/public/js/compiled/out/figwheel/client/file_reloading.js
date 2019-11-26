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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28991_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28991_SHARP_));
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
var seq__28992 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28993 = null;
var count__28994 = (0);
var i__28995 = (0);
while(true){
if((i__28995 < count__28994)){
var n = cljs.core._nth.call(null,chunk__28993,i__28995);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28996 = seq__28992;
var G__28997 = chunk__28993;
var G__28998 = count__28994;
var G__28999 = (i__28995 + (1));
seq__28992 = G__28996;
chunk__28993 = G__28997;
count__28994 = G__28998;
i__28995 = G__28999;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28992);
if(temp__5720__auto__){
var seq__28992__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28992__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28992__$1);
var G__29000 = cljs.core.chunk_rest.call(null,seq__28992__$1);
var G__29001 = c__4550__auto__;
var G__29002 = cljs.core.count.call(null,c__4550__auto__);
var G__29003 = (0);
seq__28992 = G__29000;
chunk__28993 = G__29001;
count__28994 = G__29002;
i__28995 = G__29003;
continue;
} else {
var n = cljs.core.first.call(null,seq__28992__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29004 = cljs.core.next.call(null,seq__28992__$1);
var G__29005 = null;
var G__29006 = (0);
var G__29007 = (0);
seq__28992 = G__29004;
chunk__28993 = G__29005;
count__28994 = G__29006;
i__28995 = G__29007;
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
return cljs.core.some.call(null,(function (p__29008){
var vec__29009 = p__29008;
var _ = cljs.core.nth.call(null,vec__29009,(0),null);
var v = cljs.core.nth.call(null,vec__29009,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__29012){
var vec__29013 = p__29012;
var k = cljs.core.nth.call(null,vec__29013,(0),null);
var v = cljs.core.nth.call(null,vec__29013,(1),null);
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

var seq__29025_29033 = cljs.core.seq.call(null,deps);
var chunk__29026_29034 = null;
var count__29027_29035 = (0);
var i__29028_29036 = (0);
while(true){
if((i__29028_29036 < count__29027_29035)){
var dep_29037 = cljs.core._nth.call(null,chunk__29026_29034,i__29028_29036);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29037;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29037));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29037,(depth + (1)),state);
} else {
}


var G__29038 = seq__29025_29033;
var G__29039 = chunk__29026_29034;
var G__29040 = count__29027_29035;
var G__29041 = (i__29028_29036 + (1));
seq__29025_29033 = G__29038;
chunk__29026_29034 = G__29039;
count__29027_29035 = G__29040;
i__29028_29036 = G__29041;
continue;
} else {
var temp__5720__auto___29042 = cljs.core.seq.call(null,seq__29025_29033);
if(temp__5720__auto___29042){
var seq__29025_29043__$1 = temp__5720__auto___29042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29025_29043__$1)){
var c__4550__auto___29044 = cljs.core.chunk_first.call(null,seq__29025_29043__$1);
var G__29045 = cljs.core.chunk_rest.call(null,seq__29025_29043__$1);
var G__29046 = c__4550__auto___29044;
var G__29047 = cljs.core.count.call(null,c__4550__auto___29044);
var G__29048 = (0);
seq__29025_29033 = G__29045;
chunk__29026_29034 = G__29046;
count__29027_29035 = G__29047;
i__29028_29036 = G__29048;
continue;
} else {
var dep_29049 = cljs.core.first.call(null,seq__29025_29043__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29049;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29049));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29049,(depth + (1)),state);
} else {
}


var G__29050 = cljs.core.next.call(null,seq__29025_29043__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__29025_29033 = G__29050;
chunk__29026_29034 = G__29051;
count__29027_29035 = G__29052;
i__29028_29036 = G__29053;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29029){
var vec__29030 = p__29029;
var seq__29031 = cljs.core.seq.call(null,vec__29030);
var first__29032 = cljs.core.first.call(null,seq__29031);
var seq__29031__$1 = cljs.core.next.call(null,seq__29031);
var x = first__29032;
var xs = seq__29031__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29030,seq__29031,first__29032,seq__29031__$1,x,xs,get_deps__$1){
return (function (p1__29016_SHARP_){
return clojure.set.difference.call(null,p1__29016_SHARP_,x);
});})(vec__29030,seq__29031,first__29032,seq__29031__$1,x,xs,get_deps__$1))
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
var seq__29054 = cljs.core.seq.call(null,provides);
var chunk__29055 = null;
var count__29056 = (0);
var i__29057 = (0);
while(true){
if((i__29057 < count__29056)){
var prov = cljs.core._nth.call(null,chunk__29055,i__29057);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29066_29074 = cljs.core.seq.call(null,requires);
var chunk__29067_29075 = null;
var count__29068_29076 = (0);
var i__29069_29077 = (0);
while(true){
if((i__29069_29077 < count__29068_29076)){
var req_29078 = cljs.core._nth.call(null,chunk__29067_29075,i__29069_29077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29078,prov);


var G__29079 = seq__29066_29074;
var G__29080 = chunk__29067_29075;
var G__29081 = count__29068_29076;
var G__29082 = (i__29069_29077 + (1));
seq__29066_29074 = G__29079;
chunk__29067_29075 = G__29080;
count__29068_29076 = G__29081;
i__29069_29077 = G__29082;
continue;
} else {
var temp__5720__auto___29083 = cljs.core.seq.call(null,seq__29066_29074);
if(temp__5720__auto___29083){
var seq__29066_29084__$1 = temp__5720__auto___29083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29066_29084__$1)){
var c__4550__auto___29085 = cljs.core.chunk_first.call(null,seq__29066_29084__$1);
var G__29086 = cljs.core.chunk_rest.call(null,seq__29066_29084__$1);
var G__29087 = c__4550__auto___29085;
var G__29088 = cljs.core.count.call(null,c__4550__auto___29085);
var G__29089 = (0);
seq__29066_29074 = G__29086;
chunk__29067_29075 = G__29087;
count__29068_29076 = G__29088;
i__29069_29077 = G__29089;
continue;
} else {
var req_29090 = cljs.core.first.call(null,seq__29066_29084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29090,prov);


var G__29091 = cljs.core.next.call(null,seq__29066_29084__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__29066_29074 = G__29091;
chunk__29067_29075 = G__29092;
count__29068_29076 = G__29093;
i__29069_29077 = G__29094;
continue;
}
} else {
}
}
break;
}


var G__29095 = seq__29054;
var G__29096 = chunk__29055;
var G__29097 = count__29056;
var G__29098 = (i__29057 + (1));
seq__29054 = G__29095;
chunk__29055 = G__29096;
count__29056 = G__29097;
i__29057 = G__29098;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29054);
if(temp__5720__auto__){
var seq__29054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29054__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29054__$1);
var G__29099 = cljs.core.chunk_rest.call(null,seq__29054__$1);
var G__29100 = c__4550__auto__;
var G__29101 = cljs.core.count.call(null,c__4550__auto__);
var G__29102 = (0);
seq__29054 = G__29099;
chunk__29055 = G__29100;
count__29056 = G__29101;
i__29057 = G__29102;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29054__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29070_29103 = cljs.core.seq.call(null,requires);
var chunk__29071_29104 = null;
var count__29072_29105 = (0);
var i__29073_29106 = (0);
while(true){
if((i__29073_29106 < count__29072_29105)){
var req_29107 = cljs.core._nth.call(null,chunk__29071_29104,i__29073_29106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29107,prov);


var G__29108 = seq__29070_29103;
var G__29109 = chunk__29071_29104;
var G__29110 = count__29072_29105;
var G__29111 = (i__29073_29106 + (1));
seq__29070_29103 = G__29108;
chunk__29071_29104 = G__29109;
count__29072_29105 = G__29110;
i__29073_29106 = G__29111;
continue;
} else {
var temp__5720__auto___29112__$1 = cljs.core.seq.call(null,seq__29070_29103);
if(temp__5720__auto___29112__$1){
var seq__29070_29113__$1 = temp__5720__auto___29112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29070_29113__$1)){
var c__4550__auto___29114 = cljs.core.chunk_first.call(null,seq__29070_29113__$1);
var G__29115 = cljs.core.chunk_rest.call(null,seq__29070_29113__$1);
var G__29116 = c__4550__auto___29114;
var G__29117 = cljs.core.count.call(null,c__4550__auto___29114);
var G__29118 = (0);
seq__29070_29103 = G__29115;
chunk__29071_29104 = G__29116;
count__29072_29105 = G__29117;
i__29073_29106 = G__29118;
continue;
} else {
var req_29119 = cljs.core.first.call(null,seq__29070_29113__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29119,prov);


var G__29120 = cljs.core.next.call(null,seq__29070_29113__$1);
var G__29121 = null;
var G__29122 = (0);
var G__29123 = (0);
seq__29070_29103 = G__29120;
chunk__29071_29104 = G__29121;
count__29072_29105 = G__29122;
i__29073_29106 = G__29123;
continue;
}
} else {
}
}
break;
}


var G__29124 = cljs.core.next.call(null,seq__29054__$1);
var G__29125 = null;
var G__29126 = (0);
var G__29127 = (0);
seq__29054 = G__29124;
chunk__29055 = G__29125;
count__29056 = G__29126;
i__29057 = G__29127;
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
var seq__29128_29132 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29129_29133 = null;
var count__29130_29134 = (0);
var i__29131_29135 = (0);
while(true){
if((i__29131_29135 < count__29130_29134)){
var ns_29136 = cljs.core._nth.call(null,chunk__29129_29133,i__29131_29135);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29136);


var G__29137 = seq__29128_29132;
var G__29138 = chunk__29129_29133;
var G__29139 = count__29130_29134;
var G__29140 = (i__29131_29135 + (1));
seq__29128_29132 = G__29137;
chunk__29129_29133 = G__29138;
count__29130_29134 = G__29139;
i__29131_29135 = G__29140;
continue;
} else {
var temp__5720__auto___29141 = cljs.core.seq.call(null,seq__29128_29132);
if(temp__5720__auto___29141){
var seq__29128_29142__$1 = temp__5720__auto___29141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128_29142__$1)){
var c__4550__auto___29143 = cljs.core.chunk_first.call(null,seq__29128_29142__$1);
var G__29144 = cljs.core.chunk_rest.call(null,seq__29128_29142__$1);
var G__29145 = c__4550__auto___29143;
var G__29146 = cljs.core.count.call(null,c__4550__auto___29143);
var G__29147 = (0);
seq__29128_29132 = G__29144;
chunk__29129_29133 = G__29145;
count__29130_29134 = G__29146;
i__29131_29135 = G__29147;
continue;
} else {
var ns_29148 = cljs.core.first.call(null,seq__29128_29142__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29148);


var G__29149 = cljs.core.next.call(null,seq__29128_29142__$1);
var G__29150 = null;
var G__29151 = (0);
var G__29152 = (0);
seq__29128_29132 = G__29149;
chunk__29129_29133 = G__29150;
count__29130_29134 = G__29151;
i__29131_29135 = G__29152;
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
var G__29153__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29154__i = 0, G__29154__a = new Array(arguments.length -  0);
while (G__29154__i < G__29154__a.length) {G__29154__a[G__29154__i] = arguments[G__29154__i + 0]; ++G__29154__i;}
  args = new cljs.core.IndexedSeq(G__29154__a,0,null);
} 
return G__29153__delegate.call(this,args);};
G__29153.cljs$lang$maxFixedArity = 0;
G__29153.cljs$lang$applyTo = (function (arglist__29155){
var args = cljs.core.seq(arglist__29155);
return G__29153__delegate(args);
});
G__29153.cljs$core$IFn$_invoke$arity$variadic = G__29153__delegate;
return G__29153;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29156_SHARP_,p2__29157_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29156_SHARP_)),p2__29157_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29158_SHARP_,p2__29159_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29158_SHARP_),p2__29159_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29160 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29160.addCallback(((function (G__29160){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29160))
);

G__29160.addErrback(((function (G__29160){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29160))
);

return G__29160;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29161){if((e29161 instanceof Error)){
var e = e29161;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29161;

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
}catch (e29162){if((e29162 instanceof Error)){
var e = e29162;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29162;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29163 = cljs.core._EQ_;
var expr__29164 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29163.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29164))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29163.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29164))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29163.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29164))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29163,expr__29164){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29163,expr__29164))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29166,callback){
var map__29167 = p__29166;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var file_msg = map__29167__$1;
var request_url = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29167,map__29167__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29167,map__29167__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_29207){
var state_val_29208 = (state_29207[(1)]);
if((state_val_29208 === (7))){
var inst_29203 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
var statearr_29209_29236 = state_29207__$1;
(statearr_29209_29236[(2)] = inst_29203);

(statearr_29209_29236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (1))){
var state_29207__$1 = state_29207;
var statearr_29210_29237 = state_29207__$1;
(statearr_29210_29237[(2)] = null);

(statearr_29210_29237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (4))){
var inst_29171 = (state_29207[(7)]);
var inst_29171__$1 = (state_29207[(2)]);
var state_29207__$1 = (function (){var statearr_29211 = state_29207;
(statearr_29211[(7)] = inst_29171__$1);

return statearr_29211;
})();
if(cljs.core.truth_(inst_29171__$1)){
var statearr_29212_29238 = state_29207__$1;
(statearr_29212_29238[(1)] = (5));

} else {
var statearr_29213_29239 = state_29207__$1;
(statearr_29213_29239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (15))){
var inst_29188 = (state_29207[(8)]);
var inst_29185 = (state_29207[(9)]);
var inst_29190 = inst_29188.call(null,inst_29185);
var state_29207__$1 = state_29207;
var statearr_29214_29240 = state_29207__$1;
(statearr_29214_29240[(2)] = inst_29190);

(statearr_29214_29240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (13))){
var inst_29197 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
var statearr_29215_29241 = state_29207__$1;
(statearr_29215_29241[(2)] = inst_29197);

(statearr_29215_29241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (6))){
var state_29207__$1 = state_29207;
var statearr_29216_29242 = state_29207__$1;
(statearr_29216_29242[(2)] = null);

(statearr_29216_29242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (17))){
var inst_29194 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
var statearr_29217_29243 = state_29207__$1;
(statearr_29217_29243[(2)] = inst_29194);

(statearr_29217_29243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (3))){
var inst_29205 = (state_29207[(2)]);
var state_29207__$1 = state_29207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29207__$1,inst_29205);
} else {
if((state_val_29208 === (12))){
var state_29207__$1 = state_29207;
var statearr_29218_29244 = state_29207__$1;
(statearr_29218_29244[(2)] = null);

(statearr_29218_29244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (2))){
var state_29207__$1 = state_29207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29207__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29208 === (11))){
var inst_29176 = (state_29207[(10)]);
var inst_29183 = figwheel.client.file_reloading.blocking_load.call(null,inst_29176);
var state_29207__$1 = state_29207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29207__$1,(14),inst_29183);
} else {
if((state_val_29208 === (9))){
var inst_29176 = (state_29207[(10)]);
var state_29207__$1 = state_29207;
if(cljs.core.truth_(inst_29176)){
var statearr_29219_29245 = state_29207__$1;
(statearr_29219_29245[(1)] = (11));

} else {
var statearr_29220_29246 = state_29207__$1;
(statearr_29220_29246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (5))){
var inst_29171 = (state_29207[(7)]);
var inst_29177 = (state_29207[(11)]);
var inst_29176 = cljs.core.nth.call(null,inst_29171,(0),null);
var inst_29177__$1 = cljs.core.nth.call(null,inst_29171,(1),null);
var state_29207__$1 = (function (){var statearr_29221 = state_29207;
(statearr_29221[(11)] = inst_29177__$1);

(statearr_29221[(10)] = inst_29176);

return statearr_29221;
})();
if(cljs.core.truth_(inst_29177__$1)){
var statearr_29222_29247 = state_29207__$1;
(statearr_29222_29247[(1)] = (8));

} else {
var statearr_29223_29248 = state_29207__$1;
(statearr_29223_29248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (14))){
var inst_29188 = (state_29207[(8)]);
var inst_29176 = (state_29207[(10)]);
var inst_29185 = (state_29207[(2)]);
var inst_29186 = console.log("Loading!",inst_29176);
var inst_29187 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29188__$1 = cljs.core.get.call(null,inst_29187,inst_29176);
var state_29207__$1 = (function (){var statearr_29224 = state_29207;
(statearr_29224[(8)] = inst_29188__$1);

(statearr_29224[(12)] = inst_29186);

(statearr_29224[(9)] = inst_29185);

return statearr_29224;
})();
if(cljs.core.truth_(inst_29188__$1)){
var statearr_29225_29249 = state_29207__$1;
(statearr_29225_29249[(1)] = (15));

} else {
var statearr_29226_29250 = state_29207__$1;
(statearr_29226_29250[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (16))){
var inst_29185 = (state_29207[(9)]);
var inst_29192 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29185);
var state_29207__$1 = state_29207;
var statearr_29227_29251 = state_29207__$1;
(statearr_29227_29251[(2)] = inst_29192);

(statearr_29227_29251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (10))){
var inst_29199 = (state_29207[(2)]);
var state_29207__$1 = (function (){var statearr_29228 = state_29207;
(statearr_29228[(13)] = inst_29199);

return statearr_29228;
})();
var statearr_29229_29252 = state_29207__$1;
(statearr_29229_29252[(2)] = null);

(statearr_29229_29252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29208 === (8))){
var inst_29177 = (state_29207[(11)]);
var inst_29179 = console.log("Evaling!",inst_29177);
var inst_29180 = eval(inst_29177);
var state_29207__$1 = (function (){var statearr_29230 = state_29207;
(statearr_29230[(14)] = inst_29179);

return statearr_29230;
})();
var statearr_29231_29253 = state_29207__$1;
(statearr_29231_29253[(2)] = inst_29180);

(statearr_29231_29253[(1)] = (10));


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
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23487__auto__ = null;
var figwheel$client$file_reloading$state_machine__23487__auto____0 = (function (){
var statearr_29232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29232[(0)] = figwheel$client$file_reloading$state_machine__23487__auto__);

(statearr_29232[(1)] = (1));

return statearr_29232;
});
var figwheel$client$file_reloading$state_machine__23487__auto____1 = (function (state_29207){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_29207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e29233){if((e29233 instanceof Object)){
var ex__23490__auto__ = e29233;
var statearr_29234_29254 = state_29207;
(statearr_29234_29254[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29255 = state_29207;
state_29207 = G__29255;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23487__auto__ = function(state_29207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23487__auto____1.call(this,state_29207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23487__auto____0;
figwheel$client$file_reloading$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23487__auto____1;
return figwheel$client$file_reloading$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_29235 = f__23584__auto__.call(null);
(statearr_29235[(6)] = c__23583__auto__);

return statearr_29235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29257 = arguments.length;
switch (G__29257) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29259,callback){
var map__29260 = p__29259;
var map__29260__$1 = (((((!((map__29260 == null))))?(((((map__29260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29260):map__29260);
var file_msg = map__29260__$1;
var namespace = cljs.core.get.call(null,map__29260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29260,map__29260__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29260,map__29260__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29262){
var map__29263 = p__29262;
var map__29263__$1 = (((((!((map__29263 == null))))?(((((map__29263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29263):map__29263);
var file_msg = map__29263__$1;
var namespace = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29265){
var map__29266 = p__29265;
var map__29266__$1 = (((((!((map__29266 == null))))?(((((map__29266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29266):map__29266);
var file_msg = map__29266__$1;
var namespace = cljs.core.get.call(null,map__29266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29268,callback){
var map__29269 = p__29268;
var map__29269__$1 = (((((!((map__29269 == null))))?(((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29269):map__29269);
var file_msg = map__29269__$1;
var request_url = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23583__auto___29319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___29319,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___29319,out){
return (function (state_29304){
var state_val_29305 = (state_29304[(1)]);
if((state_val_29305 === (1))){
var inst_29278 = cljs.core.seq.call(null,files);
var inst_29279 = cljs.core.first.call(null,inst_29278);
var inst_29280 = cljs.core.next.call(null,inst_29278);
var inst_29281 = files;
var state_29304__$1 = (function (){var statearr_29306 = state_29304;
(statearr_29306[(7)] = inst_29281);

(statearr_29306[(8)] = inst_29279);

(statearr_29306[(9)] = inst_29280);

return statearr_29306;
})();
var statearr_29307_29320 = state_29304__$1;
(statearr_29307_29320[(2)] = null);

(statearr_29307_29320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (2))){
var inst_29281 = (state_29304[(7)]);
var inst_29287 = (state_29304[(10)]);
var inst_29286 = cljs.core.seq.call(null,inst_29281);
var inst_29287__$1 = cljs.core.first.call(null,inst_29286);
var inst_29288 = cljs.core.next.call(null,inst_29286);
var inst_29289 = (inst_29287__$1 == null);
var inst_29290 = cljs.core.not.call(null,inst_29289);
var state_29304__$1 = (function (){var statearr_29308 = state_29304;
(statearr_29308[(10)] = inst_29287__$1);

(statearr_29308[(11)] = inst_29288);

return statearr_29308;
})();
if(inst_29290){
var statearr_29309_29321 = state_29304__$1;
(statearr_29309_29321[(1)] = (4));

} else {
var statearr_29310_29322 = state_29304__$1;
(statearr_29310_29322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (3))){
var inst_29302 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29304__$1,inst_29302);
} else {
if((state_val_29305 === (4))){
var inst_29287 = (state_29304[(10)]);
var inst_29292 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29287);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(7),inst_29292);
} else {
if((state_val_29305 === (5))){
var inst_29298 = cljs.core.async.close_BANG_.call(null,out);
var state_29304__$1 = state_29304;
var statearr_29311_29323 = state_29304__$1;
(statearr_29311_29323[(2)] = inst_29298);

(statearr_29311_29323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (6))){
var inst_29300 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29312_29324 = state_29304__$1;
(statearr_29312_29324[(2)] = inst_29300);

(statearr_29312_29324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (7))){
var inst_29288 = (state_29304[(11)]);
var inst_29294 = (state_29304[(2)]);
var inst_29295 = cljs.core.async.put_BANG_.call(null,out,inst_29294);
var inst_29281 = inst_29288;
var state_29304__$1 = (function (){var statearr_29313 = state_29304;
(statearr_29313[(7)] = inst_29281);

(statearr_29313[(12)] = inst_29295);

return statearr_29313;
})();
var statearr_29314_29325 = state_29304__$1;
(statearr_29314_29325[(2)] = null);

(statearr_29314_29325[(1)] = (2));


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
});})(c__23583__auto___29319,out))
;
return ((function (switch__23486__auto__,c__23583__auto___29319,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____0 = (function (){
var statearr_29315 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29315[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__);

(statearr_29315[(1)] = (1));

return statearr_29315;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____1 = (function (state_29304){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_29304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e29316){if((e29316 instanceof Object)){
var ex__23490__auto__ = e29316;
var statearr_29317_29326 = state_29304;
(statearr_29317_29326[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29327 = state_29304;
state_29304 = G__29327;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__ = function(state_29304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____1.call(this,state_29304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___29319,out))
})();
var state__23585__auto__ = (function (){var statearr_29318 = f__23584__auto__.call(null);
(statearr_29318[(6)] = c__23583__auto___29319);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___29319,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29328,opts){
var map__29329 = p__29328;
var map__29329__$1 = (((((!((map__29329 == null))))?(((((map__29329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29329):map__29329);
var eval_body = cljs.core.get.call(null,map__29329__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29331){var e = e29331;
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
return (function (p1__29332_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29332_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29333){
var vec__29334 = p__29333;
var k = cljs.core.nth.call(null,vec__29334,(0),null);
var v = cljs.core.nth.call(null,vec__29334,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29337){
var vec__29338 = p__29337;
var k = cljs.core.nth.call(null,vec__29338,(0),null);
var v = cljs.core.nth.call(null,vec__29338,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29344,p__29345){
var map__29346 = p__29344;
var map__29346__$1 = (((((!((map__29346 == null))))?(((((map__29346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29346):map__29346);
var opts = map__29346__$1;
var before_jsload = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29347 = p__29345;
var map__29347__$1 = (((((!((map__29347 == null))))?(((((map__29347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29347):map__29347);
var msg = map__29347__$1;
var files = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29501){
var state_val_29502 = (state_29501[(1)]);
if((state_val_29502 === (7))){
var inst_29362 = (state_29501[(7)]);
var inst_29361 = (state_29501[(8)]);
var inst_29364 = (state_29501[(9)]);
var inst_29363 = (state_29501[(10)]);
var inst_29369 = cljs.core._nth.call(null,inst_29362,inst_29364);
var inst_29370 = figwheel.client.file_reloading.eval_body.call(null,inst_29369,opts);
var inst_29371 = (inst_29364 + (1));
var tmp29503 = inst_29362;
var tmp29504 = inst_29361;
var tmp29505 = inst_29363;
var inst_29361__$1 = tmp29504;
var inst_29362__$1 = tmp29503;
var inst_29363__$1 = tmp29505;
var inst_29364__$1 = inst_29371;
var state_29501__$1 = (function (){var statearr_29506 = state_29501;
(statearr_29506[(7)] = inst_29362__$1);

(statearr_29506[(8)] = inst_29361__$1);

(statearr_29506[(9)] = inst_29364__$1);

(statearr_29506[(11)] = inst_29370);

(statearr_29506[(10)] = inst_29363__$1);

return statearr_29506;
})();
var statearr_29507_29590 = state_29501__$1;
(statearr_29507_29590[(2)] = null);

(statearr_29507_29590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (20))){
var inst_29404 = (state_29501[(12)]);
var inst_29412 = figwheel.client.file_reloading.sort_files.call(null,inst_29404);
var state_29501__$1 = state_29501;
var statearr_29508_29591 = state_29501__$1;
(statearr_29508_29591[(2)] = inst_29412);

(statearr_29508_29591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (27))){
var state_29501__$1 = state_29501;
var statearr_29509_29592 = state_29501__$1;
(statearr_29509_29592[(2)] = null);

(statearr_29509_29592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (1))){
var inst_29353 = (state_29501[(13)]);
var inst_29350 = before_jsload.call(null,files);
var inst_29351 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29352 = (function (){return ((function (inst_29353,inst_29350,inst_29351,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29341_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29341_SHARP_);
});
;})(inst_29353,inst_29350,inst_29351,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29353__$1 = cljs.core.filter.call(null,inst_29352,files);
var inst_29354 = cljs.core.not_empty.call(null,inst_29353__$1);
var state_29501__$1 = (function (){var statearr_29510 = state_29501;
(statearr_29510[(14)] = inst_29351);

(statearr_29510[(15)] = inst_29350);

(statearr_29510[(13)] = inst_29353__$1);

return statearr_29510;
})();
if(cljs.core.truth_(inst_29354)){
var statearr_29511_29593 = state_29501__$1;
(statearr_29511_29593[(1)] = (2));

} else {
var statearr_29512_29594 = state_29501__$1;
(statearr_29512_29594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (24))){
var state_29501__$1 = state_29501;
var statearr_29513_29595 = state_29501__$1;
(statearr_29513_29595[(2)] = null);

(statearr_29513_29595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (39))){
var inst_29454 = (state_29501[(16)]);
var state_29501__$1 = state_29501;
var statearr_29514_29596 = state_29501__$1;
(statearr_29514_29596[(2)] = inst_29454);

(statearr_29514_29596[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (46))){
var inst_29496 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29515_29597 = state_29501__$1;
(statearr_29515_29597[(2)] = inst_29496);

(statearr_29515_29597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (4))){
var inst_29398 = (state_29501[(2)]);
var inst_29399 = cljs.core.List.EMPTY;
var inst_29400 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29399);
var inst_29401 = (function (){return ((function (inst_29398,inst_29399,inst_29400,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29342_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29342_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29342_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29342_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29398,inst_29399,inst_29400,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29402 = cljs.core.filter.call(null,inst_29401,files);
var inst_29403 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29404 = cljs.core.concat.call(null,inst_29402,inst_29403);
var state_29501__$1 = (function (){var statearr_29516 = state_29501;
(statearr_29516[(12)] = inst_29404);

(statearr_29516[(17)] = inst_29400);

(statearr_29516[(18)] = inst_29398);

return statearr_29516;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29517_29598 = state_29501__$1;
(statearr_29517_29598[(1)] = (16));

} else {
var statearr_29518_29599 = state_29501__$1;
(statearr_29518_29599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (15))){
var inst_29388 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29519_29600 = state_29501__$1;
(statearr_29519_29600[(2)] = inst_29388);

(statearr_29519_29600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (21))){
var inst_29414 = (state_29501[(19)]);
var inst_29414__$1 = (state_29501[(2)]);
var inst_29415 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29414__$1);
var state_29501__$1 = (function (){var statearr_29520 = state_29501;
(statearr_29520[(19)] = inst_29414__$1);

return statearr_29520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29501__$1,(22),inst_29415);
} else {
if((state_val_29502 === (31))){
var inst_29499 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else {
if((state_val_29502 === (32))){
var inst_29454 = (state_29501[(16)]);
var inst_29459 = inst_29454.cljs$lang$protocol_mask$partition0$;
var inst_29460 = (inst_29459 & (64));
var inst_29461 = inst_29454.cljs$core$ISeq$;
var inst_29462 = (cljs.core.PROTOCOL_SENTINEL === inst_29461);
var inst_29463 = ((inst_29460) || (inst_29462));
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29463)){
var statearr_29521_29601 = state_29501__$1;
(statearr_29521_29601[(1)] = (35));

} else {
var statearr_29522_29602 = state_29501__$1;
(statearr_29522_29602[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (40))){
var inst_29476 = (state_29501[(20)]);
var inst_29475 = (state_29501[(2)]);
var inst_29476__$1 = cljs.core.get.call(null,inst_29475,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29477 = cljs.core.get.call(null,inst_29475,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29478 = cljs.core.not_empty.call(null,inst_29476__$1);
var state_29501__$1 = (function (){var statearr_29523 = state_29501;
(statearr_29523[(21)] = inst_29477);

(statearr_29523[(20)] = inst_29476__$1);

return statearr_29523;
})();
if(cljs.core.truth_(inst_29478)){
var statearr_29524_29603 = state_29501__$1;
(statearr_29524_29603[(1)] = (41));

} else {
var statearr_29525_29604 = state_29501__$1;
(statearr_29525_29604[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (33))){
var state_29501__$1 = state_29501;
var statearr_29526_29605 = state_29501__$1;
(statearr_29526_29605[(2)] = false);

(statearr_29526_29605[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (13))){
var inst_29374 = (state_29501[(22)]);
var inst_29378 = cljs.core.chunk_first.call(null,inst_29374);
var inst_29379 = cljs.core.chunk_rest.call(null,inst_29374);
var inst_29380 = cljs.core.count.call(null,inst_29378);
var inst_29361 = inst_29379;
var inst_29362 = inst_29378;
var inst_29363 = inst_29380;
var inst_29364 = (0);
var state_29501__$1 = (function (){var statearr_29527 = state_29501;
(statearr_29527[(7)] = inst_29362);

(statearr_29527[(8)] = inst_29361);

(statearr_29527[(9)] = inst_29364);

(statearr_29527[(10)] = inst_29363);

return statearr_29527;
})();
var statearr_29528_29606 = state_29501__$1;
(statearr_29528_29606[(2)] = null);

(statearr_29528_29606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (22))){
var inst_29418 = (state_29501[(23)]);
var inst_29417 = (state_29501[(24)]);
var inst_29414 = (state_29501[(19)]);
var inst_29422 = (state_29501[(25)]);
var inst_29417__$1 = (state_29501[(2)]);
var inst_29418__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29417__$1);
var inst_29419 = (function (){var all_files = inst_29414;
var res_SINGLEQUOTE_ = inst_29417__$1;
var res = inst_29418__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29418,inst_29417,inst_29414,inst_29422,inst_29417__$1,inst_29418__$1,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29343_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29343_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29418,inst_29417,inst_29414,inst_29422,inst_29417__$1,inst_29418__$1,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29420 = cljs.core.filter.call(null,inst_29419,inst_29417__$1);
var inst_29421 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29422__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29421);
var inst_29423 = cljs.core.not_empty.call(null,inst_29422__$1);
var state_29501__$1 = (function (){var statearr_29529 = state_29501;
(statearr_29529[(23)] = inst_29418__$1);

(statearr_29529[(24)] = inst_29417__$1);

(statearr_29529[(25)] = inst_29422__$1);

(statearr_29529[(26)] = inst_29420);

return statearr_29529;
})();
if(cljs.core.truth_(inst_29423)){
var statearr_29530_29607 = state_29501__$1;
(statearr_29530_29607[(1)] = (23));

} else {
var statearr_29531_29608 = state_29501__$1;
(statearr_29531_29608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (36))){
var state_29501__$1 = state_29501;
var statearr_29532_29609 = state_29501__$1;
(statearr_29532_29609[(2)] = false);

(statearr_29532_29609[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (41))){
var inst_29476 = (state_29501[(20)]);
var inst_29480 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29481 = cljs.core.map.call(null,inst_29480,inst_29476);
var inst_29482 = cljs.core.pr_str.call(null,inst_29481);
var inst_29483 = ["figwheel-no-load meta-data: ",inst_29482].join('');
var inst_29484 = figwheel.client.utils.log.call(null,inst_29483);
var state_29501__$1 = state_29501;
var statearr_29533_29610 = state_29501__$1;
(statearr_29533_29610[(2)] = inst_29484);

(statearr_29533_29610[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (43))){
var inst_29477 = (state_29501[(21)]);
var inst_29487 = (state_29501[(2)]);
var inst_29488 = cljs.core.not_empty.call(null,inst_29477);
var state_29501__$1 = (function (){var statearr_29534 = state_29501;
(statearr_29534[(27)] = inst_29487);

return statearr_29534;
})();
if(cljs.core.truth_(inst_29488)){
var statearr_29535_29611 = state_29501__$1;
(statearr_29535_29611[(1)] = (44));

} else {
var statearr_29536_29612 = state_29501__$1;
(statearr_29536_29612[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (29))){
var inst_29454 = (state_29501[(16)]);
var inst_29418 = (state_29501[(23)]);
var inst_29417 = (state_29501[(24)]);
var inst_29414 = (state_29501[(19)]);
var inst_29422 = (state_29501[(25)]);
var inst_29420 = (state_29501[(26)]);
var inst_29450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29453 = (function (){var all_files = inst_29414;
var res_SINGLEQUOTE_ = inst_29417;
var res = inst_29418;
var files_not_loaded = inst_29420;
var dependencies_that_loaded = inst_29422;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29454,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29450,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29452){
var map__29537 = p__29452;
var map__29537__$1 = (((((!((map__29537 == null))))?(((((map__29537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);
var namespace = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29454,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29450,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29454__$1 = cljs.core.group_by.call(null,inst_29453,inst_29420);
var inst_29456 = (inst_29454__$1 == null);
var inst_29457 = cljs.core.not.call(null,inst_29456);
var state_29501__$1 = (function (){var statearr_29539 = state_29501;
(statearr_29539[(16)] = inst_29454__$1);

(statearr_29539[(28)] = inst_29450);

return statearr_29539;
})();
if(inst_29457){
var statearr_29540_29613 = state_29501__$1;
(statearr_29540_29613[(1)] = (32));

} else {
var statearr_29541_29614 = state_29501__$1;
(statearr_29541_29614[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (44))){
var inst_29477 = (state_29501[(21)]);
var inst_29490 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29477);
var inst_29491 = cljs.core.pr_str.call(null,inst_29490);
var inst_29492 = ["not required: ",inst_29491].join('');
var inst_29493 = figwheel.client.utils.log.call(null,inst_29492);
var state_29501__$1 = state_29501;
var statearr_29542_29615 = state_29501__$1;
(statearr_29542_29615[(2)] = inst_29493);

(statearr_29542_29615[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (6))){
var inst_29395 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29543_29616 = state_29501__$1;
(statearr_29543_29616[(2)] = inst_29395);

(statearr_29543_29616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (28))){
var inst_29420 = (state_29501[(26)]);
var inst_29447 = (state_29501[(2)]);
var inst_29448 = cljs.core.not_empty.call(null,inst_29420);
var state_29501__$1 = (function (){var statearr_29544 = state_29501;
(statearr_29544[(29)] = inst_29447);

return statearr_29544;
})();
if(cljs.core.truth_(inst_29448)){
var statearr_29545_29617 = state_29501__$1;
(statearr_29545_29617[(1)] = (29));

} else {
var statearr_29546_29618 = state_29501__$1;
(statearr_29546_29618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (25))){
var inst_29418 = (state_29501[(23)]);
var inst_29434 = (state_29501[(2)]);
var inst_29435 = cljs.core.not_empty.call(null,inst_29418);
var state_29501__$1 = (function (){var statearr_29547 = state_29501;
(statearr_29547[(30)] = inst_29434);

return statearr_29547;
})();
if(cljs.core.truth_(inst_29435)){
var statearr_29548_29619 = state_29501__$1;
(statearr_29548_29619[(1)] = (26));

} else {
var statearr_29549_29620 = state_29501__$1;
(statearr_29549_29620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (34))){
var inst_29470 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29470)){
var statearr_29550_29621 = state_29501__$1;
(statearr_29550_29621[(1)] = (38));

} else {
var statearr_29551_29622 = state_29501__$1;
(statearr_29551_29622[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (17))){
var state_29501__$1 = state_29501;
var statearr_29552_29623 = state_29501__$1;
(statearr_29552_29623[(2)] = recompile_dependents);

(statearr_29552_29623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (3))){
var state_29501__$1 = state_29501;
var statearr_29553_29624 = state_29501__$1;
(statearr_29553_29624[(2)] = null);

(statearr_29553_29624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (12))){
var inst_29391 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29554_29625 = state_29501__$1;
(statearr_29554_29625[(2)] = inst_29391);

(statearr_29554_29625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (2))){
var inst_29353 = (state_29501[(13)]);
var inst_29360 = cljs.core.seq.call(null,inst_29353);
var inst_29361 = inst_29360;
var inst_29362 = null;
var inst_29363 = (0);
var inst_29364 = (0);
var state_29501__$1 = (function (){var statearr_29555 = state_29501;
(statearr_29555[(7)] = inst_29362);

(statearr_29555[(8)] = inst_29361);

(statearr_29555[(9)] = inst_29364);

(statearr_29555[(10)] = inst_29363);

return statearr_29555;
})();
var statearr_29556_29626 = state_29501__$1;
(statearr_29556_29626[(2)] = null);

(statearr_29556_29626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (23))){
var inst_29418 = (state_29501[(23)]);
var inst_29417 = (state_29501[(24)]);
var inst_29414 = (state_29501[(19)]);
var inst_29422 = (state_29501[(25)]);
var inst_29420 = (state_29501[(26)]);
var inst_29425 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29427 = (function (){var all_files = inst_29414;
var res_SINGLEQUOTE_ = inst_29417;
var res = inst_29418;
var files_not_loaded = inst_29420;
var dependencies_that_loaded = inst_29422;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29425,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29426){
var map__29557 = p__29426;
var map__29557__$1 = (((((!((map__29557 == null))))?(((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var request_url = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29425,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29428 = cljs.core.reverse.call(null,inst_29422);
var inst_29429 = cljs.core.map.call(null,inst_29427,inst_29428);
var inst_29430 = cljs.core.pr_str.call(null,inst_29429);
var inst_29431 = figwheel.client.utils.log.call(null,inst_29430);
var state_29501__$1 = (function (){var statearr_29559 = state_29501;
(statearr_29559[(31)] = inst_29425);

return statearr_29559;
})();
var statearr_29560_29627 = state_29501__$1;
(statearr_29560_29627[(2)] = inst_29431);

(statearr_29560_29627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (35))){
var state_29501__$1 = state_29501;
var statearr_29561_29628 = state_29501__$1;
(statearr_29561_29628[(2)] = true);

(statearr_29561_29628[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (19))){
var inst_29404 = (state_29501[(12)]);
var inst_29410 = figwheel.client.file_reloading.expand_files.call(null,inst_29404);
var state_29501__$1 = state_29501;
var statearr_29562_29629 = state_29501__$1;
(statearr_29562_29629[(2)] = inst_29410);

(statearr_29562_29629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (11))){
var state_29501__$1 = state_29501;
var statearr_29563_29630 = state_29501__$1;
(statearr_29563_29630[(2)] = null);

(statearr_29563_29630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (9))){
var inst_29393 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29564_29631 = state_29501__$1;
(statearr_29564_29631[(2)] = inst_29393);

(statearr_29564_29631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (5))){
var inst_29364 = (state_29501[(9)]);
var inst_29363 = (state_29501[(10)]);
var inst_29366 = (inst_29364 < inst_29363);
var inst_29367 = inst_29366;
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29367)){
var statearr_29565_29632 = state_29501__$1;
(statearr_29565_29632[(1)] = (7));

} else {
var statearr_29566_29633 = state_29501__$1;
(statearr_29566_29633[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (14))){
var inst_29374 = (state_29501[(22)]);
var inst_29383 = cljs.core.first.call(null,inst_29374);
var inst_29384 = figwheel.client.file_reloading.eval_body.call(null,inst_29383,opts);
var inst_29385 = cljs.core.next.call(null,inst_29374);
var inst_29361 = inst_29385;
var inst_29362 = null;
var inst_29363 = (0);
var inst_29364 = (0);
var state_29501__$1 = (function (){var statearr_29567 = state_29501;
(statearr_29567[(7)] = inst_29362);

(statearr_29567[(8)] = inst_29361);

(statearr_29567[(32)] = inst_29384);

(statearr_29567[(9)] = inst_29364);

(statearr_29567[(10)] = inst_29363);

return statearr_29567;
})();
var statearr_29568_29634 = state_29501__$1;
(statearr_29568_29634[(2)] = null);

(statearr_29568_29634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (45))){
var state_29501__$1 = state_29501;
var statearr_29569_29635 = state_29501__$1;
(statearr_29569_29635[(2)] = null);

(statearr_29569_29635[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (26))){
var inst_29418 = (state_29501[(23)]);
var inst_29417 = (state_29501[(24)]);
var inst_29414 = (state_29501[(19)]);
var inst_29422 = (state_29501[(25)]);
var inst_29420 = (state_29501[(26)]);
var inst_29437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29439 = (function (){var all_files = inst_29414;
var res_SINGLEQUOTE_ = inst_29417;
var res = inst_29418;
var files_not_loaded = inst_29420;
var dependencies_that_loaded = inst_29422;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29437,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29438){
var map__29570 = p__29438;
var map__29570__$1 = (((((!((map__29570 == null))))?(((((map__29570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29570):map__29570);
var namespace = cljs.core.get.call(null,map__29570__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29437,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29440 = cljs.core.map.call(null,inst_29439,inst_29418);
var inst_29441 = cljs.core.pr_str.call(null,inst_29440);
var inst_29442 = figwheel.client.utils.log.call(null,inst_29441);
var inst_29443 = (function (){var all_files = inst_29414;
var res_SINGLEQUOTE_ = inst_29417;
var res = inst_29418;
var files_not_loaded = inst_29420;
var dependencies_that_loaded = inst_29422;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29437,inst_29439,inst_29440,inst_29441,inst_29442,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29418,inst_29417,inst_29414,inst_29422,inst_29420,inst_29437,inst_29439,inst_29440,inst_29441,inst_29442,state_val_29502,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29444 = setTimeout(inst_29443,(10));
var state_29501__$1 = (function (){var statearr_29572 = state_29501;
(statearr_29572[(33)] = inst_29442);

(statearr_29572[(34)] = inst_29437);

return statearr_29572;
})();
var statearr_29573_29636 = state_29501__$1;
(statearr_29573_29636[(2)] = inst_29444);

(statearr_29573_29636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (16))){
var state_29501__$1 = state_29501;
var statearr_29574_29637 = state_29501__$1;
(statearr_29574_29637[(2)] = reload_dependents);

(statearr_29574_29637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (38))){
var inst_29454 = (state_29501[(16)]);
var inst_29472 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29454);
var state_29501__$1 = state_29501;
var statearr_29575_29638 = state_29501__$1;
(statearr_29575_29638[(2)] = inst_29472);

(statearr_29575_29638[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (30))){
var state_29501__$1 = state_29501;
var statearr_29576_29639 = state_29501__$1;
(statearr_29576_29639[(2)] = null);

(statearr_29576_29639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (10))){
var inst_29374 = (state_29501[(22)]);
var inst_29376 = cljs.core.chunked_seq_QMARK_.call(null,inst_29374);
var state_29501__$1 = state_29501;
if(inst_29376){
var statearr_29577_29640 = state_29501__$1;
(statearr_29577_29640[(1)] = (13));

} else {
var statearr_29578_29641 = state_29501__$1;
(statearr_29578_29641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (18))){
var inst_29408 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29408)){
var statearr_29579_29642 = state_29501__$1;
(statearr_29579_29642[(1)] = (19));

} else {
var statearr_29580_29643 = state_29501__$1;
(statearr_29580_29643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (42))){
var state_29501__$1 = state_29501;
var statearr_29581_29644 = state_29501__$1;
(statearr_29581_29644[(2)] = null);

(statearr_29581_29644[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (37))){
var inst_29467 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29582_29645 = state_29501__$1;
(statearr_29582_29645[(2)] = inst_29467);

(statearr_29582_29645[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (8))){
var inst_29374 = (state_29501[(22)]);
var inst_29361 = (state_29501[(8)]);
var inst_29374__$1 = cljs.core.seq.call(null,inst_29361);
var state_29501__$1 = (function (){var statearr_29583 = state_29501;
(statearr_29583[(22)] = inst_29374__$1);

return statearr_29583;
})();
if(inst_29374__$1){
var statearr_29584_29646 = state_29501__$1;
(statearr_29584_29646[(1)] = (10));

} else {
var statearr_29585_29647 = state_29501__$1;
(statearr_29585_29647[(1)] = (11));

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
});})(c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23486__auto__,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____0 = (function (){
var statearr_29586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29586[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__);

(statearr_29586[(1)] = (1));

return statearr_29586;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____1 = (function (state_29501){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_29501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e29587){if((e29587 instanceof Object)){
var ex__23490__auto__ = e29587;
var statearr_29588_29648 = state_29501;
(statearr_29588_29648[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29649 = state_29501;
state_29501 = G__29649;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23585__auto__ = (function (){var statearr_29589 = f__23584__auto__.call(null);
(statearr_29589[(6)] = c__23583__auto__);

return statearr_29589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__,map__29346,map__29346__$1,opts,before_jsload,on_jsload,reload_dependents,map__29347,map__29347__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23583__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29652,link){
var map__29653 = p__29652;
var map__29653__$1 = (((((!((map__29653 == null))))?(((((map__29653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29653):map__29653);
var file = cljs.core.get.call(null,map__29653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29653,map__29653__$1,file){
return (function (p1__29650_SHARP_,p2__29651_SHARP_){
if(cljs.core._EQ_.call(null,p1__29650_SHARP_,p2__29651_SHARP_)){
return p1__29650_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29653,map__29653__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29656){
var map__29657 = p__29656;
var map__29657__$1 = (((((!((map__29657 == null))))?(((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var match_length = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29655_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29655_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29659_SHARP_,p2__29660_SHARP_){
return cljs.core.assoc.call(null,p1__29659_SHARP_,cljs.core.get.call(null,p2__29660_SHARP_,key),p2__29660_SHARP_);
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
var loaded_f_datas_29661 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29661);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29661);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29662,p__29663){
var map__29664 = p__29662;
var map__29664__$1 = (((((!((map__29664 == null))))?(((((map__29664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);
var on_cssload = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29665 = p__29663;
var map__29665__$1 = (((((!((map__29665 == null))))?(((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);
var files_msg = map__29665__$1;
var files = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1574315934720
