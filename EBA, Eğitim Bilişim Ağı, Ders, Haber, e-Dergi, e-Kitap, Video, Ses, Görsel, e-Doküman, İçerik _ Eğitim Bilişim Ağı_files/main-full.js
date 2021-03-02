function searchBar() {
    var genislik = $(window).width();
    if (genislik < 576) {
        //$(".eba-search").hide();
        $("#search-anchor").click(function (e) {
            e.preventDefault();
            $(".eba-search").show();
            $('#searchingWord').focus();
        });
        $(".search_div > a.close").click(function (e) {
            e.preventDefault();
            $(".eba-search").hide();
        });
        // return true;
    }
    else if (genislik >= 576) {
        $(".eba-search").show();
    }
};

$(window).on('resize',searchBar);

$(document).ready(function() {

    //Mobile Search
    searchBar();

    // Tooltip
    //$('.activity-date').tooltip();

    // Profile Page Header Inage Fill
    $('.profile-page-header').imagefill();
    $('.content-list-slider-img').imagefill();
    $('.content-list-item-img-link').imagefill();
    $('.slider-area-content-box-img').imagefill();
    //$('.slider-right-video-img').imagefill();
    //$('.main-content-list-big-img').imagefill();
    //$("html, body").animate({ scrollTop: "116px" });

    // Owl-Slider Inage Fill
    //$('.content-list-slider-img').imagefill();

    // owl carousel (MANŞET SCROLLDAN SONRA BAŞLAYACAK)

    var owl_event = jQuery("#main-slider");
    owl_event.owlCarousel({
        autoPlay: 3000,
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem:true,
        stopOnHover:true,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left mdi-48px'></i>",
            "<i class='mdi mdi-chevron-right mdi-48px'></i>"
        ]
    });
    var owl = jQuery("#main-slider").data('owlCarousel');
    if (owl !== undefined) {
        owl.stop();

        var slider_bttm = $('#main-slider').offset().top - window.pageYOffset + $('#main-slider').height() - 100; // öğenin animasyonlu gelişi 100px aşağıdan başladığı için
        var slider_pstn = slider_bttm - $(window).height();
        if( slider_pstn < 0 && owl.apStatus != "play")
        {
            owl.play();
        }
    }
    jQuery(window).scroll(function()
    {
        if (owl !== undefined) {
            var y_scroll_pos = window.pageYOffset;
            var slider_bottom = $('#main-slider').offset().top + $('#main-slider').height();
            var slider_position = slider_bottom - $(window).height();
            if (y_scroll_pos > slider_position && owl.apStatus != "play") {
                owl.play();
            }
        }
    });


    /*$("#main-slider").owlCarousel({
        autoPlay: 3000,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        stopOnHover:true,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left mdi-48px'></i>",
            "<i class='mdi mdi-chevron-right mdi-48px'></i>"
        ]

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    }); */

    $("#main-code-slider").owlCarousel({
        autoPlay: 3000,
        slideSpeed : 300,
        paginationSpeed : 400,
        autoWidth:true,
        singleItem:true,
        stopOnHover:true,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left mdi-48px'></i>",
            "<i class='mdi mdi-chevron-right mdi-48px'></i>"
        ]

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    $("#same-content-slider").owlCarousel({
        autoPlay: 3000,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : false, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left mdi-48px'></i>",
            "<i class='mdi mdi-chevron-right mdi-48px'></i>"
        ],
        items : 3,
        itemsDesktop : [767,2],
        itemsDesktopSmall : [575,2],
        pagination : false,
        scrollPerPage:true
    });

    $("#other-content-slider").owlCarousel({
        autoPlay: 3000,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : false, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left mdi-48px'></i>",
            "<i class='mdi mdi-chevron-right mdi-48px'></i>"
        ],
        items : 3,
        itemsDesktop : [767,2],
        itemsDesktopSmall : [575,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#editor-selected").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#last-added").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#most-liked").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#most-viewed").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#video-lists").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#picture-albums").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#showcase").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,2],
        pagination : false,
        scrollPerPage:true
    });
    $("#code-videos").owlCarousel({
        autoPlay: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
        itemsTablet :[768,2],
        itemsMobile	: [479,1],
        pagination : false,
        scrollPerPage:true
    });

    //Eba v5 Main Page Carousels */
    $("#main-page-your-news-carousel").owlCarousel({
        autoPlay: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 3,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,1],
        pagination : false,
        navigation: true,
        scrollPerPage:true
    });

    $("#main-page-eba-news-carousel").owlCarousel({
        autoPlay: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,1],
        pagination : false,
        navigation: true,
        scrollPerPage:true
    });

    $("#main-page-video-carousel").owlCarousel({
        autoPlay: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation : true, // Show next and prev buttons
        navigationText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet :[768,2],
        itemsMobile	: [479,1],
        pagination : false,
        navigation: true,
        scrollPerPage:true
    });

    $("#egitim-takvimi-slider").owlCarousel({
        items:1,
        stagePadding: 75,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        nav:true,
        dots: false,
        navText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ]


    });
    $(function(){

    });
    


    //Province Slider
    /*
    $('#carousel-code-generic-2').carousel({
        interval: 1000 * 7
    });
    */

    //Accordion Panel Icon
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('mdi-plus mdi-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    $(function() {
        var header = $(".header-area");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 80) {
                header.removeClass('normal-header').addClass("fixed-header");
            } else {
                header.removeClass("fixed-header").addClass('normal-header');
            }
        });
    });

    $('#navbar-menu-icon').click(function(){
        $(this).toggleClass('open');
    });

    $('#overlay-search-btn').click(function() {
        $('#eba-search-area').addClass('overlay-search');
        $('.add-content-button').hide();
        $('.suggests').removeClass("active");
        $('#searchClearBtn').hide();
        $('#eba-search-area input').val('');
        setTimeout(function(){
            $('#eba-search-area input').focus();
       },300);
    });
    $('#overlay-search-close').click(function() {
        $('#eba-search-area').removeClass('overlay-search');
        $('.add-content-button').show();
        $('#eba-search-area input').val('');
        $('.suggests').removeClass("active");
        $('#searchClearBtn').hide();
    });


    //Animasyonlu div gösterimi

    AOS.init({
        once: true,
    });

    if ($('body').hasClass('sub_pages')){
        //console.log("sd");
        $('.with-sidebar-content-area').addClass('container');
        $('#searchTabs').addClass('container');
    }

    // Manşet başlatma



    /* YENI VIDEO CAROUSEL */
    $('.owl-carousel').owlCarousel({
        loop:false,
        responsiveClass:true,
        margin:0,
        dots: false,
        nav:true,
        navText: ["<i class='mdi mdi-chevron-left'></i>","<i class='mdi mdi-chevron-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            580:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
            }
        }
    })

    //VIDEO DETAY SUTUN YUKSEKLIK AYARI
    /*setTimeout(function(){
        if ($('.ec-selected-video-area').height() < $('.ec-related-videos-area').height()){
            $('.ec-selected-video-area').height($('.ec-related-videos-area').height())
        }
    }, 200);*/
});
