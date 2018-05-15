$(function () {
    chessBoard();
    Click();
   // effect();
})

function chessBoard() {
    for (i = 1; i <= 20; i++) {
        for (j = 1; j <= 33; j++) {
            $(".content_wrap").append("<div class='coffer' check = '' j = '" + j + "' i = '" + i + "'></div>")
        }
    }
}
var count = 0
var value = "";
var result = 0;
var result1 = 0;
var currentI = "";
var currentJ = "";

function effect() {
    $(".coffer").mouseover(function () {
        $(this).append('<img src="img/X.png" style="width: 80%;margin-top: 4.5px;box-shadow: -2px 3px 10px 0px;" >')
    })
    $(".coffer").mouseout(function () {
       
    })
}

function Click() {
    var res = 0;
    $(".coffer").click(function () {
        $(this).addClass("blockMouse")
        currentI = +$(this).attr("i");
        currentJ = +$(this).attr("j");
        console.log("i = " + currentI, "j = " + currentJ);
        count++;
        if ($(this).html() == "") {
            if (count % 2 == 1) {
                $(this).prepend('<img src="img/X.png" style="width: 80%;margin-top: 4.5px;box-shadow: -2px 3px 10px 0px;" >')
                $(this).attr("check", "X");
               
                value = $(this).attr("check");
                checkRow();
                checkCol();
                checkDiaLeft();
                checkDiaRight();
            } else {
                $(this).prepend('<img src="img/O.png" style="width: 80%; margin-top: 4.5px;box-shadow: -2px 3px 10px 0px;">')
                $(this).attr("check", "O");
                value = $(this).attr("check");
                checkRow();
                checkCol();
                checkDiaLeft();
                checkDiaRight();
            }
        }
    })

    function popup() {
        $("#popup").css({
            transform: "scale(1.8)",
            visibility: "visible",
            opacity: 1,
        }).html('<p>Xin chúc mừng ' + value + ' là người chiến thắng.</p><img src="img/win.png" alt="win">').click(function () {
            location.reload()
        })
        $(".coffer").addClass("blockMouse")
    }

    function checkRow() {
        for (let j = 1; j < 33; j++) {
            if ($("[i='" + currentI + "'][j='" + j + "']").attr("check") == value &&
                $("[i='" + currentI + "'][j='" + (j + 1) + "']").attr("check") == value) {
                result++
                if (result == 4) {
                    popup();
                    console.log(value + " win");
                }
            } else if (($("[i='" + currentI + "'][j='" + j + "']").attr("check") != $("[i='" + currentI + "'][j='" + (j + 1) + "']").attr("check"))) {
                result = 0
            }
        }
    }

    function checkCol() {
        for (let i = 1; i < 33; i++) {
            if ($("[i='" + i + "'][j='" + currentJ + "']").attr("check") == value &&
                $("[i='" + (i + 1) + "'][j='" + currentJ + "']").attr("check") == value) {
                result++
                if (result == 4) {
                    popup();
                    console.log(value + " win");
                }
            } else if (($("[i='" + i + "'][j='" + currentJ + "']").attr("check") != $("[i='" + (i + 1) + "'][j='" + (currentJ) + "']").attr("check"))) {
                result = 0
            }
        }
    }

    function checkDiaLeft() {
        for (let i = (currentI - 4), j = (currentJ - 4); i <= (currentI + 4), j <= (currentJ + 4); i++, j++) {
            if ($("[i='" + i + "'][j='" + j + "']").attr("check") == value &&
                $("[i='" + (i + 1) + "'][j='" + (j + 1) + "']").attr("check") == value) {
                result++
                if (result == 4) {
                    popup();
                    console.log(value + " win");
                }
            } else if ($("[i='" + i + "'][j='" + j + "']").attr("check") == value &&
                $("[i='" + (i + 1) + "'][j='" + (j - 1) + "']").attr("check") == value) {
                result++
                if (result == 4) {
                    console.log(value + " win");
                }
            }
        }
    }

    function checkDiaRight() {
        for (let i = (currentI - 4), j = (currentJ + 4); i <= (currentI + 4), j >= (currentJ - 4); i++, j--) {
            if ($("[i='" + i + "'][j='" + j + "']").attr("check") == value &&
                $("[i='" + (i + 1) + "'][j='" + (j - 1) + "']").attr("check") == value) {
                result1++
                console.log(result1);
                if (result1 == 5) {
                    popup();
                    console.log(value + " win");
                }
            } else if ($("[i='" + i + "'][j='" + j + "']").attr("check") == value &&
                $("[i='" + (i - 1) + "'][j='" + (j + 1) + "']").attr("check") == value) {
                result1++
                console.log(result1);
                if (result1 == 5) {
                    popup();
                    console.log(value + " win");
                }
            } else if (($("[i='" + i + "'][j='" + j + "']").attr("check") !=
                    $("[i='" + (i - 1) + "'][j='" + (j + 1) + "']").attr("check"))) {
                result1 = 0
            }
        }
    }
    $("button").click(function () {
        location.reload()
    })

}