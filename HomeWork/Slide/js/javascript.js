var pics = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var i = 0;
var  x = $(".slider .list_img .wrap").css("margin-left")
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
function log(str){
    console.log(str)
}
var stt =  1;
function changeColor(){
    $(".fa-angle-right").stop(true);
    if(stt ==1){
        stt = 2;
        Color1();
    } else {
        stt = 1;
        Color1();
    }
}
function Color1(){
    $(".fa-angle-right").animate(
        {
color:"red",
        },
        0,
        
    )
}
function Color2(){
    $(".fa-angle-right").animate(
        {
color:"ffffffa8",
        },
        0,
       
    )
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

$(".btnRight").click(function(){
    
    if($(".slider .list_img .wrap").css("margin-left") == x){
      x = -419+"px";
     
      $(".slider .list_img .wrap").css("margin-left", x);
      return x = parseInt(x)
    }
    else if(x == -419) {
        
        $(".slider .list_img .wrap").css("margin-left", (x-419)+ "px");
        x = -838+"px"
        return x = parseInt(x)
    }
    else if (x <=-838){
        $(".slider .list_img .wrap").css("margin-left", 0 + "px");
        return  x = 0+"px"
    }
})
$(".btnLeft").click(function(){
    $(".fa-angle-left").css("color", "#8b8b8ba8")
    if($(".slider .list_img .wrap").css("margin-left") == x){
      $(".slider .list_img .wrap").css("margin-left", 0);
      return x = 0+"px"
    }
    else if(x == -419) {
        $(".slider .list_img .wrap").css("margin-left", 0+ "px");
        return x= 0+"px"

    }
    else if (x ==-838){
        $(".slider .list_img .wrap").css("margin-left", -419 + "px");
        return  x = -419
    }
})
}

function AutoPlay() {
    setInterval(function () {
        if($(".slider .list_img .wrap").css("margin-left") == x){
            x = -419+"px"
            $(".slider .list_img .wrap").css("margin-left", x);
            return x = parseInt(x)
          }
          else if(x == -419) {
              $(".slider .list_img .wrap").css("margin-left", (x-419)+ "px");
              x = -838+"px"
              return x = parseInt(x)
          }
          else if (x <=-838){
              $(".slider .list_img .wrap").css("margin-left", 0 + "px");
              return  x = 0+"px"
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
    // AutoPlay();

})