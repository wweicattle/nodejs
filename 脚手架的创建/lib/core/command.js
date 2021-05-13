const { Command } = require('commander');
const program = new Command();
const create = require("./../util/createProject");
const command = () => {
  program
    .command("create <project>  [others...]")
    .description("from clone your project ?")
    .action(create.createProject);


  // ww addCp 需要进行命令添加组件
  program
    .command("add <project>  [others...]")
    .description("from clone your component?")
    .action((name)=>{
      console.log("---------");
      console.log(program.dest); 
      create.createCompent(name,program.dest)
    });

};


module.exports = command;