---
title: vue
date: 2022-03-25 16:38:18
permalink: /pages/1e5f88/
---
### bug1

- **情况：** 安装好npm后，每次都需要管理员下的cmd才可以执行指令
- **报错：** npm ERR! Cannot call write after a stream was destroyed
- **原因：** 安装时node存在问题，导致node没有写权限
- **修改：** 找到nodejs的安装文件并添加修改权限即可



### bug2

- **情况：** 打开vscode后，在顶部显示vscode不受支持
- **原因：** 在更换背景或其他情况下安装的插件修改了vscode的核心文件
- **原因：** 安装Fix VSCode Checksums
- **解决办法：** 
  - Ctrl + Shift + P 打开命令面板
  - 输入 Fix Checksums:Apply
  - 重启vscode



### bug3

- **情况：** 调用hasOwnProperty函数检查有无属性
- **报错：**`Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins`
- **原因：** no-prototype-builtins 规则不允许`Object.prototype`直接从对象调用方法
- **修改：** 将`todo.hasOwnProperty('isEdit')`改为`todo.hasOwnProperty.call('isEdit')`



### bug4

- **情况：** 调用bootstrap.css作为样式

- **报错：**`DevTools 无法加载来源映射：无法加载 http://localhost:8080/css/bootstrap.css.map 的内容：HTTP 错误：状态代码 404，net::ERR_HTTP_RESPONSE_CODE_FAILURE`

- **修改：**

  - 删除源码中的最后一行注释 `/*# sourceMappingURL=bootstrap.css.map */` 
  - 或者在/* 和 # 之间加一个空格 `/* # sourceMappingURL=bootstrap.css.map */ `
  - 如果是css报错就删除：
    `/*# sourceMappingURL=bootstrap.css.map */`

  - 如果是js报错就删除：
    ` //# sourceMappingURL=bootstrap.js.map`
  - **注：**能不改源码就不改源码，注释也是