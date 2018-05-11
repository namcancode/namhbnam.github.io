$(function () {
    SlideImages();
    //showImages();
   //AutoPlay();
   
})
var countR = 0;
var countL = 0;
function SlideImages() {
   
$(".btnRight").mouseup(function(){
    countR++;
    if(countR == 0){
        
        $(this).css('pointer-events', 'none');
        setTimeout(function () {
        $(".btnRight").css('pointer-events', 'auto');
        $("#img1").removeClass("move").stop( false, false ).css({"opacity":1,"left":"0px"});
        $("#img2").removeClass("move").stop( false, false ).css({"opacity":0,"left":"419px","z-index":1});
        $("#img3").removeClass("move").stop( false, false ).css({"opacity":0,"left":"419px","z-index":1});
        return false;
    }, 100)
    }
    else if (countR == 1){
        $(this).css('pointer-events', 'none');
        setTimeout(function () {
        $(".btnRight").css('pointer-events', 'auto');
        $("#img1").toggleClass("move").stop( false, false  ).css({"opacity":1,"left":"-419px","z-index":1,"transition":".5s left"});
        $("#img2").toggleClass("move").stop( false, false  ).css({"opacity":1,"left":"0px","z-index":3,"transition":".5s left"});
        $("#img3").toggleClass("move").stop( false, false ).css({"opacity":0,"left":"419px","transition":".5s left","z-index":1});
        return false;
        countL = 2;
    }, 100)
    }
    else if (countR == 2){
        $(this).css('pointer-events', 'none');
        setTimeout(function () {
        $(".btnRight").css('pointer-events', 'auto');
        $("#img1").toggleClass("move").stop( false, false ).css({"opacity":0,"left":"419px","transition":".5s left","z-index":1});
        $("#img2").toggleClass("move").stop( false, false ).css({"opacity":1,"left":"-419px","z-index":1,"transition":".5s left"});
        $("#img3").toggleClass("move").stop( false, false ).css({"opacity":1,"left":"0px","transition":"0.5s left","z-index":3});
        return false;
        countL = 1;
    }, 100)
    }
    else if (countR == 3){
        $(this).css('pointer-events', 'none');
        setTimeout(function () {
        $(".btnRight").css('pointer-events', 'auto');
        $("#img1").toggleClass("move").stop( false, false ).css({"opacity":1,"left":"0px","transition":".5s left","z-index":3});
        $("#img2").toggleClass("move").stop( false, false ).css({"opacity":0,"left":"419px","transition":".5s left","z-index":1});
        $("#img3").toggleClass("move").stop( false, false ).css({"opacity":1,"left":"-419px","transition":".5s left","z-index":1});
        
        countL = 0;
        countR = 0
        return false;
    }, 100)
    }
})
$(".btnLeft").click(function(){
    countL++;
    if(countL == 0){
        $("#img1").removeClass("move").css({"opacity":1,"left":"0px"});
        $("#img2").removeClass("move").css({"opacity":0,"left":"419px","z-index":1,"transition":"1s left"});
        $("#img3").removeClass("move").css({"opacity":0,"left":"419px","z-index":1,"transition":"1s left"});

    }
    else if (countL == 1){
        $("#img2").toggleClass("move").css({"opacity":0,"left":"-419px","z-index":1,"transition":"1s left"});
        $("#img3").toggleClass("move").css({"opacity":1,"left":"0px","z-index":3,"transition":"1s left"});
        $("#img1").toggleClass("move").css({"opacity":1,"left":"419px","transition":"1s left","z-index":1});
        countR = 2
    }
    else if (countL == 2){
        $("#img3").toggleClass("move").css({"opacity":1,"left":"419px","transition":"1s left","z-index":1});
        $("#img1").toggleClass("move").css({"opacity":0,"left":"-419px","z-index":1,"transition":"1s left"});
        $("#img2").toggleClass("move").css({"opacity":1,"left":"0px","transition":"1s left","z-index":3});
        countR = 1
    }
    else if (countL == 3){
        $("#img1").toggleClass("move").css({"opacity":1,"left":"0px","transition":"1s left","z-index":3});
        $("#img2").toggleClass("move").css({"opacity":1,"left":"419px","transition":"1s left","z-index":1});
        $("#img3").toggleClass("move").css({"opacity":0,"left":"-419px","transition":"1s left","z-index":1});
        countL = 0
        countR = 0
    }
})
}

function AutoPlay(){
    setInterval(function () {
        count++;
        if(count == 0){
            $("#img1").removeClass("move").css({"opacity":1,"left":"0px"});
            $("#img2").removeClass("move").css({"opacity":0,"left":"419px","z-index":1});
            $("#img3").removeClass("move").css({"opacity":0,"left":"419px","z-index":1});
            
        }
        else if (count == 1){
            $("#img1").toggleClass("move").css({"opacity":1,"left":"-419px","z-index":1});
            $("#img2").toggleClass("move").css({"opacity":1,"left":"0px","z-index":3,"transition":"1s all"});
            $("#img3").toggleClass("move").css({"opacity":1,"left":"419px","transition":"1s left","z-index":1});
        }
        else if (count == 2){
            $("#img1").toggleClass("move").css({"opacity":0,"left":"419px","transition":"0s all","z-index":1});
            $("#img2").toggleClass("move").css({"opacity":1,"left":"-419px","z-index":1});
            $("#img3").toggleClass("move").css({"opacity":1,"left":"0px","transition":"1s all","z-index":3});
        }
        else if (count == 3){
            $("#img1").toggleClass("move").css({"opacity":1,"left":"0px","transition":"1s all","z-index":3});
            $("#img2").toggleClass("move").css({"opacity":1,"left":"419px","transition":"0s all","z-index":1});
            $("#img3").toggleClass("move").css({"opacity":1,"left":"-419px","transition":"1s all","z-index":1});
            count = 0
        }
}, 1000)
}