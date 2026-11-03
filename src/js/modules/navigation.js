/**
 * TRNDK Navigation Module (Phase 2 & Enhancements)
 * Handles sticky glassmorphic navbar transitions on scroll,
 * accessible mobile drawer with ARIA attributes and scroll lock,
 * keyboard navigation (Escape key handling),
 * and automatic active section highlighting via IntersectionObserver.
 */

class NavigationManager {
  constructor() {
    this.navbar = null;
    this.mobileToggle = null;
    this.mobileDrawer = null;
    this.mobileBackdrop = null;
    this.mobileCloseBtn = null;
    this.navLinks = [];
    this.isOpen = false;
    this.activeSectionId = null;
    this.sectionObserver = null;
    this.visibleSections = new Map();
    this.sectionIds = ['home', 'services', 'portfolio', 'about', 'how-we-work', 'faq', 'contact'];
    this.sectionToNavMap = {
      home: 'home',
      services: 'services',
      portfolio: 'portfolio',
      about: 'about',
      'how-we-work': 'about',
      faq: 'about',
      contact: 'contact'
    };
  }

  init() {
    this.navbar = document.getElementById('mainNavbar');
    this.mobileToggle = document.getElementById('mobileMenuToggle');
    this.mobileDrawer = document.getElementById('mobileNavDrawer');
    this.mobileBackdrop = document.getElementById('mobileNavBackdrop');
    this.mobileCloseBtn = document.getElementById('mobileCloseBtn');
    this.navLinks = document.querySelectorAll('.nav-link');

    this.bindScroll();
    this.bindMobileDrawer();
    this.bindAnchorScroll();
    this.initSectionSpy();
  }

  bindScroll() {
    if (!this.navbar) return;

    const onScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled) {
        this.navbar.classList.add('navbar-scrolled');
      } else {
        this.navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial position check
  }

  bindMobileDrawer() {
    if (!this.mobileToggle || !this.mobileDrawer) return;

    this.mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleDrawer();
    });

    if (this.mobileCloseBtn) {
      this.mobileCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeDrawer();
      });
    }

    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', () => {
        this.closeDrawer();
      });
    }

    // Keyboard support: Escape closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeDrawer();
        this.mobileToggle?.focus();
      }
    });

    // Close when clicking any link inside drawer
    this.mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeDrawer();
      });
    });
  }

  openDrawer() {
    this.isOpen = true;
    this.mobileDrawer.classList.remove('invisible', 'translate-x-full', '-translate-x-full', 'pointer-events-none', 'opacity-0');
    this.mobileDrawer.classList.add('translate-x-0', 'opacity-100');
    
    if (this.mobileBackdrop) {
      this.mobileBackdrop.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
      this.mobileBackdrop.classList.add('opacity-100');
    }

    this.mobileToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus close button for screen reader / keyboard accessibility
    setTimeout(() => {
      this.mobileCloseBtn?.focus();
    }, 150);
  }

  closeDrawer() {
    this.isOpen = false;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    
    // In RTL, drawer slides off to the right (translate-x-full); in LTR, to the right or left
    this.mobileDrawer.classList.remove('translate-x-0', 'opacity-100');
    this.mobileDrawer.classList.add(isRtl ? 'translate-x-full' : '-translate-x-full', 'opacity-0', 'pointer-events-none');

    setTimeout(() => {
      if (!this.isOpen && this.mobileDrawer) {
        this.mobileDrawer.classList.add('invisible');
      }
    }, 300);

    if (this.mobileBackdrop) {
      this.mobileBackdrop.classList.remove('opacity-100');
      this.mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        if (!this.isOpen && this.mobileBackdrop) {
          this.mobileBackdrop.classList.add('hidden');
        }
      }, 300);
    }

    this.mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleDrawer() {
    if (this.isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  bindAnchorScroll() {
    // Smooth scrolling for navigation anchors with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const cleanId = targetId.replace('#', '');
          if (this.sectionToNavMap && this.sectionToNavMap[cleanId]) {
            this.setActiveLink(this.sectionToNavMap[cleanId]);
          }

          targetEl.scrollIntoView({ behavior: 'smooth' });

          // Update browser history hash without jumping
          if (window.history && window.history.pushState) {
            window.history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

  initSectionSpy() {
    this.navLinks = document.querySelectorAll('.nav-link');

    // 1. Setup IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-85px 0px -40% 0px',
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          this.visibleSections.set(id, entry.intersectionRatio);
        } else {
          this.visibleSections.delete(id);
        }
      });
      this.updateActiveSection();
    };

    if ('IntersectionObserver' in window) {
      this.sectionObserver = new IntersectionObserver(handleIntersect, observerOptions);
      this.sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          this.sectionObserver.observe(el);
        }
      });
    }

    // 2. Scroll listener for boundary handling and fallback
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          this.updateActiveSection();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });

    // 3. Handle initial hash or initial home activation
    window.addEventListener('hashchange', () => {
      this.handleHashNavigation();
    });

    if (window.location.hash) {
      this.handleHashNavigation();
    } else {
      this.setActiveLink('home');
    }
  }

  handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    const mapped = this.sectionToNavMap[hash];
    if (mapped) {
      this.setActiveLink(mapped);
    }
  }

  updateActiveSection() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Boundary 1: Top of document
    if (scrollY < 100) {
      this.setActiveLink('home');
      return;
    }

    // Boundary 2: Bottom of document (Contact section)
    if (windowHeight + scrollY >= docHeight - 80) {
      this.setActiveLink('contact');
      return;
    }

    // Intersecting visible sections check
    let bestId = null;
    let maxRatio = -1;

    for (const [id, ratio] of this.visibleSections.entries()) {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        bestId = id;
      }
    }

    if (bestId && this.sectionToNavMap[bestId]) {
      this.setActiveLink(this.sectionToNavMap[bestId]);
      return;
    }

    // Fallback: Check section positions relative to navbar header reading line
    const headerLine = 120;
    let currentId = 'home';
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= headerLine) {
          currentId = id;
        }
      }
    }

    if (this.sectionToNavMap[currentId]) {
      this.setActiveLink(this.sectionToNavMap[currentId]);
    }
  }

  setActiveLink(targetId) {
    if (this.activeSectionId === targetId) return;
    this.activeSectionId = targetId;

    const targetHref = '#' + targetId;
    this.navLinks.forEach(link => {
      if (link.getAttribute('href') === targetHref) {
        link.classList.add('nav-link-active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('nav-link-active');
        link.removeAttribute('aria-current');
      }
    });
  }
}

export const navigationManager = new NavigationManager();
