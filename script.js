/**
 * Power Scraper Pro - Main JavaScript
 * Handles animations, navigation, gallery, lightbox, and form functionality
 */

(function() {
  'use strict';

  // ===== Configuration =====
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ===== DOM Elements =====
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const scrollProgress = document.getElementById('scroll-progress');
  const nav = document.querySelector('.nav');
  const macosWindow = document.querySelector('.macos-window');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryScroll = document.getElementById('gallery-scroll');
  const galleryDots = document.getElementById('gallery-dots');
  const prevBtn = document.querySelector('.gallery-nav.prev');
  const nextBtn = document.querySelector('.gallery-nav.next');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const emailMessage = document.getElementById('email-message');

  // ===== Mobile Navigation =====
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });
  }

  // ===== Scroll Progress Bar =====
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  }

  // ===== Intersection Observer for Scroll Animations =====
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // ===== Smooth Scroll for Navigation Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        // Close mobile nav if open
        if (navLinks) navLinks.classList.remove('active');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ===== Scroll Handler (Nav + Parallax) =====
  let ticking = false;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Nav border
    if (nav) {
      if (scrollY > 50) {
        nav.style.borderBottomColor = 'var(--border-color)';
      } else {
        nav.style.borderBottomColor = 'transparent';
      }
    }

    // Parallax effect on hero window (subtle tilt based on scroll)
    if (!prefersReducedMotion && macosWindow && scrollY < 800) {
      const parallaxY = scrollY * 0.15;
      const rotateX = Math.min(scrollY * 0.01, 5);
      const scale = 1 - (scrollY * 0.0002);
      macosWindow.style.transform = `translateY(${parallaxY}px) rotateX(${rotateX}deg) scale(${Math.max(scale, 0.95)})`;
    }

    // Update scroll progress
    updateScrollProgress();

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // ===== Traffic Light Interactions (Easter Egg) =====
  const trafficLights = document.querySelectorAll('.traffic-lights .light');
  let windowMinimized = false;

  trafficLights.forEach(light => {
    light.addEventListener('click', (e) => {
      e.stopPropagation();

      if (light.classList.contains('minimize')) {
        if (!windowMinimized && macosWindow) {
          macosWindow.classList.remove('window-restore');
          macosWindow.classList.add('window-minimized');
          windowMinimized = true;

          // Restore after 2 seconds
          setTimeout(() => {
            macosWindow.classList.remove('window-minimized');
            macosWindow.classList.add('window-restore');
            windowMinimized = false;

            // Clean up classes after animation
            setTimeout(() => {
              macosWindow.classList.remove('window-restore');
            }, 400);
          }, 2000);
        }
      }

      if (light.classList.contains('close') && macosWindow) {
        // Fun "bounce" effect
        macosWindow.style.transition = 'transform 0.1s ease';
        macosWindow.style.transform = 'scale(0.98)';
        setTimeout(() => {
          macosWindow.style.transform = '';
          macosWindow.style.transition = '';
        }, 100);
      }

      if (light.classList.contains('maximize') && macosWindow) {
        // Subtle "zoom" effect
        macosWindow.style.transition = 'transform 0.2s ease';
        macosWindow.style.transform = 'scale(1.02)';
        setTimeout(() => {
          macosWindow.style.transform = '';
          macosWindow.style.transition = '';
        }, 200);
      }
    });
  });

  // ===== Lightbox Functionality =====
  const clickableImages = document.querySelectorAll('.window-content img, .gallery-frame img, .showcase-image img, .settings-image img');

  clickableImages.forEach(img => {
    img.classList.add('clickable-image');
    img.style.cursor = 'zoom-in';

    img.addEventListener('click', () => {
      if (lightboxImage && lightbox) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        if (lightboxCaption) lightboxCaption.textContent = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', closeLightbox);
  }

  if (lightboxImage) {
    lightboxImage.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ===== Reduced Motion Support =====
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-medium', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');

    // Remove floating animation from window
    if (macosWindow) {
      macosWindow.style.animation = 'none';
    }

    // Make all reveals visible immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }

  // ===== Gallery Carousel Functionality =====
  if (galleryScroll && galleryItems.length > 0 && galleryDots) {
    // Create dots
    galleryItems.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'gallery-dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to screenshot ${index + 1}`);
      dot.addEventListener('click', () => scrollToItem(index));
      galleryDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.gallery-dot');

    // Scroll to specific item
    function scrollToItem(index) {
      const item = galleryItems[index];
      if (item) {
        const scrollLeft = item.offsetLeft - (galleryScroll.offsetWidth - item.offsetWidth) / 2;
        galleryScroll.scrollTo({ left: scrollLeft, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }

    // Update active dot based on scroll position
    function updateActiveDot() {
      const scrollLeft = galleryScroll.scrollLeft;
      const containerWidth = galleryScroll.offsetWidth;

      let activeIndex = 0;
      let minDistance = Infinity;

      galleryItems.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const containerCenter = scrollLeft + containerWidth / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    }

    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const itemWidth = galleryItems[0].offsetWidth + 48; // gap
        galleryScroll.scrollBy({ left: -itemWidth, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const itemWidth = galleryItems[0].offsetWidth + 48; // gap
        galleryScroll.scrollBy({ left: itemWidth, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    }

    // Drag to scroll
    let isDown = false;
    let startX;
    let scrollLeftStart;

    galleryScroll.addEventListener('mousedown', (e) => {
      isDown = true;
      galleryScroll.style.cursor = 'grabbing';
      startX = e.pageX - galleryScroll.offsetLeft;
      scrollLeftStart = galleryScroll.scrollLeft;
    });

    galleryScroll.addEventListener('mouseleave', () => {
      isDown = false;
      galleryScroll.style.cursor = 'grab';
    });

    galleryScroll.addEventListener('mouseup', () => {
      isDown = false;
      galleryScroll.style.cursor = 'grab';
    });

    galleryScroll.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryScroll.offsetLeft;
      const walk = (x - startX) * 1.5;
      galleryScroll.scrollLeft = scrollLeftStart - walk;
    });

    // Update dots on scroll
    galleryScroll.addEventListener('scroll', updateActiveDot);

    // Initial update
    updateActiveDot();
  }

  // ===== Email Form Functionality =====
  if (emailForm && emailInput && emailMessage) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const submitBtn = emailForm.querySelector('.email-submit');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailMessage.textContent = 'Please enter a valid email address.';
        emailMessage.className = 'email-message error';
        return;
      }

      // Show loading state
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline-flex';
      if (submitBtn) submitBtn.disabled = true;

      // Submit to Formspree
      try {
        const response = await fetch('https://formspree.io/f/xovgwzoq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            _subject: 'Power Scraper Pro - Early Access Request'
          })
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        // Show success message
        emailMessage.textContent = 'You\'re on the list! We\'ll notify you when early access is available.';
        emailMessage.className = 'email-message success';
        emailInput.value = '';
      } catch (error) {
        emailMessage.textContent = 'Something went wrong. Please try again.';
        emailMessage.className = 'email-message error';
      } finally {
        // Reset button state
        if (btnText) btnText.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // ===== Service Worker Registration =====
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('ServiceWorker registered:', registration.scope);
        })
        .catch(error => {
          console.log('ServiceWorker registration failed:', error);
        });
    });
  }

})();
