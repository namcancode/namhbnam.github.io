import { io, mangUser } from "../bin/socket";
let userInRoom = {};

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
	socket.on("win", function(data) {
		mangUser[`${data.name}`] = socket.id;
		mangUser[`${data.lose}`] = socket.id;
		socket.leave(`${data.room}`);
		socket.join("total");
		io.in("total").emit("danh-sach-dang-online", mangUser);
	});

	socket.on("logout", function() {
		const room = Object.keys(socket.rooms)[
			Object.keys(socket.rooms).length - 1
		];
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
		delete mangUser[`${socket.Username}`];
		delete userInRoom[`${socket.Username}`];
		socket.leaveAll();
		socket.disconnect(true);

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
		console.log(mangUser)
		io.to(`${mangUser[`${data.target}`]}`).emit("wanna-fight", {
			challenger: data.challenger,
			target: data.target,
			id:data.id
		});
	});
	socket.on("declined", data => {
		io.to(`${mangUser[`${data.challenger}`]}`).emit("challenge-status", {
			status: "declined",
			target: socket.Username,
			challenger: data.challenger,
			id:data.id
		});
	});

	socket.on("userA", data => {
		const name = socket.Username;
		userInRoom[`${data.challenger}`] = socket.id;
		socket.myGame = `${data.id}-${data.target}`; //ten phong
		socket.challenger = `${data.challenger}`; //ten thach dau
		delete mangUser[`${socket.Username}`];
		// socket.leaveAll();
		socket.leave("total");
		socket.join(`${socket.myGame}`); // target join room
		io.in(`total`).emit("danh-sach-dang-online", mangUser);
		io.to(`${mangUser[`${data.challenger}`]}`).emit("challenge-status", {
			status: "accepted",
			target: socket.Username,
			challenger: data.challenger,
			id:data.id
		});

		socket.on("moved", function(data) {

			if (data) {
				if (
					data.sender === socket.challenger &&
					data.color === "dragon"
				) {
					io.in(socket.myGame).emit("everyBodyMove", {
						data,
						name,
						room: socket.myGame
					});
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", {
						data,
						name,
						room: socket.myGame
					});
				}
			}
		});
	});

	socket.on("userB", data => {
		// challenger join room  socket nam
		const name = socket.Username;
		socket.myGame = `${data.id}-${data.target}`;
		socket.challenger = `${socket.Username}`; //thach dau
		delete mangUser[`${socket.Username}`];
		userInRoom[`${data.target}`] = socket.id;
		// socket.leaveAll();
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
					io.in(socket.myGame).emit("everyBodyMove", {
						data,
						name,
						room: socket.myGame
					});
				} else if (
					data.sender !== socket.challenger &&
					data.color === "phoenix"
				) {
					io.in(socket.myGame).emit("everyBodyMove", {
						data,
						name,
						room: socket.myGame
					});
				}
			}
		});
	});
	socket.on("disconnect", function() {
		socket.broadcast.emit("no-dung-go-chu", socket.Username);
		delete mangUser[`${socket.Username}`];
		delete userInRoom[`${socket.Username}`];
		io.in("total").emit("out-chess", {
			name: socket.Username,
			room: "total"
		});
	});
});
