<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据查询</title>
    <style>
        ul {list-style: none}
    </style>
</head>
<body>
<?php
error_reporting(0); 
date_default_timezone_set('PRC');
header("Content-type:text/html;charset=utf-8");
$sql = "SELECT ID, num, tip, posttime FROM message";
 mysql_connect('localhost','root','');
 mysql_select_db('moblie');
 mysql_query("SET NAMES UTF8");
 $res = mysql_query($sql);
 
?>  
<ul>
  <?php while($row=mysql_fetch_row($res)) {?>
  <li><?php 
        $tt = date("Y-m-d H:i:s",$row[3]);
        echo $row[1].'-'.$row[2].'-'.$tt; ?></li>
  <?php } ?>
</ul>
</body>
</html>
