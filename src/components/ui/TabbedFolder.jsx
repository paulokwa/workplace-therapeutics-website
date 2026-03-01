import React from 'react';

const TabbedFolder = ({
    title,
    children,
    tabColor = '#ffffff',
    bodyColor = '#ffffff',
    textColor = 'var(--color-text-main)',
    className = '',
    style = {},
    tabStyle = {},
    isMobile = false,
    mobileBgColor = null
}) => {
    if (isMobile) {
        return (
            <div className={`tabbed-folder-mobile ${className}`} style={{ 
                backgroundColor: mobileBgColor || bodyColor, 
                padding: '4rem 1rem',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                position: 'relative',
                zIndex: 1,
                ...style 
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: textColor === 'white' ? 'white' : 'var(--color-teal-dark)',
                        marginBottom: '2rem',
                        textAlign: 'center'
                    }}>
                        {title}
                    </h2>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={`tabbed-folder ${className}`} style={{ ...style, marginBottom: '4rem' }}>
            {/* Folder Tab */}
            <div style={{
                display: 'inline-block',
                backgroundColor: tabColor,
                padding: '0.75rem 2.5rem 0.5rem 2rem',
                borderRadius: '1rem 1rem 0 0',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                borderLeft: '1px solid rgba(0,0,0,0.05)',
                borderRight: '1px solid rgba(0,0,0,0.05)',
                borderBottom: 'none',
                position: 'relative',
                zIndex: 2,
                top: '1px', // Overlap border
                marginLeft: '1rem', // Indent tab slightly
                boxShadow: '0 -2px 5px rgba(0,0,0,0.02)',
                ...tabStyle
            }}>
                <h3 style={{
                    margin: 0,
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: textColor,
                    fontFamily: 'var(--font-heading)'
                }}>
                    {title}
                </h3>
            </div>

            {/* Folder Body */}
            <div style={{
                backgroundColor: bodyColor,
                borderRadius: '0 1rem 1rem 1rem',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                borderBottomLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
                padding: '3rem 2rem',
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                zIndex: 1,
                ...style // Allow overrides (e.g. padding: 0 for Hero)
            }}>
                {children}
            </div>
        </div>
    );
};

export default TabbedFolder;
