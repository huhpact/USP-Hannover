document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			const navHeight = nav.offsetHeight;
			const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
			
			window.scrollTo({
					top: targetPosition - navHeight,
					behavior: 'smooth'
			});
	});
});

const revealCards = () => {
	const cards = document.querySelectorAll('.reveal__card');
	const windowHeight = window.innerHeight;
	
	cards.forEach((card, index) => {
			const cardTop = card.getBoundingClientRect().top;
			if (cardTop < windowHeight - 100) {
					setTimeout(() => {
							card.classList.add('visible');
					}, index * 100);
			}
	});
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);