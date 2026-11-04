/* Shared progressive enhancement.
   Ordinary <a href="..."> links handle routing; this module is NOT a router.
   Import it on any document that offers the optional motion preference button. */
const root = document.documentElement;
const controls = document.querySelectorAll('[data-motion-toggle]');
const key = 'htmlcss-reduce-motion';
let reduced = false;
try { reduced = localStorage.getItem(key) === 'true'; } catch { /* Storage may be blocked; the site still works. */ }
function setMotionPreference(value) {
  reduced = value;
  root.dataset.reduceMotion = String(value);
  controls.forEach(button => {
    button.setAttribute('aria-pressed', String(value));
    button.textContent = value ? 'Restore site motion' : 'Reduce site motion';
  });
  try { localStorage.setItem(key, String(value)); } catch { /* Optional preference only. */ }
}
setMotionPreference(reduced);
controls.forEach(button => button.addEventListener('click', () => setMotionPreference(!reduced)));
/* Native links, details, popover, dialog, and CSS should work without this file. */