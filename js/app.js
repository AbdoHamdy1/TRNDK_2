const App = {
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bootstrap());
        } else {
            this.bootstrap();
        }
    },

    bootstrap() {
        console.log('TRNDK App initializing...');
        if (typeof LanguageManager !== 'undefined') {
            LanguageManager.init();
        }

        if (typeof Navigation !== 'undefined') {
            Navigation.init();
        }
        if (typeof Animations !== 'undefined') {
            Animations.init();
        }

        console.log('TRNDK App initialized successfully');
    }
};

App.init();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
