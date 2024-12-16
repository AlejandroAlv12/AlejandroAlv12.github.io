document.addEventListener("DOMContentLoaded", () => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
    modal.style.transition = "background-color 0.5s ease"; // Transición para el fondo
    modal.style.display = "none";
    modal.style.zIndex = "1000";
    modal.style.overflow = "hidden";

    document.body.appendChild(modal);

    const modalContent = document.createElement("div");
    modalContent.style.position = "absolute";
    modalContent.style.transition = "transform 0.5s ease, top 0.5s ease, left 0.5s ease, right 0.5s ease, width 0.5s ease, height 0.5s ease, border-radius 0.5s ease";
    modalContent.style.borderRadius = "20px";
    modal.appendChild(modalContent);

    const modalImg = document.createElement("img");
    modalImg.style.width = "100%";
    modalImg.style.height = "100%";
    modalImg.style.display = "none";
    modalImg.style.borderRadius = "20px";
    modalContent.appendChild(modalImg);

    const modalVideo = document.createElement("video");
    modalVideo.style.width = "100%";
    modalVideo.style.height = "100%";
    modalVideo.style.display = "none";
    modalVideo.style.borderRadius = "20px";
    modalVideo.controls = false; // Desactivar controles inicialmente
    modalVideo.muted = true; // Opción: se inicia sin sonido
    modalContent.appendChild(modalVideo);

    const gallery = document.querySelector(".galeria");
    let originalPosition = { top: 0, left: 0, width: 0, height: 0 };
    let originalElement = null;
    let isAnimating = false; // Controla si hay animación en progreso

    const closeModal = () => {
        if (isAnimating) return; // Evita cerrar si la animación está en curso
        isAnimating = true;

        // Inicia la transición de color de fondo inmediatamente
        modal.style.backgroundColor = "rgba(0, 0, 0, 0)";

        if (modalImg.style.display === "block") {
            modalContent.style.width = originalPosition.width + "px";
            modalContent.style.height = originalPosition.height + "px";
            modalContent.style.top = originalPosition.top - window.scrollY + "px";
            modalContent.style.left = originalPosition.left - window.scrollX + "px";
            modalContent.style.transform = "none";
        } else if (modalVideo.style.display === "block") {
            modalContent.style.width = originalPosition.width + "px";
            modalContent.style.height = originalPosition.height + "px";
            modalContent.style.top = originalPosition.top - window.scrollY + "px";
            modalContent.style.left = originalPosition.left - window.scrollX + "px";
            modalContent.style.transform = "none";

            // Pausa y reinicia el video
            modalVideo.pause();
            modalVideo.currentTime = 0; // Reinicia el video al inicio
        }

        gallery.style.filter = "blur(0px)";

        // Mantenemos el scroll desactivado hasta que termine la animación
        setTimeout(() => {
            if (originalElement) {
                originalElement.style.visibility = "visible";
            }
            setTimeout(() => {
                modal.style.display = "none";
                modalImg.style.display = "none";
                modalVideo.style.display = "none";
                modalVideo.src = ""; // Limpia la fuente del video
                document.body.style.overflow = "auto"; // Activar scroll al terminar todo
                isAnimating = false; // Animación terminada
            }, 500); // Espera a que termine la animación de cierre
        }, 500);
    };

    modal.addEventListener("click", closeModal);

    const openModal = (element, isVideo) => {
        if (isAnimating) return; // Evita abrir si hay otra animación en progreso
        isAnimating = true;

        const rect = element.getBoundingClientRect();
        originalElement = element;

        originalPosition = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height,
        };

        const aspectRatio = isVideo
            ? element.videoWidth / element.videoHeight
            : element.naturalWidth / element.naturalHeight;
        const screenWidth = window.innerWidth * 0.9;
        const screenHeight = window.innerHeight * 0.9;

        let finalWidth, finalHeight;
        if (screenWidth / screenHeight > aspectRatio) {
            finalHeight = screenHeight;
            finalWidth = finalHeight * aspectRatio;
        } else {
            finalWidth = screenWidth;
            finalHeight = finalWidth / aspectRatio;
        }

        if (isVideo) {
            modalVideo.src = element.src;
            modalVideo.style.display = "block";
        } else {
            modalImg.src = element.src;
            modalImg.style.display = "block";
        }

        modalContent.style.width = originalPosition.width + "px";
        modalContent.style.height = originalPosition.height + "px";
        modalContent.style.top = originalPosition.top - window.scrollY + "px";
        modalContent.style.left = originalPosition.left - window.scrollX + "px";
        modalContent.style.transform = "none";

        modal.style.display = "block";

        setTimeout(() => {
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Fondo oscuro al abrir
            modal.style.opacity = "1";

            if (originalElement) {
                originalElement.style.visibility = "hidden";
            }

            modalContent.style.width = finalWidth + "px";
            modalContent.style.height = finalHeight + "px";
            modalContent.style.top = "50%";
            modalContent.style.left = "50%";
            modalContent.style.transform = "translate(-50%, -50%)";

            if (isVideo) {
                setTimeout(() => {
                    modalVideo.controls = true; // Activar controles
                    modalVideo.play(); // Reproducir automáticamente
                }, 500); // Tiempo de la transición
            }

            setTimeout(() => {
                isAnimating = false; // Animación terminada
            }, 500); // Tiempo igual al de la transición
        }, 10);

        gallery.style.filter = "blur(10px)";
        gallery.style.transition = "filter 0.7s ease";
        document.body.style.overflow = "hidden"; // Desactivar scroll al abrir
    };

    const images = document.querySelectorAll(".galeria .img");
    images.forEach(image => {
        image.addEventListener("click", () => openModal(image, false));
    });

    const videos = document.querySelectorAll(".galeria .video");
    videos.forEach(video => {
        video.addEventListener("click", () => openModal(video, true));
    });
});
