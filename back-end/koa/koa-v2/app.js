// const Koa = require("koa");
// const app = new Koa();
// const router = require("koa-router")();
// const serve = require("koa-static");

// app.use(async (ctx, next) => {
//   const start = new Date().getTime();

//   console.log(`[logger middleware] before await...`);
//   await next();
//   console.log(`[logger middleware] after await...`);

//   const ms = new Date().getTime() - start;
//   console.log(`[logger middleware] ${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// router.get("/", function (ctx, next) {
//   ctx.body = "Hello Koa 2.x with router";
// });

// app.use(router.routes()).use(router.allowedMethods()).use(serve("."));

// app.use(async (ctx) => {
//   return (ctx.body = {
//     header: ctx.header,
//     cookies: ctx.request.cookies,
//     get_cache_control: ctx.get("Cache-Control"),
//   });
// });

// app.listen(3000);

const Mongoose = require("mongoose");

// const db = Mongoose.connect("mongodb://localhost:27017/test");

// db.connection.on("error", function (error) {
//   console.log("数据库连接失败：" + error);
// });

// db.connection.on("open", () => {
//   console.log("数据库连接成功！");
// });

(async () => {
  const db = await Mongoose.connect("mongodb://localhost:27017/test");
  console.log(db.model);
})();
