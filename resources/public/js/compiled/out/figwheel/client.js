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
}catch (e29125){if((e29125 instanceof Error)){
var e = e29125;
return "Error: Unable to stringify";
} else {
throw e29125;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29128 = arguments.length;
switch (G__29128) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29126_SHARP_){
if(typeof p1__29126_SHARP_ === 'string'){
return p1__29126_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29126_SHARP_);
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
var len__4730__auto___29131 = arguments.length;
var i__4731__auto___29132 = (0);
while(true){
if((i__4731__auto___29132 < len__4730__auto___29131)){
args__4736__auto__.push((arguments[i__4731__auto___29132]));

var G__29133 = (i__4731__auto___29132 + (1));
i__4731__auto___29132 = G__29133;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29130));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29135 = arguments.length;
var i__4731__auto___29136 = (0);
while(true){
if((i__4731__auto___29136 < len__4730__auto___29135)){
args__4736__auto__.push((arguments[i__4731__auto___29136]));

var G__29137 = (i__4731__auto___29136 + (1));
i__4731__auto___29136 = G__29137;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29134){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29134));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29138){
var map__29139 = p__29138;
var map__29139__$1 = (((((!((map__29139 == null))))?(((((map__29139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29139):map__29139);
var message = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24682__auto___29218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___29218,ch){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___29218,ch){
return (function (state_29190){
var state_val_29191 = (state_29190[(1)]);
if((state_val_29191 === (7))){
var inst_29186 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29192_29219 = state_29190__$1;
(statearr_29192_29219[(2)] = inst_29186);

(statearr_29192_29219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (1))){
var state_29190__$1 = state_29190;
var statearr_29193_29220 = state_29190__$1;
(statearr_29193_29220[(2)] = null);

(statearr_29193_29220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (4))){
var inst_29143 = (state_29190[(7)]);
var inst_29143__$1 = (state_29190[(2)]);
var state_29190__$1 = (function (){var statearr_29194 = state_29190;
(statearr_29194[(7)] = inst_29143__$1);

return statearr_29194;
})();
if(cljs.core.truth_(inst_29143__$1)){
var statearr_29195_29221 = state_29190__$1;
(statearr_29195_29221[(1)] = (5));

} else {
var statearr_29196_29222 = state_29190__$1;
(statearr_29196_29222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (15))){
var inst_29150 = (state_29190[(8)]);
var inst_29165 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29150);
var inst_29166 = cljs.core.first.call(null,inst_29165);
var inst_29167 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29166);
var inst_29168 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29167)].join('');
var inst_29169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29168);
var state_29190__$1 = state_29190;
var statearr_29197_29223 = state_29190__$1;
(statearr_29197_29223[(2)] = inst_29169);

(statearr_29197_29223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (13))){
var inst_29174 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29198_29224 = state_29190__$1;
(statearr_29198_29224[(2)] = inst_29174);

(statearr_29198_29224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (6))){
var state_29190__$1 = state_29190;
var statearr_29199_29225 = state_29190__$1;
(statearr_29199_29225[(2)] = null);

(statearr_29199_29225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (17))){
var inst_29172 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29200_29226 = state_29190__$1;
(statearr_29200_29226[(2)] = inst_29172);

(statearr_29200_29226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (3))){
var inst_29188 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29190__$1,inst_29188);
} else {
if((state_val_29191 === (12))){
var inst_29149 = (state_29190[(9)]);
var inst_29163 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29149,opts);
var state_29190__$1 = state_29190;
if(inst_29163){
var statearr_29201_29227 = state_29190__$1;
(statearr_29201_29227[(1)] = (15));

} else {
var statearr_29202_29228 = state_29190__$1;
(statearr_29202_29228[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (2))){
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(4),ch);
} else {
if((state_val_29191 === (11))){
var inst_29150 = (state_29190[(8)]);
var inst_29155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29156 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29150);
var inst_29157 = cljs.core.async.timeout.call(null,(1000));
var inst_29158 = [inst_29156,inst_29157];
var inst_29159 = (new cljs.core.PersistentVector(null,2,(5),inst_29155,inst_29158,null));
var state_29190__$1 = state_29190;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29190__$1,(14),inst_29159);
} else {
if((state_val_29191 === (9))){
var inst_29150 = (state_29190[(8)]);
var inst_29176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29177 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29150);
var inst_29178 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29177);
var inst_29179 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29178)].join('');
var inst_29180 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29179);
var state_29190__$1 = (function (){var statearr_29203 = state_29190;
(statearr_29203[(10)] = inst_29176);

return statearr_29203;
})();
var statearr_29204_29229 = state_29190__$1;
(statearr_29204_29229[(2)] = inst_29180);

(statearr_29204_29229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (5))){
var inst_29143 = (state_29190[(7)]);
var inst_29145 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29146 = (new cljs.core.PersistentArrayMap(null,2,inst_29145,null));
var inst_29147 = (new cljs.core.PersistentHashSet(null,inst_29146,null));
var inst_29148 = figwheel.client.focus_msgs.call(null,inst_29147,inst_29143);
var inst_29149 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29148);
var inst_29150 = cljs.core.first.call(null,inst_29148);
var inst_29151 = figwheel.client.autoload_QMARK_.call(null);
var state_29190__$1 = (function (){var statearr_29205 = state_29190;
(statearr_29205[(9)] = inst_29149);

(statearr_29205[(8)] = inst_29150);

return statearr_29205;
})();
if(cljs.core.truth_(inst_29151)){
var statearr_29206_29230 = state_29190__$1;
(statearr_29206_29230[(1)] = (8));

} else {
var statearr_29207_29231 = state_29190__$1;
(statearr_29207_29231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (14))){
var inst_29161 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29208_29232 = state_29190__$1;
(statearr_29208_29232[(2)] = inst_29161);

(statearr_29208_29232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (16))){
var state_29190__$1 = state_29190;
var statearr_29209_29233 = state_29190__$1;
(statearr_29209_29233[(2)] = null);

(statearr_29209_29233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (10))){
var inst_29182 = (state_29190[(2)]);
var state_29190__$1 = (function (){var statearr_29210 = state_29190;
(statearr_29210[(11)] = inst_29182);

return statearr_29210;
})();
var statearr_29211_29234 = state_29190__$1;
(statearr_29211_29234[(2)] = null);

(statearr_29211_29234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (8))){
var inst_29149 = (state_29190[(9)]);
var inst_29153 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29149,opts);
var state_29190__$1 = state_29190;
if(cljs.core.truth_(inst_29153)){
var statearr_29212_29235 = state_29190__$1;
(statearr_29212_29235[(1)] = (11));

} else {
var statearr_29213_29236 = state_29190__$1;
(statearr_29213_29236[(1)] = (12));

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
});})(c__24682__auto___29218,ch))
;
return ((function (switch__24622__auto__,c__24682__auto___29218,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____0 = (function (){
var statearr_29214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29214[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__);

(statearr_29214[(1)] = (1));

return statearr_29214;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____1 = (function (state_29190){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_29190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e29215){if((e29215 instanceof Object)){
var ex__24626__auto__ = e29215;
var statearr_29216_29237 = state_29190;
(statearr_29216_29237[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_29190;
state_29190 = G__29238;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__ = function(state_29190){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____1.call(this,state_29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24623__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___29218,ch))
})();
var state__24684__auto__ = (function (){var statearr_29217 = f__24683__auto__.call(null);
(statearr_29217[(6)] = c__24682__auto___29218);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___29218,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29239_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29239_SHARP_));
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
var base_path_29241 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29241){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e29240){if((e29240 instanceof Error)){
var e = e29240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29241], null));
} else {
var e = e29240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_29241))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29242){
var map__29243 = p__29242;
var map__29243__$1 = (((((!((map__29243 == null))))?(((((map__29243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);
var opts = map__29243__$1;
var build_id = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29243,map__29243__$1,opts,build_id){
return (function (p__29245){
var vec__29246 = p__29245;
var seq__29247 = cljs.core.seq.call(null,vec__29246);
var first__29248 = cljs.core.first.call(null,seq__29247);
var seq__29247__$1 = cljs.core.next.call(null,seq__29247);
var map__29249 = first__29248;
var map__29249__$1 = (((((!((map__29249 == null))))?(((((map__29249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);
var msg = map__29249__$1;
var msg_name = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29247__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29246,seq__29247,first__29248,seq__29247__$1,map__29249,map__29249__$1,msg,msg_name,_,map__29243,map__29243__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29246,seq__29247,first__29248,seq__29247__$1,map__29249,map__29249__$1,msg,msg_name,_,map__29243,map__29243__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29243,map__29243__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29251){
var vec__29252 = p__29251;
var seq__29253 = cljs.core.seq.call(null,vec__29252);
var first__29254 = cljs.core.first.call(null,seq__29253);
var seq__29253__$1 = cljs.core.next.call(null,seq__29253);
var map__29255 = first__29254;
var map__29255__$1 = (((((!((map__29255 == null))))?(((((map__29255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255):map__29255);
var msg = map__29255__$1;
var msg_name = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29253__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29257){
var map__29258 = p__29257;
var map__29258__$1 = (((((!((map__29258 == null))))?(((((map__29258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29258):map__29258);
var on_compile_warning = cljs.core.get.call(null,map__29258__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29258__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29258,map__29258__$1,on_compile_warning,on_compile_fail){
return (function (p__29260){
var vec__29261 = p__29260;
var seq__29262 = cljs.core.seq.call(null,vec__29261);
var first__29263 = cljs.core.first.call(null,seq__29262);
var seq__29262__$1 = cljs.core.next.call(null,seq__29262);
var map__29264 = first__29263;
var map__29264__$1 = (((((!((map__29264 == null))))?(((((map__29264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29264):map__29264);
var msg = map__29264__$1;
var msg_name = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29262__$1;
var pred__29266 = cljs.core._EQ_;
var expr__29267 = msg_name;
if(cljs.core.truth_(pred__29266.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29267))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29266.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29267))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29258,map__29258__$1,on_compile_warning,on_compile_fail))
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__,msg_hist,msg_names,msg){
return (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (7))){
var inst_29276 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
if(cljs.core.truth_(inst_29276)){
var statearr_29358_29405 = state_29356__$1;
(statearr_29358_29405[(1)] = (8));

} else {
var statearr_29359_29406 = state_29356__$1;
(statearr_29359_29406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (20))){
var inst_29350 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29360_29407 = state_29356__$1;
(statearr_29360_29407[(2)] = inst_29350);

(statearr_29360_29407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (27))){
var inst_29346 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29361_29408 = state_29356__$1;
(statearr_29361_29408[(2)] = inst_29346);

(statearr_29361_29408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (1))){
var inst_29269 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29356__$1 = state_29356;
if(cljs.core.truth_(inst_29269)){
var statearr_29362_29409 = state_29356__$1;
(statearr_29362_29409[(1)] = (2));

} else {
var statearr_29363_29410 = state_29356__$1;
(statearr_29363_29410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (24))){
var inst_29348 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29364_29411 = state_29356__$1;
(statearr_29364_29411[(2)] = inst_29348);

(statearr_29364_29411[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (4))){
var inst_29354 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
if((state_val_29357 === (15))){
var inst_29352 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29365_29412 = state_29356__$1;
(statearr_29365_29412[(2)] = inst_29352);

(statearr_29365_29412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (21))){
var inst_29305 = (state_29356[(2)]);
var inst_29306 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29307 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29306);
var state_29356__$1 = (function (){var statearr_29366 = state_29356;
(statearr_29366[(7)] = inst_29305);

return statearr_29366;
})();
var statearr_29367_29413 = state_29356__$1;
(statearr_29367_29413[(2)] = inst_29307);

(statearr_29367_29413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (31))){
var inst_29335 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29335){
var statearr_29368_29414 = state_29356__$1;
(statearr_29368_29414[(1)] = (34));

} else {
var statearr_29369_29415 = state_29356__$1;
(statearr_29369_29415[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (32))){
var inst_29344 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29370_29416 = state_29356__$1;
(statearr_29370_29416[(2)] = inst_29344);

(statearr_29370_29416[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (33))){
var inst_29331 = (state_29356[(2)]);
var inst_29332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29333 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29332);
var state_29356__$1 = (function (){var statearr_29371 = state_29356;
(statearr_29371[(8)] = inst_29331);

return statearr_29371;
})();
var statearr_29372_29417 = state_29356__$1;
(statearr_29372_29417[(2)] = inst_29333);

(statearr_29372_29417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (13))){
var inst_29290 = figwheel.client.heads_up.clear.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(16),inst_29290);
} else {
if((state_val_29357 === (22))){
var inst_29311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29312 = figwheel.client.heads_up.append_warning_message.call(null,inst_29311);
var state_29356__$1 = state_29356;
var statearr_29373_29418 = state_29356__$1;
(statearr_29373_29418[(2)] = inst_29312);

(statearr_29373_29418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (36))){
var inst_29342 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29374_29419 = state_29356__$1;
(statearr_29374_29419[(2)] = inst_29342);

(statearr_29374_29419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (29))){
var inst_29322 = (state_29356[(2)]);
var inst_29323 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29324 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29323);
var state_29356__$1 = (function (){var statearr_29375 = state_29356;
(statearr_29375[(9)] = inst_29322);

return statearr_29375;
})();
var statearr_29376_29420 = state_29356__$1;
(statearr_29376_29420[(2)] = inst_29324);

(statearr_29376_29420[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (6))){
var inst_29271 = (state_29356[(10)]);
var state_29356__$1 = state_29356;
var statearr_29377_29421 = state_29356__$1;
(statearr_29377_29421[(2)] = inst_29271);

(statearr_29377_29421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (28))){
var inst_29318 = (state_29356[(2)]);
var inst_29319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29320 = figwheel.client.heads_up.display_warning.call(null,inst_29319);
var state_29356__$1 = (function (){var statearr_29378 = state_29356;
(statearr_29378[(11)] = inst_29318);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(29),inst_29320);
} else {
if((state_val_29357 === (25))){
var inst_29316 = figwheel.client.heads_up.clear.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(28),inst_29316);
} else {
if((state_val_29357 === (34))){
var inst_29337 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(37),inst_29337);
} else {
if((state_val_29357 === (17))){
var inst_29296 = (state_29356[(2)]);
var inst_29297 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29298 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29297);
var state_29356__$1 = (function (){var statearr_29379 = state_29356;
(statearr_29379[(12)] = inst_29296);

return statearr_29379;
})();
var statearr_29380_29422 = state_29356__$1;
(statearr_29380_29422[(2)] = inst_29298);

(statearr_29380_29422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (3))){
var inst_29288 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29288){
var statearr_29381_29423 = state_29356__$1;
(statearr_29381_29423[(1)] = (13));

} else {
var statearr_29382_29424 = state_29356__$1;
(statearr_29382_29424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (12))){
var inst_29284 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29383_29425 = state_29356__$1;
(statearr_29383_29425[(2)] = inst_29284);

(statearr_29383_29425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (2))){
var inst_29271 = (state_29356[(10)]);
var inst_29271__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29356__$1 = (function (){var statearr_29384 = state_29356;
(statearr_29384[(10)] = inst_29271__$1);

return statearr_29384;
})();
if(cljs.core.truth_(inst_29271__$1)){
var statearr_29385_29426 = state_29356__$1;
(statearr_29385_29426[(1)] = (5));

} else {
var statearr_29386_29427 = state_29356__$1;
(statearr_29386_29427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (23))){
var inst_29314 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29314){
var statearr_29387_29428 = state_29356__$1;
(statearr_29387_29428[(1)] = (25));

} else {
var statearr_29388_29429 = state_29356__$1;
(statearr_29388_29429[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (35))){
var state_29356__$1 = state_29356;
var statearr_29389_29430 = state_29356__$1;
(statearr_29389_29430[(2)] = null);

(statearr_29389_29430[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (19))){
var inst_29309 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29309){
var statearr_29390_29431 = state_29356__$1;
(statearr_29390_29431[(1)] = (22));

} else {
var statearr_29391_29432 = state_29356__$1;
(statearr_29391_29432[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (11))){
var inst_29280 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29392_29433 = state_29356__$1;
(statearr_29392_29433[(2)] = inst_29280);

(statearr_29392_29433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (9))){
var inst_29282 = figwheel.client.heads_up.clear.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(12),inst_29282);
} else {
if((state_val_29357 === (5))){
var inst_29273 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29356__$1 = state_29356;
var statearr_29393_29434 = state_29356__$1;
(statearr_29393_29434[(2)] = inst_29273);

(statearr_29393_29434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (14))){
var inst_29300 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29300){
var statearr_29394_29435 = state_29356__$1;
(statearr_29394_29435[(1)] = (18));

} else {
var statearr_29395_29436 = state_29356__$1;
(statearr_29395_29436[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (26))){
var inst_29326 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29356__$1 = state_29356;
if(inst_29326){
var statearr_29396_29437 = state_29356__$1;
(statearr_29396_29437[(1)] = (30));

} else {
var statearr_29397_29438 = state_29356__$1;
(statearr_29397_29438[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (16))){
var inst_29292 = (state_29356[(2)]);
var inst_29293 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29294 = figwheel.client.heads_up.display_exception.call(null,inst_29293);
var state_29356__$1 = (function (){var statearr_29398 = state_29356;
(statearr_29398[(13)] = inst_29292);

return statearr_29398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(17),inst_29294);
} else {
if((state_val_29357 === (30))){
var inst_29328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29329 = figwheel.client.heads_up.display_warning.call(null,inst_29328);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(33),inst_29329);
} else {
if((state_val_29357 === (10))){
var inst_29286 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29399_29439 = state_29356__$1;
(statearr_29399_29439[(2)] = inst_29286);

(statearr_29399_29439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (18))){
var inst_29302 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29303 = figwheel.client.heads_up.display_exception.call(null,inst_29302);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(21),inst_29303);
} else {
if((state_val_29357 === (37))){
var inst_29339 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29400_29440 = state_29356__$1;
(statearr_29400_29440[(2)] = inst_29339);

(statearr_29400_29440[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (8))){
var inst_29278 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(11),inst_29278);
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
});})(c__24682__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24622__auto__,c__24682__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____0 = (function (){
var statearr_29401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29401[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__);

(statearr_29401[(1)] = (1));

return statearr_29401;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____1 = (function (state_29356){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e29402){if((e29402 instanceof Object)){
var ex__24626__auto__ = e29402;
var statearr_29403_29441 = state_29356;
(statearr_29403_29441[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29442 = state_29356;
state_29356 = G__29442;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__,msg_hist,msg_names,msg))
})();
var state__24684__auto__ = (function (){var statearr_29404 = f__24683__auto__.call(null);
(statearr_29404[(6)] = c__24682__auto__);

return statearr_29404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__,msg_hist,msg_names,msg))
);

return c__24682__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24682__auto___29471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___29471,ch){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___29471,ch){
return (function (state_29457){
var state_val_29458 = (state_29457[(1)]);
if((state_val_29458 === (1))){
var state_29457__$1 = state_29457;
var statearr_29459_29472 = state_29457__$1;
(statearr_29459_29472[(2)] = null);

(statearr_29459_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (2))){
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29457__$1,(4),ch);
} else {
if((state_val_29458 === (3))){
var inst_29455 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29457__$1,inst_29455);
} else {
if((state_val_29458 === (4))){
var inst_29445 = (state_29457[(7)]);
var inst_29445__$1 = (state_29457[(2)]);
var state_29457__$1 = (function (){var statearr_29460 = state_29457;
(statearr_29460[(7)] = inst_29445__$1);

return statearr_29460;
})();
if(cljs.core.truth_(inst_29445__$1)){
var statearr_29461_29473 = state_29457__$1;
(statearr_29461_29473[(1)] = (5));

} else {
var statearr_29462_29474 = state_29457__$1;
(statearr_29462_29474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (5))){
var inst_29445 = (state_29457[(7)]);
var inst_29447 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29445);
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29457__$1,(8),inst_29447);
} else {
if((state_val_29458 === (6))){
var state_29457__$1 = state_29457;
var statearr_29463_29475 = state_29457__$1;
(statearr_29463_29475[(2)] = null);

(statearr_29463_29475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (7))){
var inst_29453 = (state_29457[(2)]);
var state_29457__$1 = state_29457;
var statearr_29464_29476 = state_29457__$1;
(statearr_29464_29476[(2)] = inst_29453);

(statearr_29464_29476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29458 === (8))){
var inst_29449 = (state_29457[(2)]);
var state_29457__$1 = (function (){var statearr_29465 = state_29457;
(statearr_29465[(8)] = inst_29449);

return statearr_29465;
})();
var statearr_29466_29477 = state_29457__$1;
(statearr_29466_29477[(2)] = null);

(statearr_29466_29477[(1)] = (2));


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
});})(c__24682__auto___29471,ch))
;
return ((function (switch__24622__auto__,c__24682__auto___29471,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24623__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24623__auto____0 = (function (){
var statearr_29467 = [null,null,null,null,null,null,null,null,null];
(statearr_29467[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24623__auto__);

(statearr_29467[(1)] = (1));

return statearr_29467;
});
var figwheel$client$heads_up_plugin_$_state_machine__24623__auto____1 = (function (state_29457){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_29457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e29468){if((e29468 instanceof Object)){
var ex__24626__auto__ = e29468;
var statearr_29469_29478 = state_29457;
(statearr_29469_29478[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29479 = state_29457;
state_29457 = G__29479;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24623__auto__ = function(state_29457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24623__auto____1.call(this,state_29457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24623__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24623__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___29471,ch))
})();
var state__24684__auto__ = (function (){var statearr_29470 = f__24683__auto__.call(null);
(statearr_29470[(6)] = c__24682__auto___29471);

return statearr_29470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___29471,ch))
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__){
return (function (state_29485){
var state_val_29486 = (state_29485[(1)]);
if((state_val_29486 === (1))){
var inst_29480 = cljs.core.async.timeout.call(null,(3000));
var state_29485__$1 = state_29485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29485__$1,(2),inst_29480);
} else {
if((state_val_29486 === (2))){
var inst_29482 = (state_29485[(2)]);
var inst_29483 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29485__$1 = (function (){var statearr_29487 = state_29485;
(statearr_29487[(7)] = inst_29482);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29485__$1,inst_29483);
} else {
return null;
}
}
});})(c__24682__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____0 = (function (){
var statearr_29488 = [null,null,null,null,null,null,null,null];
(statearr_29488[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__);

(statearr_29488[(1)] = (1));

return statearr_29488;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____1 = (function (state_29485){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_29485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object)){
var ex__24626__auto__ = e29489;
var statearr_29490_29492 = state_29485;
(statearr_29490_29492[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29493 = state_29485;
state_29485 = G__29493;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__ = function(state_29485){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____1.call(this,state_29485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24623__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__))
})();
var state__24684__auto__ = (function (){var statearr_29491 = f__24683__auto__.call(null);
(statearr_29491[(6)] = c__24682__auto__);

return statearr_29491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__))
);

return c__24682__auto__;
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__,figwheel_version,temp__5720__auto__){
return (function (state_29500){
var state_val_29501 = (state_29500[(1)]);
if((state_val_29501 === (1))){
var inst_29494 = cljs.core.async.timeout.call(null,(2000));
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(2),inst_29494);
} else {
if((state_val_29501 === (2))){
var inst_29496 = (state_29500[(2)]);
var inst_29497 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29498 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29497);
var state_29500__$1 = (function (){var statearr_29502 = state_29500;
(statearr_29502[(7)] = inst_29496);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29500__$1,inst_29498);
} else {
return null;
}
}
});})(c__24682__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____0 = (function (){
var statearr_29503 = [null,null,null,null,null,null,null,null];
(statearr_29503[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__);

(statearr_29503[(1)] = (1));

return statearr_29503;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____1 = (function (state_29500){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_29500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e29504){if((e29504 instanceof Object)){
var ex__24626__auto__ = e29504;
var statearr_29505_29507 = state_29500;
(statearr_29505_29507[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29508 = state_29500;
state_29500 = G__29508;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__ = function(state_29500){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____1.call(this,state_29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__,figwheel_version,temp__5720__auto__))
})();
var state__24684__auto__ = (function (){var statearr_29506 = f__24683__auto__.call(null);
(statearr_29506[(6)] = c__24682__auto__);

return statearr_29506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__,figwheel_version,temp__5720__auto__))
);

return c__24682__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29509){
var map__29510 = p__29509;
var map__29510__$1 = (((((!((map__29510 == null))))?(((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29510):map__29510);
var file = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29512 = "";
var G__29512__$1 = (cljs.core.truth_(file)?[G__29512,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29512);
var G__29512__$2 = (cljs.core.truth_(line)?[G__29512__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29512__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29512__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29512__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29513){
var map__29514 = p__29513;
var map__29514__$1 = (((((!((map__29514 == null))))?(((((map__29514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29514):map__29514);
var ed = map__29514__$1;
var formatted_exception = cljs.core.get.call(null,map__29514__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29514__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29514__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29516_29520 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29517_29521 = null;
var count__29518_29522 = (0);
var i__29519_29523 = (0);
while(true){
if((i__29519_29523 < count__29518_29522)){
var msg_29524 = cljs.core._nth.call(null,chunk__29517_29521,i__29519_29523);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29524);


var G__29525 = seq__29516_29520;
var G__29526 = chunk__29517_29521;
var G__29527 = count__29518_29522;
var G__29528 = (i__29519_29523 + (1));
seq__29516_29520 = G__29525;
chunk__29517_29521 = G__29526;
count__29518_29522 = G__29527;
i__29519_29523 = G__29528;
continue;
} else {
var temp__5720__auto___29529 = cljs.core.seq.call(null,seq__29516_29520);
if(temp__5720__auto___29529){
var seq__29516_29530__$1 = temp__5720__auto___29529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29516_29530__$1)){
var c__4550__auto___29531 = cljs.core.chunk_first.call(null,seq__29516_29530__$1);
var G__29532 = cljs.core.chunk_rest.call(null,seq__29516_29530__$1);
var G__29533 = c__4550__auto___29531;
var G__29534 = cljs.core.count.call(null,c__4550__auto___29531);
var G__29535 = (0);
seq__29516_29520 = G__29532;
chunk__29517_29521 = G__29533;
count__29518_29522 = G__29534;
i__29519_29523 = G__29535;
continue;
} else {
var msg_29536 = cljs.core.first.call(null,seq__29516_29530__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29536);


var G__29537 = cljs.core.next.call(null,seq__29516_29530__$1);
var G__29538 = null;
var G__29539 = (0);
var G__29540 = (0);
seq__29516_29520 = G__29537;
chunk__29517_29521 = G__29538;
count__29518_29522 = G__29539;
i__29519_29523 = G__29540;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29541){
var map__29542 = p__29541;
var map__29542__$1 = (((((!((map__29542 == null))))?(((((map__29542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29542):map__29542);
var w = map__29542__$1;
var message = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29544 = cljs.core.seq.call(null,plugins);
var chunk__29545 = null;
var count__29546 = (0);
var i__29547 = (0);
while(true){
if((i__29547 < count__29546)){
var vec__29554 = cljs.core._nth.call(null,chunk__29545,i__29547);
var k = cljs.core.nth.call(null,vec__29554,(0),null);
var plugin = cljs.core.nth.call(null,vec__29554,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29560 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29544,chunk__29545,count__29546,i__29547,pl_29560,vec__29554,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29560.call(null,msg_hist);
});})(seq__29544,chunk__29545,count__29546,i__29547,pl_29560,vec__29554,k,plugin))
);
} else {
}


var G__29561 = seq__29544;
var G__29562 = chunk__29545;
var G__29563 = count__29546;
var G__29564 = (i__29547 + (1));
seq__29544 = G__29561;
chunk__29545 = G__29562;
count__29546 = G__29563;
i__29547 = G__29564;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29544);
if(temp__5720__auto__){
var seq__29544__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29544__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29544__$1);
var G__29565 = cljs.core.chunk_rest.call(null,seq__29544__$1);
var G__29566 = c__4550__auto__;
var G__29567 = cljs.core.count.call(null,c__4550__auto__);
var G__29568 = (0);
seq__29544 = G__29565;
chunk__29545 = G__29566;
count__29546 = G__29567;
i__29547 = G__29568;
continue;
} else {
var vec__29557 = cljs.core.first.call(null,seq__29544__$1);
var k = cljs.core.nth.call(null,vec__29557,(0),null);
var plugin = cljs.core.nth.call(null,vec__29557,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29569 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29544,chunk__29545,count__29546,i__29547,pl_29569,vec__29557,k,plugin,seq__29544__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29569.call(null,msg_hist);
});})(seq__29544,chunk__29545,count__29546,i__29547,pl_29569,vec__29557,k,plugin,seq__29544__$1,temp__5720__auto__))
);
} else {
}


var G__29570 = cljs.core.next.call(null,seq__29544__$1);
var G__29571 = null;
var G__29572 = (0);
var G__29573 = (0);
seq__29544 = G__29570;
chunk__29545 = G__29571;
count__29546 = G__29572;
i__29547 = G__29573;
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
var G__29575 = arguments.length;
switch (G__29575) {
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

var seq__29576_29581 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29577_29582 = null;
var count__29578_29583 = (0);
var i__29579_29584 = (0);
while(true){
if((i__29579_29584 < count__29578_29583)){
var msg_29585 = cljs.core._nth.call(null,chunk__29577_29582,i__29579_29584);
figwheel.client.socket.handle_incoming_message.call(null,msg_29585);


var G__29586 = seq__29576_29581;
var G__29587 = chunk__29577_29582;
var G__29588 = count__29578_29583;
var G__29589 = (i__29579_29584 + (1));
seq__29576_29581 = G__29586;
chunk__29577_29582 = G__29587;
count__29578_29583 = G__29588;
i__29579_29584 = G__29589;
continue;
} else {
var temp__5720__auto___29590 = cljs.core.seq.call(null,seq__29576_29581);
if(temp__5720__auto___29590){
var seq__29576_29591__$1 = temp__5720__auto___29590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29576_29591__$1)){
var c__4550__auto___29592 = cljs.core.chunk_first.call(null,seq__29576_29591__$1);
var G__29593 = cljs.core.chunk_rest.call(null,seq__29576_29591__$1);
var G__29594 = c__4550__auto___29592;
var G__29595 = cljs.core.count.call(null,c__4550__auto___29592);
var G__29596 = (0);
seq__29576_29581 = G__29593;
chunk__29577_29582 = G__29594;
count__29578_29583 = G__29595;
i__29579_29584 = G__29596;
continue;
} else {
var msg_29597 = cljs.core.first.call(null,seq__29576_29591__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29597);


var G__29598 = cljs.core.next.call(null,seq__29576_29591__$1);
var G__29599 = null;
var G__29600 = (0);
var G__29601 = (0);
seq__29576_29581 = G__29598;
chunk__29577_29582 = G__29599;
count__29578_29583 = G__29600;
i__29579_29584 = G__29601;
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
var len__4730__auto___29606 = arguments.length;
var i__4731__auto___29607 = (0);
while(true){
if((i__4731__auto___29607 < len__4730__auto___29606)){
args__4736__auto__.push((arguments[i__4731__auto___29607]));

var G__29608 = (i__4731__auto___29607 + (1));
i__4731__auto___29607 = G__29608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29603){
var map__29604 = p__29603;
var map__29604__$1 = (((((!((map__29604 == null))))?(((((map__29604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29604):map__29604);
var opts = map__29604__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29602));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29609){if((e29609 instanceof Error)){
var e = e29609;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29609;

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
return (function (p__29610){
var map__29611 = p__29610;
var map__29611__$1 = (((((!((map__29611 == null))))?(((((map__29611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29611):map__29611);
var msg_name = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1570528833389
