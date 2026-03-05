<?php
session_start();

if(!isset($_SESSION['username'])){
header("Location:index.html");
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Welcome</title>

<style>

body{
font-family:Arial;
text-align:center;
margin-top:100px;
}

button{
padding:10px 20px;
background:#2f7edb;
color:white;
border:none;
}

</style>

</head>

<body>

<h1>Welcome <?php echo $_SESSION['username']; ?> 🎉</h1>

<br>

<a href="logout.php">
<button>Logout</button>
</a>

</body>
</html>