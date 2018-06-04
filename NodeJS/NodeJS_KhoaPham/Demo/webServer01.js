let http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, {
        "content-Type": "text/plain"
    });
    res.end("Hello my name Nam");
}).listen(5000)