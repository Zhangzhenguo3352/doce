webpackJsonp([3],{TOjy:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("kbh4"),e={components:{Tabs:r.p,TabsItem:r.q},data:function(){return{defaultKey:0}},methods:{tabChangeFn:function(s){console.log(s)}}},n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("tab 组件")]),s._v(" "),s._m(0),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("tabs",{attrs:{"default-key":s.defaultKey,xchang:s.tabChangeFn,"line-width":1}},[t("tabs-item",{key:"1",attrs:{tab:"Tab 1"}},[s._v("Content of Tab Pane 1")]),s._v(" "),t("tabs-item",{key:"2",attrs:{tab:"Tab 2"}},[s._v("Content of Tab Pane 2")]),s._v(" "),t("tabs-item",{key:"3",attrs:{tab:"Tab 3"}},[s._v("Content of Tab Pane 3")]),s._v(" "),t("tabs-item",{key:"1",attrs:{tab:"Tab 1"}},[s._v("Content of Tab Pane 1")]),s._v(" "),t("tabs-item",{key:"2",attrs:{tab:"Tab 2"}},[s._v("Content of Tab Pane 2")])],1),t("br"),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("tabs",{attrs:{"default-key":s.defaultKey,xchang:s.tabChangeFn,"line-width":1}},[t("tabs-item",{key:"1",attrs:{tab:"Tab 1"}},[s._v("Content of Tab Pane 1")]),s._v(" "),t("tabs-item",{key:"2",attrs:{tab:"Tab 2"}},[s._v("Content of Tab Pane 2")]),s._v(" "),t("tabs-item",{key:"3",attrs:{tab:"Tab 3"}},[s._v("Content of Tab Pane 3")])],1)]],2),s._v(" "),t("h3",[s._v("通过 "),t("code",[s._v("计算当前元素距离左边的位置长度")]),s._v(" 方式实现")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":default-key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"defaultKey"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":xchang")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tabChangeFn"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":line-width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("Content of Tab Pane 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("Content of Tab Pane 2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("Content of Tab Pane 3"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("Content of Tab Pane 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("Content of Tab Pane 2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":default-key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"defaultKey"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":xchang")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tabChangeFn"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":line-width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("Content of Tab Pane 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("Content of Tab Pane 2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tab")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Tab 3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("Content of Tab Pane 3"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs-item")]),s._v(">")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("tabs")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Tabs, TabsItem } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vo-ui'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n        Tabs, TabsItem\n    },\n    data() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("defaultKey")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        tabChangeFn(e) {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(e)\n        }\n    }\n};\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(1),s._v(" "),s._m(2)],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("基础用法")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("h2",[this._v("tab 切换组件配置")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v(":xchang")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("tab 事件")])]),s._v(" "),t("tr",[t("td",[s._v(":default-key")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("初始化在第几项(Number)")])]),s._v(" "),t("tr",[t("td",[s._v(":line-width")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("高，会动的线")])])])])}]},l=t("C7Lr")(e,n,!1,null,null,null);a.default=l.exports},cyvK:function(s,a,t){s.exports=t("TOjy")}});
//# sourceMappingURL=3.1e1247d262a1e78722c4.js.map