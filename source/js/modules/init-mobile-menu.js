const toggle = document.querySelector('.header__nav-toggle');
const header = document.querySelector('.header');

const initMobileMenu = () => {
  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    if (header.classList.contains('header--menu-open')) {
      header.classList.remove('header--menu-open');
    } else {
      header.classList.add('header--menu-open');
    }
  });
};

export {initMobileMenu};
