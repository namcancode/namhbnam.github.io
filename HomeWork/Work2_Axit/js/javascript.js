const tab_link1 = document.querySelector('#tab_link1');
const tab_link2 = document.querySelector('#tab_link2');
const tab_link3 = document.querySelector('#tab_link3');
const tab_content1 = document.querySelector('#tab_content1');
const tab_content2 = document.querySelector('#tab_content2');
const tab_content3 = document.querySelector('#tab_content3');

function handlerClick1(e) {
    this.classList.toggle("active");
    tab_link2.classList.remove("active");
    tab_link3.classList.remove("active");
    tab_content1.classList.toggle("active2");
    tab_content2.classList.remove("active2");
    tab_content3.classList.remove("active2");
    tab_content1.style.display = "block";
    tab_content2.style.display = "none";
    tab_content3.style.display = "none";
}

function handlerClick2(e) {
    this.classList.toggle("active");
    tab_link1.classList.remove("active");
    tab_link3.classList.remove("active");
    tab_content2.classList.toggle("active2");
    tab_content1.classList.remove("active2");
    tab_content3.classList.remove("active2");
    tab_content1.style.display = "none";
    tab_content2.style.display = "block";
    tab_content3.style.display = "none";
}

function handlerClick3(e) {
    this.classList.toggle("active");
    tab_link1.classList.remove("active");
    tab_link2.classList.remove("active");
    tab_content3.classList.toggle("active2");
    tab_content1.classList.remove("active2");
    tab_content2.classList.remove("active2");
    tab_content1.style.display = "none";
    tab_content2.style.display = "none";
    tab_content3.style.display = "block";
}
tab_link1.addEventListener('click', handlerClick1);
tab_link2.addEventListener('click', handlerClick2);
tab_link3.addEventListener('click', handlerClick3);