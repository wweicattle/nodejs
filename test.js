let fs=require("fs");

function find(dirnames){
    fs.mkdir(dirnames,(err,files)=>{
        console.log(1121);
        console.log(files);
    });

}
find("./testfile/sa.txt");
