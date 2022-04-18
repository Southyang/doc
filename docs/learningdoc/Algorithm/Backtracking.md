---
title: Backtracking
date: 2022-04-18 20:11:48
permalink: /pages/31b21a/
---
# 回溯

## 类型

**标了🌟的是按照官方题解写的**



## 题目

### 37. 解数独 <span id="37"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

编写一个程序，通过填充空格来解决数独问题。

数独的解法需 **遵循如下规则**：

1. 数字 `1-9` 在每一行只能出现一次。
2. 数字 `1-9` 在每一列只能出现一次。
3. 数字 `1-9` 在每一个以粗实线分隔的 `3x3` 宫内只能出现一次。（请参考示例图）

数独部分空格内已填入了数字，空白格用 `'.'` 表示。

**示例：**

![解数独 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png)

```
输入：board = [["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]
输出：[["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]]
解释：输入的数独如上图所示，唯一有效的解决方案如下所示：
```

![解数独示例 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714_solutionsvg.png)

**提示：**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` 是一位数字或者 `'.'`
- 题目数据 **保证** 输入数独仅有一个解

**解题思路：**

- 解数独相当于一个可以不走到尽头的dfs
- 对于常规的dfs题目，我们需要将所有可能的情况遍历一次，找全排列
- 而对于解数独，我们只需要求出一种解法就可以了，因此需要维护一个notcontinue来判断是否跳出循环
- 题目要从三方面判断是否可用，即：
  - 当前行是否可用数字x，即`line[i][x]`是否为false
  - 当前列是否可用数字x，即`column[j][x]`是否为false
  - 当前九宫格是否可用数字x，即`block[i/3][j/3][x]`是否为false
- 因此每次都需要判断三种情况：`if(!line[i][k] && !column[j][k] && !block[i / 3][j / 3][k])`
- 剩下的就是传统dfs的内容了

**代码：**

```cpp
class Solution {
public:
    bool line[9][9]; // 记录行中数字是否可存放
    bool column[9][9]; // 记录列中数字是否可存放
    bool block[3][3][9]; // 记录九宫格内数字是否可存放
    bool notcontinue; // 记录是否需要继续遍历
    vector<pair<int,int>> emptyspaces; // 记录需要存放数字的地方

    void dfs(vector<vector<char>>& board, int depth){
        if(depth == emptyspaces.size()){ // 如果将需要存放数字的地方遍历完成，结束循环
            notcontinue = true;
            return;
        }

        auto [i, j] = emptyspaces[depth]; // 获取数字存放地点
        for(int k = 0; k < 9 && !notcontinue; k ++){
            if(!line[i][k] && !column[j][k] && !block[i / 3][j / 3][k]){ // 如果当前位置可以存放
                line[i][k] = column[j][k] = block[i / 3][j / 3][k] = true; // 修改状态为不可用
                board[i][j] = k + '0' + 1; // 改变board对应位置
                dfs(board, depth + 1); // 在当前修改的基础上继续dfs
                line[i][k] = column[j][k] = block[i / 3][j / 3][k] = false; // 修改状态为可用
            }
        }
    }

    void solveSudoku(vector<vector<char>>& board) {
        for(int i = 0; i < board.size(); i ++){ // 遍历board得到初始的line、column、block状态
            for(int j = 0; j < board[0].size(); j ++){
                if(board[i][j] == '.'){
                    emptyspaces.push_back({i ,j});
                }
                else{
                    int temp = board[i][j] - '0' - 1;
                    line[i][temp] = column[j][temp] = block[i / 3][j / 3][temp] = true;
                }
            }
        }
        dfs(board, 0);
    }
};
```



### 46. 全排列 <span id="46"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个不含重复数字的数组 `nums` ，返回其 *所有可能的全排列* 。你可以 **按任意顺序** 返回答案。

**示例：**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

```
输入：nums = [1]
输出：[[1]]
```

**提示：**

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- `nums` 中的所有整数 **互不相同**

**解题思路：**

- 直接深度优先遍历，走到头就往回走一个，然后继续往下走
- 要注意的是标注数据可用状态

**代码：**

```cpp
class Solution {
public:
    void dfs(int depth, vector<int>& nums, vector<bool>& status, vector<int>& temp, vector<vector<int> >& res){
        if(depth == nums.size()){ // 如果全部遍历，压入res并返回
            res.push_back(temp);
            return;
        }
        for(int i = 0; i < nums.size(); i ++){
            if(!status[i]){
            	temp.push_back(nums[i]); // 压入temp
            	status[i] = true; // 改变状态为不可用

            	dfs(depth + 1, nums, status, temp, res); // 对下一个位置进行dfs

            	temp.pop_back(); // 弹出末尾
            	status[i] = false; // 改变状态为可用
	    	}
        }
    }

    vector<vector<int> > permute(vector<int>& nums) {
	    int len = nums.size();
        vector<vector<int> > res;
        vector<int> temp;
        vector<bool> status(len, false);
        dfs(0, nums, status, temp, res); // 深度，nums数据，status状态数组，temp临时数组，res返回数组
        return res;
    }
};
```



### 47. 全排列II <span id="47"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个可包含重复数字的序列 `nums` ，***按任意顺序*** 返回所有不重复的全排列。

**示例：**

```
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**提示：**

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

**解题思路：**

- 大体思路和46题是一样的，只是增加了一个去重的判断
- 考虑如何去重
  - 同一个位置，相同的元素只能记录一次，记录两次则有重复
  - 为了达到这个目的，我们要记录当前位置的弹出数据记录下来
  - 如果我们记录所有的弹出数据，需要额外的空间O(n)来保存
  - 用时间换空间：对nums数组排序，这样重复数据就会挨着出现，只需要维护一个常数空间就可以记录弹出数据

**代码：**

```cpp
class Solution {
public:
    void dfs(int depth, vector<int>& nums, vector<bool>& status, vector<int>& temp, vector<vector<int> >& res){
        if(depth == nums.size()){ // 如果全部遍历，压入res并返回
            res.push_back(temp);
            return;
        }
        int out = 20; // 记录一个数据范围之外的数作为out
        for(int i = 0; i < nums.size(); i ++){
            if(!status[i] && nums[i] != out){ // 如果当前要压入的数和刚弹出的数相同，则不能压入
                temp.push_back(nums[i]); // 压入temp
                status[i] = true; // 改变状态为不可用

                dfs(depth + 1, nums, status, temp, res);

                out = temp.back(); // 取出最后一个数据
                temp.pop_back(); // 弹出末尾
                status[i] = false; // 改变状态为可用
            }
        }
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        int len = nums.size();
        sort(nums.begin(), nums.end());
        vector<int> temp;
        vector<vector<int>> res;
        vector<bool> status(len, false);
        dfs(0, nums, status, temp, res); // 深度，nums数据，status状态数组，temp临时数组，res返回数组
        return res;
    }
};
```

