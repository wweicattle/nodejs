let Koa=require("koa");
let userRouter=require("./routes/user.js")


let app=new Koa();
app.use(userRouter.routes())


app.use(userRouter.allowedMethods())
app.listen(3333,(da)=>{
    console.log("begin!");
})