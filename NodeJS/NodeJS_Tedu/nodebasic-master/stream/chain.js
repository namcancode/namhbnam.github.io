var fs = require("fs");
var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz  
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("File Compressed.");

// Decompress the file input.txt.gz to input.txt  
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log("File Decompressed.");  