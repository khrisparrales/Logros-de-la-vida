
/**
 * Método que comprueba si un campo está vacío
 * @param  {String} insText
 * @return {boolean}
 */
function isVacio(insText) {
	var bVacio = false
	if( insText == null || insText.length == 0 || /^\s+$/.test(insText)) bVacio = true
	return bVacio
}

/**
 * Método que comprueba si el email es válido
 * @param  {String}  insText
 * @return {Boolean}
 */
function isCorreo(insText) {
	var bVacio = true
	var sExpr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!sExpr.test(insText)) bVacio = false
	return bVacio
}