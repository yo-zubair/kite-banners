// KiteBanners v4 - Main JavaScript

(function () {
  'use strict';

  // DOM Elements
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = mobileMenuBtn.querySelector('.menu-open');
  const menuCloseIcon = mobileMenuBtn.querySelector('.menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const faqItems = document.querySelectorAll('.faq-item');
  const showreelBtn = document.getElementById('watch-showreel');
  const showreelModal = document.getElementById('showreel-modal');
  const closeShowreel = document.getElementById('close-showreel');
  const showreelVideo = document.getElementById('showreel-video');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  // --- Navbar scroll behavior ---
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // --- Mobile menu ---
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      menuOpenIcon.classList.remove('hidden');
      menuCloseIcon.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('open');
      menuOpenIcon.classList.add('hidden');
      menuCloseIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMobileMenu();
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- FAQ Accordion ---
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // --- Showreel Modal ---
  function openShowreel() {
    showreelModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (showreelVideo) {
      showreelVideo.currentTime = 0;
      showreelVideo.play().catch(function () {
        // Autoplay may be blocked; controls remain available
      });
    }
  }

  function closeShowreelModal() {
    showreelModal.classList.remove('open');
    document.body.style.overflow = '';
    if (showreelVideo) {
      showreelVideo.pause();
    }
  }

  showreelBtn.addEventListener('click', openShowreel);
  closeShowreel.addEventListener('click', closeShowreelModal);
  showreelModal.addEventListener('click', function (e) {
    if (e.target === showreelModal) {
      closeShowreelModal();
    }
  });

  // --- Gallery Lightbox ---
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightboxModal() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(this.getAttribute('data-src'));
    });
  });

  closeLightbox.addEventListener('click', closeLightboxModal);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightboxModal();
    }
  });

  // --- Keyboard accessibility for modals ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (showreelModal.classList.contains('open')) {
        closeShowreelModal();
      }
      if (lightbox.classList.contains('open')) {
        closeLightboxModal();
      }
    }
  });

  // --- Contact form mockup ---
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    // eslint-disable-next-line no-console
    console.log('KiteBanners contact form submission:', formData);

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    setTimeout(function () {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      formSuccess.classList.remove('hidden');
      contactForm.reset();

      setTimeout(function () {
        formSuccess.classList.add('hidden');
      }, 5000);
    }, 1200);
  });
})();
