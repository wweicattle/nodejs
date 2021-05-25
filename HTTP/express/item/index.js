let express = require("express");
var state = function (res) {
    res.end("sa")
}
var f = 434;
let app = express()
console.log("-------------");
console.log(app);
app.use(express.static(__dirname + '/public'))
app.get("/begin", (req, res, next) => {
    res.end("end")
    next(new Error(f));

})
app.get("/begin", (req, res, next) => {
    // state(res);
    next(new Error("ss"));

})

app.use((err, req, res, next) => {
    // 捕捉错误！
    console.log(err.message);
})
app.listen(5555, (err) => {
    console.log("begin serve!");
})