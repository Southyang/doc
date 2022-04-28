module.exports = [  
	['@vuepress/pwa',
	  {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      },
	],
	['demo-container'],
	['vuepress-theme-vdoing'],
	['vuepress-plugin-nuggets-style-copy', 
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
	['vuepress-plugin-nprogress'],
	['vuepress-plugin-mathjax', // 无效
      {
        target: 'svg',
		macros: {
          '*': '\\times',
		},
	  }
    ],
	['cursor-effects', // 无效
      {
        size: 2, // size of the particle, default: 2
        shape: ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
]