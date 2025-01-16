document.addEventListener("DOMContentLoaded", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modal.appendChild(modalContent);

    const modalImg = document.createElement("img");
    modalContent.appendChild(modalImg);

    const modalVideo = document.createElement("video");
    modalVideo.controls = false;
    modalVideo.muted = true;
    modalContent.appendChild(modalVideo);

    const gallery = document.querySelector(".galeria");
    let originalPosition = { top: 0, left: 0, width: 0, height: 0 };
    let originalElement = null;
    let isAnimating = false;

    const closeModal = () => {
        if (isAnimating) return;
        isAnimating = true;

        modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
        Object.assign(modalContent.style, {
            width: `${originalPosition.width}px`,
            height: `${originalPosition.height}px`,
            top: `${originalPosition.top - window.scrollY}px`,
            left: `${originalPosition.left - window.scrollX}px`,
            transform: "none",
        });

        if (modalVideo.style.display === "block") {
            modalVideo.pause();
            modalVideo.currentTime = 0;
            modalVideo.controls = false;
        }

        gallery.classList.remove("galeria-blur");
        setTimeout(() => {
            if (originalElement) originalElement.style.visibility = "visible";
            modal.style.display = "none";
            modalImg.style.display = "none";
            modalVideo.style.display = "none";
            modalVideo.src = "";
            document.body.style.overflow = "auto";
            isAnimating = false;
        }, 400);
    };

    modal.addEventListener("click", closeModal);

    const openModal = (element, isVideo) => {
        if (isAnimating) return;
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

        const finalHeight =
            screenWidth / screenHeight > aspectRatio ? screenHeight : screenWidth / aspectRatio;
        const finalWidth = finalHeight * aspectRatio;

        if (isVideo) {
            modalVideo.src = element.src;
            modalVideo.style.display = "block";
        } else {
            modalImg.src = element.src;
            modalImg.style.display = "block";
        }

        Object.assign(modalContent.style, {
            width: `${originalPosition.width}px`,
            height: `${originalPosition.height}px`,
            top: `${originalPosition.top - window.scrollY}px`,
            left: `${originalPosition.left - window.scrollX}px`,
            transform: "none",
        });

        modal.style.display = "block";

        setTimeout(() => {
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            if (originalElement) originalElement.style.visibility = "hidden";

            Object.assign(modalContent.style, {
                width: `${finalWidth}px`,
                height: `${finalHeight}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            });

            if (isVideo) {
                setTimeout(() => {
                    modalVideo.controls = true;
                    modalVideo.play();
                }, 1);
            }

            isAnimating = false;
        }, 1);

        gallery.classList.add("galeria-blur");
        document.body.style.overflow = "hidden";
    };

    const images = document.querySelectorAll(".galeria .img");
    images.forEach((image) => {
        image.addEventListener("click", () => openModal(image, false));
    });

    const videos = document.querySelectorAll(".galeria .video");
    videos.forEach((video) => {
        video.addEventListener("click", () => openModal(video, true));
    });
});
