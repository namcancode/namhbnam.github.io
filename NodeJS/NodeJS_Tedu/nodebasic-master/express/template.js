var express = require('express');

var app = express();
app.set('view engine', 'pug');
app.set('views','./express/views');

app.get('/', function (req, res) {
    res.render('view.pug', { title: 'Hello', message: "Welcome to TEDU" });
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App is running at htt://%s:%s', host, port);
});