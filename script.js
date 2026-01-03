/**
 * Power Scraper Pro - Main JavaScript
 * Clean, minimal interactions. No unnecessary animations.
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ==========================================================================
  // Legal Disclaimer Modal - First Visit Acceptance
  // Users MUST accept before using the site
  // ==========================================================================
  const DISCLAIMER_ACCEPTED_KEY = 'psp_disclaimer_accepted';
  const DISCLAIMER_VERSION = '2.0'; // Incremented 2026-01-03: Enhanced legal protections, explicit piracy prohibitions

  const disclaimerModal = document.getElementById('disclaimer-modal');
  const disclaimerAcceptBtn = document.getElementById('disclaimer-accept');

  function hasAcceptedDisclaimer() {
    try {
      const stored = localStorage.getItem(DISCLAIMER_ACCEPTED_KEY);
      if (!stored) return false;
      const data = JSON.parse(stored);
      return data.version === DISCLAIMER_VERSION && data.accepted === true;
    } catch (e) {
      return false;
    }
  }

  function acceptDisclaimer() {
    try {
      localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, JSON.stringify({
        version: DISCLAIMER_VERSION,
        accepted: true,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {
      // LocalStorage not available, accept for this session only
    }
    hideDisclaimerModal();
  }

  function hideDisclaimerModal() {
    if (disclaimerModal) {
      disclaimerModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function showDisclaimerModal() {
    if (disclaimerModal) {
      disclaimerModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      // Focus on accept button for accessibility
      if (disclaimerAcceptBtn) {
        setTimeout(() => disclaimerAcceptBtn.focus(), 100);
      }
    }
  }

  // Initialize disclaimer on page load
  if (disclaimerModal) {
    if (hasAcceptedDisclaimer()) {
      // Already accepted, hide immediately
      disclaimerModal.classList.add('hidden');
    } else {
      // Show disclaimer - user must accept
      showDisclaimerModal();
    }

    // Accept button handler
    if (disclaimerAcceptBtn) {
      disclaimerAcceptBtn.addEventListener('click', acceptDisclaimer);
    }

    // Prevent closing modal by clicking outside
    disclaimerModal.addEventListener('click', function(e) {
      if (e.target === disclaimerModal) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    // Prevent Escape key from closing until accepted
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !disclaimerModal.classList.contains('hidden')) {
        e.preventDefault();
      }
    });
  }

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================
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

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
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

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const expanded = question.getAttribute('aria-expanded') === 'true';

      // Close all other items
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

    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // ==========================================================================
  // Toast Notification
  // ==========================================================================
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

  // ==========================================================================
  // Paddle Checkout
  // ==========================================================================
  const buyButton = document.getElementById('buy-button');
  if (buyButton) {
    buyButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (typeof Paddle !== 'undefined') {
        Paddle.Checkout.open({
          product: 'YOUR_PRODUCT_ID', // Replace with your Paddle product ID
          successCallback: function(data) {
            showToast('Thank you for your purchase! Check your email for the license key.');
          },
          closeCallback: function() {
            // User closed checkout
          }
        });
      } else {
        showToast('Checkout is being configured. Please try again shortly.', true);
      }
    });
  }

  // Handle CTA buy button clicks (scroll to pricing)
  const ctaBuyButtons = document.querySelectorAll('.cta-btn[href="#pricing"]');
  ctaBuyButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      // Let default anchor behavior work
    });
  });
});
