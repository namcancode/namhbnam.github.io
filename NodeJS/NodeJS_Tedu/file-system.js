const fs = require("fs");
//     //read file;
// const http = require('http');
// http.createServer(function (req, res) {
//     fs.readFile('demo.html', function (err, data) {
//        res.writeHead(200,{'Content-Type':'text/html'});
//        res.write(data);
//        res.end();
//     });
// }).listen(8000)

//Create file: appendfile(). open(), writeFile()
// fs.appendFile('mytextFile.txt','Hello content',function  (err) {
//     if(err) throw err;
//     console.log('Saved');
// })
// fs.open('myTextFile2.txt','w',function  (err,file) {
//     if(err) throw err;
//     console.log('save2');
//     console.log(file);
// });
// fs.writeFile('myTextFile3.txt','content 3',function  (err) {
//     if(err) throw err;
//     console.log('save3');
// })
// fs.unlink('myTextFile3.txt',function  (err) {
//     if(err) throw err;
//     console.log('deleted');
// })
fs.rename("myTextFile2.txt", "myTextFile3.txt", function(err) {
	if (err) throw err;
	console.log("rename");
});
