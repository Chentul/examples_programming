<!DOCTYPE html>
<html> 
<head>
<title>Ejemplo sencillo de AJAX</title>
<style>
        input {
                margin: 10px 0px;
        }
</style>
</head>
 
<body>
 
Introduce valor 1
 
<input type="text" name="caja_texto" id="valor1" value="0"/> 
 
 <br />
 
Introduce valor 2
 
<input type="text" name="caja_texto" id="valor2" value="0"/>
 
<br />

Realiza suma
 
<input type="button" id="push" value="Calcula"/>
<!-- <input type="button" href="javascript:;" onclick="realizaProceso($('#valor1').val(), $('#valor2').val());return false;" value="Calcula"/> -->
 
<br/>
 
Resultado: <span id="resultado">0</span>

<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="script.js"></script>

</body>
 
</html>