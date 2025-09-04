// AboutPage Component Logic

export class AboutPageController {
  constructor() {
    this.scrollY = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.animateHeroElements();
    this.setupParallaxEffect();
    this.setupValueCards();
    this.setupTeamMembers();
    this.setupAchievements();
  }

  setupEventListeners() {
    // Scroll event for parallax
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Resize event
    window.addEventListener('resize', () => this.handleResize());
    
    // Value card interactions
    this.setupValueCardInteractions();
    
    // Team member interactions
    this.setupTeamMemberInteractions();
    
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
    const parallaxElements = document.querySelectorAll('.aboutpage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  updateParallaxElements() {
    const parallaxElements = document.querySelectorAll('.aboutpage-hero-background');
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${this.scrollY * 0.3}px)`;
    });
  }

  animateHeroElements() {
    // Animate hero title
    const heroTitle = document.querySelector('.aboutpage-hero-title');
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
    const heroDescription = document.querySelector('.aboutpage-hero-description');
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
    const heroButtons = document.querySelector('.aboutpage-hero-buttons');
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

  setupValueCards() {
    const valueCards = document.querySelectorAll('.aboutpage-value-card');
    valueCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8) rotate(-5deg)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotate(0deg)';
      }, 500 + (index * 200));
    });
  }

  setupValueCardInteractions() {
    const valueCards = document.querySelectorAll('.aboutpage-value-card');
    valueCards.forEach(card => {
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

  setupTeamMembers() {
    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateTeamMembers(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const teamSection = document.querySelector('.aboutpage-team');
    if (teamSection) {
      teamObserver.observe(teamSection);
    }
  }

  animateTeamMembers(teamSection) {
    const teamMembers = teamSection.querySelectorAll('.aboutpage-team-member');
    teamMembers.forEach((member, index) => {
      member.style.opacity = '0';
      member.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        member.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        member.style.opacity = '1';
        member.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }

  setupTeamMemberInteractions() {
    const teamMembers = document.querySelectorAll('.aboutpage-team-member');
    teamMembers.forEach(member => {
      member.addEventListener('mouseenter', () => {
        member.style.transform = 'translateY(-10px)';
      });
      
      member.addEventListener('mouseleave', () => {
        member.style.transform = 'translateY(0)';
      });
    });
  }

  setupAchievements() {
    const achievementsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateAchievements(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const achievementsSection = document.querySelector('.aboutpage-mission-achievements');
    if (achievementsSection) {
      achievementsObserver.observe(achievementsSection);
    }
  }

  animateAchievements(achievementsSection) {
    const achievements = achievementsSection.querySelectorAll('.aboutpage-mission-achievement');
    achievements.forEach((achievement, index) => {
      achievement.style.opacity = '0';
      achievement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        achievement.style.transition = 'all 0.6s ease';
        achievement.style.opacity = '1';
        achievement.style.transform = 'translateY(0)';
      }, index * 100);
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
      case 'Наша миссия':
        this.scrollToMission();
        break;
      case 'Связаться с нами':
        this.scrollToContact();
        break;
      case 'Получить консультацию':
        this.openContactModal();
        break;
      default:
        console.log('Button clicked:', buttonText);
    }
  }

  scrollToMission() {
    const missionSection = document.querySelector('.aboutpage-mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contactSection = document.querySelector('.contactpage-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openContactModal() {
    console.log('Opening contact modal...');
    // Implementation would depend on your modal system
  }

  checkSectionVisibility() {
    // Check if sections are visible and trigger animations
    const sections = document.querySelectorAll('.aboutpage-mission, .aboutpage-team');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        if (section.classList.contains('aboutpage-mission')) {
          this.animateAchievements(section);
        } else if (section.classList.contains('aboutpage-team')) {
          this.animateTeamMembers(section);
        }
      }
    });
  }

  updateLayout() {
    // Update layout on resize
    const valueCards = document.querySelectorAll('.aboutpage-value-card');
    valueCards.forEach(card => {
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

// Initialize AboutPage when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.aboutpage-container')) {
    new AboutPageController();
  }
});
