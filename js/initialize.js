function initializeVisibilityObserver() {
  // Crear el IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  });

  // Dividir las palabras en spans y observarlas
  const animatedTexts = document.querySelectorAll('.animated_text');
  animatedTexts.forEach((textElement) => {
      // Obtener las palabras y envolverlas en spans
      const words = textElement.textContent.split(' ');
      textElement.innerHTML = words
          .map((word) => `<span class="hidden">${word}</span>`)
          .join(' ');

      // Observar cada span individualmente
      const hiddenElements = textElement.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
  });
}

// Iniciar el observador cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
  initializeVisibilityObserver();
});
