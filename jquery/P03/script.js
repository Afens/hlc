$(document).ready(function () {
  var $editOrig=$('<img src="btnEditar.jpg" class="btn btnImg"/>');
  var $deltOrig=$('<img src="btnBorrar.jpg" class="btn btnImg"/>');
  
  
  $.getJSON(
    'http://localhost:3000/alumnos/',
    function (data) {
      var $lista = $('#tabla');

      for (i = 0; i < data.length; i++) {
        var $tr = $('<tr></tr>');
        var $datos=$('<td>'+data[i].nombre+'</td><td>'+data[i].edad+'</td><td>'+data[i].telefono+'</td><td>'+data[i].direccion+'</td><td>'+data[i].curso+'</td><td>'+data[i].repetidor+'</td><td><img src="'+data[i].foto+'" class="foto"/></td>');
        
        var $acciones = $('<td></td>');
        var $editar = $editOrig.clone();
        var $borrar = $deltOrig.clone();
        
        
        $borrar.data('alumno',data[i].id);
        $editar.data('alumno',data[i].id);
        
        $editar.on('click', function () {
          
          });
        
        $borrar.on('click', function () {
          $this=$(this);
          $.ajax({
            url: "http://localhost:3000/alumnos/" + $this.data('alumno'),
            type: "DELETE",
            success: function (objeto) {
              $this.closest('tr').remove();
            }
          });
          
        });
        
        $acciones.append($editar);
        $acciones.append($borrar);
          
        $tr.append($datos);
        $tr.append($acciones);
        
        
        /*
        $nuevo.data('alumno',data[i].id);
        

        
        */
        $lista.append($tr);
      }

    }
  );
});