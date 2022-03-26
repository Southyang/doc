module.exports = [  
	[
      '@vuepress/pwa',
	  "demo-container", 
	  "vuepress-theme-vdoing",
      {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      }
    ]
]