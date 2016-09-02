$(document).ready(function(){ 
  $('.panel').hide();
 
   $("div#about-panel").load("./partials/about.html");
   $("div#code-panel").load("./partials/code.html");
   $("div#contact-panel").load("./partials/contact.html");
   // $("div#styling").load("./partials/styling.html");

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

  $("#nasa").hover(
    function() {
      // console.log('nasa hovering')
      // $page.css("background-image", "url('./images/earth.jpeg') no-repeat center center fixed;");
      // $page.css('background', 'green');
      $page.css("background", "url('./images/earth.jpeg')");

      // $('div.centered').css({"background":"url('./images/earth.jpeg') no-repeat", "opacity":"0.25"});
      // $('*').not('.centered').css("opacity", "0.5")
    },
    function() {
      $page.css('background', 'transparent');
      // $('div.centered').css('background', 'transparent');
    });

    $("#nasa").click(function () {
        $("head").html("<link rel='stylesheet' href='./css/reset.css' type='text/css' /><link rel='stylesheet' href='./css/custom.css' type='text/css' />");
    });


});


  // var $page = $('html, body');
  var $page = $('#backstretch-layer');
 
  // $('.close-slide').on('mouseup', function(){
  //   $slide.addClass('hidden');
  //   $colorBlock.css('display', 'inline-block');
  //   $('body').css('overflow', 'scroll');
  //   $(this).parent().children('.slide-content').removeClass('active');
  // });

  // $colorBlock.on('mouseup', function(){
  //   $background.css('background', originalBG);
  //   $name.css('color', '#000');
  //   var $boxID = $(this).attr('id');
  //   $('#' + $boxID + '-slide').removeClass('hidden');
  //   $colorBlock.css('display', 'none');
  //   $('body').css('overflow', 'hidden');
  // }); 