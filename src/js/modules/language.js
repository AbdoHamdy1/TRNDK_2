/**
 * TRNDK Language Manager Module (Phase 2)
 * Handles Arabic / English localization with RTL/LTR directional layout and font switching.
 * Safe DOM updates using dedicated data-i18n text spans to preserve SVG icons and nested markup.
 */

export const translations = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About' },
    services: { ar: 'خدماتنا', en: 'Services' },
    portfolio: { ar: 'أعمالنا', en: 'Portfolio' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    quoteCta: { ar: 'اطلب عرض سعر', en: 'Request a Quote' },
    langToggle: { ar: 'EN', en: 'عربي' },
    langAria: { ar: 'تغيير اللغة إلى الإنجليزية', en: 'Switch language to Arabic' },
    menuAria: { ar: 'فتح القائمة الرئيسية', en: 'Open main navigation menu' },
    closeMenuAria: { ar: 'إغلاق القائمة الرئيسية', en: 'Close main navigation menu' },
  },
  hero: {
    badge: { ar: 'منظومتك التقنية والإبداعية المتكاملة', en: 'Your Integrated Creative & Tech Ecosystem' },
    headline: { ar: 'من هوية مشروعك إلى نمو أعمالك', en: 'From Your Brand Identity to Business Growth' },
    description: {
      ar: 'نساعد العلامات التجارية على بناء هويتها الرقمية، وتطوير حضورها، وتحويل أفكارها إلى تجارب وحلول تدعم نمو أعمالها.',
      en: 'We help brands build their digital identity, strengthen their presence, and turn ideas into experiences and solutions that support business growth.'
    },
    primaryCta: { ar: 'اطلب عرض سعر', en: 'Request a Quote' },
    secondaryCta: { ar: 'شاهد أعمالنا', en: 'View Our Work' },
    tagDesign: { ar: 'التصميم الإبداعي', en: 'Creative Design' },
    tagTech: { ar: 'تطوير المواقع والمتاجر', en: 'Web & Store Development' },
    tagGrowth: { ar: 'حلول النمو والتسويق', en: 'Growth & Business Solutions' },
    visualDesign: { ar: 'التصميم', en: 'Design' },
    visualTech: { ar: 'التقنية', en: 'Technology' },
    visualGrowth: { ar: 'النمو', en: 'Growth' },
    visualCenter: { ar: 'ترندك', en: 'TRNDK' },
    visualCenterSub: { ar: 'منظومة متكاملة', en: 'Integrated Ecosystem' },
  }
};

class LanguageManager {
  constructor() {
    this.STORAGE_KEY = 'trndk_lang';
    this.DEFAULT_LANG = 'ar';
    this.currentLang = this.DEFAULT_LANG;
  }

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    this.currentLang = (saved === 'ar' || saved === 'en') ? saved : this.DEFAULT_LANG;
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(nextLang);
  }

  setLanguage(lang) {
    if (lang !== 'ar' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update body font class
    if (isRtl) {
      document.body.classList.remove('font-inter');
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
      document.body.classList.add('font-inter');
    }

    // Update all dedicated data-i18n text nodes safely
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.getTranslation(key, lang);
      if (text !== null && text !== undefined) {
        el.textContent = text;
      }
    });

    // Update ARIA labels that need localization
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const text = this.getTranslation(key, lang);
      if (text) {
        el.setAttribute('aria-label', text);
      }
    });

    // Update Language Toggle Button Text
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
      const textSpan = btn.querySelector('.lang-label');
      if (textSpan) {
        textSpan.textContent = lang === 'ar' ? 'EN' : 'عربي';
      }
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية');
    });

    // Dispatch event for any other module listening to language change
    window.dispatchEvent(new CustomEvent('trndk:languageChanged', {
      detail: { language: lang, isRtl }
    }));
  }

  getTranslation(path, lang) {
    const keys = path.split('.');
    let cur = translations;
    for (const k of keys) {
      if (cur && cur[k] !== undefined) {
        cur = cur[k];
      } else {
        return null;
      }
    }
    return (typeof cur === 'object' && cur[lang] !== undefined) ? cur[lang] : null;
  }

  bindEvents() {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }
}

export const languageManager = new LanguageManager();
