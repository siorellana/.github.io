// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70, // Adjust offset for better visibility
      behavior: 'smooth'
    });
  });
});

// Toggle the navigation menu on smaller screens
const navMenu = document.querySelector('.nav__menu');
const navButton = document.querySelector('.nav__logo');

navButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Optional: Add a function to validate the contact form (basic example)
const form = document.querySelector('.contact__form');
form.addEventListener('submit', (e) => {
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});
