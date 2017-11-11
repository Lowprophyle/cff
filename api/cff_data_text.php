<html>
<body>
<?php
// this file (PHP) will return the data from the database.

//setting header to json
echo "test success";
echo "hahaha";
header('Content-Type: application/json');
//initializer of connection
$servername = "10.142.0.2";$username = "newuser";$password = "";$dbname = "cffbase";
echo "heeh";
// Check connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
 echo "connection good";
}

echo "ggwp";

?>
</body>
</html>
