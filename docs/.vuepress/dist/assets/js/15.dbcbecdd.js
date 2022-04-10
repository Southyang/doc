(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{603:function(_,v,l){"use strict";l.r(v);var i=l(32),t=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"数字视频编码原理与标准"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数字视频编码原理与标准"}},[_._v("#")]),_._v(" 数字视频编码原理与标准")]),_._v(" "),l("h2",{attrs:{id:"_1-视频编码算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-视频编码算法"}},[_._v("#")]),_._v(" 1. 视频编码算法")]),_._v(" "),l("h3",{attrs:{id:"_1-1-编码原理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-编码原理"}},[_._v("#")]),_._v(" 1.1 编码原理")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("通过减少时间冗余来提高视频压缩编码的效率")])]),_._v(" "),l("li",[l("p",[_._v("视频图像分为三类：")]),_._v(" "),l("ul",[l("li",[_._v("I帧：帧内编码，利用图像内部的相关性进行压缩，为关键帧，典型算法为JPEG算法")]),_._v(" "),l("li",[_._v("P帧：帧间编码，施加预测编码的图像，为单向预测")]),_._v(" "),l("li",[_._v("B帧：帧间编码，施加双向预测编码的图像，为双向预测")])])])]),_._v(" "),l("h3",{attrs:{id:"_1-2-算法框架"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-算法框架"}},[_._v("#")]),_._v(" 1.2 算法框架")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("计算编码图像与预测图像之间的差值")]),_._v(" "),l("ul",[l("li",[_._v("将待编码图像分割成若干块，然后以块为单位逐块进行相减运算")]),_._v(" "),l("li",[_._v("通常块被分割为 16 * 16 像素的块，称为宏块")]),_._v(" "),l("li",[_._v("流程为： 搜索最佳匹配宏块 --\x3e 计算两者差分值  --\x3e 对差分值进行正余弦变换 --\x3e 行程压缩结果 --\x3e 赫夫曼编码输出")])])]),_._v(" "),l("li",[l("p",[_._v("关键处理步骤为：搜索最佳匹配宏块")]),_._v(" "),l("ul",[l("li",[_._v("在参考图像中搜索最佳匹配宏块的计算过程："),l("strong",[_._v("运动估计")])]),_._v(" "),l("li",[_._v("最佳匹配宏块基准位置的偏移量："),l("strong",[_._v("运动向量")])]),_._v(" "),l("li",[_._v("根据运动向量将差分值补充到参考图像匹配宏块中去的过程："),l("strong",[_._v("运动补偿")])])])])]),_._v(" "),l("h2",{attrs:{id:"_2-运动搜索算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-运动搜索算法"}},[_._v("#")]),_._v(" 2. 运动搜索算法")]),_._v(" "),l("h3",{attrs:{id:"_2-1-基础知识"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基础知识"}},[_._v("#")]),_._v(" 2.1 基础知识")]),_._v(" "),l("ul",[l("li",[_._v("运动估计算法分类：\n"),l("ul",[l("li",[_._v("块匹配法 （最常用）")]),_._v(" "),l("li",[_._v("递归估计法")]),_._v(" "),l("li",[_._v("贝叶斯估计法")]),_._v(" "),l("li",[_._v("光流法")])])]),_._v(" "),l("li",[_._v("涉及到的问题：\n"),l("ul",[l("li",[_._v("搜索起始点的选择")]),_._v(" "),l("li",[_._v("匹配准则")]),_._v(" "),l("li",[_._v("搜索过程")])])])]),_._v(" "),l("h3",{attrs:{id:"_2-2-搜索起点的选择"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-搜索起点的选择"}},[_._v("#")]),_._v(" 2.2 搜索起点的选择")]),_._v(" "),l("ul",[l("li",[_._v("以参考帧对应的 (0, 0) 位置为起点\n"),l("ul",[l("li",[_._v("方法简单，但容易陷入局部最优")])])]),_._v(" "),l("li",[_._v("预测起点位置\n"),l("ul",[l("li",[_._v("基于SAD值的起点预测方法 --\x3e 改进：利用运动矢量的相关性来预测起点")]),_._v(" "),l("li",[_._v("利用相邻块和相邻帧对应块的运动矢量来预测当前块的搜索起点")]),_._v(" "),l("li",[_._v("基于相邻运动矢量相等的起点预测方法")])])])]),_._v(" "),l("h3",{attrs:{id:"_2-3-匹配准则"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-匹配准则"}},[_._v("#")]),_._v(" 2.3 匹配准则")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("绝对差之和  :  $ SAD = \\sum_{i=0}^{15}\\sum_{j=0}^{15} | f(i,j) - g(i-d_x,j-d_y) |$")]),_._v(" "),l("ul",[l("li",[_._v("i，j 是编码图像分块的相对坐标")]),_._v(" "),l("li",[_._v("*f(i, j)*是编码图像分块")]),_._v(" "),l("li",[_._v("$d_x,d_y$是运动向量")]),_._v(" "),l("li",[_._v("g是参考图像分块")])])]),_._v(" "),l("li",[l("p",[_._v("均方误差  :  $MSE=\\frac{1}{M \\times N}\\sum_{i=0}^{15}\\sum_{j=0}^{15}[f(i,j) - g(i-d_x,j-d_y)]^2$")]),_._v(" "),l("ul",[l("li",[_._v("M和N时图像分块的水平与垂直大小，一般情况下均为16，即宏块")])])]),_._v(" "),l("li",[l("p",[_._v("平均绝对差  :  $MAD=\\frac{1}{M \\times N}\\sum_{i=0}^{15}\\sum_{j=0}^{15}|f(i,j) - g(i-d_x,j-d_y)|$")])])]),_._v(" "),l("h3",{attrs:{id:"_2-4-运动搜索算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-运动搜索算法"}},[_._v("#")]),_._v(" 2.4 运动搜索算法")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("全搜索法 "),l("strong",[_._v("FS")])]),_._v(" "),l("ul",[l("li",[_._v("也称穷尽搜索法，对搜索范围内所有可能的候选位置计算SAD，从中找出最小的SAD")]),_._v(" "),l("li",[_._v("对应偏移量即为所求运动向量，找到的匹配块必为全局最优值")]),_._v(" "),l("li",[_._v("基本过程\n"),l("ul",[l("li",[_._v("从原点出发，按顺时针方向由近及远，逐个计算SAD")]),_._v(" "),l("li",[_._v("遍历完所有点后，找到最小的SAD")])])])])]),_._v(" "),l("li",[l("p",[_._v("二维对数法 "),l("strong",[_._v("TDL")])]),_._v(" "),l("ul",[l("li",[_._v("快速算法，分多个阶段搜索，并逐次减小搜索范围知道MSE不能再减小而结束")]),_._v(" "),l("li",[_._v("不能保证找到全局最优点")]),_._v(" "),l("li",[_._v("基本过程\n"),l("ul",[l("li",[_._v("从原点开始对十字形分布的点群进行搜索")]),_._v(" "),l("li",[_._v("如果MSE最小点出现在边缘，则更换中心点为该点并继续搜索")]),_._v(" "),l("li",[_._v("如果MSE最小点出现在中心，则将步长减半继续搜索")])])])])]),_._v(" "),l("li",[l("p",[_._v("三步搜索法 "),l("strong",[_._v("TSS")])]),_._v(" "),l("ul",[l("li",[_._v("较为简单且健壮，使用广泛")]),_._v(" "),l("li",[_._v("由粗到细的搜索模式")]),_._v(" "),l("li",[_._v("基本过程\n"),l("ul",[l("li",[_._v("从原点开始取最大搜索长度的一半为步长，取周围八个点为点群进行匹配计算")]),_._v(" "),l("li",[_._v("选取MAD值最小点为新的中心点，并将搜索步长减半")]),_._v(" "),l("li",[_._v("重复减半搜索的次数不超过三次")])])])])])]),_._v(" "),l("h2",{attrs:{id:"_3-视频编码国际标准"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-视频编码国际标准"}},[_._v("#")]),_._v(" 3. 视频编码国际标准")]),_._v(" "),l("ul",[l("li",[l("strong",[_._v("P262")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);