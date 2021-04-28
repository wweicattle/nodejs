const program = require("commander");

let option = () => {
  program.option("-d --dest <dest>", "pelease write your des ?/src/component/");
  program.option("-f --framework", "change framework");
  program.on("--help", function () {
    console.log("");
    console.log("Other;other descripe help");
  });
};
module.exports = option;
