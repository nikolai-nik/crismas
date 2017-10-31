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
		var slideInterval = 6000;
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





		///////////////клик показать скрыть
		$('#link1').click(function(){
			if($('#look1').css("display")=="block"){
				$('#look1').css("display", "none");
			}
			else{
				$('#look1').css("display", "block");
			}
		});
		//
		$('#link2').click(function(){
			if($('#look2').css("display")=="flex"){
				$('#look2').css("display", "none");
			}
			else{
				$('#look2').css("display", "flex");
			}
		});
		$('#link3').click(function(){
			if($('#look3').css("display")=="flex"){
				$('#look3').css("display", "none");
			}
			else{
				$('#look3').css("display", "flex");
			}
		});
		$('#link4').click(function(){
			if($('#look4').css("display")=="flex"){
				$('#look4').css("display", "none");
			}
			else{
				$('#look4').css("display", "flex");
			}
		});


	});// end ready

})( jQuery );
