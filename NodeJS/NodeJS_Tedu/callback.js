const fs = require('fs');
// const data = fs.readFileSync('myTextFile.txt');
// console.log(data.toString());
fs.readFile('mytextFile.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString())
})
console.log('progaram ended')