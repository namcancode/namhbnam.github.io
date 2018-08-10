let check = false;
const showBoard = async () => {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			i % 2 == j % 2
				? $(".container").append(
						`<div class="square ui-widget-content black"  data-x ="${i}" data-y ="${j}"data-point = "${i},${j}">
						<div class = "fill" id="${8 * i +
							j}" data-x ="${i}" data-y ="${j}"data-point = "${i}${j}"></div>
							<span>${8 * i + j}</span>
						</div>`
				  )
				: $(".container").append(
						`<div class="square white" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}">
						<div class = "fill" id="${8 * i +
							j}" data-x ="${i}" data-y ="${j}"data-point = "${i}${j}"></div>
							<span>${8 * i + j}</span>
						</div>`
				  );
		}
	}
	await chess();
};
const chess = async () => {
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
         <div class="chess--piece" id="white-castle-rigth" data-team="phoenix">
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
	$(
		"#black-castle-left, #black-castle-right,#black-knight-right,#black-knight-left,#black-bishop-left,#black-bishop-right,#black-queen,#black-king,#black-pawn-1,#black-pawn-2,#black-pawn-3,#black-pawn-4,#black-pawn-5,#black-pawn-6,#black-pawn-7,#black-pawn-8,#white-castle-left, #white-castle-right,#white-knight-right,#white-knight-left,#white-bishop-left,#white-bishop-right,#white-queen,#white-king,#white-pawn-1,#white-pawn-2,#white-pawn-3,#white-pawn-4,#white-pawn-5,#white-pawn-6,#white-pawn-7,#white-pawn-8"
	).draggable({
		helper: "clone"
	});
	$(".square").droppable({
		// scope: "tasks", //thằng này để chặn di chuyển
		tolerance: "pointer", //chỉ cần mouse chỉ vào ô là move
		drop: function(event, ui) {
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
			if ($(this)[0].children[1]) {
				const teamPieces = $(this)[0].children[1].dataset.team;
				if (teamate === teamPieces) {
					return;
				} else {
					$(this)[0].children[1].remove();
					$(this).append(ui.draggable);
					console.log(
						`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
					);
				}
			} else {
				$(this).append(ui.draggable);
				console.log(
					`Quân Cờ: ${nameCurrent}\nBắt đầu: ${startPointInt}\nKết thúc:${endPointInt}\nQuân Đội:${teamate}`
				);
			}
		}
	});
});
