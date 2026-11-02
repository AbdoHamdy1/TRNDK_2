import { languageManager } from './modules/language.js';
import { navigationManager } from './modules/navigation.js';
import { trustedClientsManager } from './modules/trusted-clients.js';
import { servicesManager } from './modules/services.js';
import { portfolioManager } from './modules/portfolio.js';
import { aboutManager } from './modules/about.js';
import { faqManager } from './modules/faq.js';

function bootstrap() {
  languageManager.init();
  navigationManager.init();
  trustedClientsManager.init([]); // Pending approved client assets
  servicesManager.init(languageManager.getCurrentLanguage());
  portfolioManager.init(languageManager.getCurrentLanguage());
  aboutManager.init();
  faqManager.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

// Expose on window for debugging / inspection & future form integration
window.__TRNDK__ = {
  languageManager,
  navigationManager,
  trustedClientsManager,
  servicesManager,
  portfolioManager,
  faqManager,
  selectedService: null,
};
