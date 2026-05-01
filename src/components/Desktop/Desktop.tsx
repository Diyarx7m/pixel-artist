import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import {
  IconGallery, IconNote, IconEmail,
  IconStart, IconClock, IconGithub,
  IconTwitter, IconArtstation, IconPixelChar,
} from '../shared/PixelIcons';
function ClockWidget() {
  const [time, setTime] = useState(new Date());
  const dragControls = useDragControls();
  const pad = (n: number) => String(n).padStart(2, '0');

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      drag dragControls={dragControls} dragMomentum={false}
      style={{
        position: 'absolute', top: 12, right: 12,
        width: 'clamp(140px, 16vw, 180px)',
        background: '#080018', border: '4px solid #4b5bab',
        boxShadow: '4px 4px 0 #000', zIndex: 20, userSelect: 'none', cursor: 'none',
      }}
    >
      <div
        onPointerDown={e => dragControls.start(e)}
        style={{
          background: '#4b5bab', padding: '3px 8px',
          display: 'flex', alignItems: 'center', gap: 5,
          borderBottom: '4px solid #000',
        }}
      >
        <IconClock size={11} color="#fff" />
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 8, color: '#fff' }}>CLOCK.EXE</span>
      </div>
      <div style={{ padding: '6px 8px', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(11px, 1.6vw, 15px)',
          color: '#00ff41', letterSpacing: 2,
          animation: 'flicker 8s infinite',
        }}>
          {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#4b5bab', marginTop: 2 }}>
          {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' })}
        </div>
      </div>
    </motion.div>
  );
}
function DesktopIcon({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
        padding: 'clamp(4px,1vw,8px)', width: 'clamp(60px,8vw,80px)',
        background: hov ? 'rgba(0,255,65,0.08)' : 'transparent',
        border: hov ? '2px dashed #00ff41' : '2px dashed transparent',
        cursor: 'none',
      }}
    >
      <div style={{
        transform: hov ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.1s steps(2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 'clamp(28px,4vw,40px)', height: 'clamp(28px,4vw,40px)',
      }}>
        {icon}
      </div>
      <span style={{
        fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
        color: hov ? '#00ff41' : '#e8e8e8', textAlign: 'center', lineHeight: 1.3,
        textShadow: '1px 1px 0 #000',
      }}>{label}</span>
    </div>
  );
}
function StartMenu({ open, onNavigate }: { open: boolean; onNavigate: (p: string) => void }) {
  if (!open) return null;
  const items = [
    { label: '🎨 MY ARTWORK', action: 'gallery' },
    { label: '📄 BIO.TXT', action: 'about' },
    { label: '📧 EMAIL.EXE', action: 'contact' },
    { label: '─────────────', action: '' },
    { label: '⏻ SHUTDOWN', action: 'boot' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: '100%', left: 0,
      width: 'clamp(160px, 22vw, 210px)',
      background: '#080018', border: '4px solid #4b5bab',
      boxShadow: '4px -4px 0 #000', zIndex: 200,
    }}>
      <div style={{
        background: '#4b5bab', padding: '7px 12px',
        fontFamily: 'var(--font-ui)', fontSize: 10, color: '#fff',
        borderBottom: '4px solid #000', letterSpacing: 1,
      }}>▸ PIXEL OS</div>
      {items.map((item, i) => item.action ? (
        <div key={i} onClick={() => onNavigate(item.action)}
          style={{
            padding: 'clamp(5px,1vw,8px) 16px',
            fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2.2vw,20px)',
            color: '#00ff41', cursor: 'none', borderBottom: '1px solid #111',
          }}
          onMouseEnter={e => { const t = e.currentTarget; t.style.background='#4b5bab'; t.style.color='#fff'; }}
          onMouseLeave={e => { const t = e.currentTarget; t.style.background='transparent'; t.style.color='#00ff41'; }}
        >{item.label}</div>
      ) : (
        <div key={i} style={{ padding: '3px 16px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#333' }}>{item.label}</div>
      ))}
    </div>
  );
}
function Taskbar({ onNavigate, crtEnabled, toggleCrt }: { onNavigate: (p: string) => void; crtEnabled: boolean; toggleCrt: () => void }) {
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const pad = (n: number) => String(n).padStart(2, '0');

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const btnBase: React.CSSProperties = {
    background: 'transparent', border: '2px solid #4b5bab',
    padding: 'clamp(2px,0.4vw,4px) clamp(5px,1vw,10px)',
    cursor: 'none', fontFamily: 'var(--font-body)',
    fontSize: 'clamp(12px,1.8vw,17px)', color: '#e8e8e8', height: 28,
    whiteSpace: 'nowrap' as const,
  };

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 'clamp(36px,5vh,44px)',
      background: '#080018', borderTop: '4px solid #4b5bab',
      display: 'flex', alignItems: 'center',
      gap: 'clamp(4px,0.8vw,10px)', padding: '0 clamp(4px,1vw,10px)',
      zIndex: 100, overflow: 'hidden',
    }}>
      {}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <StartMenu open={startOpen} onNavigate={p => { setStartOpen(false); if (p) onNavigate(p); }} />
        <button
          onClick={() => setStartOpen(v => !v)}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: '#4b5bab', border: 'none',
            padding: 'clamp(3px,0.5vw,5px) clamp(8px,1.2vw,12px)',
            cursor: 'none', fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(7px,0.9vw,9px)', color: '#fff',
            height: 28, boxShadow: startOpen ? 'inset 2px 2px 0 #000' : '2px 2px 0 #000',
            flexShrink: 0,
          }}
        >
          <IconStart size={13} color="#fff" /> START
        </button>
      </div>

      <div style={{ width: 3, height: 22, background: '#4b5bab', flexShrink: 0 }} />

      {}
      {[
        { label: '🎨 GALLERY', page: 'gallery' },
        { label: '📄 ABOUT', page: 'about' },
        { label: '📧 CONTACT', page: 'contact' },
      ].map(item => (
        <button key={item.page} onClick={() => onNavigate(item.page)} style={btnBase}
          onMouseEnter={e => (e.currentTarget.style.background = '#4b5bab')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >{item.label}</button>
      ))}

      <div style={{ flex: 1 }} />

      {}
      <button
        onClick={toggleCrt}
        style={{
          ...btnBase,
          background: crtEnabled ? '#4b5bab' : 'transparent',
          fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
          flexShrink: 0,
        }}
      >
        CRT:{crtEnabled ? 'ON' : 'OFF'}
      </button>

      {}
      <div style={{
        display: 'flex', gap: 'clamp(4px,0.6vw,8px)', alignItems: 'center',
        paddingLeft: 'clamp(4px,0.8vw,10px)', borderLeft: '3px solid #4b5bab', flexShrink: 0,
      }}>
        {[
          { href: 'https://github.com', Icon: IconGithub },
          { href: 'https://twitter.com', Icon: IconTwitter },
          { href: 'https://artstation.com', Icon: IconArtstation },
        ].map(({ href, Icon }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" style={{ cursor: 'none', display: 'flex' }}>
            <Icon size={15} />
          </a>
        ))}
      </div>

      {}
      <div style={{
        borderLeft: '3px solid #4b5bab', paddingLeft: 'clamp(4px,0.8vw,8px)',
        fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.85vw,9px)',
        color: '#00ff41', textAlign: 'right', flexShrink: 0, lineHeight: 1.4,
      }}>
        <div>{pad(time.getHours())}:{pad(time.getMinutes())}</div>
        <div style={{ color: '#4b5bab', fontSize: 'clamp(6px,0.75vw,8px)' }}>
          {time.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
        </div>
      </div>
    </div>
  );
}
function AvatarSprite() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame(f => (f + 1) % 4), 380);
    return () => clearInterval(id);
  }, []);
  const offsets = [0, -3, 0, 3];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 4 }}>
      <div style={{ transform: `translateY(${offsets[frame]}px)`, transition: 'transform 0.1s steps(1)' }}>
        <IconPixelChar size={44} color="#00ff41" />
      </div>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 8, color: '#00ff41', letterSpacing: 1 }}>KXEL.EXE</span>
    </div>
  );
}
export default function Desktop() {
  const { setCurrentPage, crtEnabled, toggleCrt } = useApp();
  const nav = (page: string) => setCurrentPage(page as any);

  return (
    <div style={{ width: '100%', height: '100%', background: '#080018', position: 'relative', overflow: 'hidden' }}>
      {}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(75,91,171,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(75,91,171,0.07) 1px,transparent 1px)`,
        backgroundSize: 'clamp(20px,3vw,32px) clamp(20px,3vw,32px)',
      }} />

      {}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -55%)',
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(28px, 8vw, 80px)',
        color: '#4b5bab', opacity: 0.07,
        pointerEvents: 'none', textAlign: 'center', lineHeight: 1.1, letterSpacing: 4,
        userSelect: 'none',
      }}>
        PIXEL<br />ARTIST
      </div>

      {}
      <ClockWidget />

      {}
      <div style={{
        position: 'absolute', top: 'clamp(12px,2vh,24px)', left: 'clamp(10px,1.5vw,20px)',
        display: 'flex', flexDirection: 'column', gap: 'clamp(6px,1.2vh,14px)',
        zIndex: 5,
      }}>
        <AvatarSprite />
        <DesktopIcon icon={<IconGallery size={32} />} label="MY ARTWORK" onClick={() => nav('gallery')} />
        <DesktopIcon icon={<IconNote size={32} />} label="BIO.TXT" onClick={() => nav('about')} />
        <DesktopIcon icon={<IconEmail size={32} />} label="EMAIL.EXE" onClick={() => nav('contact')} />
      </div>

      {}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'steps(4)' }}
        style={{
          position: 'absolute',
          top: '50%', left: '55%',
          transform: 'translate(-50%, -52%)',
          width: 'clamp(260px, 52vw, 500px)',
          background: '#080018', border: '4px solid #4b5bab',
          boxShadow: '8px 8px 0 #000', zIndex: 10,
        }}
      >
        {}
        <div style={{
          background: '#4b5bab', padding: 'clamp(4px,0.6vh,7px) clamp(8px,1vw,12px)',
          borderBottom: '4px solid #000', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(8px,1vw,10px)', color: '#fff', letterSpacing: 1 }}>
            WELCOME.EXE
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {['#ffaa00', '#00ff41', '#ff003c'].map((c, i) => (
              <div key={i} style={{ width: 12, height: 12, background: c }} />
            ))}
          </div>
        </div>

        <div style={{ padding: 'clamp(12px,2vw,20px)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(9px,1.3vw,12px)', color: '#00ff41', marginBottom: 6, lineHeight: 1.5 }}>
            KXEL MORROW
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(7px,0.9vw,9px)', color: '#ff003c', marginBottom: 14 }}>
            PIXEL ARTIST &amp; GAME DESIGNER
          </div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,2.4vw,22px)',
            color: '#e8e8e8', lineHeight: 1.65,
            borderLeft: '4px solid #4b5bab', paddingLeft: 12, marginBottom: 16,
          }}>
            Crafting worlds one pixel at a time since 2015.<br />
            Specializing in character sprites, environments,<br />
            and game UI for indie developers worldwide.
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { label: '▶ VIEW GALLERY', page: 'gallery', bg: '#ff003c', fg: '#fff' },
              { label: 'READ BIO', page: 'about', bg: 'transparent', fg: '#00ff41', border: '#00ff41' },
              { label: 'CONTACT', page: 'contact', bg: 'transparent', fg: '#4b5bab', border: '#4b5bab' },
            ].map(btn => (
              <button
                key={btn.page} onClick={() => nav(btn.page)}
                style={{
                  fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
                  background: btn.bg, color: btn.fg,
                  border: `2px solid ${(btn as any).border || btn.bg}`,
                  padding: 'clamp(5px,0.8vw,8px) clamp(8px,1.2vw,14px)',
                  cursor: 'none', boxShadow: '3px 3px 0 #000', letterSpacing: 1,
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget;
                  if (btn.page === 'gallery') { t.style.background = '#cc0030'; }
                  else { t.style.background = (btn as any).border || '#4b5bab'; t.style.color = '#080018'; }
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget;
                  t.style.background = btn.bg; t.style.color = btn.fg;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {}
      <div style={{
        position: 'absolute', bottom: 'clamp(38px,6vh,48px)', left: 'clamp(8px,1vw,16px)',
        fontFamily: 'var(--font-body)', fontSize: 'clamp(12px,1.6vw,16px)', color: '#2a2a3a',
      }}>
        CLICK ICONS TO OPEN &nbsp;•&nbsp; DRAG CLOCK TO MOVE
      </div>

      {}
      <Taskbar onNavigate={nav} crtEnabled={crtEnabled} toggleCrt={toggleCrt} />
    </div>
  );
}
