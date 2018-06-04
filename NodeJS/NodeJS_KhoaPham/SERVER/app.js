let express = require("express");
let app = express();
let server = require("http").createServer(app).listen(7777);
app.get("/", (req, res)=>{
    // res.send("Hello res")
    res.sendFile(__dirname+ "/index.html")
})
app.get("/gioithieu", (req, res)=>{
    // res.send("Hello res")
    res.send("gioi thieu")
})
app.get("/tinhtong/:so1/:so2", (req, res)=>{
    // res.send("Hello res")
    let n =req.params.so1;
    n = parseInt(n);
    let n2 =req.params.so2;
    n2 = parseInt(n2)
    let tong = n + n2
    res.send("<h2>"+tong+"</h2>")
})