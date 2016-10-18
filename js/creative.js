/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
    
    $(window).on('scroll', function() {
      $(".progress-80").animate({
          width: "80%"
      }, 5000  );
       $(".progress-75").animate({
          width: "75%"
      }, 5000 );
  $(".progress-85").animate({
          width: "85%"
      }, 5500 );
  $(".progress-65").animate({
    width: "65%"
}, 5000 );
  $(".progress-50").animate({
    width: "50%"
}, 5000 );

  $(".progress-70").animate({
    width: "70%"
}, 5000 );
  $(".progress-30").animate({
    width: "30%"
}, 2500 );
  $(".progress-40").animate({
    width: "40%"
}, 5000 );
  $(".progress-bar9").animate({
    width: "40%"
}, 5000 );
  $(".progress-bar13").animate({
    width: "100%"
}, 5000 );
    })
       

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


