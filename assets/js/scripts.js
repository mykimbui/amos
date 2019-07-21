	function init_site() {
	
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
		// END marquee //

		/////// hover on ticker links ///////
		$( ".project_link, .works_menu_a" ).hover(
		  function() {
		  	$(this).css('color', $(this).attr('data-hover'))
		  	var project_id = $(this).attr('data-index');
		  	$( '.project_image' ).removeClass( "show" );
		    $( '.project_'+project_id ).addClass( "show" );
		    $('.header').removeClass('show_menu');
		  }, function() {
		  	$(this).css('color', 'black')
		    $( '.project_image' ).removeClass( "show" );
		    $('.header').removeClass('show_menu');
		  }
		);
		// END //

		/////// scrolling on projects haxxx  ///////
		// scrolling up down equates to scrolling left right too  ///////
		$(document).ready(function() {
			$('.single_project_images ul').mousewheel(function(e, delta) {
				this.scrollLeft -= (delta);
				e.preventDefault();
			});
		});
		//
		// hide and show left and right ticker depending on position of scroll
		$( ".single_project_images ul" ).scroll(function() {

			// calculate scroll positions from right
			var scrollLeft = $('.single_project_images ul').scrollLeft()
			var scrollWidth = $('.single_project_images ul')[0].scrollWidth - $('.single_project_images ul').innerWidth();
			var scroll_from_right = scrollWidth - scrollLeft;

			// console.log(scroll_from_right)
			
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
		// end scroll functions //

		////// hover next project //////
		$('.next_project a').hover(
		  function() {
		  	$(this).prev('img').addClass('show');
		  }, function() {
		    $(this).prev('img').removeClass('show');
		  }
		);

		// hide menu when any link is clicked
		$('a').click(function() {
			$('body').removeClass('show_menu open_mobile_menu');
			// temporarily disable links for 2secs to prevent double clicks
			$('a').addClass('disabled');
			setTimeout(function(){ 
				$('a').removeClass('disabled');
			}, 2000);

		});

		
	};
	// END init //

	//// init site on first load or refresh
	init_site();

	/////// toggle works menu ////// 
	$(document).on('click','.nav_work .label',function(){
	    $('body').toggleClass('show_menu');
	});
	//
	////// toggle menu on mobile ////// 
	$('.mobile_menu_trigger').click(function() {
		$('body').toggleClass('open_mobile_menu');
	})
	//
	////// show marquee on start ////// 
	TweenMax.to('.marquee', 0.5, {
		opacity: 1,
	});
	//
	////// if in single project page, fade in project images ////// 
	if ($('.wrap_single_project').length == 1) {
		TweenMax.to('.single_project_images li', 0.5, {
			opacity: 1,
		});
	};
	//
	////// if in about page, fade in about text ////// 
	if ($('.wrap_about').length == 1 ) {
		TweenMax.to('.wrap_about', 0.5, {
			opacity: 1,
		});
	};
	//


/****/


	/////// init barba.js ///////
	barba.init({
	  transitions: [
		  {
		    name: 'to project',
		    to: { namespace: ['project'] },
		    leave: function(data) {
		      console.log('fired projects-to-project. general');
		      var done = this.async();
		      TweenMax.to(data.current.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });

		    },
		    enter: function(data) {
		      var done = this.async();
		      init_site();
		      TweenMax.from(data.next.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });
		      // fade in all images
		      TweenMax.to($('.single_project_images li'), 0.4, {
		        opacity: 1,
		      }); 
		      // fade in all images
		      TweenMax.to($('.marquee'), 0.4, {
		        opacity: 1,
		      }); 
		    },

			// apply only if clicked link contains `.cta`
		    // custom: ({ current, next, trigger })=> trigger.classList && trigger.classList.contains('project_link') || trigger.classList.contains('works_menu_a'),

		    // do leave and enter concurrently
		    sync: false,

		  },
		  {
		    name: 'project-to-project via to_next',
		    from: { 
		    			    // apply only if clicked link contains `.cta`
		    		custom: ({ current, next, trigger })=> trigger.classList && trigger.classList.contains('to_next'),
		    		namespace: ['project'] 
		    	  },
		    to: { namespace: ['project'] },
		    leave: function(data) {
		      console.log('fired project-to-project via to_next');
		      var done = this.async();
		      
		      // 1 - remove blur on next project image
		      $('.next_project img').removeClass('blur');
		      // 2 - scroll to extreme left if havent already (to align images on transition)
		      $(".single_project_images ul").animate({ scrollLeft: $('.single_project_images ul')[0].scrollWidth }, 1000);

		      // force opacity 1 for next_project image
		      TweenMax.to($('.next_project img'), 0, {
		        opacity: 1,
		      }); 
		      // 3a -  fade out next project link
		      TweenMax.to($('.next_project a'), 0.4, {
		        opacity: 0,
		        delay:0.4	
		      });

		      // 4 - fade out right marquee
		      var rule_right = CSSRulePlugin.getRule(".marquee_right:after"); //get the rule
		      TweenMax.to(rule_right, 1, {
		        left: '0%',
		        delay:0.4,
		      });
		      // 5 - fade out top marquee
		      var rule_top = CSSRulePlugin.getRule(".marquee_top:after"); //get the rule
		      TweenMax.to(rule_top, 1, {
		        left: '0%',
		        delay:1.1,
		      });
		      // 5b - fade out left marquee
		      var rule_left = CSSRulePlugin.getRule(".marquee_left:after"); //get the rule
		      TweenMax.to(rule_left, 1, {
		        left: '0%',
		        delay:1.1,
		      });
		      // 6 - fade out all images except last one
		      TweenMax.to($('.single_project_images li:not(.next_project)'), 0.6, {
		        opacity: 0,
		        delay:1.8,
		      });   
		      // 7 - delay 0.2s after last element fades before completing exit
		      TweenMax.to($('.next_project'), 0.6, {
		        opacity: 1,
		        delay:2,
		        onComplete: done
		      });      

		    },
		    enter: function(data) {
		      var done = this.async();
		      init_site();
		      TweenMax.to('.marquee', 0., {
		        opacity: 1
		      });

		      var rule_left = CSSRulePlugin.getRule(".marquee_left:after"); //get the rule
		      TweenMax.to(rule_left, 1, {
		        left: '-200%',
		      });
		      var rule_top = CSSRulePlugin.getRule(".marquee_top:after"); //get the rule
		      TweenMax.to(rule_top, 1, {
		        left: '-200%',
		        delay:0.5,
		        onComplete: done
		      });
		      var rule_right = CSSRulePlugin.getRule(".marquee_right:after"); //get the rule
		      TweenMax.to(rule_right, 1, {
		        left: '-200%',
		        delay:0.5,
		      });
		      TweenMax.to('.single_project_images li', 0.6, {
		        opacity: 1,
		        delay:1.6,
		      });

		    },

		    // do leave and enter concurrently
		    sync: false,

		  },

		  {
		    name: 'to about',
		    to: { namespace: ['about'] },
		    leave: function(data) {
		      console.log('fired to about');
		      var done = this.async();
		      TweenMax.to(data.current.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });

		    },
		    enter: function(data) {
		      var done = this.async();
		      init_site();
		      TweenMax.from(data.next.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });
		      // fade in all images
		      TweenMax.to($('.wrap_about'), 0.4, {
		        opacity: 1,
		      }); 
		      // fade in all images
		      TweenMax.to($('.marquee'), 0.4, {
		        opacity: 1,
		      }); 
		    },

			// apply only if clicked link contains `.cta`
		    // custom: ({ current, next, trigger })=> trigger.classList && trigger.classList.contains('nav_about_a'),

		    // do leave and enter concurrently
		    sync: false,

		  },

		  {
		    name: 'to home',
		    to: { namespace: ['projects'] },
		    leave: function(data) {
		      console.log('fired to home');
		      var done = this.async();
		      TweenMax.to(data.current.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });

		    },
		    enter: function(data) {
		      var done = this.async();
		      init_site();
		      TweenMax.from(data.next.container, 0.5, {
		        opacity: 0,
		        onComplete: done
		      });

		      // fade in all images
		      TweenMax.to($('.marquee'), 0.4, {
		        opacity: 1,
		      }); 
		    },

			// apply only if clicked link contains `.cta`
		    // custom: ({ current, next, trigger })=> trigger.classList && trigger.classList.contains('logo'),

		    // do leave and enter concurrently
		    sync: false,

		  },
	  ]
	});
	// END barba.js stuff //

	/////// if on mobile and in home page, cycle through all cover images  ///////
	if (window.orientation != undefined && $('.projects_showcase').length == 1 ) {
		
		var project_total = $('.projects_showcase').attr('data-count');
		var project_counter = 0;

		setInterval(function(){ 
			$('.project_image').removeClass('show');
			$('.project_'+project_counter).addClass('show');


			// increase count unless at the end of length
			if (project_counter != project_total - 1) {
				project_counter++
			} else {
				project_counter = 0
			}
			// setTimeout(function(){ 	
			// }, 100);


		}, 1000);

	};

	if (window.orientation == undefined) {
	  function moveCursor(e) {
	  	
	    // $('.cursor').addClass('is-moving');

	    if ($('.wrap_single_project').length == 1) { 
			var cursor_angle = (e.clientX  / window.innerWidth * 100) -50;
	  		// console.log(cursor_angle)
		    $('.cursor').css({
		    	"top": e.clientY, 
		    	"left": e.clientX,
		    	"transform": 'scale(0.8) translate('+(30+cursor_angle*0.3-20)+'px, '+ (30+cursor_angle*0.5)+'px) rotate('+cursor_angle*2+'deg)'
		    });
	    } else {
	    	var cursor_angle = 0;
		    $('.cursor').css({
		    	"top": e.clientY, 
		    	"left": e.clientX,
		    	"transform": 'scale(0.8) translate('+(30+cursor_angle*0.3-20)+'px, '+ (30+cursor_angle*0.5)+'px) rotate('+cursor_angle*2+'deg)'
		    });
	    }

	  }

		$(document).on('mousemove', moveCursor);

		$("a, .project_link").hover(
			function(e){ $('.cursor').addClass('hover-link') }, // over
			function(e){ $('.cursor').removeClass('hover-link') }  // out
		);

		$("iframe, .slide_hover-areas").hover(
			function(e){ $('.cursor').addClass('hide-cursor') }, // over
			function(e){ $('.cursor').removeClass('hide-cursor') }  // out
		);
	}



