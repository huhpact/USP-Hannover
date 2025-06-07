document.querySelectorAll('.info__item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;

  item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('.item__icon i');
    icon.classList.add('pulse');
  });
  
  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('.item__icon i');
    icon.classList.remove('pulse');
  });

  item.addEventListener('click', () => {
    const type = item.getAttribute('data-type');
    if (type === 'address') {
      window.open('https://maps.app.goo.gl/pcBD8bRFzJTAP3px7', '_blank');
    } else if (type === 'email') {
      window.location.href = 'mailto:c.klingebiel@usp-hannover.de';
    } else if (type === 'website') {
      window.open('http://www.usp-hannover.de', '_blank');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade__in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.info__section').forEach((section) => {
  observer.observe(section);
});