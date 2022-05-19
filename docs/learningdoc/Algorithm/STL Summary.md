---
title: STL总结
date: 2022-04-10 22:22:08
permalink: /pages/7c8eba/
categories: 
  - learningdoc
  - Algorithm
tags: 
  - 
---
# C++ STL总结

## 1. STL简介

STL，英文全称**Standard Template Library**，中文可译为标准模板库或者泛型库，其包含有大量的模板类和模板函数，是 C++ 提供的一个基础模板的集合，用于完成诸如输入/输出、数学计算等功能。

STL 最初由惠普实验室开发，于 1998 年被定为国际标准，正式成为 C++ 程序库的重要组成部分。值得一提的是，如今 STL 已完全被内置到支持 C++ 的编译器中，无需额外安装，这可能也是 STL 被广泛使用的原因之一。

从根本上说，STL 是一些容器、算法和其他一些组件的集合，所有容器和算法都是总结了几十年来算法和数据结构的研究成果，汇集了许多计算机专家学者经验的基础上实现的，因此可以说，STL 基本上达到了各种存储方法和相关算法的高度优化。

STL的一个重要特点是数据结构和算法的分离。尽管这是个简单的概念，但这种分离确实使得STL变得非常通用。例如，由于STL的sort()函数是完全通用的，你可以用它来操作几乎任何数据集合，包括链表，容器和数组；

STL另一个重要特性是它不是面向对象的。为了具有足够通用性，STL主要依赖于模板而不是封装，继承和虚函数（多态性）——OOP的三个要素。你在STL中找不到任何明显的类继承关系。这好像是一种倒退，但这正好是使得STL的组件具有广泛通用性的底层特征。另外，由于STL是基于模板，内联函数的使用使得生成的代码短小高效；


从逻辑层次来看，在STL中体现了泛型化程序设计的思想，引入了诸多新的名词，比如像需求（requirements），概念（concept），模型（model），容器（container），算法（algorithmn），迭代子（iterator）等。与OOP（object-oriented programming）中的多态（polymorphism）一样，泛型也是一种软件的复用技术；

从实现层次看，整个STL是以一种类型参数化的方式实现的，这种方式基于一个在早先C++标准中没有出现的语言特性--模板（template）。



## 2. STL中六大组件

- 容器（Container），是一种数据结构，如list，vector，和deques ，以模板类的方法提供。为了访问容器中的数据，可以使用由容器类输出的迭代器；
- 迭代器（Iterator），提供了访问容器中对象的方法。例如，可以使用一对迭代器指定list或vector中的一定范围的对象。迭代器就如同一个指针。事实上，C++的指针也是一种迭代器。但是，迭代器也可以是那些定义了operator*()以及其他类似于指针的操作符地方法的类对象；
- 算法（Algorithm），是用来操作容器中的数据的模板函数。例如，STL用sort()来对一个vector中的数据进行排序，用find()来搜索一个list中的对象，函数本身与他们操作的数据的结构和类型无关，因此他们可以在从简单数组到高度复杂容器的任何数据结构上使用；
- 仿函数（Functor）
- 适配器（Adaptor）
- 分配器（allocator）



## 3. 数据结构讲解

### 3.1 vector  变长数组

- **引入：** `#include < vector> `

- **声明：**

  ```cpp
  vector<T> vec; //定义空变长数组
     
  vector<T> vec1(size_type n,const T& value = T(), const Allocator& = Allocator()); // 定义非空变长数组
  /* n是长度
  *  value 是初始值
  *  Allocator() 是缺省值，一般不用写
  */
  ```

- **用法：**

|               成员方法 / 其他函数                |                            作用                            |
| :----------------------------------------------: | :--------------------------------------------------------: |
|          push_back(value) / pop_back()           |          在末尾添加新元素value / 删除最后一个元素          |
|          emplace_back(value) (推荐使用)          |                   在末尾添加新元素value                    |
|                 begin() / end()                  | 返回迭代器，一般用来排序如：`sort(obj.begin(),obj.end());` |
|                     clear()                      |                       清空该变长数组                       |
|                     at(pos)                      |                     返回pos位置的元素                      |
|                     empty()                      |                        判断是否为空                        |
|                      swap()                      |            交换两个数组的值: `vec.swap(vec1);`             |
|                      size()                      |                        返回数组长度                        |
|                 front() / back()                 |             返回第一个元素 / 返回最后一个元素              |
|                rbegin() / rend()                 |                  反转后的begin() 和 end()                  |
|                      vec[i]                      |                       返回第i个元素                        |
|       insert(const_iterator pos, n, elem)        |        在迭代器 pos 指定的位置之前插入n个新元素elem        |
| emplace (const_iterator pos, args...) (推荐使用) |       在迭代器 pos 指定的位置之前插入一个新元素elem        |

### 3.2 pair 结构体模板

- **引入：** 不需要引入，直接使用

- **声明：** 

  ```cpp
  pair<T1, T2> p1; // 创建一个空的pair对象，它的两个元素分别是T1和T2类型，采用值初始化
    
  pair<T1, T2> p2(v1, v2); // 创建一个pair对象，它的两个元素分别是T1和T2类型，其中first成员初始化为v1，second成员初始化为v2
    
  pair<T1, T2> p3; // 使用make_pair创建一个新的pair对象，其元素类型分别是T1和T2
  p3 = make_pair(v1, v2);
  ```

- **用法：**

  | 成员方法 / 其他函数 |                    用法                    |
  | :-----------------: | :----------------------------------------: |
  |   first / second    |  给第一个元素 / 第二个元素赋值 或者 获取   |
  |       sort()        | pair默认对first排序，first相等对second排序 |

  ```cpp
  // sort()用法
  #include <vector>
  #include <iostream>
  #include <cstring>
  #include <algorithm>
  // 可以自定义cmp来控制根据哪个值升降序， a < b 为升序 ； a > b 为降序
  // 根据first的值升序排序
  bool cmp1(pair<int,int>a,pair<int,int>b)
  {
      return a.first < b.first;
  }
   
  // 根据second的值升序排序
  bool cmp2(pair<int, int>a, pair<int, int>b)
  {
      return a.second < b.second;
  }
  
  int main()
  {
      vector<pair<int, int> > vec; // 定义数据结构
      vector<pair<int, int> >::iterator it; // 定义迭代器
      vec.push_back({ 1,2 });
      vec.push_back({ 4,2 });
      vec.push_back({ 3,3 });
      vec.push_back({ 2,1 });
      sort(vec.begin(), vec.end(), cmp1);
      cout << "根据first的值升序排序:" << endl;
      for (it = vec.begin();it != vec.end();it++)
      {
          cout << "(" << it->first << "," << it->second << ")" << endl;
      }
      sort(vec.begin(), vec.end(), cmp2);
      cout << "根据second的值升序排序:" << endl;
      for (it = vec.begin();it != vec.end();it++)
      {
          cout << "(" << it->first << "," << it->second << ")" << endl;
      }
      return 0;
  }
  ```

  **一般和其他数据结构搭配使用**

### 3.3 priority_queue 优先队列

- **引入：** `#include <queue>`

- **声明：**

  ```cpp
  //升序队列
  priority_queue <int,vector<int>,greater<int> > pq;
  //降序队列
  priority_queue <int,vector<int>,less<int> > pq;
  
  //greater和less是std实现的两个仿函数（就是使一个类的使用看上去像一个函数。其实现就是类中实现一个operator()，这个类就有了类似函数的行为，就是一个仿函数类了）
  
  // 对于基础类型，默认为大顶堆
  priority_queue<int> pq; 
  // 这样声明小顶堆
  priority_queue<int, vector<int>, greater<int> > pq1;
  ```

- **用法：**

  | 成员函数 |       作用       |
  | :------: | :--------------: |
  |  size()  | 返回队列元素个数 |
  | empty()  |       判空       |
  |  push()  |   插入一个元素   |
  |  top()   |   返回堆顶元素   |
  |  pop()   |   弹出堆顶元素   |
  

### 3.4 deque 双端队列

  - **引入：** `#include<deque>`

  - **声明：**

    ```cpp
    deque<T> deq;  // 声明一个元素类型为type的双端队列que
    deque<T> deq1(size);  // 声明一个类型为T、含有size个默认值初始化元素的的双端队列que1
    deque<T> deq2(size, value);  // 声明一个元素类型为T、含有size个value元素的双端队列que2
    deque<T> deq3(deq2);  // deq3是deq2的一个副本
    deque<T> deq4(first, last);  // 使用迭代器first、last范围内的元素初始化deq4
    ```
    
- **用法：**

  |          成员函数          |                            作用                            |
  | :------------------------: | :--------------------------------------------------------: |
  |           size()           |                        返回元素个数                        |
  |          empty()           |                            判空                            |
  |          clear()           |                          清空队列                          |
  |      front() / back()      |                 返回第一个 / 最后一个元素                  |
  | push_front() / pop_front() |                    头插 / 弹出队头元素                     |
  |  push_back() / pop_back()  |                    尾插 / 弹出队尾元素                     |
  |      begin() / end()       | 返回迭代器，一般用来排序如：`sort(obj.begin(),obj.end());` |
  |           deq[i]           |                       返回第i个元素                        |

### 3.5 map, multimap 图

- **引入：** `#include<map>`

- **区别：** 

  - map的键值key不可重复，而multimap可以。因此，**map支持[ ]运算符，multimap不支持[ ]运算符**
  - 用法上没有区别

- **声明：** 

  ```cpp
  //头文件
  #include<map>
   
  map<int, string> map;
   
  // 使用{}赋值是从c++11开始的，因此编译器版本过低时会报错，如visual studio 2012
  map<int, string> map1 = {
                  { 2019, "大一" },
                  { 2020, "大二" },
                  { 2021, "大三" } };
  ```

- **用法：**

  |            成员函数             |                         作用                          |
  | :-----------------------------: | :---------------------------------------------------: |
  |             size()              |                  返回map中元素的个数                  |
  |             empty()             |                         判空                          |
  |             clear()             |                     清空所有元素                      |
  |         begin() / end()         |            返回指向map头部 / 末尾的迭代器             |
  |            insert(x)            |               插入一个元素x，一般为pair               |
  |             find(x)             | 返回一个迭代器指向键值为x的元素，没有x就返回map.end() |
  |            count(x)             |                返回指定元素出现的次数                 |
  |            erase(x)             |                     删除指定元素                      |
  | lower_bound(x) / upper_bound(x) |     返回迭代器，指向 ≥ / ＞ x 的第一个元素的位置      |

### 3.6 set, multiset 集合

- **引入：** `#include <set>`

- **区别：** 

  - **multiset**特性及用法和set完全相同，**唯一的差别在于它允许键值重复**。
  - 用法上没有区别

- **声明：** 

  ```cpp
  //头文件
  #include <set>
   
  //set容器默认从小到大排序
  set<int> s;
  ```

- **用法：**

  |            成员函数             |                     作用                     |
  | :-----------------------------: | :------------------------------------------: |
  |             size()              |             返回map中元素的个数              |
  |             empty()             |                     判空                     |
  |             clear()             |                 清空所有元素                 |
  |         begin() / end()         |        返回指向map头部 / 末尾的迭代器        |
  |            insert(x)            |                插入一个元素x                 |
  |             find(x)             |            返回一个指向x的迭代器             |
  |            count(x)             |            返回指定元素出现的次数            |
  |            erase(x)             |                 删除指定元素                 |
  | lower_bound(x) / upper_bound(x) | 返回迭代器，指向 ≥ / ＞ x 的第一个元素的位置 |

### 3.7 unordered_set, unordered_map, unordered_multiset, unordered_multimap 哈希表

- **注：** 
  - 和`set、map、multiset、multimap`类似，增删改查的时间复杂度是 O(1)
  - 不支持 lower_bound()/upper_bound()， 迭代器的++，--
  - 整体实现是基于哈希表



## 4. 引用和更多

**目前学习STL是为了刷算法题而不是更深层次的学习C++的基础知识，所以很多东西没有学到，就没有写在文档里**

**如果需要更深入的学习，请移步下面的博客或网站**

**注：本篇文档内也有部分内容引用自如下两处**

- [CSDN博主 HUST_Miao](https://blog.csdn.net/u010183728/article/details/81913729)

- [C语言中文网](http://c.biancheng.net/stl/)