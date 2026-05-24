import React from 'react';

interface BroochProps {
  className?: string;
  onClick?: () => void;
  glowing?: boolean;
}

export const Brooch: React.FC<BroochProps> = ({ className = "w-14 h-14", onClick, glowing = true }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${className}`}
      title="Vintage Emerald Brooch"
    >
      {/* Glow aura */}
      {glowing && (
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md animate-ping" />
      )}
      <span className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Outer Vintage Filigree (Gold) */}
        <circle cx="50" cy="50" r="42" fill="#faf8f2" stroke="#d4af37" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="38" stroke="#f5d061" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Gold Ornate Petals / Filigree nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g transform={`rotate(${angle} 50 50)`} key={i}>
            <circle cx="50" cy="12" r="4" fill="#d4af37" stroke="#b8860b" strokeWidth="0.8" />
            <path d="M50 12 L50 20" stroke="#d4af37" strokeWidth="1.5" />
          </g>
        ))}

        {/* Outer gemstone ring */}
        <circle cx="50" cy="50" r="28" fill="#18181b" stroke="#f5d061" strokeWidth="2" />

        {/* Faceted Emerald Gemstone Center */}
        {/* Emerald base gradient */}
        <defs>
          <radialGradient id="emerald-grad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </radialGradient>
          
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="45%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="55%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Octagonal emerald cut facets */}
        <polygon
          points="50,25 68,32 75,50 68,68 50,75 32,68 25,50 32,32"
          fill="url(#emerald-grad)"
          stroke="#047857"
          strokeWidth="1.5"
        />
        
        {/* Inner brilliant facets (simulated lines) */}
        <polygon points="50,30 63,35 68,50 63,65 50,70 37,65 32,50 37,35" fill="none" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.6" />
        
        {/* Table (flat center of the gemstone) */}
        <polygon points="50,37 59,41 61,50 59,59 50,63 41,59 39,50 41,41" fill="#10b981" opacity="0.35" />
        
        {/* Shiny Specular Spot */}
        <circle cx="43" cy="43" r="3.5" fill="#ffffff" opacity="0.85" filter="blur(0.5px)" />
        <circle cx="37" cy="48" r="1.5" fill="#ffffff" opacity="0.6" />

        {/* Animated sheen layer (simulated sliding light) */}
        <polygon
          points="50,25 68,32 75,50 68,68 50,75 32,68 25,50 32,32"
          fill="url(#shimmer)"
          className="mix-blend-overlay"
        />
      </svg>
    </div>
  );
};
