const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const urlEndCodeParser = bodyParser.urlencoded({extended:false})

app.get("/process_get", function(req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});


app.post("/process_post",urlEndCodeParser ,function(req, res) {
	const response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});


const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
