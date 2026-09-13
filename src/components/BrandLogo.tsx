import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  variant?: 'full' | 'icon-only';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showTagline = true,
  variant = 'full',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: { title: 'text-lg', studio: 'text-[9px]', tagline: 'text-[8px]' },
    md: { title: 'text-xl', studio: 'text-[10px]', tagline: 'text-[9px]' },
    lg: { title: 'text-2xl', studio: 'text-xs', tagline: 'text-[10px]' },
    xl: { title: 'text-3xl', studio: 'text-sm', tagline: 'text-xs' },
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG: < | | ^ > */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} filter drop-shadow-[0_2px_8px_rgba(0,123,255,0.4)]`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0056b3" />
              <stop offset="60%" stopColor="#007BFF" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
            <linearGradient id="arrowGreenGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#007BFF" />
              <stop offset="50%" stopColor="#00b0ff" />
              <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
          </defs>

          {/* Left Bracket < */}
          <path
            d="M 32 30 L 16 50 L 32 70"
            stroke="url(#logoBlueGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bar 1 (Short) */}
          <rect
            x="36"
            y="56"
            width="6.5"
            height="15"
            rx="3.25"
            fill="url(#logoBlueGrad)"
          />

          {/* Bar 2 (Medium) */}
          <rect
            x="47"
            y="44"
            width="6.5"
            height="27"
            rx="3.25"
            fill="url(#logoBlueGrad)"
          />

          {/* Bar 3 (Tall Arrow stem + head) */}
          <path
            d="M 61 40 L 61 71"
            stroke="url(#arrowGreenGrad)"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Arrow Head */}
          <path
            d="M 52 38 L 61 24 L 70 38"
            stroke="url(#arrowGreenGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Bracket > */}
          <path
            d="M 68 30 L 84 50 L 68 70"
            stroke="url(#logoBlueGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-baseline font-heading font-extrabold tracking-tight">
            <span className="text-white">Code</span>
            <span className="text-[#007BFF]">Rank</span>
          </div>

          <div className="flex items-center gap-1.5 -mt-0.5">
            <span className="h-[1px] w-3 bg-[#007BFF]/50"></span>
            <span
              className={`font-semibold tracking-[0.25em] text-slate-300 uppercase ${textSizes[size].studio}`}
            >
              STUDIO
            </span>
            <span className="h-[1px] w-3 bg-[#007BFF]/50"></span>
          </div>

          {showTagline && (
            <div
              className={`font-medium tracking-wide text-xs text-slate-400 mt-0.5 hidden sm:block ${textSizes[size].tagline}`}
            >
              <span className="text-[#007BFF]">Backend</span>. <span className="text-[#00C853]">SEO</span>. <span className="text-white">Growth.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
