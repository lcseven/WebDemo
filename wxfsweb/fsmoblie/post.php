<?php
error_reporting(0); 
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
switch($_POST['act']){  
    case 'add':
    echo $_POST['tel'];
    $content = $_POST['tel'];
    $tip = $_POST['tip'];
    $t = time();
    
    $sql = "INSERT INTO message (ID, num, tip, posttime) VALUES(0, '{$content}','{$tip}','{$t}')";
     mysql_connect('localhost','root','');
     mysql_select_db('moblie');
     mysql_query("SET NAMES UTF8");
     mysql_query($sql);
     break;
}

?>