const initIndicationsSlider = () => {
  if (document.querySelector('.indications__slider')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp3 = new Swiper('.indications__slider', {
      observer: true,
      speed: 1e3,
      infinite: false,
      slidesPerView: 1.2,
      spaceBetween: 12,
      loop: false,
      pagination: {
        el: '.indications__pagination',
        clickable: true,
      },
    });
  }
};

export {initIndicationsSlider};
