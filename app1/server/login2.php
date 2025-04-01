<?php

require_once 'db.php';

$username = $_POST['username'];

// add user
$conn = new mysqli($host, $user, $password, $database);
$result = $conn->query("INSERT INTO users (username) VALUES('$username')");

if(!$result) {
  echo $conn->error;
  exit;
}

// set-cookie
setcookie("username", $username, time() + (60 * 60 * 24 * 365), "/");

// respond
echo json_encode(['redirect' => 'page2.html']);

$conn->close();
