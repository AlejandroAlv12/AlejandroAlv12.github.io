document.addEventListener("DOMContentLoaded", () => {
    // Crear el contenedor para el modal
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    modal.style.display = "none";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
    modal.style.transition = "opacity 0.4s ease";

    // Crear la imagen dentro del modal
    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "10px";
    modalImg.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    modalImg.style.transition = "transform 0.4s ease";
    modal.appendChild(modalImg);

    // Añadir el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Seleccionar el contenedor de la galería
    const gallery = document.querySelector(".galeria");

    // Evento para cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", () => {
        // Reducir la imagen con animación
        modalImg.style.transform = "scale(0.1)";

        // Restaurar el estado del fondo (blur y visibilidad del modal)
        gallery.style.filter = "blur(0px)"; // Quitar el blur
        setTimeout(() => {
            modal.style.opacity = "0"; // Desvanecer el modal
            setTimeout(() => {
                modal.style.display = "none"; // Ocultar el modal después de la animación
            }, 300);
        }, 150); // Esperar a que la imagen termine de reducirse
    });

    // Seleccionar todas las imágenes de la galería
    const images = document.querySelectorAll(".galeria .img");
    const videos = document.querySelectorAll(".galeria .video");

    images.forEach(image => {
        image.addEventListener("click", () => {
            modalImg.src = image.src; // Establece la fuente de la imagen clickeada
            modal.style.display = "flex";
            setTimeout(() => {
                modal.style.opacity = "1";
                modalImg.style.transform = "scale(1)"; // Ampliar la imagen con animación
            }, 10);

            // Animación de ampliación
            gallery.style.filter = "blur(10px)"; // Añadir blur con transición
        });
    });
    videos.forEach(video => {
        video.addEventListener("click", () => {
            modalImg.src = video.src; // Establece la fuente de la video clickeada
            modal.style.display = "flex";
            setTimeout(() => {
                modal.style.opacity = "1";
                modalImg.style.transform = "scale(1)"; // Ampliar la video con animación
            }, 10);

            // Animación de ampliación
            gallery.style.filter = "blur(10px)"; // Añadir blur con transición
        });
    });
});
