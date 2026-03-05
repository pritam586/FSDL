<?php

$conn = new mysqli("localhost","root","","fsdlass4");

if($conn->connect_error){
die("Connection Failed");
}

$name=$_POST['full_name'];
$email=$_POST['email'];
$phone=$_POST['phone_number'];
$password=$_POST['password'];

if(strlen($name) < 3){
die("Name must be 3 characters");
}

if(strlen($phone) != 10){
die("Phone must be 10 digits");
}

if(strlen($password) < 6){
die("Password must be 6 characters");
}

$sql="INSERT INTO students_registration(full_name,email,phone_number,password)
VALUES('$name','$email','$phone','$password')";

if($conn->query($sql)){
header("Location:index.html");
}
else{
echo "Error: ".$conn->error;
}

$conn->close();

?>