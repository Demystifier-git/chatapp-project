<?php 

$message =  file_get_contents('php://input');
$username = $_COOKIE['username'];

$safemessage = addslashes($message);

require_once 'db.php';

$conn = new mysqli($host, $user, $password, $database);

$result = $conn->query("SELECT id FROM users WHERE username = '$username'");
$username_id = $result->fetch_assoc()['id'];

$result = $conn->query("INSERT INTO messages (username_id, message) VALUES($username_id, '$safemessage')");
$conn->close();