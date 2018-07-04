const express = require("express");

const app = express();
app.get("/", function(req, res) {
	req.accepts("text/html");
	// const contentType = req.query;
	res.send(req.protocol);
});
const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
