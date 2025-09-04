// ContactPage Component Logic

export class ContactPageController {
  constructor() {
    this.scrollY = 0;
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    };
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateHeroElements();
    this.setupParallaxEffect();
    this.setupContactCards();
    this.setupFormValidation();
    this.setupFormSubmission();
  }

  setupEventListeners() {
    // Scroll event for parallax
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Resize event
    window.addEventListener('resize', () => this.handleResize());
    
    // Contact card interactions
    this.setupContactCardInteractions();
    
    // Button interactions
    this.setupButtonInteractions();
    
    // Form interactions
    this.setupFormInteractions();
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
    const parallaxElements = document.querySelectorAll('.contactpage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  updateParallaxElements() {
    const parallaxElements = document.querySelectorAll('.contactpage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  animateHeroElements() {
    // Animate hero title
    const heroTitle = document.querySelector('.contactpage-hero-title');
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
    const heroDescription = document.querySelector('.contactpage-hero-description');
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
    const heroButtons = document.querySelector('.contactpage-hero-buttons');
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

  setupContactCards() {
    const contactCards = document.querySelectorAll('.contactpage-hero-contact-card');
    contactCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8) rotate(-5deg)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotate(0deg)';
      }, 500 + (index * 200));
    });
  }

  setupContactCardInteractions() {
    const contactCards = document.querySelectorAll('.contactpage-hero-contact-card');
    contactCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) rotate(2deg)';
        card.style.boxShadow = 'var(--shadow-medium)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
        card.style.boxShadow = 'var(--shadow-subtle)';
      });
    });
  }

  setupFormValidation() {
    const form = document.querySelector('form');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  setupFormSubmission() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (e) => this.handleFormSubmission(e));
  }

  setupFormInteractions() {
    const formInputs = document.querySelectorAll('.contactpage-form-input, .contactpage-form-textarea');
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--terracotta)';
        input.style.boxShadow = '0 0 0 1px var(--terracotta)';
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.style.borderColor = 'var(--beige-warm)';
          input.style.boxShadow = 'none';
        }
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Это поле обязательно для заполнения';
    }

    // Email validation
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Введите корректный email адрес';
      }
    }

    // Phone validation
    if (fieldName === 'phone' && value) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Введите корректный номер телефона';
      }
    }

    this.showFieldError(field, isValid, errorMessage);
    return isValid;
  }

  showFieldError(field, isValid, errorMessage) {
    // Remove existing error
    this.clearFieldError(field);

    if (!isValid) {
      field.style.borderColor = '#e53e3e';
      field.style.boxShadow = '0 0 0 1px #e53e3e';
      
      // Create error message element
      const errorElement = document.createElement('div');
      errorElement.className = 'field-error';
      errorElement.style.color = '#e53e3e';
      errorElement.style.fontSize = '0.875rem';
      errorElement.style.marginTop = '0.25rem';
      errorElement.textContent = errorMessage;
      
      field.parentNode.appendChild(errorElement);
    }
  }

  clearFieldError(field) {
    field.style.borderColor = 'var(--beige-warm)';
    field.style.boxShadow = 'none';
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate all fields
    const inputs = form.querySelectorAll('input, textarea');
    let isFormValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      this.showFormError('Пожалуйста, исправьте ошибки в форме');
      return;
    }

    // Collect form data
    this.formData = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      message: formData.get('message') || ''
    };

    // Submit form
    this.submitForm();
  }

  submitForm() {
    // Show loading state
    const submitButton = document.querySelector('.contactpage-form-submit');
    if (submitButton) {
      submitButton.textContent = 'Отправка...';
      submitButton.disabled = true;
    }

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      
      // Show success message
      this.showFormSuccess();
      
      // Reset form
      this.resetForm();
      
      // Reset button
      if (submitButton) {
        submitButton.textContent = 'Отправить сообщение';
        submitButton.disabled = false;
      }
    }, 2000);
  }

  showFormSuccess() {
    const form = document.querySelector('form');
    if (!form) return;

    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-message form-success';
    successMessage.style.color = '#38a169';
    successMessage.style.backgroundColor = '#f0fff4';
    successMessage.style.border = '1px solid #9ae6b4';
    successMessage.style.borderRadius = '4px';
    successMessage.style.padding = '1rem';
    successMessage.style.marginBottom = '1rem';
    successMessage.textContent = 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.';
    
    form.insertBefore(successMessage, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }

  showFormError(message) {
    const form = document.querySelector('form');
    if (!form) return;

    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-message form-error';
    errorMessage.style.color = '#e53e3e';
    errorMessage.style.backgroundColor = '#fed7d7';
    errorMessage.style.border = '1px solid #feb2b2';
    errorMessage.style.borderRadius = '4px';
    errorMessage.style.padding = '1rem';
    errorMessage.style.marginBottom = '1rem';
    errorMessage.textContent = message;
    
    form.insertBefore(errorMessage, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      errorMessage.remove();
    }, 5000);
  }

  resetForm() {
    const form = document.querySelector('form');
    if (form) {
      form.reset();
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      };
    }
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
      case 'Заполнить форму':
        this.scrollToForm();
        break;
      case 'Позвонить сейчас':
        this.makePhoneCall();
        break;
      case '📞 Позвонить сейчас':
        this.makePhoneCall();
        break;
      default:
        console.log('Button clicked:', buttonText);
    }
  }

  scrollToForm() {
    const formSection = document.querySelector('.contactpage-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  makePhoneCall() {
    const phoneNumber = '+74951234567';
    window.location.href = `tel:${phoneNumber}`;
  }

  checkSectionVisibility() {
    // Check if sections are visible and trigger animations
    const sections = document.querySelectorAll('.contactpage-form, .contactpage-map');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        this.animateSection(section);
      }
    });
  }

  animateSection(section) {
    if (section.classList.contains('contactpage-form')) {
      const formElements = section.querySelectorAll('.contactpage-form-section');
      formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.8s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }, index * 200);
      });
    } else if (section.classList.contains('contactpage-map')) {
      const mapContainer = section.querySelector('.contactpage-map-container');
      if (mapContainer) {
        mapContainer.style.opacity = '0';
        mapContainer.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          mapContainer.style.transition = 'all 0.8s ease';
          mapContainer.style.opacity = '1';
          mapContainer.style.transform = 'translateY(0)';
        }, 200);
      }
    }
  }

  updateLayout() {
    // Update layout on resize
    const contactCards = document.querySelectorAll('.contactpage-hero-contact-card');
    contactCards.forEach(card => {
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

// Initialize ContactPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.contactpage-container')) {
    new ContactPageController();
  }
});
