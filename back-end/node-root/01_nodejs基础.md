# Node.js 基础

## 目标
- 异步 I/O 概念、promisify 用法、流、buffer
- 一个简单的 http 服务（页面、json 数据、静态资源） 
- 实战一个 cli 工具（Vue 路由约定）

## I/O 处理

### 异步非阻塞 I/O

#### 响水壶

关于上面的概念，网上有一个很经典的响水壶解释。
隔壁王大爷有个水壶，王大爷经常用它来烧水。
王大爷把水壶放到火上烧，然后啥也不干在那等，直到水开了王大爷再去干别的事情。 _同步阻塞_
王大爷觉得自己有点憨，不打算等了。把水壶放上去之后大爷就去看电视，时不时来瞅一眼没有开。 _同步非阻塞_
王大爷去买了个响水壶，他把水壶放在火上，然后也是等着水开，水开的时候水壶会发出声响。_异步阻塞_
王大爷又觉得自己有点憨，他把响水壶放在火上然后去看电视，这时他不用时不时来瞅一眼，因为水开的时候水壶会发出声音通知大爷。 _异步非阻塞_

上面四个例子里，阻塞非阻塞说明的是大爷的状态，同步非同步说明的是水壶的调用姿势。水壶能在烧好的时候主动响起，就等同于我们的异步的定义，能在结束时通知主线程并且回调。所以 _异步一般配合非阻塞，才能发挥其作用。_

```JS
const fs = require('fs');

// 同步调用
const data = fs.readFileSync("./01_nodejs基础.md", "utf-8");
console.log(data);

// 异步调用
fs.readFile("./01_nodejs基础.md", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// promisify
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
readFile("./01_nodejs基础.md", "utf-8").then((data) => console.log(data));

// fs Promises API node v10
const fsp = require("fs").promises;

fsp
  .readFile("./01_nodejs基础.md", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// async/await
(async () => {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./01_nodejs基础.md", "utf-8");
  console.log(data);
})();


```

## Buffer 缓冲区

读取数据类型为 buffer
Buffer - 用于 TCP 流、文件系统、以及其他上下文中与八位字节流进行交互。八位字节组成的数组，可以有效的在 JS 中存储二进制数据。

```JS
// 创建一个长度为 10 字节以 0 填充的 Buffer
const buf = Buffer.alloc(10);
console.log(buf);

// 创建一个 Buffer 包含 ascii
// ascii 查询 http://ascii.911cha.com
const buf2 = Buffer.from("a");
console.log(buf2, buf2.toString());

// 创建 Buffer 包含 UTF-8 字节
// UTF-8：一种变长的编码方案，使用 1~6 个字节来存储
// UTF-32：一种固定长度的编码方案，不管字符编号大小，始终使用 4 个字节来存储
// UTF-16：介于 UTF-8 和 UTF-32 之间，使用 2 个或者 4 个字节来存储，长度既固定又可变
const buf3 = Buffer.from("Buffer创建方法");
console.log(buf3, buf3.toString());

// 写入 Buffer 数据
buf1.write("hello");
console.log(buf1);

// 合并 Buffer 数据
const buf4 = Buffer.concat([buf1, buf3]);
console.log(buf4.toString());
```


## http 服务

创建一个 http 服务器

```JS
const http = require("http");
const server = http.createServer((request, response) => {
  console.log("there is a request");
  response.end("a response from server");
});
server.listen(3000, () => {
  console.log("server is listening on port 3000");
});

// function getPrototypeChain(obj) {
//   const protoChain = [];
//   while ((obj = Object.getPrototypeOf(obj))) {
//     protoChain.push(obj);
//   }
//   protoChain.push(null);
//   return protoChain;
// }
```

```js
// 显示一个页面
const {url, method} = request;

if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(500, {'Content-type': 'text/plain;charset=utf-8'});
            response.end('500, 服务器错误');
            return;
        }
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        response.end(data);
    })
} else {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/plain;charset=utf-8');
    response.end('404, 页面没找到')
}
```

```JS
else if (url === '/users' && method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json' });
    response.end(JSON.stringify({name: 'tom', age: 20}));
}
```

## Stream 流

stream - 是用于与 node 中数据交换的接口

```JS
// 二进制友好，图片操作
const fs = require("fs");

const rs2 = fs.createReadStream("./01_nodejs基础.md");
const ws2 = fs.createWriteStream("./02_nodejs基础.md");
rs2.pipe(ws2);

// 响应图片请求
const {url, method, headers} = request;

else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('.' + url).pipe(response);
}
```

Accept 代表发送端（客户端）希望接受的数据类型。比如：Accept：text/xml；代表客户端希望接受的数据类型是 xml 类型。
Content-Type 代表发送端（客户端|服务端）发送的实体数据的数据类型，比如：Content-Type: text/html;代表发送端发送的数据格式是 html。
二者结合起来，Accept：text/xml；Content-Type：text/html，即代表希望接受的数据类型是 xml 格式，本次请求发送的数据的数据格式是 html。