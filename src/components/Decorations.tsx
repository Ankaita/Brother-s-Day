import React from 'react';

interface DecoProp {
  className?: string;
  showTooltip?: boolean;
}

// 1. Lumine Inter-flower (Signature star-shaped flower from her hair)
export const LumineFlower: React.FC<DecoProp> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Hand-drawn style Inteyvat White Flower from Genshin Impact */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
        {/* Soft Gold Aura */}
        <circle cx="50" cy="50" r="30" fill="#fdfbf7" opacity="0.6" />
        <circle cx="50" cy="50" r="16" fill="#fef2d0" opacity="0.4" />
        
        {/* Five Soft Star Petals */}
        <path d="M50 15 C54 38, 72 45, 85 50 C72 55, 54 62, 50 85 C46 62, 28 55, 15 50 C28 45, 46 38, 50 15 Z" fill="#ffffff" stroke="#e0d0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Extra Inner Star Layer */}
        <path d="M50 30 C52 42, 62 48, 70 50 C62 52, 52 58, 50 70 C48 58, 38 52, 30 50 C38 48, 48 42, 50 30 Z" fill="#fff9e6" opacity="0.9" />
        
        {/* Golden Center */}
        <circle cx="50" cy="50" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
        {/* Small sparkling dots */}
        <circle cx="50" cy="47" r="1.5" fill="#ffffff" />
        <line x1="50" y1="36" x2="50" y2="40" stroke="#f59e0b" strokeWidth="1" />
        <line x1="50" y1="60" x2="50" y2="64" stroke="#f59e0b" strokeWidth="1" />
        <line x1="36" y1="50" x2="40" y2="50" stroke="#f59e0b" strokeWidth="1" />
        <line x1="60" y1="50" x2="64" y2="50" stroke="#f59e0b" strokeWidth="1" />
      </svg>
    </div>
  );
};

// 2. Tanjiro & Nezuko (Tanjiro's Green-Black Checkerboard Ribbon + Nezuko's Bamboo Ribbon Cozy Combo)
export const TanjiroNezukoBow: React.FC<DecoProp> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
        {/* Background Soft Pink Glow */}
        <circle cx="50" cy="50" r="28" fill="#fdf2f2" opacity="0.8" />
        
        {/* Green/Black Checkered Earring inspired amulet */}
        <rect x="25" y="32" width="22" height="36" rx="3" fill="#ffffff" stroke="#374151" strokeWidth="1.5" />
        {/* Rising red sun charm inside amulet */}
        <circle cx="36" cy="44" r="6" fill="#ef4444" />
        <path d="M30 60 L42 60" stroke="#374151" strokeWidth="1" />
        <path d="M30 64 L42 64" stroke="#10b981" strokeWidth="1.5" />

        {/* Nezuko's Pink Bow with hemp pattern */}
        <path d="M48 42 C56 36, 68 36, 74 44 C80 52, 74 60, 68 60 C58 60, 52 52, 48 48 C44 52, 38 60, 28 60 C22 60, 16 52, 22 44 C28 36, 40 36, 48 42 Z" fill="#f472b6" stroke="#db2777" strokeWidth="1" opacity="0.5" />
        
        {/* Cozy Bamboo piece */}
        <rect x="42" y="44" width="22" height="8" rx="2" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
        {/* Red tie line */}
        <line x1="42" y1="48" x2="64" y2="48" stroke="#ef4444" strokeWidth="1" />
      </svg>
    </div>
  );
};

// 3. Himmel's Ring of Blue Moon Weed Flowers (from Frieren)
export const HimmelRing: React.FC<DecoProp> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
        <circle cx="50" cy="50" r="32" fill="#f0fdf4" opacity="0.6" />
        {/* Silver ring structure */}
        <circle cx="50" cy="50" r="20" stroke="#cbd5e1" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="18" stroke="#ffffff" strokeWidth="1" />
        
        {/* Blue Moon Weed Flowers pinned on the ring */}
        <g transform="translate(40,24) scale(0.22)">
          <path d="M50 0 C60 20, 90 20, 100 50 C90 60, 60 65, 50 100 C40 65, 10 60, 0 50 C10 20, 40 20, 50 0 Z" fill="#38bdf8" />
          <circle cx="50" cy="50" r="15" fill="#fef08a" />
        </g>
        <g transform="translate(62,38) scale(0.22)">
          <path d="M50 0 C60 20, 90 20, 100 50 C90 60, 60 65, 50 100 C40 65, 10 60, 0 50 C10 20, 40 20, 50 0 Z" fill="#60a5fa" />
          <circle cx="50" cy="50" r="15" fill="#ffffff" />
        </g>
        <g transform="translate(30,48) scale(0.22)">
          <path d="M50 0 C60 20, 90 20, 100 50 C90 60, 60 65, 50 100 C40 65, 10 60, 0 50 C10 20, 40 20, 50 0 Z" fill="#0284c7" />
          <circle cx="50" cy="50" r="15" fill="#fef08a" />
        </g>
      </svg>
    </div>
  );
};

// 4. Blue Moon Weed Flower (Sole symbol, soft glowing petals)
export const BlueMoonWeed: React.FC<DecoProp> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-110">
        {/* Soft bioluminescent glow */}
        <circle cx="50" cy="50" r="28" fill="#e0f2fe" opacity="0.75" />
        
        {/* Hand drawn stems */}
        <path d="M50 50 Q48 78, 42 90" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 50 Q30 65, 24 60" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />

        {/* Flower Petals */}
        <g transform="translate(50, 50)">
          {/* Rotated Petals */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <path d="M0 0 C-10 -18, -12 -34, 0 -42 C12 -34, 10 -18, 0 0 Z" fill={i % 2 === 0 ? '#0284c7' : '#38bdf8'} stroke="#ffffff" strokeWidth="0.8" />
            </g>
          ))}
        </g>
        
        {/* Bright Center */}
        <circle cx="50" cy="50" r="8" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};

// 5. Violet Flowers Clustered
export const VioletFlowers: React.FC<DecoProp> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
        <circle cx="50" cy="50" r="30" fill="#f3e8ff" opacity="0.8" />
        {/* Soft Violet leaves and background stems */}
        <path d="M35 55 Q20 40, 30 30 Q45 40, 35 55 Z" fill="#a78bfa" opacity="0.25" />
        <path d="M65 55 Q80 40, 70 30 Q55 40, 65 55 Z" fill="#a78bfa" opacity="0.25" />

        {/* Stem */}
        <path d="M50 45 Q52 75, 54 85" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />

        {/* Group of 3 tiny violet flowers */}
        {/* Flower 1 */}
        <g transform="translate(42,38)">
          <circle cx="10" cy="10" r="6" fill="#c084fc" />
          <circle cx="20" cy="10" r="6" fill="#c084fc" />
          <circle cx="15" cy="18" r="6" fill="#c084fc" />
          <circle cx="15" cy="12" r="3" fill="#fef08a" />
        </g>
        {/* Flower 2 */}
        <g transform="translate(25,48) scale(0.8)">
          <circle cx="10" cy="10" r="6" fill="#a78bfa" />
          <circle cx="20" cy="10" r="6" fill="#a78bfa" />
          <circle cx="15" cy="18" r="6" fill="#a78bfa" />
          <circle cx="15" cy="12" r="3" fill="#ffffff" />
        </g>
        {/* Flower 3 */}
        <g transform="translate(50,44) scale(0.75)">
          <circle cx="10" cy="10" r="6" fill="#818cf8" />
          <circle cx="20" cy="10" r="6" fill="#818cf8" />
          <circle cx="15" cy="18" r="6" fill="#818cf8" />
          <circle cx="15" cy="12" r="3" fill="#fcd34d" />
        </g>
      </svg>
    </div>
  );
};
