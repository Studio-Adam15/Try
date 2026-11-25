import React from 'react';
import { BUSINESS_CONFIG } from '../data/istatiehData';

interface IstatiehLogoProps {
  className?: string;
  tone?: 'light-surface' | 'dark-surface';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Authentic Istatieh Decor Logo Component ("ISTATIEH — DECOR —")
 * Uses tightly cropped 100% transparent PNG assets preserving exact proportions with zero frames or backgrounds.
 */
export const IstatiehLogo: React.FC<IstatiehLogoProps> = ({
  className = '',
  tone = 'light-surface',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-10',
    lg: 'h-12 sm:h-14',
  }[size];

  const logoSrc =
    tone === 'dark-surface'
      ? BUSINESS_CONFIG.logoLightUrl
      : BUSINESS_CONFIG.logoTransparentUrl;

  return (
    <div
      className={`inline-flex items-center justify-center select-none shrink-0 ${className}`}
      title="ISTATIEH DECOR | استيتيه للديكور والستائر"
    >
      <img
        src={logoSrc}
        alt="ISTATIEH DECOR — استيتيه للديكور والستائر"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200`}
        loading="eager"
      />
    </div>
  );
};
