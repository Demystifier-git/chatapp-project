<?php 

require_once 'db.php';

$conn = new mysqli($host, $user, $password, $database);
$result = $conn->query("SELECT users.username, messages.message, messages.timestamp FROM messages INNER JOIN users ON messages.username_id = users.id ORDER BY messages.timestamp DESC LIMIT 10");

if(!$result){
  echo $conn->error;
  exit;
} else {
  if($result->num_rows > 0) {
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    $rows = json_encode($rows);

    echo $rows;
  } else {
    echo false;
  }
}


