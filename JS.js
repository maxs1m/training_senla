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


function hideForm() {
	for (let form of forms) {
		var btn = form.querySelector('.form__close');
		btn.onclick = function () {
			if (form.classList.contains('visible_form')) {
				form.classList.remove('visible_form');
			}	
		}
		if (form.querySelector('.cancel')) {
			var cancel = form.querySelector('.cancel');
			cancel.onclick = function () {
				if (form.classList.contains('visible_form')) {
					form.classList.remove('visible_form');
				}	
			}
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
	
	

	toHomeBtn.onclick = function () {
		toHomeForm.classList.add('visible_form');
	}
	toTempBtn.onclick = function () {
		toTempForm.classList.add('visible_form');
	}
	
}

window.addEventListener('click', function (e) {
	  if (!toHomeForm.contains(e.target) && !(e.target.classList.contains('toHome__btn')) && toHomeForm.classList.contains('visible_form')) {
	    toHomeForm.classList.remove('visible_form');
	  }
});

window.addEventListener('click', function (e) {
	  if (!toTempForm.contains(e.target) && !(e.target.classList.contains('toTemp__btn')) && toTempForm.classList.contains('visible_form')) {
	    toTempForm.classList.remove('visible_form');
	  }
});


//let img = petCard.querySelector('.pets__img');
	//let picture = img.cloneNode(false);
//let img = document.querySelector('.pets__img');
//let div = document.querySelector('.add_js');
//let picture = img.cloneNode(false);
//div.appendChild(picture);
//console.log(img.src);
//let div = document.querySelector('.add_js');
