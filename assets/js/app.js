 (function ($) {
   "use strict";


  /*
   ------------------------  
   Body Sticky 
   --------------------------
   */
   $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".body-scroll").addClass("body-sticky");
    } else {
      $(".body-scroll").removeClass("body-sticky");
    }
  });



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



   /*
   ------------------------  
   Current Date
   --------------------------
   */
   $('#spanYear').html(new Date().getFullYear());

  

 }(jQuery));