import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialCarousel = ({ visibleCount = 1, showSectionWrapper = true, style = {} }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Clean data logic to get the visible items
    // We want to loop efficiently.
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], key: index }); // Add key to avoid duplicate key warnings if length < visibleCount
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    const Content = (
        <div style={{ maxWidth: visibleCount > 1 ? '1200px' : '800px', margin: '0 auto', position: 'relative' }}>

            {/* Navigation Buttons - Left Side */}
            <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                style={{
                    position: 'absolute',
                    left: isMobile ? '-1rem' : '-4rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    zIndex: 10,
                    color: 'var(--color-teal-dark)',
                    transition: 'all 0.2s',
                    ...(!isMobile && showSectionWrapper === false ? { left: '-3rem' } : {}) // Adjust for tighter spaces when embedded
                }}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Navigation Buttons - Right Side */}
            <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                style={{
                    position: 'absolute',
                    right: isMobile ? '-1rem' : '-4rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    zIndex: 10,
                    color: 'var(--color-teal-dark)',
                    transition: 'all 0.2s',
                    ...(!isMobile && showSectionWrapper === false ? { right: '-3rem' } : {})
                }}
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                gap: '1.5rem',
                transition: 'all 0.3s ease'
            }}>
                {visibleTestimonials.map((item) => (
                    <div key={`${item.name}-${item.key}`} style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: isMobile ? '3rem 1.5rem 2rem 1.5rem' : '4rem 2rem 3rem 2rem',
                        borderRadius: '1.5rem',
                        border: '3px solid #dae1e7',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                        minHeight: '300px', // Uniform height
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Quote Icon */}
                        <div style={{
                            position: 'absolute',
                            top: '-1.5rem',
                            left: '1.5rem',
                            backgroundColor: 'white',
                            padding: '0 1rem',
                            color: 'var(--color-teal)'
                        }}>
                            <Quote size={48} fill="currentColor" strokeWidth={0} />
                        </div>

                        <div className="testimonial-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <p style={{
                                marginBottom: '2rem',
                                lineHeight: '1.6',
                                color: '#374151',
                                fontSize: '1.05rem',
                                fontStyle: 'italic',
                                flex: 1
                            }}>
                                "{item.review}"
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <h4 style={{
                                    color: 'var(--color-teal)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.95rem',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0'
                                }}>
                                    {item.name}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (showSectionWrapper) {
        return (
            <section className="section" style={{ backgroundColor: '#f9fafb', padding: '5rem 0', ...style }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>But don’t take our word for it.</p>
                        <h2 style={{ color: 'var(--color-teal-dark)', fontSize: '2.5rem' }}>Here’s what the companies who work with us say.</h2>

                        <div style={{
                            marginTop: '1.5rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'white',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '2rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            border: '1px solid #e5e5e5'
                        }}>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Rated 5.0 on Google</span>
                        </div>
                    </div>
                    {Content}
                </div>
            </section>
        );
    }

    return Content;
};

export default TestimonialCarousel;
