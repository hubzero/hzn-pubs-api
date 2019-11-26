// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.data');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
hubzero_pubs.data.url = "http://localhost:8888";
hubzero_pubs.data.options = (function hubzero_pubs$data$options(s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["accept","application/edn"], null)], null);
});
hubzero_pubs.data.get_files = (function hubzero_pubs$data$get_files(s){
cljs.core.prn.call(null,"GET-FILES",[hubzero_pubs.data.url,"/prjs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prj-id","prj-id",1615029734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))),"/files"].join(''));

var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_32010){
var state_val_32011 = (state_32010[(1)]);
if((state_val_32011 === (1))){
var inst_31983 = cljs.core.deref.call(null,s);
var inst_31984 = new cljs.core.Keyword(null,"prj-id","prj-id",1615029734).cljs$core$IFn$_invoke$arity$1(inst_31983);
var inst_31985 = [hubzero_pubs.data.url,"/prjs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31984),"/files"].join('');
var inst_31986 = hubzero_pubs.data.options.call(null,s);
var inst_31987 = cljs_http.client.get.call(null,inst_31985,inst_31986);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32010__$1,(2),inst_31987);
} else {
if((state_val_32011 === (2))){
var inst_31989 = (state_32010[(2)]);
var inst_31990 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31989);
var inst_31991 = cljs.core.prn.call(null,inst_31990);
var inst_31992 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31989);
var inst_31993 = cljs.reader.read_string.call(null,inst_31992);
var inst_31994 = cljs.core.swap_BANG_.call(null,s,cljs.core.assoc,new cljs.core.Keyword(null,"files","files",-472457450),inst_31993);
var inst_31995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31996 = [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-folder","current-folder",1012906650)];
var inst_31997 = (new cljs.core.PersistentVector(null,2,(5),inst_31995,inst_31996,null));
var inst_31998 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32000 = cljs.core.deref.call(null,s);
var inst_32001 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32000);
var inst_32002 = cljs.core.first.call(null,inst_32001);
var inst_32003 = cljs.core.first.call(null,inst_32002);
var inst_32004 = ["Project files",inst_32003];
var inst_32005 = (new cljs.core.PersistentVector(null,2,(5),inst_31999,inst_32004,null));
var inst_32006 = [inst_32005];
var inst_32007 = (new cljs.core.PersistentVector(null,1,(5),inst_31998,inst_32006,null));
var inst_32008 = cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,inst_31997,inst_32007);
var state_32010__$1 = (function (){var statearr_32012 = state_32010;
(statearr_32012[(7)] = inst_31991);

(statearr_32012[(8)] = inst_31994);

return statearr_32012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32010__$1,inst_32008);
} else {
return null;
}
}
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var hubzero_pubs$data$get_files_$_state_machine__23487__auto__ = null;
var hubzero_pubs$data$get_files_$_state_machine__23487__auto____0 = (function (){
var statearr_32013 = [null,null,null,null,null,null,null,null,null];
(statearr_32013[(0)] = hubzero_pubs$data$get_files_$_state_machine__23487__auto__);

(statearr_32013[(1)] = (1));

return statearr_32013;
});
var hubzero_pubs$data$get_files_$_state_machine__23487__auto____1 = (function (state_32010){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_32010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e32014){if((e32014 instanceof Object)){
var ex__23490__auto__ = e32014;
var statearr_32015_32017 = state_32010;
(statearr_32015_32017[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32018 = state_32010;
state_32010 = G__32018;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
hubzero_pubs$data$get_files_$_state_machine__23487__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return hubzero_pubs$data$get_files_$_state_machine__23487__auto____0.call(this);
case 1:
return hubzero_pubs$data$get_files_$_state_machine__23487__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hubzero_pubs$data$get_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = hubzero_pubs$data$get_files_$_state_machine__23487__auto____0;
hubzero_pubs$data$get_files_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = hubzero_pubs$data$get_files_$_state_machine__23487__auto____1;
return hubzero_pubs$data$get_files_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_32016 = f__23584__auto__.call(null);
(statearr_32016[(6)] = c__23583__auto__);

return statearr_32016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
});
hubzero_pubs.data.get_users = (function hubzero_pubs$data$get_users(s){
cljs.core.prn.call(null,"GET-USERS",[hubzero_pubs.data.url,"/prjs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prj-id","prj-id",1615029734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))),"/users"].join(''));

var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_32034){
var state_val_32035 = (state_32034[(1)]);
if((state_val_32035 === (1))){
var inst_32019 = cljs.core.deref.call(null,s);
var inst_32020 = new cljs.core.Keyword(null,"prj-id","prj-id",1615029734).cljs$core$IFn$_invoke$arity$1(inst_32019);
var inst_32021 = [hubzero_pubs.data.url,"/prjs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32020),"/users"].join('');
var inst_32022 = hubzero_pubs.data.options.call(null,s);
var inst_32023 = cljs_http.client.get.call(null,inst_32021,inst_32022);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32034__$1,(2),inst_32023);
} else {
if((state_val_32035 === (2))){
var inst_32025 = (state_32034[(2)]);
var inst_32026 = cljs.core.PersistentHashMap.EMPTY;
var inst_32027 = (function (){var res = inst_32025;
return ((function (res,inst_32025,inst_32026,state_val_32035,c__23583__auto__){
return (function (u){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"userid","userid",1974246085).cljs$core$IFn$_invoke$arity$1(u),u], null);
});
;})(res,inst_32025,inst_32026,state_val_32035,c__23583__auto__))
})();
var inst_32028 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32025);
var inst_32029 = cljs.reader.read_string.call(null,inst_32028);
var inst_32030 = cljs.core.map.call(null,inst_32027,inst_32029);
var inst_32031 = cljs.core.into.call(null,inst_32026,inst_32030);
var inst_32032 = cljs.core.swap_BANG_.call(null,s,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),inst_32031);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32034__$1,inst_32032);
} else {
return null;
}
}
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var hubzero_pubs$data$get_users_$_state_machine__23487__auto__ = null;
var hubzero_pubs$data$get_users_$_state_machine__23487__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null];
(statearr_32036[(0)] = hubzero_pubs$data$get_users_$_state_machine__23487__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var hubzero_pubs$data$get_users_$_state_machine__23487__auto____1 = (function (state_32034){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_32034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e32037){if((e32037 instanceof Object)){
var ex__23490__auto__ = e32037;
var statearr_32038_32040 = state_32034;
(statearr_32038_32040[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_32034;
state_32034 = G__32041;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
hubzero_pubs$data$get_users_$_state_machine__23487__auto__ = function(state_32034){
switch(arguments.length){
case 0:
return hubzero_pubs$data$get_users_$_state_machine__23487__auto____0.call(this);
case 1:
return hubzero_pubs$data$get_users_$_state_machine__23487__auto____1.call(this,state_32034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hubzero_pubs$data$get_users_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = hubzero_pubs$data$get_users_$_state_machine__23487__auto____0;
hubzero_pubs$data$get_users_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = hubzero_pubs$data$get_users_$_state_machine__23487__auto____1;
return hubzero_pubs$data$get_users_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_32039 = f__23584__auto__.call(null);
(statearr_32039[(6)] = c__23583__auto__);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
});

//# sourceMappingURL=data.js.map?rel=1574316462576
