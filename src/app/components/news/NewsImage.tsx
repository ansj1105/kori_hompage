import { useState } from 'react';

type NewsImageProps = {
    src?: string;
    alt: string;
    className?: string;
    };

    const FALLBACK_IMAGE = '/images/news/news-fallback.jpg';

    export function NewsImage({ src, alt, className }: NewsImageProps) {
    const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);

    return (
        <img
        src={imageSrc}
        alt={alt}
        className={className}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
        loading="lazy"
        />
    );
    }