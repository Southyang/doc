---
title: Go Web basics
date: 2022-05-14 21:38:57
permalink: /pages/9afc5e/
---
# Go Web基础知识

## 1. 万能开头之Hello World

```go
package main

import (
	"fmt"
	"net/http"
)

func hello1(w http.ResponseWriter, r *http.Request) { // 编写hello1()函数
	fmt.Fprintf(w, "Hello World")
}

func main() {
	server := &http.Server{ // 设置端口号
		Addr: "0.0.0.0:80",
	}
    http.HandleFunc("/", hello1) // 路由 "/" 对应 hello()函数
	server.ListenAndServe() // 监听端口
}
```

当我们把程序运行起来，访问`localhost`，就会在屏幕上打印出`Hello World`

### 1.1 小Tip

**关于Web程序运行原理、请求体、请求头、session、cookie等请自行查阅其余web教程**



## 2. 简单的服务器端和客户端

### 2.1 几个小细节

- **handle()是对某个资源的抽象应用，handler是异步的回调函数**

- **handler()和handlerFunc()的区别**

  ```go
  // http.Handle()
  func Handle(pattern string, handler Handler) { DefaultServeMux.Handle(pattern, handler) }
  
  // 第二个参数是Handler这个接口, 这个接口有一个ServeHTTP()的方法
  type Handler interface {
  	ServeHTTP(ResponseWriter, *Request)
  }
  
  // 所以这个方法使用的时候需要自己去定义struct实现这个Handler接口。
  package main
  
  import (
  	"net/http"
  	"log"
  )
  type httpServer struct {
  }
  func (server httpServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  	w.Write([]byte(r.URL.Path))
  }
  func main() {
  	var server httpServer
  	http.Handle("/", server)
  	log.Fatal(http.ListenAndServe(":8080", nil))
  }
  ```

  ```go
  // http.HandleFunc
  func HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {
  	DefaultServeMux.HandleFunc(pattern, handler)
  }
  // 这个第二个参数是一个方法，参数是ResponseWriter, 和 *Request 所以使用的时候需要传方法。
  package main
  
  import (
  	"net/http"
  	"log"
  )
  func getUrl(w http.ResponseWriter, r *http.Request) {
  	w.Write([]byte(r.URL.Path))
  }
  func main() {
  	http.HandleFunc("/", getUrl)
      log.Fatal(http.ListenAndServe(":8080", nil))
  }
  ```

- **log.Fatal()和panic()的区别**

  ```go
  // log.Fatal()函数不会执行defer函数
  // panic()函数会执行完所有的defer函数，类似于java的exception
  ```

  

### 2.2 创建服务器端

```go
package main

import "net/http"

func hello2(w http.ResponseWriter, r *http.Request) { // 路由调用的函数
	w.Write([]byte("Hello World"))
}

func main2() {
    // 创建Web服务器端两步走
    http.HandleFunc("/hello", hello2) // ①调用http.HandleFunc()函数，确定路由
    http.ListenAndServe(":8080", nil) // ②调用http.ListenAndServe()函数，确定并监听端口
}
```



### 2.3 制作简单的拦截器

```go
package main

import (
	"fmt"
	"net/http"
)
// type HandlerFunc func(ResponseWriter, *Request)
// 拦截器返回一个函数供调用，在这个函数里添加自己的逻辑判断即可 
// h(w,r)及是调用用户自己的处理函数。h 是函数指针
func handleIterceptor(h http.HandlerFunc) http.HandlerFunc { // 拦截器，拦截请求，检查请求referer
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("handleIterceptor")
		w.Write([]byte("handleIterceptor\n"))
		if r.Referer() == "localhost" { // 如果请求的referer验证成功，就执行对应的逻辑函数
			h(w, r)
		}
	}
}

func hello3(w http.ResponseWriter, r *http.Request) { // 对应端口的逻辑操作
	w.Write([]byte("hello"))
}

func main() {
	// 创建Web服务器端两步走
	http.HandleFunc("/hello", handleIterceptor(hello3)) // ①调用http.HandleFunc()函数，确定路由
	// 用referer做请求拦截，当监听到对8080端口的访问时，做拦截，判断请求的referer是否正确
	http.ListenAndServe(":8080", nil) // ②调用http.ListenAndServe()函数，确定并监听端口
}
```



### 2.4 创建客户端并发送请求

```go
package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strings"
)

func doGet(http.ResponseWriter, *http.Request) { // doget路由
	response, err := http.Get("https://www.taobao.com") // 发送get请求
	if err != nil {
		fmt.Println("err", err)
	}
	bodyBytes, err := ioutil.ReadAll(response.Body) // 读取响应体的body
	fmt.Println(string(bodyBytes))                  // 打印
}

func doPost(http.ResponseWriter, *http.Request) { // dopost路由
	url := "https://www.shirdon.com/comment/add"
	body := "{\"userId\":1,\"articleId\":1,\"comment\":\"这是一条评论\"}"                                      // 设定请求参数
	response, err := http.Post(url, "·application/x-www-form-urlencoded", bytes.NewBuffer([]byte(body))) // 发送post请求
	if err != nil {
		fmt.Println("err", err)
	}
	bodyBytes, err := ioutil.ReadAll(response.Body)
	fmt.Println(string(bodyBytes))
}

func doPut(http.ResponseWriter, *http.Request) { // doput路由
	url := "https://www.shirdon.com/comment/add"
	payload := strings.NewReader("{\"userId\":1,\"articleId\":1,\"comment\":\"这是一条评论\"}")
	request, _ := http.NewRequest("PUT", url, payload)     // put和delete请求没有封装好的函数，需要手动创建请求
	request.Header.Add("Content-Type", "application/json") // 添加请求头信息
	response, _ := http.DefaultClient.Do(request)          // 发送请求

	defer func(Body io.ReadCloser) { // 关闭响应体body
		err := Body.Close()
		if err != nil {
			fmt.Println("关闭失败")
		}
	}(response.Body)
	bodyBytes, _ := ioutil.ReadAll(response.Body)
	fmt.Println(string(bodyBytes))
}

func doDelete(http.ResponseWriter, *http.Request) { // dodelete路由
	url := "https://www.shirdon.com/comment/add"
	payload := strings.NewReader("{\"userId\":1,\"articleId\":1,\"comment\":\"这是一条评论\"}")
	request, _ := http.NewRequest("DELETE", url, payload)
	request.Header.Add("Content-Type", "application/json")
	response, _ := http.DefaultClient.Do(request)

	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			fmt.Println("关闭失败")
		}
	}(response.Body)
	bodyBytes, _ := ioutil.ReadAll(response.Body)
	fmt.Println(string(bodyBytes))
}

func hello(w http.ResponseWriter, _ *http.Request) { // /hello路由
	_, err := w.Write([]byte("hello"))
	if err != nil {
		return
	}
}

func main() {
	// ①调用http.HandleFunc()函数，确定路由
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/doget", doGet)
	http.HandleFunc("/dopost", doPost)
	http.HandleFunc("/doput", doPut)
	http.HandleFunc("/dodelete", doDelete)
	// ②调用http.ListenAndServe()函数，确定并监听端口
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		return
	}
}
```



## 3. 接受和处理Go Web请求

### 3.1 HttpRouter路由包

**我们使用`HttpRouter`这个HTTP路由包来帮助我们处理请求**

**安装**

```
go get -u github.com/julienschmidt/httprouter
```

**使用：**

- 首先使用`httprouter.New()`函数生成`*Router`路由对象
- 然后使用`GET()`方法**注册**一个适配**` / `**路径的`Index`函数
- 最后将`*Router`对象作为参数传给`ListenAndServe()`函数即可启动`HTTP服务`



### 3.2 HttpRouter包的基本使用

```go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

type JsonData struct {
	Message string `json:"message"`
}

func defaultGet(writer http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	writer.Write([]byte("default get"))
}

func defaultPost(writer http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	writer.Write([]byte("default post"))
}

func preciseMatch(writer http.ResponseWriter, _ *http.Request, params httprouter.Params) {
	writer.Write([]byte("username:" + params.ByName("name")))
}

func allMatch(writer http.ResponseWriter, _ *http.Request, params httprouter.Params) {
	writer.Write([]byte("username:" + params.ByName("name")))
}

func notFoundPage(writer http.ResponseWriter, _ *http.Request) {
	writer.Write([]byte("页面没有找到"))
}

func getJson(writer http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	jsonData := JsonData{"Hello World的json格式"}
	message, _ := json.Marshal(jsonData)
	writer.Write(message)
}

func main() {
	router := httprouter.New()         // 生成路由对象
	router.GET("/default", defaultGet) // 注册Get请求路由函数
	router.POST("/default", defaultPost) // 注册Post请求路由函数
	router.GET("/user/:name", preciseMatch) // 精确匹配 :name
	router.GET("/alluser/*name", allMatch)  // 匹配所有 *name
    
	// 第一个参数必须是/*filepath形式，第二个参数为文件目录
	router.ServeFiles("/static/*filepath", http.Dir("./static")) // 匹配所有 *filepath，用来打开静态文件
    // 获得json格式的返回数据
	router.GET("/getjson", getJson)
    
	// 异常统一处理
	router.PanicHandler = func(writer http.ResponseWriter, request *http.Request, i interface{}) { 
		writer.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(writer, "error:%s", i)
	}
	// 同理handleFunc和handlerFunc
	router.NotFound = http.HandlerFunc(notFoundPage) // 404页面统一处理

	log.Fatal(http.ListenAndServe(":8080", router))
}
```



### 3.3 Handler处理不同的二级域名

```go
package main

import (
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

type HostMap map[string]http.Handler

func (hs HostMap) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// 先根据域名获取对应的Handler路由，然后分发
	handler := hs[r.Host]
	if handler != nil {
		handler.ServeHTTP(w, r)
	} else {
		http.Error(w, "Forbidden", 403)
	}
}

func sub1(writer http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	writer.Write([]byte("sub1"))
}

func sub2(writer http.ResponseWriter, _ *http.Request, _ httprouter.Params) {
	writer.Write([]byte("sub2"))
}

func main() {
	userRouter := httprouter.New()
	userRouter.GET("/", sub1)

	dataRouter := httprouter.New()
	dataRouter.GET("/", sub2)

	// 分别处理不同的二级域名
	hs := make(HostMap)
	hs["sub1.localhost:8080"] = userRouter
	hs["sub2.localhost:8080"] = dataRouter

	log.Fatal(http.ListenAndServe(":8080", hs))
}
```



### 3.4 完整项目包括

**以下是我个人的理解**

- 完整的API项目
  - 处理器分发请求
  - 控制器调用模型
  - 模型操作数据库
  - 通过HTTP报文传输给客户端
- 完整的WEB项目
  - 处理器分发请求
  - 控制器调用模型
  - 模型操作数据库
  - 通过模板引擎将模型从数据库中返回的数据和模板拼接，生成HTML或其他格式的文档
  - 通过HTTP报文传输给客户端



## 4. 用Go访问数据库

**建议购买云数据库来降低环境配置难度，懒人如我是不可能自己配环境的**

### 4.1 MySQL的安装及使用

#### 4.1.1 MySQL安装

- 进入Mysql官网，选择操作系统对应的安装包进行下载即可

#### 4.1.2 MySQL入门

MySQL是一个关系型数据库

```sql
/* data_base_name是数据库名 data_table_name是数据表名*/

/* (1)创建数据库 */
CREATE DATABASE data_base_name;

/* (2)选择数据库 */
USE databse_name;

/* (3)查看数据库 */
SHOW DATABASES [LIKE 'data_base_name'];

/* (4)修改数据库 */
ALTER DATABASE [data_base_name]

/* (5)删除数据库 */
DROP DATABASE [IF EXISTS] data_base_name;

/* (6)创建数据表 */
CREATE TABLE data_table_name ([表定义选项])[表选项][分区选项];

/* (7)查看数据表 */
  /* 以表格形式展示表的字段信息 */
DESCRIBE data_table_name;
DESC data_table_name;
  /* 以SQL形式展示表的字段信息 */
SHOW CREATE TABLE data_table_name;

/* (8)修改数据表 */
ALTER TABLE data_table_name [修改选项]

/* (9)删除数据表 */
DROP TABLE [IF EXISTS] data_table_name [data_table_name1, data_table_name2……]

/* (10)数据库语句 */
INSERT [INTO] data_table_name [(列名1， 列名2……)] VALUES (值1， 值2……)
SELECT 列名 FROM 表名 [查询条件]
UPDATE 表名 SET 列名 = 新值 WHERE 更新条件
DELETE FROM 表名 WHERE 删除条件
```

#### 4.1.3 用Go访问MySQL

**安装：** 

```shell
go get -u github.com/go-sql-driver/mysql
```

**基础操作的使用示例：**

- 导入依赖包
  - 没有直接使用`github.com/go-sql-driver/mysql`包中的对象，所以在导入包前加上了`下划线 _`

- 初始化数据库连接
  - 用`Ping()`方法检查数据源名称是否合法
  - 只需要调用一次`Open()`函数即可
  - `SetMaxOpenConns(n int)`方法设置最大连接数目
  - `SetMaxldleConns(n int)`方法设置最大闲置连接数目
- 用`QueryRow()`进行单行查询
  - 执行一次查询，返回最多一行结果
  - 要确保在`QueryRow()`方法之后调用`Scan()`方法来释放数据库连接
- 用`Query()`进行多行查询
  - 执行一次查询，返回多行结果
  - 要对查询到的多行结果执行`defer rows.Close()`，延迟释放数据库连接
- 用`Exec()`插入、更新、删除数据
  - `Exec()`方法用于执行一次命令，返回`result`表示已执行命令的执行结果
- `MySQL`预处理
  - 预处理将SQL语句分成命令部分和数据部分，先由MySQL服务器端对命令部分进行预处理，再将数据部分发送给MySQL服务器端，由MySQL服务器端对命令部分进行占位符替换，最后执行完整的语句并将结果返回给客户端
  - 预处理的好处：优化MySQL服务器重复执行SQL语句的问题，提升服务器性能；节省编译成本；避免SQL注入问题
- 实现`MySQL`事务
  - 事务是一个最小的、不可再分的工作单元；通常一个事务对应一个完整的业务
  - 事务处理用来维护数据库的完整性，保证成批的SQL语句要么全部执行，要么全部不执行

```go
package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

// 定义数据库
var db *sql.DB

// 定义数据结构
type User struct {
	Uid      int
	UserName string
	Phone    string
}

// 定义一个全局变量
var u User

// 初始化数据库连接
func initMySQLDB() {
	println("Init MySQLDB link Start")
	db, _ = sql.Open("mysql", "username:password@tcp(url:port)/database")

	// 尝试与数据库建立连接
	err := db.Ping()
	if err != nil {
		fmt.Printf("Init DB link failed, error:%v\n", err)
		return
	}
	println("Init MySQLDB link Success")
}

// 单行查询示例
func querySingleRow(table string, uid int) {
	println("QuerySingleRow Start")
	sqlString := "select uid, username, phone from %s where uid = ?"
	sqlStatements := fmt.Sprintf(sqlString, table)
	// QueryRow()之后使用Scan()的作用是释放数据库连接
	err := db.QueryRow(sqlStatements, uid).Scan(&u.Uid, &u.UserName, &u.Phone)
	if err != nil {
		fmt.Printf("QuerySingleRow Scan failed, error:%v\n", err)
		return
	}
	fmt.Printf("uid:%d  username:%s  phone:%s\n", u.Uid, u.UserName, u.Phone)
	println("QuerySingleRow Success")
}

// 多行查询示例
func queryMultiRow(table string, uid int) {
	println("QueryMultiRow Start")
	sqlString := "select uid, username, phone from %s where uid > ?"
	sqlStatements := fmt.Sprintf(sqlString, table)
	rows, err := db.Query(sqlStatements, uid)
	if err != nil {
		fmt.Printf("QueryMultiRow failed, error:%v\n", err)
		return
	}
	// 关闭rows，释放数据库连接
	defer rows.Close()
	// 循环读取rows中的数据
	for rows.Next() {
		err = rows.Scan(&u.Uid, &u.UserName, &u.Phone)
		if err != nil {
			fmt.Printf("QueryMultiRow Scan failed, error:%v\n", err)
			return
		}
		fmt.Printf("uid:%d  username:%s  phone:%s\n", u.Uid, u.UserName, u.Phone)
	}
	println("QueryMultiRow Success")
}

// 插入数据示例
func insertRow(table, username, phone string) {
	println("InsertRow Start")
	sqlString := "insert into %s(username,phone) values (?,?)"
	sqlStatements := fmt.Sprintf(sqlString, table)
	result, err := db.Exec(sqlStatements, username, phone)
	if err != nil {
		fmt.Printf("InsertRow failed, error:%v\n", err)
		return
	}
	// 获取最新插入数据的uid
	uid, err := result.LastInsertId()
	if err != nil {
		fmt.Printf("Get LastInsertId failed, error:%v\n", err)
		return
	}
	fmt.Printf("The uid is %d.\n", uid)
	println("InsertRow Success")
}

// 更新数据示例
func updateRow(table, username string, uid int) {
	println("UpdateRow Start")
	sqlString := "update %s set username=? where uid = ?"
	sqlStatements := fmt.Sprintf(sqlString, table)
	result, err := db.Exec(sqlStatements, username, uid)
	if err != nil {
		fmt.Printf("UpdateRow failed, error:%v\n", err)
		return
	}
	// 操作影响的行数
	num, err := result.RowsAffected()
	if err != nil {
		fmt.Printf("Get the number of affected rows(update) failed, error:%v\n", err)
		return
	}
	fmt.Printf("The number of affected rows(update) is %d.\n", num)
	println("UpdateRow Success")
}

// 删除数据示例
func deleteRow(table string, uid int) {
	println("DeleteRow Start")
	sqlString := "delete from %s where uid = ?"
	sqlStatements := fmt.Sprintf(sqlString, table)
	result, err := db.Exec(sqlStatements, uid)
	if err != nil {
		fmt.Printf("DeleteRow failed, error:%v\n", err)
		return
	}
	// 操作影响的行数
	num, err := result.RowsAffected()
	if err != nil {
		fmt.Printf("Get the number of affected rows(delete) failed, error:%v\n", err)
		return
	}
	fmt.Printf("The number of affected rows(delete) is %d.\n", num)
	println("DeleteRow Success")
}

// 预处理查询示例
func prepareQuery(table string, uid int) {
	println("PrepareQuery Start")
	sqlString := "select uid, username, phone from %s where uid > ?"
	sqlStatements := fmt.Sprintf(sqlString, table)
	statements, err := db.Prepare(sqlStatements)
	if err != nil {
		fmt.Printf("Prepare failed, error:%v\n", err)
		return
	}
	defer statements.Close()

	rows, err := statements.Query(uid)
	if err != nil {
		fmt.Printf("PrepareQuery failed, error:%v\n", err)
		return
	}
	defer rows.Close()
	// 循环读取结果集中的数据
	for rows.Next() {
		err := rows.Scan(&u.Uid, &u.UserName, &u.Phone)
		if err != nil {
			fmt.Printf("PrepareQuery Scan failed, error:%v\n", err)
			return
		}
		fmt.Printf("uid:%d username:%s phone:%s\n", u.Uid, u.UserName, u.Phone)
	}
	println("PrepareQuery Success")
}

// 预处理插入示例
func prepareInsert(table, username, phone string) {
	println("PrepareInsert Start")
	sqlString := "insert into %s(username,phone) values (?,?)"
	sqlStatements := fmt.Sprintf(sqlString, table)
	statements, err := db.Prepare(sqlStatements)
	if err != nil {
		fmt.Printf("Prepare failed, error:%v\n", err)
		return
	}
	defer statements.Close()

	result, err := statements.Exec(username, phone)
	if err != nil {
		fmt.Printf("PrepareInsert failed, error:%v\n", err)
		return
	}
	// 获取最新插入数据的uid
	uid, err := result.LastInsertId()
	if err != nil {
		fmt.Printf("Get LastInsertId failed, error:%v\n", err)
		return
	}
	fmt.Printf("The uid is %d.\n", uid)
	println("PrepareInsert Success")
}

// 实现MySQL事务
func transaction() {
	println("Exec transaction Start")
	tx, err := db.Begin() // 开启事务
	if err != nil {
		if tx != nil {
			tx.Rollback() // 回滚
		}
		fmt.Printf("Begin transaction failed, error:%v\n", err)
		return
	}
	_, err = tx.Exec("update go_user set username='TransactionTest1' where uid=?", 1)
	if err != nil {
		tx.Rollback() // 回滚
		fmt.Printf("Exec sql1 failed, err:%v\n", err)
		return
	}
	_, err = tx.Exec("update go_user set username='TransactionTest2' where uid=?", 3)
	if err != nil {
		tx.Rollback() // 回滚
		fmt.Printf("Exec sql2 failed, err:%v\n", err)
		return
	}
	err = tx.Commit() // 提交事务
	if err != nil {
		tx.Rollback() // 回滚
		fmt.Printf("Commit failed, err:%v\n", err)
		return
	}
	fmt.Println("Exec transaction Success")
}

func main() {
	initMySQLDB()
	//querySingleRow("go_user", 1)
	//queryMultiRow("go_user", 0)
	//insertRow("go_user", "InsertTest", "17800000002")
	//updateRow("go_user", "UpdateTest", 1)
	//deleteRow("go_user", 2)
	//prepareQuery("go_user", 0)
	//prepareInsert("go_user", "PrepareInsertTest", "17800000003")
	transaction()
}
```



### 4.2 Redis的安装及使用

#### 4.2.1 Redis安装

- [这个博客写的还不错](https://www.cnblogs.com/hunanzp/p/12304622.html)

#### 4.2.2 Redis入门

Redis是一个Key-Value型数据库，通常被称为数据结构服务器

可用于缓存、事件发布、订阅、高速队列等场景

[Redis 命令参考](http://redisdoc.com/index.html)

```sql
/* 字符串 */
字符串是Redis的基本数据结构之一，由Key和Value组成
(1)查看所有的key
keys *
(2)创建字符串
set key value
(3)读取字符串
get key
(4)修改key中的值，NX的作用是不覆盖旧值
set key new_value [NX]
(5)在value后追加字符串
append key value
(6)如果key存储的是数字，可以对数字进行修改
让key中数字加一： incr key
让key中数字减一： decr key
让key中数字加n： incrby key n
让key中数字减n： decrby key n
(7)删除key
del key

/* 哈希(Hash) */
Hash是一个string类型的field字段和value值的映射表，适合用户存储对象
(1)添加数据
添加一个键值对：   hset key field value
添加多个键值对：   hmset key field1 value1 [field2 value2]
不修改已存在字段:  hsetnx key field value
(2)获得数据
获得一个字段的值：    hget key field
获得多个字段的值：    hmget key field1 [field2]
获得所有字段的名和值： hgetall key
判断是否存在字段：    HEXISTS key field
(3)获得字段数量
hlen key

/* 列表 */
左进右出，适合用于消息列表
(1)插入数据

lpush key value
rpush key value
(2)获得列表长度
llen key
(3)查看数据
lrange key 开始索引 结束索引
(4)弹出数据（弹出后删除数据）
lpop key
rpop key

/* 集合(Set) */
数据是无序的，不能重复
(1)添加数据
sadd key value1 value2 value3
(2)获得集合中元素
获得成员数量： scard key
获得所有成员： smembers key

/* 有序集合 */
相比于集合，有序集合的元素会关联一个double类型的分数，其中元素不能重复，但分数可以重复，可用于高并发场景的数据更新且需要实时获取排名
(1)添加数据
zadd key score1 member1 [score2 member2]
(2)修改数据
zadd key NX score member
(3)获取数据
zrangebyscore key min max [WITHSCORES] [LIMIT offset count]
(4)获得排名
zrank key member
(5)获取一个值的评分
zscore key member
(6)查看某个评分范围内的值有多少
zcount key min max
```

#### 4.2.3 用Go访问Redis

**安装**

```shell
go get github.com/gomodule/redigo
```

**基础操作的使用示例：**

- 设置和获取字符串
  - 最常用的方法是`Do()`方法，可以直接支持Redis的`Set`、`Get`、`MSet`、`MGet`、`HSet`、`HGet`、`expire`等常用命令
  - `redis.String()`方法可以用来获取字符串
  - `redis.String()`方法可以用来批量获取字符串
- 设置过期时间
  - 通过`Do()`方法设置某个值的过期时间，可用于验证码
- `Redis`连接池
  - 在一次数据交互中建立连接占用了大部分时间
  - 连接池可以实现与客户端建立多个与服务器的连接而不释放。当需要连接的时候通过一定算法获取已建立的连接，使用过后再还给连接池，免去了连接服务器所占用的时间
- `Redis`实现管道操作
  - 请求/响应服务可以实现持续处理新请求。客户端可以发送多个命令到服务器而无需等待响应，最后一次性读取多个响应
  - `Send()`方法用于向连接的输出缓冲中写入命令
  - `Flush()`方法用于将连接的输出缓冲清空并写入服务器端
  - `Receive()`方法用于按照FIFO顺序依次读取服务器端的响应
  - Redis管道可以用于高并发场景，因为客户端无需等待响应，只需要发送多条命令到服务器端，按照顺序读取响应即可
- `Redis`实现事务
  - `MULTI`：开启事务
  - `EXEC`：执行事务
  - `DISCARD`：取消事务
  - `WATCH`：监视事务中的键变化，一旦有改变则取消事务

```go
package main

import (
	"fmt"
	"github.com/gomodule/redigo/redis"
)

var pool *redis.Pool

// 初始化Redis数据库连接池
func initRedisDB() {
    // 默认使用DB0，如果需要使用其他数据库需要设置redis.DialDatabase()
	// setdb := redis.DialDatabase(12)
	println("Init RedisDB link Start")
	pool = &redis.Pool{
		MaxIdle:     16,
		MaxActive:   1024,
		IdleTimeout: 300,
		Dial: func() (redis.Conn, error) {
			return redis.Dial("tcp", "r-uf6mtfiwaxhf4difm6pd.redis.rds.aliyuncs.com:6379",
				redis.DialPassword("200199Yhn"),
			)
		},
	}
	println("Init RedisDB link Success")
}

// 设置字符串
func setData(conn redis.Conn, key, value string) {
	println("Set Start")
	_, err := conn.Do("Set", key, value)
	if err != nil {
		fmt.Println("Set failed, error:", err)
		return
	}
	println("Set Success")
}

// 获取字符串
func getData(conn redis.Conn, key string) {
	println("Get Start")
	r, err := redis.String(conn.Do("Get", key))
	if err != nil {
		fmt.Println("Get failed, error:", err)
		return
	}
	fmt.Println("Get result", r)
	println("Get Success")
}

// 批量设置字符串
func msetData(conn redis.Conn) {
	println("MSet Start")
	_, err := conn.Do("MSet", "username", "MSetTest", "phone", "18888888888")
	if err != nil {
		fmt.Println("MSet failed, error:", err)
		return
	}
	println("MSet Success")
}

// 批量获取字符串
func mgetData(conn redis.Conn) {
	println("MGet Start")
	r, err := redis.Strings(conn.Do("MGet", "username", "phone"))
	if err != nil {
		fmt.Println("MGet failed, error:", err)
		return
	}
	fmt.Println("MGet result", r)
	println("MGet Success")
}

// 设置哈希类型数据
func setHashData(conn redis.Conn) {
	println("HSet Start")
	_, err := conn.Do("HSet", "Hash", "SetHashTest", "Test1")
	if err != nil {
		fmt.Println("HSet failed, error:", err)
		return
	}
	println("HSet Success")
}

// 获取哈希类型数据
func getHashData(conn redis.Conn) {
	println("HGet Start")
	// 注意这里要用redis.String()，返回类型为stirng，Strings的返回类型为[]string
	r, err := redis.String(conn.Do("HGet", "Hash", "SetHashTest"))
	if err != nil {
		fmt.Println("HGet failed, error:", err)
		return
	}
	fmt.Println("HGet result:", r)
	println("HGet Success")
}

// 设置过期时间
func setExpire(conn redis.Conn, key string) {
	println("Expire Start")
	_, err := conn.Do("expire", key, 30)
	if err != nil {
		fmt.Println("Expire error:", err)
		return
	}
	println("Expire Success")
}

// 将数据压入队列，采用左侧压入
func pushQueue(conn redis.Conn) {
	println("PushQueue Start")
	_, err := conn.Do("lpush", "Queue", "LpushTest", "Test1", 9)
	if err != nil {
		fmt.Println("PushQueue error:", err)
		return
	}
	println("PushQueue Success")
}

// 将数据弹出队列，采用左侧弹出
func popQueue(conn redis.Conn) {
	println("PopQueue Start")
	r, err := redis.String(conn.Do("lpop", "Queue"))
	if err != nil {
		fmt.Println("PopQueue error:", err)
		return
	}
	fmt.Println("PopQueue result:", r)
	println("PopQueue Success")
}

// 获取队列长度
func getQueueLen(conn redis.Conn) {
	println("GetQueueLen Start")
	r, err := redis.Int(conn.Do("llen", "Queue"))
	if err != nil {
		fmt.Println("GetQueueLen error:", err)
		return
	}
	fmt.Println("GetQueueLen result:", r)
	println("GetQueueLen Success")
}

// 管道操作，可用于并发
func pipOperat(conn redis.Conn) {
	println("PipOperat Start")
	conn.Send("SET", "username1", "PipTest1")
	conn.Send("SET", "username2", "PipTest2")
	conn.Flush()
	status, err := conn.Receive()
	fmt.Printf("v:%v,err:%v\n", status, err)
	status, err = conn.Receive()
	fmt.Printf("v:%v,err:%v\n", status, err)
	status, err = conn.Receive() // 一直等待
	fmt.Printf("v:%v,err:%v\n", status, err)
	println("Pip Operation Success")
}

// 事务操作
func transactionRedis(conn redis.Conn) {
	println("TransactionRedis Start")
	conn.Send("MULTI")
	conn.Send("INCR", "TranscationTest1")
	conn.Send("INCR", "TranscationTest2")
	result, err := conn.Do("EXEC")
	if err != nil {
		fmt.Println("TransactionRedis error:", err)
		return
	}
	fmt.Println(result)
	println("TransactionRedis Success")
}

func main() {
	initRedisDB()
	conn := pool.Get()
	defer conn.Close()

	//setData(conn, "username", "SetTest")
	//getData(conn, "username")
	//msetData(conn)
	//mgetData(conn)
	//setHashData(conn)
	//getHashData(conn)
	//setExpire(conn, "Hash")
	//pushQueue(conn)
	//popQueue(conn)
	//getQueueLen(conn)
	//pipOperat(conn)
	transactionRedis(conn)
}
```



### 4.3 MongoDB的安装及使用

**注：因为个人学习没有应用到MongoDB，所以打算之后再学习MongoDB，补充相应的笔记**

#### 4.3.1 MongoDB安装

- 进入MongoDB官网下载安装即可

#### 4.3.2 MongoDB入门

MongoDB是一种非关系型数据库，基于分布式文件存储，使用C++语言编写

作用是为Web应用提供可扩展的高性能数据存储解决方案

[MongoDB中文网](https://www.mongodb.org.cn/tutorial/1.html)

```sql
/* 数据库操作 */

/* 集合操作 */

/* 文档操作 */

/* 修改文档 */

/* 删除文档 */

/* 文档去重 */
```

#### 4.3.3 用Go访问MongoDB

```
暂无内容
```



### 4.4 Go的常见ORM库

#### 4.4.1 什么是ORM

ORM全称为Object-Relation Mapping，对象关系映射，其作用是在关系型数据库和对象之间做一个映射。这样在操作数据库时就不需要和SQL语句打交道。

- O（对象模型）：实体对象，即在程序中根据数据库表结构建立的一个个实体(Entity)
- R（关系型数据库的数据结构）：建立的数据库表
- M（映射）：从R到O的映射，常用XML文件来表示映射关系

#### 4.4.2 安装及使用

**安装**

```shell
go get -u github.com/jinzhu/gorm
```

**基础操作的使用示例：**

- 数据库的连接：直接使用`gorm.Open()`函数传入数据库信息
- 自动建表：`db.AutoMigrate()`函数可以根据结构体信息自动建表
- 插入数据：
  - `Save()`
  - `Create()`
  - 两个函数均可以插入数据，注意指针的使用
- 删除数据：先用`db.Where()`构造查询条件，再用`db.Delete()`删除
- 查询数据：
  - 先用`db.Where()`构造查询条件
  - 用`db.Count()`计算数量
  - 用`db.Find()`查询多条数据
  - 直接用`db.First()`查询单条数据
  - 注意指针的使用
- 更新数据：使用`Update()`方法更新数据
- 错误处理：直接在上述方法后使用`db.Error()`方法即可获取错误信息
- 事务处理：
  - `db.Begin()` 开启事务
  - `tx.Commit()` 提交事务
  - `tx.Rollback()` 回滚

```go
package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
)

// 定义数据库
var (
	gormDB        *gorm.DB
	sqlConnection = "username:password@tcp(url:port)/database"
)

// 定义结构体
type GormUser struct {
	ID       uint   `json:"ID"`
	Phone    string `json:"Phone"`
	Username string `json:"Username"`
	Password string `json:"Password"`
}

// 初始化数据库连接
func initGormDB() {
	println("Init GormDB link Start")
	var err error
	gormDB, err = gorm.Open("mysql", sqlConnection)
	if err != nil {
		fmt.Printf("Init GormDB link failed, error:%v\n", err)
		return
	}
	gormDB.DB().SetMaxIdleConns(10)  // 最大连接数
	gormDB.DB().SetMaxOpenConns(100) // 最大打开连接数
	println("Init GormDB link Success")
}

// 根据结构体创建表
func createTable() {
	println("CreateTable Start")
	gormDB.AutoMigrate(&GormUser{})
	println("CreateTable Success")
}

// 插入数据
func insertData() {
	println("SavaData Start")
	GormUser1 := GormUser{
		Phone:    "17800000000",
		Username: "GormInsertTest1",
		Password: "123456",
	}
    err := gormDB.Save(&GormUser1).Error // 使用Save()函数插入
	if err != nil {
		fmt.Printf("SavaData failed, error:%v\n", err)
		return
	}
	println("SavaData Success")

	println("CreateData Start")
	GormUser2 := GormUser{
		Phone:    "17800000001",
		Username: "GormInsertTest2",
		Password: "123456",
	}
	err = gormDB.Create(&GormUser2).Error // 使用Create()函数插入
	if err != nil {
		fmt.Printf("SavaData failed, error:%v\n", err)
		return
	}
	println("CreateData Success")
}

// 查询数据
func checkData() {
	println("CheckData Start")
	var GormUser1 = new(GormUser)
	err := gormDB.Where("Phone = ?", "17800000000").Find(&GormUser1).Error
	if err != nil {
		fmt.Printf("Find failed, error:%v\n", err)
		return
	}
	fmt.Println("Find查询结果为:", GormUser1)

	var GormUser2 = new(GormUser)
	err = gormDB.First(&GormUser2, "Phone = ?", "17800000001").Error
	if err != nil {
		fmt.Printf("First failed, error:%v\n", err)
		return
	}
	fmt.Println("First查询结果为:", GormUser2)
	println("CheckData Success")
}

// 更新数据
func updateData() {
	println("UpdateData Start")
	var GormUser1 = new(GormUser)
	err := gormDB.Model(&GormUser1).Where("Phone = ?", "17800000001").Update("Phone", "17800000002").Error
	if err != nil {
		fmt.Printf("UpdateData failed, error:%v\n", err)
		return
	}
	println("UpdateData Success")
}

// 删除数据
func deleteData() {
	println("DeleteData Start")
	var GormUser1 = new(GormUser)
	err := gormDB.Where("Phone = ?", "17800000000").Delete(&GormUser1).Error
	if err != nil {
		fmt.Printf("DeleteData failed, error:%v\n", err)
		return
	}
	println("DeleteData Success")
}

// Gorm实现事务
func transactionGorm() {
	println("TransactionGorm Start")
	tx := gormDB.Begin()

	GormUser1 := GormUser{
		Phone:    "17800000004",
		Username: "TransactionTest",
		Password: "123456",
	}
	err := tx.Create(&GormUser1).Error
	if err != nil {
		//事务回滚
		tx.Rollback()
		fmt.Printf("TransactionGorm failed, error:%v\n", err)
		return
	}
	var GormUser2 = new(GormUser)
	gormDB.First(&GormUser2, "phone = ?", "17800000004")
	//事务提交
	tx.Commit()
	fmt.Println("First查询结果为:", GormUser2)
	println("TransactionGorm Success")
}

func main() {
	initGormDB()
	//createTable()
	//insertData()
	//checkData()
	//updateData()
	//deleteData()
	transactionGorm()
}
```

#### 4.4.3 Go语言的ORM框架——Beego ORM

**安装**

```shell
go get -u github.com/astaxie/beego/orm
# 在使用Beego ORM前必须先导入MySQL数据库驱动程序
go get -u github.com/go-sql-driver/mysql
```

**基础操作的使用示例：**

- 数据库的连接：用`orm.RegisterDataBase()`方法，必须注册一个名为`default`的数据库作为默认使用，再传入数据库信息
- 注册模型：
  - 如果使用`orm.QuerySeter`接口进行高级查询，则必须注册模型，且要在数据库连接之前注册
  - 如果只是用`Raw`查询和映射到`Struct`，无需注册模型
  - 注册模型的作用是将`ORM`语句转化为`SQL`语句并写入数据库
- 自动建表：`orm.RunSyncdb("default", false, true)`，根据默认数据表的结构体建表
- 插入数据：调用`Insert()`方法
- 查询数据：调用`Read()`方法
- 更新数据：调用`Update()`方法
- 删除数据：指定主键`Id`，调用`Delete()`方法
- 原生`SQL`方法：用`SQL`语句直接操作`Raw()`方法，返回一个`RawSeter`对象，对返回对象使用`Exec()`方法即可使用
- 事务处理：
  - `Begin()` 开启事务
  - `Rollback()` 回滚
  - `Commit()` 提交事务

```go
package main

import (
	"fmt"
	"github.com/astaxie/beego/orm"
)

var o orm.Ormer

// 定义结构体
type BeegoUser struct {
	Id       int
	UserName string
	Phone    string
}

// 注册模型
func registerOrmModel() {
	println("RegisterOrmModel Start")
	orm.RegisterModel(new(BeegoUser))
	println("RegisterOrmModel Success")
}

// 初始化数据库连接
func initBeegoOrmDB() {
	println("InitBeegoOrmDB Start")
	orm.RegisterDriver("mysql", orm.DRMySQL) // 数据库类型设计
	orm.RegisterDataBase("default", "mysql", "username:password@tcp(url:port)/database")
	registerOrmModel() // 需要写在建立连接之前
	o = orm.NewOrm()
	println("InitBeegoOrmDB Success")
}

// 根据结构体建表
func createTableBeegoOrm() {
	println("CreateTableBeegoOrm Start")
	//自动建表
	orm.RunSyncdb("default", false, true)
	println("CreateTableBeegoOrm Success")
}

// 插入数据
func BeegoOrmInsert() {
	println("BeegoOrmInsert Start")
	user := new(BeegoUser)
	user.UserName = "BeegoOrmInsert2"
	user.Phone = "17800000001"

	result, err := o.Insert(user)
	if err != nil {
		fmt.Printf("BeegoOrmInsert failed, error:%v\n", err)
		return
	}
	fmt.Println(result)
	println("BeegoOrmInsert Success")
}

// 查询数据
func BeegoOrmCheck() {
	println("BeegoOrmCheck Start")
	user := BeegoUser{}
	user.Id = 1

	err := o.Read(&user)
	if err == orm.ErrNoRows {
		fmt.Println("查询无果")
	} else if err == orm.ErrMissPK {
		fmt.Println("找不到主键")
	} else {
		fmt.Println(user.Id, user.UserName, user.Phone)
	}
	println("BeegoOrmCheck Success")
}

// 更新数据
func BeegoOrmUpdate() {
	println("BeegoOrmUpdate Start")
	user := BeegoUser{}
	user.Id = 1
	user.UserName = "BeegoOrmUpdate"

	num, err := o.Update(&user)
	if err != nil {
		fmt.Println("BeegoOrmUpdate failed, error:%v\n", err)
		return
	}
	fmt.Println("更新影响了", num, "行")
	println("BeegoOrmUpdate Success")
}

// 删除数据
func BeegoOrmDelete() {
	println("BeegoOrmDelete Start")
	user := BeegoUser{}
	user.Id = 1

	num, err := o.Delete(&user)
	if err != nil {
		fmt.Println("BeegoOrmDelete failed, error:%v\n", err)
		return
	}
	fmt.Println("删除影响了", num, "行")
	println("BeegoOrmDelete Success")
}

// 原生SQL语句
func nativeSQL() {
	println("NativeSQL Start")
	var r orm.RawSeter
	r = o.Raw("UPDATE beego_user SET user_name = ? WHERE user_name = ?", "NativeUpdate", "BeegoOrmUpdate")
	result, err := r.Exec()
	if err != nil {
		fmt.Println("NativeSQL failed, error:%v\n", err)
		return
	}
	fmt.Println(result.RowsAffected())
	println("NativeSQL Success")
}

// BeegoOrm实现事务
func transactionBeegoOrm() {
	println("TransactionBeegoOrm Start")
	o.Begin()
	user1 := BeegoUser{}
	user1.Id = 6
	user1.UserName = "TransactionBeegoOrm1"

	user2 := BeegoUser{}
	user2.Id = 12
	user2.UserName = "TransactionBeegoOrm2"

	_, err1 := o.Update(&user1)
	_, err2 := o.Insert(&user2)
	if err1 != nil || err2 != nil {
		fmt.Println("TransactionBeegoOrm failed, error:%v\n", err1, err2)
		o.Rollback()
		return
	}
	o.Commit()
	println("TransactionBeegoOrm Success")
}

func main() {
	initBeegoOrmDB()
	//createTableBeegoOrm()
	//BeegoOrmInsert()
	//BeegoOrmCheck()
	//BeegoOrmUpdate()
	//BeegoOrmDelete()
	//nativeSQL()
	//transactionBeegoOrm()
}
```



## 5. 小结

**Go Web基础知识到此结束！完结撒花**

**开始学习高级应用！**
