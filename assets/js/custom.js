(function ($) {
    "use strict";
    // TOP Menu Sticky

    $(document).ready(function () {
        // review-active
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplaySpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                767: {
                    items: 2,
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1500: {
                    items: 3
                }
            }
        });
    });



    $(document).ready(function () {
        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion, #bs-collapse')
            .on('show.bs.collapse', function (a) {
                $(a.target).prev('.panel-heading').addClass('active');
            })
            .on('hide.bs.collapse', function (a) {
                $(a.target).prev('.panel-heading').removeClass('active');
            });
    });


    //////////////////////////////// Owl carousel ///////////////////////////////////


    // review-active
    $('#owl-demo').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplaySpeed: 800,

        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            767: {
                items: 1,
                dots: false,
                nav: false,
            },
            992: {
                items: 1,
                nav: false
            },
            1200: {
                items: 1,
                nav: false
            },
            1500: {
                items: 1
            }
        }
    });

    $(document).ready(function () {
        $("#owl-demo").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

    });


})(jQuery);