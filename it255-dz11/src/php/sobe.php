<?php

header("Access-Control-Allow-Origin: *");
$sobe = array(

		array('id' => '1', 'tip' => 'trokrevetna', 'sprat' => 'prvi', 'cena' => '200'),
		array('id' => '2', 'tip' => 'dvokrevetna', 'sprat' => 'drugi', 'cena' => '400'),
		array('id' => '3', 'tip' => 'trokrevetna', 'sprat' => 'treci', 'cena' => '500')
		);
		echo json_encode($sobe);

?>

