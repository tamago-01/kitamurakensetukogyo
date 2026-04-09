'use strict'; 

// Splide
new Splide( '.splide',{
	autoplay: true,
	interval: 3000,
	speed: 2000,
	type: "loop",
	arrows: false,
	pagination: false,
} ).mount();

// ヘッダー背景色
const header = document.querySelector('.header');

header.style.transition = 'background-color 0.4s';

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.style.backgroundColor = 'rgba(255, 255, 255, 255 .2)';
		header.style.boxShadow = 'none';
	} else {
		header.style.backgroundColor = 'transparent';
		header.style.boxShadow = 'none';
	}
});