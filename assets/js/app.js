(function ($) {
  "use strict";

    /*
------------------------  
01. Preloader
--------------------------
*/
$(window).on('load', function () {
  var preLoder = $(".preloader");
  preLoder.fadeOut(20);
});

  /*
   ------------------------  
   Body Sticky 
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
  Mobile Menu 
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

  /* Mobile-menu	 */
  $('.nav-button').on('click', function () {
    $('body').toggleClass('nav-open');
  });
  $('.popup-with-form').magnificPopup({
    type: 'inline', 
    fixedContentPos: false, 
    alignTop : true, 
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true, 
		removalDelay: 300, 
    mainClass: 'my-mfp-slide-bottom', 
    callbacks: { 
      open: function() {
        $('body').addClass('my-mfp-slide-main'); 
      },
      close: function() { 
        setTimeout(function() {
          $('body').removeClass('my-mfp-slide-main');
        }, 100) 
      } 
    }
	});
  /*
------------------------  
Load More
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


  $('.post-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay:true,
    speed: 300,


    responsive: [
      {
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
  Current Date
  --------------------------
  */
  $('#spanYear').html(new Date().getFullYear());

  /*=============================================
         Scroll to Top
  ===============================================*/

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
  AOS.init({
    offset: 50,
    delay: 200,
    duration: 2000,
    easing: 'ease',
    once: true,
    mirror: true,
    anchorPlacement: 'top-center',

  });

}(jQuery));



