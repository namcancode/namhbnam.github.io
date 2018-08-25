import { io, mangUser } from "../bin/socket";
let userInRoom = {};
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
function getLastClientOfRoom(userInRoom, room) {
	if (Object.keys(userInRoom).length - 2 > 0) {
		let twoGirlsOneCup = {};
		let count = 0;
		for (let key in userInRoom) {
			count++;
			if (
				count == Object.keys(userInRoom).length - 1 ||
				count == Object.keys(userInRoom).length
			) {
				twoGirlsOneCup[`${key}`] = userInRoom[`${key}`];
			}
		}
		io.in(`${room}`).emit("danh-sach-dang-online", twoGirlsOneCup);
	} else {
		io.in(`${room}`).emit("danh-sach-dang-online", userInRoom);
	}
}
io.on("connection", function(socket) {
	socket.on("client-send-username", function(data) {
		if (mangUser[`${data}`] || !data) {
			socket.emit("server-send-dangky-thatbai");
		} else {
			mangUser[`${data}`] = socket.id;
			socket.Username = data;
			socket.join("total");
			socket.emit("server-send-dangky-thanhcong", data);
			io.in("total").emit("danh-sach-dang-online", mangUser);
		}
	});
	socket.on("win",function  (data) {
		mangUser[`${data.name}`] = socket.id;
		mangUser[`${data.lose}`] = socket.id;
		socket.leave(`${data.room}`);
		socket.join('total')
		io.in("total").emit("danh-sach-dang-online", mangUser);
	})

	socket.on("logout", function() {
		const room = Object.keys(socket.rooms)[
			Object.keys(socket.rooms).length - 1
		];
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
		delete mangUser[`${socket.Username}`];
		delete userInRoom[`${socket.Username}`];
		if (room == "total") {
			socket.leave(`${room}`);
			io.in(`${room}`).emit("out-chess", { name: socket.Username, room });
		} else {
			socket.leave(`${room}`);
			io.in(`${room}`).emit("out-chess", { name: socket.Username, room });
		}
	});
	socket.on("back-to-total", function(data) {
		mangUser[`${data.name}`] = socket.id;
		socket.join("total");
		io.in(`${data.room}`).emit("danh-sach-dang-online", mangUser);
		io.in(`total`).emit("danh-sach-dang-online", mangUser);
	});

	socket.on("user-send-message", function(data) {
		if (mangUser[`${data.nameuser}`]) {
			io.in("total").emit("tin-nhan-chung", {
				un: socket.Username,
				mes: data.mes
			});
		} else if (userInRoom[`${data.nameuser}`]) {
			io.to(`${socket.myGame}`).emit("tin-nhan-room", {
				un: socket.Username,
				mes: data.mes,
				room: `${userInRoom}`
			});
		}
	});

	socket.on("dang-go-chu", function() {
		socket.broadcast.emit("no-dang-go-chu", socket.Username);
	});
	socket.on("dung-go-chu", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
	});

	socket.on("challenging", data => {
		io.to(`${mangUser[`${data.target}`]}`).emit("wanna-fight", {
			challenger: data.challenger,
			target: data.target
		});
	});
	socket.on("declined", data => {
		io.to(`${mangUser[`${data.challenger}`]}`).emit("challenge-status", {
			status: "declined",
			target: socket.Username,
			challenger: data.challenger
		});
	});

	socket.on("accepted", data => {
		const name = socket.Username;
		userInRoom[`${data.challenger}`] = socket.id;
		socket.myGame = `${socket.Username}-${data.challenger}`; //ten phong
		socket.challenger = `${data.challenger}`; //ten thach dau
		delete mangUser[`${socket.Username}`];
		socket.leave("total");
		socket.join(`${socket.myGame}`); // target join room
		io.in(`total`).emit("danh-sach-dang-online", mangUser);
		io.to(`${mangUser[`${data.challenger}`]}`).emit("challenge-status", {
			status: "accepted",
			target: socket.Username,
			challenger: data.challenger
		});
		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name,room:socket.myGame });
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name,room:socket.myGame });
				}
			}
		});
	});

	socket.on("join-room", data => {
		// challenger join room  socket nam
		const name = socket.Username;
		socket.myGame = `${data.target}-${socket.Username}`;
		socket.challenger = `${socket.Username}`; //thach dau
		delete mangUser[`${socket.Username}`];
		userInRoom[`${data.target}`] = socket.id;
		socket.leave("total");
		socket.join(`${socket.myGame}`);
		io.in(`total`).emit("danh-sach-dang-online", mangUser);
		getLastClientOfRoom(userInRoom, socket.myGame);
		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name,room:socket.myGame });
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove",{ data, name,room:socket.myGame });
				}
			}
		});
	});
	socket.on("disconnect", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
		delete mangUser[`${socket.Username}`];
		delete userInRoom[`${socket.Username}`];
		io.in("total").emit("out-chess", { name: socket.Username, room:"total" });
	});

});
