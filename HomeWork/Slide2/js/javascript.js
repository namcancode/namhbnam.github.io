$(function () {
    SlideImages();
    changeColor();
    foo();
    AutoPlay();

})
var countR = 0;
var countL = 0;
var i = 0;

function SlideImages() {
    $(".btnRight").mouseup(function () {
        countR++;
        if (countR == 0) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnRight").css('pointer-events', 'auto');
                $("#img1").removeClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "0px"
                });
                $("#img2").removeClass("move").stop(false, false).css({
                    "opacity": 0,
                    "left": "419px",
                    "z-index": 1
                });
                $("#img3").removeClass("move").stop(false, false).css({
                    "opacity": 0,
                    "left": "419px",
                    "z-index": 1

                });
                $(".c1").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
            }, 300)
            i = 0;
            foo();
        } else if (countR == 1) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnRight").css('pointer-events', 'auto');
                $("#img1").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "-419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $("#img2").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "0px",
                    "z-index": 3,
                    "transition": ".8s left"
                });
                $("#img3").toggleClass("move").stop(false, false).css({
                    "opacity": 0,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $(".c1").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c2").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                countL = 2;
            }, 300)
            i = 1;
            foo();
        } else if (countR == 2) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnRight").css('pointer-events', 'auto');
                $("#img1").toggleClass("move").stop(false, false).css({
                    "opacity": 0,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $("#img2").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "-419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $("#img3").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "0px",
                    "transition": "0.8s left",
                    "z-index": 3
                });
                $(".c1").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c3").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                countL = 1;
            }, 300)
            i = 2;
            foo();
        } else if (countR == 3) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnRight").css('pointer-events', 'auto');
                $("#img1").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "0px",
                    "transition": ".8s left",
                    "z-index": 3
                });
                $("#img2").toggleClass("move").stop(false, false).css({
                    "opacity": 0,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $("#img3").toggleClass("move").stop(false, false).css({
                    "opacity": 1,
                    "left": "-419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $(".c1").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                })
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                countL = 0;
                countR = 0
            }, 300)
            i = 0;
            foo();
        }
    })
    $(".btnLeft").click(function () {
        countL++;
        if (countL == 0) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnLeft").css('pointer-events', 'auto');
                $("#img1").removeClass("move").css({
                    "opacity": 1,
                    "left": "0px"
                });
                $("#img2").removeClass("move").css({
                    "opacity": 0,
                    "left": "419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $("#img3").removeClass("move").css({
                    "opacity": 0,
                    "left": "419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $(".c1").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                })
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
            }, 300)
            i = 0;
            foo();
        } else if (countL == 1) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnLeft").css('pointer-events', 'auto');
                $("#img2").toggleClass("move").css({
                    "opacity": 0,
                    "left": "-419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $("#img3").toggleClass("move").css({
                    "opacity": 1,
                    "left": "0px",
                    "z-index": 3,
                    "transition": ".8s left"
                });
                $("#img1").toggleClass("move").css({
                    "opacity": 1,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $(".c1").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                })
                $(".c3").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                countR = 2
            }, 300)
            i = 2;
            foo();
        } else if (countL == 2) {
            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnLeft").css('pointer-events', 'auto');
                $("#img3").toggleClass("move").css({
                    "opacity": 1,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $("#img1").toggleClass("move").css({
                    "opacity": 0,
                    "left": "-419px",
                    "z-index": 1,
                    "transition": ".8s left"
                });
                $("#img2").toggleClass("move").css({
                    "opacity": 1,
                    "left": "0px",
                    "transition": ".8s left",
                    "z-index": 3
                });
                $(".c1").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                $(".c2").css({
                    "background-color": "white",
                    "opacity": 0.7
                })
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                countR = 1
            }, 300)
            i = 1;
            foo();
        } else if (countL == 3) {

            $(this).css('pointer-events', 'none');
            setTimeout(function () {
                $(".btnLeft").css('pointer-events', 'auto');
                $("#img1").toggleClass("move").css({
                    "opacity": 1,
                    "left": "0px",
                    "transition": ".8s left",
                    "z-index": 3
                });
                $("#img2").toggleClass("move").css({
                    "opacity": 1,
                    "left": "419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $("#img3").toggleClass("move").css({
                    "opacity": 0,
                    "left": "-419px",
                    "transition": ".8s left",
                    "z-index": 1
                });
                $(".c1").css({
                    "background-color": "white",
                    "opacity": 0.7
                });
                $(".c2").css({
                    "background-color": "",
                    "opacity": 0.2
                })
                $(".c3").css({
                    "background-color": "",
                    "opacity": 0.2
                });
                countL = 0
                countR = 0
            }, 300)
            i = 0;
            foo();
        }
    })
}

function changeColor() {
    $("button").mouseup(function () {
        $(this).css("color", "")
    }).mousedown(function () {
        $(this).css("color", "white")
    });
}

function foo() {
    if (i == 0) {
        $(".box_wrap").mouseenter(function () {
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.7
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.2
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
        $(".box_wrap").mouseenter(function () {
            $(".c1").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c2").css({
                "background-color": "white",
                "opacity": 0.7
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.2
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
        $(".box_wrap").mouseenter(function () {

            $(".c1").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c3").css({
                "background-color": "white",
                "opacity": 0.7
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

function AutoPlay() {
    setInterval(function () {
        countR++;
        if (countR == 0) {
            i = 0;
            foo();
            $("#img1").removeClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "0px"
            });
            $("#img2").removeClass("move").stop(false, false).css({
                "opacity": 0,
                "left": "419px",
                "z-index": 1
            });
            $("#img3").removeClass("move").stop(false, false).css({
                "opacity": 0,
                "left": "419px",
                "z-index": 1
            });
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.7
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.2
            });
        } else if (countR == 1) {
            i = 1;
            foo();
            $("#img1").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "-419px",
                "z-index": 1,
                "transition": ".8s left"
            });
            $("#img2").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "0px",
                "z-index": 3,
                "transition": ".8s left"
            });
            $("#img3").toggleClass("move").stop(false, false).css({
                "opacity": 0,
                "left": "419px",
                "transition": ".8s left",
                "z-index": 1
            });
            $(".c1").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c2").css({
                "background-color": "white",
                "opacity": 0.7
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.2
            });
            countL = 2;
        } else if (countR == 2) {
            i = 2;
            foo();
            $("#img1").toggleClass("move").stop(false, false).css({
                "opacity": 0,
                "left": "419px",
                "transition": ".8s left",
                "z-index": 1
            });
            $("#img2").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "-419px",
                "z-index": 1,
                "transition": ".8s left"
            });
            $("#img3").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "0px",
                "transition": "0.8s left",
                "z-index": 3
            });
            $(".c1").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c3").css({
                "background-color": "white",
                "opacity": 0.7
            });
            countL = 1;
        } else if (countR == 3) {
            i = 0;
            foo();
            $("#img1").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "0px",
                "transition": ".8s left",
                "z-index": 3
            });
            $("#img2").toggleClass("move").stop(false, false).css({
                "opacity": 0,
                "left": "419px",
                "transition": ".8s left",
                "z-index": 1
            });
            $("#img3").toggleClass("move").stop(false, false).css({
                "opacity": 1,
                "left": "-419px",
                "transition": ".8s left",
                "z-index": 1
            });
            $(".c1").css({
                "background-color": "white",
                "opacity": 0.7
            });
            $(".c2").css({
                "background-color": "",
                "opacity": 0.2
            });
            $(".c3").css({
                "background-color": "",
                "opacity": 0.2
            });
            countL = 0;
            countR = 0
        }
    }, 3000)
}