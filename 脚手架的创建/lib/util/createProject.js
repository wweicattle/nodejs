let {
    promisify
} = require("util");
let open = require("open");
let download = promisify(require("download-git-repo"));
var gitname = 'direct:https://github.com/wweicattle/vue2template.git'
let commonSpawn = require("./createSpawn");
let ejs = require("ejs");
let path = require("path");
let fs = require("fs");

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



let createCompent = async (arg, des) => {
    console.log(arg,des);
    console.log("正在创建组件中. . . ");
    let paths = "../templates/components.ejs";
    let despath = path.resolve(__dirname, paths);
    ejs.renderFile(despath, {
        data: {
            name: arg
        }
    }, {}, (err, result) => {
        // console.log(program.dest);
        // console.log(result);
        if (err) {
            console.log(err);
        }
        // console.log(result);
        let paths = path.resolve(__dirname, "../../" + des)
        // let ishave = find(paths);
        // console.log(ishave);
        // if (ishave) {
        // } else {
        //     fs.mkdirSync("/sas", { recursive: true },(err,s)=>{
        //         console.log(err,s);
        //     });
        // }
        // console.log(paths, result);
        // 写入文件
        fs.promises.writeFile(paths, result,(err,j)=>{
            console.log(err,j);
        });
        // 写入文件中
        // fs.writeFile("")

    })

}



function find(dirnames) {
    if (fs.existsSync(dirnames)) {
        return true
    } else {
        return false;
    }
}


module.exports = {
    createProject,
    createCompent
};