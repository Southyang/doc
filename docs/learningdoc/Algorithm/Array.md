---
title: Array
date: 2022-04-10 22:22:08
permalink: /pages/1921c2/
---
# 数组

## 类型

**标了🌟的是按照官方题解写的**

### 双指针
- [三数之和](#15)
- [最接近的三数之和](#16)
- [四数之和](#18)
- [接雨水](#42)
- [颜色分类](#75)
- [合并两个有序数组](#88)
- [寻找重复数](#287)
- [煎饼排序](#969)
### 回溯

- [子集](#78) 
- [单词搜索](#79)
- [子集II](#90) 
- [单词接龙II](#126) 
- [组合总数III](#216)  

### 单调栈

- [柱状图中最大的矩形](#84)
- [子数组的最小值之和](#907)



## 题目

### 15. 三数之和 <span id="15"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 *a，b，c ，*使得 *a + b + c =* 0 ？请你找出所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```
```
输入：nums = []
输出：[]
```
```
输入：nums = [0]
输出：[]
```

**提示：**

- `0 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

**解题思路：**

第一个反应就是三重循环（人之常情，暴力解题）

但是根据数据量，数组长度上限是 3000 ，也就意味着三重循环的时间复杂度上限是O(n^3)，为 10 ^ 9，超出了C++ 一秒可执行操作的范围，也就是一定会 WA ，时间超限

根据时间复杂度表我们可以推测，要用O(n ^ 2)的方法来做，将时间复杂度降到10^6即可

先看第一个要求：三元组不重复。不考虑时间复杂度，如果我们直接对原数组使用三重循环求出和为0的三元组，那么接下来就需要通过哈希表去重才能最终得到答案，显然这样操作使得时间和空间复杂度都提高了。

那我们先对原数组进行排序，并且规定三元组(a, b, c) 中，a ≤ b ≤ c，就满足了只有a ≤ b ≤ 且和为0的三元组会被输出，这样就避免了第一种重复； 第二种重复可能会由连续重复的数据造成，我们只需要在遍历数组时，跳过重复数据即可。由此我们解决了三元组的重复问题。

再解决第二个问题：使用两重循环来解题。我们规定了a ≤ b ≤ c，那么在第一重循环时，从nums[0]开始选定a，此时的b要从a的下一个位置开始，同时我们将c直接置于nums数组的末尾，满足了数据大小要求。

在第二重循环中，b从前往后，c从后往前，也就是双指针扫描整个数组，判断三数之和是否满足条件，如果满足条件就压入res中，不满足条件就根据结果，后移b或前移c；终止情况是b指针和c指针指向了同一个位置，第二重循环遍历结束

这样，时间复杂度就被限制到了O(n^2)。代码的注释很详细了hh

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int len = nums.size(); // 获取长度
        vector<vector<int>> res; // 定义返回值
        
        sort(nums.begin(), nums.end()); // 排序

        for(int i = 0 ; i < len ; i ++){
            if(i > 0 && nums[i] == nums[i - 1]){ // 为重复元素
                continue;
            }
            int k = len - 1; // 第三重循环从最右端开始
            int temp = nums[i]; // 当前的求和结果
            for(int j = i + 1 ; j < len ; j ++){
                if(j > i + 1 && nums[j] == nums[j - 1]){ // 为重复元素
                    continue;
                }
                while(j < k && nums[j] + nums[k] + temp > 0){ // k在j的右侧且求和结果大于0
                    k--;
                }
                if(j == k){ // 由于不满足j<k，退出了上面的循环
                    break;
                }
                // 这里不能写else，因为还有小于的情况
                if(nums[j] + nums[k] + temp == 0){ // 由于不满足求和条件，退出上面的循环
                    res.push_back({nums[i], nums[j], nums[k]});
                }
            }
        }

        // 返回结果
        return res;
    }
};
```



### 16. 最接近的三数之和<span id="16"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个长度为 `n` 的整数数组 `nums` 和 一个目标值 `target`。请你从 `nums` 中选出三个整数，使它们的和与 `target` 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

**示例：**

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 
```
```
输入：nums = [0,0,0], target = 1
输出：0
```

**提示：**

- `3 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `-104 <= target <= 104`

**解题思路：**

第一个反应就是，这玩意和15题不是一模一样吗hh

再仔细读题，当前题目要求给出和target最接近的三数之和；15题要求给出和为0的三数之和

那其实思路是一样的：

- 排序＋循环时去除重复数据，避免重复计算同样的三元组
- 三重循环的二三重通过双指针扫描的方式结合在一起，变为两重循环
- 时间复杂度最终变为O(n^2)，over

**代码：**

```cpp
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int len = nums.size(); // 求nums的长度
        sort(nums.begin(), nums.end()); // 排序
        int temp = 1e5; // 定义一个最小差值

        for(int i = 0 ; i < len ; ++i){ // 第一重循环
            if(i > 0 && nums[i] == nums[i - 1]){ // 去除重复数据
                continue;
            }
            int k = len - 1;
            for(int j = i + 1 ; j < len ; j ++){ // 第二重循环
                if(j > i + 1 && nums[j] == nums[j - 1]){ // 去除重复数据
                    continue;
                }
                while(j < k){ // 虚假的三重循环，其实还是两重
                    int temp1 = nums[i] + nums[j] + nums[k] - target; // 计算当前数据差值
                    if(abs(temp1) < abs(temp)){ // 和记录的最小差值比较，绝对值相比
                        temp = temp1;
                    }
                    if(temp1 < 0){ // 如果当前数据差值小于0，跳出当前循环。因为随着k的左移，temp1只会更小
                        break;
                    }
                    if(temp1 == 0){ // 差值为0直接返回
                        return target;
                    }
                    if(temp1 > 0){ // 差值大于0继续左移k
                        --k;
                    }
                }
            }
        }
        return temp + target; // 返回
    }
};
```



### 18. 四数之和<span id="18"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且**不重复**的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：

- 0 <= a, b, c, d < n
- a、b、c 和 d **互不相同**
- nums[a] + nums[b] + nums[c] + nums[d] == target

你可以按 **任意顺序** 返回答案 。

**示例：**

```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```
```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

**提示：**

- `1 <= nums.length <= 200`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`

**解题思路：**

还是同一套解题思路

先来分析题，**不重复**、**互不相同**、数据量为**200**

- 不重复的解决方法：排序，循环是注意去重

- 互不相同的解决办法：abcd指针不能指向同一个位置，否则结束当前循环

- 数据量为200：可以采用三重循环了

  - 找四个数不可避免的要用三重循环了，两重不能找四个数据（对现在的我来说不能，具体能不能没考证过hh）

  - 前两重循环正常走，第三重循环用双指针，从而降四重循环为三重循环，达到降时间复杂度的目的

- 最终为O(n^3)，over

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        int len = nums.size(); // 求数组长度
        sort(nums.begin(), nums.end()); // 排序
        vector<vector<int>> res; // 定义返回值

        for(int a = 0 ; a < len ; ++ a){
            if(a > 0 && nums[a] == nums[a - 1]){ // 去除重复数据
                continue;
            }
            for(int b = a + 1 ; b < len ; ++ b){
                if(b > a + 1 && nums[b] == nums[b - 1]){ // 去除重复数据
                    continue;
                }
                int c = b + 1, d = len - 1;
                while(c < d){
                    double temp = ((double)nums[a] + nums[b] + nums[c] + nums[d]); // 计算当前和
                    if(temp < target){ // 小于target，c指针左移
                        ++ c;
                    }
                    else if(temp > target){ // 大于target，d指针右移
                        -- d;
                    }
                    else{ // 等于target，将当前四元组压入res，c指针左移、d指针右移
                        res.push_back({nums[a], nums[b], nums[c], nums[d]});
                        while(c < d){ // 去除重复数据
                            ++ c;
                            if(nums[c] != nums[c - 1]){ // 如果c不重复，就可以移动d了；否则继续移动c
                                -- d;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return res;
    }
};
```



### 42. 接雨水<span id="42"></span>

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

**示例：**

![接雨水 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/rainwatertrap.png)

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
```
```
输入：height = [4,2,0,3,2,5]
输出：9
```

**提示：**

- `n == height.length`
- `1 <= n <= 2 * 104`
- `0 <= height[i] <= 105`

**解题思路：**

接雨水，第一反应是木桶原理，也就是水不能高过木桶；放在这道题里就是水不能比两侧最高的柱子高

- 思路一：
  - 计算 `vector<int> leftmax` : 左侧最大值
  - 计算 `vector<int> rightmax`：右侧最大值
  - 和当前位置相比较，当前位置只能装不高于**最小最大值**的水
  - 即`count = leftmax[i] - height[i] < rightmax[i] - height[i] ? leftmax[i] - height[i] : rightmax[i] - height[i]`
  - 最后将所有的count相加就是雨水的总数了
  - 这样的空间复杂度是O(n)，稍微有点高
- 思路二：
  - 用指针来代替数组，即定义双指针`left`和`right`
  - 再定义两侧的最大值`leftmax`和`rightmax`
  - 每次只需要更新`leftmax`和`rightmax`，再比较`height[left]`和`height[right]`的大小
  - 根据比较情况加水，左侧加到`leftmax`高度，右侧加到`rightmax`高度，加水后相应移动对应指针
  - 最后输出结果即可，空间复杂度为O(1)

**代码：**

```cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int len = height.size(); // 计算数组长度
        int leftmax = 0, left = 0; // 定义左侧最大值和左侧指针
        int rightmax = 0, right = len - 1; // 定义右侧最大值和右侧指针
        int res = 0; // 定义返回值

        while(left < right){ // 循环结束条件，双指针重叠
            if(height[left] > leftmax){ // 更新左最大
                leftmax = height[left];
            }
            if(height[right] > rightmax){ // 更新右最大
                rightmax = height[right];
            }
            if(height[left] < height[right]){ // 左指针所指向的值更小，向左侧加水
                res += leftmax - height[left];
                left ++;
            }
            else{ // 右指针所指向的值更小，向右侧加水
                res += rightmax - height[right]; 
                right --;
            }
        }

        return res;
    }
};
```



### 75. 颜色分类<span id="75"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/原地算法)**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。

必须在不使用库的sort函数的情况下解决这个问题。

**示例：**

```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```
```
输入：nums = [2,0,1]
输出：[0,1,2]
```

**提示：**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` 为 `0`、`1` 或 `2`

**进阶：**

- 你可以不使用代码库中的排序函数来解决这道题吗？
- 你能想出一个仅使用常数空间的一趟扫描算法吗？

**解题思路：**

- 思路一：
  - 不考虑进阶的一趟扫描算法，扫描两次
  - 第一次扫描得到 0 的数量和 1 的数量
  - 第二次扫描赋值
- 思路二：
  - 考虑进阶，采用一趟扫描。变两次循环为一次的最好方法就是双指针了
  - left指针之前全为0，right指针之后全为2
  - 因为是从前往后遍历的，所以在和right指针所指向的数值进行交换时可能会产生 2 和 2 交换的情况，我们需要使用一个循环来判断能否继续交换，否则可能会产生2被交换到前面而 i 已经遍历到了该数字的后面
  - 和left指针的交换不用采用循环来判断是因为 left 和 i 都是从左边出发，会出现原地交换之后共同右移的情况，因此left指针在遍历开始后就不会指向0了，不用担心 0 和 0 交换

**代码：**

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int len = nums.size(); // 获得数组长度
        int left = 0, right = len - 1; // 定义双指针
        for(int i = 0; i < len; ++ i){ // 开始遍历
            while(i < right && nums[i] == 2){ // 如果i在right之前且指向的数字为2，交换且重复判断
                swap(nums[i], nums[right]);
                -- right;
            }
            if(nums[i] == 0){ // 如果i指向的数字为0，交换
                swap(nums[i], nums[left]);
                ++ left;
            }
        }
    }
};
```



### 78. 子集<span id="78"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例：**

```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```
```
输入：nums = [0]
输出：[[],[0]]
```

**提示：**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- `nums` 中的所有元素 **互不相同**

**解题思路：**

很明显是一道求所有子集的题目，根据数学知识我们可以知道对于长度为n的数组，共有2^n个子集

数据量是10，也就是说我们可以使用 O(*n* * *2^n*)的方法来解题

那我们可以用类似于贪心的一个想法，遍历nums，将当前遍历到的所有数据的子集求出来，即

- 先在返回数组中压入空数组，为遍历0个数据时的所有子集
- 扫描第一个数据，在将空数组赋值给临时数组，在临时数组中压入nums[0]，并将临时数组压入返回数组，得到遍历1个数据时的所有子集
- 以此类推，直至扫描完nums的所有数据，我们得到了2^n个子集
- 时间复杂度为O(*n* * *2^n*)，空间复杂度为*O*(*n*)

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> res; // 定义返回数组

        vector<int> temp; // 定义临时数组
        res.push_back(temp); // 压入一个空数组
        int len = nums.size(); // 计算nums的长度
        for(int i = 0 ; i < len ; ++ i){ // 遍历nums
            int len1 = res.size(); // 得到当前返回数组的长度
            for(int j = 0 ; j < len1 ; ++ j){ // 对返回数组的每一个值进行追加nums[i]后再压入
                temp = res[j];
                temp.push_back(nums[i]);
                res.push_back(temp);
            }
        }
        return res; // 返回
    }
};
```



### 79. 单词搜索<span id="79"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回`true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

**示例：**

![单词搜索 图源LeetCode](https://store.southyang.cn/LeetCode/Backtracking/word2.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```
![单词搜索 图源LeetCode](https://store.southyang.cn/LeetCode/Backtracking/word-1.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
```
![单词搜索 图源LeetCode](https://store.southyang.cn/LeetCode/Backtracking/word3.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
```

**提示：**

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` 和 `word` 仅由大小写英文字母组成

**进阶：**你可以使用搜索剪枝的技术来优化解决方案，使其在 `board` 更大的情况下可以更快解决问题？

**解题思路：**

刷题太少，回溯相关的题目一下子想不出方法，这个题是完全看了官方题解🤦‍♂️

首先，要在board中找到和word相匹配的序列，需要将board完全遍历一次，对于每一个字符都应该尝试作为序列的开头去检查。

因此我们需要求出board的行数和列出，然后对board进行遍历，检查每一个字符是否可以作为序列的首字母

如果当前字母满足了作为首字母的条件，那么沿着当前字母继续搜索：

- 规定四个方向，即上下左右
- 对于当前字母，要将四个方向全部检查一次，看是否满足序列下一个字母的需求
- 满足，沿新字母继续搜索四个方向；不满足，换下一个方向
- 重复上述操作至搜索完毕

那么我们可以定义`check`函数来判断是否可以沿当前字母走下去，重复调用即可

要注意的是：需要定义一个`visited`数组来保存在当前搜索中，`board`中字母是否被使用过；除此之外，满足条件，需要将字母标记为`true`，在进入下一个字母的检查时，要将当前字母的使用情况变为`false`，以便后续遍历使用

时间复杂度为O(*mn* * *3^L*)  （就是DFS）

**代码：**

```cpp
class Solution {
public:
    vector<pair<int, int>> directions{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

    bool check(vector<vector<char>>& board, vector<vector<bool>>& visited, int i, int j, string word, int k){
        if(board[i][j] != word[k]){
            return false;
        }
        if(k == word.length() - 1){
            return true;
        }

        visited[i][j] = true;
        for(const auto& dir: directions){
            int newi = i + dir.first, newj = j + dir.second;
            if(newi >= 0 && newi < board.size() && newj >= 0 && newj < board[0].size()){
                if(!visited[newi][newj]){
                    bool res = check(board, visited, newi, newj, word, k + 1);
                    if(res){
                        return true;
                    }
                }
            }
        }
        visited[i][j] = false;
        return false;
    }
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size();
        int n = board[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n));
        for(int i = 0; i < m; ++ i){
            for(int j = 0; j < n; ++ j){
                bool res = check(board, visited, i, j, word, 0);
                if(res){
                    return true;
                }
            }
        }
        return false;
    }
};
```



### 84. 柱状图中最大的矩形<span id="84"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

**示例：**

![柱状图中最大的矩形 图源LeetCode](https://store.southyang.cn/LeetCode/Array/test.jpg)

```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

![柱状图中最大的矩形 图源LeetCode](https://store.southyang.cn/LeetCode/Array/test-1.jpg)

```
输入： heights = [2,4]
输出： 4
```

**提示：**

- `1 <= heights.length <=105`
- `0 <= heights[i] <= 104`

**解题思路：**

这道题可以使用单调栈的思路来解决，要找到当前柱子两侧的第一个小于自身高度的柱子，因为只有低于自身高度，才无法继续向两侧画矩形。

按照常规思路，对于每个柱子都做一次遍历，找到两侧第一个满足条件的值，但时间复杂度为O(*n^2*)，注定不能通过

使用单调栈的想法：

- 单调递增栈，在遇到比当前栈顶索引对应值大的，就压入；比当前栈顶索引对应值小的，逐个计算对应栈顶可画出的矩形面积
- 这里可以计算矩形面积的原理是：
  - 递增栈，每个值一定比自己左侧的值大，所以画出矩阵的左侧只能止步自己，即为`top`，不能再往左走
  - 只有在遇到比栈顶对应值小的元素才会计算面积，所以右侧止步于当前遍历到的索引 `i`
  - 矩形的高为当前栈顶索引对应的值 `heights[top]`
  - 因此矩形的面积时 *s = (i - top)* * *heights[top]*
- 计算当前栈顶索引可画矩形面积后要将该索引弹出，判断堆栈中的下一个值是否满足大于 `heights[i]`，满足，重复上述操作；不满足，继续遍历`heights`数组
- 要注意的是，如果弹出栈顶后，下一个值不满足计算面积的条件，需要将`top`再次压入栈，并将`heights[i]`赋值给 `heights[top]`。相当于将`heights[i]`放在了`heights[top]`的位置上。其原因是：
  - 被弹出的所有索引对应的值都大于`heights[i]`，如果后续出现`heights[j]`小于`heights[i]`，也一定小于被 `i` 弹出堆栈的所有值，这些值都属于 `i` 对应的矩形的左侧范围
  - 如果没有再次压入`top`，而是以 `i` 为索引，那么只能计算到 `i`，而会忽视被 `i` 弹出的柱子，导致面积减小

**代码：**

```cpp
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st; // 创建堆栈
        heights.push_back(-1); // 在heights数组最后压入一个-1，便于最后清空堆栈，求出所有可能的矩形面积
        int res = 0; // 定义返回值
        int top; // 当前栈顶索引
        for(int i = 0; i < heights.size(); ++ i){
            if(st.empty() || heights[st.top()] <= heights[i]){ // 如果栈空或满足单调递增栈
                st.push(i); // 压入
                continue;
            }
            while(!st.empty() && heights[st.top()] > heights[i]){ // 如果不空且不满足单调递增栈
                top = st.top(); // 取出栈顶索引
                st.pop(); // 弹出栈顶
                int temp = (i - top) * heights[top]; // 计算以当前栈顶索引对应的值可画出的矩形面积
                if(temp > res){ // 更新返回值
                    res = temp;
                }
            }
            st.push(top); // 将i对应的值赋给当前栈顶索引对应的值，以便后续的柱子在推算面积时可以向左延伸至最小值
            heights[top] = heights[i];
        }
        return res;
    }
};
```



### 88. 合并两个有序数组<span id="88"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给你两个按 **非递减顺序** 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示`nums1` 和 `nums2` 中的元素数目。

请你 **合并** `nums2` 到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

**注意：**最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1`的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

**示例：**

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```
```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```
```
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

**提示：**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-109 <= nums1[i], nums2[j] <= 109`

**进阶：**你可以设计实现一个时间复杂度为 `O(m + n)` 的算法解决此问题吗？

**解题思路：**

简单的排序算法题，不用动脑子的方法一下就出来了，把nums1和nums2放一起然后 `sort`

当然我们不会这样做hh

用额外的数组来做一个临时空间的方法时间复杂度也是O(*m + n*)；但是我想用O(1)的空间复杂度

再仔细看题发现，nums1后面都是空的，那我们可以从后面开始遍历，把找小的数放到nums1前面的思路变成找大的数放到nums1后面。

不用担心后面的空间不够用的情况，nums1后面有n个空位，完全放得下nums2；而nums1自己的数据放到后面，也会在前面腾出相应的空位，因此空间一定够用

**代码：**

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m - 1, p2 = n - 1; // 定义双指针
        int now; // 当前应该被放到后面的数
        int right = m + n - 1; // 尾指针
        while(p1 >= 0 || p2 >= 0){ // 判断
            if(p1 == -1){ // nums1遍历完毕
                now = nums2[p2--];
            }
            else if(p2 == -1){ // nums2遍历完毕
                now = nums1[p1--];
            }
            else if(nums1[p1] > nums2[p2]){ // nums1的当前数字更大
                now = nums1[p1--];
            }
            else{
                now = nums2[p2--];
            }
            nums1[right--] = now; // 存入nums1的后面
        }
    }
};
```



### 90. 子集II<span id="90"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。

**示例：**

```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

```
输入：nums = [0]
输出：[[],[0]]
```

**提示：**

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`

**解题思路：**

在[78 子集](#78)的基础上，多两步操作

- 多一步排序，即按顺序排列，方便后续求解；
- 再多一步判断当前遍历字母和前一个是否相同
  - 如果相同，那么只能在添加过前一个字母的子集上追加，否则会造成重复
  - 如果不同，那么要从第一个子集开始追加

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        int len = nums.size(); // 求出nums长度
        sort(nums.begin(), nums.end()); // 对nums排序
        vector<vector<int>> res; // 定义返回值
        vector<int> temp; // 定义临时数组
        
        res.push_back(temp); // 压入空
        int now = 1; // 定义当前可能的开始节点
        
        temp.push_back(nums[0]); 
        res.push_back(temp); // 压入第一个
        
        for(int i = 1; i < len; ++ i){
            if(nums[i] != nums[i - 1]){ // 如果与前一个不同，从res的第一个开始追加子集；否则，从第now个开始追加
                now = 0;
            }
            int len1 = res.size();
            for(int j = now; j < len1; ++ j){
                temp = res[j];
                temp.push_back(nums[i]);
                res.push_back(temp);
            }
            now = len1;
        }
        return res; // 返回
    }
};
```



### 126. 单词接龙II<span id="126"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

按字典 `wordList` 完成从单词 `beginWord` 到单词 `endWord` 转化，一个表示此过程的 **转换序列** 是形式上像 `beginWord -> s1 -> s2 -> ... -> sk` 这样的单词序列，并满足：

- 每对相邻的单词之间仅有单个字母不同。
- 转换过程中的每个单词 `si`（`1 <= i <= k`）必须是字典 `wordList` 中的单词。注意，`beginWord` 不必是字典 `wordList` 中的单词。
- `sk == endWord`

给你两个单词 `beginWord` 和 `endWord` ，以及一个字典 `wordList` 。请你找出并返回所有从`beginWord` 到 `endWord` 的 **最短转换序列** ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 `[beginWord, s1, s2, ..., sk]` 的形式返回。

**示例：**

```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
解释：存在 2 种最短的转换序列：
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
```

```
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：[]
解释：endWord "cog" 不在字典 wordList 中，所以不存在符合要求的转换序列。
```

**提示：**

- `1 <= beginWord.length <= 5`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`、`endWord` 和 `wordList[i]` 由小写英文字母组成
- `beginWord != endWord`
- `wordList` 中的所有单词 **互不相同**

**解题思路：**

回溯法太难了🤦‍♂️又是看了官方题解的一题，而且还看了好久

- 求最短路径，想到广度优先搜索，但题里面没给出图，所以我们需要自己建立一张图来供我们做遍历
- 通过建图，找到了beginword和endword的通路，那么接下来就通过深度优先搜索来找到所有的最短路径
- 注：
  - 对于每个单词的每个字母，都需要从`a`到`z`替换一次，看看nextword是否满足条件，即：
    - 是否在dict中
    - 层数是否满足要求
  - 对于存在dict中的每个nextword，在使用后都需要删除，防止影响后续搜索

（这道题的官方题解太差了，从代码质量到题解可读性都差，后面会再学一下回溯和STL相关知识，自己重新做一次）

**代码：**

```cpp
class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
       vector<vector<string>> res;
       unordered_set<string> dict = {wordList.begin(), wordList.end()}; // 建立哈希表
       if(dict.find(endWord) == dict.end()){ // 如果wordList中没有endword
           return res;
       }
       dict.erase(beginWord); // 在dict中删除beginword,防止后续搜索时影响结果

       // 1. 广度优先遍历图
       unordered_map<string, int> steps = {{beginWord, 0}}; // 记录是第几层，类似于树状
       unordered_map<string, set<string>> from = {{beginWord, {}}}; // 记录一个单词可以从哪些单词扩展得来，或者说可以扩展得到哪些单词
       int step = 0; // beginword在第0层
       bool found = false; // 记录有无路线可以得到endword
       queue<string> q = queue<string>{{beginWord}}; // 建立队列，用于广度优先搜索
       int wordlen = beginWord.length(); // 获得单词长度

       while(!q.empty()){ // 当前队列不为空，则可以继续搜索;搜索顺序为，获取队头，找到队头可以走到的所有单词并放在队尾
            step ++; // 层数++
            int size = q.size(); // 获得当前q的长度
            for(int i = 0; i < size; ++ i){ // 遍历当前队列的每一个元素，对每个元素进行广度搜索
                const string currword = move(q.front()); // std::move是将对象的状态或者所有权从一个对象转移到另一个对象，只是转移，没有内存的搬迁或者内存拷贝
                string nextword = currword; // 先将nextword定义为currword，然后尝试修改每一个字母得到新单词
                q.pop(); // 将队头删除
                for(int j = 0; j < wordlen; ++ j){
                    const char originchar = nextword[j];
                    for(char c = 'a'; c <= 'z' ; ++ c){ // 尝试替换为所有字母
                        nextword[j] = c;
                        
                        if(dict.find(nextword) == dict.end()){ // dict中没有nextword
                            if(steps[nextword] == step){ // 如果在层数上满足条件,就在from里插入,表明可以从currword到nextword; 
                                // 这里加入这个判断的原因是，nextword可能是被从dict中删除的，而不是一直不存在，如果不写这个判断就会导致被删除单词再次被遍历到后无法根据层数做插入逻辑
                                from[nextword].insert(currword);
                            }
                            continue;
                        }
                        dict.erase(nextword); // 从dict中删除nextword,类似于删除beginword一样，防止已遍历过的单词影响后续搜索
                        q.push(nextword); // 进入队列等待从该单词进行广度搜索
                        from[nextword].insert(currword); // 在from里插入,表明可以从currword到nextword
                        steps[nextword] = step; // 记录nextword的层数
                        if(nextword == endWord){
                            found = true;
                        }
                    }
                    nextword[j] = originchar;
                }
            }
            if(found){ // 找到了变成endword的路，退出当前循环，后面的只会更长，没有意义，不需要遍历了
                break;
            }
        }

        // 2. 深度优先遍历图
        if(found){ // 如果有解,从endword向beginword逐步恢复，
            vector<string> Path = {endWord};
            dfs(res, endWord, from, Path); // res:返回值; endword:出发点; from:单词和单词之间的连通情况; Path:整体恢复路线 
        }
        return res;
    }

    void dfs(vector<vector<string>> &res, const string &Node, unordered_map<string, set<string>> &from, vector<string> &path){
        if(from[Node].empty()){ // 如果from[Node]为空，表示已经恢复到了beginword，因为在初始化时，beginword对应的value为空
            res.push_back({path.rbegin(), path.rend()}); // std::rbegin()的返回值是std::end(),反转了一下begin()
            return;
        }
        for(const string &Parent: from[Node]){ // 对每一个可以到达Node的单词做dfs，尝试恢复到beginword
            path.push_back(Parent); // 压入当前结点
            dfs(res, Parent, from, path); // 对当前结点做dfs尝试恢复到beginword
            path.pop_back(); // 弹出Parent,状态恢复
        }
    }
};
```



### 216. 组合总数III<span id="216"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

找出所有相加之和为 `n` 的 `k` 个数的组合，且满足下列条件：

- 只使用数字1到9
- 每个数字 **最多使用一次** 

返回 *所有可能的有效组合的列表* 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

**示例：**

```
输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
没有其他符合的组合了。
```

```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
```

```
输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。
在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
```

**提示：**

- `2 <= k <= 9`
- `1 <= n <= 60`

**解题思路：**

思路一：（第一次做）

- 就相当于求解长度为k的所有子集，哪些的和为n，如果为n就压入res中；不为n就看下一个

- 因此在[78题 子集](#78)的基础上加一个判断子集内数据之和就好了

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<int> nums;
        for(int i = 0; i < 9 ; i++){
            nums.push_back(i + 1);
        }
        vector<vector<int>> temp; // 定义返回数组
        vector<vector<int>> res;
        vector<int> temp1; // 定义临时数组
        temp.push_back(temp1); // 压入一个空数组

        int len = 9; // nums的长度
        for(int i = 0 ; i < len ; ++ i){ // 遍历nums
            int len1 = temp.size(); // 得到当前返回数组的长度
            for(int j = 0 ; j < len1 ; ++ j){ // 对返回数组的每一个值进行追加nums[i]后再压入
                if(temp[j].size() >= k){ // 先排除掉长度大于k的子集
                    continue;
                }
                temp1 = temp[j];
                temp1.push_back(nums[i]);
                temp.push_back(temp1);

                if(temp1.size() != k){ // 排除掉长度不为k的子集
                    continue;
                }

                int sum = 0;
                for(int k = 0; k < temp1.size(); k++){
                    sum += temp1[k];
                }
                if(sum == n){
                    res.push_back(temp1);
                }
            }
        }
        return res;
    }
};
```



### 287. 寻找重复数<span id="287"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个包含 `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1` 和`n`），可知至少存在一个重复的整数。

假设 `nums` 只有 **一个重复的整数** ，返回 **这个重复的数** 。

你设计的解决方案必须 **不修改** 数组 `nums` 且只用常量级 `O(1)` 的额外空间。

**示例：**

```
输入：nums = [1,3,4,2,2]
输出：2
```

```
输入：nums = [3,1,3,4,2]
输出：3
```

**提示：**

- `1 <= n <= 105`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- `nums` 中 **只有一个整数** 出现 **两次或多次** ，其余整数均只出现 **一次**

**进阶：**

- 如何证明 `nums` 中至少存在一个重复的数字?
- 你可以设计一个线性级时间复杂度 `O(n)` 的解决方案吗？

**解题思路：**

- 快慢指针，Floyd判环算法
- 细说步数：
  - 慢指针和快指针一起出发，设环的周长为`c`步
  - 慢指针进入环中需要走`m`步，即从起点到入口的距离为`m`步
  - 慢指针与快指针相遇时走了`n`步，那么快指针就走了`2n`步（因为快指针一次走两步）
  - 同时我们知道，快指针多走的`n`步均在环内，因此`n % c == 0`
  - 那么，慢指针想要回到环的入口，就需要再走`m`步，让它在环内的步数凑够 `c`的整数倍，即`n`步
  - 由于我们不知道`m`究竟是多少，但已知从起点到入口也为`m`步
  - 因此，可以让第三个步长为`1`的指针，从起点出发，和慢指针一起移动（此时慢指针在相遇处）
  - 当两个指针相遇的时候，即为环的入口


**代码：**

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int fast = nums[nums[0]], slow = nums[0]; // 定义快慢指针
        int find = 0;
        while(fast != slow){ // Floyd判环
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        while(slow != find){ // 寻找环的入口
            slow = nums[slow];
            find = nums[find];
        }
        return find;
    }
};
```



### 907. 子数组的最小值之和<span id="907"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个整数数组 `arr`，找到 `min(b)` 的总和，其中 `b` 的范围为 `arr` 的每个（连续）子数组。

由于答案可能很大，因此 **返回答案模 `10^9 + 7`** 。

**示例：**

```
输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
```

```
输入：arr = [11,81,94,43,3]
输出：444
```

**提示：**

- `1 <= arr.length <= 3 * 104`
- `1 <= arr[i] <= 3 * 104`

**解题思路：**

- 计算同类型子数组的最小值之和（即最小值相同的子数组）

  - 每个数都有自己的影响范围，我们要做的就是求出影响范围

  - 从元素`i`本身向左向右扩张，如果遇到了一个比`i`还小的元素，那么扩张停止

  - 在这个范围内，包含了该元素`i`的所有子数组，最小值均为`i`

  - 我们将左极限记为`left`，右极限记为`right`，当前元素索引为`i`

  - 可知以该元素为最小值的子数组的个数为：`(i - left) * (right - i)`

  - 只需要再乘上元素大小，就是这些子数组最小值的和

- 因此，我们需要做的就是求解所有元素的`left`和`right`，即单调栈（左最小和右最小）

- 要注意的是需要判断扩张条件，是小于还是小于等于，做到不重复不遗漏
  - 即一边为小于，另一边为小于等于

**代码：**

```cpp
class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
        int len = arr.size(); // 数组长度
        int left[len], right[len], temp[len]; // 定义数组
        int tt = -1, res = 0;
        for(int i = 0; i < len; ++i){ // 单调栈，寻找左边第一个小于等于自己的数
            while(tt != -1 && arr[temp[tt]] > arr[i]){
                tt --;
            }
            if(tt != -1){
                left[i] = temp[tt];
            }
            else{
                left[i] = -1;
            }
            temp[++ tt] = i;
        }

        tt = -1;
        for(int i = len - 1; i >= 0; --i){ // 单调栈，寻找右边第一个小于自己的数
            while(tt != -1 && arr[temp[tt]] >= arr[i]){
                tt --;
            }
            if(tt != -1){
                right[i] = temp[tt];
            }
            else{
                right[i] = len;
            }
            temp[++ tt] = i;
        }

        for(int i = 0; i < len; ++ i){ // 根据每个数的覆盖范围求解和
            res = (res + (long)(i - left[i]) * (right[i] - i) * arr[i]) % 1000000007;
        }

        return res;
    }
};
```



### 969. 煎饼排序<span id="969"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `arr` ，请使用 **煎饼翻转** 完成对数组的排序。

一次煎饼翻转的执行过程如下：

- 选择一个整数 `k` ，`1 <= k <= arr.length`
- 反转子数组 `arr[0...k-1]`（**下标从 0 开始**）

例如，`arr = [3,2,1,4]` ，选择 `k = 3` 进行一次煎饼翻转，反转子数组 `[3,2,1]` ，得到 `arr = [1,2,3,4]` 。

以数组形式返回能使 `arr` 有序的煎饼翻转操作所对应的 `k` 值序列。任何将数组排序且翻转次数在 `10 * arr.length` 范围内的有效答案都将被判断为正确。

**示例：**

```
输入：[3,2,4,1]
输出：[4,2,4,3]
解释：
我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
初始状态 arr = [3, 2, 4, 1]
第一次翻转后（k = 4）：arr = [1, 4, 2, 3]
第二次翻转后（k = 2）：arr = [4, 1, 2, 3]
第三次翻转后（k = 4）：arr = [3, 2, 1, 4]
第四次翻转后（k = 3）：arr = [1, 2, 3, 4]，此时已完成排序。 
```

```
输入：[1,2,3]
输出：[]
解释：
输入已经排序，因此不需要翻转任何内容。
请注意，其他可能的答案，如 [3，3] ，也将被判断为正确。
```

**提示：**

- `1 <= arr.length <= 100`
- `1 <= arr[i] <= arr.length`
- `arr` 中的所有整数互不相同（即，`arr` 是从 `1` 到 `arr.length` 整数的一个排列）

**解题思路：**

冒泡排序的思想：每次将最大的数放到后面，用O(n^2)的时间将数组排列好

那么我们来考虑如何将当前最大的数放到后面：

- 对于反转数组来说，每次反转后，`k`位置的数交换到了第一个位置，第一个位置的数到了位置`k`
- 因此我们只需要两步
  - 将乱序子数组的最大数交换到第一个位置
  - 将最大数交换到乱序子数组的最后一个位置
- 因此只需要交换`2n`次就可以满足题目要求，且翻转次数在 `10 * arr.length` 范围内

**代码：**

```cpp
class Solution {
public:
    vector<int> pancakeSort(vector<int>& arr) {
        int len = arr.size(); // 数组长度
        vector<int> res; // 定义返回数组
        for(int i = 0; i < len - 1; i++){ // 遍历整个长度
            int j;
            for(j = 0; arr[j] != len - i; j ++); // 在全排列数组中寻找当前最大的数 len - i
            reverse(arr.begin(), arr.begin() + j + 1); // 反转前 j 个数，reverse为前闭后开，所以要 + 1
            res.push_back(j + 1); // 将 k = j + 1 压入res
            reverse(arr.begin(), arr.begin() + len - i); // 反转前 len - i 个数，len - i已经是索引+1了，不需要                                                          // 再加一
            res.push_back(len - i); // 将 len - i 压入res
        }
        return res;
    }
};
```

