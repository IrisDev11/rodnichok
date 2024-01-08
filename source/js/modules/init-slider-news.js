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
        320: {
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
