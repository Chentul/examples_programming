<?php 

	$nombre = $_POST['nombre'];
	$mensaje = $_POST['mensaje'];
	$mail = $_POST['mail'];

	if( $mail != "" && $mensaje != "" && $nombre != "" ) {
		echo "true";
	}

 ?>