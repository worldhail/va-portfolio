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
const frontPageImage = document.querySelector('.front-page-image');
const briefContextContainer = document.querySelector('.brief-context-container');
window.addEventListener('DOMContentLoaded', () => {
    briefContext.classList.add('brief-context-scaleUp');
    frontPageImage.classList.add('front-page-image-slideLeft');
    briefContextContainer.classList.add('brief-context-container-show');
});

// LOGO SLIDE UP
const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    window.scrollY > 100 ? logo.classList.add('logo-slideUp') : logo.classList.remove('logo-slideUp');
});

// INTESECTION OBSERVER FOR EVERY SECTIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;

            if (el.classList.contains('content-heading')) el.classList.add('content-heading-inView');
            if (el.classList.contains('job-container')) el.classList.add('job-container-inView');
            if (el.classList.contains('skills-container')) {
                el.classList.add('skills-container-inView');
                el.style.transform = 'translateX(0)';
            }
            if (el.classList.contains('about-section')) el.classList.add('about-section-inView');
            if (el.classList.contains('contact-section')) el.classList.add('contact-section-inView');
        }
    })
}, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: .1
});

const target = document.querySelectorAll(
    '.content-heading, .job-container, .skills-container, .about-section, .contact-section'
);
target.forEach(section => observer.observe(section));