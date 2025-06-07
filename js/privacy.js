document.addEventListener('DOMContentLoaded', function() {
	
  const menuToggle = document.querySelector('.menu__toggle');
  const mainNav = document.querySelector('.main__nav');
  const accordions = document.querySelectorAll('.accordion');
  const header = document.querySelector('.site__header');
  const sections = document.querySelectorAll('.section');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');

      const navItems = mainNav.querySelectorAll('li');
      navItems.forEach((item, index) => {
        if (mainNav.classList.contains('active')) {
          item.style.transitionDelay = `${index * 0.1}s`;
        } else {
          item.style.transitionDelay = '0s';
        }
      });
    });
  }
  
  document.addEventListener('click', function(e) {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth <= 768) {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  const navLinks = document.querySelectorAll('.main__nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion__header');
    const content = accordion.querySelector('.accordion__content');
    
    header.addEventListener('click', function() {
      const isActive = accordion.classList.contains('active');

      accordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
          otherAccordion.classList.remove('active');
          const otherContent = otherAccordion.querySelector('.accordion__content');
          otherContent.style.maxHeight = '0';
        }
      });

      accordion.classList.toggle('active');

      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        const children = entry.target.querySelectorAll('h2, h3, p, ul, .accordion');
        children.forEach((child, index) => {
          child.style.opacity = '0';
          child.style.animation = `fadeInUp 0.6s ease forwards ${0.2 + index * 0.1}s`;
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  let lastScrollPosition = 0;
  const scrollThreshold = 50;
  
  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > scrollThreshold) {
      header.style.padding = '0.75rem 0';
      header.style.background = 'rgba(51, 51, 51, 0.98)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.padding = '1rem 0';
      header.style.background = 'var(--header-background)';
      header.style.backdropFilter = 'none';
    }

    if (currentScrollPosition > lastScrollPosition) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
  });

  const updateActiveNavigation = () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveNavigation);
  window.addEventListener('load', updateActiveNavigation);

  accordions.forEach(accordion => {
    const content = accordion.querySelector('.accordion__content');
    if (accordion.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});