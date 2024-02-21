// JavaScript para controlar el menú desplegable en dispositivos móviles
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('hidden');
});