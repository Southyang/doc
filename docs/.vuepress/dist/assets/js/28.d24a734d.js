(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{614:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"mpi环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpi环境配置"}},[t._v("#")]),t._v(" mpi环境配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mpich\n")])])]),a("h3",{attrs:{id:"mpirun指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpirun指令"}},[t._v("#")]),t._v(" mpirun指令")]),t._v(" "),a("p",[a("code",[t._v("mpirun [mpirun-options…] [options…]")])]),t._v(" "),a("blockquote",[a("p",[t._v("-np 　    要加载的进程个数。")]),t._v(" "),a("p",[t._v("-p4pg 　按照pgfile文件中的要求加载用户进程。pgfile文件描述用户在那些结点上加载什么样的用户进程。该文件的格式为：")]),t._v(" "),a("p",[t._v("第一行：<结点名> <0> <用户要加载的进程--允许使用绝对路径>\n　　第二行：<结点名> <1> <用户要加载的进程--允许使用绝对路径>\n　　　　　　　　　　　　　　......\n　　第n行：<结点名> <1> <用户要加载的进程--允许使用绝对路径>")])]),t._v(" "),a("p",[a("code",[t._v("mpirun -np 4 ./test")])]),t._v(" "),a("h3",{attrs:{id:"mpi编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpi编译"}},[t._v("#")]),t._v(" mpi编译")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mpicxx -g -Wall -o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" test.cpp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# C++用这个")]),t._v("\nmpicc hello.c -o hello "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# C两个都能用")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);