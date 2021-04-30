const program = require("commander");
const createProject=require("./../util/createProject");
const command = (floder) => {
  program
    .command("create <project>  [others...]")
    .description("from clone your project ?")
    .action(createProject);
};


module.exports=command;