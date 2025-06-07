document.addEventListener("DOMContentLoaded", function() {
  const pageLoader = document.getElementById('page__loader');
  
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
    bodyElement.classList.toggle('menu__open');
  });

  const mobileLinks = document.querySelectorAll('.mobile__nav__link');
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      bodyElement.classList.remove('menu__open');
    });
  });

  if (document.getElementById('typed')) {
    const typed = new Typed('#typed', {
      stringsElement: '#typed__strings',
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  const parallaxLayer = document.querySelector('.parallax__layer');
  
  function updateParallax() {
    const scrollPos = window.scrollY;
    if (parallaxLayer) {
      parallaxLayer.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  }
  
  window.addEventListener('scroll', updateParallax);

  const bannerSlider = document.getElementById('bannerSlider');
  
  if (bannerSlider) {
    const slides = bannerSlider.querySelectorAll('.banner__slide');
    const sliderDots = document.querySelector('.slider__dots');
    const prevBtn = document.querySelector('.slider__arrow.prev');
    const nextBtn = document.querySelector('.slider__arrow.next');
    let currentSlide = 0;
    let autoSlideInterval;
    
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider__dot');
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlide();
      });
      
      sliderDots.appendChild(dot);
    });

    const updateSliderPosition = () => {
      bannerSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

      document.querySelectorAll('.slider__dot').forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };
    
    const goToSlide = (index) => {
      currentSlide = index;
      updateSliderPosition();
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSliderPosition();
    };
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSliderPosition();
    };
    
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    };
    
    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    let touchStartX = 0;
    let touchEndX = 0;
    
    bannerSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    bannerSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      resetAutoSlide();
    }, { passive: true });
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide(); 
      } else if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide(); 
      }
    };

    startAutoSlide();
  }

  function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal__element');
    
    function checkReveal() {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const delay = element.getAttribute('data-delay') || 0;
        
        if (elementTop < windowHeight - revealPoint) {
          setTimeout(() => {
            element.classList.add('visible');
          }, delay);
        }
      });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);
    checkReveal(); 
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerHeight = document.querySelector('.main__header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  if (!window.Typed) {
    class SimpleTyped {
      constructor(element, options) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.stringsElement = document.querySelector(options.stringsElement);
        this.strings = Array.from(this.stringsElement.querySelectorAll('p')).map(p => p.textContent);
        this.typeSpeed = options.typeSpeed || 100;
        this.backSpeed = options.backSpeed || 50;
        this.backDelay = options.backDelay || 1500;
        this.startDelay = options.startDelay || 0;
        this.loop = options.loop || false;
        this.currentStringIndex = 0;
        this.currentCharIndex = 0;
        this.isTyping = true;
        this.cursorElement = document.createElement('span');
        this.cursorElement.className = 'typed__cursor';
        this.cursorElement.textContent = options.cursorChar || '|';
        
        this.init();
      }
      
      init() {
        this.element.textContent = '';
        this.element.parentNode.insertBefore(this.cursorElement, this.element.nextSibling);
        
        setTimeout(() => {
          this.typeNextChar();
        }, this.startDelay);
        
        setInterval(() => {
          this.cursorElement.style.visibility = this.cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500);
      }
      
      typeNextChar() {
        const currentString = this.strings[this.currentStringIndex];
        
        if (this.isTyping) {
          if (this.currentCharIndex < currentString.length) {
            this.element.textContent += currentString.charAt(this.currentCharIndex);
            this.currentCharIndex++;
            setTimeout(() => this.typeNextChar(), this.typeSpeed);
          } else {
            this.isTyping = false;
            setTimeout(() => this.typeNextChar(), this.backDelay);
          }
        } else {
          if (this.currentCharIndex > 0) {
            this.element.textContent = currentString.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            setTimeout(() => this.typeNextChar(), this.backSpeed);
          } else {
            this.isTyping = true;
            this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
            
            if (this.currentStringIndex === 0 && !this.loop) {
              return;
            }
            
            setTimeout(() => this.typeNextChar(), this.typeSpeed);
          }
        }
      }
    }
    
    window.Typed = SimpleTyped;
  }

  if (document.getElementById('typed')) {
    new Typed('#typed', {
      stringsElement: '#typed__strings',
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      cursorChar: ''
    });
  }
});