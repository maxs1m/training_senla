let nav = document.querySelector('.nav-top-menu__box');
let button = document.querySelector('.close');
let spanFirst = document.querySelector('.close span:nth-child(1)');
let spanMid = document.querySelector('.close span:nth-child(2)');
let spanLast = document.querySelector('.close span:nth-child(3)');
let items = document.querySelectorAll('.nav-top-menu__link');

function navigation() {
	nav.classList.toggle('visible');
  spanFirst.classList.toggle('first');
  spanMid.classList.toggle('mid');
  spanLast.classList.toggle('last');
}


button.onclick = function() {
  navigation()
};

for (let item of items) {
	item.onclick = function () {
		navigation()
		console.log('Кнопка нажата!');
	}
}

window.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !button.contains(e.target) && nav.classList.contains('visible')) {
        navigation()
    }
});