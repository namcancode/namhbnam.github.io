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

io.on("connection", function(socket) {
	socket.on("client-send-username", function(data) {
		if (mangUser[`${data}`] || !data) {
			socket.emit("server-send-dangky-thatbai");
		} else {
			mangUser[`${data}`] = socket.id;
			socket.Username = data;
			socket.join("total");
			socket.emit("server-send-dangky-thanhcong", data);
			io.sockets.emit("danh-sach-dang-online", mangUser);
			// console.log("client sen username :", mangUser);
			io.in("total").clients((err, clients) => {
				// console.log(clients);
			});
			io.in("thien-nam").clients((err, clients) => {
				// console.log(clients);
			});
		}
	});

	socket.on("logout", function() {
		delete mangUser[`${socket.Username}`];
		socket.broadcast.emit("danh-sach-dang-online", mangUser);
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
		// target reply
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
			target: socket.Username
		});
		console.log("accepted :", userInRoom);
		// io.in(`${socket.myGame}`).emit("danh-sach-dang-online", userInRoom);
		// chatRoom(socket.myGame, name,socket.myGame);
		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name });
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name });
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
		console.log("join-room :", userInRoom);
		io.in(`total`).emit("danh-sach-dang-online", mangUser);
		if(Object.keys(userInRoom).length - 2 > 0){
			let twoGirlOneCup = {};
			let count = 0;
			for (let key in userInRoom) {
				console.log(Object.keys(userInRoom).length - 2);
				if ((count == Object.keys(userInRoom).length - 1)) {
					console.log("vao count");
					twoGirlOneCup[`${key}`] = userInRoom[`${key}`];
				}
				count++;
			}
			io.in(`${socket.myGame}`).emit("danh-sach-dang-online", twoGirlOneCup);
		}else{
			io.in(`${socket.myGame}`).emit("danh-sach-dang-online", userInRoom);
		}


		// chatRoom(socket.myGame, name,socket.myGame);
		socket.on("moved", function(data) {
			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name });
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", { data, name });
				}
			}
		});
	});
	//------------chess xuli trong room------------------------

	// -----------chess-end------------------------------------
	socket.on("disconnect", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
		delete mangUser[`${socket.Username}`];
		delete userInRoom[`${socket.Username}`];
		io.in("total").emit("danh-sach-dang-online", mangUser);
	});
});
