$(document).ready(function(){ 
$('.lightdiv').hide();

	$("div#bar1").animate({ "height": "300%" }, 3000 );
	$("div#bar2").animate({ "height": "300%" }, 2800 );

$(".touch").hover(function () {
    $(this).toggleClass('animated pulse');
});


$('.bar-opaque').delegate('a', 'click', function() {
	$('div#' + this.id).toggleClass('fadeOutDownBig').fadeToggle();
	$('.lightdiv').not('#' + this.id).addClass('fadeOutDownBig').fadeOut();
});

});

