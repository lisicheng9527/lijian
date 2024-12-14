(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{"0a8e":function(t,n,e){"use strict";var a=e("9dc0"),i=e.n(a);i.a},"33a3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{dot:{type:Boolean},name:{type:[Number,String],value:""}},inject:["tabs"],data:function(){return{active:!1,shouldShow:!1,shouldRender:!1}},created:function(){this.tabs.childrens.push(this)},mounted:function(){this.update()},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(t,n){this.inited=this.inited||t,this.active=t,this.shouldRender=this.inited,this.shouldShow=t},update:function(){this.tabs&&this.tabs.updateTabs()}},computed:{changeData:function(){var t=this.dot,n=this.info;return{dot:t,info:n}}},watch:{changeData:function(t){this.update()},name:function(t){this.update()}}};n.default=a},"3c93":function(t,n,e){"use strict";e.r(n);var a=e("33a3"),i=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},"9dc0":function(t,n,e){},a5835:function(t,n,e){"use strict";e.r(n);var a=e("ffd5"),i=e("3c93");for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("0a8e");var o=e("828b"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=d.exports},ffd5:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("a5835"))
        })
    },
    [['components/tab/tab-create-component']]
]);
