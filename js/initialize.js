function initializeVisibilityObserver() {
  // Crear el IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  });

  // Seleccionar los elementos con la clase 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

// Iniciar el observador cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
  initializeVisibilityObserver();
});
