<?php
header('Content-Type: text/html; charset=UTF-8');
include 'ketnoi.php';
//Kiểm tra tên đăng nhập có tồn tại không
mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$result = mysql_query("SELECT * FROM datafilm");
// while ($row = mysql_fetch_object($result)) {
//     echo $row->name;
// }
//Lấy data trong database ra
// $row = mysql_fetch_array($query);
// echo $row;

while ($row = mysql_fetch_object($result)) {
    $a = $row->name;
}
// echo mysql_result($result);
//So sánh 2 mật khẩu có trùng khớp hay không
?>
<script type="text/javascript">
let data = "<?php echo $row; ?>";
</script>
