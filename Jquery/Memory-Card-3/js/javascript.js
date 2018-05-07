var pics = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"];
var current = null;
var classCurrent = null;
var classCurrent2 = null;
var count = 0;

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function showImages() {
    var SImages = "";
    for (var i = 0; i < pics.length; i++) {
        SImages += "<div class ='card' id='" + pics[i] + "'><img class='front'   src='" + pics[i] + "'><img class='backside' src='img/backside.jpg'></div>";
    }
    $('.grid').html(SImages);
}

function clickEvent() {
    $(".card").click(function () {
        $("#click")[0].play();
        $(this).addClass("flip");
        if (!current) {
            classCurrent = $(this);
            current = $(this).attr("id");
            $(this).css('pointer-events', 'none');
        } else {
            if (current != $(this).attr("id")) {
                classCurrent2 = $(this);
                // console.log("khác nhau")
                $('.card').css('pointer-events', 'none');
                setTimeout(function () {
                    classCurrent2.toggleClass("flip");
                    classCurrent.toggleClass("flip");
                    $('.card').css('pointer-events', 'auto');
                    current = null;
                    $("#fail")[0].play();
                }, 500)
            } else {
                // console.log("giống nhau")
                count++
                classCurrent2 = $(this);
                $('.card').css('pointer-events', 'none');
                setTimeout(function () {
                    classCurrent2.toggleClass("hidden");
                    classCurrent.toggleClass("hidden");
                    current = null;
                    $('.card').css('pointer-events', 'auto');
                    $("#correct")[0].play();
                }, 400)
                setTimeout(function () {
                    if (count == 12) {
                        $(".wrap").css("display", "none")
                        $(".win img").css("display", "block")
                        $(".win img").click(function () {
                            window.location.href = "index.html";
                        })
                    }
                }, 600)
            }
        }
    })
}

function move() {
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 1200);
    var width = 100;

    function frame() {
        if (width == 0) {
            clearInterval(id);
            $(".wrap").css("display", "none")
            $(".lose img").css("display", "block")
            $(".lose img").click(function () {
                window.location.href = "index.html";
            })
        } else if (count == 12) {
            clearInterval(id);
        } else {
            width--;
            elem.style.width = width + '%';
        }
    }
}

function hack() {
    $(".card .front").css("transform", "rotateY(0deg)")
}

$(function () {
    shuffle(pics);
    showImages();
    clickEvent();
    move();
})