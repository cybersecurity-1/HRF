import React, { useState, useRef, useEffect } from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // If the image is already loaded (from cache), set isLoaded immediately
    if (img.complete && img.naturalWidth !== 0) {
      setIsLoaded(true);
    }

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => {
      setHasError(true);
      setIsLoaded(true);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder - only show briefly */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded" />
      )}
      
      <img
        ref={imgRef}
        src={hasError ? "/assets/images/no_image.png" : src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}

export default Image;
