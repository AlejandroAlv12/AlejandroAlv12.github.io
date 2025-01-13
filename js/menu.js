(function () {
    const openMenu = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const filter = document.querySelector('.filter');
    const locationButton = document.querySelector('.location__button__header');
    const quouteButton = document.querySelector('.quote__button__header');
    const galleryButton = document.querySelector('.gallery__button__header');
    const questionsButton = document.querySelector('.question__button__header');
    const contactButton = document.querySelector('.contact__button__header');
    const albumImg = document.querySelector('.album__image');

    // Bloquea el scroll añadiendo la clase 'no-scroll'
    const blockScroll = () => {
        document.body.classList.add('no-scroll');
    };

    // Reactiva el scroll eliminando la clase 'no-scroll'
    const unblockScroll = () => {
        document.body.classList.remove('no-scroll');
    };

    // Abrir menú
    openMenu?.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
        filter.classList.add('filter--show');
        albumImg.classList.add('album__image--zindex');
        blockScroll(); // Bloquea el scroll al abrir el menú
    });

    // Cerrar menú
    closeMenu?.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
        unblockScroll(); // Reactiva el scroll al cerrar el menú
    });

    // Elimina blur al seleccionar un item del menú y reactiva el scroll
    const closeMenuAndUnblock = () => {
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        albumImg.classList.remove('album__image--zindex');
        unblockScroll(); // Reactiva el scroll al seleccionar un item
    };

    locationButton?.addEventListener('click', closeMenuAndUnblock);
    quouteButton?.addEventListener('click', closeMenuAndUnblock);
    galleryButton?.addEventListener('click', closeMenuAndUnblock);
    questionsButton?.addEventListener('click', closeMenuAndUnblock);
    contactButton?.addEventListener('click', closeMenuAndUnblock);

    // Hace blur al hover sobre album__img
    albumImg?.addEventListener('mouseover', () => {
        filter.classList.add('filter--showimg');
    });

    albumImg?.addEventListener('mouseout', () => {
        filter.classList.remove('filter--showimg');
    });
})();
