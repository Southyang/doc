const nav = require("./nav.js");
const sidebar = require("./sidebar.js");

module.exports = {
    logo: "https://store.southyang.cn/project/doc/logo.png",
    // 最近更新栏
    updateBar: {
        showToArticle: false, // 显示到文章页底部，默认true
    },
	smoothScroll: true,
	lastUpdated: 'Last Updated',
    category: false,
    tag: false,
    archive: false,
    nav,
    sidebar,
}