import React, { useMemo } from 'react';

interface ParticleItem {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  drift: string;
  rotation: string;
  opacity: number;
  innerHtml: string;
}

export const ParticleBackground: React.FC = () => {
  const particles: ParticleItem[] = useMemo(() => {
    // Generate a beautiful, stable collection of particles that float around nicely
    const types = [
      // Hearts
      '<span class="text-rose-300/40">❤</span>',
      '<span class="text-pink-300/40">❣</span>',
      '<span class="text-pink-200/30">♡</span>',
      // Stars
      '<span class="text-amber-200/40">✦</span>',
      '<span class="text-amber-100/40">✧</span>',
      '<span class="text-yellow-200/40">★</span>',
      // Petals/Sakura/Violets
      '<span class="text-purple-300/30">✿</span>',
      '<span class="text-purple-200/30">❀</span>',
      '<span class="text-pink-200/30">🌸</span>',
    ];

    return Array.from({ length: 22 }, (_, idx) => {
      const size = Math.floor(Math.random() * 15) + 12; // 12px to 27px
      const left = `${Math.random() * 100}%`;
      const duration = `${Math.random() * 10 + 10}s`; // 10s to 20s
      const delay = `${Math.random() * 8}s`;
      const drift = `${Math.random() * 80 - 40}px`; // drift 40px left or right
      const rotation = `${Math.random() * 360 + 180}deg`;
      const opacity = Math.random() * 0.45 + 0.25; // 0.25 to 0.70
      const innerHtml = types[Math.floor(Math.random() * types.length)];

      return {
        id: idx,
        left,
        size,
        duration,
        delay,
        drift,
        rotation,
        opacity,
        innerHtml,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-float select-none text-center leading-none"
          style={{
            left: p.left,
            fontSize: `${p.size}px`,
            '--duration': p.duration,
            '--delay': p.delay,
            '--drift': p.drift,
            '--rotation': p.rotation,
            '--opacity': p.opacity,
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: p.innerHtml }}
        />
      ))}
    </div>
  );
};
