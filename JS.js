let nav = document.querySelector('.nav-top-menu__box');
let button = document.querySelector('.nav__burger');

button.onclick = function() {
	console.log('Кнопка нажата!');
  nav.classList.add('visible');

};