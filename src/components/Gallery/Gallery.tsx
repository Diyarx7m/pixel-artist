import React, { useState, useMemo } from 'react';
import { projects, categories } from '../../data/projects';
import type { Project, Category } from '../../types';
import { useApp } from '../../context/AppContext';
import { IconClose } from '../shared/PixelIcons';

// Fallback placeholder image
const PLACEHOLDER_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <rect fill="#0a0a14" width="300" height="300"/>
  <rect fill="#4b5bab" x="100" y="80" width="100" height="8"/>
  <rect fill="#4b5bab" x="80" y="110" width="140" height="6"/>
  <rect fill="#4b5bab" x="80" y="130" width="120" height="6"/>
  <rect fill="#ff003c" x="110" y="160" width="80" height="80"/>
  <rect fill="#00ff41" x="130" y="180" width="40" height="40"/>
</svg>`);
function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = imgError ? PLACEHOLDER_IMAGE : project.fullResUrl;
  
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(8,0,24,0.93)',
        zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(12px,3vw,32px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#080018', border: '4px solid #4b5bab',
          boxShadow: '8px 8px 0 #000',
          maxWidth: 'clamp(300px,88vw,700px)', width: '100%',
          maxHeight: '90vh', overflow: 'auto',
        }}
      >
        {}
        <div style={{
          background: '#4b5bab', padding: '6px 10px', borderBottom: '4px solid #000',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'sticky', top: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(8px,1vw,10px)', color: '#fff', letterSpacing: 1 }}>
            {project.title}.PNG — VIEWER
          </span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}>
            <IconClose size={16} />
          </button>
        </div>

        {}
        <div style={{ background: '#050510', padding: 'clamp(12px,3vw,28px)', display: 'flex', justifyContent: 'center', borderBottom: '4px solid #111' }}>
          <img
            src={imgSrc}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: 'clamp(140px, 40vw, 260px)', height: 'clamp(140px, 40vw, 260px)',
              objectFit: 'cover', imageRendering: 'pixelated',
              border: '4px solid #4b5bab', boxShadow: '4px 4px 0 #000',
            }}
          />
        </div>

        {}
        <div style={{ padding: 'clamp(12px,2.5vw,22px)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(9px,1.3vw,12px)', color: '#00ff41', marginBottom: 8 }}>
            {project.title}
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,2.2vw,20px)', color: '#e8e8e8', lineHeight: 1.7, marginBottom: 16 }}>
            {project.description}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(8px,1.5vw,14px)' }}>
            {[
              { label: 'CATEGORY', val: project.category, color: '#ff003c' },
              { label: 'RESOLUTION', val: project.resolution, color: '#ffaa00' },
              { label: 'YEAR', val: String(project.year), color: '#00ff41' },
              { label: 'TOOLS', val: project.toolsUsed.join(' · '), color: '#00ffff' },
            ].map(d => (
              <div key={d.label}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.85vw,9px)', color: '#4b5bab', marginBottom: 3 }}>{d.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,19px)', color: d.color }}>{d.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function GalleryCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgSrc = imgError ? PLACEHOLDER_IMAGE : project.thumbnailUrl;

  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background: '#0a0a14',
        border: `4px solid ${hov ? '#ff003c' : '#4b5bab'}`,
        boxShadow: hov ? '4px 4px 0 #ff003c, 8px 8px 0 #000' : '4px 4px 0 #000',
        cursor: 'none', overflow: 'hidden',
        transition: 'border-color 0.05s steps(1), box-shadow 0.05s steps(1)',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', background: '#050510' }}>
        <img
          src={imgSrc}
          alt={project.title}
          loading="lazy"
          onError={() => setImgError(true)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            imageRendering: 'pixelated',
            transform: hov ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.1s steps(2)',
          }}
        />
        {hov && (
          <div style={{
            position: 'absolute', inset: 0,
            background: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,65,0.06) 2px,rgba(0,255,65,0.06) 4px)`,
            pointerEvents: 'none',
          }} />
        )}
        <div style={{
          position: 'absolute', top: 6, right: 6,
          background: '#ff003c', padding: '2px 5px',
          fontFamily: 'var(--font-ui)', fontSize: 'clamp(6px,0.8vw,8px)', color: '#fff', letterSpacing: 1,
        }}>
          {project.category.toUpperCase()}
        </div>
        {hov && (
          <div style={{
            position: 'absolute', inset: 0, background: 'rgba(8,0,24,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(8px,1vw,10px)', color: '#00ff41', letterSpacing: 2 }}>▶ OPEN</span>
          </div>
        )}
      </div>
      <div style={{ padding: 'clamp(7px,1.2vw,12px)' }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 'clamp(7px,0.9vw,9px)',
          color: hov ? '#00ff41' : '#e8e8e8', letterSpacing: 1, marginBottom: 3,
          transition: 'color 0.05s steps(1)',
        }}>{project.title}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px,1.6vw,15px)', color: '#4b5bab' }}>
          {project.toolsUsed[0]} · {project.year}
        </div>
      </div>
    </div>
  );
}
export default function Gallery() {
  const { setCurrentPage } = useApp();
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() =>
    activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div style={{ width: '100%', height: '100%', background: '#080018', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {}
      <div style={{
        background: '#080018', borderBottom: '4px solid #4b5bab',
        padding: 'clamp(8px,1.5vh,14px) clamp(10px,2vw,20px)',
        display: 'flex', alignItems: 'center', gap: 'clamp(8px,1.2vw,16px)',
        flexWrap: 'wrap', flexShrink: 0,
      }}>
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

        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(8px,1.2vw,11px)', color: '#00ff41', letterSpacing: 2 }}>
          MY ARTWORK
        </div>

        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,2vw,18px)', color: '#4b5bab' }}>
          {filtered.length} FILES
        </div>

        <div style={{ flex: 1 }} />

        {}
        <div style={{ display: 'flex', gap: 'clamp(3px,0.5vw,5px)', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              style={{
                fontFamily: 'var(--font-ui)', fontSize: 'clamp(6px,0.8vw,8px)',
                background: activeCategory === cat ? '#ff003c' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#4b5bab',
                border: `2px solid ${activeCategory === cat ? '#ff003c' : '#4b5bab'}`,
                padding: 'clamp(3px,0.4vw,5px) clamp(5px,0.8vw,9px)',
                cursor: 'none', letterSpacing: 1,
                boxShadow: activeCategory === cat ? '2px 2px 0 #000' : 'none',
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {}
      <div style={{ flex: 1, overflow: 'auto', padding: 'clamp(10px,2vw,20px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(130px,16vw,200px), 1fr))',
          gap: 'clamp(8px,1.5vw,16px)',
        }}>
          {filtered.map(p => (
            <GalleryCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 60, fontFamily: 'var(--font-body)', fontSize: 22, color: '#4b5bab' }}>
            NO FILES FOUND
          </div>
        )}
      </div>

      {}
      {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
