<?php
error_reporting(0); 
header("Content-Type: text/html; charset=utf-8");
 if($_POST['cont']){
    $fh = fopen('a.txt',a); //打开文件
    //写入内容
    if($fh){
        $length = fwrite($fh,$_POST['cont'].'-'.$_POST['time'].$_POST['mes'].'留言'."\r\n");
        if($length){
            echo $_POST['cont'];
        }else{
            echo '写入失败';
        }
        fclose($fh);
    }else{
        echo '打开文件出错了';
    }
}
?>