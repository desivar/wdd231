
// Initialize AOS for animation
AOS.init({
    duration: 1200, // Animation duration in ms
    once: true, // Whether animation should happen only once - while scrolling down
  });
  
  // Toggle Menu on Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
    }
  });
  
// Smooth scrolling for carousel
document.querySelector('.scrollsnap-carousel').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.scrollsnap-carousel').scrollLeft += event.deltaY * 2;
  });
  
  