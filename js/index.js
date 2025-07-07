addEventListener('click', ({ target }) => {
	const tab = document.querySelector('.details__name');
	const activeTab = document.querySelector('.details__name--active');

	if (target.classList.contains('details__name')) {
		activeTab.classList.remove('details__name--active');
		target.classList.add('details__name--active');
	}
});
