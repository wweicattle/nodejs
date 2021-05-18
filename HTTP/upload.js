let http = require("http");
let url = require("url");
let qs = require("querystring");
let fs = require("fs");




let server = http.createServer((req, res) => {

    let body = "";
    req.setEncoding("binary")
    // 第一种方式
    req.on("data", (data) => {
        body += data;
        console.log(data);
    })

    console.log(body);

    res.end("success!");
})
server.listen("8050", "0.0.0.0", () => {
    console.log("serve is begin!");
})