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
    $(".progress-bar-1").animate({
    width: "80%"
}, 2500 );
  $(".progress-bar2").animate({
    width: "85%"
}, 2500 );
  $(".progress-bar3").animate({
    width: "75%"
}, 2500 );
  $(".progress-bar4").animate({
    width: "55%"
}, 2500 );
  $(".progress-bar5").animate({
    width: "50%"
}, 2500 );

  $(".progress-bar6").animate({
    width: "55%"
}, 2500 );
  $(".progress-bar7").animate({
    width: "60%"
}, 2500 );
  $(".progress-bar8").animate({
    width: "45%"
}, 2500 );
  $(".progress-bar9").animate({
    width: "40%"
}, 2500 );
  $(".progress-bar10").animate({
    width: "75%"
}, 2500 );
  $(".progress-bar11").animate({
    width: "50%"
}, 2500 );
  $(".progress-bar12").animate({
    width: "55%"
}, 2500 );
  $(".progress-bar13").animate({
    width: "100%"
}, 2500 );




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


