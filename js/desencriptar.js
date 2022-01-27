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


/******************   FUNCION DE ENCRIPTAR *********************/
botonDesencriptar.addEventListener("click", function(event){
  var textoUsuarioE = document.querySelector("#textareaEncriptar").value;
  var textoUsuarioD = document.querySelector("#textareaDesencriptar").value;

    if(textoUsuarioD.length > 1){
      textoEnDesencriptar(textoUsuarioD);
      console.log(textoUsuarioD);
    }else{
      if(textoUsuarioE.length > 1){
        textoEnEncriptar(textoUsuarioE);
        console.log(textoUsuarioE);
      }if(textoUsuarioE.length > 1){
        textoEnDesencriptar(textoUsuarioD);
        console.log(textoUsuarioD);
      }
    }
});0 


function textoEnEncriptar(texto){
  
  var textoUsuario = document.querySelector("#textareaEncriptar").value;
   
  var textoEncriptado = "";

  textoEncriptado = textoUsuario.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    
         /****************** CAMBIO Y LIMPIAR EL TEXTAREA *********************/
      
    //  textDesencriptar.classList.add('todoTextArea2');
      document.getElementById("textareaDesencriptar").value = textoEncriptado;
      txtareaEncriptar.value = "";

}

function textoEnDesencriptar(texto){
  
  var textoUsuario = document.querySelector("#textareaDesencriptar").value;
   
  var textoEncriptado = "";

  textoEncriptado = textoUsuario.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    
         /****************** CAMBIO Y LIMPIAR EL TEXTAREA *********************/
      
    //  textDesencriptar.classList.add('todoTextArea2');
      document.getElementById("textareaEncriptar").value = textoEncriptado;
      textDesencriptar.value = "";

}