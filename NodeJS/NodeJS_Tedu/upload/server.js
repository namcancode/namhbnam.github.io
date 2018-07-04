const express = require("express");
const multer = require("multer");
const app = express();
const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "./upanh");
	},
	filename: function(req, file, callback) {
		callback(null, file.originalname);
	}
});

const upload = multer({ storage: storage }).single("myfile");
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.post("/upload", function(req, res) {
	upload(req, res, function(err) {
		if (err) {
			return res.end("Error uploading file");
		}
		res.end("File is uploaded sucsessfully");
	});
});

const server = app.listen(8000, function() {
	console.log("Server is running at: " + server.address().port);
});
