const program = require("commander");
const create = require("./../util/createProject");
const command = () => {
  program
    .command("create <project>  [others...]")
    .description("from clone your project ?")
    .action(create.createProject);


  // ww addCp 需要进行命令添加组件
  program
    .command("addcp <project>  [others...]")
    .description("from clone your componenta?")
    .action(create.createCompent);

};


module.exports = command;