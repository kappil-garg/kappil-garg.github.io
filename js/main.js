/* Theme Toggle (Light/Dark) */
const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;

function toggleTheme() {
  const currentScheme = rootElement.getAttribute('data-color-scheme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
  rootElement.setAttribute('data-color-scheme', newScheme);
  localStorage.setItem('theme-preference', newScheme);
}

/* Initialize theme from localStorage or system preference */
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme-preference');
  if (savedTheme) {
    rootElement.setAttribute('data-color-scheme', savedTheme);
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    rootElement.setAttribute('data-color-scheme', systemPrefersDark ? 'dark' : 'light');
  }
}

/* Initialize Everything */
document.addEventListener('DOMContentLoaded', () => {

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Initialize theme
  initializeTheme();
  
  // Add theme toggle event listener
  themeToggle.addEventListener('click', toggleTheme);
  
});/* Error Handling */
window.addEventListener('error', (e) => {
  console.error('Portfolio error:', e.error);
});
