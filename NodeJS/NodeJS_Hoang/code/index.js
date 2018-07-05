const http = require("http");
const port = 3001;
const server = http
	.createServer((req, res) => {
		// res.write('This is a response for a request !')
		res.writeHead(200, {
			"Content-Type": "text/html",
			Trailer: "content-MD5"
		});
		const ipAddress = req.socket.remoteAddress;
		res.write(`Your IP address is ${ipAddress} \r\n`);
		res.write(`Request's url: ${req.url} \r\n`);
		res.write(
			`Detail request's url: ${require("url").parse(req.url, true)} \r\n`
		);
		debugger;
		res.addTrailers({ "Content-MD5": "2312" });
		res.end();
	})
	.listen(port);
console.log(`server is running on port: ${port}`);
