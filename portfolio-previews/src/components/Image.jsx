import React, { useState } from 'react';

const Image = ({ src, alt, className, width = 800, quality = 75, aspectRatio }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Helper to optimize Unsplash URLs
    const getOptimizedUrl = (url) => {
        if (!url) return '';
        if (url.includes('images.unsplash.com')) {
            const baseUrl = url.split('?')[0];
            return `${baseUrl}?w=${width}&q=${quality}&auto=format`;
        }
        return url;
    };

    const optimizedSrc = getOptimizedUrl(src);

    // Construct style with aspect ratio if provided
    const style = aspectRatio ? { aspectRatio: aspectRatio } : {};

    return (
        <div
            className={`image-container overflow-hidden bg-zinc-800 ${className || ''}`}
            style={style}
        >
            <img
                src={optimizedSrc}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default Image;
