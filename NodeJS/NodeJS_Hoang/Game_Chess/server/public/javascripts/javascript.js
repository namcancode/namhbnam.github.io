const socket = io(`${location.protocol}//${document.domain}:4000`);
let checkMoves = true; //true là quân black (random) dasd
const showBoard = async () => {
	$(".chess--board").html("");
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			i % 2 == j % 2
				? $(".chess--board").append(
						`<div class="square ui-widget-content black--square" id="${8 *
							i +
							j}" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}">
						</div>`
				  )
				: $(".chess--board").append(
						`<div class="square white--square" data-x ="${i}" id="${8 *
							i +
							j}" data-y ="${j}"data-point = "${i},${j}">
						</div>`
				  );
		}
	}
	await showChessPieces();
};
const showChessPieces = async () => {
	// Black chess
	$("div.square:nth-child(1)").append(
		`
         <div class="chess--piece" id="black-castle-left" data-team="dragon">
        <img  src="./images/black-castle-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(8)").append(
		`
         <div class="chess--piece" id="black-castle-right" data-team="dragon">
        <img  src="./images/black-castle-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(2)").append(
		`
         <div class="chess--piece" id="black-knight-left" data-team="dragon">
        <img  src="./images/black-knight-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(7)").append(
		`
         <div class="chess--piece" id="black-knight-right" data-team="dragon">
        <img  src="./images/black-knight-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(3)").append(
		`
		<div class="chess--piece" id="black-bishop-left" data-team="dragon">
        <img  src="./images/black-bishop-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(6)").append(
		`
        <div class="chess--piece" id="black-bishop-right" data-team="dragon">
        <img  src="./images/black-bishop-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(4)").append(
		`
         <div class="chess--piece" id="black-queen" data-team="dragon">
        <img  src="./images/black-queen.svg"
        </div>
         `
	);
	$("div.square:nth-child(5)").append(
		`
         <div class="chess--piece" id="black-king" data-team="dragon">
        <img  src="./images/black-king.svg"
        </div>
         `
	);
	$("div.square:nth-child(9)").append(
		`
         <div class="chess--piece" id="black-pawn-1" data-team="dragon">
        <img  src="./images/black-pawn-1.svg"
        </div>
         `
	);
	$("div.square:nth-child(10)").append(
		`
         <div class="chess--piece" id="black-pawn-2" data-team="dragon">
        <img  src="./images/black-pawn-2.svg"
        </div>
         `
	);
	$("div.square:nth-child(11)").append(
		`
         <div class="chess--piece" id="black-pawn-3" data-team="dragon">
        <img  src="./images/black-pawn-3.svg"
        </div>
         `
	);
	$("div.square:nth-child(12)").append(
		`
         <div class="chess--piece" id="black-pawn-4" data-team="dragon">
        <img  src="./images/black-pawn-4.svg"
        </div>
         `
	);
	$("div.square:nth-child(13)").append(
		`
         <div class="chess--piece" id="black-pawn-5" data-team="dragon">
        <img  src="./images/black-pawn-5.svg"
        </div>
         `
	);
	$("div.square:nth-child(14)").append(
		`
         <div class="chess--piece" id="black-pawn-6" data-team="dragon">
        <img  src="./images/black-pawn-6.svg"
        </div>
         `
	);
	$("div.square:nth-child(15)").append(
		`
         <div class="chess--piece" id="black-pawn-7" data-team="dragon">
        <img  src="./images/black-pawn-7.svg"
        </div>
         `
	);
	$("div.square:nth-child(16)").append(
		`
         <div class="chess--piece" id="black-pawn-8" data-team="dragon">
        <img  src="./images/black-pawn-8.svg"
        </div>
         `
	);
	//End Black Chess

	//Start White Chess
	$("div.square:nth-child(57)").append(
		`
         <div class="chess--piece" id="white-castle-left" data-team="phoenix">
        <img  src="./images/white-castle-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(64)").append(
		`
         <div class="chess--piece" id="white-castle-right" data-team="phoenix">
        <img  src="./images/white-castle-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(58)").append(
		`
         <div class="chess--piece" id="white-knight-left" data-team="phoenix">
        <img  src="./images/white-knight-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(63)").append(
		`
         <div class="chess--piece" id="white-knight-right" data-team="phoenix">
        <img  src="./images/white-knight-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(59)").append(
		`
		<div class="chess--piece" id="white-bishop-left" data-team="phoenix">
        <img  src="./images/white-bishop-left.svg"
        </div>
         `
	);
	$("div.square:nth-child(62)").append(
		`
        <div class="chess--piece" id="white-bishop-right" data-team="phoenix">
        <img  src="./images/white-bishop-right.svg"
        </div>
         `
	);

	$("div.square:nth-child(60)").append(
		`
         <div class="chess--piece" id="white-queen" data-team="phoenix">
        <img  src="./images/white-queen.svg"
        </div>
         `
	);
	$("div.square:nth-child(61)").append(
		`
         <div class="chess--piece" id="white-king" data-team="phoenix">
        <img  src="./images/white-king.svg"
        </div>
         `
	);
	$("div.square:nth-child(49)").append(
		`
         <div class="chess--piece" id="white-pawn-1" data-team="phoenix">
        <img  src="./images/white-pawn-1.svg"
        </div>
         `
	);
	$("div.square:nth-child(50)").append(
		`
         <div class="chess--piece" id="white-pawn-2" data-team="phoenix">
        <img  src="./images/white-pawn-2.svg"
        </div>
         `
	);
	$("div.square:nth-child(51)").append(
		`
         <div class="chess--piece" id="white-pawn-3" data-team="phoenix">
        <img  src="./images/white-pawn-3.svg"
        </div>
         `
	);
	$("div.square:nth-child(52)").append(
		`
         <div class="chess--piece" id="white-pawn-4" data-team="phoenix">
        <img  src="./images/white-pawn-4.svg"
        </div>
         `
	);
	$("div.square:nth-child(53)").append(
		`
         <div class="chess--piece" id="white-pawn-5" data-team="phoenix">
        <img  src="./images/white-pawn-5.svg"
        </div>
         `
	);
	$("div.square:nth-child(54)").append(
		`
         <div class="chess--piece" id="white-pawn-6" data-team="phoenix">
        <img  src="./images/white-pawn-6.svg"
        </div>
         `
	);
	$("div.square:nth-child(55)").append(
		`
         <div class="chess--piece" id="white-pawn-7" data-team="phoenix">
        <img  src="./images/white-pawn-7.svg"
        </div>
         `
	);
	$("div.square:nth-child(56)").append(
		`
         <div class="chess--piece" id="white-pawn-8" data-team="phoenix">
        <img  src="./images/white-pawn-8.svg"
        </div>
         `
	);
	//End White Chess
};

function canYouKill(i, teamA, currentName) {
	const teamB = $(`#${i}`)
		.find(".chess--piece")
		.data("team");
	if (teamB) {
		if (teamA == teamB) {
			return true;
		} else {
			$(`#${i}`).addClass("circleB2");
			return true;
		}
	} else {
		teamA == teamB ? true : $(`#${i}`).addClass("circleB");
	}
}
async function highLightHorizontalVertical(currentPoint, teamA) {
	for (let i = currentPoint - 1; i >= parseInt(currentPoint / 8) * 8; i--) {
		//Xác định điểm đầu
		const done = await canYouKill(i, teamA); //hightlight ô đen trắng
		if (done) {
			break;
		}
	}
	for (
		//Xác định điểm cuối
		let i = currentPoint + 1;
		i <= (parseInt(currentPoint / 8) + 1) * 8 - 1;
		i++
	) {
		const done = await canYouKill(i, teamA); //hightlight ô đen trắng
		if (done) {
			break;
		}
	}
	for (
		let i = currentPoint + 8;
		i <= parseInt(currentPoint % 8) + 1 + 55;
		i = i + 8
	) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
	for (let i = currentPoint - 8; i >= parseInt(currentPoint % 8); i = i - 8) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
}
async function highLightFrogging(currentPoint, teamA) {
	const pointKnight = [];
	const i = parseInt(currentPoint / 8);
	const j = currentPoint % 8;
	for (let x = -2; x <= 2; x++)
		for (let y = -2; y <= 2; y++)
			if (
				x * x != y * y &&
				x != 0 &&
				y != 0 &&
				i + x >= 0 &&
				i + x < 8 &&
				j + y >= 0 &&
				j + y < 8
			)
				pointKnight.push(8 * (i + x) + (j + y));
	pointKnight.forEach(async knight => {
		await canYouKill(knight, teamA);
	});
}
async function hightLightDiagonally(currentPoint, teamA) {
	let t = 0;
	let x = parseInt(currentPoint / 8);
	let y = currentPoint % 8;
	t = Math.min(x, y);
	let a = (x - t) * 8 + y - t;
	t = Math.min(x, 7 - y);
	let b = (x - t) * 8 + y + t;
	t = Math.min(7 - x, y);
	let c = (x + t) * 8 + y - t;
	t = Math.min(7 - x, 7 - y);
	let d = (x + t) * 8 + y + t;

	for (let i = currentPoint - 9; i >= a; i = i - 9) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
	for (let i = currentPoint + 9; i <= d; i = i + 9) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
	for (let i = currentPoint - 7; i >= b; i = i - 7) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
	for (let i = currentPoint + 7; i <= c; i = i + 7) {
		const done = await canYouKill(i, teamA);
		if (done) {
			break;
		}
	}
}
async function hightLightPawn(currentPoint, currentName, teamA) {
	const x = parseInt(currentPoint / 8);
	const y = currentPoint % 8;
	if (currentName.indexOf("black-pawn") != -1) {
		const teamB = $(`[data-point="${x + 1},${y + 1}"]`)
			.find(".chess--piece")
			.data("team");
		const teamC = $(`[data-point="${x + 1},${y - 1}"]`)
			.find(".chess--piece")
			.data("team");
		if (teamB && teamB != teamA) {
			$(`[data-point="${x + 1},${y + 1}"]`).addClass("circleB2");
		}
		if (teamC && teamC != teamA) {
			$(`[data-point="${x + 1},${y - 1}"]`).addClass("circleB2");
		}
		if (
			currentPoint == 8 ||
			currentPoint == 9 ||
			currentPoint == 10 ||
			currentPoint == 11 ||
			currentPoint == 12 ||
			currentPoint == 13 ||
			currentPoint == 14 ||
			currentPoint == 15
		) {
			for (let i = currentPoint + 8; i <= currentPoint + 16; i = i + 8) {
				if ($(`#${i}`).find(".chess--piece").length <= 0) {
					const done = await canYouKill(i, teamA);
					if (done) {
						break;
					}
				} else break;
			}
		} else {
			for (let i = currentPoint + 8; i <= currentPoint + 8; i = i + 8) {
				if ($(`#${i}`).find(".chess--piece").length <= 0) {
					const done = await canYouKill(i, teamA);
					if (done) {
						break;
					}
				} else break;
			}
		}
	}
	if (currentName.indexOf("white-pawn") != -1) {
		const teamB = $(`[data-point="${x - 1},${y - 1}"]`)
			.find(".chess--piece")
			.data("team");
		const teamC = $(`[data-point="${x - 1},${y + 1}"]`)
			.find(".chess--piece")
			.data("team");
		if (teamB && teamB != teamA) {
			$(`[data-point="${x - 1},${y - 1}"]`).addClass("circleB2");
		}
		if (teamC && teamC != teamA) {
			$(`[data-point="${x - 1},${y + 1}"]`).addClass("circleB2");
		}
		if (
			currentPoint == 48 ||
			currentPoint == 49 ||
			currentPoint == 50 ||
			currentPoint == 51 ||
			currentPoint == 52 ||
			currentPoint == 53 ||
			currentPoint == 54 ||
			currentPoint == 55
		) {
			for (let i = currentPoint - 8; i >= currentPoint - 16; i = i - 8) {
				if ($(`#${i}`).find(".chess--piece").length <= 0) {
					const done = await canYouKill(i, teamA);
					if (done) {
						break;
					}
				} else break;
			}
		} else {
			for (let i = currentPoint - 8; i >= currentPoint - 8; i = i - 8) {
				if ($(`#${i}`).find(".chess--piece").length <= 0) {
					const done = await canYouKill(i, teamA);
					if (done) {
						break;
					}
				} else break;
			}
		}
	}
}
async function hightLightKing(currentPoint, teamA) {
	const x = parseInt(currentPoint / 8);
	const y = currentPoint % 8;
	const pointKing = [];
	for (let i = x - 1; i <= x + 1; i++) {
		for (let j = y - 1; j <= y + 1; j++) {
			if (i >= 0 && i <= 7 && j >= 0 && j <= 7) {
				if (i != x || j != y) {
					pointKing.push(8 * i + j);
				}
				pointKing.forEach(async point => {
					await canYouKill(point, teamA);
				});
			}
		}
	}
}
async function dragItem() {
	await showBoard();
	$(".wrap--content").css("display", "block");
	$(".chess--piece").draggable({
		addClasses: false,
		helper: "clone",
		start: function(event, ui) {
			$(ui.helper).addClass("ui-helper");
			$(this)
				.parent()
				.addClass("hight--light");
			$(this).addClass("hidden");
			let currentName = $(this).attr("id");
			let currentPoint = Number(
				$(this)
					.parent()
					.attr("id")
			);
			const teamA = $(`#${currentPoint}`)
				.find(".chess--piece")
				.data("team");
			if (currentName.indexOf("castle") != -1) {
				highLightHorizontalVertical(currentPoint, teamA);
			}
			if (currentName.indexOf("knight") != -1) {
				highLightFrogging(currentPoint, teamA);
			}
			if (currentName.indexOf("bishop") != -1) {
				hightLightDiagonally(currentPoint, teamA);
			}
			hightLightPawn(currentPoint, currentName, teamA);
			if (currentName.indexOf("king") != -1) {
				hightLightKing(currentPoint, teamA);
			}
			if (currentName.indexOf("queen") != -1) {
				highLightHorizontalVertical(currentPoint, teamA);
				hightLightDiagonally(currentPoint, teamA);
			}
		},
		stop: function(event, ui) {
			$(".square").removeClass("circleB");
			$(".square").removeClass("circleB2");
			$(this).removeClass("hidden");
		}
	});
	$(".square").droppable({
		over: function(event, ui) {
			if ($(event.target).hasClass("circleB")) {
				$(event.target).addClass("circleA");
			}
			if ($(event.target).hasClass("circleB2")) {
				$(event.target).addClass("circleA2");
			}
		},
		out: function(event, ui) {
			$(event.target).removeClass("circleA");
			$(event.target).removeClass("circleA2");
		},
		tolerance: "pointer", //chỉ cần mouse chỉ vào ô là move
		drop: function(event, ui) {
			$(".square").removeClass("hight--light");
			$(".square").removeClass("circleA");
			$(".square").removeClass("circleA2");
			$(ui.draggable).removeClass("hidden");
			const startPoint = $(ui.draggable)
				.parent()[0]
				.dataset.point.split(",");
			const endPoint = $(this)
				.data("point")
				.split(",");
			const startPointInt =
				8 * parseInt(startPoint[0]) + parseInt(startPoint[1]);
			const endPointInt =
				8 * parseInt(endPoint[0]) + parseInt(endPoint[1]);
			const nameCurrent = $(ui.draggable).attr("id");
			const teamate = $(ui.draggable).data("team");
			const squareCurrent = $(ui.draggable).parent().attr("id")
			if (startPoint[0] == endPoint[0] && startPoint[1] == endPoint[1]) {
				return;
			}
			// $(this).html(ui.draggable);

			if (teamate == "dragon" && checkMoves) {
				if ($(event.target).hasClass("circleB")) {
					// $(this).html(ui.draggable);
					// timeOut("bar2")
					// checkMoves = !checkMoves;
					socket.emit("moved", {
						sender: socket.Username,
						name: nameCurrent,
						square: $(this).attr("id"),
						checkMoves: !checkMoves,
						color: teamate,
						squareCurrent
					});
				}
				if ($(event.target).hasClass("circleB2")) {
					// timeOut("bar2")
					// $(this).html(ui.draggable);
					// checkMoves = !checkMoves;
					socket.emit("moved", {
						sender: socket.Username,
						name: nameCurrent,
						square: $(this).attr("id"),
						checkMoves: !checkMoves,
						color: teamate,
						squareCurrent
					});
				}
			} else if (teamate == "phoenix" && !checkMoves) {
				if ($(event.target).hasClass("circleB")) {
					// $(this).html(ui.draggable);
					// timeOut("bar1")
					// checkMoves = !checkMoves;
					socket.emit("moved", {
						sender: socket.Username,
						name: nameCurrent,
						square: $(this).attr("id"),
						checkMoves: !checkMoves,
						color: teamate,
						squareCurrent
					});
				}
				if ($(event.target).hasClass("circleB2")) {
					// $(this).html(ui.draggable);
					// timeOut("bar1")
					// checkMoves = !checkMoves;
					socket.emit("moved", {
						sender: socket.Username,
						name: nameCurrent,
						square: $(this).attr("id"),
						checkMoves: !checkMoves,
						color: teamate,
						squareCurrent
					});
				}
			}
			$(".chess--board").removeAttr("style");
			$(".progress-slide").removeClass("bar-show");
			checkMoves
				? $("#progress1").addClass("bar-show")
				: $("#progress2").addClass("bar-show");
		}
	});
}
function alertBeautiful(type, data, content, timeout) {
	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: true,
		progressBar: true,
		positionClass: "toast-top-right",
		preventDuplicates: false,
		onclick: null,
		showDuration: 300,
		hideDuration: 1000,
		timeOut: timeout,
		extendedTimeOut: 1000,
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut"
	};
	data ? toastr[`${type}`](`${data} ${content}`, "Thông Báo") : null;
}
async function logOut() {
	checkMoves = true;
	$("#btnLogout").click(function(e) {
		e.preventDefault;
		socket.emit("logout");
		$(".loginForm").show(1000);
		$(".chat-room").hide(500);
		$(".chat-room").css("visibility", "hidden");
		$(".wrap--content").css("display", "none");
	});
}
function challengeSend(e) {
	e.preventDefault;
	const target = $(
		$(e)
			.parent()
			.prev(".text-small")
	)
		.find("strong")
		.text();
	if (socket.Username && socket.Username != target) {
		socket.emit("challenging", {
			challenger: socket.Username,
			target: target,
			id: socket.id
		});
	}
}

function styleForm() {
	$(".chat-room").hide();
	$(".loginForm").show();
	document
		.getElementById("txtUsername")
		.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				document.getElementById("btnRegister").click();
			}
		});
	document
		.getElementById("txtMessage")
		.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				document.getElementById("btnSend").click();
			}
		});
	$("#btnRegister").click(function(e) {
		e.preventDefault;
		socket.emit("client-send-username", $("#txtUsername").val());
	});
	socket.on("server-send-dangky-thanhcong", function(data) {
		$(".chat-room").css("visibility", "visible");
		$(".loginForm").hide(500);
		$(".chat-room").show(1000);
		socket.Username = data;
	});

	$("#txtMessage").focusin(function(params) {
		socket.emit("dang-go-chu");
	});
	$("#txtMessage").focusout(function(params) {
		socket.emit("dung-go-chu");
	});

	$("#btnSend").click(function(e) {
		e.preventDefault;
		const mes = $("#txtMessage").val();
		const nameuser = $(".active")
			.find(".text-small strong")
			.text();
		socket.emit("user-send-message", { mes, nameuser });
		$("#txtMessage").val("");
		$("#listMessage")
			.stop()
			.animate({ scrollTop: $("#listMessage")[0].scrollHeight }, 1500);
	});
}
function socketIoMrCuong() {
	socket.on("server-send-dangky-thatbai", function() {
		if($('#txtUsername').val()==""){
			$(".fs-message-error").addClass('fs-show').text("Hãy nhập tên của bạn vào!");
		}else{
			$(".fs-message-error").addClass('fs-show').text("Tên này đã có người dùng!");
		}
		$('#txtUsername').on("input",function  (e) {
			$(".fs-message-error").removeClass('fs-show').text("");
		})
		$(".chat-room").css("visibility", "hidden");
	});

	socket.on("danh-sach-dang-online", async function(user) {
		$(".list-unstyled.friend-list").html("");
		for (name in user) {
			if (name != socket.Username) {
				$(".list-unstyled.friend-list").append(
					`
					<li class="p-2">
					<a href='javascript:;' class="user--list">
					  <img src="/images/face.png" alt="avatar" class="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1">
					  <div class="text-small">
						<strong>${name}</strong>
						<p class="last-message text-muted">Cần người thách đấu</p>
					  </div>
					  <div class="chat-footer">
						<p class="text-smaller text-muted mb-0">1 min ago</p>
						${
							name != socket.Username
								? `<div class="challengeButton" href='javascript:;' onclick="challengeSend(this)">
						<img src="/images/challenge.png" alt="avatar" class="icon--challenge rounded-circle d-flex align-self-center mr-2 z-depth-1">
						</div>`
								: ""
						}
					  </div>
					</a>
				  </li>
					`
				);
			} else if (name == socket.Username) {
				$(".list-unstyled.friend-list").prepend(
					`
					<li class="p-2 active">
					<a href='javascript:;' class="user--list">
					  <img src="/images/face.png" alt="avatar" class="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1">
					  <div class="text-small">
						<strong>${name}</strong>
						<p class="last-message text-muted">I'm Monter</p>
					  </div>
					  <div class="chat-footer">
						<p class="text-smaller text-muted mb-0">1 min ago</p>
						<i class="fal fa-sign-out" id="btnLogout"></i>
					  </div>
					</a>
				  </li>
					`
				);
			}
			await logOut();
		}
	});

	socket.on("tin-nhan-chung", function(data) {
		if (data) {
			$("#listMessage").append(
				`
				${
					data.un == socket.Username
						? `<li class="user--list mb-4 pt-4 pl-4">
											<img src="/images/face.png" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1">
											<div class="chat-body white p-3 ml-2 z-depth-1">
											  <div class="header">
												<strong class="primary-font">${data.un}</strong>
												<small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 1 mins ago</small>
											  </div>
											  <hr class="w-100">
											  <p class="mb-0">
												${data.mes}
											  </p>
											</div>
										  </li>`
						: `<li class="user--chat mb-4 pt-4 pr-3 pl-4">

											<div class="chat-body white p-3 ml-2 z-depth-1">
											  <div class="header">
												<strong class="primary-font">${data.un}</strong>
												<small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 1 mins ago</small>
											  </div>
											  <hr class="w-100">
											  <p class="mb-0">
												${data.mes}
											  </p>
											</div>
											<img src="/images/face.png" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1">
										  </li>`
				}
				`
			);
		}
	});
	socket.on("tin-nhan-room", function(data) {
		if (data.un) {
			$("#listMessage").append(
				`
				${
					data.un == socket.Username
						? `<li class="user--list mb-4 pt-4 pl-4">
				<img src="/images/face.png" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1">
				<div class="chat-body white p-3 ml-2 z-depth-1">
				  <div class="header">
					<strong class="primary-font">${data.un}</strong>
					<small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 1 mins ago</small>
				  </div>
				  <hr class="w-100">
				  <p class="mb-0">
					${data.mes}
				  </p>
				</div>
			  </li>`
						: `<li class="user--chat mb-4 pt-4 pr-3 pl-4">

			  <div class="chat-body white p-3 ml-2 z-depth-1">
				<div class="header">
				  <strong class="primary-font">${data.un}</strong>
				  <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 1 mins ago</small>
				</div>
				<hr class="w-100">
				<p class="mb-0">
				  ${data.mes}
				</p>
			  </div>
			  <img src="/images/face.png" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1">
			</li>`
				}

				`
			);
		}
	});

	socket.on("no-dang-go-chu", function(gochu) {
		$("#" + gochu).remove();
		$("#listMessage").append(
			"<p  class='bacham' id =" +
				gochu +
				" >" +
				gochu +
				" : " +
				"<span></span><span></span><span></span></p>"
		);
	});

	socket.on("no-dung-go-chu", function(gochu) {
		$("#" + gochu).remove();
	});

	socket.on("wanna-fight", function(data) {
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: "toast-top-right",
			preventDuplicates: true,
			onclick: null,
			showDuration: 300,
			hideDuration: 1000,
			timeOut: 5000,
			extendedTimeOut: 500,
			showEasing: "swing",
			hideEasing: "linear",
			showMethod: "fadeIn",
			hideMethod: "fadeOut",
			tapToDismiss: false
		};
		toastr["info"](
			`${
				data.challenger
			} đã gửi lời mời thách đấu<br /><br /><button id="submitChallenge" type="button" class="btn btn-li clear">Chấp Nhận</button>`,
			"Thông Báo"
		);

		$("#submitChallenge").click(function(e) {
			$('#toast-container').remove()
			if (e.target) {
				socket.emit("userA", {
					challenger: data.challenger,
					target: data.target,
					id: data.id
				});
				dragItem();
				alertBeautiful(
					"info",
					data.challenger,
					"được quyền đi quân đen trước",
					3000
				);

			}
		});

		const myTimeOut = setTimeout(() => {
			socket.emit("declined", {
				challenger: data.challenger,
				target: data.target,
				id: socket.id
			});
		}, 5001);
	});

	socket.on("challenge-status", data => {
		if (data.status === "accepted") {
			socket.emit("userB", {
				target: data.target,
				challenger: data.challenger,
				id: data.id
			});
			alertBeautiful("info", "Bạn", "được quyền đi quân đen trước", 3000);
			dragItem();
		} else {
			alertBeautiful(
				"info",
				data.target,
				"đã từ chối lời thách đấu của bạn",
				2000
			);
		}
	});
	socket.on("everyBodyMove", function(data) {
		let nameLose = data.room.split("-");
		nameLose.forEach(n => {
			if (n != data.name) {
				nameLose = n;
			}
		});
		checkMoves = data.data.checkMoves;
		if (
			$(`#${data.data.square}`).children("#white-king").length ||
			$(`#${data.data.square}`).children("#black-king").length
		) {
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: false,
				progressBar: false,
				positionClass: "toast-top-full-width",
				preventDuplicates: true,
				onclick: null,
				showDuration: 300,
				hideDuration: 1000,
				timeOut: 5000,
				extendedTimeOut: 1000,
				showEasing: "swing",
				hideEasing: "linear",
				showMethod: "fadeIn",
				hideMethod: "fadeOut"
			};
			toastr["success"](
				`Chúc mừng ${data.name} là người chiến thắng`,
				"Chúc mừng"
			);
			socket.emit("win", {
				name: data.name,
				room: data.room,
				lose: nameLose
			});
			setTimeout(() => {
				$(".wrap--content").css("display", "none");
			}, 5001);
		}

		$(`#${data.data.squareCurrent}`).html("");
		$(`#${data.data.square}`).html(`
		<div class="chess--piece ui-draggable-handle" id="${data.data.name}" data-team="${data.data.color}">
        <img src="./images/${data.data.name}.svg" <="" div="">
         </div>
		`);
		// $(`#${data.data.name}`).appendTo($(`#${data.data.square}`));
		$(".chess--piece").draggable({
			addClasses: false,
			helper: "clone",
			start: function(event, ui) {
				$(ui.helper).addClass("ui-helper");
				$(this)
					.parent()
					.addClass("hight--light");
				$(this).addClass("hidden");
				let currentName = $(this).attr("id");
				let currentPoint = Number(
					$(this)
						.parent()
						.attr("id")
				);
				const teamA = $(`#${currentPoint}`)
					.find(".chess--piece")
					.data("team");
				if (currentName.indexOf("castle") != -1) {
					highLightHorizontalVertical(currentPoint, teamA);
				}
				if (currentName.indexOf("knight") != -1) {
					highLightFrogging(currentPoint, teamA);
				}
				if (currentName.indexOf("bishop") != -1) {
					hightLightDiagonally(currentPoint, teamA);
				}
				hightLightPawn(currentPoint, currentName, teamA);
				if (currentName.indexOf("king") != -1) {
					hightLightKing(currentPoint, teamA);
				}
				if (currentName.indexOf("queen") != -1) {
					highLightHorizontalVertical(currentPoint, teamA);
					hightLightDiagonally(currentPoint, teamA);
				}
			},
			stop: function(event, ui) {
				$(".square").removeClass("circleB");
				$(".square").removeClass("circleB2");
				$(this).removeClass("hidden");
			}
		});
		$(".progress-slide").removeClass("bar-show");
		$(".userOnline h5").each(function() {
			if ($(this).html() == data.name) {
				$(this).removeAttr("style");
			} else {
				$(this).css("color", "red");
			}
		});
		checkMoves
			? $("#progress1").addClass("bar-show")
			: $("#progress2").addClass("bar-show");
	});
	socket.on("out-chess", async function(data) {
		await dragItem();
		checkMoves = true;
		const nameuser = $(".active")
			.find(".text-small strong")
			.text();
		let content;
		if (data.room == "total") {
			content = "đã rời khỏi phòng";
		} else if (data.name) {
			content =
				"đã rời khỏi phòng, bạn đã được tự động trở lại room chính";
		}
		alertBeautiful("info", data.name, content, 2000);
		$(".wrap--content").css("display", "none");
		socket.emit("back-to-total", { name: nameuser, room: data.room });
	});
}

$(async () => {
	$(".buttonAI").click(function(e) {
		e.preventDefault;
		$('.boardAI').toggleClass("boardShow")
	});
	await styleForm();
	await socketIoMrCuong();
	await showBoard();
	checkMoves
		? $("#progress1").addClass("bar-show")
		: $("#progress2").addClass("bar-show");
});
