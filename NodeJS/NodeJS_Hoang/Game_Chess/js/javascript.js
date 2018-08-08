for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    (i % 2 == j % 2)
      ? $('.container').append(`<div id="draggable1" class="square ui-widget-content black" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}"> </div>`)
      : $('.container').append(`<div class="square white" data-x ="${i}" data-y ="${j}"data-point = "${i},${j}"></div>`);
  }
}
$( function() {
  $( "#draggable1" ).draggable();
} );