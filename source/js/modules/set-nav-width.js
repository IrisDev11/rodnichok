export const setNavWidth = () => {
  const nav = document.querySelector('.main-nav__list');
  if (!nav) {
    document.documentElement.style.setProperty('--nav-width', 0 + 'px');
    return;
  }

  const navRect = nav.getBoundingClientRect();
  nav.setAttribute('data-nav-width', navRect.width);
};
