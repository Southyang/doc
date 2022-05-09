---
title: Bit Manipulation
date: 2022-05-09 15:45:50
permalink: /pages/d3179f/
---
# 位运算

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```
核心思想

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

- 用二进制数字的`0`和`1`来代表每一个数字有没有被使用过
- 先通过`sum = 1 << length`来得到所有的子集情况，从`0……0`到`1……1`
- 遍历所有可能的二进制表示的子集情况，通过`&`运算判断每一位是`0`还是`1`，决定是否将该数字压入当前子集`temp`中
- 最后将`temp`压入`res`中即可

**代码：**

```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> res;
        int length = nums.size();
        int sum = 1 << length;

        for(int i = 0; i < sum; i ++){
            vector<int> temp;
            int iTemp = i;
            for(int j = length - 1; j >= 0; j --){
                if(!(iTemp & 1)){ // 如果iTemp当前位为0，说明没有使用，可以压入
                    temp.push_back(nums[j]);
                }
                iTemp >>= 1; // 右移1位，判断下一个数有没有使用
            }
            res.push_back(temp); // 压入res
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

