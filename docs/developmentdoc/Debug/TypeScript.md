---
title: TypeScript
date: 2022-03-25 16:38:18
permalink: /pages/56c835/
---
### TS在使用webpack打包时遇到的问题 : WARNING in configuration……
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'uction' for this value. Set 'mode' option to 'development' or duction' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior.rn more: https://webpack.js.org/configuration/mode/
```
**产生原因：**webpack升级4.0之后新增了mode属性

**解决方法：**

- 在package.json中设置开发环境和生产环境
```
"scripts": {
   "dev": "webpack --mode development",//设置开发环境
   "build": "webpack --mode production",//设置生产环境
   "test": "echo \"Error: no test specified\" && exit 1"
},
```
- 在webpack.confing.js中设置mode
```
const path = require('path')

//这个配置文件就是一个JS文件，通过Mode中的模块操作，向外暴露一个配置对象
module.exports = {
    //手动指定入口和出口
    entry: path.join(__dirname,'./src/main.js'),//入口，表示打包哪个文件
    output:{
        path: path.join(__dirname,'./dist'),//指定打包好的文件，输入到哪个目录中
        filename: 'bundle.js'//指定输出的文件的名称
    },
    mode: 'development'//设置mode
}
```
**附加内容：**

- 生成package.json文件
`npm init -y`
- 安装webpack和HTML的工具包
`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
`npm i -D html-webpack-plugin`
- 配置tsconfig.json文件
```
{
    "compilerOptions": {
        "target": "ES2015", //选择JS版本
        "module": "ES2015",
        "strict": true //开启严格检测
    }
}
```
- 一个完整的webpack配置文件
```
// 引入一个包
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    // 指定入口文件
    entry: "./src/index.ts",
    
    devtool: "inline-source-map",
    
    devServer: {
        contentBase: './dist'
    },

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后的文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },
    
    // 指定webpack打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: {
                   loader: "ts-loader"     
                },
                // 要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title用于指定生成HTML的标题
            // title:'TS测试'
            
            // template用于指定使用的模板HTML
            template: "./src/index.html"
        }),
    ]

}
```