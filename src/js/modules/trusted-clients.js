/**
 * TRNDK Trusted Clients Module (Phase 3)
 * Modular client logo strip.
 * Strict Rule: Only renders when authentic, approved client logos are supplied.
 * Stays hidden when no logos are available (pending client approval & assets).
 */

class TrustedClientsManager {
  constructor() {
    this.container = null;
    this.logos = []; // Pending approved client assets
  }

  init(logos = []) {
    this.logos = logos;
    this.container = document.getElementById('trustedClients');
    if (!this.container) return;

    if (!this.logos || this.logos.length === 0) {
      // Keep section completely hidden to prevent empty gaps or placeholder clutter
      this.container.classList.add('hidden');
      return;
    }

    this.render();
  }

  render() {
    if (!this.container || this.logos.length === 0) return;

    this.container.classList.remove('hidden');
    // Future approved logo track rendering logic
    const track = this.container.querySelector('.clients-track');
    if (track) {
      track.innerHTML = this.logos.map(logo => `
        <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
          <img src="${logo.src}" alt="${logo.name}" class="h-8 md:h-10 w-auto object-contain max-w-[140px]" loading="lazy" />
        </div>
      `).join('');
    }
  }

  setLogos(logos) {
    this.init(logos);
  }
}

export const trustedClientsManager = new TrustedClientsManager();
