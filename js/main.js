$(document).ready(function(){
	
	var bgMusic = new buzz.sound( "sound/helio-dialogue", {
			formats: [ "ogg", "mp3" ],
			preload: true,
		});
		
		bgMusic.load();

	$(window).load(function(){	

			//loader animation
			$('#status').fadeOut(); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});

		$('.slider').fractionSlider({
			'fullWidth': 			true,
			'controls': 			false, 
			'pager': 				false,
			'responsive': 			false,
			'dimensions': 			"917,411",
		    'increase': 			false,
			'pauseOnHover': 		false,
			'slideEndAnimation': 	true,
			'slideTransitionSpeed' : 600,
			'startCallback' : function(el, currentSlide, lastSlide, step ){
							  bgMusic.play()
								.loop();
							  /* paramters:
							  el = the slider element
							  currentSlide = the current slide (in case of nextSlideCallback etc. its the new slide) 
							  lastSlide = the last/previouse slide
							  step = the current step
							  */
							},
		});
	});
});