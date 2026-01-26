// ================= NAVBAR TOGGLE =================
let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

// ================= ACTIVE LINK ON SCROLL =================
let sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navItems.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // close mobile nav on scroll
    navLinks.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

// ================= TYPED TEXT =================
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Product Analyst', 'SQL Specialist', 'Power BI Analyst'],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

// ================= PARTICLES =================
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00e5ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00e5ff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});

// ================= SCROLL ANIMATIONS =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section, .project-card, .skill');
hiddenElements.forEach(el => observer.observe(el));
