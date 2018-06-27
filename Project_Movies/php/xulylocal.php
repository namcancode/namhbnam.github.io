<?php

// CREATE TABLE IF NOT EXISTS `datafilm` (
//     `name` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `rate` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `link` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `img` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `season` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `eps` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `content` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `actor` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `director` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `category` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `country` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//    `tag` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
//     PRIMARY KEY (`name`)
//   ) ENGINE=INNODB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

// Nếu không phải là sự kiện đăng ký thì không xử lý
if (!isset($_POST['name'])) {
    die('');
}

//Nhúng file kết nối với database
include 'ketnoi.php';
// include 'ketnoilocal.php';

//Khai báo utf-8 để hiển thị được tiếng việt
header('Content-Type: text/html; charset=UTF-8');

//Lấy dữ liệu từ file dangky.php
$name = addslashes($_POST['name']);
$rate = addslashes($_POST['rate']);
$link = addslashes($_POST['link']);
$img = addslashes($_POST['img']);
$season = addslashes($_POST['season']);
$eps = addslashes($_POST['eps']);
$content = addslashes($_POST['content']);
$actor = addslashes($_POST['actor']);
$director = addslashes($_POST['director']);
$category = addslashes($_POST['category']);
$country = addslashes($_POST['country']);
$tag = addslashes($_POST['tag']);

//Lưu thông tin thành viên vào bảng
mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
@$adddata = mysql_query("
        INSERT INTO datafilm (
            name,
            rate,
            link,
            img,
            season,
            eps,
            content,
            actor,
            director,
            category,
            country,
            tag
        )
        VALUE (
            '{$name}',
            '{$rate}',
            '{$link}',
            '{$img}',
            '{$season}',
            '{$eps}',
            '{$content}',
            '{$actor}',
            '{$director}',
            '{$category}',
            '{$country}',
            '{$tag}'
        )
    ");
if ($adddata) {
    echo "Quá trình thêm data thành công <a href='/admin.php'>Về trang chủ</a>";
} else {
    echo "Có lỗi xảy ra trong quá trình upload data. <a href='/admin.php'>Thử lại</a>";
}
