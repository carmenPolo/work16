$(function() {
// card--open
 $('.cards').on('click','.card',function(){
   $(this).toggleClass('card--open');
 });

// like
 $('.cards').on('click','.card__like',function(event) {
   event.preventDefault();
   event.stopPropagation();
   $(this).toggleClass('card__like--red');
 });

// seguir
  $('.cards').on('click', '.card__follow-btn', function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).toggleClass('card__follow-btn--following');
  });
// Agregar imagen seleccionada
  //'Seleccione una imagen', se debería desplegar dentro del div con clase .create__image la imagen que seleccionada en el select (y que hace referencia al value del option). Para realizar eso ya hemos agregado el tag de la imagen y lo que deberemos hacer es cambiar el src de aquella etiqueta.
  // Deberemos escuchar el evento que se gatille con el cambio del select y posteriormente capturar el value del select y concatenarlo con la ruta para llegar a las imágenes (assets/images/squared/)
  // Se recomienda revisar la información que se encuentra en la documentación de jQuery y que hace referencia a los Eventos de formularios, porque estaremos utilizando algunos de ellos.
  // Tip: Si yo hago $(event.target) le estoy diciendo a jQuery que envuelva el target del evento y me lo entregue junto a todas sus funciones propias, para que sea más fácil utilizar la función .val() y muchas otras más.
  $('.create__display_images').on('submit', function(event){
    event.preventDefault();
    event.stopPropagation();

  });

}); // fin document ready
