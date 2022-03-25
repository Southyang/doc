---
title: Nginx
date: 2022-03-25 16:38:16
permalink: /pages/41197f/
---
### Nginx安装

```shell
# 先安装依赖
# 第一步 联网下载 pcre 压缩文件依赖
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
tar –xvf pcre-8.37.tar.gz
# 进入pcre的安装文件夹执行./configure,make,make install命令
cd pcre-8.37
./configure
make
make install
# 查看pcre版本
pcre-config --version

# 安装其他依赖
yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel

# 安装Nginx
# 从官网下载一个tar.gz压缩包,假设叫xxx
tar –xvf xxx.tar.gz
cd xxx
./configure
make
make install

# Nginx安装完毕
```

### Nginx指令

```shell
# 进入 nginx 目录中
cd /usr/local/nginx/sbin
# 查看 nginx 版本号
./nginx -v 
# 启动 nginx
./nginx
# 停止 nginx
./nginx -s stop
# 重新加载 nginx
./nginx -s reload
```

### Nginx配置

```shell
# 配置文件
```



