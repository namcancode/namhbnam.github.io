function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
}

function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
}
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    const HEADER = document.querySelectorAll(".header--wrap");
    if (scroll >= 1) {
        document.querySelector(".header__logo").style.width = "55px"
        HEADER.forEach(e => {
            e.classList.add("sticky")
            e.style.height = "50px";
        });
    }
    else{
        HEADER.forEach(e => {
            e.classList.remove("sticky")
            e.style.height = "88px";
        });
        document.querySelector(".header__logo").style.width = "99px"
    }
}