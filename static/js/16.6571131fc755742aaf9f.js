webpackJsonp([16],{p4zN:function(t,s,a){t.exports=a("rDRY")},rDRY:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("kbh4"),e={data:function(){return{checkedType:!0,checkedAnimationType:!0,animatedOne:-1,tAnimationType:"enter"}},components:{Animation:n.a,TAnimation:n.o,SwitchComponent:n.n},methods:{switchInitData:function(t){this.checkedType=t},switchAnimationChange:function(t){this.checkedAnimationType=!t},switchInitDataAnim:function(t){this.checkedAnimationType=t},animatedOneEnterFn:function(t){this.animatedOne=t},animatedOneOverFn:function(){this.animatedOne=-1}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("animation 组件")]),t._v(" "),t._m(0),t._v(" "),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("switch-component",{attrs:{xchange:t.switchAnimationChange,"init-data":t.switchInitDataAnim,"checked-type":t.checkedAnimationType}}),t._v(" "+t._s(t.checkedAnimationType)+"\n        "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("animation",{attrs:{animated:t.checkedAnimationType,"animated-one":t.animatedOne,"animated-one-enter-fn":t.animatedOneEnterFn,"animated-one-over-fn":t.animatedOneOverFn}}),a("br"),t._v(" "),a("t-animation",{attrs:{"t-style":{enter:{time:"0.5s",animationType:"linear",from:{opacity:0},to:{opacity:1}},leave:{time:"1s",animationType:"linear",from:{opacity:1},to:{opacity:0}}},"init-style":{opacity:0,transition:"opacity linear 0.2s"},"t-switch":t.checkedAnimationType,"t-animation-event":t.tAnimationType}},[a("img",{attrs:{src:"static/logo.png",alt:"logo"}})])]],2),t._v(" "),a("h3",[t._v("通过"),a("code",[t._v("传参")]),t._v("的方式实现动画")]),t._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("switch-component")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":xchange")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"switchAnimationChange"')]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":init-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"switchInitDataAnim"')]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":checked-type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"checkedAnimationType"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("switch-component")]),t._v(">")]),t._v(" {{checkedAnimationType}}\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("animation")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":animated")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"checkedAnimationType"')]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":animated-one")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"animatedOne"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":animated-one-enter-fn")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"animatedOneEnterFn"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":animated-one-over-fn")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"animatedOneOverFn"')]),t._v("\n    >")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("animation")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v("/>")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-animation")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":t-style")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{\n        enter: {\n            time: '0.5s',\n            animationType: 'linear',\n            from: {\n                opacity: 0\n            },\n            to: {\n                opacity: 1\n            }\n        },\n        leave: {\n            time: '1s',\n            animationType: 'linear',\n            from: {\n                opacity: 1\n            },\n            to: {\n                opacity: 0\n            }\n        }\n        }\"")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":init-style")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{\n            opacity: 0,\n            transition: 'opacity linear 0.2s'\n        }\"")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":t-switch")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"checkedAnimationType"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":t-animation-event")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tAnimationType"')]),t._v("\n    >")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"static/logo.png"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("alt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"logo"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-animation")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Animation, TAnimation, SwitchComponent } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vo-ui'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("checkedType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("checkedAnimationType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 动画组件是否全部 开始播放")]),t._v("\n            animatedOne: "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 动画组件是否无线循环")]),t._v("\n            tAnimationType: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'enter'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 动画是进入(enter)  还是  离开(leave)")]),t._v("\n        };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n        Animation, TAnimation, SwitchComponent\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 初始化给的 开关数据")]),t._v("\n        switchInitData(e) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".checkedType = e\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 动画事件")]),t._v("\n        switchAnimationChange(e) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".checkedAnimationType = !e;\n        },\n        switchInitDataAnim(e) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".checkedAnimationType = e\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 鼠标移入 某个动画元素")]),t._v("\n        animatedOneEnterFn(e) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".animatedOne = e\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 鼠标移除 某个动画元素关闭动画")]),t._v("\n        animatedOneOverFn() {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".animatedOne = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-1")]),t._v("\n        }\n    }\n};\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("基础用法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",[this._v("开关配置")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("switchAnimationChange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开关事件")])]),t._v(" "),a("tr",[a("td",[t._v("switchInitDataAnim")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始化开关状态，是否打开")])]),t._v(" "),a("tr",[a("td",[t._v("checkedAnimationType")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开关数据")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",[this._v("动画默认")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("checkedAnimationType")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画是否开始")])]),t._v(" "),a("tr",[a("td",[t._v("animatedOne")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-1动画组件是否无线循环")])]),t._v(" "),a("tr",[a("td",[t._v("animatedOneEnterFn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事件， 鼠标移入 某个动画元素")])]),t._v(" "),a("tr",[a("td",[t._v("animatedOneOverFn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事件， 鼠标移除 某个动画元素关闭动画")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",[this._v("动画可配置")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(":t-style")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("给动画创建样式，必填")])]),t._v(" "),a("tr",[a("td",[t._v(":t-style  >  enter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进入， 非必填")])]),t._v(" "),a("tr",[a("td",[t._v(":t-style  >  leave")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("离开， 非必填")])]),t._v(" "),a("tr",[a("td",[t._v(":init-style")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始化动画样式设置")])]),t._v(" "),a("tr",[a("td",[t._v(":t-switch")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画开关")])]),t._v(" "),a("tr",[a("td",[t._v(":t-animation-event")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画是进入(enter)  还是  离开(leave)")])])])])}]},l=a("C7Lr")(e,r,!1,null,null,null);s.default=l.exports}});
//# sourceMappingURL=16.6571131fc755742aaf9f.js.map