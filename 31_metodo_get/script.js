/* el método get solo obtiene datos de otro archivo como puede ser, php,json,csharp, etc ... 
pero nunca de una forma destructiva las cuales son, modificar los datos del archivo externo,
agregar datos, etc ..*/
$(document).on('ready', function() {

	// $.get('archivo_externo.php', function( data ) {
	// 	$('#receptor').html( data );
	// 	console.log( data );
	// });
	/* esta forma se utiliza en dado caso que necesitemos enviar parametros */
	$.get('archivo_externo.php',{nombre: "World!"}, function( data ) {
		$('#receptor').html( data );
	});
});