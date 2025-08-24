// Mobile Navigation Toggle Script
document.getElementById('nav-toggle').addEventListener('click', function() {
  const menuList = document.getElementById('menu-list');
  if (menuList.classList.contains('open')) {
    menuList.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  } else {
    menuList.classList.add('open');
    this.setAttribute('aria-expanded', 'true');
  }
});
