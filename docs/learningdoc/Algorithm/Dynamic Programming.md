---
title: Dynamic Programming
date: 2022-05-24 23:06:47
permalink: /pages/deb8a2/
---
# 动态规划

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```
核心思想

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



**代码：**

```cpp

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



**代码：**

```cpp

```



### 64. 最小路径和 <span id="64"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个包含非负整数的 `*m* x *n*` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

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



**代码：**

```cpp

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

