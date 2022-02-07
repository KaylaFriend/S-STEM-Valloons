<?php

session_start();

define('DB_NAME', 'valloons_dev');
define('DB_USER', 'valloons');
define('DB_PASS', 'valloons123');
define('DB_HOST', 'localhost');
define('DB_PORT', 3306); 
define('TITLE', 'Valloons');

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT) or die("Could not connect to the database.");

?>
