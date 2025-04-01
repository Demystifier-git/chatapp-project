<?php

require_once 'db.php';

$username = $_POST['username'];

if (
  preg_match('/[^a-zA-Z_0-9]/', $username) ||
  preg_match('/^\d+|\s+/', $username)
) {
  echo 'Letters and numbers only, must not begin with a number';
  exit;
}

if(!preg_match('/^[a-zA-Z0-9_]{5,10}$/', $username)) {
  echo '5 to 10 characters long';
  exit;
}

$conn = new mysqli($host, $user, $password, $database);

$result = $conn->query("SELECT username FROM users WHERE username = '$username'");

$conn->close();

if ($result && $result->num_rows > 0) {
  echo 'Username already exists, try another.';
  exit;
}

echo 'Username is available';
