# CSS Cassette — قاريونس
<img width="480" height="360" alt="image" src="https://github.com/user-attachments/assets/c78044f7-e5ed-4879-bcc5-6aa2056e78ca" />

A retro audio cassette (Garyounis, 60 min, side 2) drawn with **pure HTML + CSS** (no images), with a little JavaScript to play/pause the reels.

## Files

```
cassette/
├── index.html   → the structure (markup) + font links
├── style.css    → all the visuals: shell, gold label, reels, animation
├── script.js    → click / keyboard play-pause behaviour
└── README.md    → this file
```

All three files must stay **in the same folder** — `index.html` loads them with relative paths (`style.css`, `script.js`).

## How to run

### Option 1 — Just open it (simplest)

Double-click `index.html`, or drag it into any browser (Chrome, Firefox, Edge, Safari).

### Option 2 — Local server (recommended while developing)

From inside the `cassette` folder, run one of these, then open the URL shown:

```bash
# Node.js
npx serve .
# → http://localhost:3000

# Python 3
python -m http.server 8000
# → http://localhost:8000
```

### Option 3 — VS Code

Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. The page reloads automatically every time you save.

> The Arabic fonts (Aref Ruqaa, Noto Naskh Arabic) come from Google Fonts, so you need an internet connection the first time. Offline, the browser falls back to a default serif font.

## How to use

- **Click** the cassette to pause / resume the spinning reels.
- **Keyboard:** press `Tab` to focus the cassette, then `Space` or `Enter`.
- If your system has _Reduce motion_ turned on, the reels stay still.

## Customize

Everything is controlled from the `:root` variables at the top of `style.css`:

| Variable               | What it changes                        |
| ---------------------- | -------------------------------------- |
| `--scale`              | Overall size (e.g. `1.5` = 50% bigger) |
| `--gold-1`, `--gold-2` | Label gradient colors                  |
| `--shell`              | Black plastic body color               |
| `--reel`               | Color of the white reel hubs           |
| `--tape`               | Brown tape color in the window         |
| `--ink`                | Text color on the label                |

Other quick edits:

- **Text:** change `قاريونس`, `الشركة العامة للالكترونات`, `60`, or `2` directly in `index.html`.
- **Fonts:** change `font-family` in `.label .title` / `.label .company` in `style.css` (and add the font to the Google Fonts link in `index.html`).
- **Reel speed:** change `3s` in `animation: spin 3s linear infinite;` (`.reel` rule).

## CSS techniques used

- `aspect-ratio` — keeps the real cassette proportions (100 × 63 mm)
- `repeating-conic-gradient` — reel teeth and the checkered floor
- `radial-gradient` — screws, reel hole, plastic grain texture
- `clip-path: polygon()` — bottom trapezoid
- `@keyframes` + `animation-play-state` — spinning / paused reels
- `direction: rtl` — correct Arabic label layout
