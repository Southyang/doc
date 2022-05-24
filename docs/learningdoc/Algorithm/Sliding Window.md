---
title: Sliding Window
date: 2022-05-19 17:24:48
permalink: /pages/872162/
---
# 滑动窗口

## 题解来源

**标了🤦‍♂️🤦‍♂️的是完全按照大佬们的题解写的**

**标了🌟的是理解了大神们的题解后，自己又写的**

**没标的是自己磕磕绊绊写出来的低水平代码**



## 自己写个模板

```cpp
// k为窗口大小
int left = 0, right = 0;
for(; right < nums.size(); right++){
    if(right - left == k - 1){ // 判断窗口是否已经填满
        left++; // 释放左窗口
    }
    
    // 对合法窗口做相应逻辑操作
    
    if(right > k){ // 第一个窗口扫描完毕
        
    }
}
```

````
核心思想

右指针不断向右移动直到不能继续移动为止（根据题目条件判断边界）
当右指针移动到边界时，接着移动左指针，释放左窗口
重复上述操作直至遍历完所有内容

每次对合法窗口做相应的逻辑操作

滑动窗口要比并查集简单一点（个人感觉）
````



## 题目

### 3. 无重复字符的最长子串 <span id="3"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例：**

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

**提示：**

- `0 <= s.length <= 5 * 104`
- `s` 由英文字母、数字、符号和空格组成

**解题思路：**

- `set`为不含重复数据的数据结构，我们使用`set`来存储数据
- `right`每次移动一位，直到扫描到的新数据在`set`中已经存在，那么从`left`开始删除，一直到删除上一个`right`对应数据为止
- 每次判断一下当前子串长度和上一次记录值的大小关系

**代码：**

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int length = s.size();
        if(length <= 1){
            return length;
        }
        set<char> substring;
        int temp = 1; // s[0]被先压入substring中，因此初始的temp是1
        int left = 0, right = 1;
        substring.insert(s[left]);
        while(left < right && right < length){
            while(left < right && substring.count(s[right])){ // 如果s[right]在substring中出现过，右移left
                substring.erase(s[left++]);
            }
            substring.insert(s[right++]); // 压入当前right对应的字母
            if(temp < substring.size()){ // 判断子串长度
                temp = substring.size();
            }
        }
        return temp;
    }
};
```



### 76. 最小覆盖子串 <span id="76"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

**注意：**

- 对于 `t` 中重复字符，我们寻找的子字符串中该字符数量必须不少于 `t` 中该字符数量。
- 如果 `s` 中存在这样的子串，我们保证它是唯一的答案。

**示例：**

```
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

```
输入：s = "a", t = "a"
输出："a"
```

```
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
```

**提示：**

- `1 <= s.length, t.length <= 105`
- `s` 和 `t` 由英文字母组成

**进阶：**你能设计一个在 `o(n)` 时间内解决此问题的算法吗？

**解题思路：**

- 用`map`记录`t`字符串中每个字母出现的次数和总的字母数
- 开始遍历`s`字符串，`right`每次移动一位，判断当前读取的字母在`map`中的数量是否大于`0`
  - 如果大于`0`就将剩余字母数减一
  - 将`map`中对应的字母数量减一
  - 如果剩余字母数为`0`，说明已经找到了符合要求的子串
    - 那么开始移动`left`，并修改`map`中对应字母的数量
    - 如果当前`left`移动会使剩余字母数增加，即剩余子串不满足要求，则停止移动
  - 判断当前子串长度和上一次记录值的大小关系
  - 将`left`左移一位，改变`map`中对应字母的数量和剩余字母数，进入下一个子串的寻找

**代码：**

```cpp
class Solution {
public:
    string minWindow(string s, string t) {
        if(s.size() < t.size()){
            return "";
        }
        map<char, int> charNum;
        int currentSize = t.size();

        for(int i = 0; i < t.size(); i ++){
            charNum[t[i]]++;
        }
        
        string res = "";
        int subSize = s.size() + 1;
        int left = 0;
        for(int right = 0; right < s.size(); right ++){
            if(charNum[s[right]] > 0){ 
                currentSize--;
            }
            charNum[s[right]] --;
            
            if(currentSize == 0){ // 如果t中所有的字符在子串中都已经包含
                while(true){ // 尝试从左端减少字母
                    char c = s[left];
                    if(charNum[c] == 0){ // 如果最左端的字母不能减少，退出while
                        break;
                    }
                    charNum[c] ++;
                    left++;
                }
                if(right - left  + 1 < subSize){ // 如果当前的子串长度小于前一个子串
                    subSize = right - left + 1;
                    res = s.substr(left, subSize);
                }

                currentSize++; // 将左端右移，寻找新的满足条件子串
                charNum[s[left]]++;
                left++;
            }
        }

        return res;
    }
};
```



### 239. 滑动窗口最大值 <span id="239"></span>

**难度：**<font color=#ef4743>困难</font>

**题目：**

给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 *滑动窗口中的最大值* 。

**示例：**

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

```
输入：nums = [1], k = 1
输出：[1]
```

**提示：**

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
- `1 <= k <= nums.length`

**解题思路：**

- 使用双端队列来保存当前滑窗内的数据
- 整个队列的数据为递减，即队头为窗口内的最大值，队尾为窗口内的最小值
- 每次扫描到新数据时
  - 判断队头是否滑出窗口
  - 判断和队尾元素的大小关系，如果大于队尾元素，则弹出队尾
  - 将新数据插到队尾
  - 判断窗口大小，如果窗口满了，则返回最左端，即最大值
- 更改判断和队尾的大小关系
  - 例如，本题为判断是否大于，大于就弹出，可以找到窗口的最大值
  - 改为是否小于，小于就弹出，可以找到最小值

**代码：**

```cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {   
        int length = nums.size();

        vector<int> res;
        deque<int> deq;

        for(int i = 0; i < length; i ++){
            if(deq.size() && (deq.back() - deq.front()) == k - 1){ // 判断队头是否滑出窗口
                deq.pop_front();
            }
            while(deq.size() && nums[deq.back()] < nums[i]){ // 如果当前队尾元素对应的值小于nums[i]，弹出队尾
                deq.pop_back(); // 最终的排序结果是在滑窗内，元素递减，最左边为最大值
            }
            deq.push_back(i);
            if(i >= k - 1){ // 向res中压入每个窗口的最大值
                res.push_back(nums[deq.front()]);
            }
        }

        return res;
    }
};
```



### 480. 滑动窗口中位数 <span id="480"></span>

**难度：**<font color=#ef4743>困难</font>

**题目：**

中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

例如：

- `[2,3,4]`，中位数是 `3`
- `[2,3]`，中位数是 `(2 + 3) / 2 = 2.5`

给你一个数组 *nums*，有一个长度为 *k* 的窗口从最左端滑动到最右端。窗口中有 *k* 个数，每次窗口向右移动 *1*位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。

**示例：**

给出 *nums* = `[1,3,-1,-3,5,3,6,7]`，以及 *k* = 3。

```
窗口位置                      中位数
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7      -1
 1  3 [-1  -3  5] 3  6  7      -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
```

 因此，返回该滑动窗口的中位数数组 `[1,-1,-1,3,5,6]`。

**提示：**

- 你可以假设 `k` 始终有效，即：`k` 始终小于等于输入的非空数组的元素个数。
- 与真实值误差在 `10 ^ -5` 以内的答案将被视作正确答案。

**解题思路：**

- 第一种思路

  - 用`left`和`right`代表维护的滑窗`tempNum`最早加入的数据和最新加入的数据在`nums`中的对应位置

  - 每次循环
    - 判断最早加入的数据是否已经滑出
    - 将最新的数据压入`tempNum`
    - 计算中位数并压入`res`中

  - 返回`res`

  - 要注意的是`STL`迭代器的几个函数用法，可以在我的[STL总结](./STL Summary)的`Tip`中看到
    - `advance()`
    - `prev()`
    - `next()`

- 第二种思路

  - 维护一个大根堆，一个小根堆
  - 将滑窗的数据分为两部分，大的一部分存放在大根堆中，小的一部分存放在小根堆中
  - 如果`k`为奇数，那么中位数是数据多的堆的堆顶元素
  - 如果`k`为偶数，那么中位数是两个堆顶元素的平均值
  - 关键步骤是要做好堆的平衡，降低这一步的时间复杂度

**代码：**

**第一种思路**

```cpp
class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        multiset<int> tempNum;
        vector<double> res;

        int left = 0, right = 0;
        for(; right < nums.size(); right++){
            if(right - left == k){ // 判断是否滑出窗口
                tempNum.erase(tempNum.find(nums[left]));
                left++;
            }
            tempNum.insert(nums[right]); // 压入新数据
            if(right >= k - 1){ // 计算中位数
                auto iter = tempNum.begin();
                advance(iter, k / 2);
                auto pre = prev(iter, 1 - k % 2);
                double temp = ((double)*iter - (double)*pre) / 2 + (double)*pre;
                res.push_back(temp);
            }
        }
        return res;
    }
};
```

**记录一下我的第二种思路，但这个方法超时了，之后优化一下**

```
class Solution {
public:
    multiset<int> ms1; // 小根堆
    multiset<int, greater<int>> ms2; // 大根堆

    int getFirst(multiset<int> ms){
        return *ms.begin();
    }

    int getFirst(multiset<int, greater<int>> ms){
        return *ms.begin();
    }

    void blance(){
        int length1 = ms1.size(), length2 = ms2.size();

        while(length1 - length2 >= 2){ // 将ms1的最小值放到ms2中直到平衡
            ms2.insert(getFirst(ms1));
            ms1.erase(ms1.begin());
            length1 = ms1.size(), length2 = ms2.size();
        }
        while(length2 - length1 >= 2){ // 将ms2的最大值放到ms1中直到平衡
            ms1.insert(getFirst(ms2));
            ms2.erase(ms2.begin());
            length1 = ms1.size(), length2 = ms2.size();
        }

        while(length1 > 0 && length2 > 0 && getFirst(ms1) < getFirst(ms2)){
            int temp1 = getFirst(ms1), temp2 = getFirst(ms2);
            ms1.erase(ms1.begin());
            ms2.erase(ms2.begin());
            ms1.insert(temp2);
            ms2.insert(temp1);
        }
    }

    void insertMS(int value){
        ms1.insert(value);
        blance();
    }

    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        vector<double> res;
        if(k == 1){
            for(int i = 0; i < nums.size(); i ++){
                res.push_back(nums[i]);
            }
            return res;
        }
        
        int left = 0, right = 0;
        for(;right < k; right ++){ // 读入第一组窗口
            insertMS(nums[right]);
        }
        if(k % 2 == 0){
            res.push_back((double)(getFirst(ms1) - getFirst(ms2)) / 2 + getFirst(ms2));
        }
        else{
            res.push_back(getFirst(ms1));
        }

        for(; right < nums.size(); right ++){ // 读入后续
            // 删除最左端
            int temp = nums[left++];
            if(temp <= getFirst(ms2)){
                auto it = ms2.find(temp);
                ms2.erase(it);
            }
            else{
                auto it = ms1.find(temp);
                ms1.erase(it);
            }
            // 加入新数据
            insertMS(nums[right]);
            // 根据大根堆和小根堆的堆顶数据求出中位数
            if(k % 2 == 0){
                res.push_back((double)(getFirst(ms1) - getFirst(ms2)) / 2 + getFirst(ms2));
            }
            else{
                res.push_back(getFirst(ms1));
            }
            // 进入下一个窗口
        }

        return res;
    }
};
```



### 567. 字符串的排列 <span id="567"></span>

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

- 这道题在双指针章节也有做过，当时还是看了题解的思路
- 两次的区别在于，双指针那里用的是数组记录，这里用了`map`，其他都一样

**代码：**

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        int len1 = s1.size(), len2 = s2.size();
        if(len2 < len1){
            return false;
        }
        map<char, int> sub;
        for(int i = 0; i < len1; i ++){
            sub[s1[i]]++;
        }
        
        int left = 0;
        for(int i = 0; i < len2; i ++){
            char c = s2[i];
            sub[c]--;
            while(sub[c] < 0){
                sub[s2[left]]++;
                left++;
            }
            if(i - left == len1 - 1){
                return true;
            }
        }
        return false;
    }
};
```



### 713. 乘积小于K的子数组 <span id="713"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回子数组内所有元素的乘积严格小于 `k` 的连续子数组的数目。

**示例：**

```
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
```

```
输入：nums = [1,2,3], k = 0
输出：0
```

**提示：**

- `1 <= nums.length <= 3 * 104`
- `1 <= nums[i] <= 1000`
- `0 <= k <= 106`

**解题思路：**

- 数组的连续子数组个数为 *`num = n(n + 1) / 2`*
- 每次找到一个最大的符合条件的数组，计算连续子数组个数并减去重复数据的影响
- 返回`res`即可

**代码：**

```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        int left = 0, right = 0;
        int overlap = 0, useNum = 0;

        int res = 0, product = 1;

        for(right = 0; right < nums.size(); right ++){
            product *= nums[right];
            if(product >= k){ // 如果乘积大于等于k
                res += useNum * (useNum + 1) / 2; // 计算出有效数组的连续子数组个数
                res -= overlap * (overlap + 1) / 2; // 减去和上一个有效数组的重合部分
                overlap = 0; // 将重合数据个数变为0
                while(left <= right && product >= k){ // 依次弹出窗口左端数据直到乘积小于k或没有数据可以弹出
                    product /= nums[left++];
                    if(useNum > 0){ // 如果有效数据个数大于0，就减小，这一步是用来避免所有数据都无效的情况
                        useNum--;
                    }
                }
                if(right >= left){ // 结束while后，窗口中还有数据，说明最新加入的数据nums[right]可用，useNum++
                    useNum++;
                    overlap = right - left;
                }
            }
            else{ // 如果乘积小于k，有效数字useNum++
                useNum++;
            }
        }
        res += useNum * (useNum + 1) / 2;
        res -= overlap * (overlap + 1) / 2;

        return res;
    }
};
```



### 978. 最长湍流子数组 <span id="978"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

给定一个整数数组 `arr` ，返回 `arr` 的 *最大湍流子数组的**长度*** 。

如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是 **湍流子数组** 。

更正式地来说，当 `arr` 的子数组 `A[i], A[i+1], ..., A[j]` 满足仅满足下列条件时，我们称其为*湍流子数组*：

- 若 `i <= k < j` ：
  - 当 `k` 为奇数时， `A[k] > A[k+1]`，且
  - 当 `k` 为偶数时，`A[k] < A[k+1]`；
- 或 若 `i <= k < j` ：
  - 当 `k` 为偶数时，`A[k] > A[k+1]` ，且
  - 当 `k` 为奇数时， `A[k] < A[k+1]`。

**示例：**

```
输入：arr = [9,4,2,10,7,8,8,1,9]
输出：5
解释：arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
```

```
输入：arr = [4,8,12,16]
输出：2
```

```
输入：arr = [100]
输出：1
```

**提示：**

- `1 <= arr.length <= 4 * 104`
- `0 <= arr[i] <= 109`

**解题思路：**

- 用了个笨办法，写的差不多了才看清是两种情况，索性就分开写了，反正只有`O(n)`🐶
- 把`arr[1] < arr[2] > arr[3] < arr[4]……`和`arr[1] > arr[2] < arr[3] > arr[4]……`分开算
- 最后返回最大的子数组长度就好了
- `right`指针一直走，当遇到一个不符合条件的值停下
  - 计算此时的长度和`res`的大小关系
  - 将`right`赋给`left`，进入下一个湍流子数组的寻找
- 找完一种情况后，将`left`和`flag`恢复初始状态，进入第二种情况的查找

**代码：**

```cpp
class Solution {
public:
    int maxTurbulenceSize(vector<int>& arr) {
        int length = arr.size();
        if(length == 1){
            return 1;
        }
        int res = 0;

        bool flag = false;

        int left = 0;
        for(int right = 1; right < length; right ++){ // 判断第一种情况:arr[1] < arr[2] > arr[3] < arr[4]……
            if((arr[right - 1] < arr[right] && !flag) || (arr[right - 1] > arr[right] && flag)){
                
            }
            else{
                if(right - left > res){
                    res = right - left;        
                }
                left = right;
            }            
            flag = !flag;
        }
        if(length - left > res){ // 判断最后一组的长度
            res = length - left;        
        }

        left = 0;
        flag = false;
        for(int right = 1; right < length; right ++){ // 判断第二种情况:arr[1] > arr[2] < arr[3] > arr[4]……
            if((arr[right - 1] > arr[right] && !flag) || (arr[right - 1] < arr[right] && flag)){
            }
            else{
                if(right - left > res){
                    res = right - left;        
                }
                left = right;
            }            
            flag = !flag;
        }
        if(length - left > res){ // 判断最后一组的长度
            res = length - left;        
        }

        return res;
    }
};
```



### 992. K个不同整数的子数组 <span id="992"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定一个正整数数组 `nums`和一个整数 k ，返回 num 中 「**好子数组」** 的数目。

如果 `nums` 的某个子数组中不同整数的个数恰好为 `k`，则称 `nums` 的这个连续、不一定不同的子数组为 **「好子数组 」**。

- 例如，`[1,2,3,1,2]` 中有 `3` 个不同的整数：`1`，`2`，以及 `3`。

**子数组** 是数组的 **连续** 部分。

**示例：**

```
输入：nums = [1,2,1,2,3], k = 2
输出：7
解释：恰好由 2 个不同整数组成的子数组：[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
```

```
输入：nums = [1,2,1,3,4], k = 3
输出：3
解释：恰好由 3 个不同整数组成的子数组：[1,2,1,3], [2,1,3], [1,3,4].
```

**提示：**

- `1 <= nums.length <= 2 * 104`
- `1 <= nums[i], k <= nums.length`

**解题思路：**

- 把「恰好」改成「最多」就可以使用双指针一前一后交替向右的方法完成，这是因为 对于每一个确定的左边界，最多包含 KK 种不同整数的右边界是唯一确定的，并且在左边界向右移动的过程中，右边界或者在原来的地方，或者在原来地方的右边。
- 而「最多存在 K 个不同整数的子区间的个数」与「恰好存在 K 个不同整数的子区间的个数」的差恰好等于「最多存在 K−1 个不同整数的子区间的个数」
- 摘抄自官方的两点，最多 - 最多 == 恰好
- 这样我们就可以通过滑窗来求出最多有k个不同整数的数组个数，间接求解出恰好有k个不同整数的数组个数了
- [官方题解链接](https://leetcode.cn/problems/subarrays-with-k-different-integers/solution/k-ge-bu-tong-zheng-shu-de-zi-shu-zu-by-l-ud34/)

**代码：**

```cpp
class Solution {
public:
    int findWithMostDistinct(vector<int>& nums, int k){ // 找到最多有k个不同整数的子数组
        int res = 0, distinctNum = 0;
        map<int, int> temp;

        int left = 0, right = 0;
        for(;right < nums.size(); right++){
            int rightNum = nums[right];
            if(!temp[rightNum]){ // 将当前数据放入temp中，改变distanceNum
                temp[rightNum] = 1;
                distinctNum++;
            }
            else{ // 如果存在，就将对应个数++
                temp[rightNum]++;
            }

            while(left <= right && distinctNum > k){ // 在窗口中，如果不同的整数个数大于k，逐个弹出左端
                int leftNum = nums[left++];
                temp[leftNum]--;
                if(!temp[leftNum]){ // 检查是否可以改变distanceNum
                    distinctNum--;
                }
            }

            res += right - left + 1; // 固定右端，计算有多少个不同左端的子数组
        }
        return res;
    }

    int subarraysWithKDistinct(vector<int>& nums, int k) { // 最多 - 最多 == 恰好
        return findWithMostDistinct(nums, k)  - findWithMostDistinct(nums, k - 1);
    }
};
```



### 995. K连续位的最小翻转次数 <span id="995"></span> 🌟

**难度：**<font color=#ef4743>困难</font>

**题目：**

给定一个二进制数组 `nums` 和一个整数 `k` 。

**k位翻转** 就是从 `nums` 中选择一个长度为 `k` 的 **子数组** ，同时把子数组中的每一个 `0` 都改成 `1` ，把子数组中的每一个 `1` 都改成 `0` 。

返回数组中不存在 `0` 所需的最小 **k位翻转** 次数。如果不可能，则返回 `-1` 。

**子数组** 是数组的 **连续** 部分。

**示例：**

```
输入：nums = [0,1,0], K = 1
输出：2
解释：先翻转 A[0]，然后翻转 A[2]。
```

```
输入：nums = [1,1,0], K = 2
输出：-1
解释：无论我们怎样翻转大小为 2 的子数组，我们都不能使数组变为 [1,1,1]。
```

```
输入：nums = [0,0,0,1,0,1,1,0], K = 3
输出：3
解释：
翻转 A[0],A[1],A[2]: A变成 [1,1,1,1,0,1,1,0]
翻转 A[4],A[5],A[6]: A变成 [1,1,1,1,1,0,0,0]
翻转 A[5],A[6],A[7]: A变成 [1,1,1,1,1,1,1,1]
```

**提示：**

- `1 <= nums.length <= 105`
- `1 <= k <= nums.length`

**解题思路：**

- 当 `A[i]` 为 `0`，如果 `i` 位置**被**翻转了偶数次，那么翻转后仍是 `0`，当前元素需要翻转
- 当 `A[i]` 为 `1`，如果 `i` 位置**被**翻转了奇数次，那么翻转后变成 `0`，当前元素需要翻转
- 根据上述规则，记录翻转次数`flipNum`
- 如果`flipNum % 2 == nums[i]`，则当前位置需要翻转，将`res++`，同时将当前位置的值`num[i] += 2`
- 注：**`num[i] += 2`的作用是判断该位置有没有被翻转**
- 如果发现`num[i - k] > 1`，说明`i - k`位置翻转过，且已经不能再对`i`位置造成影响，所以将`flipNum--`
- 如果我们发现当前位置需要翻转且距离`nums`的末尾距离小于`k`，那么返回`-1`

**代码：**

```cpp
class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        int flipNum = 0;
        int res = 0;
        int length = nums.size();

        for(int left = 0; left < length; left++){
            if(left >= k && nums[left - k] > 1){ // 如果nums[left - k]被反转过
                flipNum--;
            }
            if(nums[left] == flipNum % 2){ // 如果当前数需要被反转
                if(left + k > length){
                    return -1;
                }
                res++;
                flipNum++;
                nums[left] += 2; // 改变当前位
            }
        }        

        return res;
    }
};
```



### 1052. 爱生气的书店老板 <span id="1052"></span>

**难度：**<font color=#ffa119>中等</font>

**题目：**

有一个书店老板，他的书店开了 `n` 分钟。每分钟都有一些顾客进入这家商店。给定一个长度为 `n` 的整数数组 `customers` ，其中`customers[i]` 是在第 `i` 分钟开始时进入商店的顾客数量，所有这些顾客在第 `i` 分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 `i` 分钟生气，那么 `grumpy[i] = 1`，否则 `grumpy[i] = 0`。

当书店老板生气时，那一分钟的顾客就会不满意，若老板不生气则顾客是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 `minutes` 分钟不生气，但却只能使用一次。

请你返回 *这一天营业下来，最多有多少客户能够感到满意* 。

**示例：**

```
输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
输出：16
解释：书店老板在最后 3 分钟保持冷静。
感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

```
输入：customers = [1], grumpy = [0], minutes = 1
输出：1
```

**提示：**

- `n == customers.length == grumpy.length`
- `1 <= minutes <= n <= 2 * 104`
- `0 <= customers[i] <= 1000`
- `grumpy[i] == 0 or 1`

**解题思路：**

- 先统计出不生气时的顾客总数量
- 再通过滑动窗口来找出最大的生气时顾客数量的子数组，将这段时间的老板变冷静
- 当滑窗数据填满时
  - 做逻辑操作
  - 弹出左端
  - 进入下一个窗口

**代码：**

```cpp
class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        int res = 0;
        int length = customers.size();

        for(int i = 0; i < length; i ++){ // 先算出不生气的时候顾客数量
            if(!grumpy[i]){
                res += customers[i];
            }
        }

        int left = 0, right = 0;
        int tempSum = 0, maxSum = 0;
        for(right = 0; right < length; right ++){ 
            if(grumpy[right]){ // 如果当前位置满足，加入
                tempSum += customers[right];
            } 
            if(right - left == minutes - 1){ // 滑窗数据填满
                if(tempSum > maxSum){ // 比较当前合法窗口的值
                    maxSum = tempSum;
                }
                if(grumpy[left]){ // 如果左端满足，减去
                    tempSum -= customers[left];
                }
                left++;
            }
        }

        return res + maxSum;
    }
};
```
