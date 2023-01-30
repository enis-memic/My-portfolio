const openMenu = document.querySelector('.nav-right');
const closeMenu = document.querySelector('.closing-icon');
const menuLinks = document.querySelectorAll('.nav-link');
openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-main-menu').classList.add('visible');
});
closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-main-menu').classList.remove('visible');
});
menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.mobile-main-menu').classList.remove('visible');
  });
});