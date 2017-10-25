(function($){

	$( document ).ready( function() {
		new WOW().init();

		$( '.main-menu__icon' ).on( 'click', function() {
			var $this = $( this ),
				$parent = $this.parent( '.main-menu' );

			$parent.toggleClass( 'menu_state_open' );
		});

		$('div[data-type="background"]').each(function(){
			var $bgobj = $(this);

			$( window ).scroll( function() {
				var yPos = -( $( window ).scrollTop() / $bgobj.data('speed'));
				var coords = '50% '+ yPos + 'px';

				$bgobj.css({ backgroundPosition: coords });
			} );

		});
		///////// timer
		var countdown = $('.countdown');

		countdown.downCount( {
			date: '10/19/2017 14:19:00',
			offset: +3
		}, function () {
		} );

		var curVal;

		$('.activities .likes').on( 'click', function(){

			var $this = $( this ),
				$val  = $( '.value', $this ),
				initVal = +$this.data('init');

				$val.html(initVal++);

				$this.data('init', initVal);

			return false;

		} )
		//////////

		///////// knopka button -top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.ui-to-top').fadeIn();
			} 
			else {
				$('.ui-to-top').fadeOut();
			}
		});
			 
		$('.ui-to-top').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		////////////


			
			// Product Grid
		$('#grid-view').click(function() {
			// What a shame bootstrap does not take into account dynamically loaded columns
			var cols = $('#column-right, #column-left').length;
			$(this).addClass('active');
			$('#list-view').removeClass('active');
			if (cols == 2) {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
			} else if (cols == 1) {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
			} else {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-2 col-md-3 col-sm-6 col-xs-12');
			}

			
		});
		

		// Product List
		$('#list-view').click(function() {
			$('#content .product-grid > .clearfix').remove();
			$(this).addClass('active');
			$('#grid-view').removeClass('active');
			$('#content .product-layout').attr('class', 'product-layout product-list col-xs-12');

			
		});
		//////////////// Pagination
		$("div.holder").jPages({
	      containerID : "itemContainer",
	      perPage : 6
	    });

	    /* on select change */
	    $("select").change(function(){
	      /* get new nº of items per page */
	      var newPerPage = parseInt( $(this).val() );

	      /* destroy jPages and initiate plugin again */
	      $("div.holder").jPages("destroy").jPages({
	        containerID   : "itemContainer",
	        perPage       : newPerPage
	      });
	    });
		/////////////////////

			//////////код выравнивания блоков
		$('.container').each(function(){
        var highestBox = 0;
        $('.wdwd ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
       	$('.fwdwd ',this).height(highestBox);
   		});
			//////////////////////slider
		var slideNow = 1;
		var slideCount = $('#slidewrapper').children().length;
		var slideInterval = 3000;
		var navBtnId = 0;
		var translateWidth = 0;

		$(document).ready(function() {
		    var switchInterval = setInterval(nextSlide, slideInterval);

		    $('#viewport').hover(function() {
		        clearInterval(switchInterval);
		    }, function() {
		        switchInterval = setInterval(nextSlide, slideInterval);
		    });

		    $('#next-btn').click(function() {
		        nextSlide();
		    });

		    $('#prev-btn').click(function() {
		        prevSlide();
		    });

		    $('.slide-nav-btn').click(function() {
		        navBtnId = $(this).index();

		        if (navBtnId + 1 != slideNow) {
		            translateWidth = -$('#viewport').width() * (navBtnId);
		            $('#slidewrapper').css({
		                'transform': 'translate(' + translateWidth + 'px, 0)',
		                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		            });
		            slideNow = navBtnId + 1;
		        }
		    });
		});


		function nextSlide() {
		    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		        $('#slidewrapper').css('transform', 'translate(0, 0)');
		        slideNow = 1;
		    } else {
		        translateWidth = -$('#viewport').width() * (slideNow);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow++;
		    }
		}

		function prevSlide() {
		    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		        translateWidth = -$('#viewport').width() * (slideCount - 1);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow = slideCount;
		    } else {
		        translateWidth = -$('#viewport').width() * (slideNow - 2);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow--;
		    }
		}
		////////////////slider

	});// end ready

})( jQuery );
