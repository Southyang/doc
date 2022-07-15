module.exports = [
	['demo-container'],
	['vuepress-theme-vdoing'],
	[
      'vuepress-plugin-mathjax', // markdown数学公式
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
	/*['vuepress-plugin-nuggets-style-copy', 
	  {
		copyText: "复制代码",
		tip: {
          content: "复制成功"
		}
	  }
    ],
	['copyright',
	  {
        authorName: 'Southyang',
        minLength: 30,
      },
	],
	['vuepress-plugin-nprogress'],*/
]