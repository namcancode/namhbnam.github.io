const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    // res.write("<h1>Hello world</h1>");
    res.write(req.url);
    res.end();
});
server.listen(8080)
console.log('Server is running');