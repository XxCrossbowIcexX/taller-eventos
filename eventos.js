const contenedorDiv = document.getElementById("contenedorBoton");
const botonSaludar = document.getElementById("btnSaludar");

contenedorDiv.addEventListener("click", function (e) {
  alert("Hola! Soy el div")
});

botonSaludar.addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Hola");
});