<?php 

if(isset($_GET['usuario'])) {
	//Bibliotecas
	require 'DB.class.php';
	
	//Variables
	$iIdUsu = $_GET['usuario'];
	$sSQLLogros = 'SELECT id, titulo, descripcion, icono FROM logros';
	$sSQLSelec = 'SELECT id_logro FROM realizaron WHERE id_usuario = ' . $iIdUsu;
	$miDB = new DB();
	$aFinal;

	//Obtiene logros
	$aFinal = $miDB->obtenerResultado($sSQLLogros);

	//Obtiene los seleccionados
	$aSelec = $miDB->obtenerResultado($sSQLSelec);

	//Mezcla los seleccionados
	foreach ($aFinal as $key => $value) {
		//Añade un nuevo campo
		$aFinal[$key]['realizaron'] = 0;
		foreach($aSelec as $key2 => $value2) {
			if($value2['id_logro'] == $aFinal[$key]['id']) {
				$aFinal[$key]['realizaron'] = 1;
			}
		}
	}

	//Devuelve JSON
	header('Content-Type: application/json');
    echo $_GET['callback'] .'(' .json_encode($aFinal) . ')';
}

?>