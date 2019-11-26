// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30521){
var map__30522 = p__30521;
var map__30522__$1 = (((((!((map__30522 == null))))?(((((map__30522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30522):map__30522);
var m = map__30522__$1;
var n = cljs.core.get.call(null,map__30522__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30524_30556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30525_30557 = null;
var count__30526_30558 = (0);
var i__30527_30559 = (0);
while(true){
if((i__30527_30559 < count__30526_30558)){
var f_30560 = cljs.core._nth.call(null,chunk__30525_30557,i__30527_30559);
cljs.core.println.call(null,"  ",f_30560);


var G__30561 = seq__30524_30556;
var G__30562 = chunk__30525_30557;
var G__30563 = count__30526_30558;
var G__30564 = (i__30527_30559 + (1));
seq__30524_30556 = G__30561;
chunk__30525_30557 = G__30562;
count__30526_30558 = G__30563;
i__30527_30559 = G__30564;
continue;
} else {
var temp__5720__auto___30565 = cljs.core.seq.call(null,seq__30524_30556);
if(temp__5720__auto___30565){
var seq__30524_30566__$1 = temp__5720__auto___30565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30524_30566__$1)){
var c__4550__auto___30567 = cljs.core.chunk_first.call(null,seq__30524_30566__$1);
var G__30568 = cljs.core.chunk_rest.call(null,seq__30524_30566__$1);
var G__30569 = c__4550__auto___30567;
var G__30570 = cljs.core.count.call(null,c__4550__auto___30567);
var G__30571 = (0);
seq__30524_30556 = G__30568;
chunk__30525_30557 = G__30569;
count__30526_30558 = G__30570;
i__30527_30559 = G__30571;
continue;
} else {
var f_30572 = cljs.core.first.call(null,seq__30524_30566__$1);
cljs.core.println.call(null,"  ",f_30572);


var G__30573 = cljs.core.next.call(null,seq__30524_30566__$1);
var G__30574 = null;
var G__30575 = (0);
var G__30576 = (0);
seq__30524_30556 = G__30573;
chunk__30525_30557 = G__30574;
count__30526_30558 = G__30575;
i__30527_30559 = G__30576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30577 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30577);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30577)))?cljs.core.second.call(null,arglists_30577):arglists_30577));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30528_30578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30529_30579 = null;
var count__30530_30580 = (0);
var i__30531_30581 = (0);
while(true){
if((i__30531_30581 < count__30530_30580)){
var vec__30542_30582 = cljs.core._nth.call(null,chunk__30529_30579,i__30531_30581);
var name_30583 = cljs.core.nth.call(null,vec__30542_30582,(0),null);
var map__30545_30584 = cljs.core.nth.call(null,vec__30542_30582,(1),null);
var map__30545_30585__$1 = (((((!((map__30545_30584 == null))))?(((((map__30545_30584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30545_30584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545_30584):map__30545_30584);
var doc_30586 = cljs.core.get.call(null,map__30545_30585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30587 = cljs.core.get.call(null,map__30545_30585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30583);

cljs.core.println.call(null," ",arglists_30587);

if(cljs.core.truth_(doc_30586)){
cljs.core.println.call(null," ",doc_30586);
} else {
}


var G__30588 = seq__30528_30578;
var G__30589 = chunk__30529_30579;
var G__30590 = count__30530_30580;
var G__30591 = (i__30531_30581 + (1));
seq__30528_30578 = G__30588;
chunk__30529_30579 = G__30589;
count__30530_30580 = G__30590;
i__30531_30581 = G__30591;
continue;
} else {
var temp__5720__auto___30592 = cljs.core.seq.call(null,seq__30528_30578);
if(temp__5720__auto___30592){
var seq__30528_30593__$1 = temp__5720__auto___30592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30528_30593__$1)){
var c__4550__auto___30594 = cljs.core.chunk_first.call(null,seq__30528_30593__$1);
var G__30595 = cljs.core.chunk_rest.call(null,seq__30528_30593__$1);
var G__30596 = c__4550__auto___30594;
var G__30597 = cljs.core.count.call(null,c__4550__auto___30594);
var G__30598 = (0);
seq__30528_30578 = G__30595;
chunk__30529_30579 = G__30596;
count__30530_30580 = G__30597;
i__30531_30581 = G__30598;
continue;
} else {
var vec__30547_30599 = cljs.core.first.call(null,seq__30528_30593__$1);
var name_30600 = cljs.core.nth.call(null,vec__30547_30599,(0),null);
var map__30550_30601 = cljs.core.nth.call(null,vec__30547_30599,(1),null);
var map__30550_30602__$1 = (((((!((map__30550_30601 == null))))?(((((map__30550_30601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30550_30601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30550_30601):map__30550_30601);
var doc_30603 = cljs.core.get.call(null,map__30550_30602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30604 = cljs.core.get.call(null,map__30550_30602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30600);

cljs.core.println.call(null," ",arglists_30604);

if(cljs.core.truth_(doc_30603)){
cljs.core.println.call(null," ",doc_30603);
} else {
}


var G__30605 = cljs.core.next.call(null,seq__30528_30593__$1);
var G__30606 = null;
var G__30607 = (0);
var G__30608 = (0);
seq__30528_30578 = G__30605;
chunk__30529_30579 = G__30606;
count__30530_30580 = G__30607;
i__30531_30581 = G__30608;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30553 = null;
var count__30554 = (0);
var i__30555 = (0);
while(true){
if((i__30555 < count__30554)){
var role = cljs.core._nth.call(null,chunk__30553,i__30555);
var temp__5720__auto___30609__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30609__$1)){
var spec_30610 = temp__5720__auto___30609__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30610));
} else {
}


var G__30611 = seq__30552;
var G__30612 = chunk__30553;
var G__30613 = count__30554;
var G__30614 = (i__30555 + (1));
seq__30552 = G__30611;
chunk__30553 = G__30612;
count__30554 = G__30613;
i__30555 = G__30614;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30552);
if(temp__5720__auto____$1){
var seq__30552__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30552__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30552__$1);
var G__30615 = cljs.core.chunk_rest.call(null,seq__30552__$1);
var G__30616 = c__4550__auto__;
var G__30617 = cljs.core.count.call(null,c__4550__auto__);
var G__30618 = (0);
seq__30552 = G__30615;
chunk__30553 = G__30616;
count__30554 = G__30617;
i__30555 = G__30618;
continue;
} else {
var role = cljs.core.first.call(null,seq__30552__$1);
var temp__5720__auto___30619__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30619__$2)){
var spec_30620 = temp__5720__auto___30619__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30620));
} else {
}


var G__30621 = cljs.core.next.call(null,seq__30552__$1);
var G__30622 = null;
var G__30623 = (0);
var G__30624 = (0);
seq__30552 = G__30621;
chunk__30553 = G__30622;
count__30554 = G__30623;
i__30555 = G__30624;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30625 = cljs.core.conj.call(null,via,t);
var G__30626 = cljs.core.ex_cause.call(null,t);
via = G__30625;
t = G__30626;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30629 = datafied_throwable;
var map__30629__$1 = (((((!((map__30629 == null))))?(((((map__30629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30629):map__30629);
var via = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30630 = cljs.core.last.call(null,via);
var map__30630__$1 = (((((!((map__30630 == null))))?(((((map__30630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);
var type = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30631 = data;
var map__30631__$1 = (((((!((map__30631 == null))))?(((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var problems = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30632 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30632__$1 = (((((!((map__30632 == null))))?(((((map__30632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var top_data = map__30632__$1;
var source = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30637 = phase;
var G__30637__$1 = (((G__30637 instanceof cljs.core.Keyword))?G__30637.fqn:null);
switch (G__30637__$1) {
case "read-source":
var map__30638 = data;
var map__30638__$1 = (((((!((map__30638 == null))))?(((((map__30638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);
var line = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30640 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30640__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30640,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30640);
var G__30640__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30640__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30640__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30640__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30641 = top_data;
var G__30641__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30641,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30641);
var G__30641__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30641__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30641__$1);
var G__30641__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30641__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30641__$2);
var G__30641__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30641__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30641__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30641__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30641__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30642 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30642,(0),null);
var method = cljs.core.nth.call(null,vec__30642,(1),null);
var file = cljs.core.nth.call(null,vec__30642,(2),null);
var line = cljs.core.nth.call(null,vec__30642,(3),null);
var G__30645 = top_data;
var G__30645__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30645,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30645);
var G__30645__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30645__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30645__$1);
var G__30645__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30645__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30645__$2);
var G__30645__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30645__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30645__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30645__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30645__$4;
}

break;
case "execution":
var vec__30646 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30646,(0),null);
var method = cljs.core.nth.call(null,vec__30646,(1),null);
var file = cljs.core.nth.call(null,vec__30646,(2),null);
var line = cljs.core.nth.call(null,vec__30646,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30646,source__$1,method,file,line,G__30637,G__30637__$1,map__30629,map__30629__$1,via,trace,phase,map__30630,map__30630__$1,type,message,data,map__30631,map__30631__$1,problems,fn,caller,map__30632,map__30632__$1,top_data,source){
return (function (p1__30628_SHARP_){
var or__4131__auto__ = (p1__30628_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30628_SHARP_);
}
});})(vec__30646,source__$1,method,file,line,G__30637,G__30637__$1,map__30629,map__30629__$1,via,trace,phase,map__30630,map__30630__$1,type,message,data,map__30631,map__30631__$1,problems,fn,caller,map__30632,map__30632__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30649 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30649__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30649,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30649);
var G__30649__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30649__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30649__$1);
var G__30649__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30649__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30649__$2);
var G__30649__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30649__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30649__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30649__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30649__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30637__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30653){
var map__30654 = p__30653;
var map__30654__$1 = (((((!((map__30654 == null))))?(((((map__30654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);
var triage_data = map__30654__$1;
var phase = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30656 = phase;
var G__30656__$1 = (((G__30656 instanceof cljs.core.Keyword))?G__30656.fqn:null);
switch (G__30656__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30657_30666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30658_30667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30659_30668 = true;
var _STAR_print_fn_STAR__temp_val__30660_30669 = ((function (_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30659_30668;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30660_30669;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,_STAR_print_fn_STAR__temp_val__30660_30669,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,_STAR_print_fn_STAR__temp_val__30660_30669,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30651_SHARP_){
return cljs.core.dissoc.call(null,p1__30651_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,_STAR_print_fn_STAR__temp_val__30660_30669,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30657_30666,_STAR_print_fn_STAR__orig_val__30658_30667,_STAR_print_newline_STAR__temp_val__30659_30668,_STAR_print_fn_STAR__temp_val__30660_30669,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30658_30667;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30657_30666;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30661_30670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30662_30671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30663_30672 = true;
var _STAR_print_fn_STAR__temp_val__30664_30673 = ((function (_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30663_30672;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30664_30673;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,_STAR_print_fn_STAR__temp_val__30664_30673,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,_STAR_print_fn_STAR__temp_val__30664_30673,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30652_SHARP_){
return cljs.core.dissoc.call(null,p1__30652_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,_STAR_print_fn_STAR__temp_val__30664_30673,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30661_30670,_STAR_print_fn_STAR__orig_val__30662_30671,_STAR_print_newline_STAR__temp_val__30663_30672,_STAR_print_fn_STAR__temp_val__30664_30673,sb__4661__auto__,G__30656,G__30656__$1,loc,class_name,simple_class,cause_type,format,map__30654,map__30654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30662_30671;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30661_30670;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30656__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1574245586247
