document.addEventListener('DOMContentLoaded', () => {
	document.body.style.opacity = '0';
	setTimeout(() => {
			document.body.style.opacity = '1';
			document.body.style.transition = 'opacity 0.5s ease';
	}, 500);
});