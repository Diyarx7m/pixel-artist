import { useEffect } from 'react';

export function usePixelCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    cursor.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shape-rendering="crispEdges">
        <rect x="0" y="0" width="4" height="4" fill="#00ff41"/>
        <rect x="0" y="4" width="4" height="4" fill="#00ff41"/>
        <rect x="4" y="4" width="4" height="4" fill="#00ff41"/>
        <rect x="0" y="8" width="4" height="4" fill="#00ff41"/>
        <rect x="4" y="8" width="4" height="4" fill="#00ff41"/>
        <rect x="8" y="8" width="4" height="4" fill="#00ff41"/>
        <rect x="0" y="12" width="4" height="4" fill="#080018"/>
        <rect x="4" y="12" width="4" height="4" fill="#00ff41"/>
        <rect x="8" y="12" width="4" height="4" fill="#00ff41"/>
        <rect x="12" y="12" width="4" height="4" fill="#00ff41"/>
      </svg>
    `;

    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);
}
