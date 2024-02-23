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
