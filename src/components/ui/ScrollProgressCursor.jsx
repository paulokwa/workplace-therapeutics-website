import React, { useEffect, useRef, useState } from 'react';

const ScrollProgressCursor = ({ progress, isVisible }) => {
    const cursorRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    // Smooth mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isVisible) {
                // Direct DOM manipulation for performance
                if (cursorRef.current) {
                    cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                }
            }
        };

        if (isVisible) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isVisible]);

    // Circle properties
    const radius = 40;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '0', // Zero width/height wrapper, content centers itself
                height: '0',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
                // Center the cursor on the mouse
                marginLeft: '-50px',
                marginTop: '-50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Background Circle */}
                <svg
                    height={radius * 2 + 20} // extra space for stroke
                    width={radius * 2 + 20}
                    style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}
                >
                    <circle
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth={stroke}
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius + 10}
                        cy={radius + 10}
                    />
                    {/* Progress Circle */}
                    <circle
                        stroke="var(--color-teal)" // Use theme color
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.1s linear' }}
                        fill="rgba(0,0,0,0.3)" // Dark semi-transparent background for text legibility
                        r={normalizedRadius}
                        cx={radius + 10}
                        cy={radius + 10}
                    />
                </svg>

                {/* Text */}
                <span style={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Scroll
                </span>
            </div>
        </div>
    );
};

export default ScrollProgressCursor;
