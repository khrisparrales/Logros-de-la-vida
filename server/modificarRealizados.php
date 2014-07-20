<?php 

if(isset($_GET['usuario']) && isset($_GET['logro']) && isset($_GET['realizado'])) {
	//Bibliotecas
	require 'DB.class.php';
	
	//Variables
	$iIdUsu = $_GET['usuario'];
	$iIdLog = $_GET['logro'];
	$iReal = $_GET['realizado'];
	$sSQLInsertar = "INSERT INTO realizaron VALUES ('$iIdUsu', '$iIdLog')";
	$sSQLBorrar = "DELETE FROM realizaron WHERE id_usuario = $iIdUsu AND id_logro = $iIdLog";
	$miDB = new DB();

	if($iReal == 1) {
		$miDB->ejecutarQuery($sSQLInsertar);
	} else {
		$miDB->ejecutarQuery($sSQLBorrar);
	}

	//Devuelve JSON
	header('Content-Type: application/json');
	$aRespuesta = array('ok');
    echo $_GET['callback'] .'(' .json_encode($aRespuesta) . ')';
}

?>