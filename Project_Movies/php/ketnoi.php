<?php
    $ketnoi['host'] = 'localhost'; //Tên server, nếu dùng hosting free thì cần thay đổi
    $ketnoi['dbname'] = 'k8596bant_phim'; //Đây là tên của Database
    $ketnoi['username'] = 'k8596bant_phim'; //Tên sử dụng Database
    $ketnoi['password'] = 'phimdayroi';//Mật khẩu của tên sử dụng Database
    @mysql_connect(
        "{$ketnoi['host']}",
        "{$ketnoi['username']}",
        "{$ketnoi['password']}")
    or
        die("Không thể kết nối database");
    @mysql_select_db(
        "{$ketnoi['dbname']}")
    or
        die("Không thể chọn database");
?>