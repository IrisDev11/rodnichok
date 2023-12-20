const initContentModal = () => {
  const btnOpenModals = document.querySelectorAll('.card-documentation__btn');
  const modalBlock = document.querySelector('[data-modal="documentation"]');

  if (!modalBlock) {
    return;
  }

  // const modalTitle = modalBlock.querySelector('.modal-info__text h2');
  // const modalText = modalBlock.querySelector('.modal-info__text p');
  const modalImg = modalBlock.querySelector('img');

  btnOpenModals.forEach((item) => {
    item.addEventListener('click', () => {
      // const title = item.querySelector('[data-modal-title]');
      // const text = item.querySelector('[data-modal-text]');
      const img = item.dataset.modalImage;

      // modalTitle.textContent = title.textContent;
      // modalText.textContent = text.textContent;
      modalImg.src = `img/documentation/${img}@2x.png`;
    });
  });
};
export {initContentModal};
