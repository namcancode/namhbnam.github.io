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
    <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
    <link rel="stylesheet" href="css/reponsive.css" />
</head>
<style>
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.formpush {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
.adminhell {
    padding:50px 30px;
}
</style>
<body>
<?php
include 'header.php';
?>

    <div class="adminhell">
        <form  action='xulylocal.php' method="post"  id="myForm">
        <label for="name">Tên Phim</label>
        <input type="text" id="name" name="name" placeholder="Avenger">

        <label for="rate">Đánh giá</label>
        <input type="text" id="rate" name="rate" value="8.10 (9100 lượt)">

        <label for="link">Link Phim</label>
        <input type="text" id="link" name="link" value="http://phimdayroi.ga/img/phimdayroi.mp4">

        <label for="img">Ảnh bìa 300x300</label>
        <input type="text" id="img" name="img" placeholder="http://image.phimmoi.net/film/6888/poster.medium.jpg">

        <label for="season">Số Season</label>
        <input type="text" id="season" name="season" value="1">

        <label for="eps">Số tập</label>
        <input type="text" id="eps" name="eps"  value="1">

        <label for="content">Nội dung phim</label>
        <input type="text" id="content" name="content" placeholder="phim rất hay">

        <label for="actor">Diễn viên</label>
        <input type="text" id="actor" name="actor" placeholder="Tomcruis">

        <label for="director">Đạo diễn</label>
        <input type="text" id="director" name="director" placeholder="Eric Radomskiz">

        <label for="category">Thể loại</label>
        <input type="text" id="category" name="category" placeholder="Khoa học viễn tưởng, phim hành động">

        <label for="country">Quốc gia</label>
        <input type="text" id="country" name="country" placeholder="Mỹ">

        <label for="tags">Tag</label>
        <input type="text" id="tag" name="tag" placeholder="avenger">

        <input type="submit" value="Submit" id="btn">
        </form>
    </div>

</form>


 <?php
include 'footer.php';
?>
    <script src="js/data.js"></script>
    <script src="js/javascript.js"></script>
    <script src="js/card.js"></script>
    <!-- jQuery JS 3.1.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!-- jQuery UI JS 1.12.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <!-- slide wow -->
    <script type="text/javascript" src="slide/engine1/wowslider.js"></script>
    <script type="text/javascript" src="slide/engine1/script.js"></script>
</body>
</html>