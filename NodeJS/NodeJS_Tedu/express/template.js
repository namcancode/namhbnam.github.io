const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set('views','./views/')
app.get("/", function(req, res) {
	res.render("view.pug", { title: "Hello", message: "Welcome to Nam" });
});

const server = app.listen(8000, function() {
	const host = server.address().address;
	const post = server.address().post;
	console.log("App runing at http://%s:%s", host.post);
});
