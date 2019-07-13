
/*** INDEX PAGE ***/

	/////// marquee init ///////

	$('.marquee_top').marquee({
		//duration in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'right',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		startVisible:true
	});

	$('.marquee_left').marquee({
		//duration in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'right',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		startVisible:true
	});
	$('.marquee_right').marquee({
		//duration in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'right',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		startVisible:true
	});
	/////// END marquee ///////

	/////// hover on ticker links ///////
	$( ".project_link" ).hover(
	  function() {
	  	var project_id = $(this).attr('data-index');
	  	$( '.project_image' ).removeClass( "show" );
	    $( '.project_'+project_id ).addClass( "show" );
	    $('.header').removeClass('show_menu');
	  }, function() {
	    $( '.project_image' ).removeClass( "show" );
	    $('.header').removeClass('show_menu');
	  }
	);
	/////// END ///////


	/////// open work menu ///////
	$('.nav_work').click(function() {
		$('.page').toggleClass('show_menu');
	})
	//
	// close work menu if clicked anywhere on website //


/***/


	/////// scroll down = scroll right  ///////
	$(document).ready(function() {
		$('.single_project_images ul').mousewheel(function(e, delta) {
			this.scrollLeft -= (delta);
			e.preventDefault();
		});
	});

	$( ".single_project_images ul" ).scroll(function() {

		var scrollLeft = $('.single_project_images ul').scrollLeft()

		var scrollWidth = $('.single_project_images ul')[0].scrollWidth - $('.single_project_images ul').innerWidth();
		
		var scroll_from_right = scrollWidth - scrollLeft;

		console.log(scroll_from_right)
		
		
		if (scroll_from_right > 100) {
			$('.marquee_right').css('right', -100)
		} else {
			$('.marquee_right').css('right', -scroll_from_right)
		}


		if (scrollLeft > 100) {
			$('.marquee_left').css('left', -100)
		} else {
			$('.marquee_left').css('left', -scrollLeft)
		}



	});


/****/

	////// hover next project //////
	$('.next_project a').hover(
	  function() {
	  	$(this).prev('img').addClass('show');
	  }, function() {
	    $(this).prev('img').removeClass('show');
	  }
	);