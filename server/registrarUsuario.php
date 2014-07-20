<?php 

if(isset($_GET['alias']) && isset($_GET['pass']) && isset($_GET['email']) && isset($_GET['callback'])) {
	//Bibliotecas
	require 'DB.class.php';
	
	//Variables
	$sAlias = trim($_GET['alias']);
	$sPass = trim($_GET['pass']);
	$sCorreo = trim($_GET['email']);
	$sSQL = 'SELECT id, count(id) AS numero FROM usuarios WHERE alias 
	= \'' . $sAlias . '\'';
	$miDB = new DB();
	$aFinal;

	//Obtener resultados
	$aRes = $miDB->obtenerResultado($sSQL);
	if($aRes[0]['numero'] == 0) {
		//Nombre libre
		$sSQL = "INSERT INTO usuarios VALUES (NULL, '$sAlias', '$sPass', '$sCorreo')";
		$miDB->ejecutarQuery($sSQL);
		$iId = $miDB->getLastId();
		$aFinal = array('usuario' => $iId);
	} else {
		$aFinal = array('usuario' => '0');
	}

	//Devuelve JSON
	header('Content-Type: application/json');
    echo $_GET['callback'] .'(' . json_encode($aFinal) . ')';
}

?>