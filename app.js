//------------------------Slider-------------------------------//
$(document).ready(function() {
        $menu = $('#menu').find('ul').find('li');

        $menu.hover(function() {
            $(this).children('ul').stop();
            $(this).children('ul').slideDown();
        }, function() {
            $(this).children('ul').stop();
            $(this).children('ul').slideUp();
        });
    });

    $(document).ready(function() {
    			$("#content-slider").lightSlider({
                    loop:true,
                    keyPress:true
                });
                $('#image-gallery').lightSlider({
                    gallery:true,
                    item:1,
                    thumbItem:9,
                    slideMargin: 0,
                    speed:500,
                    auto:true,
                    loop:true,
                    onSliderLoad: function() {
                        $('#image-gallery').removeClass('cS-hidden');
                    }
                });
    		});

        //------------Cargar contenido externo------------//
        $("#button").click( function()
           {
             $( ".contenido" ).load('contenido.html');
           }
        );

        //------------------Contenido desde un servidor-----------------------------//
        $( document ).ready(function() {

            $.ajax({
                url: 'https://swapi.co/api/people/1/',
                type: 'GET',
                success: function(respuesta) {
                    console.log(respuesta.name);
                    $(".ajax").append("Nombre: "+respuesta.name+"<br>");
                    $(".ajax").append("Estatura: "+respuesta.height+"<br>");
                    $(".ajax").append("Genero: "+respuesta.gender+"<br>");
                },
                error: function() {
                    console.error("No es posible completar la operación");
                }
            });

        });


        //-----------Funcion para el efecto transicion-------------//
        $(document).ready(
        		function(){
        			$('#portfolio').innerfade({
        				speed: 'slow',
        				timeout: 4000,
        				type: 'sequence',
        				containerheight: '340px'
        			});
        		}
        	);

    //-----------------------------------------------------------//
    $(document).ready(function() {
      $('#simple_alert').click(function(){
        alertify.alert("Este es un mensaje de alerta");
      });

      $('#simple_confirm').click(function() {
        alertify.confirm("Cuadro de confirmacio", function(e){
          if(e){
            alertify.alert("Haz aceptado");
          }
          else {
            alertify.alert("No aceptaste");
          }
        });
      });

      $('#simple_prompt').click(function() {
        alertify.prompt("Escribe tu nombre", function(e,str){
          if(e){
            alertify.alert("Tu nombre es: "+str);
          }
          else {
            alertify.alert("No escribiste tu nombre");
          }
        });
      });
    });
