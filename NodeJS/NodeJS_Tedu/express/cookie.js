const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/cookie',function  (req, res) {
    res.cookie('cookie_huong','cookie_nam')
    res.send('cookie is set')
})

app.get('/',function  (req,res) {
    res.send(req.cookies)
    console.log('Cookies: ' ,req.cookies);
})
const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
