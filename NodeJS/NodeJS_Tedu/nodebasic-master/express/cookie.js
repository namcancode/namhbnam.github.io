var express = require("express");

var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

//http://localhost:8000/cookie
app.get('/cookie', function (req, res) {
    res.cookie('tedu', '123');
    res.send('Cookie is set');
});
app.get('/', function (req, res) {
    console.log(req.cookies);
    res.send(req.cookies);

});

var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});