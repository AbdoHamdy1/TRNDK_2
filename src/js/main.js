import '../css/tailwind.css';
import '../css/main.css';
import { languageManager } from './modules/language.js';
import { navigationManager } from './modules/navigation.js';
import { trustedClientsManager } from './modules/trusted-clients.js';
import { servicesManager } from './modules/services.js';

function bootstrap() {
  languageManager.init();
  navigationManager.init();
  trustedClientsManager.init([]); // Pending approved client assets
  servicesManager.init(languageManager.getCurrentLanguage());
  console.log('TRNDK Redesign - Phase 3 Initialized (Trusted Clients & Services Explorer)');
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
  selectedService: null,
};
