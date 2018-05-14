$(function () {
    chessBoard();
    Click();
    
})


// function chessBoard() {
//     for (var i = 1; i <= 374; i++) {
//         $(".content_wrap").append("<div class='coffer' id = '" + i + "'>"+i+"</div>")
//     }
// }
function chessBoard() {
    for (i = 1; i <= 20; i++) {
        for (j = 1; j <= 20; j++) {
            $(".content_wrap").append("<div class='coffer' check = '' j = '" + j + "' i = '" + i + "'></div>")
        }

    }
}
var count = 0
var value = "";
var result = 0;
var currentI = "";
var currentJ = "";

function Click() {
    var res = 0 ;
    $(".coffer").click(function () {
        
        currentI = +$(this).attr("i");
        currentJ = +$(this).attr("j");
        console.log("i = " +currentI, "j = " +currentJ);

        count++;
        // if ($(this).html() == "") {

        //  if (count % 2 == 1) {
        $(this).html("X");
        $(this).attr("check","X");
        value = $(this).text();

        checkRow();
        checkCol();
        checkDia();

        // } else {
        //     $(this).html("O")
        //     value = $(this).text();
        //     checkRow();

        // }
        //    }

        

    })
    function checkRow() {
        for (let j = 1; j < 20; j++) {
            if ($("[i='" + currentI + "'][j='" + j + "']").attr("check")=="X" &&
            $("[i='" + currentI + "'][j='" + (j+1) + "']").attr("check")=="X") {
            // if ($("[i='" + currentI + "'][j='" + j + "']").attr("check") == value && $("[i='" + currentI + "'][j='" + j + "']").attr("check")==$("[i='" + currentI + "'][j='" + (j+1) + "']").attr("check")) {
                result++
                
                if (result == 4){
                    console.log("win");
                }
            }
           else if (($("[i='" + currentI + "'][j='" + j + "']").attr("check")!= $("[i='" + currentI + "'][j='" + (j+1) + "']").attr("check"))){
            result = 0
           }
        }
        
        // for (var j = currentJ - 4; j <= currentJ; j++) {
        //     if ($("[i='" + currentI + "'][j='" + j + "']").html() == value) {
        //         result++
        //         console.log(result);
        //     }
        // }
        // for (var j = currentJ + 4; j >= currentJ; j--) {
        //     if ($("[i='" + currentI + "'][j='" + j + "']").html() == value) {
        //         result1++
        //         console.log("rs1 = " + result1);
        //     }
        // }
        // if (result < 5) {
        //     result = 0;

        // } else {
        //     console.log("win");
        //     //  result = 0
        // }
        // if (result1 < 5) {
        //     result1 = 0
        // } else {
        //     console.log("win");
        //     //  result = 0
        // }
    }
    function checkCol() {
        for (let i = 1; i < 20; i++) {
            if ($("[i='" + i + "'][j='" + currentJ + "']").attr("check")=="X" &&
             $("[i='" + (i+1) + "'][j='" + currentJ + "']").attr("check")=="X") {
            // if ($("[i='" + currentI + "'][j='" + j + "']").attr("check") == value && $("[i='" + currentI + "'][j='" + j + "']").attr("check")==$("[i='" + currentI + "'][j='" + (j+1) + "']").attr("check")) {
                result++
                
                if (result == 4){
                    console.log("win");
                }
            }
           else if (($("[i='" + i + "'][j='" + currentJ + "']").attr("check")!= $("[i='" + (i+1) + "'][j='" + (currentJ) + "']").attr("check"))){
            result = 0
           }
        }
    }
    function checkDia(){
        
        console.log(res);
       // for (let i = 1 ;i <= 5; i++) {
            if ($("[i='" + currentI + "'][j='" + currentJ + "']").attr("check")=="X" &&
             $("[i='" + (currentI-1) + "'][j='" + (currentJ-1) + "']").attr("check")=="X") {
            // if ($("[i='" + currentI + "'][j='" + j + "']").attr("check") == value && $("[i='" + currentI + "'][j='" + j + "']").attr("check")==$("[i='" + currentI + "'][j='" + (j+1) + "']").attr("check")) {
             
                res = res +1;
                console.log(res);
                if (res == 4){
                    console.log("win");
                }
                
            }
           else if (($("[i='" + currentI + "'][j='" + currentJ + "']").attr("check")!=
            $("[i='" + (currentI+1) + "'][j='" + (currentJ-1) + "']").attr("check"))){
                res = 0
           }
        
   // }
}
    
    $("button").click(function () {
        location.reload()
    })

}