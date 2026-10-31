const Navigation = {
    navbar: null,
    mobileMenuBtn: null,
    mobileMenu: null,

    init() {
        this.navbar = document.querySelector('.navbar');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.mobileMenu = document.getElementById('mobileMenu');

        if (this.mobileMenuBtn && this.mobileMenu) {
            this.setupMobileMenu();
        }

        if (this.navbar) {
            this.setupScrollEffect();
        }
    },

    setupMobileMenu() {
        this.mobileMenuBtn.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('hidden');
        });
        this.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenu.classList.add('hidden');
            });
        });

        document.addEventListener('click', (e) => {
            if (!this.mobileMenu.contains(e.target) &&
                !this.mobileMenuBtn.contains(e.target) &&
                !this.mobileMenu.classList.contains('hidden')) {
                this.mobileMenu.classList.add('hidden');
            }
        });
    },

    /**
     * Setup navbar scroll effect
     */
    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });

        // Check initial scroll position
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}
