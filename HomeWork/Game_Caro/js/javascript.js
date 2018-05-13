$(function () {
    chessBoard();
    Click();
})
var count = 0

function chessBoard() {
    for (var i = 1; i <= 374; i++) {
        $(".content_wrap").append("<div class='coffer' id = '" + i + "'></div>")
    }
}

function Click() {
    
    $(".coffer").click(function () {
        const current = +$(this).attr("id");
        checkRow()
        count++;
              if ($(this).html()=="") {

        if (count % 2 == 1) {
            $(this).html("X")
        } else {
            $(this).html("O")
        }
          }
        function checkRow() {
            for (var i = current - 4; i < current + 4; i++) {
             
                 if($("#"+i).html()=="X" || $("#"+i).html()=="O" ){
console.log("You Win");
                 }
              
            }
        }

    })
    $("button").click(function () {
        location.reload()
    })

}