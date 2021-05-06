let sharp = require("sharp");
let fs = require("fs");


sharp("./avator.jpg").toFile("./wuwei.jpg", (err) => {
    console.log(err);
});


sharp("./avator.jpg").rotate().resize(220, 220).toBuffer().then(da => {
    fs.writeFile("./wuweis.png", da, (err) => {
        console.log(err);
    })
    // console.log(da);
})

sharp({
    create: {
        width: 300,
        height: 200,
        channels: 3,
        noise: {
            type: 'gaussian',
            mean: 128,
            sigma: 30
        }
    }
}).toFile('noise.png');



sharp({
        create: {
            width: 300,
            height: 200,
            channels: 4,
            background: {
                r: 255,
                g: 0,
                b: 0,
                alpha: 0.5
            }
        }
    })
    .png()
    .toBuffer()
    .then(da => {
        fs.writeFile("./wuweiss.gif", da, (err) => {
            console.log(err);
        })
    });