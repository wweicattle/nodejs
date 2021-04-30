let {
    promisify
} = require("util")
let download = promisify(require("download-git-repo"));
var gitname = 'direct:https://github.com/wweicattle/vue2template.git'
let commonSpawn = require("./createSpawn")
let createProject = async (arg) => {
    console.log(arg);
    console.log("正在拉取代码中. . . ");
    console.log(download);
    try {
        // pull远程git代码
        await download(gitname, arg, {
            clone: true
        });

        // 执行npm install
        await commonSpawn('npm',["install"],{cwd:`./${arg}`}); 


        //
        // await commonSpawn('npm.cmd',["run","serve"],{cwd:`./${arg}`}); 
    } catch (ee) {
        console.log(ee);

    }


}
module.exports = createProject;