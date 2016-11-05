<?php
error_reporting(0); 
header("Content-type:text/html;charset=utf-8");
if($_POST['tel']){
      echo $_POST['tel'];
     $fh = fopen('tel.txt',a);
    if($fh){
        $length = fwrite($fh,$_POST['tel'].'--'.$_POST['time'].'九度魅眼'."\r\n");
        fclose($fh);
    }else{
        echo '打开文件出错了';
    }
    
}else{
    echo '没有接受到数据';
}

?>