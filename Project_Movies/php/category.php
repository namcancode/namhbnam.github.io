<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Phim Đây Rồi || Xem Phim Online || Phim HD miễn phí || Cinema</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/effect.css" />
    <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
    <link rel="stylesheet" href="css/reponsive.css" />
</head>

<body>

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
                        <img src="slide/data1/images/slide4.jpg" alt="slideshow javascript" title="" id="wows1_3" />
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
                    <a href="index.php">
                        <p>Trang Chủ</p>
                    </a>
                </div>
                <div class="list--wrap col" id="here">
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
    <?php
include 'footer.php';
?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <script src="js/javascript.js"></script>
    <script src="js/card.js"></script>
    <!-- slide wow -->
    <script type="text/javascript" src="slide/engine1/wowslider.js"></script>
    <script type="text/javascript" src="slide/engine1/script.js"></script>

</body>

</html>