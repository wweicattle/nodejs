let http = require("http");

let server = http.createServer((req, res) => {
    res.end("hi wuwei!s");
})
server.listen("8080", "0.0.0.0", () => {
    console.log("serve is begin!");
})



// 第二中方式
let server1 = new http.Server((req, res) => {
    res.end("hi,serve1!")
})
server1.listen("8081", () => {
// http.address().port
    console.log(server1.address().port);
    console.log("serve1 is begin!");
})

// 端口号可不写，默认
// http.address().port