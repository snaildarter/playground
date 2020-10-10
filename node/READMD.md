# node 一些学习笔记

## node启动服务器

```js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end('hello nodejs!');
}).listen(8888, () => {
    console.log('Server start at http://127.0.0.1:8888');
});
```

## npm 

可以使用下[nrm](https://www.npmjs.com/package/nrm)，

`nrm ls`

列出一些npm源

`nrm test`
 
会列出现有源的测试结果，你可以选择一个用时最短的一个源使用

`nrm use taobao`

## node REPL

> `REPL` => Read Eval Print Loop 交互式解释器

读取 =》 执行 =》 打印 =》 循环

键入node 启动

. ctrl + c -> 退出当前终端
. ctrl + c 按两次 -> 退出Node REPL
. ctrl + d -> 退出Node REPL
. ↑|↓ -> 查看输入的历史命令
. tab键 -> 不全命令
. .help -> 列出命令
. .break -> 退出多行表达式
. .clear -> 退出多行表达式
. .save filename -> 保存当前的Node REPL 会话到指定文件
. .load filename -> 载入当前Node REPL 会话的文件内容
. .exit -> 退出Node REPL

## 回调函数

nodejs异步编程的直接体现就是回调。
异步编程依托于回调函数实现，但不能说使用了回调函数后程序就异步化了。
回调函数在完成任务后就会被调用，Node使用了大量的回调函数，Node所有API都支持回调函数。

## 事件循环

Nodejs是单进程单线程应用程序，但是因为V8引擎提供了异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
Nodejs几乎每一个API都是支持回调函数的。
Nodejs基本上所有的事件机制都是用设计模式中观察者模式实现。
Nodejs单线程类似进入一个while（true）的事件循环，直到没有时间观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。

### 事件驱动程序

Nodejs使用时间驱动模式，当web server接受到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，他被放回处理队列，当达到队列开头，这个结果被返回给用户。
这个模式非常高效可扩展非常强，因为webserver一直接受而不等待任何读写操作。（这也被称之为非阻塞IO或者事件驱动IO）在事件驱动模块中，会生成主循环来监听事件，当检测到事件时触发回调函数。

### Node应用程序是如何工作的

在Node应用程序中，执行异步操作的函数将回调函数作为最后一个参数，回调函数接受错误对象作为第一个参数。

## Nodejs EventEmitter

Nodejs所有的异步I/O操作在完成时都会发送一个事件到事件队列。
Nodejs里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时触发一个事件，一个fs.readStream对象会在文件被打开的时候触发一个事件。所有这些产生事件的对象都是events.EventEmitter的实例。

### EventEmitter类

events模块只提供了一个对象，events.EventEmitter。EventEmitter的核心就是事件触发与事件监听器功能封装。

```js
const events = require('events');
const eventEmitter = new events.EventEmitter();
```

### 继承EventEmitter

大多数时候我们不会直接使用EventEmitter，而是在对象中继承它，包括fs、net、http在内的，只要是支持事件响应的核心模块都是EventEmitter的子类。
为什么要这样呢？原因有两点

1. 具有某个实例功能的对象实现事件符合语义，事件的监听和发生应该是一个对象的方法。
2. js的对象机制是基于原型的，支持部分多重继承，继承EventEmitter不会打乱对象原有的继承关系。

### 方法&描述

> addListener(enent, listener)

为指定时间添加一个监听器到监听数组的尾部。

> on(enent, listener)

为指定事件注册一个监听器，接受一个字符串event和一个回调函数。
```js
sever.on('connection', function(stream){
    console.log('some connected');
})
```

> once(event, listener)

为指定事件注册一个单次监听器，及监听最多触发一次，触发后立刻接触监听器。

```js
server.once('connection', function(stream){
    console.log('ah, we have our first user!'s);
})
```

> removeListener(event, listener)

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称。
```js
const callback = stream => {
    console.log('someone connected!');
};

server.on('connection', callback);

server.removeListener('connection', callback);
```

> removeAllListeners([event])

移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器。

> setMaxListeners(n)

默认情况下，EventEmitters如果你添加的监听器超过十个就会输出警告信息。setMaxListeners函数用于提高监听器的默认限制数量。

> listeners(event)

返回指定事件的监听数组。

> emit(event, [arg1], [arg2], [...])

按监听的书信执行每个监听器，如果事件有注册监听返回true，否则返回false。

### 类方法

> listenerCount(emitter, event)

返回指定事件的监听器数量

### 事件

1. newListener 该事件在添加新监听器时被触发
2. removeListener 从指定监听器数组中删除一个监听器，需要注意的是，此操作将会改变处于被删除监听器之后的那些监听器的索引


## Nodejs Buffer

### buffer 目前支持的字符编码包括：

1. ascli
2. utf8
3. utf16le
4. ucs2
5. base64
6. latin1
7. binary
8. hex