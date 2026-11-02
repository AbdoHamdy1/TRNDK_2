/**
 * TRNDK Language Manager Module (Phase 2, 3 & 4)
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
  },
  clients: {
    badge: { ar: 'شركاء النجاح', en: 'Trusted Partners' },
    title: { ar: 'عملاؤنا الموثوقون', en: 'Trusted by Industry Leaders' },
    desc: {
      ar: 'فخورون بالتعاون مع علامات تجارية طموحة في رحلة نموها وتحقيق أهدافها.',
      en: 'Proud to collaborate with ambitious brands on their growth journeys.'
    }
  },
  services: {
    badge: { ar: 'منظومة الخدمات', en: 'Service Ecosystem' },
    title: { ar: 'خدماتنا', en: 'Our Services' },
    desc: {
      ar: 'حلول إبداعية وتقنية متكاملة تساعد علامتك التجارية على بناء حضورها وتحقيق أهدافها.',
      en: 'Integrated creative and technical solutions that help your brand build its presence and achieve its goals.'
    },
    tabsAria: { ar: 'أقسام الخدمات', en: 'Service Categories' },
    viewAll: { ar: 'عرض جميع الخدمات', en: 'View All Services' },
    showLess: { ar: 'عرض أقل', en: 'Show Less' },
    quoteBtn: { ar: 'طلب عرض سعر', en: 'Request a Quote' },
    storeBtn: { ar: 'عرض في المتجر', en: 'View in Store' },
  },
  portfolio: {
    badge: { ar: 'معرض الأعمال', en: 'Selected Portfolio' },
    title: { ar: 'أعمالنا', en: 'Our Work' },
    desc: {
      ar: 'نماذج واقعية من مشاريع الهوية البصرية والمتاجر والمواقع الإلكترونية التي نفذناها باحترافية.',
      en: 'Authentic brand identities, e‑commerce stores, and corporate websites delivered with excellence.'
    },
    filtersAria: { ar: 'تصنيفات معرض الأعمال', en: 'Portfolio Category Filters' },
    gridAria: { ar: 'شبكة مشاريع معرض الأعمال', en: 'Portfolio Projects Grid' },
  },
  about: {
    badge: { ar: 'من نحن', en: 'About' },
    title: { ar: 'عن ترندك', en: 'About TRNDK' },
    desc: {
      ar: 'ترندك تقدم حلولاً إبداعية وتقنية متكاملة تساعد العلامات التجارية على بناء هوية رقمية قوية، تطوير مواقع ومتاجر إلكترونية، وتعزيز نمو الأعمال.',
      en: 'TRNDK delivers integrated creative and technical solutions that help brands build a strong digital identity, develop websites and e‑commerce stores, and accelerate business growth.'
    }
  },
  howWeWork: {
    sectionAria: { ar: 'منهجية العمل', en: 'How We Work' },
    badge: { ar: 'منهجية العمل', en: 'Our Process' },
    title: { ar: 'كيف نعمل', en: 'How We Work' },
    desc: {
      ar: 'خطوات مدروسة ومبسطة تنقل فكرتك من مرحلة التخطيط إلى الإطلاق والنمو المستمر.',
      en: 'A structured, streamlined process taking your project from planning to launch and sustained growth.'
    },
    step1Title: { ar: 'الاكتشاف', en: 'Discovery' },
    step1Desc: {
      ar: 'فهم احتياجات العميل وأهداف المشروع.',
      en: 'Understanding client needs and project objectives.'
    },
    step2Title: { ar: 'الاستراتيجية', en: 'Strategy' },
    step2Desc: {
      ar: 'وضع الاستراتيجية المناسبة وتحديد خطة التنفيذ.',
      en: 'Developing the right strategy and defining the execution plan.'
    },
    step3Title: { ar: 'التنفيذ', en: 'Execution' },
    step3Desc: {
      ar: 'تنفيذ الحلول الإبداعية والتقنية المتفق عليها.',
      en: 'Executing the agreed-upon creative and technical solutions.'
    },
    step4Title: { ar: 'الإطلاق والنمو', en: 'Launch & Growth' },
    step4Desc: {
      ar: 'إطلاق المشروع ومتابعة فرص التطوير والنمو.',
      en: 'Launching the project and pursuing growth and development opportunities.'
    }
  },
  faq: {
    sectionAria: { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
    badge: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
    title: { ar: 'إجابات على استفساراتك', en: 'Frequently Asked Questions' },
    desc: {
      ar: 'إجابات واضحة ومباشرة على أكثر الأسئلة تداولاً حول خدماتنا ومنهجية عملنا.',
      en: 'Clear and direct answers to commonly asked questions about our services and process.'
    },
    q1: {
      ar: 'ما هي الخدمات التي تقدمها ترندك؟',
      en: 'What services does TRNDK provide?'
    },
    a1: {
      ar: 'تقدم ترندك خدمات متكاملة تشمل تصميم الهوية البصرية، تطوير المواقع والمتاجر الإلكترونية، وحلول التسويق ونمو الأعمال، بالإضافة إلى الاستشارات التقنية.',
      en: 'TRNDK provides integrated services including brand identity design, website and e‑commerce store development, growth and marketing solutions, and technical consulting.'
    },
    q2: {
      ar: 'كيف تسير آلية العمل في المشاريع؟',
      en: 'How does the project process work?'
    },
    a2: {
      ar: 'نبدأ بمرحلة الاكتشاف لفهم متطلبات المشروع، تليها مرحلة التخطيط ووضع الاستراتيجية، ثم مرحلة التنفيذ الإبداعي والتقني، وصولاً إلى الإطلاق والمتابعة.',
      en: 'We begin with discovery to understand project requirements, followed by strategy and planning, then creative and technical execution, leading to launch and ongoing follow-up.'
    },
    q3: {
      ar: 'كم تستغرق مدة تنفيذ المشروع؟',
      en: 'How long does a project take?'
    },
    a3: {
      ar: 'تختلف المدة الزمنية وفقاً لنطاق كل مشروع ومتطلباته الفنية ومرحلة الاعتمادات. يتم تحديد جدول زمني واضح ومناسب لكل مشروع بعد دراسة المتطلبات.',
      en: 'Project timelines vary depending on project scope, technical requirements, and review stages. A tailored timeline is established after evaluating specific project needs.'
    },
    q4: {
      ar: 'هل يمكنني طلب حلول مخصصة لمشروعي؟',
      en: 'Can I request a customized solution?'
    },
    a4: {
      ar: 'نعم، نقوم بتصميم وتطوير حلول مصممة خصيصاً لتناسب أهداف مشروعك وطبيعة نشاطك التجاري بدقة.',
      en: 'Yes, we design and develop tailored solutions specifically aligned with your project goals and business requirements.'
    },
    q5: {
      ar: 'كيف يمكنني التواصل مع ترندك؟',
      en: 'How can I contact TRNDK?'
    },
    a5: {
      ar: 'يمكنك التواصل معنا عبر نموذج طلب عرض السعر في الموقع، أو من خلال قنوات التواصل المباشرة المتاحة للاستفسار وبدء مناقشة مشروعك.',
      en: 'You can reach us through the quote request form on the website or via available direct communication channels to discuss your project.'
    }
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
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }
}

export const languageManager = new LanguageManager();
