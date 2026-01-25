import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CTASection = ({
    title,
    description,
    buttonText = "Request a Workplace Quote",
    buttonLink = "/contact",
    customMarginTop,
    customMarginBottom
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Default to 0 to prevent unwanted overlap on pages that don't request it.
    // Pages must explicitly pass negative margins to create the overlap effect.
    const marginTop = customMarginTop || '0';
    const marginBottom = customMarginBottom || '0';

    return (
        <div style={{
            padding: isMobile ? '4rem 0' : '0',
            marginTop: isMobile ? '0' : marginTop,
            marginBottom: isMobile ? '0' : marginBottom,
            position: 'relative',
            zIndex: 100,
            backgroundColor: isMobile ? 'white' : 'transparent'
        }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    padding: isMobile ? '2rem' : '4rem',
                    boxShadow: isMobile ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: isMobile ? '2rem' : '3rem',
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <div style={{ flex: '1 1 300px', textAlign: isMobile ? 'center' : 'left' }}>
                        <h2 style={{
                            fontSize: isMobile ? '2rem' : '3rem',
                            fontWeight: '800',
                            color: 'var(--color-teal-dark)',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            letterSpacing: '-0.02em'
                        }}>
                            {title}
                        </h2>
                        <p style={{
                            fontSize: '1.15rem',
                            color: '#4b5563',
                            maxWidth: '600px',
                            lineHeight: '1.6',
                            margin: isMobile ? '0 auto' : '0'
                        }}>
                            {description}
                        </p>
                    </div>
                    <div style={{ flex: '0 0 auto', width: isMobile ? '100%' : 'auto' }}>
                        <Button to={buttonLink} variant="primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', width: isMobile ? '100%' : 'auto' }}>
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
