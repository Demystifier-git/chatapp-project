<?php 

if(isset($_COOKIE['username'])) {
  echo 'page2.html';
  exit;
}

echo false;