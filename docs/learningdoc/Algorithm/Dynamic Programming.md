---
title: Dynamic Programming
date: 2022-05-24 23:06:47
permalink: /pages/c51408/
---
# 动态规划

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```
核心思想

先遍历背包和先遍历物品的区别
- 先遍历背包求出来的是排列数，一个背包容量对n个物品做了扫描，有k种可能的存放方式，所以为排列数
- 先遍历物品求出来的是组合数，物品依次放入可容纳的背包中，1种存放方式，所以为组合数

先遍历物品时对遍历背包顺序的要求
- 先遍历物品，从后往前遍历背包是01背包，每个物品可添加一次
- 从前往后是完全背包，每个物品可添加多次

不同的递推公式可以求出不同的结果
- 不同递归公式的区别和用途
- dp[j] = Math.max(dp[j],dp[j-num[i]]+value) 求某一容量的最大价值
- dp[j] = dp[j] + dp[j-num[i]] 求可能的种类数量

多重背包
- 可以平摊开看做一个01背包
- 有一种物品a，共n个 → 可以看做有n种物品，每种一个，均为a
- 之后使用01背包解法求解即可
```



### 62. 不同路径 <span id="62"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

**示例：**

![不同路径 图源LeetCode](https://store.southyang.cn/LeetCode/DynamicProgramming/robot_maze.png)

```
输入：m = 3, n = 7
输出：28
```

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

```
输入：m = 7, n = 3
输出：28
```

```
输入：m = 3, n = 3
输出：6
```

**提示：**

- `1 <= m, n <= 100`
- 题目数据保证答案小于等于 `2 * 109`

**解题思路：**

- 每个方格可以从左侧方格或上侧方格到达，因此到该方格的走法就是到左侧方格的走法 + 上侧方格的走法
- 使用num数组来代表每个方格的初始走法
- num[0]为起点，走法为1
- 可以先使用二维数组理解思路，再转换到一维数组优化空间
- 二维数组
  - `num[0][i] = 1` , `num[i][0] = 1`
  - `num[i][j] = num[i][j - 1] + num[i - 1][j]`

**代码：**

```cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<int> num(n, 0);
        num[0] = 1;

        for(int i = 0; i < m; i ++){
            for(int j = 1; j < n; j ++){
                num[j] = num[j - 1] + num[j]; // 到该方格的走法就是到左侧方格的走法 + 上侧方格的走法
            }
        }

        return num[n - 1];
    }
};
```



### 63. 不同路径II <span id="63"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 `1` 和 `0` 来表示。

**示例：**

![不同路径II 图源LeetCode](https://store.southyang.cn/LeetCode/DynamicProgramming/robot1.jpg)

```
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```
![不同路径II 图源LeetCode](https://store.southyang.cn/LeetCode/DynamicProgramming/robot2.jpg)
```
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

**提示：**

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` 为 `0` 或 `1`

**解题思路：**

- 和 62题 不同路径 的思路相同，只不过多了一个有无障碍物的判断

**代码：**

```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m = obstacleGrid.size();
        int n = obstacleGrid[0].size();
        vector<int> num(n, 0);
        num[0] = 1;

        for(int i = 0; i < m; i ++){
            for(int j = 0; j < n; j ++){
                if(obstacleGrid[i][j] == 1){ // 加一个有无障碍物的判断
                    num[j] = 0;
                }
                else{
                    if(j > 0){
                        num[j] = num[j - 1] + num[j]; // 到该方格的走法就是到左侧方格的走法 + 上侧方格的走法
                    }
                }
            }
        }

        return num[n - 1];
    }
};
```



### 64. 最小路径和 <span id="64"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个包含非负整数的 `m x n` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

**示例：**

![最小路径和 图源LeetCode](https://store.southyang.cn/LeetCode/DynamicProgramming/minpath.jpg)

```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

```
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

**提示：**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 100`

**解题思路：**

- 将路径数目变成路径之和，走到对应方格的最短路径是左侧方格最短路径与上侧方格最短路径中的最小值加当前方格距离
- 注意判断第一行和第一列的特殊情况
- 第一行没有上侧，第一列没有左侧

**代码：**

```cpp
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<int> sum(n, 0);
        
        sum[0] = grid[0][0]; // 初始化第一行的路径和
        for(int i = 1; i < n; i ++){
            sum[i] = grid[0][i] + sum[i - 1];
        }

        for(int i = 1; i < m; i ++){ // 从第二行开始扫描
            for(int j = 0; j < n; j ++){
                if(j == 0){ // 如果是第一列，那么没有左值
                    sum[j] = grid[i][j] + sum[j];
                }
                else{
                    sum[j] = grid[i][j] + min(sum[j - 1], sum[j]);
                }
            }
        }

        return sum[n - 1];
    }
};
```



### 91. 解码方法 <span id="91"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

一条包含字母 `A-Z` 的消息通过以下映射进行了 **编码** ：

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

要 **解码** 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，`"11106"` 可以映射为：

- `"AAJF"` ，将消息分组为 `(1 1 10 6)`
- `"KJF"` ，将消息分组为 `(11 10 6)`

注意，消息不能分组为 `(1 11 06)` ，因为 `"06"` 不能映射为 `"F"` ，这是由于 `"6"` 和 `"06"` 在映射中并不等价。

给你一个只含数字的 **非空** 字符串 `s` ，请计算并返回 **解码** 方法的 **总数** 。

题目数据保证答案肯定是一个 **32 位** 的整数。

**示例：**

```
输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
```

```
输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
```

```
输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
```

**提示：**

- `1 <= s.length <= 100`
- `s` 只包含数字，并且可能包含前导零。

**解题思路：**

- 每个数只需要考虑自己和前一个数即可
  - 考虑自己：是否为0
    - 如果是0，只能和前一个数共同组成两位数
    - 如果不是0，可以单独作为译码或者和前一个数组成两位数
  - 考虑前一个数：是否可以和自己组成合法两位数
  - 加一个判断：是否有连续的两位0，如果有直接返回0

**代码：**

```cpp
class Solution {
public:
    int numDecodings(string s) {
        if(s[0] == '0'){
            return 0;
        }
        int length = s.size();

        int a = 0; // 因为只用到了三个数，所以用三个数来代替数组就好
        int b = 1;
        int c = 0;

        for(int i = 1; i <= length; i ++){
            c = 0;
            if(s[i - 1] == '0' && s[i - 2] == '0'){ // 不能解码
                return 0;
            }

            if(s[i - 1] != '0'){ // 当前位不为0，先赋值为b
                c += b;
            }
            if(i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)){ // 可以组成合法两位数
                c += a;
            }

            a = b;
            b = c;
        }

        return c;
    }
};
```



### 95. 不同的二叉搜索树II <span id="95"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数 `n` ，请你生成并返回所有由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的不同 **二叉搜索树** 。可以按 **任意顺序** 返回答案。

**示例：**

<img src="https://store.southyang.cn/LeetCode/DynamicProgramming/uniquebstn3.jpg" alt="不同额二叉搜索树 图源LeetCode" style="zoom:80%;" />

```
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

```
输入：n = 1
输出：[[1]]
```

**提示：**

- `1 <= n <= 8`

**解题思路：**

- [直接看大佬的思路吧](https://leetcode.cn/problems/unique-binary-search-trees-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-2-7/)

- 大佬的题解中给出了四种思路
- 动态规划和 96题 不同的二叉搜索树 是相同的
- 难点在于如何保存之前的搜索树以及计算新的情况
- 通过复刻原有数据来降低时间复杂度的方法很精妙

**代码：**

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* clone(TreeNode* rootNode, int offset){ // 克隆之前的结点，加上根结点的偏置量
        if(rootNode == nullptr){
            return nullptr;
        }

        TreeNode* tempRoot = new TreeNode(rootNode->val + offset);
        tempRoot->left = clone(rootNode->left, offset);
        tempRoot->right = clone(rootNode->right, offset);

        return tempRoot;
    }

    vector<TreeNode*> generateTrees(int n) {
        vector<TreeNode*> dp[n + 1];
        dp[0].push_back(nullptr); // 在dp[0]处压入空
        
        for(int len = 1; len <= n; len++){ // 总长度
            for(int root = 1; root <= len; root++){  // 根结点的值
                int left = root - 1; // 左子树的结点数
                int right = len - root; // 右子树的结点数

                for(auto l: dp[left]){ // 遍历所有可能的左子树
                    for(auto r: dp[right]){ // 遍历所有可能的右子树，这里右子树都存放着之前的数据，要小于真正的右子树数据
                                            // 因此要对原有子树进行复刻，并加上根结点的偏置量
                        TreeNode* tempRoot = new TreeNode(root);

                        tempRoot->left = l;
                        tempRoot->right = clone(r, root);
                        dp[len].push_back(tempRoot); // 在对应位置压入当前生成的二叉搜索树
                    }
                }
            }
        }

        return dp[n];
    }
};
```



### 96. 不同的二叉搜索树 <span id="96"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉搜索树** 有多少种？返回满足题意的二叉搜索树的种数。

**示例：**

<img src="https://store.southyang.cn/LeetCode/DynamicProgramming/uniquebstn3.jpg" alt="不同额二叉搜索树 图源LeetCode" style="zoom:80%;" />

```
输入：n = 3
输出：5
```

```
输入：n = 1
输出：1
```

**提示：**

- `1 <= n <= 19`

**解题思路：**

- 假设 `n` 个节点存在二叉排序树的个数是 `G (n)`，令 `f(i)` 为以 `i `为根的二叉搜索树的个数
- 有 ***G*(*n*) = *f*(1) + *f*(2) + *f*(3) + *f*(4) + ... + *f*(*n*)**
- 当`i`为根结点时，左侧有`i - 1`个结点，右侧有`n - i`个结点
- 因此***f(i) =* *G(i - 1)* * *G(n - i)***
- 可得***G*(*n*) = *G*(0) ∗ *G*(*n*−1) + *G*(1) ∗ (*n*−2) + ... + *G*(*n*−1) ∗ *G*(0)**

**代码：**

```cpp
class Solution {
public:
    int numTrees(int n) {
        vector<int> G(n + 1, 0);

        G[0] = 1;
        G[1] = 1;

        for(int i = 2; i <= n; i ++){
            for(int j = 1; j <= i; j ++){
                G[i] += G[j - 1] * G[i - j];
            }
        }

        return G[n];
    }
};
```



### 120. 三角形最小路径和 <span id="120"></span>

**难度：**font color=#ffa119>中等</font>

**题目：**

给定一个三角形 `triangle` ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。**相邻的结点** 在这里指的是 **下标** 与 **上一层结点下标** 相同或者等于 **上一层结点下标 + 1** 的两个结点。也就是说，如果正位于当前行的下标 `i` ，那么下一步可以移动到下一行的下标 `i` 或 `i + 1` 。

**示例：**

```
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```

```
输入：triangle = [[-10]]
输出：-10
```

**提示：**

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-104 <= triangle[i][j] <= 104`

**进阶：**

- 你可以只使用 `O(n)` 的额外空间（`n` 为三角形的总行数）来解决这个问题吗？

**解题思路：**

- 从上到下遍历
- 每个数可以从上方和左上方到达，因此要比较从哪个方向到达更近
- 特判第一个数和最后一个数
- 最终找到最短路径，返回

**代码：**

```cpp
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();

        vector<int> distance(n, 0);
        distance[0] = triangle[0][0];

        for(int i = 1; i < n; i ++){
            int length = triangle[i].size();

            for(int j = length - 1; j >= 0; j --){
                int temp = triangle[i][j];
                
                if(j == 0){ // 如果是第一个数，只有上方
                    distance[j] = temp + distance[j];
                }
                else if(j == length - 1){ // 如果是最后一个数，只有左上方
                    distance[j] = temp + distance[j - 1];
                }
                else{ // 其他情况有上方和左上方
                    distance[j] = min(temp + distance[j], temp + distance[j - 1]);
                }
            }
        }

        int minNum = INT_MAX;
        for(int i = 0; i < n; i ++){ // 找到最小值
            if(distance[i] < minNum){
                minNum = distance[i];
            }
        }

        return minNum;
    }
};
```



### 152. 乘积最大子数组 <span id="152"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 **32-位** 整数。

**子数组** 是数组的连续子序列。

**示例：**

```
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

```
输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

**提示：**

- `1 <= nums.length <= 2 * 104`
- `-10 <= nums[i] <= 10`
- `nums` 的任何前缀或后缀的乘积都 **保证** 是一个 **32-位** 整数

**解题思路：**

- 对于每个数字，可能为正也可能为负
  - 如果为负，我们希望前一个数的乘积为负，越小越好
  - 如果为正，我们希望前一个数的乘积为正，越大越好
- 因此我们同时保存两个最值，分别为最大值和最小值，每次找出最大的和res比较
- 最后返回res即可

**代码：**

```cpp
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxNum = nums[0], minNum = nums[0], res = nums[0];

        for(int i = 1; i < nums.size(); i ++){
            int ma = maxNum, mi = minNum;

            maxNum = max(ma * nums[i], max(nums[i], mi * nums[i])); // 保存最大值
            minNum = min(mi * nums[i], min(nums[i], ma * nums[i])); // 保存最小值

            if(maxNum > res){ // 比较，选出最大的
                res = maxNum;
            }
            if(minNum > res){
                res = minNum;
            }
        }

        return res;
    }
};
```



### 198. 打家劫舍 <span id="198"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

**示例：**

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

**解题思路：**

- 因为不能连着偷取两家，所以我们要判断是否偷取当前这家
- 偷取当前这家就不能偷取上一家，因此要在上上家的基础上进行加法运算
- 不偷取当前这家就可以从上一家的基础上进行运算
- 最终返回最后一家的值即可

**代码：**

```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        int first = 0, second = nums[0];
        int temp = nums[0];

        for(int i = 1; i < nums.size(); i ++){
            temp = max(first + nums[i], second); // 选当前这家或者不选当前这家，找出一个最大值
            first = second;
            second = temp;
        }

        return temp;
    }
};
```



### 213. 打家劫舍II <span id="213"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 **围成一圈** ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警** 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **在不触动警报装置的情况下** ，今晚能够偷窃到的最高金额。

**示例：**

```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

```
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

```
输入：nums = [1,2,3]
输出：3
```

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

**解题思路：**

- 围成一圈，就要在 198题 打家劫舍 的基础上多判断一个首尾项
- 因此我们用两次遍历来计算
  - 偷第一家
  - 不偷第一家

- 最后返回一个最大值即可

**代码：**

```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        int first = 0, second = 0;
        int res = nums[0];
        int length = nums.size();

        // 偷第一家
        second = nums[0];
        for(int i = 1; i < length - 1; i ++){
            int temp = max(nums[i] + first, second);

            first = second;
            second = temp;
        }
        if(res < second){
            res = second;
        }

        first = 0, second = 0;
        // 不偷第一家
        for(int i = 1; i < length; i ++){
            int temp = max(first + nums[i], second);

            first = second;
            second = temp;
        }
        if(res < second){
            res = second;
        }

        return res;
    }
};
```



### 300. 最长递增子序列 <span id="300"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。

**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组`[0,3,1,6,2,2,7]` 的子序列。

**示例：**

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

```
输入：nums = [0,1,0,3,2,3]
输出：4
```

```
输入：nums = [7,7,7,7,7,7,7]
输出：1
```

**提示：**

- `1 <= nums.length <= 2500`
- `-104 <= nums[i] <= 104`

**进阶：**

- 你能将算法的时间复杂度降低到 `O(n log(n))` 吗?

**解题思路：**

- 每个数都和前面所有的数做比较
- 如果大于前面的某个数，那截止到该数为止，最大递增子序列为`dp[i]`和`dp[j] + 1`的最大值
- 最后遍历`dp`数组，找到最大值

**代码：**

```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int length = nums.size();

        int dp[length];

        for(int i = 0; i < length; i ++){
            dp[i] = 1;
            for(int j = 0; j < i; j ++){
                if(nums[i] > nums[j]){
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
        }

        int res = 0;
        for(int i = 0; i < length; i ++){
            res = max(res, dp[i]);
        }
        return res;
    }
};
```



### 309. 最佳买卖股票时期含冷冻期 <span id="309"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个整数数组`prices`，其中第 `prices[i]` 表示第 `*i*` 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

**注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例：**

```
输入: prices = [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

```
输入: prices = [1]
输出: 0
```

**提示：**

- `1 <= prices.length <= 5000`
- `0 <= prices[i] <= 1000`

**解题思路：**

- 根据买卖股票和冷冻期将状态化为三种
  - 持有一只股票
  - 不持有股票且处于冷冻期
  - 不持有股票且不处于冷冻期
- 三种状态的推导（注意，都是操作后第二天的状态）
  - 持有一只股票：可以是上一天持有，也可以是当天购买，所以是`max(f0, f2 - prices[i])`
  - 不持有股票且处于冷冻期：只能为当天卖出，所以是`f0 + prices[i]`
  - 不持有股票且不处于冷冻期：可以是当天为冷冻期，也可以是当天不为冷冻期，所以是`max(f1, f2)`
- 例如，第i天操作后
  - `i+1`天为持有一只股票，因为第`i`天买入，或者`i-1`天已经买入且第`i`天未卖出
  - `i+1`天处于冷冻期，因为第`i`天卖出
  - `i+1`天不处于冷冻期，因为第`i`天为冷冻期，或者第`i`天不为冷冻期

**代码：**

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int length = prices.size();
        if(length == 0){
            return 0;
        }

        // 参数含义为，在第i天结束后，状态为
        int f0 = -prices[0]; // 持有一只股票
        int f1 = 0; // 不持有股票，处于冷冻期
        int f2 = 0; // 不持有股票，不处于冷冻期

        for(int i = 1; i < length; i ++){
            int now0 = max(f0, f2 - prices[i]);
            int now1 = f0 + prices[i];
            int now2 = max(f1, f2);

            f0 = now0;
            f1 = now1;
            f2 = now2;
        }

        return max(f1, f2);
    }
};
```



### 322. 零钱兑换 <span id="322"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

**示例：**

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

```
输入：coins = [2], amount = 3
输出：-1
```

```
输入：coins = [1], amount = 0
输出：0
```

**提示：**

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 231 - 1`
- `0 <= amount <= 104`

**解题思路：**

- 完全背包问题，无限物品放入背包，找到填满背包的最少物品数量
- 首先遍历背包重量，较大的重量要在较小重量的基础上求出，因此要先求出对应小重量的最少物品数
- 如果背包重量大于等于物品，说明可以放入，与`dp[i - coins[j]] + 1`对比，得到较小的数
- 最后判断是否求出有效解

**代码：**

```cpp
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int length = coins.size();
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;

        for(int i = 1; i <= amount; i++){ // 遍历背包重量
            for(int j = 0; j < length; j++){ // 遍历物品
                if(i >= coins[j]){ // 如果当前背包重量大于等于物品重量
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }

        if(dp[amount] > amount){ // 如果最终结果大于amout，则无有效结果
            return -1;
        }

        return dp[amount];
    }
};
```



### 343. 整数拆分 <span id="343"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个正整数 `n` ，将其拆分为 `k` 个 **正整数** 的和（ `k >= 2` ），并使这些整数的乘积最大化。

返回 *你可以获得的最大乘积* 。

**示例：**

```
输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
```

```
输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
```

**提示：**

- `2 <= n <= 58`

**解题思路：**

- 例如：`i = (i - j) + j`
  - 如果`i- j`不拆分，那么`dp[i]`可以等于`(i - j) * j`
  - 如果`i- j`拆分，那么`dp[i]`等于`dp[i - j] * j`
  - 将上述的两种结果和`dp[i]`本身做比较，得到一个最大值放入`dp[i]`

**代码：**

```cpp
class Solution {
public:
    int integerBreak(int n) {
        vector<int> dp(n + 1, 0);

        for(int i = 2; i <= n; i++){
            for(int j = 1; j < i; j++){
                dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));
            }
        }

        return dp[n];
    }
};
```



### 357. 统计各位数字都不同的数字个数 <span id="357"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数 `n` ，统计并返回各位数字都不同的数字 `x` 的个数，其中 `0 <= x < 10n` 。

**示例：**

```
输入：n = 2
输出：91
解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
```

```
输入：n = 0
输出：1
```

**提示：**

- `0 <= n <= 8`

**解题思路：**

- 基础的排列组合知识
- 对于两位及以上数，第一位有9种放法，第二位9种，第三位8种，以此类推
- 所以`k`位数`(k > 1)`中，每位数据不重复的数共有`9 * (11 - 2) * …… * (11 - k)`
- 加上`k - 1`位数中每位数据不重复的数，则从`0`到`10^k`中，共有`dp[k - 1] + 9 * (11 - 2) * …… * (11 - k)`个每位不重复的数据

**代码：**

```cpp
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        int first = 1, second = 1;

        for(int i = 1; i <= n; i ++){
            second = 0;
            int temp = 9;
            for(int j = 2; j <= i; j++){
                temp *= (11 - j);
            }

            second = temp + first;
            first = second;
        }

        return second;
    }
};
```



### 416. 分割等和子集 <span id="416"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

**示例：**

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

**提示：**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

**解题思路：**

- 先求出所有数据和的一半，作为背包最大容量
- 如果总和为奇数，则一定不成立
- 如果总和为偶数
  - 因为每个数据只能用一次，所以要从后往前遍历背包容量
  - 其次要先遍历物品，如果先遍历背包，则`dp[length]`只会在第一层遍历时被修改，后续无法改变
  - 如果在某一次遍历中，`dp[length]==length`，说明已经找到合适的分割方式，返回`true`

**代码：**

```cpp
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;

        for(int i = 0; i < nums.size(); i ++){
            sum += nums[i];
        }

        if(sum % 2){ // 判断奇偶
            return false;
        }
        int length = sum / 2;
        vector<int> dp(length + 1, 0);

        for(int i = 0; i < nums.size(); i ++){
            for(int j = length; j >= 1; j--){
                if(j >= nums[i]){
                    dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]);
                }
                if(dp[length] == length){
                    return true;
                }
            }
        }

        return false;
    }
};
```



### 714. 买卖股票的最佳时机含手续费 <span id="714"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个整数数组 `prices`，其中 `prices[i]`表示第 `i` 天的股票价格 ；整数 `fee` 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

**注意：**这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

**示例：**

```
输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
输出：8
解释：能够达到的最大利润:  
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
```

```
输入：prices = [1,3,7,5,10,3], fee = 3
输出：6
```

**提示：**

- `1 <= prices.length <= 5 * 104`
- `1 <= prices[i] < 5 * 104`
- `0 <= fee < 5 * 104`

**解题思路：**

* 思路和 **309题 买卖股票最佳时期含冷冻期** 相似
* 划分出两种状态，依然是第`i`天结束后，`i+1`天的状态
  * 持有股票
  * 不持有股票
* 推导
  * 持有股票，可能是第`i-1`天持有，第`i`天继续持有，也可能是第`i`天新买入
  * 不持有股票，可能是第`i-1`天不持有，也可能是第`i`天卖出

**代码：**

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int first = -prices[0]; // 持有
        int second = 0; // 不持有

        for(int i = 1; i < prices.size(); i++){
            int now0 = max(first, second - prices[i]); // 推导下一天的状态
            int now1 = max(first + prices[i] - fee, second);

            first = now0;
            second = now1;
        }

        return second;
    }
};
```



### 838. 推多米诺 <span id="838"></span> 🤦‍♂️🤦‍♂️

**难度：**<font color=#ffa119>中等</font>

**题目：**

`n` 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

给你一个字符串 `dominoes` 表示这一行多米诺骨牌的初始状态，其中：

- `dominoes[i] = 'L'`，表示第 `i` 张多米诺骨牌被推向左侧，
- `dominoes[i] = 'R'`，表示第 `i` 张多米诺骨牌被推向右侧，
- `dominoes[i] = '.'`，表示没有推动第 `i` 张多米诺骨牌。

返回表示最终状态的字符串。

**示例：**

```
输入：dominoes = "RR.L"
输出："RR.L"
解释：第一张多米诺骨牌没有给第二张施加额外的力。
```
![推多米诺 图源LeetCode](https://store.southyang.cn/LeetCode/DynamicProgramming/domino.png)
```
输入：dominoes = ".L.R...LR..L.."
输出："LL.RR.LLRRLL.."
```

**提示：**

- `n == dominoes.length`
- `1 <= n <= 105`
- `dominoes[i]` 为 `'L'`、`'R'` 或 `'.'`

**解题思路：**

- 源于[Ripple大佬](https://leetcode.cn/problems/push-dominoes/solution/xiang-xi-jie-shi-dong-tai-gui-hua-jie-fa-by-ripple/)
- 初始状态为 `-1 | 0 | 1`，通过遍历，手动对状态进行加减操作，模拟时间
- 例如`dp[i + 1] = dp[i] + 1`，在i向右倒的下一秒，i+1向右倒
- 通过手动模拟时间，来判断某个骨牌是否处于受力平衡状态，即`dp[j - 1] + dp[j] == 1`
  - 和为1，是因为先模拟了向右倒，所以比向左倒时间多1
- 如果模拟到受力平衡，则可以停止对于这一轮倒下骨牌的遍历；或者在不满足遍历条件时停止

**代码：**

```cpp
class Solution {
public:
    string pushDominoes(string dominoes) {
        int length = dominoes.size();
        // 初始化dp数组
        vector<int> dp(length, 0);

        // 根据初始状态不同，赋予不同的数值：R => 1; L => -1; . => 0
        for(int i = 0; i < length; i ++){
            if(dominoes[i] == 'R'){
                dp[i] = 1;
            }
            else if(dominoes[i] == 'L'){
                dp[i] = -1;
            }
        }

        // 遍历数组
        for(int i = 0; i < length; i ++){
            // 如果当前位为向右倒且下一位未倒
            if(dp[i] > 0 && i + 1 < length && dp[i + 1] == 0){
                dp[i + 1] = dp[i] + 1;
            }

            // 如果当前位为向左倒且上一位未倒或目前状态为向右但实际状态改变时间 左早于或等于右
            int j = i;
            while(dp[j] < 0 && j - 1 >= 0 && (dp[j - 1] == 0 || dp[j - 1] + dp[j] > 0)){
                // 上一位未倒
                if(dp[j - 1] == 0){
                    dp[j - 1] = dp[j] - 1;
                }
                // 目前状态为向右但实际状态改变时间 左早于或等于右
                else{
                    // 受力平衡,退出循环
                    if(dp[j - 1] + dp[j] == 1){
                        dp[j - 1] = 0;
                        break;
                    }
                    else{
                        dp[j - 1] = dp[j] - 1;
                    }
                }
                j--;
            }
        }

        // 转换为字符串
        string res;
        for(int i = 0; i < length; i ++){ 
            if(dp[i] < 0){
                res += 'L';
            }
            else if(dp[i] == 0){
                res += '.';
            }
            else{
                res += 'R';
            }
        }

        return res;
    }
};
```



### 题号. 题目名称 <span id="题号"></span> 🌟

**难度：**<font color=#5ab726>简单</font> <font color=#ffa119>中等</font> <font color=#ef4743>困难</font>

**题目：**



**示例：**

```

```

```

```

**提示：**



**进阶：**



**解题思路：**



**代码：**

```cpp

```

