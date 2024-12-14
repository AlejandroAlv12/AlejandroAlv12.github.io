// gallery.js

// Seleccionar elementos
const filter = document.getElementById('filterID');
const gallery = document.querySelector('.galeria');
const body = document.body;

// Crear contenedor para la imagen ampliada
const fullscreenContainer = document.createElement('div');
fullscreenContainer.classList.add('fullscreen-container');
fullscreenContainer.innerHTML = `
    <button class="close-btn">&times;</button>
    <div class="content"></div>
`;
body.appendChild(fullscreenContainer);

const closeButton = fullscreenContainer.querySelector('.close-btn');
const content = fullscreenContainer.querySelector('.content');

// Evento para abrir imagen o video en modo fullscreen
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('img') || e.target.classList.contains('video')) {
        const element = e.target.cloneNode(true);
        content.innerHTML = ''; // Limpiar contenido previo
        content.appendChild(element);

        // Mostrar fondo difuminado y contenedor
        filter.style.display = 'block';
        fullscreenContainer.style.display = 'flex';
    }
});

// Evento para cerrar la vista fullscreen
closeButton.addEventListener('click', () => {
    filter.style.display = 'none';
    fullscreenContainer.style.display = 'none';
});

// Ocultar al hacer clic en el fondo
filter.addEventListener('click', () => {
    filter.style.display = 'none';
    fullscreenContainer.style.display = 'none';
});