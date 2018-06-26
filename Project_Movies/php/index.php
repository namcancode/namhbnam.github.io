<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Phim Đây Rồi || Xem Phim Online || Phim HD miễn phí || Cinema</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="fonts/web-fonts-with-css/css/fontawesome-all.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
    <div class="login__popup">
        <div class="popup__title">
            <h1>Đăng Nhập</h1>
            <i class="fas fa-times loginclose"></i>
        </div>
        <div class="popup__sub">
            <div class="sub__title">
                <h3>
                    Mỗi người dùng chỉ sử dụng 01 tài khoản, nếu bạn chia sẻ, tài khoản có thể bị khóa mà không thông báo trước.
                </h3>
            </div>
            <form action='dangnhap.php?do=login' method="post"  id="registry">
                <div class="form--login">
                    <div class="name__text name1">
                        <label for="fname">Tài Khoản</label>
                    </div>
                    <div class="name__text pass1">
                        <label for="fname">Mật Khẩu</label>
                    </div>
                    <div class="name__input input1">
                        <input placeholder="Username" name="Username" type="username">
                    </div>
                    <div class="name__input input2">
                        <input placeholder="Password" name="Password" type="password">
                    </div>
                    <div class="box--one text1">
                        <div class="box__radio">
                            <input type="checkbox" name="" id="" type="checkbox">
                        </div>
                        <div class="box__text">
                            <p>Nhớ tài khoản</p>
                        </div>
                    </div>
                    <div class="box--two text2">
                        <a href="#">Quên mật khẩu</a>
                    </div>
                    <div class="clickbtn btn1">
                        <input type="submit" value="Đăng Nhập" name="login">
                    </div>
                    <div class="clickbtn btn2 btn--register">
                        <input type="button" value="Đăng Ký" name="registry" onclick='javascript:register();'></input>
                  </div>
                </div>
             </form>

        </div>
    </div>
    <div class="blurtrans"></div>
    <div class="header--wrap desktop">
        <div class="wrap">
            <header>
                <div class="header__logo">
                    <a href="index.php">
                        <img src="img/logo.png" alt="">
                    </a>
                </div>
                <div class="header__menu">
                    <a class="menu__text" href="index.php">
                        <i class="material-icons md-24">
                            home
                        </i>
                    </a>
                    <div class="list--hover1 list-center">
                        <a class="menu__text">
                            <p>Thể Loại
                                <i class="fas fa-angle-down"></i>
                            </p>
                        </a>
                        <div class="content__text list1">
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Hành Động</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Viễn Tưởng</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Hàn Quốc</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Tâm Lý</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Hài</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Kinh Dị</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim Ma</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Phim 18</p>
                            </a>
                        </div>
                    </div>
                    <div class="list--hover2 list-center">
                        <a class="menu__text">
                            <p>Quốc Gia
                                <i class="fas fa-angle-down"></i>
                            </p>
                        </a>
                        <div class="content__text list2">
                            <a class="text__name" data-name="Phim Hàn Quốc" onclick="categoryMovies(this)">
                                <p>Hàn Quốc</p>
                            </a>
                            <a class="text__name" data-name="Phim Trung Quốc" onclick="categoryMovies(this)">
                                <p>Trung Quốc</p>
                            </a>
                            <a class="text__name" data-name="Phim Âu Mỹ" onclick="categoryMovies(this)">
                                <p>Mỹ</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Nhật Bản</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Ấn Độ </p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Việt Nam</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Đức</p>
                            </a>
                            <a class="text__name" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                                <p>Thái Lan</p>
                            </a>
                        </div>
                    </div>
                    <a class="menu__text" data-name="Phim Chiếu Rạp" onclick="categoryMovies(this)">
                        <p>Phim rạp</p>
                    </a>
                    <a class="menu__text" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim mới</p>
                    </a>
                </div>
                <div class="header__login">
                    <div class="login__input">
                        <input class="inputtext" type="text" placeholder="Tìm kiếm">
                        <div class="input__result desktop-input__result">
                            <div class="result__title">
                                <h1>
                                    Kết quả tìm kiếm cho từ khóa:
                                    <span>Hello</span>
                                </h1>
                            </div>
                            <div class="result__content">
                            </div>
                        </div>
                    </div>

                        <?php
if (isset($_SESSION['username']) && $_SESSION['username']) {
    echo '
    <div class="login__account">
    <div class="account__avatar">
    <img src="' . $_SESSION['avatar'] . '" alt="' . $_SESSION['username'] . '">
    </div>
    <div class="account__info">
    <span class="arrow"></span>
    <div class="info__user">
        <a href="#">
            <i class="fas fa-user-circle"></i>
            <p>' . $_SESSION['username'] . '</p>
        </a>
    </div>
    <div class="info__logout">
        <i class="fas fa-power-off"></i>
        <p>
            Đăng Xuất
        </p>
    </div>
</div>';
} else {
    echo '<button id="btnlogin">Đăng nhập</button>';
}
?>

                    </div>
                </div>
            </header>
        </div>
    </div>
    <div class="header--wrap mobile">
        <input type="text" class="inputsearch" placeholder="Tìm kiếm">
        <div class="input__result super-input__result">
            <div class="result__title">
                <h1>
                    Kết quả tìm kiếm cho từ khóa:
                    <span>Hello</span>
                </h1>
            </div>
            <div class="result__content">
            </div>
        </div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn " onclick="closeNav()">&times;</a>
            <a class="linebot" href="index.php">Trang chủ</a>
            <div class="menu--mobile__list">
                <a class="linebot" href="#">Thể Loại</a>
                <div class="dropdown">
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Hành Động</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Viễn Tưởng</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Hàn Quốc</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Tâm Lý</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Hài</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Kinh Dị</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Ma</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim 18</p>
                    </a>
                </div>
            </div>
            <div class="menu--mobile__list">
                <a class="linebot" href="#">Quốc Gia</a>
                <div class="dropdown">
                    <a class="dropdown__list" data-name="Phim Hàn Quốc" onclick="categoryMovies(this)">
                        <p>Hàn Quốc</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Trung Quốc" onclick="categoryMovies(this)">
                        <p>Trung Quốc</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Âu Mỹ" onclick="categoryMovies(this)">
                        <p>Mỹ</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Nhật Bản</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Ấn Độ </p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Việt Nam</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Đức</p>
                    </a>
                    <a class="dropdown__list" data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Thái Lan</p>
                    </a>
                </div>
            </div>
            <a class="linebot" href="#">Phim rạp</a>
            <a class="linebot" href="#">Phim mới</a>
        </div>
        <header class="wrap">
            <div class="header__button">
                <button href="#" onclick="openNav()" class="fas fa-bars fa-2x" aria-hidden="true"></button>
                <div class="header__logo">
                    <a href="index.php">
                        <img src="img/logo.png" alt="">
                    </a>
                </div>
            </div>

            <div class="header__login">
                <div class="login__input">
                    <input class="inputtext mobile-input-text" type="text" placeholder="Tìm kiếm">
                    <div class="input__result mobile-input__result">
                        <div class="result__title">
                            <h1>
                                Kết quả tìm kiếm cho từ khóa:
                                <span>Hello</span>
                            </h1>
                        </div>
                        <div class="result__content">
                        </div>
                    </div>
                </div>
                <i class="fas fa-search searchicon"></i>
                <?php
if (isset($_SESSION['username']) && $_SESSION['username']) {
    echo '
    <div class="login__account">
    <div class="account__avatar">
    <img src="' . $_SESSION['avatar'] . '" alt="' . $_SESSION['username'] . '">
    </div>
    <div class="account__info">
    <span class="arrow"></span>
    <div class="info__user">
        <a href="#">
            <i class="fas fa-user-circle"></i>
            <p>' . $_SESSION['username'] . '</p>
        </a>
    </div>
    <div class="info__logout">
        <i class="fas fa-power-off"></i>
        <p>
            Đăng Xuất
        </p>
    </div>
</div>';
} else {
    echo '<button id="btnloginmobile">Đăng nhập</button>';
}
?>

            </div>
        </header>
    </div>
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
                    <a data-name="Phim Chiếu Rạp" onclick="categoryMovies(this)">
                        <p>Phim Chiếu Rạp</p>
                    </a>
                    <a data-name="Phim Chiếu Rạp" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col2 col">
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
                    <a data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Lẻ Mới Nhất</p>
                    </a>
                    <a data-name="Phim Lẻ Mới Nhất" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col3 col">
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
                    <a data-name="Phim Bộ Mới Nhất" onclick="categoryMovies(this)">
                        <p>Phim Bộ Mới Nhất</p>
                    </a>
                    <a data-name="Phim Bộ Mới Nhất" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col4 col">
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
                    <a data-name="Phim Âu Mỹ" onclick="categoryMovies(this)">
                        <p>Phim Âu Mỹ</p>
                    </a>
                    <a data-name="Phim Âu Mỹ" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col5 col">
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
                    <a data-name="Phim Hàn Quốc" onclick="categoryMovies(this)">
                        <p>Phim Hàn Quốc</p>
                    </a>
                    <a data-name="Phim Hàn Quốc" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col6 col">
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
                <div class="list--wrap col8 col">
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
                    <a data-name="Game Show Truyền Hình" onclick="categoryMovies(this)">
                        <p>Game Show Truyền Hình</p>
                    </a>
                    <a data-name="Game Show Truyền Hình" onclick="categoryMovies(this)" class="more">
                        <p>
                            Xem thêm
                        </p>
                    </a>
                </div>
                <div class="list--wrap col9 col">
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
        </div>
    </section>
    <footer class="footer__desktop">
        <div class="wrap footer--layout">
            <div class="footer__box">
                <div class="box__logo header__logo">
                    <a href="#">
                        <img src="img/logo.png" alt="logo">
                    </a>
                </div>
                <div class="box__info">
                    <p>
                        Đơn vị chủ quản : Công ty cổ phần trực tuyến Cinema.
                    </p>
                    <p>
                        Địa chỉ đăng ký: Số nhà 14, ngõ 4, đường Nguyễn Đình Chiểu, Hà Nội.
                    </p>
                    <p>
                        Email: support@nguyennam.ml
                    </p>
                    <p>
                        Số điện thoại: 0988.888.888
                    </p>
                    <p>
                        Copyright ©2018 Cinema. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div class="footer__link">
                <div class="link link--social">
                    <span>
                        <p>
                            Liên Hệ
                        </p>
                    </span>

                    <a href="#">
                        <i class="fab fa-facebook-f"> </i>
                        <p>
                            Facebook
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                        <p>
                            Twitter
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                        <p>
                            Google+
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-youtube"></i>
                        <p>
                            Youtube
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-tumblr"></i>
                        <p>
                            Tumblr
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-slack-hash"></i>
                        <p>
                            Slack
                        </p>
                    </a>
                    <a href="#">
                        <i class="fab fa-weixin"> </i>
                        <p>
                            Wechat
                        </p>
                    </a>

                </div>
                <div class="link">
                    <span>
                        <p>
                            Thể Loại Phim
                        </p>
                    </span>

                    <a href="#">
                        Phim Hot
                    </a>
                    <a href="#">
                        Phim Chiếu Rạp
                    </a>
                    <a href="#">
                        Phim Lẻ
                    </a>
                    <a href="#">
                        Phim Bộ
                    </a>
                    <a href="#">
                        Phim Âu Mỹ
                    </a>
                    <a href="#">
                        Phim Hàn Quốc
                    </a>
                    <a href="#">
                        Phim Trung Quốc
                    </a>
                    <a href="#">
                        Phim Hoạt Hình
                    </a>

                </div>
                <div class="link">
                    <span>
                        <p>
                            Diễn Viên
                        </p>
                    </span>

                    <a href="#">
                        Tom Cruise
                    </a>
                    <a href="#">
                        Adam Sendler
                    </a>
                    <a href="#">
                        Johnny Depp
                    </a>
                    <a href="#">
                        Leonardo dicaprio
                    </a>
                    <a href="#">
                        Matt Damon
                    </a>
                    <a href="#">
                        Brad Pitt
                    </a>
                    <a href="#">
                        Robert Pattinson
                    </a>
                    <a href="#">
                        Nam Nguyễn
                    </a>

                </div>
            </div>
        </div>

    </footer>
    <footer class="footer__mobile">
        <div class="social__icon">
            <a href="#">
                <i class="fab fa-facebook-f"> </i>
            </a>
            <a href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
                <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="#">
                <i class="fab fa-tumblr"></i>
            </a>
            <a href="#">
                <i class="fab fa-slack-hash"></i>
            </a>
            <a href="#">
                <i class="fab fa-weixin"> </i>
            </a>
        </div>
        <div class="footer__info">
            <p>
                Copyright ©2018 Cinema. All Rights Reserved.
            </p>
        </div>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/javascript.js"></script>
    <script src="js/card.js"></script>
    <!-- jQuery JS 3.1.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!-- jQuery UI JS 1.12.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <!-- slide wow -->
    <script type="text/javascript" src="slide/engine1/jquery.js"></script>
    <script type="text/javascript" src="slide/engine1/wowslider.js"></script>
    <script type="text/javascript" src="slide/engine1/script.js"></script>

</body>

</html>
