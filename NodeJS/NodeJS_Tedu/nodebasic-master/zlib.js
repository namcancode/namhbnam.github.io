const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');  
const inp = fs.createReadStream('mytextFile.txt');  
const out = fs.createWriteStream('mytextFile.txt.gz');  
inp.pipe(gzip).pipe(out);  