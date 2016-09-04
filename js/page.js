var panels = ['about','code', 'contact']

for (var i in panels) {
  $('#panel-' + panels[i]).load('./partials/' + panels[i] + '.html');
}

$(document).ready(function(){

    $('.sidebar-link').click(function() {
      $('#panel-' + this.id).fadeToggle().addClass('slideUp');
      $('.panel-content').not('#panel-' + this.id ).fadeOut().removeClass('slideUp');
    });

});