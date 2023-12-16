const initSliderReviews = () => {
  if (document.querySelector('.reviews__content')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp = new Swiper('.reviews__content', {
      observer: true,
      slidesPerView: 1,
      slidePerGroup: 1,
      speed: 1e3,
      infinite: false,
      loop: false,
      pagination: {
        el: '.reviews__pagination',
        clickable: true,
      },
    });
  }
};

export {initSliderReviews};
