var express = require("express");

var app = express();

app.get('/', function (req, res) {
res.send("This is Express Application")

});

var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});