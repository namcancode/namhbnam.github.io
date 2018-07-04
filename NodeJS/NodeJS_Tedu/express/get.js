const express = require("express");

const app = express();
app.get("/process_get", function(req, res) {
const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
};
console.log(response);
res.end(JSON.stringify(response))
});
const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
