const hamburger = document.querySelector('.hamburger');
const menu2 = document.querySelector('.menu2');

hamburger.addEventListener('click', function() {
    menu2.classList.toggle('show-menu2');
});