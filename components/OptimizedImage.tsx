import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Hint for responsive selection, e.g. "(min-width: 1024px) 33vw, 100vw" */
  sizes?: string;
  width?: number;
  height?: number;
}

const UNSPLASH_WIDTHS = [480, 768, 1080, 1600];

/** Build a responsive srcset for Unsplash-hosted images */
const buildSrcSet = (src: string): string | undefined => {
  if (!src.includes('images.unsplash.com')) return undefined;
  return UNSPLASH_WIDTHS
    .map(w => {
      const url = new URL(src);
      url.searchParams.set('w', String(w));
      url.searchParams.set('q', '75');
      return `${url.toString()} ${w}w`;
    })
    .join(', ');
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  width,
  height
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const handleLoad = () => setLoaded(true);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    const target = e.currentTarget;
    if (target && !target.src.includes('placeholder') && !target.src.includes('data:')) {
      target.removeAttribute('srcset');
      target.src = `https://placehold.co/800x600/8B5E3C/FFFFFF?text=${encodeURIComponent(alt)}`;
      setError(false);
    }
  };

  const srcSet = buildSrcSet(src);

  return (
    <div className={`relative overflow-hidden bg-brand-dark/10 ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-brand-dark/5" aria-hidden="true" />
      )}
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: 'block' }}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
