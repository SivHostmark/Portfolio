/* Hamburger-meny — vises på 768px og smalere */
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  if (!toggle || !nav) return;

  /* Holder nav-innholdet ute av tab-rekkefølgen og fra mus-events
     når menyen er lukket — kun aktivert på smale skjermer. */
  const mq = window.matchMedia('(max-width: 768px)');
  const syncInert = () => {
    if (mq.matches && !nav.classList.contains('open')) {
      nav.setAttribute('inert', '');
    } else {
      nav.removeAttribute('inert');
    }
  };
  syncInert();
  mq.addEventListener('change', syncInert);

  const close = () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    syncInert();
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    syncInert();

    /* Flytt fokus inn på første lenke når menyen åpnes — siden <nav>
       kommer FØR hamburger-knappen i DOM, ville tab ellers gått videre
       til innholdet i stedet for inn i menyen. */
    if (isOpen) {
      requestAnimationFrame(() => {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });

  /* Lukk menyen når fokus lander utenfor nav OG hamburger-knappen
     (tab forbi siste lenke → toggle → innhold). Lytter på document
     siden focusout på nav-en bare fanger ett steg ad gangen. */
  document.addEventListener('focusin', (e) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || e.target === toggle) return;
    close();
  });
})();
