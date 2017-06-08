<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');  
include("funkcije.php");
 
if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])){
    
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

echo register($username, $password, $ime, $prezime, $email);
 
}
?>