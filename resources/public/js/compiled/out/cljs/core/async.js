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
var G__24742 = arguments.length;
switch (G__24742) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24743 = (function (f,blockable,meta24744){
this.f = f;
this.blockable = blockable;
this.meta24744 = meta24744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24745,meta24744__$1){
var self__ = this;
var _24745__$1 = this;
return (new cljs.core.async.t_cljs$core$async24743(self__.f,self__.blockable,meta24744__$1));
});

cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24745){
var self__ = this;
var _24745__$1 = this;
return self__.meta24744;
});

cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24744","meta24744",1501079900,null)], null);
});

cljs.core.async.t_cljs$core$async24743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24743";

cljs.core.async.t_cljs$core$async24743.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24743");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24743.
 */
cljs.core.async.__GT_t_cljs$core$async24743 = (function cljs$core$async$__GT_t_cljs$core$async24743(f__$1,blockable__$1,meta24744){
return (new cljs.core.async.t_cljs$core$async24743(f__$1,blockable__$1,meta24744));
});

}

return (new cljs.core.async.t_cljs$core$async24743(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24749 = arguments.length;
switch (G__24749) {
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
var G__24752 = arguments.length;
switch (G__24752) {
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
var G__24755 = arguments.length;
switch (G__24755) {
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
var val_24757 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24757);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24757,ret){
return (function (){
return fn1.call(null,val_24757);
});})(val_24757,ret))
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
var G__24759 = arguments.length;
switch (G__24759) {
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
var n__4607__auto___24761 = n;
var x_24762 = (0);
while(true){
if((x_24762 < n__4607__auto___24761)){
(a[x_24762] = (0));

var G__24763 = (x_24762 + (1));
x_24762 = G__24763;
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

var G__24764 = (i + (1));
i = G__24764;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24765 = (function (flag,meta24766){
this.flag = flag;
this.meta24766 = meta24766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24767,meta24766__$1){
var self__ = this;
var _24767__$1 = this;
return (new cljs.core.async.t_cljs$core$async24765(self__.flag,meta24766__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24767){
var self__ = this;
var _24767__$1 = this;
return self__.meta24766;
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24766","meta24766",753144280,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24765";

cljs.core.async.t_cljs$core$async24765.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24765");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24765.
 */
cljs.core.async.__GT_t_cljs$core$async24765 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24765(flag__$1,meta24766){
return (new cljs.core.async.t_cljs$core$async24765(flag__$1,meta24766));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24765(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24768 = (function (flag,cb,meta24769){
this.flag = flag;
this.cb = cb;
this.meta24769 = meta24769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24770,meta24769__$1){
var self__ = this;
var _24770__$1 = this;
return (new cljs.core.async.t_cljs$core$async24768(self__.flag,self__.cb,meta24769__$1));
});

cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24770){
var self__ = this;
var _24770__$1 = this;
return self__.meta24769;
});

cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24769","meta24769",1057301166,null)], null);
});

cljs.core.async.t_cljs$core$async24768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24768";

cljs.core.async.t_cljs$core$async24768.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24768");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24768.
 */
cljs.core.async.__GT_t_cljs$core$async24768 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24768(flag__$1,cb__$1,meta24769){
return (new cljs.core.async.t_cljs$core$async24768(flag__$1,cb__$1,meta24769));
});

}

return (new cljs.core.async.t_cljs$core$async24768(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24771_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24772_SHARP_,port], null));
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
var G__24773 = (i + (1));
i = G__24773;
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
var len__4730__auto___24779 = arguments.length;
var i__4731__auto___24780 = (0);
while(true){
if((i__4731__auto___24780 < len__4730__auto___24779)){
args__4736__auto__.push((arguments[i__4731__auto___24780]));

var G__24781 = (i__4731__auto___24780 + (1));
i__4731__auto___24780 = G__24781;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24776){
var map__24777 = p__24776;
var map__24777__$1 = (((((!((map__24777 == null))))?(((((map__24777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24777):map__24777);
var opts = map__24777__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24774){
var G__24775 = cljs.core.first.call(null,seq24774);
var seq24774__$1 = cljs.core.next.call(null,seq24774);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24775,seq24774__$1);
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
var G__24783 = arguments.length;
switch (G__24783) {
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
var c__24682__auto___24829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___24829){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___24829){
return (function (state_24807){
var state_val_24808 = (state_24807[(1)]);
if((state_val_24808 === (7))){
var inst_24803 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
var statearr_24809_24830 = state_24807__$1;
(statearr_24809_24830[(2)] = inst_24803);

(statearr_24809_24830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (1))){
var state_24807__$1 = state_24807;
var statearr_24810_24831 = state_24807__$1;
(statearr_24810_24831[(2)] = null);

(statearr_24810_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (4))){
var inst_24786 = (state_24807[(7)]);
var inst_24786__$1 = (state_24807[(2)]);
var inst_24787 = (inst_24786__$1 == null);
var state_24807__$1 = (function (){var statearr_24811 = state_24807;
(statearr_24811[(7)] = inst_24786__$1);

return statearr_24811;
})();
if(cljs.core.truth_(inst_24787)){
var statearr_24812_24832 = state_24807__$1;
(statearr_24812_24832[(1)] = (5));

} else {
var statearr_24813_24833 = state_24807__$1;
(statearr_24813_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (13))){
var state_24807__$1 = state_24807;
var statearr_24814_24834 = state_24807__$1;
(statearr_24814_24834[(2)] = null);

(statearr_24814_24834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (6))){
var inst_24786 = (state_24807[(7)]);
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24807__$1,(11),to,inst_24786);
} else {
if((state_val_24808 === (3))){
var inst_24805 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24807__$1,inst_24805);
} else {
if((state_val_24808 === (12))){
var state_24807__$1 = state_24807;
var statearr_24815_24835 = state_24807__$1;
(statearr_24815_24835[(2)] = null);

(statearr_24815_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (2))){
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24807__$1,(4),from);
} else {
if((state_val_24808 === (11))){
var inst_24796 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
if(cljs.core.truth_(inst_24796)){
var statearr_24816_24836 = state_24807__$1;
(statearr_24816_24836[(1)] = (12));

} else {
var statearr_24817_24837 = state_24807__$1;
(statearr_24817_24837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (9))){
var state_24807__$1 = state_24807;
var statearr_24818_24838 = state_24807__$1;
(statearr_24818_24838[(2)] = null);

(statearr_24818_24838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (5))){
var state_24807__$1 = state_24807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24819_24839 = state_24807__$1;
(statearr_24819_24839[(1)] = (8));

} else {
var statearr_24820_24840 = state_24807__$1;
(statearr_24820_24840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (14))){
var inst_24801 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
var statearr_24821_24841 = state_24807__$1;
(statearr_24821_24841[(2)] = inst_24801);

(statearr_24821_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (10))){
var inst_24793 = (state_24807[(2)]);
var state_24807__$1 = state_24807;
var statearr_24822_24842 = state_24807__$1;
(statearr_24822_24842[(2)] = inst_24793);

(statearr_24822_24842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24808 === (8))){
var inst_24790 = cljs.core.async.close_BANG_.call(null,to);
var state_24807__$1 = state_24807;
var statearr_24823_24843 = state_24807__$1;
(statearr_24823_24843[(2)] = inst_24790);

(statearr_24823_24843[(1)] = (10));


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
});})(c__24682__auto___24829))
;
return ((function (switch__24622__auto__,c__24682__auto___24829){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_24824 = [null,null,null,null,null,null,null,null];
(statearr_24824[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_24824[(1)] = (1));

return statearr_24824;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_24807){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e24825){if((e24825 instanceof Object)){
var ex__24626__auto__ = e24825;
var statearr_24826_24844 = state_24807;
(statearr_24826_24844[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24845 = state_24807;
state_24807 = G__24845;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_24807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_24807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___24829))
})();
var state__24684__auto__ = (function (){var statearr_24827 = f__24683__auto__.call(null);
(statearr_24827[(6)] = c__24682__auto___24829);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___24829))
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
return (function (p__24846){
var vec__24847 = p__24846;
var v = cljs.core.nth.call(null,vec__24847,(0),null);
var p = cljs.core.nth.call(null,vec__24847,(1),null);
var job = vec__24847;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24682__auto___25018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results){
return (function (state_24854){
var state_val_24855 = (state_24854[(1)]);
if((state_val_24855 === (1))){
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24854__$1,(2),res,v);
} else {
if((state_val_24855 === (2))){
var inst_24851 = (state_24854[(2)]);
var inst_24852 = cljs.core.async.close_BANG_.call(null,res);
var state_24854__$1 = (function (){var statearr_24856 = state_24854;
(statearr_24856[(7)] = inst_24851);

return statearr_24856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24854__$1,inst_24852);
} else {
return null;
}
}
});})(c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results))
;
return ((function (switch__24622__auto__,c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1 = (function (state_24854){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__24626__auto__ = e24858;
var statearr_24859_25019 = state_24854;
(statearr_24859_25019[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25020 = state_24854;
state_24854 = G__25020;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = function(state_24854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1.call(this,state_24854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results))
})();
var state__24684__auto__ = (function (){var statearr_24860 = f__24683__auto__.call(null);
(statearr_24860[(6)] = c__24682__auto___25018);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25018,res,vec__24847,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24861){
var vec__24862 = p__24861;
var v = cljs.core.nth.call(null,vec__24862,(0),null);
var p = cljs.core.nth.call(null,vec__24862,(1),null);
var job = vec__24862;
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
var n__4607__auto___25021 = n;
var __25022 = (0);
while(true){
if((__25022 < n__4607__auto___25021)){
var G__24865_25023 = type;
var G__24865_25024__$1 = (((G__24865_25023 instanceof cljs.core.Keyword))?G__24865_25023.fqn:null);
switch (G__24865_25024__$1) {
case "compute":
var c__24682__auto___25026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25022,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (__25022,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function (state_24878){
var state_val_24879 = (state_24878[(1)]);
if((state_val_24879 === (1))){
var state_24878__$1 = state_24878;
var statearr_24880_25027 = state_24878__$1;
(statearr_24880_25027[(2)] = null);

(statearr_24880_25027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (2))){
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24878__$1,(4),jobs);
} else {
if((state_val_24879 === (3))){
var inst_24876 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24878__$1,inst_24876);
} else {
if((state_val_24879 === (4))){
var inst_24868 = (state_24878[(2)]);
var inst_24869 = process.call(null,inst_24868);
var state_24878__$1 = state_24878;
if(cljs.core.truth_(inst_24869)){
var statearr_24881_25028 = state_24878__$1;
(statearr_24881_25028[(1)] = (5));

} else {
var statearr_24882_25029 = state_24878__$1;
(statearr_24882_25029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (5))){
var state_24878__$1 = state_24878;
var statearr_24883_25030 = state_24878__$1;
(statearr_24883_25030[(2)] = null);

(statearr_24883_25030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (6))){
var state_24878__$1 = state_24878;
var statearr_24884_25031 = state_24878__$1;
(statearr_24884_25031[(2)] = null);

(statearr_24884_25031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24879 === (7))){
var inst_24874 = (state_24878[(2)]);
var state_24878__$1 = state_24878;
var statearr_24885_25032 = state_24878__$1;
(statearr_24885_25032[(2)] = inst_24874);

(statearr_24885_25032[(1)] = (3));


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
});})(__25022,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
;
return ((function (__25022,switch__24622__auto__,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_24886 = [null,null,null,null,null,null,null];
(statearr_24886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__);

(statearr_24886[(1)] = (1));

return statearr_24886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1 = (function (state_24878){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e24887){if((e24887 instanceof Object)){
var ex__24626__auto__ = e24887;
var statearr_24888_25033 = state_24878;
(statearr_24888_25033[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25034 = state_24878;
state_24878 = G__25034;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = function(state_24878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1.call(this,state_24878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__;
})()
;})(__25022,switch__24622__auto__,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
})();
var state__24684__auto__ = (function (){var statearr_24889 = f__24683__auto__.call(null);
(statearr_24889[(6)] = c__24682__auto___25026);

return statearr_24889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(__25022,c__24682__auto___25026,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
);


break;
case "async":
var c__24682__auto___25035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25022,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (__25022,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function (state_24902){
var state_val_24903 = (state_24902[(1)]);
if((state_val_24903 === (1))){
var state_24902__$1 = state_24902;
var statearr_24904_25036 = state_24902__$1;
(statearr_24904_25036[(2)] = null);

(statearr_24904_25036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24903 === (2))){
var state_24902__$1 = state_24902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24902__$1,(4),jobs);
} else {
if((state_val_24903 === (3))){
var inst_24900 = (state_24902[(2)]);
var state_24902__$1 = state_24902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24902__$1,inst_24900);
} else {
if((state_val_24903 === (4))){
var inst_24892 = (state_24902[(2)]);
var inst_24893 = async.call(null,inst_24892);
var state_24902__$1 = state_24902;
if(cljs.core.truth_(inst_24893)){
var statearr_24905_25037 = state_24902__$1;
(statearr_24905_25037[(1)] = (5));

} else {
var statearr_24906_25038 = state_24902__$1;
(statearr_24906_25038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24903 === (5))){
var state_24902__$1 = state_24902;
var statearr_24907_25039 = state_24902__$1;
(statearr_24907_25039[(2)] = null);

(statearr_24907_25039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24903 === (6))){
var state_24902__$1 = state_24902;
var statearr_24908_25040 = state_24902__$1;
(statearr_24908_25040[(2)] = null);

(statearr_24908_25040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24903 === (7))){
var inst_24898 = (state_24902[(2)]);
var state_24902__$1 = state_24902;
var statearr_24909_25041 = state_24902__$1;
(statearr_24909_25041[(2)] = inst_24898);

(statearr_24909_25041[(1)] = (3));


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
});})(__25022,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
;
return ((function (__25022,switch__24622__auto__,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_24910 = [null,null,null,null,null,null,null];
(statearr_24910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__);

(statearr_24910[(1)] = (1));

return statearr_24910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1 = (function (state_24902){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e24911){if((e24911 instanceof Object)){
var ex__24626__auto__ = e24911;
var statearr_24912_25042 = state_24902;
(statearr_24912_25042[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25043 = state_24902;
state_24902 = G__25043;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = function(state_24902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1.call(this,state_24902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__;
})()
;})(__25022,switch__24622__auto__,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
})();
var state__24684__auto__ = (function (){var statearr_24913 = f__24683__auto__.call(null);
(statearr_24913[(6)] = c__24682__auto___25035);

return statearr_24913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(__25022,c__24682__auto___25035,G__24865_25023,G__24865_25024__$1,n__4607__auto___25021,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24865_25024__$1)].join('')));

}

var G__25044 = (__25022 + (1));
__25022 = G__25044;
continue;
} else {
}
break;
}

var c__24682__auto___25045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25045,jobs,results,process,async){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25045,jobs,results,process,async){
return (function (state_24935){
var state_val_24936 = (state_24935[(1)]);
if((state_val_24936 === (7))){
var inst_24931 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24937_25046 = state_24935__$1;
(statearr_24937_25046[(2)] = inst_24931);

(statearr_24937_25046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (1))){
var state_24935__$1 = state_24935;
var statearr_24938_25047 = state_24935__$1;
(statearr_24938_25047[(2)] = null);

(statearr_24938_25047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (4))){
var inst_24916 = (state_24935[(7)]);
var inst_24916__$1 = (state_24935[(2)]);
var inst_24917 = (inst_24916__$1 == null);
var state_24935__$1 = (function (){var statearr_24939 = state_24935;
(statearr_24939[(7)] = inst_24916__$1);

return statearr_24939;
})();
if(cljs.core.truth_(inst_24917)){
var statearr_24940_25048 = state_24935__$1;
(statearr_24940_25048[(1)] = (5));

} else {
var statearr_24941_25049 = state_24935__$1;
(statearr_24941_25049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (6))){
var inst_24916 = (state_24935[(7)]);
var inst_24921 = (state_24935[(8)]);
var inst_24921__$1 = cljs.core.async.chan.call(null,(1));
var inst_24922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24923 = [inst_24916,inst_24921__$1];
var inst_24924 = (new cljs.core.PersistentVector(null,2,(5),inst_24922,inst_24923,null));
var state_24935__$1 = (function (){var statearr_24942 = state_24935;
(statearr_24942[(8)] = inst_24921__$1);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24935__$1,(8),jobs,inst_24924);
} else {
if((state_val_24936 === (3))){
var inst_24933 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24935__$1,inst_24933);
} else {
if((state_val_24936 === (2))){
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24935__$1,(4),from);
} else {
if((state_val_24936 === (9))){
var inst_24928 = (state_24935[(2)]);
var state_24935__$1 = (function (){var statearr_24943 = state_24935;
(statearr_24943[(9)] = inst_24928);

return statearr_24943;
})();
var statearr_24944_25050 = state_24935__$1;
(statearr_24944_25050[(2)] = null);

(statearr_24944_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (5))){
var inst_24919 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24935__$1 = state_24935;
var statearr_24945_25051 = state_24935__$1;
(statearr_24945_25051[(2)] = inst_24919);

(statearr_24945_25051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (8))){
var inst_24921 = (state_24935[(8)]);
var inst_24926 = (state_24935[(2)]);
var state_24935__$1 = (function (){var statearr_24946 = state_24935;
(statearr_24946[(10)] = inst_24926);

return statearr_24946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24935__$1,(9),results,inst_24921);
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
});})(c__24682__auto___25045,jobs,results,process,async))
;
return ((function (switch__24622__auto__,c__24682__auto___25045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_24947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__);

(statearr_24947[(1)] = (1));

return statearr_24947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1 = (function (state_24935){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e24948){if((e24948 instanceof Object)){
var ex__24626__auto__ = e24948;
var statearr_24949_25052 = state_24935;
(statearr_24949_25052[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25053 = state_24935;
state_24935 = G__25053;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = function(state_24935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1.call(this,state_24935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25045,jobs,results,process,async))
})();
var state__24684__auto__ = (function (){var statearr_24950 = f__24683__auto__.call(null);
(statearr_24950[(6)] = c__24682__auto___25045);

return statearr_24950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25045,jobs,results,process,async))
);


var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__,jobs,results,process,async){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__,jobs,results,process,async){
return (function (state_24988){
var state_val_24989 = (state_24988[(1)]);
if((state_val_24989 === (7))){
var inst_24984 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24990_25054 = state_24988__$1;
(statearr_24990_25054[(2)] = inst_24984);

(statearr_24990_25054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (20))){
var state_24988__$1 = state_24988;
var statearr_24991_25055 = state_24988__$1;
(statearr_24991_25055[(2)] = null);

(statearr_24991_25055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (1))){
var state_24988__$1 = state_24988;
var statearr_24992_25056 = state_24988__$1;
(statearr_24992_25056[(2)] = null);

(statearr_24992_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (4))){
var inst_24953 = (state_24988[(7)]);
var inst_24953__$1 = (state_24988[(2)]);
var inst_24954 = (inst_24953__$1 == null);
var state_24988__$1 = (function (){var statearr_24993 = state_24988;
(statearr_24993[(7)] = inst_24953__$1);

return statearr_24993;
})();
if(cljs.core.truth_(inst_24954)){
var statearr_24994_25057 = state_24988__$1;
(statearr_24994_25057[(1)] = (5));

} else {
var statearr_24995_25058 = state_24988__$1;
(statearr_24995_25058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (15))){
var inst_24966 = (state_24988[(8)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(18),to,inst_24966);
} else {
if((state_val_24989 === (21))){
var inst_24979 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24996_25059 = state_24988__$1;
(statearr_24996_25059[(2)] = inst_24979);

(statearr_24996_25059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (13))){
var inst_24981 = (state_24988[(2)]);
var state_24988__$1 = (function (){var statearr_24997 = state_24988;
(statearr_24997[(9)] = inst_24981);

return statearr_24997;
})();
var statearr_24998_25060 = state_24988__$1;
(statearr_24998_25060[(2)] = null);

(statearr_24998_25060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (6))){
var inst_24953 = (state_24988[(7)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(11),inst_24953);
} else {
if((state_val_24989 === (17))){
var inst_24974 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24974)){
var statearr_24999_25061 = state_24988__$1;
(statearr_24999_25061[(1)] = (19));

} else {
var statearr_25000_25062 = state_24988__$1;
(statearr_25000_25062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (3))){
var inst_24986 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24988__$1,inst_24986);
} else {
if((state_val_24989 === (12))){
var inst_24963 = (state_24988[(10)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(14),inst_24963);
} else {
if((state_val_24989 === (2))){
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(4),results);
} else {
if((state_val_24989 === (19))){
var state_24988__$1 = state_24988;
var statearr_25001_25063 = state_24988__$1;
(statearr_25001_25063[(2)] = null);

(statearr_25001_25063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (11))){
var inst_24963 = (state_24988[(2)]);
var state_24988__$1 = (function (){var statearr_25002 = state_24988;
(statearr_25002[(10)] = inst_24963);

return statearr_25002;
})();
var statearr_25003_25064 = state_24988__$1;
(statearr_25003_25064[(2)] = null);

(statearr_25003_25064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (9))){
var state_24988__$1 = state_24988;
var statearr_25004_25065 = state_24988__$1;
(statearr_25004_25065[(2)] = null);

(statearr_25004_25065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (5))){
var state_24988__$1 = state_24988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25005_25066 = state_24988__$1;
(statearr_25005_25066[(1)] = (8));

} else {
var statearr_25006_25067 = state_24988__$1;
(statearr_25006_25067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (14))){
var inst_24966 = (state_24988[(8)]);
var inst_24968 = (state_24988[(11)]);
var inst_24966__$1 = (state_24988[(2)]);
var inst_24967 = (inst_24966__$1 == null);
var inst_24968__$1 = cljs.core.not.call(null,inst_24967);
var state_24988__$1 = (function (){var statearr_25007 = state_24988;
(statearr_25007[(8)] = inst_24966__$1);

(statearr_25007[(11)] = inst_24968__$1);

return statearr_25007;
})();
if(inst_24968__$1){
var statearr_25008_25068 = state_24988__$1;
(statearr_25008_25068[(1)] = (15));

} else {
var statearr_25009_25069 = state_24988__$1;
(statearr_25009_25069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (16))){
var inst_24968 = (state_24988[(11)]);
var state_24988__$1 = state_24988;
var statearr_25010_25070 = state_24988__$1;
(statearr_25010_25070[(2)] = inst_24968);

(statearr_25010_25070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (10))){
var inst_24960 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25011_25071 = state_24988__$1;
(statearr_25011_25071[(2)] = inst_24960);

(statearr_25011_25071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (18))){
var inst_24971 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25012_25072 = state_24988__$1;
(statearr_25012_25072[(2)] = inst_24971);

(statearr_25012_25072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (8))){
var inst_24957 = cljs.core.async.close_BANG_.call(null,to);
var state_24988__$1 = state_24988;
var statearr_25013_25073 = state_24988__$1;
(statearr_25013_25073[(2)] = inst_24957);

(statearr_25013_25073[(1)] = (10));


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
});})(c__24682__auto__,jobs,results,process,async))
;
return ((function (switch__24622__auto__,c__24682__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__);

(statearr_25014[(1)] = (1));

return statearr_25014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1 = (function (state_24988){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_24988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object)){
var ex__24626__auto__ = e25015;
var statearr_25016_25074 = state_24988;
(statearr_25016_25074[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25075 = state_24988;
state_24988 = G__25075;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__ = function(state_24988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1.call(this,state_24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__,jobs,results,process,async))
})();
var state__24684__auto__ = (function (){var statearr_25017 = f__24683__auto__.call(null);
(statearr_25017[(6)] = c__24682__auto__);

return statearr_25017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__,jobs,results,process,async))
);

return c__24682__auto__;
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
var G__25077 = arguments.length;
switch (G__25077) {
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
var G__25080 = arguments.length;
switch (G__25080) {
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
var G__25083 = arguments.length;
switch (G__25083) {
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
var c__24682__auto___25132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25132,tc,fc){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25132,tc,fc){
return (function (state_25109){
var state_val_25110 = (state_25109[(1)]);
if((state_val_25110 === (7))){
var inst_25105 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25111_25133 = state_25109__$1;
(statearr_25111_25133[(2)] = inst_25105);

(statearr_25111_25133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (1))){
var state_25109__$1 = state_25109;
var statearr_25112_25134 = state_25109__$1;
(statearr_25112_25134[(2)] = null);

(statearr_25112_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (4))){
var inst_25086 = (state_25109[(7)]);
var inst_25086__$1 = (state_25109[(2)]);
var inst_25087 = (inst_25086__$1 == null);
var state_25109__$1 = (function (){var statearr_25113 = state_25109;
(statearr_25113[(7)] = inst_25086__$1);

return statearr_25113;
})();
if(cljs.core.truth_(inst_25087)){
var statearr_25114_25135 = state_25109__$1;
(statearr_25114_25135[(1)] = (5));

} else {
var statearr_25115_25136 = state_25109__$1;
(statearr_25115_25136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (13))){
var state_25109__$1 = state_25109;
var statearr_25116_25137 = state_25109__$1;
(statearr_25116_25137[(2)] = null);

(statearr_25116_25137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (6))){
var inst_25086 = (state_25109[(7)]);
var inst_25092 = p.call(null,inst_25086);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25092)){
var statearr_25117_25138 = state_25109__$1;
(statearr_25117_25138[(1)] = (9));

} else {
var statearr_25118_25139 = state_25109__$1;
(statearr_25118_25139[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (3))){
var inst_25107 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25109__$1,inst_25107);
} else {
if((state_val_25110 === (12))){
var state_25109__$1 = state_25109;
var statearr_25119_25140 = state_25109__$1;
(statearr_25119_25140[(2)] = null);

(statearr_25119_25140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (2))){
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25109__$1,(4),ch);
} else {
if((state_val_25110 === (11))){
var inst_25086 = (state_25109[(7)]);
var inst_25096 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25109__$1,(8),inst_25096,inst_25086);
} else {
if((state_val_25110 === (9))){
var state_25109__$1 = state_25109;
var statearr_25120_25141 = state_25109__$1;
(statearr_25120_25141[(2)] = tc);

(statearr_25120_25141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (5))){
var inst_25089 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25090 = cljs.core.async.close_BANG_.call(null,fc);
var state_25109__$1 = (function (){var statearr_25121 = state_25109;
(statearr_25121[(8)] = inst_25089);

return statearr_25121;
})();
var statearr_25122_25142 = state_25109__$1;
(statearr_25122_25142[(2)] = inst_25090);

(statearr_25122_25142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (14))){
var inst_25103 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25123_25143 = state_25109__$1;
(statearr_25123_25143[(2)] = inst_25103);

(statearr_25123_25143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (10))){
var state_25109__$1 = state_25109;
var statearr_25124_25144 = state_25109__$1;
(statearr_25124_25144[(2)] = fc);

(statearr_25124_25144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (8))){
var inst_25098 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25098)){
var statearr_25125_25145 = state_25109__$1;
(statearr_25125_25145[(1)] = (12));

} else {
var statearr_25126_25146 = state_25109__$1;
(statearr_25126_25146[(1)] = (13));

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
});})(c__24682__auto___25132,tc,fc))
;
return ((function (switch__24622__auto__,c__24682__auto___25132,tc,fc){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null,null,null];
(statearr_25127[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_25109){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25128){if((e25128 instanceof Object)){
var ex__24626__auto__ = e25128;
var statearr_25129_25147 = state_25109;
(statearr_25129_25147[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25148 = state_25109;
state_25109 = G__25148;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_25109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_25109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25132,tc,fc))
})();
var state__24684__auto__ = (function (){var statearr_25130 = f__24683__auto__.call(null);
(statearr_25130[(6)] = c__24682__auto___25132);

return statearr_25130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25132,tc,fc))
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__){
return (function (state_25169){
var state_val_25170 = (state_25169[(1)]);
if((state_val_25170 === (7))){
var inst_25165 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25171_25189 = state_25169__$1;
(statearr_25171_25189[(2)] = inst_25165);

(statearr_25171_25189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (1))){
var inst_25149 = init;
var state_25169__$1 = (function (){var statearr_25172 = state_25169;
(statearr_25172[(7)] = inst_25149);

return statearr_25172;
})();
var statearr_25173_25190 = state_25169__$1;
(statearr_25173_25190[(2)] = null);

(statearr_25173_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (4))){
var inst_25152 = (state_25169[(8)]);
var inst_25152__$1 = (state_25169[(2)]);
var inst_25153 = (inst_25152__$1 == null);
var state_25169__$1 = (function (){var statearr_25174 = state_25169;
(statearr_25174[(8)] = inst_25152__$1);

return statearr_25174;
})();
if(cljs.core.truth_(inst_25153)){
var statearr_25175_25191 = state_25169__$1;
(statearr_25175_25191[(1)] = (5));

} else {
var statearr_25176_25192 = state_25169__$1;
(statearr_25176_25192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (6))){
var inst_25156 = (state_25169[(9)]);
var inst_25152 = (state_25169[(8)]);
var inst_25149 = (state_25169[(7)]);
var inst_25156__$1 = f.call(null,inst_25149,inst_25152);
var inst_25157 = cljs.core.reduced_QMARK_.call(null,inst_25156__$1);
var state_25169__$1 = (function (){var statearr_25177 = state_25169;
(statearr_25177[(9)] = inst_25156__$1);

return statearr_25177;
})();
if(inst_25157){
var statearr_25178_25193 = state_25169__$1;
(statearr_25178_25193[(1)] = (8));

} else {
var statearr_25179_25194 = state_25169__$1;
(statearr_25179_25194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (3))){
var inst_25167 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25169__$1,inst_25167);
} else {
if((state_val_25170 === (2))){
var state_25169__$1 = state_25169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25169__$1,(4),ch);
} else {
if((state_val_25170 === (9))){
var inst_25156 = (state_25169[(9)]);
var inst_25149 = inst_25156;
var state_25169__$1 = (function (){var statearr_25180 = state_25169;
(statearr_25180[(7)] = inst_25149);

return statearr_25180;
})();
var statearr_25181_25195 = state_25169__$1;
(statearr_25181_25195[(2)] = null);

(statearr_25181_25195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (5))){
var inst_25149 = (state_25169[(7)]);
var state_25169__$1 = state_25169;
var statearr_25182_25196 = state_25169__$1;
(statearr_25182_25196[(2)] = inst_25149);

(statearr_25182_25196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (10))){
var inst_25163 = (state_25169[(2)]);
var state_25169__$1 = state_25169;
var statearr_25183_25197 = state_25169__$1;
(statearr_25183_25197[(2)] = inst_25163);

(statearr_25183_25197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25170 === (8))){
var inst_25156 = (state_25169[(9)]);
var inst_25159 = cljs.core.deref.call(null,inst_25156);
var state_25169__$1 = state_25169;
var statearr_25184_25198 = state_25169__$1;
(statearr_25184_25198[(2)] = inst_25159);

(statearr_25184_25198[(1)] = (10));


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
});})(c__24682__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24623__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24623__auto____0 = (function (){
var statearr_25185 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25185[(0)] = cljs$core$async$reduce_$_state_machine__24623__auto__);

(statearr_25185[(1)] = (1));

return statearr_25185;
});
var cljs$core$async$reduce_$_state_machine__24623__auto____1 = (function (state_25169){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25186){if((e25186 instanceof Object)){
var ex__24626__auto__ = e25186;
var statearr_25187_25199 = state_25169;
(statearr_25187_25199[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25200 = state_25169;
state_25169 = G__25200;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24623__auto__ = function(state_25169){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24623__auto____1.call(this,state_25169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24623__auto____0;
cljs$core$async$reduce_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24623__auto____1;
return cljs$core$async$reduce_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__))
})();
var state__24684__auto__ = (function (){var statearr_25188 = f__24683__auto__.call(null);
(statearr_25188[(6)] = c__24682__auto__);

return statearr_25188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__))
);

return c__24682__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__,f__$1){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__,f__$1){
return (function (state_25206){
var state_val_25207 = (state_25206[(1)]);
if((state_val_25207 === (1))){
var inst_25201 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25206__$1,(2),inst_25201);
} else {
if((state_val_25207 === (2))){
var inst_25203 = (state_25206[(2)]);
var inst_25204 = f__$1.call(null,inst_25203);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25206__$1,inst_25204);
} else {
return null;
}
}
});})(c__24682__auto__,f__$1))
;
return ((function (switch__24622__auto__,c__24682__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24623__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24623__auto____0 = (function (){
var statearr_25208 = [null,null,null,null,null,null,null];
(statearr_25208[(0)] = cljs$core$async$transduce_$_state_machine__24623__auto__);

(statearr_25208[(1)] = (1));

return statearr_25208;
});
var cljs$core$async$transduce_$_state_machine__24623__auto____1 = (function (state_25206){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25209){if((e25209 instanceof Object)){
var ex__24626__auto__ = e25209;
var statearr_25210_25212 = state_25206;
(statearr_25210_25212[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25213 = state_25206;
state_25206 = G__25213;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24623__auto__ = function(state_25206){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24623__auto____1.call(this,state_25206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24623__auto____0;
cljs$core$async$transduce_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24623__auto____1;
return cljs$core$async$transduce_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__,f__$1))
})();
var state__24684__auto__ = (function (){var statearr_25211 = f__24683__auto__.call(null);
(statearr_25211[(6)] = c__24682__auto__);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__,f__$1))
);

return c__24682__auto__;
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
var G__25215 = arguments.length;
switch (G__25215) {
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__){
return (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (7))){
var inst_25222 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25242_25263 = state_25240__$1;
(statearr_25242_25263[(2)] = inst_25222);

(statearr_25242_25263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (1))){
var inst_25216 = cljs.core.seq.call(null,coll);
var inst_25217 = inst_25216;
var state_25240__$1 = (function (){var statearr_25243 = state_25240;
(statearr_25243[(7)] = inst_25217);

return statearr_25243;
})();
var statearr_25244_25264 = state_25240__$1;
(statearr_25244_25264[(2)] = null);

(statearr_25244_25264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (4))){
var inst_25217 = (state_25240[(7)]);
var inst_25220 = cljs.core.first.call(null,inst_25217);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25240__$1,(7),ch,inst_25220);
} else {
if((state_val_25241 === (13))){
var inst_25234 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25245_25265 = state_25240__$1;
(statearr_25245_25265[(2)] = inst_25234);

(statearr_25245_25265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (6))){
var inst_25225 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25225)){
var statearr_25246_25266 = state_25240__$1;
(statearr_25246_25266[(1)] = (8));

} else {
var statearr_25247_25267 = state_25240__$1;
(statearr_25247_25267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (3))){
var inst_25238 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25240__$1,inst_25238);
} else {
if((state_val_25241 === (12))){
var state_25240__$1 = state_25240;
var statearr_25248_25268 = state_25240__$1;
(statearr_25248_25268[(2)] = null);

(statearr_25248_25268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (2))){
var inst_25217 = (state_25240[(7)]);
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25217)){
var statearr_25249_25269 = state_25240__$1;
(statearr_25249_25269[(1)] = (4));

} else {
var statearr_25250_25270 = state_25240__$1;
(statearr_25250_25270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (11))){
var inst_25231 = cljs.core.async.close_BANG_.call(null,ch);
var state_25240__$1 = state_25240;
var statearr_25251_25271 = state_25240__$1;
(statearr_25251_25271[(2)] = inst_25231);

(statearr_25251_25271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (9))){
var state_25240__$1 = state_25240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25252_25272 = state_25240__$1;
(statearr_25252_25272[(1)] = (11));

} else {
var statearr_25253_25273 = state_25240__$1;
(statearr_25253_25273[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (5))){
var inst_25217 = (state_25240[(7)]);
var state_25240__$1 = state_25240;
var statearr_25254_25274 = state_25240__$1;
(statearr_25254_25274[(2)] = inst_25217);

(statearr_25254_25274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (10))){
var inst_25236 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25255_25275 = state_25240__$1;
(statearr_25255_25275[(2)] = inst_25236);

(statearr_25255_25275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (8))){
var inst_25217 = (state_25240[(7)]);
var inst_25227 = cljs.core.next.call(null,inst_25217);
var inst_25217__$1 = inst_25227;
var state_25240__$1 = (function (){var statearr_25256 = state_25240;
(statearr_25256[(7)] = inst_25217__$1);

return statearr_25256;
})();
var statearr_25257_25276 = state_25240__$1;
(statearr_25257_25276[(2)] = null);

(statearr_25257_25276[(1)] = (2));


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
});})(c__24682__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_25258 = [null,null,null,null,null,null,null,null];
(statearr_25258[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_25258[(1)] = (1));

return statearr_25258;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_25240){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25259){if((e25259 instanceof Object)){
var ex__24626__auto__ = e25259;
var statearr_25260_25277 = state_25240;
(statearr_25260_25277[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25278 = state_25240;
state_25240 = G__25278;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__))
})();
var state__24684__auto__ = (function (){var statearr_25261 = f__24683__auto__.call(null);
(statearr_25261[(6)] = c__24682__auto__);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__))
);

return c__24682__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25279 = (function (ch,cs,meta25280){
this.ch = ch;
this.cs = cs;
this.meta25280 = meta25280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25281,meta25280__$1){
var self__ = this;
var _25281__$1 = this;
return (new cljs.core.async.t_cljs$core$async25279(self__.ch,self__.cs,meta25280__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25281){
var self__ = this;
var _25281__$1 = this;
return self__.meta25280;
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25280","meta25280",379587320,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25279";

cljs.core.async.t_cljs$core$async25279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25279");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25279.
 */
cljs.core.async.__GT_t_cljs$core$async25279 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25279(ch__$1,cs__$1,meta25280){
return (new cljs.core.async.t_cljs$core$async25279(ch__$1,cs__$1,meta25280));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25279(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24682__auto___25501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25501,cs,m,dchan,dctr,done){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25501,cs,m,dchan,dctr,done){
return (function (state_25416){
var state_val_25417 = (state_25416[(1)]);
if((state_val_25417 === (7))){
var inst_25412 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25418_25502 = state_25416__$1;
(statearr_25418_25502[(2)] = inst_25412);

(statearr_25418_25502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (20))){
var inst_25315 = (state_25416[(7)]);
var inst_25327 = cljs.core.first.call(null,inst_25315);
var inst_25328 = cljs.core.nth.call(null,inst_25327,(0),null);
var inst_25329 = cljs.core.nth.call(null,inst_25327,(1),null);
var state_25416__$1 = (function (){var statearr_25419 = state_25416;
(statearr_25419[(8)] = inst_25328);

return statearr_25419;
})();
if(cljs.core.truth_(inst_25329)){
var statearr_25420_25503 = state_25416__$1;
(statearr_25420_25503[(1)] = (22));

} else {
var statearr_25421_25504 = state_25416__$1;
(statearr_25421_25504[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (27))){
var inst_25364 = (state_25416[(9)]);
var inst_25284 = (state_25416[(10)]);
var inst_25357 = (state_25416[(11)]);
var inst_25359 = (state_25416[(12)]);
var inst_25364__$1 = cljs.core._nth.call(null,inst_25357,inst_25359);
var inst_25365 = cljs.core.async.put_BANG_.call(null,inst_25364__$1,inst_25284,done);
var state_25416__$1 = (function (){var statearr_25422 = state_25416;
(statearr_25422[(9)] = inst_25364__$1);

return statearr_25422;
})();
if(cljs.core.truth_(inst_25365)){
var statearr_25423_25505 = state_25416__$1;
(statearr_25423_25505[(1)] = (30));

} else {
var statearr_25424_25506 = state_25416__$1;
(statearr_25424_25506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (1))){
var state_25416__$1 = state_25416;
var statearr_25425_25507 = state_25416__$1;
(statearr_25425_25507[(2)] = null);

(statearr_25425_25507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (24))){
var inst_25315 = (state_25416[(7)]);
var inst_25334 = (state_25416[(2)]);
var inst_25335 = cljs.core.next.call(null,inst_25315);
var inst_25293 = inst_25335;
var inst_25294 = null;
var inst_25295 = (0);
var inst_25296 = (0);
var state_25416__$1 = (function (){var statearr_25426 = state_25416;
(statearr_25426[(13)] = inst_25296);

(statearr_25426[(14)] = inst_25294);

(statearr_25426[(15)] = inst_25334);

(statearr_25426[(16)] = inst_25295);

(statearr_25426[(17)] = inst_25293);

return statearr_25426;
})();
var statearr_25427_25508 = state_25416__$1;
(statearr_25427_25508[(2)] = null);

(statearr_25427_25508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (39))){
var state_25416__$1 = state_25416;
var statearr_25431_25509 = state_25416__$1;
(statearr_25431_25509[(2)] = null);

(statearr_25431_25509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (4))){
var inst_25284 = (state_25416[(10)]);
var inst_25284__$1 = (state_25416[(2)]);
var inst_25285 = (inst_25284__$1 == null);
var state_25416__$1 = (function (){var statearr_25432 = state_25416;
(statearr_25432[(10)] = inst_25284__$1);

return statearr_25432;
})();
if(cljs.core.truth_(inst_25285)){
var statearr_25433_25510 = state_25416__$1;
(statearr_25433_25510[(1)] = (5));

} else {
var statearr_25434_25511 = state_25416__$1;
(statearr_25434_25511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (15))){
var inst_25296 = (state_25416[(13)]);
var inst_25294 = (state_25416[(14)]);
var inst_25295 = (state_25416[(16)]);
var inst_25293 = (state_25416[(17)]);
var inst_25311 = (state_25416[(2)]);
var inst_25312 = (inst_25296 + (1));
var tmp25428 = inst_25294;
var tmp25429 = inst_25295;
var tmp25430 = inst_25293;
var inst_25293__$1 = tmp25430;
var inst_25294__$1 = tmp25428;
var inst_25295__$1 = tmp25429;
var inst_25296__$1 = inst_25312;
var state_25416__$1 = (function (){var statearr_25435 = state_25416;
(statearr_25435[(13)] = inst_25296__$1);

(statearr_25435[(14)] = inst_25294__$1);

(statearr_25435[(18)] = inst_25311);

(statearr_25435[(16)] = inst_25295__$1);

(statearr_25435[(17)] = inst_25293__$1);

return statearr_25435;
})();
var statearr_25436_25512 = state_25416__$1;
(statearr_25436_25512[(2)] = null);

(statearr_25436_25512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (21))){
var inst_25338 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25440_25513 = state_25416__$1;
(statearr_25440_25513[(2)] = inst_25338);

(statearr_25440_25513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (31))){
var inst_25364 = (state_25416[(9)]);
var inst_25368 = done.call(null,null);
var inst_25369 = cljs.core.async.untap_STAR_.call(null,m,inst_25364);
var state_25416__$1 = (function (){var statearr_25441 = state_25416;
(statearr_25441[(19)] = inst_25368);

return statearr_25441;
})();
var statearr_25442_25514 = state_25416__$1;
(statearr_25442_25514[(2)] = inst_25369);

(statearr_25442_25514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (32))){
var inst_25356 = (state_25416[(20)]);
var inst_25357 = (state_25416[(11)]);
var inst_25358 = (state_25416[(21)]);
var inst_25359 = (state_25416[(12)]);
var inst_25371 = (state_25416[(2)]);
var inst_25372 = (inst_25359 + (1));
var tmp25437 = inst_25356;
var tmp25438 = inst_25357;
var tmp25439 = inst_25358;
var inst_25356__$1 = tmp25437;
var inst_25357__$1 = tmp25438;
var inst_25358__$1 = tmp25439;
var inst_25359__$1 = inst_25372;
var state_25416__$1 = (function (){var statearr_25443 = state_25416;
(statearr_25443[(22)] = inst_25371);

(statearr_25443[(20)] = inst_25356__$1);

(statearr_25443[(11)] = inst_25357__$1);

(statearr_25443[(21)] = inst_25358__$1);

(statearr_25443[(12)] = inst_25359__$1);

return statearr_25443;
})();
var statearr_25444_25515 = state_25416__$1;
(statearr_25444_25515[(2)] = null);

(statearr_25444_25515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (40))){
var inst_25384 = (state_25416[(23)]);
var inst_25388 = done.call(null,null);
var inst_25389 = cljs.core.async.untap_STAR_.call(null,m,inst_25384);
var state_25416__$1 = (function (){var statearr_25445 = state_25416;
(statearr_25445[(24)] = inst_25388);

return statearr_25445;
})();
var statearr_25446_25516 = state_25416__$1;
(statearr_25446_25516[(2)] = inst_25389);

(statearr_25446_25516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (33))){
var inst_25375 = (state_25416[(25)]);
var inst_25377 = cljs.core.chunked_seq_QMARK_.call(null,inst_25375);
var state_25416__$1 = state_25416;
if(inst_25377){
var statearr_25447_25517 = state_25416__$1;
(statearr_25447_25517[(1)] = (36));

} else {
var statearr_25448_25518 = state_25416__$1;
(statearr_25448_25518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (13))){
var inst_25305 = (state_25416[(26)]);
var inst_25308 = cljs.core.async.close_BANG_.call(null,inst_25305);
var state_25416__$1 = state_25416;
var statearr_25449_25519 = state_25416__$1;
(statearr_25449_25519[(2)] = inst_25308);

(statearr_25449_25519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (22))){
var inst_25328 = (state_25416[(8)]);
var inst_25331 = cljs.core.async.close_BANG_.call(null,inst_25328);
var state_25416__$1 = state_25416;
var statearr_25450_25520 = state_25416__$1;
(statearr_25450_25520[(2)] = inst_25331);

(statearr_25450_25520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (36))){
var inst_25375 = (state_25416[(25)]);
var inst_25379 = cljs.core.chunk_first.call(null,inst_25375);
var inst_25380 = cljs.core.chunk_rest.call(null,inst_25375);
var inst_25381 = cljs.core.count.call(null,inst_25379);
var inst_25356 = inst_25380;
var inst_25357 = inst_25379;
var inst_25358 = inst_25381;
var inst_25359 = (0);
var state_25416__$1 = (function (){var statearr_25451 = state_25416;
(statearr_25451[(20)] = inst_25356);

(statearr_25451[(11)] = inst_25357);

(statearr_25451[(21)] = inst_25358);

(statearr_25451[(12)] = inst_25359);

return statearr_25451;
})();
var statearr_25452_25521 = state_25416__$1;
(statearr_25452_25521[(2)] = null);

(statearr_25452_25521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (41))){
var inst_25375 = (state_25416[(25)]);
var inst_25391 = (state_25416[(2)]);
var inst_25392 = cljs.core.next.call(null,inst_25375);
var inst_25356 = inst_25392;
var inst_25357 = null;
var inst_25358 = (0);
var inst_25359 = (0);
var state_25416__$1 = (function (){var statearr_25453 = state_25416;
(statearr_25453[(20)] = inst_25356);

(statearr_25453[(11)] = inst_25357);

(statearr_25453[(21)] = inst_25358);

(statearr_25453[(27)] = inst_25391);

(statearr_25453[(12)] = inst_25359);

return statearr_25453;
})();
var statearr_25454_25522 = state_25416__$1;
(statearr_25454_25522[(2)] = null);

(statearr_25454_25522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (43))){
var state_25416__$1 = state_25416;
var statearr_25455_25523 = state_25416__$1;
(statearr_25455_25523[(2)] = null);

(statearr_25455_25523[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (29))){
var inst_25400 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25456_25524 = state_25416__$1;
(statearr_25456_25524[(2)] = inst_25400);

(statearr_25456_25524[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (44))){
var inst_25409 = (state_25416[(2)]);
var state_25416__$1 = (function (){var statearr_25457 = state_25416;
(statearr_25457[(28)] = inst_25409);

return statearr_25457;
})();
var statearr_25458_25525 = state_25416__$1;
(statearr_25458_25525[(2)] = null);

(statearr_25458_25525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (6))){
var inst_25348 = (state_25416[(29)]);
var inst_25347 = cljs.core.deref.call(null,cs);
var inst_25348__$1 = cljs.core.keys.call(null,inst_25347);
var inst_25349 = cljs.core.count.call(null,inst_25348__$1);
var inst_25350 = cljs.core.reset_BANG_.call(null,dctr,inst_25349);
var inst_25355 = cljs.core.seq.call(null,inst_25348__$1);
var inst_25356 = inst_25355;
var inst_25357 = null;
var inst_25358 = (0);
var inst_25359 = (0);
var state_25416__$1 = (function (){var statearr_25459 = state_25416;
(statearr_25459[(20)] = inst_25356);

(statearr_25459[(11)] = inst_25357);

(statearr_25459[(21)] = inst_25358);

(statearr_25459[(29)] = inst_25348__$1);

(statearr_25459[(30)] = inst_25350);

(statearr_25459[(12)] = inst_25359);

return statearr_25459;
})();
var statearr_25460_25526 = state_25416__$1;
(statearr_25460_25526[(2)] = null);

(statearr_25460_25526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (28))){
var inst_25375 = (state_25416[(25)]);
var inst_25356 = (state_25416[(20)]);
var inst_25375__$1 = cljs.core.seq.call(null,inst_25356);
var state_25416__$1 = (function (){var statearr_25461 = state_25416;
(statearr_25461[(25)] = inst_25375__$1);

return statearr_25461;
})();
if(inst_25375__$1){
var statearr_25462_25527 = state_25416__$1;
(statearr_25462_25527[(1)] = (33));

} else {
var statearr_25463_25528 = state_25416__$1;
(statearr_25463_25528[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (25))){
var inst_25358 = (state_25416[(21)]);
var inst_25359 = (state_25416[(12)]);
var inst_25361 = (inst_25359 < inst_25358);
var inst_25362 = inst_25361;
var state_25416__$1 = state_25416;
if(cljs.core.truth_(inst_25362)){
var statearr_25464_25529 = state_25416__$1;
(statearr_25464_25529[(1)] = (27));

} else {
var statearr_25465_25530 = state_25416__$1;
(statearr_25465_25530[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (34))){
var state_25416__$1 = state_25416;
var statearr_25466_25531 = state_25416__$1;
(statearr_25466_25531[(2)] = null);

(statearr_25466_25531[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (17))){
var state_25416__$1 = state_25416;
var statearr_25467_25532 = state_25416__$1;
(statearr_25467_25532[(2)] = null);

(statearr_25467_25532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (3))){
var inst_25414 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25416__$1,inst_25414);
} else {
if((state_val_25417 === (12))){
var inst_25343 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25468_25533 = state_25416__$1;
(statearr_25468_25533[(2)] = inst_25343);

(statearr_25468_25533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (2))){
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25416__$1,(4),ch);
} else {
if((state_val_25417 === (23))){
var state_25416__$1 = state_25416;
var statearr_25469_25534 = state_25416__$1;
(statearr_25469_25534[(2)] = null);

(statearr_25469_25534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (35))){
var inst_25398 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25470_25535 = state_25416__$1;
(statearr_25470_25535[(2)] = inst_25398);

(statearr_25470_25535[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (19))){
var inst_25315 = (state_25416[(7)]);
var inst_25319 = cljs.core.chunk_first.call(null,inst_25315);
var inst_25320 = cljs.core.chunk_rest.call(null,inst_25315);
var inst_25321 = cljs.core.count.call(null,inst_25319);
var inst_25293 = inst_25320;
var inst_25294 = inst_25319;
var inst_25295 = inst_25321;
var inst_25296 = (0);
var state_25416__$1 = (function (){var statearr_25471 = state_25416;
(statearr_25471[(13)] = inst_25296);

(statearr_25471[(14)] = inst_25294);

(statearr_25471[(16)] = inst_25295);

(statearr_25471[(17)] = inst_25293);

return statearr_25471;
})();
var statearr_25472_25536 = state_25416__$1;
(statearr_25472_25536[(2)] = null);

(statearr_25472_25536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (11))){
var inst_25315 = (state_25416[(7)]);
var inst_25293 = (state_25416[(17)]);
var inst_25315__$1 = cljs.core.seq.call(null,inst_25293);
var state_25416__$1 = (function (){var statearr_25473 = state_25416;
(statearr_25473[(7)] = inst_25315__$1);

return statearr_25473;
})();
if(inst_25315__$1){
var statearr_25474_25537 = state_25416__$1;
(statearr_25474_25537[(1)] = (16));

} else {
var statearr_25475_25538 = state_25416__$1;
(statearr_25475_25538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (9))){
var inst_25345 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25476_25539 = state_25416__$1;
(statearr_25476_25539[(2)] = inst_25345);

(statearr_25476_25539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (5))){
var inst_25291 = cljs.core.deref.call(null,cs);
var inst_25292 = cljs.core.seq.call(null,inst_25291);
var inst_25293 = inst_25292;
var inst_25294 = null;
var inst_25295 = (0);
var inst_25296 = (0);
var state_25416__$1 = (function (){var statearr_25477 = state_25416;
(statearr_25477[(13)] = inst_25296);

(statearr_25477[(14)] = inst_25294);

(statearr_25477[(16)] = inst_25295);

(statearr_25477[(17)] = inst_25293);

return statearr_25477;
})();
var statearr_25478_25540 = state_25416__$1;
(statearr_25478_25540[(2)] = null);

(statearr_25478_25540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (14))){
var state_25416__$1 = state_25416;
var statearr_25479_25541 = state_25416__$1;
(statearr_25479_25541[(2)] = null);

(statearr_25479_25541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (45))){
var inst_25406 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25480_25542 = state_25416__$1;
(statearr_25480_25542[(2)] = inst_25406);

(statearr_25480_25542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (26))){
var inst_25348 = (state_25416[(29)]);
var inst_25402 = (state_25416[(2)]);
var inst_25403 = cljs.core.seq.call(null,inst_25348);
var state_25416__$1 = (function (){var statearr_25481 = state_25416;
(statearr_25481[(31)] = inst_25402);

return statearr_25481;
})();
if(inst_25403){
var statearr_25482_25543 = state_25416__$1;
(statearr_25482_25543[(1)] = (42));

} else {
var statearr_25483_25544 = state_25416__$1;
(statearr_25483_25544[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (16))){
var inst_25315 = (state_25416[(7)]);
var inst_25317 = cljs.core.chunked_seq_QMARK_.call(null,inst_25315);
var state_25416__$1 = state_25416;
if(inst_25317){
var statearr_25484_25545 = state_25416__$1;
(statearr_25484_25545[(1)] = (19));

} else {
var statearr_25485_25546 = state_25416__$1;
(statearr_25485_25546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (38))){
var inst_25395 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25486_25547 = state_25416__$1;
(statearr_25486_25547[(2)] = inst_25395);

(statearr_25486_25547[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (30))){
var state_25416__$1 = state_25416;
var statearr_25487_25548 = state_25416__$1;
(statearr_25487_25548[(2)] = null);

(statearr_25487_25548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (10))){
var inst_25296 = (state_25416[(13)]);
var inst_25294 = (state_25416[(14)]);
var inst_25304 = cljs.core._nth.call(null,inst_25294,inst_25296);
var inst_25305 = cljs.core.nth.call(null,inst_25304,(0),null);
var inst_25306 = cljs.core.nth.call(null,inst_25304,(1),null);
var state_25416__$1 = (function (){var statearr_25488 = state_25416;
(statearr_25488[(26)] = inst_25305);

return statearr_25488;
})();
if(cljs.core.truth_(inst_25306)){
var statearr_25489_25549 = state_25416__$1;
(statearr_25489_25549[(1)] = (13));

} else {
var statearr_25490_25550 = state_25416__$1;
(statearr_25490_25550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (18))){
var inst_25341 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25491_25551 = state_25416__$1;
(statearr_25491_25551[(2)] = inst_25341);

(statearr_25491_25551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (42))){
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25416__$1,(45),dchan);
} else {
if((state_val_25417 === (37))){
var inst_25384 = (state_25416[(23)]);
var inst_25375 = (state_25416[(25)]);
var inst_25284 = (state_25416[(10)]);
var inst_25384__$1 = cljs.core.first.call(null,inst_25375);
var inst_25385 = cljs.core.async.put_BANG_.call(null,inst_25384__$1,inst_25284,done);
var state_25416__$1 = (function (){var statearr_25492 = state_25416;
(statearr_25492[(23)] = inst_25384__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25385)){
var statearr_25493_25552 = state_25416__$1;
(statearr_25493_25552[(1)] = (39));

} else {
var statearr_25494_25553 = state_25416__$1;
(statearr_25494_25553[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (8))){
var inst_25296 = (state_25416[(13)]);
var inst_25295 = (state_25416[(16)]);
var inst_25298 = (inst_25296 < inst_25295);
var inst_25299 = inst_25298;
var state_25416__$1 = state_25416;
if(cljs.core.truth_(inst_25299)){
var statearr_25495_25554 = state_25416__$1;
(statearr_25495_25554[(1)] = (10));

} else {
var statearr_25496_25555 = state_25416__$1;
(statearr_25496_25555[(1)] = (11));

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
});})(c__24682__auto___25501,cs,m,dchan,dctr,done))
;
return ((function (switch__24622__auto__,c__24682__auto___25501,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24623__auto__ = null;
var cljs$core$async$mult_$_state_machine__24623__auto____0 = (function (){
var statearr_25497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25497[(0)] = cljs$core$async$mult_$_state_machine__24623__auto__);

(statearr_25497[(1)] = (1));

return statearr_25497;
});
var cljs$core$async$mult_$_state_machine__24623__auto____1 = (function (state_25416){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25498){if((e25498 instanceof Object)){
var ex__24626__auto__ = e25498;
var statearr_25499_25556 = state_25416;
(statearr_25499_25556[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25557 = state_25416;
state_25416 = G__25557;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24623__auto__ = function(state_25416){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24623__auto____1.call(this,state_25416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24623__auto____0;
cljs$core$async$mult_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24623__auto____1;
return cljs$core$async$mult_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25501,cs,m,dchan,dctr,done))
})();
var state__24684__auto__ = (function (){var statearr_25500 = f__24683__auto__.call(null);
(statearr_25500[(6)] = c__24682__auto___25501);

return statearr_25500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25501,cs,m,dchan,dctr,done))
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
var G__25559 = arguments.length;
switch (G__25559) {
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
var len__4730__auto___25571 = arguments.length;
var i__4731__auto___25572 = (0);
while(true){
if((i__4731__auto___25572 < len__4730__auto___25571)){
args__4736__auto__.push((arguments[i__4731__auto___25572]));

var G__25573 = (i__4731__auto___25572 + (1));
i__4731__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25565){
var map__25566 = p__25565;
var map__25566__$1 = (((((!((map__25566 == null))))?(((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25566):map__25566);
var opts = map__25566__$1;
var statearr_25568_25574 = state;
(statearr_25568_25574[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25566,map__25566__$1,opts){
return (function (val){
var statearr_25569_25575 = state;
(statearr_25569_25575[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25566,map__25566__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25570_25576 = state;
(statearr_25570_25576[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25561){
var G__25562 = cljs.core.first.call(null,seq25561);
var seq25561__$1 = cljs.core.next.call(null,seq25561);
var G__25563 = cljs.core.first.call(null,seq25561__$1);
var seq25561__$2 = cljs.core.next.call(null,seq25561__$1);
var G__25564 = cljs.core.first.call(null,seq25561__$2);
var seq25561__$3 = cljs.core.next.call(null,seq25561__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25562,G__25563,G__25564,seq25561__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25577 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25578){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25578 = meta25578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25579,meta25578__$1){
var self__ = this;
var _25579__$1 = this;
return (new cljs.core.async.t_cljs$core$async25577(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25578__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25579){
var self__ = this;
var _25579__$1 = this;
return self__.meta25578;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25577.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25578","meta25578",184539122,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25577";

cljs.core.async.t_cljs$core$async25577.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25577");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25577.
 */
cljs.core.async.__GT_t_cljs$core$async25577 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25577(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25578){
return (new cljs.core.async.t_cljs$core$async25577(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25578));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25577(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24682__auto___25741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25681){
var state_val_25682 = (state_25681[(1)]);
if((state_val_25682 === (7))){
var inst_25596 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25683_25742 = state_25681__$1;
(statearr_25683_25742[(2)] = inst_25596);

(statearr_25683_25742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (20))){
var inst_25608 = (state_25681[(7)]);
var state_25681__$1 = state_25681;
var statearr_25684_25743 = state_25681__$1;
(statearr_25684_25743[(2)] = inst_25608);

(statearr_25684_25743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (27))){
var state_25681__$1 = state_25681;
var statearr_25685_25744 = state_25681__$1;
(statearr_25685_25744[(2)] = null);

(statearr_25685_25744[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (1))){
var inst_25583 = (state_25681[(8)]);
var inst_25583__$1 = calc_state.call(null);
var inst_25585 = (inst_25583__$1 == null);
var inst_25586 = cljs.core.not.call(null,inst_25585);
var state_25681__$1 = (function (){var statearr_25686 = state_25681;
(statearr_25686[(8)] = inst_25583__$1);

return statearr_25686;
})();
if(inst_25586){
var statearr_25687_25745 = state_25681__$1;
(statearr_25687_25745[(1)] = (2));

} else {
var statearr_25688_25746 = state_25681__$1;
(statearr_25688_25746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (24))){
var inst_25632 = (state_25681[(9)]);
var inst_25655 = (state_25681[(10)]);
var inst_25641 = (state_25681[(11)]);
var inst_25655__$1 = inst_25632.call(null,inst_25641);
var state_25681__$1 = (function (){var statearr_25689 = state_25681;
(statearr_25689[(10)] = inst_25655__$1);

return statearr_25689;
})();
if(cljs.core.truth_(inst_25655__$1)){
var statearr_25690_25747 = state_25681__$1;
(statearr_25690_25747[(1)] = (29));

} else {
var statearr_25691_25748 = state_25681__$1;
(statearr_25691_25748[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (4))){
var inst_25599 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25599)){
var statearr_25692_25749 = state_25681__$1;
(statearr_25692_25749[(1)] = (8));

} else {
var statearr_25693_25750 = state_25681__$1;
(statearr_25693_25750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (15))){
var inst_25626 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25626)){
var statearr_25694_25751 = state_25681__$1;
(statearr_25694_25751[(1)] = (19));

} else {
var statearr_25695_25752 = state_25681__$1;
(statearr_25695_25752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (21))){
var inst_25631 = (state_25681[(12)]);
var inst_25631__$1 = (state_25681[(2)]);
var inst_25632 = cljs.core.get.call(null,inst_25631__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25633 = cljs.core.get.call(null,inst_25631__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25634 = cljs.core.get.call(null,inst_25631__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25681__$1 = (function (){var statearr_25696 = state_25681;
(statearr_25696[(12)] = inst_25631__$1);

(statearr_25696[(13)] = inst_25633);

(statearr_25696[(9)] = inst_25632);

return statearr_25696;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25681__$1,(22),inst_25634);
} else {
if((state_val_25682 === (31))){
var inst_25663 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25663)){
var statearr_25697_25753 = state_25681__$1;
(statearr_25697_25753[(1)] = (32));

} else {
var statearr_25698_25754 = state_25681__$1;
(statearr_25698_25754[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (32))){
var inst_25640 = (state_25681[(14)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25681__$1,(35),out,inst_25640);
} else {
if((state_val_25682 === (33))){
var inst_25631 = (state_25681[(12)]);
var inst_25608 = inst_25631;
var state_25681__$1 = (function (){var statearr_25699 = state_25681;
(statearr_25699[(7)] = inst_25608);

return statearr_25699;
})();
var statearr_25700_25755 = state_25681__$1;
(statearr_25700_25755[(2)] = null);

(statearr_25700_25755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (13))){
var inst_25608 = (state_25681[(7)]);
var inst_25615 = inst_25608.cljs$lang$protocol_mask$partition0$;
var inst_25616 = (inst_25615 & (64));
var inst_25617 = inst_25608.cljs$core$ISeq$;
var inst_25618 = (cljs.core.PROTOCOL_SENTINEL === inst_25617);
var inst_25619 = ((inst_25616) || (inst_25618));
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25619)){
var statearr_25701_25756 = state_25681__$1;
(statearr_25701_25756[(1)] = (16));

} else {
var statearr_25702_25757 = state_25681__$1;
(statearr_25702_25757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (22))){
var inst_25640 = (state_25681[(14)]);
var inst_25641 = (state_25681[(11)]);
var inst_25639 = (state_25681[(2)]);
var inst_25640__$1 = cljs.core.nth.call(null,inst_25639,(0),null);
var inst_25641__$1 = cljs.core.nth.call(null,inst_25639,(1),null);
var inst_25642 = (inst_25640__$1 == null);
var inst_25643 = cljs.core._EQ_.call(null,inst_25641__$1,change);
var inst_25644 = ((inst_25642) || (inst_25643));
var state_25681__$1 = (function (){var statearr_25703 = state_25681;
(statearr_25703[(14)] = inst_25640__$1);

(statearr_25703[(11)] = inst_25641__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25644)){
var statearr_25704_25758 = state_25681__$1;
(statearr_25704_25758[(1)] = (23));

} else {
var statearr_25705_25759 = state_25681__$1;
(statearr_25705_25759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (36))){
var inst_25631 = (state_25681[(12)]);
var inst_25608 = inst_25631;
var state_25681__$1 = (function (){var statearr_25706 = state_25681;
(statearr_25706[(7)] = inst_25608);

return statearr_25706;
})();
var statearr_25707_25760 = state_25681__$1;
(statearr_25707_25760[(2)] = null);

(statearr_25707_25760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (29))){
var inst_25655 = (state_25681[(10)]);
var state_25681__$1 = state_25681;
var statearr_25708_25761 = state_25681__$1;
(statearr_25708_25761[(2)] = inst_25655);

(statearr_25708_25761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (6))){
var state_25681__$1 = state_25681;
var statearr_25709_25762 = state_25681__$1;
(statearr_25709_25762[(2)] = false);

(statearr_25709_25762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (28))){
var inst_25651 = (state_25681[(2)]);
var inst_25652 = calc_state.call(null);
var inst_25608 = inst_25652;
var state_25681__$1 = (function (){var statearr_25710 = state_25681;
(statearr_25710[(15)] = inst_25651);

(statearr_25710[(7)] = inst_25608);

return statearr_25710;
})();
var statearr_25711_25763 = state_25681__$1;
(statearr_25711_25763[(2)] = null);

(statearr_25711_25763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (25))){
var inst_25677 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25712_25764 = state_25681__$1;
(statearr_25712_25764[(2)] = inst_25677);

(statearr_25712_25764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (34))){
var inst_25675 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25713_25765 = state_25681__$1;
(statearr_25713_25765[(2)] = inst_25675);

(statearr_25713_25765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (17))){
var state_25681__$1 = state_25681;
var statearr_25714_25766 = state_25681__$1;
(statearr_25714_25766[(2)] = false);

(statearr_25714_25766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (3))){
var state_25681__$1 = state_25681;
var statearr_25715_25767 = state_25681__$1;
(statearr_25715_25767[(2)] = false);

(statearr_25715_25767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (12))){
var inst_25679 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25681__$1,inst_25679);
} else {
if((state_val_25682 === (2))){
var inst_25583 = (state_25681[(8)]);
var inst_25588 = inst_25583.cljs$lang$protocol_mask$partition0$;
var inst_25589 = (inst_25588 & (64));
var inst_25590 = inst_25583.cljs$core$ISeq$;
var inst_25591 = (cljs.core.PROTOCOL_SENTINEL === inst_25590);
var inst_25592 = ((inst_25589) || (inst_25591));
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25592)){
var statearr_25716_25768 = state_25681__$1;
(statearr_25716_25768[(1)] = (5));

} else {
var statearr_25717_25769 = state_25681__$1;
(statearr_25717_25769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (23))){
var inst_25640 = (state_25681[(14)]);
var inst_25646 = (inst_25640 == null);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25646)){
var statearr_25718_25770 = state_25681__$1;
(statearr_25718_25770[(1)] = (26));

} else {
var statearr_25719_25771 = state_25681__$1;
(statearr_25719_25771[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (35))){
var inst_25666 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25666)){
var statearr_25720_25772 = state_25681__$1;
(statearr_25720_25772[(1)] = (36));

} else {
var statearr_25721_25773 = state_25681__$1;
(statearr_25721_25773[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (19))){
var inst_25608 = (state_25681[(7)]);
var inst_25628 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25608);
var state_25681__$1 = state_25681;
var statearr_25722_25774 = state_25681__$1;
(statearr_25722_25774[(2)] = inst_25628);

(statearr_25722_25774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (11))){
var inst_25608 = (state_25681[(7)]);
var inst_25612 = (inst_25608 == null);
var inst_25613 = cljs.core.not.call(null,inst_25612);
var state_25681__$1 = state_25681;
if(inst_25613){
var statearr_25723_25775 = state_25681__$1;
(statearr_25723_25775[(1)] = (13));

} else {
var statearr_25724_25776 = state_25681__$1;
(statearr_25724_25776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (9))){
var inst_25583 = (state_25681[(8)]);
var state_25681__$1 = state_25681;
var statearr_25725_25777 = state_25681__$1;
(statearr_25725_25777[(2)] = inst_25583);

(statearr_25725_25777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (5))){
var state_25681__$1 = state_25681;
var statearr_25726_25778 = state_25681__$1;
(statearr_25726_25778[(2)] = true);

(statearr_25726_25778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (14))){
var state_25681__$1 = state_25681;
var statearr_25727_25779 = state_25681__$1;
(statearr_25727_25779[(2)] = false);

(statearr_25727_25779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (26))){
var inst_25641 = (state_25681[(11)]);
var inst_25648 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25641);
var state_25681__$1 = state_25681;
var statearr_25728_25780 = state_25681__$1;
(statearr_25728_25780[(2)] = inst_25648);

(statearr_25728_25780[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (16))){
var state_25681__$1 = state_25681;
var statearr_25729_25781 = state_25681__$1;
(statearr_25729_25781[(2)] = true);

(statearr_25729_25781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (38))){
var inst_25671 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25730_25782 = state_25681__$1;
(statearr_25730_25782[(2)] = inst_25671);

(statearr_25730_25782[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (30))){
var inst_25633 = (state_25681[(13)]);
var inst_25632 = (state_25681[(9)]);
var inst_25641 = (state_25681[(11)]);
var inst_25658 = cljs.core.empty_QMARK_.call(null,inst_25632);
var inst_25659 = inst_25633.call(null,inst_25641);
var inst_25660 = cljs.core.not.call(null,inst_25659);
var inst_25661 = ((inst_25658) && (inst_25660));
var state_25681__$1 = state_25681;
var statearr_25731_25783 = state_25681__$1;
(statearr_25731_25783[(2)] = inst_25661);

(statearr_25731_25783[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (10))){
var inst_25583 = (state_25681[(8)]);
var inst_25604 = (state_25681[(2)]);
var inst_25605 = cljs.core.get.call(null,inst_25604,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25606 = cljs.core.get.call(null,inst_25604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25607 = cljs.core.get.call(null,inst_25604,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25608 = inst_25583;
var state_25681__$1 = (function (){var statearr_25732 = state_25681;
(statearr_25732[(7)] = inst_25608);

(statearr_25732[(16)] = inst_25607);

(statearr_25732[(17)] = inst_25605);

(statearr_25732[(18)] = inst_25606);

return statearr_25732;
})();
var statearr_25733_25784 = state_25681__$1;
(statearr_25733_25784[(2)] = null);

(statearr_25733_25784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (18))){
var inst_25623 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25734_25785 = state_25681__$1;
(statearr_25734_25785[(2)] = inst_25623);

(statearr_25734_25785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (37))){
var state_25681__$1 = state_25681;
var statearr_25735_25786 = state_25681__$1;
(statearr_25735_25786[(2)] = null);

(statearr_25735_25786[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25682 === (8))){
var inst_25583 = (state_25681[(8)]);
var inst_25601 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25583);
var state_25681__$1 = state_25681;
var statearr_25736_25787 = state_25681__$1;
(statearr_25736_25787[(2)] = inst_25601);

(statearr_25736_25787[(1)] = (10));


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
});})(c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24622__auto__,c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24623__auto__ = null;
var cljs$core$async$mix_$_state_machine__24623__auto____0 = (function (){
var statearr_25737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25737[(0)] = cljs$core$async$mix_$_state_machine__24623__auto__);

(statearr_25737[(1)] = (1));

return statearr_25737;
});
var cljs$core$async$mix_$_state_machine__24623__auto____1 = (function (state_25681){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25738){if((e25738 instanceof Object)){
var ex__24626__auto__ = e25738;
var statearr_25739_25788 = state_25681;
(statearr_25739_25788[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25789 = state_25681;
state_25681 = G__25789;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24623__auto__ = function(state_25681){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24623__auto____1.call(this,state_25681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24623__auto____0;
cljs$core$async$mix_$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24623__auto____1;
return cljs$core$async$mix_$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24684__auto__ = (function (){var statearr_25740 = f__24683__auto__.call(null);
(statearr_25740[(6)] = c__24682__auto___25741);

return statearr_25740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25741,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25791 = arguments.length;
switch (G__25791) {
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
var G__25795 = arguments.length;
switch (G__25795) {
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
return (function (p1__25793_SHARP_){
if(cljs.core.truth_(p1__25793_SHARP_.call(null,topic))){
return p1__25793_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25793_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25796 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25797){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25797 = meta25797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25798,meta25797__$1){
var self__ = this;
var _25798__$1 = this;
return (new cljs.core.async.t_cljs$core$async25796(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25797__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25798){
var self__ = this;
var _25798__$1 = this;
return self__.meta25797;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25797","meta25797",-1758247446,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25796";

cljs.core.async.t_cljs$core$async25796.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25796");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25796.
 */
cljs.core.async.__GT_t_cljs$core$async25796 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25797){
return (new cljs.core.async.t_cljs$core$async25796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25797));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25796(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24682__auto___25916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___25916,mults,ensure_mult,p){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___25916,mults,ensure_mult,p){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (7))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25872_25917 = state_25870__$1;
(statearr_25872_25917[(2)] = inst_25866);

(statearr_25872_25917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (20))){
var state_25870__$1 = state_25870;
var statearr_25873_25918 = state_25870__$1;
(statearr_25873_25918[(2)] = null);

(statearr_25873_25918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (1))){
var state_25870__$1 = state_25870;
var statearr_25874_25919 = state_25870__$1;
(statearr_25874_25919[(2)] = null);

(statearr_25874_25919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (24))){
var inst_25849 = (state_25870[(7)]);
var inst_25858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25849);
var state_25870__$1 = state_25870;
var statearr_25875_25920 = state_25870__$1;
(statearr_25875_25920[(2)] = inst_25858);

(statearr_25875_25920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (4))){
var inst_25801 = (state_25870[(8)]);
var inst_25801__$1 = (state_25870[(2)]);
var inst_25802 = (inst_25801__$1 == null);
var state_25870__$1 = (function (){var statearr_25876 = state_25870;
(statearr_25876[(8)] = inst_25801__$1);

return statearr_25876;
})();
if(cljs.core.truth_(inst_25802)){
var statearr_25877_25921 = state_25870__$1;
(statearr_25877_25921[(1)] = (5));

} else {
var statearr_25878_25922 = state_25870__$1;
(statearr_25878_25922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (15))){
var inst_25843 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25879_25923 = state_25870__$1;
(statearr_25879_25923[(2)] = inst_25843);

(statearr_25879_25923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (21))){
var inst_25863 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25880 = state_25870;
(statearr_25880[(9)] = inst_25863);

return statearr_25880;
})();
var statearr_25881_25924 = state_25870__$1;
(statearr_25881_25924[(2)] = null);

(statearr_25881_25924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (13))){
var inst_25825 = (state_25870[(10)]);
var inst_25827 = cljs.core.chunked_seq_QMARK_.call(null,inst_25825);
var state_25870__$1 = state_25870;
if(inst_25827){
var statearr_25882_25925 = state_25870__$1;
(statearr_25882_25925[(1)] = (16));

} else {
var statearr_25883_25926 = state_25870__$1;
(statearr_25883_25926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (22))){
var inst_25855 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25855)){
var statearr_25884_25927 = state_25870__$1;
(statearr_25884_25927[(1)] = (23));

} else {
var statearr_25885_25928 = state_25870__$1;
(statearr_25885_25928[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var inst_25801 = (state_25870[(8)]);
var inst_25851 = (state_25870[(11)]);
var inst_25849 = (state_25870[(7)]);
var inst_25849__$1 = topic_fn.call(null,inst_25801);
var inst_25850 = cljs.core.deref.call(null,mults);
var inst_25851__$1 = cljs.core.get.call(null,inst_25850,inst_25849__$1);
var state_25870__$1 = (function (){var statearr_25886 = state_25870;
(statearr_25886[(11)] = inst_25851__$1);

(statearr_25886[(7)] = inst_25849__$1);

return statearr_25886;
})();
if(cljs.core.truth_(inst_25851__$1)){
var statearr_25887_25929 = state_25870__$1;
(statearr_25887_25929[(1)] = (19));

} else {
var statearr_25888_25930 = state_25870__$1;
(statearr_25888_25930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (25))){
var inst_25860 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25889_25931 = state_25870__$1;
(statearr_25889_25931[(2)] = inst_25860);

(statearr_25889_25931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (17))){
var inst_25825 = (state_25870[(10)]);
var inst_25834 = cljs.core.first.call(null,inst_25825);
var inst_25835 = cljs.core.async.muxch_STAR_.call(null,inst_25834);
var inst_25836 = cljs.core.async.close_BANG_.call(null,inst_25835);
var inst_25837 = cljs.core.next.call(null,inst_25825);
var inst_25811 = inst_25837;
var inst_25812 = null;
var inst_25813 = (0);
var inst_25814 = (0);
var state_25870__$1 = (function (){var statearr_25890 = state_25870;
(statearr_25890[(12)] = inst_25811);

(statearr_25890[(13)] = inst_25812);

(statearr_25890[(14)] = inst_25814);

(statearr_25890[(15)] = inst_25813);

(statearr_25890[(16)] = inst_25836);

return statearr_25890;
})();
var statearr_25891_25932 = state_25870__$1;
(statearr_25891_25932[(2)] = null);

(statearr_25891_25932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (12))){
var inst_25845 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25892_25933 = state_25870__$1;
(statearr_25892_25933[(2)] = inst_25845);

(statearr_25892_25933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (2))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(4),ch);
} else {
if((state_val_25871 === (23))){
var state_25870__$1 = state_25870;
var statearr_25893_25934 = state_25870__$1;
(statearr_25893_25934[(2)] = null);

(statearr_25893_25934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (19))){
var inst_25801 = (state_25870[(8)]);
var inst_25851 = (state_25870[(11)]);
var inst_25853 = cljs.core.async.muxch_STAR_.call(null,inst_25851);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25870__$1,(22),inst_25853,inst_25801);
} else {
if((state_val_25871 === (11))){
var inst_25811 = (state_25870[(12)]);
var inst_25825 = (state_25870[(10)]);
var inst_25825__$1 = cljs.core.seq.call(null,inst_25811);
var state_25870__$1 = (function (){var statearr_25894 = state_25870;
(statearr_25894[(10)] = inst_25825__$1);

return statearr_25894;
})();
if(inst_25825__$1){
var statearr_25895_25935 = state_25870__$1;
(statearr_25895_25935[(1)] = (13));

} else {
var statearr_25896_25936 = state_25870__$1;
(statearr_25896_25936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (9))){
var inst_25847 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25897_25937 = state_25870__$1;
(statearr_25897_25937[(2)] = inst_25847);

(statearr_25897_25937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var inst_25808 = cljs.core.deref.call(null,mults);
var inst_25809 = cljs.core.vals.call(null,inst_25808);
var inst_25810 = cljs.core.seq.call(null,inst_25809);
var inst_25811 = inst_25810;
var inst_25812 = null;
var inst_25813 = (0);
var inst_25814 = (0);
var state_25870__$1 = (function (){var statearr_25898 = state_25870;
(statearr_25898[(12)] = inst_25811);

(statearr_25898[(13)] = inst_25812);

(statearr_25898[(14)] = inst_25814);

(statearr_25898[(15)] = inst_25813);

return statearr_25898;
})();
var statearr_25899_25938 = state_25870__$1;
(statearr_25899_25938[(2)] = null);

(statearr_25899_25938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (14))){
var state_25870__$1 = state_25870;
var statearr_25903_25939 = state_25870__$1;
(statearr_25903_25939[(2)] = null);

(statearr_25903_25939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (16))){
var inst_25825 = (state_25870[(10)]);
var inst_25829 = cljs.core.chunk_first.call(null,inst_25825);
var inst_25830 = cljs.core.chunk_rest.call(null,inst_25825);
var inst_25831 = cljs.core.count.call(null,inst_25829);
var inst_25811 = inst_25830;
var inst_25812 = inst_25829;
var inst_25813 = inst_25831;
var inst_25814 = (0);
var state_25870__$1 = (function (){var statearr_25904 = state_25870;
(statearr_25904[(12)] = inst_25811);

(statearr_25904[(13)] = inst_25812);

(statearr_25904[(14)] = inst_25814);

(statearr_25904[(15)] = inst_25813);

return statearr_25904;
})();
var statearr_25905_25940 = state_25870__$1;
(statearr_25905_25940[(2)] = null);

(statearr_25905_25940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (10))){
var inst_25811 = (state_25870[(12)]);
var inst_25812 = (state_25870[(13)]);
var inst_25814 = (state_25870[(14)]);
var inst_25813 = (state_25870[(15)]);
var inst_25819 = cljs.core._nth.call(null,inst_25812,inst_25814);
var inst_25820 = cljs.core.async.muxch_STAR_.call(null,inst_25819);
var inst_25821 = cljs.core.async.close_BANG_.call(null,inst_25820);
var inst_25822 = (inst_25814 + (1));
var tmp25900 = inst_25811;
var tmp25901 = inst_25812;
var tmp25902 = inst_25813;
var inst_25811__$1 = tmp25900;
var inst_25812__$1 = tmp25901;
var inst_25813__$1 = tmp25902;
var inst_25814__$1 = inst_25822;
var state_25870__$1 = (function (){var statearr_25906 = state_25870;
(statearr_25906[(12)] = inst_25811__$1);

(statearr_25906[(13)] = inst_25812__$1);

(statearr_25906[(17)] = inst_25821);

(statearr_25906[(14)] = inst_25814__$1);

(statearr_25906[(15)] = inst_25813__$1);

return statearr_25906;
})();
var statearr_25907_25941 = state_25870__$1;
(statearr_25907_25941[(2)] = null);

(statearr_25907_25941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (18))){
var inst_25840 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25908_25942 = state_25870__$1;
(statearr_25908_25942[(2)] = inst_25840);

(statearr_25908_25942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25814 = (state_25870[(14)]);
var inst_25813 = (state_25870[(15)]);
var inst_25816 = (inst_25814 < inst_25813);
var inst_25817 = inst_25816;
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25817)){
var statearr_25909_25943 = state_25870__$1;
(statearr_25909_25943[(1)] = (10));

} else {
var statearr_25910_25944 = state_25870__$1;
(statearr_25910_25944[(1)] = (11));

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
});})(c__24682__auto___25916,mults,ensure_mult,p))
;
return ((function (switch__24622__auto__,c__24682__auto___25916,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_25911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25911[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_25911[(1)] = (1));

return statearr_25911;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_25870){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e25912){if((e25912 instanceof Object)){
var ex__24626__auto__ = e25912;
var statearr_25913_25945 = state_25870;
(statearr_25913_25945[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25946 = state_25870;
state_25870 = G__25946;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___25916,mults,ensure_mult,p))
})();
var state__24684__auto__ = (function (){var statearr_25914 = f__24683__auto__.call(null);
(statearr_25914[(6)] = c__24682__auto___25916);

return statearr_25914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___25916,mults,ensure_mult,p))
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
var G__25948 = arguments.length;
switch (G__25948) {
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
var G__25951 = arguments.length;
switch (G__25951) {
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
var G__25954 = arguments.length;
switch (G__25954) {
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
var c__24682__auto___26021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25993){
var state_val_25994 = (state_25993[(1)]);
if((state_val_25994 === (7))){
var state_25993__$1 = state_25993;
var statearr_25995_26022 = state_25993__$1;
(statearr_25995_26022[(2)] = null);

(statearr_25995_26022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (1))){
var state_25993__$1 = state_25993;
var statearr_25996_26023 = state_25993__$1;
(statearr_25996_26023[(2)] = null);

(statearr_25996_26023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (4))){
var inst_25957 = (state_25993[(7)]);
var inst_25959 = (inst_25957 < cnt);
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25959)){
var statearr_25997_26024 = state_25993__$1;
(statearr_25997_26024[(1)] = (6));

} else {
var statearr_25998_26025 = state_25993__$1;
(statearr_25998_26025[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (15))){
var inst_25989 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_25999_26026 = state_25993__$1;
(statearr_25999_26026[(2)] = inst_25989);

(statearr_25999_26026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (13))){
var inst_25982 = cljs.core.async.close_BANG_.call(null,out);
var state_25993__$1 = state_25993;
var statearr_26000_26027 = state_25993__$1;
(statearr_26000_26027[(2)] = inst_25982);

(statearr_26000_26027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (6))){
var state_25993__$1 = state_25993;
var statearr_26001_26028 = state_25993__$1;
(statearr_26001_26028[(2)] = null);

(statearr_26001_26028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (3))){
var inst_25991 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25993__$1,inst_25991);
} else {
if((state_val_25994 === (12))){
var inst_25979 = (state_25993[(8)]);
var inst_25979__$1 = (state_25993[(2)]);
var inst_25980 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25979__$1);
var state_25993__$1 = (function (){var statearr_26002 = state_25993;
(statearr_26002[(8)] = inst_25979__$1);

return statearr_26002;
})();
if(cljs.core.truth_(inst_25980)){
var statearr_26003_26029 = state_25993__$1;
(statearr_26003_26029[(1)] = (13));

} else {
var statearr_26004_26030 = state_25993__$1;
(statearr_26004_26030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (2))){
var inst_25956 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25957 = (0);
var state_25993__$1 = (function (){var statearr_26005 = state_25993;
(statearr_26005[(9)] = inst_25956);

(statearr_26005[(7)] = inst_25957);

return statearr_26005;
})();
var statearr_26006_26031 = state_25993__$1;
(statearr_26006_26031[(2)] = null);

(statearr_26006_26031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (11))){
var inst_25957 = (state_25993[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25993,(10),Object,null,(9));
var inst_25966 = chs__$1.call(null,inst_25957);
var inst_25967 = done.call(null,inst_25957);
var inst_25968 = cljs.core.async.take_BANG_.call(null,inst_25966,inst_25967);
var state_25993__$1 = state_25993;
var statearr_26007_26032 = state_25993__$1;
(statearr_26007_26032[(2)] = inst_25968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (9))){
var inst_25957 = (state_25993[(7)]);
var inst_25970 = (state_25993[(2)]);
var inst_25971 = (inst_25957 + (1));
var inst_25957__$1 = inst_25971;
var state_25993__$1 = (function (){var statearr_26008 = state_25993;
(statearr_26008[(10)] = inst_25970);

(statearr_26008[(7)] = inst_25957__$1);

return statearr_26008;
})();
var statearr_26009_26033 = state_25993__$1;
(statearr_26009_26033[(2)] = null);

(statearr_26009_26033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (5))){
var inst_25977 = (state_25993[(2)]);
var state_25993__$1 = (function (){var statearr_26010 = state_25993;
(statearr_26010[(11)] = inst_25977);

return statearr_26010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25993__$1,(12),dchan);
} else {
if((state_val_25994 === (14))){
var inst_25979 = (state_25993[(8)]);
var inst_25984 = cljs.core.apply.call(null,f,inst_25979);
var state_25993__$1 = state_25993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25993__$1,(16),out,inst_25984);
} else {
if((state_val_25994 === (16))){
var inst_25986 = (state_25993[(2)]);
var state_25993__$1 = (function (){var statearr_26011 = state_25993;
(statearr_26011[(12)] = inst_25986);

return statearr_26011;
})();
var statearr_26012_26034 = state_25993__$1;
(statearr_26012_26034[(2)] = null);

(statearr_26012_26034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (10))){
var inst_25961 = (state_25993[(2)]);
var inst_25962 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25993__$1 = (function (){var statearr_26013 = state_25993;
(statearr_26013[(13)] = inst_25961);

return statearr_26013;
})();
var statearr_26014_26035 = state_25993__$1;
(statearr_26014_26035[(2)] = inst_25962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (8))){
var inst_25975 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26015_26036 = state_25993__$1;
(statearr_26015_26036[(2)] = inst_25975);

(statearr_26015_26036[(1)] = (5));


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
});})(c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24622__auto__,c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26016[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26016[(1)] = (1));

return statearr_26016;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_25993){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_25993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26017){if((e26017 instanceof Object)){
var ex__24626__auto__ = e26017;
var statearr_26018_26037 = state_25993;
(statearr_26018_26037[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26038 = state_25993;
state_25993 = G__26038;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_25993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_25993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24684__auto__ = (function (){var statearr_26019 = f__24683__auto__.call(null);
(statearr_26019[(6)] = c__24682__auto___26021);

return statearr_26019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26021,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26041 = arguments.length;
switch (G__26041) {
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
var c__24682__auto___26095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26095,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26095,out){
return (function (state_26073){
var state_val_26074 = (state_26073[(1)]);
if((state_val_26074 === (7))){
var inst_26053 = (state_26073[(7)]);
var inst_26052 = (state_26073[(8)]);
var inst_26052__$1 = (state_26073[(2)]);
var inst_26053__$1 = cljs.core.nth.call(null,inst_26052__$1,(0),null);
var inst_26054 = cljs.core.nth.call(null,inst_26052__$1,(1),null);
var inst_26055 = (inst_26053__$1 == null);
var state_26073__$1 = (function (){var statearr_26075 = state_26073;
(statearr_26075[(9)] = inst_26054);

(statearr_26075[(7)] = inst_26053__$1);

(statearr_26075[(8)] = inst_26052__$1);

return statearr_26075;
})();
if(cljs.core.truth_(inst_26055)){
var statearr_26076_26096 = state_26073__$1;
(statearr_26076_26096[(1)] = (8));

} else {
var statearr_26077_26097 = state_26073__$1;
(statearr_26077_26097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (1))){
var inst_26042 = cljs.core.vec.call(null,chs);
var inst_26043 = inst_26042;
var state_26073__$1 = (function (){var statearr_26078 = state_26073;
(statearr_26078[(10)] = inst_26043);

return statearr_26078;
})();
var statearr_26079_26098 = state_26073__$1;
(statearr_26079_26098[(2)] = null);

(statearr_26079_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (4))){
var inst_26043 = (state_26073[(10)]);
var state_26073__$1 = state_26073;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26073__$1,(7),inst_26043);
} else {
if((state_val_26074 === (6))){
var inst_26069 = (state_26073[(2)]);
var state_26073__$1 = state_26073;
var statearr_26080_26099 = state_26073__$1;
(statearr_26080_26099[(2)] = inst_26069);

(statearr_26080_26099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (3))){
var inst_26071 = (state_26073[(2)]);
var state_26073__$1 = state_26073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26073__$1,inst_26071);
} else {
if((state_val_26074 === (2))){
var inst_26043 = (state_26073[(10)]);
var inst_26045 = cljs.core.count.call(null,inst_26043);
var inst_26046 = (inst_26045 > (0));
var state_26073__$1 = state_26073;
if(cljs.core.truth_(inst_26046)){
var statearr_26082_26100 = state_26073__$1;
(statearr_26082_26100[(1)] = (4));

} else {
var statearr_26083_26101 = state_26073__$1;
(statearr_26083_26101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (11))){
var inst_26043 = (state_26073[(10)]);
var inst_26062 = (state_26073[(2)]);
var tmp26081 = inst_26043;
var inst_26043__$1 = tmp26081;
var state_26073__$1 = (function (){var statearr_26084 = state_26073;
(statearr_26084[(10)] = inst_26043__$1);

(statearr_26084[(11)] = inst_26062);

return statearr_26084;
})();
var statearr_26085_26102 = state_26073__$1;
(statearr_26085_26102[(2)] = null);

(statearr_26085_26102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (9))){
var inst_26053 = (state_26073[(7)]);
var state_26073__$1 = state_26073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26073__$1,(11),out,inst_26053);
} else {
if((state_val_26074 === (5))){
var inst_26067 = cljs.core.async.close_BANG_.call(null,out);
var state_26073__$1 = state_26073;
var statearr_26086_26103 = state_26073__$1;
(statearr_26086_26103[(2)] = inst_26067);

(statearr_26086_26103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (10))){
var inst_26065 = (state_26073[(2)]);
var state_26073__$1 = state_26073;
var statearr_26087_26104 = state_26073__$1;
(statearr_26087_26104[(2)] = inst_26065);

(statearr_26087_26104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26074 === (8))){
var inst_26054 = (state_26073[(9)]);
var inst_26043 = (state_26073[(10)]);
var inst_26053 = (state_26073[(7)]);
var inst_26052 = (state_26073[(8)]);
var inst_26057 = (function (){var cs = inst_26043;
var vec__26048 = inst_26052;
var v = inst_26053;
var c = inst_26054;
return ((function (cs,vec__26048,v,c,inst_26054,inst_26043,inst_26053,inst_26052,state_val_26074,c__24682__auto___26095,out){
return (function (p1__26039_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26039_SHARP_);
});
;})(cs,vec__26048,v,c,inst_26054,inst_26043,inst_26053,inst_26052,state_val_26074,c__24682__auto___26095,out))
})();
var inst_26058 = cljs.core.filterv.call(null,inst_26057,inst_26043);
var inst_26043__$1 = inst_26058;
var state_26073__$1 = (function (){var statearr_26088 = state_26073;
(statearr_26088[(10)] = inst_26043__$1);

return statearr_26088;
})();
var statearr_26089_26105 = state_26073__$1;
(statearr_26089_26105[(2)] = null);

(statearr_26089_26105[(1)] = (2));


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
});})(c__24682__auto___26095,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26095,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26073){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__24626__auto__ = e26091;
var statearr_26092_26106 = state_26073;
(statearr_26092_26106[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_26073;
state_26073 = G__26107;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26095,out))
})();
var state__24684__auto__ = (function (){var statearr_26093 = f__24683__auto__.call(null);
(statearr_26093[(6)] = c__24682__auto___26095);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26095,out))
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
var G__26109 = arguments.length;
switch (G__26109) {
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
var c__24682__auto___26154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26154,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26154,out){
return (function (state_26133){
var state_val_26134 = (state_26133[(1)]);
if((state_val_26134 === (7))){
var inst_26115 = (state_26133[(7)]);
var inst_26115__$1 = (state_26133[(2)]);
var inst_26116 = (inst_26115__$1 == null);
var inst_26117 = cljs.core.not.call(null,inst_26116);
var state_26133__$1 = (function (){var statearr_26135 = state_26133;
(statearr_26135[(7)] = inst_26115__$1);

return statearr_26135;
})();
if(inst_26117){
var statearr_26136_26155 = state_26133__$1;
(statearr_26136_26155[(1)] = (8));

} else {
var statearr_26137_26156 = state_26133__$1;
(statearr_26137_26156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (1))){
var inst_26110 = (0);
var state_26133__$1 = (function (){var statearr_26138 = state_26133;
(statearr_26138[(8)] = inst_26110);

return statearr_26138;
})();
var statearr_26139_26157 = state_26133__$1;
(statearr_26139_26157[(2)] = null);

(statearr_26139_26157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (4))){
var state_26133__$1 = state_26133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26133__$1,(7),ch);
} else {
if((state_val_26134 === (6))){
var inst_26128 = (state_26133[(2)]);
var state_26133__$1 = state_26133;
var statearr_26140_26158 = state_26133__$1;
(statearr_26140_26158[(2)] = inst_26128);

(statearr_26140_26158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (3))){
var inst_26130 = (state_26133[(2)]);
var inst_26131 = cljs.core.async.close_BANG_.call(null,out);
var state_26133__$1 = (function (){var statearr_26141 = state_26133;
(statearr_26141[(9)] = inst_26130);

return statearr_26141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26133__$1,inst_26131);
} else {
if((state_val_26134 === (2))){
var inst_26110 = (state_26133[(8)]);
var inst_26112 = (inst_26110 < n);
var state_26133__$1 = state_26133;
if(cljs.core.truth_(inst_26112)){
var statearr_26142_26159 = state_26133__$1;
(statearr_26142_26159[(1)] = (4));

} else {
var statearr_26143_26160 = state_26133__$1;
(statearr_26143_26160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (11))){
var inst_26110 = (state_26133[(8)]);
var inst_26120 = (state_26133[(2)]);
var inst_26121 = (inst_26110 + (1));
var inst_26110__$1 = inst_26121;
var state_26133__$1 = (function (){var statearr_26144 = state_26133;
(statearr_26144[(10)] = inst_26120);

(statearr_26144[(8)] = inst_26110__$1);

return statearr_26144;
})();
var statearr_26145_26161 = state_26133__$1;
(statearr_26145_26161[(2)] = null);

(statearr_26145_26161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (9))){
var state_26133__$1 = state_26133;
var statearr_26146_26162 = state_26133__$1;
(statearr_26146_26162[(2)] = null);

(statearr_26146_26162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (5))){
var state_26133__$1 = state_26133;
var statearr_26147_26163 = state_26133__$1;
(statearr_26147_26163[(2)] = null);

(statearr_26147_26163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (10))){
var inst_26125 = (state_26133[(2)]);
var state_26133__$1 = state_26133;
var statearr_26148_26164 = state_26133__$1;
(statearr_26148_26164[(2)] = inst_26125);

(statearr_26148_26164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26134 === (8))){
var inst_26115 = (state_26133[(7)]);
var state_26133__$1 = state_26133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26133__$1,(11),out,inst_26115);
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
});})(c__24682__auto___26154,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26154,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26149[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26149[(1)] = (1));

return statearr_26149;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26133){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26150){if((e26150 instanceof Object)){
var ex__24626__auto__ = e26150;
var statearr_26151_26165 = state_26133;
(statearr_26151_26165[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_26133;
state_26133 = G__26166;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26154,out))
})();
var state__24684__auto__ = (function (){var statearr_26152 = f__24683__auto__.call(null);
(statearr_26152[(6)] = c__24682__auto___26154);

return statearr_26152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26154,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26168 = (function (f,ch,meta26169){
this.f = f;
this.ch = ch;
this.meta26169 = meta26169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26170,meta26169__$1){
var self__ = this;
var _26170__$1 = this;
return (new cljs.core.async.t_cljs$core$async26168(self__.f,self__.ch,meta26169__$1));
});

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26170){
var self__ = this;
var _26170__$1 = this;
return self__.meta26169;
});

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26171 = (function (f,ch,meta26169,_,fn1,meta26172){
this.f = f;
this.ch = ch;
this.meta26169 = meta26169;
this._ = _;
this.fn1 = fn1;
this.meta26172 = meta26172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26173,meta26172__$1){
var self__ = this;
var _26173__$1 = this;
return (new cljs.core.async.t_cljs$core$async26171(self__.f,self__.ch,self__.meta26169,self__._,self__.fn1,meta26172__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26173){
var self__ = this;
var _26173__$1 = this;
return self__.meta26172;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26167_SHARP_){
return f1.call(null,(((p1__26167_SHARP_ == null))?null:self__.f.call(null,p1__26167_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26169","meta26169",-102220466,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26168","cljs.core.async/t_cljs$core$async26168",-1419814948,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26172","meta26172",-1636804466,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26171";

cljs.core.async.t_cljs$core$async26171.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26171");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26171.
 */
cljs.core.async.__GT_t_cljs$core$async26171 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26171(f__$1,ch__$1,meta26169__$1,___$2,fn1__$1,meta26172){
return (new cljs.core.async.t_cljs$core$async26171(f__$1,ch__$1,meta26169__$1,___$2,fn1__$1,meta26172));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26171(self__.f,self__.ch,self__.meta26169,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26168.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26169","meta26169",-102220466,null)], null);
});

cljs.core.async.t_cljs$core$async26168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26168";

cljs.core.async.t_cljs$core$async26168.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26168");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26168.
 */
cljs.core.async.__GT_t_cljs$core$async26168 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26168(f__$1,ch__$1,meta26169){
return (new cljs.core.async.t_cljs$core$async26168(f__$1,ch__$1,meta26169));
});

}

return (new cljs.core.async.t_cljs$core$async26168(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26174 = (function (f,ch,meta26175){
this.f = f;
this.ch = ch;
this.meta26175 = meta26175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26176,meta26175__$1){
var self__ = this;
var _26176__$1 = this;
return (new cljs.core.async.t_cljs$core$async26174(self__.f,self__.ch,meta26175__$1));
});

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26176){
var self__ = this;
var _26176__$1 = this;
return self__.meta26175;
});

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26175","meta26175",-1804705232,null)], null);
});

cljs.core.async.t_cljs$core$async26174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26174";

cljs.core.async.t_cljs$core$async26174.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26174");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26174.
 */
cljs.core.async.__GT_t_cljs$core$async26174 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26174(f__$1,ch__$1,meta26175){
return (new cljs.core.async.t_cljs$core$async26174(f__$1,ch__$1,meta26175));
});

}

return (new cljs.core.async.t_cljs$core$async26174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26177 = (function (p,ch,meta26178){
this.p = p;
this.ch = ch;
this.meta26178 = meta26178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26179,meta26178__$1){
var self__ = this;
var _26179__$1 = this;
return (new cljs.core.async.t_cljs$core$async26177(self__.p,self__.ch,meta26178__$1));
});

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26179){
var self__ = this;
var _26179__$1 = this;
return self__.meta26178;
});

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26178","meta26178",647799854,null)], null);
});

cljs.core.async.t_cljs$core$async26177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26177";

cljs.core.async.t_cljs$core$async26177.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26177");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26177.
 */
cljs.core.async.__GT_t_cljs$core$async26177 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26177(p__$1,ch__$1,meta26178){
return (new cljs.core.async.t_cljs$core$async26177(p__$1,ch__$1,meta26178));
});

}

return (new cljs.core.async.t_cljs$core$async26177(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26181 = arguments.length;
switch (G__26181) {
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
var c__24682__auto___26221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26221,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26221,out){
return (function (state_26202){
var state_val_26203 = (state_26202[(1)]);
if((state_val_26203 === (7))){
var inst_26198 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
var statearr_26204_26222 = state_26202__$1;
(statearr_26204_26222[(2)] = inst_26198);

(statearr_26204_26222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (1))){
var state_26202__$1 = state_26202;
var statearr_26205_26223 = state_26202__$1;
(statearr_26205_26223[(2)] = null);

(statearr_26205_26223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (4))){
var inst_26184 = (state_26202[(7)]);
var inst_26184__$1 = (state_26202[(2)]);
var inst_26185 = (inst_26184__$1 == null);
var state_26202__$1 = (function (){var statearr_26206 = state_26202;
(statearr_26206[(7)] = inst_26184__$1);

return statearr_26206;
})();
if(cljs.core.truth_(inst_26185)){
var statearr_26207_26224 = state_26202__$1;
(statearr_26207_26224[(1)] = (5));

} else {
var statearr_26208_26225 = state_26202__$1;
(statearr_26208_26225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (6))){
var inst_26184 = (state_26202[(7)]);
var inst_26189 = p.call(null,inst_26184);
var state_26202__$1 = state_26202;
if(cljs.core.truth_(inst_26189)){
var statearr_26209_26226 = state_26202__$1;
(statearr_26209_26226[(1)] = (8));

} else {
var statearr_26210_26227 = state_26202__$1;
(statearr_26210_26227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (3))){
var inst_26200 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26202__$1,inst_26200);
} else {
if((state_val_26203 === (2))){
var state_26202__$1 = state_26202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26202__$1,(4),ch);
} else {
if((state_val_26203 === (11))){
var inst_26192 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
var statearr_26211_26228 = state_26202__$1;
(statearr_26211_26228[(2)] = inst_26192);

(statearr_26211_26228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (9))){
var state_26202__$1 = state_26202;
var statearr_26212_26229 = state_26202__$1;
(statearr_26212_26229[(2)] = null);

(statearr_26212_26229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (5))){
var inst_26187 = cljs.core.async.close_BANG_.call(null,out);
var state_26202__$1 = state_26202;
var statearr_26213_26230 = state_26202__$1;
(statearr_26213_26230[(2)] = inst_26187);

(statearr_26213_26230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (10))){
var inst_26195 = (state_26202[(2)]);
var state_26202__$1 = (function (){var statearr_26214 = state_26202;
(statearr_26214[(8)] = inst_26195);

return statearr_26214;
})();
var statearr_26215_26231 = state_26202__$1;
(statearr_26215_26231[(2)] = null);

(statearr_26215_26231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26203 === (8))){
var inst_26184 = (state_26202[(7)]);
var state_26202__$1 = state_26202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26202__$1,(11),out,inst_26184);
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
});})(c__24682__auto___26221,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26221,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26216 = [null,null,null,null,null,null,null,null,null];
(statearr_26216[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26216[(1)] = (1));

return statearr_26216;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26202){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26217){if((e26217 instanceof Object)){
var ex__24626__auto__ = e26217;
var statearr_26218_26232 = state_26202;
(statearr_26218_26232[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26233 = state_26202;
state_26202 = G__26233;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26221,out))
})();
var state__24684__auto__ = (function (){var statearr_26219 = f__24683__auto__.call(null);
(statearr_26219[(6)] = c__24682__auto___26221);

return statearr_26219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26221,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26235 = arguments.length;
switch (G__26235) {
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
var c__24682__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto__){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto__){
return (function (state_26298){
var state_val_26299 = (state_26298[(1)]);
if((state_val_26299 === (7))){
var inst_26294 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26300_26338 = state_26298__$1;
(statearr_26300_26338[(2)] = inst_26294);

(statearr_26300_26338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (20))){
var inst_26264 = (state_26298[(7)]);
var inst_26275 = (state_26298[(2)]);
var inst_26276 = cljs.core.next.call(null,inst_26264);
var inst_26250 = inst_26276;
var inst_26251 = null;
var inst_26252 = (0);
var inst_26253 = (0);
var state_26298__$1 = (function (){var statearr_26301 = state_26298;
(statearr_26301[(8)] = inst_26250);

(statearr_26301[(9)] = inst_26275);

(statearr_26301[(10)] = inst_26252);

(statearr_26301[(11)] = inst_26251);

(statearr_26301[(12)] = inst_26253);

return statearr_26301;
})();
var statearr_26302_26339 = state_26298__$1;
(statearr_26302_26339[(2)] = null);

(statearr_26302_26339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (1))){
var state_26298__$1 = state_26298;
var statearr_26303_26340 = state_26298__$1;
(statearr_26303_26340[(2)] = null);

(statearr_26303_26340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (4))){
var inst_26239 = (state_26298[(13)]);
var inst_26239__$1 = (state_26298[(2)]);
var inst_26240 = (inst_26239__$1 == null);
var state_26298__$1 = (function (){var statearr_26304 = state_26298;
(statearr_26304[(13)] = inst_26239__$1);

return statearr_26304;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26305_26341 = state_26298__$1;
(statearr_26305_26341[(1)] = (5));

} else {
var statearr_26306_26342 = state_26298__$1;
(statearr_26306_26342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (15))){
var state_26298__$1 = state_26298;
var statearr_26310_26343 = state_26298__$1;
(statearr_26310_26343[(2)] = null);

(statearr_26310_26343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (21))){
var state_26298__$1 = state_26298;
var statearr_26311_26344 = state_26298__$1;
(statearr_26311_26344[(2)] = null);

(statearr_26311_26344[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (13))){
var inst_26250 = (state_26298[(8)]);
var inst_26252 = (state_26298[(10)]);
var inst_26251 = (state_26298[(11)]);
var inst_26253 = (state_26298[(12)]);
var inst_26260 = (state_26298[(2)]);
var inst_26261 = (inst_26253 + (1));
var tmp26307 = inst_26250;
var tmp26308 = inst_26252;
var tmp26309 = inst_26251;
var inst_26250__$1 = tmp26307;
var inst_26251__$1 = tmp26309;
var inst_26252__$1 = tmp26308;
var inst_26253__$1 = inst_26261;
var state_26298__$1 = (function (){var statearr_26312 = state_26298;
(statearr_26312[(8)] = inst_26250__$1);

(statearr_26312[(10)] = inst_26252__$1);

(statearr_26312[(11)] = inst_26251__$1);

(statearr_26312[(14)] = inst_26260);

(statearr_26312[(12)] = inst_26253__$1);

return statearr_26312;
})();
var statearr_26313_26345 = state_26298__$1;
(statearr_26313_26345[(2)] = null);

(statearr_26313_26345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (22))){
var state_26298__$1 = state_26298;
var statearr_26314_26346 = state_26298__$1;
(statearr_26314_26346[(2)] = null);

(statearr_26314_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (6))){
var inst_26239 = (state_26298[(13)]);
var inst_26248 = f.call(null,inst_26239);
var inst_26249 = cljs.core.seq.call(null,inst_26248);
var inst_26250 = inst_26249;
var inst_26251 = null;
var inst_26252 = (0);
var inst_26253 = (0);
var state_26298__$1 = (function (){var statearr_26315 = state_26298;
(statearr_26315[(8)] = inst_26250);

(statearr_26315[(10)] = inst_26252);

(statearr_26315[(11)] = inst_26251);

(statearr_26315[(12)] = inst_26253);

return statearr_26315;
})();
var statearr_26316_26347 = state_26298__$1;
(statearr_26316_26347[(2)] = null);

(statearr_26316_26347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (17))){
var inst_26264 = (state_26298[(7)]);
var inst_26268 = cljs.core.chunk_first.call(null,inst_26264);
var inst_26269 = cljs.core.chunk_rest.call(null,inst_26264);
var inst_26270 = cljs.core.count.call(null,inst_26268);
var inst_26250 = inst_26269;
var inst_26251 = inst_26268;
var inst_26252 = inst_26270;
var inst_26253 = (0);
var state_26298__$1 = (function (){var statearr_26317 = state_26298;
(statearr_26317[(8)] = inst_26250);

(statearr_26317[(10)] = inst_26252);

(statearr_26317[(11)] = inst_26251);

(statearr_26317[(12)] = inst_26253);

return statearr_26317;
})();
var statearr_26318_26348 = state_26298__$1;
(statearr_26318_26348[(2)] = null);

(statearr_26318_26348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (3))){
var inst_26296 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26298__$1,inst_26296);
} else {
if((state_val_26299 === (12))){
var inst_26284 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26319_26349 = state_26298__$1;
(statearr_26319_26349[(2)] = inst_26284);

(statearr_26319_26349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (2))){
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26298__$1,(4),in$);
} else {
if((state_val_26299 === (23))){
var inst_26292 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26320_26350 = state_26298__$1;
(statearr_26320_26350[(2)] = inst_26292);

(statearr_26320_26350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (19))){
var inst_26279 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26321_26351 = state_26298__$1;
(statearr_26321_26351[(2)] = inst_26279);

(statearr_26321_26351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (11))){
var inst_26250 = (state_26298[(8)]);
var inst_26264 = (state_26298[(7)]);
var inst_26264__$1 = cljs.core.seq.call(null,inst_26250);
var state_26298__$1 = (function (){var statearr_26322 = state_26298;
(statearr_26322[(7)] = inst_26264__$1);

return statearr_26322;
})();
if(inst_26264__$1){
var statearr_26323_26352 = state_26298__$1;
(statearr_26323_26352[(1)] = (14));

} else {
var statearr_26324_26353 = state_26298__$1;
(statearr_26324_26353[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (9))){
var inst_26286 = (state_26298[(2)]);
var inst_26287 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26298__$1 = (function (){var statearr_26325 = state_26298;
(statearr_26325[(15)] = inst_26286);

return statearr_26325;
})();
if(cljs.core.truth_(inst_26287)){
var statearr_26326_26354 = state_26298__$1;
(statearr_26326_26354[(1)] = (21));

} else {
var statearr_26327_26355 = state_26298__$1;
(statearr_26327_26355[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (5))){
var inst_26242 = cljs.core.async.close_BANG_.call(null,out);
var state_26298__$1 = state_26298;
var statearr_26328_26356 = state_26298__$1;
(statearr_26328_26356[(2)] = inst_26242);

(statearr_26328_26356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (14))){
var inst_26264 = (state_26298[(7)]);
var inst_26266 = cljs.core.chunked_seq_QMARK_.call(null,inst_26264);
var state_26298__$1 = state_26298;
if(inst_26266){
var statearr_26329_26357 = state_26298__$1;
(statearr_26329_26357[(1)] = (17));

} else {
var statearr_26330_26358 = state_26298__$1;
(statearr_26330_26358[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (16))){
var inst_26282 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26331_26359 = state_26298__$1;
(statearr_26331_26359[(2)] = inst_26282);

(statearr_26331_26359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26299 === (10))){
var inst_26251 = (state_26298[(11)]);
var inst_26253 = (state_26298[(12)]);
var inst_26258 = cljs.core._nth.call(null,inst_26251,inst_26253);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26298__$1,(13),out,inst_26258);
} else {
if((state_val_26299 === (18))){
var inst_26264 = (state_26298[(7)]);
var inst_26273 = cljs.core.first.call(null,inst_26264);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26298__$1,(20),out,inst_26273);
} else {
if((state_val_26299 === (8))){
var inst_26252 = (state_26298[(10)]);
var inst_26253 = (state_26298[(12)]);
var inst_26255 = (inst_26253 < inst_26252);
var inst_26256 = inst_26255;
var state_26298__$1 = state_26298;
if(cljs.core.truth_(inst_26256)){
var statearr_26332_26360 = state_26298__$1;
(statearr_26332_26360[(1)] = (10));

} else {
var statearr_26333_26361 = state_26298__$1;
(statearr_26333_26361[(1)] = (11));

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
});})(c__24682__auto__))
;
return ((function (switch__24622__auto__,c__24682__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____0 = (function (){
var statearr_26334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26334[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__);

(statearr_26334[(1)] = (1));

return statearr_26334;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____1 = (function (state_26298){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object)){
var ex__24626__auto__ = e26335;
var statearr_26336_26362 = state_26298;
(statearr_26336_26362[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26363 = state_26298;
state_26298 = G__26363;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__ = function(state_26298){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____1.call(this,state_26298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24623__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto__))
})();
var state__24684__auto__ = (function (){var statearr_26337 = f__24683__auto__.call(null);
(statearr_26337[(6)] = c__24682__auto__);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto__))
);

return c__24682__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26365 = arguments.length;
switch (G__26365) {
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
var G__26368 = arguments.length;
switch (G__26368) {
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
var G__26371 = arguments.length;
switch (G__26371) {
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
var c__24682__auto___26418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26418,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26418,out){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var inst_26390 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26397_26419 = state_26395__$1;
(statearr_26397_26419[(2)] = inst_26390);

(statearr_26397_26419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var inst_26372 = null;
var state_26395__$1 = (function (){var statearr_26398 = state_26395;
(statearr_26398[(7)] = inst_26372);

return statearr_26398;
})();
var statearr_26399_26420 = state_26395__$1;
(statearr_26399_26420[(2)] = null);

(statearr_26399_26420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26375 = (state_26395[(8)]);
var inst_26375__$1 = (state_26395[(2)]);
var inst_26376 = (inst_26375__$1 == null);
var inst_26377 = cljs.core.not.call(null,inst_26376);
var state_26395__$1 = (function (){var statearr_26400 = state_26395;
(statearr_26400[(8)] = inst_26375__$1);

return statearr_26400;
})();
if(inst_26377){
var statearr_26401_26421 = state_26395__$1;
(statearr_26401_26421[(1)] = (5));

} else {
var statearr_26402_26422 = state_26395__$1;
(statearr_26402_26422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var state_26395__$1 = state_26395;
var statearr_26403_26423 = state_26395__$1;
(statearr_26403_26423[(2)] = null);

(statearr_26403_26423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (3))){
var inst_26392 = (state_26395[(2)]);
var inst_26393 = cljs.core.async.close_BANG_.call(null,out);
var state_26395__$1 = (function (){var statearr_26404 = state_26395;
(statearr_26404[(9)] = inst_26392);

return statearr_26404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (2))){
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(4),ch);
} else {
if((state_val_26396 === (11))){
var inst_26375 = (state_26395[(8)]);
var inst_26384 = (state_26395[(2)]);
var inst_26372 = inst_26375;
var state_26395__$1 = (function (){var statearr_26405 = state_26395;
(statearr_26405[(10)] = inst_26384);

(statearr_26405[(7)] = inst_26372);

return statearr_26405;
})();
var statearr_26406_26424 = state_26395__$1;
(statearr_26406_26424[(2)] = null);

(statearr_26406_26424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (9))){
var inst_26375 = (state_26395[(8)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26395__$1,(11),out,inst_26375);
} else {
if((state_val_26396 === (5))){
var inst_26372 = (state_26395[(7)]);
var inst_26375 = (state_26395[(8)]);
var inst_26379 = cljs.core._EQ_.call(null,inst_26375,inst_26372);
var state_26395__$1 = state_26395;
if(inst_26379){
var statearr_26408_26425 = state_26395__$1;
(statearr_26408_26425[(1)] = (8));

} else {
var statearr_26409_26426 = state_26395__$1;
(statearr_26409_26426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (10))){
var inst_26387 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26410_26427 = state_26395__$1;
(statearr_26410_26427[(2)] = inst_26387);

(statearr_26410_26427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26372 = (state_26395[(7)]);
var tmp26407 = inst_26372;
var inst_26372__$1 = tmp26407;
var state_26395__$1 = (function (){var statearr_26411 = state_26395;
(statearr_26411[(7)] = inst_26372__$1);

return statearr_26411;
})();
var statearr_26412_26428 = state_26395__$1;
(statearr_26412_26428[(2)] = null);

(statearr_26412_26428[(1)] = (2));


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
});})(c__24682__auto___26418,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26418,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26413[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26413[(1)] = (1));

return statearr_26413;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26395){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26414){if((e26414 instanceof Object)){
var ex__24626__auto__ = e26414;
var statearr_26415_26429 = state_26395;
(statearr_26415_26429[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26430 = state_26395;
state_26395 = G__26430;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26418,out))
})();
var state__24684__auto__ = (function (){var statearr_26416 = f__24683__auto__.call(null);
(statearr_26416[(6)] = c__24682__auto___26418);

return statearr_26416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26418,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26432 = arguments.length;
switch (G__26432) {
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
var c__24682__auto___26498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26498,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26498,out){
return (function (state_26470){
var state_val_26471 = (state_26470[(1)]);
if((state_val_26471 === (7))){
var inst_26466 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26472_26499 = state_26470__$1;
(statearr_26472_26499[(2)] = inst_26466);

(statearr_26472_26499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (1))){
var inst_26433 = (new Array(n));
var inst_26434 = inst_26433;
var inst_26435 = (0);
var state_26470__$1 = (function (){var statearr_26473 = state_26470;
(statearr_26473[(7)] = inst_26434);

(statearr_26473[(8)] = inst_26435);

return statearr_26473;
})();
var statearr_26474_26500 = state_26470__$1;
(statearr_26474_26500[(2)] = null);

(statearr_26474_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (4))){
var inst_26438 = (state_26470[(9)]);
var inst_26438__$1 = (state_26470[(2)]);
var inst_26439 = (inst_26438__$1 == null);
var inst_26440 = cljs.core.not.call(null,inst_26439);
var state_26470__$1 = (function (){var statearr_26475 = state_26470;
(statearr_26475[(9)] = inst_26438__$1);

return statearr_26475;
})();
if(inst_26440){
var statearr_26476_26501 = state_26470__$1;
(statearr_26476_26501[(1)] = (5));

} else {
var statearr_26477_26502 = state_26470__$1;
(statearr_26477_26502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (15))){
var inst_26460 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26478_26503 = state_26470__$1;
(statearr_26478_26503[(2)] = inst_26460);

(statearr_26478_26503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (13))){
var state_26470__$1 = state_26470;
var statearr_26479_26504 = state_26470__$1;
(statearr_26479_26504[(2)] = null);

(statearr_26479_26504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (6))){
var inst_26435 = (state_26470[(8)]);
var inst_26456 = (inst_26435 > (0));
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26456)){
var statearr_26480_26505 = state_26470__$1;
(statearr_26480_26505[(1)] = (12));

} else {
var statearr_26481_26506 = state_26470__$1;
(statearr_26481_26506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (3))){
var inst_26468 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26470__$1,inst_26468);
} else {
if((state_val_26471 === (12))){
var inst_26434 = (state_26470[(7)]);
var inst_26458 = cljs.core.vec.call(null,inst_26434);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26470__$1,(15),out,inst_26458);
} else {
if((state_val_26471 === (2))){
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26470__$1,(4),ch);
} else {
if((state_val_26471 === (11))){
var inst_26450 = (state_26470[(2)]);
var inst_26451 = (new Array(n));
var inst_26434 = inst_26451;
var inst_26435 = (0);
var state_26470__$1 = (function (){var statearr_26482 = state_26470;
(statearr_26482[(10)] = inst_26450);

(statearr_26482[(7)] = inst_26434);

(statearr_26482[(8)] = inst_26435);

return statearr_26482;
})();
var statearr_26483_26507 = state_26470__$1;
(statearr_26483_26507[(2)] = null);

(statearr_26483_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (9))){
var inst_26434 = (state_26470[(7)]);
var inst_26448 = cljs.core.vec.call(null,inst_26434);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26470__$1,(11),out,inst_26448);
} else {
if((state_val_26471 === (5))){
var inst_26438 = (state_26470[(9)]);
var inst_26443 = (state_26470[(11)]);
var inst_26434 = (state_26470[(7)]);
var inst_26435 = (state_26470[(8)]);
var inst_26442 = (inst_26434[inst_26435] = inst_26438);
var inst_26443__$1 = (inst_26435 + (1));
var inst_26444 = (inst_26443__$1 < n);
var state_26470__$1 = (function (){var statearr_26484 = state_26470;
(statearr_26484[(12)] = inst_26442);

(statearr_26484[(11)] = inst_26443__$1);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26444)){
var statearr_26485_26508 = state_26470__$1;
(statearr_26485_26508[(1)] = (8));

} else {
var statearr_26486_26509 = state_26470__$1;
(statearr_26486_26509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (14))){
var inst_26463 = (state_26470[(2)]);
var inst_26464 = cljs.core.async.close_BANG_.call(null,out);
var state_26470__$1 = (function (){var statearr_26488 = state_26470;
(statearr_26488[(13)] = inst_26463);

return statearr_26488;
})();
var statearr_26489_26510 = state_26470__$1;
(statearr_26489_26510[(2)] = inst_26464);

(statearr_26489_26510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (10))){
var inst_26454 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26490_26511 = state_26470__$1;
(statearr_26490_26511[(2)] = inst_26454);

(statearr_26490_26511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (8))){
var inst_26443 = (state_26470[(11)]);
var inst_26434 = (state_26470[(7)]);
var tmp26487 = inst_26434;
var inst_26434__$1 = tmp26487;
var inst_26435 = inst_26443;
var state_26470__$1 = (function (){var statearr_26491 = state_26470;
(statearr_26491[(7)] = inst_26434__$1);

(statearr_26491[(8)] = inst_26435);

return statearr_26491;
})();
var statearr_26492_26512 = state_26470__$1;
(statearr_26492_26512[(2)] = null);

(statearr_26492_26512[(1)] = (2));


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
});})(c__24682__auto___26498,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26498,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26493[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26493[(1)] = (1));

return statearr_26493;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26470){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26494){if((e26494 instanceof Object)){
var ex__24626__auto__ = e26494;
var statearr_26495_26513 = state_26470;
(statearr_26495_26513[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26514 = state_26470;
state_26470 = G__26514;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26498,out))
})();
var state__24684__auto__ = (function (){var statearr_26496 = f__24683__auto__.call(null);
(statearr_26496[(6)] = c__24682__auto___26498);

return statearr_26496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26498,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26516 = arguments.length;
switch (G__26516) {
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
var c__24682__auto___26586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24682__auto___26586,out){
return (function (){
var f__24683__auto__ = (function (){var switch__24622__auto__ = ((function (c__24682__auto___26586,out){
return (function (state_26558){
var state_val_26559 = (state_26558[(1)]);
if((state_val_26559 === (7))){
var inst_26554 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26560_26587 = state_26558__$1;
(statearr_26560_26587[(2)] = inst_26554);

(statearr_26560_26587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (1))){
var inst_26517 = [];
var inst_26518 = inst_26517;
var inst_26519 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26558__$1 = (function (){var statearr_26561 = state_26558;
(statearr_26561[(7)] = inst_26519);

(statearr_26561[(8)] = inst_26518);

return statearr_26561;
})();
var statearr_26562_26588 = state_26558__$1;
(statearr_26562_26588[(2)] = null);

(statearr_26562_26588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (4))){
var inst_26522 = (state_26558[(9)]);
var inst_26522__$1 = (state_26558[(2)]);
var inst_26523 = (inst_26522__$1 == null);
var inst_26524 = cljs.core.not.call(null,inst_26523);
var state_26558__$1 = (function (){var statearr_26563 = state_26558;
(statearr_26563[(9)] = inst_26522__$1);

return statearr_26563;
})();
if(inst_26524){
var statearr_26564_26589 = state_26558__$1;
(statearr_26564_26589[(1)] = (5));

} else {
var statearr_26565_26590 = state_26558__$1;
(statearr_26565_26590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (15))){
var inst_26548 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26566_26591 = state_26558__$1;
(statearr_26566_26591[(2)] = inst_26548);

(statearr_26566_26591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (13))){
var state_26558__$1 = state_26558;
var statearr_26567_26592 = state_26558__$1;
(statearr_26567_26592[(2)] = null);

(statearr_26567_26592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (6))){
var inst_26518 = (state_26558[(8)]);
var inst_26543 = inst_26518.length;
var inst_26544 = (inst_26543 > (0));
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26544)){
var statearr_26568_26593 = state_26558__$1;
(statearr_26568_26593[(1)] = (12));

} else {
var statearr_26569_26594 = state_26558__$1;
(statearr_26569_26594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (3))){
var inst_26556 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26558__$1,inst_26556);
} else {
if((state_val_26559 === (12))){
var inst_26518 = (state_26558[(8)]);
var inst_26546 = cljs.core.vec.call(null,inst_26518);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26558__$1,(15),out,inst_26546);
} else {
if((state_val_26559 === (2))){
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26558__$1,(4),ch);
} else {
if((state_val_26559 === (11))){
var inst_26526 = (state_26558[(10)]);
var inst_26522 = (state_26558[(9)]);
var inst_26536 = (state_26558[(2)]);
var inst_26537 = [];
var inst_26538 = inst_26537.push(inst_26522);
var inst_26518 = inst_26537;
var inst_26519 = inst_26526;
var state_26558__$1 = (function (){var statearr_26570 = state_26558;
(statearr_26570[(11)] = inst_26538);

(statearr_26570[(7)] = inst_26519);

(statearr_26570[(12)] = inst_26536);

(statearr_26570[(8)] = inst_26518);

return statearr_26570;
})();
var statearr_26571_26595 = state_26558__$1;
(statearr_26571_26595[(2)] = null);

(statearr_26571_26595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (9))){
var inst_26518 = (state_26558[(8)]);
var inst_26534 = cljs.core.vec.call(null,inst_26518);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26558__$1,(11),out,inst_26534);
} else {
if((state_val_26559 === (5))){
var inst_26519 = (state_26558[(7)]);
var inst_26526 = (state_26558[(10)]);
var inst_26522 = (state_26558[(9)]);
var inst_26526__$1 = f.call(null,inst_26522);
var inst_26527 = cljs.core._EQ_.call(null,inst_26526__$1,inst_26519);
var inst_26528 = cljs.core.keyword_identical_QMARK_.call(null,inst_26519,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26529 = ((inst_26527) || (inst_26528));
var state_26558__$1 = (function (){var statearr_26572 = state_26558;
(statearr_26572[(10)] = inst_26526__$1);

return statearr_26572;
})();
if(cljs.core.truth_(inst_26529)){
var statearr_26573_26596 = state_26558__$1;
(statearr_26573_26596[(1)] = (8));

} else {
var statearr_26574_26597 = state_26558__$1;
(statearr_26574_26597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (14))){
var inst_26551 = (state_26558[(2)]);
var inst_26552 = cljs.core.async.close_BANG_.call(null,out);
var state_26558__$1 = (function (){var statearr_26576 = state_26558;
(statearr_26576[(13)] = inst_26551);

return statearr_26576;
})();
var statearr_26577_26598 = state_26558__$1;
(statearr_26577_26598[(2)] = inst_26552);

(statearr_26577_26598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (10))){
var inst_26541 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26578_26599 = state_26558__$1;
(statearr_26578_26599[(2)] = inst_26541);

(statearr_26578_26599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (8))){
var inst_26526 = (state_26558[(10)]);
var inst_26522 = (state_26558[(9)]);
var inst_26518 = (state_26558[(8)]);
var inst_26531 = inst_26518.push(inst_26522);
var tmp26575 = inst_26518;
var inst_26518__$1 = tmp26575;
var inst_26519 = inst_26526;
var state_26558__$1 = (function (){var statearr_26579 = state_26558;
(statearr_26579[(7)] = inst_26519);

(statearr_26579[(14)] = inst_26531);

(statearr_26579[(8)] = inst_26518__$1);

return statearr_26579;
})();
var statearr_26580_26600 = state_26558__$1;
(statearr_26580_26600[(2)] = null);

(statearr_26580_26600[(1)] = (2));


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
});})(c__24682__auto___26586,out))
;
return ((function (switch__24622__auto__,c__24682__auto___26586,out){
return (function() {
var cljs$core$async$state_machine__24623__auto__ = null;
var cljs$core$async$state_machine__24623__auto____0 = (function (){
var statearr_26581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26581[(0)] = cljs$core$async$state_machine__24623__auto__);

(statearr_26581[(1)] = (1));

return statearr_26581;
});
var cljs$core$async$state_machine__24623__auto____1 = (function (state_26558){
while(true){
var ret_value__24624__auto__ = (function (){try{while(true){
var result__24625__auto__ = switch__24622__auto__.call(null,state_26558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24625__auto__;
}
break;
}
}catch (e26582){if((e26582 instanceof Object)){
var ex__24626__auto__ = e26582;
var statearr_26583_26601 = state_26558;
(statearr_26583_26601[(5)] = ex__24626__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26602 = state_26558;
state_26558 = G__26602;
continue;
} else {
return ret_value__24624__auto__;
}
break;
}
});
cljs$core$async$state_machine__24623__auto__ = function(state_26558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24623__auto____1.call(this,state_26558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24623__auto____0;
cljs$core$async$state_machine__24623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24623__auto____1;
return cljs$core$async$state_machine__24623__auto__;
})()
;})(switch__24622__auto__,c__24682__auto___26586,out))
})();
var state__24684__auto__ = (function (){var statearr_26584 = f__24683__auto__.call(null);
(statearr_26584[(6)] = c__24682__auto___26586);

return statearr_26584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24684__auto__);
});})(c__24682__auto___26586,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1570528831207
