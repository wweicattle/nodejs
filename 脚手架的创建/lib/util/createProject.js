let {
    promisify
} = require("util");
let open = require("open");
let download = promisify(require("download-git-repo"));
var gitname = 'direct:https://github.com/wweicattle/vue2template.git'
let commonSpawn = require("./createSpawn");
let ejs = require("ejs");
let path = require("path");
let fs=require("fs")
let createProject = async (arg) => {
    console.log("正在拉取代码中. . . ");
    try {
        // pull远程git代码
        await download(gitname, arg, {
            clone: true
        });

        // 执行npm install
        // 在window上会执行npm.cmd
        const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        // await commonSpawn("npm.cmd", ["install"], {
        //     cwd: `./${arg}`
        // });


        // open("http://localhost/8080");

        //
        await commonSpawn("npm", ["run", "serve"], {
            cwd: `./${arg}`
        });


        console.log(2212);

    } catch (ee) {
        console.log(ee);
    }


}



let createCompent = async (arg,des) => {
    console.log(des);
    console.log("正在创建组件中. . . ");
    let paths = "../templates/components.ejs";
    let despath = path.resolve(__dirname, paths)
    console.log(despath);
    // let e
    ejs.renderFile(despath, {
        data: {
            name: arg
        }
    }, {}, (err, result) => {
        // console.log(result);
        if (err) {
            console.log(err);
        }
        // console.log(result);

        // 写入文件中
        // fs.writeFile("")

    })

}






module.exports = {
    createProject,
    createCompent
};