"use strict";

const field = document.querySelector(".page__content");
document.addEventListener("click", showForm);
document.addEventListener("keyup", showForm);

function showForm(event) {
	event.preventDefault();

	if (event.target.closest(".icon-page__link")) {
		field.classList.toggle("active");
	}
	if (!event.target.closest(".page__content") || event.code === "Escape") {
		field.classList.remove("active");
	}
}

const inputItem = document.querySelector(".page__input");
const inputTextLimit = inputItem.getAttribute("maxlength");
const inputTextCounter = document.querySelector(".page__label span");
inputTextCounter.innerHTML = inputTextLimit;

inputItem.addEventListener("keyup", CountInputText);
inputItem.addEventListener("keydown", watchRepeat);

function watchRepeat(event) {
	if (event.repeat) {
		CountInputText();
	}
}
function CountInputText() {
	const txtCounterResults = inputTextLimit - inputItem.value.length;
	inputTextCounter.innerHTML = txtCounterResults;
}
