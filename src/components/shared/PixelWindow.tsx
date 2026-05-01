import React, { type ReactNode } from 'react';
import { IconClose, IconMinimize, IconMaximize } from './PixelIcons';

interface PixelWindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  width?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
  titleBarColor?: string;
}

export function PixelWindow({
  title,
  children,
  onClose,
  width = '100%',
  maxWidth,
  style = {},
  titleBarColor = '#4b5bab',
}: PixelWindowProps) {
  return (
    <div style={{
      width,
      maxWidth,
      background: '#080018',
      border: '4px solid var(--purple)',
      boxShadow: '4px 4px 0 #000, inset 0 0 0 0',
      ...style,
    }}>
      {}
      <div style={{
        background: titleBarColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 8px',
        borderBottom: '4px solid #000',
        userSelect: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '10px',
          color: '#fff',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          {title}
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}
            aria-label="Minimize"
          >
            <IconMinimize size={14} />
          </button>
          <button
            style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}
            aria-label="Maximize"
          >
            <IconMaximize size={14} />
          </button>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}
            aria-label="Close"
          >
            <IconClose size={14} />
          </button>
        </div>
      </div>

      {}
      <div style={{ padding: '16px' }}>
        {children}
      </div>
    </div>
  );
}
