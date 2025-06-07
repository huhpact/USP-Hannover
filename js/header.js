document.addEventListener("DOMContentLoaded", function() {
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      pageLoader.classList.add('hide');

      initAnimations();
    }, 800);
  });

  const header = document.querySelector('.main__header');
  
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

	
  
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); 

  const menuToggle = document.querySelector('.menu__toggle');
  const mobileMenu = document.querySelector('.mobile__menu');
  const bodyElement = document.body;
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    bodyElement.classList.toggle('menu-open');
  });

  const mobileLinks = document.querySelectorAll('.mobile__nav__link');
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      bodyElement.classList.remove('menu-open');
    });
  });

});