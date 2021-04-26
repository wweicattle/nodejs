const { COPYFILE_FICLONE_FORCE } = require("constants");
var fs=require("fs")

var path=require("path")
fs.open("../abc.txt",(err,fd)=>{
    console.log(err);
    console.log(fd);


    // 通过文件描述符 获取数据的详情
    fs.fstat(fd,(err,info)=>{
        console.log(info);
    })
})

//添加文字进行到文件中
fs.writeFile("../abc.txt","fdfdf",{flag:"a+"},(err)=>{
    console.log(err);
})

console.log("write");



// 字符编码，默认会二进制输出，一般使用utf-8来表示
fs.readFile("../abc.txt",(err,data)=>{
    console.log(data);
})



// 创建有无该文件夹
function find(dirnames){
    fs.mkdir(dirnames,(err,files)=>{
        console.log(files);
    })

}
find("./testfile");

let f="./testfile"
// 查看文件夹中的文件列表,如果是一个目录就递归调用
function findFiles(f){
    fs.readdir(f,{withFileTypes:true},(err,files)=>{
        console.log("---------");
        console.log(files);
        files.forEach((i)=>{
                 if(i.isDirectory()){
                     var t=path.resolve(f,i.name)
                     findFiles(t);
                 }else{
                     console.log(i.name);
                 }

        })
    })
}
findFiles(f)


// 文件目录名进行替换
fs.rename("./wuwei","./wuweis ",(err)=>{
    console.log(err);
})