(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/navigation/item"],{"700c":function(t,e,n){"use strict";n.r(e);var i=n("c4dc"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},"807e":function(t,e,n){"use strict";n.r(e);var i=n("b07f"),u=n("700c");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);var r=n("828b"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},b07f:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uImage:function(){return n.e("components/uview-ui/components/u-image/u-image").then(n.bind(null,"0cd9"))}},u=function(){var t=this.$createElement,e=(this._self._c,1==this.content.style?this.$px2rpx(this.styles.img_border_radius):null),n=1==this.content.style?this.$getImageUri(this.item.url):null;this.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},a=[]},c4dc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4a52"),u={props:{content:{type:[Object,Array]},styles:{type:[Object,Array]},item:{type:Object}},data:function(){return{}},methods:{navigate:function(){var t=this.item.link,e=t.path,n=t.params;e&&this.$Router.push({path:e,query:n})},handleClick:function(t){(0,i.navigateTo)(t)}},computed:{}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/navigation/item-create-component',
    {
        'components/widgets/navigation/item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("807e"))
        })
    },
    [['components/widgets/navigation/item-create-component']]
]);
