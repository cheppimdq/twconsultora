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


// HEADER
var cont = 0;
var xx;

function loopSlider() {
    xx = setInterval(function() {
        switch (cont) {
            case 0:
                {
                    $("#slider-1").fadeOut(400);
                    $("#slider-2").delay(400).fadeIn(400);
                    $("#sButton1").removeClass("bg-purple-800");
                    $("#sButton2").addClass("bg-purple-800");
                    cont = 1;
                    break;
                }
            case 1:
                {
                    $("#slider-2").fadeOut(400);
                    $("#slider-1").delay(400).fadeIn(400);
                    $("#sButton2").removeClass("bg-purple-800");
                    $("#sButton1").addClass("bg-purple-800");
                    cont = 0;
                    break;
                }
        }
    }, 8000);
}

function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider(), time);
}

function sliderButton1() {
    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont = 0;
}

function sliderButton2() {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont = 1;
}

$(window).ready(function() {
    $("#slider-2").hide();
    $("#sButton1").addClass("bg-purple-800");
    loopSlider();
});
