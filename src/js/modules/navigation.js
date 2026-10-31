/**
 * TRNDK Navigation Module (Phase 2)
 * Handles sticky glassmorphic navbar transitions on scroll,
 * accessible mobile drawer with ARIA attributes and scroll lock,
 * and keyboard navigation (Escape key handling).
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
  }

  init() {
    this.navbar = document.getElementById('mainNavbar');
    this.mobileToggle = document.getElementById('mobileMenuToggle');
    this.mobileDrawer = document.getElementById('mobileNavDrawer');
    this.mobileBackdrop = document.getElementById('mobileNavBackdrop');
    this.mobileCloseBtn = document.getElementById('mobileCloseBtn');
    this.navLinks = document.querySelectorAll('.nav-anchor');

    this.bindScroll();
    this.bindMobileDrawer();
    this.bindAnchorScroll();
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
    // Smooth scrolling for future and present anchors with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If section is not yet implemented on the page in Phase 2
          console.info(`[TRNDK Navigation] Anchor "${targetId}" will be implemented in a subsequent phase.`);
        }
      });
    });
  }
}

export const navigationManager = new NavigationManager();
