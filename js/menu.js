(function () {
    const openMenu = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const filter = document.querySelector('.filter');
    const aboutButton = document.querySelector('.about__button__header');
    const quouteButton = document.querySelector('.quote__button__header');
    const locationButton = document.querySelector('.location__button__header');
    const contactButton = document.querySelector('.contact__button__header');
    const albumImg = document.querySelector('.album__image');

    //open menu
    openMenu.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
        filter.classList.add('filter--show');
        albumImg.classList.add('album__image--zindex');
    });

    // close menu
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
        // menu.classList.toggle('nav__link--show');    se puede remover y quitar en caso que sea un mismo boton
    });
    //elimina blur al seleccionar item del menu
    aboutButton.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
    });
    quouteButton.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
    });
    locationButton.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
    });
    contactButton.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
    });


    //hace blur al hover sobre album__img
    albumImg.addEventListener('mouseover', () => {
        filter.classList.add('filter--showimg');
    
    });
    albumImg.addEventListener('mouseout', () => {
        filter.classList.remove('filter--showimg');
    });

})();