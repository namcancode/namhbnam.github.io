var express = require('express');

var app = express();
app.use(function (req, res, next) {
    console.log('Middleware 2');
    next();
});
app.use(function (req, res, next) {
    console.log('Middleware 1');
    next();
});

app.get('/', function (req, res) {
    res.send('Welcome to TEDU');
});

app.get('/help', function (req, res) {
    res.send('How can i help you?');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App is running at htt://%s:%s', host, port);
});