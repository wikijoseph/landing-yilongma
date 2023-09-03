"use strict"; // Start of use strict
(function($) {
    function thmBackgroundSlider () {
        if ($('.background-slider').length) {
            $('.background-slider').vegas({
                delay: 5000,
                timer: false,
                transition: ['fade', 'fade2'],
                animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight'],
                slides: [
                    { src: "images/banner-5-1.jpg" },
                    { src: "images/banner-5-2.jpg" }
                ]
            });
        }
    }
    $(window).on('load', function() {
        thmBackgroundSlider();
    });


})(jQuery);