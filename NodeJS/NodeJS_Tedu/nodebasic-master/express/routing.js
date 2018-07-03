var express = require("express");
var app = express();

app.get('/',function(req,res){
    console.log('Home page');
    res.send('Home page');
});

app.post('/',function(req,res){
    console.log('Home page post');
    res.send('Home page post');
});


app.delete('/del_student',function(req,res){
    console.log('Delete student page');
    res.send('Delete student page');
});

app.get('/enroll_student',function(req,res){
    console.log('got a request from /enroll_student');
    res.send('got a request from /enroll_student');
});
//abcd, abxcd
app.get('/ab*cd',function(req,res){
    console.log('got a request from /ab*cd');
    res.send('got a request from /ab*cd');
});

var server = app.listen(8000, function () {
    console.log('Server is running at: ' + server.address().port)
});