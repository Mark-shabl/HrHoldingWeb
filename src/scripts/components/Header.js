// Header Component Logic

export class HeaderController {
  constructor() {
    this.isMenuOpen = false;
    this.isScrolled = false;
    this.isMobile = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.checkMobileView();
    this.handleScroll();
  }

  setupEventListeners() {
    // Scroll event listener
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Resize event listener
    window.addEventListener('resize', () => this.checkMobileView());
    
    // Mobile menu toggle
    const menuButton = document.querySelector('.header-mobile-menu-button');
    if (menuButton) {
      menuButton.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking on nav items
    const mobileNavItems = document.querySelectorAll('.header-mobile-nav-item');
    mobileNavItems.forEach(item => {
      item.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !e.target.closest('.header-container')) {
        this.closeMobileMenu();
      }
    });
  }

  handleScroll() {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 20;
    this.updateHeaderStyles();
  }

  checkMobileView() {
    this.isMobile = window.innerWidth < 768;
    this.updateMobileMenuVisibility();
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMobileMenuStyles();
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
    this.updateMobileMenuStyles();
  }

  updateHeaderStyles() {
    const header = document.querySelector('.header-container');
    if (header) {
      if (this.isScrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  updateMobileMenuStyles() {
    const menuIcon = document.querySelector('.header-mobile-menu-icon');
    const mobileMenu = document.querySelector('.header-mobile-menu');
    
    if (menuIcon) {
      if (this.isMenuOpen) {
        menuIcon.classList.add('open');
      } else {
        menuIcon.classList.remove('open');
      }
    }

    if (mobileMenu) {
      if (this.isMenuOpen) {
        mobileMenu.style.display = 'block';
        mobileMenu.style.opacity = '1';
        mobileMenu.style.height = 'auto';
      } else {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.height = '0';
        setTimeout(() => {
          if (!this.isMenuOpen) {
            mobileMenu.style.display = 'none';
          }
        }, 300);
      }
    }
  }

  updateMobileMenuVisibility() {
    const desktopNav = document.querySelector('.header-nav');
    const mobileMenuButton = document.querySelector('.header-mobile-menu-button');
    
    if (this.isMobile) {
      if (desktopNav) desktopNav.style.display = 'none';
      if (mobileMenuButton) mobileMenuButton.style.display = 'block';
    } else {
      if (desktopNav) desktopNav.style.display = 'flex';
      if (mobileMenuButton) mobileMenuButton.style.display = 'none';
      this.closeMobileMenu();
    }
  }

  // Animation methods
  animateLogo() {
    const logo = document.querySelector('.header-logo');
    if (logo) {
      logo.style.transform = 'scale(1.02)';
      setTimeout(() => {
        logo.style.transform = 'scale(1)';
      }, 200);
    }
  }

  animateNavItems() {
    const navItems = document.querySelectorAll('.header-nav-item');
    navItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        item.style.transition = 'all 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  // Public methods
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkMobileView);
  }
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HeaderController();
});
