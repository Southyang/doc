const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const markdown = require("./config/markdown.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
	head,
    title: "Southyang的文档库",
    description: "开放式文档库，记录学习经历",
	base: '/', // 默认路径
    // 如果不想将文档的小标题移到右侧，请去掉plugins中的vuepress-theme-vdoing，注释掉theme: "vdoing",
	plugins,
	theme: "vdoing",
    themeConfig: themeConfig,
	markdown,
};