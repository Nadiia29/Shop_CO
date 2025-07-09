import { products } from './products.js';

addEventListener('click', ({ target }) => {
	const tab = document.querySelector('.details__name');
	const activeTab = document.querySelector('.details__name--active');

	if (target.classList.contains('details__name')) {
		activeTab.classList.remove('details__name--active');
		target.classList.add('details__name--active');
	}
});

const getQueryParam = (param) => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
};

const productId = getQueryParam('id');
const product = products.find((item) => item.id === productId);

if (!product) {
	window.location.href = 'index.html';
}

const productName = document.querySelector('#productName');
const price = document.querySelector('#price');
const fullPrice = document.querySelector('#fullPrice');
const discount = document.querySelector('#discount');
const productImg = document.querySelector('#productImg');
const description = document.querySelector('#desc');
const ratingContainer = document.querySelector('#rating');
const colorsContainer = document.querySelector('#colorsContainer');
const sizesContainer = document.querySelector('#sizesContainer');

const imgEl = `<img src="${product.img}" alt="${product.name}" />`;
const fullPriceEl = product.fullPrice
	? `<div class="description-products__preprice" id="fullPrice">${product.fullPrice}</div>`
	: '';
const discountEl = product.discount
	? `<div class="description-products__rebate" >${product.discount}</div>`
	: '';
const renderStars = (rating) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 >= 0.5;
	let totalStars = fullStars + (halfStar ? 1 : 0);
	let starsHTML = '';

	for (let i = 0; i < fullStars; i++) {
		starsHTML += '<span class="full-star">★</span>';
	}

	if (halfStar) {
		starsHTML += '<span class="half-star">★</span>';
	}

	for (let i = totalStars; i < 5; i++) {
		starsHTML += '<span class="empty-star">☆</span>';
	}

	return starsHTML;
};

const renderColors = (colors) => {
	return colors
		.map((color, index) => {
			const isChecked = index === 0 ? 'checked' : '';
			return `
				<input
					type="radio"
					id="${color}"
					class="colors__radio"
					name="color"
					${isChecked}
				/>
				<label for="${color}" class="color ${color}"></label>
			`;
		})
		.join('');
};

const renderSizes = (sizes) => {
	return sizes
		.map(
			(size, index) => `
			<input
				type="radio"
				id="${size.toLowerCase().replace(/\s+/g, '-')}"
				class="size__input"
				name="size"
				${index === 1 ? 'checked' : ''}
			/>
			<label class="size" for="${size.toLowerCase().replace(/\s+/g, '-')}">${size}</label>
		`,
		)
		.join('');
};

sizesContainer.innerHTML = renderSizes(product.sizes);
colorsContainer.innerHTML = renderColors(product.colors);
ratingContainer.innerHTML = `
	<div class="rating">${renderStars(product.rating)}</div>
	<div class="rating-number">${product.rating}/5</div>
`;

productName.textContent = product.name;
price.textContent = product.price;
discount.innerHTML = discountEl;
fullPrice.innerHTML = fullPriceEl;
productImg.innerHTML = imgEl;
description.textContent = product.desc;

console.log(getQueryParam('id'));
