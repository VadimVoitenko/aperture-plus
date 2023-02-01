const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // Count preview slides
  slidesPerView: 5,

  // Padding between the slider
  spaceBetween: 30,

  // Active slide will be centered without adding gaps at the beginning and end of slider
  centeredSlides: true,

  // Auto Heigth
  autoHeigth: true,

  // Disabling functionality if there are fewer slides than needed
  watchOverflow: true,

  // Accept mouse events like touch events (click and drag to change slides)
  simulateTouch: true,

  // "Grab" cursor, when hover on Swiper
  grabCursor: true,

  // Speed
  speed: 2000,

  // Autoplay
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  // Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 125,
      // centeredSlides: true,
    }, 640: {
      slidesPerView: 2,
      spaceBetween: 150,
      centeredSlides: false,
    }, 768: {
      slidesPerView: 3,
      spaceBetween: 150,
    }, 1024: {
      slidesPerView: 4,
      spaceBetween: 150,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 150,
    },

    // Stop autoplay, when mouse on slider
    // on: {
    //   init() {
    //     this.el.addEventListener('mouseenter', () => {
    //       this.autoplay.stop();
    //     });

    //     this.el.addEventListener('mouseleave', () => {
    //       this.autoplay.start();
    //     });
    //   },
    // },

    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: 'Попередній слайд',
      nextSlideMessage: 'Наступний слайд',
      notificationClass: 'swiper-notification',
    },
  },
});
