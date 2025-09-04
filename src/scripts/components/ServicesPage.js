// ServicesPage Component Logic

export class ServicesPageController {
  constructor() {
    this.scrollY = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateHeroElements();
    this.setupParallaxEffect();
    this.setupServiceCards();
    this.setupProcessSteps();
  }

  setupEventListeners() {
    // Scroll event for parallax
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Resize event
    window.addEventListener('resize', () => this.handleResize());
    
    // Service card interactions
    this.setupServiceCardInteractions();
    
    // Process step interactions
    this.setupProcessStepInteractions();
    
    // Button interactions
    this.setupButtonInteractions();
  }

  handleScroll() {
    this.scrollY = window.scrollY;
    this.updateParallaxElements();
    this.checkSectionVisibility();
  }

  handleResize() {
    this.updateLayout();
  }

  setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.servicespage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  updateParallaxElements() {
    const parallaxElements = document.querySelectorAll('.servicespage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  animateHeroElements() {
    // Animate hero title
    const heroTitle = document.querySelector('.servicespage-hero-title');
    if (heroTitle) {
      heroTitle.style.opacity = '0';
      heroTitle.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        heroTitle.style.transition = 'all 0.8s ease';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
      }, 100);
    }

    // Animate hero description
    const heroDescription = document.querySelector('.servicespage-hero-description');
    if (heroDescription) {
      heroDescription.style.opacity = '0';
      heroDescription.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        heroDescription.style.transition = 'all 0.8s ease';
        heroDescription.style.opacity = '1';
        heroDescription.style.transform = 'translateY(0)';
      }, 300);
    }

    // Animate hero buttons
    const heroButtons = document.querySelector('.servicespage-hero-buttons');
    if (heroButtons) {
      heroButtons.style.opacity = '0';
      heroButtons.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        heroButtons.style.transition = 'all 0.8s ease';
        heroButtons.style.opacity = '1';
        heroButtons.style.transform = 'translateY(0)';
      }, 500);
    }
  }

  setupServiceCards() {
    // Hero service cards
    const heroServiceCards = document.querySelectorAll('.servicespage-hero-service-card');
    heroServiceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8) rotate(-5deg)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotate(0deg)';
      }, 500 + (index * 100));
    });

    // Main service cards
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateServiceCards(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const servicesSection = document.querySelector('.servicespage-services');
    if (servicesSection) {
      serviceObserver.observe(servicesSection);
    }
  }

  animateServiceCards(servicesSection) {
    const serviceCards = servicesSection.querySelectorAll('.servicespage-service-card');
    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  setupServiceCardInteractions() {
    // Hero service cards
    const heroServiceCards = document.querySelectorAll('.servicespage-hero-service-card');
    heroServiceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) rotate(2deg)';
        card.style.boxShadow = 'var(--shadow-medium)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
        card.style.boxShadow = 'var(--shadow-subtle)';
      });
    });

    // Main service cards
    const serviceCards = document.querySelectorAll('.servicespage-service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = 'var(--shadow-medium)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow-subtle)';
      });
    });
  }

  setupProcessSteps() {
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateProcessSteps(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const processSection = document.querySelector('.servicespage-process');
    if (processSection) {
      processObserver.observe(processSection);
    }
  }

  animateProcessSteps(processSection) {
    const processSteps = processSection.querySelectorAll('.servicespage-process-step');
    processSteps.forEach((step, index) => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        step.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  setupProcessStepInteractions() {
    const processSteps = document.querySelectorAll('.servicespage-process-step');
    processSteps.forEach(step => {
      step.addEventListener('mouseenter', () => {
        step.style.transform = 'translateY(-5px)';
      });
      
      step.addEventListener('mouseleave', () => {
        step.style.transform = 'translateY(0)';
      });
    });
  }

  setupButtonInteractions() {
    const buttons = document.querySelectorAll('.premium-button, .accent-button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
          button.style.transform = 'scale(1)';
        }, 150);
        
        // Handle button clicks
        this.handleButtonClick(button, e);
      });
    });
  }

  handleButtonClick(button, event) {
    const buttonText = button.textContent.trim();
    
    switch (buttonText) {
      case 'Выбрать услугу':
        this.scrollToServices();
        break;
      case 'Получить консультацию':
        this.scrollToContact();
        break;
      case 'Заказать услугу':
        this.openServiceModal(button);
        break;
      case 'Скачать презентацию':
        this.downloadPresentation();
        break;
      default:
        console.log('Button clicked:', buttonText);
    }
  }

  scrollToServices() {
    const servicesSection = document.querySelector('.servicespage-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contactSection = document.querySelector('.contactpage-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openServiceModal(button) {
    // Get service information from the button's parent card
    const serviceCard = button.closest('.servicespage-service-card');
    const serviceTitle = serviceCard.querySelector('.servicespage-service-title');
    
    console.log('Opening service modal for:', serviceTitle?.textContent);
    // Implementation would depend on your modal system
  }

  downloadPresentation() {
    console.log('Downloading presentation...');
    // Implementation would trigger a file download
  }

  checkSectionVisibility() {
    // Check if sections are visible and trigger animations
    const sections = document.querySelectorAll('.servicespage-services, .servicespage-process');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        if (section.classList.contains('servicespage-services')) {
          this.animateServiceCards(section);
        } else if (section.classList.contains('servicespage-process')) {
          this.animateProcessSteps(section);
        }
      }
    });
  }

  updateLayout() {
    // Update layout on resize
    const heroServiceCards = document.querySelectorAll('.servicespage-hero-service-card');
    heroServiceCards.forEach(card => {
      if (window.innerWidth < 1024) {
        card.style.position = 'static';
        card.style.transform = 'none';
      }
    });
  }

  // Public methods
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
}

// Initialize ServicesPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.servicespage-container')) {
    new ServicesPageController();
  }
});
