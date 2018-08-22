import { io, clients } from "../bin/socket";
let mangUser = {};
/* io.on("connection", function(socket) {
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


}); */
//Socket mr Cuong

io.on("connection", function(socket) {
	socket.on("client-send-username", function(data) {
		if (mangUser[`'${data}'`] || data == "") {
			socket.emit("server-send-dangky-thatbai");
		} else {
			mangUser[`${data}`] = socket.id;
			socket.Username = data;
			socket.emit("server-send-dangky-thanhcong", data);
			io.sockets.emit("danh-sach-dang-online", mangUser);
		}
	});

	socket.on("logout", function() {
		delete mangUser[`${socket.Username}`];
		socket.broadcast.emit("danh-sach-dang-online", mangUser);
	});

	socket.on("user-send-message", function(tinnhan) {
		io.sockets.emit("tin-nhan-chung", {
			un: socket.Username,
			mes: tinnhan
		});
	});

	socket.on("dang-go-chu", function() {
		socket.broadcast.emit("no-dang-go-chu", socket.Username);
	});
	socket.on("dung-go-chu", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
	});

	socket.on("challenging", data => {
		// challenger ask for a match

		io.to(`${mangUser[`${data.target}`]}`).emit("wanna-fight", {
			challenger: data.challenger
		});
	});
	socket.on("declined", cha => {
		// target reply
		io.to(`${mangUser[`${cha}`]}`).emit("challenge-status", {
			status: "declined",
			target: socket.Username
		});
	});

	socket.on("accepted", cha => {
		// target reply socket cuong
		io.to(`${mangUser[`${cha}`]}`).emit("challenge-status", {
			status: "accepted",
			target: socket.Username
		});
		socket.myGame = `${socket.Username}-${cha}`; //ten phong
		socket.challenger = `${cha}`; //ten thach dau
		socket.join(`${socket.Username}-${cha}`); // target join room

		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", data);
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", data);
				}
			}
		});
	});

	socket.on("join-room", target => {
		// challenger join room  socket nam
		socket.myGame = `${target}-${socket.Username}`;
		socket.challenger = `${socket.Username}`; //thach dau
		socket.join(`${target}-${socket.Username}`);

		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", data);
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", data);
				}
			}
		});
	});
	//------------chess xuli trong room------------------------

	// -----------chess-end------------------------------------
	socket.on("disconnect", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
	});
});
