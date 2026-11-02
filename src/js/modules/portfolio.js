/**
 * TRNDK Portfolio Module (Phase 4)
 * Handles:
 * - Filter navigation (All, Creative Design, Web & E-Commerce)
 * - Accessible tab / filter controls
 * - Responsive project card rendering with authentic URLs
 * - Distinguishes live websites, interactive flipbooks, and static artwork
 * - Instant language synchronization with zero scroll jump
 */

import { portfolioCategories, portfolioProjects } from '../data/portfolio-data.js';

class PortfolioManager {
  constructor() {
    this.container = null;
    this.filtersContainer = null;
    this.gridContainer = null;

    this.activeFilter = 'all';
    this.currentLang = 'ar';
  }

  init(initialLang = 'ar') {
    this.currentLang = initialLang;
    this.container = document.getElementById('portfolio');
    if (!this.container) return;

    this.filtersContainer = document.getElementById('portfolioFilters');
    this.gridContainer = document.getElementById('portfolioGrid');

    this.bindEvents();
    this.render();
  }

  setLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    this.render();
  }

  bindEvents() {
    window.addEventListener('trndk:languageChanged', (e) => {
      if (e.detail && e.detail.language) {
        this.setLanguage(e.detail.language);
      }
    });

    if (this.filtersContainer) {
      this.filtersContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (btn) {
          e.preventDefault();
          const filterId = btn.getAttribute('data-filter');
          this.setFilter(filterId);
        }
      });

      // Keyboard navigation for filters
      this.filtersContainer.addEventListener('keydown', (e) => {
        const tabs = Array.from(this.filtersContainer.querySelectorAll('[role="tab"]'));
        const currentIndex = tabs.findIndex(tab => tab.getAttribute('data-filter') === this.activeFilter);
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
        const newFilter = targetTab.getAttribute('data-filter');
        this.setFilter(newFilter);
        targetTab.focus();
      });
    }
  }

  setFilter(filterId) {
    if (this.activeFilter === filterId) return;
    this.activeFilter = filterId;
    this.render();
  }

  render() {
    this.renderFilters();
    this.renderGrid();
  }

  renderFilters() {
    if (!this.filtersContainer) return;

    const isAr = this.currentLang === 'ar';
    this.filtersContainer.innerHTML = portfolioCategories.map(cat => {
      const isActive = cat.id === this.activeFilter;
      const name = isAr ? cat.nameAr : cat.nameEn;
      const activeClasses = isActive
        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 font-semibold'
        : 'bg-[#1A1C20] text-slate-300 hover:text-white hover:bg-white/5 border-white/10 font-medium';

      // Count projects in this category
      const count = cat.id === 'all'
        ? portfolioProjects.length
        : portfolioProjects.filter(p => p.category === cat.id).length;

      return `
        <button
          type="button"
          role="tab"
          id="pfilter-${cat.id}"
          data-filter="${cat.id}"
          aria-selected="${isActive}"
          aria-controls="portfolioGrid"
          tabindex="${isActive ? '0' : '-1'}"
          class="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap cursor-pointer ${activeClasses}"
        >
          <span>${name}</span>
          <span class="px-2 py-0.5 rounded-full text-[11px] ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'}">
            ${count}
          </span>
        </button>
      `;
    }).join('');
  }

  renderGrid() {
    if (!this.gridContainer) return;

    const filtered = this.activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === this.activeFilter);

    const isAr = this.currentLang === 'ar';

    if (filtered.length === 0) {
      const emptyMsg = isAr
        ? 'لا توجد مشاريع متاحة في هذا القسم حالياً.'
        : 'No projects available in this category currently.';
      this.gridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <p class="text-base">${emptyMsg}</p>
        </div>
      `;
      return;
    }

    this.gridContainer.innerHTML = filtered.map(project => {
      const title = isAr ? project.titleAr : project.titleEn;
      const desc = isAr ? project.descriptionAr : project.descriptionEn;
      const categoryLabel = project.category === 'creative-design'
        ? (isAr ? 'التصميم الإبداعي' : 'Creative Design')
        : (isAr ? 'تصميم المواقع والمتاجر' : 'Web & Store Design');

      // Action button based on destinationType
      let actionMarkup = '';
      if (project.destinationType === 'website') {
        const btnText = isAr ? 'زيارة الموقع' : 'Visit Website';
        actionMarkup = `
          <a
            href="${project.destinationUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/25 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <span>${btnText}</span>
            <svg class="w-3.5 h-3.5 rtl:rotate-180 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        `;
      } else if (project.destinationType === 'flipbook') {
        const btnText = isAr ? 'تصفح العرض التقديمي' : 'View Presentation';
        actionMarkup = `
          <a
            href="${project.destinationUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-primary hover:bg-[#B8282C] text-white shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <span>${btnText}</span>
            <svg class="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        `;
      } else {
        const badgeText = isAr ? 'عمل تصميمي معتمد' : 'Verified Design Work';
        actionMarkup = `
          <div class="w-full py-2 px-3 rounded-xl text-xs font-medium text-slate-400 bg-white/[0.02] border border-white/5 text-center flex items-center justify-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            <span>${badgeText}</span>
          </div>
        `;
      }

      return `
        <article class="flex flex-col h-full bg-[#1A1C20] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 group" data-project-id="${project.id}">
          
          <!-- Project Visual -->
          <div class="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
            <img
              src="${project.image}"
              alt="${title}"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1A1C20] via-transparent to-transparent opacity-60"></div>
            
            <!-- Category Badge Overlay -->
            <span class="absolute top-3 end-3 px-3 py-1 rounded-full text-[11px] font-medium bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
              ${categoryLabel}
            </span>
          </div>

          <!-- Project Details -->
          <div class="p-5 sm:p-6 flex flex-col flex-1">
            <h4 class="text-base sm:text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors" title="${title}">
              ${title}
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 flex-1 line-clamp-2">
              ${desc}
            </p>

            <!-- Action -->
            <div class="mt-auto pt-4 border-t border-white/5">
              ${actionMarkup}
            </div>

          </div>

        </article>
      `;
    }).join('');
  }
}

export const portfolioManager = new PortfolioManager();
