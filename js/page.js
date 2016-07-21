$(document).ready(function(){ 

$('.links').delegate('a', 'click', function() {
  $('div#' + this.parentElement.id).addClass('fadeInUpBig');
  // .fadeToggle();
  // $('.lightdiv').not('#' + this.id).addClass('fadeOutDownBig').fadeOut();
});

});

