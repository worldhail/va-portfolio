// MENU BUTTON EVENT LISTENER
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
let menuIsOn = '';
menuBtn.addEventListener('click', () => {
    menuIsOn = true;
    menuList.classList.toggle('open-menu');
    menuBtn.classList.toggle('slide-menu-btn');
});

//MENU LIST ITEMS ARE SHOWN
const navLink = document.querySelectorAll('.nav-link');
window.addEventListener('click', (e) => {
    if (e.target !== menuBtn && menuIsOn) {
        menuList.classList.remove('open-menu');
        menuBtn.classList.remove('slide-menu-btn');
        menuIsOn = false;
    }
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