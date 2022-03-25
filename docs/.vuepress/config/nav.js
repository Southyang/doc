module.exports = [  
    { text: '首页指南', link: '/' },
	{ 
	  text: '学习文档',
	  ariaLabel: 'learningdoc',
	  items: [
	    { text: 'CSAPP', link: '/learningdoc/CSAPP/' },
		{ text: 'TS', link: '/learningdoc/TS/' },
		{ text: 'Vue', link: '/learningdoc/Vue/' },
	  ]
	},
	{ 
	  text: '开发文档',
	  ariaLabel: 'developmentdoc',
	  items: [
	    { text: 'Configure', link: '/developmentdoc/Configure/' },
		{ text: 'Debug', link: '/developmentdoc/Debug/' },
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
    { text: 'GitHub', link: 'https://github.com/Southyang/doc' }
]