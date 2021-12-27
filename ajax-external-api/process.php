<?php
echo 'Processing...';

if(isset($_GET['name'])){
    echo 'GET: your name is '. $_GET['name'];
}
//check for post...
if(isset($_POST['name'])){
    echo 'POST: your name is '. $_POST['name'];
}