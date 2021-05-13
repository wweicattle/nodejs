let fs = require("fs");
let util = require("util")
let paths = process.cwd() + "/test.jpg";
var json = {
    name: "wuwei",
    age: 25,
    sex: "male"
}
fs.writeFileSync("./test.txt", JSON.stringify(json), "utf-8");
fs.readFile("./test.txt", "utf-8", function (err, buffer) {
    // process(buffer);
    console.log(JSON.parse(buffer).name);
    // if (err) throw err;
});
fs.readFile("./test.txt", "utf-8", function (err, buffer) {
    // process(buffer);
    console.log(JSON.parse(buffer).name);
    // if (err) throw err;
});
for (let i = 0; i < 3000; i++) {
    fs.readFile("./test.txt", "utf-8", function (err, buffer) {
        // process(buffer);
        // console.log(JSON.parse(buffer));
        // if (err) throw err;
    });
}


// 判断文件是否存在
if (fs.existsSync('./path/test')) {
    console.log('该路径已存在');
    // fs.rmdirSync("./path/test");
} else {
    console.log("该文件不存在！");
}


// 创建该目录
fs.mkdir('./helloDir/te', {
    recursive: true
}, function (err, code) {
    console.log(err, code);
});




//读取该文件的所有目录
fs.readdir("./", function (err, files) {
    console.log("wuwei--------------");
    console.log(files);
    if (err) {
        console.log(err);
        return;
    }
})

// 通过文件描述符 获取数据的详情
fs.stat("./path/test.txt", (err, info) => {
    console.log("-----------");
    console.log(info.isFile());
    console.log(info.isDirectory());

})


fs.watchFile('./path/test.txt', function (curr, prev) {
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
});
var input = fs.createReadStream('./path/test.txt');

input.on("data", function (data) {
    console.log(222);
    let a;
    a+=data;
    // console.log(a);
})


console.clear();
function fileCopy(filename1, filename2, done) {
    var input = fs.createReadStream(filename1);
    // console.log(input);
    var output = fs.createWriteStream(filename2);
  
    input.on('data', function(d) { output.write(d); });
    // input.on('error', function(err) { throw err; });
    // input.on('end', function() {
    //   output.end();
    //   if (done) done();
    // });
  }
  console.log("++++++++++------------");
  console.log(process.cwd());
  var output = fs.createReadStream("/test.jpg");
  console.log(output);
  fileCopy("/test.jpg","./tests.jpg");
