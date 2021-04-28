const program = require("commander");

const command = (floder) => {
  program
    .command("create <project>  [others...]")
    .description("from clone your project ?")
    .action((project, others) => {
        console.log(floder);
        console.log(project);
        console.log(others);
    });
};


module.exports=command;