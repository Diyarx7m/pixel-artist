import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

const BIO_TEXT = `ARTIST PROFILE — BIO.TXT
════════════════════════════════════
Created: 01/15/2015  |  Modified: 03/20/2024
Author: Kxel Morrow
════════════════════════════════════

>> ABOUT ME

Hi. I'm Kxel — a freelance pixel artist and
game designer with 9+ years of experience
crafting 8-bit and 16-bit style artwork.

I grew up surrounded by CRT monitors and
cartridge games. That nostalgia never left.
Every pixel I place is intentional.

>> WHAT I DO

  [✓] Character Design & Animation
  [✓] Environment & Tileset Creation
  [✓] Game UI & HUD Systems
  [✓] Sprite Sheet Production
  [✓] Art Direction for Indie Teams

>> TOOLS OF THE TRADE

  PRIMARY:   Aseprite
  SECONDARY: Photoshop, Pyxel Edit
  MAPPING:   Tiled, LDtk
  ENGINES:   Unity, Godot, GMS2

>> SELECTED PROJECTS

  2024 — NEON REBELLION (Steam)
  2024 — CHRONO FRAGMENTS (Kickstarter)
  2023 — RETRO RUNNER (Mobile, 1M+ DL)
  2023 — UI PACK VOL.3 (itch.io Bestseller)
  2022 — DUNGEON CRAWLER KIT (Unity Asset)

>> STYLE PHILOSOPHY

Less is more. Constraints breed creativity.
A 16×16 sprite can convey more emotion
than a 4K render — if you know which
pixels to sacrifice.

I work within strict palette limits.
I animate frame by frame, by hand.
No upscaling. No filters. Pure craft.

>> CONTACT

  EMAIL:  kxel@pixelcraft.dev
  TWTR:   @kxelmorrow
  ARTST:  artstation.com/kxel

════════════════════════════════════
"Make it pixel perfect, or don't
 make it at all." — K.M.
════════════════════════════════════
[END OF FILE — UTF-8]`.trim();

const STATS = [
  { label: 'YEARS EXP', value: '9+', color: '#00ff41' },
  { label: 'PROJECTS', value: '200+', color: '#ff003c' },
  { label: 'SPRITES', value: '5K+', color: '#ffaa00' },
  { label: 'HAPPY DEVS', value: '87', color: '#00ffff' },
];

export default function About() {
  const { setCurrentPage } = useApp();
  const [typedLines, setTypedLines] = useState(0);
  const lines = BIO_TEXT.split('\n');

  useEffect(() => {
    if (typedLines >= lines.length) return;
    const id = setTimeout(() => setTypedLines(n => n + 1), 16);
    return () => clearTimeout(id);
  }, [typedLines, lines.length]);

  return (
    <div style={{
      width: '100%', height: '100%', background: '#080018',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'clamp(12px,2vw,20px)', overflow: 'auto',
    }}>
      {}
      <div style={{ width: '100%', maxWidth: 860, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => setCurrentPage('desktop')}
          style={{
            background: 'none', border: '2px solid #4b5bab',
            padding: '4px 9px', cursor: 'none', color: '#4b5bab',
            fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#00ff41')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#4b5bab')}
        >← BACK</button>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)', color: '#4b5bab' }}>
          C:\PORTFOLIO\BIO.TXT
        </span>
        <button
          onClick={() => setTypedLines(lines.length)}
          style={{
            marginLeft: 'auto', background: 'none', border: '2px solid #4b5bab',
            padding: '4px 9px', cursor: 'none', color: '#4b5bab',
            fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#ffaa00')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#4b5bab')}
        >SHOW ALL ▼</button>
      </div>

      <div style={{ width: '100%', maxWidth: 860 }}>
        {}
        <div style={{ background: '#080018', border: '4px solid #4b5bab', boxShadow: '8px 8px 0 #000' }}>
          {}
          <div style={{
            background: '#4b5bab', padding: 'clamp(4px,0.6vh,7px) clamp(8px,1vw,12px)',
            borderBottom: '4px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(8px,1vw,10px)', color: '#fff', letterSpacing: 1 }}>
              NOTEPAD — BIO.TXT
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              {['#ffaa00', '#00ff41', '#ff003c'].map((c, i) => (
                <div key={i} style={{ width: 12, height: 12, background: c, border: '2px solid #000' }} />
              ))}
            </div>
          </div>

          {}
          <div style={{ background: '#0a0a14', borderBottom: '2px solid #222', padding: '2px 8px', display: 'flex', gap: 14 }}>
            {['FILE', 'EDIT', 'VIEW', 'HELP'].map(m => (
              <span key={m} style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(13px,1.8vw,17px)', color: '#4b5bab', padding: '2px 4px', cursor: 'none' }}>{m}</span>
            ))}
          </div>

          {}
          <div style={{
            padding: 'clamp(12px,2vw,20px) clamp(14px,2.5vw,24px)',
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px,1.9vw,18px)',
            color: '#e8e8e8', lineHeight: 1.85,
            minHeight: 'clamp(200px,40vh,360px)',
            background: '#050510', overflow: 'hidden',
          }}>
            {lines.slice(0, typedLines).map((line, i) => {
              let color = '#e8e8e8';
              if (line.startsWith('>>')) color = '#00ff41';
              if (line.startsWith('═') || line.includes('[END')) color = '#4b5bab';
              if (line.includes('[✓]')) color = '#ffaa00';
              if (line.startsWith('"')) color = '#ff003c';
              if (line.startsWith('  PRIMARY') || line.startsWith('  SECONDARY') || line.startsWith('  MAPPING') || line.startsWith('  ENGINES')) color = '#00ffff';
              if (line.startsWith('ARTIST PROFILE')) color = '#ff003c';
              return (
                <div key={i} style={{ color, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {line || '\u00A0'}
                </div>
              );
            })}
            {typedLines < lines.length && (
              <span style={{ display: 'inline-block', width: 10, height: '1em', background: '#00ff41', animation: 'blink 0.6s steps(1) infinite', verticalAlign: 'middle' }} />
            )}
          </div>

          {}
          <div style={{
            background: '#0a0a14', borderTop: '2px solid #222',
            padding: 'clamp(3px,0.5vh,5px) 12px',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-body)', fontSize: 'clamp(11px,1.5vw,14px)', color: '#4b5bab',
          }}>
            <span>LINE {typedLines}/{lines.length}</span>
            <span>UTF-8</span>
            <span>INS</span>
          </div>
        </div>

        {}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(3px,0.5vw,5px)', marginTop: 'clamp(8px,1.5vw,14px)',
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: '#0a0a14', border: '4px solid #4b5bab', padding: 'clamp(8px,1.5vw,14px)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(12px,2vw,18px)', color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(6px,0.8vw,8px)', color: '#4b5bab', letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
