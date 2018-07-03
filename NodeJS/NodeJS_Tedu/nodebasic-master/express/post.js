var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var urlendcodeParser = bodyParser.urlencoded({extended:false});

//http://localhost:8000/process_get
app.get('/process_get', function (req, res) {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

//http://localhost:8000/process_get
app.post('/process_post',urlendcodeParser, function (req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});