const parent = document.querySelector('.indications__content');
const parentWrapper = document.querySelector('.indications__tabs');
const list = document.querySelector('.indications__list');
const listItem = document.querySelectorAll('.indications__item');

const toggleClassIndications = () => {
  window.addEventListener('resize', () => {
    let width = document.body.clientWidth;

    if (width < 768) {
      delete parent.dataset.tabs;
      delete parentWrapper.dataset.tabs;
      parentWrapper.classList.add('swiper');
      delete list.dataset.tabs;
      list.classList.add('swiper-wrapper');
      listItem.forEach((item) => {
        delete item.dataset.tabs;
        item.classList.add('swiper-slide');
      });
    }
  });
};

export {toggleClassIndications};
