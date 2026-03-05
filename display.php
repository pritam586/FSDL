<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fsdlass4";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query
$sql = "SELECT * FROM students_registration";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Students Registration Data</title>
    <style>
        table{
            border-collapse: collapse;
            width: 80%;
            margin: auto;
        }
        th, td{
            border:1px solid black;
            padding:10px;
            text-align:center;
        }
        th{
            background-color:#f2f2f2;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Students Registration Records</h2>

<table>
<tr>
    <th>Roll No</th>
    <th>Full Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Password</th>
</tr>

<?php
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
        <td>".$row['roll_no']."</td>
        <td>".$row['full_name']."</td>
        <td>".$row['email']."</td>
        <td>".$row['phone_number']."</td>
        <td>".$row['password']."</td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='5'>No records found</td></tr>";
}
$conn->close();
?>

</table>

</body>
</html>