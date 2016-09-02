$(document).ready(function(){ 
  $('.panel').hide();

  $('.links').delegate('a', 'click', function() {
    // $("div#" + this.parentElement.id).load(this.parentElement.id + ".html");
    $('div#' + this.parentElement.id + '-panel').fadeToggle().toggleClass('fadeInUpBig');
    $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('slow').removeClass('fadeInUpBig');
  });

  $(".project").hover(
    function() {
      $(this).attr("src", "images/" + this.id + "demo.gif");
    },
    function() {
      $(this).attr("src", "images/" + this.id + "static.png");
  });

});