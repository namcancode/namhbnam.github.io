const express = require("express");

const app = express();
app.get("/", function(req, res) {
	// res.cookie("sample", "test res cookie");
	// res.send("This is sample");
	// res.json({
	// 	name: "huong",
	// 	age: 29
    // });
    res.redirect('http://phimdayroi.ga')
	// res.end();
});
const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
