/*
=====================
JS Table of Conttent 
=====================
01. Body Sticky 
02. Mobile Menu 
03. Open Menu
04. Popup  Search
05. Load More
06. Load More
07. Slider Carousel
08. Slider Carousel
09. Current Date
10. Scroll to Top
11. Animation Aos
12. Pricing Table

*/

(function ($) {
  "use strict";

  /*
   ------------------------  
   01. Body Sticky 
   --------------------------
   */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".body-scroll").addClass("body-sticky");
      if ($('.nokum-menu-icon').hasClass('close-button')) {
        $('.header-area').addClass('header-sticky');
      }
    } else {
      $(".body-scroll").removeClass("body-sticky");
      $('.header-area').removeClass('header-sticky');
    }
  });

  /*  Active Class*/
  $('.nokum-menu-icon').on('click', function () {
    $(this).toggleClass("close-button")
    $(".header-area ").toggleClass('header-sticky');
  })

  /*
  ------------------------  
  02. Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class").slideToggle();
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });

  /*
 ------------------------  
 03. Open Menu
 --------------------------
 */

  $('.nav-button').on('click', function () {
    $('body').toggleClass('nav-open');
  });

  /*
------------------------  
04. Popup  Search
--------------------------
*/

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    alignTop: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
    callbacks: {
      open: function () {
        $('body').addClass('my-mfp-slide-main');
      },
      close: function () {
        setTimeout(function () {
          $('body').removeClass('my-mfp-slide-main');
        }, 100)
      }
    }
  });

  /*
------------------------  
05. Load More
--------------------------
*/
  $('.blog-post-all').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `explore/explore-${nextIndex}.html`;
      }
    },
    append: '.blog-post-box',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });

  /*
------------------------  
06. Load More
--------------------------
*/
  $('.blog-post-all-two').infiniteScroll({
    path: function () {
      if (this.loadCount < 2) {
        let nextIndex = this.loadCount + 2;
        return `blog/blog-${nextIndex}.html`;
      }
    },
    append: '.blog-post-box-two',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });

  /*
------------------------  
07. Slider Carousel
--------------------------
*/
  $('.post-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 300,

    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });

  /*
------------------------  
08. Slider Carousel
--------------------------
*/
  $('.home-2-slider').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 300,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,

    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      }

    ]

  });

  /*
------------------------  
09.  Current Date
--------------------------
*/
  $('#spanYear').html(new Date().getFullYear());

  /*
------------------------  
10.   Scroll to Top
--------------------------
*/

  function scrolltop() {

    var wind = $(window);

    wind.on("scroll", function () {

      var scrollTop = $(window).scrollTop();

      if (scrollTop >= 500) {

        $(".scroll-top").fadeIn("slow");

      } else {

        $(".scroll-top").fadeOut("slow");
      }

    });

    $(".scroll-top").on("click", function () {

      var bodyTop = $("html, body");

      bodyTop.animate({
        scrollTop: 0
      }, 800, "easeOutCubic");
    });

  }
  scrolltop();

  /*
------------------------  
11.   Animation Aos
--------------------------
*/
  AOS.init({
    offset: 50,
    delay: 200,
    duration: 2000,
    easing: 'ease',
    once: true,
    mirror: true,
    anchorPlacement: 'top-center',

  });

  /*
------------------------  
12.  Pricing Table
--------------------------
*/

  (function ($) {

    //   Change the active class on the switcher
    var price = $('.pricing-table__price');
    var year = $("#year");
    var month = $("#month");

    year.on('click', function () {
      $(this).addClass('active');
      month.removeClass('active');
      price.each(function () {
        $(this).text($(this).data('year-price'));
      });
    });

    month.on('click', function () {
      $(this).addClass('active');
      year.removeClass('active');
      price.each(function () {
        $(this).text($(this).data('month-price'));
      });
    });

  })(jQuery);

}(jQuery));