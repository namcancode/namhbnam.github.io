const search = document.querySelector(".inputsearch");
const searchIcons = document.querySelector('.searchicon');
const HEADER = document.querySelectorAll(".header--wrap");
const spin = document.querySelectorAll('.spinner');
let scrollLoader = 0;
let result = "";

function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
    search.style.opacity = "0";
    search.style.top = "0px";
    search.style.visibility = "hidden";
    document.querySelector('.input__result').style.visibility = "hidden";
    document.querySelector('.mobile-input__result').style.visibility = "hidden";
    document.querySelector('.super-input__result').style.visibility = "hidden";
}

function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector('.input__result').style.visibility = "hidden";
    document.querySelector('.mobile-input__result').style.visibility = "hidden";
    document.querySelector('.super-input__result').style.visibility = "hidden";
}

window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    scrollLoader = scroll;
    search.style.opacity = "0";
    search.style.top = "0px";
    search.style.visibility = "hidden";
    document.querySelector('.mobile-input__result').style.visibility = "hidden";
    document.querySelector('.super-input__result').style.visibility = "hidden";
    if (scroll >= 1) {
        HEADER.forEach(e => {
            e.classList.add("sticky")
            e.style.height = "50px";
        });
        document.querySelector(".header__logo").style.width = "55px";
        document.querySelectorAll('.content__text').forEach(e => e.style.top = "50px");
        document.querySelector('.input__result').style.top = "43px";
        document.querySelector('.mobile-input__result').style.top = "43px";
        document.querySelector('.super-input__result').setAttribute("style", "width:90%; top: 92px; left:50%; transform: translate(-50%,0);");
    } else {
        HEADER.forEach(e => {
            e.classList.remove("sticky")
            e.style.height = "88px";
        });
        document.querySelector(".header__logo").style.width = "99px";
        document.querySelectorAll('.content__text').forEach(e => e.style.top = "87px");
        document.querySelector('.input__result').style.top = "62px";
        document.querySelector('.mobile-input__result').style.top = "62px";
        document.querySelector('.super-input__result').setAttribute("style", "width:90%; top: 130px; left:50%; transform: translate(-50%,0);");

    }
}

function searchInput(e) {
    closeNav();
    if (scrollLoader >= 1) {
        search.style.opacity = "1";
        search.style.visibility = "visible";
        search.style.top = "53px";
    } else {
        search.style.top = "92px";
        search.style.opacity = "1";
        search.style.visibility = "visible";
    }
}

function searchInputHide(arguments) {
    search.style.opacity = "0";
    search.style.top = "0px";
    search.style.visibility = "hidden"
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector('.input__result').style.visibility = "hidden";
    document.querySelector('.mobile-input__result').style.visibility = "hidden";
    document.querySelector('.super-input__result').style.visibility = "hidden";
}

function login(e) {
    document.querySelector('.login__popup').style.top = "50%";
    document.querySelector('.login__popup').style.visibility = "visible";
    document.querySelector('.login__popup').style.opacity = "1";
    document.querySelector('.blurtrans').style.display = 'block';
    document.querySelector('.input__result').style.visibility = "hidden";
    document.querySelector('.mobile-input__result').style.visibility = "hidden";
    document.querySelector('.super-input__result').style.visibility = "hidden";
}

function loginClose(e) {
    document.querySelector('.blurtrans').style.display = 'none';
    document.querySelector('.login__popup').style.visibility = "hidden";
    document.querySelector('.login__popup').style.opacity = "0";
    document.querySelector('.login__popup').style.top = "-400px";
}

function hideCard(e) {
    const randomNumber = Math.floor((Math.random() * 7) + 1);
    col.forEach(child2 => {
        let test = child2.childNodes;
        for (let i = 8; i < test.length; i++) {
            test[i].classList.add("card--disable")
        }
    });
    col.forEach(child => {
        child.childNodes[1] == undefined ? 0 : child.childNodes[randomNumber].classList.add("card--hide");
    })

    sessionStorage.setItem('loaded', true);
    preload();
}


function findMatches(wordToMatch, movies) {
    return data.filter(movie => {
        const regex = new RegExp(wordToMatch, 'gi');
        return movie.name.match(regex) || movie.img.match(regex)
    });
}

function displayMatches() {
    document.querySelector('.mobile-input__result').style.visibility = "visible";
    document.querySelector('.input__result').style.visibility = "visible";
    document.querySelector('.super-input__result').style.visibility = "visible";
    const matchArray = findMatches(this.value, data);
    const html = matchArray.map(movie => {
        return `
        <div class="result--film" data-name="${movie.name}" onclick="movies(this)">
            <div class="result__img">
                <a data-name="${movie.name}" onclick="movies(this)">
                    <img src="${movie.img}" alt="${movie.name}">
                </a>
            </div>
            <div class="result__text" data-name="${movie.name}" onclick="movies(this)">
                <h1>
                   ${movie.name}
                </h1>
            </div>
        </div>
      `;
    }).join('');
    document.querySelector('.input__result').innerHTML = html;
    document.querySelector('.mobile-input__result').innerHTML = html;
    document.querySelector('.super-input__result').innerHTML = html;

}
function logout () {
    // body
console.log("logout");
$.ajax({
    type:'GET',
    url:'unset_var.php'
});

}

searchIcons.addEventListener('click', searchInput);
search.addEventListener('blur', searchInputHide);
document.querySelector('section').addEventListener('click', searchInputHide);
document.querySelector(".sidenav").addEventListener('click', searchInputHide);
document.querySelector("footer").addEventListener('click', searchInputHide);
document.querySelector("header").addEventListener('click', searchInputHide);
document.querySelector('#btnloginmobile').addEventListener('click', login);
document.querySelector('.loginclose').addEventListener('click', loginClose);
document.querySelector(".blurtrans").addEventListener('click', loginClose);
document.querySelector(".blurtrans").addEventListener('click', searchInputHide);
document.querySelector('.inputtext').addEventListener('input', displayMatches);
document.querySelector('.inputsearch').addEventListener('input', displayMatches);
document.querySelector('.mobile-input-text').addEventListener('input', displayMatches);
document.querySelector('.logout').addEventListener('click',logout);
if(document.querySelector('#btnlogin')){
    document.querySelector('#btnlogin').addEventListener('click', login);
}
