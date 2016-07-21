$(document).ready(function(){ 
$('.panel').hide();

$('.links').delegate('a', 'click', function() {
  $('div#' + this.parentElement.id + '-panel').fadeToggle().toggleClass('fadeInUpBig');
  $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('fast').removeClass('fadeInUpBig');
});

});