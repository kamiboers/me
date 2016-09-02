$(document).ready(function(){ 
  $('.panel').hide();
 
   $("div#about-panel").load("./partials/about.html");
   $("div#code-panel").load("./partials/code.html");
   $("div#contact-panel").load("./partials/contact.html");

  $('.links').delegate('a', 'click', function() {
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