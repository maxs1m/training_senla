// всплывающая навигация
let nav = document.querySelector('.nav-top-menu__box');
let button = document.querySelector('.close');
let spanFirst = document.querySelector('.close span:nth-child(1)');
let spanMid = document.querySelector('.close span:nth-child(2)');
let spanLast = document.querySelector('.close span:nth-child(3)');
let items = document.querySelectorAll('.nav-top-menu__link');

// всплывающие формы
let forms = document.querySelectorAll('.form')
let whomBtn = document.querySelector('.whom__btn');
let whomForm = document.querySelector('.whom__form');
let autoBtn = document.querySelector('.auto__btn');
let autoForm = document.querySelector('.auto__form');
let volBtn = document.querySelector('.vol__btn');
let volForm = document.querySelector('.vol__form');

// всплывающие формы для питомцев

let petCards = document.querySelectorAll('.pets__box');
let toHomeForm = document.querySelector('.toHome__form');
let toTempForm = document.querySelector('.toTemp__form');


// вспылывающая навигация
function navigation() {
	nav.classList.toggle('visible_nav');
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
	}
}

window.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !button.contains(e.target) && nav.classList.contains('visible_nav')) {
        navigation()
    }
});

// всплывающие формы
function showForms(form, btn) {
	btn.onclick = function () {
		form.classList.add('visible_form');
	}
	window.addEventListener('click', function (e) {
	  if (!form.contains(e.target) && !btn.contains(e.target) && form.classList.contains('visible_form')) {
	    form.classList.remove('visible_form');
	  }
	});	
};


function closeForm (form, btn) {
	btn.onclick = function () {
		form.classList.remove('visible_form');
		if (form.querySelector('.pets-to-form')) {
			form.querySelector('.pets-to-form').remove();
		}	
	}
}


function hideForm() {
	for (let form of forms) {
		var btn = form.querySelector('.form__close');
		closeForm(form, btn);
		if (form.querySelector('.cancel')) {
			var cancel = form.querySelector('.cancel');
			closeForm(form, cancel);
		}
	}
}


hideForm();
showForms(whomForm, whomBtn);
showForms(autoForm, autoBtn);
showForms(volForm, volBtn);

// формы для питомцев 

for (let petCard of petCards) {
	var toHomeBtn = petCard.querySelector('.toHome__btn');
	var toTempBtn = petCard.querySelector('.toTemp__btn');
	
	let insert = petCard.querySelector('.pets-to-form');
	let insertForm = insert.cloneNode(true);

	showPetForm(toHomeForm, toHomeBtn, insertForm);
	showPetForm(toTempForm, toTempBtn, insertForm);
	hidePetForm(toHomeForm, 'toHome__btn');
	hidePetForm(toTempForm, 'toTemp__btn');
}

function showPetForm(form, btn, insert) {
	btn.onclick = function() {
		form.classList.add('visible_form');
		form.querySelector('.add_js').appendChild(insert);
	}
}

function hidePetForm(form, classBtn) {
	window.addEventListener('click', function (e) {
	  if (!form.contains(e.target) && !(e.target.classList.contains(classBtn)) && form.classList.contains('visible_form')) {
	    form.classList.remove('visible_form');
	    form.querySelector('.pets-to-form').remove();
	  }
	});
}

// открытие карты
let mapBtn = document.querySelector('.map__btn');
let map = document.querySelector('.map')

mapBtn.onclick = function() {
	map.style.display = "block";
}

// анимации

let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let helpContent = document.querySelector('.help__content');
let helpBoxes = document.querySelectorAll('.help__box');

function scrolling(e) {
  	for (let helpBox of helpBoxes) {
  		if (isPartiallyVisible(helpContent)) {
  			helpBox.classList.add('help__box_slide');
  		} else {
  			helpBox.classList.remove('help__box_slide');
  		}
  	}
}

function isPartiallyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;
	var height = elementBoundary.height;

	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}