// import a from "./trst.js"
// import b from "./trst.js"
// console.log(module);
// // console.log(323);
// // console.log(process.argv);

const { scrypt } = require("crypto");
var f=require("./trst.js")
console.log(f);
setTimeout(()=>{
    console.log("fa");
console.log(f.obj)
},2000)
let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('不支持 crypto');
}
console.log(crypto)