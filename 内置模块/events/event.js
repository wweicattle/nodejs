const EventEmitter = require("events");
// var events=require("events");
var event=new EventEmitter();
event.emit("click","wuweia");

event.on("click",(obj)=>{
    console.log(obj);
});
