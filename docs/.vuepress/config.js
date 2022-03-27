const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const nav = require("./config/nav.js");
const sidebar = require("./config/sidebar.js");
const markdown = require("./config/markdown.js");

module.exports = {
	head,
    title: "Southyang的文档库",
    description: "开放式文档库，记录学习经历",
	base: '/', // 默认路径
    // 如果不想将文档的小标题移到右侧，请去掉plugins中的vuepress-theme-vdoing，注释掉theme: "vdoing",
	plugins,
	theme: "vdoing",
    themeConfig: {
        logo: "https://store.southyang.cn/project/doc/logo.png",
        // 最近更新栏
        updateBar: {
            showToArticle: false, // 显示到文章页底部，默认true
        },
		smoothScroll: true,
		lastUpdated: 'Last Updated',
        sidebar: "structuring",
        category: false,
        tag: false,
        archive: false,
        nav,
        sidebar,
    },
	markdown,
};