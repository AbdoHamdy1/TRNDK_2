const LanguageManager = {
    STORAGE_KEY: 'trndk_language',

    LANGUAGES: {
        EN: 'en',
        AR: 'ar'
    },

    currentLang: 'en',
    init() {
        this.currentLang = localStorage.getItem(this.STORAGE_KEY) || this.LANGUAGES.EN;
        this.applyLanguage(this.currentLang);
        this.setupToggleButton();

        console.log(`Language initialized: ${this.currentLang}`);
    },

    toggle() {
        this.currentLang = this.currentLang === this.LANGUAGES.EN
            ? this.LANGUAGES.AR
            : this.LANGUAGES.EN;

        localStorage.setItem(this.STORAGE_KEY, this.currentLang);

        this.applyLanguage(this.currentLang);
    },

    /**
     * Set a specific language
     * @param {string} lang - 'en' or 'ar'
     */
    setLanguage(lang) {
        if (lang === this.LANGUAGES.EN || lang === this.LANGUAGES.AR) {
            this.currentLang = lang;
            localStorage.setItem(this.STORAGE_KEY, this.currentLang);
            this.applyLanguage(this.currentLang);
        }
    },

    /**
     * Get the current language
     * @returns {string} - Current language code
     */
    getLanguage() {
        return this.currentLang;
    },

    /**
     * Apply language to the page
     * @param {string} lang - Language code to apply
     */
    applyLanguage(lang) {
        const html = document.documentElement;

        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === this.LANGUAGES.AR ? 'rtl' : 'ltr');

        this.updateTranslatableElements(lang);
        this.updateToggleButton(lang);

        html.classList.add('lang-ready');
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    },

    /**
     * Update all elements with data-i18n attributes
     * @param {string} lang - Language code
     */
    updateTranslatableElements(lang) {
        // Method 1: Using data-i18n attribute with translation key
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                el.textContent = translation;
            }
        });

        const dataElements = document.querySelectorAll('[data-en][data-ar]');
        dataElements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });
    },

    /**
     * Get translation from the translations object
     * @param {string} key - Dot-notation key like 'nav.home'
     * @param {string} lang - Language code
     * @returns {string|null} - Translated text or null
     */
    getTranslation(key, lang) {
        if (typeof translations === 'undefined') {
            console.warn('Translations not loaded');
            return null;
        }

        const keys = key.split('.');
        let result = translations;

        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                return null;
            }
        }

        return result[lang] || null;
    },

    setupToggleButton() {
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    /**
     * Update toggle button text
     * @param {string} lang - Current language
     */
    updateToggleButton(lang) {
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.textContent = lang === this.LANGUAGES.EN ? 'EN | AR' : 'AR | EN';
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}
