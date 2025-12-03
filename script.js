/**
 * Power Scraper Pro - Main JavaScript
 * Smooth scroll animations and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
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

  // Toast notification helper
  function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove('error');
    if (isError) toast.classList.add('error');

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // Form submission via AJAX (no redirect) - MUST prevent default
  const form = document.getElementById('signup-form');
  if (form) {
    // Remove any existing listeners and add fresh one
    form.onsubmit = async function(e) {
      // CRITICAL: Prevent form from submitting normally
      e.preventDefault();
      e.stopPropagation();

      const button = form.querySelector('button');
      const input = form.querySelector('input[type="email"]');
      const originalText = button.textContent;

      button.textContent = 'Sending...';
      button.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showToast('You\'re on the list! We\'ll be in touch soon.');
          input.value = '';
          button.textContent = 'Sent!';
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        showToast('Something went wrong. Please try again.', true);
        button.textContent = originalText;
      }

      button.disabled = false;
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);

      // Return false as extra protection against form submission
      return false;
    };
  }
});
