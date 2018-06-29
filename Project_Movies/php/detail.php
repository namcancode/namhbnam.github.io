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
    <link rel="shortcut icon" href="img/favicon.ico" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="fonts/web-fonts-with-css/css/fontawesome-all.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/effect.css" />
    <link rel="stylesheet" href="css/detail.css" />
    <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
    <link rel="stylesheet" href="css/reponsive.css" />
    <meta content='180527869281283' property='fb:app_id'/>
    <meta content='100002686640082' property='fb:admins'/>
</head>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0&appId=180527869281283&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<body>
<?php
include 'header.php';
?>
    <section class="content">
        <div class="wrap">
            <div class="content__movies">
            </div>
            <div class="content__list">
                <div class="content__list">
                    <div class="list__title">
                        <a data-name="Phim Hot" onclick="categoryMovies(this)">
                            <p>Phim Liên Quan</p>
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
                        <a data-name="Phim Hot" onclick="categoryMovies(this)">
                            <p>Phim Hot</p>
                        </a>
                        <a data-name="Phim Hot" onclick="categoryMovies(this)" class="more">
                            <p>
                                Xem thêm
                            </p>
                        </a>
                    </div>
                    <div class="list--wrap col2 col">
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

</body>

</html>