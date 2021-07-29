export const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
};

export const renderImage = (imageDesktop, imageMobile, alt, className) => (
    <picture>
        <source media='(min-width: 768px)' srcSet={imageDesktop} />
        {className && <img className={className} src={imageMobile} alt={alt} />}
        {!className && <img src={imageMobile} alt={alt} />}
    </picture>
);