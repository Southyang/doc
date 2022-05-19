---
title: Sorting
date: 2022-05-01 16:09:47
permalink: /pages/af873c/
categories: 
  - learningdoc
  - Algorithm
tags: 
  - 
---
# 排序

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```
核心思想
感觉也写不出什么模板了，浅说一下想法
首先
普通的排序算法因为时间复杂度的原因用的都蛮少的
要熟练使用基数排序，桶排序这些复杂度相对较低的排序算法，快速排序也可以多加学习

其次
灵活使用STL中的各种数据结构，在排序中用处很大
很多时候我们不需要自己排序，可以使用相应的数据结构来帮我们进行简单的排序
例如可以使用 set ，有序集合
           priority_queue<T> ， 优先队列
这些数据结构增删改查的复杂度都很低，可以多加学习和使用
```



## 题目

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
  - 第一次扫描得到`0`数量和`1`的数量
  - 第二次扫描赋值
- 思路二：
  - 考虑进阶，采用一趟扫描。变两次循环为一次的最好方法就是双指针了
  - `left`指针之前全为`0`，`right`指针之后全为`2`
  - 因为是从前往后遍历的，所以在和right指针所指向的数值进行交换时可能会产生 `2` 和 `2` 交换的情况，我们需要使用一个循环来判断能否继续交换，否则可能会产生2被交换到前面而 i 已经遍历到了该数字的后面
  - 和`left`指针的交换不用采用循环来判断是因为 `left` 和`i`都是从左边出发，会出现原地交换之后共同右移的情况，因此`left`指针在遍历开始后就不会指向0了，不用担心 `0` 和 `0` 交换

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



### 147. 对链表进行插入排序<span id="147"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定单个链表的头 `head` ，使用 **插入排序** 对链表进行排序，并返回 *排序后链表的头* 。

**插入排序** 算法的步骤:

1. 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
2. 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
3. 重复直到所有输入数据插入完为止。

下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

对链表进行插入排序。

![147.对链表进行插入排序示例 图源LeetCode](https://store.southyang.cn/LeetCode/Sorting/Insertion-sort-example-300px.gif)

**示例：**

![147.对链表进行插入排序示例 图源LeetCode](https://store.southyang.cn/LeetCode/Sorting/sort1linked-list.jpg)

```
输入: head = [4,2,1,3]
输出: [1,2,3,4]
```
![147.对链表进行插入排序示例 图源LeetCode](https://store.southyang.cn/LeetCode/Sorting/sort2linked-list.jpg)
```
输入: head = [-1,5,3,4,0]
输出: [-1,0,3,4,5]
```

**提示：**

- 列表中的节点数在 `[1, 5000]`范围内
- `-5000 <= Node.val <= 5000`

**解题思路：**

- 首先特判`head`为空或长度为1
- 再定义一个返回链表，不包括头结点，第一个结点为`head`，将`head`的第一个结点从输入链表中取出
- 之后按照插入排序的方式对输入链表进行遍历
  - 每次取出输入链表当前的第一个结点
  - 从返回链表的头部开始扫描，找到第一个大于当前值的结点，插在前面
  - 或者均小于当前值，插在最后
  - 重复
- 返回`res`的`next`

**代码：**

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* insertionSortList(ListNode* head) {
        if(head == nullptr || head->next == nullptr){ // 特判
            return head;
        }
        ListNode* res = new ListNode(0, head); // 定义返回值
        head = head->next; // 后移head 
        res->next->next = nullptr;

        while(head){ // 遍历剩余链表
            ListNode* temp = head; // 将temp从剩余链表中取出
            head = head->next;
            temp->next = nullptr;
            ListNode* tempRes = res;
            while(true){ // 此时res为升序，从头遍历找到第一个比temp大的数，插在前面；或者均小于temp，插在res的最后
                if(tempRes->next == nullptr){
                    tempRes->next = temp;
                    break;
                }
                if(temp->val <= tempRes->next->val){
                    temp->next = tempRes->next;
                    tempRes->next = temp;
                    break;
                }
                tempRes = tempRes->next;
            } 
        }
        return res->next; // 返回
    }
};
```



### 148. 排序链表 <span id="148"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

**示例：**

![147.对链表进行插入排序示例 图源LeetCode](https://store.southyang.cn/LeetCode/Sorting/sort1linked-list.jpg)

```
输入: head = [4,2,1,3]
输出: [1,2,3,4]
```

![147.对链表进行插入排序示例 图源LeetCode](https://store.southyang.cn/LeetCode/Sorting/sort2linked-list.jpg)

```
输入: head = [-1,5,3,4,0]
输出: [-1,0,3,4,5]
```

```
输入：head = []
输出：[]
```

**提示：**

- 链表中节点的数目在范围 `[0, 5 * 104]` 内
- `-105 <= Node.val <= 105`

**进阶：**你可以在 `O(n log n)` 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

**解题思路：**

- 采用归并排序，学习了官方题解的由下至上的归并排序
- 通常我们使用的归并排序都是由上至下，递归进行的。这样的空间复杂度是O(logn)
- 而由下至上的归并排序的空间复杂度是O(1)
- 和由上至下相同，两种方法都是先对最小的子链（长度为1）进行合并，长度为1的子链一定是有序的，进行合并后的子链也一定是有序的，因此可以不断将子链全部合并
- 需要注意的几个地方
  - 子链的长度：从1开始，结束遍历后左移1位，直至大于等于length
  - 子链的开始节点和结束节点：从上一个子链的结束位置开始，当凑够了当前子链长度或遍历完输入链表截止
  - 每次凑出两条子链后进行一次合并，在第二条子链的末尾进行下一条子链的寻找
  - 当前长度的子链全部合并后，改变子链长度，从头开始重新合并
- 合并操作就类比于有序数组的合并

**代码：**

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* merge(ListNode* list1, ListNode* list2){ // 合并两个有序链表
        ListNode* resList = new ListNode(0); // 定义返回链表
        ListNode* temp = resList; // 临时指针
        while(list1 != nullptr && list2 != nullptr){ // 如果两个都不为空
            if(list1->val <= list2->val){ // 判断大小插入到临时指针后
                temp->next = list1;
                list1 = list1->next;
            }
            else{
                temp->next = list2;
                list2 = list2->next;
            }
            temp = temp->next;
        }
        if(list1 != nullptr){ // 有一个为空，将另一个链表全部插入到临时指针后
            temp->next = list1;
        }
        else{
            temp->next = list2;
        }
        return resList->next; // 返回
    }

    ListNode* sortList(ListNode* head) {
        if(head == nullptr || head->next == nullptr){ // 特判
            return head;
        }
        int length = 0; // 链表长度
        ListNode* temp = head;
        while(temp){
            length++;
            temp = temp->next;
        }
        ListNode* res = new ListNode(0, head); // 定义返回值

        for(int i = 1; i < length; i = i << 1){ // 由下至上归并排序，每次的有序链表长度为i，左移一位，保证每次寻找的元素都是排过序的
            ListNode* prev = res; // 定义前置指针
            ListNode* curr = res->next; // 定义当前位置指针

            while(curr != nullptr){ // 如果当前不为空
                ListNode* list1 = curr; // 从当前位置开始定义一个有序链表
                for(int j = 1; j < i && curr->next != nullptr; j++){ // 有序链表长度为i
                    curr = curr->next;
                }
                ListNode* list2 = curr->next; // 定义第二个有序链表
                curr->next = nullptr;
                curr = list2;
                for(int j = 1; j < i && curr != nullptr; j++){ // 因为curr已经做了next操作，所以判断curr而不是next
                    curr = curr->next;
                }

                ListNode* newcurr = nullptr; // 因为要做合并操作，所以要保存当前指针位置
                if(curr != nullptr){
                    newcurr = curr->next;
                    curr->next = nullptr;
                }

                ListNode* mergeList = merge(list1, list2); // 合并得到大的有序链表mergeList

                prev->next = mergeList; // 前置指针的next指向mergeList
                while(prev->next){ // 找到当前的前置指针
                    prev = prev->next;
                }

                curr = newcurr; // 恢复curr
            }
        }
        return res->next; // 返回res，因为第一位为0，所以是next
    }
};
```



### 164. 最大间距 <span id="164"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定一个无序的数组 `nums`，返回 *数组在排序之后，相邻元素之间最大的差值* 。如果数组元素个数小于 2，则返回 `0` 。

您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。

**示例：**

```
输入: nums = [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
```

```
输入: nums = [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
```

**提示：**

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 109`

**解题思路：**

- 桶排序属实是第一次用了，之前早有接触但一直没有用这个方法做过题
- 对数组进行排序，时间要求还在线性，可以选用基数排序和桶排序
- 我们选用桶排序
  - 首先对数组进行划分，通过数组的最大值和最小值，将`[min, max]`区间划分为若干个大小为`(max-min)/(length-1)`的区间，`(max-min)/(length-1)`就是一个桶的大小，记为`bucketSize`
  - 随后我们要计算桶的个数，用区间长度除以桶的大小再加一，`bucketNum=(max-min)/bucketSize + 1`
  - 用得到的桶个数初始化出相应的数据结构，这里选择vector<pair<int, int>>，来存放每个桶的最大值和最小值
  - 因为桶的大小为`(max-min)/(length-1)`，所以在桶内部，数据差值不会超过`(max-min)/(length-1)`，相邻元素的最大差值不会小于`(max-min)/(length-1)`
  - 可以使用反证法来证明，假设最大差值小于`(max-min)/(length-1)`，则有`max-min = nums[n] - nums[i - 1] + nums[n - 1] - nums[i - 2] + …… - num[0] < (length - 1) * (max-min)/(length-1) < max - min`，不等式不成立
  - 因此我们可以直接在相邻桶来寻找最大差值，用后一个桶的最小值减前一个桶的最大值，选出最大的一个即可

**代码：**

```cpp
class Solution {
public:
    int maximumGap(vector<int>& nums) {
        int length = nums.size(); // nums的长度
        if(length < 2){ // 特判
            return 0;
        }

        int Numsmin = *min_element(nums.begin(), nums.end()); // 找到最大值和最小值
        int Numsmax = *max_element(nums.begin(), nums.end());

        int bucketSize = max(1, (Numsmax - Numsmin) / (length - 1)); // 根据最值范围划分出桶的尺寸
        int bucketNum = (Numsmax - Numsmin) / bucketSize + 1;  // 计算出桶的个数

        vector<pair<int, int>> bucket(bucketNum, {-1, -1}); // 记录每个桶的最大值和最小值
        for(int i = 0; i < length; i ++){ // 初始化桶，记录桶内的最大值和最小值
            int id = (nums[i] - Numsmin) / bucketSize;
            if(bucket[id].first == -1){
                bucket[id].first = bucket[id].second = nums[i];
            }
            else{
                bucket[id].first = min(bucket[id].first, nums[i]);
                bucket[id].second = max(bucket[id].second, nums[i]);
            }
        }

        int last = -1; // 记录前一个值
        int maxNum = 0; // 返回值

        for(int i = 0; i < bucketNum; i ++){ // 遍历所有的桶
            if(bucket[i].first == -1){ // 如果桶内没有存放数据，跳过
                continue;
            }
            if(last != -1){ // 如果上一个值不为-1
                maxNum = max(maxNum, bucket[i].first - bucket[last].second);
            }
            
            last = i;
        }

        return maxNum;
    }
};
```



### 179. 最大数 <span id="179"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一组非负整数 `nums`，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

**注意：**输出结果可能非常大，所以你需要返回一个字符串而不是整数。

**示例：**

```
输入：nums = [10,2]
输出："210"
```

```
输入：nums = [3,30,34,5,9]
输出："9534330"
```

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 109`

**解题思路：**

- 记录每个数字相对于其他数字的优先级即可
- 用优先级的排序来代替对每个数的排序
- 可知最大的优先级为`length - 1`，大于除自己之外的所有值
- 最小的优先级为`0`，小于除自己之外的所有值
- 处理优先级之后，按大小从后往前拼成返回值
- 最后判断是否为0

**代码：**

```cpp
#include <string>
class Solution {
public:
    long getNum(string str){ // 定义一个字符串转数字的函数
        long num = 0;
        for(auto &s: str){
        	num = num * 10 + s - '0';
        }
        return num;
    }
    string largestNumber(vector<int>& nums) {
        int length = nums.size();
        string numsStr[length];
        for(int i = 0; i < length; i ++){ // 记录一下每个数字的优先级
            int prior = 0;
            for(int j = 0; j < length; j ++){
                string str1 = to_string(nums[i]); // 转字符串
                string str2 = to_string(nums[j]);
                if(getNum(str1 + str2) > getNum(str2 + str1)){ // 比较两数谁在前面组成的数更大，记录优先级
                    prior ++;
                }
            }
            while(numsStr[prior] != ""){ // 如果当前位置有数据，将优先级++，只有在两数相等的情况下优先级才会相同
                prior++;
            }
            numsStr[prior] = to_string(nums[i]); // 在对应位置存入数据
        }

        string res = "";
        for(int i = length - 1; i >= 0; i --){ // 倒着组成最终返回值
            res += numsStr[i];
        }
        if(res.at(0) == '0'){ // 判断是否为0
            return "0";
        }
        return res;
    }
};
```



### 220. 存在重复元素III <span id="220"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` 和两个整数 `k` 和 `t` 。请你判断是否存在 **两个不同下标** `i` 和 `j`，使得 `abs(nums[i] -``nums[j]) <= t` ，同时又满足 `abs(i - j) <= k` 。

如果存在则返回 `true`，不存在返回 `false`。

**示例：**

```
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
```

```
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
```

```
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
```

**提示：**

- `0 <= nums.length <= 2 * 104`
- `-231 <= nums[i] <= 231 - 1`
- `0 <= k <= 104`
- `0 <= t <= 231 - 1`

**解题思路：**

- 用`set`来帮助我们对数据进行排序
- 通过限制`i`与`k`的大小关系从而使得`set`中最多存放`k`个数据，满足在`set`中的数据都满足`j - i <= k`
- 随后在`set`中找出第一个大于`nums[i] - t`的数据，如果存在，则满足所有条件，返回`true`

**代码：**

```cpp
class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
        int length = nums.size();
        set<int> tempnum; // 用set来存放数据，无重复的有序列表

        for(int i = 0; i < length; i ++){
            auto temp = tempnum.lower_bound(max(nums[i], INT_MIN + t) - t); // 找到大于等于x的第一个数的下标
            if(temp != tempnum.end() && *temp <= min(nums[i], INT_MAX - t) + t){ // 如果在set中存在这样的数据
                return true; // 返回true
            }
            tempnum.insert(nums[i]); // 向set中插入下一个数据
            if(i >= k){ // 如果已经遍历到了第k的数据之后，每次加入后需要弹出最前面的一个数据 nums[i - k]
                tempnum.erase(nums[i - k]);
            }
        }
        return false;
    }
};
```



### 324. 摆动序列II <span id="324"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums`，将它重新排列成 `nums[0] < nums[1] > nums[2] < nums[3]...` 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

**示例：**

```
输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
```

```
输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]
```

**提示：**

- `1 <= nums.length <= 5 * 104`
- `0 <= nums[i] <= 5000`
- 题目数据保证，对于给定的输入 `nums` ，总能产生满足题目要求的结果

**进阶：**你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？

**解题思路：**



**代码：**

```cpp
class Solution {
public:
    void wiggleSort(vector<int>& nums) {
        sort(nums.begin(), nums.end()); // 对nums进行排序
        int length = nums.size(); 
        int temp[length]; // 定义临时空间
        int tempi = 0;
        int i, j, flag;
        if(length % 2 == 0){ // 判断长度奇偶来计算flag值
            flag = length / 2;
        }
        else{
            flag = length / 2 + 1;
        }
        i = flag - 1; // i从中间往前
        j = length - 1; // j从后往中间

        while(j >= flag){ // 在j移动到中间之前
            temp[tempi ++] = nums[i--];
            temp[tempi ++] = nums[j--];
        }
        if(length % 2 == 1){ // 如果为奇数，那么j的可移动长度比i少一个，所以要将i再移动一位
            temp[tempi] = nums[i];
        }
        for(i = 0; i < length; i ++){ // 对nums进行赋值
            nums[i] = temp[i];
        }
    }
};
```



### 767. 重构字符串 <span id="767"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个字符串 `s` ，检查是否能重新排布其中的字母，使得两相邻的字符不同。

返回 *`s` 的任意可能的重新排列。若不可行，返回空字符串 `""`* 。

**示例：**

```
输入: s = "aab"
输出: "aba"
```

```
输入: s = "aaab"
输出: ""
```

**提示：**

- `1 <= s.length <= 500`
- `s` 只包含小写字母

**解题思路：**

- 没做过类似题目的，可以先去做 [1054.距离相等的条形码](https://leetcode.cn/problems/distant-barcodes/)
- 相比于 1054题，这道题只多了一个判断
- 也就是判断最后是否有值，1054明确提示一定有答案，所以不需要特判
- 本题可能会有没有答案的情况，所以我们需要在退出循环后，查看剩余元素的个数，如果大于1，则没有答案
- 其余操作均相同

**代码：**

```cpp
class Solution {
public:
    string reorganizeString(string s) {
        string res;
        unordered_map<char, int> um; // 定义哈希表，存放key和value，value为key的出现次数
        priority_queue<pair<int, char>> pq; // 定义优先队列，默认即为大根堆

        for(auto value : s){ // 生成哈希表
            um[value] ++;
        }
        for(auto value : um){ // 按照哈希表生成大根堆
            pq.push({value.second, value.first});
        }

        while(pq.size() >= 2){ // 每次取出当前剩余数量最多的两个字母，追加到res后面
            auto temp1 = pq.top(); pq.pop();
            auto temp2 = pq.top(); pq.pop();

            res = res + temp1.second + temp2.second;

            if(--temp1.first > 0) pq.push(temp1); // 如果该字母剩余数量不为0，继续压入大根堆
            if(--temp2.first > 0) pq.push(temp2);
        }

        if(!pq.empty()){ // 如果大根堆不为空，那么还剩一个字母可以用
            auto temp = pq.top(); 
            if(temp.first > 1){ // 如果该字母数量大于1，说明无法满足条件，返回""
                return "";
            }
            res = res + temp.second; // 将最后一个字母压入res
        }
        return res; // 返回
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



### 1054. 距离相等的条形码 <span id="1054"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

在一个仓库里，有一排条形码，其中第 `i` 个条形码为 `barcodes[i]`。

请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。

**示例：**

```
输入：barcodes = [1,1,1,2,2,2]
输出：[2,1,2,1,2,1]
```

```
输入：barcodes = [1,1,1,1,2,2,3,3]
输出：[1,3,1,3,2,1,2,1]
```

**提示：**

- `1 <= barcodes.length <= 10000`
- `1 <= barcodes[i] <= 10000`

**解题思路：**

- 第一次接触到大根堆的题目，这个题是学习了[CYHuang1995](https://leetcode.cn/problems/distant-barcodes/solution/gai-ti-jie-fa-he-767zhong-gou-zi-fu-chuan-yi-yang-/)大佬的解法
- 其实是贪心的想法，用大根堆来实现，STL的数据结构比我们手动实现大根堆好太多了
- 先遍历给出的barcodes，得到每个数字出现的次数，这一步通过哈希表来实现
- 记录每个数字出现的次数后，将数字和对应的次数以pair的形式压入大根堆中；pair排序是默认根据first排序的，所以我们要将count放在第一位
- 优先队列的默认即为大根堆，所以堆顶元素即为出现次数最多的数字
- 我们只需要每次从中取出两次堆顶元素，压入返回值中即可
- 随后判断这两个元素的剩余数量是否可以继续压入大根堆
- 最后需要判断一下堆中是否有剩余元素，只会剩一个或不剩

**代码：**

```cpp
class Solution {
public:
    vector<int> rearrangeBarcodes(vector<int>& barcodes) {
        vector<int> res;
        unordered_map<int, int> um; // 定义哈希表，分别对应key和key出现的次数count
        priority_queue<pair<int, int>> pq; // 定义大根堆，分别对应count和key；pair排序是默认根据first排序的，所以我们要将count放在第一位
        for(auto value : barcodes){ // 生成哈希表
            um[value] ++;
        }
        for(auto value : um){ // 根据哈希表生成大根堆
            pq.push({value.second, value.first});
        }
        while(pq.size() >= 2){ // 每次从大根堆中拿出两个当前剩余数量最多的数字，将数字压入res中
            auto temp1 = pq.top(); pq.pop();
            auto temp2 = pq.top(); pq.pop();

            res.push_back(temp1.second);
            res.push_back(temp2.second);
            
            if(--temp1.first > 0){ // 如果当前数字剩余数量依然大于0，继续压入大根堆
                pq.push(temp1);
            }
            if(--temp2.first > 0){
                pq.push(temp2);
            }
        }
        if(!pq.empty()){ // 如果大根堆不为空，将最后一个数字压入res，因为条件为一定可以有返回值，所以不需要特判了
            res.push_back(pq.top().second);
        }
        return res;
    }
};
```
