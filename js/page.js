$(document).ready(function(){ 

	$("div#bar1").animate({ "height": "300%" }, 3000 );
	$("div#bar2").animate({ "height": "300%" }, 2800 );

$(".touch").hover(function () {
    $(this).toggleClass('animated pulse');
});

$('div#about').animateCss('fadeInUpBig');



	// $(".links").hover(
 //        function(){
 //             timer = setTimeout(function(){ $('.links').addClass('bounce'); }, 200);
 //        }, function(){
 //           clearTimeout(timer);
 //           $('.links').removeClass('bounce');
 //        }
 //    );

});

