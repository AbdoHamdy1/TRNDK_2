import '../css/tailwind.css';
import '../css/main.css';
import { languageManager } from './modules/language.js';
import { navigationManager } from './modules/navigation.js';

function bootstrap() {
  languageManager.init();
  navigationManager.init();
  console.log('TRNDK Redesign - Phase 2 Initialized');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

// Expose on window for debugging / inspection
window.__TRNDK__ = {
  languageManager,
  navigationManager,
};
