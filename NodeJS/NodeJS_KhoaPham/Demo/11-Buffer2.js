let fs = require('fs')
let noidung = fs.readFileSync(__dirname + "/danhsach.txt");
console.log(noidung);
console.log(noidung.toString());