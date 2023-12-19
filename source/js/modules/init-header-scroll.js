const header = document.querySelector('.header');

const initHeaderScroll = () => {
  if (header) {
    window.addEventListener('scroll', () => {
      const headerHeight = header.offsetHeight;
      const intro = document.querySelector('.intro');
      let scrollDictance = window.scrollY;

      if (scrollDictance >= headerHeight) {
        header.classList.add('header--scroll');
        intro.style.marginTop = `${headerHeight}px`;
      } else {
        header.classList.remove('header--scroll');
        intro.style.marginTop = null;
      }
    });
  }
};

export {initHeaderScroll};
