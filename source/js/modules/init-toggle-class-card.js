const cards = document.querySelectorAll('[data-card-horizontal]');

const initToggleClassCard = () => {
  if (cards.length === 0) {
    return;
  }

  window.addEventListener('resize', () => {
    let width = document.body.clientWidth;

    cards.forEach((card) => {
      if (width < 1024) {
        card.classList.remove('card--horizontal');
        card.classList.remove('card--horizontal-reverse');
      } else {
        card.classList.add('card--horizontal');
        card.classList.add('card--horizontal-reverse');
      }
    });
  });
};

export {initToggleClassCard};
