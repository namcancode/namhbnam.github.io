var express = require("express");

var app = express();

//http://localhost:8000/
app.get('/', function (req, res) {
   res.cookie('sample','test res cookie');
   //res.send('This is sample');
   res.redirect('http://tedu.com.vn')
});

var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});