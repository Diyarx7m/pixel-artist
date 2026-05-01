import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

const BASE = { shapeRendering: 'crispEdges' as const };

export const IconGallery = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="1" y="1" width="6" height="6" fill={color}/>
    <rect x="9" y="1" width="6" height="6" fill={color}/>
    <rect x="1" y="9" width="6" height="6" fill={color}/>
    <rect x="9" y="9" width="6" height="6" fill={color}/>
    <rect x="2" y="2" width="4" height="4" fill="#080018"/>
    <rect x="10" y="2" width="4" height="4" fill="#080018"/>
    <rect x="2" y="10" width="4" height="4" fill="#080018"/>
    <rect x="10" y="10" width="4" height="4" fill="#080018"/>
    <rect x="3" y="4" width="2" height="1" fill={color}/>
    <rect x="11" y="4" width="2" height="1" fill={color}/>
    <rect x="3" y="12" width="2" height="1" fill={color}/>
    <rect x="11" y="12" width="2" height="1" fill={color}/>
  </svg>
);

export const IconNote = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="1" width="12" height="14" fill={color}/>
    <rect x="3" y="2" width="10" height="12" fill="#080018"/>
    <rect x="4" y="4" width="8" height="1" fill={color}/>
    <rect x="4" y="6" width="8" height="1" fill={color}/>
    <rect x="4" y="8" width="6" height="1" fill={color}/>
    <rect x="4" y="10" width="7" height="1" fill={color}/>
    <rect x="4" y="12" width="5" height="1" fill={color}/>
    <rect x="10" y="1" width="1" height="3" fill="#080018"/>
    <rect x="11" y="1" width="3" height="1" fill={color}/>
    <rect x="13" y="1" width="1" height="3" fill={color}/>
  </svg>
);

export const IconEmail = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="1" y="3" width="14" height="10" fill={color}/>
    <rect x="2" y="4" width="12" height="8" fill="#080018"/>
    <rect x="2" y="4" width="6" height="1" fill={color}/>
    <rect x="8" y="4" width="6" height="1" fill={color}/>
    <rect x="3" y="5" width="5" height="1" fill={color}/>
    <rect x="8" y="5" width="5" height="1" fill={color}/>
    <rect x="4" y="6" width="4" height="1" fill={color}/>
    <rect x="8" y="6" width="4" height="1" fill={color}/>
    <rect x="5" y="7" width="3" height="1" fill={color}/>
    <rect x="8" y="7" width="3" height="1" fill={color}/>
    <rect x="7" y="8" width="2" height="1" fill={color}/>
  </svg>
);

export const IconArrow = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="7" width="10" height="2" fill={color}/>
    <rect x="9" y="5" width="2" height="2" fill={color}/>
    <rect x="11" y="5" width="2" height="6" fill={color}/>
    <rect x="9" y="9" width="2" height="2" fill={color}/>
  </svg>
);

export const IconStart = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="2" width="12" height="12" fill={color}/>
    <rect x="3" y="3" width="10" height="10" fill="#080018"/>
    <rect x="5" y="5" width="6" height="2" fill={color}/>
    <rect x="5" y="7" width="4" height="2" fill={color}/>
    <rect x="5" y="9" width="6" height="2" fill={color}/>
  </svg>
);

export const IconClose = ({ size = 16, color = '#ff003c' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="2" width="12" height="12" fill={color}/>
    <rect x="3" y="3" width="10" height="10" fill="#080018"/>
    <rect x="4" y="4" width="2" height="2" fill={color}/>
    <rect x="6" y="6" width="2" height="2" fill={color}/>
    <rect x="8" y="8" width="2" height="2" fill={color}/>
    <rect x="10" y="10" width="2" height="2" fill={color}/>
    <rect x="10" y="4" width="2" height="2" fill={color}/>
    <rect x="8" y="6" width="2" height="2" fill={color}/>
    <rect x="6" y="8" width="2" height="2" fill={color}/>
    <rect x="4" y="10" width="2" height="2" fill={color}/>
  </svg>
);

export const IconMinimize = ({ size = 16, color = '#ffaa00' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="2" width="12" height="12" fill={color}/>
    <rect x="3" y="3" width="10" height="10" fill="#080018"/>
    <rect x="4" y="11" width="8" height="2" fill={color}/>
  </svg>
);

export const IconMaximize = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="2" width="12" height="12" fill={color}/>
    <rect x="3" y="3" width="10" height="10" fill="#080018"/>
    <rect x="4" y="4" width="8" height="2" fill={color}/>
    <rect x="4" y="6" width="2" height="6" fill={color}/>
    <rect x="10" y="6" width="2" height="6" fill={color}/>
    <rect x="4" y="10" width="8" height="2" fill={color}/>
  </svg>
);

export const IconBurger = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="2" y="3" width="12" height="2" fill={color}/>
    <rect x="2" y="7" width="12" height="2" fill={color}/>
    <rect x="2" y="11" width="12" height="2" fill={color}/>
  </svg>
);

export const IconGithub = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="5" y="1" width="6" height="1" fill={color}/>
    <rect x="3" y="2" width="10" height="1" fill={color}/>
    <rect x="2" y="3" width="12" height="5" fill={color}/>
    <rect x="3" y="8" width="4" height="2" fill="#080018"/>
    <rect x="9" y="8" width="4" height="2" fill="#080018"/>
    <rect x="2" y="8" width="1" height="4" fill={color}/>
    <rect x="13" y="8" width="1" height="4" fill={color}/>
    <rect x="3" y="10" width="10" height="1" fill={color}/>
    <rect x="4" y="11" width="3" height="3" fill={color}/>
    <rect x="9" y="11" width="3" height="3" fill={color}/>
    <rect x="6" y="5" width="1" height="2" fill="#080018"/>
    <rect x="9" y="5" width="1" height="2" fill="#080018"/>
  </svg>
);

export const IconTwitter = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="1" y="2" width="2" height="2" fill={color}/>
    <rect x="3" y="4" width="2" height="2" fill={color}/>
    <rect x="5" y="6" width="2" height="2" fill={color}/>
    <rect x="7" y="8" width="2" height="2" fill={color}/>
    <rect x="9" y="6" width="2" height="2" fill={color}/>
    <rect x="11" y="4" width="2" height="2" fill={color}/>
    <rect x="13" y="2" width="2" height="2" fill={color}/>
    <rect x="11" y="8" width="2" height="2" fill={color}/>
    <rect x="13" y="10" width="2" height="2" fill={color}/>
    <rect x="1" y="12" width="4" height="2" fill={color}/>
  </svg>
);

export const IconArtstation = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="1" y="10" width="14" height="2" fill={color}/>
    <rect x="3" y="12" width="4" height="2" fill={color}/>
    <rect x="9" y="12" width="4" height="2" fill={color}/>
    <rect x="4" y="4" width="8" height="2" fill={color}/>
    <rect x="2" y="6" width="2" height="4" fill={color}/>
    <rect x="12" y="6" width="2" height="4" fill={color}/>
    <rect x="4" y="6" width="8" height="4" fill={color}/>
    <rect x="5" y="7" width="6" height="2" fill="#080018"/>
  </svg>
);

export const IconClock = ({ size = 16, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    <rect x="4" y="1" width="8" height="1" fill={color}/>
    <rect x="2" y="2" width="12" height="1" fill={color}/>
    <rect x="1" y="3" width="14" height="10" fill={color}/>
    <rect x="2" y="13" width="12" height="1" fill={color}/>
    <rect x="4" y="14" width="8" height="1" fill={color}/>
    <rect x="2" y="4" width="12" height="8" fill="#080018"/>
    <rect x="7" y="4" width="2" height="4" fill={color}/>
    <rect x="7" y="8" width="4" height="2" fill={color}/>
  </svg>
);

export const IconPixelChar = ({ size = 32, color = '#00ff41' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" style={BASE}>
    {}
    <rect x="4" y="1" width="8" height="6" fill={color}/>
    {}
    <rect x="5" y="3" width="2" height="2" fill="#080018"/>
    <rect x="9" y="3" width="2" height="2" fill="#080018"/>
    {}
    <rect x="3" y="7" width="10" height="5" fill={color}/>
    {}
    <rect x="1" y="7" width="2" height="4" fill={color}/>
    <rect x="13" y="7" width="2" height="4" fill={color}/>
    {}
    <rect x="3" y="12" width="4" height="3" fill={color}/>
    <rect x="9" y="12" width="4" height="3" fill={color}/>
  </svg>
);
