import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ResponsiveBackgroundProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  parallaxOffset?: number;
}

const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = ({
  src,
  alt,
  className = '',
  children,
  parallaxOffset = 0
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        wrapperClassName="w-full h-full"
        className="w-full h-full object-cover transform transition-transform duration-300"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        beforeLoad={() => {
          // Pre-load the image at a smaller size for faster initial load
          const img = new Image();
          img.src = `${src}?w=100&blur=50`;
        }}
      />
      {children}
    </div>
  );
};

export default ResponsiveBackground;