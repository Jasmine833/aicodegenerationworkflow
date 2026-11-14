const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = dropdownMenu.classList.toggle('show');
  dropdownBtn.setAttribute('aria-expanded', isOpen);
});

window.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
    dropdownBtn.setAttribute('aria-expanded', 'false');
  }
});
