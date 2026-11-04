/* Dependency-free structural guardrails.
   Not a browser renderer, WCAG audit, or substitute for manual testing. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lessonNames = ['browser','structure','grid','flex','interaction','color','media','effects','spatial','modern'];
const pages = ['index.html','archive.html','accessibility.html', ...lessonNames.map(name => 'lessons/' + name + '.html')];
const read = name => readFile(path.join(root,name),'utf8');
const exists = async name => { try { await access(path.join(root,name)); return true; } catch { return false; } };

test('each new page is a complete, directly navigable HTML document', async () => {
  for (const file of pages) {
    const html = await read(file);
    assert.match(html, /<!doctype html>/i, file + ' doctype');
    assert.match(html, /<html lang="en">/, file + ' language');
    assert.match(html, /<meta name="viewport"/, file + ' viewport');
    assert.match(html, /<title>[^<]+<\/title>/, file + ' title');
    assert.match(html, /<main id="main"/, file + ' main landmark');
    assert.match(html, /<h1[ >]/, file + ' h1');
    assert.match(html, /class="skip-link" href="#main"/, file + ' skip link');
    assert.match(html, /<nav[^>]+aria-label="Main navigation"/, file + ' navigation');
    assert.doesNotMatch(html, /(?:onclick|onmouseover)="|javascript:/i, file + ' must avoid inline script handlers');
  }
});

test('all local anchor routes and link/script/style resources resolve to real files', async () => {
  const missing = [];
  for (const file of pages) {
    const html = await read(file);
    const references = [
      ...[...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map(m => m[1]),
      ...[...html.matchAll(/<link\b[^>]*\bhref="([^"]+)"/g)].map(m => m[1]),
      ...[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m => m[1])
    ];
    for (const ref of references) {
      if (/^(?:https?:|mailto:|tel:|#|data:)/.test(ref)) continue;
      const [pathname,hash] = ref.split('#');
      const target = path.normalize(path.join(path.dirname(file),pathname));
      if (!target || target.startsWith('..') || !(await exists(target))) {
        missing.push(file + ': ' + ref);
        continue;
      }
      if (hash && (target.endsWith('.html'))) {
        const other = await read(target);
        const id = decodeURIComponent(hash);
        if (!other.includes('id="' + id + '"')) missing.push(file + ': missing #' + id + ' in ' + target);
      }
    }
  }
  assert.deepEqual(missing,[]);
});

test('gallery uses ordinary lesson links and stays meaningful without JavaScript', async () => {
  const html = await read('index.html');
  for (const name of lessonNames) assert.ok(html.includes('href="./lessons/' + name + '.html"'), name);
  assert.match(html, /class="lesson-grid"/);
  assert.match(html, /id="results-count"[^>]*aria-live="polite"/);
});

test('interactive pages load lab assets; informational pages do not', async () => {
  const labRoutes = ['grid','flex','interaction','color','effects','spatial'];
  for (const name of lessonNames) {
    const html = await read('lessons/' + name + '.html');
    if (labRoutes.includes(name)) {
      assert.match(html, /src="\.\.\/scripts\/labs\.js"/, name);
    } else {
      assert.doesNotMatch(html, /src="\.\.\/scripts\/labs\.js"/, name);
    }
  }
});

test('shared styles contain essential access preferences', async () => {
  const css = await read('styles/site.css');
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /@layer/);
});

test('the original teaching experiments remain in their historical paths', async () => {
  for (const file of ['pages/grid/grid.html','pages/flex/flex.html','pages/bootstrap/bootstrap.html','pages/traditional/traditional.html']) {
    assert.ok(await exists(file),file);
  }
});