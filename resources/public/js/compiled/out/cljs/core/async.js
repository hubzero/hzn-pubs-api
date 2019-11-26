// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25507 = arguments.length;
switch (G__25507) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25508 = (function (f,blockable,meta25509){
this.f = f;
this.blockable = blockable;
this.meta25509 = meta25509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25510,meta25509__$1){
var self__ = this;
var _25510__$1 = this;
return (new cljs.core.async.t_cljs$core$async25508(self__.f,self__.blockable,meta25509__$1));
});

cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25510){
var self__ = this;
var _25510__$1 = this;
return self__.meta25509;
});

cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25509","meta25509",-2089799041,null)], null);
});

cljs.core.async.t_cljs$core$async25508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25508";

cljs.core.async.t_cljs$core$async25508.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25508");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25508.
 */
cljs.core.async.__GT_t_cljs$core$async25508 = (function cljs$core$async$__GT_t_cljs$core$async25508(f__$1,blockable__$1,meta25509){
return (new cljs.core.async.t_cljs$core$async25508(f__$1,blockable__$1,meta25509));
});

}

return (new cljs.core.async.t_cljs$core$async25508(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25514 = arguments.length;
switch (G__25514) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25517 = arguments.length;
switch (G__25517) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25520 = arguments.length;
switch (G__25520) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25522 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25522);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25522,ret){
return (function (){
return fn1.call(null,val_25522);
});})(val_25522,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25524 = arguments.length;
switch (G__25524) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___25526 = n;
var x_25527 = (0);
while(true){
if((x_25527 < n__4607__auto___25526)){
(a[x_25527] = (0));

var G__25528 = (x_25527 + (1));
x_25527 = G__25528;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25529 = (i + (1));
i = G__25529;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25530 = (function (flag,meta25531){
this.flag = flag;
this.meta25531 = meta25531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25532,meta25531__$1){
var self__ = this;
var _25532__$1 = this;
return (new cljs.core.async.t_cljs$core$async25530(self__.flag,meta25531__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25532){
var self__ = this;
var _25532__$1 = this;
return self__.meta25531;
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25531","meta25531",1517535015,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25530";

cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25530");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25530.
 */
cljs.core.async.__GT_t_cljs$core$async25530 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25530(flag__$1,meta25531){
return (new cljs.core.async.t_cljs$core$async25530(flag__$1,meta25531));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25530(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25533 = (function (flag,cb,meta25534){
this.flag = flag;
this.cb = cb;
this.meta25534 = meta25534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25535,meta25534__$1){
var self__ = this;
var _25535__$1 = this;
return (new cljs.core.async.t_cljs$core$async25533(self__.flag,self__.cb,meta25534__$1));
});

cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25535){
var self__ = this;
var _25535__$1 = this;
return self__.meta25534;
});

cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25534","meta25534",1478110914,null)], null);
});

cljs.core.async.t_cljs$core$async25533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25533";

cljs.core.async.t_cljs$core$async25533.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25533");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25533.
 */
cljs.core.async.__GT_t_cljs$core$async25533 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25533(flag__$1,cb__$1,meta25534){
return (new cljs.core.async.t_cljs$core$async25533(flag__$1,cb__$1,meta25534));
});

}

return (new cljs.core.async.t_cljs$core$async25533(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25536_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25536_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25537_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25537_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25538 = (i + (1));
i = G__25538;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25544 = arguments.length;
var i__4731__auto___25545 = (0);
while(true){
if((i__4731__auto___25545 < len__4730__auto___25544)){
args__4736__auto__.push((arguments[i__4731__auto___25545]));

var G__25546 = (i__4731__auto___25545 + (1));
i__4731__auto___25545 = G__25546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25541){
var map__25542 = p__25541;
var map__25542__$1 = (((((!((map__25542 == null))))?(((((map__25542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25542):map__25542);
var opts = map__25542__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25539){
var G__25540 = cljs.core.first.call(null,seq25539);
var seq25539__$1 = cljs.core.next.call(null,seq25539);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25540,seq25539__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25548 = arguments.length;
switch (G__25548) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23583__auto___25594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___25594){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___25594){
return (function (state_25572){
var state_val_25573 = (state_25572[(1)]);
if((state_val_25573 === (7))){
var inst_25568 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25574_25595 = state_25572__$1;
(statearr_25574_25595[(2)] = inst_25568);

(statearr_25574_25595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (1))){
var state_25572__$1 = state_25572;
var statearr_25575_25596 = state_25572__$1;
(statearr_25575_25596[(2)] = null);

(statearr_25575_25596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (4))){
var inst_25551 = (state_25572[(7)]);
var inst_25551__$1 = (state_25572[(2)]);
var inst_25552 = (inst_25551__$1 == null);
var state_25572__$1 = (function (){var statearr_25576 = state_25572;
(statearr_25576[(7)] = inst_25551__$1);

return statearr_25576;
})();
if(cljs.core.truth_(inst_25552)){
var statearr_25577_25597 = state_25572__$1;
(statearr_25577_25597[(1)] = (5));

} else {
var statearr_25578_25598 = state_25572__$1;
(statearr_25578_25598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (13))){
var state_25572__$1 = state_25572;
var statearr_25579_25599 = state_25572__$1;
(statearr_25579_25599[(2)] = null);

(statearr_25579_25599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (6))){
var inst_25551 = (state_25572[(7)]);
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25572__$1,(11),to,inst_25551);
} else {
if((state_val_25573 === (3))){
var inst_25570 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25572__$1,inst_25570);
} else {
if((state_val_25573 === (12))){
var state_25572__$1 = state_25572;
var statearr_25580_25600 = state_25572__$1;
(statearr_25580_25600[(2)] = null);

(statearr_25580_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (2))){
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25572__$1,(4),from);
} else {
if((state_val_25573 === (11))){
var inst_25561 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
if(cljs.core.truth_(inst_25561)){
var statearr_25581_25601 = state_25572__$1;
(statearr_25581_25601[(1)] = (12));

} else {
var statearr_25582_25602 = state_25572__$1;
(statearr_25582_25602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (9))){
var state_25572__$1 = state_25572;
var statearr_25583_25603 = state_25572__$1;
(statearr_25583_25603[(2)] = null);

(statearr_25583_25603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (5))){
var state_25572__$1 = state_25572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25584_25604 = state_25572__$1;
(statearr_25584_25604[(1)] = (8));

} else {
var statearr_25585_25605 = state_25572__$1;
(statearr_25585_25605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (14))){
var inst_25566 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25586_25606 = state_25572__$1;
(statearr_25586_25606[(2)] = inst_25566);

(statearr_25586_25606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (10))){
var inst_25558 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25587_25607 = state_25572__$1;
(statearr_25587_25607[(2)] = inst_25558);

(statearr_25587_25607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (8))){
var inst_25555 = cljs.core.async.close_BANG_.call(null,to);
var state_25572__$1 = state_25572;
var statearr_25588_25608 = state_25572__$1;
(statearr_25588_25608[(2)] = inst_25555);

(statearr_25588_25608[(1)] = (10));


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
});})(c__23583__auto___25594))
;
return ((function (switch__23486__auto__,c__23583__auto___25594){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_25589 = [null,null,null,null,null,null,null,null];
(statearr_25589[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_25589[(1)] = (1));

return statearr_25589;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_25572){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25590){if((e25590 instanceof Object)){
var ex__23490__auto__ = e25590;
var statearr_25591_25609 = state_25572;
(statearr_25591_25609[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25610 = state_25572;
state_25572 = G__25610;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_25572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_25572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___25594))
})();
var state__23585__auto__ = (function (){var statearr_25592 = f__23584__auto__.call(null);
(statearr_25592[(6)] = c__23583__auto___25594);

return statearr_25592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___25594))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25611){
var vec__25612 = p__25611;
var v = cljs.core.nth.call(null,vec__25612,(0),null);
var p = cljs.core.nth.call(null,vec__25612,(1),null);
var job = vec__25612;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23583__auto___25783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results){
return (function (state_25619){
var state_val_25620 = (state_25619[(1)]);
if((state_val_25620 === (1))){
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(2),res,v);
} else {
if((state_val_25620 === (2))){
var inst_25616 = (state_25619[(2)]);
var inst_25617 = cljs.core.async.close_BANG_.call(null,res);
var state_25619__$1 = (function (){var statearr_25621 = state_25619;
(statearr_25621[(7)] = inst_25616);

return statearr_25621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else {
return null;
}
}
});})(c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results))
;
return ((function (switch__23486__auto__,c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_25622 = [null,null,null,null,null,null,null,null];
(statearr_25622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__);

(statearr_25622[(1)] = (1));

return statearr_25622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1 = (function (state_25619){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25623){if((e25623 instanceof Object)){
var ex__23490__auto__ = e25623;
var statearr_25624_25784 = state_25619;
(statearr_25624_25784[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25619;
state_25619 = G__25785;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results))
})();
var state__23585__auto__ = (function (){var statearr_25625 = f__23584__auto__.call(null);
(statearr_25625[(6)] = c__23583__auto___25783);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___25783,res,vec__25612,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25626){
var vec__25627 = p__25626;
var v = cljs.core.nth.call(null,vec__25627,(0),null);
var p = cljs.core.nth.call(null,vec__25627,(1),null);
var job = vec__25627;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___25786 = n;
var __25787 = (0);
while(true){
if((__25787 < n__4607__auto___25786)){
var G__25630_25788 = type;
var G__25630_25789__$1 = (((G__25630_25788 instanceof cljs.core.Keyword))?G__25630_25788.fqn:null);
switch (G__25630_25789__$1) {
case "compute":
var c__23583__auto___25791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25787,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (__25787,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function (state_25643){
var state_val_25644 = (state_25643[(1)]);
if((state_val_25644 === (1))){
var state_25643__$1 = state_25643;
var statearr_25645_25792 = state_25643__$1;
(statearr_25645_25792[(2)] = null);

(statearr_25645_25792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (2))){
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25643__$1,(4),jobs);
} else {
if((state_val_25644 === (3))){
var inst_25641 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25643__$1,inst_25641);
} else {
if((state_val_25644 === (4))){
var inst_25633 = (state_25643[(2)]);
var inst_25634 = process.call(null,inst_25633);
var state_25643__$1 = state_25643;
if(cljs.core.truth_(inst_25634)){
var statearr_25646_25793 = state_25643__$1;
(statearr_25646_25793[(1)] = (5));

} else {
var statearr_25647_25794 = state_25643__$1;
(statearr_25647_25794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (5))){
var state_25643__$1 = state_25643;
var statearr_25648_25795 = state_25643__$1;
(statearr_25648_25795[(2)] = null);

(statearr_25648_25795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (6))){
var state_25643__$1 = state_25643;
var statearr_25649_25796 = state_25643__$1;
(statearr_25649_25796[(2)] = null);

(statearr_25649_25796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (7))){
var inst_25639 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25650_25797 = state_25643__$1;
(statearr_25650_25797[(2)] = inst_25639);

(statearr_25650_25797[(1)] = (3));


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
});})(__25787,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
;
return ((function (__25787,switch__23486__auto__,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_25651 = [null,null,null,null,null,null,null];
(statearr_25651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__);

(statearr_25651[(1)] = (1));

return statearr_25651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1 = (function (state_25643){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25652){if((e25652 instanceof Object)){
var ex__23490__auto__ = e25652;
var statearr_25653_25798 = state_25643;
(statearr_25653_25798[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25799 = state_25643;
state_25643 = G__25799;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = function(state_25643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1.call(this,state_25643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__;
})()
;})(__25787,switch__23486__auto__,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
})();
var state__23585__auto__ = (function (){var statearr_25654 = f__23584__auto__.call(null);
(statearr_25654[(6)] = c__23583__auto___25791);

return statearr_25654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(__25787,c__23583__auto___25791,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
);


break;
case "async":
var c__23583__auto___25800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25787,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (__25787,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function (state_25667){
var state_val_25668 = (state_25667[(1)]);
if((state_val_25668 === (1))){
var state_25667__$1 = state_25667;
var statearr_25669_25801 = state_25667__$1;
(statearr_25669_25801[(2)] = null);

(statearr_25669_25801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (2))){
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25667__$1,(4),jobs);
} else {
if((state_val_25668 === (3))){
var inst_25665 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25667__$1,inst_25665);
} else {
if((state_val_25668 === (4))){
var inst_25657 = (state_25667[(2)]);
var inst_25658 = async.call(null,inst_25657);
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25658)){
var statearr_25670_25802 = state_25667__$1;
(statearr_25670_25802[(1)] = (5));

} else {
var statearr_25671_25803 = state_25667__$1;
(statearr_25671_25803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (5))){
var state_25667__$1 = state_25667;
var statearr_25672_25804 = state_25667__$1;
(statearr_25672_25804[(2)] = null);

(statearr_25672_25804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (6))){
var state_25667__$1 = state_25667;
var statearr_25673_25805 = state_25667__$1;
(statearr_25673_25805[(2)] = null);

(statearr_25673_25805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (7))){
var inst_25663 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25674_25806 = state_25667__$1;
(statearr_25674_25806[(2)] = inst_25663);

(statearr_25674_25806[(1)] = (3));


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
});})(__25787,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
;
return ((function (__25787,switch__23486__auto__,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_25675 = [null,null,null,null,null,null,null];
(statearr_25675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__);

(statearr_25675[(1)] = (1));

return statearr_25675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1 = (function (state_25667){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25676){if((e25676 instanceof Object)){
var ex__23490__auto__ = e25676;
var statearr_25677_25807 = state_25667;
(statearr_25677_25807[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25808 = state_25667;
state_25667 = G__25808;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__;
})()
;})(__25787,switch__23486__auto__,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
})();
var state__23585__auto__ = (function (){var statearr_25678 = f__23584__auto__.call(null);
(statearr_25678[(6)] = c__23583__auto___25800);

return statearr_25678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(__25787,c__23583__auto___25800,G__25630_25788,G__25630_25789__$1,n__4607__auto___25786,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25630_25789__$1)].join('')));

}

var G__25809 = (__25787 + (1));
__25787 = G__25809;
continue;
} else {
}
break;
}

var c__23583__auto___25810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___25810,jobs,results,process,async){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___25810,jobs,results,process,async){
return (function (state_25700){
var state_val_25701 = (state_25700[(1)]);
if((state_val_25701 === (7))){
var inst_25696 = (state_25700[(2)]);
var state_25700__$1 = state_25700;
var statearr_25702_25811 = state_25700__$1;
(statearr_25702_25811[(2)] = inst_25696);

(statearr_25702_25811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (1))){
var state_25700__$1 = state_25700;
var statearr_25703_25812 = state_25700__$1;
(statearr_25703_25812[(2)] = null);

(statearr_25703_25812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (4))){
var inst_25681 = (state_25700[(7)]);
var inst_25681__$1 = (state_25700[(2)]);
var inst_25682 = (inst_25681__$1 == null);
var state_25700__$1 = (function (){var statearr_25704 = state_25700;
(statearr_25704[(7)] = inst_25681__$1);

return statearr_25704;
})();
if(cljs.core.truth_(inst_25682)){
var statearr_25705_25813 = state_25700__$1;
(statearr_25705_25813[(1)] = (5));

} else {
var statearr_25706_25814 = state_25700__$1;
(statearr_25706_25814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (6))){
var inst_25686 = (state_25700[(8)]);
var inst_25681 = (state_25700[(7)]);
var inst_25686__$1 = cljs.core.async.chan.call(null,(1));
var inst_25687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25688 = [inst_25681,inst_25686__$1];
var inst_25689 = (new cljs.core.PersistentVector(null,2,(5),inst_25687,inst_25688,null));
var state_25700__$1 = (function (){var statearr_25707 = state_25700;
(statearr_25707[(8)] = inst_25686__$1);

return statearr_25707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25700__$1,(8),jobs,inst_25689);
} else {
if((state_val_25701 === (3))){
var inst_25698 = (state_25700[(2)]);
var state_25700__$1 = state_25700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25700__$1,inst_25698);
} else {
if((state_val_25701 === (2))){
var state_25700__$1 = state_25700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25700__$1,(4),from);
} else {
if((state_val_25701 === (9))){
var inst_25693 = (state_25700[(2)]);
var state_25700__$1 = (function (){var statearr_25708 = state_25700;
(statearr_25708[(9)] = inst_25693);

return statearr_25708;
})();
var statearr_25709_25815 = state_25700__$1;
(statearr_25709_25815[(2)] = null);

(statearr_25709_25815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (5))){
var inst_25684 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25700__$1 = state_25700;
var statearr_25710_25816 = state_25700__$1;
(statearr_25710_25816[(2)] = inst_25684);

(statearr_25710_25816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25701 === (8))){
var inst_25686 = (state_25700[(8)]);
var inst_25691 = (state_25700[(2)]);
var state_25700__$1 = (function (){var statearr_25711 = state_25700;
(statearr_25711[(10)] = inst_25691);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25700__$1,(9),results,inst_25686);
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
});})(c__23583__auto___25810,jobs,results,process,async))
;
return ((function (switch__23486__auto__,c__23583__auto___25810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_25712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__);

(statearr_25712[(1)] = (1));

return statearr_25712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1 = (function (state_25700){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object)){
var ex__23490__auto__ = e25713;
var statearr_25714_25817 = state_25700;
(statearr_25714_25817[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25818 = state_25700;
state_25700 = G__25818;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = function(state_25700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1.call(this,state_25700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___25810,jobs,results,process,async))
})();
var state__23585__auto__ = (function (){var statearr_25715 = f__23584__auto__.call(null);
(statearr_25715[(6)] = c__23583__auto___25810);

return statearr_25715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___25810,jobs,results,process,async))
);


var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__,jobs,results,process,async){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__,jobs,results,process,async){
return (function (state_25753){
var state_val_25754 = (state_25753[(1)]);
if((state_val_25754 === (7))){
var inst_25749 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25755_25819 = state_25753__$1;
(statearr_25755_25819[(2)] = inst_25749);

(statearr_25755_25819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (20))){
var state_25753__$1 = state_25753;
var statearr_25756_25820 = state_25753__$1;
(statearr_25756_25820[(2)] = null);

(statearr_25756_25820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (1))){
var state_25753__$1 = state_25753;
var statearr_25757_25821 = state_25753__$1;
(statearr_25757_25821[(2)] = null);

(statearr_25757_25821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (4))){
var inst_25718 = (state_25753[(7)]);
var inst_25718__$1 = (state_25753[(2)]);
var inst_25719 = (inst_25718__$1 == null);
var state_25753__$1 = (function (){var statearr_25758 = state_25753;
(statearr_25758[(7)] = inst_25718__$1);

return statearr_25758;
})();
if(cljs.core.truth_(inst_25719)){
var statearr_25759_25822 = state_25753__$1;
(statearr_25759_25822[(1)] = (5));

} else {
var statearr_25760_25823 = state_25753__$1;
(statearr_25760_25823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (15))){
var inst_25731 = (state_25753[(8)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(18),to,inst_25731);
} else {
if((state_val_25754 === (21))){
var inst_25744 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25761_25824 = state_25753__$1;
(statearr_25761_25824[(2)] = inst_25744);

(statearr_25761_25824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (13))){
var inst_25746 = (state_25753[(2)]);
var state_25753__$1 = (function (){var statearr_25762 = state_25753;
(statearr_25762[(9)] = inst_25746);

return statearr_25762;
})();
var statearr_25763_25825 = state_25753__$1;
(statearr_25763_25825[(2)] = null);

(statearr_25763_25825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (6))){
var inst_25718 = (state_25753[(7)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(11),inst_25718);
} else {
if((state_val_25754 === (17))){
var inst_25739 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
if(cljs.core.truth_(inst_25739)){
var statearr_25764_25826 = state_25753__$1;
(statearr_25764_25826[(1)] = (19));

} else {
var statearr_25765_25827 = state_25753__$1;
(statearr_25765_25827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (3))){
var inst_25751 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25753__$1,inst_25751);
} else {
if((state_val_25754 === (12))){
var inst_25728 = (state_25753[(10)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(14),inst_25728);
} else {
if((state_val_25754 === (2))){
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(4),results);
} else {
if((state_val_25754 === (19))){
var state_25753__$1 = state_25753;
var statearr_25766_25828 = state_25753__$1;
(statearr_25766_25828[(2)] = null);

(statearr_25766_25828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (11))){
var inst_25728 = (state_25753[(2)]);
var state_25753__$1 = (function (){var statearr_25767 = state_25753;
(statearr_25767[(10)] = inst_25728);

return statearr_25767;
})();
var statearr_25768_25829 = state_25753__$1;
(statearr_25768_25829[(2)] = null);

(statearr_25768_25829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (9))){
var state_25753__$1 = state_25753;
var statearr_25769_25830 = state_25753__$1;
(statearr_25769_25830[(2)] = null);

(statearr_25769_25830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (5))){
var state_25753__$1 = state_25753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25770_25831 = state_25753__$1;
(statearr_25770_25831[(1)] = (8));

} else {
var statearr_25771_25832 = state_25753__$1;
(statearr_25771_25832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (14))){
var inst_25731 = (state_25753[(8)]);
var inst_25733 = (state_25753[(11)]);
var inst_25731__$1 = (state_25753[(2)]);
var inst_25732 = (inst_25731__$1 == null);
var inst_25733__$1 = cljs.core.not.call(null,inst_25732);
var state_25753__$1 = (function (){var statearr_25772 = state_25753;
(statearr_25772[(8)] = inst_25731__$1);

(statearr_25772[(11)] = inst_25733__$1);

return statearr_25772;
})();
if(inst_25733__$1){
var statearr_25773_25833 = state_25753__$1;
(statearr_25773_25833[(1)] = (15));

} else {
var statearr_25774_25834 = state_25753__$1;
(statearr_25774_25834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (16))){
var inst_25733 = (state_25753[(11)]);
var state_25753__$1 = state_25753;
var statearr_25775_25835 = state_25753__$1;
(statearr_25775_25835[(2)] = inst_25733);

(statearr_25775_25835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (10))){
var inst_25725 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25776_25836 = state_25753__$1;
(statearr_25776_25836[(2)] = inst_25725);

(statearr_25776_25836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (18))){
var inst_25736 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25777_25837 = state_25753__$1;
(statearr_25777_25837[(2)] = inst_25736);

(statearr_25777_25837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (8))){
var inst_25722 = cljs.core.async.close_BANG_.call(null,to);
var state_25753__$1 = state_25753;
var statearr_25778_25838 = state_25753__$1;
(statearr_25778_25838[(2)] = inst_25722);

(statearr_25778_25838[(1)] = (10));


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
});})(c__23583__auto__,jobs,results,process,async))
;
return ((function (switch__23486__auto__,c__23583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_25779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__);

(statearr_25779[(1)] = (1));

return statearr_25779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1 = (function (state_25753){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25780){if((e25780 instanceof Object)){
var ex__23490__auto__ = e25780;
var statearr_25781_25839 = state_25753;
(statearr_25781_25839[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25840 = state_25753;
state_25753 = G__25840;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__,jobs,results,process,async))
})();
var state__23585__auto__ = (function (){var statearr_25782 = f__23584__auto__.call(null);
(statearr_25782[(6)] = c__23583__auto__);

return statearr_25782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__,jobs,results,process,async))
);

return c__23583__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25842 = arguments.length;
switch (G__25842) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25845 = arguments.length;
switch (G__25845) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25848 = arguments.length;
switch (G__25848) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23583__auto___25897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___25897,tc,fc){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___25897,tc,fc){
return (function (state_25874){
var state_val_25875 = (state_25874[(1)]);
if((state_val_25875 === (7))){
var inst_25870 = (state_25874[(2)]);
var state_25874__$1 = state_25874;
var statearr_25876_25898 = state_25874__$1;
(statearr_25876_25898[(2)] = inst_25870);

(statearr_25876_25898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (1))){
var state_25874__$1 = state_25874;
var statearr_25877_25899 = state_25874__$1;
(statearr_25877_25899[(2)] = null);

(statearr_25877_25899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (4))){
var inst_25851 = (state_25874[(7)]);
var inst_25851__$1 = (state_25874[(2)]);
var inst_25852 = (inst_25851__$1 == null);
var state_25874__$1 = (function (){var statearr_25878 = state_25874;
(statearr_25878[(7)] = inst_25851__$1);

return statearr_25878;
})();
if(cljs.core.truth_(inst_25852)){
var statearr_25879_25900 = state_25874__$1;
(statearr_25879_25900[(1)] = (5));

} else {
var statearr_25880_25901 = state_25874__$1;
(statearr_25880_25901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (13))){
var state_25874__$1 = state_25874;
var statearr_25881_25902 = state_25874__$1;
(statearr_25881_25902[(2)] = null);

(statearr_25881_25902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (6))){
var inst_25851 = (state_25874[(7)]);
var inst_25857 = p.call(null,inst_25851);
var state_25874__$1 = state_25874;
if(cljs.core.truth_(inst_25857)){
var statearr_25882_25903 = state_25874__$1;
(statearr_25882_25903[(1)] = (9));

} else {
var statearr_25883_25904 = state_25874__$1;
(statearr_25883_25904[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (3))){
var inst_25872 = (state_25874[(2)]);
var state_25874__$1 = state_25874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25874__$1,inst_25872);
} else {
if((state_val_25875 === (12))){
var state_25874__$1 = state_25874;
var statearr_25884_25905 = state_25874__$1;
(statearr_25884_25905[(2)] = null);

(statearr_25884_25905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (2))){
var state_25874__$1 = state_25874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25874__$1,(4),ch);
} else {
if((state_val_25875 === (11))){
var inst_25851 = (state_25874[(7)]);
var inst_25861 = (state_25874[(2)]);
var state_25874__$1 = state_25874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25874__$1,(8),inst_25861,inst_25851);
} else {
if((state_val_25875 === (9))){
var state_25874__$1 = state_25874;
var statearr_25885_25906 = state_25874__$1;
(statearr_25885_25906[(2)] = tc);

(statearr_25885_25906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (5))){
var inst_25854 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25855 = cljs.core.async.close_BANG_.call(null,fc);
var state_25874__$1 = (function (){var statearr_25886 = state_25874;
(statearr_25886[(8)] = inst_25854);

return statearr_25886;
})();
var statearr_25887_25907 = state_25874__$1;
(statearr_25887_25907[(2)] = inst_25855);

(statearr_25887_25907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (14))){
var inst_25868 = (state_25874[(2)]);
var state_25874__$1 = state_25874;
var statearr_25888_25908 = state_25874__$1;
(statearr_25888_25908[(2)] = inst_25868);

(statearr_25888_25908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (10))){
var state_25874__$1 = state_25874;
var statearr_25889_25909 = state_25874__$1;
(statearr_25889_25909[(2)] = fc);

(statearr_25889_25909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25875 === (8))){
var inst_25863 = (state_25874[(2)]);
var state_25874__$1 = state_25874;
if(cljs.core.truth_(inst_25863)){
var statearr_25890_25910 = state_25874__$1;
(statearr_25890_25910[(1)] = (12));

} else {
var statearr_25891_25911 = state_25874__$1;
(statearr_25891_25911[(1)] = (13));

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
});})(c__23583__auto___25897,tc,fc))
;
return ((function (switch__23486__auto__,c__23583__auto___25897,tc,fc){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_25892 = [null,null,null,null,null,null,null,null,null];
(statearr_25892[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_25892[(1)] = (1));

return statearr_25892;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_25874){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25893){if((e25893 instanceof Object)){
var ex__23490__auto__ = e25893;
var statearr_25894_25912 = state_25874;
(statearr_25894_25912[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25913 = state_25874;
state_25874 = G__25913;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_25874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_25874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___25897,tc,fc))
})();
var state__23585__auto__ = (function (){var statearr_25895 = f__23584__auto__.call(null);
(statearr_25895[(6)] = c__23583__auto___25897);

return statearr_25895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___25897,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_25934){
var state_val_25935 = (state_25934[(1)]);
if((state_val_25935 === (7))){
var inst_25930 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25936_25954 = state_25934__$1;
(statearr_25936_25954[(2)] = inst_25930);

(statearr_25936_25954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (1))){
var inst_25914 = init;
var state_25934__$1 = (function (){var statearr_25937 = state_25934;
(statearr_25937[(7)] = inst_25914);

return statearr_25937;
})();
var statearr_25938_25955 = state_25934__$1;
(statearr_25938_25955[(2)] = null);

(statearr_25938_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (4))){
var inst_25917 = (state_25934[(8)]);
var inst_25917__$1 = (state_25934[(2)]);
var inst_25918 = (inst_25917__$1 == null);
var state_25934__$1 = (function (){var statearr_25939 = state_25934;
(statearr_25939[(8)] = inst_25917__$1);

return statearr_25939;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25940_25956 = state_25934__$1;
(statearr_25940_25956[(1)] = (5));

} else {
var statearr_25941_25957 = state_25934__$1;
(statearr_25941_25957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (6))){
var inst_25917 = (state_25934[(8)]);
var inst_25921 = (state_25934[(9)]);
var inst_25914 = (state_25934[(7)]);
var inst_25921__$1 = f.call(null,inst_25914,inst_25917);
var inst_25922 = cljs.core.reduced_QMARK_.call(null,inst_25921__$1);
var state_25934__$1 = (function (){var statearr_25942 = state_25934;
(statearr_25942[(9)] = inst_25921__$1);

return statearr_25942;
})();
if(inst_25922){
var statearr_25943_25958 = state_25934__$1;
(statearr_25943_25958[(1)] = (8));

} else {
var statearr_25944_25959 = state_25934__$1;
(statearr_25944_25959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (3))){
var inst_25932 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25934__$1,inst_25932);
} else {
if((state_val_25935 === (2))){
var state_25934__$1 = state_25934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25934__$1,(4),ch);
} else {
if((state_val_25935 === (9))){
var inst_25921 = (state_25934[(9)]);
var inst_25914 = inst_25921;
var state_25934__$1 = (function (){var statearr_25945 = state_25934;
(statearr_25945[(7)] = inst_25914);

return statearr_25945;
})();
var statearr_25946_25960 = state_25934__$1;
(statearr_25946_25960[(2)] = null);

(statearr_25946_25960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (5))){
var inst_25914 = (state_25934[(7)]);
var state_25934__$1 = state_25934;
var statearr_25947_25961 = state_25934__$1;
(statearr_25947_25961[(2)] = inst_25914);

(statearr_25947_25961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (10))){
var inst_25928 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25948_25962 = state_25934__$1;
(statearr_25948_25962[(2)] = inst_25928);

(statearr_25948_25962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (8))){
var inst_25921 = (state_25934[(9)]);
var inst_25924 = cljs.core.deref.call(null,inst_25921);
var state_25934__$1 = state_25934;
var statearr_25949_25963 = state_25934__$1;
(statearr_25949_25963[(2)] = inst_25924);

(statearr_25949_25963[(1)] = (10));


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
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23487__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23487__auto____0 = (function (){
var statearr_25950 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25950[(0)] = cljs$core$async$reduce_$_state_machine__23487__auto__);

(statearr_25950[(1)] = (1));

return statearr_25950;
});
var cljs$core$async$reduce_$_state_machine__23487__auto____1 = (function (state_25934){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25951){if((e25951 instanceof Object)){
var ex__23490__auto__ = e25951;
var statearr_25952_25964 = state_25934;
(statearr_25952_25964[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25965 = state_25934;
state_25934 = G__25965;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23487__auto__ = function(state_25934){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23487__auto____1.call(this,state_25934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23487__auto____0;
cljs$core$async$reduce_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23487__auto____1;
return cljs$core$async$reduce_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_25953 = f__23584__auto__.call(null);
(statearr_25953[(6)] = c__23583__auto__);

return statearr_25953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__,f__$1){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__,f__$1){
return (function (state_25971){
var state_val_25972 = (state_25971[(1)]);
if((state_val_25972 === (1))){
var inst_25966 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25971__$1 = state_25971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25971__$1,(2),inst_25966);
} else {
if((state_val_25972 === (2))){
var inst_25968 = (state_25971[(2)]);
var inst_25969 = f__$1.call(null,inst_25968);
var state_25971__$1 = state_25971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25971__$1,inst_25969);
} else {
return null;
}
}
});})(c__23583__auto__,f__$1))
;
return ((function (switch__23486__auto__,c__23583__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23487__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23487__auto____0 = (function (){
var statearr_25973 = [null,null,null,null,null,null,null];
(statearr_25973[(0)] = cljs$core$async$transduce_$_state_machine__23487__auto__);

(statearr_25973[(1)] = (1));

return statearr_25973;
});
var cljs$core$async$transduce_$_state_machine__23487__auto____1 = (function (state_25971){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_25971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object)){
var ex__23490__auto__ = e25974;
var statearr_25975_25977 = state_25971;
(statearr_25975_25977[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25978 = state_25971;
state_25971 = G__25978;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23487__auto__ = function(state_25971){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23487__auto____1.call(this,state_25971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23487__auto____0;
cljs$core$async$transduce_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23487__auto____1;
return cljs$core$async$transduce_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__,f__$1))
})();
var state__23585__auto__ = (function (){var statearr_25976 = f__23584__auto__.call(null);
(statearr_25976[(6)] = c__23583__auto__);

return statearr_25976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__,f__$1))
);

return c__23583__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25980 = arguments.length;
switch (G__25980) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_26005){
var state_val_26006 = (state_26005[(1)]);
if((state_val_26006 === (7))){
var inst_25987 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
var statearr_26007_26028 = state_26005__$1;
(statearr_26007_26028[(2)] = inst_25987);

(statearr_26007_26028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (1))){
var inst_25981 = cljs.core.seq.call(null,coll);
var inst_25982 = inst_25981;
var state_26005__$1 = (function (){var statearr_26008 = state_26005;
(statearr_26008[(7)] = inst_25982);

return statearr_26008;
})();
var statearr_26009_26029 = state_26005__$1;
(statearr_26009_26029[(2)] = null);

(statearr_26009_26029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (4))){
var inst_25982 = (state_26005[(7)]);
var inst_25985 = cljs.core.first.call(null,inst_25982);
var state_26005__$1 = state_26005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26005__$1,(7),ch,inst_25985);
} else {
if((state_val_26006 === (13))){
var inst_25999 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
var statearr_26010_26030 = state_26005__$1;
(statearr_26010_26030[(2)] = inst_25999);

(statearr_26010_26030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (6))){
var inst_25990 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
if(cljs.core.truth_(inst_25990)){
var statearr_26011_26031 = state_26005__$1;
(statearr_26011_26031[(1)] = (8));

} else {
var statearr_26012_26032 = state_26005__$1;
(statearr_26012_26032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (3))){
var inst_26003 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26005__$1,inst_26003);
} else {
if((state_val_26006 === (12))){
var state_26005__$1 = state_26005;
var statearr_26013_26033 = state_26005__$1;
(statearr_26013_26033[(2)] = null);

(statearr_26013_26033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (2))){
var inst_25982 = (state_26005[(7)]);
var state_26005__$1 = state_26005;
if(cljs.core.truth_(inst_25982)){
var statearr_26014_26034 = state_26005__$1;
(statearr_26014_26034[(1)] = (4));

} else {
var statearr_26015_26035 = state_26005__$1;
(statearr_26015_26035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (11))){
var inst_25996 = cljs.core.async.close_BANG_.call(null,ch);
var state_26005__$1 = state_26005;
var statearr_26016_26036 = state_26005__$1;
(statearr_26016_26036[(2)] = inst_25996);

(statearr_26016_26036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (9))){
var state_26005__$1 = state_26005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26017_26037 = state_26005__$1;
(statearr_26017_26037[(1)] = (11));

} else {
var statearr_26018_26038 = state_26005__$1;
(statearr_26018_26038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (5))){
var inst_25982 = (state_26005[(7)]);
var state_26005__$1 = state_26005;
var statearr_26019_26039 = state_26005__$1;
(statearr_26019_26039[(2)] = inst_25982);

(statearr_26019_26039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (10))){
var inst_26001 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
var statearr_26020_26040 = state_26005__$1;
(statearr_26020_26040[(2)] = inst_26001);

(statearr_26020_26040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (8))){
var inst_25982 = (state_26005[(7)]);
var inst_25992 = cljs.core.next.call(null,inst_25982);
var inst_25982__$1 = inst_25992;
var state_26005__$1 = (function (){var statearr_26021 = state_26005;
(statearr_26021[(7)] = inst_25982__$1);

return statearr_26021;
})();
var statearr_26022_26041 = state_26005__$1;
(statearr_26022_26041[(2)] = null);

(statearr_26022_26041[(1)] = (2));


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
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26023 = [null,null,null,null,null,null,null,null];
(statearr_26023[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26023[(1)] = (1));

return statearr_26023;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26005){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26024){if((e26024 instanceof Object)){
var ex__23490__auto__ = e26024;
var statearr_26025_26042 = state_26005;
(statearr_26025_26042[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26043 = state_26005;
state_26005 = G__26043;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_26026 = f__23584__auto__.call(null);
(statearr_26026[(6)] = c__23583__auto__);

return statearr_26026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26044 = (function (ch,cs,meta26045){
this.ch = ch;
this.cs = cs;
this.meta26045 = meta26045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26046,meta26045__$1){
var self__ = this;
var _26046__$1 = this;
return (new cljs.core.async.t_cljs$core$async26044(self__.ch,self__.cs,meta26045__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26046){
var self__ = this;
var _26046__$1 = this;
return self__.meta26045;
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26045","meta26045",1246951233,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26044";

cljs.core.async.t_cljs$core$async26044.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26044");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26044.
 */
cljs.core.async.__GT_t_cljs$core$async26044 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26044(ch__$1,cs__$1,meta26045){
return (new cljs.core.async.t_cljs$core$async26044(ch__$1,cs__$1,meta26045));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26044(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23583__auto___26266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26266,cs,m,dchan,dctr,done){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26266,cs,m,dchan,dctr,done){
return (function (state_26181){
var state_val_26182 = (state_26181[(1)]);
if((state_val_26182 === (7))){
var inst_26177 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26183_26267 = state_26181__$1;
(statearr_26183_26267[(2)] = inst_26177);

(statearr_26183_26267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (20))){
var inst_26080 = (state_26181[(7)]);
var inst_26092 = cljs.core.first.call(null,inst_26080);
var inst_26093 = cljs.core.nth.call(null,inst_26092,(0),null);
var inst_26094 = cljs.core.nth.call(null,inst_26092,(1),null);
var state_26181__$1 = (function (){var statearr_26184 = state_26181;
(statearr_26184[(8)] = inst_26093);

return statearr_26184;
})();
if(cljs.core.truth_(inst_26094)){
var statearr_26185_26268 = state_26181__$1;
(statearr_26185_26268[(1)] = (22));

} else {
var statearr_26186_26269 = state_26181__$1;
(statearr_26186_26269[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (27))){
var inst_26049 = (state_26181[(9)]);
var inst_26122 = (state_26181[(10)]);
var inst_26129 = (state_26181[(11)]);
var inst_26124 = (state_26181[(12)]);
var inst_26129__$1 = cljs.core._nth.call(null,inst_26122,inst_26124);
var inst_26130 = cljs.core.async.put_BANG_.call(null,inst_26129__$1,inst_26049,done);
var state_26181__$1 = (function (){var statearr_26187 = state_26181;
(statearr_26187[(11)] = inst_26129__$1);

return statearr_26187;
})();
if(cljs.core.truth_(inst_26130)){
var statearr_26188_26270 = state_26181__$1;
(statearr_26188_26270[(1)] = (30));

} else {
var statearr_26189_26271 = state_26181__$1;
(statearr_26189_26271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (1))){
var state_26181__$1 = state_26181;
var statearr_26190_26272 = state_26181__$1;
(statearr_26190_26272[(2)] = null);

(statearr_26190_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (24))){
var inst_26080 = (state_26181[(7)]);
var inst_26099 = (state_26181[(2)]);
var inst_26100 = cljs.core.next.call(null,inst_26080);
var inst_26058 = inst_26100;
var inst_26059 = null;
var inst_26060 = (0);
var inst_26061 = (0);
var state_26181__$1 = (function (){var statearr_26191 = state_26181;
(statearr_26191[(13)] = inst_26058);

(statearr_26191[(14)] = inst_26060);

(statearr_26191[(15)] = inst_26061);

(statearr_26191[(16)] = inst_26099);

(statearr_26191[(17)] = inst_26059);

return statearr_26191;
})();
var statearr_26192_26273 = state_26181__$1;
(statearr_26192_26273[(2)] = null);

(statearr_26192_26273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (39))){
var state_26181__$1 = state_26181;
var statearr_26196_26274 = state_26181__$1;
(statearr_26196_26274[(2)] = null);

(statearr_26196_26274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (4))){
var inst_26049 = (state_26181[(9)]);
var inst_26049__$1 = (state_26181[(2)]);
var inst_26050 = (inst_26049__$1 == null);
var state_26181__$1 = (function (){var statearr_26197 = state_26181;
(statearr_26197[(9)] = inst_26049__$1);

return statearr_26197;
})();
if(cljs.core.truth_(inst_26050)){
var statearr_26198_26275 = state_26181__$1;
(statearr_26198_26275[(1)] = (5));

} else {
var statearr_26199_26276 = state_26181__$1;
(statearr_26199_26276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (15))){
var inst_26058 = (state_26181[(13)]);
var inst_26060 = (state_26181[(14)]);
var inst_26061 = (state_26181[(15)]);
var inst_26059 = (state_26181[(17)]);
var inst_26076 = (state_26181[(2)]);
var inst_26077 = (inst_26061 + (1));
var tmp26193 = inst_26058;
var tmp26194 = inst_26060;
var tmp26195 = inst_26059;
var inst_26058__$1 = tmp26193;
var inst_26059__$1 = tmp26195;
var inst_26060__$1 = tmp26194;
var inst_26061__$1 = inst_26077;
var state_26181__$1 = (function (){var statearr_26200 = state_26181;
(statearr_26200[(13)] = inst_26058__$1);

(statearr_26200[(18)] = inst_26076);

(statearr_26200[(14)] = inst_26060__$1);

(statearr_26200[(15)] = inst_26061__$1);

(statearr_26200[(17)] = inst_26059__$1);

return statearr_26200;
})();
var statearr_26201_26277 = state_26181__$1;
(statearr_26201_26277[(2)] = null);

(statearr_26201_26277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (21))){
var inst_26103 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26205_26278 = state_26181__$1;
(statearr_26205_26278[(2)] = inst_26103);

(statearr_26205_26278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (31))){
var inst_26129 = (state_26181[(11)]);
var inst_26133 = done.call(null,null);
var inst_26134 = cljs.core.async.untap_STAR_.call(null,m,inst_26129);
var state_26181__$1 = (function (){var statearr_26206 = state_26181;
(statearr_26206[(19)] = inst_26133);

return statearr_26206;
})();
var statearr_26207_26279 = state_26181__$1;
(statearr_26207_26279[(2)] = inst_26134);

(statearr_26207_26279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (32))){
var inst_26122 = (state_26181[(10)]);
var inst_26123 = (state_26181[(20)]);
var inst_26121 = (state_26181[(21)]);
var inst_26124 = (state_26181[(12)]);
var inst_26136 = (state_26181[(2)]);
var inst_26137 = (inst_26124 + (1));
var tmp26202 = inst_26122;
var tmp26203 = inst_26123;
var tmp26204 = inst_26121;
var inst_26121__$1 = tmp26204;
var inst_26122__$1 = tmp26202;
var inst_26123__$1 = tmp26203;
var inst_26124__$1 = inst_26137;
var state_26181__$1 = (function (){var statearr_26208 = state_26181;
(statearr_26208[(10)] = inst_26122__$1);

(statearr_26208[(20)] = inst_26123__$1);

(statearr_26208[(21)] = inst_26121__$1);

(statearr_26208[(12)] = inst_26124__$1);

(statearr_26208[(22)] = inst_26136);

return statearr_26208;
})();
var statearr_26209_26280 = state_26181__$1;
(statearr_26209_26280[(2)] = null);

(statearr_26209_26280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (40))){
var inst_26149 = (state_26181[(23)]);
var inst_26153 = done.call(null,null);
var inst_26154 = cljs.core.async.untap_STAR_.call(null,m,inst_26149);
var state_26181__$1 = (function (){var statearr_26210 = state_26181;
(statearr_26210[(24)] = inst_26153);

return statearr_26210;
})();
var statearr_26211_26281 = state_26181__$1;
(statearr_26211_26281[(2)] = inst_26154);

(statearr_26211_26281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (33))){
var inst_26140 = (state_26181[(25)]);
var inst_26142 = cljs.core.chunked_seq_QMARK_.call(null,inst_26140);
var state_26181__$1 = state_26181;
if(inst_26142){
var statearr_26212_26282 = state_26181__$1;
(statearr_26212_26282[(1)] = (36));

} else {
var statearr_26213_26283 = state_26181__$1;
(statearr_26213_26283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (13))){
var inst_26070 = (state_26181[(26)]);
var inst_26073 = cljs.core.async.close_BANG_.call(null,inst_26070);
var state_26181__$1 = state_26181;
var statearr_26214_26284 = state_26181__$1;
(statearr_26214_26284[(2)] = inst_26073);

(statearr_26214_26284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (22))){
var inst_26093 = (state_26181[(8)]);
var inst_26096 = cljs.core.async.close_BANG_.call(null,inst_26093);
var state_26181__$1 = state_26181;
var statearr_26215_26285 = state_26181__$1;
(statearr_26215_26285[(2)] = inst_26096);

(statearr_26215_26285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (36))){
var inst_26140 = (state_26181[(25)]);
var inst_26144 = cljs.core.chunk_first.call(null,inst_26140);
var inst_26145 = cljs.core.chunk_rest.call(null,inst_26140);
var inst_26146 = cljs.core.count.call(null,inst_26144);
var inst_26121 = inst_26145;
var inst_26122 = inst_26144;
var inst_26123 = inst_26146;
var inst_26124 = (0);
var state_26181__$1 = (function (){var statearr_26216 = state_26181;
(statearr_26216[(10)] = inst_26122);

(statearr_26216[(20)] = inst_26123);

(statearr_26216[(21)] = inst_26121);

(statearr_26216[(12)] = inst_26124);

return statearr_26216;
})();
var statearr_26217_26286 = state_26181__$1;
(statearr_26217_26286[(2)] = null);

(statearr_26217_26286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (41))){
var inst_26140 = (state_26181[(25)]);
var inst_26156 = (state_26181[(2)]);
var inst_26157 = cljs.core.next.call(null,inst_26140);
var inst_26121 = inst_26157;
var inst_26122 = null;
var inst_26123 = (0);
var inst_26124 = (0);
var state_26181__$1 = (function (){var statearr_26218 = state_26181;
(statearr_26218[(10)] = inst_26122);

(statearr_26218[(20)] = inst_26123);

(statearr_26218[(21)] = inst_26121);

(statearr_26218[(12)] = inst_26124);

(statearr_26218[(27)] = inst_26156);

return statearr_26218;
})();
var statearr_26219_26287 = state_26181__$1;
(statearr_26219_26287[(2)] = null);

(statearr_26219_26287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (43))){
var state_26181__$1 = state_26181;
var statearr_26220_26288 = state_26181__$1;
(statearr_26220_26288[(2)] = null);

(statearr_26220_26288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (29))){
var inst_26165 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26221_26289 = state_26181__$1;
(statearr_26221_26289[(2)] = inst_26165);

(statearr_26221_26289[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (44))){
var inst_26174 = (state_26181[(2)]);
var state_26181__$1 = (function (){var statearr_26222 = state_26181;
(statearr_26222[(28)] = inst_26174);

return statearr_26222;
})();
var statearr_26223_26290 = state_26181__$1;
(statearr_26223_26290[(2)] = null);

(statearr_26223_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (6))){
var inst_26113 = (state_26181[(29)]);
var inst_26112 = cljs.core.deref.call(null,cs);
var inst_26113__$1 = cljs.core.keys.call(null,inst_26112);
var inst_26114 = cljs.core.count.call(null,inst_26113__$1);
var inst_26115 = cljs.core.reset_BANG_.call(null,dctr,inst_26114);
var inst_26120 = cljs.core.seq.call(null,inst_26113__$1);
var inst_26121 = inst_26120;
var inst_26122 = null;
var inst_26123 = (0);
var inst_26124 = (0);
var state_26181__$1 = (function (){var statearr_26224 = state_26181;
(statearr_26224[(30)] = inst_26115);

(statearr_26224[(10)] = inst_26122);

(statearr_26224[(20)] = inst_26123);

(statearr_26224[(29)] = inst_26113__$1);

(statearr_26224[(21)] = inst_26121);

(statearr_26224[(12)] = inst_26124);

return statearr_26224;
})();
var statearr_26225_26291 = state_26181__$1;
(statearr_26225_26291[(2)] = null);

(statearr_26225_26291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (28))){
var inst_26140 = (state_26181[(25)]);
var inst_26121 = (state_26181[(21)]);
var inst_26140__$1 = cljs.core.seq.call(null,inst_26121);
var state_26181__$1 = (function (){var statearr_26226 = state_26181;
(statearr_26226[(25)] = inst_26140__$1);

return statearr_26226;
})();
if(inst_26140__$1){
var statearr_26227_26292 = state_26181__$1;
(statearr_26227_26292[(1)] = (33));

} else {
var statearr_26228_26293 = state_26181__$1;
(statearr_26228_26293[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (25))){
var inst_26123 = (state_26181[(20)]);
var inst_26124 = (state_26181[(12)]);
var inst_26126 = (inst_26124 < inst_26123);
var inst_26127 = inst_26126;
var state_26181__$1 = state_26181;
if(cljs.core.truth_(inst_26127)){
var statearr_26229_26294 = state_26181__$1;
(statearr_26229_26294[(1)] = (27));

} else {
var statearr_26230_26295 = state_26181__$1;
(statearr_26230_26295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (34))){
var state_26181__$1 = state_26181;
var statearr_26231_26296 = state_26181__$1;
(statearr_26231_26296[(2)] = null);

(statearr_26231_26296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (17))){
var state_26181__$1 = state_26181;
var statearr_26232_26297 = state_26181__$1;
(statearr_26232_26297[(2)] = null);

(statearr_26232_26297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (3))){
var inst_26179 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26181__$1,inst_26179);
} else {
if((state_val_26182 === (12))){
var inst_26108 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26233_26298 = state_26181__$1;
(statearr_26233_26298[(2)] = inst_26108);

(statearr_26233_26298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (2))){
var state_26181__$1 = state_26181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26181__$1,(4),ch);
} else {
if((state_val_26182 === (23))){
var state_26181__$1 = state_26181;
var statearr_26234_26299 = state_26181__$1;
(statearr_26234_26299[(2)] = null);

(statearr_26234_26299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (35))){
var inst_26163 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26235_26300 = state_26181__$1;
(statearr_26235_26300[(2)] = inst_26163);

(statearr_26235_26300[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (19))){
var inst_26080 = (state_26181[(7)]);
var inst_26084 = cljs.core.chunk_first.call(null,inst_26080);
var inst_26085 = cljs.core.chunk_rest.call(null,inst_26080);
var inst_26086 = cljs.core.count.call(null,inst_26084);
var inst_26058 = inst_26085;
var inst_26059 = inst_26084;
var inst_26060 = inst_26086;
var inst_26061 = (0);
var state_26181__$1 = (function (){var statearr_26236 = state_26181;
(statearr_26236[(13)] = inst_26058);

(statearr_26236[(14)] = inst_26060);

(statearr_26236[(15)] = inst_26061);

(statearr_26236[(17)] = inst_26059);

return statearr_26236;
})();
var statearr_26237_26301 = state_26181__$1;
(statearr_26237_26301[(2)] = null);

(statearr_26237_26301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (11))){
var inst_26058 = (state_26181[(13)]);
var inst_26080 = (state_26181[(7)]);
var inst_26080__$1 = cljs.core.seq.call(null,inst_26058);
var state_26181__$1 = (function (){var statearr_26238 = state_26181;
(statearr_26238[(7)] = inst_26080__$1);

return statearr_26238;
})();
if(inst_26080__$1){
var statearr_26239_26302 = state_26181__$1;
(statearr_26239_26302[(1)] = (16));

} else {
var statearr_26240_26303 = state_26181__$1;
(statearr_26240_26303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (9))){
var inst_26110 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26241_26304 = state_26181__$1;
(statearr_26241_26304[(2)] = inst_26110);

(statearr_26241_26304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (5))){
var inst_26056 = cljs.core.deref.call(null,cs);
var inst_26057 = cljs.core.seq.call(null,inst_26056);
var inst_26058 = inst_26057;
var inst_26059 = null;
var inst_26060 = (0);
var inst_26061 = (0);
var state_26181__$1 = (function (){var statearr_26242 = state_26181;
(statearr_26242[(13)] = inst_26058);

(statearr_26242[(14)] = inst_26060);

(statearr_26242[(15)] = inst_26061);

(statearr_26242[(17)] = inst_26059);

return statearr_26242;
})();
var statearr_26243_26305 = state_26181__$1;
(statearr_26243_26305[(2)] = null);

(statearr_26243_26305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (14))){
var state_26181__$1 = state_26181;
var statearr_26244_26306 = state_26181__$1;
(statearr_26244_26306[(2)] = null);

(statearr_26244_26306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (45))){
var inst_26171 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26245_26307 = state_26181__$1;
(statearr_26245_26307[(2)] = inst_26171);

(statearr_26245_26307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (26))){
var inst_26113 = (state_26181[(29)]);
var inst_26167 = (state_26181[(2)]);
var inst_26168 = cljs.core.seq.call(null,inst_26113);
var state_26181__$1 = (function (){var statearr_26246 = state_26181;
(statearr_26246[(31)] = inst_26167);

return statearr_26246;
})();
if(inst_26168){
var statearr_26247_26308 = state_26181__$1;
(statearr_26247_26308[(1)] = (42));

} else {
var statearr_26248_26309 = state_26181__$1;
(statearr_26248_26309[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (16))){
var inst_26080 = (state_26181[(7)]);
var inst_26082 = cljs.core.chunked_seq_QMARK_.call(null,inst_26080);
var state_26181__$1 = state_26181;
if(inst_26082){
var statearr_26249_26310 = state_26181__$1;
(statearr_26249_26310[(1)] = (19));

} else {
var statearr_26250_26311 = state_26181__$1;
(statearr_26250_26311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (38))){
var inst_26160 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26251_26312 = state_26181__$1;
(statearr_26251_26312[(2)] = inst_26160);

(statearr_26251_26312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (30))){
var state_26181__$1 = state_26181;
var statearr_26252_26313 = state_26181__$1;
(statearr_26252_26313[(2)] = null);

(statearr_26252_26313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (10))){
var inst_26061 = (state_26181[(15)]);
var inst_26059 = (state_26181[(17)]);
var inst_26069 = cljs.core._nth.call(null,inst_26059,inst_26061);
var inst_26070 = cljs.core.nth.call(null,inst_26069,(0),null);
var inst_26071 = cljs.core.nth.call(null,inst_26069,(1),null);
var state_26181__$1 = (function (){var statearr_26253 = state_26181;
(statearr_26253[(26)] = inst_26070);

return statearr_26253;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26254_26314 = state_26181__$1;
(statearr_26254_26314[(1)] = (13));

} else {
var statearr_26255_26315 = state_26181__$1;
(statearr_26255_26315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (18))){
var inst_26106 = (state_26181[(2)]);
var state_26181__$1 = state_26181;
var statearr_26256_26316 = state_26181__$1;
(statearr_26256_26316[(2)] = inst_26106);

(statearr_26256_26316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (42))){
var state_26181__$1 = state_26181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26181__$1,(45),dchan);
} else {
if((state_val_26182 === (37))){
var inst_26049 = (state_26181[(9)]);
var inst_26149 = (state_26181[(23)]);
var inst_26140 = (state_26181[(25)]);
var inst_26149__$1 = cljs.core.first.call(null,inst_26140);
var inst_26150 = cljs.core.async.put_BANG_.call(null,inst_26149__$1,inst_26049,done);
var state_26181__$1 = (function (){var statearr_26257 = state_26181;
(statearr_26257[(23)] = inst_26149__$1);

return statearr_26257;
})();
if(cljs.core.truth_(inst_26150)){
var statearr_26258_26317 = state_26181__$1;
(statearr_26258_26317[(1)] = (39));

} else {
var statearr_26259_26318 = state_26181__$1;
(statearr_26259_26318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26182 === (8))){
var inst_26060 = (state_26181[(14)]);
var inst_26061 = (state_26181[(15)]);
var inst_26063 = (inst_26061 < inst_26060);
var inst_26064 = inst_26063;
var state_26181__$1 = state_26181;
if(cljs.core.truth_(inst_26064)){
var statearr_26260_26319 = state_26181__$1;
(statearr_26260_26319[(1)] = (10));

} else {
var statearr_26261_26320 = state_26181__$1;
(statearr_26261_26320[(1)] = (11));

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
});})(c__23583__auto___26266,cs,m,dchan,dctr,done))
;
return ((function (switch__23486__auto__,c__23583__auto___26266,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23487__auto__ = null;
var cljs$core$async$mult_$_state_machine__23487__auto____0 = (function (){
var statearr_26262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26262[(0)] = cljs$core$async$mult_$_state_machine__23487__auto__);

(statearr_26262[(1)] = (1));

return statearr_26262;
});
var cljs$core$async$mult_$_state_machine__23487__auto____1 = (function (state_26181){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26263){if((e26263 instanceof Object)){
var ex__23490__auto__ = e26263;
var statearr_26264_26321 = state_26181;
(statearr_26264_26321[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26322 = state_26181;
state_26181 = G__26322;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23487__auto__ = function(state_26181){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23487__auto____1.call(this,state_26181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23487__auto____0;
cljs$core$async$mult_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23487__auto____1;
return cljs$core$async$mult_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26266,cs,m,dchan,dctr,done))
})();
var state__23585__auto__ = (function (){var statearr_26265 = f__23584__auto__.call(null);
(statearr_26265[(6)] = c__23583__auto___26266);

return statearr_26265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26266,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26324 = arguments.length;
switch (G__26324) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26336 = arguments.length;
var i__4731__auto___26337 = (0);
while(true){
if((i__4731__auto___26337 < len__4730__auto___26336)){
args__4736__auto__.push((arguments[i__4731__auto___26337]));

var G__26338 = (i__4731__auto___26337 + (1));
i__4731__auto___26337 = G__26338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26330){
var map__26331 = p__26330;
var map__26331__$1 = (((((!((map__26331 == null))))?(((((map__26331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26331):map__26331);
var opts = map__26331__$1;
var statearr_26333_26339 = state;
(statearr_26333_26339[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26331,map__26331__$1,opts){
return (function (val){
var statearr_26334_26340 = state;
(statearr_26334_26340[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26331,map__26331__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26335_26341 = state;
(statearr_26335_26341[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26326){
var G__26327 = cljs.core.first.call(null,seq26326);
var seq26326__$1 = cljs.core.next.call(null,seq26326);
var G__26328 = cljs.core.first.call(null,seq26326__$1);
var seq26326__$2 = cljs.core.next.call(null,seq26326__$1);
var G__26329 = cljs.core.first.call(null,seq26326__$2);
var seq26326__$3 = cljs.core.next.call(null,seq26326__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26327,G__26328,G__26329,seq26326__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26342 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26343){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26343 = meta26343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26344,meta26343__$1){
var self__ = this;
var _26344__$1 = this;
return (new cljs.core.async.t_cljs$core$async26342(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26343__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26344){
var self__ = this;
var _26344__$1 = this;
return self__.meta26343;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26343","meta26343",98192213,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26342";

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26342");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26342.
 */
cljs.core.async.__GT_t_cljs$core$async26342 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26342(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26343){
return (new cljs.core.async.t_cljs$core$async26342(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26343));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26342(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23583__auto___26506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26446){
var state_val_26447 = (state_26446[(1)]);
if((state_val_26447 === (7))){
var inst_26361 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
var statearr_26448_26507 = state_26446__$1;
(statearr_26448_26507[(2)] = inst_26361);

(statearr_26448_26507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (20))){
var inst_26373 = (state_26446[(7)]);
var state_26446__$1 = state_26446;
var statearr_26449_26508 = state_26446__$1;
(statearr_26449_26508[(2)] = inst_26373);

(statearr_26449_26508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (27))){
var state_26446__$1 = state_26446;
var statearr_26450_26509 = state_26446__$1;
(statearr_26450_26509[(2)] = null);

(statearr_26450_26509[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (1))){
var inst_26348 = (state_26446[(8)]);
var inst_26348__$1 = calc_state.call(null);
var inst_26350 = (inst_26348__$1 == null);
var inst_26351 = cljs.core.not.call(null,inst_26350);
var state_26446__$1 = (function (){var statearr_26451 = state_26446;
(statearr_26451[(8)] = inst_26348__$1);

return statearr_26451;
})();
if(inst_26351){
var statearr_26452_26510 = state_26446__$1;
(statearr_26452_26510[(1)] = (2));

} else {
var statearr_26453_26511 = state_26446__$1;
(statearr_26453_26511[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (24))){
var inst_26406 = (state_26446[(9)]);
var inst_26420 = (state_26446[(10)]);
var inst_26397 = (state_26446[(11)]);
var inst_26420__$1 = inst_26397.call(null,inst_26406);
var state_26446__$1 = (function (){var statearr_26454 = state_26446;
(statearr_26454[(10)] = inst_26420__$1);

return statearr_26454;
})();
if(cljs.core.truth_(inst_26420__$1)){
var statearr_26455_26512 = state_26446__$1;
(statearr_26455_26512[(1)] = (29));

} else {
var statearr_26456_26513 = state_26446__$1;
(statearr_26456_26513[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (4))){
var inst_26364 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26364)){
var statearr_26457_26514 = state_26446__$1;
(statearr_26457_26514[(1)] = (8));

} else {
var statearr_26458_26515 = state_26446__$1;
(statearr_26458_26515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (15))){
var inst_26391 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26391)){
var statearr_26459_26516 = state_26446__$1;
(statearr_26459_26516[(1)] = (19));

} else {
var statearr_26460_26517 = state_26446__$1;
(statearr_26460_26517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (21))){
var inst_26396 = (state_26446[(12)]);
var inst_26396__$1 = (state_26446[(2)]);
var inst_26397 = cljs.core.get.call(null,inst_26396__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26398 = cljs.core.get.call(null,inst_26396__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26399 = cljs.core.get.call(null,inst_26396__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26446__$1 = (function (){var statearr_26461 = state_26446;
(statearr_26461[(13)] = inst_26398);

(statearr_26461[(11)] = inst_26397);

(statearr_26461[(12)] = inst_26396__$1);

return statearr_26461;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26446__$1,(22),inst_26399);
} else {
if((state_val_26447 === (31))){
var inst_26428 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26428)){
var statearr_26462_26518 = state_26446__$1;
(statearr_26462_26518[(1)] = (32));

} else {
var statearr_26463_26519 = state_26446__$1;
(statearr_26463_26519[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (32))){
var inst_26405 = (state_26446[(14)]);
var state_26446__$1 = state_26446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26446__$1,(35),out,inst_26405);
} else {
if((state_val_26447 === (33))){
var inst_26396 = (state_26446[(12)]);
var inst_26373 = inst_26396;
var state_26446__$1 = (function (){var statearr_26464 = state_26446;
(statearr_26464[(7)] = inst_26373);

return statearr_26464;
})();
var statearr_26465_26520 = state_26446__$1;
(statearr_26465_26520[(2)] = null);

(statearr_26465_26520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (13))){
var inst_26373 = (state_26446[(7)]);
var inst_26380 = inst_26373.cljs$lang$protocol_mask$partition0$;
var inst_26381 = (inst_26380 & (64));
var inst_26382 = inst_26373.cljs$core$ISeq$;
var inst_26383 = (cljs.core.PROTOCOL_SENTINEL === inst_26382);
var inst_26384 = ((inst_26381) || (inst_26383));
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26384)){
var statearr_26466_26521 = state_26446__$1;
(statearr_26466_26521[(1)] = (16));

} else {
var statearr_26467_26522 = state_26446__$1;
(statearr_26467_26522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (22))){
var inst_26406 = (state_26446[(9)]);
var inst_26405 = (state_26446[(14)]);
var inst_26404 = (state_26446[(2)]);
var inst_26405__$1 = cljs.core.nth.call(null,inst_26404,(0),null);
var inst_26406__$1 = cljs.core.nth.call(null,inst_26404,(1),null);
var inst_26407 = (inst_26405__$1 == null);
var inst_26408 = cljs.core._EQ_.call(null,inst_26406__$1,change);
var inst_26409 = ((inst_26407) || (inst_26408));
var state_26446__$1 = (function (){var statearr_26468 = state_26446;
(statearr_26468[(9)] = inst_26406__$1);

(statearr_26468[(14)] = inst_26405__$1);

return statearr_26468;
})();
if(cljs.core.truth_(inst_26409)){
var statearr_26469_26523 = state_26446__$1;
(statearr_26469_26523[(1)] = (23));

} else {
var statearr_26470_26524 = state_26446__$1;
(statearr_26470_26524[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (36))){
var inst_26396 = (state_26446[(12)]);
var inst_26373 = inst_26396;
var state_26446__$1 = (function (){var statearr_26471 = state_26446;
(statearr_26471[(7)] = inst_26373);

return statearr_26471;
})();
var statearr_26472_26525 = state_26446__$1;
(statearr_26472_26525[(2)] = null);

(statearr_26472_26525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (29))){
var inst_26420 = (state_26446[(10)]);
var state_26446__$1 = state_26446;
var statearr_26473_26526 = state_26446__$1;
(statearr_26473_26526[(2)] = inst_26420);

(statearr_26473_26526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (6))){
var state_26446__$1 = state_26446;
var statearr_26474_26527 = state_26446__$1;
(statearr_26474_26527[(2)] = false);

(statearr_26474_26527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (28))){
var inst_26416 = (state_26446[(2)]);
var inst_26417 = calc_state.call(null);
var inst_26373 = inst_26417;
var state_26446__$1 = (function (){var statearr_26475 = state_26446;
(statearr_26475[(7)] = inst_26373);

(statearr_26475[(15)] = inst_26416);

return statearr_26475;
})();
var statearr_26476_26528 = state_26446__$1;
(statearr_26476_26528[(2)] = null);

(statearr_26476_26528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (25))){
var inst_26442 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
var statearr_26477_26529 = state_26446__$1;
(statearr_26477_26529[(2)] = inst_26442);

(statearr_26477_26529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (34))){
var inst_26440 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
var statearr_26478_26530 = state_26446__$1;
(statearr_26478_26530[(2)] = inst_26440);

(statearr_26478_26530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (17))){
var state_26446__$1 = state_26446;
var statearr_26479_26531 = state_26446__$1;
(statearr_26479_26531[(2)] = false);

(statearr_26479_26531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (3))){
var state_26446__$1 = state_26446;
var statearr_26480_26532 = state_26446__$1;
(statearr_26480_26532[(2)] = false);

(statearr_26480_26532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (12))){
var inst_26444 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26446__$1,inst_26444);
} else {
if((state_val_26447 === (2))){
var inst_26348 = (state_26446[(8)]);
var inst_26353 = inst_26348.cljs$lang$protocol_mask$partition0$;
var inst_26354 = (inst_26353 & (64));
var inst_26355 = inst_26348.cljs$core$ISeq$;
var inst_26356 = (cljs.core.PROTOCOL_SENTINEL === inst_26355);
var inst_26357 = ((inst_26354) || (inst_26356));
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26357)){
var statearr_26481_26533 = state_26446__$1;
(statearr_26481_26533[(1)] = (5));

} else {
var statearr_26482_26534 = state_26446__$1;
(statearr_26482_26534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (23))){
var inst_26405 = (state_26446[(14)]);
var inst_26411 = (inst_26405 == null);
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26411)){
var statearr_26483_26535 = state_26446__$1;
(statearr_26483_26535[(1)] = (26));

} else {
var statearr_26484_26536 = state_26446__$1;
(statearr_26484_26536[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (35))){
var inst_26431 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
if(cljs.core.truth_(inst_26431)){
var statearr_26485_26537 = state_26446__$1;
(statearr_26485_26537[(1)] = (36));

} else {
var statearr_26486_26538 = state_26446__$1;
(statearr_26486_26538[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (19))){
var inst_26373 = (state_26446[(7)]);
var inst_26393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26373);
var state_26446__$1 = state_26446;
var statearr_26487_26539 = state_26446__$1;
(statearr_26487_26539[(2)] = inst_26393);

(statearr_26487_26539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (11))){
var inst_26373 = (state_26446[(7)]);
var inst_26377 = (inst_26373 == null);
var inst_26378 = cljs.core.not.call(null,inst_26377);
var state_26446__$1 = state_26446;
if(inst_26378){
var statearr_26488_26540 = state_26446__$1;
(statearr_26488_26540[(1)] = (13));

} else {
var statearr_26489_26541 = state_26446__$1;
(statearr_26489_26541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (9))){
var inst_26348 = (state_26446[(8)]);
var state_26446__$1 = state_26446;
var statearr_26490_26542 = state_26446__$1;
(statearr_26490_26542[(2)] = inst_26348);

(statearr_26490_26542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (5))){
var state_26446__$1 = state_26446;
var statearr_26491_26543 = state_26446__$1;
(statearr_26491_26543[(2)] = true);

(statearr_26491_26543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (14))){
var state_26446__$1 = state_26446;
var statearr_26492_26544 = state_26446__$1;
(statearr_26492_26544[(2)] = false);

(statearr_26492_26544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (26))){
var inst_26406 = (state_26446[(9)]);
var inst_26413 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26406);
var state_26446__$1 = state_26446;
var statearr_26493_26545 = state_26446__$1;
(statearr_26493_26545[(2)] = inst_26413);

(statearr_26493_26545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (16))){
var state_26446__$1 = state_26446;
var statearr_26494_26546 = state_26446__$1;
(statearr_26494_26546[(2)] = true);

(statearr_26494_26546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (38))){
var inst_26436 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
var statearr_26495_26547 = state_26446__$1;
(statearr_26495_26547[(2)] = inst_26436);

(statearr_26495_26547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (30))){
var inst_26406 = (state_26446[(9)]);
var inst_26398 = (state_26446[(13)]);
var inst_26397 = (state_26446[(11)]);
var inst_26423 = cljs.core.empty_QMARK_.call(null,inst_26397);
var inst_26424 = inst_26398.call(null,inst_26406);
var inst_26425 = cljs.core.not.call(null,inst_26424);
var inst_26426 = ((inst_26423) && (inst_26425));
var state_26446__$1 = state_26446;
var statearr_26496_26548 = state_26446__$1;
(statearr_26496_26548[(2)] = inst_26426);

(statearr_26496_26548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (10))){
var inst_26348 = (state_26446[(8)]);
var inst_26369 = (state_26446[(2)]);
var inst_26370 = cljs.core.get.call(null,inst_26369,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26371 = cljs.core.get.call(null,inst_26369,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26372 = cljs.core.get.call(null,inst_26369,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26373 = inst_26348;
var state_26446__$1 = (function (){var statearr_26497 = state_26446;
(statearr_26497[(7)] = inst_26373);

(statearr_26497[(16)] = inst_26370);

(statearr_26497[(17)] = inst_26371);

(statearr_26497[(18)] = inst_26372);

return statearr_26497;
})();
var statearr_26498_26549 = state_26446__$1;
(statearr_26498_26549[(2)] = null);

(statearr_26498_26549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (18))){
var inst_26388 = (state_26446[(2)]);
var state_26446__$1 = state_26446;
var statearr_26499_26550 = state_26446__$1;
(statearr_26499_26550[(2)] = inst_26388);

(statearr_26499_26550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (37))){
var state_26446__$1 = state_26446;
var statearr_26500_26551 = state_26446__$1;
(statearr_26500_26551[(2)] = null);

(statearr_26500_26551[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26447 === (8))){
var inst_26348 = (state_26446[(8)]);
var inst_26366 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26348);
var state_26446__$1 = state_26446;
var statearr_26501_26552 = state_26446__$1;
(statearr_26501_26552[(2)] = inst_26366);

(statearr_26501_26552[(1)] = (10));


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
});})(c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23486__auto__,c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23487__auto__ = null;
var cljs$core$async$mix_$_state_machine__23487__auto____0 = (function (){
var statearr_26502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26502[(0)] = cljs$core$async$mix_$_state_machine__23487__auto__);

(statearr_26502[(1)] = (1));

return statearr_26502;
});
var cljs$core$async$mix_$_state_machine__23487__auto____1 = (function (state_26446){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26503){if((e26503 instanceof Object)){
var ex__23490__auto__ = e26503;
var statearr_26504_26553 = state_26446;
(statearr_26504_26553[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26554 = state_26446;
state_26446 = G__26554;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23487__auto__ = function(state_26446){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23487__auto____1.call(this,state_26446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23487__auto____0;
cljs$core$async$mix_$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23487__auto____1;
return cljs$core$async$mix_$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23585__auto__ = (function (){var statearr_26505 = f__23584__auto__.call(null);
(statearr_26505[(6)] = c__23583__auto___26506);

return statearr_26505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26506,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26556 = arguments.length;
switch (G__26556) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26560 = arguments.length;
switch (G__26560) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__26558_SHARP_){
if(cljs.core.truth_(p1__26558_SHARP_.call(null,topic))){
return p1__26558_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26558_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26561 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26562){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26562 = meta26562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26563,meta26562__$1){
var self__ = this;
var _26563__$1 = this;
return (new cljs.core.async.t_cljs$core$async26561(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26562__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26563){
var self__ = this;
var _26563__$1 = this;
return self__.meta26562;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26562","meta26562",2143889613,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26561";

cljs.core.async.t_cljs$core$async26561.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26561");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26561.
 */
cljs.core.async.__GT_t_cljs$core$async26561 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26562){
return (new cljs.core.async.t_cljs$core$async26561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26562));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26561(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23583__auto___26681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26681,mults,ensure_mult,p){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26681,mults,ensure_mult,p){
return (function (state_26635){
var state_val_26636 = (state_26635[(1)]);
if((state_val_26636 === (7))){
var inst_26631 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26637_26682 = state_26635__$1;
(statearr_26637_26682[(2)] = inst_26631);

(statearr_26637_26682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (20))){
var state_26635__$1 = state_26635;
var statearr_26638_26683 = state_26635__$1;
(statearr_26638_26683[(2)] = null);

(statearr_26638_26683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (1))){
var state_26635__$1 = state_26635;
var statearr_26639_26684 = state_26635__$1;
(statearr_26639_26684[(2)] = null);

(statearr_26639_26684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (24))){
var inst_26614 = (state_26635[(7)]);
var inst_26623 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26614);
var state_26635__$1 = state_26635;
var statearr_26640_26685 = state_26635__$1;
(statearr_26640_26685[(2)] = inst_26623);

(statearr_26640_26685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (4))){
var inst_26566 = (state_26635[(8)]);
var inst_26566__$1 = (state_26635[(2)]);
var inst_26567 = (inst_26566__$1 == null);
var state_26635__$1 = (function (){var statearr_26641 = state_26635;
(statearr_26641[(8)] = inst_26566__$1);

return statearr_26641;
})();
if(cljs.core.truth_(inst_26567)){
var statearr_26642_26686 = state_26635__$1;
(statearr_26642_26686[(1)] = (5));

} else {
var statearr_26643_26687 = state_26635__$1;
(statearr_26643_26687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (15))){
var inst_26608 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26644_26688 = state_26635__$1;
(statearr_26644_26688[(2)] = inst_26608);

(statearr_26644_26688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (21))){
var inst_26628 = (state_26635[(2)]);
var state_26635__$1 = (function (){var statearr_26645 = state_26635;
(statearr_26645[(9)] = inst_26628);

return statearr_26645;
})();
var statearr_26646_26689 = state_26635__$1;
(statearr_26646_26689[(2)] = null);

(statearr_26646_26689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (13))){
var inst_26590 = (state_26635[(10)]);
var inst_26592 = cljs.core.chunked_seq_QMARK_.call(null,inst_26590);
var state_26635__$1 = state_26635;
if(inst_26592){
var statearr_26647_26690 = state_26635__$1;
(statearr_26647_26690[(1)] = (16));

} else {
var statearr_26648_26691 = state_26635__$1;
(statearr_26648_26691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (22))){
var inst_26620 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26620)){
var statearr_26649_26692 = state_26635__$1;
(statearr_26649_26692[(1)] = (23));

} else {
var statearr_26650_26693 = state_26635__$1;
(statearr_26650_26693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (6))){
var inst_26614 = (state_26635[(7)]);
var inst_26566 = (state_26635[(8)]);
var inst_26616 = (state_26635[(11)]);
var inst_26614__$1 = topic_fn.call(null,inst_26566);
var inst_26615 = cljs.core.deref.call(null,mults);
var inst_26616__$1 = cljs.core.get.call(null,inst_26615,inst_26614__$1);
var state_26635__$1 = (function (){var statearr_26651 = state_26635;
(statearr_26651[(7)] = inst_26614__$1);

(statearr_26651[(11)] = inst_26616__$1);

return statearr_26651;
})();
if(cljs.core.truth_(inst_26616__$1)){
var statearr_26652_26694 = state_26635__$1;
(statearr_26652_26694[(1)] = (19));

} else {
var statearr_26653_26695 = state_26635__$1;
(statearr_26653_26695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (25))){
var inst_26625 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26654_26696 = state_26635__$1;
(statearr_26654_26696[(2)] = inst_26625);

(statearr_26654_26696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (17))){
var inst_26590 = (state_26635[(10)]);
var inst_26599 = cljs.core.first.call(null,inst_26590);
var inst_26600 = cljs.core.async.muxch_STAR_.call(null,inst_26599);
var inst_26601 = cljs.core.async.close_BANG_.call(null,inst_26600);
var inst_26602 = cljs.core.next.call(null,inst_26590);
var inst_26576 = inst_26602;
var inst_26577 = null;
var inst_26578 = (0);
var inst_26579 = (0);
var state_26635__$1 = (function (){var statearr_26655 = state_26635;
(statearr_26655[(12)] = inst_26576);

(statearr_26655[(13)] = inst_26577);

(statearr_26655[(14)] = inst_26601);

(statearr_26655[(15)] = inst_26579);

(statearr_26655[(16)] = inst_26578);

return statearr_26655;
})();
var statearr_26656_26697 = state_26635__$1;
(statearr_26656_26697[(2)] = null);

(statearr_26656_26697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (3))){
var inst_26633 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26635__$1,inst_26633);
} else {
if((state_val_26636 === (12))){
var inst_26610 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26657_26698 = state_26635__$1;
(statearr_26657_26698[(2)] = inst_26610);

(statearr_26657_26698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (2))){
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(4),ch);
} else {
if((state_val_26636 === (23))){
var state_26635__$1 = state_26635;
var statearr_26658_26699 = state_26635__$1;
(statearr_26658_26699[(2)] = null);

(statearr_26658_26699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (19))){
var inst_26566 = (state_26635[(8)]);
var inst_26616 = (state_26635[(11)]);
var inst_26618 = cljs.core.async.muxch_STAR_.call(null,inst_26616);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26635__$1,(22),inst_26618,inst_26566);
} else {
if((state_val_26636 === (11))){
var inst_26576 = (state_26635[(12)]);
var inst_26590 = (state_26635[(10)]);
var inst_26590__$1 = cljs.core.seq.call(null,inst_26576);
var state_26635__$1 = (function (){var statearr_26659 = state_26635;
(statearr_26659[(10)] = inst_26590__$1);

return statearr_26659;
})();
if(inst_26590__$1){
var statearr_26660_26700 = state_26635__$1;
(statearr_26660_26700[(1)] = (13));

} else {
var statearr_26661_26701 = state_26635__$1;
(statearr_26661_26701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (9))){
var inst_26612 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26662_26702 = state_26635__$1;
(statearr_26662_26702[(2)] = inst_26612);

(statearr_26662_26702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (5))){
var inst_26573 = cljs.core.deref.call(null,mults);
var inst_26574 = cljs.core.vals.call(null,inst_26573);
var inst_26575 = cljs.core.seq.call(null,inst_26574);
var inst_26576 = inst_26575;
var inst_26577 = null;
var inst_26578 = (0);
var inst_26579 = (0);
var state_26635__$1 = (function (){var statearr_26663 = state_26635;
(statearr_26663[(12)] = inst_26576);

(statearr_26663[(13)] = inst_26577);

(statearr_26663[(15)] = inst_26579);

(statearr_26663[(16)] = inst_26578);

return statearr_26663;
})();
var statearr_26664_26703 = state_26635__$1;
(statearr_26664_26703[(2)] = null);

(statearr_26664_26703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (14))){
var state_26635__$1 = state_26635;
var statearr_26668_26704 = state_26635__$1;
(statearr_26668_26704[(2)] = null);

(statearr_26668_26704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (16))){
var inst_26590 = (state_26635[(10)]);
var inst_26594 = cljs.core.chunk_first.call(null,inst_26590);
var inst_26595 = cljs.core.chunk_rest.call(null,inst_26590);
var inst_26596 = cljs.core.count.call(null,inst_26594);
var inst_26576 = inst_26595;
var inst_26577 = inst_26594;
var inst_26578 = inst_26596;
var inst_26579 = (0);
var state_26635__$1 = (function (){var statearr_26669 = state_26635;
(statearr_26669[(12)] = inst_26576);

(statearr_26669[(13)] = inst_26577);

(statearr_26669[(15)] = inst_26579);

(statearr_26669[(16)] = inst_26578);

return statearr_26669;
})();
var statearr_26670_26705 = state_26635__$1;
(statearr_26670_26705[(2)] = null);

(statearr_26670_26705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (10))){
var inst_26576 = (state_26635[(12)]);
var inst_26577 = (state_26635[(13)]);
var inst_26579 = (state_26635[(15)]);
var inst_26578 = (state_26635[(16)]);
var inst_26584 = cljs.core._nth.call(null,inst_26577,inst_26579);
var inst_26585 = cljs.core.async.muxch_STAR_.call(null,inst_26584);
var inst_26586 = cljs.core.async.close_BANG_.call(null,inst_26585);
var inst_26587 = (inst_26579 + (1));
var tmp26665 = inst_26576;
var tmp26666 = inst_26577;
var tmp26667 = inst_26578;
var inst_26576__$1 = tmp26665;
var inst_26577__$1 = tmp26666;
var inst_26578__$1 = tmp26667;
var inst_26579__$1 = inst_26587;
var state_26635__$1 = (function (){var statearr_26671 = state_26635;
(statearr_26671[(12)] = inst_26576__$1);

(statearr_26671[(17)] = inst_26586);

(statearr_26671[(13)] = inst_26577__$1);

(statearr_26671[(15)] = inst_26579__$1);

(statearr_26671[(16)] = inst_26578__$1);

return statearr_26671;
})();
var statearr_26672_26706 = state_26635__$1;
(statearr_26672_26706[(2)] = null);

(statearr_26672_26706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (18))){
var inst_26605 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26673_26707 = state_26635__$1;
(statearr_26673_26707[(2)] = inst_26605);

(statearr_26673_26707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (8))){
var inst_26579 = (state_26635[(15)]);
var inst_26578 = (state_26635[(16)]);
var inst_26581 = (inst_26579 < inst_26578);
var inst_26582 = inst_26581;
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26582)){
var statearr_26674_26708 = state_26635__$1;
(statearr_26674_26708[(1)] = (10));

} else {
var statearr_26675_26709 = state_26635__$1;
(statearr_26675_26709[(1)] = (11));

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
});})(c__23583__auto___26681,mults,ensure_mult,p))
;
return ((function (switch__23486__auto__,c__23583__auto___26681,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26676[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26676[(1)] = (1));

return statearr_26676;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26635){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26677){if((e26677 instanceof Object)){
var ex__23490__auto__ = e26677;
var statearr_26678_26710 = state_26635;
(statearr_26678_26710[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26711 = state_26635;
state_26635 = G__26711;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26681,mults,ensure_mult,p))
})();
var state__23585__auto__ = (function (){var statearr_26679 = f__23584__auto__.call(null);
(statearr_26679[(6)] = c__23583__auto___26681);

return statearr_26679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26681,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26713 = arguments.length;
switch (G__26713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26716 = arguments.length;
switch (G__26716) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26719 = arguments.length;
switch (G__26719) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23583__auto___26786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26758){
var state_val_26759 = (state_26758[(1)]);
if((state_val_26759 === (7))){
var state_26758__$1 = state_26758;
var statearr_26760_26787 = state_26758__$1;
(statearr_26760_26787[(2)] = null);

(statearr_26760_26787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (1))){
var state_26758__$1 = state_26758;
var statearr_26761_26788 = state_26758__$1;
(statearr_26761_26788[(2)] = null);

(statearr_26761_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (4))){
var inst_26722 = (state_26758[(7)]);
var inst_26724 = (inst_26722 < cnt);
var state_26758__$1 = state_26758;
if(cljs.core.truth_(inst_26724)){
var statearr_26762_26789 = state_26758__$1;
(statearr_26762_26789[(1)] = (6));

} else {
var statearr_26763_26790 = state_26758__$1;
(statearr_26763_26790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (15))){
var inst_26754 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26764_26791 = state_26758__$1;
(statearr_26764_26791[(2)] = inst_26754);

(statearr_26764_26791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (13))){
var inst_26747 = cljs.core.async.close_BANG_.call(null,out);
var state_26758__$1 = state_26758;
var statearr_26765_26792 = state_26758__$1;
(statearr_26765_26792[(2)] = inst_26747);

(statearr_26765_26792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (6))){
var state_26758__$1 = state_26758;
var statearr_26766_26793 = state_26758__$1;
(statearr_26766_26793[(2)] = null);

(statearr_26766_26793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (3))){
var inst_26756 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26758__$1,inst_26756);
} else {
if((state_val_26759 === (12))){
var inst_26744 = (state_26758[(8)]);
var inst_26744__$1 = (state_26758[(2)]);
var inst_26745 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26744__$1);
var state_26758__$1 = (function (){var statearr_26767 = state_26758;
(statearr_26767[(8)] = inst_26744__$1);

return statearr_26767;
})();
if(cljs.core.truth_(inst_26745)){
var statearr_26768_26794 = state_26758__$1;
(statearr_26768_26794[(1)] = (13));

} else {
var statearr_26769_26795 = state_26758__$1;
(statearr_26769_26795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (2))){
var inst_26721 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26722 = (0);
var state_26758__$1 = (function (){var statearr_26770 = state_26758;
(statearr_26770[(7)] = inst_26722);

(statearr_26770[(9)] = inst_26721);

return statearr_26770;
})();
var statearr_26771_26796 = state_26758__$1;
(statearr_26771_26796[(2)] = null);

(statearr_26771_26796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (11))){
var inst_26722 = (state_26758[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26758,(10),Object,null,(9));
var inst_26731 = chs__$1.call(null,inst_26722);
var inst_26732 = done.call(null,inst_26722);
var inst_26733 = cljs.core.async.take_BANG_.call(null,inst_26731,inst_26732);
var state_26758__$1 = state_26758;
var statearr_26772_26797 = state_26758__$1;
(statearr_26772_26797[(2)] = inst_26733);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (9))){
var inst_26722 = (state_26758[(7)]);
var inst_26735 = (state_26758[(2)]);
var inst_26736 = (inst_26722 + (1));
var inst_26722__$1 = inst_26736;
var state_26758__$1 = (function (){var statearr_26773 = state_26758;
(statearr_26773[(7)] = inst_26722__$1);

(statearr_26773[(10)] = inst_26735);

return statearr_26773;
})();
var statearr_26774_26798 = state_26758__$1;
(statearr_26774_26798[(2)] = null);

(statearr_26774_26798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (5))){
var inst_26742 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26775 = state_26758;
(statearr_26775[(11)] = inst_26742);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(12),dchan);
} else {
if((state_val_26759 === (14))){
var inst_26744 = (state_26758[(8)]);
var inst_26749 = cljs.core.apply.call(null,f,inst_26744);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26758__$1,(16),out,inst_26749);
} else {
if((state_val_26759 === (16))){
var inst_26751 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26776 = state_26758;
(statearr_26776[(12)] = inst_26751);

return statearr_26776;
})();
var statearr_26777_26799 = state_26758__$1;
(statearr_26777_26799[(2)] = null);

(statearr_26777_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (10))){
var inst_26726 = (state_26758[(2)]);
var inst_26727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26758__$1 = (function (){var statearr_26778 = state_26758;
(statearr_26778[(13)] = inst_26726);

return statearr_26778;
})();
var statearr_26779_26800 = state_26758__$1;
(statearr_26779_26800[(2)] = inst_26727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (8))){
var inst_26740 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26780_26801 = state_26758__$1;
(statearr_26780_26801[(2)] = inst_26740);

(statearr_26780_26801[(1)] = (5));


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
});})(c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23486__auto__,c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26781[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26781[(1)] = (1));

return statearr_26781;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26758){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26782){if((e26782 instanceof Object)){
var ex__23490__auto__ = e26782;
var statearr_26783_26802 = state_26758;
(statearr_26783_26802[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26803 = state_26758;
state_26758 = G__26803;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23585__auto__ = (function (){var statearr_26784 = f__23584__auto__.call(null);
(statearr_26784[(6)] = c__23583__auto___26786);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26786,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26806 = arguments.length;
switch (G__26806) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___26860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26860,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26860,out){
return (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (7))){
var inst_26818 = (state_26838[(7)]);
var inst_26817 = (state_26838[(8)]);
var inst_26817__$1 = (state_26838[(2)]);
var inst_26818__$1 = cljs.core.nth.call(null,inst_26817__$1,(0),null);
var inst_26819 = cljs.core.nth.call(null,inst_26817__$1,(1),null);
var inst_26820 = (inst_26818__$1 == null);
var state_26838__$1 = (function (){var statearr_26840 = state_26838;
(statearr_26840[(7)] = inst_26818__$1);

(statearr_26840[(9)] = inst_26819);

(statearr_26840[(8)] = inst_26817__$1);

return statearr_26840;
})();
if(cljs.core.truth_(inst_26820)){
var statearr_26841_26861 = state_26838__$1;
(statearr_26841_26861[(1)] = (8));

} else {
var statearr_26842_26862 = state_26838__$1;
(statearr_26842_26862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (1))){
var inst_26807 = cljs.core.vec.call(null,chs);
var inst_26808 = inst_26807;
var state_26838__$1 = (function (){var statearr_26843 = state_26838;
(statearr_26843[(10)] = inst_26808);

return statearr_26843;
})();
var statearr_26844_26863 = state_26838__$1;
(statearr_26844_26863[(2)] = null);

(statearr_26844_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (4))){
var inst_26808 = (state_26838[(10)]);
var state_26838__$1 = state_26838;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26838__$1,(7),inst_26808);
} else {
if((state_val_26839 === (6))){
var inst_26834 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26845_26864 = state_26838__$1;
(statearr_26845_26864[(2)] = inst_26834);

(statearr_26845_26864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (3))){
var inst_26836 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26838__$1,inst_26836);
} else {
if((state_val_26839 === (2))){
var inst_26808 = (state_26838[(10)]);
var inst_26810 = cljs.core.count.call(null,inst_26808);
var inst_26811 = (inst_26810 > (0));
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26811)){
var statearr_26847_26865 = state_26838__$1;
(statearr_26847_26865[(1)] = (4));

} else {
var statearr_26848_26866 = state_26838__$1;
(statearr_26848_26866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (11))){
var inst_26808 = (state_26838[(10)]);
var inst_26827 = (state_26838[(2)]);
var tmp26846 = inst_26808;
var inst_26808__$1 = tmp26846;
var state_26838__$1 = (function (){var statearr_26849 = state_26838;
(statearr_26849[(11)] = inst_26827);

(statearr_26849[(10)] = inst_26808__$1);

return statearr_26849;
})();
var statearr_26850_26867 = state_26838__$1;
(statearr_26850_26867[(2)] = null);

(statearr_26850_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (9))){
var inst_26818 = (state_26838[(7)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26838__$1,(11),out,inst_26818);
} else {
if((state_val_26839 === (5))){
var inst_26832 = cljs.core.async.close_BANG_.call(null,out);
var state_26838__$1 = state_26838;
var statearr_26851_26868 = state_26838__$1;
(statearr_26851_26868[(2)] = inst_26832);

(statearr_26851_26868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (10))){
var inst_26830 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26852_26869 = state_26838__$1;
(statearr_26852_26869[(2)] = inst_26830);

(statearr_26852_26869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (8))){
var inst_26818 = (state_26838[(7)]);
var inst_26819 = (state_26838[(9)]);
var inst_26808 = (state_26838[(10)]);
var inst_26817 = (state_26838[(8)]);
var inst_26822 = (function (){var cs = inst_26808;
var vec__26813 = inst_26817;
var v = inst_26818;
var c = inst_26819;
return ((function (cs,vec__26813,v,c,inst_26818,inst_26819,inst_26808,inst_26817,state_val_26839,c__23583__auto___26860,out){
return (function (p1__26804_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26804_SHARP_);
});
;})(cs,vec__26813,v,c,inst_26818,inst_26819,inst_26808,inst_26817,state_val_26839,c__23583__auto___26860,out))
})();
var inst_26823 = cljs.core.filterv.call(null,inst_26822,inst_26808);
var inst_26808__$1 = inst_26823;
var state_26838__$1 = (function (){var statearr_26853 = state_26838;
(statearr_26853[(10)] = inst_26808__$1);

return statearr_26853;
})();
var statearr_26854_26870 = state_26838__$1;
(statearr_26854_26870[(2)] = null);

(statearr_26854_26870[(1)] = (2));


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
});})(c__23583__auto___26860,out))
;
return ((function (switch__23486__auto__,c__23583__auto___26860,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26855[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26855[(1)] = (1));

return statearr_26855;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26838){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26856){if((e26856 instanceof Object)){
var ex__23490__auto__ = e26856;
var statearr_26857_26871 = state_26838;
(statearr_26857_26871[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26872 = state_26838;
state_26838 = G__26872;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26860,out))
})();
var state__23585__auto__ = (function (){var statearr_26858 = f__23584__auto__.call(null);
(statearr_26858[(6)] = c__23583__auto___26860);

return statearr_26858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26860,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26874 = arguments.length;
switch (G__26874) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___26919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26919,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26919,out){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26880 = (state_26898[(7)]);
var inst_26880__$1 = (state_26898[(2)]);
var inst_26881 = (inst_26880__$1 == null);
var inst_26882 = cljs.core.not.call(null,inst_26881);
var state_26898__$1 = (function (){var statearr_26900 = state_26898;
(statearr_26900[(7)] = inst_26880__$1);

return statearr_26900;
})();
if(inst_26882){
var statearr_26901_26920 = state_26898__$1;
(statearr_26901_26920[(1)] = (8));

} else {
var statearr_26902_26921 = state_26898__$1;
(statearr_26902_26921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (1))){
var inst_26875 = (0);
var state_26898__$1 = (function (){var statearr_26903 = state_26898;
(statearr_26903[(8)] = inst_26875);

return statearr_26903;
})();
var statearr_26904_26922 = state_26898__$1;
(statearr_26904_26922[(2)] = null);

(statearr_26904_26922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(7),ch);
} else {
if((state_val_26899 === (6))){
var inst_26893 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26905_26923 = state_26898__$1;
(statearr_26905_26923[(2)] = inst_26893);

(statearr_26905_26923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26895 = (state_26898[(2)]);
var inst_26896 = cljs.core.async.close_BANG_.call(null,out);
var state_26898__$1 = (function (){var statearr_26906 = state_26898;
(statearr_26906[(9)] = inst_26895);

return statearr_26906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (2))){
var inst_26875 = (state_26898[(8)]);
var inst_26877 = (inst_26875 < n);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26877)){
var statearr_26907_26924 = state_26898__$1;
(statearr_26907_26924[(1)] = (4));

} else {
var statearr_26908_26925 = state_26898__$1;
(statearr_26908_26925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (11))){
var inst_26875 = (state_26898[(8)]);
var inst_26885 = (state_26898[(2)]);
var inst_26886 = (inst_26875 + (1));
var inst_26875__$1 = inst_26886;
var state_26898__$1 = (function (){var statearr_26909 = state_26898;
(statearr_26909[(8)] = inst_26875__$1);

(statearr_26909[(10)] = inst_26885);

return statearr_26909;
})();
var statearr_26910_26926 = state_26898__$1;
(statearr_26910_26926[(2)] = null);

(statearr_26910_26926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (9))){
var state_26898__$1 = state_26898;
var statearr_26911_26927 = state_26898__$1;
(statearr_26911_26927[(2)] = null);

(statearr_26911_26927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (5))){
var state_26898__$1 = state_26898;
var statearr_26912_26928 = state_26898__$1;
(statearr_26912_26928[(2)] = null);

(statearr_26912_26928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (10))){
var inst_26890 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26913_26929 = state_26898__$1;
(statearr_26913_26929[(2)] = inst_26890);

(statearr_26913_26929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (8))){
var inst_26880 = (state_26898[(7)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26898__$1,(11),out,inst_26880);
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
});})(c__23583__auto___26919,out))
;
return ((function (switch__23486__auto__,c__23583__auto___26919,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26914[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26914[(1)] = (1));

return statearr_26914;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26898){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26915){if((e26915 instanceof Object)){
var ex__23490__auto__ = e26915;
var statearr_26916_26930 = state_26898;
(statearr_26916_26930[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26931 = state_26898;
state_26898 = G__26931;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26919,out))
})();
var state__23585__auto__ = (function (){var statearr_26917 = f__23584__auto__.call(null);
(statearr_26917[(6)] = c__23583__auto___26919);

return statearr_26917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26919,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26933 = (function (f,ch,meta26934){
this.f = f;
this.ch = ch;
this.meta26934 = meta26934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26935,meta26934__$1){
var self__ = this;
var _26935__$1 = this;
return (new cljs.core.async.t_cljs$core$async26933(self__.f,self__.ch,meta26934__$1));
});

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26935){
var self__ = this;
var _26935__$1 = this;
return self__.meta26934;
});

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26936 = (function (f,ch,meta26934,_,fn1,meta26937){
this.f = f;
this.ch = ch;
this.meta26934 = meta26934;
this._ = _;
this.fn1 = fn1;
this.meta26937 = meta26937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26938,meta26937__$1){
var self__ = this;
var _26938__$1 = this;
return (new cljs.core.async.t_cljs$core$async26936(self__.f,self__.ch,self__.meta26934,self__._,self__.fn1,meta26937__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26938){
var self__ = this;
var _26938__$1 = this;
return self__.meta26937;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26932_SHARP_){
return f1.call(null,(((p1__26932_SHARP_ == null))?null:self__.f.call(null,p1__26932_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26934","meta26934",-13643692,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26933","cljs.core.async/t_cljs$core$async26933",826004539,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26937","meta26937",82312382,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26936";

cljs.core.async.t_cljs$core$async26936.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26936");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26936.
 */
cljs.core.async.__GT_t_cljs$core$async26936 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26936(f__$1,ch__$1,meta26934__$1,___$2,fn1__$1,meta26937){
return (new cljs.core.async.t_cljs$core$async26936(f__$1,ch__$1,meta26934__$1,___$2,fn1__$1,meta26937));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26936(self__.f,self__.ch,self__.meta26934,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26934","meta26934",-13643692,null)], null);
});

cljs.core.async.t_cljs$core$async26933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26933";

cljs.core.async.t_cljs$core$async26933.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26933.
 */
cljs.core.async.__GT_t_cljs$core$async26933 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26933(f__$1,ch__$1,meta26934){
return (new cljs.core.async.t_cljs$core$async26933(f__$1,ch__$1,meta26934));
});

}

return (new cljs.core.async.t_cljs$core$async26933(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26939 = (function (f,ch,meta26940){
this.f = f;
this.ch = ch;
this.meta26940 = meta26940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26941,meta26940__$1){
var self__ = this;
var _26941__$1 = this;
return (new cljs.core.async.t_cljs$core$async26939(self__.f,self__.ch,meta26940__$1));
});

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26941){
var self__ = this;
var _26941__$1 = this;
return self__.meta26940;
});

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26940","meta26940",-720819213,null)], null);
});

cljs.core.async.t_cljs$core$async26939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26939";

cljs.core.async.t_cljs$core$async26939.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26939");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26939.
 */
cljs.core.async.__GT_t_cljs$core$async26939 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26939(f__$1,ch__$1,meta26940){
return (new cljs.core.async.t_cljs$core$async26939(f__$1,ch__$1,meta26940));
});

}

return (new cljs.core.async.t_cljs$core$async26939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26942 = (function (p,ch,meta26943){
this.p = p;
this.ch = ch;
this.meta26943 = meta26943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26944,meta26943__$1){
var self__ = this;
var _26944__$1 = this;
return (new cljs.core.async.t_cljs$core$async26942(self__.p,self__.ch,meta26943__$1));
});

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26944){
var self__ = this;
var _26944__$1 = this;
return self__.meta26943;
});

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26943","meta26943",358827807,null)], null);
});

cljs.core.async.t_cljs$core$async26942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26942";

cljs.core.async.t_cljs$core$async26942.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26942");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26942.
 */
cljs.core.async.__GT_t_cljs$core$async26942 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26942(p__$1,ch__$1,meta26943){
return (new cljs.core.async.t_cljs$core$async26942(p__$1,ch__$1,meta26943));
});

}

return (new cljs.core.async.t_cljs$core$async26942(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26946 = arguments.length;
switch (G__26946) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___26986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___26986,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___26986,out){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26969_26987 = state_26967__$1;
(statearr_26969_26987[(2)] = inst_26963);

(statearr_26969_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (1))){
var state_26967__$1 = state_26967;
var statearr_26970_26988 = state_26967__$1;
(statearr_26970_26988[(2)] = null);

(statearr_26970_26988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26949 = (state_26967[(7)]);
var inst_26949__$1 = (state_26967[(2)]);
var inst_26950 = (inst_26949__$1 == null);
var state_26967__$1 = (function (){var statearr_26971 = state_26967;
(statearr_26971[(7)] = inst_26949__$1);

return statearr_26971;
})();
if(cljs.core.truth_(inst_26950)){
var statearr_26972_26989 = state_26967__$1;
(statearr_26972_26989[(1)] = (5));

} else {
var statearr_26973_26990 = state_26967__$1;
(statearr_26973_26990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var inst_26949 = (state_26967[(7)]);
var inst_26954 = p.call(null,inst_26949);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26954)){
var statearr_26974_26991 = state_26967__$1;
(statearr_26974_26991[(1)] = (8));

} else {
var statearr_26975_26992 = state_26967__$1;
(statearr_26975_26992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(4),ch);
} else {
if((state_val_26968 === (11))){
var inst_26957 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26976_26993 = state_26967__$1;
(statearr_26976_26993[(2)] = inst_26957);

(statearr_26976_26993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (9))){
var state_26967__$1 = state_26967;
var statearr_26977_26994 = state_26967__$1;
(statearr_26977_26994[(2)] = null);

(statearr_26977_26994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var inst_26952 = cljs.core.async.close_BANG_.call(null,out);
var state_26967__$1 = state_26967;
var statearr_26978_26995 = state_26967__$1;
(statearr_26978_26995[(2)] = inst_26952);

(statearr_26978_26995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (10))){
var inst_26960 = (state_26967[(2)]);
var state_26967__$1 = (function (){var statearr_26979 = state_26967;
(statearr_26979[(8)] = inst_26960);

return statearr_26979;
})();
var statearr_26980_26996 = state_26967__$1;
(statearr_26980_26996[(2)] = null);

(statearr_26980_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26949 = (state_26967[(7)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(11),out,inst_26949);
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
});})(c__23583__auto___26986,out))
;
return ((function (switch__23486__auto__,c__23583__auto___26986,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_26981 = [null,null,null,null,null,null,null,null,null];
(statearr_26981[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_26981[(1)] = (1));

return statearr_26981;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_26967){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e26982){if((e26982 instanceof Object)){
var ex__23490__auto__ = e26982;
var statearr_26983_26997 = state_26967;
(statearr_26983_26997[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26967;
state_26967 = G__26998;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___26986,out))
})();
var state__23585__auto__ = (function (){var statearr_26984 = f__23584__auto__.call(null);
(statearr_26984[(6)] = c__23583__auto___26986);

return statearr_26984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___26986,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27000 = arguments.length;
switch (G__27000) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto__){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto__){
return (function (state_27063){
var state_val_27064 = (state_27063[(1)]);
if((state_val_27064 === (7))){
var inst_27059 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27065_27103 = state_27063__$1;
(statearr_27065_27103[(2)] = inst_27059);

(statearr_27065_27103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (20))){
var inst_27029 = (state_27063[(7)]);
var inst_27040 = (state_27063[(2)]);
var inst_27041 = cljs.core.next.call(null,inst_27029);
var inst_27015 = inst_27041;
var inst_27016 = null;
var inst_27017 = (0);
var inst_27018 = (0);
var state_27063__$1 = (function (){var statearr_27066 = state_27063;
(statearr_27066[(8)] = inst_27018);

(statearr_27066[(9)] = inst_27015);

(statearr_27066[(10)] = inst_27016);

(statearr_27066[(11)] = inst_27040);

(statearr_27066[(12)] = inst_27017);

return statearr_27066;
})();
var statearr_27067_27104 = state_27063__$1;
(statearr_27067_27104[(2)] = null);

(statearr_27067_27104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (1))){
var state_27063__$1 = state_27063;
var statearr_27068_27105 = state_27063__$1;
(statearr_27068_27105[(2)] = null);

(statearr_27068_27105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (4))){
var inst_27004 = (state_27063[(13)]);
var inst_27004__$1 = (state_27063[(2)]);
var inst_27005 = (inst_27004__$1 == null);
var state_27063__$1 = (function (){var statearr_27069 = state_27063;
(statearr_27069[(13)] = inst_27004__$1);

return statearr_27069;
})();
if(cljs.core.truth_(inst_27005)){
var statearr_27070_27106 = state_27063__$1;
(statearr_27070_27106[(1)] = (5));

} else {
var statearr_27071_27107 = state_27063__$1;
(statearr_27071_27107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (15))){
var state_27063__$1 = state_27063;
var statearr_27075_27108 = state_27063__$1;
(statearr_27075_27108[(2)] = null);

(statearr_27075_27108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (21))){
var state_27063__$1 = state_27063;
var statearr_27076_27109 = state_27063__$1;
(statearr_27076_27109[(2)] = null);

(statearr_27076_27109[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (13))){
var inst_27018 = (state_27063[(8)]);
var inst_27015 = (state_27063[(9)]);
var inst_27016 = (state_27063[(10)]);
var inst_27017 = (state_27063[(12)]);
var inst_27025 = (state_27063[(2)]);
var inst_27026 = (inst_27018 + (1));
var tmp27072 = inst_27015;
var tmp27073 = inst_27016;
var tmp27074 = inst_27017;
var inst_27015__$1 = tmp27072;
var inst_27016__$1 = tmp27073;
var inst_27017__$1 = tmp27074;
var inst_27018__$1 = inst_27026;
var state_27063__$1 = (function (){var statearr_27077 = state_27063;
(statearr_27077[(8)] = inst_27018__$1);

(statearr_27077[(9)] = inst_27015__$1);

(statearr_27077[(14)] = inst_27025);

(statearr_27077[(10)] = inst_27016__$1);

(statearr_27077[(12)] = inst_27017__$1);

return statearr_27077;
})();
var statearr_27078_27110 = state_27063__$1;
(statearr_27078_27110[(2)] = null);

(statearr_27078_27110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (22))){
var state_27063__$1 = state_27063;
var statearr_27079_27111 = state_27063__$1;
(statearr_27079_27111[(2)] = null);

(statearr_27079_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (6))){
var inst_27004 = (state_27063[(13)]);
var inst_27013 = f.call(null,inst_27004);
var inst_27014 = cljs.core.seq.call(null,inst_27013);
var inst_27015 = inst_27014;
var inst_27016 = null;
var inst_27017 = (0);
var inst_27018 = (0);
var state_27063__$1 = (function (){var statearr_27080 = state_27063;
(statearr_27080[(8)] = inst_27018);

(statearr_27080[(9)] = inst_27015);

(statearr_27080[(10)] = inst_27016);

(statearr_27080[(12)] = inst_27017);

return statearr_27080;
})();
var statearr_27081_27112 = state_27063__$1;
(statearr_27081_27112[(2)] = null);

(statearr_27081_27112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (17))){
var inst_27029 = (state_27063[(7)]);
var inst_27033 = cljs.core.chunk_first.call(null,inst_27029);
var inst_27034 = cljs.core.chunk_rest.call(null,inst_27029);
var inst_27035 = cljs.core.count.call(null,inst_27033);
var inst_27015 = inst_27034;
var inst_27016 = inst_27033;
var inst_27017 = inst_27035;
var inst_27018 = (0);
var state_27063__$1 = (function (){var statearr_27082 = state_27063;
(statearr_27082[(8)] = inst_27018);

(statearr_27082[(9)] = inst_27015);

(statearr_27082[(10)] = inst_27016);

(statearr_27082[(12)] = inst_27017);

return statearr_27082;
})();
var statearr_27083_27113 = state_27063__$1;
(statearr_27083_27113[(2)] = null);

(statearr_27083_27113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (3))){
var inst_27061 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27063__$1,inst_27061);
} else {
if((state_val_27064 === (12))){
var inst_27049 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27084_27114 = state_27063__$1;
(statearr_27084_27114[(2)] = inst_27049);

(statearr_27084_27114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (2))){
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27063__$1,(4),in$);
} else {
if((state_val_27064 === (23))){
var inst_27057 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27085_27115 = state_27063__$1;
(statearr_27085_27115[(2)] = inst_27057);

(statearr_27085_27115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (19))){
var inst_27044 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27086_27116 = state_27063__$1;
(statearr_27086_27116[(2)] = inst_27044);

(statearr_27086_27116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (11))){
var inst_27015 = (state_27063[(9)]);
var inst_27029 = (state_27063[(7)]);
var inst_27029__$1 = cljs.core.seq.call(null,inst_27015);
var state_27063__$1 = (function (){var statearr_27087 = state_27063;
(statearr_27087[(7)] = inst_27029__$1);

return statearr_27087;
})();
if(inst_27029__$1){
var statearr_27088_27117 = state_27063__$1;
(statearr_27088_27117[(1)] = (14));

} else {
var statearr_27089_27118 = state_27063__$1;
(statearr_27089_27118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (9))){
var inst_27051 = (state_27063[(2)]);
var inst_27052 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27063__$1 = (function (){var statearr_27090 = state_27063;
(statearr_27090[(15)] = inst_27051);

return statearr_27090;
})();
if(cljs.core.truth_(inst_27052)){
var statearr_27091_27119 = state_27063__$1;
(statearr_27091_27119[(1)] = (21));

} else {
var statearr_27092_27120 = state_27063__$1;
(statearr_27092_27120[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (5))){
var inst_27007 = cljs.core.async.close_BANG_.call(null,out);
var state_27063__$1 = state_27063;
var statearr_27093_27121 = state_27063__$1;
(statearr_27093_27121[(2)] = inst_27007);

(statearr_27093_27121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (14))){
var inst_27029 = (state_27063[(7)]);
var inst_27031 = cljs.core.chunked_seq_QMARK_.call(null,inst_27029);
var state_27063__$1 = state_27063;
if(inst_27031){
var statearr_27094_27122 = state_27063__$1;
(statearr_27094_27122[(1)] = (17));

} else {
var statearr_27095_27123 = state_27063__$1;
(statearr_27095_27123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (16))){
var inst_27047 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27096_27124 = state_27063__$1;
(statearr_27096_27124[(2)] = inst_27047);

(statearr_27096_27124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (10))){
var inst_27018 = (state_27063[(8)]);
var inst_27016 = (state_27063[(10)]);
var inst_27023 = cljs.core._nth.call(null,inst_27016,inst_27018);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27063__$1,(13),out,inst_27023);
} else {
if((state_val_27064 === (18))){
var inst_27029 = (state_27063[(7)]);
var inst_27038 = cljs.core.first.call(null,inst_27029);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27063__$1,(20),out,inst_27038);
} else {
if((state_val_27064 === (8))){
var inst_27018 = (state_27063[(8)]);
var inst_27017 = (state_27063[(12)]);
var inst_27020 = (inst_27018 < inst_27017);
var inst_27021 = inst_27020;
var state_27063__$1 = state_27063;
if(cljs.core.truth_(inst_27021)){
var statearr_27097_27125 = state_27063__$1;
(statearr_27097_27125[(1)] = (10));

} else {
var statearr_27098_27126 = state_27063__$1;
(statearr_27098_27126[(1)] = (11));

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
});})(c__23583__auto__))
;
return ((function (switch__23486__auto__,c__23583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____0 = (function (){
var statearr_27099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27099[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__);

(statearr_27099[(1)] = (1));

return statearr_27099;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____1 = (function (state_27063){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_27063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e27100){if((e27100 instanceof Object)){
var ex__23490__auto__ = e27100;
var statearr_27101_27127 = state_27063;
(statearr_27101_27127[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27128 = state_27063;
state_27063 = G__27128;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__ = function(state_27063){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____1.call(this,state_27063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto__))
})();
var state__23585__auto__ = (function (){var statearr_27102 = f__23584__auto__.call(null);
(statearr_27102[(6)] = c__23583__auto__);

return statearr_27102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto__))
);

return c__23583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27130 = arguments.length;
switch (G__27130) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27133 = arguments.length;
switch (G__27133) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27136 = arguments.length;
switch (G__27136) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___27183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___27183,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___27183,out){
return (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (7))){
var inst_27155 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27162_27184 = state_27160__$1;
(statearr_27162_27184[(2)] = inst_27155);

(statearr_27162_27184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (1))){
var inst_27137 = null;
var state_27160__$1 = (function (){var statearr_27163 = state_27160;
(statearr_27163[(7)] = inst_27137);

return statearr_27163;
})();
var statearr_27164_27185 = state_27160__$1;
(statearr_27164_27185[(2)] = null);

(statearr_27164_27185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (4))){
var inst_27140 = (state_27160[(8)]);
var inst_27140__$1 = (state_27160[(2)]);
var inst_27141 = (inst_27140__$1 == null);
var inst_27142 = cljs.core.not.call(null,inst_27141);
var state_27160__$1 = (function (){var statearr_27165 = state_27160;
(statearr_27165[(8)] = inst_27140__$1);

return statearr_27165;
})();
if(inst_27142){
var statearr_27166_27186 = state_27160__$1;
(statearr_27166_27186[(1)] = (5));

} else {
var statearr_27167_27187 = state_27160__$1;
(statearr_27167_27187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (6))){
var state_27160__$1 = state_27160;
var statearr_27168_27188 = state_27160__$1;
(statearr_27168_27188[(2)] = null);

(statearr_27168_27188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (3))){
var inst_27157 = (state_27160[(2)]);
var inst_27158 = cljs.core.async.close_BANG_.call(null,out);
var state_27160__$1 = (function (){var statearr_27169 = state_27160;
(statearr_27169[(9)] = inst_27157);

return statearr_27169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27160__$1,inst_27158);
} else {
if((state_val_27161 === (2))){
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27160__$1,(4),ch);
} else {
if((state_val_27161 === (11))){
var inst_27140 = (state_27160[(8)]);
var inst_27149 = (state_27160[(2)]);
var inst_27137 = inst_27140;
var state_27160__$1 = (function (){var statearr_27170 = state_27160;
(statearr_27170[(10)] = inst_27149);

(statearr_27170[(7)] = inst_27137);

return statearr_27170;
})();
var statearr_27171_27189 = state_27160__$1;
(statearr_27171_27189[(2)] = null);

(statearr_27171_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (9))){
var inst_27140 = (state_27160[(8)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27160__$1,(11),out,inst_27140);
} else {
if((state_val_27161 === (5))){
var inst_27140 = (state_27160[(8)]);
var inst_27137 = (state_27160[(7)]);
var inst_27144 = cljs.core._EQ_.call(null,inst_27140,inst_27137);
var state_27160__$1 = state_27160;
if(inst_27144){
var statearr_27173_27190 = state_27160__$1;
(statearr_27173_27190[(1)] = (8));

} else {
var statearr_27174_27191 = state_27160__$1;
(statearr_27174_27191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (10))){
var inst_27152 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27175_27192 = state_27160__$1;
(statearr_27175_27192[(2)] = inst_27152);

(statearr_27175_27192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (8))){
var inst_27137 = (state_27160[(7)]);
var tmp27172 = inst_27137;
var inst_27137__$1 = tmp27172;
var state_27160__$1 = (function (){var statearr_27176 = state_27160;
(statearr_27176[(7)] = inst_27137__$1);

return statearr_27176;
})();
var statearr_27177_27193 = state_27160__$1;
(statearr_27177_27193[(2)] = null);

(statearr_27177_27193[(1)] = (2));


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
});})(c__23583__auto___27183,out))
;
return ((function (switch__23486__auto__,c__23583__auto___27183,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_27178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27178[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_27178[(1)] = (1));

return statearr_27178;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_27160){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_27160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e27179){if((e27179 instanceof Object)){
var ex__23490__auto__ = e27179;
var statearr_27180_27194 = state_27160;
(statearr_27180_27194[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27195 = state_27160;
state_27160 = G__27195;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___27183,out))
})();
var state__23585__auto__ = (function (){var statearr_27181 = f__23584__auto__.call(null);
(statearr_27181[(6)] = c__23583__auto___27183);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___27183,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27197 = arguments.length;
switch (G__27197) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___27263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___27263,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___27263,out){
return (function (state_27235){
var state_val_27236 = (state_27235[(1)]);
if((state_val_27236 === (7))){
var inst_27231 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27237_27264 = state_27235__$1;
(statearr_27237_27264[(2)] = inst_27231);

(statearr_27237_27264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (1))){
var inst_27198 = (new Array(n));
var inst_27199 = inst_27198;
var inst_27200 = (0);
var state_27235__$1 = (function (){var statearr_27238 = state_27235;
(statearr_27238[(7)] = inst_27199);

(statearr_27238[(8)] = inst_27200);

return statearr_27238;
})();
var statearr_27239_27265 = state_27235__$1;
(statearr_27239_27265[(2)] = null);

(statearr_27239_27265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (4))){
var inst_27203 = (state_27235[(9)]);
var inst_27203__$1 = (state_27235[(2)]);
var inst_27204 = (inst_27203__$1 == null);
var inst_27205 = cljs.core.not.call(null,inst_27204);
var state_27235__$1 = (function (){var statearr_27240 = state_27235;
(statearr_27240[(9)] = inst_27203__$1);

return statearr_27240;
})();
if(inst_27205){
var statearr_27241_27266 = state_27235__$1;
(statearr_27241_27266[(1)] = (5));

} else {
var statearr_27242_27267 = state_27235__$1;
(statearr_27242_27267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (15))){
var inst_27225 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27243_27268 = state_27235__$1;
(statearr_27243_27268[(2)] = inst_27225);

(statearr_27243_27268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (13))){
var state_27235__$1 = state_27235;
var statearr_27244_27269 = state_27235__$1;
(statearr_27244_27269[(2)] = null);

(statearr_27244_27269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (6))){
var inst_27200 = (state_27235[(8)]);
var inst_27221 = (inst_27200 > (0));
var state_27235__$1 = state_27235;
if(cljs.core.truth_(inst_27221)){
var statearr_27245_27270 = state_27235__$1;
(statearr_27245_27270[(1)] = (12));

} else {
var statearr_27246_27271 = state_27235__$1;
(statearr_27246_27271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (3))){
var inst_27233 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27235__$1,inst_27233);
} else {
if((state_val_27236 === (12))){
var inst_27199 = (state_27235[(7)]);
var inst_27223 = cljs.core.vec.call(null,inst_27199);
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27235__$1,(15),out,inst_27223);
} else {
if((state_val_27236 === (2))){
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27235__$1,(4),ch);
} else {
if((state_val_27236 === (11))){
var inst_27215 = (state_27235[(2)]);
var inst_27216 = (new Array(n));
var inst_27199 = inst_27216;
var inst_27200 = (0);
var state_27235__$1 = (function (){var statearr_27247 = state_27235;
(statearr_27247[(7)] = inst_27199);

(statearr_27247[(10)] = inst_27215);

(statearr_27247[(8)] = inst_27200);

return statearr_27247;
})();
var statearr_27248_27272 = state_27235__$1;
(statearr_27248_27272[(2)] = null);

(statearr_27248_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (9))){
var inst_27199 = (state_27235[(7)]);
var inst_27213 = cljs.core.vec.call(null,inst_27199);
var state_27235__$1 = state_27235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27235__$1,(11),out,inst_27213);
} else {
if((state_val_27236 === (5))){
var inst_27199 = (state_27235[(7)]);
var inst_27203 = (state_27235[(9)]);
var inst_27208 = (state_27235[(11)]);
var inst_27200 = (state_27235[(8)]);
var inst_27207 = (inst_27199[inst_27200] = inst_27203);
var inst_27208__$1 = (inst_27200 + (1));
var inst_27209 = (inst_27208__$1 < n);
var state_27235__$1 = (function (){var statearr_27249 = state_27235;
(statearr_27249[(12)] = inst_27207);

(statearr_27249[(11)] = inst_27208__$1);

return statearr_27249;
})();
if(cljs.core.truth_(inst_27209)){
var statearr_27250_27273 = state_27235__$1;
(statearr_27250_27273[(1)] = (8));

} else {
var statearr_27251_27274 = state_27235__$1;
(statearr_27251_27274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (14))){
var inst_27228 = (state_27235[(2)]);
var inst_27229 = cljs.core.async.close_BANG_.call(null,out);
var state_27235__$1 = (function (){var statearr_27253 = state_27235;
(statearr_27253[(13)] = inst_27228);

return statearr_27253;
})();
var statearr_27254_27275 = state_27235__$1;
(statearr_27254_27275[(2)] = inst_27229);

(statearr_27254_27275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (10))){
var inst_27219 = (state_27235[(2)]);
var state_27235__$1 = state_27235;
var statearr_27255_27276 = state_27235__$1;
(statearr_27255_27276[(2)] = inst_27219);

(statearr_27255_27276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27236 === (8))){
var inst_27199 = (state_27235[(7)]);
var inst_27208 = (state_27235[(11)]);
var tmp27252 = inst_27199;
var inst_27199__$1 = tmp27252;
var inst_27200 = inst_27208;
var state_27235__$1 = (function (){var statearr_27256 = state_27235;
(statearr_27256[(7)] = inst_27199__$1);

(statearr_27256[(8)] = inst_27200);

return statearr_27256;
})();
var statearr_27257_27277 = state_27235__$1;
(statearr_27257_27277[(2)] = null);

(statearr_27257_27277[(1)] = (2));


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
});})(c__23583__auto___27263,out))
;
return ((function (switch__23486__auto__,c__23583__auto___27263,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_27258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27258[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_27258[(1)] = (1));

return statearr_27258;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_27235){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_27235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e27259){if((e27259 instanceof Object)){
var ex__23490__auto__ = e27259;
var statearr_27260_27278 = state_27235;
(statearr_27260_27278[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27279 = state_27235;
state_27235 = G__27279;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_27235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_27235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___27263,out))
})();
var state__23585__auto__ = (function (){var statearr_27261 = f__23584__auto__.call(null);
(statearr_27261[(6)] = c__23583__auto___27263);

return statearr_27261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___27263,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27281 = arguments.length;
switch (G__27281) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23583__auto___27351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23583__auto___27351,out){
return (function (){
var f__23584__auto__ = (function (){var switch__23486__auto__ = ((function (c__23583__auto___27351,out){
return (function (state_27323){
var state_val_27324 = (state_27323[(1)]);
if((state_val_27324 === (7))){
var inst_27319 = (state_27323[(2)]);
var state_27323__$1 = state_27323;
var statearr_27325_27352 = state_27323__$1;
(statearr_27325_27352[(2)] = inst_27319);

(statearr_27325_27352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (1))){
var inst_27282 = [];
var inst_27283 = inst_27282;
var inst_27284 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27323__$1 = (function (){var statearr_27326 = state_27323;
(statearr_27326[(7)] = inst_27283);

(statearr_27326[(8)] = inst_27284);

return statearr_27326;
})();
var statearr_27327_27353 = state_27323__$1;
(statearr_27327_27353[(2)] = null);

(statearr_27327_27353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (4))){
var inst_27287 = (state_27323[(9)]);
var inst_27287__$1 = (state_27323[(2)]);
var inst_27288 = (inst_27287__$1 == null);
var inst_27289 = cljs.core.not.call(null,inst_27288);
var state_27323__$1 = (function (){var statearr_27328 = state_27323;
(statearr_27328[(9)] = inst_27287__$1);

return statearr_27328;
})();
if(inst_27289){
var statearr_27329_27354 = state_27323__$1;
(statearr_27329_27354[(1)] = (5));

} else {
var statearr_27330_27355 = state_27323__$1;
(statearr_27330_27355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (15))){
var inst_27313 = (state_27323[(2)]);
var state_27323__$1 = state_27323;
var statearr_27331_27356 = state_27323__$1;
(statearr_27331_27356[(2)] = inst_27313);

(statearr_27331_27356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (13))){
var state_27323__$1 = state_27323;
var statearr_27332_27357 = state_27323__$1;
(statearr_27332_27357[(2)] = null);

(statearr_27332_27357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (6))){
var inst_27283 = (state_27323[(7)]);
var inst_27308 = inst_27283.length;
var inst_27309 = (inst_27308 > (0));
var state_27323__$1 = state_27323;
if(cljs.core.truth_(inst_27309)){
var statearr_27333_27358 = state_27323__$1;
(statearr_27333_27358[(1)] = (12));

} else {
var statearr_27334_27359 = state_27323__$1;
(statearr_27334_27359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (3))){
var inst_27321 = (state_27323[(2)]);
var state_27323__$1 = state_27323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27323__$1,inst_27321);
} else {
if((state_val_27324 === (12))){
var inst_27283 = (state_27323[(7)]);
var inst_27311 = cljs.core.vec.call(null,inst_27283);
var state_27323__$1 = state_27323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27323__$1,(15),out,inst_27311);
} else {
if((state_val_27324 === (2))){
var state_27323__$1 = state_27323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27323__$1,(4),ch);
} else {
if((state_val_27324 === (11))){
var inst_27291 = (state_27323[(10)]);
var inst_27287 = (state_27323[(9)]);
var inst_27301 = (state_27323[(2)]);
var inst_27302 = [];
var inst_27303 = inst_27302.push(inst_27287);
var inst_27283 = inst_27302;
var inst_27284 = inst_27291;
var state_27323__$1 = (function (){var statearr_27335 = state_27323;
(statearr_27335[(7)] = inst_27283);

(statearr_27335[(8)] = inst_27284);

(statearr_27335[(11)] = inst_27301);

(statearr_27335[(12)] = inst_27303);

return statearr_27335;
})();
var statearr_27336_27360 = state_27323__$1;
(statearr_27336_27360[(2)] = null);

(statearr_27336_27360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (9))){
var inst_27283 = (state_27323[(7)]);
var inst_27299 = cljs.core.vec.call(null,inst_27283);
var state_27323__$1 = state_27323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27323__$1,(11),out,inst_27299);
} else {
if((state_val_27324 === (5))){
var inst_27291 = (state_27323[(10)]);
var inst_27287 = (state_27323[(9)]);
var inst_27284 = (state_27323[(8)]);
var inst_27291__$1 = f.call(null,inst_27287);
var inst_27292 = cljs.core._EQ_.call(null,inst_27291__$1,inst_27284);
var inst_27293 = cljs.core.keyword_identical_QMARK_.call(null,inst_27284,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27294 = ((inst_27292) || (inst_27293));
var state_27323__$1 = (function (){var statearr_27337 = state_27323;
(statearr_27337[(10)] = inst_27291__$1);

return statearr_27337;
})();
if(cljs.core.truth_(inst_27294)){
var statearr_27338_27361 = state_27323__$1;
(statearr_27338_27361[(1)] = (8));

} else {
var statearr_27339_27362 = state_27323__$1;
(statearr_27339_27362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (14))){
var inst_27316 = (state_27323[(2)]);
var inst_27317 = cljs.core.async.close_BANG_.call(null,out);
var state_27323__$1 = (function (){var statearr_27341 = state_27323;
(statearr_27341[(13)] = inst_27316);

return statearr_27341;
})();
var statearr_27342_27363 = state_27323__$1;
(statearr_27342_27363[(2)] = inst_27317);

(statearr_27342_27363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (10))){
var inst_27306 = (state_27323[(2)]);
var state_27323__$1 = state_27323;
var statearr_27343_27364 = state_27323__$1;
(statearr_27343_27364[(2)] = inst_27306);

(statearr_27343_27364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27324 === (8))){
var inst_27283 = (state_27323[(7)]);
var inst_27291 = (state_27323[(10)]);
var inst_27287 = (state_27323[(9)]);
var inst_27296 = inst_27283.push(inst_27287);
var tmp27340 = inst_27283;
var inst_27283__$1 = tmp27340;
var inst_27284 = inst_27291;
var state_27323__$1 = (function (){var statearr_27344 = state_27323;
(statearr_27344[(7)] = inst_27283__$1);

(statearr_27344[(8)] = inst_27284);

(statearr_27344[(14)] = inst_27296);

return statearr_27344;
})();
var statearr_27345_27365 = state_27323__$1;
(statearr_27345_27365[(2)] = null);

(statearr_27345_27365[(1)] = (2));


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
});})(c__23583__auto___27351,out))
;
return ((function (switch__23486__auto__,c__23583__auto___27351,out){
return (function() {
var cljs$core$async$state_machine__23487__auto__ = null;
var cljs$core$async$state_machine__23487__auto____0 = (function (){
var statearr_27346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27346[(0)] = cljs$core$async$state_machine__23487__auto__);

(statearr_27346[(1)] = (1));

return statearr_27346;
});
var cljs$core$async$state_machine__23487__auto____1 = (function (state_27323){
while(true){
var ret_value__23488__auto__ = (function (){try{while(true){
var result__23489__auto__ = switch__23486__auto__.call(null,state_27323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23489__auto__;
}
break;
}
}catch (e27347){if((e27347 instanceof Object)){
var ex__23490__auto__ = e27347;
var statearr_27348_27366 = state_27323;
(statearr_27348_27366[(5)] = ex__23490__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27367 = state_27323;
state_27323 = G__27367;
continue;
} else {
return ret_value__23488__auto__;
}
break;
}
});
cljs$core$async$state_machine__23487__auto__ = function(state_27323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23487__auto____1.call(this,state_27323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23487__auto____0;
cljs$core$async$state_machine__23487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23487__auto____1;
return cljs$core$async$state_machine__23487__auto__;
})()
;})(switch__23486__auto__,c__23583__auto___27351,out))
})();
var state__23585__auto__ = (function (){var statearr_27349 = f__23584__auto__.call(null);
(statearr_27349[(6)] = c__23583__auto___27351);

return statearr_27349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23585__auto__);
});})(c__23583__auto___27351,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1574315929648
