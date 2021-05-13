const program = require("commander");



let option = () => {
  program.option('-d --dest<dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages').
  option("-f --framework", "change framework").
  program.on("--help", function () {
    console.log("Other;other descripe help");
  });
};
module.exports = option;