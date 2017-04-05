$('#push').on('click', function( e ) {
        e.preventDefault();
        console.log( 'se presiono el boton calcular' );
        var x = $('#valor1').val();
        var y = $('#valor2').val();
        if( x != "" && y != "" ) {
                realizaProceso( x, y );
        }
        else {
                realizaProceso( 0, 0 );
        }
});
function realizaProceso( valorCaja1, valorCaja2 ){
        /* arreglo asociativo el cual obtiene los datos del las cajas de texto */
        // var parametros = {
        //         "valorCaja1" : valorCaja1,
        //         "valorCaja2" : valorCaja2
        // };
        /* toma los valores de la función y los agrega al arreglo parametros */
        var parametros = {
                "valorCaja1" : valorCaja1,
                "valorCaja2" : valorCaja2
        };
        $.ajax({
                data:  parametros,
                url:   'formulario.php',
                type:  'post',
                beforeSend: function () {
                        $("#resultado").html("Procesando, espere por favor...");
                },
                success:  function ( response ) {
                        setTimeout(function() {
                                $("#resultado").html(response);
                                console.log(parametros['valorCaja1']);
        console.log(parametros['valorCaja2']);
                        }, 1500);
                }
        });
}