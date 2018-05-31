const menu = document.querySelector("#menu button");
let count = 0;
let scrollCount = 0;
const tab_content = document.querySelectorAll('.tab');
const tab_links = document.querySelectorAll('#tab_links li a');
const text = document.querySelectorAll('.text');
let pointStandart, pointBot;

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
        menu.setAttribute("class", "fas fas fa-times fa-2x");
    } else {
        document.querySelector('.bar-right').style.display = "none";
        count = 0;
        document.querySelector('#nav-bar').style.height = "50px";
        menu.setAttribute("class", "fas fa-bars fa-2x");
    }
}

window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    // console.log('scroll :', scroll);
    scrollCount = scroll;
    scrolLoadUp();
    if (scroll >= 1) {
        document.querySelector('#container_header').classList.add("sticky");
        document.querySelector("#social_left").style.transform = "translateX(0)"
        document.querySelector("#social_right").style.transform = "translateX(0)"
        if (count == 1) {
            document.querySelector('#nav-bar').style.height = "50px";
            menu.setAttribute("class", "fas fa-bars fa-2x");
        } else {
            document.querySelector('#nav-bar').style.height = "50px";
            menu.setAttribute("class", "fas fa-bars fa-2x");
        }
    } else {
        document.querySelector('#container_header').classList.remove("sticky");
        document.querySelector('#nav-bar').style.height = "";
        menu.setAttribute("class", "fas fa-bars fa-2x");
    }
    if (scroll >= 550) {
        document.querySelector("#box_left").style.transform = "translateX(-200%)"
        document.querySelector("#box_right").style.transform = "translateX(200%)"
    } else {
        document.querySelector("#box_left").style.transform = "translateX(0)"
        document.querySelector("#box_right").style.transform = "translateX(0)"
    }
    if (scroll > 700) {
        document.querySelector("#social_left").style.transform = "translateX(-200%)"
        document.querySelector("#social_right").style.transform = "translateX(200%)"
    } else {
        document.querySelector("#social_left").style.transform = "translateX(0)"
        document.querySelector("#social_right").style.transform = "translateX(0)"
    }

}

window.onload = () => {
    document.querySelector("#box_left").style.transform = "translateX(0)"
    document.querySelector("#box_right").style.transform = "translateX(0)"
    new Waypoint({
        element: document.getElementById('sub-wrap'),
        handler: function (direction) {
            if (direction == "down") {
                document.querySelector("#sub-picture").style.transform = "translateY(0"
                document.querySelector("#sub-list").style.transform = "translateY(0)"
            } else {
                document.querySelector("#sub-picture").style.transform = "translateY(-200%)"
                document.querySelector("#sub-list").style.transform = "translateY(200%)";
            }
        },
        offset: '80%'
    })
    new Waypoint({
        element: document.getElementById('standard'),
        handler: function (direction) {
            if (direction == 'down') {
                document.querySelector("#st-content").style.transform = "translateY(0)"
                document.querySelector("#st-pic").style.transform = "translateY(0)"
            } else {
                document.querySelector("#st-content").style.transform = "translateY(300%)"
                document.querySelector("#st-pic").style.transform = "translateY(-300%)";
            }
            pointStandart = this.triggerPoint
        },
        offset: '70%'
    })
    new Waypoint({
        element: document.getElementById('bot'),
        handler: function (direction) {
            pointBot = this.triggerPoint
        },
        offset: '100%'
    })
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
    if (scrollCount >= pointStandart) {
        text.forEach((e) => {
            e.style.color = "#c0c0c0"
        })
        pic.style.color = "#f38f47"
    }
    if (scrollCount >= pointBot) {
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
        club: "Tien Phong",
    },
    {
        name: "Le Thi anh",
        position: "girl",
        birth_year: 1992,
        height: "1m70",
        club: "VNPT",
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
        (1 == (new RegExp(b, "gi")).test(a.club)) ? console.table(a): 0
    })
};

function getTallerPlayers(b) {
    // people.forEach((a) => {
    //      (+b.match(/\d/g).join("") < +a.height.match(/\d/g).join("")) ?console.table(a):0
    // })
    return people.filter(a =>a.height>b ?1:0)
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
//         mult = 20, // how fast do we scroll
//         dir = 0, // 1 = scroll down, -1 = scroll up
//         steps = 30, // how many steps in animation
//         length = 60; // how long to animate
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