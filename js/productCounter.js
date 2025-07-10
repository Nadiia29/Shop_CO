document.addEventListener('DOMContentLoaded', function () {
	const minusBtn = document.querySelector('.amount__btn--left');
	const plusBtn = document.querySelector('.amount__btn--right');
	const input = document.querySelector('.amount__input');

	minusBtn.addEventListener('click', function () {
		let currentValue = parseInt(input.value, 10);
		if (!isNaN(currentValue) && currentValue > 1) {
			input.value = currentValue - 1;
		}
	});

	plusBtn.addEventListener('click', function () {
		let currentValue = parseInt(input.value, 10);
		if (!isNaN(currentValue)) {
			input.value = currentValue + 1;
		}
	});
});
