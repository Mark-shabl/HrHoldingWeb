// Footer Component Logic

export class FooterController {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateFooterElements();
  }

  setupEventListeners() {
    // Intersection Observer for animations
    this.setupIntersectionObserver();
    
    // Social links hover effects
    this.setupSocialLinks();
    
    // Legal links
    this.setupLegalLinks();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, observerOptions);

    // Observe footer sections
    const sections = document.querySelectorAll('.footer-nav-section, .footer-contact-section, .footer-social-section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  setupSocialLinks() {
    const socialLinks = document.querySelectorAll('.footer-social-item');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.color = 'var(--terracotta)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.color = 'var(--beige-dusty)';
      });
    });
  }

  setupLegalLinks() {
    const legalLinks = document.querySelectorAll('.footer-legal-link');
    legalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Handle legal link clicks (could open modals, etc.)
        console.log('Legal link clicked:', link.textContent);
      });
    });
  }

  animateFooterElements() {
    // Animate footer sections on load
    const sections = document.querySelectorAll('.footer-nav-section, .footer-contact-section, .footer-social-section');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        section.style.transition = 'all 0.6s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Animate bottom section
    const bottomSection = document.querySelector('.footer-bottom');
    if (bottomSection) {
      bottomSection.style.opacity = '0';
      bottomSection.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        bottomSection.style.transition = 'all 0.6s ease';
        bottomSection.style.opacity = '1';
        bottomSection.style.transform = 'translateY(0)';
      }, 800);
    }
  }

  animateElement(element) {
    const items = element.querySelectorAll('.footer-nav-item, .footer-contact-item, .footer-social-item');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }

  // Utility methods
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Public methods
  destroy() {
    // Clean up event listeners if needed
  }
}

// Initialize footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FooterController();
});
