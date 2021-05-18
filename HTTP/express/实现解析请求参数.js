let express = require("express");
let app = express();


let qs = require("querystring")


// 自己实现请求参数编码类型参数的解析中间件！
// app.use((req, res, next) => {
//     console.log(req.headers["content-type"]);
//     if (req.headers["content-type"].indexOf("multipart/form-data") != -1) {
//         next();
//     } else if (req.headers["content-type"].indexOf("application/json") != -1) {
//         req.on("data", (data) => {
//             req.body = JSON.parse(data.toString());
//             next();
//         })
//     } else if (req.headers["content-type"].indexOf("application/x-www-form-urlencoded") != -1) {
//         req.on("data", (data) => {
//             console.log(data.toString());
//             // req.bodys = JSON.parse(data.toString());
//             let obj=qs.parse(data.toString())
//             req.body=obj;
//             next();
//         })
//     }
// })


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded



app.post("/upload", (req, res, next) => {
    console.log(req.body);

    console.log(req.get('content-type'));
    console.log(req.params);
    res.json({
        name: "Wuwei",
        age: 25
    });
})



app.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE')
    console.log(req.headers);
    next();
    res.end("over!")
})

app.get('/user/:id', function (req, res, next) {
    console.log('although this matches')
    console.log(req.params.id);
    console.log(req.headers);
    next()
})
// app.get('/user/:id', function (req, res) {
//     console.log('and this matches too')
//     res.end()
// })

app.listen("8082", (err) => {
    console.log("begin");
})