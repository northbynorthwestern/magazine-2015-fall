$(document).ready(function(){

	// SMOOTH SCROLLING

	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 200);
    	return false;
	});

	// INIT SCROLL MAGIC
	var controller = new ScrollMagic.Controller();

	// BUILD SCENES

	$("#sidebar a").each(function(){ 
		var href = $(this).attr('href'); 
		var div_id = href.substr(1);
		
		for (var i = 0; i < div_id.length; i++){
			new ScrollMagic.Scene({triggerElement: "#"+div_id,  duration: $("#"+div_id).height() })
				.setClassToggle("#sub-" + div_id, "selected") // add class toggle
				.addTo(controller);
		}
	}); 
	// END SCROLL MAGIC

	
	// STICKY SIDE BAR

	var stickyNavTop = $('#sidebar').offset().top;
	 
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); 
		if (scrollTop > stickyNavTop) { 
	   		$('#sidebar').addClass('sticky');
		} else {
	    	$('#sidebar').removeClass('sticky'); 
		}
	};
 
	stickyNav();
 
	$(window).scroll(function() {
	    stickyNav();
	});


});