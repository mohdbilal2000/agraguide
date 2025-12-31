
import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  priority = false 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority && imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [priority]);

  return (
    <div className={`relative overflow-hidden bg-brand-dark/10 ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-brand-dark/5" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
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
