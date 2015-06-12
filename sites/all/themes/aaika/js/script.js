/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('#isotope-container');
		var $filter=$('#filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');				

				// $('.triggerAnimation').waypoint(function() {
				// 	var animation = $(this).attr('data-animate');
				// 	$(this).css('opacity', '');
				// 	$(this).addClass("animated " + animation);

				// },
				// 	{
				// 		offset: '75%',
				// 		triggerOnce: true
				// 	}
				// );
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){

			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});			

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			image: {
        titleSrc: function(item) {        	
        	return $(item.el).closest('.project-hover').find('.caption-title').text();          
        },
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      },			
			gallery:{enabled:true}
		});

	} catch(err) {

	}

	try {
		$('.loader').ClassyLoader({
			percentage: 90,
			speed: 30,
			fontSize: '50px',
			diameter: 90,
			lineColor: 'rgba(19,175,235,1)',
			remainingLineColor: 'rgba(200,200,200,0.4)',
			lineWidth: 9
		});

		$('.loader2').ClassyLoader({
			percentage: 100,
			speed: 30,
			fontSize: '50px',
			diameter: 90,
			lineColor: 'rgba(63,195,95,1)',
			remainingLineColor: 'rgba(200,200,200,0.4)',
			lineWidth: 9
		});

		$('.loader3').ClassyLoader({
			percentage: 85,
			speed: 30,
			fontSize: '50px',
			diameter: 90,
			lineColor: 'rgba(252,66,66,1)',
			remainingLineColor: 'rgba(200,200,200,0.4)',
			lineWidth: 9
		});

		$('.loader4').ClassyLoader({
			percentage: 65,
			speed: 30,
			fontSize: '50px',
			diameter: 90,
			lineColor: 'rgba(47,146,238,1)',
			remainingLineColor: 'rgba(200,200,200,0.4)',
			lineWidth: 9
		});

		$('.loader5').ClassyLoader({
			percentage: 95,
			speed: 30,
			fontSize: '50px',
			diameter: 90,
			lineColor: 'rgba(199,98,203,1)',
			remainingLineColor: 'rgba(200,200,200,0.4)',
			lineWidth: 9
		});

		$('.loader001').ClassyLoader3({
			percentage: 85,
			speed: 30,
			fontSize: '50px',
			diameter: 100,
			lineColor: 'rgba(255,255,255,1)',
			remainingLineColor: 'rgba(255,255,255,0.3)',
			lineWidth: 10
		});

		$('.loader002').ClassyLoader3({
			percentage: 90,
			speed: 30,
			fontSize: '50px',
			diameter: 100,
			lineColor: 'rgba(255,255,255,1)',
			remainingLineColor: 'rgba(255,255,255,0.3)',
			lineWidth: 10
		});

		$('.loader003').ClassyLoader3$({
			percentage: 100,
			speed: 30,
			fontSize: '50px',
			diameter: 100,
			lineColor: 'rgba(255,255,255,1)',
			remainingLineColor: 'rgba(255,255,255,0.3)',
			lineWidth: 10
		});

		$('.loader004').ClassyLoader3({
			percentage: 75,
			speed: 30,
			fontSize: '50px',
			diameter: 100,
			lineColor: 'rgba(255,255,255,1)',
			remainingLineColor: 'rgba(255,255,255,0.3)',
			lineWidth: 10
		});
		
	}
	catch (err) {

	}
	
	// Flickrfeed
	try {
		$('#flickr_badge_wrapper').jflickrfeed({
			limit: 9,
			qstrings: {
				id: '52617155@N08'
			},
			itemTemplate: '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
		});
	}
	catch (err) {

	}	

	var pathToTheme = Drupal.settings.basePath + "sites/all/themes/" + Drupal.settings.ajaxPageState.theme;
  var open_image = pathToTheme + '/images/open.png';
  var close_image = pathToTheme + '/images/close.png';
  $("#topMenuImage").html('<img src="' + open_image + '" alt="open" title="open" />');
	$(".topMenuAction").click( function() {
		if ($("#openCloseIdentifier").is(":hidden")) {
			$("#slider").animate({ 
				marginTop: "-1000px"
				}, 900 );
			$("#topMenuImage").html('<img src="' + open_image + '" alt="open" title="open" />');
			$("#openCloseIdentifier").show();
		} else {
			$("#slider").animate({ 
				marginTop: "0px"
				}, 300 );
			$("#topMenuImage").html('<img src="' + close_image + '" alt="close" title="close" />');
			$("#openCloseIdentifier").hide();
		}
	});  

	try {
		$('#target').animateNumber(
	    {
	      number: 270,

	      numberStep: function(now, tween) {
	        var floored_number = Math.floor(now),
	            target = $(tween.elem);
	        
	        target.text(floored_number);
	      }
	    },
	    10000
	  )
	  $('#target2').animateNumber(
	    {
	      number: 225,

	      numberStep: function(now, tween) {
	        var floored_number = Math.floor(now),
	            target = $(tween.elem);
	        
	        target.text(floored_number);
	      }
	    },
	    10000
	  )
	   $('#target3').animateNumber(
	    {
	      number: 90,

	      numberStep: function(now, tween) {
	        var floored_number = Math.floor(now),
	            target = $(tween.elem);
	        
	        target.text(floored_number);
	      }
	    },
	    7000
	  )
	    $('#target4').animateNumber(
	    {
	      number: 4500,

	      numberStep: function(now, tween) {
	        var floored_number = Math.floor(now),
	            target = $(tween.elem);
	        
	        target.text(floored_number);
	      }
	    },
	    10000
	  )
		$('#target5').animateNumber(
			{
			  number: 365,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		
		
		$('#target6').animateNumber(
			{
			  number: 270,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target7').animateNumber(
			{
			  number: 225,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target8').animateNumber(
			{
			  number: 90,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target9').animateNumber(
			{
			  number: 4500,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		
		
		$('#target10').animateNumber(
			{
			  number: 270,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target11').animateNumber(
			{
			  number: 225,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target12').animateNumber(
			{
			  number: 120,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			10000
		  )
		
		$('#target13').animateNumber(
			{
			  number: 4500,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
		
		$('#target14').animateNumber(
			{
			  number: 7200,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
		
		$('#target15').animateNumber(
			{
			  number: 345589,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
		
		$('#target16').animateNumber(
			{
			  number: 45380,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
		
		$('#target17').animateNumber(
			{
			  number: 245785,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
		
		$('#target18').animateNumber(
			{
			  number: 537550,
		
			  numberStep: function(now, tween) {
				var floored_number = Math.floor(now),
					target = $(tween.elem);
				
				target.text(floored_number);
			  }
			},
			9000
		  )
	}
	catch (err) {
		
	}

	try {
	  // Hide the label at start
	  $('#progress_bar .ui-progress .ui-label').hide();
	  // Set initial value
	  $('#progress_bar .ui-progress').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar .ui-progress').animateProgress(90, function() {
	    $(this).animateProgress(81, function() {
	      setTimeout(function() {
	        $('#progress_bar .ui-progress').animateProgress(90, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });
		  
	  // Hide the label at start
	  $('#progress_bar2 .ui-progress .ui-label').hide();
	  // Set initial value
	  $('#progress_bar2 .ui-progress').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar2 .ui-progress').animateProgress(72, function() {
	    $(this).animateProgress(63, function() {
	      setTimeout(function() {
	        $('#progress_bar2 .ui-progress').animateProgress(72, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar3 .ui-progress .ui-label').hide();
	  // Set initial value
	  $('#progress_bar3 .ui-progress').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar3 .ui-progress').animateProgress(80, function() {
	    $(this).animateProgress(85, function() {
	      setTimeout(function() {
	        $('#progress_bar3 .ui-progress').animateProgress(80, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar4 .ui-progress .ui-label').hide();
	  // Set initial value
	  $('#progress_bar4 .ui-progress').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar4 .ui-progress').animateProgress(94, function() {
	    $(this).animateProgress(90, function() {
	      setTimeout(function() {
	        $('#progress_bar4 .ui-progress').animateProgress(94, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar5 .ui-progress .ui-label').hide();
	  // Set initial value
	  $('#progress_bar5 .ui-progress').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar5 .ui-progress').animateProgress(85, function() {
	    $(this).animateProgress(80, function() {
	      setTimeout(function() {
	        $('#progress_bar5 .ui-progress').animateProgress(85, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray .ui-progress3 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray .ui-progress3').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray .ui-progress3').animateProgress(90, function() {
	    $(this).animateProgress(81, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray .ui-progress3').animateProgress(90, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray2 .ui-progress3 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray2 .ui-progress3').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray2 .ui-progress3').animateProgress(72, function() {
	    $(this).animateProgress(63, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray2 .ui-progress3').animateProgress(72, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray3 .ui-progress3 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray3 .ui-progress3').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray3 .ui-progress3').animateProgress(80, function() {
	    $(this).animateProgress(85, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray3 .ui-progress3').animateProgress(80, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray4 .ui-progress3 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray4 .ui-progress3').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray4 .ui-progress3').animateProgress(94, function() {
	    $(this).animateProgress(90, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray4 .ui-progress3').animateProgress(94, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray5 .ui-progress3 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray5 .ui-progress3').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray5 .ui-progress3').animateProgress(85, function() {
	    $(this).animateProgress(80, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray5 .ui-progress3').animateProgress(85, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });
		  
		// gray bars two

	  // Hide the label at start
	  $('#progress_bar_gray001 .ui-progress4 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray001 .ui-progress4').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray001 .ui-progress4').animateProgress(90, function() {
	    $(this).animateProgress(81, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray001 .ui-progress4').animateProgress(90, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray002 .ui-progress4 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray002 .ui-progress4').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray002 .ui-progress4').animateProgress(72, function() {
	    $(this).animateProgress(63, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray002 .ui-progress4').animateProgress(72, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar_gray003 .ui-progress4 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray003 .ui-progress4').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray003 .ui-progress4').animateProgress(80, function() {
	    $(this).animateProgress(85, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray003 .ui-progress4').animateProgress(80, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });
		  
	  // Hide the label at start
	  $('#progress_bar_gray004 .ui-progress4 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray004 .ui-progress4').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray004 .ui-progress4').animateProgress(94, function() {
	    $(this).animateProgress(90, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray004 .ui-progress4').animateProgress(94, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });
		  
	  // Hide the label at start
	  $('#progress_bar_gray005 .ui-progress4 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar_gray005 .ui-progress4').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar_gray005 .ui-progress4').animateProgress(85, function() {
	    $(this).animateProgress(80, function() {
	      setTimeout(function() {
	        $('#progress_bar_gray005 .ui-progress4').animateProgress(85, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar001 .ui-progress2 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar001 .ui-progress2').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar001 .ui-progress2').animateProgress(90, function() {
	    $(this).animateProgress(81, function() {
	      setTimeout(function() {
	        $('#progress_bar001 .ui-progress2').animateProgress(90, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar002 .ui-progress2 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar002 .ui-progress2').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar002 .ui-progress2').animateProgress(72, function() {
	    $(this).animateProgress(63, function() {
	      setTimeout(function() {
	        $('#progress_bar002 .ui-progress2').animateProgress(72, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar003 .ui-progress2 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar003 .ui-progress2').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar003 .ui-progress2').animateProgress(80, function() {
	    $(this).animateProgress(85, function() {
	      setTimeout(function() {
	        $('#progress_bar003 .ui-progress2').animateProgress(80, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar004 .ui-progress2 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar004 .ui-progress2').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar004 .ui-progress2').animateProgress(94, function() {
	    $(this).animateProgress(90, function() {
	      setTimeout(function() {
	        $('#progress_bar004 .ui-progress2').animateProgress(94, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	  // Hide the label at start
	  $('#progress_bar005 .ui-progress2 .ui-label').hide();
	  // Set initial value
	  $('#progress_bar005 .ui-progress2').css('width', '7%');

	  // Simulate some progress
	  $('#progress_bar005 .ui-progress2').animateProgress(85, function() {
	    $(this).animateProgress(80, function() {
	      setTimeout(function() {
	        $('#progress_bar005 .ui-progress2').animateProgress(85, function() {
	          $('#main_content').slideDown();
	          $('#fork_me').fadeIn();
	        });
	      }, 2000);
	    });
	  });

	}
	catch (err) {

	}
	
});

$(window).load(function() {
	try {
		if ($("#youtube_video1").length > 0) {
			callPlayer("youtube_video1", "mute");	
		}	
		$('.loader01').ClassyLoader2({
				percentage: 90,
				speed: 30,
				fontSize: '16px',
				diameter: 30,
				lineColor: 'rgba(39,39,39,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 3
			});

			$('.loader02').ClassyLoader2({
				percentage: 100,
				speed: 30,
				fontSize: '18px',
				diameter: 40,
				lineColor: 'rgba(63,195,95,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 4
			});

			$('.loader03').ClassyLoader2({
				percentage: 85,
				speed: 30,
				fontSize: '22px',
				diameter: 50,
				lineColor: 'rgba(252,66,66,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 5
			});

			$('.loader04').ClassyLoader2({
				percentage: 65,
				speed: 30,
				fontSize: '27px',
				diameter: 60,
				lineColor: 'rgba(47,146,238,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 6
			});

			$('.loader05').ClassyLoader2({
				percentage: 79,
				speed: 30,
				fontSize: '30px',
				diameter: 70,
				lineColor: 'rgba(199,98,203,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 7
			});

			$('.loader06').ClassyLoader2({
				percentage: 93,
				speed: 30,
				fontSize: '35px',
				diameter: 80,
				lineColor: 'rgba(254,188,29,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 8
			});

			$('.loader07').ClassyLoader2({
				percentage: 100,
				speed: 30,
				fontSize: '40px',
				diameter: 90,
				lineColor: 'rgba(53,211,183,1)',
				remainingLineColor: 'rgba(200,200,200,0.4)',
				lineWidth: 9
			});
	}
	catch (err) {

	}	
});

/* IE8 does not support addEventListener... */
function messageEvent(add, listener) {
    var w3 = add ? window.addEventListener : window.removeEventListener;
    w3 ?
        w3('message', listener, !1)
    :
        (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
}

/**
 * @author       Rob W <gwnRob@gmail.com>
 * @website      http://stackoverflow.com/a/7513356/938089
 * @version      20131010
 * @description  Executes function on a framed YouTube video (see website link)
 *               For a full list of possible functions, see:
 *               https://developers.google.com/youtube/js_api_reference
 * @param String frame_id The id of (the div containing) the frame
 * @param String func     Desired function to call, eg. "playVideo"
 *        (Function)      Function to call when the player is ready.
 * @param Array  args     (optional) List of arguments to pass to function func*/
function callPlayer(frame_id, func, args) {
  if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
  var iframe = document.getElementById(frame_id);
  if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
      iframe = iframe.getElementsByTagName('iframe')[0];
  }

  // When the player is not ready yet, add the event to a queue
  // Each frame_id is associated with an own queue.
  // Each queue has three possible states:
  //  undefined = uninitialised / array = queue / 0 = ready
  if (!callPlayer.queue) callPlayer.queue = {};
  var queue = callPlayer.queue[frame_id],
      domReady = document.readyState == 'complete';

  if (domReady && !iframe) {
      // DOM is ready and iframe does not exist. Log a message
      window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
      if (queue) clearInterval(queue.poller);
  } else if (func === 'listening') {
      // Sending the "listener" message to the frame, to request status updates
      if (iframe && iframe.contentWindow) {
          func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
          iframe.contentWindow.postMessage(func, '*');
      }
  } else if (!domReady ||
             iframe && (!iframe.contentWindow || queue && !queue.ready) ||
             (!queue || !queue.ready) && typeof func === 'function') {
      if (!queue) queue = callPlayer.queue[frame_id] = [];
      queue.push([func, args]);
      if (!('poller' in queue)) {
          // keep polling until the document and frame is ready
          queue.poller = setInterval(function() {
              callPlayer(frame_id, 'listening');
          }, 250);
          // Add a global "message" event listener, to catch status updates:
          messageEvent(1, function runOnceReady(e) {
              if (!iframe) {
                  iframe = document.getElementById(frame_id);
                  if (!iframe) return;
                  if (iframe.tagName.toUpperCase() != 'IFRAME') {
                      iframe = iframe.getElementsByTagName('iframe')[0];
                      if (!iframe) return;
                  }
              }
              if (e.source === iframe.contentWindow) {
                  // Assume that the player is ready if we receive a
                  // message from the iframe
                  clearInterval(queue.poller);
                  queue.ready = true;
                  messageEvent(0, runOnceReady);
                  // .. and release the queue:
                  while (tmp = queue.shift()) {
                      callPlayer(frame_id, tmp[0], tmp[1]);
                  }
              }
          }, false);
      }
  } else if (iframe && iframe.contentWindow) {
      // When a function is supplied, just call it (like "onYouTubePlayerReady")
      if (func.call) return func();
      // Frame exists, send message
      iframe.contentWindow.postMessage(JSON.stringify({
          "event": "command",
          "func": func,
          "args": args || [],
          "id": frame_id
      }), "*");
  }
  /* IE8 does not support addEventListener... */
  function messageEvent(add, listener) {
      var w3 = add ? window.addEventListener : window.removeEventListener;
      w3 ?
          w3('message', listener, !1)
      :
          (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
  }
}