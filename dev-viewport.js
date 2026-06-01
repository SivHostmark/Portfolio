/* Midlertidig viewport-størrelse-widget. Vises på alle sider mens du jobber med responsivitet.
   Fjern <script src="dev-viewport.js"></script> fra HTML-filene før publisering. */
(function () {
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
