// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30532){if((e30532 instanceof Error)){
var e = e30532;
return "Error: Unable to stringify";
} else {
throw e30532;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30535 = arguments.length;
switch (G__30535) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30533_SHARP_){
if(typeof p1__30533_SHARP_ === 'string'){
return p1__30533_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30533_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30538 = arguments.length;
var i__4731__auto___30539 = (0);
while(true){
if((i__4731__auto___30539 < len__4730__auto___30538)){
args__4736__auto__.push((arguments[i__4731__auto___30539]));

var G__30540 = (i__4731__auto___30539 + (1));
i__4731__auto___30539 = G__30540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30537){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30537));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30542 = arguments.length;
var i__4731__auto___30543 = (0);
while(true){
if((i__4731__auto___30543 < len__4730__auto___30542)){
args__4736__auto__.push((arguments[i__4731__auto___30543]));

var G__30544 = (i__4731__auto___30543 + (1));
i__4731__auto___30543 = G__30544;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30541){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30541));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30545){
var map__30546 = p__30545;
var map__30546__$1 = (((((!((map__30546 == null))))?(((((map__30546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30546):map__30546);
var message = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23583__auto___30625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___30625,ch){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___30625,ch){
return (function (state_30597){
var state_val_30598 = (state_30597[(1)]);
if((state_val_30598 === (7))){
var inst_30593 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30599_30626 = state_30597__$1;
(statearr_30599_30626[(2)] = inst_30593);

(statearr_30599_30626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (1))){
var state_30597__$1 = state_30597;
var statearr_30600_30627 = state_30597__$1;
(statearr_30600_30627[(2)] = null);

(statearr_30600_30627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (4))){
var inst_30550 = (state_30597[(7)]);
var inst_30550__$1 = (state_30597[(2)]);
var state_30597__$1 = (function (){var statearr_30601 = state_30597;
(statearr_30601[(7)] = inst_30550__$1);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30550__$1)){
var statearr_30602_30628 = state_30597__$1;
(statearr_30602_30628[(1)] = (5));

} else {
var statearr_30603_30629 = state_30597__$1;
(statearr_30603_30629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (15))){
var inst_30557 = (state_30597[(8)]);
var inst_30572 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30557);
var inst_30573 = cljs.core.first.call(null,inst_30572);
var inst_30574 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30573);
var inst_30575 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30574)].join('');
var inst_30576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30575);
var state_30597__$1 = state_30597;
var statearr_30604_30630 = state_30597__$1;
(statearr_30604_30630[(2)] = inst_30576);

(statearr_30604_30630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (13))){
var inst_30581 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30605_30631 = state_30597__$1;
(statearr_30605_30631[(2)] = inst_30581);

(statearr_30605_30631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (6))){
var state_30597__$1 = state_30597;
var statearr_30606_30632 = state_30597__$1;
(statearr_30606_30632[(2)] = null);

(statearr_30606_30632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (17))){
var inst_30579 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30607_30633 = state_30597__$1;
(statearr_30607_30633[(2)] = inst_30579);

(statearr_30607_30633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (3))){
var inst_30595 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30597__$1,inst_30595);
} else {
if((state_val_30598 === (12))){
var inst_30556 = (state_30597[(9)]);
var inst_30570 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30556,opts);
var state_30597__$1 = state_30597;
if(inst_30570){
var statearr_30608_30634 = state_30597__$1;
(statearr_30608_30634[(1)] = (15));

} else {
var statearr_30609_30635 = state_30597__$1;
(statearr_30609_30635[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (2))){
var state_30597__$1 = state_30597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30597__$1,(4),ch);
} else {
if((state_val_30598 === (11))){
var inst_30557 = (state_30597[(8)]);
var inst_30562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30563 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30557);
var inst_30564 = cljs.core.async.timeout.call(null,(1000));
var inst_30565 = [inst_30563,inst_30564];
var inst_30566 = (new cljs.core.PersistentVector(null,2,(5),inst_30562,inst_30565,null));
var state_30597__$1 = state_30597;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30597__$1,(14),inst_30566);
} else {
if((state_val_30598 === (9))){
var inst_30557 = (state_30597[(8)]);
var inst_30583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30584 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30557);
var inst_30585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30584);
var inst_30586 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30585)].join('');
var inst_30587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30586);
var state_30597__$1 = (function (){var statearr_30610 = state_30597;
(statearr_30610[(10)] = inst_30583);

return statearr_30610;
})();
var statearr_30611_30636 = state_30597__$1;
(statearr_30611_30636[(2)] = inst_30587);

(statearr_30611_30636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (5))){
var inst_30550 = (state_30597[(7)]);
var inst_30552 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30553 = (new cljs.core.PersistentArrayMap(null,2,inst_30552,null));
var inst_30554 = (new cljs.core.PersistentHashSet(null,inst_30553,null));
var inst_30555 = figwheel.client.focus_msgs.call(null,inst_30554,inst_30550);
var inst_30556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30555);
var inst_30557 = cljs.core.first.call(null,inst_30555);
var inst_30558 = figwheel.client.autoload_QMARK_.call(null);
var state_30597__$1 = (function (){var statearr_30612 = state_30597;
(statearr_30612[(8)] = inst_30557);

(statearr_30612[(9)] = inst_30556);

return statearr_30612;
})();
if(cljs.core.truth_(inst_30558)){
var statearr_30613_30637 = state_30597__$1;
(statearr_30613_30637[(1)] = (8));

} else {
var statearr_30614_30638 = state_30597__$1;
(statearr_30614_30638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (14))){
var inst_30568 = (state_30597[(2)]);
var state_30597__$1 = state_30597;
var statearr_30615_30639 = state_30597__$1;
(statearr_30615_30639[(2)] = inst_30568);

(statearr_30615_30639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (16))){
var state_30597__$1 = state_30597;
var statearr_30616_30640 = state_30597__$1;
(statearr_30616_30640[(2)] = null);

(statearr_30616_30640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (10))){
var inst_30589 = (state_30597[(2)]);
var state_30597__$1 = (function (){var statearr_30617 = state_30597;
(statearr_30617[(11)] = inst_30589);

return statearr_30617;
})();
var statearr_30618_30641 = state_30597__$1;
(statearr_30618_30641[(2)] = null);

(statearr_30618_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30598 === (8))){
var inst_30556 = (state_30597[(9)]);
var inst_30560 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30556,opts);
var state_30597__$1 = state_30597;
if(cljs.core.truth_(inst_30560)){
var statearr_30619_30642 = state_30597__$1;
(statearr_30619_30642[(1)] = (11));

} else {
var statearr_30620_30643 = state_30597__$1;
(statearr_30620_30643[(1)] = (12));

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
});})(c__23583__auto___30625,ch))
;
return ((function (switch__23486__auto__,c__23583__auto___30625,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____0 = (function (){
var statearr_30621 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30621[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__);

(statearr_30621[(1)] = (1));

return statearr_30621;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____1 = (function (state_30597){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_30597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e30622){if((e30622 instanceof Object)){
var ex__23490__auto__ = e30622;
var statearr_30623_30644 = state_30597;
(statearr_30623_30644[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30645 = state_30597;
state_30597 = G__30645;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__ = function(state_30597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____1.call(this,state_30597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23487__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___30625,ch))
})();
var state__23585__auto__ = (function (){var statearr_30624 = f__23584__auto__.call(null);
(statearr_30624[(6)] = c__23583__auto___30625);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___30625,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30646_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30646_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30648 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30648){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30647){if((e30647 instanceof Error)){
var e = e30647;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30648], null));
} else {
var e = e30647;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30648))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30649){
var map__30650 = p__30649;
var map__30650__$1 = (((((!((map__30650 == null))))?(((((map__30650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30650):map__30650);
var opts = map__30650__$1;
var build_id = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30650,map__30650__$1,opts,build_id){
return (function (p__30652){
var vec__30653 = p__30652;
var seq__30654 = cljs.core.seq.call(null,vec__30653);
var first__30655 = cljs.core.first.call(null,seq__30654);
var seq__30654__$1 = cljs.core.next.call(null,seq__30654);
var map__30656 = first__30655;
var map__30656__$1 = (((((!((map__30656 == null))))?(((((map__30656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30656):map__30656);
var msg = map__30656__$1;
var msg_name = cljs.core.get.call(null,map__30656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30654__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30653,seq__30654,first__30655,seq__30654__$1,map__30656,map__30656__$1,msg,msg_name,_,map__30650,map__30650__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30653,seq__30654,first__30655,seq__30654__$1,map__30656,map__30656__$1,msg,msg_name,_,map__30650,map__30650__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30650,map__30650__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30658){
var vec__30659 = p__30658;
var seq__30660 = cljs.core.seq.call(null,vec__30659);
var first__30661 = cljs.core.first.call(null,seq__30660);
var seq__30660__$1 = cljs.core.next.call(null,seq__30660);
var map__30662 = first__30661;
var map__30662__$1 = (((((!((map__30662 == null))))?(((((map__30662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30662):map__30662);
var msg = map__30662__$1;
var msg_name = cljs.core.get.call(null,map__30662__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30660__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30664){
var map__30665 = p__30664;
var map__30665__$1 = (((((!((map__30665 == null))))?(((((map__30665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);
var on_compile_warning = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30665,map__30665__$1,on_compile_warning,on_compile_fail){
return (function (p__30667){
var vec__30668 = p__30667;
var seq__30669 = cljs.core.seq.call(null,vec__30668);
var first__30670 = cljs.core.first.call(null,seq__30669);
var seq__30669__$1 = cljs.core.next.call(null,seq__30669);
var map__30671 = first__30670;
var map__30671__$1 = (((((!((map__30671 == null))))?(((((map__30671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30671):map__30671);
var msg = map__30671__$1;
var msg_name = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30669__$1;
var pred__30673 = cljs.core._EQ_;
var expr__30674 = msg_name;
if(cljs.core.truth_(pred__30673.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30674))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30673.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30674))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30665,map__30665__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__,msg_hist,msg_names,msg){
return (function (state_30763){
var state_val_30764 = (state_30763[(1)]);
if((state_val_30764 === (7))){
var inst_30683 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
if(cljs.core.truth_(inst_30683)){
var statearr_30765_30812 = state_30763__$1;
(statearr_30765_30812[(1)] = (8));

} else {
var statearr_30766_30813 = state_30763__$1;
(statearr_30766_30813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (20))){
var inst_30757 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30767_30814 = state_30763__$1;
(statearr_30767_30814[(2)] = inst_30757);

(statearr_30767_30814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (27))){
var inst_30753 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30768_30815 = state_30763__$1;
(statearr_30768_30815[(2)] = inst_30753);

(statearr_30768_30815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (1))){
var inst_30676 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30763__$1 = state_30763;
if(cljs.core.truth_(inst_30676)){
var statearr_30769_30816 = state_30763__$1;
(statearr_30769_30816[(1)] = (2));

} else {
var statearr_30770_30817 = state_30763__$1;
(statearr_30770_30817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (24))){
var inst_30755 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30771_30818 = state_30763__$1;
(statearr_30771_30818[(2)] = inst_30755);

(statearr_30771_30818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (4))){
var inst_30761 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30763__$1,inst_30761);
} else {
if((state_val_30764 === (15))){
var inst_30759 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30772_30819 = state_30763__$1;
(statearr_30772_30819[(2)] = inst_30759);

(statearr_30772_30819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (21))){
var inst_30712 = (state_30763[(2)]);
var inst_30713 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30714 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30713);
var state_30763__$1 = (function (){var statearr_30773 = state_30763;
(statearr_30773[(7)] = inst_30712);

return statearr_30773;
})();
var statearr_30774_30820 = state_30763__$1;
(statearr_30774_30820[(2)] = inst_30714);

(statearr_30774_30820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (31))){
var inst_30742 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30742){
var statearr_30775_30821 = state_30763__$1;
(statearr_30775_30821[(1)] = (34));

} else {
var statearr_30776_30822 = state_30763__$1;
(statearr_30776_30822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (32))){
var inst_30751 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30777_30823 = state_30763__$1;
(statearr_30777_30823[(2)] = inst_30751);

(statearr_30777_30823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (33))){
var inst_30738 = (state_30763[(2)]);
var inst_30739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30740 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30739);
var state_30763__$1 = (function (){var statearr_30778 = state_30763;
(statearr_30778[(8)] = inst_30738);

return statearr_30778;
})();
var statearr_30779_30824 = state_30763__$1;
(statearr_30779_30824[(2)] = inst_30740);

(statearr_30779_30824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (13))){
var inst_30697 = figwheel.client.heads_up.clear.call(null);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(16),inst_30697);
} else {
if((state_val_30764 === (22))){
var inst_30718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30719 = figwheel.client.heads_up.append_warning_message.call(null,inst_30718);
var state_30763__$1 = state_30763;
var statearr_30780_30825 = state_30763__$1;
(statearr_30780_30825[(2)] = inst_30719);

(statearr_30780_30825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (36))){
var inst_30749 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30781_30826 = state_30763__$1;
(statearr_30781_30826[(2)] = inst_30749);

(statearr_30781_30826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (29))){
var inst_30729 = (state_30763[(2)]);
var inst_30730 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30731 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30730);
var state_30763__$1 = (function (){var statearr_30782 = state_30763;
(statearr_30782[(9)] = inst_30729);

return statearr_30782;
})();
var statearr_30783_30827 = state_30763__$1;
(statearr_30783_30827[(2)] = inst_30731);

(statearr_30783_30827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (6))){
var inst_30678 = (state_30763[(10)]);
var state_30763__$1 = state_30763;
var statearr_30784_30828 = state_30763__$1;
(statearr_30784_30828[(2)] = inst_30678);

(statearr_30784_30828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (28))){
var inst_30725 = (state_30763[(2)]);
var inst_30726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30727 = figwheel.client.heads_up.display_warning.call(null,inst_30726);
var state_30763__$1 = (function (){var statearr_30785 = state_30763;
(statearr_30785[(11)] = inst_30725);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(29),inst_30727);
} else {
if((state_val_30764 === (25))){
var inst_30723 = figwheel.client.heads_up.clear.call(null);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(28),inst_30723);
} else {
if((state_val_30764 === (34))){
var inst_30744 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(37),inst_30744);
} else {
if((state_val_30764 === (17))){
var inst_30703 = (state_30763[(2)]);
var inst_30704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30705 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30704);
var state_30763__$1 = (function (){var statearr_30786 = state_30763;
(statearr_30786[(12)] = inst_30703);

return statearr_30786;
})();
var statearr_30787_30829 = state_30763__$1;
(statearr_30787_30829[(2)] = inst_30705);

(statearr_30787_30829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (3))){
var inst_30695 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30695){
var statearr_30788_30830 = state_30763__$1;
(statearr_30788_30830[(1)] = (13));

} else {
var statearr_30789_30831 = state_30763__$1;
(statearr_30789_30831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (12))){
var inst_30691 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30790_30832 = state_30763__$1;
(statearr_30790_30832[(2)] = inst_30691);

(statearr_30790_30832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (2))){
var inst_30678 = (state_30763[(10)]);
var inst_30678__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30763__$1 = (function (){var statearr_30791 = state_30763;
(statearr_30791[(10)] = inst_30678__$1);

return statearr_30791;
})();
if(cljs.core.truth_(inst_30678__$1)){
var statearr_30792_30833 = state_30763__$1;
(statearr_30792_30833[(1)] = (5));

} else {
var statearr_30793_30834 = state_30763__$1;
(statearr_30793_30834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (23))){
var inst_30721 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30721){
var statearr_30794_30835 = state_30763__$1;
(statearr_30794_30835[(1)] = (25));

} else {
var statearr_30795_30836 = state_30763__$1;
(statearr_30795_30836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (35))){
var state_30763__$1 = state_30763;
var statearr_30796_30837 = state_30763__$1;
(statearr_30796_30837[(2)] = null);

(statearr_30796_30837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (19))){
var inst_30716 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30716){
var statearr_30797_30838 = state_30763__$1;
(statearr_30797_30838[(1)] = (22));

} else {
var statearr_30798_30839 = state_30763__$1;
(statearr_30798_30839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (11))){
var inst_30687 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30799_30840 = state_30763__$1;
(statearr_30799_30840[(2)] = inst_30687);

(statearr_30799_30840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (9))){
var inst_30689 = figwheel.client.heads_up.clear.call(null);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(12),inst_30689);
} else {
if((state_val_30764 === (5))){
var inst_30680 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30763__$1 = state_30763;
var statearr_30800_30841 = state_30763__$1;
(statearr_30800_30841[(2)] = inst_30680);

(statearr_30800_30841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (14))){
var inst_30707 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30707){
var statearr_30801_30842 = state_30763__$1;
(statearr_30801_30842[(1)] = (18));

} else {
var statearr_30802_30843 = state_30763__$1;
(statearr_30802_30843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (26))){
var inst_30733 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30763__$1 = state_30763;
if(inst_30733){
var statearr_30803_30844 = state_30763__$1;
(statearr_30803_30844[(1)] = (30));

} else {
var statearr_30804_30845 = state_30763__$1;
(statearr_30804_30845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (16))){
var inst_30699 = (state_30763[(2)]);
var inst_30700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30701 = figwheel.client.heads_up.display_exception.call(null,inst_30700);
var state_30763__$1 = (function (){var statearr_30805 = state_30763;
(statearr_30805[(13)] = inst_30699);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(17),inst_30701);
} else {
if((state_val_30764 === (30))){
var inst_30735 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30736 = figwheel.client.heads_up.display_warning.call(null,inst_30735);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(33),inst_30736);
} else {
if((state_val_30764 === (10))){
var inst_30693 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30806_30846 = state_30763__$1;
(statearr_30806_30846[(2)] = inst_30693);

(statearr_30806_30846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (18))){
var inst_30709 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30710 = figwheel.client.heads_up.display_exception.call(null,inst_30709);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(21),inst_30710);
} else {
if((state_val_30764 === (37))){
var inst_30746 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30807_30847 = state_30763__$1;
(statearr_30807_30847[(2)] = inst_30746);

(statearr_30807_30847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (8))){
var inst_30685 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(11),inst_30685);
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
});})(c__23583__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23486__auto__,c__23583__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____0 = (function (){
var statearr_30808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__);

(statearr_30808[(1)] = (1));

return statearr_30808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____1 = (function (state_30763){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_30763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e30809){if((e30809 instanceof Object)){
var ex__23490__auto__ = e30809;
var statearr_30810_30848 = state_30763;
(statearr_30810_30848[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30849 = state_30763;
state_30763 = G__30849;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__ = function(state_30763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____1.call(this,state_30763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__,msg_hist,msg_names,msg))
})();
var state__23585__auto__ = (function (){var statearr_30811 = f__23584__auto__.call(null);
(statearr_30811[(6)] = c__23583__auto__);

return statearr_30811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__,msg_hist,msg_names,msg))
);

return c__23583__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23583__auto___30878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___30878,ch){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___30878,ch){
return (function (state_30864){
var state_val_30865 = (state_30864[(1)]);
if((state_val_30865 === (1))){
var state_30864__$1 = state_30864;
var statearr_30866_30879 = state_30864__$1;
(statearr_30866_30879[(2)] = null);

(statearr_30866_30879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (2))){
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30864__$1,(4),ch);
} else {
if((state_val_30865 === (3))){
var inst_30862 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30864__$1,inst_30862);
} else {
if((state_val_30865 === (4))){
var inst_30852 = (state_30864[(7)]);
var inst_30852__$1 = (state_30864[(2)]);
var state_30864__$1 = (function (){var statearr_30867 = state_30864;
(statearr_30867[(7)] = inst_30852__$1);

return statearr_30867;
})();
if(cljs.core.truth_(inst_30852__$1)){
var statearr_30868_30880 = state_30864__$1;
(statearr_30868_30880[(1)] = (5));

} else {
var statearr_30869_30881 = state_30864__$1;
(statearr_30869_30881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (5))){
var inst_30852 = (state_30864[(7)]);
var inst_30854 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30852);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30864__$1,(8),inst_30854);
} else {
if((state_val_30865 === (6))){
var state_30864__$1 = state_30864;
var statearr_30870_30882 = state_30864__$1;
(statearr_30870_30882[(2)] = null);

(statearr_30870_30882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (7))){
var inst_30860 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30871_30883 = state_30864__$1;
(statearr_30871_30883[(2)] = inst_30860);

(statearr_30871_30883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (8))){
var inst_30856 = (state_30864[(2)]);
var state_30864__$1 = (function (){var statearr_30872 = state_30864;
(statearr_30872[(8)] = inst_30856);

return statearr_30872;
})();
var statearr_30873_30884 = state_30864__$1;
(statearr_30873_30884[(2)] = null);

(statearr_30873_30884[(1)] = (2));


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
});})(c__23583__auto___30878,ch))
;
return ((function (switch__23486__auto__,c__23583__auto___30878,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23487__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23487__auto____0 = (function (){
var statearr_30874 = [null,null,null,null,null,null,null,null,null];
(statearr_30874[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23487__auto__);

(statearr_30874[(1)] = (1));

return statearr_30874;
});
var figwheel$client$heads_up_plugin_$_state_machine__23487__auto____1 = (function (state_30864){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_30864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e30875){if((e30875 instanceof Object)){
var ex__23490__auto__ = e30875;
var statearr_30876_30885 = state_30864;
(statearr_30876_30885[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30886 = state_30864;
state_30864 = G__30886;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23487__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23487__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23487__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23487__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___30878,ch))
})();
var state__23585__auto__ = (function (){var statearr_30877 = f__23584__auto__.call(null);
(statearr_30877[(6)] = c__23583__auto___30878);

return statearr_30877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___30878,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_30892){
var state_val_30893 = (state_30892[(1)]);
if((state_val_30893 === (1))){
var inst_30887 = cljs.core.async.timeout.call(null,(3000));
var state_30892__$1 = state_30892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30892__$1,(2),inst_30887);
} else {
if((state_val_30893 === (2))){
var inst_30889 = (state_30892[(2)]);
var inst_30890 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30892__$1 = (function (){var statearr_30894 = state_30892;
(statearr_30894[(7)] = inst_30889);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30892__$1,inst_30890);
} else {
return null;
}
}
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____0 = (function (){
var statearr_30895 = [null,null,null,null,null,null,null,null];
(statearr_30895[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__);

(statearr_30895[(1)] = (1));

return statearr_30895;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____1 = (function (state_30892){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_30892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e30896){if((e30896 instanceof Object)){
var ex__23490__auto__ = e30896;
var statearr_30897_30899 = state_30892;
(statearr_30897_30899[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30892;
state_30892 = G__30900;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__ = function(state_30892){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____1.call(this,state_30892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23487__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_30898 = f__23584__auto__.call(null);
(statearr_30898[(6)] = c__23583__auto__);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30907){
var state_val_30908 = (state_30907[(1)]);
if((state_val_30908 === (1))){
var inst_30901 = cljs.core.async.timeout.call(null,(2000));
var state_30907__$1 = state_30907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30907__$1,(2),inst_30901);
} else {
if((state_val_30908 === (2))){
var inst_30903 = (state_30907[(2)]);
var inst_30904 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30905 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30904);
var state_30907__$1 = (function (){var statearr_30909 = state_30907;
(statearr_30909[(7)] = inst_30903);

return statearr_30909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30907__$1,inst_30905);
} else {
return null;
}
}
});})(c__23583__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____0 = (function (){
var statearr_30910 = [null,null,null,null,null,null,null,null];
(statearr_30910[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__);

(statearr_30910[(1)] = (1));

return statearr_30910;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____1 = (function (state_30907){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_30907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e30911){if((e30911 instanceof Object)){
var ex__23490__auto__ = e30911;
var statearr_30912_30914 = state_30907;
(statearr_30912_30914[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30915 = state_30907;
state_30907 = G__30915;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__ = function(state_30907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____1.call(this,state_30907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__,figwheel_version,temp__5720__auto__))
})();
var state__23585__auto__ = (function (){var statearr_30913 = f__23584__auto__.call(null);
(statearr_30913[(6)] = c__23583__auto__);

return statearr_30913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__,figwheel_version,temp__5720__auto__))
);

return c__23583__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30916){
var map__30917 = p__30916;
var map__30917__$1 = (((((!((map__30917 == null))))?(((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var file = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30919 = "";
var G__30919__$1 = (cljs.core.truth_(file)?[G__30919,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30919);
var G__30919__$2 = (cljs.core.truth_(line)?[G__30919__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30919__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30919__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30919__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30920){
var map__30921 = p__30920;
var map__30921__$1 = (((((!((map__30921 == null))))?(((((map__30921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30921):map__30921);
var ed = map__30921__$1;
var formatted_exception = cljs.core.get.call(null,map__30921__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30921__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30921__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30923_30927 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30924_30928 = null;
var count__30925_30929 = (0);
var i__30926_30930 = (0);
while(true){
if((i__30926_30930 < count__30925_30929)){
var msg_30931 = cljs.core._nth.call(null,chunk__30924_30928,i__30926_30930);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30931);


var G__30932 = seq__30923_30927;
var G__30933 = chunk__30924_30928;
var G__30934 = count__30925_30929;
var G__30935 = (i__30926_30930 + (1));
seq__30923_30927 = G__30932;
chunk__30924_30928 = G__30933;
count__30925_30929 = G__30934;
i__30926_30930 = G__30935;
continue;
} else {
var temp__5720__auto___30936 = cljs.core.seq.call(null,seq__30923_30927);
if(temp__5720__auto___30936){
var seq__30923_30937__$1 = temp__5720__auto___30936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30923_30937__$1)){
var c__4550__auto___30938 = cljs.core.chunk_first.call(null,seq__30923_30937__$1);
var G__30939 = cljs.core.chunk_rest.call(null,seq__30923_30937__$1);
var G__30940 = c__4550__auto___30938;
var G__30941 = cljs.core.count.call(null,c__4550__auto___30938);
var G__30942 = (0);
seq__30923_30927 = G__30939;
chunk__30924_30928 = G__30940;
count__30925_30929 = G__30941;
i__30926_30930 = G__30942;
continue;
} else {
var msg_30943 = cljs.core.first.call(null,seq__30923_30937__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30943);


var G__30944 = cljs.core.next.call(null,seq__30923_30937__$1);
var G__30945 = null;
var G__30946 = (0);
var G__30947 = (0);
seq__30923_30927 = G__30944;
chunk__30924_30928 = G__30945;
count__30925_30929 = G__30946;
i__30926_30930 = G__30947;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",figwheel.client.file_line_column.call(null,ed)].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30948){
var map__30949 = p__30948;
var map__30949__$1 = (((((!((map__30949 == null))))?(((((map__30949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30949):map__30949);
var w = map__30949__$1;
var message = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30951 = cljs.core.seq.call(null,plugins);
var chunk__30952 = null;
var count__30953 = (0);
var i__30954 = (0);
while(true){
if((i__30954 < count__30953)){
var vec__30961 = cljs.core._nth.call(null,chunk__30952,i__30954);
var k = cljs.core.nth.call(null,vec__30961,(0),null);
var plugin = cljs.core.nth.call(null,vec__30961,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30967 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30951,chunk__30952,count__30953,i__30954,pl_30967,vec__30961,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30967.call(null,msg_hist);
});})(seq__30951,chunk__30952,count__30953,i__30954,pl_30967,vec__30961,k,plugin))
);
} else {
}


var G__30968 = seq__30951;
var G__30969 = chunk__30952;
var G__30970 = count__30953;
var G__30971 = (i__30954 + (1));
seq__30951 = G__30968;
chunk__30952 = G__30969;
count__30953 = G__30970;
i__30954 = G__30971;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30951);
if(temp__5720__auto__){
var seq__30951__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30951__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30951__$1);
var G__30972 = cljs.core.chunk_rest.call(null,seq__30951__$1);
var G__30973 = c__4550__auto__;
var G__30974 = cljs.core.count.call(null,c__4550__auto__);
var G__30975 = (0);
seq__30951 = G__30972;
chunk__30952 = G__30973;
count__30953 = G__30974;
i__30954 = G__30975;
continue;
} else {
var vec__30964 = cljs.core.first.call(null,seq__30951__$1);
var k = cljs.core.nth.call(null,vec__30964,(0),null);
var plugin = cljs.core.nth.call(null,vec__30964,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30976 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30951,chunk__30952,count__30953,i__30954,pl_30976,vec__30964,k,plugin,seq__30951__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30976.call(null,msg_hist);
});})(seq__30951,chunk__30952,count__30953,i__30954,pl_30976,vec__30964,k,plugin,seq__30951__$1,temp__5720__auto__))
);
} else {
}


var G__30977 = cljs.core.next.call(null,seq__30951__$1);
var G__30978 = null;
var G__30979 = (0);
var G__30980 = (0);
seq__30951 = G__30977;
chunk__30952 = G__30978;
count__30953 = G__30979;
i__30954 = G__30980;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30982 = arguments.length;
switch (G__30982) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30983_30988 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30984_30989 = null;
var count__30985_30990 = (0);
var i__30986_30991 = (0);
while(true){
if((i__30986_30991 < count__30985_30990)){
var msg_30992 = cljs.core._nth.call(null,chunk__30984_30989,i__30986_30991);
figwheel.client.socket.handle_incoming_message.call(null,msg_30992);


var G__30993 = seq__30983_30988;
var G__30994 = chunk__30984_30989;
var G__30995 = count__30985_30990;
var G__30996 = (i__30986_30991 + (1));
seq__30983_30988 = G__30993;
chunk__30984_30989 = G__30994;
count__30985_30990 = G__30995;
i__30986_30991 = G__30996;
continue;
} else {
var temp__5720__auto___30997 = cljs.core.seq.call(null,seq__30983_30988);
if(temp__5720__auto___30997){
var seq__30983_30998__$1 = temp__5720__auto___30997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30983_30998__$1)){
var c__4550__auto___30999 = cljs.core.chunk_first.call(null,seq__30983_30998__$1);
var G__31000 = cljs.core.chunk_rest.call(null,seq__30983_30998__$1);
var G__31001 = c__4550__auto___30999;
var G__31002 = cljs.core.count.call(null,c__4550__auto___30999);
var G__31003 = (0);
seq__30983_30988 = G__31000;
chunk__30984_30989 = G__31001;
count__30985_30990 = G__31002;
i__30986_30991 = G__31003;
continue;
} else {
var msg_31004 = cljs.core.first.call(null,seq__30983_30998__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31004);


var G__31005 = cljs.core.next.call(null,seq__30983_30998__$1);
var G__31006 = null;
var G__31007 = (0);
var G__31008 = (0);
seq__30983_30988 = G__31005;
chunk__30984_30989 = G__31006;
count__30985_30990 = G__31007;
i__30986_30991 = G__31008;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31013 = arguments.length;
var i__4731__auto___31014 = (0);
while(true){
if((i__4731__auto___31014 < len__4730__auto___31013)){
args__4736__auto__.push((arguments[i__4731__auto___31014]));

var G__31015 = (i__4731__auto___31014 + (1));
i__4731__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31010){
var map__31011 = p__31010;
var map__31011__$1 = (((((!((map__31011 == null))))?(((((map__31011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31011):map__31011);
var opts = map__31011__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31009));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31016){if((e31016 instanceof Error)){
var e = e31016;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31016;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31017){
var map__31018 = p__31017;
var map__31018__$1 = (((((!((map__31018 == null))))?(((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var msg_name = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1574315937423
