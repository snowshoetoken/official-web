$(document).ready(function() {
    "use strict";
	
	// Peloader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
	// Faq Tab
	$('#faq-area-06  .accordion-single .panel-heading').on('click', function(e){
		$('#faq-area-06  .accordion-single .panel-heading').removeClass("active");
		$(this).addClass("active");
	});

  //Sticky Nav
		$(".cripto_nav").sticky({ topSpacing: 0, zIndex: 1 });
  
  //Scroll Spy    
      $('body').scrollspy({ target: '.cripto_nav' })

  //Smoth scroll
    $("nav a").on('click', function(event) {
      if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       $('html, body').animate({
       scrollTop: $(hash).offset().top
       }, 1500, function(){
       window.location.hash = hash;
       });
      } // End if
    });

	
	//Team Carousel   
    $("#team_01").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        navigation : false,
        pagination : true,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 1)
           .addClass('active')    
        } 
    });


    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 
	
	//WOW animation   
     new WOW().init();

});
