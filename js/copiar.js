var botonCopiar = document.querySelector(".btn_copiar");
var textoUsuario = document.querySelector('#textareaDesencriptar');

botonCopiar.addEventListener("click", (event) => {

  var texto = document.querySelector("#textareaDesencriptar").value;
  navigator.clipboard.writeText(texto);
  textoUsuario.value = "";

});


var botonLimpiar = document.querySelector(".btn_limpiar");

botonLimpiar.addEventListener("click", (event) => {

    var textAreaEncriptador = document.querySelector("#textareaEncriptar");
    txtareaEncriptar.value = "";
    var textDesencriptar = document.querySelector("#textareaDesencriptar");
    textDesencriptar.value = "";
});