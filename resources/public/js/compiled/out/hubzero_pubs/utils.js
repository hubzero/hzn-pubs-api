// Compiled by ClojureScript 1.10.520 {}
goog.provide('hubzero_pubs.utils');
goog.require('cljs.core');
hubzero_pubs.utils.find_ancestor = (function hubzero_pubs$utils$find_ancestor(el,sel){
if(cljs.core.truth_(el)){
if(cljs.core.truth_(el.matches(sel))){
return el;
} else {
return hubzero_pubs.utils.find_ancestor.call(null,el.parentElement,sel);
}
} else {
return null;
}
});

//# sourceMappingURL=utils.js.map?rel=1574244999991
