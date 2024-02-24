// CAMBIO DE COLOR NAV
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollThreshold = navbar.offsetHeight; // Altura del nav
  
    if (window.scrollY > scrollThreshold) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-black', 'bg-opacity-75'); // Cambia la opacidad aquí (de 0 a 100)
    } else {
      navbar.classList.remove('bg-black', 'bg-opacity-75');
      navbar.classList.add('bg-transparent');
    }
  });
  

// BOTON Y ULS
document.addEventListener("DOMContentLoaded", function() {
    // Selección de elementos del DOM
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // Verificación de existencia de los elementos
    if (btn && menu) {
        // Agregar la clase 'hidden' al menú para ocultarlo inicialmente
        menu.classList.add("hidden");

        // Función para alternar la clase 'hidden' del menú
        const toggleMenu = () => {
            menu.classList.toggle("hidden");
        };

        // Evento click para el botón del menú móvil
        btn.addEventListener("click", toggleMenu);
    } else {
        console.error("No se encontraron elementos para el botón del menú móvil o el menú móvil.");
    }
});


// HEADER SLIDER
window.onload = function() {
    // Ocultar todos los slides excepto el primero
    document.querySelectorAll('.slide:not(#slide1)').forEach(slide => {
        slide.classList.add('hidden');
    });

    // HEADER
    let currentSlide = 1;
    const totalSlides = 5;

    function showSlide(slideNumber) {
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.add('hidden');
        });
        document.getElementById(`slide${slideNumber}`).classList.remove('hidden');
    }

    function nextSlide() {
        currentSlide = currentSlide % totalSlides + 1;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Cambiar de slide cada 3 segundos
};