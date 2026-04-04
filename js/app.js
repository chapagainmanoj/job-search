// ── KEYWORDS ──────────────────────────────────────────
const DEFAULT_KW1 = 'software';
const DEFAULT_KW2 = 'python';

function getKeywords() {
    const kw1 = (document.getElementById('kw1')?.value || DEFAULT_KW1).trim();
    const kw2 = (document.getElementById('kw2')?.value || DEFAULT_KW2).trim();
    return { kw1: kw1 || DEFAULT_KW1, kw2: kw2 || DEFAULT_KW2 };
}

function resolveQuery(template) {
    const { kw1, kw2 } = getKeywords();
    return template
        .replace(/\{\{KW1\}\}/g, kw1)
        .replace(/\{\{KW2\}\}/g, kw2);
}

// ── RENDER ─────────────────────────────────────────────
function renderSyntax(q) {
    const { kw1, kw2 } = getKeywords();

    // Build dynamic keyword regex from current input values
    const kwWords = [kw1, kw2, 'remote'].filter(Boolean);
    const kwPattern = new RegExp('\\b(' + kwWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'gi');

    return q
        .replace(/(site:[^\s]+)/g, '<span class="t-site">$1</span>')
        .replace(/("worldwide"|"anywhere"|"global remote"|"global"|"new zealand"|"hong kong"|"abu dhabi"|"US only"|"USA only"|"United States only"|"remote australia"|"visa sponsorship"|"sponsorship required"|"requires sponsorship"|"united states")/gi, '<span class="t-or">$1</span>')
        .replace(/(\((?:[^)]+)\))/g, s => '<span class="t-or">' + s + '</span>')
        .replace(/(-intern|-junior|-jobgether|-US\b|-USA\b|-Canada\b|-"[^"]+")/g, '<span class="t-neg">$1</span>')
        .replace(kwPattern, '<span class="t-kw">$1</span>')
        .replace(/\b(australia|new zealand|auckland|sydney|melbourne|brisbane|wellington|netherlands|amsterdam|rotterdam|eindhoven|germany|berlin|munich|hamburg|spain|madrid|barcelona|portugal|lisbon|porto|singapore|india|bangalore|hyderabad|mumbai|pune|japan|korea|taiwan|tokyo|seoul|UAE|dubai|europe)\b/gi, '<span class="t-loc">$1</span>');
}

function escapeAttr(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildCard(cardData) {
    const a = ATS[cardData.ats];
    const q = resolveQuery(cardData.q);
    const syntax = renderSyntax(q);
    const safeQ = escapeAttr(cardData.q);
    return `
    <div class="ats-card">
      <div class="card-header">
        <span class="ats-badge ${a.badge}">${a.name}</span>
        <span class="card-ats-name"></span>
        <a class="card-direct-link" href="${a.href}" target="_blank" rel="noopener">↗ ${a.url}</a>
      </div>
      <div class="queries">
        <div class="q-row">
          <div class="q-text">${syntax}</div>
          <div class="q-actions">
            <button class="btn-go" data-query="${safeQ}" onclick="openGoogle(this.dataset.query)">Search ↗</button>
            <button class="btn-cp" data-query="${safeQ}" onclick="copyQ(this, this.dataset.query)">Copy</button>
          </div>
        </div>
      </div>
    </div>`;
}

function render(locId) {
    const loc = LOCS[locId];
    const main = document.getElementById('main');
    const cards = loc.cards;

    const directLinks = [...new Set(cards.map(c => c.ats))].map(atsId => {
        const a = ATS[atsId];
        return `<a href="${a.href}" target="_blank" rel="noopener" style="color:var(--blue);font-size:0.62rem;text-decoration:none;padding:3px 7px;border:1px solid var(--border2);border-radius:3px;white-space:nowrap;transition:all .13s" onmouseover="this.style.borderColor='var(--blue)'" onmouseout="this.style.borderColor='var(--border2)'">${a.name}</a>`
    }).join('');

    main.innerHTML = `
    <div class="loc-header">
      <span class="loc-flag">${loc.flag}</span>
      <div>
        <div class="loc-title">${loc.title}</div>
        <div class="loc-desc">${loc.desc}</div>
      </div>
      <span class="ats-count-badge">${cards.length} queries</span>
    </div>
    <div class="open-all-bar">
      <button class="btn-open-all" onclick="openAllSearches('${locId}')">⬡ Run All ${cards.length} Searches</button>
      <button class="btn-open-direct" onclick="openAllDirect('${locId}')">↗ Open All Job Boards</button>
    </div>
    <div class="cards-grid">
      ${cards.map(buildCard).join('')}
    </div>`;

    // Update counts
    document.querySelectorAll('[id^="cnt-"]').forEach(el => {
        const id = el.id.replace('cnt-', '');
        if (LOCS[id]) el.textContent = LOCS[id].cards.length;
    });
}

// ── INTERACTIONS ──────────────────────────────────────
let currentLoc = 'global';

function setLoc(locId, btn) {
    document.querySelectorAll('.loc-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLoc = locId;
    render(locId);
    document.getElementById('main').scrollTop = 0;
}

function openGoogle(qTemplate) {
    const q = resolveQuery(qTemplate);
    window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
}

function copyQ(btn, qTemplate) {
    const q = resolveQuery(qTemplate);
    navigator.clipboard.writeText(q).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('ok');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 2000);
    });
}

function openAllSearches(locId) {
    LOCS[locId].cards.forEach((c, i) =>
        setTimeout(() => openGoogle(c.q), i * 200)
    );
}

function openAllDirect(locId) {
    const ids = [...new Set(LOCS[locId].cards.map(c => c.ats))];
    ids.forEach((id, i) =>
        setTimeout(() => window.open(ATS[id].href, '_blank'), i * 180)
    );
}

// ── KEYWORD INPUT LISTENERS ──────────────────────────
let debounceTimer = null;

document.getElementById('kw1').addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => render(currentLoc), 300);
});

document.getElementById('kw2').addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => render(currentLoc), 300);
});

// ── INIT ──────────────────────────────────────────────
render('global');
