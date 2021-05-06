let fs = require("fs");
fs.readFile("test.txt", {
    encoding: "ascii"
}, (err, data) => {
    console.log(err);
    console.log(data);
})


// 直接转化为buffer形式，16进制的形式进行呈现
fs.readFile("test.txt", {}, (err, data) => {
    console.log(err);
    console.log(data.toString());
})

fs.readFile("test.txt", {}, (err, data) => {
    console.log(err);
    console.log(data.toString());
})