var pics = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"];

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
        SImages += "<div class ='card'><img class='front' src='" + pics[i] + "'><img class='backside' src='img/backside.jpg'></div>";

    }
    $('.grid').html(SImages);
}

function clickEvent() {
    $(".card").click(function () {
        $(this).addClass("flip")
    })
}


$(function () {
    shuffle(pics);
    showImages();
    clickEvent();
})