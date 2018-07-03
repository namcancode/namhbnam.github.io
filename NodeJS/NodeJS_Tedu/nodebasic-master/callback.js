var fs = require('fs');

// var data = fs.readFileSync('mytextFile.txt');

// console.log(data.toString());

fs.readFile('mytextFile.txt', function (err, data) {
    debugger;
    if (err) throw err;
    console.log(data.toString());
});

console.log('Program ended');