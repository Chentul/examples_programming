<?php 

	$nombre = $_POST['nombre'];
	$mensaje = $_POST['mensaje'];
	$mail = $_POST['mail'];

	if( $mail != "" && $mensaje != "" && $nombre != "" ) {
		echo 1;
	}
	else {
		echo 0;
	}

 ?>