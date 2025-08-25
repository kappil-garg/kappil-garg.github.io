// Cache DOM elements
const elements = {
    yearSpan: null,
    themeToggle: null,
    rootElement: document.documentElement,
    body: document.body
};

// Theme management
const themeManager = {

    getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    getCurrentScheme() {
        return elements.rootElement.getAttribute('data-color-scheme') || this.getSystemPreference();
    },

    setScheme(scheme) {
        elements.rootElement.setAttribute('data-color-scheme', scheme);
        localStorage.setItem('theme-preference', scheme);
    },

    toggle() {
        const currentScheme = this.getCurrentScheme();
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
        this.setScheme(newScheme);
    },

    initialize() {
        const savedTheme = localStorage.getItem('theme-preference');
        const scheme = savedTheme || this.getSystemPreference();
        this.setScheme(scheme);
    }

};

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    themeManager.initialize();

    // Set current year in footer
    elements.yearSpan = document.getElementById("year");
    if (elements.yearSpan) {
        elements.yearSpan.textContent = new Date().getFullYear();
    }

    // Setup theme toggle
    elements.themeToggle = document.getElementById('themeToggle');
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', () => themeManager.toggle());
    }

    // Add loaded class to body for animations
    elements.body.classList.add('loaded');

});
