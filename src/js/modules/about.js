// About Section Module (Phase 5)
// Handles any future dynamic behavior for the About section.
// Currently only listens for language change events to allow future extensions.

export const aboutManager = {
  init() {
    // Listen for language change to re‑run any dynamic updates if needed.
    window.addEventListener('trndk:languageChanged', this.onLanguageChange);
  },
  onLanguageChange(event) {
    // Placeholder – currently no dynamic content.
    // Could be used to lazy‑load assets or adjust layout per language.
    // console.log('About section language changed', event.detail);
  }
};
