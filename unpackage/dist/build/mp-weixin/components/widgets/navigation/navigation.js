(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/navigation/navigation"],{"0010":function(t,n,e){"use strict";e.r(n);var i=e("8d60"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"79b3":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={widgetRoot:function(){return e.e("components/widget-root/widget-root").then(e.bind(null,"205d"))},indicator:function(){return e.e("components/indicator/indicator").then(e.bind(null,"8b18"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$px2rpx(t.styles.border_radius_top)),i=t.$px2rpx(t.styles.border_radius_top),r=t.$px2rpx(t.styles.border_radius_bottom),a=t.$px2rpx(t.styles.border_radius_bottom),o=2==t.styles.nav_style?t.__map(t.pageSize,(function(n,e){var i=t.__get_orig(n),r=t.getPageList(e);return{$orig:i,l0:r}})):null;t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:r,m3:a,l1:o}})},a=[]},"8d60":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{item:function(){e.e("components/widgets/navigation/item").then(function(){return resolve(e("807e"))}.bind(null,e)).catch(e.oe)}},props:{content:{type:[Object,Array]},styles:{type:[Object,Array]}},data:function(){return{current:0}},methods:{swiperChange:function(t){var n=t.detail;this.current=n.current}},computed:{pageSize:function(){var t=this.content.data,n=this.styles,e=n.nav_line,i=n.nav_line_num;return Math.ceil(t.length/(e*i))},swiperHeight:function(){var t=this.content.style,n=this.styles,e=n.nav_line,i=n.nav_line_num,r=this.pageSize,a=this.navList,o=1==t?162:66,s=0;return s=r>1?o*e+58:o*Math.ceil(a.length/i)+58,"".concat(s,"rpx")},getPageList:function(){var t=this,n=this.styles,e=n.nav_line,i=n.nav_line_num;return function(n){var r=e*i;return t.navList.slice(n*r,(n+1)*r)}},navList:function(){var t=this.content.data,n=this.styles,e=n.nav_style,i=n.nav_line,r=n.nav_line_num;return Array.isArray(t)?1==e?t.slice(0,i*r):t:[]}}};n.default=i},9289:function(t,n,e){},bcea:function(t,n,e){"use strict";var i=e("9289"),r=e.n(i);r.a},e93d:function(t,n,e){"use strict";e.r(n);var i=e("79b3"),r=e("0010");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("bcea");var o=e("828b"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"5404a1f2",null,!1,i["a"],void 0);n["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/navigation/navigation-create-component',
    {
        'components/widgets/navigation/navigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("e93d"))
        })
    },
    [['components/widgets/navigation/navigation-create-component']]
]);