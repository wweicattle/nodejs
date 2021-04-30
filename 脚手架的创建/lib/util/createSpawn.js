let childProcess = require("child_process");

let createSpawn = function (...argss) {
    console.log(argss);
    try {
        let process = childProcess.exec(...argss);
        process.stdout.pipe(process.stdout);
        process.stderr.pipe(process.stderr);
        process.on("close", () => {
            
        })
    } catch (ee) {
        console.log(ee);
    }


}


module.exports = createSpawn;