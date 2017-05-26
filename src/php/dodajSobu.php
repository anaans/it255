<?php 
header("Access-Control-Allow-Origin: *");
require_once("konekcija.php");
if ( isset($_POST['tip']) && isset($_POST['sprat']) && isset($_POST['cena'])) {
    $tip = $_POST['tip'];
	$sprat = $_POST['sprat'];
	$cena = $_POST['cena'];
    
	
    $stmt = $con->prepare("INSERT INTO soba (tip, sprat,cena) VALUES (:tip, :sprat, :cena)");
	$stmt->bindParam(":tip", $tip);
    $stmt->bindParam(":sprat", $sprat);
    $stmt->bindParam(":cena", $cena);
    
    
    $stmt->execute();
    echo "Uspesan upis";
		
}
?>