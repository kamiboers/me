$(document).ready(function(){ 
$('.panel').hide();


$('.links').delegate('a', 'click', function() {
  $('div#' + this.parentElement.id + '-panel').fadeToggle().toggleClass('fadeInUpBig');
  $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('fast').removeClass('fadeInUpBig');
});

  $("#qbert").hover(
      function() {
          $(this).attr("src", "images/qbertdemo.gif");
      },
      function() {
          $(this).attr("src", "images/qbertstatic.png");
  });       

  $("#fitbeat").hover(
      function() {
          $(this).attr("src", "images/fitbeatdemo.gif");
      },
      function() {
          $(this).attr("src", "images/fitbeatstatic.png");
  });      

  $("#ideabox").hover(
      function() {
          $(this).attr("src", "images/ideaboxdemo.gif");
      },
      function() {
          $(this).attr("src", "images/ideaboxstatic.png");
  });                  
});