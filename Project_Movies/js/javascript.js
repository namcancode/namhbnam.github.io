const search = document.querySelector(".inputsearch");
const searchIcons = document.querySelector('.searchicon');
const HEADER = document.querySelectorAll(".header--wrap");
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
const cardPic= document.querySelectorAll('.card__pic');



const DATA = [{
        name: "Biệt Đội Siêu Anh Hùng 3: Cuộc Chiến Vô Cực",
        img: "img/1.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Quái nhân 2",
        img: "img/2.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Tomb Raider: Huyền Thoại Bắt Đầu",
        img: "img/3.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Đặc Nhiệm Siêu Anh Hùng Phần 5",
        img: "img/4.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Siêu Đại Chiến Binh Thái Bình Dương 2: Cuộc Nổi Dậy",
        img: "img/5.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Đấu Trường Ảo",
        img: "img/6.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Siêu Thú Cuồng Nộ",
        img: "img/7.jpg",
        tag: "Phim Hot"
    },
    {
        name: "Siêu Nhân Trở Lại",
        img: "img/b1.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "50 Sắc Thái 3: Tự Do",
        img: "img/b2.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "Chiến Tranh Giữa Các Vì Sao 8: Jedi Cuối Cùng",
        img: "img/b3.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "12 Kỵ Binh Quả Cảm",
        img: "img/b4.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "Coco",
        img: "img/b5.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "Jumanji:Trò Chơi Kỳ Ảo",
        img: "img/b6.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "Thor 3: Thời Khắc Tận Thế",
        img: "img/b7.jpg",
        tag: "Phim Chiếu Rạp"
    },
    {
        name: "Thương Mến Simon",
        img: "img/c1.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Cặp Song Sinh",
        img: "img/c2.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Hoàng Phi Hồng: Nam Bắc Anh Hùng",
        img: "img/c3.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "451 Độ F",
        img: "img/c4.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Biến Đổi Kỳ Diệu",
        img: "img/c5.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Giết Tôi Đi",
        img: "img/c6.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Nếp Gấp Thời Gian",
        img: "img/c7.jpg",
        tag: "Phim Lẻ Mới Nhất"
    },
    {
        name: "Siêu Nhân Build",
        img: "img/d1.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Mãng Hoang Kỷ",
        img: "img/d2.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Chocolate Hạnh Phúc",
        img: "img/d3.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Thám Tử Conan",
        img: "img/d4.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Sứ Mệnh Và Con Tim",
        img: "img/d5.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Last Period",
        img: "img/d6.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Khách Trọ Phòng 1006",
        img: "img/d7.jpg",
        tag: "Phim Bộ Mới Nhất"
    },
    {
        name: "Nữ Siêu Nhân",
        img: "img/e1.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Người Hùng Tia Chớp",
        img: "img/e2.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Vụ Nổ Lớn",
        img: "img/e3.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Mũi Tên Xanh",
        img: "img/e4.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Xác Sống",
        img: "img/e5.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Tia Chớp Đen",
        img: "img/e6.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Siêu Hacker",
        img: "img/e7.jpg",
        tag: "Phim Âu Mỹ"
    },
    {
        name: "Đấu Trí",
        img: "img/f1.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Mỗi Ngày Một Bài Thơ",
        img: "img/f2.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Nam Thanh Nữ Tú Thế Kỷ 20",
        img: "img/f3.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Chị Em Song Sinh",
        img: "img/f4.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Lang Y Lừng Danh",
        img: "img/f5.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Tuổi Trẻ Muôn Màu",
        img: "img/f6.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Hạnh Phúc Trời Ban",
        img: "img/f7.jpg",
        tag: "Phim Hàn Quốc"
    },
    {
        name: "Liệt Hỏa Như Ca",
        img: "img/g1.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Độc Cô Thiên Hạ",
        img: "img/g2.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Nhân Sinh Nếu Như Lần Đầu Gặp Gỡ",
        img: "img/g3.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Anh Hùng Xạ Điêu",
        img: "img/g4.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Đại Tần Đế Quốc:Quật Khởi",
        img: "img/g5.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Trường Học Uy Long 1",
        img: "img/g6.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Sát Phá Lang 2",
        img: "img/g7.jpg",
        tag: "Phim Trung Quốc"
    },
    {
        name: "Bảy Viên Ngọc Rồng Siêu Cấp",
        img: "img/h1.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Doraemon-Chú Mèo Máy Thần Kỳ",
        img: "img/h2.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Naruto Shippuden",
        img: "img/h3.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "X-Men:The Animated Series",
        img: "img/h4.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Đại Chiến Titan",
        img: "img/h5.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Gia Đình Simpsons",
        img: "img/h6.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Hội Pháp Sư Movie: Dragon Cry",
        img: "img/h7.jpg",
        tag: "Phim Hoạt Hình- Animal"
    },
    {
        name: "Running Man",
        img: "img/i1.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "Law Of The Jungle (Luật Rừng)",
        img: "img/i2.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "Sự Trở Lại Của Siêu Nhân",
        img: "img/i3.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "Nhịp Đập Trái Tim 2",
        img: "img/i4.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "Nghiền Mì Gõ",
        img: "img/i5.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "Thử Thách Cực Đại",
        img: "img/i6.jpg",
        tag: "Game Show Truyền Hình"
    },
    {
        name: "The Unit+",
        img: "img/i7.jpg",
        tag: "Game Show Truyền Hình"
    },

]
let scrollLoader = 0;
let result = "";

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
        document.querySelectorAll('.content__text').forEach(e => e.style.top = "50px");
    } else {
        HEADER.forEach(e => {
            e.classList.remove("sticky")
            e.style.height = "88px";
        });
        document.querySelector(".header__logo").style.width = "99px";
        document.querySelectorAll('.content__text').forEach(e => e.style.top = "90px");

    }
}

function searchInput(e) {
    closeNav()
    // console.log(scrollLoader);
    // console.log("hee");
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

}

function login(e) {
    document.querySelector('.login__popup').style.top = "50%";
    document.querySelector('.login__popup').style.visibility = "visible";
    document.querySelector('.login__popup').style.opacity = "1";
    document.querySelector('.blurtrans').style.display = 'block';
}

function loginClose(e) {
    document.querySelector('.blurtrans').style.display = 'none';
    document.querySelector('.login__popup').style.visibility = "hidden";
    document.querySelector('.login__popup').style.opacity = "0";
    document.querySelector('.login__popup').style.top = "-400px";
}



function movies(arguments) {
    DATA.forEach(e => {
        if (e.tag == "Phim Hot") {
            col1.innerHTML +=
                `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`        }
        else if (e.tag == "Phim Chiếu Rạp"){
            col2.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
        else if (e.tag == "Phim Lẻ Mới Nhất"){
            col3.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
        else if (e.tag == "Phim Bộ Mới Nhất"){
            col4.innerHTML +=
            `<div class="list__card">
            <div class="card__pic">
                <a href="#">
                    <img src="${e.img}" alt="Avenger">
                </a>
                <div class="transparent">
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
                <a href="#">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        }
        else if (e.tag == "Phim Âu Mỹ"){
            col5.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
        else if (e.tag == "Phim Hàn Quốc"){
            col6.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
        else if (e.tag == "Phim Trung Quốc"){
            col7.innerHTML +=
            `<div class="list__card">
            <div class="card__pic">
                <a href="#">
                    <img src="${e.img}" alt="Avenger">
                </a>
                <div class="transparent">
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
                <a href="#">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        }
        else if (e.tag == "Phim Hoạt Hình- Animal"){
            col8.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
        else if (e.tag == "Game Show Truyền Hình"){
            col9.innerHTML +=
            `<div class="list__card">
    <div class="card__pic">
        <a href="#">
            <img src="${e.img}" alt="Avenger">
        </a>
        <div class="transparent">
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
        <a href="#">
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
col.forEach(child=>{
    child.lastElementChild.classList.add("card--hide")
})
let iconPlay = document.querySelectorAll('.iconPlay');

iconPlay.forEach(iconn=>{
    iconn.addEventListener('mouseover', function () {
        iconPlay.innerHTML= `<svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
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
    `
     })
    })




}



window.onload = () => {
    movies();
}

searchIcons.addEventListener('click', searchInput);
search.addEventListener('blur', searchInputHide);
document.querySelector('section').addEventListener('click', searchInputHide);
document.querySelector(".sidenav").addEventListener('click', searchInputHide);
document.querySelector("footer").addEventListener('click', searchInputHide);
document.querySelector("header").addEventListener('click', searchInputHide);
document.querySelector('#btnlogin').addEventListener('click', login);
document.querySelector('#btnloginmobile').addEventListener('click', login);
document.querySelector('.loginclose').addEventListener('click', loginClose);
document.querySelector(".blurtrans").addEventListener('click', loginClose);
document.querySelector(".blurtrans").addEventListener('click', searchInputHide);
