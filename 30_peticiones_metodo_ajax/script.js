$(document).on('ready', function() {

	var peticion = $('#main form').attr('action');
	var metodo = $('#main form').attr('method');
	var nombre, correo, mensaje;

	$('#main form').on('submit', function( e ) {

		e.preventDefault(); // previene el evento por defecto del formulario

		$.ajax({
			/* este fragmento de código se ejecuta antes de que enviemos la petición al servidor */
			beforeSend: function() {
				/* preloader (lo encuentras en los plugins en jQuery) */
				//$('#status').spin({radius:3,width:2,height:2,length:4});
				/* recupera los datos insertados en las cajas de texto del formulario en forma de string */
				/* estos valores los utilizamos para crear nuestro objeto json xx2*/
				// nombre = document.getElementById('name');
				// correo = document.getElementById('mail')
				// mensaje = document.getElementById('msg');
			}, /* todas las propiedades de un objeto de json van separadas por comas */
			url: peticion,
			type: metodo,
			/* recupera toda la información del formulario en un objeto de tipo json xx2 */
			/* en dado caso que nosotros creemos el objeto json la idea seria hacerlo asi */
			// data: {
			// 	name: nombre,
			// 	mail: correo,
			// 	message: mensaje
			// },
			data: $("#main form").serialize(),
			/* respuesta de la petición */
			sucess: function ( respuestaServidor ) {
				$('#status').text('OK!');
				console.log( respuestaServidor );
			},
			/* trae 3 parametros por default los cuales son:
				jquery xml httpre quest,
				estado de la petición,
				error retornado */
			error: function( jqXHR, estado, error ) {
				$('#status').text('Error!');
				console.log( estado );
				console.log( error );
			},
			/* se ejecuta despues de ejecutar sucess o error */
			complete: function( jqXHR, estado) {
				$('#status').text('Complete!');
				console.log( estado );
			},
			/* fijamos el tiempo maximo de la espera de la respuesta del servidor (opcional) */
			timeout: 50000 // miliseconds
		});// fin del metódo ajax
	});

});