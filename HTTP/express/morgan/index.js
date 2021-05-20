let morgan=require("morgan")
var express = require('express');
let fs=require("fs");
let path=require("path")
var app = express();


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


app.use(morgan('short', {stream: accessLogStream}));


app.use(function(req, res, next){
    // res.send('ok');
    console.log(1);
    next();
});
app.get("/logins",(req,res)=>{
    res.type("application/json");
    res.end(JSON.stringify([32,3232,32323]));
})
console.log(333333);
console.log(app.routes);
app.listen(3000);