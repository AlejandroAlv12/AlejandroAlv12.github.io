document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.card__list');
    const prevBtn = document.querySelector('.slider_nav.prev');
    const nextBtn = document.querySelector('.slider_nav.next');
    const item = document.querySelector('.card__item');
    // ancho completo de un item (incluye margin)
    const itemStyle = getComputedStyle(item);
    const itemWidth = item.offsetWidth 
      + parseFloat(itemStyle.marginLeft) 
      + parseFloat(itemStyle.marginRight);
  
    nextBtn.addEventListener('click', () => {
      list.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });
  
    prevBtn.addEventListener('click', () => {
      list.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
  });
  