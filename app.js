let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal({
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.left', { origin: 'left' })
ScrollReveal().reveal('.right', { origin: 'right' })
ScrollReveal().reveal('.top', { origin: 'top' })
ScrollReveal().reveal('.bottom', { origin: 'bottom' })


const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist & Data Analyst', 'AI Solutions Enthusiast', 'ML & AI Researcher'],
    typeSpeed: 160,
    backSpeed: 160,
    backDelay: 1200,
    loop: true
});

/* ---- NEW: Add this code below to initialize particles.js ---- */
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
