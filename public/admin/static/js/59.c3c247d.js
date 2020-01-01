(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1027:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"table-basic-vue frame-page h-panel"},[e._m(0),e._v(" "),r("div",{staticClass:"h-panel-body"},[r("p",[r("Button",{attrs:{color:"blue",icon:"icon-arrow-left"},on:{click:function(t){return e.back()}}},[e._v("返回列表")])],1),e._v(" "),r("Form",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}],ref:"form",attrs:{validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:e.rules,model:e.role}},[r("FormItem",{attrs:{label:"角色名",prop:"name"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("角色名")]},proxy:!0}])},[e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.role.name,expression:"role.name"}],attrs:{type:"text"},domProps:{value:e.role.name},on:{input:function(t){t.target.composing||e.$set(e.role,"name",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"权重",prop:"weight"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("权重")]},proxy:!0}])},[e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.role.weight,expression:"role.weight"}],attrs:{type:"text"},domProps:{value:e.role.weight},on:{input:function(t){t.target.composing||e.$set(e.role,"weight",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"天数",prop:"expire_days"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("天数")]},proxy:!0}])},[e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.role.expire_days,expression:"role.expire_days"}],attrs:{type:"text"},domProps:{value:e.role.expire_days},on:{input:function(t){t.target.composing||e.$set(e.role,"expire_days",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"价格",prop:"charge"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("价格")]},proxy:!0}])},[e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.role.charge,expression:"role.charge"}],attrs:{type:"text"},domProps:{value:e.role.charge},on:{input:function(t){t.target.composing||e.$set(e.role,"charge",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"描述",prop:"description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("描述")]},proxy:!0}])},[e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.role.description,expression:"role.description"}],domProps:{value:e.role.description},on:{input:function(t){t.target.composing||e.$set(e.role,"description",t.target.value)}}})]),e._v(" "),r("FormItem",{attrs:{label:"是否显示",prop:"is_show"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("是否显示")]},proxy:!0}])},[e._v(" "),r("h-switch",{attrs:{trueValue:1,falseValue:0},model:{value:e.role.is_show,callback:function(t){e.$set(e.role,"is_show",t)},expression:"role.is_show"}},[r("span",{attrs:{slot:"1"},slot:"1"},[e._v("是")]),e._v(" "),r("span",{attrs:{slot:"0"},slot:"0"},[e._v("否")])])],1),e._v(" "),r("FormItem",[r("Button",{attrs:{color:"primary"},on:{click:e.create}},[e._v("添加")])],1)],1)],1)])])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[this._v("添加VIP角色")])])}];o._withStripped=!0,r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}))},307:function(e,t,r){"use strict";r.r(t);var o=r(1027),a=r(442);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);var s=r(24),l=Object(s.a)(a.default,o.a,o.b,!1,null,null,null);l.options.__file="src/components/role/create.vue",t.default=l.exports},442:function(e,t,r){"use strict";r.r(t);var o=r(443),a=r.n(o);for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);t.default=a.a},443:function(e,t,r){"use strict";(function(e,o){var a=r(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(558)),s={data:function(){return{role:n.default.parse({}),rules:{required:["name","weight","description","expire_days","charge"]}}},mounted:function(){this.init()},methods:{init:function(){this.role.is_show=1},back:function(){this.$router.push({name:"Role"})},create:function(){var t=this,r=this.$refs.form.valid();console.log(this.role),r.result&&e.Role.Create(this.role).then((function(e){o.$Message.success("添加成功"),t.$router.push({name:"Role"})}))}}};t.default=s}).call(this,r(348).default,r(70))}}]);