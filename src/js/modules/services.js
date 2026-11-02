/**
 * TRNDK Interactive Service Explorer Module (Phase 3)
 * Handles:
 * - 5 category tabs with live service counts
 * - Keyboard accessible tab navigation (Arrow keys, Home, End)
 * - Initial 6-card display with View All / Show Less toggle for >6 items
 * - External category store link with target="_blank" rel="noopener noreferrer"
 * - Service selection capture via 'trndk:quote-request' custom event and lightweight toast
 * - Instant language synchronization with zero scroll jump
 */

import { categories, services } from '../data/services-data.js';

class ServicesManager {
  constructor() {
    this.container = null;
    this.tabsContainer = null;
    this.gridContainer = null;
    this.categoryInfoContainer = null;
    this.expansionContainer = null;
    this.toastContainer = null;
    this.toastTimeout = null;

    this.activeCategoryId = 'creative-design';
    this.isExpanded = false;
    this.currentLang = 'ar';
  }

  init(initialLang = 'ar') {
    this.currentLang = initialLang;
    this.container = document.getElementById('services');
    if (!this.container) return;

    this.tabsContainer = document.getElementById('servicesTabs');
    this.gridContainer = document.getElementById('servicesGrid');
    this.categoryInfoContainer = document.getElementById('categoryInfo');
    this.expansionContainer = document.getElementById('servicesExpansion');
    this.toastContainer = document.getElementById('serviceToast');

    this.bindEvents();
    this.render();
  }

  setLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    this.render();
  }

  bindEvents() {
    // Listen for language changes from LanguageManager
    window.addEventListener('trndk:languageChanged', (e) => {
      if (e.detail && e.detail.language) {
        this.setLanguage(e.detail.language);
      }
    });

    // Delegate grid interactions (Quote request)
    if (this.gridContainer) {
      this.gridContainer.addEventListener('click', (e) => {
        const quoteBtn = e.target.closest('[data-action="quote"]');
        if (quoteBtn) {
          e.preventDefault();
          const serviceId = quoteBtn.getAttribute('data-service-id');
          this.handleQuoteRequest(serviceId);
        }
      });
    }

    // Keyboard navigation for category tabs
    if (this.tabsContainer) {
      this.tabsContainer.addEventListener('keydown', (e) => {
        const tabs = Array.from(this.tabsContainer.querySelectorAll('[role="tab"]'));
        const currentIndex = tabs.findIndex(tab => tab.getAttribute('data-category-id') === this.activeCategoryId);
        if (currentIndex === -1) return;

        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        let newIndex = currentIndex;

        if (e.key === 'ArrowRight') {
          newIndex = isRtl ? currentIndex - 1 : currentIndex + 1;
        } else if (e.key === 'ArrowLeft') {
          newIndex = isRtl ? currentIndex + 1 : currentIndex - 1;
        } else if (e.key === 'Home') {
          newIndex = 0;
        } else if (e.key === 'End') {
          newIndex = tabs.length - 1;
        } else {
          return;
        }

        if (newIndex < 0) newIndex = tabs.length - 1;
        if (newIndex >= tabs.length) newIndex = 0;

        e.preventDefault();
        const targetTab = tabs[newIndex];
        const newCatId = targetTab.getAttribute('data-category-id');
        this.selectCategory(newCatId);
        targetTab.focus();
      });
    }
  }

  selectCategory(categoryId) {
    if (this.activeCategoryId === categoryId) return;
    this.activeCategoryId = categoryId;
    this.isExpanded = false; // Reset expansion state on category change
    this.render();
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
    this.renderGrid();
    this.renderExpansionButton();
  }

  handleQuoteRequest(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    // 1. Dispatch custom event for future Form integration
    const eventDetail = {
      serviceId: service.id,
      categoryId: service.categoryId,
      titleAr: service.titleAr,
      titleEn: service.titleEn,
      storeUrl: service.storeUrl,
      timestamp: new Date().toISOString()
    };

    window.dispatchEvent(new CustomEvent('trndk:quote-request', { detail: eventDetail }));

    // 2. Keep in shared namespace
    if (window.__TRNDK__) {
      window.__TRNDK__.selectedService = eventDetail;
    }

    // 3. Show polite informative toast
    this.showToast(service);
  }

  showToast(service) {
    if (!this.toastContainer) return;

    const isAr = this.currentLang === 'ar';
    const title = isAr ? 'تم اختيار الخدمة بنجاح' : 'Service Selected';
    const serviceName = isAr ? service.titleAr : service.titleEn;
    const msg = isAr
      ? `تم تحديد "${serviceName}". نموذج طلب عرض السعر سيكون متاحاً في المرحلة القادمة.`
      : `"${serviceName}" has been selected. The quotation form will be available in the upcoming phase.`;

    this.toastContainer.innerHTML = `
      <div class="flex items-start gap-3 p-4 rounded-2xl bg-[#1A1C20] border border-primary/30 text-white shadow-2xl max-w-md w-full animate-fade-in backdrop-blur-md">
        <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-sm font-bold text-white mb-0.5">${title}</p>
          <p class="text-xs text-slate-300 leading-relaxed">${msg}</p>
        </div>
        <button type="button" class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors focus:outline-none" aria-label="Close notification" onclick="document.getElementById('serviceToast').classList.add('hidden')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    `;

    this.toastContainer.classList.remove('hidden');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      if (this.toastContainer) {
        this.toastContainer.classList.add('hidden');
      }
    }, 4500);
  }

  render() {
    this.renderTabs();
    this.renderCategoryInfo();
    this.renderGrid();
    this.renderExpansionButton();
  }

  renderTabs() {
    if (!this.tabsContainer) return;

    const isAr = this.currentLang === 'ar';
    this.tabsContainer.innerHTML = categories.map(cat => {
      const isActive = cat.id === this.activeCategoryId;
      const name = isAr ? cat.nameAr : cat.nameEn;
      const activeClasses = isActive
        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 font-semibold'
        : 'bg-[#1A1C20] text-slate-300 hover:text-white hover:bg-white/5 border-white/10 font-medium';

      return `
        <button
          type="button"
          role="tab"
          id="tab-${cat.id}"
          data-category-id="${cat.id}"
          aria-selected="${isActive}"
          aria-controls="servicesGrid"
          tabindex="${isActive ? '0' : '-1'}"
          class="inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap cursor-pointer ${activeClasses}"
        >
          <span>${name}</span>
          <span class="px-2 py-0.5 rounded-full text-[11px] ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}">
            ${cat.count}
          </span>
        </button>
      `;
    }).join('');

    // Bind click listeners to freshly rendered tabs
    this.tabsContainer.querySelectorAll('[role="tab"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-category-id');
        this.selectCategory(catId);
      });
    });
  }

  renderCategoryInfo() {
    if (!this.categoryInfoContainer) return;
    const cat = categories.find(c => c.id === this.activeCategoryId);
    if (!cat) return;

    const isAr = this.currentLang === 'ar';
    const name = isAr ? cat.nameAr : cat.nameEn;
    const desc = isAr ? cat.descriptionAr : cat.descriptionEn;
    const storeText = isAr ? 'تصفح القسم في المتجر' : 'Browse Category in Store';

    this.categoryInfoContainer.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
        <div class="max-w-2xl">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-1.5 flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span>${name}</span>
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed">${desc}</p>
        </div>
        <a
          href="${cat.storeUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <span>${storeText}</span>
          <svg class="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    `;
  }

  renderGrid() {
    if (!this.gridContainer) return;

    const catServices = services.filter(s => s.categoryId === this.activeCategoryId);
    const visibleServices = (catServices.length > 6 && !this.isExpanded)
      ? catServices.slice(0, 6)
      : catServices;

    const isAr = this.currentLang === 'ar';
    const quoteText = isAr ? 'طلب عرض سعر' : 'Request a Quote';
    const storeText = isAr ? 'عرض في المتجر' : 'View in Store';

    this.gridContainer.innerHTML = visibleServices.map(service => {
      const title = isAr ? service.titleAr : service.titleEn;
      const desc = isAr ? service.descriptionAr : service.descriptionEn;

      return `
        <article class="flex flex-col h-full bg-[#1A1C20] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group" data-service-id="${service.id}">
          
          <!-- Service Visual -->
          <div class="relative aspect-video w-full overflow-hidden bg-black/40">
            <img
              src="${service.image}"
              alt="${title}"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1A1C20] via-transparent to-transparent opacity-60"></div>
          </div>

          <!-- Service Content Body -->
          <div class="p-5 sm:p-6 flex flex-col flex-1">
            <h4 class="text-base sm:text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors" title="${title}">
              ${title}
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 flex-1 line-clamp-3">
              ${desc}
            </p>

            <!-- Card Actions -->
            <div class="flex flex-col gap-2.5 mt-auto pt-4 border-t border-white/5">
              <!-- Primary: Request Quote Hook -->
              <button
                type="button"
                data-action="quote"
                data-service-id="${service.id}"
                class="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-primary hover:bg-[#B8282C] text-white shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              >
                <span>${quoteText}</span>
                <svg class="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <!-- Secondary: View in Store Category Link -->
              <a
                href="${service.storeUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-2 px-4 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <span>${storeText}</span>
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>

        </article>
      `;
    }).join('');
  }

  renderExpansionButton() {
    if (!this.expansionContainer) return;

    const catServices = services.filter(s => s.categoryId === this.activeCategoryId);
    if (catServices.length <= 6) {
      this.expansionContainer.innerHTML = '';
      this.expansionContainer.classList.add('hidden');
      return;
    }

    this.expansionContainer.classList.remove('hidden');
    const isAr = this.currentLang === 'ar';
    const label = this.isExpanded
      ? (isAr ? 'عرض أقل' : 'Show Less')
      : (isAr ? `عرض جميع الخدمات (${catServices.length})` : `View All Services (${catServices.length})`);

    this.expansionContainer.innerHTML = `
      <button
        type="button"
        id="toggleServicesExpansion"
        class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all duration-200 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer shadow-lg"
      >
        <span>${label}</span>
        <svg class="w-4 h-4 transition-transform duration-200 ${this.isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    `;

    const btn = document.getElementById('toggleServicesExpansion');
    if (btn) {
      btn.addEventListener('click', () => {
        this.toggleExpansion();
      });
    }
  }
}

export const servicesManager = new ServicesManager();
