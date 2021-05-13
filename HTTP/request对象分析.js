// 
let http = require("http");
let url = require("url");
let buffer = require("buffer")
let qs = require("querystring");
let server = http.createServer((req, res) => {
    // 第一种方式
    var {
        query
    } = url.parse(req.url);
    let {
        user
    } = qs.parse(query);

    console.log(req.method);

    //请求的数据参数
    req.on("data", (da) => {
        console.log(da);
        const bufs = Buffer.from(da);
        console.log(bufs);
        console.log(da.toString());
    })
















    // 第二种方式获取请求的参数！
    use = new URLSearchParams(req.url.slice(1)).get("user");
    res.end("g");
})
server.listen("8030", "0.0.0.0", () => {
    console.log("serve is begin!");
})