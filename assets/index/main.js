function toggleMenu() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('open');
}

document.addEventListener('click', function (event) {
	const navLinks = document.querySelector('.nav-links');
	const menuIcon = document.querySelector('.menu-icon');

	if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
			navLinks.classList.remove('open');
	}
});

document.querySelector('.menu-icon').addEventListener('click', function (event) {
	event.stopPropagation();
});

document.querySelector('.nav-links').addEventListener('click', function (event) {
	event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', () => {
const images = document.querySelectorAll('.gallery-image');
const dotsContainer = document.querySelector('.dots-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
const intervalTime = 5000;
let autoSlide;

images.forEach((image, index) => {
const dot = document.createElement('div');
dot.classList.add('dot');
if (index === 0) dot.classList.add('active');
dot.addEventListener('click', () => goToSlide(index));
dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

const goToSlide = index => {
images[currentIndex].classList.remove('active');
dots[currentIndex].classList.remove('active');

currentIndex = index;

images[currentIndex].classList.add('active');
dots[currentIndex].classList.add('active');
};

const nextSlide = () => {
goToSlide((currentIndex + 1) % images.length);
};

const prevSlide = () => {
goToSlide((currentIndex - 1 + images.length) % images.length);
};

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

const startAutoSlide = () => {
autoSlide = setInterval(nextSlide, intervalTime);
};

const stopAutoSlide = () => {
clearInterval(autoSlide);
};

document.querySelector('.fullscreen-gallery').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.fullscreen-gallery').addEventListener('mouseout', startAutoSlide);

startAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
	const texts = ["Ihr Partner für unternehmerischen Erfolg", "Ihre Lösung für nervende Bürokratie", "Hilfe bei Fachkräftemangel", "Unterstützung bei der Digitalisierung"];
	let index = 0;
	let charIndex = 0;
	const typingSpeed = 100;
	const erasingSpeed = 50;
	const newTextDelay = 2000; 
	const typedTextElement = document.querySelector('.typed-text');

	function type() {
			if (charIndex < texts[index].length) {
					typedTextElement.textContent += texts[index].charAt(charIndex);
					charIndex++;
					setTimeout(type, typingSpeed);
			} else {
					setTimeout(erase, newTextDelay);
			}
	}

	function erase() {
			if (charIndex > 0) {
					typedTextElement.textContent = texts[index].substring(0, charIndex - 1);
					charIndex--;
					setTimeout(erase, erasingSpeed);
			} else {
					index++;
					if (index >= texts.length) index = 0;
					setTimeout(type, typingSpeed + 1100);
			}
	}

	setTimeout(type, newTextDelay + 250);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
	behavior: 'smooth'
});
});
});

function nextStep(step) {
const currentStep = document.getElementById(`step-${step}`);
const nextStep = document.getElementById(`step-${step + 1}`);
const options = currentStep.querySelectorAll('input[type="radio"]');

let selected = false;
options.forEach(option => {
if (option.checked) {
	selected = true;
}
});

if (selected) {
currentStep.style.display = 'none';
nextStep.style.display = 'block';
} else {
alert('Bitte wählen Sie eine Option.');
}
}

function showResult() {
const currentStep = document.getElementById('step-4');
const result = document.getElementById('quiz-result');
const options = currentStep.querySelectorAll('input[type="radio"]');

let selected = false;
options.forEach(option => {
if (option.checked) {
	selected = true;
}
});

if (selected) {
currentStep.style.display = 'none';
result.style.display = 'block';
} else {
alert('Bitte wählen Sie eine Option.');
}
}
