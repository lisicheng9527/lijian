(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/navigation/item"],{2971:function(t,n,e){"use strict";e.r(n);var i=e("a7a5"),a=e("d0f2");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r=e("828b"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=o.exports},"930a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("6c77"),a={props:{content:{type:[Object,Array]},styles:{type:[Object,Array]},item:{type:Object}},data:function(){return{}},methods:{navigate:function(){var t=this.item.link,n=t.path,e=t.params;n&&this.$Router.push({path:n,query:e})},handleClick:function(t){(0,i.navigateTo)(t)}},computed:{}};n.default=a},a7a5:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uImage:function(){return e.e("components/uview-ui/components/u-image/u-image").then(e.bind(null,"7469"))}},a=function(){var t=this.$createElement,n=(this._self._c,1==this.content.style?this.$px2rpx(this.styles.img_border_radius):null),e=1==this.content.style?this.$getImageUri(this.item.url):null;this.$mp.data=Object.assign({},{$root:{m0:n,m1:e}})},u=[]},d0f2:function(t,n,e){"use strict";e.r(n);var i=e("930a"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/navigation/item-create-component',
    {
        'components/widgets/navigation/item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("2971"))
        })
    },
    [['components/widgets/navigation/item-create-component']]
]);
