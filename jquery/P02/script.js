$(document).ready(function () {
  $.getJSON(
    'https://dl.dropboxusercontent.com/u/67422/Android/json/datos.json',
    function (data) {
      var $lista = $('#lista');

      for (i = 0; i < data.length; i++) {
        var $nuevo = $('<li>' + data[i].nombre + '</li>');
        $nuevo.data('alumno',data[i].id);
        $nuevo.on('click', function () {
          $this=$(this);
          $.ajax({
            url: "http://localhost:3000/alumno/" + $this.data('alumno'),
            type: "DELETE",
            success: function (objeto) {
              $this.remove();
            }

          });

        });
        $lista.append($nuevo);
      }

    }
  );
});