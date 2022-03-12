## Koa
概述：Koa 是一个新的 web 框架，致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。
Koa 是 Express 的下一代基于 Node.js 的 web 框架
Koa2 完全使用 Promise 并配合 async 来实现异步

特点：
- 轻量，无捆绑
- 中间件架构
- 优雅的 API 设计
- 增强的错误处理
安装：
```BASH
npm i koa -S
```
中间件机制、请求、响应处理
```JS
const Koa = require('koa')
```
