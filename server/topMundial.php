<?php 

if(isset($_GET['callback'])) {
	//Bibliotecas
	require 'DB.class.php';
	
	//Variables
	$sSQL = 'SELECT usuarios.id, usuarios.alias, count(realizaron.id_usuario) AS num_logros FROM realizaron, usuarios WHERE realizaron.id_usuario = usuarios.id GROUP BY realizaron.id_usuario ORDER BY count(realizaron.id_usuario) DESC LIMIT 0, 100';
	$miDB = new DB();
	$aFinal;

	//Obtiene logros
	$aFinal = $miDB->obtenerResultado($sSQL);

	//Devuelve JSON
	header('Content-Type: application/json');
    echo $_GET['callback'] .'(' .json_encode($aFinal) . ')';
}

?>