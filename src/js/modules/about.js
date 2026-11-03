// About Section Module (Phase 5)
// Handles scroll-triggered entrance animations and dynamic behaviors for the About section.

export const aboutManager = {
  observer: null,

  init() {
    this.setupIntersectionObserver();
    window.addEventListener('trndk:languageChanged', this.onLanguageChange.bind(this));
  },

  setupIntersectionObserver() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              aboutSection.classList.add('about-in-view');
              if (this.observer) {
                this.observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px'
        }
      );
      this.observer.observe(aboutSection);
    } else {
      aboutSection.classList.add('about-in-view');
    }
  },

  onLanguageChange(event) {
    // Dynamic updates on language change if needed
  }
};
