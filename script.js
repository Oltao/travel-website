const mobileMenuList = document.getElementById('mobile-menu-list');
let hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenuList.style.display = 'block';
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = 'block';
})
closeMenu.addEventListener('click', () => {
    mobileMenuList.style.display = 'none';
    hamburgerMenu.style.display = 'block';
    closeMenu.style.display = 'none';
})
