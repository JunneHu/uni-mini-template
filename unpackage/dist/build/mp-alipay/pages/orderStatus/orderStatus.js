(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/orderStatus/orderStatus"],{"19e7":function(t,n,e){"use strict";e.r(n);var u=e("2780"),o=e("2638");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("433a");var i,a=e("f0c5"),c=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=c.exports},"1f68":function(t,n,e){},"254e":function(t,n,e){"use strict";(function(t){e("9dae");u(e("66fd"));var n=u(e("19e7"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},2638:function(t,n,e){"use strict";e.r(n);var u=e("db1a"),o=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=o.a},2780:function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}))},"433a":function(t,n,e){"use strict";var u=e("1f68"),o=e.n(u);o.a},db1a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("c0a9")),o=e("a022");function r(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{orderDetail:{},hotPro:[],isLoading:!1}},onLoad:function(t){this.oid="205200630133638558099",this.init()},methods:{init:function(){var t=this,n=this.oid;(0,o.httpsRequest)(u.default.api.getOrderDetail,"GET",{orderNo:n},(function(n){"1000"===n.code&&(t.orderDetail=n.data)}),!0),(0,o.httpsRequest)(u.default.api.getHotCategory,"GET",{count:6},(function(n){"1000"===n.code&&(t.hotPro=n.data.list)}),!1)},toOrderList:function(n){t.navigateTo({url:"/pages/orderList/orderList"})},toIndex:function(){t.reLaunch({url:"/pages/index/index"})},onPullDownRefresh:function(){this.init()}}};n.default=i}).call(this,e("c11b")["default"])}},[["254e","common/runtime","common/vendor"]]]);