$(document).ready(function(){ 
$('.panel').hide();


$('.links').delegate('a', 'click', function() {
  $('div#' + this.parentElement.id + '-panel').fadeToggle().toggleClass('fadeInUpBig');
  $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('fast').removeClass('fadeInUpBig');
});

  $("#qbert").hover(
      function() {
          $(this).attr("src", "images/qbertrox.gif");
      },
      function() {
          $(this).attr("src", "images/qbertstatic.png");
  });       

  $("#fitbeat").hover(
      function() {
          $(this).attr("src", "images/fitbeat.gif");
      },
      function() {
          $(this).attr("src", "images/fitbeatstatic.png");
  });      

  $("#ideabox").hover(
      function() {
          $(this).attr("src", "images/ideabox.gif");
      },
      function() {
          $(this).attr("src", "images/ideaboxstatic.png");
  });                  
});