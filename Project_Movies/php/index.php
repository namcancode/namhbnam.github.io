<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Phim Đây Rồi || Xem Phim Online || Phim HD miễn phí || Cinema</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="fonts/web-fonts-with-css/css/fontawesome-all.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/effect.css" />
    <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
    <link rel="stylesheet" href="css/reponsive.css" />
</head>
<body class="preloading">
<div class="loading">
    <div class='load__body'>
        <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
        <div class='base'>
            <span></span>
            <div class='face'></div>
        </div>
    </div>
    <div class='longfazers'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <h1>Đang tải trang đợi xíu nhé!</h1>
</div>
<?php
include 'header.php';
?>
    <section class="content">
        <div id="wowslider-container1" class="slide--Hide">
            <div class="ws_images">
                <ul>
                    <li>
                        <img src="slide/data1/images/slide1.jpg" alt="" title="" id="wows1_0" />
                    </li>
                    <li>
                        <img src="slide/data1/images/slide2.jpg" alt="" title="" id="wows1_1" />
                    </li>
                    <li>
                        <img src="slide/data1/images/slide3.jpg" alt="" title="" id="wows1_2" />
                    </li>
                    <li>
                        <img src="slide/data1/images/slide4.jpg" alt="" title="" id="wows1_3" />
                    </li>
                    <li>
                        <img src="slide/data1/images/slide5.jpg" alt="" title="" id="wows1_4" />
                    </li>
                </ul>
            </div>
            <div class="ws_bullets">
                <div>
                    <a href="#" title="">
                        <span>
                            <img src="slide/data1/tooltips/slide1.jpg" alt="" />1</span>
                    </a>
                    <a href="#" title="">
                        <span>
                            <img src="slide/data1/tooltips/slide2.jpg" alt="" />2</span>
                    </a>
                    <a href="#" title="">
                        <span>
                            <img src="slide/data1/tooltips/slide3.jpg" alt="" />3</span>
                    </a>
                    <a href="#" title="">
                        <span>
                            <img src="slide/data1/tooltips/slide4.jpg" alt="" />4</span>
                    </a>
                    <a href="#" title="">
                        <span>
                            <img src="slide/data1/tooltips/slide5.jpg" alt="" />5</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Hot" onclick="categoryMovies(this)">
                        <p>Phim Hot</p>
                    </a>
                    <a data-name="Phim Hot" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col1 col">
                <div class="transparent-1">
        <div class="transparent__name">
         <h3>Siêu thú cuồng nộ</h3>
        </div>
        <div class="transparent__imdb">
            <span>Điểm IMDB:
            </span>
            <div class="imdb">
                6.4
            </div>
        </div>
        <div class="transparent__actor">
            <span> Diễn Viên: </span>Lucy
        </div>
        <div class="transparent__country">
            <span>Quốc Gia:
            </span>Mỹ
        </div>
        <div class="transparent__category">
            <span>Thể Loại: </span>Phim hot
        </div>
        <div class="transparent__content">
            <span>Nội Dung: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id molestias sed nesciunt nostrum
            necessitatibus aut animi veniam tempora, qui laboriosam doloribus! Aperiam quam eos similique ratione odit amet,
            velit perferendis doloremque cupiditate? Accusantium voluptas laboriosam veniam, sit asperiores eligendi nobis.
            Culpa aspernatur ex architecto. Iusto dignissimos placeat dolorum maxime ipsam.
        </div>

    </div>
                </div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Chiếu Rạp" onclick="categoryMovies(this)">
                        <p>Phim Chiếu Rạp</p>
                    </a>
                    <a data-name="Phim Chiếu Rạp" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col2 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Lẻ Mới Nhất</p>
                    </a>
                    <a data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col3 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Bộ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Bộ Mới Nhất</p>
                    </a>
                    <a data-name="Phim Bộ Mới Nhất" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col4 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Âu Mỹ" onclick="categoryMovies(this)">
                        <p>Phim Âu Mỹ</p>
                    </a>
                    <a data-name="Phim Âu Mỹ" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col5 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Hàn Quốc" onclick="categoryMovies(this)">
                        <p>Phim Hàn Quốc</p>
                    </a>
                    <a data-name="Phim Hàn Quốc" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col6 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Trung Quốc" onclick="categoryMovies(this)">
                        <p>Phim Trung Quốc</p>
                    </a>
                    <a data-name="Phim Trung Quốc" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col7 col">
                    <div class="spinner">
                        <div class="dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>

                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="9" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7" result="goo" />
                                    <feBlend in2="goo" in="SourceGraphic" result="mix" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                </div>

            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Phim Hoạt Hình - Animal" onclick="categoryMovies(this)">
                        <p>Phim Hoạt Hình - Animal</p>
                    </a>
                    <a data-name="Phim Hoạt Hình - Animal" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col8 col"></div>
            </div>
            <div class="content__list">
                <div class="list__title">
                    <a data-name="Game Show Truyền Hình" onclick="categoryMovies(this)">
                        <p>Game Show Truyền Hình</p>
                    </a>
                    <a data-name="Game Show Truyền Hình" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col9 col"></div>
            </div>
        </div>
    </section>
 <?php
include 'footer.php';
?>

    <script src="js/javascript.js"></script>
    <script src="js/card.js"></script>
    <!-- slide wow -->
    <script type="text/javascript" src="slide/engine1/wowslider.js"></script>
    <script type="text/javascript" src="slide/engine1/script.js"></script>
</body>
</html>