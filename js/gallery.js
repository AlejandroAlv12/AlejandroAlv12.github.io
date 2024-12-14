// Seleccionar elementos
const filter = document.getElementById('filterID');
const gallery = document.querySelector('.galeria');
const body = document.body;

// Crear contenedor para la imagen ampliada
const fullscreenContainer = document.createElement('div');
fullscreenContainer.classList.add('fullscreen-container');
fullscreenContainer.innerHTML = `
    <div class="content">
        <button class="close-btn">&times;</button>
        <div class="media-container"></div>
    </div>
`;
body.appendChild(fullscreenContainer);

const closeButton = fullscreenContainer.querySelector('.close-btn');
const mediaContainer = fullscreenContainer.querySelector('.media-container');

// Ajustar dinámicamente el tamaño del contenedor y su contenido
const adjustMediaSize = (element) => {
    const viewportWidth = window.innerWidth * 0.9; // 90% del ancho de la ventana
    const viewportHeight = window.innerHeight * 0.9; // 90% del alto de la ventana
    const naturalWidth = element.naturalWidth || element.videoWidth;
    const naturalHeight = element.naturalHeight || element.videoHeight;
    const aspectRatio = naturalWidth / naturalHeight;

    // Ajustar tamaño según la relación de aspecto
    if (aspectRatio > 1) {
        // Imagen/video más ancho que alto
        element.style.width = `${Math.min(viewportWidth, naturalWidth)}px`;
        element.style.height = 'auto';
    } else {
        // Imagen/video más alto que ancho
        element.style.width = 'auto';
        element.style.height = `${Math.min(viewportHeight, naturalHeight)}px`;
    }

    // Asegurar que no desborde el viewport
    element.style.maxWidth = `${viewportWidth}px`;
    element.style.maxHeight = `${viewportHeight}px`;
};

// Evento para abrir imagen o video en modo fullscreen
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('img') || e.target.classList.contains('video')) {
        const element = e.target.cloneNode(true); // Crear un clon del elemento clickeado
        mediaContainer.innerHTML = ''; // Limpiar contenido previo
        mediaContainer.appendChild(element);

        // Ajustar tamaño del contenido
        adjustMediaSize(element);

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

// Ajustar dinámicamente el tamaño al redimensionar la ventana
window.addEventListener('resize', () => {
    const element = mediaContainer.querySelector('.img, .video');
    if (element) {
        adjustMediaSize(element);
    }
});
