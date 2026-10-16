(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.menu-icon').textContent = '☰';
      toggle.querySelector('.sr-only').textContent = 'Open navigation menu';
    };
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.querySelector('.menu-icon').textContent = isOpen ? '×' : '☰';
      toggle.querySelector('.sr-only').textContent = isOpen ? 'Close navigation menu' : 'Open navigation menu';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850) closeMenu();
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
