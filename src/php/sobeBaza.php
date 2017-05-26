<?php 
header("Access-Control-Allow-Origin: *");
require_once("konekcija.php");
$stmt = $con->prepare("SELECT tip,sprat,cena FROM soba");
$stmt->execute();
while($data = $stmt->fetch()) {
    $nesto[] = array('tip' => $data["tip"], 'sprat' => $data["sprat"], 'cena' => $data["cena"]);
        
}
echo json_encode($nesto);
?>