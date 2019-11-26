// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.async');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return (typeof Promise !== 'undefined');
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__6623__auto___9374 = (function (){var o__6623__auto__ = (function (){var o__6623__auto__ = Promise;
return (o__6623__auto__["resolve"]).call(o__6623__auto__);
})();
return (o__6623__auto__["then"]).call(o__6623__auto__,callback);
})();
(o__6623__auto___9374["catch"]).call(o__6623__auto___9374,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_;

return goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate;
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_;
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(devtools.async._STAR_installed_STAR_){
return null;
} else {
devtools.async._STAR_installed_STAR_ = true;

var G__9375_9376 = Error;
var target__6628__auto___9377 = G__9375_9376;
if(cljs.core.truth_(target__6628__auto___9377)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9375_9376)].join(''),"\n","target__6628__auto__"].join('')));
}

(target__6628__auto___9377["stackTraceLimit"] = Infinity);


devtools.async.install_async_set_immediate_BANG_.call(null);

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(devtools.async._STAR_installed_STAR_){
devtools.async._STAR_installed_STAR_ = false;

return devtools.async.uninstall_async_set_immediate_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=async.js.map?rel=1574245009507
