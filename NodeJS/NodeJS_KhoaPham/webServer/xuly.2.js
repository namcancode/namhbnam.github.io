const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
let obj = {
    lastname: "Nguyen",
    name:"Nam",
    age: 1990,
};
res.end(JSON.stringify(obj))
}).listen(1111)