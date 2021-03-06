module.exports = [  
    { text: '首页指南', link: '/' },
	{ 
	  text: '学习文档',
	  ariaLabel: 'learningdoc',
	  items: [
	    { text: 'CSAPP', link: '/learningdoc/CSAPP/' },
		{ text: 'TS', link: '/learningdoc/TS/' },
		{ text: 'Vue', link: '/learningdoc/Vue/' },
		{ text: 'Algorithm', link: '/learningdoc/Algorithm/' },
		{ text: 'Go', link: '/learningdoc/Go/' },
	  ]
	},
	{ 
	  text: '开发文档',
	  ariaLabel: 'developmentdoc',
	  items: [
		{ 
			text: '工程文档',
			ariaLabel: 'projectdoc',
			items: [
				{ text: 'Configuration & Directives', link: '/developmentdoc/projectdoc/Configuration & Directives/' },
				{ text: 'Debug', link: '/developmentdoc/projectdoc/Debug/' },
			]
		},
		{ 
			text: '科研文档',
			ariaLabel: 'scientificdoc',
			items: [
				{ text: 'Navigation_paper', link: '/developmentdoc/scientificdoc/Navigation_paper/' },
				{ text: 'ROS', link: '/developmentdoc/scientificdoc/ROS/' },
			]
		}
	  ]
	},
	{ 
	  text: '课程文档',
	  ariaLabel: 'coursedoc',
	  items: [
	    { text: '毛概', link: '/coursedoc/毛概/' },
		{ text: '多媒体', link: '/coursedoc/多媒体/' },
	  ]
	},
	{ text: '我的博客', link: 'https://southyang.cn/' },
    { text: 'GitHub', link: 'https://github.com/Southyang/Southyang' },
	{ text: '个人主页', link: 'https://me.southyang.cn/' },
]