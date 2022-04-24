---
title: Two Pointers
date: 2022-04-25 00:56:17
permalink: /pages/cde2ce/
---
# 双指针

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板



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

![接雨水 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

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



### 86. 分隔链表<span id="86"></span> （待做）

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个链表的头节点 `head` 和一个特定值 `x` ，请你对链表进行分隔，使得所有 **小于** `x` 的节点都出现在 **大于或等于** `x` 的节点之前。

**示例：**

![分隔链表 图源LeetCode](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)

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



**代码：**

```cpp

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



### 141. 环形链表<span id="141"></span> (待做)

**难度：**<font color=#5ab726>简单</font>

**题目：**

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

*如果链表中存在环* ，则返回 `true` 。 否则，返回 `false` 。

**示例：**

![环形链表示例1 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![环形链表示例2 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![环形链表示例3 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

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



**代码：**

```cpp

```



### 142. 环形链表II<span id="141"></span> (待做)

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

**示例：**

![环形链表II示例1 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

![环形链表II示例2 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

![环形链表II示例3 图源LeetCode](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

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



**代码：**

```cpp

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

