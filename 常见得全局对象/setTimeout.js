setTimeout(()=>{
    console.log("setTime");
},0)

setInterval(()=>{
    console.log("INternam");
},1000)

setImmediate(()=>{
    console.log("imediate");
})

process.nextTick(()=>{
    console.log("Process nextTick!")
})