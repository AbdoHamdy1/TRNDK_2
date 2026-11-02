/**
 * TRNDK FAQ Module (Phase 7)
 * Handles accessible accordion interaction with aria-expanded, aria-controls,
 * smooth CSS transitions, and keyboard accessibility.
 */

class FAQManager {
  constructor() {
    this.section = null;
    this.items = [];
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    this.section = document.getElementById('faq');
    if (!this.section) return;

    this.items = Array.from(this.section.querySelectorAll('.faq-item'));
    this.bindEvents();
    this.initialized = true;
  }

  bindEvents() {
    this.items.forEach((item) => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      if (!trigger || !content) return;

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          this.closeItem(trigger, content, icon);
        } else {
          // Close other open items for a clean single-open accordion experience
          this.items.forEach((other) => {
            if (other !== item) {
              const otherTrigger = other.querySelector('.faq-trigger');
              const otherContent = other.querySelector('.faq-content');
              const otherIcon = other.querySelector('.faq-icon');
              if (otherTrigger?.getAttribute('aria-expanded') === 'true') {
                this.closeItem(otherTrigger, otherContent, otherIcon);
              }
            }
          });
          this.openItem(trigger, content, icon);
        }
      });
    });

    // Handle language change: if an item is open, dynamically update max-height to fit new language text
    window.addEventListener('trndk:languageChanged', () => {
      this.items.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        if (trigger?.getAttribute('aria-expanded') === 'true' && content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  openItem(trigger, content, icon) {
    trigger.setAttribute('aria-expanded', 'true');
    content.removeAttribute('hidden');
    // Force layout reflow so transition smoothly animates
    void content.offsetHeight;
    content.style.maxHeight = content.scrollHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
    if (icon) {
      icon.classList.add('rotate-180');
    }
  }

  closeItem(trigger, content, icon) {
    trigger.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0px';
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0');
    if (icon) {
      icon.classList.remove('rotate-180');
    }
    setTimeout(() => {
      if (trigger.getAttribute('aria-expanded') === 'false') {
        content.setAttribute('hidden', '');
      }
    }, 300);
  }
}

export const faqManager = new FAQManager();
