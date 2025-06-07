document.addEventListener('DOMContentLoaded', () => {
	const revealItems = document.querySelectorAll('.reveal__item');
	const revealSection = document.querySelector('.reveal__section');

	const revealOnScroll = () => {
			const triggerBottom = window.innerHeight * 0.8;

			revealItems.forEach(item => {
					const itemTop = item.getBoundingClientRect().top;

					if (itemTop < triggerBottom) {
							item.classList.add('active');
					}
			});
	};

	window.addEventListener('scroll', revealOnScroll);
	revealOnScroll();

	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
					e.preventDefault();
					const target = document.querySelector(this.getAttribute('href'));
					if (target) {
							target.scrollIntoView({
									behavior: 'smooth',
									block: 'start'
							});
					}
			});
	});

	const animateOnScroll = () => {
			const elements = document.querySelectorAll('.animated__text, .contact__image, .info__item');
			
			elements.forEach(element => {
					const elementTop = element.getBoundingClientRect().top;
					const elementBottom = element.getBoundingClientRect().bottom;
					
					if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
							element.style.opacity = '1';
							element.style.transform = 'translateY(0)';
					}
			});
	};

	window.addEventListener('scroll', animateOnScroll);
	animateOnScroll(); 
});