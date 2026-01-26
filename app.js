/* ================================
   Portfolio Script - Sravya
   Role: Data Analyst | Product Analyst
================================ */

/* ===== DOM ELEMENTS ===== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/* ================================
   MOBILE MENU TOGGLE
================================ */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ================================
   SCROLL ACTIVE NAV LINK
================================ */
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                  .querySelector('header nav a[href*=' + id + ']')
                  .classList.add('active');
            });
        }
    });

    /* close menu on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* ================================
   TYPED TEXT ANIMATION
================================ */
const typed = new Typed('.multiple-text', {
    strings: [
        'Data Analyst',
        'Product Analyst',
        'SQL Specialist',
        'Power BI Developer',
        'Business Intelligence Analyst'
    ],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

/* ================================
   PARTICLES BACKGROUND
================================ */
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded');
});

/* ================================
   SCROLL REVEAL ANIMATIONS
================================ */
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1200,
    delay: 100
});

ScrollReveal().reveal('.hero-text, .section-title', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .skills-grid, .projects-grid', { origin: 'bottom' });
ScrollReveal().reveal('.about, .experience-card, .contact', { origin: 'left' });

/* ================================
   NAVBAR SHADOW ON SCROLL
================================ */
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 100);
});

/* ================================
   PROJECT CARD HOVER EFFECT
================================ */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.01)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

/* ================================
   LOADING ANIMATION
================================ */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

/* ================================
   FOOTER YEAR AUTO UPDATE
================================ */
const year = document.getElementById('year');
if(year){
    year.textContent = new Date().getFullYear();
}
