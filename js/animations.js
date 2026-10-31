const Animations = {
    observer: null,

    observerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    },

    init() {
        this.setupIntersectionObserver();
        this.observeElements();
    },

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    if (entry.target.classList.contains('fade-in-section')) {
                        entry.target.classList.add('visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
    },

    observeElements() {
        document.querySelectorAll('.service-card').forEach(card => {
            this.observer.observe(card);
        });
        document.querySelectorAll('.fade-in-section').forEach(section => {
            this.observer.observe(section);
        });
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    },
    animateElement(element) {
        element.classList.add('animate-in');
        if (element.classList.contains('fade-in-section')) {
            element.classList.add('visible');
        }
    },

    resetAnimation(element) {
        element.classList.remove('animate-in', 'visible');
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}
