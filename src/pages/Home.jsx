import React, { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import TabbedFolder from '../components/ui/TabbedFolder';

import outcomeMoraleImg from '../assets/outcome-morale.png';
import outcomeStressImg from '../assets/outcome-stress.png';
import outcomeFocusImg from '../assets/outcome-focus.png';
import serviceEventImg from '../assets/service-event.png';
import serviceOfficeImg from '../assets/service-office.png';
import heroLogo from '../assets/logos/horizontal low res photos/Workplace_Therapeutics_Horizontal_White_Tagline.png';


import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';
import { CheckCircle2, DollarSign, Clock, Heart, MapPin, Briefcase, Armchair, Bed, Quote, ChevronDown, ChevronUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/global.css';
import HowItWorks from '../components/sections/HowItWorks';
import CTASection from '../components/sections/CTASection';
import TrustedBy from '../components/sections/TrustedBy';
import IndustriesServed from '../components/sections/IndustriesServed';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';

const CurvedEdge = ({ direction = 'left', color = 'white' }) => {
    // left: curve bulges to the left (content is on the right)
    // right: curve bulges to the right (content is on the left)
    const isLeft = direction === 'left';

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            [isLeft ? 'right' : 'left']: 'calc(100% - 1px)',
            width: '15vh', // Responsive width relative to viewport height for consistent curve
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2
        }}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)'
                }}
            >
                <path
                    d="M 100 0 V 100 Q 0 50 100 0 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
};

const MobileTopCurve = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px', // Adjust height for curve depth
            transform: 'translateY(-99%)',
            zIndex: 1, // Ensure it's above hero content effectively
            pointerEvents: 'none'
        }}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block'
                }}
            >
                <path
                    d="M 0 100 Q 50 0 100 100 Z"
                    fill="#f9fafb"
                />
            </svg>
        </div>
    );
};

const Home = () => {
    const [showCitation, setShowCitation] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
        const checkResponsive = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            setIsTablet(width >= 640 && width <= 1100);
        };
        checkResponsive();
        window.addEventListener('resize', checkResponsive);
        return () => window.removeEventListener('resize', checkResponsive);
    }, []);

    useScrollReveal();

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % outcomes.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + outcomes.length) % outcomes.length);
    };

    const outcomes = [
        {
            id: 'morale',
            icon: Heart,
            title: "Boost Morale",
            shortText: "Show your team they are valued.",
            longText: "The Return on Investment: Wellness programs are proven money-savers. Studies show that for every $1 spent on corporate wellness, companies save between $1.50 and $6.00 in healthcare and disability costs.",
            citation: "Data from Don Dillon, \"Workplace Wellness: How About this ROI?\", citing Joan Burton (IAPA) 2008, \"The Business Case for a Healthy Workplace\".",
            image: outcomeMoraleImg
        },
        {
            id: 'stress',
            icon: Clock,
            title: "Reduce Stress",
            shortText: "15 mins to reset and recharge.",
            longText: "The Cost of Stress: Canadian employers lose approximately $20 billion annually due to untreated mental health and stress-related issues. Absenteeism alone costs roughly $3,550 per employee per year.",
            citation: "Data from a press release by the Coalition of Ontario Psychiatrists (Jan 27, 2015).",
            image: outcomeStressImg
        },
        {
            id: 'focus',
            icon: CheckCircle2,
            title: "Increase Focus",
            shortText: "Relieve tension, improve productivity.",
            longText: "Productivity Boost: Research indicates that 15 minutes of chair massage makes employees more alert, faster, and more accurate at tasks (like math computations) than a simple rest break.",
            citation: "Research by Dr. Tiffany Field, published in The International Journal of Neuroscience (1996).",
            image: outcomeFocusImg
        }
    ];

    return (
        <div className="home-page" style={{ backgroundColor: '#f9fafb' }}>
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    padding: 0,
                    zIndex: 1,
                    marginTop: 0,
                    marginBottom: 0
                }}
            >
                <div className="container" style={{ height: '100%', maxWidth: '100%', padding: 0 }}>
                    {/* Hero Tab Structure - REMOVED, now just BG */}
                    <div className="bg-hero" style={{
                        position: 'relative',
                        marginTop: 0,
                        borderRadius: 0,
                        width: '100%',
                        height: '100%'
                    }}>

                        {/* Body Content */}
                        <div className="hero-section-bg text-center" style={{
                            borderRadius: 0,
                            overflow: 'hidden',
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: (!isMobile && !isTablet) ? 'center' : 'center',
                            paddingBottom: '0',
                            paddingTop: '0',
                            marginTop: '0',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div className="container reveal" style={{
                                // Center content
                            }}>
                                <h1 style={{ margin: 0, padding: 0, lineHeight: 1 }}>
                                    <img
                                        src={heroLogo}
                                        alt="Workplace Therapeutics - Corporate Massage Halifax & Wellness"
                                        style={{
                                            maxWidth: '500px',
                                            width: '90%',
                                            margin: (!isMobile && !isTablet) ? '0 auto 6rem auto' : '0 auto 2rem auto',
                                            display: 'block'
                                        }}
                                    />
                                </h1>

                                <p className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                                    On-site chair & table massage for Halifax workplaces and events. We bring everything — from 10–30 min chair massage to 30–90 min table sessions.
                                </p>

                                <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                                    <Button to="/contact" variant="primary">Request a Quote</Button>
                                </div>

                                {/* Hero Scroll Arrow - Mobile Only */}
                                {isMobile && (
                                    <button
                                        onClick={() => {
                                            // Mobile Logic - Snap directly to first card (Boost Morale)
                                            if (mobileMoraleRef.current) {
                                                const yOffset = -80; // Offset for fixed header
                                                const element = mobileMoraleRef.current;
                                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }}
                                        style={{
                                            marginTop: '3rem',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-teal)',
                                            color: 'white',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 10,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                            animation: 'bounce-ripple 2s infinite'
                                        }}
                                        aria-label="Scroll to content"
                                    >
                                        <ChevronDown size={28} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Wrapper to hide sticky hero */}
            <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#f9fafb' }}>

                {/* Why Workplace Massage Section */}
                <section className="section" style={{ marginTop: '0', paddingBottom: '0', paddingTop: 65 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Why Workplace Massage?"
                            tabColor="white"
                            className="why-massage-folder"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : '4rem' }}
                        >
                            {isMobile ? (
                                // Mobile Layout - Vertical Stack inside folder
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                    {outcomes.map((item) => (
                                        <div key={item.id} style={{ marginBottom: '1rem' }}>
                                            <h3 style={{
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                color: 'var(--color-teal-dark)',
                                                marginBottom: '1rem',
                                                textAlign: 'center'
                                            }}>
                                                {item.title}
                                            </h3>

                                            <div style={{
                                                borderRadius: '1rem',
                                                overflow: 'hidden',
                                                marginBottom: '1.5rem',
                                                boxShadow: 'var(--shadow-md)'
                                            }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{
                                                        width: '100%',
                                                        display: 'block',
                                                        aspectRatio: '4/3',
                                                        objectFit: 'cover',
                                                        transform: 'scale(1.02)'
                                                    }}
                                                />
                                            </div>

                                            <div style={{ padding: '0 0.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-orange)', marginBottom: '1rem' }}>
                                                    <item.icon size={24} />
                                                    <span style={{ fontWeight: 600 }}>Key Benefit</span>
                                                </div>
                                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'center', color: 'var(--color-text-main)' }}>
                                                    {item.longText}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Desktop Layout - Carousel inside folder
                                <div className="why-massage-carousel" style={{ position: 'relative', height: '600px', overflow: 'hidden', backgroundColor: 'white', borderRadius: '1rem' }}>
                                    {outcomes.map((item, index) => {
                                        const isVisible = activeSlide >= index;

                                        // Barn Door Logic (Simplified for stability)
                                        // Slide 0: Base.
                                        // Slide 1: Enters from sides over Slide 0.
                                        // Slide 2: Enters from sides over Slide 1.

                                        // If index == 0, always at 0.
                                        // If index > 0, transform based on visibility.

                                        const transformLeft = (index === 0 || isVisible) ? '0' : '-101%';
                                        const transformRight = (index === 0 || isVisible) ? '0' : '101%';
                                        const zIndex = index + 1;

                                        return (
                                            <div key={item.id} style={{
                                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                                zIndex,
                                                pointerEvents: isVisible ? 'auto' : 'none'
                                            }}>
                                                {/* Left Panel - Image */}
                                                <div style={{
                                                    position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                                                    backgroundColor: 'white',
                                                    transform: `translate3d(${transformLeft}, 0, 0)`,
                                                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                                                    borderRight: '1px solid #f0f0f0',
                                                    overflow: 'hidden'
                                                }}>
                                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} />
                                                </div>

                                                {/* Right Panel - Content */}
                                                <div style={{
                                                    position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
                                                    backgroundColor: 'white',
                                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem',
                                                    transform: `translate3d(${transformRight}, 0, 0)`,
                                                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                                                }}>
                                                    <div style={{ color: 'var(--color-orange)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                        <item.icon size={48} />
                                                        <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Key Benefit</span>
                                                    </div>
                                                    <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-teal-dark)', marginBottom: '1.5rem', lineHeight: 1.1 }}>{item.title}</h3>
                                                    <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--color-text-main)' }}>{item.longText}</p>

                                                    <div style={{ marginTop: '2rem' }}>
                                                        {!showCitation[item.id] ? (
                                                            <button
                                                                onClick={() => setShowCitation(prev => ({ ...prev, [item.id]: true }))}
                                                                style={{
                                                                    background: 'transparent',
                                                                    border: '1px solid var(--color-border)',
                                                                    borderRadius: '2rem',
                                                                    padding: '0.5rem 1rem',
                                                                    color: 'var(--color-text-muted)',
                                                                    fontSize: '0.85rem',
                                                                    fontWeight: 500
                                                                }}
                                                            >
                                                                View Research Source
                                                            </button>
                                                        ) : (
                                                            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-subtle)', padding: '1rem', borderRadius: '0.5rem' }}>
                                                                {item.citation}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Controls */}
                                    <div style={{
                                        position: 'absolute', bottom: '2rem', right: '3rem', zIndex: 100,
                                        display: 'flex', gap: '1rem',
                                        padding: '0.5rem', borderRadius: '2rem', backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)'
                                    }}>
                                        <button
                                            onClick={prevSlide}
                                            disabled={activeSlide === 0}
                                            style={{
                                                width: '3.5rem', height: '3.5rem',
                                                borderRadius: '50%', border: 'none',
                                                backgroundColor: activeSlide === 0 ? '#f3f4f6' : 'var(--color-teal)',
                                                color: activeSlide === 0 ? '#9ca3af' : 'white',
                                                cursor: activeSlide === 0 ? 'not-allowed' : 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                transition: 'all 0.2s'
                                            }}
                                            aria-label="Previous Slide"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            disabled={activeSlide === outcomes.length - 1}
                                            style={{
                                                width: '3.5rem', height: '3.5rem',
                                                borderRadius: '50%', border: 'none',
                                                backgroundColor: activeSlide === outcomes.length - 1 ? '#f3f4f6' : 'var(--color-teal)',
                                                color: activeSlide === outcomes.length - 1 ? '#9ca3af' : 'white',
                                                cursor: activeSlide === outcomes.length - 1 ? 'not-allowed' : 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                transition: 'all 0.2s'
                                            }}
                                            aria-label="Next Slide"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </TabbedFolder>
                    </div>
                </section >


                <section className="section" style={{ position: 'relative', zIndex: 20, backgroundColor: 'transparent', marginTop: '-1px', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Our Services"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : 'calc(7rem + 50px)' }}
                        >
                            <h2 className="text-center slide-up delay-200" style={{
                                fontSize: isMobile ? '2.5rem' : '3.5rem',
                                fontWeight: '800',
                                color: 'var(--color-teal-dark)',
                                marginBottom: isMobile ? '4rem' : '3rem',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                marginTop: '1rem' // Added margin since H4 is gone
                            }}>
                                Tailored for your team.
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))',
                                gap: isMobile ? '3rem' : '2rem',
                                alignItems: 'stretch'
                            }}>
                                {/* Office Massage Card */}
                                <div
                                    className="slide-up delay-300"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        backgroundColor: 'white',
                                        boxShadow: 'var(--shadow-md)',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{ height: '300px', width: '100%' }}>
                                        <img
                                            src={serviceOfficeImg}
                                            alt="Office Massage"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        flex: '1',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        justifyContent: 'center',
                                        padding: isMobile ? '2rem' : '1.5rem 1.5rem',
                                        backgroundColor: 'var(--color-teal-soft)'
                                    }}>
                                        <h3 style={{
                                            fontSize: '2.5rem',
                                            marginBottom: isMobile ? '1.5rem' : '0.5rem',
                                            fontWeight: 'bold',
                                            color: 'var(--color-teal-dark)',
                                            lineHeight: 1.2
                                        }}>
                                            Office Massage
                                        </h3>
                                        <p style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.7',
                                            color: 'var(--color-text-main)',
                                            marginBottom: '2rem'
                                        }}>
                                            Bring relaxation directly to your desk. Our certified therapists provide targeted chair massage that fits perfectly into the workday, helping your team feel refreshed and ready to focus.
                                        </p>
                                        <Button to="/services" variant="outline" style={{ alignSelf: 'flex-start' }}>DISCOVER</Button>
                                    </div>
                                </div>

                                {/* Event Massage Card */}
                                <div
                                    className="slide-up delay-400"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        backgroundColor: 'white',
                                        boxShadow: 'var(--shadow-md)',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{ height: '300px', width: '100%' }}>
                                        <img
                                            src={serviceEventImg}
                                            alt="Event Massage"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        flex: '1',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        padding: isMobile ? '2rem' : '1.5rem 1.5rem',
                                        backgroundColor: 'var(--color-orange-soft)'
                                    }}>
                                        <h3 style={{
                                            fontSize: '2.5rem',
                                            marginBottom: isMobile ? '1.5rem' : '0.5rem',
                                            fontWeight: 'bold',
                                            color: 'var(--color-orange-dark)',
                                            lineHeight: 1.2
                                        }}>
                                            Event Massage
                                        </h3>
                                        <p style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.7',
                                            color: 'var(--color-text-main)',
                                            marginBottom: '2rem'
                                        }}>
                                            Make your next event unforgettable with professional seated chair massage—optional privacy screens available. Perfect for trade shows, conferences, and celebrations, we bring everything needed to create a memorable experience.
                                        </p>
                                        <Button to="/services" variant="outline" style={{ alignSelf: 'flex-start', color: 'var(--color-orange)', borderColor: 'var(--color-orange)' }}>DISCOVER</Button>
                                    </div>
                                </div>
                            </div>
                        </TabbedFolder>
                    </div>
                </section>

                {/* Industries Served */}
                <section className="section" style={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Industries We Serve"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : '15rem' }}
                        >
                            <IndustriesServed />
                        </TabbedFolder>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="section" style={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Trusted Partners"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : '25rem' }}
                        >
                            <TrustedBy />
                        </TabbedFolder>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section" style={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="How It Works"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : '40rem' }}
                        >
                            <HowItWorks isMobile={isMobile} />
                        </TabbedFolder>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section" style={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Testimonials"

                            textColor="var(--color-teal-dark)"
                            tabStyle={{ marginLeft: isMobile ? '1rem' : '50rem' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: 'white',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '2rem',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    border: '1px solid #e5e5e5'
                                }}>
                                    <span style={{ fontSize: '1.25rem' }}>⭐⭐⭐⭐⭐</span>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Rated 5.0 on Google</span>
                                </div>
                            </div>
                            <TestimonialCarousel visibleCount={isMobile ? 1 : 2} showSectionWrapper={false} />
                        </TabbedFolder>
                    </div>
                </section>

                {/* CTA */}
                <section className="section" style={{ backgroundColor: 'transparent', paddingTop: 0, paddingBottom: 0 }}>
                    <div className="container">
                        <TabbedFolder
                            title="Get Started"


                            tabStyle={{ marginLeft: isMobile ? '1rem' : '61rem' }}
                        >
                            <CTASection
                                title="Well-Being That Pays Off"
                                description="Support your team’s physical and mental health with on-site massage programs proven to reduce stress, improve engagement, and elevate workplace culture."
                                variant="clean"
                            />
                        </TabbedFolder>
                    </div>
                </section>
            </div >

        </div >
    );
};


export default Home;
