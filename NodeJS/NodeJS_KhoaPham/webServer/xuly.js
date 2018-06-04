const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    let data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    data = data.replace("{NAME}", "Hello")
    res.end(data)
}).listen(1111)