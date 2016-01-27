window.onload = function () {


  // P1
  //  document.getElementById("insultar").disabled=true;
  //  document.getElementById("activar").addEventListener("click", cambiarModo);
  //
  //
  //
  //  function insultar() {
  //    document.getElementById("texto").innerHTML = "me cago en to tus ....";
  //    document.getElementById("insultar").disabled=true;
  //  }
  //
  //  function cambiarModo() {
  //    if (this.innerHTML === "Activar") {
  //      console.log("Activar");
  //      document.getElementById("insultar").addEventListener("click", insultar);
  //      document.getElementById("insultar").disabled=false;
  //      this.innerHTML = "Desactivar";
  //    } else {
  //      console.log("DesActivar");
  //      document.getElementById("insultar").removeEventListener("click", insultar);
  //      document.getElementById("texto").innerHTML="";
  //      document.getElementById("insultar").disabled=true;
  //      this.innerHTML = "Activar";
  //    }
  //  }

  //P2
  //var base = 12;
  //var nodo = document.getElementById("lblTexto");
  //  document.getElementById("btnAumentar").addEventListener("click", aumentar);
  //
  //  function aumentar() {
  //    nodo.style.fontSize = ++base + 'px';
  //  }
  //
  //  document.getElementById("btnClase").addEventListener("click", clase);
  //
  //  function clase() {
  //    nodo.classList.toggle('cursivaNegrita')
  //  }

  var nodo = document.getElementById("btn");
  nodo.addEventListener("click", color);

  function color() {
    nodo.parentNode.classList.toggle('negro');
  }
  var filas = document.querySelectorAll("#table tr");
  for (var i = 0; i < filas.length; i++) {
    filas[i].addEventListener("click", cambiar);
  }

  function cambiar() {
    this.nextElementSibling.classList.toggle('negro');
  }



  //P5
  //  document.getElementById("btnParrafo").addEventListener("click", addParrafo);
  //
  //  function addParrafo() {
  //    var parrafo = document.createElement("p");
  //
  //    var contenidoParrafo = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laudantium eligendi laborum harum, amet accusantium recusandae, praesentium sapiente beatae, eaque sunt nemo impedit qui ab reprehenderit dolore ipsam. Molestiae, pariatur.');
  //    parrafo.appendChild(contenidoParrafo);
  //    document.body.appendChild(parrafo);
  //  }

  document.getElementById("btnParrafo").addEventListener("click", addParrafo);
  var base = document.getElementById("parrafo");

  function addParrafo() {

    var nuevo = base.cloneNode(true);
    base.parentNode.appendChild(nuevo);
    nuevo.style.display = 'block';

  }
}