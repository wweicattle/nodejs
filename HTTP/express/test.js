let express = require("express")

let app = express();

app.use("/profileimg",(req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    res.send({name:"wuwei",age:25});
})


app.listen(2222, () => {
    console.log("begin");
})