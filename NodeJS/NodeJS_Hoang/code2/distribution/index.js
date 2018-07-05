"use strict";

var http = require("http");
var port = 3001;
var server = http.createServer(function (req, res) {
	// res.write('This is a response for a request !')
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	var ipAddress = req.socket.remoteAddress;
	res.write("Your IP address is " + ipAddress + " \r\n");
	res.end();
}).listen(port);
console.log("server is running on port: " + port);