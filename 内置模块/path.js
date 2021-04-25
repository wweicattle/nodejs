//path模块，可以拼接你多给的路径
// 当在window系统上，支持\\  \  /这三种写法
// linux macOS上支持/ 写法 
// 当你想\ 写法在linux上部署的话，那么使用path的模块可以自动拼接为你想要的路径

var path=require("path")

var f="\\sfds\\dsf\\";
var cd="saa/df";
var finalName=path.resolve(f,cd);
console.log(finalName);