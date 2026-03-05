<?php
session_start();

$conn = new mysqli("localhost","root","","fsdlass4");

$email=$_POST['email'];
$password=$_POST['password'];

$sql="SELECT * FROM students_registration 
WHERE email='$email' AND password='$password'";

$result=$conn->query($sql);

if($result->num_rows>0){

$row=$result->fetch_assoc();

$_SESSION['username']=$row['full_name'];

header("Location:welcome.php");

}
else{

echo "Invalid Email or Password";

}

$conn->close();

?>