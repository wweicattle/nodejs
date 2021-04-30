var exec = require('child_process').exec;

var ls = exec('npm -v', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
  }
  console.log('Child Process STDOUT: ' + stdout);
});
console.log("updatae-----------");
console.log();