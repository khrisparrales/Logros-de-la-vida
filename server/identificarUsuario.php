<?php 

if(isset($_GET['alias']) && isset($_GET['pass']) && isset($_GET['callback'])) {
	//Bibliotecas
	require 'DB.class.php';
	
	//Variables
	$sAlias = $_GET['alias'];
	$sPass = $_GET['pass'];
	$sSQL = 'SELECT id, count(id) AS numero FROM usuarios WHERE alias 
	= \'' . $sAlias . '\' AND password = \'' . $sPass . '\'';
	$miDB = new DB();
	$aFinal;

	//Obtener resultados
	$aRes = $miDB->obtenerResultado($sSQL);
	if($aRes[0]['numero'] > 0) {
		$aFinal = array('usuario' => $aRes[0]['id']);
	} else {
		$aFinal = array('usuario' => '0');
	}

	//Devuelve JSON
	header('Content-Type: application/json');
    echo $_GET['callback'] .'(' . json_encode($aFinal) . ')';
}

?>