var pics = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var i = 0;

function SlideImages() {
    if (i <= pics.length - 1) {
        $(".box .btnRight").click(function () {
            i++;
            $(".box .card img").attr("src", pics[i]).effect("slide", {
                direction: "right"
            }, "easing", 450)
        })
        $(".box .btnLeft").click(function () {
            i--;
            $(".box .card img").attr("src", pics[i]).effect("slide", {
                direction: "left"
            }, "easing", 450)
        })
    } else if (i > pics.length - 1) {
        return i = 0;
    }
}

function AutoPlay() {
    setInterval(function () {
        if (i <= pics.length - 2) {
            i++;
            console.log(i)
            $(".box .card img").attr("src", pics[i]).css()
            // $(".box .card img").attr("src", pics[i]).effect("slide", {
            //     direction: "right"
            // }, 450)
        } else if (i == 11) {
            i = -1;
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
function showImages(){
    var SImages = "";
    for (var i = 0; i < pics.length; i++) {
        SImages += "<div class ='imgs' id='" + i + "'><img class='front'   src='" + pics[i] + "'></div>";
    }
    $('.card').html(SImages);
}

$(function () {
    SlideImages();
    //showImages();
   // AutoPlay();

})