---
title: Sorting
date: 2022-05-01 16:09:47
permalink: /pages/e1e8af/
---
# 排序

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```cpp
class Solution {
public:
    void functionMain(T s) {
        
    }
};
```

```
核心思想
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

