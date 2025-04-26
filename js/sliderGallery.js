document.addEventListener('DOMContentLoaded', () => {
  const list    = document.querySelector('.card__list');
  const prevBtn = document.querySelector('.slider_nav.prev');
  const nextBtn = document.querySelector('.slider_nav.next');
  const items   = Array.from(document.querySelectorAll('.card__item'));

  const style     = getComputedStyle(items[0]);
  const itemWidth = items[0].offsetWidth
                  + parseFloat(style.marginLeft)
                  + parseFloat(style.marginRight);

  function updateNavButtons() {
    const listRect  = list.getBoundingClientRect();
    const firstRect = items[0].getBoundingClientRect();
    const lastRect  = items[items.length - 1].getBoundingClientRect();

    // Primera tarjeta visible ➜ ocultar “prev”
    if (firstRect.left >= listRect.left + 1) {
      prevBtn.classList.remove('visible');
    } else {
      prevBtn.classList.add('visible');
    }

    // Última tarjeta visible ➜ ocultar “next”
    if (lastRect.right <= listRect.right - 1) {
      nextBtn.classList.remove('visible');
    } else {
      nextBtn.classList.add('visible');
    }
  }

  // Inicial
  updateNavButtons();

  nextBtn.addEventListener('click', () => {
    list.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    list.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });

  let scrollTimeout;
  list.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateNavButtons, 100);
  });
});
