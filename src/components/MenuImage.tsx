import React, { useState } from 'react';

interface MenuImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fallbackTitle?: string;
  fallbackIcon?: React.ReactNode;
}

export function MenuImage({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fallbackTitle,
  fallbackIcon,
}: MenuImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#0E1530] border border-[#F7B500]/25 text-center p-4 select-none ${className}`}
      >
        <div className="mb-2 text-[#F7B500]">
          {fallbackIcon ?? (
            <svg
              viewBox="0 0 48 48"
              className="w-10 h-10 mx-auto"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 22c0-7.5 6.3-13 14-13s14 5.5 14 13H10z"
                fill="#F7B500"
              />
              <rect x="8" y="25" width="32" height="5" rx="2.5" fill="#FFC21A" />
              <path
                d="M10 33h28c0 4-3 6-7 6H17c-4 0-7-2-7-6z"
                fill="#F7B500"
              />
            </svg>
          )}
        </div>
        {fallbackTitle && (
          <span className="font-display text-sm tracking-wider uppercase text-[#E8E8E8]">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
