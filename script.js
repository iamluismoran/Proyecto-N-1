document.addEventListener("DOMContentLoaded", function () {
 const hamburger = document.querySelector('.hamburger-menu');
 const menu = document.querySelector('.menu');

 if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
 }
});