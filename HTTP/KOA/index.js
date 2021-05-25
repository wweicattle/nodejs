let Koa = require("koa");
let userRouter = require("./routes/user.js");
// console.log(userRouter.routes);
let bodyparser = require("koa-bodyparser");

let app = new Koa();
// ctx.response.body 可用
app.use(bodyparser);
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use((ctx, next) => {
  console.log(ctx.request.url);
  console.log(ctx.request.method);
  console.log(ctx.request.query);
  // 没提供 params解析
  console.log(ctx.request.params);
  ctx.response.body = "s32";
});
app.listen(3333, (da) => {
  console.log("begin!");
});
