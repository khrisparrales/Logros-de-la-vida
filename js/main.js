$(document).ready(function() {

	//Variables
	var sURLSer = 'http://andros-films.com/server-LogrosDeLaVida/';
	var $cajaLogros = $('#cajaLogros')
	var $cajaForm = $('#cajaForm')
	var $cajaCrearCuenta = $('#cajaCrearCuenta')
	var $sinRed = $('#sinRed')
	var $enlaceCerrar = $('#enlaceCerrar')
	var $enlaceEntrar = $('#botonEntrar')
	var $alias = $('#alias')
	var $pass = $('#pass')
	var $enlaceCrearCuenta = $('#botonCrearCuenta')
	var $botonReconectar = $('#botonReconectar')
	var $botonRegistrarse = $('#botonRegistrarse')
	var iUsuario = localStorage.getItem('sesion')

	//Métodos

	/**
	 * Método que cambia en la base de datos el estado del logro
	 * realizado
	 * @param  {Int} iniLogro  
	 * @param  {Int} iniRea
	 */
	function cambiarLogroRealizado(iniLogro, iniRea) {
		$.ajax({
		    url: sURLSer + 'modificarRealizados.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {
		    	'usuario' : iUsuario,
		    	'logro' : iniLogro,
		    	'realizado' : iniRea
		    },
		    success: function (respuesta) {
				var aRespuesta = jQuery.makeArray(respuesta);
						
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				mostrarMensSinRed()
				console.log(textStatus + ': ' + errorThrown.message); 
			}
		})
	}

	/**
	 * Muestra mensaje sin red
	 */
	function mostrarMensSinRed() {
		$cajaLogros.html('')
		$cajaForm.html('')
		$cajaCrearCuenta.html('')
		var sHTMLSinRed = '<i class="fa fa-thumbs-down"></i> <h2>No estas conectado a internet</h2>' +
            '<p>' +
                '<button class="btn btn-default" id="botonReconectar">Reintentar</button>' +
            '</p>'
		$sinRed.html(sHTMLSinRed)
		$sinRed.css('display', 'block')
	}

	/**
	 * Método que devuelve los logros
	 * @param  {int} iniId     Id del usuario
	 * @param  {String} insIdHTML Id del div donde se imprimirá
	 */
	function obtenerLogros() {
		$.ajax({
		    url: sURLSer + 'obtenerLogros.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {
		        'usuario' : iUsuario
		    },
		    success: function (respuesta) {
				var sHTML = '';
				var aLogros = jQuery.makeArray(respuesta);
				for(var aColum in aLogros) {
					sHTML = generarHTMLLogro(aLogros[aColum]['id'], aLogros[aColum]['titulo'], aLogros[aColum]['descripcion'], aLogros[aColum]['icono'], aLogros[aColum]['realizaron']);
					$cajaLogros.append(sHTML);
				}
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				mostrarMensSinRed()
				console.log(textStatus + ': ' + errorThrown.message); 
			}
		})
	}

	/**
	 * Método que genera el HTML de los logros
	 * @param  {String} insTitulo Título
	 * @param  {String} insDecr   Descripcion
	 * @param  {String} insIcon   Icono
	 * @param  {String} insReal   0 -> No realizado, 1 -> Realizado
	 * @return {String}           HTML
	 */
	function generarHTMLLogro(iniId, insTitulo, insDecr, insIcon, insReal) {
		console.log(insDecr)
		var sOn = '';
		var sOff = '';
		var sIconDes = '';
		var sClassAct = 'btn-primary active';
		var sClassRes = 'btn-default';
		var sClassIconDes = 'desactivado';
		if(insReal == 1) {
			sOn = sClassAct
			sOff = sClassRes
			sIconDes = sClassIconDes
		} else {
			sOn = sClassRes
			sOff = sClassAct
		}
		var sHTMLFin = '<div class="col-xs-12 itemLogro ' + sIconDes + '" item="' + iniId + '">' +
                '<div class="panel panel-default">' +
                  '<div class="panel-heading"><div class="col-xs-6">' +
                   ' <h2 class="panel-title">' + insTitulo + '</h2></div>' +
                   '<div class="col-xs-6"><div class="cajaBotones">' +
				    	'<div class="btn-group btn-toggle"> ' +
					    '<button class="btn btn-md ' + sOn + '">Si</button>' +
					   ' <button class="btn btn-md ' + sOff + '">No</button>' +
					  '</div></div>' +
				  '</div>' +
                  '</div>' +
                  '<div class="panel-body">' +
                  '<div class="col-xs-3"><div class="cajaIcono">' +
                   ' <i class="fa fa-' + insIcon + '"></i>' +
               		' </div></div><div class="col-xs-9">' + insDecr + '</div></div>' + '</div>' +
            '</div>';
        return sHTMLFin;
	}

	/**
	 * Método que cambia el estado el botón
	 * @param  {JQuery} $item
	 */
	function cambiarBoton($item) {
		//Cambia estilos
	    $item.find('.btn').toggleClass('active');  
	    var $cajaItem = $item.parent().parent().parent().parent().parent()
	    $cajaItem.toggleClass('desactivado')
	    if($item.find('.btn-primary').size() > 0) {
	    	$item.find('.btn').toggleClass('btn-primary');
	    }
	    if($(this).find('.btn-danger').size() > 0) {
	    	$item.find('.btn').toggleClass('btn-danger');
	    }
	    if($item.find('.btn-success').size() > 0) {
	    	$item.find('.btn').toggleClass('btn-success');
	    }
	    if($(this).find('.btn-info').size() > 0) {
	    	$item.find('.btn').toggleClass('btn-info');
	    }
	    $item.find('.btn').toggleClass('btn-default');
		//Cambia en base de datos
		if($cajaItem.hasClass('desactivado')) {
			cambiarLogroRealizado($cajaItem.attr('item'), 1)
		} else {
			cambiarLogroRealizado($cajaItem.attr('item'), 0)
		}
	}

	/**
	 * Método que obtiene los marcadores mundiales
	 */
	function obtenerTopMundial() {
		$.ajax({
		    url: sURLSer + 'topMundial.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {},
		    success: function (respuesta) {
				var sHTML = ''
				var iCont = 1
				var aClasificados = jQuery.makeArray(respuesta);
				var $cajaTopMun = $('#cajaTopMundial').find('tbody');
				for(var aColum in aClasificados) {
					sHTML = generarHTMLMundial(iCont, aClasificados[aColum]['alias'], aClasificados[aColum]['num_logros']);
					$cajaTopMun.append(sHTML)
					iCont++
				}
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				mostrarMensSinRed()
				console.log(textStatus + ': ' + errorThrown.message); 
			}
		})	
	}

	/**
	 * Método que identifica al usuario. En caso de fallar 
	 * avisa; o en caso contrario redirecciona a logros.html
	 */
	function identificarUsuario() {
		$enlaceEntrar.text('')
		$enlaceEntrar.addClass('cargaBoton')
		$.ajax({
		    url: sURLSer + 'identificarUsuario.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {
		        'alias' : $alias.val(),
		        'pass' : $pass.val() 
		    },
		    success: function (respuesta) {
				var aRespu = jQuery.makeArray(respuesta)
				var iIdUsur = aRespu[0]['usuario'];
				if(iIdUsur > 0) {
					//Logeo
					localStorage.setItem('sesion', iIdUsur);
					$(location).attr('href', 'logros.html');
				} else {
					//Login incorrecto
					$enlaceEntrar.removeClass('cargaBoton')
					$enlaceEntrar.text('Incorrecto: reintentar')
				}
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				mostrarMensSinRed()
				console.log(textStatus + ': ' + errorThrown.message)
			}
		})
	}

	/**
	 * Método que genera el html de la tabla de top mundial
	 * @param  {Int} iniCont    Contador de 1 a 100
	 * @param  {String} insAlias   Nombre o alias
	 * @param  {String} iniNumLogr Número de logros conseguidos
	 * @return {String}            HTML
	 */
	function generarHTMLMundial(iniCont, insAlias, iniNumLogr) {
		var sHTML = '<tr>' +
                        '<td>' + iniCont + '</td>' +
                        '<td>' + insAlias + '</td>' +
                        '<td>' + iniNumLogr + '</td>' +
                    '</tr> '
		return sHTML;
	}

	function validarCrearCuenta() {
		var sHTMLVal = '';
		var $alias = $('#alias')
		var $pass1 = $('#pass1')
		var $pass2 = $('#pass2')
		var $correo = $('#correo')
		var $cajaMens = $('#mensajesError')

		//Quitar mensajes
		$cajaMens.removeClass('alert alert-danger')
		$cajaMens.text('')
		$alias.removeClass('errorForm')
		$pass1.removeClass('errorForm')
		$pass2.removeClass('errorForm')
		$correo.removeClass('errorForm')

		//Comprobar vacío Alias
		if(isVacio($alias.val())) {
			sHTMLVal += '-Alias es obligatorio.\n'
			$alias.addClass('errorForm')
		}

		//Comprobar vacío Pass1
		if(isVacio($pass1.val())) {
			sHTMLVal += '-Contraseña es obligatorio.\n'
			$pass1.addClass('errorForm')
		}

		//Comprobar vacío Pass2
		if(isVacio($pass2.val())) {
			sHTMLVal += '-Contraseña es obligatorio.\n'
			$pass2.addClass('errorForm')
		}

		//Comprobar vacío email
		if(isVacio($correo.val())) {
			sHTMLVal += '-Email es obligatorio.\n'
			$correo.addClass('errorForm')
		}

		//Comprobar si las contraseñas son iguales
		if($pass1.val() != $pass2.val()) {
			sHTMLVal += '-Las contraseñas no coinciden.\n'
			$pass1.addClass('errorForm')
			$pass2.addClass('errorForm')
		}

		//Comprobar si el email tiene un formato correcto
		if(!isCorreo($correo.val())) {
			sHTMLVal += '-El e-mail no es válido.\n'
			$correo.addClass('errorForm')
		}

		//Mostrar mensajes
		if(sHTMLVal != '') {
			$cajaMens.addClass('alert alert-danger')
			$cajaMens.text(sHTMLVal)
		} else {
			//Comprueba si el alias esta libre
			$.ajax({
		    url: sURLSer + 'registrarUsuario.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {
		        'alias' : $alias.val(),
		        'pass' : $pass1.val(),
		        'email' : $correo.val()
		    },
		    success: function (respuesta) {
				var aRespu = jQuery.makeArray(respuesta)
				var iIdUsur = aRespu[0]['usuario'];
				if(iIdUsur > 0) {
					//Registro
					localStorage.setItem('sesion', iIdUsur);
					$(location).attr('href', 'logros.html');
				} else {
					//Login incorrecto
					$cajaMens.addClass('alert alert-danger')
					$cajaMens.text('-El Alias ya está utilizado.')
					$alias.addClass('errorForm')
				}
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				mostrarMensSinRed()
				console.log(textStatus + ': ' + errorThrown.message)
			}
		})
		}
	}

	/**
	 * Método que refresca página actual
	 */
	function refrescarPagActual() {
		location.reload();
	}

	/**
	 * Método que entra si la sesión existe
	 */
	function entrarSessionAbierta() {
		if(localStorage.getItem('sesion')) {
			$(location).attr('href', 'logros.html');
		}
	}

	/**
	 * Método que cierra la sesion
	 */
	function cerrarSession() {
		localStorage.setItem('sesion', '');
		$(location).attr('href', 'index.html');
	}

	/** 
	 * Controlador
	 */
	//Botones On/Off
	$cajaLogros.on( 'click', '.btn-toggle', function() {
		cambiarBoton($(this))
	});
	//Botón de reconectar
	$sinRed.on( 'click', '#botonReconectar', function() {
		refrescarPagActual()
	});
	//Botón de cerrar sesión
	$enlaceCerrar.on( 'click', function() {
		cerrarSession()	
	});
	//Botón de logeo
	$enlaceEntrar.on('click', function() {
		identificarUsuario()
	});
	//Botón de registrarse
	$botonRegistrarse.on('click', function() {
		validarCrearCuenta()
	});

	/**
	 * Main
	 */
	eval(main)
	FastClick.attach(document.body);
	
});
