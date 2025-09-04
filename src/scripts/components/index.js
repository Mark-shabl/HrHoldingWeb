// Components Scripts Index

// Import all component scripts
import { HeaderController } from './Header.js';
import { FooterController } from './Footer.js';
import { HomePageController } from './HomePage.js';
import { AboutPageController } from './AboutPage.js';
import { ServicesPageController } from './ServicesPage.js';
import { ContactPageController } from './ContactPage.js';

// Export all controllers for use in other parts of the application
export {
  HeaderController,
  FooterController,
  HomePageController,
  AboutPageController,
  ServicesPageController,
  ContactPageController
};

// Auto-initialize controllers based on current page
document.addEventListener('DOMContentLoaded', () => {
  // Initialize header and footer on all pages
  new HeaderController();
  new FooterController();
  
  // Initialize page-specific controllers
  if (document.querySelector('.homepage-container')) {
    new HomePageController();
  }
  
  if (document.querySelector('.aboutpage-container')) {
    new AboutPageController();
  }
  
  if (document.querySelector('.servicespage-container')) {
    new ServicesPageController();
  }
  
  if (document.querySelector('.contactpage-container')) {
    new ContactPageController();
  }
});
