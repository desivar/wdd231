const menuIcon = document.getElementById('menu-icon');
const navBar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('show-nav');
  menuIcon.classList.toggle('change');
});