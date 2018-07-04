const express = require("express");
const app = express();

app.use(function(req, res, next) {
	console.log("%s %s", req.method, req.url);
	next();
});
app.get("/", function(req, res) {
	res.send("Welcome to Nam");
});
app.get("/help", function(req, res) {
	res.send("How can i help you????");
});
const server = app.listen(8000, function() {
	const host = server.address().address;
	const post = server.address().post;
	console.log("App runing at http://%s:%s", host.post);
});
