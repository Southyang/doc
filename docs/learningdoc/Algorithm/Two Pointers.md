---
title: Two Pointers
date: 2022-04-25 00:56:17
permalink: /pages/16eaa8/
categories: 
  - learningdoc
  - Algorithm
tags: 
  - 
---
# 双指针

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```cpp
class Solution {
public:
    void functionMain(T s) {
        int left = 0, right = 0;
        while(right < s.size()){
            // 对right指针对应位置做相应的逻辑操作
            while(check()){ // 判断right指针是否移动到了边界，如果是，就移动left指针
                // 对left指针做相应逻辑操作
                left ++；
            }
            // 做一些其他的逻辑判断，比如当前区间长度是否满足要求
            right++;
        }
    }
};
```

```
核心思想
right指针不断往右移，移动到不能往右移动为止(具体条件根据题目而定)。
当right指针到达当前可到达的最远边界后，开始挪动left指针，释放窗口左边界。
过程中根据题意做相关逻辑操作
```



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



### 86. 分隔链表<span id="86"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个链表的头节点 `head` 和一个特定值 `x` ，请你对链表进行分隔，使得所有 **小于** `x` 的节点都出现在 **大于或等于** `x` 的节点之前。

**示例：**

![分隔链表 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/partition.jpg)

```
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
```

```
输入：head = [2,1], x = 2
输出：[1,2]
```

**提示：**

- 链表中节点的数目在范围 `[0, 200]` 内
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`

**解题思路：**

- 结合题意并观察给出来的示例可以发现，其实是类似于稳定排序算法的第一趟排序：
  - 对于大于等于`x`和小于`x`的元素，彼此相对位置不发生变化
- 因此我们可以从链表头部开始遍历，如果遇到小于`x`的元素，就拿出来插入新链表尾部；如果大于等于`x`就不用管
  - 那么对于原链表，除了链表头，其余均为大于等于`x`的元素且相对位置保持不变
  - 对于新链表，均为小于`x`的元素且相对位置保持不变
- 最后判断链表头部的元素与`x`的大小关系决定将新链表插到哪个位置即可

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
    ListNode* partition(ListNode* head, int x) {
        if(head == NULL){
            return NULL;
        }
        ListNode* pointer = head;
        ListNode* temphead = new ListNode(); // 临时头结点
        ListNode* flag = temphead;
        while(pointer->next != NULL){ // 将小于x的结点拿出来，按原顺序组成一个新链表
            ListNode* temp = pointer->next;
            if(temp->val < x){ // 小于x，删除原结点，放入新链表的末尾
                pointer->next = temp->next;
                flag->next = temp;
                flag = temp;
            }
            else{ // 大于x，判断下一个位置
                pointer = pointer->next;
            }
            if(pointer == NULL){ // 如果pointer为空，退出
                break;
            }
        }

        temphead = temphead->next; // 因为临时头结点不存原链表的内容，所以指向next
        if(temphead != NULL){ // 如果新链表不为空，插入，相应地对head做位置调整
            if(head->val >= x){ // 判断head元素和x的大小关系，如果大于等于，就插在head前
                flag->next = head;
                head = temphead;
            }
            else{ // 小于，就插在head后
                flag->next = head->next;
                head->next = temphead;
            }   
        }

        return head; // 返回head
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



### 141. 环形链表<span id="141"></span>

**难度：**<font color=#5ab726>简单</font>

**题目：**

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

*如果链表中存在环* ，则返回 `true` 。 否则，返回 `false` 。

**示例：**

![环形链表示例1 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![环形链表示例2 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![环形链表示例3 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**提示：**

- 链表中节点的数目范围是 `[0, 104]`
- `-105 <= Node.val <= 105`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

**进阶：**你能用 `O(1)`（即，常量）内存解决此问题吗？

**解题思路：**

- 判断有无环，只需要用快慢指针，快指针一次走两步，慢指针一次走一步来判断即可
- 如果相遇，则有环；如果走到快指针或快指针的下一个指向空，则无环
- 原因
  - 类比操场跑圈，如果是环形跑道，跑得慢的一定会被快的套圈
  - 如果不是环形，那么一定不会相遇

**代码：**

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(head == NULL || head->next == NULL){ // 初筛判断
            return false;
        }
        ListNode* fast = head; // 定义快慢指针
        ListNode* slow = head;
        fast = fast->next->next; // 初始化快慢指针
        slow = slow->next;
        while(fast != slow){ // 开始遍历
            if(slow == NULL || fast == NULL || fast->next == NULL){ // 定义退出条件
                return false;
            }
            slow = slow->next;
            fast = fast->next->next;
        }
        return true;
    }
};
```



### 142. 环形链表II<span id="141"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

**示例：**

![环形链表II示例1 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

![环形链表II示例2 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

![环形链表II示例3 图源LeetCode](https://store.southyang.cn/LeetCode/TwoPointer/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

**提示：**

- 链表中节点的数目范围在范围 `[0, 104]` 内
- `-105 <= Node.val <= 105`
- `pos` 的值为 `-1` 或者链表中的一个有效索引

**进阶：**你是否可以使用 `O(1)` 空间解决此题？

**解题思路：**

- 前期思路同 141.环形列表 ，先判断有无环路
- 当发现有环时，快慢指针已经相遇，此时设慢指针已经走了`n`步，则快指针走了`2n`步
- 再设从出发点到环入口点的距离为`m`步，那么慢指针在环中走了`n-m`步
- 设环的长度为`c`步，可得`n % c == 0`，因此慢指针再走`m`步，就可以达到环入口处
- 这时候我们需要再使用一个指针，称作`pointer`，`pointer`距离环入口为`m`步，与慢指针相同
- 所以，可以让`pointer`和慢指针同时同速度移动，当两者相遇时，相遇点即为入口点

**代码：**

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if(head == NULL || head->next == NULL){
            return NULL;
        }
        ListNode* slow = head->next;
        ListNode* fast = slow->next;
        ListNode* pointer = head;
        while(fast != slow){ // 当退出循环时，fast和slow位于相遇点
            if(fast == NULL || fast->next == NULL){
                return NULL;
            }
            slow = slow->next;
            fast = fast->next->next;
        }
        while(pointer != slow){ // 此时，slow和pointer距离入口点的距离相等，当二者相遇，就在入口处
            slow = slow->next;
            pointer = pointer->next;
        }
        return pointer; // 返回pointer即可
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



### 567. 字符串的排列<span id="567"></span> 🌟

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你两个字符串 `s1` 和 `s2` ，写一个函数来判断 `s2` 是否包含 `s1` 的排列。如果是，返回 `true` ；否则，返回 `false` 。

换句话说，`s1` 的排列之一是 `s2` 的 **子串** 。

**示例：**

```
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
```

```
输入：s1= "ab" s2 = "eidboaoo"
输出：false
```

**提示：**

- `1 <= s1.length, s2.length <= 104`
- `s1` 和 `s2` 仅包含小写字母

**解题思路：**

- s1的排列和s1长度相同，只有字母顺序发生改变
- 因此我们只需要对比在s2的一个区间内，每个字母的个数是否和s1中相等即可
- 首先用cnt记录下s1中每个字母的个数，用负数来记录（正数也可以，两个反着来就行）
- 再用left和right来表示s2中区间的头和尾，可以从0开始增长区间，也可以直接找长度为n的区间
- 用从0开始对区间扩容
  - 每次把`right`对应位置的字母加入到`cnt`记录的个数中
  - 如果该字母对应的值大于0，则将left右移并修改弹出字母的`cnt`直到该值为0
  - 如果此时区间长度已经是`s1`的长度，则说明找到，返回`true`
  - 若未返回，将`right++`，继续循环

**代码：**

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        int n = s1.size(), m = s2.size();
        if(n > m){ // 做初筛判断，如果s1比s2长，一定是false
            return false;
        }
        
        int cnt[26] = {0}; // 定义cnt来存放对应字母的比较情况
        for(int i = 0; i < n; i ++){ // 将s1的字母对应位置全部 --
            cnt[s1[i] - 'a'] --;
        }
        int left = 0,  right = 0; // 定义双指针，类似于滑动窗口，一直改变头尾位置，直到找到合适的滑窗
        while(right < m){ // 遍历s2，滑动窗口的右侧不能超过m
            int c = s2[right] - 'a'; // 将当前字母的对应cnt位置++
            cnt[c] ++;
            while(cnt[c] > 0){ // 大于0表示，多出了这个字母，那么就将滑窗左侧右移直到再次移除一个该字母
                -- cnt[s2[left] - 'a'];
                ++ left;   
            }
            if(right - left + 1 == n){ // 如果滑窗的大小等于n，寻找成功
                return true;
            }
            right++;
        }
        return false;
    }
};
```



### 719. 找出第k小的距离对<span id="719"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定一个整数数组，返回所有数对之间的第 k 个最小**距离**。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值。

**示例：**

```
输入：
nums = [1,3,1]
k = 1
输出：0 
解释：
所有数对如下：
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
因此第 1 个最小距离的数对是 (1,1)，它们之间的距离为 0。
```

**提示：**

- `2 <= len(nums) <= 10000`.
- `0 <= nums[i] < 1000000`.
- `1 <= k <= len(nums) * (len(nums) - 1) / 2`.

**解题思路：**

- 采用二分加双指针的做法来降低时间复杂度
- 首先将`nums`排序，方便后续遍历
- 之后用二分去寻找合适的数对差值
  - 将最小差值定义为0，最大差值为最后一个数和第一个数的差值
  - 每次判断对于可能的中间差值`mid=min + max >> 1`，有多少数对的差值小于`mid`
  - 如果个数大于等于k，则将差值上界移动至mid；反之将差值下界移动到`mid + 1`
  - 直至``min==max`
- 对于寻找差值小于`mid`的数对个数
  - 从头到尾寻找所有可能的数对
  - 用双指针的方法找满足条件的区间，可以有效降低时间复杂度
  - 对于一个数`nums[i]`来说，哪个区间内的数与其差值小于`mid`，有效将时间复杂度降为`O(n)`


**代码：**

```cpp
class Solution {
public:
    int check(vector<int>& nums, int mid){ // 查找距离小于mid的数对有多少个
        int count = 0;
        int len = nums.size();
        int left = 0, right = 1;
        while(left < len){ // 从头到尾寻找数对
            int temp = nums[right] - nums[left];
            while(right < len && temp <= mid){ // 如果当前数对的距离小于等于mid，继续右移right
                right ++;
                temp = nums[right] - nums[left]; // 更新数对距离
            }
            count = count + right - left - 1; // [left + 1, right - 1]范围内的点与left的距离都在mid内
            left ++; // 左移left
        }
        return count; // 返回总数
    }

    int smallestDistancePair(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end()); // 对nums进行排序，方便后续遍历
        int min = 0, max = nums.back() - nums.front(); // 定义二分的上界和下界

        while(min < max){ // 进入二分
            int mid = min + max >> 1;
            if(check(nums, mid) >= k){ // 如果距离小于mid的数对大于等于k，那么上界移动到mid
                max = mid;
            }
            else{ // 反之将min移动到mid + 1
                min = mid + 1;
            }
        }
        return min;
    }
};
```



### 763. 划分字母区间<span id="763"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

字符串 `S` 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

**示例：**

```
输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
```

**提示：**

- `S`的长度在`[1, 500]`之间。
- `S`只包含小写字母 `'a'` 到 `'z'` 。

**解题思路：**

- 满足在当前区间内，所有字母出现的最远位置均在区间内，即区间外没有这些字母
- 因此我们要做的就是
  - 找到`s[0]`位置的字母出现的最远位置作为第一个区间
  - 之后不断用后续的字母更新该区间的最远边界，直至遍历区间边界，将字母个数压入`res`中
  - 从该区间的下一个位置重复上述操作直到将`s`遍历完成


**代码：**

```cpp
class Solution {
public:
    vector<int> partitionLabels(string s) {
        vector<int> res; // 定义返回值
        int temp = 0; // 临时值，记录当前区间中字母的最远位置
        int i = 0; // 记录当前遍历到的字母位置
        int first = 0; // 记录当前区间的开始位置
        while(i < s.size()){ // 在字符串范围内遍历
            char c = s[i]; // 获取到当前字母
            for(int j = i + 1; j < s.size(); j ++){ // 找到当前字母的最远匹配位置
                if(s[j] == c){
                    if(j > temp){ // 如果大于temp，就更换temp
                        temp = j;
                    }
                }
            }
            i++; // 更新字母位置
            if(i > temp){ // 如果新字母的位置已经超出了最远匹配位置，即进入了下一个区间
                res.push_back(i - first); // 压入res
                first = i; // 将first更新为新区间的开始位置
            }
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

