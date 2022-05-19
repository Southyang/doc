---
title: Binary Search
date: 2022-05-05 21:12:27
permalink: /pages/ef18b3/
categories: 
  - learningdoc
  - Algorithm
tags: 
  - 
---
# 二分查找

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```cpp
bool check(int x) { // 检查x是否满足某种性质
    /* ... */
} 

// 区间[low, high]被划分成[low, mid]和[mid + 1, high]时使用
int bsearch_1(int low, int high)
{
    while (low < high)
    {
        int mid = low + high >> 1;
        if (check(mid)) high = mid;    // check()判断mid是否满足性质
        else low = mid + 1;
    }
    return low;
}
// 区间[low, high]被划分成[low, mid - 1]和[mid, high]时使用
int bsearch_2(int low, int high)
{
    while (low < high)
    {
        int mid = low + high + 1 >> 1;
        if (check(mid)) low = mid;
        else high = mid - 1;
    }
    return low;
}
```

```cpp
核心思想
二分要对有序序列做，那我们就要找到题目中存在的有序序列，看看能不能用二分来解决题目
另一个关键是对二分后得到数据的逻辑操作
得到二分后数据只是一个操作手段，核心是对所得数据的操作

如果有连续的一组数据都符合二分最终条件
通过判断条件=的位置可以来选定上界或者下界
例如：
    
// 左极限
while (low < high)
{
    int mid = (low + high) >> 1;
    if (nums[mid] <= x) high = mid;    // check()判断mid是否满足性质
    else low = mid + 1;
}
对于数组[1,2,3,4,5,5,5,5,5,6,7,8,9],x=5
最终的low=4，也就是最左边的5，左极限
    
// 右极限
while (low < high)
{
    int mid = (low + high + 1) >> 1;
    if (nums[mid] < x) high = mid - 1;    // check()判断mid是否满足性质
    else low = mid;
}
对于数组[1,2,3,4,5,5,5,5,5,6,7,8,9],x=5
最终的low=8，也就是最右边的5，右极限
```



## 题目

### 69. X的平方根 <span id="69"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给你一个非负整数 `x` ，计算并返回 `x` 的 **算术平方根** 。

由于返回类型是整数，结果只保留 **整数部分** ，小数部分将被 **舍去 。**

**注意：**不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x ** 0.5` 。

**示例：**

```
输入：x = 4
输出：2
```

```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

**提示：**

- `0 <= x <= 231 - 1`

**解题思路：**

- 简单的二分题目，但类型转换卡了很久
- `1ll`是个好东西
- 二分的题目在正常情况下我们都让`high=mid, low=mid+1`
- 在需要求下界的情况下，我们让`high=mid-1, low=mid`

**代码：**

```cpp
class Solution {
public:
    int mySqrt(int x) {
        int low = 0, high = x;
        while(low < high){ // 二分寻找mid，1LL是为了在计算时，把int类型的变量转化为long long
            int mid = low + high + 1ll >> 1;
            if(x / mid < mid){ // 用x/mid来防止溢出，因为返回整数，所以相当于我们要找到下界，那么就让high=mid-1
                high = mid - 1;
            }
            else{
                low = mid;
            }
        }
        return low;
    }
};
```



### 167. 两数之和II - 输入有序数组 <span id="167"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个下标从 **1** 开始的整数数组 `numbers` ，该数组已按 **非递减顺序排列** ，请你从数组中找出满足相加之和等于目标数 `target` 的两个数。如果设这两个数分别是 `numbers[index1]` 和 `numbers[index2]` ，则 `1 <= index1 < index2 <= numbers.length` 。

以长度为 2 的整数数组 `[index1, index2]` 的形式返回这两个整数的下标 `index1` 和 `index2`。

你可以假设每个输入 **只对应唯一的答案** ，而且你 **不可以** 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

**示例：**

```
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
```

```
输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
```

```
输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
```

**提示：**

- `2 <= numbers.length <= 3 * 104`
- `-1000 <= numbers[i] <= 1000`
- `numbers` 按 **非递减顺序** 排列
- `-1000 <= target <= 1000`
- **仅存在一个有效答案**

**解题思路：**

- 寻找两数之和，而且是非递减，刚好满足了二分的条件
- 我们用一次`for`循环来确定一个数的位置，之后使用二分的方式来寻找第二个数
- 正常情况，我们使用`low=mid+1`
- 在结束二分时需要判断一下是否满足条件

**代码：**

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> res;
        int length = numbers.size();
        for(int i = 0; i < length; i ++){ // 先确定一个数，再通过二分确定第二个数
            res.push_back(i + 1);
            
            int low = i + 1, high = length - 1;
            while(low < high){
                int mid = low + high >> 1; // 计算mid
                if(numbers[mid] + numbers[i] >= target){ // 判断条件，正常情况下我们都让low=mid+1
                    high = mid;
                }
                else{
                    low = mid + 1;
                }
            }
            if(numbers[low] + numbers[i] == target){ // 如果满足条件，压入res并返回
                res.push_back(low + 1);
                return res;
            }
            res.pop_back();
        }
        return res;
    }
};
```



### 209. 长度最小的子数组 <span id="209"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**

找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。

**示例：**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

```
输入：target = 4, nums = [1,4,4]
输出：1
```

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

**提示：**

- `1 <= target <= 109`
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`

**解题思路：**

- 看起来难度要比`167题`高，但是当我们先求出前缀和数组后，和`167题`是完全一样的
- 同样是用一次`for`循环来确定第一个数的位置，之后通过二分寻找第二个数
- 正常情况，我们使用`low=mid+1`
- 在二分结束时判断是否满足条件

**代码：**

```cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int length = nums.size();
        int sum[length];
        int min = length + 1;
        sum[0] = nums[0];
        for(int i = 1; i < length; i ++){ // 先求出前缀和数组
            sum[i] = sum[i-1] + nums[i];
        }

        for(int i = 0; i < length; i ++){ // 之后就和167题的思路相同，确定第一个数，二分寻找第二个数的位置
            int low = i, high = length - 1;
            bool flag = false;
            while(low < high){
                int mid = low + high >> 1;
                if(sum[mid] - sum[i] + nums[i] >= target){ // 因为是求上界，所以让low=mid+1
                    flag = true;
                    high = mid;
                }
                else{
                    low = mid + 1;
                }
            }
            if(sum[low] - sum[i] + nums[i] >= target && low - i + 1 < min){ // 判断是否满足条件
                min = low - i + 1;
            }
        }
        if(min == length + 1){ // 判断是否有解
            return 0;
        }
        return min;
    }
};
```



### 222. 完全二叉树的结点个数 <span id="222"></span> 🌟



**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一棵 **完全二叉树** 的根节点 `root` ，求出该树的节点个数。

[完全二叉树](https://baike.baidu.com/item/完全二叉树/7773232?fr=aladdin) 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 `h` 层，则该层包含 `1~ 2h` 个节点。

**示例：**

![完全二叉树的结点个数 图源LeetCode](https://store.southyang.cn/LeetCode/BinarySearch/complete.jpg)

```
输入：root = [1,2,3,4,5,6]
输出：6
```

```
输入：root = []
输出：0
```

```
输入：root = [1]
输出：1
```

**提示：**

- 树中节点的数目范围是`[0, 5 * 104]`
- `0 <= Node.val <= 5 * 104`
- 题目数据保证输入的树是 **完全二叉树**

**进阶：**遍历树来统计节点是一种时间复杂度为 `O(n)` 的简单解决方案。你可以设计一个更快的算法吗？

**解题思路：**

- 先来找我们可以对什么数据做二分
  - `[0, n]`的完全二叉树，数据范围可以做二分
- 那么我们就先确定树的高度，得到可能的数据范围是`[2^level, 2^(level+1)-1]`
- 之后在范围内进行二分，再查找对应的mid是否存在
- 确定mid是否存在是采用位运算的方法，通过&运算来确定mid每一位是0还是1，从而判断出是左子树还是右子树
- 根据查找结果对low和high做修改
- 位运算的逻辑讲解见[LeetCode222题](https://leetcode.cn/problems/count-complete-tree-nodes/solution/wan-quan-er-cha-shu-de-jie-dian-ge-shu-by-leetco-2/)

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
    int level = 0;

    bool exist(int mid, TreeNode* root){ // 通过位运算判断在完全二叉树中存在mid
        int length = 1 << (level - 1);
        TreeNode* temp = root;

        while(temp && length > 0){
            if(!(length & mid)){ // &运算得出mid每一位是0还是1，判断是左子树还是右子树
                temp = temp->left;
            }
            else{
                temp = temp->right;
            }
            length >>= 1;
        }
        return temp != nullptr;
    }

    int countNodes(TreeNode* root) {
        if(!root){
            return 0;
        }
        TreeNode *temp = root;
        while(temp->left){
            level ++;
            temp = temp->left;
        }

        int low = 1 << level, high = (1 << (level + 1)) - 1; // 在可能的上限区间内进行二分
        while(low < high){
            int mid = low + high + 1 >> 1; // 因为是求下界。采用low=mid
            if(exist(mid, root)){ // 如果存在，low=mid
                low = mid;
            }
            else{ // 反之，high=mid-1
                high = mid - 1;
            }
        }

        return low;
    }
};
```



### 287. 寻找重复数 <span id="287"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个包含 `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1` 和 `n`），可知至少存在一个重复的整数。

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

- 在 <a href="./Two Pointers" target="_self" style="color:skyblue;text-decoration:none">**双指针**</a>出现过这道题
- 那么我们现在用二分来解决
- 整体的思想是抽屉原理
  - 在`[1, n]`内，如果小于等于`x`的数有`y`个，且`y＞x`，那么`[1, x]`区间内一定有重复数据
  - 换个思路，九个抽屉放十个苹果一定有一个抽屉要放两个

- 那么我们只需要对`[1, n]`区间做二分，用每次的`mid`在输入数组中搜索，看小于等于`mid`的数有多少个，对`low`和`high`做调整
- 最终得到的`low`即为答案

**代码：**

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int length = nums.size();
        int low = 1, high = length;
        int cnt;
        while(low < high){
            int mid = low + high >> 1;

            cnt = 0;
            for(int i = 0; i < length; i ++){ // 在输入数组中寻找小于等于mid的个数
                if(nums[i] <= mid){
                    cnt ++;
                }
            }

            if(cnt > mid){ // 利用抽屉原理，如果小于等于mid的数字个数大于mid，那么一定有重复数
                high = mid;
            }
            else{
                low = mid + 1;
            }
        }
        return low;
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

- 先判断我们可以对什么数据做二分
  - 严格递增子序列符合二分的条件
- 如何进行二分
  - 每次从nums中拿一个数据，通过二分法判断这个数据应该放在子序列的哪个位置
- 逻辑操作
  - 遍历nums，查找每个数据应该放在当前子序列的哪个位置
  - 如果放在最后，就将子序列的length++
  - 如果放在中间，就替换对应数字
  - 最后输出length
- 替换数字对子序列的长度无影响
  - 在替换当前数字之后，如果后续length++，也是在大于最后一个数字的情况下才可以length++，而与被替换的中间部分数字无关，因此替换与否并不影响最终得到的子序列长度

**代码：**

```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int length = nums.size();
        int len = 0;
        int res[length];

        for(int i = 0; i < length; i ++){ // 遍历nums
            int low = 0, high = len - 1;
            while(low < high){ // 对res做二分，找到nums[i]如果要放入res中，应该放在哪个位置
                int mid = low + high >> 1;
                if(res[mid] >= nums[i]){
                    high = mid;
                }
                else{
                    low = mid + 1;
                }
            }
            if(len == 0){ // 特判一下，如果len为0， 那直接压入
                res[len++] = nums[i];
            }
            else{ // 否则
                if(res[low] < nums[i]){ // 如果res对应位置的数更小，说明res中不存在比nums[i]大的，应该加在res最后
                    res[len++] = nums[i];
                }
                else{ // 否则，替换当前位置
                    res[low] = nums[i];
                }
            }
        }
        return len; // 返回整体长度
    }
};
```



### 349. 两个数组的交集 <span id="349"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给定两个数组 `nums1` 和 `nums2` ，返回 *它们的交集* 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。

**示例：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

**提示：**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**解题思路：**

- 首先确定我们可以对什么数据做二分
  - 排序后的`nums2`
- 遍历`nums1`，将取出的数字在`nums2`中二分，查找有没有相同的数字
- 输出结果唯一，所以`nums1`中相同的字母只用一次

**代码：**

```cpp
class Solution {
public:
    bool exist(vector<int>& nums, int temp){ // 在nums中查找有无temp
        int low = 0, high = nums.size() - 1;

        while(low < high){
            int mid = (low + high) >> 1;
            if(nums[mid] < temp){
                low = mid + 1;
            }
            else{
                high = mid;
            }
        }
        return nums[low] == temp;
    }

    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end()); // 排序
        sort(nums2.begin(), nums2.end());
        vector<int> res;
        int length = nums1.size();
        for(int i = 0; i < length; i ++){ // 对nums1的每一个数在nums2中通过二分查找是否存在
            if(i > 0 && nums1[i] == nums1[i - 1]){
                continue;
            }
            if(exist(nums2, nums1[i])){ // 如果存在就压入
                res.push_back(nums1[i]);
            }
        }
        return res;
    }
};
```



### 350. 两个数组的交集II <span id="350"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给你两个整数数组 `nums1` 和 `nums2` ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

**示例：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

**提示：**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**进阶：**

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 `nums1` 的大小比 `nums2` 小，哪种方法更优？
- 如果 `nums2` 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

**解题思路：**

- 同349题，唯一不同的地方是返回数组可重复
- 那么就有了两种策略
  - 定义状态数组来存储`nums2`中的每个数据是否使用过，定义状态数组的空间复杂度为`O(n)`
  - 使用`erase()`函数来删除`nums2`中使用过的数据，`erase()`的时间复杂度为`O(n)`

- 我选择空间换时间
- 只需要判断`nums`的`low`位置的数值是否是`temp`并且有没有被用过即可
- 其余均与349题相同

**代码：**

```cpp
class Solution {
public:
    bool status[1000]; // 建立一个状态数组，在349题的基础上做一步判断就好了
    bool exist(vector<int>& nums, int temp){ // 在nums中查找有无temp
        int len = nums.size();
        int low = 0, high = nums.size() - 1;

        while(low < high){
            int mid = (low + high) >> 1;
            if(nums[mid] < temp){
                low = mid + 1;
            }
            else{
                high = mid;
            }
        }
        while(low < len && nums[low] == temp){ // 判断nums的low位置的数值是否是temp并且有没有被用过
            if(!status[low]){
                status[low] = true;
                return true;
            }
            else{
                low ++;
            }
        }
        return false;
    }

    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end()); // 排序
        sort(nums2.begin(), nums2.end());
        vector<int> res;
        int length = nums1.size();
        for(int i = 0; i < length; i ++){ // 对nums1的每一个数在nums2中通过二分查找是否存在
            if(exist(nums2, nums1[i])){ // 如果存在就压入
                res.push_back(nums1[i]);
            }
        }
        return res;
    }
};
```



### 475. 供暖器 <span id="475"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

在加热器的加热半径范围内的每个房屋都可以获得供暖。

现在，给出位于一条水平线上的房屋 `houses` 和供暖器 `heaters` 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

**说明**：所有供暖器都遵循你的半径标准，加热的半径也一样。

**示例：**

```
输入: houses = [1,2,3], heaters = [2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
```

```
输入: houses = [1,2,3,4], heaters = [1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
```

```
输入：houses = [1,5], heaters = [2]
输出：3
```

**提示：**

- `1 <= houses.length, heaters.length <= 3 * 104`
- `1 <= houses[i], heaters[i] <= 109`

**解题思路：**

- 首先先找我们可以对什么数据做二分
  - 排序后房子的位置
  - 排序后供暖器的位置
- 那么我们选择对排序后供暖器的位置进行二分
- 找到每个房子在供暖器中的对应位置，得到与供暖器的最近距离
- 返回最大最近距离

**代码：**

```cpp
class Solution {
public:
    int getPosition(int num, vector<int>& heaters){
        int low = 0, high = heaters.size() - 1;

        while(low < high){ // 二分查找最近的房子
            int mid = (low + high) >> 1;
            if(heaters[mid] < num){
                low = mid + 1;
            }
            else{
                high = mid;
            }
        }
        int temp = abs(heaters[low] - num);
        if(low > 0){ // 要注意的是，找到的是大于等于供暖器位置的房子的最小位置，还要和左边的房子进行对比，找到最近距离
            int temp1 = abs(heaters[low - 1] - num);
            return temp < temp1 ? temp : temp1;
        }
        return temp;
    }

    int findRadius(vector<int>& houses, vector<int>& heaters) {
        sort(heaters.begin(), heaters.end()); // 对供暖器位置进行排序
        int length = houses.size();
        int minMax = 0;

        for(int i = 0; i < length; i ++){ // 遍历房子的位置
            int temp = getPosition(houses[i], heaters); // 找到离房子最近的供暖器和房子的距离
            if(temp > minMax){ // 找到最大的最小距离
                minMax = temp;
            }
        }

        return minMax; // 返回
    }
};
```



### 710. 黑名单中的随机数 <span id="710"></span> 🤦‍♂️🤦‍♂️

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定一个整数 `n` 和一个 **无重复** 黑名单整数数组 `blacklist` 。设计一种算法，从 `[0, n - 1]` 范围内的任意整数中选取一个 **未加入** 黑名单 `blacklist` 的整数。任何在上述范围内且不在黑名单 `blacklist` 中的整数都应该有 **同等的可能性** 被返回。

优化你的算法，使它最小化调用语言 **内置** 随机函数的次数。

实现 `Solution` 类:

- `Solution(int n, int[] blacklist)` 初始化整数 `n` 和被加入黑名单 `blacklist` 的整数
- `int pick()` 返回一个范围为 `[0, n - 1]` 且不在黑名单 `blacklist` 中的随机整数

**示例：**

```
输入
["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
[[7, [2, 3, 5]], [], [], [], [], [], [], []]
输出
[null, 0, 4, 1, 6, 1, 0, 4]

解释
Solution solution = new Solution(7, [2, 3, 5]);
solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
                 // 0、1、4和6的返回概率必须相等(即概率为1/4)。
solution.pick(); // 返回 4
solution.pick(); // 返回 1
solution.pick(); // 返回 6
solution.pick(); // 返回 1
solution.pick(); // 返回 0
solution.pick(); // 返回 4
```

**提示：**

- `1 <= n <= 109`
- `0 <= blacklist.length <- min(105, n - 1)`
- `0 <= blacklist[i] < n`
- `blacklist` 中所有值都 **不同**
- `pick` 最多被调用 `2 * 104` 次

**解题思路：**

- [官方题解](https://leetcode.cn/problems/random-pick-with-blacklist/solution/hei-ming-dan-zhong-de-sui-ji-shu-by-leetcode-2/)还是牛啊，我只能想到在黑名单二分找有没有随机数，没想到是找合适的白名单对应位置
- 首先来找我们可以对什么数据做二分
  - 排序后的黑名单

- 那么先生成一个随机数x，代表要返回白名单的第x个数，**注意，从第0个开始**
- 采用`thisBlacklist[mid] - mid`来表示在黑名单的第mid个数之前有多少数在白名单中
  - 相关理解可以类比抽屉原理，反向的抽屉，后面的东西放到了前面的抽屉，那中间的东西就没地方放了，就是白名单
  - 或者可以看我写在下面的 “一个萝卜一个坑” 的解释，不过感觉都不太形象

- 通过二分找到黑名单中最右侧满足`thisBlacklist[low] - low <= x`的数据
  - 在`low`的基础上加`x`，刚好是`>=thisBlacklist[low]`，因为从第`0`个开始，所以再加一，也就是`low+x+1`
  - 为什么是最右侧：如果是最左侧，则可能会紧挨着最左侧的数据也满足这个条件，就会造成返回黑名单中数据的情况
  - 可以自己画一下来理解

- 如果黑名单中最小的数据也大于x，那么直接返回x就好了

**代码：**

```cpp
class Solution {
public:
    int thisN;
    vector<int> thisBlacklist;
    Solution(int n, vector<int>& blacklist) {
        thisN = n;
        thisBlacklist = blacklist;
        sort(thisBlacklist.begin(), thisBlacklist.end()); // 对黑名单进行排序，方便后续二分
    }
    
    int pick() {
        int x = rand() % (thisN - thisBlacklist.size()); // 生成随机数，要返回白名单中的第x个元素

        int low = 0, high = thisBlacklist.size() - 1;
        while(low < high){
            int mid = (low + high + 1) >> 1;
// 类似于，一个萝卜一个坑，如果5号萝卜占据了1号萝卜的坑，那么从1号到4号萝卜都没有坑放了，此时5号萝卜前就有4个萝卜free了，那么换成参数，在thisBlacklist[mid]号萝卜前，free的萝卜就有thisBlacklist[mid] - mid个
            if(thisBlacklist[mid] - mid > x){ // 如果mid位置之前有超过x个萝卜free，就将high移动到mid-1
                high = mid - 1;
            }
            else{ // 否则将low移动到mid，目的是找到最右边的符合条件的值
                low = mid;
            }
        }
        if(thisBlacklist.size() == 0){ // 特判黑名单是否为空
            return x;
        }
        if(thisBlacklist[low] - low > x){ // 如果最终找到的位置，之前还有超过x个萝卜free，那么直接返回x就好了，从0到x的萝卜都free了；即黑名单里最小的数都大于x，那直接返回x，在白名单里前x的数据就是0到x
            return x;
        }
        else{ // 或者有小于等于x个萝卜free，而且当前位置是最右边的符合条件的
            // 有thisBlacklist[low] - low <= x，即 x + low + 1 > thisBlacklist[low]
            // 那说明再往右一个的数一定满足thisBlacklist[low + 1] - (low + 1) > x，即x + low + 1 < thisBlacklist[low + 1]，也就是x + low + 1在黑名单内未出现
            // 可得thisBlacklist[low] < x < thisBlacklist[low + 1]
            // 在low的基础上加x + 1，就是得到了白名单的第x个数据，多加的1是因为从0开始计算
            return x + low + 1;
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(n, blacklist);
 * int param_1 = obj->pick();
 */
```
