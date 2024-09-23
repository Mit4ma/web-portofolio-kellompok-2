document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function() {
        console.log('Hamburger clicked');
        nav.classList.toggle('active');
    });
});
