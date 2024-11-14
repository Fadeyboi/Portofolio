/* Toggle Menu */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /* Sticky Navbar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove Toggle Icon and Navbar when Click Navbar Link (Scroll) */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({ reset: false, distance: '60px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Typed JS */
const typed = new Typed('.multiple-text', {
  strings: ['an Application Developer', 'a Computer Scientist', 'a Game Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* Particles JS Initialization */
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('particles.js loaded - callback');
});