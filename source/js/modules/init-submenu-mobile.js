const mediaQuery = window.matchMedia('(max-width: 1024px)');

const initSubmenuMobile = () => {
  window.addEventListener('resize', () => {
    if (mediaQuery.matches) {
      const nav = document.querySelector('.main-nav');
      nav.addEventListener('click', (evt) => {
        let elem = evt.target;

        if (elem.classList.contains('main-nav__link')) {
          let submenu = elem.parentNode.lastElementChild;
          if (submenu.classList.contains('submenu')) {
            evt.preventDefault();
            if (submenu.classList.contains('is-active')) {
              submenu.classList.remove('is-active');
              elem.lastElementChild.classList.remove('is-open');
            } else {
              submenu.classList.add('is-active');
              elem.lastElementChild.classList.add('is-open');
            }
          }
        }
      });
    }
  });
};

export {initSubmenuMobile};
