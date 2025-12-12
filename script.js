/**
 * Power Scraper Pro - Main JavaScript
 * Professional animations, interactions, and performance optimizations
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile Menu Functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }

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

  // Professional Scroll Animation System
  // Respects reduced motion preferences and uses staggered reveals

  function initScrollAnimations() {
    if (prefersReducedMotion) {
      // Show all elements immediately if user prefers reduced motion
      document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('animate-visible');
      });
      return;
    }

    // Animation configurations for different element types
    const animationConfig = {
      'fade-up': {
        initial: { opacity: 0, transform: 'translateY(30px)' },
        final: { opacity: 1, transform: 'translateY(0)' },
        duration: 600
      },
      'fade-up-sm': {
        initial: { opacity: 0, transform: 'translateY(20px)' },
        final: { opacity: 1, transform: 'translateY(0)' },
        duration: 500
      },
      'fade-in': {
        initial: { opacity: 0 },
        final: { opacity: 1 },
        duration: 500
      },
      'scale-in': {
        initial: { opacity: 0, transform: 'scale(0.95)' },
        final: { opacity: 1, transform: 'scale(1)' },
        duration: 500
      }
    };

    // Select all animatable elements
    const animatedElements = document.querySelectorAll(
      '.feature-card, .spec-card, .stat, .gallery-item, .capability-block, ' +
      '.automation-card, .tech-item, .perf-stat, .reliability-card, ' +
      '.accessibility-card, .shortcuts-group, .section-intro, ' +
      '.hero-content, .hero-window, .capability-visual, .faq-item'
    );

    // Group elements by their parent section for staggered animation
    const sectionGroups = new Map();

    animatedElements.forEach(el => {
      const section = el.closest('section') || el.closest('.hero');
      if (!sectionGroups.has(section)) {
        sectionGroups.set(section, []);
      }
      sectionGroups.get(section).push(el);
    });

    // Set initial state for all elements
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Create observer for section-based staggered animations
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const elements = sectionGroups.get(section) || [];

          // Animate each element with stagger delay
          elements.forEach((el, index) => {
            const delay = Math.min(index * 80, 400); // Cap delay at 400ms
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
          });

          sectionObserver.unobserve(section);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    });

    // Observe each section
    sectionGroups.forEach((elements, section) => {
      if (section) {
        sectionObserver.observe(section);
      }
    });

    // Special handling for hero section - animate immediately on load
    const heroContent = document.querySelector('.hero-content');
    const heroWindow = document.querySelector('.hero-window');

    if (heroContent) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 100);
    }

    if (heroWindow) {
      setTimeout(() => {
        heroWindow.style.opacity = '1';
        heroWindow.style.transform = 'translateY(0)';
      }, 300);
    }
  }

  // Initialize scroll animations
  initScrollAnimations();

  // FAQ Accordion functionality
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        const expanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other items (optional: remove this block for multi-open)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
        question.setAttribute('aria-expanded', !expanded);
      });

      // Keyboard navigation
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  }

  initFAQAccordion();

  // Image Loading Performance
  // Adds smooth fade-in when images load and removes loading skeleton
  function initImageLoading() {
    // Handle gallery images with loading states
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;

      // Check if image is already loaded (cached)
      if (img.complete && img.naturalHeight !== 0) {
        img.classList.add('loaded');
        item.classList.add('loaded');
      } else {
        // Add load event listener
        img.addEventListener('load', () => {
          img.classList.add('loaded');
          item.classList.add('loaded');
        });

        // Handle error state
        img.addEventListener('error', () => {
          item.classList.add('loaded'); // Remove skeleton even on error
        });
      }
    });

    // Handle hero image
    const heroImg = document.querySelector('.hero-window img');
    if (heroImg) {
      if (heroImg.complete && heroImg.naturalHeight !== 0) {
        heroImg.classList.add('loaded');
      } else {
        heroImg.addEventListener('load', () => {
          heroImg.classList.add('loaded');
        });
      }
    }

    // Clean up will-change after animations complete to free GPU memory
    setTimeout(() => {
      document.querySelectorAll('.feature-card, .gallery-item, .capability-block, .automation-card, .reliability-card, .accessibility-card, .faq-item').forEach(el => {
        el.classList.add('animation-complete');
      });
    }, 2000);
  }

  initImageLoading();

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
