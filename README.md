# Pixel Art Portfolio

A retro-themed developer portfolio built to simulate an 8-bit / 16-bit operating system. Features a BIOS boot sequence, a draggable desktop GUI, an animated gallery with lightbox, a typewriter-effect bio viewer, and a terminal-style contact form — all rendered in a strict Retro Cyberpunk pixel aesthetic with no anti-aliasing on any UI element.

Built by **Diyar** · 2026

---

## Stack

| | |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build | Vite 5 |
| Animation | Framer Motion 11 |
| State | React Context API |
| Styling | CSS custom properties + inline styles |
| Fonts | Press Start 2P · VT323 · Silkscreen |

---

## Features

- **Boot Screen** — Animated BIOS-style terminal sequence with glitch effect and skip control
- **Desktop** — Simulated OS GUI with taskbar, Start Menu, desktop icons, and a draggable live clock widget
- **Gallery** — Responsive CSS grid with category filtering, scanline hover effect, and custom lightbox
- **About** — Notepad window simulation with line-by-line typewriter animation
- **Contact** — Terminal-style form with pixel UI inputs
- **CRT Filter** — Global scanline + vignette overlay, toggleable from the taskbar
- **Custom Cursor** — Hand-drawn 16×16 SVG pixel art cursor
- **Frame-based Animations** — All transitions use `steps()` easing for authentic choppy 8-bit feel
- **Pixel Borders** — Layered `box-shadow` borders, zero use of standard CSS `border`
- **Fully Responsive** — `clamp()` scaling across 375px → 1440px+

---

## Color Palette

```
#080018  background
#00ff41  primary / matrix green
#ff003c  accent / cyber pink
#4b5bab  borders / UI purple
#ffaa00  amber highlights
#00ffff  cyan data labels
```

---

## Project Structure

```
src/
├── components/
│   ├── BootScreen/
│   ├── Desktop/
│   ├── Gallery/
│   ├── About/
│   └── shared/
├── context/
├── data/
├── hooks/
├── styles/
└── types/
```

---

## License

MIT
