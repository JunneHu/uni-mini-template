(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/equityCardStatus/equityCardStatus"],{"0a16":function(t,e,n){"use strict";n.r(e);var a=n("f189"),u=n("37f7");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("0da1");var r,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=o.exports},"0da1":function(t,e,n){"use strict";var a=n("8f05"),u=n.n(a);u.a},"37f7":function(t,e,n){"use strict";n.r(e);var a=n("5630"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},5630:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c0a9")),u=n("a022");function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){var e=t.getStorageSync("userInfo");return{detail:{},userInfo:e,sendCodeTime:3}},onLoad:function(t){console.log(t.cid),this.cid=t.cid,this.init()},methods:{init:function(){var e=this;(0,u.httpsRequest)(a.default.api.getPayEquityCard,"GET",{userEquityCardNo:this.cid},(function(n){"1000"===n.code&&(e.detail=n.data,2==n.data.payStatus?e.sendCodeTime=3:2==n.data.payStatus&&setInterval((function(){1==e.sendCodeTime?(t.navigateTo({url:"/pages/equityCardDetail/equityCardDetail?cid=".concat(e.cid)}),clearInterval()):e.sendCodeTime-=1}),1e3))}),!0)},toBuy:function(){t.navigateTo({url:"/pages/index/index"})}}};e.default=r}).call(this,n("c11b")["default"])},"8f05":function(t,e,n){},"90b9":function(t,e,n){"use strict";(function(t){n("9dae");a(n("66fd"));var e=a(n("0a16"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},f189:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))}},[["90b9","common/runtime","common/vendor"]]]);