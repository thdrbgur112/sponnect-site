// Filters cards and roster rows on list pages by ?q= from the header search.
(function () {
  var q = (new URLSearchParams(location.search).get('q') || '').trim().toLowerCase();
  var input = document.getElementById('site-q');
  if (input) input.value = q;
  if (!q) return;
  var items = document.querySelectorAll('.card, .roster tbody tr');
  var hits = 0;
  items.forEach(function (el) {
    var on = el.textContent.toLowerCase().indexOf(q) !== -1;
    el.hidden = !on;
    if (on) hits++;
  });
  var note = document.createElement('p');
  note.className = 'search-note';
  note.textContent = '"' + q + '" 검색 결과 ' + hits + '건';
  var head = document.querySelector('.page-head');
  if (head) head.appendChild(note);
})();
