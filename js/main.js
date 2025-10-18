const rootElement = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function initTheme() {
  const savedTheme = localStorage.getItem('theme-preference');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  rootElement.setAttribute('data-color-scheme', theme);
}

function toggleTheme() {
  const currentTheme = rootElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  rootElement.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('theme-preference', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});
