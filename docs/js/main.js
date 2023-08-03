const body = document.body;
const menuBtns = document.getElementById('menu-buttons');
const nav = document.getElementById('nav');


function toggleMenu(e) {
  nav.classList.toggle('sm-maximum:hide');
}

menuBtns.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);
console.log('JS');