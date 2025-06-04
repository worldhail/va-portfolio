// MENU BUTTON EVENT LISTENER
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('open-menu');
    menuBtn.classList.toggle('slide-menu-btn');
});

// INITIAL BRIEF CONTEXT ON THE FRON PAGE
const briefContext = document.querySelector('.brief-context');
window.addEventListener('DOMContentLoaded', () => {
    briefContext.classList.add('brief-context-scaleUp');
});

// LOGO SLIDE UP
const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    window.scrollY > 100 ? logo.classList.add('logo-slideUp') : logo.classList.remove('logo-slideUp');
});