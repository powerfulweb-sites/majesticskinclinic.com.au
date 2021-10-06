import Swiper, { Pagination, Autoplay } from 'swiper';

// CSS IMPORT MOVED TO SCSS index file to use BS variables
new Swiper('#js-swiper-promotions', {
  modules: [Pagination, Autoplay],
  loop: true,
  loopedSlides: null,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // enable cross fade
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // Default parameters (bs5 xs)
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // BS5 SM
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: false,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
    // BS5 MD
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   autoplay: false,
    //   allowSlideNext: false,
    //   allowSlidePrev: false,
    //loop: false,
    //loopedSlides: null,
    //},
    // BS5 LG
    //   992: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // // BS5 XL
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 40
    // }
  },
});
