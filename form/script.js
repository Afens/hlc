window.onload = function () {
  document.getElementById("enviar").addEventListener("click", mostrar);

  function mostrar() {

    var repetidor;
    if (document.form1.repetidor.checked)
      repetidor = "Si";
    else
      repetidor = "No";

    window.alert(
      "Nombre: " + document.form1.nombre.value +
      "\nEdad: " + document.form1.edad.value +
      "\nRepetidor: " + repetidor +
      "\nPoblacion: " + document.form1.poblacion.options[document.form1.poblacion.selectedIndex].value +
      "\nSexo: " + document.form1.sexo.value +
      "\nComentario: " + document.form1.comentario.value
    )
  }



}