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
const texts = ["Your Partner for Entrepreneurial Success", "Your Solution for Annoying Bureaucracy", "Help with Skilled Labor Shortage", "Support for Digitalization"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000; 
const typedTextElement = document.querySelector('.typed-text');

function type() {
if (charIndex < texts[index].length) {
	typedTextElement.textContent += texts[index].charAt(charIndex);
	updateBackgroundWidth();
	charIndex++;
	setTimeout(type, typingSpeed);
} else {
	setTimeout(erase, newTextDelay);
}
}

function erase() {
if (charIndex > 0) {
	typedTextElement.textContent = texts[index].substring(0, charIndex - 1);
	updateBackgroundWidth();
	charIndex--;
	setTimeout(erase, erasingSpeed);
} else {
	index++;
	if (index >= texts.length) index = 0;
	setTimeout(type, typingSpeed + 1100);
}
}

function updateBackgroundWidth() {
const textWidth = typedTextElement.offsetWidth;
typedTextElement.style.setProperty('--background-width', `${textWidth}px`);
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
alert('Please select an option.');
}
}

function showResult() {
const currentStep = document.querySelector('.quiz-step:not([style*="display: none"])');
currentStep.style.display = 'none';
document.getElementById('quiz-result').style.display = 'block';
}