# node 一些学习笔记

## node启动服务器

```js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Conten-Type': 'text/plan'});
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