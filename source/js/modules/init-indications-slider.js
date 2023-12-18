const initIndicationsSlider = () => {
  window.addEventListener('resize', () => {
    let width = document.body.clientWidth;

    if (width < 768) {
      if (document.querySelector('.indications__tabs')) {
        // eslint-disable-next-line no-new, no-unused-vars, no-undef
        let swp3 = new Swiper('.indications__tabs', {
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
    }
  });
};

export {initIndicationsSlider};
