const menu = document.querySelector("#menu button");
let count = 0;
let scrollCount = 0;
const tab_content = document.querySelectorAll('.tab');
const tab_links = document.querySelectorAll('#tab_links li a');
const text = document.querySelectorAll('.text');
let scrollNumber = 0;

function handlerClick(e) {
    tab_links.forEach(a => {
        a.classList.remove("active");
    })
    e.target.classList.add('active')
    const data = this.getAttribute('data-id')
    tab_content.forEach(b => {
        b.classList.remove("active2");
        b.classList.add("hide");
    })
    const datanum = document.querySelector(`[data-num="${data}"]`)
    datanum.classList.remove("hide")
    datanum.classList.add("active2")
}

function barRightClick(e) {
    if (document.querySelector('.bar-right').style.display == "none" || document.querySelector('.bar-right').style.display == "") {
        document.querySelector('.bar-right').style.display = "grid";
        count++;
        document.querySelector('#nav-bar').style.height = "190px";
    } else {
        document.querySelector('.bar-right').style.display = "none";
        count = 0;
        document.querySelector('#nav-bar').style.height = "50px";
    }
}







function displaywheel(e){
    var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail*(-1) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
    console.log('delta :', delta);
}
 
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, displaywheel)
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, displaywheel, false)










window.onscroll = () => {
 
    scrollNumber++
    let scroll = document.querySelector('html').scrollTop;
    // console.log('scroll :', scrollNumber);
    scrollCount = scroll;
    scrolLoadUp();
    if (scroll >= 1) {
        document.querySelector('#container_header').classList.add("sticky");
        document.querySelector("#social_left").style.transform = "translateX(0)"
        document.querySelector("#social_right").style.transform = "translateX(0)"
        if (count == 1) {
            document.querySelector('#nav-bar').style.height = "50px";
        } else document.querySelector('#nav-bar').style.height = "50px";
    } else {
        document.querySelector('#container_header').classList.remove("sticky");
        document.querySelector('#nav-bar').style.height = "";
    }
    if (scroll > 383) {
        document.querySelector("#box_left").style.transform = "translateX(-200%)"
        document.querySelector("#box_right").style.transform = "translateX(200%)"
    } else {
        document.querySelector("#box_left").style.transform = "translateX(0)"
        document.querySelector("#box_right").style.transform = "translateX(0)"
    }
    if (scroll > 600) {
        document.querySelector("#social_left").style.transform = "translateX(-200%)"
        document.querySelector("#social_right").style.transform = "translateX(200%)"
    } else {
        document.querySelector("#social_left").style.transform = "translateX(0)"
        document.querySelector("#social_right").style.transform = "translateX(0)"
    }
    if (scroll > 1713 || scroll < 550) {
        document.querySelector("#sub-picture").style.transform = "translateY(-200%)"
        document.querySelector("#sub-list").style.transform = "translateY(200%)";
    } else {
        document.querySelector("#sub-picture").style.transform = "translateY(0"
        document.querySelector("#sub-list").style.transform = "translateY(0)"
    }
    if (scroll > 1713 || scroll < 1200) {
        document.querySelector("#st-content").style.transform = "translateY(200%)"
        document.querySelector("#st-pic").style.transform = "translateY(-200%)";
    } else {
        document.querySelector("#st-content").style.transform = "translateY(0"
        document.querySelector("#st-pic").style.transform = "translateY(0)"
    }

}

window.onload = () => {
    document.querySelector("#box_left").style.transform = "translateX(0)"
    document.querySelector("#box_right").style.transform = "translateX(0)"
}

function scrolLoadUp() {
    let banner = document.querySelector(`[href="#container_banner"]`)
    let tab = document.querySelector(`[href="#container_tab_list"]`)
    let sub = document.querySelector(`[href="#container_sub_list"]`)
    let pic = document.querySelector(`[href="#container_picture"]`)
    let footer = document.querySelector(`[href="#container_footer"]`)
    if (scrollCount == 0) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
    }
    if (scrollCount >= 1) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        });
        banner.style.color = "#f38f47";
        document.querySelector('.bar-right').setAttribute("style", "display:none")
    }
    if (scrollCount >= 400) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
        tab.style.color = "#f38f47"
    }
    if (scrollCount >= 1000) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
        sub.style.color = "#f38f47"
    }
    if (scrollCount >= 1480) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
        pic.style.color = "#f38f47"
    }
    if (scrollCount >= 1710) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
        footer.style.color = "#f38f47"
    }
}

tab_links.forEach(tab => tab.addEventListener('click', handlerClick))
menu.addEventListener('click', barRightClick)
// -----------------------------------------------------------------------
// Style console.log
console.log("%cStop!", "color: red; font-size: 100px; font-weight: bold; text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);");
console.log("%cBạn Đang Truy Cập Trái Phép", "color: blue; font-size: 25px; font-weight: bold");
// Style console.log

// -----------------------------------------------------------------------

// Home JS 
const people = [{
        name: "Bui Tien Dung",
        position: "goalkeeper",
        birth_year: 1997,
        height: "1m81",
        club: "FLC Thanh Hoa",
    },
    {
        name: "Bui Tien Dung",
        position: "defender",
        birth_year: 1995,
        height: "1m76",
        club: "Viettel",
    },
    {
        name: "Nguyen Cong Phuong",
        position: "striker",
        birth_year: 1996,
        height: "1m68",
        club: "HAGL",
    },
    {
        name: "Nguyen Van Anh",
        position: "boss",
        birth_year: 1992,
        height: "1m88",
        club: "Saigon",
    },
    {
        name: "Nguyen Van anh",
        position: "boss",
        birth_year: 1992,
        height: "1m88",
        club: "Saigon",
    },
]

function countAllPlayers() {
    return `Found ${people.length} players`
}

function checkNumberOfPlayers() {
    return countAllPlayers() >= 16 ? true : false
}

function getPlayersByBirthYear(year) {
    people.forEach(a => (a.birth_year == year && year >= 0) ? console.table(a) : false)
}

function getPlayersByClub(b) {
    people.forEach((a) => {
        if (1 == (new RegExp(b, "gi")).test(a.club)) return console.table(a)
    })
};

function getTallerPlayers(b) {
    people.forEach((a) => {
        if (+b.match(/\d/g).join("") < +a.height.match(/\d/g).join("")) return console.table(a)
    })
}

function sortPlayersByName() {
    const arr = people.map((a, i, array) => {
        return a.name.substring(a.name.lastIndexOf(" "), a.name.length)
    })
    arr.sort((a, b) => {
        if (a.toUpperCase() < b.toUpperCase()) {
            return -1
        }
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1
        }
        return 0
    })
    // console.log('arr :', arr);
    const arrSort = [];
    const club = arr.map((a, i, array) => {
        let nameArr = a
        people.forEach(e => {
            if (e.name.substring(e.name.lastIndexOf(" "), e.name.length) === nameArr) {
                arrSort.push(e)
            }
        })
    })
    // const peopleSort = arrSort.filter((a, index, array) => {
    //     let x = array.indexOf(a);
    //     return x == index
    // })
    const peopleSort = [...new Set(arrSort)]
    return console.table(peopleSort);
}

function sortPlayersByNameAll() {
    return console.table(people.sort((a, b) => a.name.localeCompare(b.name)));
}

function sortPlayersByHeight() {
    return console.table(people.sort((a, b) => a.height.localeCompare(b.height)));
}

function getRandomPlayer() {
    return console.table(people.sort(() => {
        return 0.5 - Math.random()
    })[1]);
}

function getPositionOfPlayer(index) {
    return console.table(people[index - 1]);
}

function isVietnamWin() {
    new Date().getSeconds() % 2 == 0 ? console.info(true) : console.info(false);
}
// Home JS






// Math.easeOutQuad = function (t, b, c, d) {
//     t /= d;
//     return -c * t * (t - 2) + b;
// };

// (function () { // do not mess global space
//     var
//         interval, // scroll is being eased
//         mult = 2000, // how fast do we scroll
//         dir = 0, // 1 = scroll down, -1 = scroll up
//         steps = 20, // how many steps in animation
//         length = 50; // how long to animate
//     function MouseWheelHandler(e) {
//         e.preventDefault(); // prevent default browser scroll
//         clearInterval(interval); // cancel previous animation
//         ++mult; // we are going to scroll faster
//         var delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); // cross-browser
//         if (dir != delta) { // scroll direction changed
//             mult = 1; // start slowly
//             dir = delta;
//         }
//         // in this cycle, we determine which element to scroll
//         for (var tgt = e.target; tgt != document.documentElement; tgt = tgt.parentNode) {
//             var oldScroll = tgt.scrollTop;
//             tgt.scrollTop += delta;
//             if (oldScroll != tgt.scrollTop) break;
//             // else the element can't be scrolled, try its parent in next iteration
//         }
//         var start = tgt.scrollTop;
//         var end = start + length * mult * delta; // where to end the scroll
//         var change = end - start; // base change in one step
//         var step = 0; // current step
//         interval = setInterval(function () {
//             var pos = Math.easeOutQuad(step++, start, change, steps); // calculate next step
//             tgt.scrollTop = pos; // scroll the target to next step
//             if (step >= steps) { // scroll finished without speed up - stop animation
//                 mult = 0; // next scroll will start slowly
//                 clearInterval(interval);
//             }
//         }, 10);
//     }

//     // nonstandard: Chrome, IE, Opera, Safari
//     window.addEventListener("mousewheel", MouseWheelHandler, false);
//     // nonstandard: Firefox
//     window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// })();