let express=require("express")
var state=function(res){
    res.end("sa")
}
let app=express()
app.use(express.static(__dirname + '/public'))
app.get("/begin",(req,res,next)=>{
    state(res);
})

app.listen(5555,(err)=>{
    console.log("begin serve!");
})