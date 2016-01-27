$(document).ready(function() {
	
  var $clon=$('#clon').clone();
 // $clon.css('display','none')
  $('#boton').bind('click',function(){
    var $lista=$('#lista');
    var $text=$('#text');
    $lista.html($lista.html()+'<li>'+ $text.val() +'</li>');
    $text.val('')
  });/*
  $(document).on('click', 'button',function(e){
    var $lista=$('#lista');
    var $text=$('#text');
    $lista.append("<li><button>Agregar</button></li>");
    $text.val('')
  });*/
  $(document).on('click', '#lista>li',function(e){
    $(this).remove();
  });
  
  $('#btnTable').bind('click',function(){
    var $cuerpo=$('#cuerpo');
    var $text=$('#text');
    $cuerpo.append("<tr><td>"+$text.val()+"</td><td><button>Eliminar</button></td>");
    $text.val('')
  });
  $(document).on('click', 'td>button',function(e){
    $(this).closest('tr').remove();
  });
  $('#btnClone').bind('click',function(){
    var $nuevaEntrada = $clon.clone();
    $('#cuerpo').append($nuevaEntrada);
	$nuevaEntrada.show(1000);
  });
  
});