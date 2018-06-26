<?php

// Nếu không phải là sự kiện đăng ký thì không xử lý
if (!isset($_POST['Username'])) {
    die('');
}

//Nhúng file kết nối với database
include 'ketnoi.php';

//Khai báo utf-8 để hiển thị được tiếng việt
header('Content-Type: text/html; charset=UTF-8');

//Lấy dữ liệu từ file dangky.php
$username = addslashes($_POST['Username']);
$password = addslashes($_POST['Password']);
$avatar = addslashes($_POST['Avatar']);

//Kiểm tra người dùng đã nhập liệu đầy đủ chưa
if (!$username || !$password) {
    echo "Vui lòng nhập đầy đủ thông tin. <a href='javascript: history.go(-1)'>Trở lại</a>";
    exit;
}
if ($username . length > 30) {
    echo "vui lòng nhập tài khoản không quá 30 ký tự. <a href='javascript: history.go(-1)'>Trở lại</a>";
    exit;
}
// Mã khóa mật khẩu
$password = md5($password);

//Kiểm tra tên đăng nhập này đã có người dùng chưa
if (mysql_num_rows(mysql_query("SELECT username FROM member WHERE username='$username'")) > 0) {
    echo "Tên đăng nhập này đã có người dùng. Vui lòng chọn tên đăng nhập khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
    exit;
}

//Lưu thông tin thành viên vào bảng
@$addmember = mysql_query("
        INSERT INTO member (
            username,
            password,
            avatar
        )
        VALUE (
            '{$username}',
            '{$password}',
            '{$avatar}'
        )
    ");

//Thông báo quá trình lưu
if ($addmember) {
    echo "Quá trình đăng ký thành công. <a href='/'>Về trang chủ</a>";
} else {
    echo "Có lỗi xảy ra trong quá trình đăng ký. <a href='index.php'>Thử lại</a>";
}
