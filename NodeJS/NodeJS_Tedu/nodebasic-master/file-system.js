var fs = require('fs');
//Read file

var http = require('http');
http.createServer(function (req, res) {
    
    fs.readFile('demoHtml.html', function (err, data) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8000);

//Create file: appendFile(), open(), writeFile()
fs.appendFile('mytextFile.txt','Hello content',function(err){
    if(err) throw err;

    console.log('Saved');
});

fs.open('myTextFile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Save');
    console.log(file);
});

fs.writeFile('myTextFile3.txt','This is replace content',function(err){
    if(err) throw err;
    console.log('saved');
});

fs.appendFile('myTextFile3.txt','Content TEDU 2',function(err){
    if(err) throw err;
    console.log('saved');
});


fs.unlink('myTextFile3.txt',function(err){
    if(err) throw err;
    console.log('saved');
});


fs.rename('myTextFile2.txt','myTextFile3.txt',function(err){
    if(err) throw err;
    console.log('File renamed');
});