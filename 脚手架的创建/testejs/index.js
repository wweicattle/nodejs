let ejs = require('ejs'),
  people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= people.join(", "); %>', {
    people: people
  });

let n = ejs.render("Hello, <%= name %>", {
  name: "Wuwei"
})


let gg = ejs.render({
  url: "./test.ejs"
}).render({
  people: ["Jack", "Fred"]
})
console.log(gg);
console.log(n);
console.log(html);