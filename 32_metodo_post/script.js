$(document).on('ready', function() {

	var pet = $('#main form').attr('action');
	var met = $('#main form').attr('method');

	$('#main form').on('submit', function( e ) {

		e.preventDefault();

		var info = $('#main form').serialize();
		//pet = "formulario.php";
		
		/* opcion 1 */
		// $.post( pet, info, function( resp, estado, jqXHR ) {
		// 	console.log( resp );
		// 	console.log( estado );
		// 	console.log( jqXHR );
		// });

		/* opcion 2*/
		// $.post( pet, info ).error( function() {
		// 	console.log( "Error" );
		// }).success( function( resp, estado, jqXHR ) {
		// 	console.log( resp );
		// 	console.log( estado );
		// 	console.log( jqXHR );
		// });
	
		/* opcion 3*/
		$.post('index.php', function( resp ) {
			console.log( resp );
		});
	});
});