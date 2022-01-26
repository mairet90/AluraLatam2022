/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/******************   LLAMANDO A LAS CLASES *********************/
var txtareaEncriptar = document.querySelector("#textareaEncriptar");
var textDesencriptar = document.querySelector("#textareaDesencriptar");
var botonEncriptar = document.querySelector("#btn_encriptar");
var botonDesencriptar = document.querySelector("#btn_Desencriptar");
var figuras = document.querySelector(".todoTextArea");
let tildes = /[ÁÉÍÓÚáéíóú]/g;

/******************   FUNCION DE ENCRIPTAR *********************/
botonEncriptar.addEventListener("click", function(event){
    var textoUsuario = document.querySelector("#textareaEncriptar").value;
    if(document.getElementById("textareaEncriptar").value == ""){ 
         alert("ESTA VACÍO POR FAVOR INTRODUCE TU TEXTO"); 
         event.preventDefault();
     } if (textoUsuario.match(tildes)) {
         alert("DISCULPE, PERO EL TEXTO NO PUEDE CONTENER CARACTERES ESPECIALES");
         event.preventDefault();
         txtareaEncriptar.value = "";

     }else{

                var cambioMinuscula = textoUsuario.toLocaleLowerCase();
                console.log(cambioMinuscula);
                var nuevoMensaje = '';

                for(var i =0; i < cambioMinuscula.length; i++){

                    let caracter = cambioMinuscula.charAt(i);

                    switch(caracter){
                        case 'a': 
                            caracter = 'ai';
                            break;
                        case 'e':
                            caracter = 'enter';
                            break;
                        case 'i':
                            caracter = 'imes';
                            break;
                        case 'o':
                            caracter = 'ober';
                            break;
                        case 'u':
                            caracter = 'ufat';
                            break;
                        default:
                            caracter = caracter;
                    }

                    nuevoMensaje += caracter;
                
                }
               

        /****************** CAMBIO Y LIMPIAR EL TEXTAREA *********************/
        txtareaEncriptar.value = "";
        figuras.classList.add('cambio');
        document.getElementById("textareaDesencriptar").value = nuevoMensaje; 

         
    }
});

