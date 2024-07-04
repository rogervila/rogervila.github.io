// Preloader
$(window).load(function () {
  "use strict";
  $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function () {
  "use strict";

  // One Page Nav
  $(".navigation").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 700,
    scrollThreshold: 0.5,
    easing: 'easeInOutCubic'
  });

  // Portfolio filter
  if ($('#works .item-outer').length > 0) {
    $('#works .item-outer').filterizr();
  }

  $('.control ul li').on('click', function () {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });

  // Hamburger Menu & Mobile Push menu
  $(".hamburger-menu, .main-nav ul li a").on('click', function () {
    $(".header").toggleClass("pushed");
    $(".main-content").toggleClass("main-pushed");
    $('.bar').toggleClass('animate');
  });

  // Carousels
  $(".testimonial-carousel").owlCarousel({
    singleItem: true
  });

  // Header Height
  function setHeaderSize() {
    $(".header").css({ 'height': (visualViewport.height) + 'px' });
  }

  setHeaderSize()

  $(window).on('resize scroll', function () {
    setHeaderSize()
  })
});
