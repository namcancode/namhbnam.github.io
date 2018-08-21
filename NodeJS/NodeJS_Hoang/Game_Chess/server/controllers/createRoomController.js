import { io, clients } from "../bin/socket";

io.on("connection", function(socket) {
	// console.log("a user connected" + socket);
	socket.on("disconnect", function() {
		// console.log("user disconnected");
		if (clients) {
			for (let i = 0; i < clients.length; i++) {
				if (socket.id == clients[i].id) {
					clients.splice(i, 1);
				}
			}
		}
	});
	socket.on("send message", function(data) {
		// console.log("message: " + data);
		io.emit("new message", { msg: data });
	});
	socket.on("new user", name => {
		const user = { id: socket.id, name };
		if (clients.length > 0) {
			clients.forEach(e => {
				if (e.name == name) {
					socket.emit("cannot create user", { name: e.name });
					return;
				}
			});
			clients.push(user);
			socket.join("room total");
			io.to("room total").emit("name user", clients);
		} else {
			clients.push(user);
			socket.join("room total");
			io.to("room total").emit("name user", clients);
		}
	});
	socket.on("challenge", data => {
		clients.forEach(c => {
			if (c.name == data.data) {
				socket.leave("room total");
				io.sockets.connected[c.id].leave("room total");
				socket.join(`${data.data}`);
				io.sockets.connected[c.id].join(`${data.data}`);
				io.to(`${data.data}`).emit("createBoard", data.data);
			}
		});

	});
	socket.on("move",function  (move) {
		const room = Object.keys(socket.rooms)[0]
		socket.to(`${room}`).emit("moveSuccess", {piece:move.piece,square:move.square,checkMoves:move.checkMoves});
	})


});
// const clientInRoom =
// io.sockets.adapter.rooms["room total"];
// const keyIDClient = Object.keys(clientInRoom.sockets);
