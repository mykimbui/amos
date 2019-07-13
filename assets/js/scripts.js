
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
		$('.header').toggleClass('show_menu');
	})
	//
	// close work menu if clicked anywhere on website //


/***/


