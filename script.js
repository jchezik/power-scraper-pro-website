/**
 * Power Scraper Pro - Main JavaScript
 * Smooth scroll animations and interactions
 */

(function() {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .spec-card, .stat, .gallery-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animations
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Set initial state and observe
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Form submission
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Submitting...';
      button.disabled = true;

      // Re-enable after form submits (Formspree handles the actual submission)
      setTimeout(() => {
        button.textContent = 'Thanks!';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      }, 1000);
    });
  }

})();
