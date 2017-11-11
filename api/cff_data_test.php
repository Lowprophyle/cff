<?php

// this file (PHP) will return the data from the database.

//setting header to json
header('Content-Type: application/json');
//initializer of connection
$servername = "127.0.0.1";
$username = "newuser";
$password = "";
$dbname = "cffbase";

// Create connection with initials above
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//query to get Agr_Ecol_Opt_Temp_Min
$sql = "SELECT 'Sci Name' ,'Agr Ecol Opt Temp Min','Agr Ecol Opt Temp Max', 'Agr Ecol Abs Temp Min','Agr Ecol Abs Temp Max'
  FROM prototype";
if ($conn->query($sql){

$result = $conn->query($sql);
  printf("Errormessage: %s\n", $conn->error);
}
//storing data as array
$data = array();
//php for loop to assign values to data array
foreach ($result as $row) {
	$data[] = $row;
}

$conn->close();
print json_encode($data);
?>
