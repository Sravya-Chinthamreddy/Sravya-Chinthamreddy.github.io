// ================= ACTIVE LINK ON SCROLL =================
let sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('.navbar nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navItems.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('.navbar nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// ================= PARTICLES LOAD =================
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles loaded');
});

// ================= SCROLL ANIMATIONS =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(
    '.section, .project-card, .skill-card, .timeline-card, .inside-box'
);
hiddenElements.forEach(el => observer.observe(el));
