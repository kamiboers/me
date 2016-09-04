// $('.sidebar-content').load("./partials/sidebar.html")

$(document).ready(function(){

  $('.sidebar-link').click( function() {
    console.log('link clicked');
    if ($('#panel-content').is(':empty')) {      
      console.log('panel was empty');
      $('#panel-content').load("./partials/" + this.id + ".html");
      $('#panel-content').addClass('slideUp');

    } else {
        console.log('panel was not empty');
        $('#panel-content').removeClass('slideUp').addClass('slideDown');
        debugger;
        if ($('#panel-content:first-child').id === this.id + "-inner-panel") {
          console.log('closing panel');
          
      } else {
        console.log('switching panel)');
        $('#panel-content').load("./partials/" + this.id + ".html");
        $('#panel-content').delay(500).addClass('slideUp');
      }
    }
    
    // $('#panel-content').delay(500).removeClass('slideDown').addClass('slideUp')

    // $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('slow').removeClass('fadeInUpBig');
  });

});