let http = require("http");
let url = require("url");
let qs = require("querystring");

let server = http.createServer((req, res) => {
    // 第一种方式
    var {
        query,
        pathname
    } = url.parse(req.url);
    if (pathname.indexOf("/login") != -1) {
        // res.statusCode="252";
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        var r="wukai"
        let a=`
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
           <div >wuweinishizuiabngde${r}</div>
        </body>
        
        </html>`
        res.end(a)
    }
    if (pathname.indexOf("/res") != -1) {
        res.end("you res,please login!!")
    }

    

    // res.clo

    // let obj = qs.parse(query)
    // res.end("www")

})
server.listen("8033", "0.0.0.0", () => {
    console.log("serve is begin!");
})