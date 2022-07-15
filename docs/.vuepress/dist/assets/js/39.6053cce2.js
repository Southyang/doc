(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{479:function(s,t,a){"use strict";a.r(t);var r=a(5),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"bug1-安装好npm后-每次都需要管理员下的cmd才可以执行指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug1-安装好npm后-每次都需要管理员下的cmd才可以执行指令"}},[s._v("#")]),s._v(" bug1 : 安装好npm后，每次都需要管理员下的cmd才可以执行指令")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("情况：")]),s._v(" 安装好npm后，每次都需要管理员下的cmd才可以执行指令")]),s._v(" "),t("li",[t("strong",[s._v("报错：")]),s._v(" npm ERR! Cannot call write after a stream was destroyed")]),s._v(" "),t("li",[t("strong",[s._v("原因：")]),s._v(" 安装时node存在问题，导致node没有写权限")]),s._v(" "),t("li",[t("strong",[s._v("修改：")]),s._v(" 找到nodejs的安装文件并添加修改权限即可")])]),s._v(" "),t("h3",{attrs:{id:"bug2-打开vscode后-在顶部显示vscode不受支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug2-打开vscode后-在顶部显示vscode不受支持"}},[s._v("#")]),s._v(" bug2 : 打开vscode后，在顶部显示vscode不受支持")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("情况：")]),s._v(" 打开vscode后，在顶部显示vscode不受支持")]),s._v(" "),t("li",[t("strong",[s._v("原因：")]),s._v(" 在更换背景或其他情况下安装的插件修改了vscode的核心文件")]),s._v(" "),t("li",[t("strong",[s._v("原因：")]),s._v(" 安装Fix VSCode Checksums")]),s._v(" "),t("li",[t("strong",[s._v("解决办法：")]),s._v(" "),t("ul",[t("li",[s._v("Ctrl + Shift + P 打开命令面板")]),s._v(" "),t("li",[s._v("输入 Fix Checksums:Apply")]),s._v(" "),t("li",[s._v("重启vscode")])])])]),s._v(" "),t("h3",{attrs:{id:"bug3-调用hasownproperty函数检查有无属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug3-调用hasownproperty函数检查有无属性"}},[s._v("#")]),s._v(" bug3 : 调用hasOwnProperty函数检查有无属性")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("情况：")]),s._v(" 调用hasOwnProperty函数检查有无属性")]),s._v(" "),t("li",[t("strong",[s._v("报错：")]),t("code",[s._v("Do not access Object.prototype method 'hasOwnProperty' from target object no-prototype-builtins")])]),s._v(" "),t("li",[t("strong",[s._v("原因：")]),s._v(" no-prototype-builtins 规则不允许"),t("code",[s._v("Object.prototype")]),s._v("直接从对象调用方法")]),s._v(" "),t("li",[t("strong",[s._v("修改：")]),s._v(" 将"),t("code",[s._v("todo.hasOwnProperty('isEdit')")]),s._v("改为"),t("code",[s._v("todo.hasOwnProperty.call('isEdit')")])])]),s._v(" "),t("h3",{attrs:{id:"bug4-调用bootstrap-css作为样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug4-调用bootstrap-css作为样式"}},[s._v("#")]),s._v(" bug4 : 调用bootstrap.css作为样式")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("情况：")]),s._v(" 调用bootstrap.css作为样式")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("报错：")]),t("code",[s._v("DevTools 无法加载来源映射：无法加载 http://localhost:8080/css/bootstrap.css.map 的内容：HTTP 错误：状态代码 404，net::ERR_HTTP_RESPONSE_CODE_FAILURE")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("修改：")])]),s._v(" "),t("ul",[t("li",[s._v("删除源码中的最后一行注释 "),t("code",[s._v("/*# sourceMappingURL=bootstrap.css.map */")])]),s._v(" "),t("li",[s._v("或者在/* 和 # 之间加一个空格 "),t("code",[s._v("/* # sourceMappingURL=bootstrap.css.map */")])]),s._v(" "),t("li",[s._v("如果是css报错就删除：\n"),t("code",[s._v("/*# sourceMappingURL=bootstrap.css.map */")])]),s._v(" "),t("li",[s._v("如果是js报错就删除：\n"),t("code",[s._v("//# sourceMappingURL=bootstrap.js.map")])]),s._v(" "),t("li",[s._v("**注：**能不改源码就不改源码，注释也是")])])])]),s._v(" "),t("h3",{attrs:{id:"bug5-vue2升级到vue3时-配置404页面报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug5-vue2升级到vue3时-配置404页面报错"}},[s._v("#")]),s._v(" bug5：vue2升级到vue3时，配置404页面报错")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("情况：")]),s._v(" vue2升级到vue3时，配置404页面报错")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("报错：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Catch all routes ("*") must now be defined using a param with a custom regexp.\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("原因：")]),s._v(" Vue3的路由配置不能直接写"),t("code",[s._v('path: "*"')]),s._v("了")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("修改：")]),s._v(" Vue3重定向匹配404路由的三种写法")]),s._v(" "),t("ul",[t("li",[t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/:catchAll(.*)"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("redirect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/NotFoundComopents"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/:pathMatch(.*)"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("redirect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/NotFoundComopents"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/:pathMatch(.*)*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("redirect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/NotFoundComopents"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);