var pics = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var i = 0;
var x = $(".slider .list_img .wrap").css("margin-left")

// function SlideImages() {
//     if (i <= pics.length - 1) {
//         $(".box .btnRight").click(function () {
//             i++;
//             $(".box .card img").attr("src", pics[i]).effect("slide", {
//                 direction: "right"
//             }, "easing", 450)
//         })
//         $(".box .btnLeft").click(function () {
//             i--;
//             $(".box .card img").attr("src", pics[i]).effect("slide", {
//                 direction: "left"
//             }, "easing", 450)
//         })
//     } else if (i > pics.length - 1) {
//         return i = 0;
//     }
// }
function log(str) {
    console.log(str)
}
var stt = 1;

function changeColor() {
    $("button").mouseup(function () {
        $(this).css("color", "")
    }).mousedown(function () {
        $(this).css("color", "white")
    });
}

function foo() {
    if (i == 0) { 
        $(".list_img").mouseenter(function () {
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.6
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.1
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.1
            })
        }).mouseleave(function () {
            $(".c1").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0
            })
        })
    } else if (i == 1) {
        $(".list_img").mouseenter(function () {

            $(".c1").css({
                "background-color": "",
                "opacity": 0.1
            });
            $(".c2").css({
                "background-color": "white",
                "opacity": 0.6
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.1
            })
        }).mouseleave(function () {
            $(".c1").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0
            })
        })
    } else if (i == 2) {
        $(".list_img").mouseenter(function () {

            $(".c1").css({
                "background-color": "",
                "opacity": 0.1
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.1
            });
            $(".c3").css({
                "background-color": "white",
                "opacity": 0.6
            })
        }).mouseleave(function () {
            $(".c1").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0
            })
        })
    }
}
function SlideImages() {

    //     function event1(){
    //         $(".slider .list_img .wrap").css("margin-left", -419 + "px");
    //         $(this).one("click", event2);
    //     };
    //     function event2(){
    //         $(".slider .list_img .wrap").css("margin-left", -838+ "px");
    //         $(this).one("click", event3);
    //     };
    //     function event3(){
    //         $(".slider .list_img .wrap").css("margin-left", 0 + "px")
    //         $(this).one("click", event1);
    //     }


    //   $(".btnRight").one("click", event1);
    //   $(".btnLeft").one("click", event3);

    $(".btnRight").click(function () {
        // console.log('i :', i);
        if ($(".slider .list_img .wrap").css("margin-left") == x) {
            x = -419 + "px";
            $(".slider .list_img .wrap").css("margin-left", x);
            $(".c1").css({
                "background-color": "",
                "opacity": 0.1
            })
            $(".c2").css({
                "background-color": "white",
                "opacity": 0.8
            })
            $(".c3").css({
                "background-color": "",
                "opacity": 0.1
            })
            i = 1;
            foo();
            return x = parseInt(x)
        } else if (x == -419) {
            $(".slider .list_img .wrap").css("margin-left", (x - 419) + "px");
            x = -838 + "px"
            $(".c2").css({
                "background-color": "",
                "opacity": 0.1
            })
            $(".c3").css({
                "background-color": "white",
                "opacity": 0.8
            })
            i = 2;
            foo();
            return x = parseInt(x)
        } else if (x <= -838) {
            $(".slider .list_img .wrap").css("margin-left", 0 + "px");
            $(".c3").css({
                "background-color": "",
                "opacity": 0.1
            })
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.8
            })
            i = 0
            foo();
            return x = 0 + "px"
        }
     
    })
    $(".btnLeft").click(function () {
       
        if ($(".slider .list_img .wrap").css("margin-left") == x) {
            $(".slider .list_img .wrap").css("margin-left", 0);
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.8
            })
            i = 0
            foo();
            return x = 0 + "px"

        } else if (x == -419) {
            $(".slider .list_img .wrap").css("margin-left", 0 + "px");
            $(".c2").css({
                "background-color": "",
                "opacity": 0.1
            })
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.8
            })
            i = 0;
            foo();
            return x = 0 + "px"

        } else if (x == -838) {
            $(".slider .list_img .wrap").css("margin-left", -419 + "px");
            $(".c3").css({
                "background-color": "",
                "opacity": 0.1
            })
            $(".c2").css({
                "background-color": "white",
                "opacity": 0.8
            })
            i = 1;
            foo();
            return x = -419
        }
    })
}

function AutoPlay() {
    setInterval(function () {
        if ($(".slider .list_img .wrap").css("margin-left") == x) {
            x = -419 + "px"
            $(".slider .list_img .wrap").css("margin-left", x);
            return x = parseInt(x)
        } else if (x == -419) {
            $(".slider .list_img .wrap").css("margin-left", (x - 419) + "px");
            x = -838 + "px"
            return x = parseInt(x)
        } else if (x <= -838) {
            $(".slider .list_img .wrap").css("margin-left", 0 + "px");
            return x = 0 + "px"
        }
    }, 1000)
}




// function AutoPlay() {

//     setInterval(function () {
//         console.log(i)
//         if (i <= pics.length-1) {
//             $(".box .card img").attr("src", pics[i]).effect("slide",{ direction: "right" },450)
//             i++;
//         } else if (i > pics.length-1) {
//             return i = 0;
//         }
//     }, 1000)
// }
function showImages() {
    var SImages = "";
    for (var i = 0; i < pics.length; i++) {
        SImages += "<div class ='imgs' id='" + i + "'><img class='front'   src='" + pics[i] + "'></div>";
    }
    $('.card').html(SImages);
}

$(function () {
    SlideImages();
    //showImages();
    //AutoPlay();
    changeColor();
    foo();
})