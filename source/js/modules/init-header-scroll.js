const header = document.querySelector('.header');

const initHeaderScroll = () => {
  if (header) {
    window.addEventListener('scroll', () => {
      const headerHeight = header.offsetHeight;
      let scrollDictance = window.scrollY;

      if (scrollDictance >= headerHeight) {
        header.classList.add('header--scroll');
      } else {
        header.classList.remove('header--scroll');
      }
    });
  }
};

export {initHeaderScroll};
