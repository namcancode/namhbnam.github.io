const showBoard = async () => {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			await (i % 2 == j % 2
				? $(".container").append(
						`<div class="square ui-widget-content black"  data-x ="${i}" data-y ="${j}"data-point = "${i},${j}"> </div>`
				  )
				: $(".container").append(
						`<div class="square white" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}"></div>`
				  ));
		}
	}
	await chess();
};
const chess = async () => {
	$("div.square:nth-child(1)").append(
		`
         <div class="chess--piece" id="black-castle-left">
        <img  src="../img/br.svg"
        </div>
         `
	);
	$("div.square:nth-child(8)").append(
		`
         <div class="chess--piece" id="black-castle-rigth">
        <img  src="../img/br.svg"
        </div>
         `
	);

	$("div.square:nth-child(2)").append(
		`
         <div class="chess--piece" id="black-knight-left">
        <img  src="../img/bn.svg"
        </div>
         `
	);
	$("div.square:nth-child(7)").append(
		`
         <div class="chess--piece" id="black-knight-right">
        <img  src="../img/bn.svg"
        </div>
         `
	);

	$("div.square:nth-child(3)").append(
		`
         <div  class="chess--piece" id="black-bishop-left">
        <img  src="../img/bb.svg"
        </div>
         `
	);
	$("div.square:nth-child(6)").append(
		`
         <div  class="chess--piece" id="black-bishop-right">
        <img  src="../img/bb.svg"
        </div>
         `
	);

	$("div.square:nth-child(4)").append(
		`
         <div class="chess--piece" id="black-queen">
        <img  src="../img/bq.svg"
        </div>
         `
	);
	$("div.square:nth-child(5)").append(
		`
         <div class="chess--piece" id="black-king">
        <img  src="../img/bk.svg"
        </div>
         `
	);
	$(
		"div.square:nth-child(9)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-1">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(10)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-2">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(11)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-3">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(12)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-4">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(13)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-5">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(14)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-6">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(15)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-7">
        <img  src="../img/bp.svg"
        </div>
         `
  );
  $(
		"div.square:nth-child(16)"
	).append(
		`
         <div class="chess--piece" id="black-pawn-8">
        <img  src="../img/bp.svg"
        </div>
         `
	);
};

$(async () => {
	await showBoard();

	$("#black-castle-left").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$("#black-castle-right").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$("#black-bishop-left").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$("#black-bishop-right").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$("#black-queen").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$("#black-king").draggable({
		helper: "clone",
		start: function(event, ui) {
			console.log($(this).parent());
		}
	});
	$(".square").droppable({
		hoverClass: "hovering",
		drop: function(event, ui) {
			$(this).append(ui.draggable);
			console.log(this);
			// console.log(this);
			// $(ui.draggable).remove();
			// $("#" + box).append(`<div id="${id}">${html}</div>`);
		}
	});
});
