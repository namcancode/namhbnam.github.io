const here = document.querySelector("#here");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const col4 = document.querySelector(".col4");
const col5 = document.querySelector(".col5");
const col6 = document.querySelector(".col6");
const col7 = document.querySelector(".col7");
const col8 = document.querySelector(".col8");
const col9 = document.querySelector(".col9");
const col = document.querySelectorAll(".col");
const contentMovies = document.querySelector(".content__movies");
function homePage(arguments) {

    data.forEach(e => {
        if (e.tag == "Phim Hot") {
            // console.log(i);
            col1.innerHTML +=
                `<div class="list__card" onclick="movies(this)"  data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
                <div class="iconPlay">
                        <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                            <!-- Hello My Name is Nam. -->
                            <desc>Created by Nam.</desc>
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#FAD961" offset="0%"></stop>
                                    <stop stop-color="#F76B1C" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                                <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                    <g id="detail" transform="translate(165.000000, 111.000000)">
                                        <g id="play" transform="translate(508.000000, 223.000000)">
                                            <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                            <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                                points="52.5 28 77 67 28 67"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
        <p>${e.name}</p>
        </div>
    </div>
    <div class="card__name">
        <a  onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Chiếu Rạp") {
            col2.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
                <div class="iconPlay">
                        <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                            <!-- Hello My Name is Nam. -->
                            <desc>Created by Nam.</desc>
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#FAD961" offset="0%"></stop>
                                    <stop stop-color="#F76B1C" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                                <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                    <g id="detail" transform="translate(165.000000, 111.000000)">
                                        <g id="play" transform="translate(508.000000, 223.000000)">
                                            <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                            <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                                points="52.5 28 77 67 28 67"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
        <p>${e.name}</p>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Lẻ Mới Nhất") {
            col3.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
                <div class="iconPlay">
                        <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                            <!-- Hello My Name is Nam. -->
                            <desc>Created by Nam.</desc>
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#FAD961" offset="0%"></stop>
                                    <stop stop-color="#F76B1C" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                                <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                    <g id="detail" transform="translate(165.000000, 111.000000)">
                                        <g id="play" transform="translate(508.000000, 223.000000)">
                                            <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                            <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                                points="52.5 28 77 67 28 67"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
        <p>${e.name}</p>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Bộ Mới Nhất") {
            col4.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                <div class="iconPlay">
                        <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                            <!-- Hello My Name is Nam. -->
                            <desc>Created by Nam.</desc>
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#FAD961" offset="0%"></stop>
                                    <stop stop-color="#F76B1C" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                                <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                    <g id="detail" transform="translate(165.000000, 111.000000)">
                                        <g id="play" transform="translate(508.000000, 223.000000)">
                                            <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                            <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                                points="52.5 28 77 67 28 67"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
        <p>${e.name}</p>
        </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        } else if (e.tag == "Phim Âu Mỹ" ) {
            col5.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Hàn Quốc") {
            col6.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Trung Quốc") {
            col7.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                <div class="iconPlay">
                        <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                            <!-- Hello My Name is Nam. -->
                            <desc>Created by Nam.</desc>
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#FAD961" offset="0%"></stop>
                                    <stop stop-color="#F76B1C" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                                <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                    <g id="detail" transform="translate(165.000000, 111.000000)">
                                        <g id="play" transform="translate(508.000000, 223.000000)">
                                            <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                            <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                                points="52.5 28 77 67 28 67"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
        <p>${e.name}</p>
        </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        } else if (e.tag == "Phim Hoạt Hình - Animal") {
            col8.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Game Show Truyền Hình") {
            col9.innerHTML +=
                `<div class="list__card" onclick="movies(this)"  data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a  onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
}

function detail(arguments) {
    let i1 =0;
    let i2 =0;
    data.forEach(e => {
        if (e.tag == "Phim Hot" && i1<7) {
            i1++;
            col1.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Chiếu Rạp" && i2<7) {
            i2++;
            col2.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <div class="iconPlay">
                <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                    <!-- Hello My Name is Nam. -->
                    <desc>Created by Nam.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FAD961" offset="0%"></stop>
                            <stop stop-color="#F76B1C" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                        <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                            <g id="detail" transform="translate(165.000000, 111.000000)">
                                <g id="play" transform="translate(508.000000, 223.000000)">
                                    <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                    <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                        points="52.5 28 77 67 28 67"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
<p>${e.name}</p>
</div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
}

function movies(e) {
    sessionStorage.clear();
    let nameFilm = e.dataset.name;
    dataCategory.filter(a => (a.name == nameFilm)).map(b => sessionStorage.setItem("data", JSON.stringify(b)))
    window.open("detail", "_self");
}

function showMovies(arguments) {
    const dataStorage = JSON.parse(sessionStorage.data);

    contentMovies.innerHTML +=
        `<div class="movies__media">
    <div class="media__icon">
    </div>
    <div class="media__video">

        <video width="100%" height="100%" controls>
            <source src="${dataStorage.link}"
                type="video/mp4">
        </video>
    </div>
</div>
<div class="movies__title">
    <div class="title__text">
        <div class="text__top">
            <h2>
                ${dataStorage.name}
            </h2>
        </div>
        <div class="text__bot">
            <button class="bot__report">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Báo lỗi</p>
            </button>
            <button class="bot__block-ads">
                <i class="fas fa-power-off"></i>
                <p>Tắt quảng cáo</p>
            </button>
            <div class="bot__add-list">
                <i class="fas fa-plus-circle"></i>
                <p>Thêm vào danh sách</p>
            </div>
        </div>
    </div>
    <div class="title__icon">
        <svg width="61px" height="58px" viewBox="0 0 61 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Hello my name is Nam-->
            <desc>Created by Nam.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="list_movies-copy" transform="translate(-1198.000000, -685.000000)">
                    <g id="detail" transform="translate(165.000000, 111.000000)">
                        <g id="title" transform="translate(0.000000, 541.000000)">
                            <g id="quality" transform="translate(1033.288136, 33.000000)">
                                <ellipse id="Oval-2" fill="#606060" cx="30.3107345" cy="29" rx="30.3107345" ry="29"></ellipse>
                                <text id="HD-720" font-family="AvenirNext-Medium, Avenir Next" font-size="16" font-weight="400" letter-spacing="-0.529999971">
                                    <tspan x="19.4433333" y="26" fill="#F6B03D">HD</tspan>
                                    <tspan x="42.2233334" y="26" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F6B03D"></tspan>
                                    <tspan x="17.4433333" y="48.2" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F9F9F9">72</tspan>
                                    <tspan x="34.9433334" y="48.2" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F9F9F9">0</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</div>
<div class="movies__info">
    <div class="info__left">
        <div class="movies-season">
            <h1>Các season</h1>
            <button>Season 1</button>
        </div>
        <div class="movies-data">
            <h1>
                Nội dung phim
            </h1>
            <h2>
            ${dataStorage.content}
            </h2>
        </div>
        <div class="movies-reviews">
            <div class="reviews__left">
                <div class="actor-film">
                    <h1>
                        Diễn viên
                    </h1>
                    <h2>
                    ${dataStorage.actor}
                    </h2>
                </div>
                <div class="kind-film">
                    <h1>
                        Thể loại
                    </h1>
                    <h2>
                    ${dataStorage.category}
                    </h2>

                </div>
                <div class="rate-film">
                    <h1>
                        Đánh giá của Cinema
                    </h1>
                    <div class="rate__star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="tag-film">
                    <span>Tags:</span>
                    <p>${dataStorage.tag}</p>
                </div>
            </div>
            <div class="revies__right">
                <div class="imdb-film">
                    <h1>Đánh giá</h1>
                    <h2>${dataStorage.rate}</h2>
                </div>
                <div class="directors-film">
                    <h1>Đạo diễn</h1>
                    <h2>${dataStorage.director}</h2>
                </div>
                <div class="country-film">
                    <h1>Quốc gia</h1>
                    <h2>${dataStorage.country}</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="info__right">
        <div class="episode">
            <h1>Các tập tiếp theo</h1>
            <div class="episode__icon">
                    <p>1</p>
            </div>
        </div>
        <div class="comment">
            <!-- comment facebook -->
            <div class="fb-comments" data-href="http://phimdayroi.ga/detail" data-numposts="4"></div>
            <!-- main -->
        </div>
    </div>`

    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })

}

function categoryMovies(e) {
    sessionStorage.clear();
    let categoryFilm = e.dataset.name;
    let storageCategory = [];
    for (let value of dataCategory) {
        value.tag == categoryFilm ? storageCategory.push(value) : 0
    }
    sessionStorage.setItem("dataCategory", JSON.stringify(storageCategory));
    window.open("category", "_self");
}

function showMoviesCategory(arguments) {
    const dataStorage = JSON.parse(sessionStorage.dataCategory);
    dataStorage.forEach(e => {
        here.innerHTML +=
            `<div class="list--wrap col">
        <div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                    <p>${e.name}</p>
                </div>
                <div class="iconPlay">
                    <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                        <!-- Hello My Name is Nam. -->
                        <desc>Created by Nam.</desc>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stop-color="#FAD961" offset="0%"></stop>
                                <stop stop-color="#F76B1C" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                            <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                <g id="detail" transform="translate(165.000000, 111.000000)">
                                    <g id="play" transform="translate(508.000000, 223.000000)">
                                        <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                        <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                            points="52.5 28 77 67 28 67"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>
    </div>`
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
    sessionStorage.setItem('loaded', true);
}

function checkFirstVisit() {
    const spin = document.querySelectorAll('.spinner');
    spin.forEach(a => {
        a.remove();
    })
}

function preload(arguments) {
    if (sessionStorage.getItem('loaded') == 'true' && document.querySelector('body').classList.contains('preloading') == true) {
        setTimeout(function (arguments) {
            document.querySelector('body').classList.remove('preloading')
            document.querySelector('.loading').remove();
        }, 500)
    }
}
function loadHomePage () {
    if (window.location.pathname.split("/").pop() == "index.html" || window.location.pathname.split("/").pop() == "" || window.location.pathname.split("/").pop() == "index.php") {
        // setTimeout(function  () {
            homePage();
            checkFirstVisit();
            hideCard();
        // },1000)
    } else if (window.location.pathname.split("/").pop() == "category.html" || window.location.pathname.split("/").pop() == "category.php" || window.location.pathname.split("/").pop() == "category") {
        // checkFirstVisit();
        // showMoviesCategory();
    } else if (window.location.pathname.split("/").pop() == "detail.html" || window.location.pathname.split("/").pop() == "detail.php" || window.location.pathname.split("/").pop() == "detail") {
        // setTimeout(function  () {
            checkFirstVisit();
            showMovies();
            detail();
            hideCard();
        // },500)
    }
}
function loadHomePage2 () {
    if (window.location.pathname.split("/").pop() == "index.html" || window.location.pathname.split("/").pop() == "" || window.location.pathname.split("/").pop() == "index.php") {
        // setTimeout(function  () {
            // homePage();
            // checkFirstVisit();
            // hideCard();
        // },1000)
    } else if (window.location.pathname.split("/").pop() == "category.html" || window.location.pathname.split("/").pop() == "category.php" || window.location.pathname.split("/").pop() == "category") {
        checkFirstVisit();
        showMoviesCategory();
    } else if (window.location.pathname.split("/").pop() == "detail.html" || window.location.pathname.split("/").pop() == "detail.php" || window.location.pathname.split("/").pop() == "detail") {
        // setTimeout(function  () {
            // checkFirstVisit();
            // showMovies();
            // detail();
            // hideCard();
        // },500)
    }
}

window.onload = () => {
    loadData(loadHomePage);
    loadDataCategory(loadHomePage2);

        setTimeout(function () {
            document.querySelectorAll('.list__card').forEach(a=>a.addEventListener('mousemove', tooltip));
            document.querySelectorAll('.list__card').forEach(a=>a.addEventListener('mouseout', tooltip2));
        },1000)



}