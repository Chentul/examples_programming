<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<title>30. Tutorial jQuery: Peticiones con el método ajax</title>
	<link rel="stylesheet" type="text/css" href="estilos.css">
	<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div id="main">
		<h1>Formulario de Contacto</h1>
		<form action="formulario.php" name="fo" method="POST">
			<input id="name" type="text" name="nombre" placeholder="Nombre ..."/>
			<input id="mail" type="text" name="mail" placeholder="Correo electrónico ..."/>
			<textarea id="msg" name="mensaje" placeholder="Mensaje ..."></textarea>
			<div>
				<input type="submit" name="send" value="Enviar"/>
				<div id="status"></div>
			</div>
		</form>
	</div>
</body>
</html>