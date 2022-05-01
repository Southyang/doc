---
title: Common linux instructions
date: 2022-05-01 16:09:28
permalink: /pages/900ada/
---
# Linux常用指令
### 1. Linux常用文件指令

| 指令             | 作用                                                         |
| :--------------- | :----------------------------------------------------------- |
| `ctrl c`         | 取消命令，并且换行                                           |
| `ctrl u`         | 清空本行命令                                                 |
| `tab键`          | 可以补全命令和文件名，如果补全不了快速按两下tab键，可以显示备选选项 |
| `ls`             | 列出当前目录下所有文件，蓝色的是文件夹，白色的是普通文件，绿色的是可执行文件 |
| `pwd`            | 显示当前路径                                                 |
| `cd XXX`         | 进入XXX目录下, cd .. 返回上层目录                            |
| `cp XXX YYY`     | 将XXX文件复制成YYY，XXX和YYY可以是一个路径，比如../dir_c/a.txt，表示上层目录下的dir_c文件夹下的文件a.txt |
| `mkdir XXX`      | 创建目录XXX                                                  |
| `rm XXX`         | 删除普通文件;  rm XXX -r 删除文件夹                          |
| `mv XXX YYY`     | 将XXX文件移动到YYY，和cp命令一样，XXX和YYY可以是一个路径；重命名也是用这个命令 |
| `touch XXX`      | 创建一个文件                                                 |
| `cat XXX`        | 展示文件XXX中的内容                                          |
| `Ctrl + insert`  | `windows/Linux`下复制文本                                    |
| `command + c`    | `Mac`下复制文本                                              |
| `Shift + insert` | windows/Linux下粘贴文本                                      |
| `command + v `   | `Mac`下粘贴文本                                              |



### 2. git常用指令

```
先装个git bash，有图形化也有命令行
个人更喜欢用命令行
```

| 指令                                                         | 作用                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| `git config --global user.name xxx`                          | 设置全局用户名，信息记录在`~/.gitconfig`文件中          |
| `git config --global user.email xxx@xxx.com`                 | 设置全局邮箱地址，信息记录在`~/.gitconfig`文件中        |
| `git init`                                                   | 将当前目录配置成git仓库，信息记录在隐藏的`.git`文件夹中 |
| `git add XX`                                                 | 将XX文件添加到暂存区                                    |
| `git add .`                                                  | 将所有待加入暂存区的文件加入暂存区                      |
| `git rm --cached XX`                                         | 将文件从仓库索引目录中删掉                              |
| `git commit -m`                                              | "给自己看的备注信息"：将暂存区的内容提交到当前分支      |
| `git status`                                                 | 查看仓库状态                                            |
| `git diff XX`                                                | 查看XX文件相对于暂存区修改了哪些内容                    |
| `git log`                                                    | 查看当前分支的所有版本                                  |
| `git reflog`                                                 | 查看HEAD指针的移动历史（包括被回滚的版本）              |
| `git reset --hard HEAD^` 或 `git reset --hard HEAD~`         | 将代码库回滚到上一个版本                                |
| `git reset --hard HEAD^^`                                    | 往上回滚两次，以此类推                                  |
| `git reset --hard HEAD~100`                                  | 往上回滚100个版本                                       |
| `git reset --hard` 版本号                                    | 回滚到某一特定版本                                      |
| `git checkout — XX`或`git restore XX`                        | 将XX文件尚未加入暂存区的修改全部撤销                    |
| `git remote add origin git@git.acwing.comxxx/XXX.git`        | 将本地仓库关联到远程仓库                                |
| `git push -u` (第一次需要-u以后不需要)                       | 将当前分支推送到远程仓库                                |
| `git push origin branch_name`                                | 将本地的某个分支推送到远程仓库                          |
| `git clone git@git.acwing.com:xxx/XXX.git`                   | 将远程仓库XXX下载到当前目录下                           |
| `git checkout -b branch_name`                                | 创建并切换到`branch_name`这个分支                       |
| `git branch`                                                 | 查看所有分支和当前所处分支                              |
| `git checkout branch_name`                                   | 切换到branch_name这个分支                               |
| `git merge branch_name`                                      | 将分支branch_name合并到当前分支上                       |
| `git branch -d branch_name`                                  | 删除本地仓库的branch_name分支                           |
| `git branch branch_name`                                     | 创建新分支                                              |
| `git push --set-upstream origin branch_name`                 | 设置本地的branch_name分支对应远程仓库的branch_name分支  |
| `git push -d origin branch_name`                             | 删除远程仓库的branch_name分支                           |
| `git pull`                                                   | 将远程仓库的当前分支与本地仓库的当前分支合并            |
| `git pull origin branch_name`                                | 将远程仓库的branch_name分支与本地仓库的当前分支合并     |
| `git branch --set-upstream-to=origin/branch_name1 branch_name2` | 将远程的branch_name1分支与本地的branch_name2分支对应    |
| `git checkout -t origin/branch_name`                         | 将远程的branch_name分支拉取到本地                       |



### 3. vim常用指令

```
Vim是什么
    (1) 命令行模式下的文本编辑器。
    (2) 根据文件扩展名自动判别编程语言。支持代码缩进、代码高亮等功能。
    (3) 使用方式：vim filename
        如果已有该文件，则打开它。
        如果没有该文件，则打开个一个新的文件，并命名为filename
Vim的模式
    (1) 一般命令模式
        默认模式。命令输入方式：类似于打游戏放技能，按不同字符，即可进行不同操作。可以复制、粘贴、删除文本等。
    (2) 编辑模式
        在一般命令模式里按下i，会进入编辑模式。
        按下ESC会退出编辑模式，返回到一般命令模式。
    (3) 命令行模式
        在一般命令模式里按下:/?三个字母中的任意一个，会进入命令行模式。命令行在最下面。
        可以查找、替换、保存、退出、配置编辑器等。
```

| 指令                    | 作用                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `i`                     | 进入编辑模式                                                 |
| `ESC`                   | 进入一般命令模式ESC：进入一般命令模式                        |
| `h 或 左箭头键`         | 光标向左移动一个字符                                         |
| `j 或 向下箭头`         | 光标向下移动一个字符                                         |
| `k 或 向上箭头`         | 光标向上移动一个字符                                         |
| `l 或 向右箭头`         | 光标向右移动一个字符                                         |
| `n<Space>`              | n表示数字，按下数字后再按空格，光标会向右移动这一行的n个字符 |
| `0 或 功能键[Home]`     | 光标移动到本行开头                                           |
| `$ 或 功能键[End]`      | 光标移动到本行末尾                                           |
| `G`                     | 光标移动到最后一行                                           |
| `:n 或 nG`              | n为数字，光标移动到第n行                                     |
| `gg`                    | 光标移动到第一行，相当于1G                                   |
| `n<Enter>`              | n为数字，光标向下移动n行                                     |
| `/word`                 | 向光标之下寻找第一个值为word的字符串                         |
| `?word`                 | 向光标之上寻找第一个值为word的字符串                         |
| `n`                     | 重复前一个查找操作                                           |
| `N`                     | 反向重复前一个查找操作                                       |
| `:n1,n2s/word1/word2/g` | n1与n2为数字，在第n1行与n2行之间寻找word1这个字符串，并将该字符串替换为word2 |
| `:1,$s/word1/word2/g`   | 将全文的word1替换为word2                                     |
| `1,$s/word1/word2/gc`   | 将全文的word1替换为word2，且在替换前要求用户确认。           |
| `v`                     | 选中文本                                                     |
| `d`                     | 删除选中的文本                                               |
| `dd`                    | 删除当前行                                                   |
| `y`                     | 复制选中的文本                                               |
| `yy`                    | 复制当前行                                                   |
| `p`                     | 将复制的数据在光标的下一行/下一个位置粘贴                    |
| `u`                     | 撤销                                                         |
| `Ctrl + r`              | 取消撤销                                                     |
| `>`                     | 将选中的文本整体向右缩进一次                                 |
| `<`                     | 将选中的文本整体向左缩进一次                                 |
| `:w`                    | 保存                                                         |
| `:w!`                   | 强制保存                                                     |
| `:q`                    | 退出                                                         |
| `:q!`                   | 强制退出                                                     |
| `:wq`                   | 保存并退出                                                   |
| `:set paste`            | 设置成粘贴模式，取消代码自动缩进                             |
| `:set nopaste`          | 取消粘贴模式，开启代码自动缩进                               |
| `:set nu`               | 显示行号                                                     |
| `:set nonu`             | 隐藏行号                                                     |
| `gg=G`                  | 将全文代码格式化                                             |
| `:noh`                  | 关闭查找关键词高亮                                           |
| `Ctrl + q`              | 当vim卡死时，可以取消当前正在执行的命令                      |
