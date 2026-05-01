import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';

const BOOT_LINES = [
  { text: 'PIXEL OS v8.16 — BIOS v1995.4.20',  delay: 0,    color: '#00ff41' },
  { text: 'CPU: ART PROCESSOR @ 8MHZ ... OK',   delay: 200,  color: '#00ff41' },
  { text: 'MEMORY CHECK: 640K ....... OK',       delay: 500,  color: '#00ff41' },
  { text: 'LOADING PIXEL ENGINE ........ OK',    delay: 800,  color: '#ffaa00' },
  { text: 'SPRITE RENDERER: ONLINE',             delay: 1100, color: '#00ff41' },
  { text: 'COLOR PALETTE: 256 COLORS LOADED',   delay: 1350, color: '#00ff41' },
  { text: 'SCANLINE FILTER: ENABLED',            delay: 1600, color: '#4b5bab' },
  { text: '',                                     delay: 1800, color: '#00ff41' },
  { text: '>> SEARCHING FOR ARTIST_PROFILE ...', delay: 1950, color: '#ffaa00' },
  { text: '>> ARTIST_PROFILE.DAT FOUND',         delay: 2400, color: '#00ff41' },
  { text: '>> LOADING PORTFOLIO DATA ...',       delay: 2650, color: '#ffaa00' },
  { text: '>> 8 PROJECTS INDEXED',               delay: 2950, color: '#00ff41' },
  { text: '',                                     delay: 3100, color: '#00ff41' },
  { text: 'SYSTEM READY.',                       delay: 3250, color: '#ff003c' },
];

export default function BootScreen() {
  const { setCurrentPage } = useApp();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [glitching, setGlitching] = useState(false);

  const goToDesktop = useCallback(() => {
    setCurrentPage('desktop');
  }, [setCurrentPage]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay));
    });
    timers.push(setTimeout(() => setShowButton(true), 3600));
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.65) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 120);
      }
    }, 2500);
    return () => { timers.forEach(clearTimeout); clearInterval(glitchInterval); };
  }, []);

  useEffect(() => {
    const onKey = () => { if (showButton) goToDesktop(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showButton, goToDesktop]);

  return (
    <div
      onClick={() => { if (showButton) goToDesktop(); }}
      style={{
        width: '100%', height: '100%',
        background: '#080018',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 32px)',
        cursor: 'none', position: 'relative',
      }}
    >
      {}
      <button
        onClick={e => { e.stopPropagation(); goToDesktop(); }}
        style={{
          position: 'absolute', top: 16, right: 16,
          fontFamily: 'var(--font-ui)', fontSize: '9px',
          background: 'transparent', color: '#4b5bab',
          border: '2px solid #4b5bab', padding: '4px 10px',
          cursor: 'none', letterSpacing: '1px', zIndex: 10,
        }}
        onMouseEnter={e => { const t = e.target as HTMLElement; t.style.color='#00ff41'; t.style.borderColor='#00ff41'; }}
        onMouseLeave={e => { const t = e.target as HTMLElement; t.style.color='#4b5bab'; t.style.borderColor='#4b5bab'; }}
      >
        SKIP ▶▶
      </button>

      {}
      <div style={{
        width: '100%', maxWidth: 'clamp(300px, 88vw, 660px)',
        background: '#000', border: '4px solid #4b5bab',
        boxShadow: '0 0 0 4px #080018, 0 0 0 8px #4b5bab, 8px 8px 0 8px #000',
        padding: 'clamp(16px, 3vw, 32px)',
        minHeight: 'clamp(240px, 48vh, 400px)',
        position: 'relative',
        filter: glitching ? 'brightness(1.5) hue-rotate(15deg)' : 'none',
        transition: 'filter 0.05s steps(1)',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(13px, 2vw, 19px)',
          lineHeight: '1.85',
          minHeight: 'clamp(160px, 30vh, 280px)',
        }}>
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
              style={{ color: line.color }}
            >
              {line.text || '\u00A0'}
            </motion.div>
          ))}
          {visibleLines > 0 && !showButton && (
            <span style={{
              display: 'inline-block', width: 10, height: '1.2em',
              background: '#00ff41',
              animation: 'blink 0.7s steps(1) infinite', verticalAlign: 'middle',
            }} />
          )}
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              style={{ marginTop: 'clamp(12px, 2vw, 20px)', textAlign: 'center' }}
            >
              <div style={{
                color: '#ff003c', fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px, 1.8vw, 19px)',
                animation: 'blink 0.9s steps(1) infinite', marginBottom: 14,
              }}>
                ▶ PRESS ANY KEY OR CLICK TO START ◀
              </div>
              <button
                onClick={e => { e.stopPropagation(); goToDesktop(); }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(7px, 1.1vw, 10px)',
                  background: '#ff003c', color: '#fff', border: 'none',
                  padding: 'clamp(8px, 1.4vw, 12px) clamp(14px, 2.5vw, 22px)',
                  cursor: 'none', boxShadow: '4px 4px 0 #000', letterSpacing: '2px',
                  transition: 'transform 0.05s steps(1), box-shadow 0.05s steps(1)',
                }}
                onMouseEnter={e => { const t = e.target as HTMLElement; t.style.transform='translate(-2px,-2px)'; t.style.boxShadow='6px 6px 0 #000'; }}
                onMouseLeave={e => { const t = e.target as HTMLElement; t.style.transform='translate(0,0)'; t.style.boxShadow='4px 4px 0 #000'; }}
              >
                [ ENTER PORTFOLIO ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{
        marginTop: 10, fontFamily: 'var(--font-ui)',
        fontSize: 'clamp(7px, 0.9vw, 9px)', color: '#4b5bab',
        letterSpacing: '2px', textAlign: 'center',
      }}>
        PIXEL OS BIOS v1995 — F2:SETUP &nbsp;&nbsp; F12:BOOT MENU
      </div>
    </div>
  );
}
