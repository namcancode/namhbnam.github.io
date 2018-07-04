const express = require("express");
const app = express();

app.get('/',function  (req,res) {
    console.log('Home page');
    res.send('Home page');
})


app.post('/',function  (req,res) {
    console.log('Home page post');
    res.send('Home page post');
})

app.delete('/del_student',function  (req,res) {
    console.log('delete Home page');
    res.send('delete Home page post');
})

app.get('/enroll_student',function  (req,res) {
    console.log('got a req from /enroll_student');
    res.send('got a req from /enroll_student');
})
// abcd, abxxcd
app.get('/ab*cd',function  (req,res) {
    console.log('got a req from /ab*cd');
    res.send('got a req from /ab*cd');
})

const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
