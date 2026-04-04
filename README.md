# ⌖ ATS Job Hunter v2

A single-page tool for running targeted Google dork searches across **14 ATS (Applicant Tracking System) platforms** in **13 locations** worldwide. Edit your keywords once — every query updates instantly.

![Static Badge](https://img.shields.io/badge/HTML-vanilla-orange) ![Static Badge](https://img.shields.io/badge/CSS-vanilla-blue) ![Static Badge](https://img.shields.io/badge/JS-vanilla-yellow)

---

## Features

- **14 ATS Platforms** — Ashby, Lever, Greenhouse, Workable, Recruitee, SmartRecruiters, Teamtailor, Personio, PageUp, Workday, Breezy HR, Pinpoint, Zoho Recruit, and Taleo
- **13 Locations** — Global Remote, Australia, New Zealand, Europe, Netherlands, Germany, Spain, Portugal, Singapore, India, East Asia, UAE/Dubai, and US (No Visa)
- **Editable Keywords** — Change the role and skill keywords in the topbar; all queries update in real-time
- **Syntax Highlighting** — Queries are color-coded: site (blue), keywords (green), location (teal), OR groups (yellow), exclusions (red)
- **One-Click Actions** — Search on Google, copy the query, run all searches for a location, or open all job boards at once
- **Responsive** — Sidebar collapses into a horizontal scroll bar on mobile

## Project Structure

```
job-search/
├── index.html          ← Entry point
├── css/
│   └── styles.css      ← All styles (design tokens, layout, cards, responsive)
├── js/
│   ├── data.js         ← ATS platform definitions & location/query templates
│   └── app.js          ← Rendering, keyword substitution, interactions
└── README.md
```

## Getting Started

No build step, no dependencies. Just open the file:

```bash
open index.html
# or
python3 -m http.server 8000   # then visit http://localhost:8000
```

> **Note:** The Copy button requires serving over HTTP/HTTPS (clipboard API restriction). Opening via `file://` works for everything else.

## How It Works

1. **Keywords** are defined in the topbar as two editable input fields (default: `software`, `python`)
2. **Query templates** in `js/data.js` use `{{KW1}}` and `{{KW2}}` placeholders
3. At render time, `js/app.js` substitutes placeholders with the current input values
4. Changing either input triggers a debounced re-render (300ms) of all visible cards
5. The **Search** and **Copy** buttons also resolve templates on the fly, so they always use the latest keywords

## Customization

### Change Default Keywords

Edit the `value` attributes in `index.html`:

```html
<input type="text" id="kw1" class="kw-input" value="software" ...>
<input type="text" id="kw2" class="kw-input" value="python" ...>
```

### Add a New ATS Platform

In `js/data.js`, add to the `ATS` object:

```js
myats: { name: 'My ATS', badge: 'b-myats', url: 'jobs.myats.com', href: 'https://jobs.myats.com' },
```

Then add a badge color in `css/styles.css`:

```css
.b-myats {
    background: rgba(100, 200, 150, 0.1);
    color: #64c896;
    border: 1px solid rgba(100, 200, 150, 0.25);
}
```

### Add a New Location

In `js/data.js`, add to the `LOCS` object:

```js
ca: {
    flag: '🇨🇦', title: 'Canada',
    desc: 'Toronto, Vancouver, Montreal — on-site, hybrid or remote-Canada',
    cards: [
        { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} (canada OR toronto OR vancouver) -intern -junior' },
        // ... more ATS entries
    ]
},
```

Then add a sidebar button in `index.html`:

```html
<button class="loc-btn" onclick="setLoc('ca', this)">
    <span class="flag">🇨🇦</span><span class="loc-name">Canada</span><span class="count" id="cnt-ca">1</span>
</button>
```

## License

Personal use. No license specified.
