// const initSliderNews = () => {
// // eslint-disable-next-line no-new, no-unused-vars, no-undef
//   const swiper2 = new Swiper('.news__slider', {
//     spaceBetween: 10,
//     slidesPerView: 1,
//     speed: 800,
//     pagination: {
//       el: '.slider__pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.slider__btn--next',
//       prevEl: '.slider__btn--prev',
//     },
//     breakpoints: {
//       360: {
//         slidesPerView: 1.2,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//       1280: {
//         slidesPerView: 4,
//       },
//     },
//   });
// };
const initSliderNews = () => {
  if (document.querySelector('.news__slider')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp = new Swiper('.news__slider', {
      observer: true,
      speed: 1e3,
      infinite: false,
      slidesPerView: 4,
      spaceBetween: 12,
      loop: false,
      pagination: {
        el: '.news__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.news__btn--next',
        prevEl: '.news__btn--prev',
      },
      breakpoints: {
        360: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }
};

export {initSliderNews};
