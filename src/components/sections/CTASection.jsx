import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CTASection = ({
    title,
    description,
    buttonText = "Request a Workplace Quote",
    buttonLink = "/contact",
    customMarginTop,
    customMarginBottom,
    centeredOverlap = false // New prop to enable dynamic centering
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const [dynamicMargins, setDynamicMargins] = useState({ marginTop: 0, marginBottom: 0 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Effect to calculate margins based on height if centeredOverlap is true and not mobile
    useEffect(() => {
        if (!centeredOverlap || isMobile || !containerRef.current) {
            return;
        }

        const updateMargins = () => {
            if (containerRef.current) {
                const height = containerRef.current.offsetHeight;
                // Center the element on the boundary: shift up by 50% of its height
                const halfHeight = height / 2;
                setDynamicMargins({
                    marginTop: `-${halfHeight}px`,
                    marginBottom: `-${halfHeight}px`
                });
            }
        };

        // Initial calculation
        updateMargins();

        // Re-calculate on resize
        const observer = new ResizeObserver(updateMargins);
        observer.observe(containerRef.current);
        window.addEventListener('resize', updateMargins); // Fallback/ensure window resize triggers it too

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateMargins);
        };
    }, [centeredOverlap, isMobile]);

    // Determine final margins
    // If mobile: 0
    // If centeredOverlap and Desktop: use dynamicMargins
    // If custom margins provided and NOT centeredOverlap: use custom
    // Else: 0

    let appliedMarginTop = '0';
    let appliedMarginBottom = '0';

    if (!isMobile) {
        if (centeredOverlap) {
            appliedMarginTop = dynamicMargins.marginTop;
            appliedMarginBottom = dynamicMargins.marginBottom;
        } else {
            appliedMarginTop = customMarginTop || '0';
            appliedMarginBottom = customMarginBottom || '0';
        }
    }

    return (
        <div style={{
            padding: isMobile ? '4rem 0' : '0',
            marginTop: appliedMarginTop,
            marginBottom: appliedMarginBottom,
            position: 'relative',
            zIndex: 100,
            backgroundColor: isMobile ? 'white' : 'transparent',
            transition: 'margin 0.1s ease-out' // Smooth transition for resize
        }}>
            <div className="container" ref={containerRef}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    padding: isMobile ? '2rem' : '4rem',
                    boxShadow: isMobile ? 'none' : '0 -15px 30px -5px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
