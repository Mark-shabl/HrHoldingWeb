// HomePage Component Logic

export class HomePageController {
  constructor() {
    this.scrollY = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateHeroElements();
    this.setupParallaxEffect();
    this.setupStatsAnimation();
    this.setupServiceCards();
  }

  setupEventListeners() {
    // Scroll event for parallax
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Resize event
    window.addEventListener('resize', () => this.handleResize());
    
    // Service card interactions
    this.setupServiceCardInteractions();
    
    // Button interactions
    this.setupButtonInteractions();
  }

  handleScroll() {
    this.scrollY = window.scrollY;
    this.updateParallaxElements();
    this.checkStatsVisibility();
  }

  handleResize() {
    this.updateServiceCardsLayout();
  }

  setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.homepage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.5}px)`;
    });
  }

  updateParallaxElements() {
    const parallaxElements = document.querySelectorAll('.homepage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.5}px)`;
    });
  }

  animateHeroElements() {
    // Animate hero title
    const heroTitle = document.querySelector('.homepage-hero-title');
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
    const heroDescription = document.querySelector('.homepage-hero-description');
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
    const heroButtons = document.querySelector('.homepage-hero-buttons');
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
    const serviceCards = document.querySelectorAll('.homepage-service-card');
    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8) rotate(-5deg)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotate(0deg)';
      }, 600 + (index * 100));
    });
  }

  setupServiceCardInteractions() {
    const serviceCards = document.querySelectorAll('.homepage-service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) rotate(2deg)';
        card.style.boxShadow = 'var(--shadow-medium)';
        card.style.borderColor = 'var(--terracotta)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
        card.style.boxShadow = 'var(--shadow-subtle)';
        card.style.borderColor = 'var(--beige-dusty)';
      });
    });
  }

  setupStatsAnimation() {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateStats(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.homepage-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  checkStatsVisibility() {
    const statsSection = document.querySelector('.homepage-stats');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        this.animateStats(statsSection);
      }
    }
  }

  animateStats(statsSection) {
    const statItems = statsSection.querySelectorAll('.homepage-stat-item');
    statItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.5)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }, index * 200);
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
      case 'Начать сотрудничество':
        this.scrollToContact();
        break;
      case 'Узнать больше':
        this.scrollToAbout();
        break;
      case 'Получить консультацию':
        this.openContactModal();
        break;
      case 'Наши услуги':
        this.scrollToServices();
        break;
      default:
        console.log('Button clicked:', buttonText);
    }
  }

  scrollToContact() {
    const contactSection = document.querySelector('.contactpage-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToAbout() {
    const aboutSection = document.querySelector('.aboutpage-container');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToServices() {
    const servicesSection = document.querySelector('.servicespage-container');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openContactModal() {
    // This would open a contact modal or redirect to contact page
    console.log('Opening contact modal...');
    // Implementation would depend on your modal system
  }

  updateServiceCardsLayout() {
    // Update service cards layout on resize
    const serviceCards = document.querySelectorAll('.homepage-service-card');
    serviceCards.forEach(card => {
      // Reset any transform styles that might interfere with responsive layout
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

// Initialize HomePage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.homepage-container')) {
    new HomePageController();
  }
});
