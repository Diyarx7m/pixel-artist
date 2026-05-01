import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { IconEmail, IconGithub, IconTwitter, IconArtstation } from '../shared/PixelIcons';

export default function Contact() {
  const { setCurrentPage } = useApp();
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: focused === field ? '#0a0a1a' : '#060610',
    border: `2px solid ${focused === field ? '#00ff41' : '#4b5bab'}`,
    color: '#e8e8e8', fontFamily: 'var(--font-body)',
    fontSize: 'clamp(15px,2vw,20px)', padding: 'clamp(6px,1vw,9px) clamp(8px,1.2vw,12px)',
    outline: 'none', cursor: 'none', transition: 'border-color 0.05s steps(1)', resize: 'none' as const,
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.85vw,9px)',
    color: '#4b5bab', letterSpacing: 1, display: 'block', marginBottom: 4,
  };

  return (
    <div style={{
      width: '100%', height: '100%', background: '#080018',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'clamp(12px,2vw,20px)', overflow: 'auto',
    }}>
      <div style={{ width: '100%', maxWidth: 720, marginBottom: 10 }}>
        <button
          onClick={() => setCurrentPage('desktop')}
          style={{ background: 'none', border: '2px solid #4b5bab', padding: '4px 9px', cursor: 'none', color: '#4b5bab', fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#00ff41')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#4b5bab')}
        >← BACK</button>
      </div>

      <div style={{ width: '100%', maxWidth: 720 }}>
        <div style={{ background: '#080018', border: '4px solid #4b5bab', boxShadow: '8px 8px 0 #000' }}>
          {}
          <div style={{ background: '#4b5bab', padding: 'clamp(4px,0.6vh,7px) clamp(8px,1vw,12px)', borderBottom: '4px solid #000', display: 'flex', alignItems: 'center', gap: 8 }}>
            <IconEmail size={13} color="#fff" />
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(8px,1vw,10px)', color: '#fff', letterSpacing: 1 }}>EMAIL.EXE — NEW MESSAGE</span>
          </div>

          <div style={{ padding: 'clamp(14px,2.5vw,24px)' }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(9px,1.2vw,12px)', color: '#00ff41', marginBottom: 6 }}>GET IN TOUCH</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,19px)', color: '#4b5bab' }}>TO: kxel@pixelcraft.dev</div>
              <div style={{ width: '100%', height: 2, background: '#4b5bab', margin: '10px 0' }} />
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: 'clamp(24px,5vh,48px) 0' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(11px,1.6vw,14px)', color: '#00ff41', marginBottom: 12 }}>MESSAGE SENT!</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,2.2vw,21px)', color: '#4b5bab', lineHeight: 1.9 }}>
                  {'>> PACKET DELIVERED SUCCESSFULLY'}<br />
                  {'>> RESPONSE TIME: < 48 HOURS'}<br />
                  {'>> STANDBY...'}&nbsp;
                  <span style={{ animation: 'blink 1s steps(1) infinite', display: 'inline-block' }}>▋</span>
                </div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.8vw,16px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(10px,1.8vw,16px)' }}>
                  <div>
                    <label style={labelStyle}>YOUR NAME</label>
                    <input required type="text" value={fields.name}
                      onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      placeholder="PLAYER_ONE" style={inputStyle('name')} />
                  </div>
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS</label>
                    <input required type="email" value={fields.email}
                      onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      placeholder="dev@studio.com" style={inputStyle('email')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>SUBJECT</label>
                  <input required type="text" value={fields.subject}
                    onChange={e => setFields(f => ({ ...f, subject: e.target.value }))}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                    placeholder="COMMISSION REQUEST" style={inputStyle('subject')} />
                </div>
                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea required rows={5} value={fields.message}
                    onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    placeholder="HI KXEL, I'M LOOKING FOR..." style={inputStyle('message')} />
                </div>
                <button type="submit" style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(7px,1vw,10px)',
                  background: '#ff003c', color: '#fff', border: 'none',
                  padding: 'clamp(8px,1.2vw,13px) clamp(14px,2vw,22px)',
                  cursor: 'none', boxShadow: '4px 4px 0 #000', letterSpacing: 2, alignSelf: 'flex-start',
                }}
                  onMouseEnter={e => { const t = e.currentTarget; t.style.background='#cc0030'; t.style.transform='translate(-2px,-2px)'; t.style.boxShadow='6px 6px 0 #000'; }}
                  onMouseLeave={e => { const t = e.currentTarget; t.style.background='#ff003c'; t.style.transform='translate(0,0)'; t.style.boxShadow='4px 4px 0 #000'; }}
                >▶ SEND MESSAGE.EXE</button>
              </form>
            )}
          </div>
        </div>

        {}
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
          {[
            { Icon: IconGithub, label: 'GITHUB', sub: '@kxelmorrow', href: 'https://github.com' },
            { Icon: IconTwitter, label: 'TWITTER', sub: '@kxelmorrow', href: 'https://twitter.com' },
            { Icon: IconArtstation, label: 'ARTSTATION', sub: 'artstation.com/kxel', href: 'https://artstation.com' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#0a0a14', border: '4px solid #4b5bab', padding: 'clamp(8px,1.5vw,12px)', textDecoration: 'none', cursor: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#00ff41')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#4b5bab')}
            >
              <s.Icon size={18} />
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.85vw,9px)', color: '#00ff41', letterSpacing: 1 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px,1.6vw,15px)', color: '#4b5bab' }}>{s.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
