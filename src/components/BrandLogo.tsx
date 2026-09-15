import React from 'react';

const logoAsset = new URL('../assets/Cr logo.svg', import.meta.url).href;

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
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: { title: 'text-lg', studio: 'text-[9px]', tagline: 'text-[8px]' },
    md: { title: 'text-xl', studio: 'text-[10px]', tagline: 'text-[9px]' },
    lg: { title: 'text-2xl', studio: 'text-xs', tagline: 'text-[10px]' },
    xl: { title: 'text-3xl', studio: 'text-sm', tagline: 'text-xs' },
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex-shrink-0 ${iconSizes[size]} filter drop-shadow-[0_2px_8px_rgba(0,123,255,0.4)]`}>
        <img
          src={logoAsset}
          alt="CodeRank Studio logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Text */}
      {showText && variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-baseline font-heading font-extrabold tracking-tight">
            <span className={`${textSizes[size].title} text-white`}>Code</span>
            <span className={`${textSizes[size].title} text-[#007BFF]`}>Rank</span>
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
