/* Viewport-størrelse-widget. Vises bare når URL-en har ?dev (f.eks. siv-portefolio.html?dev).
   Fjern <script src="dev-viewport.js"></script> fra HTML-filene før publisering hvis du vil. */
(function () {
  if (!window.location.search.includes('dev')) return;

  const box = document.createElement('div');
  box.style.cssText = [
    'position:fixed',
    'bottom:16px',
    'right:16px',
    'background:rgba(0,0,0,0.8)',
    'color:#fff',
    "font-family:'Jost',sans-serif",
    'font-size:12px',
    'padding:8px 12px',
    'border-radius:4px',
    'z-index:9999',
    'pointer-events:none',
    'letter-spacing:0.05em'
  ].join(';');
  document.body.appendChild(box);

  function update() {
    box.textContent = window.innerWidth + ' × ' + window.innerHeight;
  }

  update();
  window.addEventListener('resize', update);
})();
