
(function(){
    const openMenu =document.querySelector('.nav__menu');
    const menu =document.querySelector('.nav__link');
    const closeMenu=document.querySelector('.nav__close');
    const filter=document.querySelector('.filter');
    const aboutButton=document.querySelector('.about__button__header');
    const quouteButton=document.querySelector('.quote__button__header');
    const locationButton=document.querySelector('.location__button__header');
    const contactButton=document.querySelector('.contact__button__header');

    //open menu
    openMenu.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
        filter.classList.add('filter--show');
    });

    // close menu
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
        // menu.classList.toggle('nav__link--show');    se puede remover y quitar en caso que sea un mismo boton
    });
    aboutButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
    });
    quouteButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
    });
    locationButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
    });
    contactButton.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        filter.classList.remove('filter--show');
    });

})();
