let multer = require("multer");
// var upload = multer({
//     dest: 'uploadss/'
// })
let path = require("path")


let express = require("express");

let app = express();
let fs = require("fs");



var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './uploadssw/';

createFolder(uploadFolder);



// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder); // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage
})
app.use("/login",upload.any(), (req, res) => {
    console.log(req.body);
    res.end("over!");

})
// app.use();
app.post('/profileimg', upload.single("file"), function (req, res, next) {
    console.log(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    req.on("data", (da) => {
        console.log(da);
    })
    console.log(req.file);
    res.json({
        status: 200,
        res_code: "upload success"
    })

})

app.listen(1666, () => {
    console.log("begins");
})