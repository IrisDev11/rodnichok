const initSliderCards = () => {
  if (document.querySelector('.card-number__swiper')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp = new Swiper('.card-number__swiper', {
      observer: true,
      speed: 1e3,
      infinite: false,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.card-number__btn--next',
        prevEl: '.card-number__btn--prev',
      },
    });
  }
};

export {initSliderCards};
