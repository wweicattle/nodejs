var Router=require("koa-Router");


var   router=new Router({prefix:"/wuwei"});


router.get("/",(ctx,next)=>{
    console.log();
    ctx.response.body={name:"wuwei",age:25};
})
router.get("/:id",(ctx,next)=>{
    console.log(ctx.request.url);
    console.log(ctx.request.params);
    console.log(ctx.request.path);
    console.log(ctx.request.query);

    ctx.response.body={name:"wuwei",age:25};
    


   
})

module.exports=router;