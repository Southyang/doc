---
title: Bit Manipulation
date: 2022-05-09 15:45:50
permalink: /pages/2e730d/
---
# 位运算

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**

只能说位运算的题做的太少了，大多数都没思路



## 自己写个模板

```cpp
核心思想
位运算大多时候是帮助我们减少计算量的，纯粹靠位运算做的题目比较少见

写一些位运算小技巧
// 字符串转换
大小写转换：c ^= 32;
大写转小写：c |= 32;
小写转大写：c &= -33;

// 奇数偶数判断
if((m & 1) == 1){
    // 相应逻辑操作
}

// 交换两个整数的值
int a = 3, b = 4;
a = a^b;
b = a^b;        // b = 3
a = a^b;        // a = 4

// 取整数的绝对值
m = (m ^ (m >> 31)) - (m >> 31);

// 获得二进制码右边第一个1
num = m & (~m);

// 从最低位遍历二进制码中所有的1
while (m != 0){
    p = m & -m
    m ^= p
    // 相应逻辑操作
}

// 将最低位的1变成0
m = m & (m - 1);

// 异或技巧
a ^ b = c  => a ^ c = b  => b ^ c = a (交换律)
a ^ b ^ c = a ^ (b ^ c) = (a ^ b）^ c (结合律)
```



## 题目

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



### 136. 只出现一次的数字 <span id="136"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例：**

```
输入: [2,2,1]
输出: 1
```

```
输入: [4,1,2,1,2]
输出: 4
```

**解题思路：**

- 两个相同的数字异或结果为0
- 只需要从头到尾异或一次，最终得到的数就是出现一次的数

**代码：**

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int res = 0;
        for(int i = 0; i < nums.size(); i ++){
            res = res ^ nums[i]; // 同或
        }
        return res;
    }
};
```



### 137. 只出现一次的数字II <span id="137"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，除某个元素仅出现 **一次** 外，其余每个元素都恰出现 **三次 。**请你找出并返回那个只出现了一次的元素。

**示例：**

```
输入：nums = [2,2,3,2]
输出：3
```

```
输入：nums = [0,1,0,1,0,1,99]
输出：99
```

**提示：**

- `1 <= nums.length <= 3 * 104`
- `-231 <= nums[i] <= 231 - 1`
- `nums` 中，除某个元素仅出现 **一次** 外，其余每个元素都恰出现 **三次**

**进阶：**你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**解题思路：**

- 这题看了官方解法，本来想了模仿136题，寻找一个可以让三个相同数据运算为0的运算方法，没想出来
- 统计二进制的数据，每一位出现的次数，对最终结果%3，重复了三次的数据都被除去，只剩下出现一次的数据
- 32位数，所以循环32次，统计每一位的出现次数

**代码：**

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int res = 0;
        for(int i = 0; i < 32; i ++){
            int number = 0;
            for(int num: nums){
                if((num >> i) & 1 == 1){ // 统计每一位出现1的次数
                    number++;
                }
            }
            res = res | ((number % 3) << i); // 因为是出现了3次，所以 % 3
        }
        return res;
    }
};
```



### 190. 颠倒二进制位 <span id="190"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

颠倒给定的 32 位无符号整数的二进制位。

**提示：**

- 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
- 在 Java 中，编译器使用[二进制补码](https://baike.baidu.com/item/二进制补码/5295284)记法来表示有符号整数。因此，在 **示例 2** 中，输入表示有符号整数 `-3`，输出表示有符号整数 `-1073741825`。

**示例：**

```
输入：n = 00000010100101000001111010011100
输出：964176192 (00111001011110000010100101000000)
解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
```

```
输入：n = 11111111111111111111111111111101
输出：3221225471 (10111111111111111111111111111111)
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
```

**提示：**

- 输入是一个长度为 `32` 的二进制字符串

**进阶**: 如果多次调用这个函数，你将如何优化你的算法？

**解题思路：**

- 32位数据，遍历32次，从后往前取出每一位，对res做移位操作并加上取出来的数据

**代码：**

```cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t res = 0;
        for(int i = 0; i < 32; i ++){
            int temp = (n >> i) & 1; // 取出当前最后一个数
            res = (res << 1) | temp; // 将res左移一位后，加在res后
        }
        return res;
    }
};
```



### 201. 数字范围按位与 <span id="201"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你两个整数 `left` 和 `right` ，表示区间 `[left, right]` ，返回此区间内所有数字 **按位与** 的结果（包含 `left` 、`right` 端点）。

**示例：**

```
输入：left = 5, right = 7
输出：4
```

```
输入：left = 0, right = 0
输出：0
```

```
输入：left = 1, right = 2147483647
输出：0
```

**提示：**

- `0 <= left <= right <= 231 - 1`

**解题思路：**

- 解法二看了官方提供的**[Brian Kernighan 算法](https://leetcode.cn/problems/bitwise-and-of-numbers-range/solution/shu-zi-fan-wei-an-wei-yu-by-leetcode-solution/)**
- 核心思想就是求出公共前缀，因为后面的既有`1`也有`0`，按位与的结果全是`0`，只需要移位就好了

**代码：**

```cpp
class Solution {
public:
    int rangeBitwiseAnd(int left, int right) {
        int num = 0;
        while(left < right){ // 寻找相同的公共前缀
            left = left >> 1;
            right = right >> 1;
            num ++;
        }
        return left << num;
    }
};

// 解法二 Brian Kernighan 算法
class Solution {
public:
    int rangeBitwiseAnd(int left, int right) {
        while(left < right){ // 不断抹去right最右边的1，直至小于等于left，类似于找到了公共前缀，只不过后面不需要再移位计算
            right = right & (right - 1);
        }
        return right;
    }
};
```



### 260. 只出现一次的数字III <span id="260"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 **任意顺序** 返回答案。

**示例：**

```
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```

```
输入：nums = [-1,0]
输出：[-1,0]
```

```
输入：nums = [0,1]
输出：[1,0]
```

**提示：**

- `2 <= nums.length <= 3 * 104`
- `-231 <= nums[i] <= 231 - 1`
- 除两个只出现一次的整数外，`nums` 中的其他数字都出现两次

**进阶：**你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

**解题思路：**

- 看了[mbinary](https://leetcode.cn/problems/single-number-iii/comments/)大佬的评论思路
- 通过第一次遍历所得到的异或值的某个非零位，将数组分成两部分
- 对每一部分求异或值，结果就是两个只出现一次的数

**代码：**

```cpp
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        int temp = 0;
        int length = nums.size();
        for(int i = 0; i < length; i ++){ // 先得到两个数的异或值
            temp = temp ^ nums[i];
        }
        int j = 0;
        while(true){ // 找到第一个非零位
            if(!(temp & (1 << j))){
                j ++;
            }
            else{
                break;
            }
        }

        vector<int> res(2, 0); // 定义返回值
        for(int i = 0; i < length; i ++){ // 继续遍历
            if((nums[i] >> j) & 1){ // 根据非零位将数组分成两份，求出每一份的异或值，即为两个只出现一次的数
                res[0] = res[0] ^ nums[i];
            }
            else{
                res[1] = res[1] ^ nums[i];
            }
        }

        return res;
    }
};
```



### 421. 数组中两个数的最大异或值 <span id="421"></span> 🤦‍♂️🤦‍♂️

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` ，返回 `nums[i] XOR nums[j]` 的最大运算结果，其中 `0 ≤ i ≤ j < n` 。

**示例：**

```
输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
```

```
输入：nums = [0]
输出：0
```

```
输入：nums = [2,4]
输出：6
```

```
输入：nums = [8,10,2]
输出：10
```

```
输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127
```

**提示：**

- `1 <= nums.length <= 2 * 104`
- `0 <= nums[i] <= 231 - 1`

**进阶：**你可以在 `O(n)` 的时间解决这个问题吗？

**解题思路：**

- 又是前缀树，还带了位运算，完全没学好，这道题完全学习了[algsCG](https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array/solution/ctriemo-ban-ti-song-ban-zi-by-xiaoneng-tegw/)大佬的题解
- 通过建立前缀树，将数组中的每一个元素以32位二进制数的形式保存
- 在寻找最大异或值的过程中，从前缀树找，每次找于x当前位相反的子树
  - 如果相反的子树存在，就找相反的
  - 如果不存在，就沿着相同的走
  - 重复上述操作直至找完32位
- 关于是否能走通的问题
  - 沿着前缀树一直走，每一个分支一定都是32位二进制数，所以不管是相反方向还是相同方向，一定都可以走完32位

**代码：**

```cpp
class Trie{
private:
    Trie* next[2] = {nullptr};
public:
    Trie(){}

    void insert(int x){ // 向前缀树中插入x
        Trie* root = this;

        for(int i = 30; i >= 0; i --){
            int u = x >> i & 1;
            if(!root->next[u]){
                root->next[u] = new Trie();
            }
            root = root->next[u];
        }
    }

    int search(int x){ // 在前缀树中寻找x的最大异或值并返回
        Trie* root = this;
        int res = 0;
        for(int i = 30; i >= 0; i --){
            int u = x >> i & 1;
            if(root->next[!u]){
                root = root->next[!u];
                res = (res << 1) + !u;
            }
            else{
                root = root->next[u];
                res = (res << 1) + u;
            }
        }

        res = res ^ x;
        return res;
    }
};
class Solution {
public:
    int findMaximumXOR(vector<int>& nums) {
        Trie* root = new Trie();
        for(int num: nums){
            root->insert(num);
        }

        int res = 0;
        for(int num: nums){
            res = max(res, root->search(num));
        }
        return res;
    }
};
```



### 693. 交替位二进制数 <span id="693"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

**示例：**

```
输入：n = 5
输出：true
解释：5 的二进制表示是：101
```

```
输入：n = 7
输出：false
解释：7 的二进制表示是：111.
```

```
输入：n = 11
输出：false
解释：11 的二进制表示是：1011.
```

**提示：**

- `1 <= n <= 231 - 1`

**解题思路：**

- 不断右移记录当前最低位，和上一位做比较
- 相同返回false
- 不同继续右移

**代码：**

```cpp
class Solution {
public:
    bool hasAlternatingBits(int n) {
        for(int i = 1; i < 31; i ++){ // 32位二进制数
            if(n >> i){ // 如果右移后不为0
                if(!((n >> i) & 1) ^ ((n >> i - 1) & 1)){ // 判断当前位和上一位是否相等，若相等返回false
                    return false;
                }
            }
            else{
                break;
            }
        }
        return true;
    }
};
```



### 784. 字母大小写全排列 <span id="784"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个字符串 `s` ，通过将字符串 `s` 中的每个字母转变大小写，我们可以获得一个新的字符串。

返回 *所有可能得到的字符串集合* 。以 **任意顺序** 返回输出。

**示例：**

```
输入：s = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]
```

```
输入: s = "3z4"
输出: ["3z4","3Z4"]
```

**提示：**

- `1 <= s.length <= 12`
- `s` 由小写英文字母、大写英文字母和数字组成

**解题思路：**

- DFS ＋ 位运算
- 位运算在这道题中的作用就是来简化运算，字母转换的小技巧
- 字母大小写转换：`ch^=32;`
- 字母变为小写：`ch|=32;`
- 字母变大写：`ch&=-33;`
- DFS的简单使用，遍历每个字符的所有情况后，进入下一个字母的遍历

**代码：**

```cpp
class Solution {
public:
    vector<string> res;

    void dfs(string s, int length, int position, string temp){
        if(position == length){
            res.push_back(temp);
            return;
        }
        char c = s.at(position);
        if(isdigit(c) != 0){ // 是数字
            dfs(s, length, position + 1, temp + c); // 加入数字c
        }
        else{
            dfs(s, length, position + 1, temp + c); // 加入原来的c
            c ^= 32; // 大小写转换
            dfs(s, length, position + 1, temp + c); // 加入大小写转换后的c
        }
    }

    vector<string> letterCasePermutation(string s) {
        int length = s.size();
        dfs(s, length, 0, "");
        return res;
    }
};
```
