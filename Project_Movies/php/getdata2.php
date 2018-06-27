<?php
header('Content-Type: text/html; charset=UTF-8');
include 'ketnoi.php';
//Kiểm tra tên đăng nhập có tồn tại không
mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$result = mysql_query("SELECT * FROM datafilm");
$result_array = array();
while ($row = mysql_fetch_assoc($result)) {
    $result_array[] = $row;
}
$json_array = json_encode($result_array);
echo $json_array;
