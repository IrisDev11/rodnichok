const initMoreNav = () => {
  window.addEventListener('resize', () => {
    let width = document.body.clientWidth;

    if (width >= 1024 && width < 1280) {
      const nav = document.querySelector('.main-nav__list');
      const itemList = Array.from(document.querySelectorAll('.main-nav__item'));

      let widthList = 0;
      for (let i = 0; i < itemList.length; i++) {
        widthList += itemList[i].offsetWidth;
      }

      const navWidth = nav.dataset.navWidth;
      const moreList = document.querySelector('.more__list');

      if (navWidth < widthList) {
        while (navWidth < widthList) {
          moreList.appendChild(nav.lastElementChild);
          widthList = widthList - nav.lastElementChild.offsetWidth;
        }
      }
    }
  });
};

export {initMoreNav};
