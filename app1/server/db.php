<?php

require_once 'utility.php';

list($host, $user, $password, $database) = preg_split("/\|/", GET('https://obaro.webze.eu.org/confi/confidential.txt'));
