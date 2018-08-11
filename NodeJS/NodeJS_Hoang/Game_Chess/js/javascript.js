let check = false;
const showBoard = async () => {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			i % 2 == j % 2
				? $(".container").append(
						`<div class="square ui-widget-content black" id="${8 *
							i +
							j}" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}">
						<span>${i},${j}</span>

						</div>`
				  )
				: $(".container").append(
						`<div class="square white" data-x ="${i}" id="${8 * i +
							j}" data-y ="${j}"data-point = "${i},${j}">
							<span>${i},${j}</span>

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
        <img  src="./img/br.svg"
        </div>
         `
	);
	$("div.square:nth-child(8)").append(
		`
         <div class="chess--piece" id="black-castle-right" data-team="dragon">
        <img  src="./img/br.svg"
        </div>
         `
	);

	$("div.square:nth-child(2)").append(
		`
         <div class="chess--piece" id="black-knight-left" data-team="dragon">
        <img  src="./img/bn.svg"
        </div>
         `
	);
	$("div.square:nth-child(7)").append(
		`
         <div class="chess--piece" id="black-knight-right" data-team="dragon">
        <img  src="./img/bn.svg"
        </div>
         `
	);

	$("div.square:nth-child(3)").append(
		`
		<div class="chess--piece" id="black-bishop-left" data-team="dragon">
        <img  src="./img/bb.svg"
        </div>
         `
	);
	$("div.square:nth-child(6)").append(
		`
        <div class="chess--piece" id="black-bishop-right" data-team="dragon">
        <img  src="./img/bb.svg"
        </div>
         `
	);

	$("div.square:nth-child(4)").append(
		`
         <div class="chess--piece" id="black-queen" data-team="dragon">
        <img  src="./img/bq.svg"
        </div>
         `
	);
	$("div.square:nth-child(5)").append(
		`
         <div class="chess--piece" id="black-king" data-team="dragon">
        <img  src="./img/bk.svg"
        </div>
         `
	);
	$("div.square:nth-child(9)").append(
		`
         <div class="chess--piece" id="black-pawn-1" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(10)").append(
		`
         <div class="chess--piece" id="black-pawn-2" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(11)").append(
		`
         <div class="chess--piece" id="black-pawn-3" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(12)").append(
		`
         <div class="chess--piece" id="black-pawn-4" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(13)").append(
		`
         <div class="chess--piece" id="black-pawn-5" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(14)").append(
		`
         <div class="chess--piece" id="black-pawn-6" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(15)").append(
		`
         <div class="chess--piece" id="black-pawn-7" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	$("div.square:nth-child(16)").append(
		`
         <div class="chess--piece" id="black-pawn-8" data-team="dragon">
        <img  src="./img/bp.svg"
        </div>
         `
	);
	//End Black Chess

	//Start White Chess
	$("div.square:nth-child(57)").append(
		`
         <div class="chess--piece" id="white-castle-left" data-team="phoenix">
        <img  src="./img/wr.svg"
        </div>
         `
	);
	$("div.square:nth-child(64)").append(
		`
         <div class="chess--piece" id="white-castle-right" data-team="phoenix">
        <img  src="./img/wr.svg"
        </div>
         `
	);

	$("div.square:nth-child(58)").append(
		`
         <div class="chess--piece" id="white-knight-left" data-team="phoenix">
        <img  src="./img/wn.svg"
        </div>
         `
	);
	$("div.square:nth-child(63)").append(
		`
         <div class="chess--piece" id="white-knight-right" data-team="phoenix">
        <img  src="./img/wn.svg"
        </div>
         `
	);

	$("div.square:nth-child(59)").append(
		`
		<div class="chess--piece" id="white-bishop-left" data-team="phoenix">
        <img  src="./img/wb.svg"
        </div>
         `
	);
	$("div.square:nth-child(62)").append(
		`
        <div class="chess--piece" id="white-bishop-right" data-team="phoenix">
        <img  src="./img/wb.svg"
        </div>
         `
	);

	$("div.square:nth-child(60)").append(
		`
         <div class="chess--piece" id="white-queen" data-team="phoenix">
        <img  src="./img/wq.svg"
        </div>
         `
	);
	$("div.square:nth-child(61)").append(
		`
         <div class="chess--piece" id="white-king" data-team="phoenix">
        <img  src="./img/wk.svg"
        </div>
         `
	);
	$("div.square:nth-child(49)").append(
		`
         <div class="chess--piece" id="white-pawn-1" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(50)").append(
		`
         <div class="chess--piece" id="white-pawn-2" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(51)").append(
		`
         <div class="chess--piece" id="white-pawn-3" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(52)").append(
		`
         <div class="chess--piece" id="white-pawn-4" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(53)").append(
		`
         <div class="chess--piece" id="white-pawn-5" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(54)").append(
		`
         <div class="chess--piece" id="white-pawn-6" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(55)").append(
		`
         <div class="chess--piece" id="white-pawn-7" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	$("div.square:nth-child(56)").append(
		`
         <div class="chess--piece" id="white-pawn-8" data-team="phoenix">
        <img  src="./img/wp.svg"
        </div>
         `
	);
	//End White Chess
};

$(async () => {
	await showBoard();
	function highLightCastle(currentPoint, currentName) {
		let check = true;
		if (
			currentName == "black-castle-left" ||
			currentName == "black-castle-right" ||
			currentName == "white-castle-right" ||
			currentName == "white-castle-left"
		) {
			for (
				let i = parseInt(currentPoint / 8) * 8;
				i <= (parseInt(currentPoint / 8) + 1) * 8 - 1;
				i++
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}

			for (
				let i = currentPoint;
				i <= parseInt(currentPoint % 8) + 1 + 55;
				i = i + 8
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}
			for (
				let i = currentPoint;
				i >= parseInt(currentPoint % 8);
				i = i - 8
			) {
				if ($(`#${i}`)[0].childElementCount == 0) {
					if (check) {
						check = !check;
						$(`#${i}`).css("background", "rgb(164, 164, 164)");
					} else {
						check = !check;
						$(`#${i}`).css("background", "rgb(107, 107, 107)");
					}
				} else if ($(`#${i}`)[0].childElementCount == 1) {
					break;
				}
			}
		}
	}
	function highLightKnight(currentPoint, currentName) {
		if (
			currentName == "black-knight-right" ||
			currentName == "black-knight-left" ||
			currentName == "white-knight-right" ||
			currentName == "white-knight-left"
		) {
			let i = parseInt(currentPoint / 8);
			let j = currentPoint % 8;
			let L1 = i != 5 ? 8 * (i - 2) + (j - 1) : null;
			let L2 = 8 * (i - 2) + (j + 1);
			let L3 = i != 7 && i != 5 ? 8 * (i - 1) + (j - 2) : null;
			let L4 = i != 0 && i != 7 ? 8 * (i - 1) + (j + 2) : null;
			let L5 = i != 0 && i != 7 && i != 5 ? 8 * (i + 1) + (j - 2) : null;
			let L6 = i != 0 ? 8 * (i + 1) + (j + 2) : null;
			let L7 = i != 5 ? 8 * (i + 2) + (j - 1) : null;
			let L8 = 8 * (i + 2) + (j + 1);

			$(`#${L1}`).css("background", "rgb(164, 164, 164)");

			$(`#${L2}`).css("background", "rgb(218, 107, 107)");

			$(`#${L3}`).css("background", "rgb(132, 107, 107)");

			$(`#${L4}`).css("background", "rgb(178, 107, 107)");

			$(`#${L5}`).css("background", "rgb(160, 107, 107)");

			$(`#${L6}`).css("background", "rgb(200, 107, 107)");

			$(`#${L7}`).css("background", "rgb(231, 107, 107)");

			$(`#${L8}`).css("background", "rgb(244, 107, 107)");

			// if (
			// 	$(`#${L1}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L1}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L1}`).css("background", "");
			// } else {
			// 	$(`#${L1}`).css(
			// 		"background",
			// 		"rgb(164, 164, 164)"
			// 	);
			// }
			// if (
			// 	$(`#${L2}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L2}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L2}`).css("background", "");
			// } else {
			// 	$(`#${L2}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L3}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L3}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L3}`).css("background", "");
			// } else {
			// 	$(`#${L3}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L4}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L4}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L4}`).css("background", "");
			// } else {
			// 	$(`#${L4}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L5}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L5}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L5}`).css("background", "");
			// } else {
			// 	$(`#${L5}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L6}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L6}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L6}`).css("background", "");
			// } else {
			// 	$(`#${L6}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L7}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L7}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L7}`).css("background", "");
			// } else {
			// 	$(`#${L7}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
			// if (
			// 	$(`#${L8}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "dragon" ||
			// 	$(`#${L8}`)
			// 		.find(".chess--piece")
			// 		.data("team") == "phoenix"
			// ) {
			// 	$(`#${L8}`).css("background", "");
			// } else {
			// 	$(`#${L8}`).css(
			// 		"background",
			// 		"rgb(107, 107, 107)"
			// 	);
			// }
		}
	}
	function getPointKnight(n) {
		let i = parseInt(n / 8);
		let j = n % 8;
		let L1 = 8 * (i - 2) + (j - 1);
		let L2 = 8 * (i - 2) + (j + 1);
		let L3 = 8 * (i - 1) + (j - 2);
		let L4 = 8 * (i - 2) + (j + 2);
		let L5 = 8 * (i + 1) + (j - 2);
		let L6 = 8 * (i + 2) + (j + 1);
		let L7 = 8 * (i + 2) + (j - 1);
		let L8 = 8 * (i + 2) + (j + 1);
	}
	function getPointBishop(n) {
		let t = 0;
		let i = parseInt(n / 8);
		let j = n % 8;
		t = Math.min(i, j);
		let a = (i - t) * 8 + j - t;
		t = Math.min(i, 7 - j);
		let b = (i - t) * 8 + j + t;
		t = Math.min(7 - i, j);
		let c = (i + t) * 8 + j - t;
		t = Math.min(7 - i, 7 - j);
		let d = (i + t) * 8 + j + t;
		const result = [a, d, b, c];
		return result;
	}
	$(
		"#black-castle-left, #black-castle-right,#black-knight-right,#black-knight-left,#black-bishop-left,#black-bishop-right,#black-queen,#black-king,#black-pawn-1,#black-pawn-2,#black-pawn-3,#black-pawn-4,#black-pawn-5,#black-pawn-6,#black-pawn-7,#black-pawn-8,#white-castle-left, #white-castle-right,#white-knight-right,#white-knight-left,#white-bishop-left,#white-bishop-right,#white-queen,#white-king,#white-pawn-1,#white-pawn-2,#white-pawn-3,#white-pawn-4,#white-pawn-5,#white-pawn-6,#white-pawn-7,#white-pawn-8"
	).draggable({
		addClasses: false,
		helper: "clone",
		start: function(event, ui) {
			$(this)
				.parent()
				.toggleClass("hight--light");

			let currentName = $(this).attr("id");
			let currentPoint = Number(
				$(this)
					.parent()
					.attr("id")
			);
			highLightCastle(currentPoint, currentName);
			highLightKnight(currentPoint, currentName);
		},
		stop: function(event, ui) {
			let currentName = $(this).attr("id");
			let currentPoint = $(this)
				.parent()
				.find(".fill")
				.attr("id");
			$(".square").css("background", "");
		}
	});
	$(".square").droppable({
		// scope: "tasks", //thằng này để chặn di chuyển
		tolerance: "pointer", //chỉ cần mouse chỉ vào ô là move
		drop: function(event, ui) {
			$(".square").removeClass("hight--light");
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
			if (startPoint[0] == endPoint[0] && startPoint[1] == endPoint[1]) {
				return;
			}

			// while (currentPoint >= 0) {
			// 	console.log($(`[data-point='${currentPoint}']`));
			// }
			if ($(this)[0].children[0]) {
				const teamPieces = $(this)[0].children[0].dataset.team;
				if (teamate === teamPieces) {
					return;
				} else {
					// $(this)[0].children[1].remove();
					$(this).html(ui.draggable);
					console.log(
						`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
					);
				}
			} else {
				$(this).html(ui.draggable);
				console.log(
					`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
				);
			}
		}
	});
});
