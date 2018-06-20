const search = document.querySelector(".inputsearch");
const searchIcons = document.querySelector('.searchicon');
const HEADER = document.querySelectorAll(".header--wrap");
let scrollLoader = 0;
function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
    search.style.opacity = "0";
    search.style.top = "0px";
    search.style.visibility = "hidden"
}

function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
}
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    scrollLoader = scroll;
    search.style.opacity = "0";
    search.style.top = "0px";
    search.style.visibility = "hidden"
    if (scroll >= 1) {
        HEADER.forEach(e => {
            e.classList.add("sticky")
            e.style.height = "50px";
        });
        document.querySelector(".header__logo").style.width = "55px";
        document.querySelectorAll('.content__text').forEach(e =>e.style.top ="50px");
    }
    else{
        HEADER.forEach(e => {
            e.classList.remove("sticky")
            e.style.height = "88px";
        });
        document.querySelector(".header__logo").style.width = "99px";
        document.querySelectorAll('.content__text').forEach(e =>e.style.top ="90px");

    }
}
function searchInput (e) {
    closeNav()
    // console.log(scrollLoader);
    // console.log("hee");
    if (scrollLoader >= 1) {
        search.style.opacity = "1";
        search.style.visibility = "visible";
        search.style.top = "53px";

    }
    else{
        search.style.top = "92px";
        search.style.opacity = "1";
        search.style.visibility = "visible";

    }
}
function searchInputHide (arguments) {
     search.style.opacity = "0";
     search.style.top = "0px";
     search.style.visibility = "hidden"
     document.querySelector(".sidenav").style.width = "0";

}

function login (e) {
    console.log("hello");
    document.querySelector('.login__popup').style.top = "0%";
    document.querySelector('.login__popup').style.visibility = "visible";
    document.querySelector('.login__popup').style.opacity = "1";
    document.querySelector('.blurtrans').style.display = 'block';
}
function loginClose (e) {
    document.querySelector('.blurtrans').style.display = 'none';
    document.querySelector('.login__popup').style.visibility = "hidden";
    document.querySelector('.login__popup').style.opacity = "0";
    document.querySelector('.login__popup').style.top = "-400px";


}
searchIcons.addEventListener('click', searchInput);
search.addEventListener('blur',searchInputHide);
document.querySelector('section').addEventListener('click',searchInputHide);
document.querySelector(".sidenav").addEventListener('click',searchInputHide);
document.querySelector("footer").addEventListener('click',searchInputHide);
document.querySelector("header").addEventListener('click',searchInputHide);
document.querySelector('#btnlogin').addEventListener('click', login);
document.querySelector('#btnloginmobile').addEventListener('click', login);
document.querySelector('.loginclose').addEventListener('click', loginClose);
document.querySelector(".blurtrans").addEventListener('click',loginClose);
document.querySelector(".blurtrans").addEventListener('click',searchInputHide);