---
title: Go Web Advanced
date: 2022-05-19 17:24:09
permalink: /pages/ed6347/
categories: 
  - learningdoc
  - Go
tags: 
  - 
---
# Go Web进阶知识

## 1. Go网络编程

### 1.1 什么是Socket

#### 1.1.1 基本概念

Socket是计算机网络中用于在节点内发送或接受数据的内部断点，位于传输层和应用层之间，起到的作用就是连接应用层与传输层，使得应用程序能够更方便地将数据经由传输层来传输。

|     应用层     |
| :-: |
| **Socket API** |
|   **传输层**   |
|     网络层     |
|   数据链路层   |
|     物理层     |



#### 1.1.2 Socket的工作方式

socket在客户端和服务器端分别建立，相互连接。

建立连接的方法就是**三次握手**，关闭连接的方法是**四次握手**，具体内容可以在计算机网络中学到

Socket是进程间数据传输的媒介；为了保证连接的可靠，需要特别注意建立连接和关闭连接的过程。为了确保准确、完整的传输数据，客户端和服务器端来回进行多次网络通信才能完成连接的创建和关闭，也是连接时的额外时间成本。



#### 1.1.3 传统的Socket服务器端构建过程

- 建立并绑定Socket
- 监听请求
- 接受请求
- 处理请求与发送响应



#### 1.1.4 传统的Socket客户端构建过程

- 建立Socket
- 建立连接
- 发送请求与接受响应



### 1.2 在Go语言中构建Socket

#### 1.2.1 Dial()函数

**定义**

```go
// network是网络协议名字，addr是IP地址或域名
func Dial(network, addr string) (Conn, error)
```

**方法**

- TCP连接

```go
conn, err := net.Dial("tcp", "localhost:8080")
```

- UDP连接

```go
conn, err := net.Dial("udp", "localhost:8080")
```

- ICMP连接

```go
// 使用协议名称
conn, err := net.Dial("ip4:icmp", "localhost:8080")
// 使用协议编号
conn, err := net.Dial("ip4:1", "localhost:8080")
```

- 发送数据：`Write()`
- 接受数据：`Read()`



#### 1.2.2 DialTCP()函数

**定义**

```go
// network可以是tcp、tcp4、tcp6；laddr是本地地址，一般为nil；raddr为目的地址
func DialTCP(network string, laddr, raddr *TCPAddr) (*TCPConn, error)
```

**方法**

- 发送数据：`Write()`
- 接受数据：`Read()`



#### 1.2.3 UDP Socket的使用

**定义**

- UDP是无连接的，因此服务器端只需要指定IP和端口号，监听该地址，等待客户端建立连接即可

**方法**

- 创建监听地址

```go
func ResolveUDPAddr(network, address string) (*UDPAddr, error)
```

- 创建监听连接

```go
func ListenUDP(network string, laddr UDPAddr) (UDPConn, error)
```

- 接受UDP数据

```go
func (c *UDPConn) ReadFromUDP(b []byte) (int, *UDPAddr, error)
```

- 写出数据到UDP

```go
func (c *UDPConn) WriteToUDP(b []byte, addr *UDPAddr) (int, error)
```



#### 1.2.4 示例——TCP连接

- 服务器端

```go
package TCP

import (
	"bufio"
	"fmt"
	"net"
)

func process(conn net.Conn) {
	defer conn.Close() // 关闭连接
	for {
		reader := bufio.NewReader(conn)
		var buf [128]byte
		n, err := reader.Read(buf[:]) // 读取数据
		if err != nil {
			fmt.Println("read from client failed, err:", err)
			break
		}
		recvStr := string(buf[:n])
		if recvStr == "Q" || recvStr == "q" {
			println("客户端退出")
			continue
		}
		fmt.Println("[服务器端] 客户端的输入数据为：", recvStr)
		conn.Write([]byte("输入了" + recvStr)) // 向客户端发送数据
	}
}

func Server() {
	listen, err := net.Listen("tcp", "127.0.0.1:20000")
	if err != nil {
		fmt.Println("listen failed, err:", err)
		return
	}
	for {
		conn, err := listen.Accept() // 建立连接
		if err != nil {
			fmt.Println("accept failed, err:", err)
			continue
		}
		go process(conn) // 启动一个goroutine处理连接
	}
}
```

- 客户端

```go
package TCP

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
)

// 客户端
func Client() {
	conn, err := net.Dial("tcp", "127.0.0.1:20000")
	if err != nil {
		fmt.Println("err :", err)
		return
	}
	defer conn.Close() // 关闭连接
	inputReader := bufio.NewReader(os.Stdin)
	for {
		input, _ := inputReader.ReadString('\n') // 读取用户输入
		inputInfo := strings.Trim(input, "\r\n")
		if strings.ToUpper(inputInfo) == "Q" { // 如果输入q就退出
			_, err = conn.Write([]byte(inputInfo)) // 发送数据
			return
		}
		_, err = conn.Write([]byte(inputInfo)) // 发送数据
		if err != nil {
			return
		}
		buf := make([]byte, 4096)
		n, err := conn.Read(buf[:]) // 接收服务器端的返回数据
		if err != nil {
			fmt.Println("recv failed, err:", err)
			return
		}
		fmt.Println("[客户端] 读取服务器端返回值为:", string(buf[:n]))
	}
}
```



#### 1.2.5 示例——UDP连接

- 服务器端

```go
package UDP

import (
	"fmt"
	"net"
)

func Server() {
	println("开启服务器端")
	listen, err := net.ListenUDP("udp", &net.UDPAddr{
		IP:   net.IPv4(0, 0, 0, 0),
		Port: 30000,
	})
	if err != nil {
		fmt.Println("listen failed, err:", err)
		return
	}
	defer listen.Close()
	for {
		var data [1024]byte
		n, addr, err := listen.ReadFromUDP(data[:]) // 接收数据
		if err != nil {
			fmt.Println("read udp failed, err:", err)
			continue
		}
		fmt.Printf("[服务器端] data:%v addr:%v count:%v\n", string(data[:n]), addr, n)
		if string(data[:n]) == "Q" || string(data[:n]) == "q" {
			println("客户端退出")
			continue
		}
		_, err = listen.WriteToUDP(data[:n], addr) // 发送数据
		if err != nil {
			fmt.Println("write to udp failed, err:", err)
			continue
		}
	}
}
```

- 客户端

```go
package UDP

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
)

func Client() {
	println("开启客户端")
	socket, err := net.DialUDP("udp", nil, &net.UDPAddr{
		IP:   net.IPv4(0, 0, 0, 0),
		Port: 30000,
	})
	if err != nil {
		fmt.Println("连接服务端失败，err:", err)
		return
	}
	defer socket.Close()
	inputReader := bufio.NewReader(os.Stdin)
	for {
		input, _ := inputReader.ReadString('\n') // 读取用户输入
		inputInfo := strings.Trim(input, "\r\n")
		if strings.ToUpper(inputInfo) == "Q" { // 如果输入q就退出
			_, err = socket.Write([]byte(inputInfo)) // 发送数据
			return
		}
		_, err = socket.Write([]byte(inputInfo)) // 发送数据
		if err != nil {
			fmt.Println("发送数据失败，err:", err)
			return
		}
		buf := make([]byte, 4096)
		n, remoteAddr, err := socket.ReadFromUDP(buf) // 接收数据
		if err != nil {
			fmt.Println("接收数据失败，err:", err)
			return
		}
		fmt.Printf("[客户端] recv:%v addr:%v count:%v\n", string(buf[:n]), remoteAddr, n)
	}
}
```




## 2. Go并发编程

### 2.1 用goroutine和通道实现并发

#### 2.1.1 goroutine简介

- Go语言的并发机制运用较为简单，只需要通过`go`关键字来开启`goroutine`即可

```go
// 使用函数
go routineFunc(a, b, c)
// 使用匿名函数
go func(a, b, c){}(value1, value2)
```

- 开启`goroutine`示例

```go
package Concurrent

import (
	"fmt"
	"time"
)

func Echo(s string) {
	for i := 0; i < 3; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func Goroutine1() {
	go Echo("go")
	Echo("Web Program")
}
```

- `goroutine`在多核CPU环境下是并行的，如果代码块在多个`goroutine`中执行，则会实现代码的并行。在被执行的函数返回时，对应的`goroutine也`自动结束。需要注意的是，如果函数有返回值，则返回值会被丢弃
- 例如，如果将上述代码的`go Echo("go");Echo("Web Program")`改为`Echo("go");go Echo("Web Program")`，则Web Program不会输出



#### 2.1.2 通道

**通道定义**

- 通道是用来传递数据的一个数据结构。Go语言提倡使用通信来代替共享内存。当一个资源需要在goroutine中共享时，通道在goroutine之间架起了一个管道，并提供了确保同步交换数据的机制
- 在任何时候，同时只能有一个goroutine访问通道进行并发和接收数据。通道遵循FIFO规则保证收发数据的顺序



**通道的声明**

```go
var channel_name chan type
```

- `channel_name` : 保存通道的变量
- `type` : 通道内的数据类型
- `chan` : 类型的空值是nil，声明后需要配合`make()`后才能使用



**创建通道**

```go
channel_example := make(chan T)
```

- `channel_example` : 通道实例
- `T` : 通道内传输的数据类型

```go
ch1 := make(chan string)
ch2 := make(chan interface{})
type Signal struct{}
ch3 := make(chan *Signal)
```



**通道发送数据**

- 用通道发送数据使用特殊的操作符 `<-`

```go
chan_var <- chan_value
```

- `chan_var` : 通过`make()`函数创建好的通道实例
- `chan_value` : 与通道中元素类型一致的值

```go
// 使用make创建一个通道后，就可以发送数据了
// 通道作为左值
ch1 := make(chan interface{})
ch1 <- 6
ch1 <- "love"
```

- 如果接收方一直没有接受，则发送操作将阻塞至成功接收，或者被Go语言自动发现并报错

```go
func main() {
	// 创建一个字符串通道
	ch := make(chan string)
	// 尝试将sleep通过通道发送
	ch <- "sleep"
}
```
运行代码报错为
```
fatal error: all goroutines are asleep - deadlock!
// 意思是期待从其他goroutine放入数据 ，但是其他goroutine都已经执行完了 (all goroutines are asleep)，那么就永远不会有数据放入管道。
```



**通道接收数据**

- 通道接收数据同样使用`<-`操作符，一次只能接收一个数据，数据作为左值

```go
// 阻塞方式接收数据
data := <-ch1
```

- 使用上面的方法接收数据，在没有数据的情况下，会被阻塞直到接收到数据

```go
// 非阻塞方式接收数据（不建议使用，高CPU占用）
data, ok := <-ch1
```

- `data` : 接收到的数据，如果没有接收到数据，`data`为通道数据类型的零值

- `ok` : 是否接收到数据

```go
// 接收任意数据且忽略该数据
<-ch1
```

- 用通道做并发同步

```go
package Concurrent

import "fmt"

func func1(ch1 chan string) {
	fmt.Println("开启协程")
	ch1 <- "signal"
	fmt.Println("退出协程")
}

func Channel2() {
	ch1 := make(chan string) // 构建一个通道
	go func1(ch1) // 开启一个并发函数
	fmt.Println("等待协程")
	data := <-ch1 // 等待并发函数
	println(data)
	fmt.Println("完成")
}
```

- 循环接收数据

```go
// 通道的数据可以通过for-range语句进行多个元素的接收操作
for data := range ch{

}
```

```go
package Concurrent

import (
	"fmt"
	"time"
)

func func3(ch1 chan int) {
	for i := 6; i <= 8; i++ {
		ch1 <- i
		time.Sleep(time.Second)
	}
}

func Channel3() {
	ch1 := make(chan int)
	go func3(ch1)

	for receive := range ch1 { // 遍历接收通道数据
		fmt.Println(receive)
		if receive == 8 {
			break
		}
	}

	fmt.Println("完成")
}
```

- 用两个goroutine计算数字之和

```go
package Concurrent

import "fmt"

func Sum(s []int, ch1 chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	ch1 <- sum // 把 sum 发送到通道 ch
}

func Channl4() {
	s := []int{6, 7, 8, -9, 1, 8}
	ch1 := make(chan int)
	go Sum(s[:len(s)/2], ch1)
	go Sum(s[len(s)/2:], ch1)
	a, b := <-ch1, <-ch1 // 从通道 ch 中接收
	fmt.Println(a, b, a+b)
}
```



**通道缓冲区**

- 通道可以设置缓冲区，通过make()函数的第二个参数设置

```go
// 通道默认不设置缓冲区
// 设置缓冲区后，允许异步收发数据
package Concurrent

import "fmt"

func Channel5(){
	// 这里我们定义了一个可以存储整数类型的带缓冲通道，缓冲区大小为3
	ch1 := make(chan int, 3)
	// 因为 ch 是带缓冲的通道，我们可以同时发送两个数据
	// 而不用立刻需要去同步读取数据
	ch1 <- 6
	ch1 <- 7
	ch1 <- 8
	// 获取这三个数据
	fmt.Println(<-ch1)
	fmt.Println(<-ch1)
	fmt.Println(<-ch1)
}
```



**通道使用select实现多路复用**

```go
package Concurrent

import (
	"fmt"
	"time"
)

func ch1Func(ch chan string) {
	time.Sleep(100 * time.Second)
	ch <- "ch1接收数据"
}

func ch2Func(ch chan string) {
	time.Sleep(500 * time.Second)
	ch <- "ch2接收数据"
}

func Channel6() {
	fmt.Println("测试多路复用+超时判断")
	ch1 := make(chan string)
	ch2 := make(chan string)
	go ch1Func(ch1)
	go ch2Func(ch2)
	// 使用 time.After 处理 select 超时
	select {
	case str1 := <-ch1:
		fmt.Println(str1)
	case str2 := <-ch2:
		fmt.Println(str2)
	case <-time.After(10 * time.Second):
		fmt.Println("Timed out")
	}
	fmt.Println("测试结束")
}
```



**关闭通道**

- 如果通道接收不到数据，可以关闭通道

```go
data, ok := <-ch1
if ok == false{
	close(ch1)
}
```



### 2.2 用sync包实现并发

#### 2.2.1 竞态

- 并发的使用可能会导致数据争用的竞态问题，而一旦发生竞态问题，由于不知道问题发生的时间，因此难以对找到并修改错误

- 竞态的实例

```go
func getNumber() int{
    var i int
    go func(){
       i = 6 
    }()
    return i
}

func main(){
    fmt.Println(getNumber())
}
```

- 在`getNumber()`函数返回i时，无法判断`goroutine`是否已经对i进行了修改，因此会有两种可能的情况
  - `i = 6`，`goroutine`对`i`进行了修改
  - `i = 0`，`goroutine`未对`i`做出修改

- 通过以下的几种方法来避免竞态问题



#### 2.2.2 互斥锁 sync.Mutex

**定义**

```go
type Mutex struct{
    state int32
    sema uint32
}
```

**方法**

```go
// 加锁方法 Lock()
func (m *Mutex) Lock()
// 解锁方法 Unlock()
func (m *Mutex) Unlock()

/*
解锁时必须已经加锁，否则会运行错误
*/
```

**使用**

```go
package Concurrent

import (
	"fmt"
	"sync"
	"time"
)

func Mutex() {
	var mutex sync.Mutex
	wait := sync.WaitGroup{}
	fmt.Println("Locked")
	mutex.Lock()
	for i := 1; i <= 5; i++ {
		wait.Add(1)
		go func(i int) {
			fmt.Println(i, " 尝试加锁")
			mutex.Lock()
			fmt.Println(i, " 加锁成功")
			time.Sleep(time.Second)
			fmt.Println(i, " 解锁:")
			mutex.Unlock()
			defer wait.Done()
		}(i)
	}
	time.Sleep(time.Second)
	fmt.Println("Unlocked")
	mutex.Unlock()
	wait.Wait()
}
```



#### 2.2.3 读写互斥锁 sync.RWMutex

**定义**

```go
type RWMutex struct{
    w Mutex
    writerSem uint32
    readerSem uint32
    readerCount int32
    readerWait int32
}
```

**方法**

```go
// 写操作的Lock()和Unlock()
func (*RWMutex) Lock()
func (*RWMutex) Unlock()

// 读操作的Lock()和Unlock()
func (*RWMutex) Rlock()
func (*RWMutex) RUnlock()

/*
写锁权限高于读锁，有写锁时优先进行写锁定
适用于读多写少的情况
因为写锁会阻止其他goroutine的所有操作
而读锁只会阻止写操作，不阻止其他goroutine的读操作
*/
```

**使用**

```go
package Concurrent

import (
	"crypto/rand"
	"fmt"
	"math/big"
	"sync"
)

var count *big.Int
var rw sync.RWMutex

func ReadCount(n int, ch chan struct{}) {
	rw.RLock()
	fmt.Printf("[读操作] goroutine %d 进入读操作...\n", n)
	v := count
    time.Sleep(time.Second) // 通过Sleep()操作可以观察到读锁不影响其他读操作
	rw.RUnlock()
	ch <- struct{}{}
}

func WriteCount(n int, ch chan struct{}) {
	rw.Lock()
	fmt.Printf("[写操作] goroutine %d 进入写操作...\n", n)

	v, _ := rand.Int(rand.Reader, big.NewInt(10))
	count = v
    time.Sleep(time.Second) // 通过Sleep()操作可以观察到写锁阻止了其他所有的操作
	fmt.Printf("goroutine %d 写入结束，新值为：%d\n", n, v)
	rw.Unlock()
	ch <- struct{}{}
}

func RWMutex() {
	count, _ = rand.Int(rand.Reader, big.NewInt(10))
	ch := make(chan struct{}, 6)
	for i := 0; i < 3; i++ {
		go ReadCount(i, ch)
	}
	for i := 0; i < 3; i++ {
		go WriteCount(i, ch)
	}
	for i := 0; i < 6; i++ {
		<-ch
	}
}
```



#### 2.2.4 结构体 sync.Once

**定义**

```go
type Once struct{
    done uint32
    m Mutex
}
```

**方法**

```go
func (o *Once) Do(f func())

/*
作用是使方法只执行一次
*/
```

**使用**

```go
package Concurrent

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup
var once sync.Once

func onceFunc1(ch1 chan<- int) {
	defer wg.Done()
	for i := 0; i < 10; i++ {
		ch1 <- i
	}
	close(ch1)
}

func onceFunc2(ch1 <-chan int, ch2 chan<- int) {
	defer wg.Done()
	for {
		x, ok := <-ch1
		if !ok {
			fmt.Println("ch1中的数据读取完毕，退出")
			break
		}
		ch2 <- 2 * x
	}
	fmt.Println("正在关闭ch2")
	once.Do(func() {
		fmt.Println("关闭ch2")
		close(ch2)
		return
	}) // 确保close操作只执行一次
}

func Once() {
	ch1 := make(chan int, 10)
	ch2 := make(chan int, 10)

	wg.Add(3)

	go onceFunc1(ch1)
	go onceFunc2(ch1, ch2)
	go onceFunc2(ch1, ch2)

	wg.Wait()

	for ret := range ch2 {
		fmt.Println(ret)
	}
}
```



#### 2.2.5 同步等待组 sync.WaitGroup

**定义**

```go
type WaitGroup struct {
  noCopy noCopy
  state1 [3]uint32
}
```

**方法**

```go
// Add()方法:向内部计数器加上delta
func (*WaitGroup) Add()

// Done()方法:减少内部计数器的值
func (wg *WaitGroup) Done()

// Wait()方法:阻塞至内部计数器值为0
func (wg *WaitGroup) Wait()

/*
Add()函数的参数delta可以为负数
如果内部计数器的值为0，Wait()方法会将处于阻塞等待的所有goroutine释放
如果内部计数器的值小于0，会调用panic()函数
*/
```

**使用**

```go
// 2.2.4的示例中也使用了同步等待组
package Concurrent

import (
	"fmt"
	"sync"
	"time"
)

func Wait() {
	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("1 goroutine sleep ...")
		time.Sleep(2)
		fmt.Println("1 goroutine exit ...")
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("2 goroutine sleep ...")
		time.Sleep(4)
		fmt.Println("2 goroutine exit ...")
	}()

	fmt.Println("Waiting for all goroutine ")
	wg.Wait() // 一直阻塞到内部计数器为0
	fmt.Println("All goroutines finished!")
}
```



#### 2.2.6 竞态检测器

**作用**

- 在程序运行时进行检测，判断是否存在竞态问题

**方法**

```shell
go run -race main.go
```

**使用**

```go
// 测试我们在2.2.1时存在竞态问题的代码

// 不做检测
go run main.go
// 输出结果为
0

// 做竞态问题检测
go run -race main.go
// 输出结果为
WARNING: DATA RACE
Write at 0x00c0000140d8 by goroutine 7:
  goWebBasics/Concurrent.getNumber.func1()
  goWebBasics/Concurrent.getNumber()
      D:/developer_tools/Go/Go project/GoWeb/goWebBasics/Concurrent/sync_race.go:7 +0xb0
  goWebBasics/Concurrent.Race()
      D:/developer_tools/Go/Go project/GoWeb/goWebBasics/Concurrent/sync_race.go:14 +0x24
  main.main()
      D:/developer_tools/Go/Go project/GoWeb/goWebBasics/main.go:8 +0x24
==================
Found 1 data race(s)
exit status 66
// 提示我们sync_race.go的第7行存在竞态问题
```



## 3. 实战：Go实现OAuth 2.0

### 3.1 什么是OAuth2.0

OAuth 不是一个API或者服务，而是一个验证授权(Authorization)的开放标准，所有人都有基于这个标准实现自己的OAuth。

更具体来说，OAuth是一个标准，app可以用来实现`secure delegated access`. OAuth基于HTTPS，以及APIs，Service应用使用`access token`来进行身份验证。

OAuth主要有OAuth 1.0a和OAuth 2.0两个版本，并且二者完全不同，且不兼容。OAuth2.0 是目前广泛使用的版本，我们多数谈论OAuth时，为OAuth2.0。



### 3.2 为什么要用OAuth2.0

在OAuth之前，`HTTP Basic Authentication`, 即用户输入用户名，密码的形式进行验证, 这种形式是不安全的。OAuth的出现就是为了解决访问资源的安全性以及灵活性。OAuth使得第三方应用对资源的访问更加安全。



### 3.3 OAuth2.0的授权码接入模式

- 客户端登录，选择第三方登录，请求服务器端
- 服务器端中如果保存有用户数据，则直接登录；反之定向到认证服务器，即第三方服务器
- 认证服务器显示授权界面，等待用户授权
- 用户确认授权，从认证服务器获得授权码
- 服务器端使用授权码`code`从认证服务器处获取`token`
- 服务器端使用`token`从认证服务器处获取用户信息
- 完成第三方登录



### 3.4 可选的第三方登录

常见的第三方登录有QQ、微信、Github、微博

使用第三方登录能够让用户减少注册步骤，一键登录，体验感更好

（不需要记住那么多密码了）

[给出Github的登记网址](https://github.com/settings/applications/new)



### 3.5 用Go实现Github第三方登录

因为是简单实现，所以直接在前端请求了对应`URL`，同时将数据打印给前端显示

自己总结的正常使用流程应该是：

- 用户请求一键登录，点击按钮后发送请求，调用后端`applyCode()`函数，用于获取第三方授权的`URL`
- 拿到URL后通过`window.location.replace(resp.apply_code_url);` 调用，进入第三方授权界面
- 确认授权后，跳转至`RedirectUrl`
- 而`RedirectUrl`也是后端函数对应的路由，作用是在后端直接获取`code`，通过`code`进一步获取`token`和`userinfo`
- 对`userinfo`做判断，登录成功后将页面重定向至首页

也就是将前端现有的链接替换为后端路由，其他内容均在后端完成，获得的数据也不会展示给前端，全部在后端判断处理

**前端**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Github登录</title>
</head>
<body>
<a href="https://github.com/login/oauth/authorize?client_id=你的ClientId&redirect_uri=你的RedirectUrl">
    Github一键登录
</a>
</body>
<script>
</script>
</html>
```

**后端**

```go
package OAuth

import (
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
)

type Conf struct {
	ClientId     string
	ClientSecret string
	RedirectUrl  string
}

type Token struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"` // 这个字段没用到
	Scope       string `json:"scope"`      // 这个字段也没用到
}

var conf = Conf{
	ClientId:     "你的ClientId",
	ClientSecret: "你的ClientSecret",
	RedirectUrl:  "你的RedirectUrl，如http://localhost:8080/oauth/redirect",
}

// 渲染登录页面
func Login(w http.ResponseWriter, r *http.Request) {
	// 解析指定文件生成模板对象
	var temp *template.Template
	var err error
	if temp, err = template.ParseFiles("OAuth/login.html"); err != nil {
		fmt.Println("读取文件失败，错误信息为:", err)
		return
	}

	// 利用给定数据渲染模板(html页面)，并将结果写入w，返回给前端
	if err = temp.Execute(w, conf); err != nil {
		fmt.Println("读取渲染html页面失败，错误信息为:", err)
		return
	}
}

// 通过code获取token认证url
func GetTokenAuthUrl(code string) string {
	return fmt.Sprintf(
		"https://github.com/login/oauth/access_token?client_id=%s&client_secret=%s&code=%s",
		conf.ClientId, conf.ClientSecret, code,
	)
}

// 获取 token
func GetToken(url string) (*Token, error) {
	// 形成请求
	var req *http.Request
	var err error
	if req, err = http.NewRequest(http.MethodGet, url, nil); err != nil {
		return nil, err
	}
	req.Header.Set("accept", "application/json")

	// 发送请求并获得响应
	var httpClient = http.Client{}
	var res *http.Response
	if res, err = httpClient.Do(req); err != nil {
		return nil, err
	}

	// 将响应体解析为 token，并返回
	var token Token
	if err = json.NewDecoder(res.Body).Decode(&token); err != nil {
		return nil, err
	}
	return &token, nil
}

// 获取用户信息
func GetUserInfo(token *Token) (map[string]interface{}, error) {

	// 形成请求
	var userInfoUrl = "https://api.github.com/user" // github用户信息获取接口
	var req *http.Request
	var err error
	if req, err = http.NewRequest(http.MethodGet, userInfoUrl, nil); err != nil {
		return nil, err
	}
	req.Header.Set("accept", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("token %s", token.AccessToken))

	// 发送请求并获取响应
	var client = http.Client{}
	var res *http.Response
	if res, err = client.Do(req); err != nil {
		return nil, err
	}

	// 将响应的数据写入 userInfo 中，并返回
	var userInfo = make(map[string]interface{})
	if err = json.NewDecoder(res.Body).Decode(&userInfo); err != nil {
		return nil, err
	}
	return userInfo, nil
}

// 登录的主函数
func Oauth(w http.ResponseWriter, r *http.Request) {

	var err error

	// 获取 code
	var code = r.URL.Query().Get("code")

	// 通过 code, 获取 token
	var tokenAuthUrl = GetTokenAuthUrl(code)
	var token *Token
	if token, err = GetToken(tokenAuthUrl); err != nil {
		fmt.Println(err)
		return
	}

	// 通过token，获取用户信息
	var userInfo map[string]interface{}
	if userInfo, err = GetUserInfo(token); err != nil {
		fmt.Println("获取用户信息失败，错误信息为:", err)
		return
	}

	//  将用户信息返回前端
	var userInfoBytes []byte
	if userInfoBytes, err = json.Marshal(userInfo); err != nil {
		fmt.Println("在将用户信息(map)转为用户信息([]byte)时发生错误，错误信息为:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	if _, err = w.Write(userInfoBytes); err != nil {
		fmt.Println("在将用户信息([]byte)返回前端时发生错误，错误信息为:", err)
		return
	}

}

// 初始化OAuth
func InitOauth() {
	http.HandleFunc("/", Login) // 注册路由
	http.HandleFunc("/oauth/redirect", Oauth) // 这个和 RedirectUrl 有关
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("监听失败，错误信息为:", err)
		return
	}
}
```



## 4. 小结

**Go Web进阶知识到此结束！完结撒花**

**准备进行项目学习！**
