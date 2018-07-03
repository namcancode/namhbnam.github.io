const express = require('express');

const app = express();
app.get('/', function  (req, res) {
    res.send('this is Express Application')
});
const server = app.listen(8000,function  () {
    console.log('Server is running at: ' +server.address().port)
})
