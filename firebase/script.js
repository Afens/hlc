$(document).ready(function () {
  var ref = new Firebase("https://afens.firebaseio.com/").child("users");

  $('#btn').bind('click', nuevo);

  function nuevo() {
    var userRef = ref.push();
    //usersRef.key();

    userRef.set({
      nombre: $('#nombre').val(),
      apellido: $('#apellido').val()
    });

  }

  ref.on("child_added", function (snapshot, prevChildKey) {
    var alumno = snapshot.val();
    var clave = snapshot.key();
    $('#alumnos').append("<tr><td>" + alumno.nombre + "</td><td>" + alumno.apellido + "</td><td><button class='del' data-key='"+clave+"'>Eliminar</button></td></tr>");
  });
  
  $('.del').bind('click',borrar);
  
  function borrar(){
    ref.chil($this)
  }

});