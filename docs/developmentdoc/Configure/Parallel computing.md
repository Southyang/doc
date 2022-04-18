---
title: Parallel computing
date: 2022-03-25 16:38:16
permalink: /pages/2bcd2b/
---
### MPI环境配置

```shell
sudo apt-get update
apt-get install mpich
```

### mpirun指令

`mpirun [mpirun-options…] [options…]`

> -np 　    要加载的进程个数。
>
> -p4pg 　按照pgfile文件中的要求加载用户进程。pgfile文件描述用户在那些结点上加载什么样的用户进程。该文件的格式为：
>
> 第一行：<结点名> <0> <用户要加载的进程--允许使用绝对路径>
> 　　第二行：<结点名> <1> <用户要加载的进程--允许使用绝对路径>
> 　　　　　　　　　　　　　　......
> 　　第n行：<结点名> <1> <用户要加载的进程--允许使用绝对路径>

`mpirun -np 4 ./test`

### MPI编译

```shell
mpicxx -g -Wall -o test test.cpp # C++用这个
mpicc hello.c -o hello # C两个都能用
```

### OpenMP编译

```shell
g++ -fopenmp filename.cpp/c -o filename
```

