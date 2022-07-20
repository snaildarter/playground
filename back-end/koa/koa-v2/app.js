const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date().getTime();

  console.log(`[logger middleware] before await...`);
  await next();
  console.log(`[logger middleware] after await...`);

  const ms = new Date().getTime() - start;
  console.log(`[logger middleware] ${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx) => {
  console.log(`[logger middleware] response...`);
  ctx.body = "Hello Koa2";
});

app.listen(3000);
