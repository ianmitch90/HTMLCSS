/* Progressive search enhancement: lesson links are real HTML in index.html
   so the catalogue is useful even when JavaScript is unavailable. */
const search = document.querySelector('#lesson-search');
const category = document.querySelector('#lesson-category');
const cards = [...document.querySelectorAll('[data-lesson-card]')];
const count = document.querySelector('#results-count');
function filterLessons() {
  const query = search.value.trim().toLocaleLowerCase();
  const selected = category.value;
  let visible = 0;
  for (const card of cards) {
    const match = (selected === 'all' || card.dataset.category === selected)
      && card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !match;
    if (match) visible++;
  }
  count.textContent = visible === 0 ? 'No experiments match that search. Try a broader term.' : `${visible} experiment${visible === 1 ? '' : 's'} to explore`;
}
search.addEventListener('input', filterLessons);
category.addEventListener('change', filterLessons);
filterLessons();