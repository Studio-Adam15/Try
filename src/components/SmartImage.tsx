import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

/**
 * Resilient architectural image wrapper with graceful fallback styling
 * so broken links or slow transfers never leave jagged empty image frames.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackLabel = 'ISTATIEH DECOR',
  loading = 'lazy',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel}
        className={`flex flex-col items-center justify-center bg-[#1C060B] text-[#B6975B]/80 border border-[#B6975B]/20 select-none ${className}`}
      >
        <span className="font-serif-luxury text-xs uppercase tracking-[0.25em] font-semibold">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
