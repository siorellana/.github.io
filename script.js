// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__list');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Optional: Close menu on nav link click (mobile)
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  })
);
