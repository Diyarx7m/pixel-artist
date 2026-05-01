import React from 'react';
import { useApp } from './context/AppContext';
import { usePixelCursor } from './hooks/usePixelCursor';
import BootScreen from './components/BootScreen/BootScreen';
import Desktop from './components/Desktop/Desktop';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/About/Contact';

function AppContent() {
  const { currentPage, crtEnabled } = useApp();
  usePixelCursor();

  const renderPage = () => {
    switch (currentPage) {
      case 'boot':    return <BootScreen />;
      case 'desktop': return <Desktop />;
      case 'gallery': return <Gallery />;
      case 'about':   return <About />;
      case 'contact': return <Contact />;
      default:        return <Desktop />;
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#080018', position: 'relative' }}>
      {crtEnabled && <div id="crt-overlay" aria-hidden />}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
